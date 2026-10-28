import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"
import { fromHtml } from "hast-util-from-html"
import fs from "fs"
import path from "path"
import YAML from "yaml"

export interface BlochOptions {
  staticDir?: string
}

function getTextContent(node: any): string {
  if (!node) return ""
  if (node.type === "text") return node.value || ""
  if (Array.isArray(node.children)) {
    return node.children.map(getTextContent).join("")
  }
  return ""
}

function isBlochNode(node: any): { isBloch: boolean; codeNode?: any } {
  if (node.tagName === "pre") {
    const code = node.children?.find((c: any) => c.tagName === "code")
    if (code) {
      const cls = Array.isArray(code.properties?.className) ? code.properties.className : []
      const dataLang = code.properties?.["data-language"] || node.properties?.["data-language"]
      if (cls.includes("language-bloch") || dataLang === "bloch") {
        return { isBloch: true, codeNode: code }
      }
    }
  }
  if (node.tagName === "figure") {
    const pre = node.children?.find((c: any) => c.tagName === "pre")
    if (pre) {
      const code = pre.children?.find((c: any) => c.tagName === "code") || pre
      const cls = Array.isArray(code.properties?.className) ? code.properties.className : []
      const dataLang = code.properties?.["data-language"] || pre.properties?.["data-language"]
      if (cls.includes("language-bloch") || dataLang === "bloch") {
        return { isBloch: true, codeNode: code }
      }
    }
  }
  return { isBloch: false }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export const Bloch: QuartzTransformerPlugin<BlochOptions | undefined> = (opts?: BlochOptions) => {
  const staticDir = opts?.staticDir ?? path.join(process.cwd(), "quartz", "static", "bloch")

  return {
    name: "Bloch",
    htmlPlugins() {
      return [
        () => async (tree: Root) => {
          const candidates: { parent: any; index: number; codeNode: any }[] = []

          visit(tree, "element", (node: any, index: any, parent: any) => {
            const check = isBlochNode(node)
            if (check.isBloch && parent && typeof index === "number") {
              candidates.push({ parent, index, codeNode: check.codeNode })
            }
          })

          if (candidates.length === 0) return

          let counter = 0
          for (const { parent, index, codeNode } of candidates) {
            counter++
            const rawCode = getTextContent(codeNode).trim()
            let config: Record<string, any> = {}

            try {
              config = (YAML.parse(rawCode) as Record<string, any>) || {}
            } catch (err) {
              console.warn(`[Bloch] Failed to parse YAML config: ${err instanceof Error ? err.message : String(err)}`)
              config = { error: String(err) }
            }

            const title = config.title ? escapeHtml(String(config.title)) : "Bloch Sphere"
            const stateLabel = config.stateLabel ? escapeHtml(String(config.stateLabel)) : "|ψ⟩"
            const hasAnimation = Boolean(config.animation || config.gate || config.axis)
            const isLooping = Boolean(config.animation?.loop ?? config.loop ?? false)

            let badgeText = stateLabel
            if (config.gate) {
              badgeText = `Gate: ${config.gate.toUpperCase()}`
            } else if (config.animation?.gate) {
              badgeText = `Gate: ${config.animation.gate.toUpperCase()}`
            }

            const jsonAttr = escapeHtml(JSON.stringify(config))
            const widgetId = `bloch-widget-${Date.now()}-${counter}`

            const playButtonsHtml = hasAnimation
              ? `
              <button class="bloch-btn" data-action="play" title="Play animation" aria-label="Play">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <button class="bloch-btn" data-action="restart" title="Restart animation" aria-label="Restart">
                <svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
              </button>
              <button class="bloch-btn ${isLooping ? "active" : ""}" data-action="loop" title="Toggle loop" aria-label="Loop">
                <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              </button>
            `
              : ""

            const containerHtml = `
              <div class="bloch-container" id="${widgetId}" data-bloch="${jsonAttr}">
                <div class="bloch-header">
                  <span class="bloch-title">${title}</span>
                  <span class="bloch-badge">${badgeText}</span>
                </div>
                <div class="bloch-viewport">
                  <div class="bloch-labels-layer"></div>
                  <div class="bloch-controls">
                    ${playButtonsHtml}
                    <button class="bloch-btn" data-action="reset-view" title="Reset View" aria-label="Reset View">
                      <svg viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
                    </button>
                  </div>
                  <div class="bloch-info">
                    <div class="bloch-info-row">
                      <div class="bloch-info-item"><span class="bloch-info-label">θ:</span> <span class="bloch-info-val">-</span></div>
                      <div class="bloch-info-item"><span class="bloch-info-label">φ:</span> <span class="bloch-info-val">-</span></div>
                    </div>
                    <div class="bloch-info-state">${stateLabel}</div>
                  </div>
                </div>
              </div>
            `

            const parsed = fromHtml(containerHtml.trim(), { fragment: true })
            const elementNode = parsed.children?.find((c: any) => c.type === "element") || parsed.children?.[0]
            if (elementNode) {
              parent.children[index] = elementNode
            }
          }
        },
      ]
    },
    externalResources() {
      try {
        const cssPath = path.join(staticDir, "bloch.css")
        const threePath = path.join(staticDir, "three.min.js")
        const controlsPath = path.join(staticDir, "OrbitControls.js")
        const runtimePath = path.join(staticDir, "bloch-runtime.js")

        const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf-8") : ""
        const threeJs = fs.existsSync(threePath) ? fs.readFileSync(threePath, "utf-8") : ""
        const controlsJs = fs.existsSync(controlsPath) ? fs.readFileSync(controlsPath, "utf-8") : ""
        const runtimeJs = fs.existsSync(runtimePath) ? fs.readFileSync(runtimePath, "utf-8") : ""

        const fullScript = `${threeJs}\n${controlsJs}\n${runtimeJs}`

        return {
          css: [
            {
              content: css,
              inline: true,
              spaPreserve: true,
            },
          ],
          js: [
            {
              script: fullScript,
              contentType: "inline",
              loadTime: "afterDOMReady",
              spaPreserve: true,
            },
          ],
        }
      } catch (err) {
        console.warn(`[Bloch] Failed to load external resources: ${err}`)
        return {}
      }
    },
  }
}
