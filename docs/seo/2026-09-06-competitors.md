# Competitor and SERP research — 6 September 2026

Collected during the autonomous SEO loop. Sources are public pages read on this date; prices and positions change, so re-check before quoting them on the site.

## Who ranks and sells in this space

| Product | Maker | Public price model (as read 6 Sep 2026) | Content footprint |
|---|---|---|---|
| CleanMyMac | MacPaw (DR 80 on the ahrefstop.com snapshot; "cleanmymac" ~9.6K US searches/month there) | subscription, plus a one-time option per MacPaw's knowledge base | large blog, YouTube channel ranks for "not enough space to update" queries, paid Google ads on "disk almost full" |
| DaisyDisk | Software Ambience | one-time (listicles quote $9.99–$14.99) | little content; ranks on brand |
| Disk Space Analyzer / MacCleaner Pro | Nektony | one-time or annual; store page ranks for "mac cleaner one time purchase" | reviews/how-to library |
| Crumb | cleanwithcrumb.com | lifetime license | ~400 blog posts covering nearly every Mac-storage long tail, including developer caches, per-app caches, "is it safe to delete X", version-specific pages and "vs" pages |
| DiskCleaner | diskcleaner.pro | one-time | ~20 posts, developer-leaning (Xcode, Derived Data), Trash-first positioning similar to ours |
| BuhoCleaner | Dr.Buho | not checked | how-to library plus listicles |
| Cleaner One Pro | Trend Micro | subscription, App Store | buys the "clean mac" ad slot |
| CCleaner for Mac | Piriform/Gen | free tier + paid | brand |
| OnyX, GrandPerspective, OmniDiskSweeper, AppCleaner, Pearcleaner, Sweep | free | free | none |

## What the SERPs looked like

- **how to clear system data on mac**: Reddit r/MacOS thread first, then YouTube (three videos), Apple Community, a Medium post, Microsoft Tech Community, Apple's 102624 page, Mac-Forums, Super User. People also ask: "How to clear 100GB of system data", "Why is my Mac system data so high", "200 GB of system data", "How to flush system cache". Related searches add Terminal, MacBook Air, Tahoe and 2026 variants. Publishers are absent from page one; forums and video dominate, which means a specific, well-structured guide has room.
- **not enough space to update macos**: Apple Community, Reddit, YouTube (CleanMyMac's own channel twice), Apple 102624, then CleanMyMac's blog and smaller publishers. People also ask: "Why does Mac need so much space to update?", "Why does my Mac say I don't have enough storage when I do?". No page on our site answered this; added as `/not-enough-space-to-update-macos`.
- **mac cleaner one time purchase**: Nektony's store, Cleaner One Pro's App Store page, MacPaw's purchase-options page, Reddit ("Beware of MacPaw's lifetime" thread), CCleaner, Macworld. Transactional intent with vendors ranking directly; a price-focused page with dated public prices is feasible, a feature comparison still needs hands-on testing.

## Gap list drawn from Crumb's inventory versus our library

Topics with a distinct user problem, Apple or vendor documentation to cite, and product fit, that we did not have on 6 September:

1. Not enough space to install a macOS update (Apple 102531 and 102624) — done this iteration.
2. Mail taking up space: Download Attachments setting, Remove Attachments, Erase Deleted Items (Apple Mail User Guide) — done this iteration.
3. Homebrew cache and old versions: `brew cleanup -n`, `brew --cache` (Homebrew manpage) — done this iteration.
4. Messages attachments on Mac (Storage settings → Messages).
5. Google Drive, Dropbox and OneDrive local caches and streaming modes (vendor docs).
6. Trash will not empty / item in use (Apple Mac User Guide).
7. iOS DeviceSupport folders inside Xcode's Library (Apple developer docs are thin; keep conservative).
8. npm, pnpm, yarn and pip caches (vendor docs).
9. Old macOS installer left in Applications after an update.
10. Photos library "Optimize Mac Storage" behaviour (Apple Photos User Guide) — partly covered by the move-photos guide.

Avoid: version-specific doorway pages (Sequoia/Tahoe/Sonoma variants of the same answer), MacBook-model pages, RAM cleaning, duplicate finders, uninstall guides for third-party apps, and "vs" pages until competitors are tested hands-on.

## Ahrefs

`ahrefs.com/websites/<domain>` redirects to `ahrefstop.com`, which only had a page for macpaw.com (top keywords: cleanmymac 9.6K, cleanmymac x download 6.8K, macpaw 3.9K; US ≈ 44% of traffic). Ahrefs' free keyword generator was tried from Chrome; see the progress log for whether it returned volumes.
