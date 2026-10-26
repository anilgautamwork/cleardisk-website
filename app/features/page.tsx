import Link from 'next/link';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { MonitorPreview } from '@/components/monitor-preview';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'ClearDisk Features: Why Slow, Menu Bar & Mac Cleanup',
  'Check CPU, memory and disk space from your menu bar. Explore Why Slow, large-file review, cache cleanup and iCloud tools, with free scans in ClearDisk.',
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
        <nav className="feature-page-shortcuts" aria-label="Feature sections">
          <a href="#performance">Why Slow</a>
          <a href="#menu-bar">Menu-bar monitor</a>
          <a href="#storage-review">Large files and caches</a>
          <a href="#permissions">Permissions</a>
        </nav>
        <div className="product-sections">
          <section id="performance">
            <h2>Why Slow: find the apps keeping your Mac busy</h2>
            <p>
              Choose Why Slow at the top of the sidebar to open running
              processes. Sort by CPU or memory, inspect thermal state and
              background items, and follow local usage charts. You can open
              these tools before scanning your disk. Readings depend on hardware
              and permissions; they are not a hardware diagnosis or a guaranteed
              speed boost.
            </p>
            <Link href="/blog/kernel-task-high-cpu-mac">
              What high kernel_task CPU can mean
            </Link>
          </section>
          <section id="permissions">
            <h2>Find your way back, and check disk access</h2>
            <p>
              Disk scan, Why Slow and Permissions stay above the scrolling
              workspace list. Open Permissions to check disk access and read the
              macOS setup steps, or choose a folder instead of a full-disk scan.
              ClearDisk cannot grant itself macOS permissions.
            </p>
            <p>
              Back returns to the previous workspace. Opening permission help
              preserves scan progress and results, and storage sections explain
              why they are unavailable before a scan finishes.
            </p>
            <Link href="/faq/cleardisk">Read the permissions questions</Link>
          </section>
          <section id="menu-bar" className="feature-menu-detail">
            <div>
              <h2>CPU, memory and disk space from your menu bar</h2>
              <p>
                Enable the optional icon from the horizontal status bar in
                ClearDisk. Click it for whole-Mac CPU load, memory used, memory
                pressure and available disk space. The same readings stay
                visible across the top of the main window.
              </p>
              <p>
                The menu lists up to five running apps, sorted by memory or CPU.
                Its Quit buttons open a confirmation in the main app and use
                your existing license. Save work before quitting; protected
                system processes cannot be closed through ClearDisk.
              </p>
              <p>
                Monitoring runs while the main window is open or the menu-bar
                monitor is enabled. Usage history stays local and follows your
                history setting. The menu shows the last check time; stale or
                unavailable readings are marked.
              </p>
            </div>
            <MonitorPreview />
          </section>
          <section id="storage-review">
            <h2>Review large files, caches and developer junk</h2>
            <p>
              Complete a disk or folder scan to add storage findings to the
              menu. See up to three large files of at least 100 MB, available
              cache measurements and developer-junk totals. Review links open
              the corresponding screen in ClearDisk. Scan date, scope and
              skipped-file limits help you judge what the results cover.
            </p>
            <p>
              Size alone does not make a file safe to delete. Inspect personal
              files, backups and app data before choosing cleanup. Removal
              happens in the app with your confirmation and license, never
              directly from the menu.
            </p>
            <Link href="/find-large-files-on-mac">
              How to review large files
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
              Quit can lose unsaved work. Monitoring does not remove your files.
              Usage history is stored locally.
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
