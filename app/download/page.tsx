import { campaignSource } from '@/lib/download-metrics';
import { pageMetadata } from '@/lib/seo';
import { Header, Footer, Mark } from '@/components/brand';
import { JsonLd } from '@/components/json-ld';
import { softwareSchema } from '@/lib/seo';
import Link from 'next/link';
import {
  ArrowDownToLine,
  ArrowRight,
  ShieldCheck,
  HardDrive,
} from 'lucide-react';
export const metadata = pageMetadata(
  'Download ClearDisk for Mac — Free Disk Space Scanner',
  'Download ClearDisk 2.1.0 for macOS 15 or later on Apple silicon or Intel. Scan your Mac for free, review large files, and unlock cleanup with a $10 license.',
  '/download',
);
export default async function Download({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const rawSource = query.utm_source || query.source;
  const source = campaignSource(
    typeof rawSource === 'string' ? rawSource : null,
  );
  const downloadURL = source
    ? '/ClearDisk.dmg?source=' + encodeURIComponent(source.toLowerCase())
    : '/ClearDisk.dmg';
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <Mark large />
        <h1>
          Download ClearDisk for Mac.
          <br />A little more room, a little less effort.
        </h1>
        <p>
          Download ClearDisk and discover what’s filling your Mac. Your files
          stay on your computer, right where they belong.
        </p>
        <div className="release-meta">
          <span>macOS 15+</span>
          <span>
            <HardDrive size={15} />
            Apple silicon + Intel
          </span>
          <span>
            <ShieldCheck size={15} />
            Notarized by Apple
          </span>
        </div>
        <a className="button primary" href={downloadURL} download>
          <ArrowDownToLine size={18} />
          Download ClearDisk
        </a>
        <small>ClearDisk 2.1.0 · DMG</small>
        <p className="software-disclosure">
          ClearDisk is a downloadable Mac app. It scans your disk on your Mac,
          shows what uses space and lets you move files you choose to the Trash.
          It does not change system settings, install extensions or upload your
          files. Remove it by moving ClearDisk to the Trash.
        </p>
        <p>
          <a href="https://cleardisk.app/SHA256SUMS.txt">
            SHA-256 checksum for this download
          </a>
        </p>
        <h2>New in 2.1.0</h2>
        <p>
          Open Mac checks in the sidebar for two new read-only tools. No full
          disk scan is needed, and neither check changes or removes files.
        </p>
        <p>
          <strong>Apple Intelligence storage:</strong> inspect recognized model
          and support folders. ClearDisk shows measured sizes and flags locations
          it cannot read. Protected files can leave a partial result; this is not
          a complete Apple storage total or a promise of recoverable space.
        </p>
        <p>
          <strong>Intel app review:</strong> find apps with Intel-only main
          executables in your Applications folders. Universal, Apple silicon and
          undetermined results are shown separately. Plug-ins and helper programs
          need their own review.{' '}
          <a href="https://support.apple.com/102527">
            Read Apple’s Rosetta compatibility guidance
          </a>.
        </p>
        <p>
          On ClearDisk 2.0.0 or later, choose ClearDisk → Check for Updates… to download
          and install a signed update from the app. If you have 1.1.1 or earlier,
          download 2.1.0 here once to get the updater. Your license stays valid.
        </p>
        <h2>Three small steps. More clarity.</h2>
        <ol>
          <li>Open the downloaded ClearDisk.dmg.</li>
          <li>Drag ClearDisk into your Applications folder.</li>
          <li>
            Open ClearDisk and choose “Scan my disk.” Enable Full Disk Access in
            System Settings, then return to ClearDisk to start the scan.
          </li>
        </ol>
        <p>
          Review the findings before removing anything. Files moved to the Trash
          continue to use space until you empty it. To unlock cleanup, choose
          License… in the ClearDisk menu and paste your key.
        </p>
        <p>
          <Link className="text-link" href="/disk-space-analyzer-mac">
            What the scan shows, and what it does not <ArrowRight size={14} />
          </Link>
        </p>
      </main>
      <Footer />
      <JsonLd data={softwareSchema} />
    </>
  );
}
