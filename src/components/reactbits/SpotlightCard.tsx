/*
 * Adapted from React Bits SpotlightCard by David Haz.
 * Source: https://reactbits.dev/components/spotlight-card
 * License: see THIRD_PARTY_NOTICES.md
 */
import { useRef, type MouseEventHandler, type PropsWithChildren } from 'react'
import './reactbits.css'

type SpotlightCardProps = PropsWithChildren<{
  className?: string
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`
}>

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(47, 174, 255, 0.22)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
    card.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className={`rb-spotlight-card ${className}`.trim()}>
      {children}
    </div>
  )
}
