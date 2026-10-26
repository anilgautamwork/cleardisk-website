import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  LockKeyhole,
  HardDrive,
  Layers3,
  Code2,
  FolderOpen,
  FileSearch,
  Undo2,
  Laptop,
} from 'lucide-react';
import { Header, Footer, DownloadButton, Mark } from '@/components/brand';
import { visitorPrice } from '@/lib/visitor-price';
import { JsonLd } from '@/components/json-ld';
import { softwareSchema, websiteSchema, SITE_URL } from '@/lib/seo';
import { StoragePreview } from '@/components/storage-preview';
import { PageMotion } from '@/components/motion';
import { ProductDemo } from '@/components/product-demo';
import { getFaqTopic } from '@/lib/faqs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
// Use the same reviewed product answers in the page and its structured data.
const productAnswers: [string, string, string?][] = [
  'is-scanning-free',
  'price',
  'uploads',
  'which-macs',
  'refund',
].map((id) => {
  const answer = getFaqTopic('cleardisk')!.questions.find(
    (item) => item.id === id,
  )!;
  return [answer.question, answer.answer, answer.guide];
});
const faqs: [string, string, string?][] = [
  ...productAnswers,
  [
    'Do existing owners need a separate WhySlow license?',
    'No. The WhySlow performance tools are included in ClearDisk 2.2.1. Your existing ClearDisk key covers licensed performance actions as well as cleanup and iCloud Doctor actions. Update ClearDisk from the app to get the current version.',
  ],
  [
    'Does a scan change or delete anything?',
    'No. A scan reports what ClearDisk can inspect. You choose and confirm cleanup separately. Files go to the Trash by default; permanent deletion has a separate typed confirmation. Review personal files and backups before removing them. Performance actions also ask for confirmation; save work before closing an app or tab.',
  ],
];
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer, guide]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: guide ? `${answer} Full guide: ${SITE_URL}/${guide}` : answer,
    },
  })),
};
export default async function Home() {
  const price = await visitorPrice();
  return (
    <>
      <Header />
      <PageMotion />
      <main id="main-content" tabIndex={-1}>
        <section className="hero">
          <div className="hero-content wrap">
            <div className="hero-intro">
              <div className="hero-copy" data-reveal>
                <h1>
                  See what’s filling your Mac.
                  <br />
                  <span>And what’s keeping it busy.</span>
                </h1>
                <p className="hero-description">
                  Mac cleanup, CPU and memory monitoring, and iCloud Drive
                  diagnostics in one app. Inspect for free. Choose what to
                  change.
                </p>
                <div className="hero-ctas">
                  <DownloadButton label="Download for Mac" />
                  <Link className="button quiet" href="/buy-now">
                    Buy for {price.display} <ArrowUpRight size={16} />
                  </Link>
                </div>
                <p className="hero-offer">
                  Free scans and diagnostics.{' '}
                  <strong>Unlock actions for {price.display}, once.</strong> No
                  subscription.
                </p>
                <div className="hero-details">
                  <span>macOS 15+</span>
                  <i />
                  <span>Apple silicon &amp; Intel</span>
                  <i />
                  <span>Files stay on your Mac</span>
                </div>
              </div>
              <nav
                className="home-shortcuts"
                aria-label="Explore ClearDisk features"
              >
                <a href="#features">
                  Storage cleanup <ArrowRight size={14} />
                </a>
                <a href="#performance">
                  Performance <ArrowRight size={14} />
                </a>
                <a href="#icloud">
                  iCloud Doctor <ArrowRight size={14} />
                </a>
                <a href="#mac-checks">
                  Mac checks <ArrowRight size={14} />
                </a>
              </nav>
              <StoragePreview />
            </div>
            <div className="landing-details">
              <p>
                <ShieldCheck size={18} aria-hidden="true" />
                Review first. Move selected files to the Trash.
              </p>
              <details>
                <summary>What does ClearDisk install?</summary>
                <p className="software-disclosure">
                  ClearDisk is a Mac app with local storage scans and
                  performance readings. Cleanup and guided actions require your
                  confirmation. Browser access and starting at login are
                  optional. Before uninstalling, turn off Start at Login, quit
                  ClearDisk, then move it to the Trash. Local settings and
                  history may remain; see the
                  <Link href="/faq/cleardisk"> uninstall FAQ</Link>.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="trust-strip wrap" aria-label="Product benefits">
          <span>
            <Laptop />
            Native Mac app
          </span>
          <span>
            <LockKeyhole />
            Your files stay yours
          </span>
          <span>
            <ShieldCheck />
            Trash-first cleanup
          </span>
          <span>
            <Check />
            No subscription. Ever.
          </span>
        </section>
        <section
          className="section wrap home-performance"
          id="performance"
          aria-labelledby="performance-heading"
        >
          <div className="section-heading">
            <h2 id="performance-heading">Find what’s keeping your Mac busy.</h2>
            <p>
              The WhySlow tools are now included in ClearDisk 2.2.1. Check the
              readings while the slowdown is happening.
            </p>
          </div>
          <div className="product-sections">
            <section>
              <h3>Check before you change anything</h3>
              <p>
                Follow CPU and memory pressure, inspect running apps and
                background items, or check your internet connection. Usage
                charts keep local history; the optional menu-bar monitor keeps
                readings within reach. These diagnostics are free.
              </p>
              <Link href="/features#performance">
                Explore the Performance tools
              </Link>
            </section>
            <section>
              <h3>One license for cleanup and guided actions</h3>
              <p>
                The {price.display} license also covers confirmed app quit
                actions, duplicate-tab cleanup and window merging in supported
                Chrome, Brave and Edge browsers, plus Spotlight reindexing.
                Existing ClearDisk owners can use their current key. Save your
                work before closing apps or tabs; no tool can promise a faster
                Mac for every problem.
              </p>
              <Link href="/pricing">See exactly what the license includes</Link>
              <p>
                <Link href="/blog/chrome-using-too-much-memory-mac">
                  Chrome using too much memory? Start here.
                </Link>
              </p>
            </section>
          </div>
        </section>
        <section className="section wrap features" id="features">
          <div className="section-heading">
            <h2>Find the files worth reviewing.</h2>
            <p>
              Start with System Data, large files or developer folders. A
              category’s size is a starting point, not a promise of removable
              space.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card main-feature">
              <div className="feature-copy">
                <span className="icon-tile">
                  <Layers3 />
                </span>
                <h3>See what’s inside your Mac’s System Data.</h3>
                <p>
                  Inspect the caches, device backups and app support files
                  ClearDisk can read. See what each group contains before
                  deciding whether to keep it.
                </p>
                <Link className="text-link" href="/system-data-too-large">
                  Is your System Data too large? <ArrowRight size={14} />
                </Link>
              </div>
              <div className="breakdown-art">
                <div className="breakdown-top">
                  <span>System Data</span>
                  <b>58.4 GB</b>
                </div>
                <div className="segmented-bar">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="breakdown-line">
                  <span>
                    <i className="violet-dot" /> Rebuildable caches & files
                  </span>
                  <b>
                    37.4 GB <span className="status safe">Safe</span>
                  </b>
                </div>
                <div className="breakdown-line">
                  <span>
                    <i className="amber-dot" /> Device backups
                  </span>
                  <b>
                    8.6 GB <span className="status review">Review</span>
                  </b>
                </div>
                <div className="breakdown-line">
                  <span>
                    <i className="grey-dot" /> App settings & support
                  </span>
                  <b>
                    12.4 GB <span className="status protected">Leave it</span>
                  </b>
                </div>
                <small>Illustrative storage breakdown</small>
              </div>
            </article>
            <article className="feature-card map-feature">
              <span className="icon-tile">
                <FileSearch />
              </span>
              <h3>Find large files on the storage map.</h3>
              <p>
                Spot the files you forgot about.
                <br />
                Find them in a glance, not a folder hunt.
              </p>
              <Link className="text-link" href="/find-large-files-on-mac">
                How to find large files <ArrowRight size={14} />
              </Link>
              <div className="mini-map" aria-hidden="true">
                <div>
                  Videos<span>24.6 GB</span>
                </div>
                <div>
                  Downloads<span>12.8 GB</span>
                </div>
                <div>
                  Archives<span>8.2 GB</span>
                </div>
                <div>Projects</div>
                <div>Other</div>
              </div>
            </article>
            <article className="feature-card dev-feature">
              <div>
                <span className="icon-tile">
                  <Code2 />
                </span>
                <h3>Review old builds and developer caches.</h3>
                <p>
                  Find forgotten node_modules, Xcode builds and tool caches.
                  <br />
                  Check what your tools can rebuild before removing anything.
                </p>
                <Link className="text-link" href="/clear-xcode-derived-data">
                  Clear Xcode Derived Data <ArrowRight size={14} />
                </Link>
              </div>
              <div className="code-stack" aria-hidden="true">
                <span>
                  <FolderOpen />
                  node_modules <b>4.2 GB</b>
                </span>
                <span>
                  <Code2 />
                  DerivedData <b>8.6 GB</b>
                </span>
                <span>
                  <HardDrive />
                  Tool caches <b>2.1 GB</b>
                </span>
              </div>
            </article>
          </div>
        </section>
        <section
          className="section wrap home-extra-tools"
          aria-labelledby="more-tools-heading"
        >
          <div className="section-heading">
            <h2 id="more-tools-heading">Look beyond disk space.</h2>
            <p>
              Check cloud file states and app compatibility in the same place.
            </p>
          </div>
          <div className="product-sections">
            <section id="icloud">
              <h3>Understand your iCloud Drive</h3>
              <p>
                See accessible file states, pending transfers and reported
                errors. Distinguish cloud-only files from downloaded copies.
                With your license, remove eligible local downloads while keeping
                cloud originals, or create verified document archives.
              </p>
              <p>
                Local-copy removal frees Mac storage, not iCloud quota. iCloud
                Doctor does not inspect Photos or guarantee a sync repair.
              </p>
              <Link href="/icloud-doctor">Explore iCloud Doctor</Link>
            </section>
            <section id="mac-checks">
              <h3>Check AI storage and Intel-only apps</h3>
              <p>
                Measure recognized Apple Intelligence model folders and see
                which locations could not be read. These files stay under macOS
                control; ClearDisk does not remove them.
              </p>
              <p>
                Find Intel-only apps in your Applications folders without
                launching them. Review results with each app’s developer; the
                scan does not check every plug-in or helper program.
              </p>
              <Link href="/features">See Mac checks and their limits</Link>
            </section>
          </div>
        </section>
        <section className="section safety-section" id="how-it-works">
          <div className="wrap safety-layout">
            <div className="safety-visual" aria-hidden="true">
              <div className="shield-orbit one" />
              <div className="shield-orbit two" />
              <div className="shield-orbit three" />
              <div className="shield-core">
                <ShieldCheck />
              </div>
              <span className="floating-label label-top">
                <LockKeyhole size={14} />
                Protected files stay protected
              </span>
              <span className="floating-label label-bottom">
                <Undo2 size={14} />
                Trash first. Breathe easy.
              </span>
            </div>
            <div className="safety-copy">
              <h2>Review first. Confirm what changes.</h2>
              <p>
                A scan does not delete anything. Look at the files, keep what
                you need, and confirm each cleanup.
              </p>
              <ol className="steps">
                <li>
                  <span>01</span>
                  <div>
                    <h3>See what’s there.</h3>
                    <p>Scan your Mac and get a readable breakdown.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Choose what goes.</h3>
                    <p>
                      Clear labels help you decide. Nothing disappears on its
                      own.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Make room, on your terms.</h3>
                    <p>
                      Move files to Trash. Restore them before emptying it if
                      you change your mind.
                    </p>
                  </div>
                </li>
              </ol>
              <a className="text-link" href="#cleanup-preview">
                Try a cleanup with example files <ArrowRight size={16} />
              </a>
              <p>
                <Link href="/find-large-files-on-mac#sample-scan">
                  See an actual scan with generated sample files
                </Link>{' '}
                and the{' '}
                <Link href="/mac-storage-not-updating-after-deleting-files#sample-trash">
                  Move to Trash and Put Back walkthrough
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
        <div className="wrap home-demo" id="cleanup-preview">
          <details>
            <summary>Try the interactive cleanup preview</summary>
            <p>
              Example data only. This preview cannot access or change your
              files.
            </p>
            <ProductDemo />
          </details>
        </div>
        <section className="section wrap pricing" id="pricing">
          <div className="section-heading">
            <h2>Free to inspect. Pay once to act.</h2>
            <p>
              One license covers cleanup, iCloud Doctor actions and Performance.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="price-card free-card">
              <span className="plan-name">FREE DIAGNOSTICS</span>
              <h3>Start with the free app.</h3>
              <div className="price">
                $0<span>scans & diagnostics</span>
              </div>
              <p>
                Inspect your disk and running apps before deciding what needs
                attention.
              </p>
              <ul>
                <li>
                  <Check />
                  Unlimited storage scans
                </li>
                <li>
                  <Check />
                  System Data breakdown
                </li>
                <li>
                  <Check />
                  Visual storage map & large files
                </li>
                <li>
                  <Check />
                  CPU, memory and process diagnostics
                </li>
                <li>
                  <Check /> iCloud file states &amp; Mac checks
                </li>
              </ul>
              <Link className="button secondary" href="/download">
                Download ClearDisk <ArrowUpRight size={17} />
              </Link>
              <small>No account or payment card required.</small>
            </article>
            <article className="price-card paid-card">
              <div className="plan-top">
                <span className="plan-name">CLEARDISK LICENSE</span>
                <span className="one-time">ONE-TIME PURCHASE</span>
              </div>
              <h3>Unlock guided actions.</h3>
              <div className="price">
                {price.display}
                <span>{price.code} · pay once</span>
              </div>
              <p>
                Unlock cleanup, iCloud Doctor and guided performance actions.
              </p>
              <ul>
                <li>
                  <Check />
                  Everything in the free app
                </li>
                <li>
                  <Check />
                  Clean selected files from the app
                </li>
                <li>
                  <Check />
                  Trash-first removal with undo
                </li>
                <li>
                  <Check />
                  Use on 3 Macs you own
                </li>
                <li>
                  <Check /> iCloud local-copy removal &amp; verified archives
                </li>
                <li>
                  <Check />
                  App quit, browser tab actions & Spotlight reindexing
                </li>
              </ul>
              <Link className="button primary" href="/buy-now">
                Buy for {price.display} <ArrowUpRight size={17} />
              </Link>
              <small>
                <ShieldCheck size={13} />
                30-day money-back guarantee
              </small>
            </article>
          </div>
          <p className="price-note">
            Already own ClearDisk? Your current key includes the Performance
            tools. <Link href="/pricing">Compare all features</Link>.
          </p>
        </section>
        <section className="section wrap faq-section" id="faq">
          <div>
            <h2>Before you download.</h2>
            <p>Compatibility, privacy and what your license includes.</p>
            <Link className="text-link" href="/faq/cleardisk">
              All ClearDisk questions <ArrowRight size={15} />
            </Link>
            <p>Something else on your mind?</p>
            <a className="text-link" href="mailto:hello@cleardisk.app">
              Say hello <ArrowUpRight size={15} />
            </a>
          </div>
          <Accordion className="faq-list">
            {faqs.map(([q, a, guide], i) => (
              <AccordionItem key={q} value={i}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>
                  {a}
                  {guide && (
                    <>
                      {' '}
                      <Link href={'/' + guide}>Read the full guide</Link>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="section wrap home-guides">
          <h2>Start with your question.</h2>
          <div className="guide-grid">
            <Link className="guide-card" href="/clear-system-data-on-mac">
              <h3>How do I clear System Data?</h3>
              <p>
                Find the files, understand the tradeoffs, and review what to
                remove.
              </p>
              <span>
                Read the guide <ArrowRight size={16} />
              </span>
            </Link>
            <Link className="guide-card" href="/mac-running-slow-low-storage">
              <h3>Why is my Mac running slowly?</h3>
              <p>
                Separate storage, CPU, memory and connection problems before
                changing anything.
              </p>
              <span>
                Check the causes <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              className="guide-card"
              href="/blog/chrome-using-too-much-memory-mac"
            >
              <h3>Is Chrome using too much memory?</h3>
              <p>
                Check memory pressure, find a busy tab and compare results after
                one change.
              </p>
              <span>
                Review browser activity <ArrowRight size={16} />
              </span>
            </Link>
            <Link className="guide-card" href="/uninstall-apps-on-mac">
              <h3>How do I uninstall an app properly?</h3>
              <p>
                The uninstaller first, then Finder, then the files an app leaves
                in your Library.
              </p>
              <span>
                Remove it fully <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          <Link className="text-link" href="/guides">
            Explore all Mac guides <ArrowRight size={16} />
          </Link>
        </section>
        <section className="closing wrap">
          <div className="closing-glow" />
          <Mark large />
          <h2>
            Start with a clearer picture
            <br />
            <span>of your Mac.</span>
          </h2>
          <p>
            Download ClearDisk. Scan your storage and check performance for
            free.
          </p>
          <DownloadButton />
          <small>macOS 15+ · Apple silicon & Intel · No subscription</small>
        </section>
      </main>
      <Footer />
      <JsonLd data={websiteSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
