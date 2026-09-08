'use client';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { useEffect, useRef } from 'react';
const groups = [
  {
    label: 'Features',
    links: [
      ['All features', '/features'],
      ['iCloud Doctor', '/icloud-doctor'],
      ['System Data explained', '/what-is-system-data-on-mac'],
      ['Visual disk analysis', '/disk-space-analyzer-mac'],
    ],
  },
  {
    label: 'Learn',
    links: [
      ['Storage guides', '/guides'],
      ['Frequently asked questions', '/faq'],
      ['About ClearDisk', '/about'],
    ],
  },
];
export function SiteNavigation() {
  const root = useRef<HTMLElement>(null);
  const closeMenus = () =>
    root.current
      ?.querySelectorAll('details[open]')
      .forEach((el) => el.removeAttribute('open'));
  useEffect(() => {
    const close = () =>
      root.current
        ?.querySelectorAll('details[open]')
        .forEach((el) => el.removeAttribute('open'));
    const outside = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) close();
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const open = root.current?.querySelector('details[open]');
        close();
        (open?.querySelector('summary') as HTMLElement)?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, []);
  return (
    <nav ref={root} className="site-navigation" aria-label="Main navigation">
      <div className="desktop-navigation">
        {groups.map((group) => (
          <details
            className="nav-dropdown"
            name="desktop-navigation"
            key={group.label}
          >
            <summary>
              {group.label}
              <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="nav-panel">
              {group.links.map(([label, href]) => (
                <Link onClick={closeMenus} key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        <Link onClick={closeMenus} href="/pricing">
          Pricing
        </Link>
        <Link onClick={closeMenus} href="/support">
          Support
        </Link>
      </div>
      <details className="mobile-navigation">
        <summary aria-label="Open navigation menu">
          <Menu size={21} aria-hidden="true" />
        </summary>
        <div className="mobile-panel">
          {groups.map((group) => (
            <section key={group.label}>
              <h2>{group.label}</h2>
              {group.links.map(([label, href]) => (
                <Link onClick={closeMenus} key={href} href={href}>
                  {label}
                </Link>
              ))}
            </section>
          ))}
          <section>
            <h2>Get ClearDisk</h2>
            <Link onClick={closeMenus} href="/pricing">
              Pricing
            </Link>
            <Link onClick={closeMenus} href="/support">
              Support
            </Link>
            <Link onClick={closeMenus} href="/buy-now">
              Buy a license
            </Link>
          </section>
        </div>
      </details>
    </nav>
  );
}
