import Link from 'next/link';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'ClearDisk features — understand your Mac storage',
  'Explore ClearDisk’s local disk scanner, storage map, System Data breakdown, developer cleanup and iCloud Doctor. Free scanning on macOS 15 and later.',
  '/features',
);
export default function Features() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap product-page">
        <h1>
          Understand your space.
          <br />
          Choose what stays.
        </h1>
        <p>
          ClearDisk brings your Mac’s storage into view, from large downloads to
          the files behind System Data. Scan for free, inspect the details, and
          review every cleanup.
        </p>
        <DownloadButton />
        <div className="product-sections">
          <section>
            <h2>A visual view of your disk</h2>
            <p>
              Explore a treemap, browse folders, search scanned paths and find
              large files. Compare measured sizes before deciding where to spend
              your time.
            </p>
            <Link href="/disk-space-analyzer-mac">How disk analysis works</Link>
          </section>
          <section>
            <h2>System Data, explained</h2>
            <p>
              See explained storage categories and inspect the underlying
              locations. A category’s size is a starting point for review, not a
              promise that everything in it can be removed.
            </p>
            <Link href="/what-is-system-data-on-mac">
              Understand System Data
            </Link>
          </section>
          <section>
            <h2>Developer cleanup</h2>
            <p>
              Review generated build files and package caches separately from
              the projects you keep. Check what a tool can rebuild before
              removing anything you still need.
            </p>
            <Link href="/clear-xcode-derived-data">
              Read the Xcode storage guide
            </Link>
          </section>
          <section>
            <h2>iCloud Doctor</h2>
            <p>
              Inspect accessible iCloud Drive metadata, pending transfers,
              reported errors and local copies. Request downloads or use
              licensed actions to remove eligible local downloads and create
              verified document archives.
            </p>
            <Link href="/icloud-doctor">
              Explore iCloud Doctor and its limits
            </Link>
          </section>
          <section>
            <h2>You stay in control</h2>
            <p>
              Scanning does not delete files. Cleanup offers a review step, with
              Trash-first removal and a separate permanent-deletion flow. iCloud
              Doctor retains cloud originals; local-copy removal does not reduce
              your iCloud quota.
            </p>
            <Link href="/faq/cleardisk">Read the safety questions</Link>
          </section>
          <section>
            <h2>Built for your Mac</h2>
            <p>
              ClearDisk 1.1 runs on macOS 15 and later, on Apple silicon and
              Intel. Scan results stay on your Mac. Existing ClearDisk licenses
              include the iCloud Doctor actions.
            </p>
            <Link href="/pricing">Compare free scanning and the license</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
