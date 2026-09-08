# iCloud Doctor content and search intent

Prepared 9 September 2026. Release-coordinated content for ClearDisk 1.1. Do not deploy product availability claims until the verified downloadable app contains these features. The coordinator owns release artifacts and deployment; this change does not change payment APIs, configuration or pricing.

The existing registry had 44 guides. Eight distinct articles bring it to 52. The existing `/icloud-drive-taking-up-space-on-mac` remains the primary local-storage guide; no second article targets that broad intent. Homepage System Data positioning remains; iCloud Doctor receives a dedicated product page.

| Canonical page | Primary query intent | Scope and separation |
| --- | --- | --- |
| /icloud-doctor | iCloud diagnostic app for Mac | Product capabilities, boundaries, download, guide hub |
| /icloud-drive-stuck-uploading-mac | iCloud Drive stuck uploading / waiting to upload / not syncing Mac | One consolidated diagnosis page, repeated observations and escalation |
| /icloud-drive-status-icons-mac | iCloud status icons Mac | Interpret Finder state before choosing an action |
| /icloud-storage-full-but-not-mac | iCloud storage full but it isn't / still full after deleting | Account versus local storage, category review; not a quota repair promise |
| /icloud-remove-download-missing-mac | Remove Download missing iCloud Mac | Unavailable control diagnosis; links to existing local-space guide |
| /keep-icloud-files-downloaded-mac | keep iCloud files offline Mac | Download versus retention; pre-travel verification |
| /archive-icloud-drive-to-mac | archive iCloud files / copy iCloud to Mac only | Verified nonsynced copy, originals retained, separate deletion decision |
| /icloud-desktop-documents-files-missing-mac | Desktop files missing after turning off iCloud | Location changes and reconciling local/cloud folders |
| /recover-deleted-icloud-drive-files-mac | recover deleted iCloud Drive files Mac | Trash/web recovery and its limits; app does not provide recovery |

Monthly search volume, keyword difficulty, CPC, rank and conversion estimates are **unknown**. The earlier keyword-watch estimates are hypotheses, not authenticated measurements. Query families above are editorial intent choices based on the approved integration scope and current Apple documentation, not a claim of demonstrated demand or low competition. Broad account-storage and recovery searches may have weak fit for a Mac Drive tool. No fabricated search impressions, ranking or revenue forecasts are used.

After release and Search Console verification, compare query-level impressions/clicks for each canonical page, inspect index coverage and separate guide visits from download requests. Download counts are requests, not installs. Consolidate if two pages attract the same intent without serving different decisions. Apple service instructions and menu names should be checked again when macOS changes.

## Primary sources checked through browsing

- [Finder status](https://support.apple.com/en-ae/guide/mac-help/mchlc994344b/mac): state definitions and showing the iCloud Status column.
- [Drive file controls](https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac): Download Now, Remove Download, Keep Downloaded and moving originals.
- [Manage iCloud storage](https://support.apple.com/en-us/108922): account categories, storage limits and service-specific management.
- [Account versus device storage](https://support.apple.com/en-us/102670): capacities represent different storage pools.
- [Set up iCloud Drive](https://support.apple.com/en-us/118443): enabling Drive and account setup.
- [Archive or copy iCloud information](https://support.apple.com/en-ca/108306): copying files and the sharing-access caveat.
- [Turn off Desktop and Documents](https://support.apple.com/en-gb/126628): files remaining in Drive, new local folders and archive behavior.
- [Recover deleted files](https://support.apple.com/en-euro/guide/icloud/-mmae56ea1ca5/icloud): recovery window and permanent-deletion limit.
- [Delete Drive files](https://support.apple.com/en-ie/guide/icloud/mm3b7fcd0c10/icloud): synced-device deletion effect.
- [System Status](https://www.apple.com/support/systemstatus/): linked as a live incident reference, not used to claim current service health.

Apple sources support operating-system guidance. ClearDisk feature descriptions come from the approved integration specification and must be reconciled against shipped implementation. The articles explicitly label diagnostic suggestions as recommendations rather than Apple-prescribed repair procedures.

## Existing-copy audit

Updated the established local-iCloud-storage article with 1.1 scope and internal links. Replaced the blanket no-iCloud-repair wording with a precise no-guaranteed-repair limit. Corrected zero-local-space placeholder wording: metadata can still occupy space. Privacy now distinguishes metadata listing from explicitly requested downloads and local archive integrity reads. All existing payment and licensing copy remains outside this change.

## Design context

Preserved docs/DESIGN.md's existing pale surfaces, native system typography, violet action color and reading hierarchy. The landing adds no autonomous animation or synthetic product screenshot; its state explanations are clearly editorial. The inherited design document contains stale guide-count/release lines; those unrelated historical notes were not rewritten. Missing PRODUCT.md did not block the already-approved extension brief; no additional design interview or delegated agent was used.

## Verification at handoff

- `npm run test`: 42 tests passed, including guide uniqueness, complete related links, metadata lengths, discovery and Article/Breadcrumb coverage.
- `npm run typecheck` and `npm run lint`: passed.
- `npm run build`: passed; existing vinext route-classification warnings remain informational.
- `SITE_CHECK_ORIGIN=http://localhost:3101 npm run test:seo:http`: 69 HTML routes passed, including initial-head Search Console verification, canonical/OG metadata, schemas, related links, 404, sitemap, robots and existing artifact checks. This dev check uses preview/noindex mode; coordinator must repeat against the production-indexable deployment.
- Impeccable mechanical detector on the new landing/CSS: no findings (`[]`). This is not a visual review.
- Browser review is delegated back to the coordinator's existing CUA session. Local server: `http://localhost:3101` (IPv6 localhost; 127.0.0.1 is not the bound address). No screenshot or desktop/mobile visual pass is claimed here.
- Google Search Console public verification token added to root metadata and checked in the initial HTML. Property verification and sitemap submission remain coordinator actions after deployment.
