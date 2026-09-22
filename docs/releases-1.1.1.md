# ClearDisk 1.1.1 — 22 September 2026

Owner-authorized shared developer key: 123456789. App and Worker normalize it to CLDK-0000-0001-2345-6789. It requires the normal active server record and signed machine receipt, with no device limit for this developer key, as requested by the owner. Paid keys retain their three-Mac limit. No debug-only bypass remains. Revoke the record in LICENSES to disable future activations; existing offline receipts follow the app's usual weekly recheck behavior.

Universal build 8 is Developer ID signed, notarized and stapled. Public DMG: 4,080,490 bytes; SHA256 c6bcc9ed671ae922618947f4dfa6283904afa5c1a0ac2a1f9e27b946b900a862. Source app commit fe96937.

Swift tests and 49 website tests passed, plus typecheck, lint and production build. Live activation returned a receipt verified against the app's Ed25519 public key. No files removed during validation.

Unlimited-key follow-up: Worker e26b8ba8-9b0a-4513-8ab1-75c97e9e7f87. All 49 tests, typecheck, lint and build passed. Four additional named QA machines activated live with verified signatures, beyond the existing developer Mac. QA records are intentionally retained; they do not limit developer use. App 1.1.1 needs no further rebuild.
