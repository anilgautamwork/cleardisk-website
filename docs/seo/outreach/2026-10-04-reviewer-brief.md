# ClearDisk 2.1.0 reviewer brief

Prepared October 4, 2026, for Anil's review. Nothing has been sent. The release is available; recipient approval and any review-license decision are still separate.

## What a reviewer can download

[ClearDisk 2.1.0](https://cleardisk.app/download) runs on macOS 15 and later, on Apple silicon and Intel Macs. The app and DMG are Developer ID signed, notarized by Apple and stapled. [GitHub release notes and checksum](https://github.com/anilgautamwork/cleardisk-app/releases/tag/v2.1.0) describe the same installer. Notarization is a distribution security check, not an Apple endorsement.

Scanning is free. The existing cleanup license costs $10 once for three Macs. Local scans keep filenames and results on the Mac; activation and update checks use the network. No complimentary license, sponsorship or affiliate offer has been arranged.

## Two new checks to assess

Open **Mac checks** in the sidebar. A full home-folder scan is not required.

The Apple Intelligence tab inventories readable files in recognized model-asset folders. It distinguishes inaccessible locations from measured files. During release QA, the protected model contents on the test Mac could not be read, so the app showed a partial result and “Not measured”. That is not a zero-storage result. We have not verified a complete real model footprint on that Mac. The check does not delete models or promise 30 GB of recovered space.

The Intel apps tab reads the main executables of apps in /Applications and ~/Applications, including subfolders. It identifies Intel-only, Universal, Apple silicon, legacy 32-bit Intel and undetermined results. Helpers, plug-ins and apps elsewhere need separate inspection. A Universal result does not prove every component is ready for a future macOS release.

These are read-only checks. A reviewer can inspect the results and use Finder to examine an app without removing anything. Keep personal app names and paths out of published screenshots unless their owner wants them included.

## What we verified

The release record documents 76 Swift tests, signed-app checks and an in-app upgrade from 2.0.0 build 11 to 2.1.0 build 12. The existing developer-testing license remained activated. A new paid-license activation was not exercised in that release check. The website passed its 55 tests and 176 live SEO route checks.

Our September 30 [sample-file walkthrough](https://cleardisk.app/mac-storage-not-updating-after-deleting-files#sample-trash) shows a generated file being moved to Trash and restored. It was recorded with an earlier app version; it is not footage of the new Mac checks. A new Mac checks video has not been recorded.

For independent testing, note the Mac model, macOS version, ClearDisk build and any unreadable locations alongside the result. Report an undetermined app as undetermined. A screenshot of one Mac's totals is not a typical storage saving.

## Apple sources checked October 4

[Apple's Rosetta guidance](https://support.apple.com/102527) says general Rosetta support continues through macOS 27; macOS 28 retains a limited exception for certain older games. It also calls out components that need separate updates. ClearDisk does not determine those game exceptions.

[Apple Intelligence requirements](https://support.apple.com/en-us/121115) vary by hardware. Apple's listed storage requirements are not a measurement of every model file on a particular Mac. We make no universal 30 GB claim.

## Optional MacSparky draft

Use this only if Anil chooses the new-release angle instead of the existing sample-file message. [David's contact page](https://www.macsparky.com/about/) was checked today: desk@macsparky.com is his direct address, separate from customer support. It rejects paid link and cross-posting proposals and does not promise product reviews.

Subject: ClearDisk 2.1: Intel-app and Apple Intelligence storage checks

> Hi David,
>
> I make ClearDisk, a Mac storage scanner. Version 2.1 adds two read-only checks: an inventory of Intel-only apps and a view of readable Apple Intelligence model files.
>
> The limits matter here. The app checks each app's main executable, so plug-ins need a separate look. Protected model folders show as unmeasured; the result isn't a complete Apple Intelligence total or a promise to recover 30 GB.
>
> If this fits a future Mac maintenance topic, the free scanner and release details are at https://cleardisk.app/download. Cleanup uses our existing $10 one-time license.
>
> I'd welcome an independent assessment. No coverage or link is expected.
>
> Anil

Anil should review the wording before choosing whether to send it. No automated follow-ups, paid placements or review requirements are proposed. Incoming hello@cleardisk.app forwarding is configured; that does not establish permission to send as that address.

## Editorial check

Applied the Humanizer skill as a generic factual edit. Cut pitch padding, kept the concrete test boundaries, and checked the final draft for invented experience, endorsements and performance claims. No personal voice profile or AI-detector result is claimed. Release facts come from the [verified release record](../../releases-2.1.0.md); creator policy and Apple links were read today.
