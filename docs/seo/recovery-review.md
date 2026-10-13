# ClearDisk daily recovery review

Owner authorized ongoing daily review and fixes on October 9, 2026. The existing heartbeat is now **ClearDisk daily content recovery**, active daily at 10:00 Asia/Kolkata, without the old October 12 end date. Its identifier remains cleardisk-30-day-publishing-plan to avoid a duplicate automation. Prior campaign history is preserved. No bulk new articles. No automatic deletion/noindex for zero traffic, and no batch consolidation without evidence and owner approval.

## Verified priority queue

Read directly from Search Console on October 9 under the owner’s work account. Web search, all countries/devices, no query filter. Equal complete windows: **October 1–3 before**, **October 4–6 after**. Sorted by absolute lost page impressions. This three-day comparison prioritizes work; it does not establish the cause of the decline. Next complete-window trend review: October 16 or earlier if actionable new data arrives. The report currently ends October 6.

Site totals: 4,123 impressions and 21 clicks before; 324 impressions and zero clicks after. Page-level totals may differ from property totals. Average position was 9.6 versus 13.8; do not repeat the unsupported claim that every page retained positions 6–8.

| Priority | Page | Impressions before → after | Lost | Clicks before → after | Review state / next task |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | /homebrew-list-installed-packages | 467 → 11 | 456 | 0 → 0 | Recently improved October 8; monitor before rewriting again. |
| 2 | /steam-games-storage-mac | 264 → 16 | 248 | 0 → 0 | Published October 11: save-sync limits, backups before uninstall and tested size-command edge cases. |
| 3 | /operation-not-permitted-terminal-mac | 260 → 14 | 246 | 2 → 0 | Published October 9: distinguish causes, real locked-file screenshot, partial totals. |
| 4 | /what-is-system-data-on-mac | 180 → 6 | 174 | 0 → 0 | Published October 13: corrected category boundaries, definition FAQ and measurement limits. |
| 5 | /private-var-folders-mac | 121 → 4 | 117 | 1 → 0 | Published October 9: preserve errors, guarded paths, tested hidden-folder/incomplete scan examples. |
| 6 | /library-caches-folder-mac | 106 → 5 | 101 | 0 → 0 | Published October 12: app-specific cleanup, visible measurement errors and sandbox scope. |
| 7 | /application-support-folder-mac | 97 → 1 | 96 | 0 → 0 | Queued: check data-loss warnings and actual storage inspection steps. |
| 8 | /free-command-on-mac | 91 → 1 | 90 | 0 → 0 | Queued: verify memory units, expected output and disk/RAM distinction. |
| 9 | /uninstall-homebrew-mac | 108 → 20 | 88 | 0 → 0 | Queued: audit uninstall scope, dependencies and command execution risks. |
| 10 | /photos-library-taking-up-space-mac | 91 → 5 | 86 | 2 → 0 | Queued: verify originals, Optimize Storage and synced deletion behavior. |
| 11 | /move-files-to-trash-terminal-mac | 83 → 2 | 81 | 0 → 0 | Queued: verify OS availability, paths and recoverability. |
| 12 | /logic-pro-sound-library-space | 77 → 2 | 75 | 1 → 0 | Queued: verify relocation/download controls and user-project exclusions. |
| 13 | /uninstall-node-js-mac | 78 → 4 | 74 | 0 → 0 | Queued: distinguish installation methods; review blanket deletion commands. |
| 14 | /mac-log-files | 77 → 5 | 72 | 0 → 0 | Queued: verify measurement and app-managed cleanup; no blanket removal. |
| 15 | /how-to-check-storage-on-mac | 77 → 8 | 69 | 0 → 0 | Recently revised October 4; review measurement limitations before more changes. |

These are review priorities, not a claim that all 15 have had a complete editorial audit. Homebrew was already corrected October 8. Completed reviews and remaining source/test passes are listed individually below. All pages remain indexable.

## October 9 — first correction batch

- `/operation-not-permitted-terminal-mac`: removed the unsupported “usually privacy” diagnosis from the FAQ; narrowed overbroad SIP claims; explained how to interpret read-only checks; replaced casual advice to leave Full Disk Access enabled with task-appropriate access; added a real Finder screenshot of a generated locked file and documented the reproduced write failure. No privacy permissions were changed and no personal files were used.
- `/private-var-folders-mac`: replaced the wildcard/error-suppressing command with guarded path resolution and `du -h -d 1`; explains hidden entries, parent totals, binary units, partial measurements and Control-C. Removed the claim that restart/safe mode achieves the same result as deleting everything. Added measured fixture results and explicit limits: no safe boot, cache cleanup or space-recovery experiment performed.
- Relevant links connect the two error/measurement explanations. Only these two editorial dates advance. Existing URLs, published dates, article template and product claims retained.
- Evidence: [reproducible command observations](evidence/2026-10-09-permission-cache-checks.txt); `public/guides/locked-sample-file-mac.jpg` captured through native Finder on macOS 27.0.1. The file contains only generated text and no personal filenames or account details. Terminal UI capture was unavailable; no terminal screenshot is fabricated.
- Humanizer applied as a generic factual edit: removed categorical conclusions and replaced vague advice with observations, outcomes and limits. No personal byline or AI-detection claim.

Sources checked October 9: Apple [Privacy & Security](https://support.apple.com/guide/mac-help/mchl211c911f/mac), [SIP](https://support.apple.com/en-us/102149), [signed system volume](https://support.apple.com/guide/security/signed-system-volume-security-secd698747c9/web), [safe mode](https://support.apple.com/en-us/116946), and this Mac’s `man confstr`, `man du` and file-lock behavior. The archived online confstr manual was older and lacked Darwin-specific entries, so the installed macOS manual is the evidence for those details.

Validation before publication: full 55 unit tests passed, zero skipped; typecheck, lint, production build and all 176 local HTTP SEO routes passed. Reviewed the final diff, command failure/empty-path guards (including a stale variable), screenshot privacy, schema/image linkage and desktop/390px browser rendering. The first HTTP pass caught the image checker’s JPEG requirement; converted the screenshot and repeated the full checks. No page overflow in the mobile screenshot. Published and verified at https://cleardisk.app on October 9 from source fc833c2, Worker version 2e3797b9-fc2c-41ff-b9d8-4583a4c51dc3. All 176 live HTTP SEO checks passed. Both guides return 200 with the corrected text and October 9 sitemap lastmod; sitemap remains 171 URLs. Download/appcast remain 2.1.0, DMG HEAD is 200, and both anonymous analytics routes return 401 with private/no-store and noindex/nofollow. Used ClearDisk-QA and HEAD for the DMG; no verification download conversion. No new Google indexing request; publication does not establish recrawling or recovery. Preserve the unrelated September 27 audit-document edit.

## October 11 — Steam storage guide correction

Disposition: **improved**, retained at /steam-games-storage-mac. Priority 2 remains based on the October 9 Search Console reading, equal complete October 1–3 versus October 4–6 windows (264 → 16 impressions; zero clicks in both). No fresh Search Console comparison today; next trend review October 16. No new guide, consolidation, noindex or redirect.

Corrected the FAQ and description's unconditional save-preservation promise. Cloud support does not establish successful synchronization or coverage of every save. Backup/sync checks now precede uninstall actions. Removed the implication that steamapps contains every save, added game-backup limitations, and included a post-move check before considering leftover cleanup. Updated only this guide's editorial date to October 11; existing publication date and URL retained.

Replaced the wildcard/pipeline size command with quoted `du -h -d 1`, which includes hidden folders and works on an empty directory. Documented binary units, parent totals, missing-path and permission failures, and the scope of the default library. Actual disposable-fixture measurements on macOS 27.0.1: 2.0M sample folder, 256K hidden folder, 2.3M parent; empty 0B; missing and unreadable paths exit 1. Error output remains visible. The fixture used no installed games, personal saves or permission changes outside the disposable directory. Restricted fixture permissions were restored. No Steam UI, uninstall, cloud synchronization or game-move test is claimed. Evidence: [command observations](evidence/2026-10-11-steam-size-checks.txt).

Primary Valve sources checked October 11:
- https://help.steampowered.com/en/faqs/view/68D2-35AB-09A9-7678 (Cloud scope, settings and failed synchronization)
- https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327 (Storage and Move; Windows installation-migration steps not applied to Mac)
- https://help.steampowered.com/en/faqs/view/30EB-87BF-531F-512D (Mac data-folder location and removal scope)
- https://help.steampowered.com/en/faqs/view/4593-5CB7-DC3C-64F0 (game-file backup limitations and developer-specific save locations)
The direct page extractor initially returned an image-only result; indexed primary-source text supplied the substantive guidance. Humanizer applied to the factual edit; no invented personal experience or screenshot.

Final full unit suite: 55 passed, zero failed/skipped. Lint, typecheck and production build passed. All 176 final local HTTP SEO routes passed. An earlier check against a still-running preview after rebuild saw a stale asset map; restarting the preview resolved it and the complete check passed. Desktop/390px browser review showed readable copy and no page overflow; backup instructions precede uninstall in rendered HTML. Final diff reviewed for source claims, command quoting, partial totals, unrelated edits and product/payment preservation. Impeccable detector returned no findings. Existing deployment before this edit: 2e3797b9-fc2c-41ff-b9d8-4583a4c51dc3; upstream main matched local after fetch. Publication pending.

Private aggregate observation 2026-10-11T13:41:15.913Z: 63 download requests / rolling 30 UTC days (five / seven days), 320 arrival events (145 / seven), 16 finished-transfer events (two / seven), seven checkout sessions (zero / seven), four all-time license records and two cumulative GitHub downloads separately. These are not unique people, installs or sales; arrivals can include QA, checkouts include test mode, license records are not refund-adjusted. Credentials were not printed or committed. No ranking-recovery inference from these counters.

Next content review: October 12, /library-caches-folder-mac for blanket removal advice and /what-is-system-data-on-mac for definition/cleanup overlap. Preserve the unrelated September 27 audit-document edit. Keep the current design, app 2.1.0 artifacts, Stripe/license behavior, private analytics and Talivia pause unchanged.

### October 11 publication verified

Published source **3b647d4** from main to Worker **677fde1d-888d-47c8-970d-c6fa4400836b** in the existing personal account. All **176 live HTTP SEO checks passed**. The changed guide returns 200 with the corrected FAQ and measured fixture explanation. Its sitemap lastmod is 2026-10-11; sitemap remains 171 URLs. /download and the signed appcast still advertise 2.1.0; DMG HEAD returns 200. Anonymous /analytics and /api/analytics return 401 with private/no-store and noindex/nofollow. Verification used ClearDisk-QA and DMG HEAD, not a counted download. No Google submission, new indexing observation or recovery claim. Final local suite: 55 passed, zero skipped; lint/typecheck/build and 176 local HTTP checks passed. Only the reviewed guide was published; the unrelated audit edit remains unstaged. Next review October 12; complete-window Search Console review October 16.


## October 12 — Library Caches guide correction

Disposition: **improved**, retained at /library-caches-folder-mac. Priority 6 uses the October 9 Search Console evidence: equal complete October 1–3 versus October 4–6 windows, 106 → 5 impressions (101 lost), zero clicks in both. No fresh ranking comparison today; weekly complete-window review remains October 16. This is one deep review, not completion of the entire queue. No new article, removal, noindex or redirect.

Removed the assumption that an unrecognized cache folder is safe to delete and the promise that a removed app’s cache stays gone. The guide now separates inspection from deletion, ordinary caches from sandbox locations, and app-managed cleanup from vendor-documented manual removal. ClearDisk categories help identify data; they do not establish that every file is disposable. The app source was checked in Sources/Core/SystemDataReport.swift. Current download/release remains 2.1.0; no app, payment, analytics or design changes.

Replaced wildcard size commands that hid errors with quoted `du -h -d 1` checks. Added binary-unit and parent-total explanations, incomplete-scan warnings, missing-path behavior and Control-C. A disposable fixture on macOS 27.0.1 produced 1.0M, 128K (hidden subfolder) and 1.1M parent; missing and restricted paths exited 1. The restricted child was empty, so this demonstrates error reporting, not measured lost bytes. A read-only plutil check of Safari’s Info.plist returned com.apple.Safari. See [command observations](evidence/2026-10-12-cache-checks.txt). No real caches were deleted, no privacy/security settings changed, and no app cleanup or storage savings are claimed.

Primary sources checked October 12:
- https://developer.apple.com/documentation/foundation/url/cachesdirectory — indexed Apple reference confirms sandbox cache location; direct HTML is JavaScript-only and the Markdown extractor failed, so do not claim full body extraction.
- https://support.apple.com/en-us/102624 — current Apple storage advice, Trash behavior and temporary clearing of certain system caches in safe mode.
- https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html — archived Library conventions, including bundle identifiers; treated as developer conventions, not proof of present file contents.
- https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html — archived user/shared/system and sandbox context; iOS purge behavior was not applied to Mac.

Humanizer used for a generic factual edit, without invented experience or screenshots. Only this guide’s editorial date advances to October 12. Full final unit suite: **55 passed, zero failed/skipped**. Lint, typecheck and Cloudflare production build passed. **176 local HTTP SEO checks passed**. Initial unit run caught an overlong meta description; shortened it and reran the full suite and all build checks. Desktop and 390px browser review confirmed readable copy, contained code scrolling and no horizontal page overflow. Final diff reviewed for command/path failures, partial totals, cache ownership assumptions, product claims and unrelated edits. Impeccable detector returned no findings. Publication pending.

Private aggregate observation at 2026-10-12T10:08:27.679Z: 63 download requests / rolling 30 UTC days (five / seven), 337 arrival events (159 / seven), 16 finished-transfer events (two / seven), seven checkout sessions (zero / seven), four all-time license records and two cumulative GitHub downloads separately. These are requests/events, not people, installs, sales or proof of organic recovery; arrivals can include QA, checkouts include test mode and licenses are not refund-adjusted. Credentials were neither printed nor committed.

Before publication, origin/main matched local e86b5b7 and the latest Worker was 677fde1d-888d-47c8-970d-c6fa4400836b. Preserve the unrelated September 27 audit-document edit. Next review October 13: /what-is-system-data-on-mac definition/cleanup overlap, then /application-support-folder-mac. No forced daily rewrite or new indexing request.

### October 12 publication verified

Published source **5695d03** from main to Worker **e5a37e1a-2836-40b6-988e-63ae4cfb1858** in the existing personal account. Live URL: https://cleardisk.app/library-caches-folder-mac . All **176 live HTTP SEO checks passed**. The revised page returns 200 with the corrected introduction and fixture explanation. Its sitemap lastmod is 2026-10-12; sitemap remains 171 URLs. /download and /updates/appcast.xml still advertise 2.1.0; DMG HEAD returns 200. Anonymous /analytics and /api/analytics return 401 with private/no-store and noindex/nofollow. The initial additional sitemap assertion assumed compact XML; a whitespace-tolerant assertion passed, with no production change needed. Verification used ClearDisk-QA and DMG HEAD, not a counted download. No Google submission, observed recrawl or recovery claim. Full local 55-test suite (zero skips), lint/typecheck/build, 176 local HTTP checks and responsive review passed before publication. Next content review October 13; Search Console comparison October 16. Unrelated audit-document edit remains unstaged.


## October 13 — System Data definition review

Disposition: **improved**, retained at /what-is-system-data-on-mac. Priority 4 remains based on the October 9 GSC reading: complete equal October 1–3 / October 4–6 windows, 180 → 6 impressions (174 lost), zero clicks in both. No fresh query-window or ranking data today; next complete-window review October 16. This is a focused existing-page correction, not another article or a complete audit of all 15 priorities.

The old FAQ called iOS backups and Mail/Messages attachments usual System Data producers and claimed there were usually only one or two causes, without evidence for that distribution. Apple’s current Storage guide explicitly assigns those files to iOS Files, Mail and Messages. Corrected that categorization, explained macOS as a separate category, and aligned the FAQ with definition intent. ClearDisk’s own System Data view groups iOS backups differently; that distinction is now explicit. Source check: Sources/Core/SystemDataReport.swift, including the iOS-backup row and snapshot bytes:nil; BulkScanner.swift confirms allocated-size measurement. Release remains 2.1.0; no binary or payment change.

Added concrete reading steps (same-volume/date/available-space baseline, selected scan location and access errors), explained that broader permissions do not reconcile category totals, and labeled the 80/30/50 GB arithmetic example as illustrative. It is not measured output or a savings claim. No command, native Storage UI, permission change, deletion or cleanup test was performed or claimed. No invented screenshot or author. Humanizer applied to factual prose. Existing page title, canonical, section IDs and publication date retained; only this guide’s editorial date advances to October 13.

Primary Apple sources read October 13:
- https://support.apple.com/en-gb/guide/mac-help/mchl3d437fbc/mac — macOS 27 category definitions, non-manageable totals and separate Mail/Messages/iOS Files categories. Full relevant body was accessible today.
- https://support.apple.com/en-us/102624 — Ventura-or-later navigation, catch-all definition and category information controls.
- https://support.apple.com/en-us/102154 — local snapshots counted as available and automatically aged/removed. No manual snapshot deletion instructions were added.

Overlap review: **keep** /clear-system-data-on-mac (cleanup workflow), /system-data-keeps-growing (repeat-activity diagnosis) and /system-data-too-large (large-total triage) as distinct from this definition page. This is a source/content intent assessment, not query-level cannibalization proof. Added contextual links to the existing cache/support explanations and cleanup/growth/full-disk routes. No proposed consolidation, redirects or noindex changes. Other guides’ content and dates unchanged.

Validation before publication: full **55 unit tests passed, zero failed/skipped**, lint, typecheck and Cloudflare production build passed; **176 local HTTP SEO checks passed**. Desktop/390px browser review shows readable text and no horizontal page overflow. Final diff reviewed for unsupported category assignments, incomplete-scan implications, actual product behavior, example labels, links/schema and unrelated edits. Impeccable detector reported no findings. No new regression test was needed for this factual copy correction; the full existing metadata/schema/route checks ran. Publication pending.

Private aggregate observation 2026-10-13T09:59:46.698Z: 60 download requests / rolling 30 UTC days (four / seven), 340 arrivals (140 / seven), 16 finished-transfer events (one / seven), seven checkouts (zero / seven), four all-time license records and two cumulative GitHub downloads separately. These are events, not unique people, installs, sales or organic attribution; moving windows are not cumulative counters, arrivals can include QA, checkouts include test mode and licenses are not refund-adjusted. Credentials not printed or committed.

Before editing, main matched origin at 4c15510 and latest Worker was e5a37e1a-2836-40b6-988e-63ae4cfb1858. Preserve the unrelated September 27 audit-document change. Next content review October 14: /application-support-folder-mac. Keep the existing daily recovery schedule, current design, release, Stripe/license behavior and Talivia pause.

### October 13 publication verified

Published source **3b83d9a** to existing Worker **81a6ae12-28af-44fe-b7a1-f243694383a3**, main pushed. URL: https://cleardisk.app/what-is-system-data-on-mac . **176 final live HTTP SEO checks passed**. Initial requests immediately after deployment lacked the updated copy/FAQ; a subsequent response contained the correction, and the complete suite was repeated successfully without another deployment. This is consistent with deployment propagation; the transient response alone does not establish a persistent caching defect.

Changed guide 200 with revised category explanation, definition FAQ and labeled example; sitemap lastmod October 13 and 171 URLs verified. /download and /updates/appcast.xml remain 2.1.0; DMG HEAD 200. Anonymous analytics and analytics API remain 401, private/no-store, noindex/nofollow. ClearDisk-QA/HEAD verification avoids counted download traffic. No Google submission or observed recrawl/indexing/recovery claim. Final local suite remains 55 passed, zero failed/skipped; lint/typecheck/build and 176 local HTTP checks passed, with desktop/narrow browser and final diff review. Unrelated September 27 audit-document edit preserved. Next review October 14; GSC complete-window review October 16.
