/*
 * Lightweight adaptation of React Bits FadeContent by David Haz.
 * Source: https://reactbits.dev/animations/fade-content
 * License: see THIRD_PARTY_NOTICES.md
 */
import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react'
import './reactbits.css'

type FadeContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  blur?: boolean
  duration?: number
  delay?: number
  threshold?: number
}

export default function FadeContent({
  children,
  blur = false,
  duration = 700,
  delay = 0,
  threshold = 0.12,
  className = '',
  style,
  ...props
}: FadeContentProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.dataset.visible = 'true'
        observer.disconnect()
      },
      { threshold },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={elementRef}
      className={`rb-fade-content${blur ? ' rb-fade-content-blur' : ''} ${className}`.trim()}
      data-visible="false"
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
