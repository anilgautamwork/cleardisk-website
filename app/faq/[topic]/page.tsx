import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { JsonLd } from '@/components/json-ld';
import { faqTopics, getFaqTopic } from '@/lib/faqs';
import { getGuide } from '@/lib/guides';
import { faqSchema, pageMetadata } from '@/lib/seo';
type Props = { params: Promise<{ topic: string }> };
export function generateStaticParams() {
  return faqTopics.map(({ slug }) => ({ topic: slug }));
}
export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const faq = getFaqTopic(topic);
  if (!faq)
    return { title: 'Page not found — ClearDisk', robots: { index: false } };
  return pageMetadata(faq.title, faq.description, '/faq/' + topic);
}
export default async function FaqTopicPage({ params }: Props) {
  const { topic } = await params;
  const faq = getFaqTopic(topic);
  if (!faq) notFound();
  const others = faqTopics.filter((t) => t.slug !== faq.slug);
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="guide-page wrap">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">ClearDisk</Link>
          <span>/</span>
          <Link href="/faq">FAQ</Link>
          <span>/</span>
          <span aria-current="page">{faq.title}</span>
        </nav>
        <header className="guide-heading">
          <span className="eyebrow">QUESTIONS AND ANSWERS</span>
          <h1>{faq.title}</h1>
          <p className="guide-summary">{faq.intro}</p>
        </header>
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <nav aria-label="On this page">
              <span className="eyebrow">ON THIS PAGE</span>
              <ol>
                {faq.questions.map((q) => (
                  <li key={q.id}>
                    <a href={'#' + q.id}>{q.question}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <article className="guide-body">
            {faq.questions.map((q) => {
              const guide = q.guide ? getGuide(q.guide) : undefined;
              return (
                <section id={q.id} key={q.id}>
                  <h2>{q.question}</h2>
                  <p>{q.answer}</p>
                  {guide && (
                    <p>
                      <Link className="text-link" href={'/' + guide.slug}>
                        Read the guide: {guide.title} <ArrowRight size={14} />
                      </Link>
                    </p>
                  )}
                </section>
              );
            })}
          </article>
        </div>
        <section className="guide-cta">
          <div>
            <span className="eyebrow">FROM A QUESTION TO YOUR OWN NUMBERS</span>
            <h2>
              See what’s using
              <br />
              your space.
            </h2>
            <p>
              ClearDisk’s free local scan shows the folders these answers
              describe, with their real sizes.
            </p>
          </div>
          <div>
            <DownloadButton label="Download free scanner" source="guides" />
            <small>macOS 15+ · version 1.0</small>
          </div>
        </section>
        <section className="related-guides">
          <span className="eyebrow">MORE QUESTIONS</span>
          <h2>Other FAQ topics.</h2>
          <div className="guide-grid">
            {others.map((t) => (
              <Link className="guide-card" href={'/faq/' + t.slug} key={t.slug}>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <span>
                  {t.questions.length} questions <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={faqSchema(faq)} />
    </>
  );
}
