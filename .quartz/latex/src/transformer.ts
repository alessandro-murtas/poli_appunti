import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax/svg";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { toText } from "hast-util-to-text";
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler";
import { SKIP, visitParents } from "unist-util-visit-parents";
import type { QuartzTransformerPlugin } from "@quartz-community/types";
import type { KatexOptions } from "katex";

interface MathjaxTexOptions {
  macros?: Record<string, string | unknown[]>;
  [key: string]: unknown;
}

interface MathjaxOptions {
  tex?: MathjaxTexOptions;
  [key: string]: unknown;
}

interface TypstOptions {
  errorColor?: string;
  preamble?: string;
  [key: string]: unknown;
}

export type Args = boolean | number | string | null;

interface MacroType {
  [key: string]: string | Args[];
}

export interface LatexOptions {
  renderEngine: "katex" | "mathjax" | "typst";
  customMacros: MacroType;
  katexOptions: Omit<KatexOptions, "macros" | "output">;
  mathJaxOptions: Omit<MathjaxOptions, "macros">;
  typstOptions: TypstOptions;
}

let typstCompiler: NodeCompiler | undefined;

async function renderWithMathjax(
  scope: any,
  file: any,
  options: MathjaxOptions,
  macros: MacroType,
) {
  const root = { type: "root", children: [scope] };
  const transform = rehypeMathjax({
    ...options,
    tex: {
      ...(options.tex ?? {}),
      macros,
    },
  } as any) as any;
  await transform(root, file);
  return root.children;
}

function rehypeTypst(
  options: TypstOptions = {},
) {
  const mathJaxOptions = (options.mathJaxOptions as MathjaxOptions | undefined) ?? {};
  const macros = (options.macros as MacroType | undefined) ?? {};
  return async (tree: any, file: any) => {
    const matches: any[] = [];
    visitParents(tree, "element", (...args: any[]) => {
      matches.push(args);
      return tree;
    });

    await Promise.all(
      matches.map(async ([element, parents]) => {
        const classes = Array.isArray(element.properties?.className)
          ? element.properties.className
          : [];
        const languageMath = classes.includes("language-math");
        const mathDisplay = classes.includes("math-display");
        const mathInline = classes.includes("math-inline");
        if (!languageMath && !mathDisplay && !mathInline) return;

        let parent = parents[parents.length - 1];
        let scope = element;
        let displayMode = mathDisplay;
        if (element.tagName === "code" && languageMath && parent?.tagName === "pre") {
          scope = parent;
          parent = parents[parents.length - 2];
          displayMode = true;
        }
        if (!parent) return;

        const code = toText(scope, { whitespace: "pre" });
        try {
          const compiler = (typstCompiler ??= NodeCompiler.create());
          const preamble = options.preamble ? `${options.preamble}\n` : "";
          const template = displayMode
            ? `${preamble}#set page(height: auto, width: auto, margin: 0pt)\n\n$ ${code} $`
            : `${preamble}#set page(height: auto, width: auto, margin: 0pt)\n\n#let s = state("t", (:))\n#let pin(t) = context {\n  let width = measure(line(length: here().position().y)).width\n  s.update(it => it.insert(t, width) + it)\n}\n#show math.equation: it => {\n  box(it, inset: (top: 0.5em, bottom: 0.5em))\n}\n$pin("l1")${code}$\n#context [\n  #metadata(s.final().at("l1")) <label>\n]`;
          const compiled = compiler.compile({ mainFileContent: template });
          if (!compiled.result) throw new Error("Typst failed to compile the equation");

          const root = fromHtmlIsomorphic(compiler.svg(compiled.result), { fragment: true });
          const svg = root.children[0] as any;
          const height = Number.parseFloat(svg.properties.dataHeight);
          const width = Number.parseFloat(svg.properties.dataWidth);
          const query = displayMode
            ? []
            : compiler.query(compiled.result, { selector: "<label>" });
          const baselinePosition = query.length > 0 ? Number.parseFloat(query[0].value.slice(0, -2)) : 11;
          svg.properties.style = `vertical-align: -${(height - baselinePosition) / 11}em;`;
          svg.properties.height = `${height / 11}em`;
          svg.properties.width = `${width / 11}em`;
          if (displayMode) {
            svg.properties.style += "; display: block; margin: 0 auto;";
          } else {
            svg.properties.className = ["typst-inline"];
          }
          parent.children.splice(parent.children.indexOf(scope), 1, ...root.children);
        } catch (typstError) {
          try {
            const fallback = await renderWithMathjax(scope, file, mathJaxOptions, macros);
            parent.children.splice(parent.children.indexOf(scope), 1, ...fallback);
          } catch (mathJaxError) {
            file.message("Could not render math with Typst or MathJax", {
              cause: mathJaxError,
              note: String(typstError),
            });
            parent.children.splice(parent.children.indexOf(scope), 1, {
              type: "element",
              tagName: "span",
              properties: {
                className: ["typst-error"],
                style: `color:${options.errorColor ?? "#cc0000"}`,
                title: String(mathJaxError),
              },
              children: [{ type: "text", value: code }],
            });
          }
        }
        return SKIP;
      }),
    );
  };
}

export const Latex: QuartzTransformerPlugin<Partial<LatexOptions>> = (opts) => {
  const engine = opts?.renderEngine ?? "katex";
  const macros = opts?.customMacros ?? {};
  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath];
    },
    htmlPlugins() {
      switch (engine) {
        case "katex": {
          return [[rehypeKatex, { output: "html", macros, ...(opts?.katexOptions ?? {}) }]];
        }
        case "typst": {
          return [
            [
              rehypeTypst,
              {
                ...(opts?.typstOptions ?? {}),
                mathJaxOptions: opts?.mathJaxOptions ?? {},
                macros,
              },
            ],
          ];
        }
        default:
        case "mathjax": {
          return [
            [
              rehypeMathjax,
              {
                ...(opts?.mathJaxOptions ?? {}),
                tex: {
                  ...(opts?.mathJaxOptions?.tex ?? {}),
                  macros,
                },
              },
            ],
          ];
        }
      }
    },
    externalResources() {
      switch (engine) {
        case "katex":
          return {
            css: [{ content: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" }],
            js: [
              {
                src: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/copy-tex.min.js",
                loadTime: "afterDOMReady",
                contentType: "external",
              },
            ],
          };
      }
    },
  };
};
