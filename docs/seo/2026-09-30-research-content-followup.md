# Research-driven content follow-up — September 30, 2026

## Evidence and scope

This follows the already published six-guide evidence pass documented in `2026-09-30-ai-visibility-improvements.md`. It does not repeat its screenshots or claim a new app test. The current AI answer sample is separate from Google impressions, clicks and rankings.

A fresh read-only Google Ads Keyword Planner historical-metrics request through the existing Marketing Ops integration returned the following data at **2026-09-29T22:27:37.582Z** (September 30 in India). Target: **United States, English, Google Search**. Period: **September 2025–August 2026**. All three rows were available and matched the requested text without close variants.

| Keyword | Average monthly searches | Advertiser competition | Competition index |
| --- | ---: | --- | ---: |
| mac storage full | 140 | LOW | 8 |
| free up space on mac | 1,000 | LOW | 19 |
| best mac cleaner | 480 | MEDIUM | 48 |

These are historical estimates, not organic rank, SEO difficulty, AI prompt demand or visits. They support improving existing relevant URLs; they do not predict traffic gains. No credentials were copied into the repository.

## Changes

- Improve `/mac-storage-full` with separate paths for local disk vs. iCloud capacity, already-deleted files, familiar files, System Data, and recurring growth. Link directly to the existing sample scan and Trash/Put Back evidence.
- Correct shared storage-full, System Data, cache and cleanup FAQs: no blanket cache-deletion advice, no fixed recalculation time, no promise to reclaim a particular amount of space, and no claim that all old backups are disposable.
- Reuse those FAQ answers on the homepage so visible answers and structured data cannot drift into older cleanup claims.
- Link the homepage safety section to existing, measured examples. Keep page URLs and the design system unchanged.

Primary checks: [Apple storage guidance](https://support.apple.com/en-us/102624) and [Apple local snapshot guidance](https://support.apple.com/en-us/102154).

## Verification

- 53 unit tests, TypeScript, lint and the Cloudflare production build passed.
- HTTP checks passed for 176 HTML routes, metadata, schema, related links, 404, sitemap, robots, download and OG image.
- The guide was reviewed in a real browser at 1440px and 390px, without horizontal overflow.
- Independent content review approved the diff. No native app release or new cleanup measurement is part of this change.

Measure subsequent Google query/click changes separately from repeated AI answer sampling. Neither has been measured after this publication yet.

## Publication

Published to the existing Cloudflare Worker as **58179b2c-399b-4e8b-8ebd-bfed7f665c46**. All 176 live HTTP checks passed, and the corrected homepage cache answer was opened and verified in the live browser. The finish reviewer returned `ship`; the documenter confirmed no design-system changes.

Deployment used the already installed Wrangler 4.144.0 session. The build's generated config included the obsolete `legacy_env: true` field, so a temporary sibling `dist/server/wrangler.deploy.json` removed only that field for the current CLI. Source config, bindings, secrets and native downloads were unchanged.
