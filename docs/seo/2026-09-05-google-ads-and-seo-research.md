# ClearDisk Google Ads and SEO research — 5 September 2026

Companion files: [google-ads-keywords.csv](google-ads-keywords.csv) (campaign structure, keywords, match types, landing pages, negatives), [keyword-map.csv](keyword-map.csv) and [growth-keywords.csv](growth-keywords.csv) (organic phrase maps from the earlier research), [2026-09-05-growth-research.md](2026-09-05-growth-research.md).

## Where the site stands today

- 17 source-checked guides, a hub, and a $10 one-time license sold live through embedded Stripe Checkout with instant key delivery. Prices localise per visitor (₹599 in India, £8, €8, AED 36.73, $10 elsewhere).
- Every public page carries full head metadata, Article/HowTo/Breadcrumb/Organization/SoftwareApplication schema, an OG image, and appears in the sitemap (20 URLs). Search Console is **not yet verified**; that is an owner step.
- Downloads are counted per campaign bucket when a link carries `?source=google` (also bing, github, reddit, youtube, newsletter, guides, website). Purchases carry **no attribution yet**: the Stripe session has no UTM or Google click id.
- The privacy page promises "no advertising pixels". Any ad measurement must keep that promise, which shapes the tracking plan below.

## The evidence problem, stated plainly

No monthly search volumes or CPCs were verifiable in this session. The earlier research already marked all 91 mapped phrases "unmeasured"; the only public number found is Ahrefs' July 2025 estimate of ~14,000 US searches per month for "how to clear cache on mac". Public web results confirm that the System Data, storage-full, large-file and developer-storage topics have visible demand and competition, but they do not tell you how many people search or what a click costs.

**How to get real numbers in 20 minutes (owner, needs the Google Ads account):** Tools → Planning → Keyword Planner → "Get search volume and forecasts" → paste the `keyword` column of `google-ads-keywords.csv` → location United States, United Kingdom, Canada, Australia; language English → export. Repeat with location India. Volumes are averaged over 12 months and include close variants, so do not add overlapping phrases together. Bring the export back and the plan below can be reweighted.

## Competitive landscape

| Product | Price (public pages, 5 Sep 2026) | Model | What it is |
|---|---|---|---|
| CleanMyMac (MacPaw) | from $34.95/year or $89.95 one-time | subscription-first | full maintenance suite |
| DaisyDisk | $9.99 one-time | one-time | disk map visualiser, manual deletion |
| MacKeeper | ~$60–110/year | subscription bundle | cleaner + antivirus + VPN |
| OnyX, GrandPerspective, Disk Inventory X | free | free | maintenance or visualisation only |
| **ClearDisk** | **$10 one-time, ₹599 in India, 3 Macs** | one-time | System Data explained, Trash-first cleanup, local only |

Positioning that follows from the table: ClearDisk sits in DaisyDisk's price band with CleanMyMac's job ("actually clean it up") and none of the subscription. The phrases "mac cleaner one time purchase" and "mac cleaner no subscription" are therefore the sharpest commercial angle. Competitor feature comparisons still need hands-on testing before a `/compare` page; the prices above are enough for ad copy that says "no subscription".

Context that raises the bar: in January 2026 researchers documented malicious Google ads for "mac cleaner" searches that led to malware. Google's review of this category is stricter than average and searchers are warier. Expect advertiser identity verification, and make the landing pages read like a real company: named seller (TechMarbles Web Solutions Pvt. Ltd.), notarized app, plain description of what the app does and does not do.

## Google Ads plan

### Prerequisites and policy

1. **Account and verification.** Google Ads account under TechMarbles, advertiser identity verification completed with company documents. Auto-tagging on (default). Billing in INR with GST applies to an Indian account.
2. **Unwanted software policy.** Both the ad and the landing page must state the product type ("Mac app") and a one-line accurate description of what it does, and the landing page must "clearly explain the full results of installing the software". Add this disclosure block to `/download` and the home page, near the download button: *"ClearDisk is a downloadable Mac app. It scans your disk on your Mac, shows what uses space and lets you move files you choose to the Trash. It does not change system settings, install extensions or upload your files. Remove it by moving ClearDisk to the Trash."*
3. **Apple trademarks.** "ClearDisk for Mac", "works with macOS 15" and "for Apple silicon and Intel" are allowed referential uses. Never "Mac ClearDisk", never the Apple logo. The download page's apple-shaped icon next to "macOS 15+" is a small risk under Apple's logo rule; replace it with text.
4. **Competitor names.** Bidding on "cleanmymac alternative" as a keyword is permitted. Their names must never appear in ad text, sitelinks or display paths, because ClearDisk is a direct competitor.

### Campaign structure

| Campaign | Ad groups | Landing page | Intent | Priority |
|---|---|---|---|---|
| CD-Search-SystemData | Clear System Data · System Data Too Large · System Data Keeps Growing | the matching guide, `?source=google` | how-to and troubleshooting, ClearDisk's wedge | P1 |
| CD-Search-StorageFull | Storage Full · Free Up Space · Large Files | `/mac-storage-full`, `/find-large-files-on-mac` | urgent problem | P1 |
| CD-Search-Alternatives | One-Time Cleaners · Competitor Alternatives | home page | commercial, comparing tools | P1 |
| CD-Search-Developer | Xcode · Docker · node_modules | the matching developer guide | niche how-to, high product fit | P2 |
| CD-Search-Brand | Brand | home page | protects "cleardisk" once others bid on it | P3, later |

Full keyword list with match types is in the CSV: 36 keywords, exact and phrase only. Broad match waits until conversion data exists. The "clear cache on mac" cluster is deliberately absent: it has the largest known volume but no page yet, so it is an SEO task first.

### Negative keywords (account level)

iphone, ipad, ios (both exempted in the Developer campaign), windows, pc, android, linux, free download, crack, torrent, ram, memory, battery, icloud storage, icloud full, google drive, dropbox, data recovery, malware, virus, reddit, youtube, jobs, clear history, clear cookies. Review the search terms report weekly for the first month and grow this list.

### Ad copy (responsive search ads)

Headlines, each within 30 characters: ClearDisk: Mac Storage App · See What Fills Your Mac · Clear System Data on Mac · Free Scan. $10 Once to Clean · No Subscription, Ever · Notarized Mac App · Your Files Stay on Your Mac · Trash-First, Undo Anytime · Find Large Files Fast · Apple Silicon and Intel · Mac Storage Full? Start Here · Cleanup for ₹599, Once (India campaigns).

Descriptions, each within 90 characters:
- Mac app that scans locally and explains System Data in plain words. Free to scan.
- Cleanup unlocks for $10 once on up to 3 Macs. Files go to Trash first, so you can undo.
- For macOS 15+. Notarized by Apple. No system changes, nothing uploaded. Remove any time.
- One-time license, no subscription. 30-day money-back guarantee. Made by TechMarbles.

Assets: sitelinks Download free · Storage guides · How it works · Pricing; callouts One-time $10 · Notarized by Apple · Scans locally · 30-day refund; structured snippet Types: System Data, Large files, Developer caches.

### Geography, bidding, budget

Two campaign sets: English markets (US, UK, CA, AU) and India, because the price shown differs (₹599) and CPCs differ by an order of magnitude. Start with Maximize clicks and a bid cap for two weeks, then switch to Maximize conversions once the account records around 30 conversions in a month. Suggested test budget: $25/day on the English set and ₹1,500/day on India for 14 days. Public 2026 benchmarks put the technology sector near $3.80 average CPC in the US; the real figure for these phrases only comes from Keyword Planner and the first week of data.

### Conversion tracking without a pixel

Google's offline conversion import needs no website tag: capture the `gclid` (and `gbraid`/`wbraid`) from the landing URL, keep it for 90 days in browser storage, send it with the checkout request so it lands in the Stripe session's metadata, then export paid sessions (gclid, time, value, currency) to a connected Google Sheet or HTTP source that Google Ads imports. Create the conversion action as "Conversions offline", wait 4 to 6 hours before the first upload. This keeps the "no advertising pixels" promise intact. Downloads stay a top-of-funnel count through `?source=google`. This is a small code change on the site and is the first thing to build before spending money.

### Honest economics and kill criteria

A $10 product nets about $9.40 after Stripe. Paid acquisition only pays back when the cost per purchase is below that, which the storage-full and System Data phrases may achieve only in cheap markets and long tails. Run the 14-day test as a measurement exercise: track cost per download and cost per purchase per campaign. Keep a campaign if cost per purchase is under $10 or cost per download is under $1.50 with a download-to-purchase rate that closes the gap; pause anything else and put the budget into the SEO pages below.

## SEO plan

### Owner steps this week

1. Verify cleardisk.app in Search Console with the DNS TXT record (Cloudflare DNS) and submit `https://cleardisk.app/sitemap.xml`. Request indexing for the home page and the five System Data guides.
2. Bing Webmaster Tools: import the Search Console property. In Cloudflare, enable Crawler Hints (Caching → Configuration) so IndexNow gets pinged on changes.
3. Google Business Profile is not relevant (no physical service); skip it.

### Content gaps, in priority order

| Planned page | Why | Evidence |
|---|---|---|
| `/clear-cache-on-mac` | the only phrase with a known large volume (~14k US, Ahrefs July 2025); links naturally to the browser-cache and System Data guides | keyword-map P2 |
| `/free-up-space-on-mac` | routine maintenance intent, distinct from the urgent storage-full guide; currently ads send this traffic to `/mac-storage-full` | keyword-map P2 |
| `/disk-space-analyzer-mac` | commercial intent that today has no page; describes ClearDisk's actual scanning and limits | keyword-map P2 |
| `/time-machine-snapshots` | reclaimable-space questions the purgeable guide only partly covers | keyword-map P2 |
| `/compare` and named comparisons | high commercial intent, but requires hands-on testing and current official prices | keyword-map P3, evidence-gated |

### On-page and trust

- Add FAQPage structured data to the home page FAQ (six real questions already there).
- Add an About page: who makes ClearDisk (TechMarbles Web Solutions, Mohali), why, and how support works. It helps E-E-A-T and Google Ads reviewers alike, and gives the Organization schema a URL to point at.
- Keep `updated` honest on guides; only change it with meaningful edits.
- The `Preview` wording is gone; recheck copy after each release so "1.0" claims stay true.

### Off-site, in order of effort

Listings that carry links and real users: AlternativeTo, MacUpdate, Softpedia, Product Hunt (one launch, with the free scan as the hook), the GitHub release page. Community answers on r/macapps and Apple-focused forums only where rules allow and with the maker relationship disclosed. No paid links.

### Measurement

Search Console queries and pages after 2 to 4 weeks of data; download counts per source from the private dashboard; purchases from Stripe (attribution arrives with the gclid work above). Judge pages on impressions and clicks over equal windows, not on rank screenshots.

## Next 14 days

1. Owner: Search Console verification and sitemap submission; Keyword Planner export for the CSV keyword list (English set and India).
2. Site: add the software disclosure block to `/download` and home; add the gclid capture and Stripe metadata; replace the apple icon on the download page with text.
3. Site: publish `/clear-cache-on-mac` and `/free-up-space-on-mac` as the next two guides, and the About page.
4. Owner: Google Ads account verification, then build the two P1 campaigns from the CSV with the ad copy above; $25/day English, ₹1,500/day India; exact and phrase only.
5. Day 14: read the search terms report, cost per download and cost per purchase; grow negatives; keep, pause or reweight per the kill criteria.

## Sources

- Google Ads Unwanted software policy: https://support.google.com/adspolicy/answer/15938073
- Google Ads Trademarks policy: https://support.google.com/adspolicy/answer/6118
- Google Ads offline conversion import from clicks: https://support.google.com/google-ads/answer/7012522
- Apple guidelines for using Apple trademarks: https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html
- CleanMyMac, DaisyDisk and MacKeeper pricing summaries: https://www.drbuho.com/review/daisydisk-vs-cleanmymac and https://www.theodorehq.com/shiny/blog/cleanmymac-alternatives
- 2026 CPC benchmarks: https://www.wordstream.com/blog/2026-google-ads-benchmarks and https://www.theedigital.com/blog/google-ads-benchmarks
- Malicious "mac cleaner" ads, January 2026: https://appleinsider.com/articles/26/01/28/mac-malware-is-sneaking-into-some-sponsored-google-ads
- Ahrefs public volume for "how to clear cache on mac" (July 2025): https://ahrefs.com/websites/macworld.com
