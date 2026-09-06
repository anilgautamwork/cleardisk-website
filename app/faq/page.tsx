import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/brand';
import { faqTopics } from '@/lib/faqs';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Mac storage FAQ — ClearDisk',
  'Short answers to the questions people ask about System Data, a full Mac, caches, uninstalling apps, backups and cloud drives, and ClearDisk itself.',
  '/faq',
);
export default function Faq() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap guide-directory">
        <header>
          <span className="eyebrow">QUESTIONS AND ANSWERS</span>
          <h1>
            Mac storage FAQ.
            <br />
            <span>Short answers, then the guide.</span>
          </h1>
          <p>
            Each topic collects the questions people search for most.
            <br />
            Every answer links to the guide that goes deeper.
          </p>
        </header>
        <div className="guide-grid">
          {faqTopics.map((topic) => (
            <Link
              className="guide-card"
              href={'/faq/' + topic.slug}
              key={topic.slug}
            >
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span>
                {topic.questions.length} questions <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
        <p className="guide-directory-note">
          Looking for the step-by-step version?{' '}
          <Link href="/guides">
            Browse all storage guides <ArrowRight size={14} />
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
