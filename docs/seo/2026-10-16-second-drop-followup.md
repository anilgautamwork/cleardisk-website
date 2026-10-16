# October 16: second-drop investigation and two guide corrections

## What the evidence supports

The owner requested a deeper check after the daily review. Search Console now displays October 14 with 20 impressions and October 15 with 18, both with zero clicks. October 12/13 remain 39/34. These recent rows can still be revised; this follow-up does not replace the complete seven-day comparison in the earlier measurement report with a mixed-length comparison. Saved [daily evidence](evidence/2026-10-16-followup-gsc-days.json).

The October 12 Page indexing report shows 166 indexed and 16 not indexed. The two noindex examples are transactional /recover and /buy-now; the single soft-404 example is /SHA256SUMS.txt, last crawled September 10. No guide appeared in those two exception categories. The report is delayed and does not prove every page's current status. [Report observation](evidence/2026-10-16-followup-indexing.txt).

Inspected the largest-loss page, /homebrew-list-installed-packages. Google reports it is indexed, discovered through the sitemap, successfully fetched by smartphone Googlebot on October 14 at 11:02:07 as displayed in the interface, with crawling/indexing allowed and the inspected URL selected as canonical. No new indexing request was made. This is evidence against an access or canonical failure for that page, not a guarantee of ranking. [Inspection evidence](evidence/2026-10-16-homebrew-inspection.txt).

Earlier today, manual-action and security reports showed no issues, the crawl host report showed no problems, and the 49 other-4XX requests were unchanged, with displayed examples dating to September 27. Those checks are retained; no fresh Cloudflare event attribution is claimed.

The official [Google Search status dashboard](https://status.search.google.com/) showed no incident for October 9–16. Its [history](https://status.search.google.com/summary) confirms the September spam update started September 24 and lasted 13 days, 16 hours. The [Search Console anomalies page](https://support.google.com/webmasters/answer/6211453) lists no October Web-performance logging issue. None of these sources proves an algorithmic cause for this site. Google's [traffic-drop guidance](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) calls for distinguishing ranking, indexing, technical and reporting causes and assessing affected content.

## Deployment correlation

Authenticated Wrangler history confirms:

- October 11 13:42:34 UTC: Worker 677fde1d-888d-47c8-970d-c6fa4400836b, Steam save-backup and size guidance; source 3b647d4.
- October 12 10:10:16 UTC: Worker e5a37e1a-2836-40b6-988e-63ae4cfb1858, Library Caches guidance; source 5695d03.
- October 13 10:01:18 UTC: Worker 81a6ae12-28af-44fe-b7a1-f243694383a3, System Data explanation; source 3b83d9a.

The source range around the second drop changes those article records and review documents, not shared routing, robots, canonical configuration, authentication or payment code. The October 12 deployment occurred during the first low day, but daily aggregates do not establish whether the drop preceded it. A content-only diff and today's healthy checks cannot rule out a transient historical serving problem. There is no evidence justifying a blind rollback or removal of useful pages.

Working conclusion: search visibility remains unstable; no specific technical cause or penalty has been established. Ranking/content reassessment is a plausible hypothesis, not a confirmed diagnosis. Continue factual improvements and weekly complete-window review, and investigate timestamp-matched errors if new crawler failures appear. Do not promise recovery or disable security protections.

## Corrections made

Disposition **improved and retained**:

1. /move-files-to-trash-terminal-mac: exact Apple binary, quoted paths with ./, read-only inspection before a move, immediate exit-status check, partial-batch behavior and no rollback promise. Replaced blanket privacy-permission advice with Finder inspection. Replaced the older-system automation example with a reveal-only open -R fallback, while preserving the old section anchor. Added restoration limits, automatic removal and the iCloud 30-day exception, plus the difference between cloud deletion and Remove Download. No automatic install, sudo escalation or permanent-deletion fallback.
2. /purge-command-mac-memory: narrowed the memory claim to the manual's anonymous-allocation exclusion; removed unmeasured “few minutes”/counter promises, the runnable sudo purge recommendation, “green means nothing wrong” and “restart clears everything” assurances. Added workload-based diagnosis, recognizable-app limits and explicit absence of a purge benchmark. Kept RAM, purgeable memory and disk storage distinct.

Both URLs, published dates, existing section anchors, related links and the established design remain. Only these two editorial dates advance to October 16. No new article, noindex, removal or redirect; no app, Stripe/license or analytics behavior change. The next daily review should take /mac-log-files, with /uninstall-node-js-mac next; Homebrew size-command edge cases remain queued. Do not repeat these two completed edits tomorrow.

## Sources and test limits

Read October 16:

- Installed macOS 27.0.1 man trash and man purge. trash documents macOS 15 availability and -s stop-on-error; purge describes cold-buffer-cache testing and excludes anonymous allocations.
- [Apple file deletion and restoration](https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac): Finder recovery, automatic removal, iCloud Drive expiry.
- [Homebrew trash formula](https://formulae.brew.sh/formula/trash): separate, keg-only tool. No package installed or third-party flags tested.
- [Apple Activity Monitor memory](https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac) and [memory pressure](https://support.apple.com/guide/activity-monitor/check-if-your-mac-needs-more-ram-actmntr34865/mac): cached file data, swap and workload context. First page redirected to the macOS 26 regional guide; the pressure page showed macOS 27.
- [Apple's archived purgeable-memory documentation](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/ManagingMemory/Articles/CachingandPurgeableMemory.html): conceptual distinction, explicitly an archive.

A disposable fixture in /private/tmp tested /usr/bin/trash -v -s with a missing first path and an existing second file. It returned status 5 and preserved the second file. [Sanitized evidence](evidence/2026-10-16-trash-checks.json). No successful move, Put Back, external disk or older-macOS test is claimed. No real user files removed, no permission changes, no purge command run. Humanizer used for plain factual copy; no fabricated personal author or benchmark. Impeccable context/readability check preserved the existing article surface.

## Validation

Final full unit suite: **55 passed, zero failed/skipped/cancelled**. Lint, typecheck and Cloudflare production build passed. All **177 local HTTP SEO route checks passed**. Existing Vite configuration/module deprecation warnings remain; no build errors. The sandbox preview initially could not write Wrangler logs or bind loopback; the authorized preview succeeded. Desktop 1440px and narrow 390px inspection passed for both articles. Code scroll stays inside its block and no horizontal page overflow was observed. Mechanical design detector returned no findings. Final review covered missing/partial paths, shell quoting, immediate status capture, privacy scope, cold-cache claims, iCloud removal limits and schema/visible-copy consistency. Publication verification follows after deployment.


### October 16 follow-up publication verified

Source **94b411a**, pushed to main and deployed to existing Worker **30ef2aa2-0323-45fa-a222-d514a2cab9cd**. Both live guide routes return 200 with the revised copy and October 16 sitemap dates. **177 live HTTP SEO route checks passed**; sitemap remains 172 URLs. Download, DMG HEAD and appcast return 200; release remains 2.1.0. Anonymous analytics/API return 401 with no-store/noindex. Verification uses QA/HEAD requests to avoid counted downloads. Final full local suite 55 passed, zero failed/skipped, plus lint/typecheck/build, 177 local HTTP checks and desktop/narrow review. No indexing request, ranking recovery claim or further sitewide change. Review records pushed; unrelated audit edit preserved. Next daily content review: Mac logs, then Node.js uninstall.
