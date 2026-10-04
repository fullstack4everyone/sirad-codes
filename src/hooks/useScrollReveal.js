import { useLayoutEffect } from 'react'

// Elements that fade up when they scroll into view.
const REVEAL_TARGETS = [
  '.hero__content',
  '.hero__visual',
  '.section-header',
  '.service-card',
  '.project-card',
  '.process-step',
  '.about__story',
  '.about__skills',
  '.why__grid',
  '.cta__panel',
  '.contact__links',
  '.contact__form',
].join(', ')

const DURATION = 500
const STAGGER = 80
const MAX_STAGGER_STEPS = 3
const EASE = 'cubic-bezier(0.2, 0.7, 0.2, 1)'

export function useScrollReveal() {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      return undefined
    }

    const elements = Array.from(document.querySelectorAll(REVEAL_TARGETS))
    const timers = []

    const clearStyles = (element) => {
      element.style.removeProperty('opacity')
      element.style.removeProperty('transform')
      element.style.removeProperty('transition')
    }

    // Hide each element before the browser paints.
    elements.forEach((element) => {
      const item = element.closest('li') ?? element
      const index = item.parentElement
        ? Array.from(item.parentElement.children).indexOf(item)
        : 0
      const delay = Math.min(index, MAX_STAGGER_STEPS) * STAGGER

      element.dataset.revealDelay = String(delay)
      element.style.opacity = '0'
      element.style.transform = 'translateY(16px)'
      element.style.transition = `opacity ${DURATION}ms ${EASE} ${delay}ms, transform ${DURATION}ms ${EASE} ${delay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const element = entry.target
          const delay = Number(element.dataset.revealDelay) || 0

          element.style.opacity = '1'
          element.style.transform = 'none'
          observer.unobserve(element)

          // Remove the animation styles once finished,
          // so hover effects work normally.
          timers.push(
            window.setTimeout(() => clearStyles(element), DURATION + delay + 50),
          )
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      timers.forEach((timer) => window.clearTimeout(timer))
      elements.forEach((element) => {
        clearStyles(element)
        delete element.dataset.revealDelay
      })
    }
  }, [])
}