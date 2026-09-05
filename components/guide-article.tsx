import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Header, Footer, DownloadButton } from './brand';
import { getGuide, type Guide } from '@/lib/guides';
import { guideSchema } from '@/lib/seo';
import { JsonLd } from './json-ld';

export function GuideArticle({ guide }: { guide: Guide }) {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="guide-page wrap">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">ClearDisk</Link>
          <span>/</span>
          <Link href="/guides">Storage guides</Link>
        </nav>
        <header className="guide-heading">
          <span className="eyebrow">A LITTLE MORE CLARITY</span>
          <h1>{guide.title}</h1>
          <p className="guide-summary">{guide.summary}</p>
          <div className="guide-byline">
            <span>By ClearDisk</span>
            <span>·</span>
            <time dateTime={guide.updated}>
              {new Intl.DateTimeFormat('en-US', {
                dateStyle: 'long',
                timeZone: 'UTC',
              }).format(new Date(guide.updated + 'T00:00:00Z'))}
            </time>
            <span>·</span>
            <span>
              {Math.max(
                2,
                Math.ceil(
                  guide.sections
                    .flatMap((s) => [...s.paragraphs, ...(s.items || [])])
                    .join(' ')
                    .split(/\s+/).length / 200,
                ),
              )}{' '}
              min read
            </span>
          </div>
        </header>
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <nav aria-label="On this page">
              <span className="eyebrow">ON THIS PAGE</span>
              <ol>
                {guide.sections.map((section) => (
                  <li key={section.id}>
                    <a href={'#' + section.id}>
                      {section.title.replace(/^\d+\. /, '')}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="guide-side-note">
              <ShieldCheck size={19} />
              <p>
                Your files deserve a second look. Identify first. Review before
                removing.
              </p>
            </div>
          </aside>
          <article className="guide-body">
            {guide.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <section className="guide-references">
              <h2>References & further reading</h2>
              <p>
                These guides combine the linked official guidance with
                ClearDisk’s documented behavior. Your files and app settings
                determine the right next step.
              </p>
              <ul>
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
        <section className="guide-cta">
          <div>
            <span className="eyebrow">FROM A NUMBER TO AN ANSWER</span>
            <h2>
              See what’s using
              <br />
              your space.
            </h2>
            <p>
              Explore your Mac with ClearDisk’s free local scanner.
              <br />
              Review the files. Keep the control.
            </p>
          </div>
          <div>
            <DownloadButton label="Download free scanner" source="guides" />
            <small>macOS 15+ · version 1.0</small>
            <Link href="/#pricing">
              Cleanup license: $10 once <ArrowRight size={13} />
            </Link>
          </div>
        </section>
        <section className="related-guides">
          <span className="eyebrow">KEEP EXPLORING</span>
          <h2>A clearer next step.</h2>
          <div className="guide-grid">
            {guide.related.map((slug) => {
              const related = getGuide(slug)!;
              return (
                <Link className="guide-card" href={'/' + slug} key={slug}>
                  <h3>{related.title}</h3>
                  <p>{related.description}</p>
                  <span>
                    Read guide <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={guideSchema(guide)} />
    </>
  );
}
