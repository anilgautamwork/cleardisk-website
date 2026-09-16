import type { Metadata } from 'next';
import './globals.css';
import { GoogleAds } from '@/components/google-ads';
import './reading-theme.css';
import { organizationSchema, pageMetadata, SITE_URL } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { ClickAttribution } from '@/components/click-attribution';
export const metadata: Metadata = {
  ...pageMetadata(
    'Mac Cleaner for System Data & Caches | ClearDisk',
    'Understand System Data, review caches and find large files with ClearDisk, a Mac cleanup app. Free local scans. One-time paid cleanup. No subscription.',
    '/',
  ),
  verification: { google: 'w3gXqPIEHaBWE1faIs43-l-ZJhzy5RO7sLLwcObUlQE' },
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/icon.svg' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <GoogleAds />
        <ClickAttribution />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
