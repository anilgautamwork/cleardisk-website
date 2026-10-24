# Homepage refinement — 24 October 2026

Owner requested additions and optimization of the homepage after the combined ClearDisk/WhySlow release. This is a product-page improvement, not a new article or a claim of ranking recovery.

## Changes and sources

- Rewrote the hero around storage and performance, with direct links to Storage, Performance, iCloud Doctor and Mac checks.
- Moved the second storage demonstration into an optional native disclosure after the cleanup explanation. It remains explicitly illustrative and cannot access visitor files. This reduces the default reading path; it does not defer its JavaScript bundle.
- Added iCloud file-state/local-copy/archive coverage and read-only Apple Intelligence/Intel-app checks, with the existing scope limits. Sources: current `app/features/page.tsx`, `app/icloud-doctor/page.tsx`, `docs/releases-2.2.0.md`, and app `Sources/ClearDiskApp/MacChecksView.swift`/Performance license callers. No new OS-release prediction or speed/savings claim.
- Made free diagnostics, paid actions, three-Mac licensing and existing-owner coverage explicit. Reused reviewed product FAQ answers for the visible homepage and FAQ structured data. Updated the shared free-scanning answer to include performance diagnostics.
- Linked existing slowdown and Chrome-memory guides alongside storage and uninstall guidance. Retained all routes; no new articles, redirects or noindex.
- Preserved the light/violet design. Fixed narrow-width header spacing and decorative shield overflow discovered at 320px.

Humanizer applied for concrete prose; Impeccable used for layout/clarity and final static inspection. No personal voice or firsthand performance benchmark invented.

## Validation before publication

- Full unit suite: **58 passed**, 0 failed, skipped, cancelled or todo. Rerun after the final CSS adjustment.
- Lint and typecheck passed. Complete production build generated **177 HTML/RSC snapshot pairs**.
- **180 local HTTP SEO route checks passed**, including head metadata, schema, related links, 404, sitemap, robots, DMG and OG image.
- Browser review at 1440×1000, 390×844 and 320×740. Desktop/390px no overflow; 320px initially exposed overflow, fixed and rechecked at 305px content width = 305px scroll width (scrollbar consumes 15px).
- Checked new feature anchors, optional demo disclosure, its review dialog and Keep everything cancellation, keyboard Enter disclosure toggle, and opening the free-scanning FAQ. Demo components remain unchanged.
- One H1, correct canonical, seven FAQ schema questions; Impeccable static detector returned no findings. Final diff reviewed for claim scope, free/paid consistency, hidden-demo navigation, and download/checkout/analytics preservation.
- Desktop baseline: 9,486px page height, Performance heading at 2,629.6px. Updated default collapsed-demo page: 8,638px height, Performance heading at 1,584.8px. These are layout measurements at the same viewport, not load-time or Core Web Vitals results.

## Publication

Pending production deployment and live verification. Changed content routes: `/` and `/faq/cleardisk`; shared CSS also includes the under-360px header correction. No Search Console refresh, indexing submission, observed Google recrawl or new download metrics in this task. Existing recovery queue remains due for a complete-window evidence refresh. Existing unrelated audit edit and `.impeccable/` preserved.
