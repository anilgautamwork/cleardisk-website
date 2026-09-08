import Link from 'next/link';
import { Header, Footer } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'ClearDisk support — scans, licenses and refunds',
  'Get help with ClearDisk installation, disk scanning, iCloud Doctor, license activation and refunds. Recover your key or contact the ClearDisk team.',
  '/support',
);
export default function Support() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap product-page">
        <h1>
          A clearer next step.
          <br />
          Help when you need it.
        </h1>
        <p>
          Find an answer in the guides, recover your license, or contact the
          team that makes ClearDisk.
        </p>
        <div className="product-sections">
          <section>
            <h2>Contact the team</h2>
            <p>
              Email <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>{' '}
              with your macOS version, ClearDisk version and what happened. For
              a purchase question, include the checkout email or receipt
              reference.
            </p>
            <p>
              Share only the details needed to explain the issue. Redact private
              filenames from screenshots; never send passwords or payment-card
              details.
            </p>
          </section>
          <section>
            <h2>Licenses and activation</h2>
            <p>
              Lost your key? Use the email from checkout to recover it. A
              license covers three personal Macs and all 1.x updates. For an
              activation-limit issue, contact support before purchasing again.
            </p>
            <Link href="/recover">Recover your key</Link>
          </section>
          <section>
            <h2>Installation and scanning</h2>
            <p>
              Download the latest signed and notarized app for macOS 15 or
              later. macOS controls disk-access permissions. A partial scan can
              mean a location was not accessible.
            </p>
            <p>
              <Link href="/download">Download ClearDisk</Link> ·{' '}
              <Link href="/faq">Browse all FAQs</Link>
            </p>
          </section>
          <section>
            <h2>iCloud Drive questions</h2>
            <p>
              Distinguish local Mac storage from your iCloud plan before making
              changes. ClearDisk can inspect accessible Drive metadata; it
              cannot repair Apple’s servers or measure the complete account
              quota.
            </p>
            <Link href="/icloud-doctor">Find an iCloud guide</Link>
          </section>
          <section>
            <h2>Refunds</h2>
            <p>
              If ClearDisk isn’t right for you, contact us within 30 days of
              purchase with your checkout email or receipt reference.
            </p>
            <Link href="/terms">Read the refund policy</Link>
          </section>
          <section>
            <h2>Understand your storage</h2>
            <p>
              Step-by-step guides cover System Data, large files, developer
              caches, Photos libraries and more. Start with the problem you can
              see and review files before removing them.
            </p>
            <Link href="/guides">Explore storage guides</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
