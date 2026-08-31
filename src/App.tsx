import { useState } from 'react'
import { Footer, Header, StoreButtons } from './SiteChrome'

const DEMO_URL = 'https://www.youtube.com/watch?v=TRTYLt4lUhg'

function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="hero-video-shell">
      {isPlaying ? (
        <iframe
          src="https://www.youtube-nocookie.com/embed/TRTYLt4lUhg?autoplay=1&rel=0"
          title="Bike Connect iPhone demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-poster" onClick={() => setIsPlaying(true)} aria-label="Play the Bike Connect iPhone demo">
          <img src="/hero-video-poster.png" alt="Bike Connect controls and live gear display on iPhone" width="1242" height="2688" fetchPriority="high" />
          <span className="play-button" aria-hidden="true"><span /></span>
          <span className="play-label">Watch the iPhone demo</span>
        </button>
      )}
      <a className="video-fallback" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Open the demo on YouTube</a>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-pink" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Your bike buttons, upgraded</p>
              <h1>Control your phone from your Di2 handlebars.</h1>
              <p className="hero-intro">Turn the buttons already under your thumbs into controls for music, volume, lights, a virtual bell, and live bike data—without taking your hands off the bars.</p>
              <StoreButtons placement="hero" />
              <ul className="proof-list" aria-label="Bike Connect availability">
                <li>iPhone and Android</li>
                <li>Apple Watch and Mac</li>
                <li>One-time purchase</li>
              </ul>
            </div>
            <HeroVideo />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
