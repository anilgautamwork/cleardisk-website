# Website handoff

The marketing website is isolated in `website/`, with its own Sites source repository. Native Swift sources and Claude's planned `web/` license service are unchanged.

## Run and verify

Node 22.13+, `npm install`, `npm run dev`. `npm test`, `npm run typecheck`, `npm run build`. Local secrets belong in ignored `.dev.vars` (600 permissions); production values belong in Sites environment settings. Never use NEXT_PUBLIC_ for a Stripe secret.

## What works

Responsive landing page, ThreeUI Emerald Horizon shader, interactive storage demonstration, accessible checkbox/tabs/confirmation/FAQ controls, verified existing 0.1.0 DMG download, hosted Stripe test checkout and server-verified return page. No real cards or real charges. The payment API fixes $10 USD on the server and rejects live keys until fulfillment exists.

## Before accepting live purchases

Integrate Claude's `web/` license worker from the approved production spec. It owns Stripe webhook verification, idempotent license issuance, signed activation receipts, email delivery and refunds/revocation. Replace this website's test-only checkout and thanks handlers with that production flow; keep `/buy-now`, `/thanks`, `/download`, `/privacy`, `/terms` stable. Connect `/recover` only after the backend is available. Do not just switch to a live secret: existing code intentionally fails closed for live keys.

Replace public/ClearDisk.dmg with the signed and notarized 1.0 binary and update version/size/release wording. Current download is the existing notarized 0.1.0 universal binary (1,800 KB approximately). Confirm support inbox delivery, real refund terms, final domain, and purchase → license → activation → refund end to end. The app is still being built separately.

## Visual attribution

`components/threeui/horizon-shaders.ts` is copied from MengTo/threeui at commit 68802d5428071ada5c20db8094b1649e6bb770ed. The adjacent native WebGL adapter adds visibility lifecycle, reduced motion and bounded pixel resolution. Shader smoothstep calls are normalized in the adapter to avoid undefined reversed-edge behavior. MIT license retained in components/threeui/LICENSE. No Pro components or assets used.

## References and optional additions

Reviewed StarBoard home, Web Frameworks & UI Libraries, and SEO, Marketing & Growth. Impeccable (https://github.com/pbakaus/impeccable) is useful for repeated design audits. Remotion (https://github.com/remotion-dev/remotion) is useful for launch demo videos; check its commercial license before use. Neither is installed by this task. ThreeUI plus installed Shadcn primitives suffice for this site.

## Product truth

Free scans; planned cleanup license $10 once, 3 personally owned Macs, all 1.x updates, 30-day refund at launch. File analysis is local; license activation is online and separate. Trash does not free physical space until emptied. Example data is always labeled; no testimonials or user counts are fabricated. Browser QA was not requested. Type checking, production compilation, checkout unit tests and HTTP route smoke checks are the verification scope.

## Dependency review

Updated React and RSC packages to 19.2.8, Vinext to beta.9, its required RSC plugin to 0.5.34, and Vite to 8.2.2 to address runtime/build advisories. Remaining audit findings are in the pinned local tooling graph (Miniflare/Wrangler's undici 7.24.8 and esbuild 0.27.3, also shared through Shadcn's CLI dependencies); these modules are not present in the deployed server bundle. Upgrade that toolchain in a coordinated follow-up. No force or legacy peer resolution was used.
