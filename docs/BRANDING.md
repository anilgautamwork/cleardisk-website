# ClearDisk brand system

Identity: ClearDisk (capital C and D, one word). Use the violet rounded-square C-and-sparkle mark for the site, favicon, welcome screen, Dock and installed app. Native icon rendering is shared between AppIcon.swift and the packaging renderer; regenerate the icns during every package build.

| Role | Value | Usage |
|---|---|---|
| Brand light | #C7B7FF | Icon gradient start |
| Brand deep | #7960CE | Icon gradient end |
| Website action | #6845BD | Violet pill with white label on light reading surfaces |
| Action text on lavender | #1B132E | Strong label contrast |
| Light-surface action | #7150C5 | Native primary buttons, links and controls |
| Light selection | #F4EFFF / #DDD0F6 | Native selected row fill/border |

Use one website DownloadButton component. Header uses its compact size; home hero uses its normal size. Both default to “Download ClearDisk” with the same download icon. Context-specific download labels are allowed on guide/return pages, using the same component/style. Free scanning is explained next to the action, not a competing badge inside it.

The 0.1.3 native preview uses an explicit graphite dark appearance. Automatic light/dark switching and the full Plan 03 appearance settings are still separate work. Safety states retain green/amber/gray, destructive actions retain red, and file categories retain meaningful category colors.

Do not change the brand back to MacClear, ClearDesk or DissectMac. Do not imply scanning uploads files or that the browser demonstration examines the visitor's Mac. Preview releases are clearly marked; the $10 license has been sold live and delivered instantly since 1.0.0.

## Branding review, 5 September 2026

Corrected the header's pale CTA, hero/header label/icon inconsistency, native blue cylinder icon, blue brand action color and differing favicon geometry. The new native artifact is 0.1.1 preview, build 2. SEO pages, guides, canonical policy and noindex preview are preserved.

Production gaps remain: signed license receipts/activation, final removal workflow, dark mode, two-pass scanning, embedded live checkout/recovery, custom-domain public launch. These are existing handover milestones, not delivered by the brand correction.

## Experience refresh, 5 September 2026

Raycast-inspired graphite surfaces now connect app and site. Native palette: canvas #111115, sidebar #17171D, cards #1D1D25, elevated #252530, border #343440, primary text #F1F1F5, secondary #A6A6B5, action #8155D9, information/accent #BBA1FF. These replace the prior light-interface token usage; the icon is unchanged. Website retains readable lavender actions with graphite panels, a split product-led hero and intentional motion. See DESIGN.md for source attribution and animation rules.


## Apple-inspired reading refinement — 5 September 2026

Owner replaced the graphite website direction with pale neutral pages and native system typography. Current website canvas #FAFAFC, ink #1D1D1F, body #51515B, muted #62626B, action #6845BD with white text. Graphite remains inside product illustrations and the native app. System font stack replaces Geist; guide body is 19px, main copy 17–21px. Centered hero, 600-weight headings, generous spacing, pill CTAs, quiet motion. The earlier split hero and all-dark website notes above are historical. Native palette and C/sparkle mark are unchanged. See DESIGN.md for exact references.
