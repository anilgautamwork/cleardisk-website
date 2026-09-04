import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Header, Footer, Mark } from '@/components/brand';
import { CheckoutButton } from '@/components/checkout-button';
import { Check, ShieldCheck } from 'lucide-react';
export const metadata = pageMetadata(
  'Get ClearDisk — $10 once',
  'Preview the planned $10 one-time ClearDisk checkout. This is test mode; live licenses are not yet available.',
  '/buy-now',
);
export default function Buy() {
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
            The planned ClearDisk 1.0 license unlocks cleanup on three Macs you
            own. Pay once, get all 1.x updates, and leave the subscriptions
            behind.
          </p>
          <div className="notice">
            <strong>Test checkout · no real payment</strong>
            <p>
              ClearDisk 1.0 is in development. This checkout uses Stripe’s test
              environment. No money is charged and no active license is issued.
              Use test card details only.
            </p>
          </div>
          <CheckoutButton />
          <small>
            For testing: 4242 4242 4242 4242 · any future expiry · any
            three-digit CVC.
          </small>
          <p className="purchase-free">
            Want to explore the app first?{' '}
            <Link href="/download">Download the free preview.</Link>
          </p>
        </div>
        <aside className="purchase-summary">
          <Mark />
          <h2>ClearDisk 1.0</h2>
          <span className="muted">Personal license · planned release</span>
          <div className="price">
            $10<span>USD · once</span>
          </div>
          <ul>
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
              All 1.x updates
            </li>
            <li>
              <Check />
              No subscription
            </li>
          </ul>
          <div>
            <ShieldCheck size={16} />
            30-day refund policy at launch
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}
