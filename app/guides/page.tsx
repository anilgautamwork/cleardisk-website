import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/brand';
import { guideGroups } from '@/lib/guides';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Mac storage guides — ClearDisk',
  'Understand System Data, investigate a full Mac, and find a practical next step. Clear answers before cleanup.',
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
                <Link
                  className="guide-card"
                  href={'/' + guide.slug}
                  key={guide.slug}
                >
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <span>
                    Read the guide <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
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
