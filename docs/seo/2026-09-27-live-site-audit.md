# ClearDisk live SEO audit — 27 September 2026

**Recommendation:** improve the pages already earning impressions, fix hostname redirects, and reconcile product claims before commissioning another batch of articles. No site-wide indexing blocker was found. Google has successfully read the current 171-URL sitemap. The strongest early opportunities are Photoshop scratch disks, Xcode storage, and System Data; large competitor-brand keyword estimates should not dictate the next sprint.

The initial audit below was read-only. The owner subsequently authorized remediation: see the final “SEO fixes and Google connection” section for deployed changes and account verification. The original observations are retained as a dated baseline.

**Scope and evidence**

- English product website for a macOS storage app, with free scans and a $10 cleanup license; localized pricing is present. This is not an AdSense-funded browser tool. US/English is the market in the owner's keyword screenshot, not an assumption that all visitors are American.
- Repository: `website/`, branch `main`, clean at audit start, source `c21882b`. The newer homepage/guide FAQs are live. Current Cloudflare deployment ID is **Unverified**: the CLI required a non-interactive token. A historical deployment ID was not substituted for the current one.
- Crawled all **171 sitemap URLs**, plus policy, transaction, private, and missing endpoints: 182 initial responses. All sitemap entries returned 200 and were indexable. Separately checked hostname variants, linked download assets, and an obsolete URL reported by Google.
- Existing production check passed: `SITE_CHECK_ORIGIN=https://cleardisk.app SITE_CHECK_INDEXABLE=true npm run test:seo:http` — **176 HTML routes**. Initial HTML, head metadata, JSON-LD, sitemap, robots, related links, missing routes, and download HEAD were inspected.
- Editorial sampling covered the homepage, About, Pricing, Terms, Privacy, Support, Download, iCloud Doctor, System Data, free-cleaner comparison, uninstalling apps, the cleanup blog, AppCleaner, and the Photoshop guide. This is not a line-by-line technical certification of all 152 guides.
- Real browser review: desktop homepage demo, Storage map/Breakdown tabs, selection changes and simulated Trash completion; 390px cleaner-guide reading and mobile navigation. No real files were scanned or deleted. No live purchase or license activation was performed.
- Temporary raw evidence: `/tmp/cleardisk-seo-audit-2026-09-27/` contains crawl JSON/HTML, link analysis, hostname responses, aggregate analytics and download verification. This report preserves the key results without credentials.

**Search Console baseline — actual account data**

Property: `https://cleardisk.app/`, accessed through the authorized Work profile. Performance filter: **3 months, Web (text), all countries/devices**. The chart's available dates are **7–24 September 2026**; the UI said last updated 6.5 hours ago when read. These are observations, not forecasts.

| Metric | Observed value |
| --- | ---: |
| Clicks | 4 |
| Impressions | 279 |
| CTR | 1.4% |
| Average position | 34.4 |
| Reported query rows | 94 |
| Desktop | 4 clicks / 270 impressions |
| Mobile | 0 clicks / 9 impressions |
| United States | 0 clicks / 117 impressions |
| India | 3 clicks / 14 impressions |
| Australia / Canada / UK | 27 / 16 / 11 impressions; no clicks |

Query `cleardisk` accounts for 3 clicks, 20 impressions and average position 6.3. The homepage has 3 clicks / 31 impressions; `/system-data-keeps-growing` has the remaining click and 4 impressions. Query totals need not match page/property totals because some queries are withheld. The sample is too small for a stable CTR or revenue forecast.

The indexing report was last updated **21 September**, before the September 24 expansion: **65 indexed, 11 excluded**. The sitemap report is newer: submitted September 15, last read **September 26**, **Success**, **171 discovered pages**. Do not describe the difference between 171 and 65 as 106 indexing errors.

| Exclusion | Exact examples | Interpretation / next action |
| --- | --- | --- |
| Noindex, 2 | `/recover`, `/buy-now` | Intentional. Retain. |
| Alternative canonical, 1 | `/download?source=guides` | Expected consolidation into `/download`. Retain. |
| Soft 404, 1 | `/SHA256SUMS.txt` | An 80-byte checksum asset, not a missing article. Live 200 and correct checksum. Add `X-Robots-Tag: noindex` as low-priority asset hygiene. |
| Not found, 1 | `/your-project/node_modules` | Live 404; no current incoming link found in the crawl. Keep the honest 404; no blanket redirect to the homepage. |
| Crawled, not indexed, 3 | `/sitemap.xml`, `/ClearDisk.dmg?source=guides`, `/faq/backups-cloud-photos` | The first two are non-article resources. Review the FAQ's distinct usefulness and links; inspect its current Google-selected canonical before changing it. |
| Discovered, not indexed, 3 | `/icloud-drive-stuck-uploading-mac`, `/mac-storage-full`, `/not-enough-space-to-update-macos` | All are live 200, indexable, in the sitemap and linked. Review current URL Inspection and editorial quality; this report alone does not prove a crawl-budget or technical failure. |

Manual actions and Security issues both report **No issues detected**. Core Web Vitals has **No data** for mobile and desktop. Breadcrumbs shows **8 valid, 0 invalid** items in Google's processed data; that does not validate every newly published page.

**Prioritized findings**

“Fail” below identifies an observed gap against the named check, not a Google penalty. “Unverified” is not a failed test.

| Priority / check | URL or source | Observed evidence | Impact and exact next action | Status |
| --- | --- | --- | --- | --- |
| P1 — HTTPS normalization | `http://cleardisk.app/guides?source=audit` | Direct GET and independent `curl -I` return **200**, with an HTTPS canonical but no redirect. | Configure a permanent redirect to the same HTTPS path and query. Verify homepage, guide, and query-string cases; do not rely on browser HTTPS upgrades alone. | **Fail** |
| P1 — www reachability | `https://www.cleardisk.app/guides` | DNS fails locally; Cloudflare resolver `1.1.1.1` returns **NXDOMAIN**. | Configure the www hostname and TLS, then a path/query-preserving 301/308 to `https://cleardisk.app`. This avoids a dead end for typed/shared www links. | **Fail** |
| P1 — release/license consistency | `/pricing`, `/buy-now`, `/terms`, `/about`, `/support`, home, `/faq/cleardisk` | Download offers **2.0.0**, while purchase/terms describe **1.0**, pricing names **1.1**, and copy promises only **1.x** updates. | Confirm the major-version upgrade policy, then align the shared offer and all cited pages with the current release. Preserve price, three-Mac limit and refund terms unless explicitly changed. Files: `app/pricing/page.tsx:58`, `app/buy-now/page.tsx:32`, `app/terms/page.tsx:16`, `lib/faqs.ts:431`. | **Fail** |
| P1 — network/privacy accuracy | `/about`, `/faq/cleardisk`, `/privacy` | About and FAQ say activation is the app's only network request. The released app has Sparkle updates (`../Sources/ClearDiskApp/AppUpdater.swift`) and Download describes them. | Describe local file scanning separately from license requests, update-feed checks and update downloads. Add verified updater data handling to Privacy. Do not invent provider-log retention. `app/about/page.tsx:39`, `lib/faqs.ts:444`. | **Fail** |
| P2 — unsupported size claim | Home FAQ, `app/page.tsx:44` | A group including Trash, installers, backups and caches is described as “Each is usually 5 to 20 GB,” without a measurement basis. | Remove the blanket size assertion; tell readers to measure their own files, preserve needed backups and review Trash before emptying. Audit the new short FAQ answers for lost qualifications. | **Fail** |
| P2 — contextual discovery | 25 of 152 guide URLs; list below | No incoming main-content link outside `/guides`, `/blog`, `/faq`; all are reachable from the guide listing. | Add a relevant link from an existing adjacent guide where it answers the reader's next question. These are underconnected pages, **not true orphans**. | **Fail** |
| Core public indexing checks | Sitemap, robots and public HTML | All 171 sitemap URLs return 200, allow indexing and expose canonical metadata. Initial HTML contains the article text. | Preserve the existing stack and URLs. Robots allows the public site and disallows `/api/`. No migration or mass sitemap resubmission is justified. | **Pass** |
| Canonical variants and errors | `/guides/`, `/?utm_source=audit`, missing URLs, old `chatgpt.site` host | Trailing slash gives one 308; tracking query canonicalizes to root; missing routes give real 404; old hosting root requires authentication (401). | Preserve. Root `https://cleardisk.app` and `https://cleardisk.app/` are equivalent, not a canonical conflict. | **Pass** |
| Metadata, navigation and links | All crawled public HTML | No duplicate titles/descriptions found; existing checks pass H1/head/schema/related-link rules. Crawlable navigation and sitemap routes resolve. No missing `alt` attributes found on emitted images. | Preserve meaningful page-specific copy. Do not pad About, Pricing or Download to satisfy an arbitrary word quota. | **Pass** |
| Product download and demo | Home, `/download`, `/ClearDisk.dmg`, `/SHA256SUMS.txt` | Demo works with clearly labelled example data. Full DMG is 6,048,127 bytes and matches published SHA256. | Preserve. Actual installation, purchase and activation are outside this website audit's test coverage. QA download used `ClearDisk-QA`, excluded from metrics. | **Pass** |
| Private analytics | `/analytics`, `/api/analytics` | Anonymous requests receive 401 and noindex; authorized aggregate API works. | Retain authentication and existing exclusions. Do not expose the private dashboard to make it crawlable. | **Pass** |
| Visible trust pages | `/about`, `/support`, `/privacy`, `/terms` | Pages exist, link to a named operator and support mailbox, and describe actual site/payment flows. Privacy distinguishes local scans from website measurement. | Correct the specific contradictions above. Mail delivery, corporate details and full legal compliance were not independently certified. | **Pass** for availability |
| Schema syntax / breadcrumbs | Article templates and rendered cleaner guide | JSON-LD parses; rendered Article, BreadcrumbList, FAQPage and Organization match the source types. GSC reports no invalid breadcrumbs among processed items. | Preserve valid markup; run a fresh Rich Results Test when editing affected templates. Full external validator coverage remains unverified. | **Pass** for syntax |
| FAQ rich-result expectation | FAQPage on 160 fetched pages | Google discontinued FAQ rich results starting May 7, 2026. Existing FAQPage is not therefore invalid. | Keep useful visible answers. Stop treating mass FAQ schema additions as a route to Google's discontinued enhancement. [Google announcement](https://developers.google.com/search/updates#may-2026). | **Not applicable** |
| Software-app rich eligibility | Home and `/download` | SoftwareApplication has no genuine `review` or `aggregateRating`. Google requires one for this enhancement. | Keep truthful app metadata. Add a review only when a genuine, visible and policy-compliant review exists; no fabricated stars. This is not an indexing blocker. [Google requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app). | **Fail** for this enhancement |
| Performance / full accessibility | Home and guide templates | Narrow layout is readable without horizontal overflow; demo and mobile menu work. GSC CWV has no field data. Public PageSpeed API returned 429; no lab score obtained. | Run mobile/desktop lab checks when available; verify keyboard-only flows, contrast and screen-reader behavior. Optimize an observed slow path before changing caching/frameworks. | **Unverified** for CWV and full accessibility |
| AdSense | Site-wide | No display-ad implementation found; `ads.txt` is 404. Google Ads conversion measurement is separate from AdSense. | No AdSense changes needed for this product site. An ads.txt file would not establish approval. [Eligibility guidance](https://support.google.com/adsense/answer/9724?hl=en). | **Not applicable** |

The existing long-form guide library already addresses the owner's 19 keyword variants through six intent groups. There is no evidence here that creating a separate article for every spelling variant will help. Google recommends useful, original coverage rather than a preferred word count. [Helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

**Keyword and page priorities**

Numbers below are **observed GSC page metrics**, not monthly keyword volumes, for the date/filter range above. Priority is a recommendation combining current exposure, intent and a practical improvement; it is not a prediction of ranking speed.

| Priority | Query family / existing URL | Current signal | Specific improvement |
| --- | --- | --- | --- |
| 1 | Scratch-disk checks — `/photoshop-scratch-disk-full-mac` | 38 impressions; position 24.2. Exact query `how to check scratch disk space on mac`: 3 impressions, position 9.7. | Add an original annotated current-Photoshop screenshot showing the selected drive and free space. Put the short check path near the start; retain save-first cautions and the existing deeper steps. Link from creative/storage guides. |
| 2 | Xcode storage — `/clear-xcode-derived-data` | 18 impressions; position 11.5; no clicks. | Review snippet fit and add a clearly labelled measured example distinguishing rebuildable Derived Data from archives/source. Keep commands and version details current. |
| 3 | App container storage — `/containers-folder-mac` | 18 impressions; position 9.3; no clicks. | Put the direct “what it is / what not to delete” answer first and inspect the page-filtered query mix before rewriting its title. Avoid promising a safe blanket container deletion. |
| 4 | Growing System Data — `/system-data-keeps-growing` | 1 click / 4 impressions; position 10.0. | Preserve the URL and successful intent. Add a small repeat-measurement example and links to the actual underlying categories. |
| 5 | iCloud local copies — `/icloud-drive-taking-up-space-on-mac` | 21 impressions; position 41.8. Exact matching query: 18 impressions, position 44.9. | Strengthen the visual distinction between Remove Download and Delete; link the relevant iCloud Doctor workflow with its limits. |
| 6 | System Data explanation — `/what-is-system-data-on-mac` | 34 impressions; position 36.9. `what is system data in mac storage`: 2 impressions, position 51.5. | Keep explanation separate from `/clear-system-data-on-mac` cleanup intent; link to specific storage categories and an original scan example. |
| 7 | Checking storage — `/how-to-check-storage-on-mac` | 25 impressions; position 60.8. | Add a current macOS Storage screenshot and concise paths for current/older versions. Do not duplicate it for “view,” “find,” and “see.” |
| 8 | Brand/download — `/`, `/download` | Homepage 3 clicks / 31 impressions, position 6.6; Download 11 impressions, position 4.7. | Resolve release/privacy contradictions first; keep download and pricing easy to reach. |
| Later | CleanMyMac/general cleanup — `/blog/how-should-i-clean-my-mac`; AppCleaner — `/blog/appcleaner-os-x`; tool selection — `/best-free-mac-cleaner` | Owner's US screenshot estimates include 27.1K, 22.2K, 14.8K and 9.9K variants; not independently refreshed. | Keep the existing distinct intent pages, maker disclosure and compatibility details. Brand searches may want the competitor directly; do not add volumes across near-duplicates or forecast conversions from them. |
| Later | Uninstalling apps — `/uninstall-apps-on-mac`; space recovery — `/free-up-space-on-mac`; cleanup — `/clear-system-data-on-mac` | Owner's screenshot includes 8.1K and 5.4K/4.4K variants. Actual GSC query exposure is currently sparse. | Maintain these supporting guides and links. Expand only where observed questions reveal a distinct missing answer. |

The prior row-by-row map remains in `docs/seo/2026-09-26-keyword-coverage.csv`; it is historical third-party demand evidence, not current Google ranking data.

**Observed Google results and questions**

One actual Google search was inspected for `how to check scratch disk space on mac` with `hl=en`, `gl=us`, `pws=0` on September 27. The browser was signed in and located in India; requested US parameters do not make this a neutral US rank check. No exact ranking claim is inferred from this observation.

The result page included an AI Overview, People also ask, video results, Apple Community, Reddit, Adobe and MacPaw. These features compete for clicks, so position alone is insufficient. Adobe's own page gives a compact settings path and drive-priority instructions; MacPaw presents a broader ten-method cleanup article. ClearDisk's existing guide already covers the core procedure. Its useful differentiation would be an original, current annotated example and a clear local-drive versus cloud-storage explanation, not more generic paragraphs. [Adobe's instructions](https://helpx.adobe.com/photoshop/desktop/troubleshoot/troubleshoot-tools-resources/set-up-and-manage-scratch-disks.html), [MacPaw's article](https://macpaw.com/how-to/clear-your-scratch-disk).

| Sourced question / wording | Evidence | Existing destination |
| --- | --- | --- |
| Why is my scratch disk full on my Mac? | Google People also ask, observed September 27; no volume measured | Photoshop guide, existing explanation; sharpen the opening answer |
| How to clean up a scratch disk on Mac? | Same observed PAA; no volume measured | Photoshop guide's safe space-recovery section |
| How do I clear scratch disk space? | Same observed PAA; no volume measured | Same guide; no new spelling-variant page |
| What should I check if I see a scratch disk warning in Photoshop? | Actual GSC query: 2 impressions, position 11.0 | Photoshop guide; concise checklist with current source and screenshot |
| iCloud Drive taking up space on Mac | Actual GSC query: 18 impressions | Existing iCloud guide |
| How do I delete downloads on my Mac? | Actual GSC query: 4 impressions, position 81.3 | Existing `/clear-downloads-folder-mac` guide |

No new page is required by these observations. Any added technical instructions should be checked against current vendor guidance; an AI Overview or forum answer is question-discovery evidence, not technical authority. [Apple's storage guidance](https://support.apple.com/en-us/102624) is the baseline for general Mac cleanup.

**Internal links and authority**

The 25 underconnected guides are:

`change-screenshot-location-mac`, `clear-cargo-cache-mac`, `clear-cocoapods-cache-mac`, `clear-yarn-pnpm-cache-mac`, `com-apple-bird-taking-space`, `disk-almost-full-notification-mac`, `documents-storage-on-mac`, `downloads-folder-missing-mac`, `find-duplicate-files-mac`, `ios-files-on-mac`, `list-disks-terminal-mac`, `mac-log-files`, `mac-storage-calculating`, `mds-stores-high-cpu-mac`, `other-storage-on-mac`, `photos-optimize-storage-not-working`, `pip-no-cache-dir`, `relocated-items-folder-mac`, `remove-background-items-mac`, `remove-language-files-mac`, `show-folder-sizes-finder-mac`, `sleepimage-file-mac`, `steam-games-storage-mac`, `uninstall-anaconda-mac`, `uninstall-rosetta-2-mac`.

Start with relevant pairs: System Data → iOS Files and logs; iCloud local storage → `com-apple-bird`; Photos library storage → Optimize Storage troubleshooting; npm cache → Yarn/pnpm cache. Keep contextual anchors descriptive. Do not add every guide to every footer.

GSC Links reports **183 external links, all to the homepage, from one reported site: bgclear.ai**. This is not 183 independent endorsements or a complete backlink census. The next authority work should be useful demonstrations shared with relevant Mac/developer/creative audiences and genuine editorial mentions. Prepare a Photoshop storage walkthrough or a developer-cache example that a creator can assess. No outreach was sent, no links purchased, and no disavow action is justified by this report.

**Analytics baseline and measurement limits**

Authorized aggregate API snapshot: **2026-09-26 23:05:41 UTC**. Window: August 28–September 26 UTC, with September 26 still partial.

| Counter | Observed total | Meaning |
| --- | ---: | --- |
| Website DMG requests | 63 / last 30 UTC days; 34 / last 7 | Full download requests, not unique people or installs; 38 Website, 18 Direct/unknown, 7 Guides |
| GitHub downloads | 2, cumulative separately | Never added to daily website totals |
| Arrival events | 31 in available window | Instrumentation began September 24; 25 Direct/unknown, 5 Other referral, 1 Google; QA visits may count |
| Transfer-finished events | 3 | New instrumentation; server handed off all bytes, not evidence of installation |
| Checkout sessions | 2 | Includes test mode, not completed payments |
| Live-session license records | 2, all time | Refunds not subtracted; not net revenue or organic attribution |

Do not divide 3 completions by 63 requests as a conversion rate: instrumentation windows differ. The current source labels cannot identify which individual guide led to a download or link an organic arrival to a purchase. If page-level optimization needs this later, add only a bounded public article identifier to aggregate events, without file names, personal identifiers or raw query strings, and update the disclosure accordingly.

**Missing facts and remaining verification**

- Owner confirmation of upgrade entitlement beyond 1.x, to make current purchase/terms copy accurate without promising future major upgrades.
- Updater request fields and applicable provider-log retention before extending privacy disclosures. Support email delivery was not tested; no message was sent.
- A working PageSpeed/Lighthouse run and enough CrUX data for field CWV. Missing data is not a failed performance result. Full keyboard/contrast/screen-reader and regional consent checks remain unverified.
- Current Cloudflare deployment ID; the live HTTP/browser evidence above is independently verified. The audit does not need deployment credentials to reach its conclusions.
- Fresh URL Inspection for the four excluded content URLs and a later indexing report covering the expanded library. Search Console access itself is now confirmed; old ledger statements that access was unavailable are superseded for this audit.
- Genuine user reviews for optional software-app rich results. No rating, testimonial, author credential, search volume or business fact was invented.

**Next actions and review dates**

1. First implementation batch: HTTPS/www redirects; product-version/privacy copy after policy confirmation; remove unsupported size claims. Validate production responses and buyer-facing copy.
2. Next content batch: improve Photoshop, Xcode and container guides with useful original evidence; add the relevant contextual links. Review the four excluded content URLs without changing their established addresses solely to trigger a recrawl.
3. Weekly: compare equal completed GSC date windows, separate brand/non-brand and country/device, review query/page pairs and report lag. Track aggregate downloads with the documented limits; exclude verification traffic.
4. **October 27 (30 days):** recheck discovery, the four content exclusions, redirects and actual download functionality. **November 26 (60 days):** compare page/query trends and revise pages that earn impressions but fail to answer the query well. **December 26 (90 days):** decide whether a distinct new topic is warranted based on search and usage evidence. These are review dates, not ranking deadlines; no new automation was created.

Talivia remains paused. Existing design, app release, payment mode, licenses and protected analytics were preserved.

## SEO fixes and Google connection — 27 September 2026

Owner authorized implementation after the live-site audit. Prepared consent-based GA4 page visits and download-click tracking, corrected release/privacy copy for the existing 2.0.0 app and $10 license, removed an unsupported recovery-size claim, added 25 relevant incoming related-guide links, and excluded the DMG/checksum from search indexing. The 152-guide registry now has no guide without a contextual incoming related-guide link. Existing 1.x license entitlement is retained; 2.0.0 compatibility is confirmed by the shipped license implementation, with no promise about future major releases. No payment, license code, app binary, new dependency or article URL changed.

Google setup is complete under anilgautamwork@gmail.com: existing BG Clear account 370327929, new ClearDisk property 556076456, stream 15851243548, measurement ID G-J00KPHWBCN. India reporting timezone, USD currency, enhanced measurement disabled, Google Signals off, two-month user/event retention and reset-on-activity off. Connected the existing verified https://cleardisk.app/ Search Console property; preserved its verification tag and successful 171-URL sitemap. Website events are manual, public-route-only and stripped of query/fragment data. No email, key, checkout session or Mac file content is sent. Existing Google Ads purchase measurement retains separate opt-in. Previous Ads-only consent is not reused as Analytics consent. Localhost and preview hosts do not load Google tags.

Cloudflare changes already verified live: Always Use HTTPS; proxied www CNAME to cleardisk.app; active 301 redirect aab99c5b9ccc40a794806afa4f370545 from *://www.cleardisk.app/* to https://cleardisk.app/${2}, preserving queries. Existing personal-account Worker and secrets preserved. Refreshed Wrangler's existing access with reduced deployment scopes. The zone has no incoming mail records, so hello@cleardisk.app may bounce; an inbox destination question is pending before configuring forwarding.

Validation before publication: all 53 unit tests, typecheck, lint, production build and 176 local HTTP SEO checks pass; desktop and 390px consent controls reviewed, Decline and Analytics only close the banner and Privacy settings reopens it. No narrow overflow or Google script on local preview. Used the existing consent UI and privacy policy; no new analytics framework. Sources: Google manual page views, SPA measurement, Consent Mode and gtag reference, plus actual Analytics/Search Console/Cloudflare UI. Publication and live receipt verification are recorded below once complete; Google indexing remains separate from deployment.

**Publication verified.** Source c3574ac is pushed to main and deployed to the existing personal-account Worker as 56fa6fa1-ebc5-44ea-bd6c-a528b0313bde. All 176 live HTML SEO checks pass. HTTPS and www variants redirect 301 to the canonical HTTPS path with queries retained. Live release/privacy copy is current, sitemap still has 171 URLs, DMG and SHA256SUMS have noindex headers, and /analytics plus /api/analytics still return anonymous 401 with private/no-store and noindex headers. Public DMG is unchanged at 6,048,127 bytes, SHA256 375d29ab6f6586aff751389acdfbd165bf88e2f15594e0aaec81b45029be1903. Verification used HEAD or ClearDisk-QA and did not increase download counters. A stale local Wrangler asset manifest after a rebuild initially returned 404 for the DMG; restarting the preview fixed it, and the clean 176-route run passed before deployment.

**Google receipt verified.** The live site loads no Google script before consent. Selecting Analytics only loaded G-J00KPHWBCN; GA Realtime then displayed one test user and two page_view events, with / and /guides each showing one view after client-side navigation. These are QA events, not new customer traffic. Enhanced measurement remains off; no test download click or purchase was fabricated. Existing private counts at 2026-09-26T23:46:48.597Z: 63 website download requests/30 days, 34/7 days, 33 arrivals (including QA), 3 finished transfers, 2 checkout sessions, 2 all-time live-session license records; GitHub 2 separately. Different windows and test-inclusive counters do not establish unique users, installs or revenue.

**Discovery follow-up.** Search Console URL Inspection accepted indexing requests for https://cleardisk.app/mac-storage-full, https://cleardisk.app/not-enough-space-to-update-macos, https://cleardisk.app/icloud-drive-stuck-uploading-mac and https://cleardisk.app/faq/backups-cloud-photos. Each completed with “Indexing requested” and priority crawl queue confirmation. The first three were reported unknown to Google; the FAQ was crawled but not indexed (last crawl September 8, fetch/indexing allowed, self-canonical). Acceptance is not indexing or a ranking guarantee. The last aggregate indexing report still shows 65 indexed / 11 excluded. IndexNow separately accepted all 171 sitemap URLs (HTTP 200); it does not submit to Google.

Remaining: support-email forwarding needs the owner's destination choice; current MX absence is not fixed or claimed fixed. No field CWV data or fresh paid keyword-volume evidence exists. Improve original visual evidence in priority guides and reassess actual Google indexing/query trends in the existing campaign; do not invent reviews, volumes or results. No external outreach, payment change, new recurring task or Talivia activation.
