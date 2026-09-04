# ClearDisk brand system

Identity: ClearDisk (capital C and D, one word). Use the violet rounded-square C-and-sparkle mark for the site, favicon, welcome screen, Dock and installed app. Native icon rendering is shared between AppIcon.swift and the packaging renderer; regenerate the icns during every package build.

| Role | Value | Usage |
|---|---|---|
| Brand light | #C7B7FF | Icon gradient start |
| Brand deep | #7960CE | Icon gradient end |
| Dark-surface action | #C4B2FF → #AA91EC | Website primary download buttons |
| Action text on lavender | #1B132E | Strong label contrast |
| Light-surface action | #7150C5 | Native primary buttons, links and controls |
| Light selection | #F4EFFF / #DDD0F6 | Native selected row fill/border |

Use one website DownloadButton component. Header uses its compact size; home hero uses its normal size. Both default to “Download ClearDisk” with the same download icon. Context-specific download labels are allowed on guide/return pages, using the same component/style. Free scanning is explained next to the action, not a competing badge inside it.

The native app currently has a light interface. Matching the brand does not mean claiming its planned dark appearance is implemented. Safety states retain green/amber/gray, destructive actions retain red, and file categories retain meaningful category colors.

Do not change the brand back to MacClear, ClearDesk or DissectMac. Do not imply scanning uploads files or that the browser demonstration examines the visitor's Mac. Preview releases are clearly marked; $10 licensing is planned for 1.0 and test checkout is not live fulfillment.

## Branding review, 5 September 2026

Corrected the header's pale CTA, hero/header label/icon inconsistency, native blue cylinder icon, blue brand action color and differing favicon geometry. The new native artifact is 0.1.1 preview, build 2. SEO pages, guides, canonical policy and noindex preview are preserved.

Production gaps remain: signed license receipts/activation, final removal workflow, dark mode, two-pass scanning, embedded live checkout/recovery, custom-domain public launch. These are existing handover milestones, not delivered by the brand correction.
