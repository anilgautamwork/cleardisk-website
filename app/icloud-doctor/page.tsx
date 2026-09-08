import Link from 'next/link';
import { ArrowRight, Cloud, FileCheck2, HardDrive, Search } from 'lucide-react';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { JsonLd } from '@/components/json-ld';
import { icloudGuides } from '@/lib/guides-icloud';
import { pageMetadata, canonical, SITE_URL } from '@/lib/seo';

export const metadata = pageMetadata(
  'iCloud Doctor for Mac — inside ClearDisk',
  'Understand iCloud Drive sync problems and the space local copies use. Inspect file states, request downloads, and archive verified copies inside ClearDisk.',
  '/icloud-doctor',
);

export default function ICloudDoctor() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap icloud-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">ClearDisk</Link>
          <span>/</span>
          <span aria-current="page">iCloud Doctor</span>
        </nav>
        <header className="icloud-heading">
          <span className="eyebrow">ICLOUD DOCTOR · INSIDE CLEARDISK 1.1</span>
          <h1>
            A clearer view
            <br />
            of your iCloud Drive.
          </h1>
          <p>
            Understand sync problems and the space local copies use. See what
            macOS reports. Choose the next step with confidence.
          </p>
          <div className="hero-ctas">
            <DownloadButton />
            <Link className="button quiet" href="#icloud-guides">
              Find your answer <ArrowRight size={17} />
            </Link>
          </div>
          <small>
            macOS 15+ · Free scanning · Uses your existing ClearDisk license
          </small>
        </header>
        <section
          className="icloud-overview"
          aria-labelledby="icloud-observations"
        >
          <div>
            <span className="eyebrow">START WITH WHAT YOU CAN SEE</span>
            <h2 id="icloud-observations">
              A file’s state.
              <br />A useful next step.
            </h2>
            <p>
              Start a dedicated iCloud Drive scan. Review errors, conflicts and
              pending transfers alongside healthy cloud-only files and
              downloaded copies.
            </p>
            <p>
              Missing metadata stays Unknown. Partial access stays visible. A
              scan describes the items it could inspect.
            </p>
          </div>
          <dl className="icloud-states">
            <div>
              <dt>
                <Cloud size={20} />
                Cloud-only
              </dt>
              <dd>A normal state. Download when you need offline access.</dd>
            </div>
            <div>
              <dt>
                <HardDrive size={20} />
                Local copies
              </dt>
              <dd>Compare allocated local bytes with a file’s logical size.</dd>
            </div>
            <div>
              <dt>
                <Search size={20} />
                Waiting or an error
              </dt>
              <dd>Inspect the reported state and reveal the file in Finder.</dd>
            </div>
            <div>
              <dt>
                <FileCheck2 size={20} />
                Potentially stuck
              </dt>
              <dd>
                Repeated comparable pending observations. Evidence to
                investigate, not proof of continuous failure.
              </dd>
            </div>
          </dl>
        </section>
        <section className="icloud-actions" aria-labelledby="icloud-choices">
          <span className="eyebrow">YOU CHOOSE WHAT CHANGES</span>
          <h2 id="icloud-choices">
            Different goals.
            <br />
            Different actions.
          </h2>
          <div className="icloud-action-list">
            <article>
              <span>01</span>
              <div>
                <h3>Bring a file back for offline work.</h3>
                <p>
                  Request a download, then check its observed state. A request
                  is not a completed transfer. Use Finder’s Keep Downloaded
                  control for persistent retention.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Free Mac space. Keep the cloud original.</h3>
                <p>
                  Confirm an individual local-download removal. ClearDisk
                  rechecks upload and transfer state first and refuses uncertain
                  or unsafe items. This frees local storage only, not your
                  iCloud quota.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Make a verified independent copy.</h3>
                <p>
                  Archive supported documents and data-only folders to
                  your dedicated ClearDisk Archives folder. ClearDisk verifies contents and source stability
                  while retaining the original. Review any later cloud deletion
                  yourself in Finder.
                </p>
              </div>
            </article>
          </div>
        </section>
        <aside className="icloud-boundary">
          <h2>Clarity has a scope.</h2>
          <p>
            iCloud Doctor works with accessible iCloud Drive files. It does not
            inspect your Photos, Notes or Messages, measure complete account
            storage, resolve document conflicts, or guarantee a sync repair.
            Check{' '}
            <a href="https://www.apple.com/support/systemstatus/">
              Apple’s System Status
            </a>{' '}
            for reported service incidents.
          </p>
          <p>
            Scan history stays local and can be cleared. Scan filenames,
            contents and reports are not sent to website analytics.
          </p>
        </aside>
        <section className="related-guides" id="icloud-guides">
          <span className="eyebrow">THE ICLOUD FIELD GUIDE</span>
          <h2>Start with your question.</h2>
          <p>
            For local SSD usage, begin with{' '}
            <Link href="/icloud-drive-taking-up-space-on-mac">
              why iCloud Drive takes up space on your Mac
            </Link>
            .
          </p>
          <div className="guide-grid">
            {icloudGuides.map((guide) => (
              <Link
                className="guide-card"
                href={'/' + guide.slug}
                key={guide.slug}
              >
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <span>
                  Read guide <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'ClearDisk',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'iCloud Doctor',
              item: canonical('/icloud-doctor'),
            },
          ],
        }}
      />
    </>
  );
}
