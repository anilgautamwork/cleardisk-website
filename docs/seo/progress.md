# SEO loop progress log

Written by the autonomous SEO loop. Newest entry first. Every entry says what was researched, what shipped, and what still needs the owner.

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
