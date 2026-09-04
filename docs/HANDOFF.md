# Website handoff

The marketing website is isolated in `website/`, with its own Sites source repository. Native Swift sources and Claude's planned `web/` license service are unchanged.

## Run and verify

Node 22.13+, `npm install`, `npm run dev`. `npm test`, `npm run typecheck`, `npm run build`. Local secrets belong in ignored `.dev.vars` (600 permissions); production values belong in Sites environment settings. Never use NEXT_PUBLIC_ for a Stripe secret.

## What works

Responsive landing page, ThreeUI Emerald Horizon shader, interactive storage demonstration, accessible checkbox/tabs/confirmation/FAQ controls, verified 0.1.3 preview DMG download, hosted Stripe test checkout and server-verified return page. No real cards or real charges. The payment API fixes $10 USD on the server and rejects live keys until fulfillment exists.

## Before accepting live purchases

Integrate Claude's `web/` license worker from the approved production spec. It owns Stripe webhook verification, idempotent license issuance, signed activation receipts, email delivery and refunds/revocation. Replace this website's test-only checkout and thanks handlers with that production flow; keep `/buy-now`, `/thanks`, `/download`, `/privacy`, `/terms` stable. Connect `/recover` only after the backend is available. Do not just switch to a live secret: existing code intentionally fails closed for live keys.

Replace public/ClearDisk.dmg with the signed and notarized 1.0 binary and update version/size/release wording. Current download is the notarized 0.1.3 preview, build 4, universal binary (2,999,122 bytes). Confirm support inbox delivery, real refund terms, final domain, and purchase → license → activation → refund end to end. The app is still being built separately.

## Visual attribution

`components/threeui/horizon-shaders.ts` is copied from MengTo/threeui at commit 68802d5428071ada5c20db8094b1649e6bb770ed. The adjacent native WebGL adapter adds visibility lifecycle, reduced motion and bounded pixel resolution. Shader smoothstep calls are normalized in the adapter to avoid undefined reversed-edge behavior. MIT license retained in components/threeui/LICENSE. No Pro components or assets used.

## References and optional additions

Reviewed StarBoard home, Web Frameworks & UI Libraries, and SEO, Marketing & Growth. Impeccable (https://github.com/pbakaus/impeccable) is useful for repeated design audits. Remotion (https://github.com/remotion-dev/remotion) is useful for launch demo videos; check its commercial license before use. Neither is installed by this task. ThreeUI plus installed Shadcn primitives suffice for this site.

## Product truth

Free scans; planned cleanup license $10 once, 3 personally owned Macs, all 1.x updates, 30-day refund at launch. File analysis is local; license activation is online and separate. Trash does not free physical space until emptied. Example data is always labeled; no testimonials or user counts are fabricated. Browser QA was not requested. Type checking, production compilation, checkout unit tests and HTTP route smoke checks are the verification scope.

## Dependency review

Updated React and RSC packages to 19.2.8, Vinext to beta.9, its required RSC plugin to 0.5.34, and Vite to 8.2.2 to address runtime/build advisories. Remaining audit findings are in the pinned local tooling graph (Miniflare/Wrangler's undici 7.24.8 and esbuild 0.27.3, also shared through Shadcn's CLI dependencies); these modules are not present in the deployed server bundle. Upgrade that toolchain in a coordinated follow-up. No force or legacy peer resolution was used.

## SEO foundation — 5 September 2026

Organic acquisition is now the website priority. The shared ChatGPT research was read, reconciled with the approved ClearDisk name/product, and rechecked against current web sources. See docs/seo/2026-09-05-research.md and keyword-map.csv (91 candidates, unknown volumes left empty; the one Ahrefs value is historical July 2025).

Page source stays here; production /api/* belongs solely to the sibling web/ license Worker. The private preview retains test-only checkout. Its licensed production replacement, embedded checkout, recovery, static export and one-Worker deployment are separate integration work. Do not copy dist/server into web/public and assume it is a static export.

Added /guides and five articles: /clear-system-data-on-mac, /what-is-system-data-on-mac, /system-data-too-large, /system-data-keeps-growing, /mac-storage-full. Home now leads with Clear System Data on Mac. Guide records power routing, links and sitemap. Articles render as initial HTML with Article/BreadcrumbList data. Editorial publication/update dates are separate fields, and the visible date uses the registry.

SITE_INDEXABLE is a BUILD-TIME switch defined by Vite. Default false, including deployed preview: noindex and empty sitemap. Only build with SITE_INDEXABLE=true for the reviewed cleardisk.app production release; runtime env changes alone do not enable indexing. Canonicals consistently target cleardisk.app. Checkout/return pages remain noindex in both modes. Public launch requires Search Console verification and sitemap submission; no ranking guarantees.

Validation: npm test (12 tests), typecheck, lint and build. Start compiled site on port 3001; npm run test:seo:http checks 12 HTML routes, one H1 and distinct titles, canonicals, index policy, schema, related links, 404, robots/sitemap and DMG availability. Use SITE_CHECK_ORIGIN for another origin; SITE_CHECK_INDEXABLE=true asserts production mode. Restart the compiled Worker after rebuilding before testing a changed indexability flag. Both preview and production indexing behavior were checked locally; only noindex preview is published.

Independent review found no blockers. Fixed two minor observations: date rendered from data, and snapshot copy now says the app reports a count, not a measured size. Browser interaction/visual QA was not performed. The parent handover contains the remaining ordered native and licensing plans; none is implied complete by this website milestone.

## Brand consistency and preview 0.1.1 — 5 September 2026

Header and hero now share the lavender Download ClearDisk component, icon and label. Favicon and native app use the same violet C/sparkle identity; see BRANDING.md. Native light-mode controls use the accessible violet accent. The app sidebar now describes the planned $10 license and explicitly states this preview has no activation.

public/ClearDisk.dmg is the freshly built 0.1.1 (build 2) universal macOS 15+ preview, 2,787,215 bytes. App and DMG are Developer ID signed, notarized and stapled; Gatekeeper accepts the DMG. SHA-256: c018a7284dca81640d84d3c9af5809d166968a39009e133acaad956ec24c6396. This is a branding release, not the completed 1.0 product. Worker licensing, final removal workflow, dark mode, two-pass scan and live checkout remain pending.


## Experience, reading and access refresh — 5 September 2026

Current website direction supersedes the earlier dark landing page: Apple-inspired pale reading surfaces, native system typography, centered headline, larger guide text and consistent violet download pills. Dark example storage surfaces remain. Read DESIGN.md and BRANDING.md. The user-supplied plugin87/ux-ui-agent-skills Apple reference and typography guidance were used; Raycast and UI UX Pro Max informed the preceding native/product refresh. No MyFonts tool was callable, so no paid font was downloaded. System fonts replace Geist downloads. Background shader is no longer mounted; source/license retained. Labelled scan illustration, one-time entrance animations and reduced-motion behavior remain.

public/ClearDisk.dmg is 0.1.3 (build 4), universal arm64/x86_64, macOS15+, 2,999,122 bytes; SHA-256 bf00af0bb97d883be8f4cd9968e5c0634ac2b91176384734853fb866afc4b875. App and DMG signed with Developer ID, notarized, stapled and Gatekeeper accepted. Native code through edf4f0a plus Scripts/Info.plist version bump. New native graphite interface, honest scan stages and treemap loading/cancellation are included. Main CTA Scan my disk routes to inline Full Disk Access setup before root scanning; no automatic scan on settings return. Conservative permission detection cannot guarantee all macOS/iCloud prompts disappear. Installation instructions match this flow.

Native25 tests pass and debug/universal builds pass; isolated native UI checked welcome, unconfirmed access, Check access and Back without altering OS permissions. Earlier experience QA completed a real home scan and treemap drill/back. Static website review found no blocker and fixed mobile CTA typography specificity. Root handover records final web build/HTTP and deployment evidence. Browser UI QA was not requested.

Talivia explicitly paused until after launch; no tracker/service added. Design plugins Product Design, Frontend Design Premium and Figma installed and enabled; Figma account access not exercised. UI UX Pro Max and Frontend Design local skills also installed.

Private site remains owner-only and noindex. All five SEO guides and test-only checkout retained. Full1.0 licensing, final removal flow, two-pass scan, appearance preferences and public/live launch remain separate handover work.
