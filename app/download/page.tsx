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
  'Download ClearDisk 2.2.1 for macOS 15 or later on Apple silicon or Intel. Scan your Mac for free, review large files, and unlock cleanup with a $10 license.',
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
        <small>ClearDisk 2.2.1 · DMG</small>
        <p className="software-disclosure">
          ClearDisk is a downloadable Mac app. It scans your disk on your Mac,
          shows what uses space and lets you move files you choose to the Trash.
          Performance also shows running processes and connection readings.
          Actions such as quitting apps or rebuilding the Spotlight index need
          confirmation. It installs no extensions or uploads your files. Turn off
          optional Start at login before quitting and removing ClearDisk.
        </p>
        <p>
          <a href="https://cleardisk.app/SHA256SUMS.txt">
            SHA-256 checksum for this download
          </a>
        </p>
        <h2>New in 2.2.1: readings and controls within reach</h2>
        <p>
          Disk scan, Why Slow and Permissions stay visible above the scrolling sidebar.
          Check disk access, return from Mac checks or Why Slow, or choose a
          folder to scan. Opening Permissions keeps scan progress and results;
          Back returns to your previous workspace.
        </p>
        <p>
          Storage sections become available after a scan. ClearDisk explains
          that state and leaves the scan controls within reach. macOS permissions
          remain your choice in System Settings.
        </p>
        <p>
          Why Slow opens the running-process list. Sort by CPU or
          memory and quit an app you no longer need, with confirmation before
          each quit. Protected system processes remain protected.
        </p>
        <p>
          A horizontal status bar shows disk space, CPU load and memory pressure.
          Turn on Menu bar there for readings and the five biggest running apps,
          sorted by memory or CPU. Its Quit buttons open a confirmation in
          ClearDisk. After a disk or folder scan, the menu also shows the three
          largest files over 100 MB, measured cache sizes where available, and
          developer junk. Review buttons open the app’s existing cleanup screens;
          the menu does not delete files. Monitoring runs while the window is open, or while the
          menu-bar option is enabled; local history follows your existing setting.
        </p>
        <h2>Performance tools included</h2>
        <p>
          The WhySlow tools are now part of ClearDisk. Open Why Slow for CPU
          and memory readings, process explanations, background items, internet
          checks and local usage charts. Enable a menu-bar monitor if you want
          to keep readings visible while working.
        </p>
        <p>
          Review supported Chrome, Brave and Edge tabs with optional browser
          Automation access. The internet speed test uses Apple’s servers after
          confirmation and consumes network data. Your existing license covers
          the licensed performance actions; no second purchase is needed.
        </p>
        <p>
          These readings help investigate a slowdown. They are not a hardware
          diagnosis, and missing readings do not mean everything is healthy.
          <Link href="/features"> Explore the features and limits</Link>.
        </p>
        <h2>Also included: Mac checks</h2>
        <p>
          Open Mac checks in the sidebar for two read-only tools. No full
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
          download 2.2.1 here once to get the updater. Your license stays valid.
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
