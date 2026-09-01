import { useEffect, useState } from 'react'
import { Footer, Header, StoreButtons } from './SiteChrome'
import Aurora from './components/reactbits/Aurora'
import FadeContent from './components/reactbits/FadeContent'
import SpotlightCard from './components/reactbits/SpotlightCard'

const REVIEW_URL = 'https://www.youtube.com/watch?v=ZwaorZB3_6s'
const DEMO_URL = `${REVIEW_URL}&t=103s`

const features = [
  { number: '01', title: 'Music without reaching', description: 'Play, pause, skip, mute, or adjust volume from the programmable buttons already under your thumbs.' },
  { number: '02', title: 'A bell that fits every bar', description: 'Ring a built-in or custom bell sound from your controls—even while your phone is locked.' },
  { number: '03', title: 'Your bike, at a glance', description: 'See the selected gear, Di2 battery level, signal strength, and firmware details in one focused dashboard.' },
  { number: '04', title: 'Actions for every ride', description: 'Assign different actions to single and double taps, including flashlight controls and Mac keyboard shortcuts.' },
]

const faqs = [
  { question: 'Which bikes work with Bike Connect?', answer: 'Bike Connect supports Bluetooth-enabled Shimano Di2 groupsets with programmable hood or top buttons. Most 12-speed road Di2 setups include wireless connectivity. Many 11-speed setups require an EW-WU101 or EW-WU111 wireless unit.' },
  { question: 'Can Bike Connect work while my phone is locked?', answer: 'Yes. After pairing and granting Bluetooth access, assigned button actions can continue while Bike Connect is in the background or your phone is locked.' },
  { question: 'Can the app change my bike settings?', answer: 'No. Bike Connect reads button presses and bike status, but it cannot modify shifting configuration or send setup changes back to your bike.' },
  { question: 'Do I need a phone for the Apple Watch app?', answer: 'No. The Apple Watch app can connect directly to a compatible Bluetooth bike for a glanceable gear display and bell controls.' },
  { question: 'Does it work with Spotify and Apple Music?', answer: 'Yes. Bike Connect uses system media controls, so it works with Apple Music, Spotify, and other compatible playback apps. Available actions vary by platform and media app.' },
]

function HeroVideo() {
  return (
    <FadeContent className="hero-video-shell" delay={140} duration={820} blur>
      <iframe
        src="https://www.youtube-nocookie.com/embed/ZwaorZB3_6s?start=103&rel=0&playsinline=1"
        title="BetterShifting review of Bike Connect"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="eager"
        allowFullScreen
      />
      <p className="video-attribution">As seen on <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">BetterShifting</a></p>
      <a className="video-fallback" href={REVIEW_URL} target="_blank" rel="noopener noreferrer">Watch the full review on YouTube</a>
    </FadeContent>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setShowStickyBar(!entry.isIntersecting), { threshold: 0.05 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-aurora" aria-hidden="true"><Aurora /></div>
          <div className="container hero-layout">
            <FadeContent className="hero-copy" duration={760} blur>
              <p className="eyebrow">Your bike buttons, upgraded</p>
              <h1>Control your phone from your handlebars.</h1>
              <p className="hero-intro">Use your Di2 buttons for music, volume, lights, a bell, and live bike data…without reaching for the screen.</p>
              <StoreButtons placement="hero" />
              <ul className="proof-list" aria-label="Bike Connect availability"><li>iOS, watchOS, macOS, Android</li><li>One-time purchase</li></ul>
            </FadeContent>
            <HeroVideo />
          </div>
        </section>

        <section id="how-it-works" className="section section-light">
          <div className="container">
            <FadeContent className="section-heading"><p className="eyebrow">Set up in minutes</p><h2>Pair. Personalize. Ride.</h2><p>Bike Connect turns an extra set of Di2 buttons into controls that feel natural from the first ride.</p></FadeContent>
            <ol className="steps-grid">
              <li><span>1</span><h3>Wake and pair</h3><p>Put your bike in Bluetooth pairing mode, open Bike Connect, and select your bike.</p></li>
              <li><span>2</span><h3>Choose your actions</h3><p>Assign single and double taps to the controls that matter on your ride.</p></li>
              <li><span>3</span><h3>Keep your eyes up</h3><p>Lock your phone or leave it mounted. Your thumbs stay on the bars and in control.</p></li>
            </ol>
            <a className="section-link" href="/how-to-control-your-phone-with-shimano-di2-buttons">Read the complete setup guide <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="features" className="section feature-section">
          <div className="container">
            <FadeContent className="section-heading section-heading-dark"><p className="eyebrow">More from every tap</p><h2>Your handlebars become a control surface.</h2><p>Useful actions, immediate bike information, and fewer reasons to touch a screen while riding.</p></FadeContent>
            <div className="feature-grid">
              {features.map((feature) => <SpotlightCard className="feature-card" key={feature.title}><article><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p></article></SpotlightCard>)}
            </div>
          </div>
        </section>

        <section className="section platform-section">
          <div className="container">
            <FadeContent className="section-heading"><p className="eyebrow">Choose your screen</p><h2>One bike. Every device you ride with.</h2><p>Core handlebar controls stay familiar while each platform adds features made for its role.</p></FadeContent>
            <div className="platform-showcase">
              <article className="platform-card platform-card-phone"><div className="platform-copy"><p className="platform-label">iPhone and iPad</p><h3>Your complete ride control center</h3><p>Customize taps, control music and volume, flash the light, ring a bell, and keep live gear data visible.</p></div><img src="/iphone-actions.webp" alt="Bike Connect action picker on iPhone" width="620" height="1342" loading="lazy" /></article>
              <article className="platform-card platform-card-phone platform-card-android"><div className="platform-copy"><p className="platform-label">Android</p><h3>The same controls on your Android ride</h3><p>Pair your bike, map the buttons, control compatible media apps, and monitor gears and battery.</p></div><img src="/android-actions.webp" alt="Bike Connect action picker on Android" width="620" height="1102" loading="lazy" /></article>
              <article className="platform-card platform-card-wide"><div className="platform-copy"><p className="platform-label">Mac</p><h3>Control indoor rides from the hoods</h3><p>Map Di2 buttons to keyboard shortcuts for apps such as Zwift, plus music and volume controls.</p></div><img src="/mac-control.webp" alt="Bike Connect controlling a Mac from Di2 handlebars" width="1200" height="750" loading="lazy" /></article>
              <article className="platform-card platform-card-watch"><div className="platform-copy"><p className="platform-label">Apple Watch</p><h3>Gear display. Bell. No phone.</h3><p>Connect the watch directly to your bike for a glanceable gear readout and quick bell controls.</p></div><img src="/watch-control.webp" alt="Bike Connect gear display on Apple Watch" width="410" height="502" loading="lazy" /></article>
            </div>
          </div>
        </section>

        <section className="section compatibility-section">
          <div className="container compatibility-layout">
            <div><p className="eyebrow">Compatibility</p><h2>Built for Bluetooth-enabled Di2.</h2><p>Bike Connect works with supported Shimano Di2 systems that expose programmable hood or top buttons over Bluetooth.</p><a className="text-link" href="/support#compatibility">Check compatibility details <span aria-hidden="true">→</span></a></div>
            <div className="compatibility-list" role="list">
              <div role="listitem"><strong>12-speed road Di2</strong><span>Wireless connectivity is typically built in.</span></div>
              <div role="listitem"><strong>11-speed Di2</strong><span>May require an EW-WU101 or EW-WU111 wireless unit.</span></div>
              <div role="listitem"><strong>One active connection</strong><span>Disconnect other bike apps before pairing.</span></div>
              <div role="listitem"><strong>Read-only access</strong><span>Bike Connect cannot change your bike configuration.</span></div>
            </div>
          </div>
        </section>

        <section className="section demo-section">
          <div className="container"><FadeContent className="section-heading section-heading-dark"><p className="eyebrow">See the ride</p><h2>Bike Connect across every screen.</h2></FadeContent>
            <div className="demo-grid">
              <a className="demo-card" href="https://www.youtube.com/shorts/hF24SAiNS_M" target="_blank" rel="noopener noreferrer"><img src="/mac-control.webp" alt="Bike Connect Mac demo preview" width="1200" height="750" loading="lazy" /><span><strong>Mac demo</strong><small>Watch on YouTube ↗</small></span></a>
              <a className="demo-card demo-card-watch" href="https://www.youtube.com/shorts/MQUgxA9LwYc" target="_blank" rel="noopener noreferrer"><img src="/watch-control.webp" alt="Bike Connect Apple Watch demo preview" width="410" height="502" loading="lazy" /><span><strong>Apple Watch demo</strong><small>Watch on YouTube ↗</small></span></a>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-light faq-section">
          <div className="container-narrow"><FadeContent className="section-heading"><p className="eyebrow">Before your first ride</p><h2>Frequently asked questions</h2></FadeContent>
            <div className="faq-list">
              {faqs.map((faq, index) => { const isOpen = openFaq === index; const panelId = `faq-panel-${index}`; return <article className="faq-item" key={faq.question}><h3><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={panelId}><span>{faq.question}</span><span aria-hidden="true">{isOpen ? '−' : '+'}</span></button></h3><div id={panelId} className="faq-answer" hidden={!isOpen}><p>{faq.answer}</p></div></article> })}
            </div><a className="section-link" href="/support">Visit Bike Connect Support <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="download" className="final-cta-section"><div className="container final-cta"><img src="/app-icon-ios.png" alt="" width="96" height="96" /><p className="eyebrow">Ready to ride smarter?</p><h2>Put control back under your thumbs.</h2><p>Choose your platform and make every extra Di2 button count.</p><StoreButtons placement="final" /></div></section>
      </main>

      {showStickyBar && <div className="sticky-download" role="region" aria-label="Download Bike Connect"><span>Bike Connect</span><a href="#download">Get the app</a></div>}
      <Footer />
    </>
  )
}

export default App
