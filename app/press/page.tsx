import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownToLine, Mail } from 'lucide-react';
import { Header, Footer } from '@/components/brand';
import { pageMetadata } from '@/lib/seo';
import './press.css';

export const metadata = pageMetadata(
  'ClearDisk Press Kit — App Facts, Screenshots and Artwork',
  'Download ClearDisk artwork, sample screenshots and a fact sheet. Find release details, pricing, reviewer notes and a press contact for the Mac storage app.',
  '/press',
);

export default function Press() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="wrap press-page">
        <div className="press-intro">
          <div>
            <h1>ClearDisk press kit</h1>
            <p className="press-lead">
              A clearer picture of what’s taking up space on your Mac.
            </p>
            <p>
              Product facts, artwork and screenshots for journalists, Mac
              reviewers and creators. For questions or an interview with maker
              Anil Gautam, get in touch.
            </p>
            <div className="press-actions">
              <a
                className="button primary"
                href="/press/cleardisk-press-kit.zip"
                download
              >
                <ArrowDownToLine size={18} aria-hidden="true" />
                Download press kit
              </a>
              <a className="press-contact" href="mailto:hello@cleardisk.app">
                <Mail size={18} aria-hidden="true" />
                hello@cleardisk.app
              </a>
            </div>
            <small>
              ZIP · artwork, two sample screenshots and a fact sheet
            </small>
          </div>
          <Image
            unoptimized
            className="press-app-icon"
            src="/press/cleardisk-app-icon.png"
            alt="ClearDisk app icon: a white C and sparkle on purple"
            width="192"
            height="192"
          />
        </div>

        <section className="press-section" aria-labelledby="description">
          <h2 id="description">The short description</h2>
          <p>
            ClearDisk is a Mac storage app that helps you find large files,
            understand System Data and review developer clutter. Scans run
            locally and are free. A one-time license unlocks cleanup, with a
            review before removal and a Move to Trash option.
          </p>
          <p>
            It is built by TechMarbles Web Solutions Pvt. Ltd. in Mohali, India.
            The app is for people who want to see what is using their storage
            before deciding what to remove.
          </p>
          <a href="/press/cleardisk-fact-sheet.txt" download>
            Download the plain-text fact sheet
          </a>
        </section>

        <section className="press-section" aria-labelledby="facts">
          <h2 id="facts">At a glance</h2>
          <dl className="press-facts">
            <div>
              <dt>Current release</dt>
              <dd>2.1.0 (build 12) · released 4 October 2026</dd>
            </div>
            <div>
              <dt>Requirements</dt>
              <dd>macOS 15 or later · Apple silicon and Intel Macs</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>
                Free scans. US $10 one-time cleanup license for up to three Macs
                you own. No subscription. Local pricing appears at checkout;
                30-day refund policy.
              </dd>
            </div>
            <div>
              <dt>Privacy</dt>
              <dd>
                File scans stay on your Mac. License activation and software
                updates use the network; files and scan results are not
                uploaded.
              </dd>
            </div>
            <div>
              <dt>Distribution</dt>
              <dd>
                Signed and notarized macOS app. Available from the{' '}
                <Link href="/download">download page</Link> and{' '}
                <a href="https://github.com/anilgautamwork/cleardisk-app/releases/tag/v2.1.0">
                  GitHub release
                </a>
                . Notarization is not an Apple endorsement.
              </dd>
            </div>
            <div>
              <dt>Publisher</dt>
              <dd>
                TechMarbles Web Solutions Pvt. Ltd. · Mohali, India ·{' '}
                <Link href="/about">About the maker</Link>
              </dd>
            </div>
          </dl>
        </section>

        <section className="press-section" aria-labelledby="artwork">
          <h2 id="artwork">Artwork &amp; screenshots</h2>
          <p>
            Use these assets in coverage of ClearDisk. Keep the artwork’s
            proportions and colours, credit ClearDisk, and link to cleardisk.app
            where practical. Please retain the sample-data context in screenshot
            captions.
          </p>
          <div className="press-artwork">
            <Image
              unoptimized
              src="/press/cleardisk-app-icon.png"
              width="96"
              height="96"
              alt=""
              loading="lazy"
            />
            <div>
              <h3>App icon &amp; website mark</h3>
              <p>
                The native app icon is a 1024 × 1024 PNG. The website mark is a
                scalable SVG.
              </p>
              <div className="press-asset-links">
                <a href="/press/cleardisk-app-icon.png" download>
                  Download app icon (PNG)
                </a>
                <a href="/press/cleardisk-web-mark.svg" download>
                  Download website mark (SVG)
                </a>
              </div>
            </div>
          </div>
          <p className="press-caption">
            The screenshots below come from our September 2026 walkthrough using
            generated sample files in an earlier app version. They show the
            storage map and removal review, not the newer Mac checks. Sizes
            shown are demonstration data, not typical space savings.
          </p>
          <div className="press-screenshots">
            <figure>
              <a
                href="/guides/sample-storage-map.jpg"
                download
                aria-label="Download storage map screenshot (JPEG)"
              >
                <Image
                  unoptimized
                  src="/guides/sample-storage-map.jpg"
                  alt="ClearDisk treemap showing three generated sample files as blocks sized by their storage use"
                  width="2200"
                  height="1496"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <h3>A visual storage map</h3>
                <p>
                  Three generated files in the ClearDisk Guide Sample folder.
                  Larger blocks represent larger files.
                </p>
                <a href="/guides/sample-storage-map.jpg" download>
                  Download screenshot (JPEG)
                </a>
              </figcaption>
            </figure>
            <figure>
              <a
                href="/guides/sample-removal-review.jpg"
                download
                aria-label="Download removal review screenshot (JPEG)"
              >
                <Image
                  unoptimized
                  src="/guides/sample-removal-review.jpg"
                  alt="ClearDisk removal review for Sample-large-file.bin with Move to Trash and Remove Permanently choices"
                  width="1180"
                  height="708"
                  loading="lazy"
                />
              </a>
              <figcaption>
                <h3>Review before removal</h3>
                <p>
                  The removal choices for a generated sample file. Undo depends
                  on the item remaining in Trash; permanent removal cannot be
                  undone.
                </p>
                <a href="/guides/sample-removal-review.jpg" download>
                  Download screenshot (JPEG)
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="press-section" aria-labelledby="reviewers">
          <h2 id="reviewers">Notes for reviewers</h2>
          <ul className="press-review-notes">
            <li>
              <strong>Start with a free scan.</strong> Compare the large-file
              list, treemap and System Data breakdown. Scan totals describe what
              was found; they do not promise that every byte is safe to remove.
            </li>
            <li>
              <strong>Use sample files for cleanup demos.</strong> Review the
              selection, choose Move to Trash and test undo before emptying
              Trash. Keep backups of anything you need.
            </li>
            <li>
              <strong>Mac checks arrived in 2.1.0.</strong> Apple Intelligence
              checks measure readable, recognized model-asset folders. Protected
              or partial locations are reported; the check does not delete
              models or guarantee a complete footprint.
            </li>
            <li>
              <strong>Intel-app results have a defined scope.</strong> The check
              inspects the main executable of apps in Applications and your
              personal Applications folder. Helpers, plug-ins and apps elsewhere
              are outside the scan. An architecture result is not a guarantee of
              future macOS compatibility.
            </li>
            <li>
              <strong>iCloud Doctor is a diagnostic tool.</strong> It helps
              explain local iCloud storage and sync issues. It does not increase
              your iCloud quota or promise to repair every sync problem.
            </li>
          </ul>
          <p>
            For coverage, include the app version, Mac model and macOS version
            you tested. <Link href="/features">Explore the features</Link> or
            read the <Link href="/privacy">privacy policy</Link> for more
            detail.
          </p>
        </section>

        <section
          className="press-section press-enquiries"
          aria-labelledby="enquiries"
        >
          <h2 id="enquiries">Writing about ClearDisk?</h2>
          <p>
            For product questions, interview requests or a different asset
            format, email{' '}
            <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a>.
            Include your publication or channel and any deadline.
          </p>
          <small>Press kit updated 16 October 2026.</small>
        </section>
      </main>
      <Footer />
    </>
  );
}
