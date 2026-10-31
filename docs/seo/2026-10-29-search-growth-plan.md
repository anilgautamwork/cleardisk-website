# Search demand and indexing evidence — October 29, recorded October 31, 2026

The October 29 investigation was interrupted before its documentation could be saved. This record preserves those observations; they are not fresh October 31 Search Console measurements.

## Indexing and traffic

Authenticated Web performance, complete October 19–25 versus October 12–18: **65 versus 250 impressions; 1 click each**. Average position 30.6 versus 37.3 is not recovery evidence because the query mix changed. The external-drive guide had 15 versus 30 impressions; home had 9 versus 5.

The October 23 indexing report showed **88 indexed, 95 excluded**. Its overview listed 86 crawled-currently-not-indexed, 2 discovered-currently-not-indexed, 2 noindex, 2 not found, 2 alternate canonical and 1 soft 404. The owner's drilldown screenshot showed 82 examples in the crawled category. Preserve the discrepancy rather than claiming an additional daily loss. Historical October 16 report: 169 indexed and 13 excluded.

| Sample | Last crawl displayed | Fetch | Crawl/indexing allowed | Canonical | Index state |
| --- | --- | --- | --- | --- | --- |
| /features | Oct 22, 11:19:22 | Successful | Yes / Yes | Self; Google-selected inspected URL | Crawled, currently not indexed |
| /guides | Oct 23, 21:44:26 | Successful | Yes / Yes | Self; Google-selected inspected URL | Crawled, currently not indexed |
| /library-caches-folder-mac | Oct 19, 19:24:40 | Successful | Yes / Yes | Self; Google-selected inspected URL | Crawled, currently not indexed |

Times are as displayed by Search Console. All three used Googlebot smartphone. The live /guides test on October 29, displayed 09:21, reported URL available to Google and page can be indexed. Tested HTML contained index/follow and a self-canonical; Google's smartphone screenshot rendered the real hub. Historical crawled bodies were unavailable. These findings establish sample availability and exclusion, not a technical all-clear for every historical request or a cause for Google's decision.

No referring sitemaps detected appeared in the samples; the caches page also listed /sitemap.xml as a referring page. This field alone does not establish that the sitemap is missing. No new sitemap-submission, manual-action/security or complete crawler-log review was finished. Earlier observations remain historical.

Google says a crawled page may or may not be indexed later and need not be resubmitted for crawling. This status does not establish a spam penalty. September's rapid expansion from 52 to 152 guides, overlapping subjects and sparse visible firsthand evidence remain review priorities, not proven causes. Do not remove pages solely because they are excluded. The October 18 delivery fix addressed verified Worker CPU-limit failures; successful sample crawls after that date do not establish whether those earlier failures contributed to later index loss.

Primary guidance checked October 29:
- https://support.google.com/webmasters/answer/7440203?hl=en
- https://support.google.com/webmasters/answer/9012289?hl=en
- https://developers.google.com/search/docs/essentials/spam-policies

## Actual keyword research

Used the owner's Query Mine connector at /Users/mac/hdcopy/personal/google-auto-complete: validateAds in google-ads.mjs, local transport, US, English, Google Search. Retrieval October 28 21:33 UTC / October 29 IST; historical months Oct 2025–Sep 2026. No campaign or spend created. [Sanitized raw metrics](evidence/2026-10-29-keyword-planner.json).

| Query | Average monthly searches | Existing coverage |
| --- | ---: | --- |
| how to clear cache on mac | 22,200 | /clear-cache-on-mac |
| why is my mac so slow | 5,400 | /mac-running-slow-low-storage |
| mac running slow | 1,300 | Same slow-Mac intent |
| external hard drive not showing up mac | 1,000 | /external-hard-drive-not-showing-up-mac |
| free up space on mac | 1,000 | Existing storage cluster |
| disk space analyzer mac | 880 | /disk-space-analyzer-mac |
| clear system data on mac | 390 | Existing System Data cluster |
| best free mac cleaner | 320 | Existing comparison |
| mac memory pressure | 140 | Existing memory coverage |
| windowserver high cpu | 40 | Existing process guide |

Close variants may overlap; do not sum their volumes. These estimates do not predict our traffic. Query Mine competition is advertiser competition, not organic difficulty. The menu-bar CPU/memory query returned null, not zero. AppCleaner has 5,400 estimated searches but substantial branded/navigation intent. Public search research verified broad intent, not controlled Google positions.

## Prepared changes and checks

Improved and retained /clear-cache-on-mac: symptom-based cache selection, exact Chrome data choices, distinction between cache/cookies/download lists/files, expected rebuilding, follow-up and cleanup limitations. Improved and retained /mac-running-slow-low-storage: one-app versus memory/storage/network checks, current Why Slow and menu-bar scope, comparison worksheet and support escalation. Updated /about for included performance tools and explicit maker/source/test disclosure. Humanizer applied without invented personal experience or screenshots. No new articles, removal, noindex, redirects or backend changes.

Technical sources checked October 29:
- https://support.google.com/chrome/answer/2392709?co=GENIE.Platform%3DDesktop&hl=en
- https://support.apple.com/en-gb/guide/safari/sfri11471/mac
- https://support.apple.com/guide/mac-help/if-your-mac-runs-slowly-mchlp1731/mac
- https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac
- https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac

Safari Advanced retrieval was incomplete; no firsthand browser cleanup or benchmark is claimed. ClearDisk claims were checked against current 2.2.1 source and released website.

Prepared batch validation from October 29–30: **58 unit tests passed, 0 failed/skipped/cancelled/todo**, lint/typecheck passed; production build generated 177 HTML/RSC pairs; all 180 local HTTP SEO checks passed. Final diff checked for unchanged route/anchor identity, links and cleanup limits. Main was 09190f366f9e347934162d8fafa7c8a9f240d783; production Worker 2b60a544-d893-4b3e-87d1-dce6bb55dfa2.

**Unpublished.** The browser permission gate denied localhost:3115. Required desktop/narrow visual checks remain incomplete. The pending request to allow the preview has no user answer. A later filesystem/network permission change is not treated as approval to bypass that browser denial. No commit, push or deployment for these source edits. Preserve the unrelated September 27 audit edit and .impeccable directory. Resume visual review only with authorization, then publish and verify live delivery, sitemap, release and private analytics. No indexing recovery claim.

## Goal and next work

Working interpretation of the owner's mixed metric request: 100 Google Web impressions/day, measured as at least 700 in each of two consecutive complete seven-day windows. This is distinct from 100 pageviews/day; neither is guaranteed. Improve up to two substantive pieces each Monday, fewer when no justified gap exists. Prefer existing pages and actual account queries. Reassess after four weekly cycles without progress rather than expanding page count automatically.

Existing Monday schedule remains active at 11:00 Asia/Kolkata. Its attempted target/Query Mine workflow update failed with 'MCP tool call requires approval, but approval policy is never'; the new instructions were not saved. Do not bypass the automation tool by editing its TOML. Daily recovery schedule unchanged.

Next: finish pending checks; inspect sitemap submission and current manual/security state; review external-drive diagnosis and compare overlapping cache/System Data intent using excluded URL/query evidence. Keep /features, /guides and /library-caches-folder-mac while investigating. Rosetta remains queued from earlier loss evidence; broad size claims need verification. No batch consolidation without owner approval. Next weekly GSC review November 1; Monday selection November 2.
