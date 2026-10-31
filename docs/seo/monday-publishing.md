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
