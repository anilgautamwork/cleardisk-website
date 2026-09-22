# Packaging correction — 22 September 2026, build 9

Build 8 displayed 1.1.1 but the packaging script copied a stale September9 executable from `.build/apple/Products/Release`. SwiftPM now writes this universal build to `.build/out/Products/Release`. The earlier API-only license verification did not establish that the distributed app accepted the short key. The user's report was reproduced in the native app.

Fixed make-app.sh to resolve SwiftPM's actual output with --show-bin-path and added check-packaged-build.sh comparing both architecture UUIDs after signing. The check failed on build8 and passed on build9. Native UI now shows “Licensed to Developer testing” and “Cleanup unlocked on this Mac.” The installed Applications copy was also updated, with its prior copy preserved in /tmp/ClearDisk-build8-backup.app. No cleanup was performed by this verification.

Corrected release: version1.1.1 build9, universal, signed, notarized and stapled; Gatekeeper accepted. DMG 4,052,016 bytes; SHA256 37eed6bab6bf809a1c568043015db6ec5cafdd062c587b8f8fc3979658b18d75. Source fix cdf2e46. Unlimited developer-key server behavior and paid-license limits are unchanged.

Production deployment: Worker 458023a9-e108-4952-b240-bd15dff506ba. All49website tests and production build passed. Live DMG/checksum match build9; /download and /sitemap.xml return200 and private analytics routes return401. QA download excluded from metrics.

## Earlier build8 record (superseded artifact; API verification only)

# ClearDisk 1.1.1 — 22 September 2026

Owner-authorized shared developer key: 123456789. App and Worker normalize it to CLDK-0000-0001-2345-6789. It requires the normal active server record and signed machine receipt, with no device limit for this developer key, as requested by the owner. Paid keys retain their three-Mac limit. No debug-only bypass remains. Revoke the record in LICENSES to disable future activations; existing offline receipts follow the app's usual weekly recheck behavior.

Universal build 8 is Developer ID signed, notarized and stapled. Public DMG: 4,080,490 bytes; SHA256 c6bcc9ed671ae922618947f4dfa6283904afa5c1a0ac2a1f9e27b946b900a862. Source app commit fe96937.

Swift tests and 49 website tests passed, plus typecheck, lint and production build. Live activation returned a receipt verified against the app's Ed25519 public key. No files removed during validation.

Unlimited-key follow-up: Worker e26b8ba8-9b0a-4513-8ab1-75c97e9e7f87. All 49 tests, typecheck, lint and build passed. Four additional named QA machines activated live with verified signatures, beyond the existing developer Mac. QA records are intentionally retained; they do not limit developer use. App 1.1.1 needs no further rebuild.
