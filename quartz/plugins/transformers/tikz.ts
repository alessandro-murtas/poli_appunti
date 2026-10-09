import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"
import { fromHtml } from "hast-util-from-html"
import crypto from "crypto"
import fs from "fs"
import path from "path"
import { Mutex } from "async-mutex"
import tikzjax from "node-tikzjax"

export interface TikzOptions {
  showConsole?: boolean
  tikzLibraries?: string
  texPackages?: Record<string, string>
  addToPreamble?: string
  cacheDir?: string
}

const mutex = new Mutex()
// node-tikzjax exports tex2svg as default or default.default depending on ESM/CJS loader
const tex2svg = (tikzjax as any).default?.default || (tikzjax as any).default || tikzjax

function normalizeTikz(source: string): string {
  let code = source.trim()
  if (!code.includes("\\begin{document}")) {
    const match = code.match(/\\begin\{(?:tikzpicture|tikzcd)\}/)
    if (match && match.index !== undefined) {
      code = `${code.slice(0, match.index)}\n\\begin{document}\n${code.slice(match.index)}`
    } else {
      code = `\\begin{document}\n${code}`
    }
  }
  if (!code.includes("\\end{document}")) {
    code += "\n\\end{document}"
  }
  return code
}

function getTextContent(node: any): string {
  if (!node) return ""
  if (node.type === "text") return node.value || ""
  if (Array.isArray(node.children)) {
    return node.children.map(getTextContent).join("")
  }
  return ""
}

function isTikzNode(node: any): { isTikz: boolean; codeNode?: any } {
  if (node.tagName === "pre") {
    const code = node.children?.find((c: any) => c.tagName === "code")
    if (code) {
      const cls = Array.isArray(code.properties?.className) ? code.properties.className : []
      const dataLang = code.properties?.["data-language"] || node.properties?.["data-language"]
      if (
        cls.includes("language-tikz") ||
        cls.includes("language-tikzcd") ||
        dataLang === "tikz" ||
        dataLang === "tikzcd"
      ) {
        return { isTikz: true, codeNode: code }
      }
    }
  }
  if (node.tagName === "figure") {
    const pre = node.children?.find((c: any) => c.tagName === "pre")
    if (pre) {
      const code = pre.children?.find((c: any) => c.tagName === "code") || pre
      const cls = Array.isArray(code.properties?.className) ? code.properties.className : []
      const dataLang = code.properties?.["data-language"] || pre.properties?.["data-language"]
      if (
        cls.includes("language-tikz") ||
        cls.includes("language-tikzcd") ||
        dataLang === "tikz" ||
        dataLang === "tikzcd"
      ) {
        return { isTikz: true, codeNode: code }
      }
    }
  }
  return { isTikz: false }
}

export const Tikz: QuartzTransformerPlugin<TikzOptions | undefined> = (opts?: TikzOptions) => {
  const cacheDir = opts?.cacheDir ?? path.join(process.cwd(), ".quartz-cache", "tikz")

  return {
    name: "Tikz",
    htmlPlugins() {
      return [
        () => async (tree: Root) => {
          const candidates: { parent: any; index: number; codeNode: any }[] = []

          visit(tree, "element", (node: any, index: any, parent: any) => {
            const check = isTikzNode(node)
            if (check.isTikz && parent && typeof index === "number") {
              candidates.push({ parent, index, codeNode: check.codeNode })
            }
          })

          if (candidates.length === 0) return

          for (const { parent, index, codeNode } of candidates) {
            const rawCode = getTextContent(codeNode)
            const normalizedCode = normalizeTikz(rawCode)
            const hash = crypto.createHash("sha256").update(normalizedCode).digest("hex")
            const cacheFile = path.join(cacheDir, `${hash}.svg`)

            try {
              let svg: string
              if (fs.existsSync(cacheFile)) {
                svg = fs.readFileSync(cacheFile, "utf-8")
              } else {
                const release = await mutex.acquire()
                try {
                  if (fs.existsSync(cacheFile)) {
                    svg = fs.readFileSync(cacheFile, "utf-8")
                  } else {
                    svg = await tex2svg(normalizedCode, {
                      showConsole: opts?.showConsole ?? false,
                      tikzLibraries: opts?.tikzLibraries,
                      texPackages: opts?.texPackages,
                      addToPreamble: opts?.addToPreamble,
                    })
                    if (!fs.existsSync(cacheDir)) {
                      fs.mkdirSync(cacheDir, { recursive: true })
                    }
                    fs.writeFileSync(cacheFile, svg, "utf-8")
                  }
                } finally {
                  release()
                }
              }

              const parsed = fromHtml(`<div class="tikz-container">${svg}</div>`, {
                fragment: true,
              })
              if (parsed.children && parsed.children.length > 0) {
                parent.children[index] = parsed.children[0]
              }
            } catch (err) {
              console.warn(
                `[TikZ] Failed to compile TikZ diagram: ${err instanceof Error ? err.message : String(err)}`,
              )
              const errorMsg = err instanceof Error ? err.message : String(err)
              const escapedError = errorMsg
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
              const errorHtml = `<div class="tikz-container tikz-error" style="border: 1px solid #e53e3e; padding: 1rem; border-radius: 4px; background: rgba(229, 62, 62, 0.1);"><p style="color: #e53e3e; font-weight: bold; margin: 0 0 0.5rem 0;">TikZ Compilation Error</p><pre style="margin: 0; background: transparent; border: none;"><code>${escapedError}</code></pre></div>`
              const parsed = fromHtml(errorHtml, { fragment: true })
              if (parsed.children && parsed.children.length > 0) {
                parent.children[index] = parsed.children[0]
              }
            }
          }
        },
      ]
    },
    externalResources() {
      return {
        css: [
          {
            content: "https://cdn.jsdelivr.net/npm/node-tikzjax@1.0.5/css/fonts.css",
            spaPreserve: true,
          },
        ],
      }
    },
  }
}
