import { pageMetadata } from '@/lib/seo';
import { Header, Footer } from '@/components/brand';
import { RecoverForm } from '@/components/recover-form';
export const metadata = pageMetadata(
  'Recover your ClearDisk key',
  'Lost your ClearDisk license key? Enter the email you used at checkout and we will send it again.',
  '/recover',
);
export default function Recover() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap subpage">
        <span className="eyebrow">LOST YOUR KEY?</span>
        <h1>Find your key again.</h1>
        <p>
          Enter the email address you used at checkout. If it matches a
          purchase, the key is on its way.
        </p>
        <RecoverForm />
      </main>
      <Footer />
    </>
  );
}
