# AI Rank Grow research: changes made on 30 September 2026

The owner's PDF contains 30 API observations across ten unbranded prompts: 22 complete answers and eight unsuccessful Gemini observations excluded from the visibility rates. ClearDisk has zero mentions and zero website citations in those 22 complete answers. This is a baseline for that sample, not Google rankings, monthly search volume or proof of why the answers omitted the product. Model/API answers can differ from consumer search experiences.

We strengthened six existing pages rather than making a new page for every wording of the same problem. Original screenshots and concrete steps give readers evidence to inspect; they do not guarantee citations or rankings. No paid tools, ads, automated prompt purchases or external messages were used.

## Prompt coverage

| Report prompt | Existing destination | Action |
| --- | --- | --- |
| What are the best free Mac storage cleanup tools? | /best-free-mac-cleaner | Added first-hand sample results, linked evidence and explicit test limits; retained maker-source comparison disclosure. |
| Why is my Mac disk full even after deleting files? | /mac-storage-not-updating-after-deleting-files | Added an actual Trash/Put Back walkthrough and review screenshot. |
| What is the best tool to clear storage space on a Mac? | /best-free-mac-cleaner | Retained job-based choices and the free-scan/$10-cleanup distinction. |
| How can I reduce System Data storage on my Mac? | /clear-system-data-on-mac | Clarified scan scope, safety labels and snapshot-count limits. |
| Which Mac cleaner can find files I no longer need? | /find-large-files-on-mac | Explained that a scan identifies size/location, not whether the owner needs a file. |
| How do I find the largest files taking up space on my Mac? | /find-large-files-on-mac | Added original treemap screenshot, exact sample sizes and the Large Files threshold. |
| My Mac storage is full. What can I safely delete? | /mac-storage-full | Existing triage guide retained; linked supporting guides improved. No duplicate article. |
| How do I clear cache files on a Mac safely? | /clear-cache-on-mac | Corrected blanket safety language, differentiated Safari cache from website data, narrowed manual removal advice. |
| How can I free up space on my Mac when storage is full? | /mac-storage-full | Existing destination retained with its current internal links. |
| How do I free up space on a Mac without deleting photos? | /free-up-space-without-deleting-files#keep-your-photos | Added the separate Photos setting, upload/backup checks and external-library constraints. |

## Original evidence

Test environment: installed ClearDisk 2.0.0 (build 11), macOS 27.0.1. Created three disposable files in `~/Downloads/ClearDisk Guide Sample`: 134,217,728, 33,554,432 and 2,097,152 bytes. Finder displayed 134.2 MB, 33.6 MB and 2.1 MB. ClearDisk's selected-folder treemap showed all three; its “Files over 100 MB” view showed only the largest. System Data and Categories were unavailable for this folder-only scan. App source agrees with the scope and size-filter observations.

Moved only the generated large sample through ClearDisk's Move to Trash review. Finder showed the sample in Trash. Finder File → Put Back restored it to the original folder; its byte count was again 134,217,728. No personal file, permanent removal or empty-Trash operation was involved. We did not measure a free-space change, compare other scanners or verify a content hash after restoration. The short-lived in-app Undo control was not tested; the published description names Finder Put Back.

Two unmodified native screenshots are stored in `public/guides/sample-storage-map.jpg` (2200×1496, 208872 bytes) and `sample-removal-review.jpg` (1180×708, 93840 bytes). The captions identify generated data, test date/version and the whole-drive sidebar's unrelated capacity. Images have alt text, intrinsic dimensions, lazy loading and a full-size link. No new dependency or image service was added. The sample files remain available locally for review.

## Source checks

Checked September 30 (local date):

- [Apple storage guidance](https://support.apple.com/en-us/102624): Trash still occupies space, Storage updates automatically, System Data is a catch-all category. No fixed refresh deadline.
- [Apple local snapshots](https://support.apple.com/en-us/102154): counted as available and managed automatically.
- [Apple Disk Utility](https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac): available and purgeable accounting.
- [Apple Storage settings](https://support.apple.com/en-gb/guide/mac-help/mchl3d437fbc/mac): Documents/file-management views.
- [Apple Safari website data](https://support.apple.com/en-gb/guide/safari/sfri11471/mac): removal can sign users out and affect other apps.
- [Apple Safari Develop menu](https://developer.apple.com/documentation/safari-developer-tools/develop-menu): Empty Caches; the vendor's Markdown representation was read when the HTML was JavaScript-only.
- [Apple Photos optimization](https://support.apple.com/guide/photos/optimize-storage-in-photos-on-mac-phta9b4673b4/mac): Photos → Settings → iCloud, distinct from iCloud Drive.
- [Apple moving Photos libraries](https://support.apple.com/en-us/108345): suitable formats/destinations, copy and open before removal.
- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features): ordinary SEO requirements, accessible text and images, matching structured data; no special AI schema or text file required.
- [Google helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): useful original evidence, source clarity and reader value.

Other cleaner products retain the visibly dated September 26 maker-source check. This run does not claim a new hands-on comparison or new competitor pricing research.

## Humanize edit

Only the requested Humanize skill was applied. No approved personal voice profile exists; the standing campaign instruction authorizes a generic edit in ClearDisk's established tone. Moderate edits replaced abstract “our diagnostic question” wording with actions, removed an unsafe cache claim and gave the demonstration more space than general advice. Necessary qualifications remain.

Subjective pattern assessment of the affected prose: before 13/69 (statistical 3/12, composition 6/42, document 4/15; 18.8%); estimated after 8/69 (2, 3, 3; 11.6%). These are editorial judgments, not model probabilities or AI-detector results. No fake anecdote, recovery amount, testimonial or rank claim was added.

## Measurement and next decisions

Keep the ten prompts above as the comparison set. For any later owner-supplied run, retain the date, market, model/version, search setting, complete-answer denominator, brand mentions and exact cited URLs; keep failed answers separate. Compare identical settings where possible. Do not buy API runs or treat the small baseline as market-wide share.

In Search Console, compare the six updated pages over equal windows after recrawling, using impressions, clicks, query mix and indexing state. September 29 remains the latest retrieved Google evidence: September 7–26 Web data, four clicks and 563 impressions; sitemap Success with 171 discovered URLs. No fresh Google indexing result is inferred from publication or IndexNow acceptance.

Independent reviews remain an unfilled evidence source. The five existing creator drafts in `outreach/2026-09-27-creator-shortlist.md` are unsent. They can reference these new public demonstrations after the owner approves a specific message and recipient. Do not invent endorsements or use self-published comparison copy as an independent review.

Deployment, live checks and aggregate download measurements are recorded in progress.md and marketing-progress.md after publication.
