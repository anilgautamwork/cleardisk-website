import { pageMetadata } from '@/lib/seo';
import { Header, Footer } from '@/components/brand';
export const metadata = pageMetadata(
  'Terms & refunds — ClearDisk',
  'ClearDisk 1.0 license terms, the seller of record and the refund policy.',
  '/terms',
);
export default function Terms() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">SIMPLE AND UP FRONT</span>
        <h1>Terms & refunds.</h1>
        <p>
          The $10 checkout on this website sells the ClearDisk 1.0 license,
          delivered instantly, by TechMarbles Web Solutions Pvt. Ltd., Mohali,
          India, the maker of ClearDisk.
        </p>
        <h2>The 1.0 license</h2>
        <p>
          The price is $10 USD, paid once and shown in your local currency at
          checkout, for a personal, non-transferable license on up to three Macs
          you own. It includes all 1.x updates. No subscription is required.
          License keys may not be shared or resold. Your key appears on the
          confirmation page and is emailed to the address used at checkout.
        </p>
        <h2>Refunds</h2>
        <p>
          Request a refund within 30 days of purchase, from the email address
          used at checkout. Contact{' '}
          <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>. Refunds
          return to the original payment method, and a refunded license is
          disabled.
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
