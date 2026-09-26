import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/brand';
import { blogPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'ClearDisk Blog — Make room for what matters',
  'Practical notes from the makers of ClearDisk on Mac cleanup, storage decisions and keeping the files that matter. Read our latest article and storage guides.',
  '/blog',
);

export default function Blog() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="wrap guide-directory blog-directory"
      >
        <header>
          <span className="eyebrow">THE CLEARDISK BLOG</span>
          <h1>
            Make room for
            <br />
            <span>what matters.</span>
          </h1>
          <p>
            A closer look at the decisions behind a cleaner Mac.
            <br />
            From the people building ClearDisk.
          </p>
        </header>
        <section aria-label="Latest articles" className="blog-posts">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <span className="eyebrow">
                MAC CLEANUP ·{' '}
                <time dateTime={post.published}>
                  {new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'long',
                    timeZone: 'UTC',
                  }).format(new Date(post.published + 'T00:00:00Z'))}
                </time>
              </span>
              <h2>
                <Link href={'/' + post.slug}>{post.title}</Link>
              </h2>
              <p>{post.summary}</p>
              <Link className="text-link" href={'/' + post.slug}>
                Read the article <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </section>
        <p className="guide-directory-note">
          Looking for steps for a specific problem?{' '}
          <Link href="/guides">
            Explore the storage guides{' '}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
