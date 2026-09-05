import { pageMetadata } from '@/lib/seo';
import { Header, Footer } from '@/components/brand';
export const metadata = pageMetadata(
  'Privacy — ClearDisk',
  'How ClearDisk handles local scans, website requests, payments and license activation data.',
  '/privacy',
);
export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">YOUR FILES STAY YOURS</span>
        <h1>
          A clear view.
          <br />A private one, too.
        </h1>
        <p>
          ClearDisk scans and analyzes files locally on your Mac. Your files,
          file names and scan results are not uploaded by the scanner.
        </p>
        <h2>The website preview</h2>
        <p>
          The interactive Mac window uses example data. It does not read your
          files or scan your device. The hosting provider may process
          operational request logs. We do not include advertising pixels or
          Talivia tracking.
        </p>
        <h2>Download measurement</h2>
        <p>
          We count successful full download requests by UTC day and a fixed
          source label, such as Google, Reddit or our website. We store those
          aggregate counts for up to 366 days. This counter does not store your
          IP address, filenames, raw referring URL or a unique visitor
          identifier, and does not set analytics cookies. Counts are not proof
          of installation or a count of unique people. GitHub separately reports
          downloads from its releases.
        </p>
        <h2>Payments</h2>
        <p>
          Checkout is handled by Stripe on behalf of TechMarbles Web Solutions
          Pvt. Ltd. Stripe processes your card details; we never see them. We
          receive your name, email address, billing address and payment status
          to deliver your license key and handle refunds.
        </p>
        <h2>License activation at launch</h2>
        <p>
          The planned 1.0 activation service will process a license key, device
          identifier, computer name and app version to manage the three-Mac
          limit. Purchases will use your email to deliver a license. File
          contents and scan results are not part of activation.
        </p>
        <h2>Questions about privacy</h2>
        <p>
          Contact <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
