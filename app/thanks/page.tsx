import { pageMetadata } from '@/lib/seo';
import { Header, Footer, DownloadButton } from '@/components/brand';
import { PaymentResult } from '@/components/payment-result';
export const metadata = pageMetadata(
  'ClearDisk — Test checkout status',
  'Check a ClearDisk test checkout result. No active license is issued by this preview.',
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
        <span className="eyebrow">STRIPE TEST CHECKOUT</span>
        <h1>
          One step closer
          <br />
          to a lighter Mac.
        </h1>
        <p>
          This page checks your test payment directly with Stripe. Live
          purchases and automatic license delivery will be available with
          ClearDisk 1.0.
        </p>
        <PaymentResult sessionId={session_id} />
        <DownloadButton label="Try the free preview" />
      </main>
      <Footer />
    </>
  );
}
