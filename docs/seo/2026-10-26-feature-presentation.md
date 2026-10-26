# Released feature presentation — 26 October 2026

Owner requested that the website explain the newly released app features properly. Updated existing homepage, Features page, navigation and ClearDisk FAQ. No new article or keyword-variant page.

## Product evidence and scope

Checked app release v2.2.1 notes and docs/releases/2026-10-26-2.2.1-navigation.md, plus Sources/ClearDiskApp/ContentView.swift, ClearDiskApp.swift and Sources/PerformanceUI/MenuBarView.swift. Why Slow, Disk scan and Permissions remain pinned; the horizontal bar enables the optional menu monitor. The menu reports CPU/memory/disk and up to five apps, supports licensed confirmed Quit, and shows storage review only after a completed scan. Large-file threshold is 100 MB, up to three files. Cache availability, scan scope, skipped paths and measured-size limits remain explicit. Existing license, download and payment behavior unchanged.

The new reusable menu figure is static HTML with illustrative values and example app names, explicitly labeled as an illustration. It neither reads the visitor’s Mac nor presents working quit controls. No private screenshot or fabricated firsthand measurement. Existing visual identity retained using Impeccable. FAQ visible copy and schema share the registry; only the changed FAQ date advances to October 26. No indexing or ranking claim.

## Validation

Full npm test: 58 passed, zero failed/skipped/cancelled/todo. Lint and typecheck passed. Production Cloudflare build generated 177 HTML/RSC snapshot pairs. All 180 local HTTP SEO checks passed. Design detector found no issues. Final diff reviewed for broken links, licensing/permissions claims, no-scan states, static illustration behavior and CSS scope. Desktop 1280px and narrow 390px review: no horizontal overflow (1265px / 375px content widths); navigation anchors and mobile illustration reviewed. No native code changed.

Baseline main 12822b2; Cloudflare version 95c627ac-961a-4adf-86f4-52d534629d48. Remote main matched local before publication. Existing September 27 audit edit and .impeccable preserved. Publication evidence follows after live checks.


## 2026-10-26 — Feature presentation published

Published source **9ab8a1d** to main and Worker **3490aff3-bd93-47db-957d-21d01a41a331**. Live homepage, /features and /faq/cleardisk return 200 with the new content. Full **180 live HTTP SEO checks passed**, in addition to 58 unit tests (zero failed/skipped/cancelled/todo), lint, typecheck, production build, 180 local HTTP checks and desktop/narrow visual review. Live Features illustration verified visually; viewport override reset after review.

Sitemap remains 175 URLs and /faq/cleardisk has October 26 lastmod. /analytics and /api/analytics remain 401/no-store/noindex anonymously. Current DMG HEAD returns 200; actual versioned 2.2.1 archive remains 8,529,684 bytes with SHA-256 ebe7cc41c8fa9f293cc84f54d2e22835861541d75bbb516a7e40907dd15ed0eb. Signed appcast matches the committed feed. ClearDisk-QA checks and versioned archive GET avoid counted verification downloads. No fresh metrics, indexing or traffic gains claimed. Unrelated local edits preserved.
