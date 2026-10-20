# Homebrew size-command review — October 20, 2026

## Scope and evidence

Improved and retained https://cleardisk.app/homebrew-list-installed-packages . Priority 1 in the October 16 queue: 654 → 212 impressions (442 lost), zero clicks in both complete September 27–October 3 / October 7–13 windows. This is a follow-up to the October 8 listing corrections, addressing the size-command failure cases explicitly queued October 16. No new article, removal, noindex or redirect. Next full Search Console comparison: October 23; no fresh ranking or indexing observation today.

Before editing, main matched origin/main at 80e5df6. Production was Worker 27e99b42-0254-494b-ab1e-a88ad73d3ac3. The pre-publication live HTTP suite passed 177 routes. No repeated 5XX was observed in that run; this finite check does not prove the historical search-loss cause or future stability. Unrelated audit edits and .impeccable remain untouched.

## Findings and changes

The former command appended /* to the output of brew --cellar or brew --caskroom. An empty or failed lookup could therefore select filesystem-root children. An empty folder could also cause an unmatched-glob failure, and piping through sort could hide du's failing exit status.

Replaced those commands with a complete subshell block that requires a successful Homebrew lookup, a nonempty existing directory and a path other than /. It uses macOS du -h -d 1 without a wildcard or sorting pipeline. Errors remain visible and unsuccessful scans remain unsuccessful. The subshell's exit does not close the reader's interactive Terminal. The Caskroom variant uses the same checks. Added expected empty-folder and parent-total results, partial-read limitations, Caskroom coverage limits and explicit recovery without sudo or expanded permissions. Kept package-dependency checks and the existing cache-guide link. Quoted the Brewfile home path explicitly for zsh/bash. FAQ and modified date updated; existing section anchors preserved.

Humanizer applied in embedded mode; existing neutral technical voice and layout retained. Impeccable scoped refinement and final detector found no design changes needed. No invented first-hand Homebrew cleanup, savings or product claim. No real package was removed or Brewfile written.

## Sources checked October 20

- https://docs.brew.sh/Manpage — --cellar/--caskroom paths, info, list/leaves/uses and uninstall dependency behavior.
- https://docs.brew.sh/Brew-Bundle-and-Brewfile — snapshot and restore semantics.
- https://github.com/apple-oss-distributions/file_cmds/blob/main/du/du.1 — Apple's upstream disk-usage manual; cross-checked against installed man du for depth, human-readable sizes, errors and symlink defaults.

The third-party manpage mirror was opened during discovery but was not used as authority. Shell outcomes below were checked against the exact command extracted from the article.

## Validation and limits

36 disposable-fixture cases passed: nine cases × zsh/bash × Cellar/Caskroom variants. Cases: lookup failure, failing lookup that still prints a path, simulated missing brew, empty path, root path, missing directory, empty directory, spaced path containing normal and hidden subdirectories, and simulated du read failure. Rejected paths never invoked the instrumented du function. Real /usr/bin/du read only disposable fixture directories. Its successful output included hidden and spaced paths; empty directories produced one total row. The simulated read failure retained stderr and exit 9. Missing brew and read errors were simulated, not claims of real permission failures. No installed Homebrew files were altered, real files deleted, or permissions widened.

Full unit suite: 58 passed, zero failed/skipped/cancelled. Lint and typecheck passed. Complete production build generated 174 HTML/RSC pairs. All 177 local HTTP SEO route checks passed, covering metadata/schema, related links, 404, sitemap, robots, DMG and OG image. Desktop 1265px and narrow 390px browser review passed; document widths were 1265/375px with no page overflow, code scrolls within its block, and no console errors were observed. Final diff/failure review covered command substitution failure, shell exit behavior, quoting, empty directories, hidden entries and partial reads. Only this article's date changed.

## Aggregate metrics

Private API observed 2026-10-20T10:07:09.359Z. September 21–October 20 inclusive, current day partial: 57 download requests, 17 completed-transfer events, 372 arrival events and 7 checkout events. Separately: four cumulative license records and two cumulative GitHub asset downloads. These are not unique people, installs, confirmed sales or organic conversions. The rolling window differs from yesterday's. QA user-agent and HEAD requests exclude verification downloads. Credentials were neither printed nor committed.

## Publication

Pending deployment and live verification. Next deep review October 21: Downloads, then iCloud Keep Downloaded. Next complete-window Search Console review October 23. No Google indexing submission or recovery claim.


### October 20 publication verified

Source **0c5302b** pushed to main and deployed to existing Worker **4147ddff-7938-428d-920b-2b25e66d0087**. https://cleardisk.app/homebrew-list-installed-packages returns 200/build with the guarded command and October 20 date; sitemap lastmod matches and remains 172 URLs. **177 live HTTP SEO route checks passed**, with no repeated 5XX in the final run. Independent checks verified homepage and three guide RSC responses as 200/build, direct internal snapshot access as 404, /download and DMG HEAD as 200, and appcast 200 with release 2.1.0. Anonymous /analytics and /api/analytics remain 401/no-store/noindex. Verification used QA/HEAD requests to avoid counting test downloads.

Final local results: 58 unit tests passed, zero failed/skipped/cancelled; 36 shell fixture cases passed; lint, typecheck, complete production build (174 HTML/RSC pairs), 177 local HTTP checks, desktop/narrow review and final diff/failure review passed. Temporary browser tab closed, viewport reset and local preview stopped. No indexing submission, observed Google recrawl or ranking recovery claimed. Next daily review October 21: Downloads, then iCloud Keep Downloaded. Next complete-window GSC comparison October 23. Unrelated audit edit and .impeccable preserved.
