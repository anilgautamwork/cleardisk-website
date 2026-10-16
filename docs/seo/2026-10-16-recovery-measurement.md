# October 16 recovery measurement

## Finding: a rebound followed by another drop

Read directly in Google Search Console under the owner's work account on October 16. HTTPS URL-prefix property `https://cleardisk.app/`, Web search, all countries/devices, no query filter. The latest complete reporting date was October 13; the interface said last update three hours ago. These are measured data, not keyword-volume estimates.

| Metric | September 27–October 3 | October 7–13 |
| --- | ---: | ---: |
| Impressions | 5,747 | 5,952 |
| Clicks | 34 | 40 |
| CTR (rounded by GSC) | 0.6% | 0.7% |
| Average position | 9.8 | 10.9 |

Both windows contain seven complete days. Impressions increased 205 (3.6%) and clicks six (17.6%), but the daily rows rule out describing this as sustained recovery:

| Date | Impressions | Clicks |
| --- | ---: | ---: |
| October 7 | 29 | 0 |
| October 8 | 861 | 5 |
| October 9 | 1,753 | 15 |
| October 10 | 1,627 | 12 |
| October 11 | 1,609 | 8 |
| October 12 | 39 | 0 |
| October 13 | 34 | 0 |

The four-day rebound accounts for almost all of the week's visibility. The later two days remain low. This establishes volatility, not its cause. It does not confirm a spam-update penalty, a content-volume threshold, a deployment fault or a benefit from our edits. The October 14/15 article changes and October 16 press kit are outside this reporting window. The prior three-day investigation remains historical evidence, not a directly comparable weekly baseline.

## Refreshed page queue

All 153 visible page rows were read, with 250 rows per page selected. By impressions, 62 pages fell, 84 rose and seven were unchanged. Page and property totals have different aggregation rules; do not sum page rows and present that as the property total. This ranking is a work queue, not a claim that 15 pages were deeply audited today.

| Priority | Page | Impressions before → after | Lost | Clicks before → after | Disposition / next action |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | /homebrew-list-installed-packages | 654 → 212 | 442 | 0 → 0 | Kept after limited source spot-check; October 8 corrections retained. Queue size-command empty/failed-path edge cases. |
| 2 | /what-is-system-data-on-mac | 237 → 72 | 165 | 0 → 1 | Keep October 13 correction; this window does not measure its later performance. |
| 3 | /operation-not-permitted-terminal-mac | 364 → 239 | 125 | 3 → 0 | Keep October 9 correction; monitor and revisit only for a concrete gap. |
| 4 | /move-files-to-trash-terminal-mac | 126 → 11 | 115 | 1 → 0 | Next deep review October 17: command availability, quoting, recoverability and failure paths. |
| 5 | /purge-command-mac-memory | 102 → 1 | 101 | 0 → 0 | Next after Trash: distinguish RAM from disk cleanup; check pressure/purge safety claims. |
| 6 | /application-support-folder-mac | 172 → 103 | 69 | 0 → 0 | Keep October 14 correction; published after the measurement window. |
| 7 | /free-command-on-mac | 120 → 53 | 67 | 0 → 1 | Keep October 15 correction; published after the measurement window. |
| 8 | /mac-log-files | 77 → 14 | 63 | 0 → 0 | Queued: app-managed cleanup, measurement limits and blanket-removal advice. |
| 9 | /library-caches-folder-mac | 154 → 100 | 54 | 0 → 0 | Keep October 12 correction; window includes publication day and one following day. |
| 10 | /clear-downloads-folder-mac | 93 → 42 | 51 | 0 → 0 | Queued: originals, recoverability and synced locations. |
| 11 | /keep-icloud-files-downloaded-mac | 95 → 46 | 49 | 0 → 0 | Queued: local copies versus cloud deletion, availability and space limits. |
| 12 | /uninstall-node-js-mac | 101 → 57 | 44 | 0 → 0 | Queued: installation methods, dependencies and blanket deletion. |
| 13 | /mac-folder-structure-explained | 51 → 8 | 43 | 0 → 0 | Queued: system/user boundaries and overlapping intent. |
| 14 | /steam-games-storage-mac | 325 → 285 | 40 | 0 → 2 | Keep October 11 correction; two clicks in the later window. |
| 15 | /purgeable-space-on-mac | 65 → 25 | 40 | 0 → 0 | Queued: available versus purgeable storage; avoid forced-cleanup promises. |

The private-var-folders guide increased from 121 to 148 impressions (one click in both windows); the Photos library guide increased from 100 to 143 (two clicks in both). Homebrew uninstall still lost impressions, 108 → 83, but is below the largest losses in this new window. Keep these pages; do not delete or noindex based on this comparison.

A limited visible-query spot-check found `cleardisk` at 25 → 7 impressions and 4 → 1 clicks; `what is system data on mac` at 32 → 13 impressions and 0 → 1 clicks; `com.apple.bird` at 0 → 10 impressions and 0 → 2 clicks. This was not a complete query export. Small brand-query counts cannot establish a sitewide penalty.

## Crawl and security checks

Manual actions and Security issues both show **No issues detected** on October 16. Settings shows a valid robots.txt and a Google Analytics association. Crawl stats updated October 14: 2,292 requests, 130 ms average response time, and “Host had no problems in the last 90 days.” HTTP 200 accounts for 96%; other 4XX 2%; 301 and 404 each below 1%.

The other-4XX drilldown still contains 49 requests, unchanged from the October 9 investigation. Its first ten displayed examples still date to September 27. No new 4XX recurrence was established here. Exact codes and Cloudflare security-event correlation remain unavailable in this check; unchanged totals and a healthy host summary do not prove every historical request succeeded. No Cloudflare protection was changed.

## Limited content review and sources

Kept `/homebrew-list-installed-packages` today after checking the existing October 8 corrections against the [official Homebrew manpage](https://docs.brew.sh/Manpage), read October 16: listing installed packages, formula/cask distinctions, and `leaves` semantics. Do not present leaves as a perfect record of explicit installs. The existing size examples deserve a later fixture review for an empty glob or a failed `brew --cellar`/`brew --caskroom` substitution. That follow-up is not claimed fixed or tested today. No cleanup commands were run, no personal files touched and no new screenshots or firsthand results invented.

Used the installed Humanizer skill for concrete, factual review notes; no personal voice profile or authorship claim. No public article changes, new articles, removals, noindex or redirects today. Next deep review: October 17, Trash from Terminal, followed by the purge-command guide. Next complete-window comparison: October 23, using the latest complete data and checking daily rows within the window.

## Aggregate product events

Private analytics observed at 2026-10-16T10:07:22.800Z: September 17–October 16 includes the current partial UTC day. 56 download requests over those 30 dates (three October 10–16), 360 arrival events (78 October 10–16), 16 finished-transfer events (zero October 10–16), seven checkout sessions (zero October 10–16), four all-time license records, and two separate cumulative GitHub downloads. These are events/records, not unique people, installs, sales or organic conversions. Arrival counts may include QA, checkouts include test mode and license records are not refund-adjusted. Credentials and raw country/source breakdowns are not committed.

## Evidence and verification

- [Page comparison rows](evidence/2026-10-16-gsc-pages.json)
- [Daily rows](evidence/2026-10-16-gsc-days.json)
- [Crawl/security observation](evidence/2026-10-16-gsc-health.json)

Documentation-only review. No application code or tests changed, so unit/lint/typecheck/build and visual checks were not rerun for these notes. The separate earlier October 16 press release recorded 55 unit tests passed, zero skipped, and its other checks; those are not new test results for this review. Live HTTP SEO verification result is recorded below after completion. No new deployment or Google indexing request. Production remains the separately verified press-kit Worker a52686de-5c79-4f6f-8159-276bbd9aad8a, with app 2.1.0, existing Stripe/license and private analytics unchanged. Preserve the unrelated audit-document edit and .impeccable directory.

October 16 live verification: **177 HTTP SEO route checks passed**, including metadata/schema, related links, 404, sitemap, robots, DMG and OG image. Anonymous /analytics and /api/analytics return 401 with no-store/noindex; appcast returns 200 and remains 2.1.0. The first sandbox HTTP run failed at DNS resolution (ENOTFOUND); the authorized network-enabled rerun passed. Verification used ClearDisk-QA/HEAD handling to avoid counted download events. Evidence arithmetic checked against the daily and page tables; final documentation diff reviewed, git diff --check passed. No code/test changes, new deployment or indexing claim.
