import type { Metadata } from 'next';
import './globals.css';
import { GoogleAds } from '@/components/google-ads';
import './reading-theme.css';
import { organizationSchema, publicPaths, SITE_URL } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { ClickAttribution } from '@/components/click-attribution';
import { VisitBeacon } from '@/components/visit-beacon';
export const metadata: Metadata = {
  title: 'ClearDisk — Mac Storage & Performance App',
  description:
    'Native macOS storage scanner, System Data analyzer, Why Slow performance monitor, and iCloud Drive diagnostic app.',
  verification: { google: 'w3gXqPIEHaBWE1faIs43-l-ZJhzy5RO7sLLwcObUlQE' },
  metadataBase: new URL(SITE_URL),
  icons: { icon: ['/icon.svg', '/favicon.ico'] },
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
        <GoogleAds publicPaths={publicPaths} />
        <ClickAttribution />
        <VisitBeacon />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
