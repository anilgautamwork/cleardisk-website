# ClearDisk organic traffic investigation — 9 October 2026

## Assessment

The organic visibility drop is real. An algorithmic reassessment during the September spam update is plausible, but neither its cause nor a site-specific spam classification can be established from the available evidence. No current sitewide indexing blocker, spam-comment integration, manual action or security issue was found. The rapid September 24 content expansion and limited visible firsthand evidence deserve editorial review. Submitting a sitemap or publishing a particular number of articles is not, by itself, a violation.

Read-only investigation of the live website, Search Console under the owner's work account, deployment history and source history. No production change, page removal, new article, indexing request or backlink disavowal was made.

## Search Console observations

Unfiltered Web performance, displayed three-month report, available September 7–October 6, last update about 33 hours ago at inspection:

| Date | Impressions | Clicks |
| --- | ---: | ---: |
| September 30 | 901 | 4 |
| October 1 | 1,104 | 5 |
| October 2 | 1,418 | 12 |
| October 3 | 1,601 | 4 |
| October 4 | 242 | 0 |
| October 5 | 27 | 0 |
| October 6 | 55 | 0 |

Whole report: 6.63K impressions, 38 clicks, 0.6% CTR and average position 11.2. This verifies the reported daily collapse, but the short history and small click baseline limit attribution. October 7–8 performance was not available in this report. The owner's individual page before/after figures and daily disappearance of the brand query were not independently reproduced in this pass. An unchanged average position among surviving impressions does not prove a sitewide suppression mechanism.

Manual Actions and Security Issues both show “No issues detected.” This does not exclude algorithmic loss. Settings reports a verified owner, Analytics association and valid robots file. The property-added date is September 8; that is not evidence of the domain's registration date.

Crawl stats, last updated October 6: 1.88K requests, 125 ms average response, and “Host had no problems in the last 90 days.” Responses: 96% HTTP 200, 3% other 4XX, less than 1% 404 and less than 1% 301.

**Historical access caveat:** the other-4XX drilldown contains 49 requests. Its first ten examples are guide URLs on September 27, including /clear-lightroom-cache-mac, /chrome-on-device-ai-model-mac and /clear-pip-cache-mac. The Lightroom example says Discovery / Other agent type / Unknown (failed requests); it does not disclose the exact HTTP status or establish a smartphone Googlebot indexing failure. Those routes pass current HTTP checks. Previous local records also mention default Python user-agent 403 responses, but there is insufficient evidence to attribute these GSC failures to the same cause. Do not claim that historical crawler access was flawless. If failures recur, correlate timestamps with retained Cloudflare security events rather than disabling protection globally.

## Technical and deployment checks

Current production check passed all 176 HTML routes, metadata, structured data, related links, 404 behavior, sitemap, robots, DMG and OG image checks. Command: SITE_CHECK_ORIGIN=https://cleardisk.app SITE_CHECK_INDEXABLE=true npm run test:seo:http. Local run output: /tmp/cleardisk-audit-live-oct9.log.

Representative affected guides return 200, index/follow and self-referencing canonicals. Robots permits public pages and excludes /api/. HTTP and www variants preserve paths when redirecting to the canonical HTTPS host. HTML comments inspected were ordinary rendering separators; no spam comment text or comment platform was found in the inspected source. This is not a forensic audit of every historical response.

There were deployments around the loss, contrary to treating that question as settled:

| Source commit | Time in India | Change | Indexing blocker found? |
| --- | --- | --- | --- |
| 1e94b1c | October 4, 02:36 (October 3, 21:06 UTC) | FAQ/content improvements; Article JSON-LD identity fields; promotional OG image excluded from Article image unless an article figure exists | No robots, canonical, routing or Worker restriction added |
| 36a1ea1 | October 4, 03:30 (October 3, 22:00 UTC) | Version 2.1.0 release copy, download and appcast assets | No indexing restriction found |
| 56165cc | October 4, 15:16 (09:46 UTC) | WhySlow cross-promotion on footer/About and small styling change | No indexing restriction found |

Current source is e4151e1. Authenticated Cloudflare history confirms production version 73f33354-5ced-4088-8b85-14521fb85ddd, created October 8 at 10:10:23 UTC, for the Homebrew correction. The available evidence does not justify rolling back the release or restoring a promotional Article image as a traffic fix.

## What we actually published

The guide registry contains 152 guides plus two blog articles. Source history records **52 to 152 guides on September 24**, not an inferred September 22 publication date:

- 9882af2, 04:15 IST: four drive guides.
- a652174, 04:55 IST: 58 autocomplete-derived guides.
- 30f650c, 05:13 IST: 38 community-question guides.

The 100-guide expansion happened in roughly one hour of commits. Current sitemap: 171 URLs. Publishing dates, indexed counts and sitemap counts are different measurements and must not be conflated.

Only two of the 154 article records currently include embedded article figures: /find-large-files-on-mac and /mac-storage-not-updating-after-deleting-files. That does not prove all other articles lack tested advice, but visible original evidence is sparse relative to the library's size. Shared author attribution is “By ClearDisk,” with an Organization author. Organizational authorship is legitimate; a named reviewer should be added only when that person really reviewed the work.

An exact duplicate-paragraph check found no paragraph of at least 100 characters repeated across three or more guides. This does not clear semantic overlap or demonstrate originality. Definition, recurring-growth and urgent-cleanup pages can have genuinely different intents; do not merge them solely because their titles mention System Data.

One concrete correction candidate is /private-var-folders-mac: its cache-size command suppresses errors with 2>/dev/null and may conceal an incomplete measurement. Review the command, limitations and categorical cleanup wording against primary sources before editing. No command or deletion was run for this investigation.

## Backlinks and comments

Search Console reports 220 external links, with the homepage as the reported target:

| Linking site | Reported links |
| --- | ---: |
| bgclear.ai | 203 |
| reactioncheck.com | 12 |
| onlinenote.app | 5 |

Live homepage links checked show portfolio cross-promotion: BGClear's “Also made by us,” ReactionCheck's “From the team behind ClearDisk,” and OnlineNote's ClearDisk link. These are not 220 independent recommendations. No forum-comment or directory-spam domain appears in the displayed report; GSC's report is not exhaustive, and this is not a complete historical backlink audit.

Do not file a disavow merely because these links exist. Keep genuine portfolio relationships transparent and use natural branding; do not expand sitewide keyword-rich links as a ranking tactic. Independent reviews would provide evidence and reach that a publisher's own sites cannot substitute for. Existing outreach/community materials remain drafts; no external messages were sent.

## Prioritized next work

1. Focus remaining campaign work on existing-page quality and measurement; do not resume bulk article generation while investigating. No automation setting was changed today.
2. Audit the pages with the greatest lost impressions first, beginning with /operation-not-permitted-terminal-mac and /private-var-folders-mac. Add actual tested output, permission/error caveats, relevant screenshots and the tested macOS version. Do not fabricate experience or treat a Humanizer rewrite as a ranking remedy.
3. Map overlapping guides to actual query intent. Consolidate only where a stronger page fully answers the same need, using a relevant permanent redirect and updated internal links/sitemap. Keep useful distinct pages. Zero impressions or short length alone is insufficient grounds for noindex/removal.
4. Compare complete equal-length pre/post windows when newer GSC data arrives, segmented by page, query, country, device and search type. Check known high-loss URLs through URL Inspection. A few more low days would confirm persistence, not identify the algorithmic cause.
5. Investigate new crawl 4XX examples if they continue. Historical Cloudflare event retention may limit attribution; record that limitation instead of assuming a clean history.
6. Pursue real independent product reviews using the existing draft plan. No purchased links, automated comments or unauthorized community posting.

## Primary sources checked

- [Google Search Status Dashboard: September 2026 spam update](https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu): began September 24 and ended October 8. Google does not identify an official “phase three” here or name this site.
- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies): scaled content abuse concerns purpose and value, not a fixed article quota or a universal prohibition on AI assistance.
- [Google: spam updates](https://developers.google.com/search/docs/appearance/spam-updates): compliance and improvement can take time; recovery is not guaranteed on a specific date or only at the next named update.
- [Google: debugging search traffic drops](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops): consider technical, algorithmic and demand/reporting explanations and compare data before attributing cause.

## Validation and limits

Documentation-only changes today. The full live SEO check passed; no application code or test change was made, so no new unit-suite/lint run is claimed. The unrelated edit in docs/seo/2026-09-27-live-site-audit.md was preserved. No fresh download metrics were collected for this investigation. No paid research, new app release, payment/license change, Talivia change or public deployment.
