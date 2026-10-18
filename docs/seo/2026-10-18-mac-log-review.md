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
