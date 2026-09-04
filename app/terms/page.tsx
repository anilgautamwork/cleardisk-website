import { Header, Footer } from '@/components/brand';
export const metadata = { title: 'Terms & refunds — ClearDisk' };
export default function Terms() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">SIMPLE AND UP FRONT</span>
        <h1>Terms & refunds.</h1>
        <p>
          The download currently available is ClearDisk 0.1.0, a preview
          release. Checkout on this website is a test and does not charge money
          or grant a paid license.
        </p>
        <h2>The planned 1.0 license</h2>
        <p>
          The intended price is $10 USD, paid once, for a personal,
          non-transferable license on up to three Macs you own. It includes all
          1.x updates. No subscription is required. License keys may not be
          shared or resold.
        </p>
        <h2>30-day refund policy at launch</h2>
        <p>
          For live purchases when available, you can request a refund within 30
          days from the email address used at purchase. Contact{' '}
          <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>. A
          refunded license will be disabled. There is no refund to request for a
          test payment.
        </p>
        <h2>You choose what to remove</h2>
        <p>
          Review every selection. ClearDisk moves files to the Trash by default;
          permanent removal requires an explicit action. Keep backups of
          important files. Files in the Trash still occupy storage until
          permanently removed.
        </p>
        <h2>Preview software</h2>
        <p>
          The preview is provided as is, without warranties to the extent
          permitted by applicable law. Features and availability may change
          before the 1.0 release. Nothing here limits any rights you have under
          applicable consumer law.
        </p>
      </main>
      <Footer />
    </>
  );
}
