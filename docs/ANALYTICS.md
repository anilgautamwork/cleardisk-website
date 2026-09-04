# Download measurement

Owner dashboard: https://cleardisk.app/analytics. Username: `owner`. The randomly generated password is in the ignored local `.env.analytics-owner` file (mode 0600) and the Worker encrypted secret `ANALYTICS_PASSWORD`. Never put it in a URL or commit it. A browser prompts for HTTP Basic credentials over HTTPS. Credentials may remain cached until its browser session closes. `/api/analytics` provides the same data as JSON with the same authentication. Both endpoints are noindex and no-store; neither is in the sitemap.

## What is counted

The existing `/ClearDisk.dmg` URL remains unchanged. Worker-first routing observes a full GET when the asset handler returns 200. HEAD, Range/resume, non-200, prefetch and recognized bot requests are excluded. No request history, IP address, visitor identifier, analytics cookie or raw referrer is stored. Only a UTC daily count by fixed source label is persisted; each daily SQLite Durable Object expires after 366 days. The dashboard shows the latest 30 days plus today/7-day totals, exact accessible daily values and source totals.

These are download requests, not completed transfers, unique people, installs, activations or purchases. Repeat requests and unidentified bots may count; range-only clients may be missed. There is no website history before tracking began. Deferred counter errors do not block downloads and can undercount; generic errors appear in Worker logs. Cloudflare may process its own operational request logs independently.

GitHub supplies a separate cumulative DMG download count from up to its latest 100 releases, including previews. It may include earlier release testing. It is never combined with daily website data. API failure displays unavailable rather than zero; the GitHub response may be cached for five minutes.

## Campaign links

Use `https://cleardisk.app/download?utm_source=reddit`, with the source set to `reddit`, `youtube`, `newsletter`, `github`, `google`, `bing`, `guides` or `website`. The download page carries only that recognized label to the DMG URL. Article calls to action label downloads `guides`. Otherwise, an immediate referrer is reduced to one fixed category. This is a source label, not first-touch attribution; labels can be spoofed. No personal information should be put into campaign URLs.

## Operations and verification

`npm run build:cloudflare` builds the custom `worker/index.ts`; `npx wrangler deploy --config dist/server/wrangler.json` deploys it. Preserve the `DOWNLOAD_METRICS` binding, `download-metrics-v1` SQLite migration and asset `run_worker_first` patterns. Default Sites builds deliberately keep their original entry without this private dashboard.

Unit tests cover filtering, source minimization, authentication and UTC series. Local workerd integration verified anonymous denial, five concurrent atomic increments, excluded request types, persistence across process restart and graph rendering. Public verification uses HEAD or `User-Agent: ClearDisk-QA` so release checks do not fabricate customer downloads.

To rotate access, replace the ignored local password and upload `ANALYTICS_PASSWORD` with Wrangler's secret command. This does not rotate Stripe. Counts are private but aggregate, and the password is never included in a client bundle.
