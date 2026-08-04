// ── Google Analytics ─────────────────────────────────────────────────────────
// The gtag snippet is injected at build time from `.figma/make/site.json`:
//
//   "analytics": { "googleAnalyticsId": "G-XXXXXXXXXX" }
//
// (see figmaSiteConfiguration in vite.config.ts). Until that ID is set — and
// whenever a visitor blocks analytics — window.gtag is undefined, so every
// call below degrades to a no-op. Nothing here needs to change to switch
// tracking on; only site.json does.

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  window.gtag?.('event', event, params)
}

// GA4's built-in scroll measurement only fires once, at 90%. These marks tell
// us where visitors actually stop reading.
const SCROLL_MARKS = [25, 50, 75, 100]

export function useScrollDepth() {
  useEffect(() => {
    const reached = new Set<number>()
    let frame = 0

    const measure = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return // page fits on one screen — nothing to measure

      const percent = (window.scrollY / scrollable) * 100
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !reached.has(mark)) {
          reached.add(mark)
          track('scroll_depth', { percent_scrolled: mark })
        }
      }
      if (reached.size === SCROLL_MARKS.length) window.removeEventListener('scroll', onScroll)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(measure)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    measure() // catch reloads that restore a scrolled position

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
