# ClearDisk 30-day marketing progress

Campaign schedule: 13 September–12 October 2026, 30 calendar days. The owner explicitly chose 13 September. This ledger was first created on 15 September (campaign day 3); no earlier scheduled-run completion is inferred. Preserve the original end date rather than extending the campaign when a ledger is missing. Prior manual work is in progress.md.

## Day 10 — 22 September 2026 (release and measurement reconciliation)

Reconciled the handoff with today's separately completed 1.1.1 production release; retained older release entries as history. Verified /download and /sitemap.xml return 200, the download page reports 1.1.1, and the sitemap contains 67 URLs. Public DMG matches the recorded 4,080,490-byte notarized artifact and SHA256 c6bcc9ed671ae922618947f4dfa6283904afa5c1a0ac2a1f9e27b946b900a862. Verification used ClearDisk-QA to exclude the download from metrics. Anonymous /analytics and /api/analytics return 401. GitHub API still reports v1.1.0 as latest; do not equate it with the newer website artifact.

Metrics at 2026-09-22T10:03:32.429Z: website 43 requests over last30 UTC days, 17 over last7; GitHub 2 cumulative separately. The 30-day website count is 12 higher than yesterday's 31. These are requests, not unique people, completed downloads, installs or sales; no traffic-source or campaign-causation claim. No fresh Search Console query/indexing dataset retrieved; September15 remains the latest recorded evidence.

Documentation-only campaign changes: no new published article or repeat deployment after today's release. Existing 52-guide library and design preserved. No new technical advice requiring Apple-source research or prose edit requiring a Humanize pass. Source checks were the actual live download, sitemap, analytics protection and GitHub release API. Markdown diff checked. Payment/license behavior and Talivia pause unchanged.

Next: prioritize a concrete existing-guide correction using current primary sources. Existing community drafts and demos remain local and require review before any external posting; no messages sent. Track the separate GitHub release lag when next handling release distribution.

## Day 9 — 21 September 2026 (distribution research)

Updated the existing community drafts with primary moderator-policy evidence. r/MacOS's opened self-promotion announcement limits promotion to App Store apps; the recorded direct-DMG distribution is not sufficient. r/macapps's opened Phase3 announcement is explicitly time-limited experimental guidance, so current eligibility is not claimed. Direct rules pages remain inaccessible and r/mac rules unverified. Links and exact limits are recorded in community/2026-09-20-answer-drafts.md. No suitable fresh iCloud question established; no duplicate drafts or public posts.

Metrics at 2026-09-21T10:02:29.556Z: website 31 requests over last30 UTC days, 8 over last7; GitHub 2 cumulative separately. These are request counts, not installs or sales; no source attribution inferred. No Search Console dataset retrieved or current release/indexing claim made. Public URLs and deployment unchanged; no new technical instructions requiring an Apple-source refresh. Documentation-only diff checked; no app or website build/deploy necessary.

Next: assess a currently permitted destination before proposing external distribution, or return to a concrete existing-guide correction. Do not spend repeated runs retrying the same inaccessible rules page. Sending and posting remain unauthorized.

## Day 8 — 20 September 2026 (community drafts)

Prepared docs/seo/community/2026-09-20-answer-drafts.md with two distinct native-step answers: growing System Data and missing iCloud Remove Download. Researched a recent r/mac discussion and an older shared-folder case; clearly labelled the latter as research, not a fresh posting target. Apple storage and iCloud file-control sources were checked today and linked in the drafts. Avoided inferring a cause from commenters' anecdotes or assigning another commenter's measurements to the original poster.

Community-rule verification is incomplete: r/MacOS rules redirected without readable rules, and r/mac rules remain to be checked. Drafts are not approved for posting; no messages, promotion or external replies sent. No public page change, new article, deployment or new release/indexing claim. Search Console data was not retrieved; September15 remains the latest recorded evidence. No paid tools or keyword-volume claims.

Metrics at 2026-09-20T10:01:49.232Z: website 29 requests over last30 UTC days, 6 over last7; GitHub 2 cumulative separately. Thirty-day and GitHub totals unchanged; rolling seven-day total changed as the window advanced, not evidence of lost downloads. No runtime changes, so builds and production redeployment were unnecessary. Markdown diff checked. Published URLs unchanged.

Next: verify rules and find a fresh unresolved iCloud question before tailoring drafts for owner approval. Existing demo recordings remain pending; no personal files recorded or removed.

## Day 7 — 19 September 2026 (verification only)

Confirmed yesterday's offline iCloud guide still serves the revised rehearsal instructions. Guide, /download and /sitemap.xml returned HTTP 200. Both private analytics routes returned 401 with the QA user agent; an initial default Python user-agent request was denied with 403 before the consistent-agent recheck. No access exposure found.

Metrics at 2026-09-19T17:23:25.237Z remain 29 website requests in last30 UTC days, 9 in last7, and 2 GitHub cumulative separately. No meaningful change from day6; these are not installs or sales. No DMG GET was needed for this unchanged deployment.

Reviewed the existing demo scripts; they remain unrecorded. No dedicated demo account was established or personal-file recording attempted in this run. No new troubleshooting guidance, content edit, release claim, Search Console dataset or indexing claim. No duplicate article or deployment needed after yesterday's verified publication. Latest recorded deployment remains 32ca9cda-1325-4565-bf29-cf3da39983e3; September15 is the latest recorded Search Console evidence.

Next: enter the days8–14 community-answer stage, researching relevant questions and rules before drafting two distinct, helpful responses. Keep all external posts pending owner authorization. Demo recording remains pending separately.

## Day 6 — 18 September 2026

Published https://cleardisk.app/keep-icloud-files-downloaded-mac with concrete Finder download/retention steps, a presentation rehearsal before travelling, and instructions to clear Keep Downloaded afterward without promising immediate space recovery. Replaced abstract recommendations with direct prose; retained sync/backup distinctions and ClearDisk's lack of persistent pinning. No new URL or filler article. The September 17 draft intent had not changed the repository or reached deployment; no day 5 completion is inferred.

Primary source rechecked: https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac . GitHub latest release remains v1.1.0. Generic Humanize edit in the established tone, no personal voice imitation. Editorial pattern assessment: 14/69 before (3 statistical, 5 composition, 6 document), estimated 9/69 after (2, 2, 5); moderate edit focused on abstraction and paragraph rhythm. These are subjective editing scores, not classifier results.

Metrics at 2026-09-18T10:02:51.582Z: website 29 requests over last30 UTC days, 9 over last7; GitHub 2 cumulative separately. Requests are not installs, unique people or sales. No fresh Search Console query/indexing dataset retrieved; September 15 remains the latest recorded evidence. No new keyword-volume or ranking claims.

Validation: 48 tests, typecheck, lint, production build and 72 live HTML SEO checks passed. Verified exact changed text, sitemap lastmod 2026-09-18, unchanged public DMG checksum and anonymous 401 on both analytics routes. Verification download used ClearDisk-QA to exclude it from metrics. Deployed Worker 32ca9cda-1325-4565-bf29-cf3da39983e3. Payment configuration, app artifact and Google verification preserved.

Next: the two existing demo scripts still need recording with disposable files and a dedicated demo account before external publication; do not record personal files. During days8–14 prepare useful community-answer drafts, with source and community-rule checks, without posting. Continue focused guide corrections as needed.

## Day 4 — 16 September 2026

Prepared two local 45-second recording scripts and caption drafts: [System Data and large-file review](demos/2026-09-16-recording-scripts.md). Checked UI labels, home-scan requirement, large-file threshold, review dialog and license gate against app source. Recording and external publication remain pending; no personal files scanned or deleted. Three destination URLs passed HTTP HEAD checks after correcting a draft URL typo. No app or website runtime changes, so no build/deployment was necessary.

Read today's existing homepage and purchase-measurement entries before work; did not repeat those completed changes. No fresh indexing or ranking claims. No current Search Console query dataset was retrieved this run; the September 15 verified crawl audit remains the latest recorded evidence. Content/source work today concerns the app's own UI, verified against repository code; no new Apple troubleshooting advice or measured performance claims were added.

Metrics at 2026-09-16T10:02:31.922Z: website last30 UTC days 26 requests; last7 8; GitHub 2 cumulative, separately. Counts unchanged since day3 and are not installs or sales. Existing deployed URLs unchanged. Next: record the scripts using a dedicated demo account and sample files, then review timing and privacy before requesting approval for external posting. Continue targeted existing-guide corrections when a concrete gap is found; do not add filler.

## Day 3 — 15 September 2026

Reviewed the latest handoff and today's completed content work; did not repeat the Application Support/Containers refresh. Improved the existing /recover-deleted-icloud-drive-files-mac guide with concrete recovery controls and Apple's missing warning to avoid edits/deletions during recovery. Generic plain-language edit, no personal voice imitation or invented scoring. Date/Article metadata/sitemap lastmod updated; no new article or duplicate URL.

Source checked today: https://support.apple.com/en-euro/guide/icloud/-mmae56ea1ca5/icloud . Apple describes Recently Deleted for Drive/iWork, Data Recovery > Restore Files for other supported files, the 30-day limit, permanent-removal exclusion and avoiding changes during restoration. Existing product limit remains: ClearDisk does not recover deleted cloud files. GitHub latest release checked: v1.1.0. Search Console evidence from today's earlier audit remains historical: homepage and Application Support indexed, sitemap 67 discovered URLs. This run does not claim fresh query data or reindexing of this edit.

Baseline at 2026-09-15T10:03:18.218Z: last30 UTC days website requests 26; last7 UTC days 8; GitHub cumulative DMG requests 2, kept separate. These are requests, not users, completed downloads, installs or sales. Credentials were read locally and never printed or committed.

Validation: 43 tests, typecheck, lint and production build passed; all72liveHTML SEO checks passed. Verified updated prose, sitemap lastmod, unchanged DMG checksum and anonymous401 on both analytics routes. Deployed Worker217563f5-aab8-4bf9-a978-4e89b4e2727d. Published URL: https://cleardisk.app/recover-deleted-icloud-drive-files-mac . Next: continue the existing-guide clarity audit; review genuine Search Console queries when accessible before expanding content. Prepare demo outlines using disposable data during days4–7; no external posting or paid research.
