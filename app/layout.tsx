import type { Metadata } from 'next';
import './globals.css';
import './reading-theme.css';
import { organizationSchema, pageMetadata, SITE_URL } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
export const metadata: Metadata = {
  ...pageMetadata(
    'ClearDisk — Clear System Data on Mac',
    'Find what is filling your Mac with ClearDisk. Free local scanning, clear storage breakdowns and a $10 one-time cleanup license to pre-order.',
    '/',
  ),
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
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
