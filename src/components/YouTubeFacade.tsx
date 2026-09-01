import { useState } from 'react'

type YouTubeFacadeProps = {
  videoId: string
  title: string
  thumbnailSrc: string
  start?: number
  eager?: boolean
}

export default function YouTubeFacade({
  videoId,
  title,
  thumbnailSrc,
  start,
  eager = false,
}: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const startParameter = start ? `&start=${start}` : ''

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1${startParameter}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className="youtube-facade"
      aria-label={`Play ${title}`}
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={thumbnailSrc}
        alt=""
        width={eager ? 960 : 600}
        height={eager ? 540 : 1067}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
      />
      <span className="youtube-play-button" aria-hidden="true">
        <span />
      </span>
    </button>
  )
}
