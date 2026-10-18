# October 18: Mac log-files recovery review

Disposition: improved and retained https://cleardisk.app/mac-log-files . Priority 8 in the October 16 queue: impressions 77 to 14, clicks zero in both complete seven-day windows (September 27–October 3 and October 7–13). These establish review priority, not a cause of the loss. No fresh ranking or indexing claim. Next complete-window comparison October 23.

## Findings and changes

Removed hidden stderr and an empty-glob-prone size pipeline. The replacement uses quoted paths and `du -h -d 1`, with explicit incomplete/missing-path handling, overlapping totals and individual-file limits. Removed the unified-log tail command as a misleading storage measurement. Added app-specific investigation and support-evidence retention, Trash space and background-writer caveats. Corrected the claim that logs contain no user data and the implication that ClearDisk's Logs group covers the whole system. The Safe label is not a privacy or disposability guarantee.

Used the installed Humanizer for concrete neutral prose and Impeccable for reading-layout review; preserved existing components, URLs, old section anchors and related links. Only this guide's modified date advanced. No new articles, redirects, removals or noindex changes.

## Sources and evidence checked October 18

- Apple Console reports: https://support.apple.com/guide/console/reports-cnsl664be99a/mac confirms report categories, admin scope, Reveal in Finder and Move to Trash.
- Apple logging privacy: https://developer.apple.com/documentation/os/generating-log-messages-from-your-code explains sensitive user data and developer-controlled redaction. Main logging overview is linked but its fetched HTML required JavaScript; no new claim relies on that empty response.
- Installed macOS `du(1)` confirms disk-usage and depth semantics. Fixture evidence: [JSON](evidence/2026-10-18-log-measurement.json). A 1 MiB synthetic file under a space-containing directory and an 8 KiB hidden subfolder were measured; empty directory returned 0B/exit 0, missing path stderr/exit 1. A direct hidden file contributes to the total but has no individual depth-mode line. Initial candidate combining `-a` and `-d` failed with exit 64 and was discarded before publication.
- Released 2.1.0 source at Sources/Core/SystemDataReport.swift derives Logs from user Library. Current production before edits: Worker 30ef2aa2-0323-45fa-a222-d514a2cab9cd; main c5d2ed8 matches origin/main. Release and payment/license code unchanged.

No real logs read, files removed, permissions changed or unified logs purged. No denied-directory, active-writer cleanup, Trash restoration or reclaimed-space experiment was performed. Fixtures are explicitly labeled; do not imply customer evidence.

## Validation

Full unit suite: 55 passed, zero failed/skipped/cancelled. Lint, typecheck, Cloudflare production build and all 177 local HTTP SEO route checks passed. Final diff/failure-path review covers missing/empty directories, hidden entries, spaces, partial measurements, total double counting and Trash retention. Impeccable detector reports no findings. Browser review at 1440x1000 and 390x844: readable sections, existing layout intact, no document horizontal overflow; long command scrolls inside its code block. No code changes after these checks. Publication pending.

Next content review October 19: Node.js uninstall installation-method safety. Homebrew size-command failure/empty-glob follow-up remains queued. Do not infer a traffic cause or delete pages from these figures. Preserve unrelated September 27 audit edits and .impeccable/.

## Private aggregate metrics

At 2026-10-18T13:51:22.446Z, September 19–October 18 (30 UTC dates, current day partial): 58 download requests, 17 finished-transfer events, 370 arrival events and seven checkout sessions. Four cumulative license records and two separate GitHub downloads. These are not unique people, installations, organic visits or proven sales. Credentials and raw event/source data omitted.

## October 18 — confirmed live resource-limit failures and delivery correction

The first post-publication check failed with 503 on /uninstall-homebrew-mac; the second failed on /recover-files-from-trash-mac. A third instrumented check captured a homepage 503 at 13:54:20 UTC: Cloudflare **1102, Worker exceeded resource limits**, ray a4c808cd29b9cfa3-MRS. The first failing responses were not captured; a subsequent direct Homebrew fetch returned 200. Do not attribute every response or the historical October traffic drop to this error without timestamp correlation. No Googlebot observation or CPU-versus-memory measurement was obtained. The error page's noindex is an error response, not a changed page directive. Only the diagnostic title/code/ray/time are retained; the body contained the requesting IP and is not committed.

Current primary references checked: https://developers.cloudflare.com/workers/observability/errors/ and https://developers.cloudflare.com/workers/platform/limits/ . The installed vinext README explains that ordinary builds render pages per request. Its built-in prerender trial failed locally on a cloudflare: import; it was not deployed. A lazy-import trial also failed locally on a generated manifest reference and was discarded.

Implemented build-time HTML and RSC snapshots for the 174 public paths. The build starts a local Worker preview, validates each successful response/type and absence of Set-Cookie, then writes generated assets. Failed/interrupted builds remove partial snapshots and stop the child preview; requests and startup have bounded timeouts. Runtime serves snapshots through ASSETS and keeps private/transactional routes, mutations, download metrics and missing-page handling on their existing code paths. Internal snapshot URLs return 404. Files use .bin extensions to avoid asset HTML redirects; Content-Type is restored explicitly. RSC and HTML are separate, including HEAD handling. Missing snapshot responses fall back to the existing renderer. No plan upgrade or security setting changed.

Deployment requirement: use `npm run build:cloudflare` (now includes snapshots), then deploy its dist/server/wrangler.json. Do not substitute plain vinext build. If a public page gains request-specific server content, exclude it from snapshots before deploying. Generated assets remain ignored under dist/. Runtime snapshots are regenerated with each build; HTML/RSC no-cache prevents deliberately retaining obsolete page responses.

Final local validation: **58 full unit tests passed, zero failed/skipped/cancelled**, lint/typecheck and end-to-end production build passed; 174 HTML plus 174 RSC snapshots generated. All **177 local SEO HTTP route checks passed**. Browser desktop and 390px navigation, mobile menu and styled Support page verified after restarting the preview against matching final assets; no browser errors observed. A stale preview during rebuilding briefly lacked old hashed styles; final-build reload corrected it. Local owner analytics intentionally returns 503 when its production secret is absent; production protection must still be checked after deployment. Final diff/failure review covers public/private boundaries, headers, missing snapshots, build failures/interruption, dynamic endpoints and client navigation. Publication of delivery correction pending.


### October 18 final publication verified

Delivery source **7a420c6** pushed to main; current Worker **489bf284-d198-469e-bc6e-383e0ead7fae**. The complete instrumented live suite passed **177 HTML routes** plus its metadata/schema/related-link/404/sitemap/robots/asset checks, with no 5XX captured in that final run. Independent checks verified HTML and RSC 200/build responses for the homepage, Mac logs, both previously failing guides and the permissions guide. Internal snapshot URL returns 404. /mac-log-files updated copy and October 18 sitemap date verified; 172 sitemap URLs. Download/DMG HEAD/appcast 200 and version 2.1.0 retained. Anonymous analytics and API 401 with no-store/noindex. No paid upgrade, protection weakening or payment/license change.

Final full unit suite: **58 passed, zero failed/skipped/cancelled**. Lint/typecheck/end-to-end production build, 174 HTML/RSC pairs, 177 local SEO checks, responsive browser/navigation and diff/failure review passed. Verification used QA/HEAD requests for download exclusion. Failed earlier live checks and their 1102 evidence remain recorded; this finite verification does not guarantee absence of future errors or explain the historical traffic loss. No indexing submission or ranking recovery claimed. Next daily run: verify stability first, then Node.js uninstall review. Next complete-window GSC comparison October 23. Unrelated audit edit and .impeccable remain untouched.
