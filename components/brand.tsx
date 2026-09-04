import Link from 'next/link';
import { ArrowUpRight, ArrowDownToLine } from 'lucide-react';
export function Mark({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand-mark ${large ? 'large' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="M28 10A13 13 0 1 0 30 28"
          stroke="currentColor"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="m27 5 1.8 5.2L34 12l-5.2 1.8L27 19l-1.8-5.2L20 12l5.2-1.8L27 5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
export function Header() {
  return (
    <header className="header wrap">
      <Link className="brand" href="/" aria-label="ClearDisk home">
        <Mark />
        ClearDisk
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#features">Why ClearDisk</Link>
        <Link href="/guides">Storage guides</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/#faq">FAQs</Link>
      </nav>
      <Link className="button small light" href="/download">
        Get ClearDisk <ArrowUpRight size={15} />
      </Link>
    </header>
  );
}
export function DownloadButton({
  label = 'Download for Mac',
}: {
  label?: string;
}) {
  return (
    <Link className="button primary" href="/download">
      <ArrowDownToLine size={18} />
      {label}
      <span className="button-free">Free</span>
    </Link>
  );
}
export function Footer() {
  return (
    <footer className="wrap footer">
      <div>
        <Link className="brand" href="/">
          <Mark />
          ClearDisk
        </Link>
        <p>A little less clutter. A lot more possibility.</p>
      </div>
      <div className="footer-links">
        <Link href="/guides">Storage guides</Link>
        <Link href="/download">Download</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms & refunds</Link>
        <a href="mailto:hello@cleardisk.app">
          Contact <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ClearDisk</span>
        <span>Made for the Mac you already love.</span>
      </div>
    </footer>
  );
}
