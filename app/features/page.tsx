import Link from 'next/link';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'ClearDisk Features: Storage, Performance & Browser Tools',
  'Explore free Mac storage scans, CPU and memory monitoring, browser review and iCloud diagnostics. See what the one-time ClearDisk license unlocks.',
  '/features',
);
export default function Features() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap product-page">
        <h1>
          See your storage.
          <br />
          Understand your slowdown.
        </h1>
        <p>
          ClearDisk combines disk cleanup with the WhySlow performance tools.
          Find large files, check CPU and memory activity, and inspect iCloud
          Drive in one Mac app. Scans and diagnostics are free; your license
          unlocks cleanup and guided actions.
        </p>
        <DownloadButton />
        <div className="product-sections">
          <section id="performance">
            <h2>Performance, now inside ClearDisk</h2>
            <p>
              ClearDisk 2.2.1 includes the WhySlow tools. Inspect CPU activity,
              memory pressure, thermal state and running processes. Review
              background items, follow local usage charts or enable an optional
              menu-bar monitor. Readings depend on hardware and permissions;
              they are not a hardware diagnosis or a guaranteed speed boost.
            </p>
            <Link href="/blog/kernel-task-high-cpu-mac">
              What high kernel_task CPU can mean
            </Link>
          </section>
          <section>
            <h2>Internet and browser checks</h2>
            <p>
              Inspect connection information and available per-app bandwidth
              readings. Run Apple’s networkQuality test after confirmation, or
              review supported Chrome, Brave and Edge tabs with optional
              Automation access. Private browser windows are excluded. Tab and
              extension memory figures are estimates, not precise measurements.
            </p>
            <Link href="/blog/networkquality-mac-internet-test">
              Test a slow connection with Apple’s tool
            </Link>
          </section>
          <section>
            <h2>Choose an action after reviewing the evidence</h2>
            <p>
              Your existing license covers licensed performance actions,
              including quitting apps, supported browser tab actions and
              rebuilding Spotlight’s index. Actions ask for confirmation;
              protected system processes cannot be quit through ClearDisk. Force
              Quit can lose unsaved work. Monitoring does not remove your
              files. Usage history is stored locally.
            </p>
            <Link href="/privacy">
              Read about local history and permissions
            </Link>
          </section>
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
            <h2>Apple Intelligence storage</h2>
            <p>
              Open Mac checks to inspect recognized Apple Intelligence model and
              support folders. See measured sizes and which locations could not
              be read. macOS manages these files; ClearDisk does not remove
              them, and protected locations can leave an incomplete total.
            </p>
            <Link href="/download">Get Mac checks in ClearDisk 2.2.1</Link>
          </section>
          <section>
            <h2>Find Intel-only apps</h2>
            <p>
              Review the main executables of apps in your Applications folders
              without launching them. Intel-only, Universal, Apple silicon and
              undetermined results stay distinct. Check with each developer for
              updates; this scan does not audit plug-ins or helper programs.
            </p>
            <a href="https://support.apple.com/102527">
              Apple’s Intel app compatibility guidance
            </a>
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
              For MacBook Air, MacBook Pro and desktop Macs running macOS 15 or
              later. ClearDisk supports Apple silicon and Intel. Scan results
              stay on your Mac. Existing ClearDisk licenses include the iCloud
              Doctor actions.
            </p>
            <Link href="/pricing">Compare free scanning and the license</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
