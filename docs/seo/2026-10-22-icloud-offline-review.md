# iCloud offline-use guide review — October 22, 2026

## Evidence and disposition

Improved and retained https://cleardisk.app/keep-icloud-files-downloaded-mac . Priority 11 in the October 16 queue: 95 → 46 impressions (49 lost), zero clicks in both complete September 27–October 3 / October 7–13 windows. This is an offline-preparation article; the linked local-storage and archive guides answer different decisions and remain separate. No consolidation, removal, noindex or redirect proposed. No new GSC performance or indexing observation; next complete-window review October 23.

Starting main 73cb6a7 matched origin/main after fetch. Wrangler confirmed production e41dbb9f-e717-4e51-b95e-6ae8ef54374f from October 21. Pre-publication 177 live HTTP SEO routes passed without an observed 5XX. This finite check does not prove the cause of historical traffic loss or guarantee future stability. Unrelated September 27 audit edit and .impeccable remain untouched.

## Findings and corrections

The article described ClearDisk 1.1 downloads as lasting for a session and implied only Finder's setting persists. Released 2.1.0 source requests retrieval through macOS; it does not set a session expiry or Keep Downloaded. Corrected the body and FAQ and separated request acceptance from completed retrieval.

Added Finder's List view / Show View Options / iCloud Status steps, meanings of local/cloud/transfer states, and the distinction between iCloud capacity and Mac capacity. Waiting to Upload must not be treated as a confirmed cloud copy. Missing menus lead to location/state/version checks, not disabling sync. The offline rehearsal now asks readers to save first and avoid interrupting other work, then reconnect and check upload completion. No offline rehearsal was performed on the owner's files.

Afterward, clearing Keep Downloaded does not imply immediate storage recovery. Remove Download, deleting the synced original and making an independent copy are distinguished. Added Copy/Paste and destination checks, including the risk of dragging an original out of iCloud Drive. Existing title, description, anchors, design and related links retained; only this guide's editorial date changed. Humanizer applied in embedded mode with neutral technical prose. Impeccable scoped review/detector returned no findings.

## Primary sources checked October 22

- https://support.apple.com/guide/mac-help/mchl1a02d711/mac — Download Now, Keep Downloaded, clearing retention, Remove Download and moving originals out of iCloud Drive. The page redirected to Apple's en-euro edition.
- https://support.apple.com/guide/mac-help/mchlc994344b/mac — iCloud Status column, Downloaded / In iCloud / Keep Downloaded / Waiting to Upload / Out of Space and transfer-progress indicators. Current macOS 27 edition retrieved; reader is directed to the version-specific guide when controls differ.
- https://support.apple.com/en-us/108306 — Copy/Paste from iCloud Drive and independent copies; optimized originals download before copying.
- https://support.apple.com/guide/mac-help/get-file-folder-and-disk-information-on-mac-mchlp1774/mac — supplemental Finder information reference; no new link added to the article.
- Release tag v2.1.0: Sources/SyncDoctorCore/Services/ICloudFileActions.swift and Sources/ClearDiskApp/ICloudDoctorView.swift — requestDownload calls startDownloadingUbiquitousItem, Keep Downloaded is unsupported in the action service and UI links to Finder guidance; confirmation distinguishes request from completion. Current release in HANDOFF remains 2.1.0 (12).

No invented screenshots, personal tests, transfer timing or storage savings. No command added to the article. No real cloud downloads, eviction, deletion, permissions change or network disconnection was performed. Validation covers the rendered guidance and released implementation, not a live iCloud sync experiment.

## Validation

Full unit suite 58 passed, zero failed/skipped/cancelled/todo. Required lint and typecheck passed. Complete production build produced 174 HTML/RSC pairs. All 177 local HTTP SEO route checks passed, including metadata/schema, related links, 404, sitemap, robots, DMG and OG image. Desktop 1265px and narrow 390px browser review passed, including section navigation; narrow document/scroll widths both 375px, no console errors observed. Final diff and failure-path review covered incomplete transfers, unuploaded edits, missing menus, independent copies, retention versus expiry and interrupted offline work. No source changes after the checks.

## Aggregate metrics

Observed 2026-10-22T10:03:03.478365Z through the protected aggregate API. September 23–October 22 inclusive (current day partial): 381 arrival events, 36 download requests, 17 completed-transfer events and seven checkout events. Separately: four cumulative license records and two cumulative GitHub asset downloads. These are not unique people, installs, confirmed sales or organic conversions. The rolling window differs from yesterday; do not treat its lower download-request total as a new daily loss. Credentials neither printed nor committed. QA user-agent/HEAD requests exclude verification downloads.

## Publication

Pending deployment and live verification. Next review October 23: complete Search Console windows and refreshed priorities, then the queued folder-structure article if priorities still support it. Preserve daily recovery review beyond the former campaign period.


### October 22 publication verified

Source **6653742** pushed to main and deployed to existing Worker **a15a5edf-7516-4602-be46-8fbcb8f050e3**. https://cleardisk.app/keep-icloud-files-downloaded-mac returns 200/build with corrected download-retention guidance, Finder status steps and October 22 date. Sitemap lastmod matches; 172 URLs retained. **177 live HTTP SEO route checks passed**, including metadata/schema, related links, 404, sitemap, robots, DMG and OG image. No 5XX observed in this final run. Independent checks confirmed homepage and three guide RSC responses as 200/build; internal snapshot access as 404; /download, DMG HEAD and appcast as 200 with release 2.1.0 retained. Anonymous /analytics and /api/analytics remain 401/no-store/noindex. Verification used QA/HEAD requests to exclude test downloads.

Final local checks: 58 full unit tests passed, zero failed/skipped/cancelled/todo; lint/typecheck, complete production build with 174 HTML/RSC pairs, 177 local HTTP checks, desktop/narrow browser review and final diff/failure-path review passed. No live cloud mutation or offline rehearsal was performed; the source-backed guidance does not claim firsthand sync testing. Temporary preview stopped, viewport reset and tab closed. A missing previous-day temporary verification script was recreated before running the successful independent checks; no required check was skipped. No Google submission, observed recrawl or ranking recovery claimed. Next review October 23: complete equal Search Console windows, refreshed priorities and the queued folder-structure guide if still justified. Unrelated audit edit and .impeccable preserved.
