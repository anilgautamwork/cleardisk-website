import { pageMetadata } from '@/lib/seo';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { PaymentResult } from '@/components/payment-result';
export const metadata = pageMetadata(
  'ClearDisk — Your license key',
  'Your ClearDisk 1.0 license key and how to activate it on up to three Macs.',
  '/thanks',
);
export default async function Thanks({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">YOU’RE ALL SET</span>
        <h1>
          One step closer
          <br />
          to a lighter Mac.
        </h1>
        <p>
          Paste the key into ClearDisk under License…, or click the activate
          button on the Mac where ClearDisk is installed.
        </p>
        <PaymentResult sessionId={session_id} />
        <DownloadButton label="Download ClearDisk" />
      </main>
      <Footer />
    </>
  );
}
