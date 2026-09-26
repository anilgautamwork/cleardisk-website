# Two ClearDisk demo scripts

Status: local drafts, not recordings or published posts. Prepared 16 September 2026 for campaign days 4–7. Generic plain-language copy in the existing product tone; no personal voice profile is assumed.

## Recording setup

Use a dedicated demo macOS account with invented filenames and no personal cloud account, notifications, license key or email visible. Show the actual app, not the website illustration. Verify the installed version before recording. All displayed numbers must come from that recording; do not promise a fixed saving or compare speed without measurements. No real user files are removed.

System Data requires a home-folder scan; a single-folder scan cannot supply that screen. The large-file demo can use a dedicated folder containing disposable sample files larger than 100 MB, visibly labelled sample data. Confirm the files appear before recording. Do not use sparse placeholders to imply real allocated storage.

## Demo 1: What is behind System Data? (45 seconds)

| Time | Picture | Spoken line |
| --- | --- | --- |
| 0–7 s | ClearDisk in the dedicated demo account; title overlay “Example Mac — your results will differ.” | “System Data is a category. Before removing anything, look at what is inside it.” |
| 7–17 s | Start the home scan; retain visible progress. If time is cut, label the cut “Scan time shortened.” | “ClearDisk scans locally. It does not delete files during the scan.” |
| 17–31 s | Open System Data and show one measured row and its explanation. Choose an actually available row with Review files. | “Read the category, then open the files behind it. A large number does not mean everything is disposable.” |
| 31–39 s | Select Review files; show the real browse view with invented paths. No cleanup action. | “Check the location and decide what you still use. This example stops at inspection.” |
| 39–45 s | End slate linking to the relevant guide. | “Scanning is free. Read our System Data guide before you clean.” |

Caption draft: “Wondering what System Data contains? Here is one example scan in ClearDisk, which we make. Inspect the category and files before deciding what to remove. No files were deleted in this demo.”
Guide: https://cleardisk.app/what-is-system-data-on-mac
Optional owned-site download link: https://cleardisk.app/download?utm_source=youtube

## Demo 2: Review a large file before cleanup (45 seconds)

| Time | Picture | Spoken line |
| --- | --- | --- |
| 0–8 s | Choose the dedicated sample folder, with sample-data label visible. | “A big file might be important. Start by finding it, not deleting it.” |
| 8–19 s | Scan, then open Large Files / Your biggest files. Show actual size and path. | “This view lists files over 100 megabytes, largest first. These are disposable examples.” |
| 19–28 s | Reveal one sample file in Finder, then return to ClearDisk. | “Check where it lives and what it is before choosing a cleanup action.” |
| 28–38 s | In a legitimately licensed demo account, choose Trash to open the review sheet. Point to both actions, then Cancel. | “Move to Trash and permanent removal are different choices. Permanent removal cannot be undone. I’m cancelling this example.” |
| 38–45 s | End slate. | “Scan for free. Cleanup requires a one-time ClearDisk license.” |

If this account is unlicensed, show the real license prompt or stop after Reveal. Do not bypass activation or edit the recording to suggest cleanup is free. Do not claim space was reclaimed: this script removes nothing, and moving a file to Trash alone does not empty it.

Caption draft: “Find the large file. Check its location. Review before removing. This ClearDisk walkthrough uses sample files and stops at Cancel; it does not claim any space saved. We make ClearDisk.”
Guide: https://cleardisk.app/find-large-files-on-mac
Optional owned-site download link: https://cleardisk.app/download?utm_source=youtube

## Evidence and next step

UI and behavior checked in repository source on 16 September: Sources/ClearDiskApp/SystemDataView.swift (home-scan requirement, Review files), LargeFilesView.swift (100 MB threshold), FileRows.swift (Reveal/Trash), DeleteForever.swift (review options, Cancel and license gate). Actual recording is still required to validate framing and timing. No screenshots of personal files were captured and no community post, creator message or paid ad was sent. Obtain owner approval before external distribution.

## 2.0.0 recording update — 26 September 2026

Source check: DeleteForever.swift now labels the confirmation “Type delete to confirm permanent removal”; ClearDiskApp.swift has “Check for Updates…”. Before recording, confirm About shows 2.0.0 or later. These are recording instructions, not a claim that a new recording exists.

For demo 2, keep the 28–38 second segment at the choice sheet and Cancel. If a separate close-up explains permanent removal, use a disposable long-named sample, select Remove Permanently to reveal the confirmation field, and say: “Type delete instead of the filename. Check the selected files before confirming. This skips Trash and cannot be undone.” End with Cancel; never click the final destructive button. Show the $10 one-time cleanup license accurately, and keep the key out of frame.

No recording, external post or message was made. This small script refresh prepares the existing demo for creator review without creating another overlapping demo.
