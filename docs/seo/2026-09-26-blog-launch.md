# Blog launch — 26 September 2026

Owner request: publish one natural, useful article based on the screenshot's “clean my mac for mac” keyword and add a Blog section. The screenshot reports 22.2K searches and difficulty 22. These are user-supplied third-party estimates with no verified market or measurement date; they are not published as facts or used to promise traffic.

## Editorial decision

Publish `/blog/how-should-i-clean-my-mac`: “How should I clean my Mac? Decide before you delete.” The query can mean MacPaw's CleanMyMac product or the general task. Explain that distinction plainly, disclose that ClearDisk is our product, and address the decision between familiar files, built-in tools and a scanner. Link to existing detailed guides instead of copying their procedures. No competitor ranking, invented hands-on results or fixed storage savings.

Applied the Humanize skill with a generic edit in the established ClearDisk voice, as authorized; no approved personal voice profile was available. Replaced keyword-shaped phrasing with a direct question, everyday situations (a failed update or video export), a clearly labelled example and a practical stopping point. Editorial assessment: the finished piece is concrete and readable; this is a writing judgment, not an AI-detector result. No detector-evasion guarantee or paid API was used.

## Sources checked

- Apple, free up storage: https://support.apple.com/en-us/102624
- Apple, Storage settings and System Data: https://support.apple.com/guide/mac-help/mchl3d437fbc/mac
- Apple, deleting files and Put Back: https://support.apple.com/guide/mac-help/mchlp1093/mac
- npm, clean install requirements and modifying behavior: https://docs.npmjs.com/cli/v11/commands/npm-ci/
- MacPaw, product name and its own documentation: https://macpaw.com/support/cleanmymac/knowledgebase/my-tools
- ClearDisk release record and app source for 2.0.0, macOS 15+, free scans, the $10 license and lowercase `delete` confirmation. The shipped website DMG remains the release source of truth, not GitHub's older latest-release label.

## Implementation and validation

Added `/blog` and one nested article, reusing the established article component and light reading theme. Learn and footer navigation link to Blog. The article has a canonical URL, BlogPosting and BreadcrumbList structured data, dated sitemap entry, section source links and related guides. Existing guide download labels now reflect version 2.0.0. No dependency, app binary, checkout or license changes.

51 unit tests, TypeScript, lint and the production build pass. All 174 compiled local HTML SEO checks pass. Desktop and 390px browser checks covered the index, article and mobile menu. Source links were moved below example lists after the reading-flow review. Impeccable's mechanical detector reported no findings on the changed surfaces. No new Google indexing or keyword-volume measurement is claimed. Actual publication verification is recorded in progress.md and marketing-progress.md after deployment.
