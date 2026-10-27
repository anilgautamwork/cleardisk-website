# WhatsApp storage guide recovery review — October 27, 2026

## Selection and disposition

**Improved and retained** https://cleardisk.app/whatsapp-taking-up-space-on-mac . Priority 6 in the October 25 authenticated GSC queue: complete October 9–15 versus October 16–22 windows show impressions **133 → 0**, clicks **2 → 0**. This run uses that saved evidence; no new query pull, keyword volume, indexing or recovery claim. No new article, consolidation, redirect, removal or noindex change.

## Findings and corrections

The previous text implied Mac and phone cleanup were separate without explaining synced message deletion. Official WhatsApp guidance says message deletions sync across online signed-in devices. The revised guide puts this warning and independent-copy checks before cleanup, distinguishes Delete for me from deletion for other participants, and asks readers to cancel if their confirmation has an unexpected scope.

Removed unsupported guarantees about container subfolders, immediate size reduction, future downloads and relinking outcomes. The optional read-only measurement now explains absent paths, incomplete permission results and the limits of folder totals. Existing anchors and original publication date retained; updated date October 27. No product capability, author or firsthand deletion/recovery test invented. Humanizer applied for concrete prose in the existing style.

## Primary sources checked October 27

Read these official Mac-specific pages in the browser, including their Mac tabs. Some web tool requests produced JavaScript shells or failed; the browser exposed the actual help content.

- https://faq.whatsapp.com/372400548572711/?cms_platform=mac-desktop — chat info, Media/Links/Docs, Select and Delete for me workflow.
- https://faq.whatsapp.com/1370476507114859/?cms_platform=mac-desktop — message deletions sync across online signed-in devices; own-copy deletion does not delete recipients’ copies. Some subsection final-click wording conflicts with its heading. Used the dedicated media guide for the action label and explicitly tell readers to inspect the app’s confirmation/cancel if scope is unclear.
- https://faq.whatsapp.com/366146522333492/?cms_platform=mac-desktop — auto-download controls under Storage and data.
- https://faq.whatsapp.com/5503646096388294/?cms_platform=mac-desktop — Free up storage marked unavailable on Mac at source check. Article dates this observation and allows for later app changes.
- Installed macOS `du` manual — disk-usage measurement and summary/human-readable flags.

## Actual checks and limits

On macOS **27.0.1**, read the installed WhatsApp Info.plist: **26.41.74**, build **1093344077**, bundle net.whatsapp.WhatsApp. Checked only that the candidate shared Group Container exists; did not read private chats, media contents or real chat-storage totals. Entitlement extraction produced no parseable output and is not verification of the path’s ownership.

Disposable temporary directory with a 1 MiB file in a path containing spaces: `du -sh` reported **1.0M**, exit **0**, no stderr. Nonexistent disposable path: no stdout, **No such file or directory**, exit **1**. Temporary fixture removed automatically. No real user files deleted, app privacy permissions changed, account unlinked, WhatsApp media deleted or recovery attempted. The public guide labels these limits.

## Aggregate observation

Authenticated aggregate API observed **2026-10-27T10:04:11.415Z**. Rolling September 28–October 27 (October 27 partial): **406 arrival events, 28 download requests, 18 finished-transfer events, 6 checkout events**. Complete October 20–26 rows: **67 / 6 / 5 / 1**, respectively. Separately: **4 all-time license records**, **2 GitHub asset downloads**. These are counters, not unique people, installs, organic conversions or confirmed sales. Credentials never printed. An initial summary parser expected `total`; corrected to the actual daily `count` before recording totals.

## Validation and publication

Baseline main **6b1a544**, synchronized with origin; baseline Worker **3490aff3-bd93-47db-957d-21d01a41a331**. Current app **2.2.1 (14)** retained. Unrelated September 27 audit edits and `.impeccable/` preserved.

Full unit suite **58 passed, zero failed/skipped/cancelled/todo**, lint and typecheck passed after the final copy change. Production build generated **177 HTML/RSC pairs**; **180 final local HTTP SEO checks passed**. Final diff reviewed for deletion scope, missing paths, incomplete permissions, backup and recovery claims. Desktop 1280px and narrow 390px reviewed. Mobile check found a long inline path overflowing; replaced it with a reference to the existing horizontally scrollable command. Final mobile document width is 390px at 390px viewport.

An intermediate rebuild while the old preview occupied the snapshot port captured stale HTML; it was not deployed. Stopped the preview, rebuilt cleanly, confirmed final text in the generated HTML and RSC output, and reran the complete HTTP suite against port 3115. Use a separate review port for future runs. Publication pending. Next content review October 28: priority 7 `/mac-swap-memory`; next complete equal-window GSC review November 1. No recovery guarantee or indexing submission.
