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
