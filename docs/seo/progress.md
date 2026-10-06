# SEO loop progress log

## Day 24 — 6 October 2026 (iCloud status guide prepared; deployment blocked)

Campaign remains September 13–October 12. Improved the existing /icloud-drive-status-icons-mac guide, selected from the October 3 Search Console comparison: 50 impressions in September 22–28 versus four in September 15–21. This is historical page evidence, not a new keyword-volume estimate or proof of rankings gained. No duplicate article.

Source commit d5e30bc adds the missing explanation of absent Downloaded icons beside filenames, file-versus-sidebar transfer progress, concrete offline preparation, and the difference between Remove Download and deleting the synced original. Added a visible FAQ answer, a related link to /icloud-remove-download-missing-mac and a deletion source. The guide's content date and generated sitemap lastmod are October 6. Removed its obsolete 1.1 product reference while preserving iCloud Doctor's limits. Browser review also found an outdated version 2.0.0 in the shared article CTA; it now reads softwareSchema.softwareVersion (currently 2.1.0), affecting existing guides and blog posts. No other guide dates were advanced for this shared label correction.

Primary sources checked October 6:
- https://support.apple.com/en-ae/guide/mac-help/mchlc994344b/mac — Finder status column, absent Downloaded icon, transfer indicators.
- https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac — Download Now, Keep Downloaded, Remove Download and local retention.
- https://support.apple.com/en-ie/guide/icloud/mm3b7fcd0c10/icloud — deleting a cloud file affects other synced devices.

Applied the installed Humanizer skill as a generic factual edit: replaced abstract advice with specific Finder actions and an offline presentation example. No personal voice profile, invented experience or AI-detection score. App source still implements the documented unknown/local/cloud-only observations. GitHub v2.1.0 is published (not draft); live /download and /updates/appcast.xml advertise 2.1.0. No new app build or release claim.

Final validation: 55 tests pass, typecheck, lint, Cloudflare production build and 176 local HTTP SEO checks pass. Local sitemap has the target's October 6 date; the registry remains 171 sitemap URLs. Browser checked rendered copy, the working new section anchor, related guide and the corrected 2.1.0 CTA. No layout or styling change; no narrow-viewport test claimed. Preview screenshot: /tmp/cleardisk-guide-preview-2026-10-06.jpg. Removed only obsolete legacy_env from the ignored generated Wrangler config for local preview, preserving bindings. Git diff --check passed. An initial edit script stopped before writing because its guessed related slug was wrong; corrected to the existing canonical slug before final tests.

Private metrics observed at 2026-10-06T10:08:16.463Z: 67 website download requests / rolling 30 UTC days (nine / seven days); 184 arrivals (108 / seven); 14 finished-transfer events (six / seven); seven checkout sessions (two / seven). Four all-time live-session license records and two cumulative GitHub downloads separately. Requests are not unique people or installs, arrivals can include QA, checkouts include test mode, and license counts do not deduct refunds. Rolling-window totals are not cumulative gains or losses. No revenue or attribution claim. Credentials stayed local and were not printed.

Live pre-publication checks: guide, /download, /sitemap.xml and appcast return 200; sitemap contains 171 URLs; DMG HEAD returns 200; /analytics and /api/analytics return anonymous 401. Used ClearDisk-QA and no DMG GET. No fresh checksum or notarization validation. Current deployed guide revision remains unchanged; this run did not deploy.

Blocker: Wrangler has no usable publishing session and requested authentication. A narrow-scope login attempt reached Cloudflare's saved personal-account sign-in screen for anilgautam1180@gmail.com, which explicitly says continuing agrees to its terms. Stopped before that agreement under the browser confirmation rules. OAuth then timed out. Owner needs to sign in/complete that agreement; restart Wrangler login afterward to refresh the existing publishing access. Authenticated deployment history could not be read, so the latest recorded Worker remains 1d5e854b-ca59-4a38-97fd-80cef4d2146b, not a fresh verification of the deployment ID.

No fresh Search Console read or indexing request. October 5 is the latest recorded sitemap/inspection evidence; yesterday's accepted indexing request must not be repeated just because today is a new run. Today's unpublished revision cannot yet be indexed. No IndexNow submission before publication. Follow up after Cloudflare authentication: inspect current remote/deployment state, deploy the tested correction, verify live text/metadata/sitemap, DMG HEAD and analytics protection, then submit only the revised guide to IndexNow. Preserve payment mode, $10 license, app artifacts, design and Talivia pause. No outreach sent. The unrelated docs/seo/2026-09-27-live-site-audit.md edit remains unstaged.

## Day 23 — 5 October 2026 (Google recrawl verification)

Campaign remains September 13 through October 12. Checked the two existing Search Console priorities after the October 4 edits. No duplicate article or further rewrite; this run establishes crawl status before assessing content performance.

Read the authorized anilgautamwork@gmail.com Search Console session. The sitemap report shows Success, last read October 4, 171 discovered pages. Discovery is not a claim that all 171 pages are indexed.

| URL | Indexed status | Last crawl shown by Google | Canonical |
| --- | --- | --- | --- |
| /what-is-system-data-on-mac | URL is on Google; page indexed | 4 Oct 2026, 22:18:53 | Google-selected canonical is the inspected URL |
| /how-to-check-storage-on-mac | URL is on Google; page indexed | 1 Oct 2026, 09:24:46 | Google-selected canonical is the inspected URL |

Times above are exactly as displayed; the report did not label their timezone. Both were fetched successfully by Googlebot smartphone, allow crawl/indexing, use HTTPS and have one valid Breadcrumb item. System Data has been crawled since the recorded October 4 revision. This does not establish its displayed snippet or ranking. Storage-check's last crawl predates that revision.

Requested indexing once for https://cleardisk.app/how-to-check-storage-on-mac. Google confirmed “Indexing requested” and that the URL was added to its priority crawl queue. No challenge was presented or solved. Do not repeat the request on the next daily run; Google says repeats do not change priority. Acceptance is not proof that the new revision has been crawled or indexed. Saved local proof at /tmp/cleardisk-indexing-request-2026-10-05.jpg.

The individual inspection Discovery fields showed “No referring sitemaps detected” for System Data and “Temporary processing error” for storage-check. Both URLs are present in the public sitemap, and the sitemap-level report is successful. No basis to change sitemap URLs or resubmit the sitemap from these fields alone.

Sources: authenticated Google sitemap report https://search.google.com/u/2/search-console/sitemaps?resource_id=https%3A%2F%2Fcleardisk.app%2F ; URL inspection through the property's search field for the two URLs above. No new keyword volumes, performance comparison or technical troubleshooting advice. October 3 remains the latest recorded equal-window performance comparison; today's evidence updates crawl/indexing status only. Humanizer prose editing was unnecessary because no public content was written.

Private aggregate metrics at 2026-10-05T10:03:05.873Z: 72 website download requests/30 UTC days, 12/7; 177 arrivals, 14 finished-transfer events and seven checkout sessions/30 days; four all-time live-session license records; GitHub two cumulative separately. The rolling 30-day request total is lower than yesterday's 77; totals from moving windows cannot be read as lost downloads. Requests are not unique people or installs, arrivals may include QA, checkouts include test mode and license records do not subtract refunds. No revenue or campaign-attribution claim. Credentials were kept local and never printed or committed.

Verification: the two guides, /download and /sitemap.xml return 200; /download reports 2.1.0; sitemap contains 171 URLs. DMG HEAD returns 200 and both private analytics endpoints return anonymous 401. Used ClearDisk-QA and did not fetch the DMG body. GitHub v2.1.0 remains published (not draft). Git main matched origin after fetch; the unrelated docs/seo/2026-09-27-live-site-audit.md edit is preserved. No new checksum, authenticated deployment-history or notarization check claimed; the last verified Worker remains the release record's 1d5e854b-ca59-4a38-97fd-80cef4d2146b.

No public routes changed and no new deployment or runtime build was needed. Documentation diff checked. App artifacts, $10 license, payment mode, design, private analytics and Talivia pause unchanged. Reviewer drafts remain unsent.

Next: verify the storage-check guide's crawl date on a later run without submitting it again, and compare complete post-edit search periods once available. Continue targeted existing-guide work only when there is a concrete content gap. Campaign ends October 12.


## Day 22 follow-up — 4 October 2026 (reviewer brief after release)

Campaign remains September 13 through October 12. Read the existing day-22 FAQ publication and completed 2.1.0 release first; did not duplicate their work or publish a filler article. Updated the existing creator shortlist to 2.1.0 and prepared [a reviewer brief](outreach/2026-10-04-reviewer-brief.md), including an optional MacSparky pitch, download/release links, a read-only evaluation outline and explicit partial-model/main-executable limits. The new pitch is an alternative to the earlier sample-file pitch, not a second message to send. No outreach, review license, paid placement or recording was performed.

Source checks: https://support.apple.com/102527 ; https://support.apple.com/en-us/121115 ; https://www.macsparky.com/about/ . Confirmed Rosetta's macOS 28 exception and separate-component caveat, hardware-dependent Apple Intelligence requirements, and MacSparky's direct contact route with its rejection of paid links/cross-posting. Product-review acceptance remains unverified. Release facts are supported by docs/releases-2.1.0.md and the live 2.1.0 GitHub release; older sample screenshots are explicitly labelled as an earlier version. Used the Humanizer skill for a generic concrete edit, without a personal voice profile or detector claim.

Metrics at 2026-10-04T10:03:37.206Z: 77 website download requests/30 UTC days, 12/7; 167 arrivals, 13 finished-transfer events and six checkout sessions/30 days; four all-time live-session license records; GitHub two cumulative separately. These are requests/events rather than unique people or installs; arrivals can include QA, checkouts include test mode, and license records do not subtract refunds. No campaign attribution or revenue inference. The first summarizer expected an object where the endpoint returns a daily list; corrected the local summarizer to use the dashboard's count aggregation. Credentials stayed local.

Verified /download and /updates/appcast.xml both advertise 2.1.0, and /features and /sitemap.xml return 200. Sitemap has 171 URLs. Primary DMG HEAD returns 200; both analytics endpoints return anonymous 401. Used ClearDisk-QA and no DMG body request. No new checksum or notarization claim beyond the release evidence. GitHub v2.1.0 is published (not draft). Main matched origin before edits; preserved the unrelated docs/seo/2026-09-27-live-site-audit.md edit.

No public URL changed, new deployment, app change or runtime build. Latest recorded production Worker remains 1d5e854b-ca59-4a38-97fd-80cef4d2146b from the verified release; this run checked live content, not authenticated deployment history. No fresh Search Console dataset was fetched; October 3 remains the latest recorded comparison and indexing evidence. No claim that today's revisions are indexed. Markdown diff and local document links checked.

Next: allow time for the already-published two Search Console priorities to be recrawled; inspect their next complete comparison before another rewrite. Reviewer material is available for owner review; sending still requires exact-recipient/message approval. New Mac checks video remains unrecorded. No need to redeploy documentation-only changes; payment mode, $10 license, app artifacts, design, private analytics and Talivia pause preserved.


## 4 October 2026 — ClearDisk 2.1.0 release publication

GitHub tag workflow initially failed on its missing release manifest; recovery commit bb167ae and manual run 37157573051 succeeded. Published app assets were unchanged. See the release record for the exact cause and recovery.

Owner-requested release, not a new campaign article. Published app 2.1.0 build 12 with read-only Apple Intelligence storage and Intel-app checks. Updated current release copy on /, /about, /download, /features, /pricing, /buy-now, /support and /terms, shared FAQs and software metadata; historical article testing claims preserved. App source 17bcf1d; website source 36a1ea1; production Worker 1d5e854b-ca59-4a38-97fd-80cef4d2146b. GitHub v2.1.0 published with matching DMG digest. See ../releases-2.1.0.md for signatures, notarization, hash and limits.

Apple https://support.apple.com/102527 rechecked: Rosetta remains generally available through macOS 27, with limited older-game support in macOS 28; main executable findings do not cover plug-ins or determine game exceptions. Protected Apple Intelligence locations were unreadable in signed-app QA and remained explicitly partial. No universal 30 GB footprint or recoverable-space claim.

Validation: 76 Swift tests, 55 website tests, typecheck, lint, production build, desktop/390px review and all 176 local/live HTTP SEO checks passed. Live primary/versioned DMGs and feed match verified local artifacts. In-app update from installed 2.0.0 (11) to 2.1.0 (12) installed and relaunched; existing developer license preserved. Anonymous analytics endpoints return 401. Verification used ClearDisk-QA; update archive excluded from primary download metrics. No new aggregate metrics fetched, no new keyword-volume data and no fresh Google recrawl/indexing claim. Sitemap validated; payment mode, license implementation, consent analytics and Talivia pause preserved.


## 4 October 2026 — FAQ and snippet improvements (owner request, campaign day 22)

Publication verified: source commit 1e94b1c pushed to main; deployed personal-account Worker version 2b62dabf-d720-4b0e-a04f-bcaab430c54c. Removed only obsolete legacy_env from an ignored generated deployment config, preserving bindings. All 176 live HTTP SEO checks passed. Browser confirmed the live new FAQ answer and October 4 date. Sitemap remains 171 URLs with October 4 modification dates for the three edited content pages. Both private analytics routes return anonymous 401/private-no-store/noindex; DMG and appcast HEAD return 200/noindex. DMG contents were not downloaded in this run, so no new checksum claim. IndexNow accepted the three revised content URLs (200); Google recrawl/indexing/snippet display for this revision is not yet verified.

Private aggregate observation at 2026-10-03T21:07:51.658Z (October 4 local): 76 download requests, 155 arrivals, 12 finished-transfer events and six checkout sessions in the rolling 30-UTC-day data; four all-time live-session license records and two cumulative GitHub downloads separately. Requests are not unique users/installs, visits can contain QA, checkouts include test mode, and license count does not deduct refunds. Verification used ClearDisk-QA for page checks and HEAD for downloads; no QA download conversion was triggered. No secrets printed or committed. Next: observe recrawl and query performance, improve remaining FAQ inaccuracies as source checks justify them, and avoid duplicate blog variants. Campaign ends October 12.

Improved existing /faq/system-data, /what-is-system-data-on-mac and /how-to-check-storage-on-mac rather than duplicating their intent in another blog post. Seven topic FAQ pages and two blog posts already exist. Added the missing direct settings-path answer, corrected unsafe blanket cleanup advice, partial measurement claims, a fixed calculation deadline and category controls. FAQ pages now display their actual content dates and no longer advertise obsolete version 1.1. Existing layout, URLs, app 2.0.0 download, payment/license behavior and Talivia pause preserved.

Current Google guidance checked: https://developers.google.com/search/updates (May 8 and June 15 entries: FAQ rich results stopped May 7, 2026; FAQ documentation retired), https://developers.google.com/search/docs/appearance/snippet (visible content, unique descriptions, working deep links), and https://developers.google.com/search/docs/appearance/structured-data/article (representative images, author/date/headline). FAQPage remains valid schema.org semantics, not eligibility for a retired Google feature. Added canonical FAQ/question identities pointing at visible section anchors. Article/BlogPosting image now uses actual inline figures when present, omitting the unrelated promotional OG card otherwise. Social OG card unchanged. Article/Breadcrumb markup already existed. No invented reviews, QAPage substitution, ranking or snippet guarantee.

Apple sources read: https://support.apple.com/en-us/102624 ; https://support.apple.com/guide/mac-help/change-storage-settings-mchl3d437fbc/mac ; https://support.apple.com/en-us/102154 . The first guessed storage URL failed; used Apple's linked live page. Preserved important distinctions between System Data, available space, snapshots and removable files. Source-check dates are not claims of testing every supported OS.

Humanize generic edit (already authorized): concrete settings paths and direct answers replace vague lead-ins and unsupported certainty. Estimated editorial pattern score 11/69 before, 6/69 after; subjective, not an AI detector result or personal voice profile. Impeccable narrow refinement preserved the existing reading design.

Validation before publication: 55 tests, typecheck, lint, Cloudflare build and 176 local HTTP SEO routes passed. Added FAQ answer/anchor parity and article-image tests. Corrected test typing and HTML attribute-case assertion during validation. Browser checked desktop and 390px FAQ; no horizontal overflow, visible answers and working hash link. Git main matched origin before edits; starting production Worker 9dea131e-a1f0-4a6b-aa64-b48136098d89 confirmed. Deployment and indexing status pending below; no new Google crawl claim. October 3 Search Console comparison remains the latest evidence (660 impressions/five clicks vs 59/one, equal seven-day windows). Prioritized its two existing guide opportunities. No new keyword volumes or outreach.

## Campaign day 21 — 3 October 2026 (fresh Google evidence)

Regained read-only Search Console access through the existing anilgautamwork@gmail.com browser session. No new verification, permissions or credentials were needed. Used Google's page-performance recommendation to open an equal-window comparison, then removed the page filter to read property totals. This replaces the September 29 observation as the latest Google evidence; earlier entries remain historical.

Web (text), all countries/devices, September 22–28 versus September 15–21:

| Metric | September 15–21 | September 22–28 |
| --- | ---: | ---: |
| Clicks | 1 | 5 |
| Impressions | 59 | 660 |
| CTR shown by Google | 1.7% | 0.8% |
| Average position | 34.3 | 14.3 |

Source: [authenticated performance comparison](https://search.google.com/u/2/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fcleardisk.app%2F&start_date=20260922&end_date=20260928&compare_start_date=20260915&compare_end_date=20260921&metrics=IMPRESSIONS). Report said “Last update: 5 hours ago” when read. These are historical, complete seven-day windows, not today's totals or keyword search volumes. Small counts and changing query/page mix limit interpretation; no causal claim about recent edits, revenue or fixed-keyword ranking.

Page evidence, same dates and search type:

| Existing guide | Earlier impressions | Later impressions |
| --- | ---: | ---: |
| /what-is-system-data-on-mac | 2 | 90 |
| /how-to-check-storage-on-mac | 6 | 80 |
| /icloud-drive-status-icons-mac | 4 | 50 |
| /keep-icloud-files-downloaded-mac | 1 | 45 |
| /delete-macos-installer-mac | 1 | 37 |

The System Data explainer had zero clicks in both windows and average position 7 earlier versus 14.3 later. Its 4,400% impression recommendation is mathematically correct but rests on two earlier impressions; it is not a ranking improvement. Its visible query rows include “what is system data on mac” (four later impressions), “system data mac storage” (four), and “macos system data”, “where is system data on mac”, “what is system data in storage”, “how to see system data on mac” and “how to find system data on mac” (one each). All displayed earlier counts were zero. The seven visible rows account for only 13 of the page's 90 impressions; they are not a complete query census. Property-level visible queries also include “how to check storage on mac” (three versus zero) and “how to view storage on mac” (three versus three); those rows were not page-filtered and must not be assigned to one guide without checking.

Next content review: prioritize /what-is-system-data-on-mac and /how-to-check-storage-on-mac, inspecting their existing definition, settings path and size-interpretation explanations before editing. Both already exist; preserve their URLs and avoid duplicate variants. Fresh Apple-source checks are required for any new technical advice. This run added no troubleshooting instructions or public prose, so no new technical-source research or Humanize assessment was needed. No personal voice or detector claim.

Google's [sitemap report](https://search.google.com/u/2/search-console/sitemaps?resource_id=https%3A%2F%2Fcleardisk.app%2F) shows Success, last read October 2, 171 discovered pages. [Page indexing](https://search.google.com/u/2/search-console/index?resource_id=https%3A%2F%2Fcleardisk.app%2F) remains dated September 21 with 65 indexed and 11 not indexed. Do not subtract these lagged counts from the current sitemap total or claim recent edits have been indexed. No indexing request submitted. No new paid or free keyword-volume estimate was collected.

Current private metrics at 2026-10-03T13:38:00.057Z: 74 website download requests/30 UTC days and 11/7; 147 arrivals, 12 finished-transfer events and six checkout sessions/30 days; four all-time live-session license records; GitHub two cumulative separately. Requests are not unique users or installs, arrivals may include QA, checkout counts include test mode, license totals do not subtract refunds and windows differ. No campaign-attribution or revenue claim. Credentials stayed local and were neither printed nor committed.

Repository main was clean and matched origin after fetching. Authenticated deployment history confirms unchanged Worker 9dea131e-a1f0-4a6b-aa64-b48136098d89. Live /containers-folder-mac, /download and /sitemap.xml return 200; container guide retains its October 2 date, download reports 2.0.0, and sitemap has 171 URLs. DMG HEAD returns 200/noindex; anonymous /analytics and /api/analytics return 401/private-no-store/noindex. Verification used ClearDisk-QA and no DMG body request. No fresh checksum claim. Documentation diff checked; no runtime changes, build, new publication or deployment. Payment/license implementation, app, design and Talivia pause unchanged. Existing creator drafts remain unsent. Campaign ends October 12.

## Campaign day 20 — 2 October 2026 (container measurement correction)

Published https://cleardisk.app/containers-folder-mac . Replaced wildcard size commands that discarded permission errors and kept only 15 results with quoted, one-level du commands. The guide now explains incomplete measurements, parent totals and the option to stop at an access prompt. Shortened the container definitions and clarified the matching access FAQ. Existing saved-data warnings and ClearDisk’s removal guard remain. No new page, layout or dependency; Article/sitemap modification date is October 2.

Primary sources checked today: [Apple’s container protection documentation](https://developer.apple.com/documentation/xcode/protecting-local-app-data-using-containers), [app-group container access](https://developer.apple.com/documentation/xcode/accessing-app-group-containers), [Finder Go to Folder](https://support.apple.com/guide/mac-help/mchlp1236/mac), and [uninstalling apps](https://support.apple.com/en-us/102610). Read both developer pages through their linked Markdown representations using curl after the web reader rejected their content type. Confirmed the existing removal guard in Sources/Core/TrashService.swift; no native app code or removal behavior changed.

Checked /usr/bin/du -h -d 1 using generated temporary data: a path containing spaces, ordinary and hidden child directories, the parent total, and a deliberately unreadable sample directory. The latter produced visible permission-error stderr and a nonzero exit. Restored that sample directory’s permissions before temporary-file cleanup. No personal container was scanned, app data removed, security setting changed or access prompt approved. These are command-behavior checks, not a claimed amount of recoverable disk space.

Humanize: used the already authorized generic edit; neither local voice-profile path exists. Moderate edit of dense explanations and generic prompt language. Subjective pattern assessment: 12/69 before (2 statistical, 6 composition, 4 document), estimated 7/69 after (1, 3, 3). These are editorial judgments, not detector results. Kept necessary qualifications and concrete file paths.

Source 7171fe2 pushed to main. Clean starting tree and matching remote confirmed; prior production d433b9ee-2889-4ca2-912c-116995e63d5f checked through authenticated Wrangler. Deployed to the same personal-account Worker as 9dea131e-a1f0-4a6b-aa64-b48136098d89. The current CLI used a temporary generated config omitting only obsolete legacy_env; no source configuration, bindings or credentials changed.

Validation: 53 tests, typecheck, lint, production build and 176 local HTTP SEO checks passed. All 176 live HTTP SEO checks passed. Exact live commands, text/date and the October 2 sitemap entry verified; sitemap remains 171 URLs. IndexNow accepted this one URL (200), not a Google indexing confirmation. No fresh browser visual review was available; unchanged renderer/layout and actual compiled/live HTML were checked. Public download/updater still report 2.0.0. DMG unchanged at 6,048,127 bytes and SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903, with noindex. Both anonymous analytics routes remain 401/private/no-store/noindex. Payment mode, licenses, Google configuration and Talivia pause preserved.

Private aggregate metrics before publication at 2026-10-02T10:03:04.194Z and after QA at 10:07:15.140Z were unchanged: 71 website download requests/30 UTC days, 11/7 days; 117 arrivals, nine finished-transfer events and five checkout sessions/30 days; three all-time live-session license records; GitHub two cumulative separately. ClearDisk-QA excluded verification downloads. Counts are not unique people, installs or attributable sales; arrivals can include QA, checkout counts include test mode, license totals do not subtract refunds, and rolling windows differ. Secrets remained local and were not printed or committed.

Search Console was not accessed in this run; browser/account tools were unavailable. September 29 remains the latest recorded Google evidence. This revision’s Google crawl/indexing is unverified, and no new keyword-volume, ranking or traffic-effect claim is made. Next: use fresh query data when available to select the next substantive correction; existing creator drafts remain unsent pending owner review and authorization. No paid tools or external messages. Campaign remains September 13–October 12.

## Campaign day 19 — 1 October 2026 (Photos library correction)

Published a correction to https://cleardisk.app/photos-library-taking-up-space-mac . The existing guide wrongly treated the library as containing every original, described old libraries as easy duplicates, promised a free-space change at the end of the recovery window, said Photos could not open without its external library, and claimed disabling iCloud Photos could never remove local copies. Revised the opening, five sections and matching FAQs. Added backup and per-device sync choices, retained the existing URL/related guides/design, and updated Article/sitemap dates to October 1. Removed an unverified blanket claim that ClearDisk cannot offer a photo library for removal; the guide now describes the scan as a way to locate and review sizes, not certify backup or sync status.

Primary sources read October 1: [Photos optimization](https://support.apple.com/guide/photos/optimize-storage-in-photos-on-mac-phta9b4673b4/mac), [iCloud Photos](https://support.apple.com/en-us/108782), [moving the library](https://support.apple.com/en-us/108345), [library backups](https://support.apple.com/guide/photos/back-up-the-photos-library-pht6d60d10f/mac), and [turning off iCloud Photos](https://support.apple.com/en-us/102179). The last source is dated September 14, 2026. Added the two missing source links in the guide. No new deletion experiment, local Photos measurement or recovery result is claimed. No personal files were changed.

Humanize: applied the preauthorized generic edit in the established plain-language tone. Replaced blanket assurances and vague transitions with specific choices and their consequences; preserved the safety qualifications. Subjective editorial assessment 12/69 before (3 statistical, 5 composition, 4 document), 8/69 after (2, 3, 3). This is an editing judgment, not an AI-detector result or a personal voice profile. No duplicate article, keyword variant or paid research.

Source 4501f9e pushed to main. Pre-deployment remote matched local main, and authenticated deployment history confirmed Worker 58179b2c-399b-4e8b-8ebd-bfed7f665c46. Deployed the corrected guide to the same personal-account Worker as d433b9ee-2889-4ca2-912c-116995e63d5f using the existing authenticated Wrangler 4.144.0. Only obsolete legacy_env was omitted from a temporary generated deployment config; source configuration, credentials and bindings were unchanged.

Validation: 53 tests, typecheck, lint, Cloudflare build, 176 local and 176 live HTTP SEO checks passed. Desktop and 390px browser reading checked; no horizontal overflow observed. Verified exact revised live content and date, 171 sitemap URLs with this guide’s October 1 lastmod, and IndexNow acceptance of this one URL (200). IndexNow is not Google indexing. Public download and updater still report 2.0.0. DMG remains 6,048,127 bytes, SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903, with noindex. Both anonymous analytics routes return 401/private/no-store/noindex. Payment mode, licenses, Google configuration, app and Talivia pause were preserved.

Aggregate metrics before publication at 2026-10-01T10:03:54.657Z: 71 website download requests over 30 UTC days / 12 over 7; 103 arrival events, nine finished transfers, five checkout sessions in the 30-day view; three all-time live-session license records; GitHub two cumulative separately. After live checks at 10:08:56.191Z, download and purchase-related counts were unchanged and arrivals were 104 (may include browser QA). Download verification used ClearDisk-QA. Counts are not unique people, installs or attributable revenue; checkout totals include test mode, license totals do not subtract refunds and rolling windows differ. Secrets were neither printed nor committed.

No fresh Search Console or keyword-volume dataset was retrieved in this run. September 29 remains the latest Google observation; this revision’s Google crawl/indexing is unverified. No volume, ranking or traffic-causation claim. Next: use fresh Google evidence when available to select the next existing-guide correction, and review the prepared creator drafts before any external sending. No outreach was sent. Campaign remains September 13–October 12; do not extend it.

## Campaign day 18 scheduled follow-up — 30 September 2026

Today's six-guide publication and subsequent homepage/shared-FAQ update were already complete. Preserved source 79d4ac3 and verified current Worker 58179b2c-399b-4e8b-8ebd-bfed7f665c46 through the installed Wrangler 4.144.0 session. The older project-local CLI lacked non-interactive auth; using the already authenticated CLI resolved inspection without changing credentials or access. No redundant publication, build or deployment.

Updated the existing [MacSparky draft](outreach/2026-09-27-creator-shortlist.md) to link the real sample-file walkthrough rather than propose an unrecorded video. Updated the existing demo ledger to distinguish published still images from the two videos that remain unrecorded. Rechecked https://www.macsparky.com/about/ : direct correspondence route is separate from support; paid link deals and cross-posting collaborations are explicitly rejected. Product-pitch acceptance remains unverified. No message, review license, paid placement or public post was sent. Generic Humanize surgical edit, subjective draft assessment 9/69 → 6/69; no detector or personal-voice claim.

Validation: documentation diff checked; both evidence pages, both screenshot assets, /download and /sitemap.xml return 200. Live text confirms the actual sample test and version 2.0.0; sitemap remains 171 URLs. DMG HEAD returns 200/noindex. Both anonymous analytics routes return 401/noindex. Used ClearDisk-QA and HEAD, no full DMG request. Public URLs, app, payments, license handling, analytics and Talivia state unchanged. No new technical guidance requiring an Apple-source refresh.

Aggregate metrics at 2026-09-30T10:03:06.409Z: 69 website download requests/30 UTC days, 16/7 days; 84 arrivals, eight finished-transfer events, five checkout sessions; three all-time live-session license records; GitHub two cumulative separately. Seven-day change reflects a rolling window; requests are not unique users or installs, arrivals may include QA, checkout counts include test mode and license records do not subtract refunds. No revenue or causality claim. No fresh Search Console dataset retrieved: September 29 remains the latest Google observation. The separate research follow-up records authenticated historical Keyword Planner estimates; this run did not fetch or expand those estimates.

Next: the owner can review the updated recipient/message before any external send. Continue evidence-led guide corrections when a concrete gap or fresh search query warrants them; do not republish for the schedule alone. Campaign still ends October 12.


## 30 September 2026 — owner-requested AI research improvements

Implemented the supplied AI Rank Grow research with the requested Humanize skill only. The [research, prompt map, sources and editorial assessment](2026-09-30-ai-visibility-improvements.md) preserve the report's denominator: 22 complete answers, eight excluded unsuccessful answers, no observed ClearDisk mentions/citations. These are not Google rankings or keyword volumes. Generic editing was already authorized; no personal voice profile or detector claim was invented.

Updated six existing URLs: https://cleardisk.app/find-large-files-on-mac , https://cleardisk.app/mac-storage-not-updating-after-deleting-files , https://cleardisk.app/clear-system-data-on-mac , https://cleardisk.app/clear-cache-on-mac , https://cleardisk.app/free-up-space-without-deleting-files and https://cleardisk.app/best-free-mac-cleaner . Added two original app screenshots, exact generated-file measurements, the Large Files threshold, a Finder Put Back result, safer cache instructions and the separate Photos optimization setting. New contextual links lead to the evidence. The shared guide renderer supports accessible, responsive figures; no new dependency or duplicate URL. All six lastmod/Article dates updated to September 30.

Original test used only three generated sample files in Downloads, ClearDisk 2.0.0 build 11 and macOS 27.0.1. Moved the 134.2MB sample to Trash and restored it through Finder. No personal file was removed, no Trash emptied and no recovered-space or speed result claimed. Screenshots distinguish the sample folder from whole-drive capacity. Source checks and limitations are in the linked research record. Humanize subjective assessment: 13/69 before (3 statistical, 6 composition, 4 document), estimated 8/69 after (2, 3, 3); an editorial assessment, not a classifier score.

Validation: 53 unit tests, typecheck, lint, Cloudflare production build, 176 local and 176 live HTTP SEO checks passed. Checks now cover screenshot markup, dimensions, alt text, caption and JPEG asset responses. Desktop and 390px browser review passed; fixed low-contrast captions using the existing theme variable before deployment. Live screenshots load, full-size link works, and no narrow horizontal overflow was observed. Initial extra sitemap assertion assumed no whitespace; correcting that checker confirmed all six live September 30 dates. Sitemap remains 171 URLs. IndexNow accepted only the six changed URLs (200); this is not a Google submission or indexing confirmation.

Source cf9003a pushed to main; deployed existing personal-account Worker as 1e24fe90-ea6e-4121-8f3a-1d0ba3ef9065. Pre-deployment history matched expected September 29 version 613ee76e-87db-40d5-a868-07548dde9ed2. Live /download and appcast still name 2.0.0. DMG remains 6,048,127 bytes, SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. /analytics and /api/analytics remain anonymous 401/private-no-store/noindex. Payment, licenses, updater, Google settings and Talivia pause preserved.

Public article responses using ClearDisk-QA, Googlebot, GPTBot and OAI-SearchBot user-agent strings returned 200 with article text and indexable head metadata. These local probes do not establish access from actual verified crawler networks. robots.txt returned 200 for ClearDisk-QA, permits public pages and disallows /api/. A default Python user agent received 403 on robots; no security protection was weakened. The broader live SEO checks also passed robots access.

Before publication, analytics at 2026-09-29T20:05:41.871Z (September 30 locally): 69 website download requests/30 UTC days, 18/7 days; 70 arrivals, eight finished transfers, five checkout sessions; three all-time live-session license records; GitHub two cumulative separately. At 20:11:10.907Z downloads and purchase-related counts were unchanged, arrivals were 71 after browser QA. Arrival counts may include QA; checkouts include test mode, license records do not subtract refunds. These are not unique users, installs or attributable revenue. A final check at 20:12:35.223Z after the full QA download confirmed the same 69 requests, eight finished transfers and all other counters unchanged from 20:11. HEAD/ClearDisk-QA downloads exclude verification traffic. No secret was printed or committed.

Latest retrieved Google evidence remains September 29: September 7–26 Web data, four clicks/563 impressions; sitemap Success with 171 discovered pages, aggregate indexing data still dated September 21. No fresh Google indexing/position change is claimed. Next: compare equal Search Console windows after recrawling; retain the PDF's ten-prompt set for a later comparable owner-supplied report. Existing creator messages remain unsent and require explicit recipient/message approval. Campaign stays September 13–October 12.

Written by the autonomous SEO loop. Newest entry first. Every entry says what was researched, what shipped, and what still needs the owner.

## Campaign day 17 — 29 September 2026 (Xcode guide correction and original measurement)

Published an update to [the existing Xcode Derived Data guide](https://cleardisk.app/clear-xcode-derived-data). Corrected FAQs that treated every generated file as disposable and placed source repositories inside Library/Developer. Added a read-only measurement step, a narrow project-by-project review, release archive/dSYM retention, a DocC export example and a simulator-management link. Revised description, summary and September 29 modification date; retained the URL and reading template. No new article or spelling-variant page.

Original evidence: on September 29 the installed Xcode reported 27.0 (27A266a). `/usr/bin/du -sk` measured 4,720,472 KiB in the default DerivedData folder; `du -sh` displayed 4.5G (about 4.5GiB allocated). No file was removed or Xcode setting changed. The published aggregate is explicitly one machine's snapshot, not a typical result or recoverable-space promise. Private project names and paths were not published. This was a command-line measurement, not a claim of testing the Xcode 27 deletion menu or recovering that space.

Primary sources checked September 29: [Apple's WWDC26 Xcode Tips and Tricks Group Lab](https://developer.apple.com/videos/play/wwdc2026/8013/), [retaining release archives and matching debug symbols](https://developer.apple.com/documentation/xcode/building-your-app-to-include-debugging-information), [exporting DocC documentation archives from Derived Data](https://developer.apple.com/documentation/xcode/distributing-documentation-to-other-developers), and [managing Xcode components and runtimes](https://developer.apple.com/documentation/xcode/downloading-and-installing-additional-xcode-components). The documentation pages' linked Markdown versions supplied the full text when the HTML shell did not. The pre-existing build-settings reference remains; it was not newly revalidated in full today. Used free official sources only.

Humanize: used the campaign's preauthorized generic edit; neither local voice-profile path exists. Replaced blanket assurances and a dense opening with concrete actions and an attributable measurement. Kept the qualifications readers need before deleting development files. Subjective revised-passage assessment: 10/69 before (2 statistical, 4 composition, 4 document), 7/69 after (2, 2, 3). These are editorial judgments, not detector results or a claim that automated detection is impossible.

Fresh Search Console read under the work Gmail account: the Web (text), three-month report had available data September 7–26, with 4 clicks, 563 impressions, 0.7% CTR and average position 24.1. This guide had 25 impressions and 0 clicks. The earlier report ended September 24, so raw changes are not a like-for-like performance comparison or an effect of today's edit. The sitemap report says Success, last read September 29, 171 discovered pages. Page indexing still has a September 21 data date: 65 indexed and 11 not indexed across six reasons. Do not present the sitemap's discovery count as indexed pages or this lagging report as today's index coverage. No new Google indexing request, paid keyword-volume lookup or GA test event. IndexNow accepted the single changed URL with HTTP 200; Google does not use IndexNow. The revised guide is live; Google's crawl/indexing of this revision is unverified.

Validation: all 53 tests, typecheck, lint, Cloudflare production build, 176 compiled local and 176 live HTTP SEO checks passed. Desktop and 390px reading review used the existing layout. Live content and date match; sitemap remains 171 URLs with this guide's lastmod 2026-09-29. /download still names 2.0.0; /updates/appcast.xml returns 200. DMG remains 6,048,127 bytes with SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903 and noindex. Anonymous /analytics and /api/analytics return 401 with private/no-store and noindex. Verification traffic used HEAD or ClearDisk-QA.

Source b031181 is pushed to main and deployed as Worker 613ee76e-87db-40d5-a868-07548dde9ed2 in the existing personal account. Before deploying, renewed the existing Wrangler session with its reduced scopes and confirmed prior production c22e644d-7926-44b4-9e49-43d6eec5ab77. Worker bindings and secrets are unchanged. No design, payment mode, license, app binary, updater or Talivia change.

Private aggregate metrics at 2026-09-29T10:04:34.896Z: 67 website download requests in the last 30 UTC days / 16 in the last 7; 61 arrival events, 6 finished-transfer events, 2 checkout sessions in their available window; 2 all-time live-session license records; GitHub 2 cumulative, separately. Rechecked after deployment at 2026-09-29T10:10:59.834Z: all these totals were unchanged, so verification added no download event. Requests are not unique people or installs. Rolling windows differ, arrivals may include QA, checkouts include test sessions, and license records do not subtract refunds. No revenue, attribution or traffic-loss inference from a changing rolling window. Credentials came from the ignored local owner file and were not printed or committed.

Next: review the container guide's explanation against primary sources, or add one original screenshot/demo when the relevant UI is available. Reuse the prepared disposable-data demo and unsent creator drafts; no outreach was sent. Recheck Google after its indexing report updates. Campaign remains September 13–October 12; no paid services.

## Campaign day 16 — 28 September 2026 (Photoshop guide correction)

Updated and published [the existing Photoshop scratch-disk guide](https://cleardisk.app/photoshop-scratch-disk-full-mac). It now answers how to check scratch disk space directly, gives the Photoshop → Finder → Disk Utility sequence, explains free versus purgeable space, and separates Command + Option at launch from the preference-reset shortcut that also uses Shift. Added two reader questions, one contextual link to the purgeable-space guide, three primary references and a September 28 modification date. Kept the existing URL, design, release copy and cleanup limitations. No new keyword-variant article.

This addresses an observed query from the September 27 Search Console audit: “how to check scratch disk space on mac” had 3 impressions and average position 9.7 in that report. That is historical, sparse query evidence, not fresh volume or a ranking forecast. No new Google report or indexing request was made today; the latest verified sitemap report remains September 26, Success with 171 discovered URLs. The publication is live, but a new Google crawl/index update is not verified. IndexNow accepted the single changed URL with HTTP 200; it does not submit to Google.

Primary sources checked September 28: [Adobe scratch-disk troubleshooting](https://helpx.adobe.com/photoshop/desktop/troubleshoot/performance-stability-issues/troubleshoot-scratch-disk-full-errors-in-photoshop.html), [scratch-disk settings](https://helpx.adobe.com/photoshop/desktop/troubleshoot/troubleshoot-tools-resources/set-up-and-manage-scratch-disks.html), [Adobe performance guidance and startup shortcut](https://helpx.adobe.com/photoshop/kb/optimize-photoshop-cc-performance.html), [Apple Finder disk information](https://support.apple.com/en-mo/guide/mac-help/mchlp1774/mac), [Disk Utility capacity definitions](https://support.apple.com/en-nz/guide/disk-utility/dskutl1005/mac) and [Mac storage guidance](https://support.apple.com/en-us/102624). Adobe's 100GB recommendation stays explicitly scoped to its scratch-disk troubleshooting. No Photoshop installation or first-hand app test was claimed; an original screenshot remains a follow-up.

Humanize: generic edit authorized by the campaign; neither local voice-profile path exists. Subjective editorial assessment of the revised passages: 10/69 before (2 statistical, 4 composition, 4 document; 14.5%, surgical), 7/69 after (2, 2, 3; 10.1%). Changed the abstract opening and packed inspection paragraph into concrete actions; retained necessary safety qualifications. These are editorial judgments, not measured text probabilities or AI-detector results.

Validation: all 53 tests, typecheck, lint and Cloudflare production build passed. All 176 compiled local and 176 live HTML SEO checks passed. Desktop and 390px reading review passed in Chrome. Live guide returns 200 with the new text, Article/FAQPage/HowTo/BreadcrumbList schema and date; sitemap has 171 URLs with this guide's lastmod 2026-09-28. /download still names 2.0.0; the DMG is unchanged at 6,048,127 bytes, SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903, with noindex. Anonymous /analytics and /api/analytics return 401, private/no-store and noindex. Download verification used HEAD or ClearDisk-QA.

Source e0ef823 is pushed to main and deployed as Worker c22e644d-7926-44b4-9e49-43d6eec5ab77 in the existing personal account. Renewed the expired Wrangler session with the existing reduced deployment scopes, limited to the personal account; deployment history confirmed the expected prior version before publication. Preserved existing Worker bindings and secrets. No payment, license, app binary, updater or Talivia change.

Metrics at 2026-09-28T10:08:49.030Z: 65 website download requests in the last 30 UTC days / 32 in the last 7; 47 arrivals, 4 finished-transfer events, 2 checkout sessions in the available window; 2 all-time live-session license records; GitHub 2 cumulative, separately. Counts are not unique people or installs, arrivals may include QA, checkouts include test sessions and license records do not subtract refunds. No attribution or revenue inference. Credentials were read only from the ignored local file and not committed.

Post-deployment metrics rechecked at 2026-09-28T10:11:30.946Z: all aggregate counts above were unchanged, including 65 download requests. Verification did not add a download event.

Next: add original evidence to the existing Photoshop, Xcode or container guide when the relevant app is available; record one prepared demo using disposable data; keep creator messages as unsent drafts until explicitly authorized. Revisit Google data after reports update. Campaign remains September 13–October 12; no paid services or external outreach.

## Campaign day 15 — 27 September 2026 (creator drafts; no publication)

Prepared [five researched creator candidates and unsent messages](outreach/2026-09-27-creator-shortlist.md), with demo angles that reuse the existing scripts. Primary-source checks: SwiftLee's July 27 Xcode-storage article and About page; Fatbobman's Swift Weekly issue 144; MacSparky and Use Your Loaf About/contact pages; Eclectic Light's About and utility directory. MacMost's Mail-log tutorial initially looked relevant, but its contact policy explicitly excludes marketing/product-review pitches, so it is not an outreach target. Full source URLs, relevance limits and unresolved contact permissions are in the draft. No paid research, outreach sending, third-party posting or invented creator endorsement.

Used the preauthorized generic Humanize edit; .8gnc/voice-profile.md and voice-profile.md are absent. Removed broad pitch language and unsupported promises. Subjective message-pattern score 13/69 before (3/12, 6/42, 4/15), estimated 8/69 after (2/12, 3/42, 3/15), not an AI-detector result. No new public technical guidance or article URLs. Checked the live download page for current 2.0.0/macOS 15+ claims and used the existing $10 cleanup license accurately.

At 2026-09-27T10:05:58.563Z, aggregate API data shows 64 website download requests/30 UTC days, 34/7 days, 38 arrivals, 3 finished-transfer events, 2 checkout sessions, and 2 all-time live-session license records; GitHub 2 cumulative separately. QA arrivals may count; checkout includes test mode, refunds are not subtracted, and these are not installs or attributable sales. Secrets were not printed or committed. No fresh GA/Search Console read or indexing request in this run: today's earlier recorded data and accepted indexing requests remain the latest evidence, not proof of subsequent indexing.

Validation: checked the Markdown diff/local links and corrected a draft iCloud URL that initially returned 404. All final guide destinations and /download return 200; sitemap has 171 URLs; DMG HEAD is 200/noindex; anonymous /analytics and /api/analytics return 401 with noindex/private-no-store. Used HEAD or ClearDisk-QA; no full DMG transfer or new download count generated. Documentation-only work does not require rebuilding or redeploying. Changed public URLs: none. Last verified deployment remains 56fa6fa1-ebc5-44ea-bd6c-a528b0313bde. Support forwarding is already resolved in the entry below; no inbox-choice question remains. Next: one real sample-data recording, then recipient/message approval if outreach is wanted; improve original evidence in existing priority guides rather than add duplicate articles.

## Support inbox forwarding — 27 September 2026

Owner selected anilgautamwork@gmail.com for hello@cleardisk.app. Enabled native Cloudflare Email Routing in the existing personal account and saved one exact-address rule. Verified in the dashboard: rule Active, Gmail destination Verified, domain routing Enabled, DNS Locked. Catch-all remains disabled. Public DNS now resolves route1/route2/route3.mx.cloudflare.net (priorities 42/25/4), the Cloudflare SPF TXT and cf2024-1._domainkey DKIM TXT. These records replace the previously observed absence of incoming mail records; the destination-choice blocker below is resolved.

No test email was sent, so end-to-end inbox delivery is not claimed. This configures incoming forwarding only; Gmail send-as and outgoing license-email setup were not changed. No website deployment, payment/license change or new dependency was needed. Source: Cloudflare Email Routing configuration UI and current routing-address documentation, https://developers.cloudflare.com/email-service/configuration/email-routing-addresses/. Validation: active rule/destination/domain status plus public DNS queries.

## SEO fixes and Google connection — 27 September 2026

Owner authorized implementation after the live-site audit. Prepared consent-based GA4 page visits and download-click tracking, corrected release/privacy copy for the existing 2.0.0 app and $10 license, removed an unsupported recovery-size claim, added 25 relevant incoming related-guide links, and excluded the DMG/checksum from search indexing. The 152-guide registry now has no guide without a contextual incoming related-guide link. Existing 1.x license entitlement is retained; 2.0.0 compatibility is confirmed by the shipped license implementation, with no promise about future major releases. No payment, license code, app binary, new dependency or article URL changed.

Google setup is complete under anilgautamwork@gmail.com: existing BG Clear account 370327929, new ClearDisk property 556076456, stream 15851243548, measurement ID G-J00KPHWBCN. India reporting timezone, USD currency, enhanced measurement disabled, Google Signals off, two-month user/event retention and reset-on-activity off. Connected the existing verified https://cleardisk.app/ Search Console property; preserved its verification tag and successful 171-URL sitemap. Website events are manual, public-route-only and stripped of query/fragment data. No email, key, checkout session or Mac file content is sent. Existing Google Ads purchase measurement retains separate opt-in. Previous Ads-only consent is not reused as Analytics consent. Localhost and preview hosts do not load Google tags.

Cloudflare changes already verified live: Always Use HTTPS; proxied www CNAME to cleardisk.app; active 301 redirect aab99c5b9ccc40a794806afa4f370545 from *://www.cleardisk.app/* to https://cleardisk.app/${2}, preserving queries. Existing personal-account Worker and secrets preserved. Refreshed Wrangler's existing access with reduced deployment scopes. The zone has no incoming mail records, so hello@cleardisk.app may bounce; an inbox destination question is pending before configuring forwarding.

Validation before publication: all 53 unit tests, typecheck, lint, production build and 176 local HTTP SEO checks pass; desktop and 390px consent controls reviewed, Decline and Analytics only close the banner and Privacy settings reopens it. No narrow overflow or Google script on local preview. Used the existing consent UI and privacy policy; no new analytics framework. Sources: Google manual page views, SPA measurement, Consent Mode and gtag reference, plus actual Analytics/Search Console/Cloudflare UI. Publication and live receipt verification are recorded below once complete; Google indexing remains separate from deployment.


**Publication verified.** Source c3574ac is pushed to main and deployed to the existing personal-account Worker as 56fa6fa1-ebc5-44ea-bd6c-a528b0313bde. All 176 live HTML SEO checks pass. HTTPS and www variants redirect 301 to the canonical HTTPS path with queries retained. Live release/privacy copy is current, sitemap still has 171 URLs, DMG and SHA256SUMS have noindex headers, and /analytics plus /api/analytics still return anonymous 401 with private/no-store and noindex headers. Public DMG is unchanged at 6,048,127 bytes, SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. Verification used HEAD or ClearDisk-QA and did not increase download counters. A stale local Wrangler asset manifest after a rebuild initially returned 404 for the DMG; restarting the preview fixed it, and the clean 176-route run passed before deployment.

**Google receipt verified.** The live site loads no Google script before consent. Selecting Analytics only loaded G-J00KPHWBCN; GA Realtime then displayed one test user and two page_view events, with / and /guides each showing one view after client-side navigation. These are QA events, not new customer traffic. Enhanced measurement remains off; no test download click or purchase was fabricated. Existing private counts at 2026-09-26T23:46:48.597Z: 63 website download requests/30 days, 34/7 days, 33 arrivals (including QA), 3 finished transfers, 2 checkout sessions, 2 all-time live-session license records; GitHub 2 separately. Different windows and test-inclusive counters do not establish unique users, installs or revenue.

**Discovery follow-up.** Search Console URL Inspection accepted indexing requests for https://cleardisk.app/mac-storage-full, https://cleardisk.app/not-enough-space-to-update-macos, https://cleardisk.app/icloud-drive-stuck-uploading-mac and https://cleardisk.app/faq/backups-cloud-photos. Each completed with “Indexing requested” and priority crawl queue confirmation. The first three were reported unknown to Google; the FAQ was crawled but not indexed (last crawl September 8, fetch/indexing allowed, self-canonical). Acceptance is not indexing or a ranking guarantee. The last aggregate indexing report still shows 65 indexed / 11 excluded. IndexNow separately accepted all 171 sitemap URLs (HTTP 200); it does not submit to Google.

Remaining: support-email forwarding needs the owner's destination choice; current MX absence is not fixed or claimed fixed. No field CWV data or fresh paid keyword-volume evidence exists. Improve original visual evidence in priority guides and reassess actual Google indexing/query trends in the existing campaign; do not invent reviews, volumes or results. No external outreach, payment change, new recurring task or Talivia activation.

## Live Site SEO audit — 27 September 2026 (owner request; no publication)

Full report: [2026-09-27-live-site-audit.md](2026-09-27-live-site-audit.md). Audited current main c21882b and live FAQ additions without altering them. Crawled all 171 sitemap URLs (all 200/indexable), passed the existing production SEO check for 176 HTML routes, reviewed source/rendered schema and desktop/390px functionality. Verified direct HTTP still returns 200 without HTTPS redirect; www fails DNS including NXDOMAIN from 1.1.1.1. Found release/license copy still naming 1.0/1.1 and 1.x updates despite the 2.0.0 download, inaccurate activation-only network wording despite the updater, an unsupported homepage 5–20GB claim, and 25 guides with no contextual inbound link outside hubs. No code, content URL, account or deployment change was made; report/logs are local only. Current deployment ID could not be read via Wrangler; live content and HTTP results were checked independently.

Search Console is now accessible through the Work profile. Three-month Web (text) report has available dates September 7–24: 4 clicks, 279 impressions, 1.4% CTR, average position 34.4. Page indexing last updated September 21: 65 indexed / 11 excluded. Most exclusions are intentional or non-article assets; four content URLs need follow-up. Sitemap last read September 26: Success, 171 discovered URLs. No manual actions or security issues; CWV has no data. Actual query/page/country/device metrics, exact exclusions and priorities are recorded in the report. These dates supersede older access limitations; the indexing report predates the library expansion. No indexing requests or sitemap submissions performed.

Current official Google schema/helpful-content/AdSense guidance, Apple storage guidance and Adobe scratch-disk instructions were checked. Google discontinued FAQ rich results May 7, 2026; valid FAQPage is not itself an error. Read one actual Google scratch-disk SERP with US/English parameters (signed-in browser in India, not a neutral rank check) and its PAA questions. Prioritize improvements to Photoshop, Xcode and container guides using existing URLs, not additional keyword variants. No paid research, external outreach, Humanize imitation or AI-detector claim.

Aggregate API snapshot 2026-09-26T23:05:41Z: 63 website download requests in the last 30 UTC days / 34 last 7; GitHub 2 separately. Available new instrumentation: 31 arrival events, 3 transfer-finished events, 2 checkout sessions; 2 all-time live-session license records. QA arrivals may count; requests are not installs, checkout includes test mode, refunds are not subtracted and windows differ. DMG verified as 6,048,127 bytes, SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903 using excluded ClearDisk-QA traffic; both anonymous analytics endpoints return 401. Existing payment mode, licenses, updater, design and Talivia pause preserved. Recommended next batch: redirects, truthful release/privacy copy after upgrade-policy confirmation, then contextual links and source-backed visual examples. No automatic schedule added.

## Search-volume coverage — 26 September 2026 (owner request)

Mapped all 19 screenshot keywords to six existing articles and published improvements to four: https://cleardisk.app/blog/how-should-i-clean-my-mac, https://cleardisk.app/best-free-mac-cleaner, https://cleardisk.app/uninstall-apps-on-mac and https://cleardisk.app/free-up-space-on-mac. The existing AppCleaner and System Data cleanup articles were retained. Added relevant incoming links to AppCleaner. No duplicate keyword pages; 152 guides, two blog posts and 170 sitemap URLs remain. Full row-level evidence, intent caveats and priority decisions are in [the coverage report](2026-09-26-keyword-coverage.md) and [CSV](2026-09-26-keyword-coverage.csv). Volumes are owner-provided English/US third-party estimates, not independently verified or summed across variants. Pending/unstable displays are not fresh ranking measurements.

Read primary Apple uninstall/storage guidance, FreeMacSoft, MacPaw tools/editions, GrandPerspective, Omni and Titanium pages before revising technical copy; exact links and checked claims are in the report. Corrected CleanMyMac's one-time/subscription framing, clarified the free-scan/cleanup distinction, maker uninstallers, separate subscription cancellation, shared/personal Library data, current/older Storage paths, iCloud versus disk space, separate-device copies and Trash permanence. ClearDisk's current macOS 15+ requirement, 2.0.0 release and $10 license are preserved. Humanize used the authorized generic ClearDisk edit with no personal voice profile; report records subjective before/after editorial scores, not a detector result.

Source 3847f76 pushed to main and deployed as personal-account Worker c8efe62f-b259-4bb5-b0a8-e7d352c4d596. Validation passed: 51 unit tests, typecheck, lint, production build, 175 local and 175 live HTML SEO checks, a 19-unique-keyword/six-existing-article registry check, and desktop/390px browser reading review. The new cleaner-to-AppCleaner link was followed successfully in the live browser. Live copy and all four sitemap modification dates verified; all six mapped URLs are in the sitemap. IndexNow accepted six URLs (the four revised articles plus /guides and /blog), HTTP 200. No fresh Search Console data, Google indexing or keyword-tool recrawl claim.

At 13:58 UTC, /download still reports 2.0.0, /updates/appcast.xml returns 200, and DMG size/hash remain 6,048,127 bytes / 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. The DMG request used ClearDisk-QA and is excluded from download metrics. Both anonymous analytics routes return 401. No new metrics snapshot; the 13:34 UTC observation below remains the latest recorded aggregate. Payments, license behavior, app artifacts, current design and Talivia pause unchanged; unrelated .codex/ preserved. Next: recrawl mapped URLs in the owner's audit/keyword tool and review actual query performance when Search Console data is available.

## Three short search titles — 26 September 2026 (owner request)

Published title improvements for /about, /download and /what-is-system-data-on-mac. The screenshot omitted the issue heading; its current values and the live titles strongly suggest short-title warnings, not another word-count report. Live title lengths were 15, 26 and 27 characters; revised descriptive titles are 53, 52 and 45. About and Download descriptions now explain the page more clearly, and Download metadata correctly names the shipped 2.0.0 release instead of 1.1. Shared metadata already keeps HTML, Open Graph and Twitter titles consistent; no helper change. The System Data registry title also updates its H1, breadcrumbs and related cards. Article body and editorial date are unchanged.

Primary SEO guidance checked: https://developers.google.com/search/docs/appearance/title-link recommends descriptive, concise titles and does not set a character-count ranking requirement. The changes clarify each page rather than guarantee an audit result or ranking. Source e820ec5; personal-account Worker 57724943-4119-4e76-8eac-e0de8c757e94. 51 unit tests, typecheck, lint, build, 175 local and 175 live HTTP checks and desktop/390px heading review passed. Targeted live checks verified all three titles and the current release description. IndexNow accepted the three changed URLs (HTTP 200); no Google indexing or third-party audit recrawl claim. Sitemap URLs and publication dates unchanged.

QA download checksum is unchanged (375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903); verification used ClearDisk-QA and does not count as a download. Anonymous /analytics and /api/analytics remain 401. No metrics snapshot taken; the last observed aggregate remains the 13:34 UTC record below. Payments, licensing, app artifacts and Talivia pause preserved. Next action: recrawl the three pages in the audit tool; if its issue heading names something else, inspect that specific rule.

## Guides hub audit correction — 26 September 2026 (owner request)

Updated https://cleardisk.app/guides in response to the low-word-count audit screenshot. The original page already returned around 6,100 main-content words in initial HTML for both ordinary and Googlebot user agents; only 125 words were outside links because every guide title and description sat inside a card-wide anchor. The audit screenshot does not reveal its crawl date or extraction method, so excluding linked text is a plausible explanation, not a confirmed diagnosis of that tool.

Changed the 152 cards to semantic articles with normal description paragraphs and one descriptively labelled, stretched link. All guide destinations, the card click area, keyboard focus, topic navigation and current visual identity remain. Added a short “Not sure where to start?” section linking storage checks, large files, post-deletion storage and iCloud-versus-Mac capacity. No new guide or repetitive keyword page. Using the same HTMLParser word extraction on both versions, main text is 6,147 → 6,314 words and text outside anchors is 125 → 5,720; counts depend on tokenization. This is a content and semantic improvement, not a Google word-count requirement. Checked Google's primary guidance today: https://developers.google.com/search/docs/fundamentals/creating-helpful-content explicitly states there is no preferred word count.

Source c0bca60 pushed to main and deployed as personal-account Worker d2c27d76-44af-478f-926c-ca074803f4cb. Validation: 51 tests, typecheck, lint, production build and all 175 local/live HTML SEO checks passed. Added a regression check for every guide card's initial-HTML description outside anchors, all guide links and the orientation section. Desktop and 390px browser review passed, with no horizontal overflow; keyboard focus and clicking a card heading were verified. Impeccable's changed-page detector reported no findings. Live orientation and all 152 article cards confirmed.

Sitemap remains 170 URLs including /guides; canonical and index policy verified. IndexNow accepted the one changed URL with HTTP 200, which is not evidence of indexing. The third-party audit has not been recrawled; no claim its warning is cleared or that Google has reindexed. Next action: recrawl /guides in the owner's audit tool. Search Console data was not retrieved in this correction.

App/download safeguards: /download still reports 2.0.0; DMG remains 6,048,127 bytes with SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. Download verification used ClearDisk-QA and does not count as a download. /updates/appcast.xml responds 200 and both anonymous analytics routes return 401. No new metrics snapshot; the preceding 13:34 UTC entry remains the last observed aggregate. Talivia, payment mode, licensing and app artifacts unchanged. Preserved unrelated .codex/ files.

## AppCleaner article — 26 September 2026 (owner request)

Published https://cleardisk.app/blog/appcleaner-os-x, “AppCleaner for OS X: uninstalling apps safely.” The registry had only a short AppCleaner mention in the free-cleaners guide, not a dedicated article. This post addresses a distinct problem: selecting a compatible AppCleaner build, reviewing an app removal and finding the remaining storage problem afterward. Existing guides were left unchanged. The Blog index now has two posts; sitemap has 170 URLs.

Sources checked today: FreeMacSoft's https://freemacsoft.net/appcleaner/ for the drag-in workflow and four download compatibility labels; Apple's https://support.apple.com/en-us/109033 for About This Mac, https://support.apple.com/en-us/102610 for uninstallers, documents and subscriptions, https://support.apple.com/en-us/102624 for storage controls on older/current macOS and Trash, and https://support.apple.com/guide/mac-help/mchl3d437fbc/mac for System Data. ClearDisk's documented 2.0.0 behavior and macOS 15+ requirement are explicit. No hands-on AppCleaner test, competitor performance comparison, guarantee of complete removal or older-OS ClearDisk support is claimed. The screenshot's 14.8K searches / difficulty 19 are unverified third-party estimates and were not published as facts.

Humanize used the authorized generic ClearDisk edit; neither local voice-profile path contained a profile. Draft first, then revise. Editorial pattern report: statistical 3/12, composition 5/42, document 5/15; total 13/69 (19%), moderate edit. Estimated revised total 8/69 (12%): statistical 2, composition 3, document 3. Shortened abstract tool descriptions, replaced generic storage explanation with the video-editor example and made review steps direct. These are subjective editing judgments, not detector measurements or a promise of classifier evasion.

Source commit 109d088 deployed to personal-account Worker 7fcc8d03-f447-4ea8-84dd-e7300534a3db. Validation: 51 tests, typecheck, lint, production build and 175 compiled local and 175 live HTML SEO checks passed. Browser checks covered article typography at desktop and 390px and the mobile Blog listing. Live article paragraphs, Blog discovery, canonical/schema checks and the sitemap entry were verified. Public /download still reports 2.0.0, and the DMG checksum remains 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. QA DMG request used ClearDisk-QA. Anonymous /analytics and /api/analytics return 401.

Aggregate snapshot at 2026-09-26T13:34:24.052Z: website download requests 61 in the last 30 UTC days and 32 in the last 7; GitHub 2 separately. Available funnel totals: 22 arrival events, 2 transfer-finished events, 2 checkout sessions and 2 all-time live-session license records. These are not unique visitors, installs, net sales or attributable campaign conversions; checkout includes test mode and refunds are not subtracted. Browser QA may appear in arrival counts. IndexNow accepted all 170 sitemap URLs with HTTP 200; this does not establish indexing. No fresh Search Console dataset or Google indexing/ranking claim.

## Owner-requested blog publication — 26 September 2026 (campaign day 14)

Published https://cleardisk.app/blog and https://cleardisk.app/blog/how-should-i-clean-my-mac at the owner's request. Article: “How should I clean my Mac? Decide before you delete.” Uses a generic Humanize edit, practical examples and an explicit maker disclosure; no AI-detector guarantee. Addresses the ambiguity between MacPaw's CleanMyMac and general cleanup without awkward keyword repetition. The screenshot's 22.2K volume and difficulty 22 remain unverified third-party estimates, not measured facts. Source checks and editorial decisions: [blog launch record](2026-09-26-blog-launch.md).

Primary sources read: Apple free-storage guidance (https://support.apple.com/en-us/102624), Storage settings (https://support.apple.com/guide/mac-help/mchl3d437fbc/mac), deleting files (https://support.apple.com/guide/mac-help/mchlp1093/mac), npm ci (https://docs.npmjs.com/cli/v11/commands/npm-ci/) and MacPaw's product documentation (https://macpaw.com/support/cleanmymac/knowledgebase/my-tools). Product descriptions follow the current ClearDisk 2.0.0 release and $10 license. No new personal voice profile, paid research or competitor testing claimed.

Blog is linked from Learn and the grouped footer; each article uses the existing reading layout, canonical metadata, BlogPosting/BreadcrumbList schema, sources, related guides and a sitemap date. Existing guide download footers now say 2.0.0. Preserved the country analytics work already committed by another session. Cloudflare OAuth was renewed in the existing personal account; deployed source c703cc4 as Worker 21ff4b60-6263-4ae5-982e-9c205a453c3c. The previously blocked /operation-not-permitted-terminal-mac correction is now verified live with its September 25 date and source-matching title/description.

Validation: 51 unit tests, typecheck, lint, production build, 174 compiled local and 174 live HTML SEO checks passed. Desktop and 390px browser review passed for the index, article and mobile Blog navigation; source links follow the example list. Impeccable's changed-surface detector returned no findings. Sitemap now has 169 URLs (152 guides plus the new blog index/article and existing pages). IndexNow accepted all169URLs with HTTP200; acceptance does not establish crawling, ranking or Google indexing. No fresh Search Console dataset; September15 remains the latest recorded indexing evidence.

Live /download still reports2.0.0. DMG remains6,048,127bytes, SHA256375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903; /updates/appcast.xml responds200. Both anonymous analytics endpoints return401. DMG verification used ClearDisk-QA and was excluded from metrics. At2026-09-26T13:28:34.096Z: website download requests61 overlast30UTCdays and32 overlast7; GitHub2 separately. Available funnel:21arrival events,2transfer-finished events,2checkout sessions,2all-time live-session license records. These are not unique people, installations, net sales or proven campaign conversions; checkout includes test mode and refunds are not subtracted. No revenue inferred.

Next: review Search Console discovery when access is available, continue existing-guide corrections and day15 creator-draft research; no external posting or messages without separate authorization. The blog request does not alter the September13–October12 campaign schedule. Talivia, Stripe mode, license implementation, update feed and app artifact preserved.

## Campaign day 14 — 26 September 2026 (demo refresh; existing publication blocker)

Reviewed current source/main 4d0a77b and preserved the separately committed country-analytics changes. Refreshed the existing demo script with the actual 2.0.0 lowercase delete confirmation and a Cancel ending using disposable sample data. Verified labels against DeleteForever.swift and ClearDiskApp.swift. Generic direct prose; no personal voice imitation, new troubleshooting advice or new Apple-source claim. Recording and external distribution remain pending. No new article or duplicate community draft.

The day 13 Terminal correction is still NOT live: /operation-not-permitted-terminal-mac returns 200 without the new warning against repeating deletion, and sitemap lastmod remains 2026-09-24. The tested source correction remains committed in 8c0db91. Wrangler deployment inspection again fails for missing non-interactive Cloudflare credentials; no deployment performed and no new deployment ID claimed. This is the same blocker already reported, not a new failure. No runtime changes in this run; builds need not be repeated for local Markdown edits. Markdown diff checked.

Live /download returns 200 and reports 2.0.0; sitemap returns 200 with 167 URLs. Public DMG hash verified as 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. Both anonymous analytics routes return 401. QA download used ClearDisk-QA and is excluded. No release or indexing change claimed; no fresh Search Console dataset retrieved. September 15 remains the last recorded indexing evidence.

Metrics at 2026-09-26T11:39:06.401Z: website download requests 61 over last 30 UTC days, 32 over last 7; GitHub 2 cumulative separately. Since new instrumentation began: 19 arrival events, 2 transfer-finished events and 2 checkout sessions in the available window; still 2 live-session license records all time. These are not unique users, installations, net sales or attributable campaign conversions; checkout includes test mode and license-record totals do not subtract refunds. No revenue inferred.

Next: renew personal-account Cloudflare credentials, review the current source including other-session changes, deploy and verify the pending Terminal correction. Day 15 starts the five-creator research/draft stage; sending stays unauthorized. Talivia, payment mode, license implementation, app artifacts and design preserved. No external messages or paid tools.

## Campaign day 13 — 25 September 2026 (Terminal guide corrected; deployment blocked)

Reviewed the new question-guide collection and corrected /operation-not-permitted-terminal-mac. Its introduction promised Full Disk Access would make a failed command work. The revised title, description and summary distinguish app privacy access from other restrictions; the steps check Files & Folders before broader access, test with read-only commands, and do not automatically retry deletion. Removed an unconditional claim that a fresh Terminal window always fails to list Trash. Updated the article date to 2026-09-25. No new URL, layout change or duplicate article.

Sources checked today: Apple Privacy & Security settings (https://support.apple.com/en-euro/guide/mac-help/mchl211c911f/mac), Apple Platform Security file-access controls (https://support.apple.com/en-gb/guide/security/secddd1d86a6/web), and the Apple Developer file-access search excerpt (https://developer.apple.com/documentation/security/accessing-files-from-the-macos-app-sandbox; full rendered page unavailable without JavaScript). Generic Humanize edit in established tone; no personal profile imitation. Subjective edited-passage pattern score 8/69 before (2 statistical, 4 composition, 2 document), estimated 5/69 after (1, 2, 2); surgical correction, not an AI-classifier result.

Validation: 50 tests, typecheck, lint, production build and all172 compiled local HTML SEO checks passed. Source diff checked. Publication is blocked again: Wrangler deployments list requires CLOUDFLARE_API_TOKEN or renewed login in this non-interactive session. No deployment performed; changed article and 2026-09-25 lastmod are NOT claimed live. Last verified production remains yesterday’s 11b9bf05-d0c8-41e1-89ce-aa11c35fa6c7; no fresh deployment-API confirmation today. GitHub latest release remains v1.1.0; the website 2.0.0 artifact is unchanged locally. No app, license or payment changes. Talivia stays paused.

Metrics at 2026-09-25T10:03:18.481Z: website download requests 59 over last30 UTC days, 30 over last7; GitHub2 cumulative separately. New funnel records 3 arrivals, 0 transfer-finished events and 1 checkout session in its available window. Checkout includes test mode; these numbers do not establish unique users, completed downloads or sales. There are still2 live-session license records all time, with refunds not subtracted. Anonymous analytics endpoints both return401. No download GET required on this unchanged publication. No new Search Console/query/indexing dataset; September15 remains latest recorded evidence. No paid research or external posts/messages.

Next: restore personal-account Cloudflare credentials and deploy this tested correction; then verify the changed live route, sitemap lastmod, unchanged DMG and analytics protection. Continue auditing existing guides before adding more. Community drafts remain unposted; creator-shortlist stage begins day15.

## Campaign day 12 — 24 September 2026 (publication verified; blocker resolved)

Cloudflare authentication is available again. Wrangler deployment history confirms the personal account deployed Worker 11b9bf05-d0c8-41e1-89ce-aa11c35fa6c7 at 16:22 UTC today. Other work since day11 added 100 guides and the owner analytics funnel (current source/main 70f3537). Preserved those changes; no redundant deployment or additional article today.

Verified yesterday’s corrections are now published at https://cleardisk.app/clear-system-data-on-mac, https://cleardisk.app/disk-space-analyzer-mac and https://cleardisk.app/delete-files-on-mac. Each returns 200 with the 2.0.0 removal choices, and sitemap lastmod is 2026-09-23. All 172 live HTML SEO checks pass, including head metadata, schema, internal links, robots, real 404 and sitemap. Registry has 152 guides; sitemap has 167 URLs. This validates delivery/technical structure, not the editorial accuracy of all newly added guides or Google indexing.

Live /download reports 2.0.0; DMG SHA256 remains 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. Both private analytics endpoints reject anonymous access with 401. Artifact verification used ClearDisk-QA, excluded from download metrics. GitHub latest-release API still reports v1.1.0 separately.

Private aggregate snapshot at 2026-09-24T16:31:20.707Z: website download requests 59 over last30 UTC days and 32 over last7; GitHub 2 cumulative separately. New visits, transfer-finished and checkout counters each report zero since instrumentation began today; those zeros are not historical absence of activity. The dashboard reports 2 live-session license records all time; this is not verified net sales or revenue, refunds are not subtracted, and no campaign attribution is inferred. Download requests are not unique people or installs.

Sources checked this run: live pages/sitemap/artifact, Cloudflare deployment history, GitHub release API, current analytics code and docs/ANALYTICS.md. No new technical advice or content rewrite, so no fresh Apple research/Humanize pass was necessary. No fresh Search Console query/indexing access; September15 remains the latest recorded evidence. No new keyword volume, ranking or indexing claim. No external posts/messages; Talivia remains paused and payment/license implementation preserved.

Next: audit newly added guides for overlapping intent and source-supported advice before adding more. Existing community drafts still require destination-rule verification and owner authorization before posting. Record demos using disposable data when a dedicated demo environment is available. Do not repeat the now-resolved authentication blocker.

## Campaign day 11 — 23 September 2026 (guide corrections ready; deployment blocked)

Updated existing /clear-system-data-on-mac, /disk-space-analyzer-mac and /delete-files-on-mac guides for the released 2.0.0 removal dialog: Move to Trash remains reversible while items remain there; permanent removal skips Trash and requires lowercase delete plus the red button. Removed a stale 1.0 availability reference and an unmeasured five-minute scan comparison. Corrected the locked-file paragraph to allow Finder confirmation, and qualified the deletion summary rather than promising immediate space recovery. Three guide dates changed to 2026-09-23; registry remains 52 guides and sitemap 67 URLs. No new filler article.

Primary source checked: https://support.apple.com/en-euro/guide/mac-help/mchlp1093/mac (Finder locked-file confirmation, Trash, permanent removal). Product behavior checked against Sources/Core/RemovalBatch.swift and Sources/ClearDiskApp/DeleteForever.swift. Generic Humanize edit authorized by campaign; no approved personal voice profile used. Subjective pattern assessment for edited copy: 9/69 before (2 statistical, 4 composition, 3 document), estimated 6/69 after (1, 2, 3); surgical edit, not a classifier result.

Validation: 49 tests, typecheck, lint, production build and 72 local compiled-Worker HTML SEO checks passed. Live /download reports 2.0.0 and returns 200; /sitemap.xml returns 200; public DMG SHA256 remains 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. Anonymous /analytics and /api/analytics return 401. Verification used ClearDisk-QA to exclude downloads. GitHub latest release API still reports v1.1.0; this is distinct from the current website download.

Metrics at 2026-09-23T10:05:10.668Z: website 51 requests over last30 UTC days, 24 over last7; GitHub 2 cumulative separately. Requests are not unique people, completed downloads, installs or sales. No new Search Console session/query/indexing data obtained; September15 remains the latest recorded evidence. No search-volume or attribution claims.

Publication blocked: Wrangler deployments list failed because no valid Cloudflare authentication is available in this non-interactive session (requires CLOUDFLARE_API_TOKEN or renewed Wrangler login). No deployment was attempted with different credentials or to another account. These three edits are committed for review but NOT published; existing production remains the prior release deployment 7714de32-4b91-471d-b065-cf6a5fdef577 as last recorded, not freshly confirmed through the deployment API. Payment mode, licenses, app artifacts and Talivia pause preserved. No external messages sent.

Next: restore personal-account Cloudflare authentication, deploy the tested changes, then verify these three live routes, sitemap lastmod, unchanged DMG and analytics protection. Do not repeat the edits or claim them indexed. Existing community and demo drafts remain pending review/recording.

## Campaign day 10 — 22 September 2026 (release and measurement reconciliation)

Reconciled the handoff with today's separately completed 1.1.1 production release; retained older release entries as history. Verified /download and /sitemap.xml return 200, the download page reports 1.1.1, and the sitemap contains 67 URLs. Public DMG matches the recorded 4,080,490-byte notarized artifact and SHA256 c6bcc9ed671ae922618947f4dfa6283904afa5c1a0ac2a1f9e27b946b900a862. Verification used ClearDisk-QA to exclude the download from metrics. Anonymous /analytics and /api/analytics return 401. GitHub API still reports v1.1.0 as latest; do not equate it with the newer website artifact.

Metrics at 2026-09-22T10:03:32.429Z: website 43 requests over last30 UTC days, 17 over last7; GitHub 2 cumulative separately. The 30-day website count is 12 higher than yesterday's 31. These are requests, not unique people, completed downloads, installs or sales; no traffic-source or campaign-causation claim. No fresh Search Console query/indexing dataset retrieved; September15 remains the latest recorded evidence.

Documentation-only campaign changes: no new published article or repeat deployment after today's release. Existing 52-guide library and design preserved. No new technical advice requiring Apple-source research or prose edit requiring a Humanize pass. Source checks were the actual live download, sitemap, analytics protection and GitHub release API. Markdown diff checked. Payment/license behavior and Talivia pause unchanged.

Next: prioritize a concrete existing-guide correction using current primary sources. Existing community drafts and demos remain local and require review before any external posting; no messages sent. Track the separate GitHub release lag when next handling release distribution.

## Campaign day 9 — 21 September 2026 (distribution research)

Updated the existing community drafts with primary moderator-policy evidence. r/MacOS's opened self-promotion announcement limits promotion to App Store apps; the recorded direct-DMG distribution is not sufficient. r/macapps's opened Phase3 announcement is explicitly time-limited experimental guidance, so current eligibility is not claimed. Direct rules pages remain inaccessible and r/mac rules unverified. Links and exact limits are recorded in community/2026-09-20-answer-drafts.md. No suitable fresh iCloud question established; no duplicate drafts or public posts.

Metrics at 2026-09-21T10:02:29.556Z: website 31 requests over last30 UTC days, 8 over last7; GitHub 2 cumulative separately. These are request counts, not installs or sales; no source attribution inferred. No Search Console dataset retrieved or current release/indexing claim made. Public URLs and deployment unchanged; no new technical instructions requiring an Apple-source refresh. Documentation-only diff checked; no app or website build/deploy necessary.

Next: assess a currently permitted destination before proposing external distribution, or return to a concrete existing-guide correction. Do not spend repeated runs retrying the same inaccessible rules page. Sending and posting remain unauthorized.

## Campaign day 8 — 20 September 2026 (community drafts)

Prepared docs/seo/community/2026-09-20-answer-drafts.md with two distinct native-step answers: growing System Data and missing iCloud Remove Download. Researched a recent r/mac discussion and an older shared-folder case; clearly labelled the latter as research, not a fresh posting target. Apple storage and iCloud file-control sources were checked today and linked in the drafts. Avoided inferring a cause from commenters' anecdotes or assigning another commenter's measurements to the original poster.

Community-rule verification is incomplete: r/MacOS rules redirected without readable rules, and r/mac rules remain to be checked. Drafts are not approved for posting; no messages, promotion or external replies sent. No public page change, new article, deployment or new release/indexing claim. Search Console data was not retrieved; September15 remains the latest recorded evidence. No paid tools or keyword-volume claims.

Metrics at 2026-09-20T10:01:49.232Z: website 29 requests over last30 UTC days, 6 over last7; GitHub 2 cumulative separately. Thirty-day and GitHub totals unchanged; rolling seven-day total changed as the window advanced, not evidence of lost downloads. No runtime changes, so builds and production redeployment were unnecessary. Markdown diff checked. Published URLs unchanged.

Next: verify rules and find a fresh unresolved iCloud question before tailoring drafts for owner approval. Existing demo recordings remain pending; no personal files recorded or removed.

## Campaign day 7 — 19 September 2026 (verification only)

Confirmed yesterday's offline iCloud guide still serves the revised rehearsal instructions. Guide, /download and /sitemap.xml returned HTTP 200. Both private analytics routes returned 401 with the QA user agent; an initial default Python user-agent request was denied with 403 before the consistent-agent recheck. No access exposure found.

Metrics at 2026-09-19T17:23:25.237Z remain 29 website requests in last30 UTC days, 9 in last7, and 2 GitHub cumulative separately. No meaningful change from day6; these are not installs or sales. No DMG GET was needed for this unchanged deployment.

Reviewed the existing demo scripts; they remain unrecorded. No dedicated demo account was established or personal-file recording attempted in this run. No new troubleshooting guidance, content edit, release claim, Search Console dataset or indexing claim. No duplicate article or deployment needed after yesterday's verified publication. Latest recorded deployment remains 32ca9cda-1325-4565-bf29-cf3da39983e3; September15 is the latest recorded Search Console evidence.

Next: enter the days8–14 community-answer stage, researching relevant questions and rules before drafting two distinct, helpful responses. Keep all external posts pending owner authorization. Demo recording remains pending separately.

## Campaign day 6 — 18 September 2026

Published https://cleardisk.app/keep-icloud-files-downloaded-mac with concrete Finder download/retention steps, a presentation rehearsal before travelling, and instructions to clear Keep Downloaded afterward without promising immediate space recovery. Replaced abstract recommendations with direct prose; retained sync/backup distinctions and ClearDisk's lack of persistent pinning. No new URL or filler article. The September 17 draft intent had not changed the repository or reached deployment; no day 5 completion is inferred.

Primary source rechecked: https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac . GitHub latest release remains v1.1.0. Generic Humanize edit in the established tone, no personal voice imitation. Editorial pattern assessment: 14/69 before (3 statistical, 5 composition, 6 document), estimated 9/69 after (2, 2, 5); moderate edit focused on abstraction and paragraph rhythm. These are subjective editing scores, not classifier results.

Metrics at 2026-09-18T10:02:51.582Z: website 29 requests over last30 UTC days, 9 over last7; GitHub 2 cumulative separately. Requests are not installs, unique people or sales. No fresh Search Console query/indexing dataset retrieved; September 15 remains the latest recorded evidence. No new keyword-volume or ranking claims.

Validation: 48 tests, typecheck, lint, production build and 72 live HTML SEO checks passed. Verified exact changed text, sitemap lastmod 2026-09-18, unchanged public DMG checksum and anonymous 401 on both analytics routes. Verification download used ClearDisk-QA to exclude it from metrics. Deployed Worker 32ca9cda-1325-4565-bf29-cf3da39983e3. Payment configuration, app artifact and Google verification preserved.

Next: the two existing demo scripts still need recording with disposable files and a dedicated demo account before external publication; do not record personal files. During days8–14 prepare useful community-answer drafts, with source and community-rule checks, without posting. Continue focused guide corrections as needed.

## Campaign day 4 — 16 September 2026 (local drafts only)

Prepared docs/seo/demos/2026-09-16-recording-scripts.md: two 45-second demo scripts, captions, sample-data setup and no-deletion ending. Verified instructions against SystemDataView.swift, LargeFilesView.swift, FileRows.swift and DeleteForever.swift; checked the three linked website destinations return200. No recording, public content edit or deployment today from this campaign run; existing homepage changes recorded below are separate completed work. No new indexing confirmation or search-volume research claimed. Aggregate request metrics remain26website/30days,8website/7days,2GitHub cumulative separately. See marketing-progress.md for next steps. No owner action needed yet.

## Homepage keyword alignment — 16 September 2026

Applied the owner-approved search title, “Mac Cleaner for System Data & Caches | ClearDisk”, and H1, “A Mac cleaner that puts you in control. Find the clutter. Choose what goes.” Updated the description and supporting copy around System Data, caches, large files and MacBook compatibility. Retained localized one-time cleanup pricing and the primary download action. Existing cache and System Data guides remain linked; no duplicate keyword pages or meta-keywords tag were added. The supplied 1,000–10,000 US search ranges are not treated as confirmed exact volume, ranking difficulty or conversion evidence.

Deployed Worker `12665a00-58c3-4c68-9c36-fee6ee533ebc`. Typecheck, lint, production build and 72 local and live route checks passed. Production title and H1 were verified. Desktop and 393px mobile copy checks passed with no horizontal overflow. Google recrawl, ranking and conversion changes remain unverified.

## Ad landing page refinement — 16 September 2026

Shortened the homepage hero for ad visitors: a problem-led headline, Download for Mac as the primary action, a secondary localized purchase link, and explicit free scan / one-time cleanup pricing. Removed the third competing hero action and redundant introductory lines. Moved the app preview up, grouped compatibility details, and kept software installation/uninstallation information in an accessible native disclosure. iCloud diagnostics remains linked below the preview. Branding, navigation, analytics consent and verified-purchase tracking are preserved.

Deployed Worker `7803be4f-7fc6-4012-aa4e-9767a6fa8e35`. Typecheck, lint, production build and 72 local and production route SEO checks passed. Live homepage copy was verified. Chrome desktop (1440×1000) and narrow (393×852) visual checks passed, with no horizontal overflow and working disclosure. This is a usability improvement, not a measured conversion-rate increase.

## Google Ads purchase measurement — 16 September 2026

Implemented consent-gated Google Ads tracking with the owner's verified destination `AW-10925384709/MoykCO79r_kcEIXI0Nko`. Events require a fresh backend Stripe check of a live, complete, paid ClearDisk session; actual currency/amount and a stable hashed transaction ID are sent. No emails, license keys, sandbox orders, download clicks or success-page visits count as purchases. No GA4 integration exists; no duplicate conversion action was created.

Added consented click attribution in checkout metadata and a signed-webhook purchase ledger with authenticated GCLID CSV export for buyers who never return. Google import action/mapping and delivery remain to be configured; this is not automatic server-to-Google tracking. Full configuration, changed files and Tag Assistant procedure: [purchase tracking report](../analytics/google-ads-purchases.md).

Deployed Worker `1101539b-0f4b-4b4f-9af7-c50e91ae3b4d`. Passed 48 tests, typecheck, lint, build and 72 live HTML SEO-route checks. Chrome mobile/desktop consent checks passed; production loaded one tag after Allow and none after Decline/reload. Empty/sandbox purchase lookups returned null and unauthenticated export returned 401. No real payment made; genuine purchase receipt/attribution still needs observation.

## Campaign day 3 — 15 September 2026

Published a focused correction to https://cleardisk.app/recover-deleted-icloud-drive-files-mac . Added concrete Drive/iWork and other-app recovery steps and Apple's warning not to edit/delete Drive data during recovery. Simplified one abstract paragraph; generic edit in the existing tone, no approved personal voice profile used. Source rechecked: https://support.apple.com/en-euro/guide/icloud/-mmae56ea1ca5/icloud . No new guides, search-volume claims or feature promises.

Worker217563f5-aab8-4bf9-a978-4e89b4e2727d deployed.43tests,typecheck,lint,build and72liveHTML SEO checks passed; exact changed copy,sitemap lastmod,DMGchecksum and bothanalytics401 checked. Metadata and sitemap date updated; no fresh Google indexing confirmation is claimed. Earlier same-day Search Console audit remains the latest recorded Google evidence.

Created marketing-progress.md without resetting the owner's September13–October12 schedule. Baseline at10:03UTC: website26requests across last30UTCdays,8acrosslast7; GitHub2cumulative separately. Counts are requests, not installs or revenue. No paid tools, social messages or account changes. Next: improve existing guides and prepare disposable-data demo outlines for campaigndays4–7.

## Published content refresh — 15 September 2026

Cloudflare authentication was restored. Deployed the previously pending safety corrections and a plain-language edit of the Application Support and Containers guides to cleardisk.app. Live Worker version: f1f6a440-c016-4b4e-9682-068513d52329. Updated pages: /application-support-folder-mac, /containers-folder-mac, /uninstall-apps-on-mac and /faq/uninstall-apps. No duplicate articles were added; the library remains 52 guides and the sitemap 67 URLs. This entry supersedes the deployment blocker below.

Humanize pass: no local approved voice profile exists, so the owner’s broad editing authorization was applied as a generic edit in the established site tone. Replaced abstract introductions and long explanations with the reader’s immediate problem, concrete actions and clearer limits. Kept important uncertainty and file-safety instructions. Editorial assessment of the selected passages: 20/69 before (Tier 1: 4, Tier 2: 11, Tier 3: 5), estimated 9/69 after (2, 5, 2), moderate edit. These are subjective editing scores, not AI-detector results or a claim to reproduce the owner’s personal voice. Apple’s uninstall guidance and container-protection documentation were checked again; no new unsupported product features were added.

Validation: 43 tests, typecheck, lint and production build passed. Live Chrome showed the new opening and updated date; the 393×852 phone layout retains the Download button and mobile menu without crowding. Google’s prior indexing confirmation applies to the URL, not confirmation that this new wording has been reindexed. Sitemap submission already succeeded earlier today.

Resumed the existing ClearDisk 30-day publishing plan at its saved daily 10:00 Asia/Kolkata schedule. Added explicit Humanize editing and progress-log instructions. Work remains free, prioritizes meaningful existing-page improvements and distinct reader questions, verifies sources and live deployment, and reports meaningful results or blockers. No duplicate automation was created.

## Crawlability and content audit — 15 September 2026

**Production and Google evidence.** The HTTPS URL-prefix property opens under anilgautamwork@gmail.com. ClearDisk’s existing verification tag is present in the initial HTML and remains unchanged. Production passed all 72 HTML-route SEO checks: public indexing metadata, private checkout/thanks/recovery noindex, canonicals, structured data, internal related links, robots, sitemap, assets and 404 handling. The sitemap lists 67 URLs, including 52 existing guides and the dedicated product/FAQ pages. Before resubmission, Search Console showed Success, last read 14 September, 67 discovered pages. Resubmitted the current sitemap successfully on 15 September; this is the current production sitemap, not the pending content revision.

**Indexing is separate.** URL Inspection confirmed the homepage and /application-support-folder-mac are indexed. The guide’s live test at 04:38 on 15 September returned “URL is available to Google” and “Page can be indexed.” The overview showed three total web search clicks; its indexing summary is still processing. No total indexed-page count is established. Earlier log entries describing a site: search sample as complete Google coverage should not be read as an indexing census. Sitemap discovery is not indexing; submission does not guarantee rankings. Reference: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview

**Free research.** Chrome Google query “mac application support folder safe to delete” showed related questions about folder purpose, safe deletion and Group Containers. Organic results included Apple Community, Reddit, MacPaw and AppleInsider. These are search-intent observations from a personalized India SERP, not rankings tracked across users or evidence for file-deletion advice. No paid keyword tools or browser-extension credit actions were used; no search-volume or difficulty claims are made. Existing pages already cover the questions, so this pass improves them rather than creating duplicates.

**Prepared changes, not yet published.** Revised /application-support-folder-mac, /containers-folder-mac, /uninstall-apps-on-mac and /faq/uninstall-apps. Removed blanket advice to delete data just because its app was uninstalled. Added saved-work, shared-data and backup checks, with a concrete note-database example. Corrected ClearDisk removal claims against ../Sources/Core/TrashService.swift: general Application Support and container trees are blocked; device backups have a separate exception. Updated affected dates so article metadata and sitemap lastmod reflect the edits. Sources checked: https://support.apple.com/en-us/102610 and https://support.apple.com/en-us/102624. Branding, navigation, existing URLs and verification token retained.

**Validation and blocker.** All 43 tests, typecheck, lint, production build and 72-route local HTTP checks pass. Chrome desktop and 393×852 article review passed; phone header retains brand, Download and menu. Deployment attempted but Wrangler is unauthenticated and no API token is available to that process. OAuth sign-in opens Cloudflare’s login page; owner sign-in is required to continue. These content revisions are NOT live, and Google’s live test above applies to the existing production article. After authentication, deploy the built site, rerun production HTTP checks and request recrawl of the changed guide. No ads, paid APIs or hosting upgrades used.

## Iteration 29 — 6 September 2026 (monitoring only)

Google's coverage is unchanged at the same ten URLs. Earlier today the owner asked for a smaller header on phones; the header now shows only the brand and a Download button below 600px (deployed as Worker version 109fa1bf). No SEO changes this tick.

## Iteration 28 — 6 September 2026 (monitoring only)

Google's coverage is unchanged at the same ten URLs. No changes deployed.

## Iteration 27 — 6 September 2026 (monitoring only)

Google's coverage is unchanged at the same ten URLs; the overnight guides and FAQ pages are still waiting. No changes deployed.

## Iteration 26 — 6 September 2026 (monitoring only)

Google's coverage is unchanged; none of the overnight guides or the FAQ pages has appeared yet. No changes deployed.

## Iteration 25 — 6 September 2026 (monitoring only)

Google's coverage is unchanged at eleven distinct URLs across queries (home, hub, download, terms, privacy, and the System Data, keeps-growing, too-large, Xcode, iCloud Drive and Photoshop guides). None of the overnight pages or the FAQ pages has appeared yet. No changes deployed.

## Iteration 24 — 6 September 2026 (monitoring only)

Google still lists the same ten URLs. The "cleanmymac alternative" probe returned no ideas from the free tool (competitor-name phrases are excluded from our pages anyway under the Ads trademark rule). No changes deployed.

## Iteration 23 — 6 September 2026 (monitoring only)

Session resumed after a restart; the previous log push had been cut off and was completed. Google still lists the same ten URLs; none of the overnight guides or the FAQ pages has appeared yet. No changes deployed.

## Iteration 22 — 6 September 2026 (monitoring only)

Google lists ten URLs again; the FAQ pages and the guides published overnight are still waiting to be picked up. The free keyword tool has been probed across roughly fifty seeds and every in-scope phrase above 100 searches a month now has a page, so the loop moves to hourly indexing checks and publishes only if a new phrase surfaces. No changes deployed.

## Iteration 21 — 6 September 2026 (monitoring only)

Google's `site:` sample shows six URLs this time; the FAQ pages have not appeared yet. "free up space macbook" and its variants are all <100 and already covered by the clear-storage guide. No changes deployed.

## Iteration 20 — 6 September 2026 (monitoring only)

Google's `site:` sample fluctuates between six and ten URLs from query to query, which is normal for a young site; the FAQ pages have not appeared yet. "mac cleaner no subscription" returned no ideas. No changes deployed.

## Iteration 19 — 6 September 2026 (monitoring only)

Google still lists ten URLs (home, hub, download, terms, privacy, five guides). "how much storage does macos take" and variants are all <100. No changes deployed.

## Iteration 18 — 6 September 2026 (monitoring only)

Google's coverage is growing: a targeted `site:` query now returns ten URLs, including the download page and the what-is-System-Data, keeps-growing, Xcode and iCloud Drive guides. The FAQ pages were deployed minutes ago and are not expected yet. No changes deployed.

## FAQ pages — 6 September 2026 (owner request)

The owner asked for FAQ pages as their own URLs so Google can index the questions and surface the articles. Added a hub at `/faq` and six topic pages: `/faq/system-data`, `/faq/mac-storage-full`, `/faq/clear-cache`, `/faq/uninstall-apps`, `/faq/backups-cloud-photos` and `/faq/cleardisk`, 58 questions in all. Each question is an H2 with a short answer and a link to the guide that goes deeper; every page carries FAQPage and BreadcrumbList schema, sits in the sitemap, and is linked from the header (FAQs), footer, home FAQ section and the guides hub. Data lives in `lib/faqs.ts`; HTTP checks verify the schema and every guide link. Sitemap: 55 URLs.

## Iteration 17 — 6 September 2026 (monitoring only)

Targeted `site:` queries show Google has also indexed `/system-data-keeps-growing`, so the plain `site:` list understates coverage; none of the pages published tonight appears yet. No changes deployed.

## Iteration 16 — 6 September 2026 (monitoring only)

Google's `site:` result is unchanged at six URLs. Probes for "delete old backups mac" and "mac storage other" (including "other volumes in container") were all <100. No changes deployed.

## Iteration 15 — 6 September 2026 (monitoring only)

Google's `site:` result is unchanged at six URLs; Bing's `site:` shows nothing yet despite the IndexNow submissions (Bing normally takes days, and verifying the site in Bing Webmaster Tools would speed it up; that is an owner step). Probes for "is it safe to delete system data mac" (no ideas) and "why is my mac storage full" (<100) added nothing. No changes deployed.

## Iteration 14 — 6 September 2026 (monitoring only)

Google's `site:` result is unchanged at six URLs. Ahrefs probes for "docker taking up space mac", "node_modules mac", "purgeable mac" and "icloud drive taking up space" returned nothing above 100/month; all are already covered. No changes deployed.

## Iteration 13 — 6 September 2026 (monitoring only)

Google's `site:` result is still six URLs. Ahrefs probes: "clear safari cache mac" >100 but Medium and already covered by the browser-cache guide; "mac mini storage" is upgrade intent; "chrome cache mac" and "xcode taking up space" <100. No page added. The browser-cache guide was retitled "Clear Safari or Chrome cache on Mac, keep your logins" so it names the two browsers people search for ("clear safari cache mac" and "how to clear cache on mac chrome" are both >100/month).

## Iteration 12 — 6 September 2026

**Monitoring.** Google's `site:` result still lists six URLs. Ahrefs probes: "group containers folder mac" >100/month US and Easy; "caches folder mac", "spotlight index mac" and "mac log files" all <100 (Spotlight and logs skipped, no volume and thin sources).

**Shipped.** `/containers-folder-mac` (what Containers and Group Containers are, from Apple's developer pages on app data containers and app group containers; measuring with read-only commands; what is usually large; what can go when an app is gone; what never to delete), linked from the Application Support guide. Library: 44 guides, sitemap 48 URLs.

## Iteration 11 — 6 September 2026

**Monitoring.** Google's `site:` result is unchanged at six URLs. Ahrefs probes: "application support folder mac" >100/month US and Easy (with "can i delete application support folder mac"), "where are iphone backups stored on mac" >100 and Easy, "macbook air storage" >100 but upgrade intent (skipped), "delete system storage mac" <100.

**Shipped.** `/application-support-folder-mac` (what it holds, open and measure with a read-only du command, what grows, what is safe to delete after an app is gone, what never to delete), linked from the Library and uninstall guides. The iPhone-backups guide gained a common-questions section answering where backups live, how to delete one, whether they can be moved and how big they are, citing Apple's backup page. Library: 43 guides, sitemap 47 URLs.

## Iteration 10 — 6 September 2026

**Research.** "how to clear storage on mac" >1,000/month US and Easy, "clear storage on mac" >100: the free-up-space guide was retitled "How to clear storage on Mac: free up space step by step" rather than adding a near-duplicate page. "delete cache mac" >100 (covered by the cache guide); "move files to external hard drive mac", "iphone backup mac", "clean up mac" all <100 or empty; "external hard drive mac" is formatting intent, skipped. Google's `site:` count is still six URLs (home, hub, terms, privacy, two guides); none of tonight's pages has been picked up yet, which is normal within a day.

**Shipped.** "Common questions" sections built from Google's People-also-ask boxes on the four biggest pages: what-is-system-data (clear it, is it safe, why so high, 100GB), clear-cache (is it safe, Safari, shortcut, system cache), uninstall-apps (why can't I delete, completely, force, Apple apps) and check-storage (free up, available, how many GB, still full after deleting). Retitle above. No new URLs; sitemap stays at 46.

**Next candidates.** The volume-backed topic pool is thinning; future iterations should probe less and monitor more: re-check `site:` indexing, refresh dates only for real edits, and add pages only when a seed shows >100 and Easy.

## Iteration 9 — 6 September 2026

**Research.** Ahrefs free tool, read through a compact page-script extractor to cut cost: "how to free up space on mac" >1,000 and Easy (already covered by `/free-up-space-on-mac`); "optimize storage mac" >100 Easy; "downloads folder mac" >100 Easy; "startup disk full mac", "macbook storage full" and "find large files mac" all <100; "disk utility mac" >1,000 but Medium and repair-intent, skipped. Apple's "Optimize storage space on your Mac" page confirmed the current Recommendations are Store in iCloud, Optimize Storage and Empty Trash Automatically; the older "Reduce Clutter" wording was removed from the free-tools guide accordingly.

**Shipped.** `/optimize-storage-mac` (what each recommendation changes, costs, how to undo each in its own app) and `/clear-downloads-folder-mac` (sort by size, decide by type, Safari and Mail settings that refill it, the other downloads folders). The home page's guide cards now show the four highest-volume pages in a two-column grid: clear System Data, check storage, clear cache, uninstall apps. `/mac-storage-full` retitled to "Mac storage full: first steps when the disk is almost full" to cover the startup-disk phrasing. Library: 42 guides, sitemap 46 URLs.

**Next candidates.** Probe "system data mac" question phrasings for FAQ-style additions; consider per-guide OG images; re-check `site:cleardisk.app` for the newest pages.

## Iteration 8 — 6 September 2026

**Research.** More head terms from Ahrefs' free tool: "how to clear cache on mac" >10,000/month US and Easy, "clear cache on mac" >1,000 (already covered by `/clear-cache-on-mac` and `/clear-browser-cache-mac`; extra inbound links added); "show hidden files mac" >1,000 and Easy with a long tail of Finder, Terminal and shortcut variants (no page existed); "empty trash mac" and "force empty trash mac" >100 (covered by the Trash guide); "how to delete files on mac" >100. Apple's shortcut list documents Shift-Command-G, Command-Delete and the Empty Trash shortcuts but not the Shift-Command-Period toggle, so the hidden-files guide says so plainly.

**Shipped.** `/show-hidden-files-mac` (Finder toggle, Go to Folder, Terminal listing, which hidden folders hold space) and `/delete-files-on-mac` (Command-Delete, Put Back, Delete Immediately, 30-day auto-empty, what will not delete, deleting to free space). Related links from check-storage, Trash, Library and Terminal guides. Library: 40 guides, sitemap 44 URLs.

**Next candidates.** Probe "macbook storage", "startup disk full", "purgeable", "other storage" phrasing for titles; consider whether `/clear-cache-on-mac` deserves a home-page link given its volume; second pass on hub copy.

## Iteration 7 — 6 September 2026

**Research.** The two largest phrases found so far, both rated Easy by Ahrefs' free tool: "how to uninstall apps on mac" and "uninstall apps on mac" (>10,000/month US each) and "how to check storage on mac" (>1,000). "what is taking up space on my mac" and its many variants are each <100. Sources: Apple's "Delete or uninstall apps on Mac", the internet/disc install guide (vendor uninstallers), the App Store guide, and the Storage settings guide.

**Shipped.** `/how-to-check-storage-on-mac` (Storage settings walkthrough, categories, Disk Utility, what the categories hide) and `/uninstall-apps-on-mac` (uninstaller first, Finder, apps that will not delete, Library leftovers, login items). The home page's third guide card now points at the check-storage guide; related links added from free-up-space, mac-storage-full, what-is-system-data, Library and free-tools guides. Library: 38 guides, sitemap 42 URLs.

**Next candidates.** Watch whether the two high-volume pages get indexed; probe more head terms (clear cache macbook, macbook storage, delete files on mac); consider a short "app leftovers" companion for the uninstall guide if it draws traffic.

## Iteration 6 — 6 September 2026

**Quality pass.** Re-read the fourteen guides written tonight against their sources. Two sentences were tightened: the Trash guide no longer claims macOS has "no force-empty command" (it says there is no Secure Empty Trash), and the installer guide says Apple provides "its installers" rather than "every installer" for re-download. Guide sections gained an optional code block, and the commands in the Terminal, Homebrew, npm/pnpm/Yarn/pip, Library, snapshots and post-update guides now render as copyable code instead of inline prose (14 blocks).

**Shipped.** `/mac-storage-glossary`: plain definitions for System Data, Other, available versus free, purgeable space, local snapshots, caches, Optimize Storage, Library, containers, packages, disk images, per-disk Trash, allocated size, Full Disk Access, hidden folders, online-only files, node_modules, Derived Data, Docker.raw and package caches, each pointing at the guide that goes deeper. Related links from what-is-system-data and purgeable-space. Library: 36 guides, sitemap 40 URLs.

**Next candidates.** Check Google's snippet refresh for the home page; consider per-guide OG images; Spotlight indexing; a "which guide do I need" decision page for the hub.

## Iteration 5 — 6 September 2026

**Structure.** The guides hub now has four groups (System Data and a full Mac; Everyday cleanup and choosing tools; Files, backups and cloud storage; Apps and developer tools) instead of one 15-guide block. An inbound-link audit found two guides with no related links pointing at them (macOS installer, Photoshop scratch disk) and five with only one; related lists were adjusted so every guide has at least two inbound links besides the hub.

**Research.** Apple's Time Machine pages (backup frequency, oldest backups deleted when the disk is full, exclusions, connect a new disk) and the local-snapshots page (a snapshot is saved before installing any macOS update). Ahrefs: "time machine backup disk full" <100; "mac storage full after update" returned no ideas, so that page serves the cluster rather than a measured query.

**Shipped.** `/time-machine-backup-disk-full` (storage group) and `/mac-storage-full-after-macos-update` (everyday group). Related links from time-machine-snapshots, mac-storage-full and system-data-keeps-growing. Library: 35 guides, sitemap 39 URLs. IndexNow pinged after deploy.

**Next candidates.** Spotlight indexing after an update; "storage numbers do not match" explainer; a short glossary page for storage terms; check the home page snippet refresh in Google; consider a second OG image for guide pages.

## Iteration 4 — 6 September 2026

**Indexing check.** A `site:cleardisk.app` search from Chrome shows Google has already indexed the home page, the guides hub, terms, privacy and at least two guides ("System Data taking up 100GB or more?" and the Photoshop scratch-disk guide, both crawled within the last day), without Search Console. Home and hub snippets still show old descriptions from an earlier crawl; they will refresh. Added an IndexNow key file and started pinging Bing's IndexNow endpoint after each deploy so the non-Google engines pick pages up quickly too.

**Research.** Ahrefs free generator: "best free mac cleaner" >100 and Easy (from iteration 1) is now covered; "delete macos installer" has a nine-phrase long tail including "can't delete macos installer from trash", all <100; "check disk space mac terminal" <100. Makers' pages read for OnyX, GrandPerspective, OmniDiskSweeper and AppCleaner; Apple's Terminal, download-and-install and bootable-installer pages.

**Shipped.** `/check-disk-space-mac-terminal` (measure-only df and du, no deletion commands), `/delete-macos-installer-mac` (installer in Applications, disk images, bootable-installer exception) and `/best-free-mac-cleaner` (built-in tools first; free apps described from their makers' pages with a disclosure that we make ClearDisk and did not test them side by side). Related links from clear-system-data and disk-space-analyzer. Library: 33 guides, sitemap 37 URLs.

**Next candidates.** Spotlight index and mds; Time Machine backups taking all external-disk space; "storage not showing correctly after macOS update"; a Hindi-market check (India prices ₹599) is out of scope for English pages; refresh hub intro copy to name the new groups.

## Iteration 3 — 6 September 2026

**Research.** Ahrefs free generator: "show library folder mac" and "library folder mac" both >100/month US and Easy, with a long tail of "how to get to / open / unhide library folder mac" phrases; "trash won't empty mac" <100 and Easy; the whole "other storage mac" cluster is <100 (older macOS naming, folded into the System Data pages rather than a doorway page); "photos library taking up space mac" <100. Sources: Apple's Finder "go to a folder" page, "delete files and folders" page (locked items, Delete Immediately, Put Back), Photos "optimize storage" page and the iCloud Photos setup page.

**Shipped.** `/show-library-folder-mac` and `/trash-wont-empty-mac` (System Data group), `/photos-library-taking-up-space-mac` (storage group). Related links: what-is-system-data → Library guide, storage-not-updating → Trash guide, move-photos → Photos guide. Library: 30 guides, sitemap 34 URLs.

**Next candidates.** A measure-only Terminal guide for System Data (du, ls, no deletion); old macOS installer in Applications; Spotlight index size; a free-Mac-tools round-up from official documentation; refresh the hub copy to mention the new groups.

## Iteration 2 — 6 September 2026

**Research.** Ahrefs free generator: "npm cache clean", "clear npm cache", "how to clear npm cache" and "npm cache clear" each >100/month US and Easy, so the developer-cache cluster has measurable demand; "messages taking up space mac", "google drive taking up space mac" and "clear system data mac terminal" returned no ideas or <100, so those pages are written for completeness of the cluster rather than volume. Sources read: npm, pnpm, Yarn (modern and 1.x) and pip docs; Apple's Messages User Guide; Google Drive stream/mirror, Dropbox online-only and low-disk-space pages; Microsoft's Files On-Demand for Mac page.

**Shipped.** `/clear-npm-cache-mac` (developer group; also pnpm, Yarn, pip), `/messages-taking-up-space-on-mac` and `/cloud-drive-taking-up-space-on-mac` (storage group). Related links: Homebrew → npm, iCloud → cloud drives, Mail → Messages. Library: 27 guides, sitemap 31 URLs.

**Next candidates.** Trash will not empty / item in use; old macOS installer in Applications; Photos "Optimize Mac Storage"; a Terminal-only measuring guide for System Data (du, ls) that hands off to Finder for removal; a free-Mac-tools round-up built from official documentation.

## Iteration 1 — 6 September 2026

**Research.** Read Google SERPs for "how to clear system data on mac", "not enough space to update macos" and "mac cleaner one time purchase" from Chrome. Mined Crumb's ~400-post sitemap and DiskCleaner's blog for topic gaps. Ahrefs' free keyword generator (US) gave the first real volumes: "system data mac storage" >1,000/month and Easy; "clear/delete/clean system data mac" and "system data mac storage too large" >100 and Easy; "mac cleaner" >1,000 but Hard; "best free mac cleaner" >100 and Easy; "disk space analyzer mac" >100 and Medium. Saved to [ahrefs-free-2026-09-06.csv](ahrefs-free-2026-09-06.csv) and [2026-09-06-competitors.md](2026-09-06-competitors.md).

**Shipped.** Three guides: `/not-enough-space-to-update-macos` (Apple 102531, 102624, 102662, safe-mode guide, Disk Utility), `/mail-taking-up-space-on-mac` (Apple Mail User Guide pages on storage, attachments and Account Information settings), `/clean-homebrew-cache-mac` (Homebrew manpage and FAQ). Related links updated on mac-storage-full, free-up-space, find-node-modules, clean-docker and clear-xcode. Library: 24 guides, sitemap 28 URLs.

**Next candidates.** Messages attachments; Google Drive/Dropbox/OneDrive local caches; Trash will not empty; npm/pnpm/yarn and pip caches; old macOS installer; a "best free Mac cleaner" round-up built from official documentation only.

**Owner still needed for.** Search Console verification and sitemap submission (the single biggest lever for getting these pages indexed quickly), Bing Webmaster import, directory listings, and any community posting. No orders can arrive from search until Google indexes the pages; verifying Search Console and requesting indexing for the home page and the System Data guides is the fastest way to shorten that wait.

## 2026-09-24 — Library 52 → 152 guides

**Round 1 (58 guides, a652174).** Topics from 667 Google autocomplete suggestions (`google-autocomplete-2026-09-24.csv`, hl=en gl=us, no volumes): developer caches and VMs, creative apps, chat/streaming/game apps, storage categories and system folders, memory and startup disks, file management.

**Round 2 (38 question articles).** Picked from the top-voted Stack Overflow / Ask Different / Super User questions (`stackexchange-top-questions-2026-09-24.csv`, score and views as of today): Docker commands (delete images 1,179 votes; remove containers 1,504), uninstalling Node.js (1,798 votes, 3.1M views), Anaconda, Homebrew; Chrome disk use and its on-device AI model; Trash from Terminal; `free`/`purge`/mds_stores; Time Machine drive size and deleting old backups (266 votes, 755k views). Reddit blocks scripted and in-app-browser access, so Reddit/Quora phrasing was not measured.

Also fixed `check-disk-space-mac-terminal` and `mac-storage-full-after-macos-update`: on current macOS `df -h /` Used is the sealed system volume, so compare Avail.

Rules kept: vendor/Apple sources fetched and checked, read-only commands tested on macOS 26.6.2, no deletes run, no invented volumes, ClearDisk claims limited to what 2.0 does. Validation: 49 tests, typecheck, lint, build, HTTP SEO check (172 routes). Not deployed from this session. **Next candidates:** remaining high-vote questions in the Stack Exchange CSV (Xcode indexing/storage, kernel_task memory, Safari hard refresh), per-app caches (Zoom, Outlook, VS Code, Cursor), Reddit/Quora phrasing once a reachable source exists.
