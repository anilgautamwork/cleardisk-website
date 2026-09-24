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
        <h2>iCloud Doctor</h2>
        <p>
          iCloud Drive scans inspect locally available file metadata. They do
          not download cloud-only contents just to list them. Scan history is
          stored locally and can be cleared in the app. A download happens only
          when you explicitly request it. Archive to Mac reads file contents
          locally to copy and verify them; it retains the cloud original. File
          names, contents and reports are not sent to website analytics. Apple’s
          own iCloud synchronization operates separately.
        </p>
        <h2>The website preview</h2>
        <p>
          The interactive Mac window uses example data. It does not read your
          files or scan your device. The hosting provider may process
          operational request logs. Optional Google Ads measurement is described
          below. Talivia tracking remains disabled.
        </p>
        <h2>Visit and download measurement</h2>
        <p>
          We count arrivals on this site from elsewhere, download requests,
          completed downloads and opened checkouts by UTC day and a fixed source
          label, such as Google, Reddit or our website. We store those aggregate
          counts for up to 366 days. This counter does not store your IP
          address, filenames, raw referring URL or a unique visitor identifier,
          and does not set analytics cookies. Counts are not proof of
          installation or a count of unique people. GitHub separately reports
          downloads from its releases.
        </p>
        <h2>Ad measurement</h2>
        <p>
          Google Ads loads only if you choose Allow measurement. Your choice is
          saved in this browser and can be changed using Ad privacy settings. If
          allowed, ad click identifiers and campaign labels are stored locally
          for up to 90 days and attached to Stripe checkout. After a verified
          live payment, Google receives the order value, currency and an
          anonymous order identifier. We do not send your email, payment details
          or license key. We do not enable personalized ads or enhanced
          conversions. Declining clears our stored ad attribution and stops new
          purchase events. Consented ad-linked orders are also retained on our
          server for up to 90 days for offline conversion reconciliation when a
          buyer does not return from Stripe; changing your browser choice does
          not undo records already collected.
        </p>
        <h2>Payments</h2>
        <p>
          Checkout is handled by Stripe on behalf of TechMarbles Web Solutions
          Pvt. Ltd. Stripe processes your card details; we never see them. We
          receive your name, email address, billing address and payment status
          to deliver your license key and handle refunds.
        </p>
        <h2>License activation</h2>
        <p>
          The activation service processes your license key, machine identifier,
          computer name and app version to manage the three-Mac limit. Your
          email address is used to deliver and recover your license key. File
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
