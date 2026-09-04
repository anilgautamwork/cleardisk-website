import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'ClearDisk — More space. More possibilities.',
  description:
    'Find what’s filling your Mac. Explore System Data, discover large files, and clear clutter with confidence. Free scanning. $10 one-time cleanup license.',
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: 'ClearDisk — Make room for what matters',
    description:
      'A clearer picture of your Mac. Free scanning, thoughtful cleanup, no subscription.',
    type: 'website',
  },
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
