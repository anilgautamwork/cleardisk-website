# ClearDisk daily recovery review

Owner authorized ongoing daily review and fixes on October 9, 2026. The existing heartbeat is now **ClearDisk daily content recovery**, active daily at 10:00 Asia/Kolkata, without the old October 12 end date. Its identifier remains cleardisk-30-day-publishing-plan to avoid a duplicate automation. Prior campaign history is preserved. No bulk new articles. No automatic deletion/noindex for zero traffic, and no batch consolidation without evidence and owner approval.

Current queue: [October 16 measured priorities](#october-16--weekly-measurement-and-refreshed-queue). The original queue below is preserved as history.

## Historical October 9 priority queue

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
| 7 | /application-support-folder-mac | 97 → 1 | 96 | 0 → 0 | Published October 14: reset/data-loss limits, sandbox scope and tested error-visible size command. |
| 8 | /free-command-on-mac | 91 → 1 | 90 | 0 → 0 | Published October 15: corrected units, interval counters and pressure interpretation; tested read-only output. |
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


## October 14 — Application Support guide correction

Disposition: **improved**, retained at /application-support-folder-mac. Priority 7 uses the October 9 GSC evidence: complete equal October 1–3 versus October 4–6 windows, 97 → 1 impressions (96 lost), zero clicks in both. No fresh search/query window today; next complete-window comparison October 16. Review scope is this guide, not all 15 queue entries. No new article, noindex, redirect or removal.

Corrected the claim that there are only two app-support locations, removed unsupported app-type size rankings and the suggestion that reset/reinstall is a general safe fix. The guide now explains sandbox scope, checks for saved work and restorable resources, and warns that a reset can erase local data. Replaced the wildcard/error-suppressing pipeline with quoted `du -h -d 1`, preserving hidden subfolders and diagnostic errors. Explained parent totals, binary units, missing/incomplete paths and Control-C without recommending permission expansion. FAQ now avoids claiming a usual largest category. Current TrashService.swift confirms the general Application Support block and separate MobileSync/Backup exception; no release or product capability changes.

Reproducible evidence: [disposable command fixture](evidence/2026-10-14-application-support-checks.txt). On macOS 27.0.1, random fixture data produced 2.0M for ExampleApp, 128K for a hidden folder and 2.1M for the parent; an empty folder returned 0B and a missing path exited 1 with a visible error. No installed app data was scanned, deleted or reset; no savings, real-app cleanup or permission-denial reproduction is claimed. Humanizer used for a generic factual edit, without an invented author or screenshot.

Primary sources read October 14:
- https://support.apple.com/en-us/102610 — uninstall guidance, vendor uninstallers, preserved user documents and the possible need for the app to open them.
- https://support.apple.com/guide/mac-help/mchlp1236/mac — Finder Go to Folder and home-folder path syntax; current AU redirect body read.
- https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html — app-support/user-data and sandbox container conventions. Explicitly labeled archived; no iOS purge behavior applied to Mac.
- The Storage settings source remains from the October 13 check; today's direct extraction returned an internal error, so no fresh read of its body is claimed. Its existing catch-all definition was not changed.

Validation before publication: **55 unit tests passed, zero failed/skipped**; lint, typecheck and Cloudflare production build passed. All **176 local HTTP SEO checks passed**. Desktop and 390px browser inspection confirmed readable copy and no horizontal page overflow. Final diff reviewed for shell quoting, partial/missing totals, reset/uninstall failure paths, actual removal guard, schema/date consistency and unrelated edits. Impeccable detector returned no findings. Only this guide's editorial date advances. Publication pending.

Private aggregate observation 2026-10-14T10:01:02.939Z: 60 download requests / rolling 30 UTC days (four / seven), 343 arrivals (133 / seven), 16 finished-transfer events (one / seven), seven checkouts (zero / seven), four all-time license records and two separate cumulative GitHub downloads. These are events, not unique people, installs, sales or organic recovery. Arrivals can include QA, checkout sessions include test mode, license totals are not refund-adjusted. Credentials were not printed or committed.

Before editing, main matched origin at 1419ef5 and production Worker was 81a6ae12-28af-44fe-b7a1-f243694383a3. Preserve the unrelated September 27 audit-document edit. Keep design, app 2.1.0, download, Stripe/license behavior, private analytics and Talivia pause unchanged. Next content review October 15: /free-command-on-mac; complete-window GSC review October 16. No indexing or recovery claim.


### October 14 publication verified

Published source **20a74c0** from main to existing Worker **2d2250f0-c5f4-4f3a-9c8c-a9fa98710d80**. URL: https://cleardisk.app/application-support-folder-mac . All **176 live HTTP SEO checks passed**. Changed guide returns 200 with corrected reset warning, fixture explanation and FAQ; sitemap lastmod is October 14 and count remains 171 URLs. /download and /updates/appcast.xml still advertise 2.1.0; DMG HEAD returns 200. Anonymous /analytics and /api/analytics return 401 with private/no-store and noindex/nofollow. QA/HEAD checks avoid counted download traffic.

Full final unit suite: 55 passed, zero failed/skipped. Lint/typecheck/build, 176 local HTTP checks, desktop/390px and final diff review passed before publication. No indexing request, observed Google recrawl or recovery claim. Only the reviewed guide was published; unrelated audit edit remains unstaged. Next review October 15; complete-window Search Console comparison October 16. Local preview stopped after verification.


## October 15 — Mac memory-command guide correction

Disposition: **improved**, retained at /free-command-on-mac. Verified priority 8 from October 9 Search Console evidence: complete equal October 1–3 / October 4–6 windows, 91 → 1 impressions (90 lost), zero clicks in both. No new query comparison today; complete-window review due October 16. One existing-page review, no new article, noindex, removal or redirect.

Corrected GB/MB versus GiB/MiB, removed the unsupported equivalence between memory_pressure's percentage and Linux available memory, and corrected the assertion that every interval vm_stat column is a delta. The local manual describes interval differences broadly, but actual macOS 27.0.1 output retains current free/active counts while faults/pageins report interval events after the first sample. Explained overlapping page classifications, compressor counts, failure/empty-output handling, and RAM versus disk space. Replaced the persistent free alias suggestion with diagnostic scope and fallback guidance; retained its section anchor for existing links. No profile was edited. All other guides and their dates remain unchanged.

[Read-only command observations](evidence/2026-10-15-memory-checks.txt) contain aggregate counters only, with exit codes. Commands returned successfully on macOS 27.0.1: top memory line, sysctl memory/swap, GiB conversion, pagesize, vm_stat single/repeated and memory_pressure without options. Observed 137438953472 bytes = 128.0 GiB, 16384-byte pages, top 116G used / 12G unused, zero swap and memory_pressure 94%. These are sequential samples, not simultaneous measurements, health targets or cleanup results. No pressure generation/simulation, purge, deletion, privacy change, process-name publication or screenshot fabrication. The 1024-page → 16 MiB calculation is explicitly illustrative. No older macOS or Intel host was tested.

Sources checked October 15:
- https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac — memory components, caching, swap and pressure inputs; NZ redirect showed the macOS 26 guide.
- https://support.apple.com/guide/activity-monitor/check-if-your-mac-needs-more-ram-actmntr34865/mac — efficient memory use and graph colors; current Europe redirect showed macOS 27.
- https://developer.apple.com/library/archive/documentation/Performance/Conceptual/ManagingMemory/Articles/AboutMemory.html — archived backing-store and wired/page-list background. Labeled archived; its old hardware page-size assumptions were not used.
- Installed macOS manuals: man top, man vm_stat, man memory_pressure. Actual interval output is recorded where the manual's generic description is insufficient.

Humanizer used for a concrete generic edit without a personal voice/author claim. Existing title, description, URL, related guides and template retained. Memory diagnosis is distinct from the linked swap, out-of-memory and disk-space workflows; no consolidation proposed. Current release remains 2.1.0 in the handoff and rendered preview; no new app capability claim, binary, Stripe/license, analytics or Talivia changes.

Final validation: full **55 unit tests passed, zero failed/skipped**, lint, typecheck and production build passed. All **176 local HTTP SEO checks passed**. Desktop and 390px review confirmed readable copy, horizontal scrolling contained inside the long command, and no page overflow. Reviewed final diff and failure paths for shell quoting, failed/empty output, counter/byte confusion, pressure-generating options, example labels and schema/date consistency. Impeccable detector found no issues. Publication pending.

Aggregate metrics observed 2026-10-15T10:01:26.809Z: 57 download requests / rolling 30 UTC days (four / seven), 351 arrival events (113 / seven), 16 completed-transfer events (one / seven), seven checkout sessions (zero / seven), four all-time license records, two cumulative GitHub downloads separately. These are events, not unique people, installs, sales or proof of organic recovery; arrivals may include QA, checkout sessions include test mode, and license totals are not refund-adjusted. No credentials printed or committed.

Origin/main matched e41abd4 before editing. Production check confirmed Worker 2d2250f0-c5f4-4f3a-9c8c-a9fa98710d80; the first deployment-list command lacked a Worker name and failed locally, then the explicit-name read succeeded. Preserve the unrelated September 27 audit edit. Next review October 16: complete Search Console windows, then /uninstall-homebrew-mac if appropriate. No indexing or recovery claim.


### October 15 publication verified

Published source **25dc365** from main to existing Worker **7149a5c8-e574-43ac-a0d2-e1fd59743014**. Live URL: https://cleardisk.app/free-command-on-mac . All **176 live HTTP SEO checks passed**. Guide returns 200 with corrected GiB output, vm_stat explanation and memory_pressure limits. Sitemap date October 15 and 171 URLs verified. /download and /updates/appcast.xml remain 2.1.0; DMG HEAD 200. Anonymous /analytics and /api/analytics remain 401, private/no-store, noindex/nofollow. ClearDisk-QA and HEAD verification excludes counted downloads.

Final local 55 unit tests passed, zero failed/skipped; lint/typecheck/build and 176 local HTTP SEO checks passed, with desktop/390px and diff/failure review. No Google submission, observed recrawl/indexing or recovery claim. Local preview stopped and browser viewport reset. Unrelated September 27 audit edit preserved. Next: October 16 complete-window GSC comparison and Homebrew uninstall review; retain ongoing daily recovery schedule.


## October 16 — weekly measurement and refreshed queue

Disposition: kept existing pages; refreshed measured priorities, no forced publication. [Full evidence and interpretation](2026-10-16-recovery-measurement.md). Complete equal September 27–October 3 / October 7–13 windows: 5,747 → 5,952 impressions, 34 → 40 clicks. This weekly aggregate hides another drop: October 12/13 had 39/34 impressions and zero clicks after a rebound October 8–11. No sustained-recovery or causation claim.

| Priority | Page | Impressions before → after | Lost | Clicks before → after | Disposition / next action |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | /homebrew-list-installed-packages | 654 → 212 | 442 | 0 → 0 | Kept after limited source spot-check; October 8 corrections retained. Queue size-command empty/failed-path edge cases. |
| 2 | /what-is-system-data-on-mac | 237 → 72 | 165 | 0 → 1 | Keep October 13 correction; this window does not measure its later performance. |
| 3 | /operation-not-permitted-terminal-mac | 364 → 239 | 125 | 3 → 0 | Keep October 9 correction; monitor and revisit only for a concrete gap. |
| 4 | /move-files-to-trash-terminal-mac | 126 → 11 | 115 | 1 → 0 | Published October 16 follow-up: reviewed paths, partial failures, Finder fallback and restoration limits. |
| 5 | /purge-command-mac-memory | 102 → 1 | 101 | 0 → 0 | Published October 16 follow-up: corrected memory scope, removed unmeasured purge promises and added diagnosis limits. |
| 6 | /application-support-folder-mac | 172 → 103 | 69 | 0 → 0 | Keep October 14 correction; published after the measurement window. |
| 7 | /free-command-on-mac | 120 → 53 | 67 | 0 → 1 | Keep October 15 correction; published after the measurement window. |
| 8 | /mac-log-files | 77 → 14 | 63 | 0 → 0 | Improved October 18: visible measurement errors, fixture limits, log privacy and app-specific cleanup. |
| 9 | /library-caches-folder-mac | 154 → 100 | 54 | 0 → 0 | Keep October 12 correction; window includes publication day and one following day. |
| 10 | /clear-downloads-folder-mac | 93 → 42 | 51 | 0 → 0 | Queued: originals, recoverability and synced locations. |
| 11 | /keep-icloud-files-downloaded-mac | 95 → 46 | 49 | 0 → 0 | Queued: local copies versus cloud deletion, availability and space limits. |
| 12 | /uninstall-node-js-mac | 101 → 57 | 44 | 0 → 0 | Queued: installation methods, dependencies and blanket deletion. |
| 13 | /mac-folder-structure-explained | 51 → 8 | 43 | 0 → 0 | Queued: system/user boundaries and overlapping intent. |
| 14 | /steam-games-storage-mac | 325 → 285 | 40 | 0 → 2 | Keep October 11 correction; two clicks in the later window. |
| 15 | /purgeable-space-on-mac | 65 → 25 | 40 | 0 → 0 | Queued: available versus purgeable storage; avoid forced-cleanup promises. |

These are the largest measured impression losses among 153 displayed page rows, not 15 completed deep reviews. Kept Homebrew listing after a limited official-manpage spot-check; its size-command failure/empty-glob cases remain queued. Previously corrected guides stay published. No consolidation proposed solely from traffic. Manual action/security reports show no issues; crawl host status healthy; other-4XX total remains 49 with displayed September 27 examples. Exact status attribution to Cloudflare remains unverified. Full source, query limitations, metrics and verification are in the linked report.

Next deep review October 17: Trash from Terminal, then purge-command safety. Next complete-window measurement October 23; inspect daily rows to avoid a misleading weekly average. No new article or deployment today. Unrelated repository edits preserved.

October 16 live verification: **177 HTTP SEO route checks passed**, including metadata/schema, related links, 404, sitemap, robots, DMG and OG image. Anonymous /analytics and /api/analytics return 401 with no-store/noindex; appcast returns 200 and remains 2.1.0. The first sandbox HTTP run failed at DNS resolution (ENOTFOUND); the authorized network-enabled rerun passed. Verification used ClearDisk-QA/HEAD handling to avoid counted download events. Evidence arithmetic checked against the daily and page tables; final documentation diff reviewed, git diff --check passed. No code/test changes, new deployment or indexing claim.

## October 16 — Owner-requested follow-up: Trash and purge guides

Disposition **improved and retained** for /move-files-to-trash-terminal-mac (priority 4, 126 → 11 impressions, 1 → 0 clicks) and /purge-command-mac-memory (priority 5, 102 → 1 impressions, zero clicks both windows). Priority evidence remains complete September 27–October 3 / October 7–13 windows. The newer October 14/15 rows show 20/18 impressions and zero clicks but may still be revised. Do not use them as a complete weekly comparison.

Added reviewed paths, partial-batch handling, a tested missing-path failure, Finder fallback, accurate restoration/iCloud limits and more careful memory diagnosis. Removed broad permission advice and unmeasured purge outcomes. [Investigation, sources and fixture limits](2026-10-16-second-drop-followup.md). The largest-loss Homebrew page is indexed and Google fetched it successfully October 14 with the correct canonical. No mass deindexing or confirmed deployment fault found; no claim of an established algorithmic cause.

Full 55 unit tests passed, zero failed/skipped; lint/typecheck/build and 177 local HTTP SEO routes passed; desktop/390px review and final failure-path review passed. No real files removed, permissions broadened or purge benchmark run. Only two guide dates changed. Publication pending. Next daily batch October 17: /mac-log-files, then /uninstall-node-js-mac; retain Homebrew size-command edge-case follow-up. Next complete-window review October 23. No page removal/noindex/redirect proposed.


### October 16 follow-up publication verified

Source **94b411a**, pushed to main and deployed to existing Worker **30ef2aa2-0323-45fa-a222-d514a2cab9cd**. Both live guide routes return 200 with the revised copy and October 16 sitemap dates. **177 live HTTP SEO route checks passed**; sitemap remains 172 URLs. Download, DMG HEAD and appcast return 200; release remains 2.1.0. Anonymous analytics/API return 401 with no-store/noindex. Verification uses QA/HEAD requests to avoid counted downloads. Final full local suite 55 passed, zero failed/skipped, plus lint/typecheck/build, 177 local HTTP checks and desktop/narrow review. No indexing request, ranking recovery claim or further sitewide change. Review records pushed; unrelated audit edit preserved. Next daily content review: Mac logs, then Node.js uninstall.


## October 18 — Mac log-files guide

Improved and retained /mac-log-files (priority 8: 77 → 14 impressions; zero clicks in both complete September 27–October 3 / October 7–13 windows). Corrected hidden measurement errors, empty-folder handling, privacy claims and Trash/recovery expectations. Added explicitly labeled disposable-fixture evidence and limits. Primary Apple sources and released source checked; Humanizer applied. [Review and source record](2026-10-18-mac-log-review.md).

55 full unit tests passed, zero failed/skipped; lint/typecheck/production build and 177 local HTTP SEO checks passed. Desktop/390px browser and final diff/failure-path review passed. Only this guide date changed; no removals, new articles or indexing claims. Publication pending. Next review October 19: Node.js uninstall, then Homebrew size-command edge cases; next full GSC windows October 23. Unrelated edits preserved.


### October 18 — resource-limit failure found during live checks

Mac-log correction source e3667b4 was published as f6d17239-7b18-4bb0-b52b-294689b397c5 and its live copy/sitemap/download/privacy checks passed. However, the full live route suite failed twice with 503s on unchanged guides. A diagnostic homepage response confirmed Cloudflare error 1102 (Worker exceeded resource limits), ray a4c808cd29b9cfa3-MRS at 13:54:20 UTC. This is new technical evidence, not proof of the historical search-loss cause.

Prepared a public HTML/RSC build-snapshot correction without a hosting upgrade. 58 full unit tests passed (zero skipped/failed), lint/typecheck/build, 174 paired snapshots, 177 local SEO routes and desktop/mobile navigation checks passed. Private/payment/license/download logic preserved; source and failure-path details are in 2026-10-18-mac-log-review.md. Delivery correction publication pending. Prioritize live stability verification next run before the queued Node.js article; keep October 23 GSC comparison.


### October 18 final publication verified

Delivery source **7a420c6** pushed to main; current Worker **489bf284-d198-469e-bc6e-383e0ead7fae**. The complete instrumented live suite passed **177 HTML routes** plus its metadata/schema/related-link/404/sitemap/robots/asset checks, with no 5XX captured in that final run. Independent checks verified HTML and RSC 200/build responses for the homepage, Mac logs, both previously failing guides and the permissions guide. Internal snapshot URL returns 404. /mac-log-files updated copy and October 18 sitemap date verified; 172 sitemap URLs. Download/DMG HEAD/appcast 200 and version 2.1.0 retained. Anonymous analytics and API 401 with no-store/noindex. No paid upgrade, protection weakening or payment/license change.

Final full unit suite: **58 passed, zero failed/skipped/cancelled**. Lint/typecheck/end-to-end production build, 174 HTML/RSC pairs, 177 local SEO checks, responsive browser/navigation and diff/failure review passed. Verification used QA/HEAD requests for download exclusion. Failed earlier live checks and their 1102 evidence remain recorded; this finite verification does not guarantee absence of future errors or explain the historical traffic loss. No indexing submission or ranking recovery claimed. Next daily run: verify stability first, then Node.js uninstall review. Next complete-window GSC comparison October 23. Unrelated audit edit and .impeccable remain untouched.
