# ClearDisk Google Ads purchase tracking

## Configuration verified on 16 September 2026

Google Ads account 127-673-1991, signed in as anilgautamwork@gmail.com, already has **ClearDisk Purchase** (conversion type ID 7770734318). Its manual website snippet matches `AW-10925384709/MoykCO79r_kcEIXI0Nko`. It is Primary, uses different values (fallback USD 10), counts Every conversion, has a 30-day click window and data-driven attribution. Enhanced conversions are not configured. No duplicate action was created and no campaigns, budgets or unrelated goals were changed.

The website has no GA4 or GTM integration. We did not invent a GA4 measurement ID or add a second purchase destination. If GA4 is introduced later, add `begin_checkout`, `download_click` and ecommerce `purchase` there, and keep its imported purchase Secondary while the native Ads action is Primary.

## What fires

The shared layout mounts one framework `next/script` Google Ads loader, only on the indexable production cleardisk.app hostname and after an explicit Allow measurement choice. Default consent is denied. Ad personalization and analytics storage remain denied. No Google script loads before permission or after a persisted Decline. Ad privacy settings lets the visitor change the choice; blocked browser storage uses an in-memory choice for the current page. Checkout accepts either choice. On a first visit directly to checkout, it waits for that choice so the Stripe session captures the correct consent and attribution, then loads normally.

The existing `/api/key` flow must confirm and deliver the license before `PurchaseTracking` mounts. It then asks `/api/purchase`, which retrieves the session from Stripe again instead of trusting license-cache data or the URL. Only a live, complete, paid ClearDisk session with a positive integer amount and recognized ISO currency produces an event. Sandbox, failed, pending, expired/cancelled, zero-value and wrong-product sessions produce no purchase. This does not track checkout views, clicks, downloads or arbitrary `/thanks` visits as sales.

`amount_total` is the actual Stripe total, including any applicable discount/tax. Charge minor units are converted to major units: USD/INR/AED divide by 100; JPY and other Stripe zero-decimal currencies use the integer amount; BHD/JOD/KWD/OMR/TND divide by 1000. ISK and UGX follow Stripe's backwards-compatible /100 representation. Currency comes from Stripe, not geography or the displayed list price.

The transaction ID is a stable SHA-256 digest of a namespaced Stripe session ID. The original session ID is not transmitted because this app also uses it to retrieve a license. The browser sends only `send_to`, `value`, `currency`, and `transaction_id`. Page URLs are stripped of arbitrary query parameters (including session IDs), fragments and referring-query data. The Google tag still processes ordinary network/device signals and consented ad identifiers; this is not anonymous network traffic. Enhanced conversions and personalization are disabled. No email, payment details, license key or app file data is supplied.

A module-level set prevents repeat sends on rerenders, retries and duplicate listeners within a page. A refresh may send again with the identical transaction ID, letting Google Ads deduplicate the same action. An ad blocker, denied consent, missing return visit or network failure can still prevent a web conversion; calling gtag is not proof that Google recorded it.

## Attribution and buyers who do not return

Consented gclid/gbraid/wbraid and existing campaign parameters are carried in Stripe session/payment-intent metadata. Hosted Stripe checkout returns to the same cleardisk.app origin; embedded checkout lives on that origin. Do not add checkout.stripe.com as an owned cross-domain site or attempt to inject our tag into Stripe. The current Mac app opens `https://cleardisk.app/buy-now?ref=app` in a browser; it does not take payment natively. Attribution can be retained only when the relevant browser has the ad identifiers. We do not invent a cross-device/app identity bridge.

Verified signed Stripe webhooks retain consented ad-linked purchases in the existing LICENSES KV under `ads-order:<hashed ID>` with a 90-day expiry. Records contain click IDs, actual value/currency, stable order ID, consent and Stripe event time, not customer details. Recording happens before the license duplicate fast path, so a license delivered by the thanks page does not prevent recording. Repeated callbacks reuse the same record key. There is no automatic Google upload yet.

`GET /api/ads-conversions` exports paginated records using the existing owner Basic authentication (`ANALYTICS_PASSWORD`). It is no-store/noindex and rejects unauthenticated requests. `scripts/export-ads-conversions.mjs` creates a private local GCLID CSV, never an upload:

```sh
# Supply these through your existing secure environment; do not commit them.
# ANALYTICS_PASSWORD = existing owner dashboard password
# ADS_OFFLINE_CONVERSION_NAME = exact name of the Google Ads import action
node scripts/export-ads-conversions.mjs /private/path/cleardisk-orders.csv
```

**Remaining offline setup:** create a clicks-import action in Google Ads/Data Manager and use its exact name in the export environment. Initially make it Secondary. Preview and validate the CSV mapping in Google Ads before applying; do not enable enhanced conversions that require personal data. The CSV includes GCLID, name, conversion time with UTC offset, value, currency, Order ID, Ad User Data and Ad Personalization. Braid-only records are retained but deliberately skipped by the GCLID CSV; they need a compatible Data Manager/API mapping. Records capture consent at checkout, so honor any later withdrawal before importing. Exclude/refund-adjust reversed payments when reconciling imports; the export is a paid-event ledger, not a current refund-status report.

Do not upload these to the Website action or assume IDs deduplicate across different actions. Keep exactly one purchase action Primary. To use offline purchases as the complete source (including non-returners), validate coverage first, then make the offline action Primary and this website action Secondary. No Ads API credentials or import action name were provided, so server-to-Google delivery is not claimed. Historical sessions without explicit consent are not backfilled.

## Validation and Tag Assistant procedure

1. Run `npm test`, `npm run typecheck`, `npm run lint`, production build and the existing HTTP SEO checks. Tests use fixture Stripe responses and a mock gtag sender; they send no conversion to Google.
2. In a fresh Chrome profile, open Tag Assistant and connect to `https://cleardisk.app/`. Before consent and after Decline, there should be no loaded Google Ads script and no conversion. Use Ad privacy settings to Allow; confirm one loader for AW-10925384709 and denied defaults followed by granted ad_storage/ad_user_data, with ad_personalization and analytics_storage denied.
3. Navigate to `/thanks` without a session, `/buy-now?canceled=1`, and download/pricing pages. None should emit a purchase. Do not create a fake production purchase event in the console.
4. Validate test Stripe sessions on a local/staging deployment: even a successful sandbox session must never send to the production Ads action. For automated successful-event validation, the fixture tests assert exact currency, amount and stable ID using a mock sender.
5. For the next **genuine live paid order**, inspect the return flow with Tag Assistant. The event must follow a successful backend lookup; check its actual value, currency and cd_ transaction ID against the receipt without copying customer information into analytics. Refresh and check that the ID stays identical. Google reporting deduplication can take time to appear.
6. Simulate duplicate/async webhook delivery only with test fixtures/test Stripe setup. Inspect the test ledger for one order. For production, verify signed webhook delivery for checkout.session.completed and checkout.session.async_payment_succeeded in Stripe's dashboard. Do not replay real paid sessions just to test Google reporting.

No live payment was made for QA; receipt of a genuine purchase event and its attribution in Google Ads still need observation. Script presence alone is not Tag Assistant purchase verification.

## Deployment verification

Deployed 16 September 2026 to cleardisk.app, Worker version `1101539b-0f4b-4b4f-9af7-c50e91ae3b4d`. All 48 automated tests, typecheck, lint, production build and 72 live HTML-route SEO checks passed. Chrome checks at 393×852 and 1440×900 confirmed a usable consent notice. Production Chrome showed one Google loader after Allow and zero after Decline plus refresh. Empty/sandbox session lookups returned `purchase: null`; the private ledger endpoint returned 401 without credentials. These checks do not establish receipt or attribution of a genuine Google Ads purchase.

## Changed files

- `app/layout.tsx`, `components/google-ads.tsx`, `lib/ads-client.ts`, `app/reading-theme.css`: shared base tag, consent, safe event dispatch and UI.
- `components/payment-result.tsx`, `components/purchase-tracking.tsx`, `app/api/purchase/route.ts`: verified payment to purchase-event flow.
- `lib/checkout.ts`, `lib/ads-purchase.ts`: verified monetary payload and stable identifier.
- `components/click-attribution.tsx`, `components/embedded-checkout.tsx`: consented attribution before checkout.
- `lib/stripe-webhook.ts`, `lib/license.ts`, `app/api/ads-conversions/route.ts`, `scripts/export-ads-conversions.mjs`: webhook ledger and authenticated offline export.
- `app/privacy/page.tsx`: accurate measurement disclosure.
- `test/ads-purchase.test.ts`, `test/checkout.test.ts`: paid/non-paid, currency, consent, test mode, repeat and callback checks.

## Official references

- [Google consent implementation](https://developers.google.com/tag-platform/security/guides/consent)
- [Google basic consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode)
- [Stripe currency units and exceptions](https://docs.stripe.com/currencies)
- [Google transaction-ID deduplication](https://support.google.com/google-ads/answer/6386790)
- [Google clicks import setup](https://support.google.com/google-ads/answer/7012522)
- [Google import fields and Data Manager guidance](https://support.google.com/google-ads/answer/7014069)
