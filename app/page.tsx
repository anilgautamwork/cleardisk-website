'use client';
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
import { ProductDemo } from '@/components/product-demo';
import { Horizon } from '@/components/threeui/horizon';
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
    'Yes. Explore your storage, inspect the System Data breakdown and find your biggest files for free. The planned 1.0 cleanup license is $10 once. The currently available download is our 0.1.0 preview release.',
  ],
  [
    'Is this another subscription?',
    'No. The $10 one-time license is planned to cover up to three Macs you own and all 1.x updates. There is no monthly or annual charge.',
  ],
  [
    'Does ClearDisk upload my files?',
    'Scanning and file analysis run locally on your Mac. Your files, file names and scan results are not uploaded. The 1.0 license service will use activation details to manage your license; payment is handled separately.',
  ],
  [
    'Will it work on my Mac?',
    'ClearDisk requires macOS 15 Sequoia or newer. The download includes both Apple silicon and Intel versions in one app. Grant Full Disk Access when prompted to see files macOS otherwise keeps private.',
  ],
];
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="hero">
          <div className="hero-atmosphere">
            <Horizon />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <div className="hero-content wrap">
            <Link className="eyebrow-pill" href="/download">
              <span className="live-dot" /> A lighter Mac starts here{' '}
              <ChevronRight size={13} />
            </Link>
            <h1>
              More space.
              <br />
              <span>More possibilities.</span>
            </h1>
            <p className="hero-description">
              Your Mac has room for more. Find what’s filling it,
              <br className="desktop-break" /> clear the clutter, and get back
              to what you love.
            </p>
            <div className="hero-ctas">
              <DownloadButton />
              <a className="button quiet" href="#demo">
                <span className="play-circle">
                  <Play size={11} fill="currentColor" />
                </span>
                See it in action
              </a>
            </div>
            <div className="hero-details">
              <span>
                <Apple size={13} /> macOS 15+
              </span>
              <i />
              <span>Free to scan</span>
              <i />
              <span>$10 once at launch</span>
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
                Download free preview <ArrowUpRight size={17} />
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
                $10<span>USD · pay once</span>
              </div>
              <p>Unlock cleanup when ClearDisk 1.0 arrives.</p>
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
                Preview $10 checkout <ArrowUpRight size={17} />
              </Link>
              <small>
                <ShieldCheck size={13} />
                30-day money-back policy at launch
              </small>
            </article>
          </div>
          <p className="price-note">
            Start with the free preview. Upgrade when you’re ready.
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
    </>
  );
}
