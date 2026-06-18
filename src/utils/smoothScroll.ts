import type { MouseEvent } from "react"

export function smoothScrollToHash(
  event: MouseEvent<HTMLAnchorElement>,
  hash: string,
) {
  const target = document.querySelector(hash)

  if (!(target instanceof HTMLElement)) {
    return
  }

  event.preventDefault()

  const startY = window.scrollY
  const headerOffset = 96
  const targetY =
    target.getBoundingClientRect().top + window.scrollY - headerOffset
  const distance = targetY - startY
  const duration = 720
  const startTime = performance.now()

  function easeOutCubic(progress: number) {
    return 1 - Math.pow(1 - progress, 3)
  }

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutCubic(progress)

    window.scrollTo(0, startY + distance * easedProgress)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
      return
    }

    window.history.pushState(null, "", hash)
  }

  requestAnimationFrame(animateScroll)
}
