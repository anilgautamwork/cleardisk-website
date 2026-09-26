import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/brand';
import { guideGroups } from '@/lib/guides';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Mac storage guides — ClearDisk',
  'Mac storage guides from ClearDisk: what System Data is, why a Mac stays full after deleting files, how to find large files, and cleanup for Xcode and Docker.',
  '/guides',
);
export default function Guides() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap guide-directory">
        <header>
          <span className="eyebrow">THE STORAGE FIELD GUIDE</span>
          <h1>
            Mac storage guides.
            <br />
            <span>Less mystery. More room.</span>
          </h1>
          <p>
            A full disk starts with a question.
            <br />
            Find your answer, then choose what to do.
          </p>
        </header>
        <Link href="/clear-system-data-on-mac" className="guide-feature">
          <div>
            <span className="eyebrow">START HERE</span>
            <h2>
              Clear System Data.
              <br />
              Keep what matters.
            </h2>
            <p>
              A practical walkthrough: find the files behind the number,
              <br />
              review your options, and understand the result.
            </p>
            <span className="text-link">
              Read the cleanup guide <ArrowRight size={17} />
            </span>
          </div>
          <div className="guide-feature-art" aria-hidden="true">
            <span>System Data</span>
            <strong>?</strong>
            <small>Find what’s inside.</small>
          </div>
        </Link>
        <section
          id="choosing-a-guide"
          className="guide-topic-section guide-orientation"
        >
          <h2>Not sure where to start?</h2>
          <p>
            Start with the problem you can see. If your Mac says its disk is
            full,
            <Link href="/how-to-check-storage-on-mac">
              {' '}
              check your storage
            </Link>{' '}
            before choosing a cleanup method. A large System Data number, a
            folder of old videos and an iCloud warning need different next
            steps.
          </p>
          <p>
            For files you recognise, use the{' '}
            <Link href="/find-large-files-on-mac">large-file guide</Link> to
            find what is taking up room. Already deleted something, but the
            number has barely moved? Read why{' '}
            <Link href="/mac-storage-not-updating-after-deleting-files">
              Mac storage may not update after deleting files
            </Link>{' '}
            before removing anything else.
          </p>
          <p>
            If the warning mentions iCloud, start with{' '}
            <Link href="/icloud-storage-full-but-not-mac">
              iCloud storage versus Mac storage
            </Link>
            . For a named app or developer folder, choose its topic below: the
            guides explain what those files do and which cleanup controls to
            use.
          </p>
          <p>
            Before deleting, check the file path and keep a backup of anything
            you need. You can follow these guides using macOS and your apps’ own
            controls; a ClearDisk scan is optional. If a folder is unfamiliar,
            find out what created it before deciding whether it can go.
          </p>
        </section>
        <nav className="guide-topic-nav" aria-label="Guide topics">
          {guideGroups.map((group) => (
            <a key={group.id} href={'#' + group.id}>
              {group.title}
            </a>
          ))}
        </nav>
        {guideGroups.map((group) => (
          <section id={group.id} key={group.id} className="guide-topic-section">
            <h2>{group.title}</h2>
            <div className="guide-grid">
              {group.guides.map((guide) => (
                <article className="guide-card" key={guide.slug}>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <Link
                    className="guide-card-link"
                    href={'/' + guide.slug}
                    aria-label={'Read the guide: ' + guide.title}
                  >
                    Read the guide <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
        <p className="guide-directory-note">
          Want the short version first?{' '}
          <Link href="/faq">
            Read the FAQ <ArrowRight size={14} />
          </Link>
        </p>
        <p className="guide-directory-note">
          A guide can help you decide. A local scan can show you the files.{' '}
          <Link href="/download">
            Try ClearDisk for free <ArrowRight size={14} />
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
