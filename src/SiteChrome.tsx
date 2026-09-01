import type { ReactNode } from 'react'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa6'

export const APP_STORE_URL = 'https://apps.apple.com/app/id6746517051'
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.stylesdevelopments.bikeconnect'

export type StorePlatform = 'apple' | 'android'
export type StorePlacement = 'header' | 'hero' | 'sticky' | 'final' | 'footer' | 'content'

type StoreLinkProps = {
  platform: StorePlatform
  placement: StorePlacement
  className?: string
  children: ReactNode
}

export function StoreLink({ platform, placement, className = '', children }: StoreLinkProps) {
  const href = platform === 'apple' ? APP_STORE_URL : GOOGLE_PLAY_URL

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-store-platform={platform}
      data-cta-placement={placement}
    >
      {children}
    </a>
  )
}

export function StoreButtons({ placement, compact = false }: { placement: StorePlacement; compact?: boolean }) {
  return (
    <div className={`store-buttons${compact ? ' store-buttons-compact' : ''}`}>
      <StoreLink platform="apple" placement={placement} className="store-button store-button-apple">
        <span className="store-button-content">
          <FaAppStoreIos className="store-button-icon" aria-hidden="true" />
          <span className="store-button-copy">
            <span className="store-button-label">Download on the</span>
            <strong>App Store</strong>
          </span>
        </span>
      </StoreLink>
      <StoreLink platform="android" placement={placement} className="store-button store-button-play">
        <span className="store-button-content">
          <FaGooglePlay className="store-button-icon" aria-hidden="true" />
          <span className="store-button-copy">
            <span className="store-button-label">Get it on</span>
            <strong>Google Play</strong>
          </span>
        </span>
      </StoreLink>
    </div>
  )
}

export function Header() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="nav-container">
          <a href="/" className="brand" aria-label="Bike Connect home">
            <img src="/app-icon-ios.png" alt="" width="42" height="42" />
            <span>Bike Connect</span>
          </a>
          <nav aria-label="Primary navigation" className="nav-links">
            <a href="/#how-it-works">How it works</a>
            <a href="/#features">Features</a>
            <a href="/support" className="nav-support">Support</a>
            <a href="/#download" className="header-cta">Get the app</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <a href="/" className="brand footer-brand">
            <img src="/app-icon-ios.png" alt="" width="38" height="38" />
            <span>Bike Connect</span>
          </a>
          <p>Less distraction. More ride.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          <a href="/how-to-control-your-phone-with-shimano-di2-buttons">Setup guide</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="https://github.com/superturboryan/Bike-Connect" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <p className="legal-note">
          <span>Bike Connect is an independent app and is not affiliated with or endorsed by Shimano.</span>
          <span>Shimano and Di2 are trademarks of Shimano Inc.</span>
        </p>
        <p className="maker-note">Made with <span aria-label="love">🩵</span> by <a href="https://ryanforsyth.dev" target="_blank" rel="noopener noreferrer">Ryan</a> &amp; <a href="https://tstyles.dev/" target="_blank" rel="noopener noreferrer">Taylor</a></p>
      </div>
    </footer>
  )
}
