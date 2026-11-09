# Monday search-led publishing

Every Monday, use complete Search Console windows and free public research to choose up to two useful guide additions or substantial improvements. Prefer existing coverage; a week may have fewer or no publications. This complements the daily recovery queue, which must be checked before editing. Publication does not establish Google indexing, ranking improvements or traffic recovery.

## October 26, 2026 — Downloads folder diagnosis and recovery

**Chosen intent and disposition:** improved the existing https://cleardisk.app/downloads-folder-missing-mac. One substantial update, no new URL. Queries concern missing Finder/Dock shortcuts as well as missing downloaded files; a separate keyword-variant article would duplicate the existing guide. Related Trash, Downloads cleanup and iCloud guides retain their distinct intent. No removals, redirects or noindex changes.

### Evidence checked October 26

Authenticated Search Console, owner work account, HTTPS property, web search: complete equal seven-day windows **October 9–15 before / October 16–22 after**. Rechecked this page's query report against the October 25 weekly evidence. Page impressions **157 → 2**, clicks **0 → 0**, average position **8.9 → 31.5**. These are account observations, not keyword search volumes or proof of the decline's cause. The report was updated three hours before inspection.

All ten displayed query rows had zero clicks in both windows. “downloads folder on mac disappeared” had 2 → 0 impressions. The remaining nine had 1 → 0 each: “my download file has disappeared mac”, “why is my download folder not showing in finder”, “downloads has disappeared from finder”, “my downloads folder disappeared mac”, “why did downloads disappear from dock”, “why did my downloads folder disappeared mac”, “why is my finder not showing downloads”, “download folder macbook”, and “add downloads to dock”. Displayed query totals are incomplete and do not sum to page totals; no missing query data was inferred.

Free Google search for “downloads folder missing mac finder dock” (signed-in browser, en-IN locale) showed Finder-sidebar and Dock-restoration results, including Apple Community and videos. Used only to corroborate intent, not as technical authority, volume estimates or an unbiased rank benchmark. Technical claims were checked against Apple's primary documentation below.

### Changes and source checks

Removed the unsupported “almost always only a shortcut” diagnosis and the claim that an open folder means files are fine. Added account/path checks, the Show Toolbar prerequisite, vertical-Dock placement, Safari's save-location versus downloads-list distinction, backup prerequisites, cancel-before-replace advice and ClearDisk's deleted-data recovery limit. Added a relevant Trash-recovery link and retained the original publication date; only this guide's updated date advances to October 26. Humanizer used for a neutral factual edit, with no invented author or personal voice profile.

Primary sources read October 26:
- Apple keyboard shortcuts: https://support.apple.com/en-us/102650
- Finder sidebar: https://support.apple.com/guide/mac-help/mchl83c9e8b8/mac
- Dock: https://support.apple.com/guide/mac-help/use-the-dock-mh35859/mac
- Safari downloads: https://support.apple.com/guide/safari/download-items-from-the-web-sfri40598/mac
- Trash and Put Back: https://support.apple.com/en-ie/guide/mac-help/mchlp1093/mac
- Time Machine restoration: https://support.apple.com/guide/mac-help/restore-files-mh11422/mac
- iCloud Desktop and Documents scope: https://support.apple.com/en-us/109344

Actual disposable checks on macOS 27.0.1: `ls -ld` returns status 0 for a directory, regular file, valid symbolic link **and a broken symbolic link**; a missing path returns 1. The article now explains that success does not establish usable contents. [Recorded output](evidence/2026-10-26-downloads-path-checks.txt). No real Downloads folder, user files or permissions changed. Finder restoration, Safari downloads and Time Machine recovery were source-verified, not claimed as firsthand UI/recovery experiments. No fabricated screenshot added.

### Validation and release state

Full unit suite: **58 passed, 0 failed, 0 skipped, 0 cancelled, 0 todo**. Lint and typecheck passed. Production build generated **177 HTML/RSC pairs**; **180 local HTTP SEO checks passed**. Desktop 1440px and narrow 390px browser inspection: readable copy, command and source links, no horizontal overflow. Impeccable detector returned no findings. Final diff/failure review covered absent files, empty folders, wrong accounts, access errors, broken links, incomplete downloads, missing backups and replace prompts. Registry-based metadata, FAQ schema, related links and sitemap tests passed.

Pre-publication state: main e6c8a33; production Worker 56549220-c762-4cd4-9e4b-56e3b702679a (October 24 homepage release). No competing ClearDisk edit/deployment found. Preserved the unrelated September 27 audit edit and .impeccable directory. App remains 2.2.0 (13); payment/license/analytics code unchanged. Publication pending the authorized deployment and live checks below. No fresh aggregate download report requested today; October 25 metrics remain historical. No indexing request or recovery claim.

Next actions: daily queue can proceed to Command Line Tools. Next complete-window trend review November 1; next Monday selection November 2. Allow time for recrawling before rewriting this page again without new evidence.

### Publication verified October 26

Published source **deee22c** to the existing personal Cloudflare Worker **7198d405-d7f5-4b97-871a-85e37b0b322e**. All **180 live HTTP SEO checks passed**. The revised guide returns 200 with corrected diagnosis, test limits and October 26 date; sitemap remains **175 URLs**, with the guide lastmod **2026-10-26**. Public download page still shows 2.2.0. DMG HEAD is 200; the CDN omits Content-Length, so the initial extra size-header assertion was incomplete. Verified the versioned archive bytes instead: **8,343,384 bytes**, SHA256 **c4eef9f0fb016a4d1598ac2027779b209be187722edecfb08c0954863abde746**, matching the unchanged checksum manifest. Signed appcast still points to 2.2.0 (13). Both anonymous analytics routes return **401, no-store, noindex**.

All explicit requests used ClearDisk-QA; the counted DMG route received HEAD only, and archive verification used /updates/ClearDisk-2.2.0-13.dmg. No verification download conversion added. Browser inspection used the local preview. Preview stopped and temporary research/preview tabs closed. These checks confirm publication and delivery, not Google recrawling, indexing or ranking recovery. No required validation remains incomplete; recovery UI testing remains explicitly outside the claimed evidence.


## October 31 — interrupted review recovered; production verification

Recovered the October 29 indexing investigation and actual Query Mine keyword research that the interrupted run had not saved: [evidence and pending changes](2026-10-29-search-growth-plan.md). Search Console measurements in that report are dated October 29, not refreshed today. Next complete-window GSC review November 1.

Dispositions: **improved, unpublished** /clear-cache-on-mac and /mac-running-slow-low-storage; /about disclosure edit also pending. **Kept for investigation** /features, /guides and /library-caches-folder-mac, whose sampled Google crawls succeeded despite exclusion. No new article, removal, noindex or redirect. Rosetta review remains queued; do not pile new source edits onto the blocked batch. Humanizer applied to the evidence record, with historical observations separated from current checks.

Fresh production verification: **180 published-route HTTP SEO checks passed**, using the registry/script from committed HEAD 09190f3. An initial attempt using the dirty working tree failed on the unpublished cache FAQ; that is an expected local/live content mismatch, not a production outage, and is not counted as a pass. Anonymous /analytics and /api/analytics return 401, private/no-store and noindex/nofollow. Download, signed feed and sitemap HEAD return 200. Current Worker remains **2b60a544-d893-4b3e-87d1-dce6bb55dfa2**, confirmed through Cloudflare deployment history. Source and origin/main matched before this documentation update. No new deployment or archive-byte/hash verification today. QA user agent and HEAD-only download checks excluded verification downloads.

Aggregate report observed 2026-10-31T15:54:06.245Z: October 2–31 rows contain 388 arrival events, 46 download requests, 33 finished-transfer events and 6 checkout events. Latest seven rows (October 25–31, including the incomplete current UTC day): 104 / 28 / 24 / 4. Four all-time license records and two cumulative GitHub downloads reported separately. These are event/request counters, not unique visitors, installs or sales; checkout includes test mode. They do not prove Google recovery. [Sanitized aggregate evidence](evidence/2026-10-31-aggregate-metrics.json).

No application code/test edit this run, so no new unit/lint/build pass is claimed. Prepared-batch prior checks remain 58 tests passed, zero failures/skips/cancelled/todo, lint/typecheck/build (177 snapshot pairs) and 180 local HTTP checks. Required desktop/narrow visual checks remain incomplete because browser access to localhost:3115 was denied; no affirmative response to the pending access question is available. Filesystem permission changes do not override that browser denial. The preview is no longer listening. No workaround attempted and no publication of the prepared code. The existing Monday automation is unchanged; its previously failed target/tool update is not treated as saved.

Preserved unrelated audit edits, .impeccable and all prepared source edits. This run saves evidence and verifies production only. Resume the pending visual review with approval, then commit/publish source and run post-deployment checks. Next content selection November 2; keep the daily queue and prior campaign history.


## November 2 — weekly demand check; publication deferred

[Fresh evidence and decisions](2026-11-02-monday-search-review.md). Complete October 23–29 versus October 16–22 Web windows: **20 vs 194 impressions, 0 vs 2 clicks** (89.7% impression decline). Cache query 0 vs 18 impressions; several external-drive queries fell to zero. Existing pages cover these intents; no duplicate articles added. Sitemap successfully read November 2 with 175 discovered URLs; current manual-action and security reports both show no issues. Aggregate indexing is still dated October 23, 88 indexed/95 excluded; no newer indexing conclusion is possible from it. Validation now says Started, not initiated by this run.

Kept the pending cache/slow-Mac improvements and About edit intact; no further source edits while required local visual checks remain blocked by the earlier browser-access denial. Fresh **180 live HTTP SEO checks passed** against the committed registry, not dirty unpublished copy. No new unit/lint/build run or publication claimed. Humanizer applied to evidence prose. Original Query Mine metrics retain their October 29 observation date; no new volumes invented. No new aggregate download pull. All unrelated changes preserved. Next weekly selection November 9; finish pending preview/publication when the owner allows access.


## November 4 — reviewed guide improvements published

Owner-approved source commit **14add60** is pushed to main and deployed to the existing personal-account cleardisk.app Worker. Deployment history confirms **100% cd40ddb6-e724-42f4-8bab-956f59269148**, deployed 2026-11-04T11:06:03.962Z. GitHub synchronization succeeded with the existing work-account HTTPS credential; no force push, rule change or persistent credential change.

Published improvements:
- https://cleardisk.app/clear-cache-on-mac — symptom-led Safari, Chrome and app-cache steps, expected results, data-loss boundaries and accurate menu-bar behavior. **Improved and published.**
- https://cleardisk.app/mac-running-slow-low-storage — CPU, memory, storage and network triage, released Why Slow tools, repeat-task comparison and one-change-at-a-time login-item guidance. **Improved and published.**
- https://cleardisk.app/about — included performance tools, guide-source/test limitations, maker disclosure and correction contact. **Improved and published.**

Exact reviewed source passed **58 unit tests, 0 failed/skipped/cancelled/todo**, lint, typecheck, Cloudflare production build (**177 HTML/RSC snapshot pairs**) and **180 local HTTP SEO checks** before deployment. Owner supplied the visual approval; agent browser access to localhost remained denied and was not bypassed. Final diff and FAQ/schema/link failure paths reviewed. After deployment, **180 live HTTP SEO route checks passed**, including head metadata, structured data, internal links, 404 handling, sitemap, robots, download HEAD and OG image. All three changed routes return 200 and their new copy is present; both guides and their sitemap entries show **2026-11-04**. Sitemap remains **175 URLs**. About retains its existing undated sitemap entry.

Released download preserved: /ClearDisk.dmg HEAD 200; versioned 2.2.1 (14) archive GET verified **8,529,684 bytes**, SHA-256 **ebe7cc41c8fa9f293cc84f54d2e22835861541d75bbb516a7e40907dd15ed0eb**; live appcast matches the committed file. Anonymous /analytics and /api/analytics remain **401**, private/no-store and noindex/nofollow. QA user agent, HEAD-only public download check and versioned archive path exclude verification from download counts. No payment, license or app-binary changes.

Source checks and limitations remain in the preceding November 4 entry (fresh Chrome/Apple slow-Mac checks; prior October 29 Safari/Activity Monitor evidence retained where refresh failed). No new GSC inspection, indexing submission, download-metric pull or recovery claim. Publication is verified; Google indexing/ranking is not. No new article, deletion, noindex or redirect. Unrelated audit edits and .impeccable remain untouched. Next daily review November 5; next complete-window search comparison and weekly selection November 9. Do not repeat these completed improvements without new evidence.


## November 9 — demand refresh and accuracy corrections prepared

[Review, sources, checks and limits](2026-11-09-monday-search-review.md). Fresh free Query Mine estimates confirm existing cache/slow-Mac demand (22,200/5,400 US monthly searches; history Oct 2025–Sep 2026), not site performance. GSC unavailable because no browser connection is exposed; no current account-loss or recovery claim. No new guide or keyword variant.

**Improved locally, unpublished:** /free-up-space-on-mac removes the unsupported “12 steps ranked by GB saved” promise; /clear-cache-on-mac restores app-documentation conditions and corrects “quit closed apps.” **Kept:** current slow-Mac and published Rosetta revisions. No new consolidation/noindex/redirect. The November 7 deployment is verified as Worker 269254dd-26fe-438f-b14e-9fe209b6698b; the earlier Rosetta-pending notes are historical. Current sitemap is 173 URLs after that separate release's two System Data redirects.

58 full unit tests passed, 0 failed/skipped/cancelled/todo; lint/typecheck passed; 175 snapshot pairs built; 178 local HTTP SEO checks passed. Current production also passed 178 HTTP SEO checks before editing, with download HEAD 200 and anonymous analytics 401/no-store/noindex. Final diff/FAQ/schema/link implications reviewed. Browser preview unavailable, so desktop/narrow visual verification and today's publication remain incomplete. Preview runs on localhost:3115 for the two changed guides. Source retained locally; unrelated edits preserved. No new deployment or indexing request. Fresh aggregate metrics and source-fetch limitations are recorded in the review. Next daily review November 10; next Monday November 16.
