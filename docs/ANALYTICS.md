# Owner dashboard: visitors to purchases

Owner dashboard: https://cleardisk.app/analytics. Username: `owner`. The randomly generated password is in the ignored local `.env.analytics-owner` file (mode 0600) and the Worker encrypted secret `ANALYTICS_PASSWORD`. Never put it in a URL or commit it. A browser prompts for HTTP Basic credentials over HTTPS. Credentials may remain cached until its browser session closes. `/api/analytics` provides the same data as JSON with the same authentication. Both endpoints are noindex and no-store; neither is in the sitemap.

## Funnel (added 2026-09-24)

Five steps, each a separate UTC daily counter (Durable Object `<kind>:<day>` via the existing `DownloadMetrics` class, no new migration):

- **Visitors** (`visits`): `components/visit-beacon.tsx` sends one same-origin `sendBeacon` to `/api/visit` per page load whose referrer is not this site. Body is only the referring hostname and campaign label; the Worker reduces both to a fixed source label. Bot user agents and cross-origin posts are ignored. Arrivals, not unique people; anyone can post the beacon, so treat it as indicative.
- **Tried to download** (`downloads`): unchanged full DMG request counter below.
- **Downloaded** (`downloads-done`): the Worker pipes the DMG through a `FixedLengthStream` and counts when the last byte is handed to the connection. Cancelled transfers count only as started. The asset binding omits `Content-Length`, so the build injects the DMG size (`process.env.DMG_BYTES` in `vite.config.ts`) to keep browser progress bars.
- **Tried to purchase** (`checkouts`): any successful `POST /api/checkout` (session created), test mode included.
- **Purchased**: count of `session:cs_live_*` keys in the `LICENSES` KV, all time. Refunds are not subtracted.


The existing `/ClearDisk.dmg` URL remains unchanged. Worker-first routing observes a full GET when the asset handler returns 200. HEAD, Range/resume, non-200, prefetch and recognized bot requests are excluded. No request history, IP address, visitor identifier, analytics cookie or raw referrer is stored. Only a UTC daily count by fixed source label is persisted; each daily SQLite Durable Object expires after 366 days. The dashboard shows the latest 30 days plus today/7-day totals, exact accessible daily values and source totals.

These are download requests, not completed transfers, unique people, installs, activations or purchases. Repeat requests and unidentified bots may count; range-only clients may be missed. There is no website history before tracking began. Deferred counter errors do not block downloads and can undercount; generic errors appear in Worker logs. Cloudflare may process its own operational request logs independently.

GitHub supplies a separate cumulative DMG download count from up to its latest 100 releases, including previews. It may include earlier release testing. It is never combined with daily website data. API failure displays unavailable rather than zero; the GitHub response may be cached for five minutes.

## Campaign links

Use `https://cleardisk.app/download?utm_source=reddit`, with the source set to `reddit`, `youtube`, `newsletter`, `github`, `google`, `bing`, `guides` or `website`. The download page carries only that recognized label to the DMG URL. Article calls to action label downloads `guides`. Otherwise, an immediate referrer is reduced to one fixed category. This is a source label, not first-touch attribution; labels can be spoofed. No personal information should be put into campaign URLs.

## Operations and verification

`npm run build:cloudflare` builds the custom `worker/index.ts`; `npx wrangler deploy --config dist/server/wrangler.json` deploys it. Preserve the `DOWNLOAD_METRICS` binding, `download-metrics-v1` SQLite migration and asset `run_worker_first` patterns. Default Sites builds deliberately keep their original entry without this private dashboard.

Unit tests cover filtering, source minimization, authentication and UTC series. Local workerd integration verified anonymous denial, five concurrent atomic increments, excluded request types, persistence across process restart and graph rendering. Public verification uses HEAD or `User-Agent: ClearDisk-QA` so release checks do not fabricate customer downloads.

To rotate access, replace the ignored local password and upload `ANALYTICS_PASSWORD` with Wrangler's secret command. This does not rotate Stripe. Counts are private but aggregate, and the password is never included in a client bundle.

## Optional Google Analytics (27 September 2026)

Google Analytics is separate from the private aggregate dashboard above. The work Google account (anilgautamwork@gmail.com) manages GA4 property **556076456**, web stream **15851243548**, measurement ID **G-J00KPHWBCN**, in existing account **370327929**. Open https://analytics.google.com/analytics/web/#/a370327929p556076456/reports/reportinghub . The verified HTTPS Search Console property is linked to this stream. Reporting timezone is India; currency is USD.

The existing Google tag component sends one manual `page_view` on each public-route navigation and `file_download` for a click on the DMG link, only after Analytics only or Allow all consent. These download clicks are not completed downloads or installs. It excludes unknown, payment, recovery, activation and private analytics routes, queries and fragments. Referrers are reduced to domains. Enhanced measurement and Google Signals are off; no user IDs, form fields, personalized ads or enhanced conversions. Event/user data retention is two months; reset-on-activity is off, and first-party GA cookies expire after 60 days without renewal. Aggregate reports can persist beyond user-level retention.

`cleardisk.measurement-consent.v2` records the new choice so old Ads-only consent is not silently expanded. Google Ads conversions still need Allow all and a server-verified live purchase; Analytics only never grants Ads storage. Keep the public-path allowlist and enhanced measurement disabled to avoid collecting private URL parameters. Consent controls work without a third-party tag loading. Localhost and preview hosts are excluded. Decline removes site Google cookies and stops future measurement; it does not erase already collected provider records.
