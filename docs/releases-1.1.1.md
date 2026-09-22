# ClearDisk 1.1.1 — 22 September 2026

Owner-authorized shared developer key: 123456789. App and Worker normalize it to CLDK-0000-0001-2345-6789. It requires the normal active server record and signed machine receipt, with the existing three-Mac limit. One slot was used to verify this development Mac; activation on the same Mac reuses that slot. No debug-only bypass remains. Revoke the record in LICENSES to disable future activations; existing offline receipts follow the app's usual weekly recheck behavior.

Universal build 8 is Developer ID signed, notarized and stapled. Public DMG: 4,080,490 bytes; SHA256 c6bcc9ed671ae922618947f4dfa6283904afa5c1a0ac2a1f9e27b946b900a862. Source app commit fe96937.

Swift tests and 49 website tests passed, plus typecheck, lint and production build. Live activation returned a receipt verified against the app's Ed25519 public key. No files removed during validation.
