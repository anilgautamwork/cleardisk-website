# Rosetta guide review — November 5, 2026

## Findings and scope

Reviewed /uninstall-rosetta-2-mac, priority 9 in the October 25 queue: complete October 9–15 versus October 16–22 windows showed 121 → 1 impressions and 2 → 0 clicks. These are historical measured losses, not fresh November 5 performance. The November 4 complete-week comparison remains the latest account evidence; next weekly review is November 9.

The existing guide generalized an approximately 1 MB measurement of two program folders into a claim about all Rosetta storage. Apple documents a separate protected cache of translated code. The old measurement therefore cannot support a total-size or recoverable-space claim. This review does not establish the cache’s size. Removed the generalized size claim and its FAQ repetitions, including the old firsthand-test sentence whose underlying output was not located in the reviewed evidence.

The guide also treated the main app’s architecture as a sufficient dependency check. Apple documents Universal apps running under Rosetta to load Intel-only add-ons, plus components that require separate updates. The revision covers those dependencies and a reversible check after updating. It retains the advice to leave protected system files alone and removes the description of a security-disabling removal route. Installer receipts, running-service checks, localized inventory filters and a shell-selected Homebrew installation now have explicit limitations.

Disposition: **improved locally; publication pending visual review**. Same URL, title and original publication date; proposed modification date November 5. Existing section fragment IDs preserved. Related large-file guide added. No page removal, redirect, noindex, new article or app capability claim. Yesterday’s cache/slow-Mac/About publication remains **kept**.

## Source checks

- Apple using Intel apps: https://support.apple.com/en-gb/102527?store_id=9574 and https://support.apple.com/en-my/102527. Current official search results retrieved November 5 explain separate components, Open using Rosetta and macOS 28’s limited game exception. Direct en-us refresh returned 429, so this is search-retrieved primary text, not a successful direct fetch of the US page.
- Apple Platform Security: https://support.apple.com/en-ca/guide/security/secebb113be1/web. Official search text retrieved November 5 describes the service-managed translation cache in a protected Data Vault. Direct initial Apple request returned 429. No attempt to access or measure that vault.
- Apple SIP: https://support.apple.com/en-ca/102149. Official search text retrieved November 5 confirms protected-system modification restrictions. US direct request returned 429.
- Homebrew FAQ: https://docs.brew.sh/FAQ#why-is-the-default-installation-prefix-opthomebrew-on-apple-silicon. Direct fetch succeeded November 5; the two default prefixes support native/translated installations coexisting.

Humanizer applied in embedded/file mode for factual prose. No new firsthand OS/app compatibility claim. Existing read-only commands retained. The English-language awk inventory filter passed a disposable text fixture containing one Intel and one Universal entry. Local pgrep/pkgutil/du/ls manuals were available; no app inventory, personal paths or protected-file output was published. No installation, permission change, security change or deletion performed.

## Validation and publication limit

Source file lib/guides-qa-system.ts SHA-256: 0ea0c7cd3863d88b7a94539a387f4728543396c4da5de81834b4376166d2106e.

Full unit suite: **58 passed, 0 failed/skipped/cancelled/todo**. Lint and typecheck passed. Complete Cloudflare production build generated **177 HTML/RSC snapshot pairs**. **180 local HTTP SEO route checks passed** at localhost:3115, including FAQ/schema, metadata, related links, sitemap and 404 checks. Final diff and dependent FAQ/summary consistency reviewed. Existing build warnings do not block the build. No production deployment this run.

Desktop/narrow visual review of this new revision is incomplete. The earlier saved-policy rejection for automated browser access to localhost:3115 remains unresolved; it was not retried or bypassed. Yesterday’s owner approval covered the previously published three pages and is not claimed as approval of this new Rosetta revision. Preview is running at http://localhost:3115/uninstall-rosetta-2-mac for owner review. Retain this tested source until that review; then publish and run the full live checks. If source changes again, repeat required checks.

Fresh deployment history still shows **100% cd40ddb6-e724-42f4-8bab-956f59269148**. Nine live checks passed: five guides (cache, slow-Mac, Terminal permissions, private-var-folders and existing Rosetta) return 200/indexable/self-canonical; sitemap 200 with 175 URLs; public download HEAD 200; anonymous analytics page/API 401 with no-store/noindex. This is a sample, not a fresh full live 180-route run. QA user agent and HEAD-only public download verification exclude verification download traffic. No archive checksum or new indexing check claimed today.

Private aggregates observed 2026-11-05T10:08:34.155Z: complete UTC October 22–28 and October 29–November 4 windows show arrivals **77 → 75**, download requests **10 → 28**, finished-transfer events **8 → 24**, checkout events **1 → 3**. These are events/requests, not people, installs, organic conversions or sales; checkout includes test mode. Sanitized evidence: [aggregate metrics](evidence/2026-11-05-aggregate-metrics.json).

Next review November 6: finish visual review/publication before stacking another source batch. Weekly complete Search Console windows November 9. No paid research, outreach or third-party post. Keep Talivia paused and preserve design, app download, payments, licensing and private analytics. Unrelated audit changes and .impeccable untouched.
