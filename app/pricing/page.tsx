import Link from 'next/link';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
import { visitorPrice } from '@/lib/visitor-price';
export const metadata = pageMetadata(
  'ClearDisk pricing — free scanning, $10 once',
  'Scan your Mac for free. Unlock ClearDisk cleanup and licensed iCloud Doctor actions with a one-time license for three personal Macs, including 1.x updates.',
  '/pricing',
);
export default async function Pricing() {
  const price = await visitorPrice();
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap product-page">
        <h1>
          Scan freely.
          <br />
          Pay once to clean.
        </h1>
        <p>
          Start by understanding your storage. When you’re ready to use cleanup
          inside ClearDisk, one license covers up to three Macs you own. No
          subscription.
        </p>
        <div className="product-sections">
          <section>
            <h2>Free scanning</h2>
            <p>Explore your disk before buying a license.</p>
            <ul>
              <li>Local disk scans and storage breakdowns</li>
              <li>Treemap, folder browsing, search and large-file review</li>
              <li>iCloud Drive diagnostics and metadata inspection</li>
              <li>Explicit iCloud Download Now requests</li>
            </ul>
            <DownloadButton label="Download the free scanner" />
          </section>
          <section>
            <h2>{price.display} once</h2>
            <p>
              A ClearDisk license unlocks cleanup and the licensed iCloud Doctor
              actions.
            </p>
            <ul>
              <li>Cleanup inside ClearDisk, with review before removal</li>
              <li>Eligible iCloud local-download removal</li>
              <li>Verified archives of supported iCloud documents</li>
              <li>Three personal Macs and all 1.x updates</li>
              <li>30-day refund policy</li>
            </ul>
            <Link className="button primary" href="/buy-now">
              Buy ClearDisk · {price.display}
            </Link>
          </section>
          <section>
            <h2>Already have a license?</h2>
            <p>
              Your existing license works with ClearDisk 1.1, including iCloud
              Doctor. Download the update and activate with your key. You do not
              need a second purchase.
            </p>
            <Link href="/recover">Recover your license key</Link>
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
