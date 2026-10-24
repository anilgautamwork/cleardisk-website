# ClearDisk 2.2.0 (13) — October 24, 2026

## Scope

Owner-authorized app release plus two distinct, source-checked blog articles. WhySlow's performance engine is integrated into ClearDisk with the existing license and Sparkle updater. New Performance section: Overview, Processes, Background Items, Internet and Usage, supported Chromium browser review, optional menu-bar monitoring and login startup. Confirmed actions include quitting apps, supported browser operations and Spotlight reindexing. No new payment mode or license backend.

## Release artifact

- Universal macOS 15+ app; Developer ID signed, notarized and stapled.
- App notarization: df204305-4da8-4fe1-91c5-b9bb1e0fad78.
- DMG notarization: 170d0c48-6951-423a-a7c8-f34e8a7833a9.
- DMG bytes: 8,343,384.
- SHA256: c4eef9f0fb016a4d1598ac2027779b209be187722edecfb08c0954863abde746.
- Immutable archive: /updates/ClearDisk-2.2.0-13.dmg. Existing versioned archives preserved; signed feed retains the three newest entries.
- Update release metadata, privacy disclosure, pricing entitlement copy and press fact sheet/ZIP together. Historical guide test-version claims remain unchanged.

## Validation and limitations

Full Swift unit suite: 200 passed, zero failed/skipped (60 Core, 16 SyncDoctorCore, 119 PerformanceCore, 5 PerformanceUI). Universal production build, bundle UUID/catalog/update policy checks, strict deep codesign, stapler validation, Gatekeeper, signed feed verification, plist/shell lint passed. No separate Swift lint command configured. Existing iCloud compiler warnings and x86_64 deprecation warning remain.

Final signed app startup/live Performance readings verified with existing license. Native UI was previously reviewed at minimum and enlarged window sizes. Optional menu-bar startup tested; popover interaction remains unverified after computer-use automation failure. Live browser permission/actions, privileged reindex/restart and bandwidth test were not exercised on the owner's data. Fixture coverage is not claimed as an end-to-end privileged-action test.

Website validation and publication evidence follow below after completion.


## Publication verified — October 24

Website source 028ea9a72ec5a5127ae4db243548c2585b9afcdc deployed to the existing personal Cloudflare Worker: c8e02a7e-4007-4cde-ac8f-cedff1fbf2d3. App source 21ac575 plus exact-artifact manifest b95cdf2 tagged v2.2.0. GitHub Actions run 40060105899 succeeded; public release https://github.com/anilgautamwork/cleardisk-app/releases/tag/v2.2.0 has the matching 8,343,384-byte DMG and SHA256 c4eef9f0fb016a4d1598ac2027779b209be187722edecfb08c0954863abde746.

Full website unit suite 58 passed, zero failed/skipped/cancelled/todo; lint/typecheck passed. Production build generated 176 HTML/RSC pairs. All 179 local and 179 live HTTP SEO route checks passed. A rebuild stopped the first local preview while replacing dist; restarted the preview and reran the complete local HTTP suite successfully. Final review checked changed pages, article source claims, related links, privacy copy and failure paths. Desktop/narrow browser review found no horizontal overflow. Press ZIP integrity/current fact sheet passed; the existing screenshot provenance was retained.

Live /download, /features, /press, /faq/cleardisk and both new blog articles return 200 with current content. Sitemap has 174 URLs, with October 24 lastmod for the two articles and the product FAQ. HTML/RSC delivery verified; direct internal snapshots return 404. Anonymous /analytics and /api/analytics return 401/no-store/noindex. Live DMG, immutable archive, checksum, press ZIP and signed appcast match committed bytes. Downloaded live feed signature and DMG Gatekeeper assessment passed. Verification used ClearDisk-QA; Sparkle downloads the versioned archive rather than the counted /ClearDisk.dmg route.

End-to-end production update verified: installed 2.1.0 offered 2.2.0, downloaded, installed and relaunched. About shows 2.2.0 (13), and the existing developer license remains active. No security permissions were expanded. Optional menu-bar popover and live browser/admin actions retain the documented validation limits.

Google indexing, rankings and traffic recovery have not been confirmed by publication. No new aggregate traffic/download metrics were retrieved during this release task; no counts are invented. Existing recovery queue remains, with a complete-window GSC refresh as the next priority. Unrelated audit edit and .impeccable directory preserved.
