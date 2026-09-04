# ClearDisk website design

## Current direction: calm, readable, product first

The owner requested an Apple-inspired refinement on 5 September 2026, superseding the earlier Raycast split hero. ClearDisk keeps its own violet identity and original product copy. Pale neutral reading surfaces frame a centered headline and dark storage illustration. Features, pricing and guides use generous spacing and restrained borders. There are no Apple logos, borrowed product images or claims of affiliation.

Typography uses the native system stack: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif. Apple devices resolve their native system typeface; other devices use their own installed fallback. No commercial font files or downloaded SF font binaries are bundled. Geist remote font loading was removed. Main text is 17–21px; guide body is 19px / 1.75 (18px on mobile); headings use 600 weight and controlled tracking. System monospace is reserved for file names and numbers that need it.

app/reading-theme.css owns the light reading palette and type hierarchy over the retained product-demo styles in globals.css. Dark demo components explicitly carry the dark class, so their semantic controls retain the right contrast. Primary downloads are the same violet pill component in header and hero. Body text #51515b on #fafafc; action #6845bd with white labels. Muted text is #62626b. Interactive elements retain focus indicators.

## References used

- [plugin87/ux-ui-agent-skills](https://github.com/plugin87/ux-ui-agent-skills), commit 2ffb677aa02b225c8a3da1b7f31d9ebb7c38f1dd: Apple design-system document, typography tokens and apply-aesthetic skill. Used as implementation guidance; no full instruction kit injected into the project. Repository declares MIT in its README.
- [Apple Mac](https://www.apple.com/mac/): restrained typography, neutral section rhythm and clear action hierarchy, viewed 5 September 2026.
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md), Raycast reference: earlier graphite product surface and native app direction; license preserved in docs/references/awesome-design-md-LICENSE.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): loading feedback, contrast, focus targets and reduced motion.

## Motion and product truth

The storage illustration plays only on request. Its example data is labelled and it never reads local files. The full interactive demonstration remains separate from the native app. Entrance animations enhance already-visible server-rendered content, run once and respect Reduce Motion; cleanup cancels animation handles. The moving ThreeUI background is no longer mounted. Its attributed source remains available for future use.

Native scan progress represents measured files and allocated bytes, with explicit reading/organizing phases. Treemap shows loading immediately while immutable geometry is built off the main actor. App permissions are controlled by macOS; the website never requests disk access.

## Scope retained

Five server-rendered SEO guides, canonical metadata, schema and internal links remain. Private preview is noindex with an empty sitemap; public indexing is a launch step. Free scans; planned $10 one-time license for three personally owned Macs and 1.x updates, 30-day refund at launch. Preview download is not completed 1.0. Checkout stays test-only until licensing and fulfillment exist. Talivia is paused by the owner until after launch.
