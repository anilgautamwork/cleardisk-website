import { Header, Footer } from '@/components/brand';
export const metadata = { title: 'Privacy — ClearDisk' };
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
          files or scan your device. This website does not include marketing
          analytics or advertising pixels. The hosting provider may process
          operational request logs.
        </p>
        <h2>Test payments</h2>
        <p>
          Checkout runs on Stripe’s test environment. Details you enter there
          are processed by Stripe. Please use test details rather than a real
          payment card. This preview does not deliver paid license keys.
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
