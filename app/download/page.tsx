import { pageMetadata } from '@/lib/seo';
import { Header, Footer, Mark } from '@/components/brand';
import { ArrowDownToLine, Apple, ShieldCheck, HardDrive } from 'lucide-react';
export const metadata = pageMetadata(
  'Download ClearDisk for Mac — Free preview',
  'Download the free ClearDisk 0.1.1 preview for macOS 15+. Universal Apple silicon and Intel app. Explore local storage before cleanup.',
  '/download',
);
export default function Download() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <Mark large />
        <h1>
          A little more room.
          <br />A little less effort.
        </h1>
        <p>
          Download ClearDisk and discover what’s filling your Mac. Your files
          stay on your computer, right where they belong.
        </p>
        <div className="release-meta">
          <span>
            <Apple size={15} /> macOS 15+
          </span>
          <span>
            <HardDrive size={15} />
            Apple silicon + Intel
          </span>
          <span>
            <ShieldCheck size={15} />
            Notarized by Apple
          </span>
        </div>
        <a className="button primary" href="/ClearDisk.dmg" download>
          <ArrowDownToLine size={18} />
          Download free preview
        </a>
        <small>ClearDisk 0.1.1 · DMG · 2.8 MB</small>
        <div className="notice">
          <strong>You’re getting the preview release.</strong>
          <p>
            Explore the app today while ClearDisk 1.0 is being finished. The $10
            license and checkout shown on this site are for the upcoming
            release; you don’t need to purchase anything to try this preview.
          </p>
        </div>
        <h2>Three small steps. More clarity.</h2>
        <ol>
          <li>Open the downloaded ClearDisk.dmg.</li>
          <li>Drag ClearDisk into your Applications folder.</li>
          <li>
            Open ClearDisk, grant Full Disk Access when prompted, and scan your
            home folder.
          </li>
        </ol>
        <p>
          Review the findings before removing anything. Files moved to the Trash
          continue to use space until you empty it.
        </p>
      </main>
      <Footer />
    </>
  );
}
