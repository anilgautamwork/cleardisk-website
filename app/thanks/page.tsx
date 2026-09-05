import { pageMetadata } from '@/lib/seo';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { PaymentResult } from '@/components/payment-result';
export const metadata = pageMetadata(
  'ClearDisk — Order confirmation',
  'Confirmation for your ClearDisk 1.0 pre-order. Your license key is emailed when 1.0 ships.',
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
        <span className="eyebrow">ORDER CONFIRMATION</span>
        <h1>
          One step closer
          <br />
          to a lighter Mac.
        </h1>
        <p>
          This page checks your payment directly with Stripe. Your license key
          is emailed when ClearDisk 1.0 ships. Until then, the free preview is
          yours to explore.
        </p>
        <PaymentResult sessionId={session_id} />
        <DownloadButton label="Try the free preview" />
      </main>
      <Footer />
    </>
  );
}
