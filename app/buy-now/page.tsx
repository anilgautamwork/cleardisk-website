import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Header, Footer } from '@/components/brand';
import { EmbeddedCheckoutCard } from '@/components/embedded-checkout';
import { visitorPrice } from '@/lib/visitor-price';
import { Check, ShieldCheck } from 'lucide-react';
export const metadata = pageMetadata(
  'Buy ClearDisk — $10 once',
  'Buy the ClearDisk 1.0 cleanup license for $10, paid once. Your key arrives instantly on screen and by email. 30-day refund.',
  '/buy-now',
);
export default async function Buy() {
  const price = await visitorPrice();
  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="wrap subpage purchase-page"
      >
        <div>
          <span className="eyebrow">
            ONE LITTLE PURCHASE. MORE POSSIBILITIES.
          </span>
          <h1>
            A lighter Mac.
            <br />
            Yours to keep.
          </h1>
          <p>
            The ClearDisk 1.0 license unlocks cleanup on three Macs you own. Pay
            once, get all 1.x updates, and leave the subscriptions behind.
          </p>
          <div className="notice">
            <strong>Instant license key</strong>
            <p>
              You pay once through Stripe. Your license key appears on the next
              page and is emailed to you. Paste it into ClearDisk and cleanup
              unlocks on up to three Macs you own. 30-day refund, no questions.
            </p>
          </div>
          <ul className="purchase-points">
            <li>
              <Check />
              Cleanup inside ClearDisk
            </li>
            <li>
              <Check />
              Up to 3 personal Macs
            </li>
            <li>
              <Check />
              All 1.x updates · no subscription
            </li>
            <li>
              <ShieldCheck />
              30-day money-back guarantee
            </li>
          </ul>
          <small>
            Payments are processed by Stripe for TechMarbles Web Solutions Pvt.
            Ltd., the maker of ClearDisk. Your statement shows CLEARDISK next to
            the TechMarbles name. Prices appear in your local currency at
            checkout.
          </small>
          <p className="purchase-free">
            Want to explore the app first?{' '}
            <Link href="/download">Download ClearDisk and scan for free.</Link>
          </p>
        </div>
        <aside className="checkout-aside">
          <EmbeddedCheckoutCard
            label={`Buy ClearDisk 1.0 · ${price.display}`}
          />
        </aside>
      </main>
      <Footer />
    </>
  );
}
