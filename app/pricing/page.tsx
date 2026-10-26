import Link from 'next/link';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
import { visitorPrice } from '@/lib/visitor-price';
export const metadata = pageMetadata(
  'ClearDisk pricing — free scanning, $10 once',
  'Free Mac scans and performance diagnostics. Pay $10 once for cleanup, iCloud actions, app quit and browser tab tools on three personal Macs. No subscription.',
  '/pricing',
);
export default async function Pricing() {
  const price = await visitorPrice();
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap product-page">
        <h1>
          See the problem for free.
          <br />
          Pay once for guided actions.
        </h1>
        <p>
          Explore your storage and performance before buying. One license covers
          cleanup, iCloud Doctor actions and the new WhySlow actions inside
          ClearDisk on up to three Macs you own. No subscription.
        </p>
        <div className="product-sections">
          <section>
            <h2>Free scans and diagnostics</h2>
            <p>Find large files and inspect what is keeping your Mac busy.</p>
            <ul>
              <li>Local disk scans and storage breakdowns</li>
              <li>Treemap, folder browsing, search and large-file review</li>
              <li>iCloud Drive diagnostics and metadata inspection</li>
              <li>Explicit iCloud Download Now requests</li>
              <li>
                Performance readings, process explanations and usage charts
              </li>
              <li>Optional menu-bar monitoring and internet speed test</li>
            </ul>
            <DownloadButton label="Download for free" />
          </section>
          <section>
            <h2>{price.display} once</h2>
            <p>
              A ClearDisk license unlocks the following actions inside the app.
              You review each action before it runs.
            </p>
            <ul>
              <li>Cleanup inside ClearDisk, with review before removal</li>
              <li>Eligible iCloud local-download removal</li>
              <li>Verified archives of supported iCloud documents</li>
              <li>Quit or Force Quit eligible apps, with confirmation</li>
              <li>
                Close duplicate tabs and merge windows in Chrome, Brave and Edge
              </li>
              <li>Rebuild Spotlight’s index after reviewing the warning</li>
              <li>Three personal Macs, including ClearDisk 2.2.1</li>
              <li>30-day refund policy</li>
            </ul>
            <Link className="button primary" href="/buy-now">
              Buy ClearDisk · {price.display}
            </Link>
          </section>
          <section>
            <h2>Already have a license?</h2>
            <p>
              Your existing license works with ClearDisk 2.2.1, including iCloud
              Doctor and the new Performance actions. Download the update and
              activate with your key. You do not need a second purchase.
            </p>
            <Link href="/recover">Recover your license key</Link>
            <p>
              Many individual tasks are also available through macOS or your
              browser. The license pays for performing them through ClearDisk’s
              guided interface, alongside its storage and iCloud tools. Force
              Quit and tab closure can lose unsaved work; performance readings
              cannot diagnose every slowdown.
            </p>
          </section>
          <section>
            <h2>What happens after purchase?</h2>
            <p>
              Checkout is processed by Stripe. Your key appears on the
              confirmation page. Enter it in ClearDisk to activate your Mac.
              Checkout displays the applicable currency and final total.
            </p>
            <p>
              Need help with activation or a refund?{' '}
              <Link href="/support">Contact support</Link> or read the{' '}
              <Link href="/terms">license terms and refund policy</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
