import Link from 'next/link';
import { Header, Footer } from '@/components/brand';
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">404 · NOTHING STORED HERE</span>
        <h1>
          Let’s find
          <br />a clearer path.
        </h1>
        <p>
          This page does not exist. Our storage guides can help you find the
          answer you need.
        </p>
        <Link className="button primary" href="/guides">
          Explore storage guides
        </Link>
        <Link className="text-link" href="/">
          Back to ClearDisk
        </Link>
      </main>
      <Footer />
    </>
  );
}
