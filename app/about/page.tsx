import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'About ClearDisk',
  'Who makes ClearDisk, why it scans your Mac locally and cleans Trash-first, how the one-time license works, and how to reach support.',
  '/about',
);
export default function About() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">ABOUT CLEARDISK</span>
        <h1>
          About ClearDisk.
          <br />
          Made for the Mac you already love.
        </h1>
        <p>
          ClearDisk is a Mac app that shows what is filling your disk, explains
          the System Data category in plain words, and lets you move the files
          you choose to the Trash. Scanning is free. Cleanup inside the app is a
          one-time license.
        </p>
        <h2>Who makes it</h2>
        <p>
          ClearDisk is built and sold by TechMarbles Web Solutions Pvt. Ltd., a
          software company in Mohali, India, founded in 2018. The same team
          writes the storage guides on this site, checks them against Apple’s
          documentation, and answers support mail.
        </p>
        <h2>How it works, and what it never does</h2>
        <p>
          Everything ClearDisk learns about your files stays on your Mac. The
          scanner uploads nothing, installs no extensions, and changes no system
          settings. Removal is Trash-first with undo; permanent deletion is a
          separate, explicit step. The only network request the app makes is
          license activation, which sends your key, a device identifier, your
          computer name and the app version.
        </p>
        <h2>One price, no subscription</h2>
        <p>
          The license is paid once, covers up to three Macs you own, and
          includes every 1.x update. Prices are shown in your local currency at
          checkout. If ClearDisk is not for you, ask for a refund within 30 days
          from <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>.
        </p>
        <h2>Support</h2>
        <p>
          Write to <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>{' '}
          for help with a scan, a key or a refund. Lost keys can be re-sent from{' '}
          <Link href="/recover">the recovery page</Link>.
        </p>
        <p>
          <Link className="text-link" href="/guides">
            Read the storage guides <ArrowRight size={14} />
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
