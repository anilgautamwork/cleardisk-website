import Link from 'next/link';
import { SiteNavigation } from './site-navigation';
import { ArrowDownToLine } from 'lucide-react';
import { visitorPrice } from '@/lib/visitor-price';
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
export async function Header() {
  const price = await visitorPrice();
  return (
    <header className="header wrap">
      <Link className="brand" href="/" aria-label="ClearDisk home">
        <Mark />
        ClearDisk
      </Link>
      <SiteNavigation />
      <div className="header-actions">
        <Link className="buy-link" href="/buy-now">
          Buy for {price.display}
        </Link>
        <DownloadButton compact />
      </div>
    </header>
  );
}
export function DownloadButton({
  label = 'Download ClearDisk',
  compact = false,
  source,
}: {
  label?: string;
  compact?: boolean;
  source?: 'guides';
}) {
  return (
    <Link
      className={`button primary download-button${compact ? ' small' : ''}`}
      href={source ? `/download?source=${source}` : '/download'}
    >
      <ArrowDownToLine size={compact ? 16 : 18} aria-hidden="true" />
      {compact ? (
        <>
          <span className="label-full">{label}</span>
          <span className="label-short">Download</span>
        </>
      ) : (
        label
      )}
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
      <nav className="footer-groups" aria-label="Footer navigation">
        {[
          {
            title: 'Product',
            links: [
              ['Features', '/features'],
              ['iCloud Doctor', '/icloud-doctor'],
              ['Download', '/download'],
              ['Pricing', '/pricing'],
            ],
          },
          {
            title: 'Learn',
            links: [
              ['Storage guides', '/guides'],
              ['FAQs', '/faq'],
              ['About ClearDisk', '/about'],
              ['Sitemap', '/sitemap.xml'],
            ],
          },
          {
            title: 'Support',
            links: [
              ['Get help', '/support'],
              ['Recover your license', '/recover'],
              ['Purchase a license', '/buy-now'],
              ['Contact us', 'mailto:hello@cleardisk.app'],
            ],
          },
          {
            title: 'Legal',
            links: [
              ['Privacy policy', '/privacy'],
              ['Terms & refunds', '/terms'],
            ],
          },
        ].map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </section>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>© 2026 ClearDisk</span>
        <span>Made for the Mac you already love.</span>
      </div>
    </footer>
  );
}
