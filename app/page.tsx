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
  Play,
  ChevronRight,
  Undo2,
  Apple,
} from 'lucide-react';
import { Header, Footer, DownloadButton, Mark } from '@/components/brand';
import { visitorPrice } from '@/lib/visitor-price';
import { JsonLd } from '@/components/json-ld';
import { softwareSchema } from '@/lib/seo';
import { StoragePreview } from '@/components/storage-preview';
import { PageMotion } from '@/components/motion';
import { ProductDemo } from '@/components/product-demo';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
const faqs = [
  [
    'What’s actually hiding in System Data?',
    'Caches, logs, app containers, developer files, device backups and more. ClearDisk breaks down the files it finds into named groups, explains what they do, and labels them Safe, Review or Leave it. Some macOS-managed storage, including local snapshots, is reported separately.',
  ],
  [
    'Will it delete something I need?',
    'You choose what to remove and confirm before anything changes. ClearDisk moves files to the Trash by default and protects sensitive system and account folders. Review backups and personal files carefully. Permanent deletion is a separate, explicit action.',
  ],
  [
    'Is scanning really free?',
    'Yes. Explore your storage, inspect the System Data breakdown and find your biggest files for free. Cleanup inside the app is a $10 one-time license.',
  ],
  [
    'Is this another subscription?',
    'No. The $10 one-time license covers up to three Macs you own and all 1.x updates. There is no monthly or annual charge.',
  ],
  [
    'Does ClearDisk upload my files?',
    'Scanning and file analysis run locally on your Mac. Your files, file names and scan results are not uploaded. License activation sends your key, a device identifier, your computer name and the app version to manage the three-Mac limit. Payment is handled by Stripe.',
  ],
  [
    'Will it work on my Mac?',
    'ClearDisk requires macOS 15 Sequoia or newer. The download includes both Apple silicon and Intel versions in one app. Grant Full Disk Access when prompted to see files macOS otherwise keeps private.',
  ],
];
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
                <Link className="eyebrow-pill" href="/download">
                  Built for your Mac <ChevronRight size={13} />
                </Link>
                <h1>
                  Clear System Data.
                  <br />
                  <span>Make room for more.</span>
                </h1>
                <p className="hero-description">
                  See what’s taking up space on your Mac. Understand your System
                  Data. Choose what stays and make room for what’s next.
                </p>
                <div className="hero-ctas">
                  <DownloadButton />
                  <Link className="button quiet" href="/buy-now">
                    Buy for {price.display} <ArrowUpRight size={16} />
                  </Link>
                  <a className="button quiet" href="#demo">
                    <Play size={14} /> Explore the app
                  </a>
                </div>
                <div className="hero-details">
                  <span>
                    <Apple size={13} /> macOS 15+
                  </span>
                  <i />
                  <span>Free to scan</span>
                  <i />
                  <span>Yours for {price.display}, once.</span>
                </div>
                <div className="hero-reassurance">
                  <ShieldCheck size={16} />
                  <span>Local by design. Your files stay on your Mac.</span>
                </div>
              </div>
              <StoragePreview />
            </div>
            <div className="demo-intro" data-reveal>
              <div>
                <span className="eyebrow">A CLEARER VIEW</span>
                <h2>Your storage. Without the mystery.</h2>
              </div>
              <p>
                Try the interactive preview below.
                <br />
                Every choice stays in your hands.
              </p>
            </div>
            <ProductDemo />
          </div>
        </section>
        <section className="trust-strip wrap" aria-label="Product benefits">
          <span>
            <Apple />
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
        <section className="section wrap features" id="features">
          <div className="section-heading">
            <span className="eyebrow">MEET YOUR MISSING SPACE</span>
            <h2>
              It’s your Mac.
              <br />
              <span>Know what’s on it.</span>
            </h2>
            <p>
              That mysterious “System Data” number? Let’s open it up.
              <br />
              ClearDisk turns hidden storage into a clear next step.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card main-feature">
              <div className="feature-copy">
                <span className="icon-tile">
                  <Layers3 />
                </span>
                <h3>The mystery, solved.</h3>
                <p>
                  Caches. Old backups. Years of app leftovers.
                  <br />
                  See exactly what’s taking up room—and what to do with it.
                </p>
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
              <h3>Big files. Bigger picture.</h3>
              <p>
                Spot the files you forgot about.
                <br />
                Find them in a glance, not a folder hunt.
              </p>
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
                <h3>Built things? Unbuild the clutter.</h3>
                <p>
                  Find forgotten node_modules, Xcode builds and tool caches.
                  <br />
                  Keep your projects. Reclaim the space around them.
                </p>
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
              <span className="eyebrow">A LITTLE CARE GOES A LONG WAY</span>
              <h2>
                Clear the clutter.
                <br />
                <span>Keep the confidence.</span>
              </h2>
              <p>
                Your photos, your projects, your life. Cleaning your Mac should
                feel reassuring. ClearDisk gives you a say at every step.
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
                      Move files to Trash. Restore them if you change your mind.
                    </p>
                  </div>
                </li>
              </ol>
              <a className="text-link" href="#demo">
                Take the preview for a spin <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="section wrap pricing" id="pricing">
          <div className="section-heading">
            <span className="eyebrow">LESS CLUTTER. INCLUDING THE PRICE.</span>
            <h2>
              Buy once.
              <br />
              <span>Breathe easier.</span>
            </h2>
            <p>Your storage shouldn’t come with another subscription.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card free-card">
              <span className="plan-name">GET THE FULL PICTURE</span>
              <h3>Look around. It’s free.</h3>
              <div className="price">
                $0<span>forever to scan</span>
              </div>
              <p>Find out where your space went before spending a cent.</p>
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
                  Reveal files in Finder
                </li>
              </ul>
              <Link className="button secondary" href="/download">
                Download ClearDisk <ArrowUpRight size={17} />
              </Link>
              <small>No card. No account. Just clarity.</small>
            </article>
            <article className="price-card paid-card">
              <div className="plan-top">
                <span className="plan-name">MAKE ROOM FOR MORE</span>
                <span className="one-time">ONE-TIME PURCHASE</span>
              </div>
              <h3>A lighter Mac, for keeps.</h3>
              <div className="price">
                {price.display}
                <span>{price.code} · pay once</span>
              </div>
              <p>Unlock cleanup inside the app.</p>
              <ul>
                <li>
                  <Check />
                  Everything in the free scanner
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
                  <Check />
                  All 1.x updates included
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
            Start with a free scan. Upgrade when you’re ready.
          </p>
        </section>
        <section className="section wrap faq-section" id="faq">
          <div>
            <span className="eyebrow">GOOD QUESTIONS</span>
            <h2>
              A little more
              <br />
              <span>clarity.</span>
            </h2>
            <p>Understand the files behind the number.</p>
            <Link className="text-link" href="/what-is-system-data-on-mac">
              What is System Data? <ArrowRight size={15} />
            </Link>
            <p>Something else on your mind?</p>
            <a className="text-link" href="mailto:hello@cleardisk.app">
              Say hello <ArrowUpRight size={15} />
            </a>
          </div>
          <Accordion className="faq-list">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={i}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="section wrap home-guides">
          <span className="eyebrow">CLARITY BEFORE CLEANUP</span>
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
            <Link className="guide-card" href="/mac-storage-full">
              <h3>Why is my Mac still full?</h3>
              <p>
                A practical next step when deleting files has not solved the
                problem.
              </p>
              <span>
                Find an answer <ArrowRight size={16} />
              </span>
            </Link>
            <Link className="guide-card" href="/system-data-keeps-growing">
              <h3>Why does it keep growing?</h3>
              <p>
                Investigate what is producing new data before cleaning again.
              </p>
              <span>
                Understand the cause <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          <Link className="text-link" href="/guides">
            Explore all storage guides <ArrowRight size={16} />
          </Link>
        </section>
        <section className="closing wrap">
          <div className="closing-glow" />
          <Mark large />
          <h2>
            Make room for
            <br />
            <span>your next big thing.</span>
          </h2>
          <p>Your next project. Your next memory. Your next “why not?”</p>
          <DownloadButton />
          <small>Made for Mac. Designed for peace of mind.</small>
        </section>
      </main>
      <Footer />
      <JsonLd data={softwareSchema} />
    </>
  );
}
