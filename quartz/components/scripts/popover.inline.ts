import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null

function extractSectionContent(headingEl: HTMLElement): HTMLElement[] {
  const elements: HTMLElement[] = [headingEl]
  const level = parseInt(headingEl.tagName.replace(/^H/i, ""), 10)

  let next = headingEl.nextElementSibling as HTMLElement | null
  while (next) {
    const isHeading = /^H[1-6]$/i.test(next.tagName)
    if (isHeading) {
      const nextLevel = parseInt(next.tagName.replace(/^H/i, ""), 10)
      if (!isNaN(nextLevel) && !isNaN(level) && nextLevel <= level) {
        break
      }
    }
    elements.push(next)
    next = next.nextElementSibling as HTMLElement | null
  }

  return elements
}

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = (activeAnchor = this)
  if (link.dataset.noPopover === "true") {
    return
  }

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(link, popoverElement, {
      strategy: "fixed",
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
    })
    Object.assign(popoverElement.style, {
      transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
    })
  }

  function showPopover(popoverElement: HTMLElement) {
    clearActivePopover()
    popoverElement.classList.add("active-popover")
    setPosition(popoverElement as HTMLElement)

    // When displaying a full-page preview, maintain heading offset scrolling
    if (hash !== "" && !popoverElement.dataset.isSection) {
      const inner = popoverElement.querySelector(".popover-inner") as HTMLElement | null
      if (inner) {
        const targetAnchor = `#popover-internal-${hash.slice(1)}`
        const heading = inner.querySelector(targetAnchor) as HTMLElement | null
        if (heading) {
          inner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
        }
      }
    }
  }

  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""

  // Differentiate cache key so #section previews don't overwrite full page previews
  const popoverId = `popover-${link.pathname}${hash ? `-${hash.slice(1)}` : ""}`
  const prevPopoverElement = document.getElementById(popoverId)

  if (prevPopoverElement) {
    showPopover(prevPopoverElement as HTMLElement)
    return
  }

  const response = await fetchCanonical(targetUrl).catch((err) => {
    console.error(err)
  })

  if (!response) return
  const rawContentType = response.headers.get("Content-Type")
  if (!rawContentType) return
  const [contentType] = rawContentType.split(";")
  const [contentTypeCategory, typeInfo] = contentType.split("/")

  const popoverElement = document.createElement("div")
  popoverElement.id = popoverId
  popoverElement.classList.add("popover")
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverInner.dataset.contentType = contentType ?? undefined
  popoverElement.appendChild(popoverInner)

  switch (contentTypeCategory) {
    case "image":
      const img = document.createElement("img")
      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname
      popoverInner.appendChild(img)
      break
    case "application":
      switch (typeInfo) {
        case "pdf":
          const pdf = document.createElement("iframe")
          pdf.src = targetUrl.toString()
          popoverInner.appendChild(pdf)
          break
        default:
          break
      }
      break
    default:
      const contents = await response.text()
      const html = p.parseFromString(contents, "text/html")
      normalizeRelativeURLs(html, targetUrl)

      // 1. Gather all SVG glyph defs BEFORE prefixing or extracting content
      const allDefs = html.querySelectorAll("defs")
      const defsWrapper = html.createElementNS("http://www.w3.org/2000/svg", "svg")
      defsWrapper.setAttribute(
        "style",
        "position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none;",
      )
      defsWrapper.setAttribute("aria-hidden", "true")
      allDefs.forEach((def) => {
        defsWrapper.appendChild(def.cloneNode(true))
      })

      // 2. Prefix IDs to avoid collisions, but EXCLUDE SVG defs/symbols/glyphs
      // so that Typst and MathJax <use href="#..."> references stay intact
      html.querySelectorAll("[id]").forEach((el) => {
        // Do not rename SVG glyph IDs (e.g. paths, glyphs, defs, or anything inside an svg)
        if (el.closest("svg")) {
          return
        }
        el.id = `popover-internal-${el.id}`
      })

      const targetId = hash !== "" ? `popover-internal-${hash.slice(1)}` : null
      const targetElement = targetId ? (html.getElementById(targetId) as HTMLElement | null) : null

      if (targetElement) {
        popoverElement.dataset.isSection = "true"
        const sectionNodes = extractSectionContent(targetElement)
        sectionNodes.forEach((node) => popoverInner.appendChild(node))
      } else {
        const elts = [...html.getElementsByClassName("popover-hint")]
        if (elts.length === 0) return
        elts.forEach((elt) => popoverInner.appendChild(elt))
      }

      // 3. Prepend the captured SVG definitions so <use href="#..."> resolves properly
      popoverInner.prepend(defsWrapper)
  }

  if (document.getElementById(popoverId)) {
    return
  }

  document.body.appendChild(popoverElement)
  if (activeAnchor !== this) {
    return
  }

  showPopover(popoverElement)
}

function clearActivePopover() {
  activeAnchor = null
  const allPopoverElements = document.querySelectorAll(".popover")
  allPopoverElements.forEach((popoverElement) => popoverElement.classList.remove("active-popover"))
}

function setupPopovers() {
  const links = [...document.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseleave", clearActivePopover)
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", clearActivePopover)
    })
  }
}

document.addEventListener("nav", setupPopovers)
document.addEventListener("render", setupPopovers)