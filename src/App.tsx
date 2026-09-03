import { useState } from 'react'
import { Footer, Header, StoreButtons } from './SiteChrome'
import Aurora from './components/reactbits/Aurora'
import FadeContent from './components/reactbits/FadeContent'
import SpotlightCard from './components/reactbits/SpotlightCard'
import YouTubeFacade from './components/YouTubeFacade'

const REVIEW_URL = 'https://www.youtube.com/watch?v=ZwaorZB3_6s'
const BETTERSHIFTING_URL = 'https://bettershifting.com/'

const features = [
  { number: '01', title: 'Music without reaching', description: 'Play, pause, skip, mute, or adjust volume from the programmable buttons already under your thumbs.' },
  { number: '02', title: 'A bell that fits every bar', description: 'Ring a built-in or custom bell sound from your controls—even while your phone is locked.' },
  { number: '03', title: 'Your bike, at a glance', description: 'See the selected gear, Di2 battery level, signal strength, and firmware details in one focused dashboard.' },
  { number: '04', title: 'Actions for every ride', description: 'Assign different actions to single and double taps, including flashlight controls and Mac keyboard shortcuts.' },
]

const faqs = [
  { question: 'Which bikes work with Bike Connect?', answer: 'Bike Connect supports Bluetooth LE Shimano Di2 systems with readable hood, top, or shift-switch buttons. This includes current DURA-ACE, ULTEGRA, SHIMANO 105, GRX, XTR, DEORE XT, and select DEORE Di2 systems. Older 11-speed setups may require an EW-WU101, EW-WU111, or SC-MT800 wireless unit.' },
  { question: 'Can Bike Connect work while my phone is locked?', answer: 'Yes. After pairing and granting Bluetooth access, assigned button actions can continue while Bike Connect is in the background or your phone is locked.' },
  { question: 'Can the app change my bike settings?', answer: 'No. Bike Connect reads button presses and bike status, but it cannot modify shifting configuration or send setup changes back to your bike.' },
  { question: 'Do I need a phone for the Apple Watch app?', answer: 'No. The Apple Watch app can connect directly to a compatible Bluetooth bike for a glanceable gear display and bell controls.' },
  { question: 'Does it work with Spotify and Apple Music?', answer: 'Yes. Bike Connect uses system media controls, so it works with Apple Music, Spotify, and other compatible playback apps. Available actions vary by platform and media app.' },
]

function HeroVideo() {
  return (
    <div className="hero-video-shell">
      <YouTubeFacade
        videoId="ZwaorZB3_6s"
        title="BetterShifting review of Bike Connect"
        thumbnailSrc="/video-review.webp"
        start={103}
        eager
      />
      <p className="video-attribution">As seen on <a href={BETTERSHIFTING_URL} target="_blank" rel="noopener noreferrer">BetterShifting</a></p>
      <a className="video-fallback" href={REVIEW_URL} target="_blank" rel="noopener noreferrer">Watch the full review on YouTube</a>
    </div>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-aurora" aria-hidden="true"><Aurora /></div>
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Your bike buttons, upgraded</p>
              <h1>Control your phone from your handlebars.</h1>
              <p className="hero-intro">Use your Di2 buttons for music, volume, lights, a bell, and live bike data without reaching for the screen.</p>
              <StoreButtons placement="hero" />
              <ul className="proof-list" aria-label="Bike Connect availability"><li>iOS, watchOS, macOS, Android</li><li>One-time purchase</li></ul>
            </div>
            <HeroVideo />
          </div>
        </section>

        <section id="how-it-works" className="section section-light">
          <div className="container">
            <FadeContent className="section-heading"><p className="eyebrow">Set up in minutes</p><h2>Pair. Personalize. Ride.</h2><p>Bike Connect turns an extra set of Di2 buttons into controls that feel natural from the first ride.</p></FadeContent>
            <FadeContent duration={560}>
              <ol className="steps-grid">
                <li><span>1</span><h3>Wake and pair</h3><p>Put your bike in Bluetooth pairing mode, open Bike Connect, and select your bike.</p></li>
                <li><span>2</span><h3>Choose your actions</h3><p>Assign single and double taps to the controls that matter on your ride.</p></li>
                <li><span>3</span><h3>Keep your eyes up</h3><p>Lock your phone or leave it mounted. Your thumbs stay on the bars and in control.</p></li>
              </ol>
            </FadeContent>
            <a className="section-link" href="/how-to-control-your-phone-with-shimano-di2-buttons">Read the complete setup guide <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="features" className="section feature-section">
          <div className="container">
            <FadeContent className="section-heading section-heading-dark"><p className="eyebrow">More from every tap</p><h2>Your handlebars become a control surface.</h2><p>Useful actions, immediate bike information, and fewer reasons to touch a screen while riding.</p></FadeContent>
            <FadeContent duration={560}>
              <div className="feature-grid">
                {features.map((feature) => <SpotlightCard className="feature-card" key={feature.title}><article><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p></article></SpotlightCard>)}
              </div>
            </FadeContent>
          </div>
        </section>

        <section className="section platform-section">
          <div className="container">
            <div className="platform-intro">
              <FadeContent className="section-heading"><p className="eyebrow">Choose your screen</p><h2>Your controls, wherever you ride.</h2><p>Set up on your phone, glance from your watch, or control an indoor ride from your Mac.</p></FadeContent>
              <FadeContent className="device-family" delay={100} duration={760} aria-hidden="true">
                <span className="device-symbol device-symbol-iphone" />
                <span className="device-symbol device-symbol-ipad" />
                <span className="device-symbol device-symbol-watch" />
                <span className="device-symbol device-symbol-mac" />
              </FadeContent>
            </div>
            <FadeContent duration={560}>
              <div className="platform-showcase">
                <article className="platform-card"><div className="platform-copy"><p className="platform-label">iOS + Android</p><h3>Phone &amp; tablet</h3><p>Pair your bike, personalize every tap, control media and lights, and view live ride data.</p></div></article>
                <article className="platform-card"><div className="platform-copy"><p className="platform-label">watchOS</p><h3>Apple Watch</h3><p>See your gear and ring the bell from your wrist, with no phone connection required.</p></div></article>
                <article className="platform-card"><div className="platform-copy"><p className="platform-label">macOS</p><h3>Mac</h3><p>Map Di2 buttons to keyboard shortcuts for indoor cycling, music, and volume controls.</p></div></article>
              </div>
            </FadeContent>
          </div>
        </section>

        <section className="section compatibility-section">
          <div className="container compatibility-layout">
            <div><p className="eyebrow">Compatibility</p><h2>Built for Bluetooth-enabled Di2.</h2><p>Bike Connect works with Shimano Di2 systems that expose their controls and ride data over Bluetooth LE.</p><a className="text-link" href="/support#compatibility">Check compatibility details <span aria-hidden="true">→</span></a><p className="compatibility-caveat">Bluetooth LE and readable hood, top, or shift-switch buttons are required. Only one bike app can connect at a time.</p></div>
            <FadeContent duration={560}>
              <div className="compatibility-list" role="list">
                <div role="listitem"><strong>Modern road Di2</strong><span>DURA-ACE R9200, ULTEGRA R8100, and SHIMANO 105 R7100.</span></div>
                <div role="listitem"><strong>GRX Di2</strong><span>RX825 and RX827; RX815 and RX817 with compatible D-FLY wireless hardware.</span></div>
                <div role="listitem"><strong>11-speed road Di2</strong><span>DURA-ACE R9150/R9170 and ULTEGRA R8050/R8070 with EW-WU101 or EW-WU111.</span></div>
                <div role="listitem"><strong>MTB Di2</strong><span>XTR M9250/M9050, DEORE XT M8250/M8050, and DEORE M6250; older systems require compatible Bluetooth hardware.</span></div>
              </div>
            </FadeContent>
          </div>
        </section>

        <section className="section demo-section">
          <div className="container"><FadeContent className="section-heading section-heading-dark"><p className="eyebrow">See the ride</p><h2>Bike Connect across every screen.</h2></FadeContent>
            <FadeContent duration={560}>
              <div className="demo-grid">
                <article className="demo-card"><YouTubeFacade videoId="hF24SAiNS_M" title="Bike Connect Mac demo" thumbnailSrc="/video-mac-demo.webp" /><div className="demo-caption"><strong>Mac demo</strong><small>YouTube</small></div></article>
                <article className="demo-card"><YouTubeFacade videoId="MQUgxA9LwYc" title="Bike Connect Apple Watch demo" thumbnailSrc="/video-watch-demo.webp" /><div className="demo-caption"><strong>Apple Watch demo</strong><small>YouTube</small></div></article>
                <article className="demo-card"><YouTubeFacade videoId="zyek7Uga04k" title="Bike Connect Android demo by Taylor" thumbnailSrc="https://i.ytimg.com/vi/zyek7Uga04k/maxresdefault.jpg" /><div className="demo-caption"><strong>Android demo</strong><small>YouTube</small></div></article>
              </div>
            </FadeContent>
          </div>
        </section>

        <section id="faq" className="section section-light faq-section">
          <div className="container-narrow"><FadeContent className="section-heading"><p className="eyebrow">Before your first ride</p><h2>Frequently asked questions</h2></FadeContent>
            <div className="faq-list">
              {faqs.map((faq, index) => { const isOpen = openFaq === index; const panelId = `faq-panel-${index}`; return <article className="faq-item" key={faq.question}><h3><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={panelId}><span>{faq.question}</span><span aria-hidden="true">{isOpen ? '−' : '+'}</span></button></h3><div id={panelId} className="faq-answer" hidden={!isOpen}><p>{faq.answer}</p></div></article> })}
            </div><a className="section-link" href="/support">Visit Bike Connect Support <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="download" className="final-cta-section"><div className="container final-cta"><img src="/app-icon-ios-192.png" alt="" width="96" height="96" loading="lazy" decoding="async" /><p className="eyebrow">Ready to ride smarter?</p><h2>Put control back under your thumbs.</h2><p className="final-cta-copy"><span>Choose your platform and make</span>{' '}<span>every extra Di2 button count.</span></p><StoreButtons placement="final" /></div></section>
      </main>

      <Footer />
    </>
  )
}

export default App
