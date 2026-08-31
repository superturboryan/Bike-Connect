import './ContentPage.css'
import { Footer, Header } from './SiteChrome'

function Privacy() {
  return (
    <><Header /><main id="main-content" className="content-page"><article className="container privacy-content"><h1>Privacy Policy</h1><section><h2>Information Collected</h2><p>We do not collect any personal information from you such as your name, email, or date of birth.</p><p>We collect app diagnostic data for the sole purpose of improving the app experience and guiding feature development.</p></section><section><h2>Notification of Privacy Statement Changes</h2><p>We may update this privacy statement to reflect changes to our information practices. If we make any material changes we will notify you by means of a notice in the app or an app update prior to the change becoming effective.</p><p>We encourage you to periodically review this page for the latest information on our privacy practices.</p></section><section><h2>Contact</h2><p><a href="mailto:watchcloud.app@gmail.com?subject=Bike%20Connect%20Privacy">Email Bike Connect support</a></p></section></article></main><Footer /></>
  )
}

export default Privacy
