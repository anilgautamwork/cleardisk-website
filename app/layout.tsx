import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { pageMetadata, SITE_URL } from '@/lib/seo';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  ...pageMetadata(
    'ClearDisk — Clear System Data on Mac',
    'Find what is filling your Mac with ClearDisk. Free local scanning, clear storage breakdowns and a planned $10 one-time cleanup license.',
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
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
