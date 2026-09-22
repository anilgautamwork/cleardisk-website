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
  'Download ClearDisk for Mac',
  'Download ClearDisk 1.1 for macOS 15 and later. Universal Apple silicon and Intel app. Free scanning, $10 one-time cleanup license.',
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
        <small>ClearDisk 2.0.0 · DMG</small>
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
        <h2>New in 2.0.0</h2>
        <p>
          Type “delete” to confirm permanent removal, without retyping long
          filenames. Move to Trash is still available. The new installer shows
          exactly where to drag the app.
        </p>
        <p>
          For future releases, choose ClearDisk → Check for Updates… to download
          and install a signed update from the app. If you have 1.1.1 or earlier,
          download 2.0.0 here once to get the updater. Your license stays valid.
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
