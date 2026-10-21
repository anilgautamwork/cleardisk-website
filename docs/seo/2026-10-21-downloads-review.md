# Downloads guide review — October 21, 2026

## Scope and evidence

Improved and retained https://cleardisk.app/clear-downloads-folder-mac . Priority 10 in the October 16 queue: 93 → 42 impressions (51 lost), zero clicks in both complete September 27–October 3 / October 7–13 windows. No new article, removal, noindex or redirect. Next complete-window Search Console comparison October 23; no new indexing or ranking observation today.

Before editing, main matched origin/main at cbfe858. Production was Worker 4147ddff-7938-428d-920b-2b25e66d0087. Pre-publication live HTTP checks passed 177 routes with no observed 5XX. This finite check does not establish the historical search-loss cause or guarantee future stability. Unrelated audit edits and .impeccable preserved. The first deployment-list command referenced nonexistent wrangler.jsonc and failed locally; the corrected dist/server/wrangler.json invocation confirmed production without changing it.

## Findings and corrections

The old guide encouraged opening unknown files, promised cleanup without losing anything, misstated Finder's status-bar measurement and treated a smaller Downloads total as reclaimed disk space. Replaced those claims with review of originals and backups, installer/archive checks, Get Info and a separate available-space measurement. Unknown apps, scripts and installers should not be launched merely to identify them. Similar filenames are not proof of duplicate contents.

The revised Trash workflow explains whole-Trash scope, Put Back limits, automatic removal and permanent emptying. Failed removals lead to specific Finder troubleshooting, not force deletion or broadened permissions. Safari download history is distinguished from saved files. Mail's saved copies are distinguished from automatic attachments, including Apple's warning that Remove Attachments affects an IMAP server. Custom iCloud destinations distinguish deletion across devices from removing a downloaded local copy. ClearDisk's released v2.1.0 scanner source was checked for allocated-size and skipped-path limits; no new capability or guaranteed savings claimed.

Humanizer applied in embedded mode with the existing neutral voice. Existing design, section anchors and related links preserved. Impeccable scoped review/detector found no further design work needed. Only this guide's editorial date changed to October 21.

## Primary sources checked October 21

- https://support.apple.com/en-us/102624 — free storage, Downloads and Trash.
- https://support.apple.com/guide/mac-help/get-file-folder-and-disk-information-on-mac-mchlp1774/mac — Get Info, status-bar item count and available space. Initial guessed long URL failed; the official short guide URL resolved to this canonical page.
- https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac — Command-Delete, Put Back, permanent emptying and automatic removal.
- https://support.apple.com/guide/safari/download-items-from-the-web-sfri40598/mac — download destination, history versus saved files and untrusted software warning.
- https://support.apple.com/guide/mail/view-save-or-delete-email-attachments-mlhlp1123/mac — saved copies, automatic downloads and IMAP server removal.
- https://support.apple.com/guide/mac-help/work-with-folders-and-files-in-icloud-drive-mchl1a02d711/mac — local downloads, cloud availability and deletion across devices.
- Installed Apple man du, plus release v2.1.0 Sources/Core/Categories.swift and Sources/Core/BulkScanner.swift — read-only size command and product limits.

## Validation and limits

Eight disposable-fixture cases passed: four cases in both zsh and bash, using the article's quoted du -sh command shape with a temporary folder substituted for the real Downloads path. Empty folder: one 0B row, exit 0. A spaced path with a normal file and hidden file: 68K, exit 0. Moving the fixture's 64KiB file to a sibling review folder: Downloads measured 4.0K, while the moved file's content hash still matched. Missing folder: nonzero exit with visible stderr, not a false zero. This demonstrates that a smaller folder can leave bytes elsewhere; it is not a measured claim about volume-wide space reclaimed. No real Downloads data was read or changed, no Trash emptied, and no permissions changed. Fixtures retained under /private/tmp/cleardisk-downloads-fixture-d2v__k3s.

Full unit suite: 58 passed, zero failed/skipped/cancelled/todo. Lint and typecheck passed. Complete production build generated 174 HTML/RSC pairs. All 177 local HTTP SEO route checks passed, covering metadata/schema, related links, 404, sitemap, robots, DMG and OG image. Browser review at desktop 1265px and narrow 390px passed; narrow document and scroll widths both 375px, no console errors observed. Final diff/failure review covered unknown files, incomplete measurements, Trash recovery, custom paths, Mail/iCloud sync and product limitations. No code changes after these checks.

## Aggregate metrics

Private API observed 2026-10-21T12:11:03.451Z. September 22–October 21 inclusive, current day partial: 378 arrival events, 54 download requests, 17 completed-transfer events and 7 checkout events. Separately: four cumulative license records and two cumulative GitHub asset downloads. Not unique people, installs, confirmed sales or organic conversions. The rolling window differs from yesterday's, so its count difference is not evidence of a fresh traffic drop. QA user-agent and HEAD requests exclude verification downloads. Credentials neither printed nor committed.

## Publication

Pending deployment and live verification. Next deep review October 22: /keep-icloud-files-downloaded-mac. Next complete-window GSC comparison October 23. No indexing submission or recovery claim.
