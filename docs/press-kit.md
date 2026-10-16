# ClearDisk press kit

Owner-confirmed audience: journalists, Mac reviewers and creators. Contact: hello@cleardisk.app. This is an extension of the existing site, not a new visual identity.

## Direction contract

THESIS: A useful editorial resource: take a description, check the facts, download the assets and contact the maker. No invented coverage or testimonials.

OWN-WORLD: Preserve docs/DESIGN.md: pale neutral surface, system typography, violet actions, shared header and grouped footer. Use ruled fact rows and real app imagery.

STORY: Understand the product, distinguish free scans from paid cleanup, inspect the current release's limits, then use the kit in coverage.

FIRST VIEWPORT: Title and short description on the left, actual app icon on the right. ZIP download and press email directly beneath the introduction. Facts follow, then two sample screenshots with explicit provenance.

FORM: Editorial resource page extending existing subpages. No new-world direction seed applies. Static links and native downloads; no unnecessary animation.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Sources and assets

- Product/release facts: docs/releases-2.1.0.md, docs/HANDOFF.md, app/about/page.tsx, lib/seo.ts and the signed public appcast.
- App icon: ../Scripts/AppIcon.icns, converted with macOS sips to a 1024px PNG. Original app artwork; no generated replacement.
- Website mark: public/icon.svg, copied unchanged as cleardisk-web-mark.svg.
- Screenshots: public/guides/sample-storage-map.jpg and sample-removal-review.jpg. Previously published September 30 sample-file walkthrough from an earlier release. Inspected for private data: only generated sample file names are shown, with no license key. The sidebar's truncated developer-test label is not a customer testimonial. These are not 2.1.0 Mac checks screenshots or typical storage savings.
- ZIP contains artwork, these screenshots and a fact sheet with captions and usage notes. No installer or credentials.

## Maintenance

When a release changes facts, update the page, public/press/cleardisk-fact-sheet.txt and rebuild the ZIP together. Preserve screenshot captions until captures are replaced with verified current-version images. Current design documentation remains authoritative.

## Finish review — 16 October 2026

Fresh reviewer disposition: ship after the known screenshot-height correction and finish documentation. The correction uses the removal screenshot's actual 1180 × 708 dimensions. No additional material findings. Desktop 1440px and mobile 390px browser viewports were inspected; the document widths were 1425px and 375px, with no horizontal overflow. All four displayed images loaded. Existing DESIGN.md tokens and shared components are preserved; the page-specific rules are an editorial-resource extension, not a replacement design system. The detector returned no findings. Original screenshot provenance remains recorded here and in the downloadable fact sheet; the new PNG embeds its source provenance.

Validation: full unit suite 55 passed, 0 skipped; lint and typecheck passed; Cloudflare production build passed. Local HTTP SEO suite passed for 177 HTML routes and 172 sitemap entries. All six individual assets matched source bytes; the ZIP integrity check passed with five entries. Keyboard Tab reached the press email with a visible solid focus outline. Local /analytics fails closed with 503 because owner credentials are not configured in the preview; production protection must be checked after deployment. Build retained existing Vite configLoader and Node deprecation warnings.

Published to https://cleardisk.app/press from commit dfd78d6 on 16 October 2026. Cloudflare Worker version a52686de-5c79-4f6f-8159-276bbd9aad8a. Live HTTP SEO suite passed all 177 HTML routes; sitemap contains 172 URLs including /press. Six live assets matched source bytes, the ZIP passed its five-entry integrity check, and the browser loaded all artwork. Download page, DMG HEAD and signed appcast returned 200; appcast remains 2.1.0. Anonymous /analytics and /api/analytics both returned 401 with no-store and noindex. QA download checks used ClearDisk-QA/HEAD and did not count as app downloads. Publication is verified; Google indexing is not claimed.
