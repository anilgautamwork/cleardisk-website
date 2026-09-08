import type { Guide } from './guides.ts';

// Editorial review and Apple source check: 2026-09-09. Ship with ClearDisk 1.1.
export const icloudGuides: Guide[] = [
  {
    slug: 'icloud-drive-stuck-uploading-mac',
    title: 'iCloud Drive stuck uploading on Mac: what to check',
    description:
      'Investigate iCloud Drive waiting to upload on Mac: compare file status, check account and disk space, preserve unsynced work, and collect useful evidence.',
    summary:
      'A pending upload is an observation, not proof that synchronization is broken. Find the affected files, protect their latest contents, and compare the same evidence later.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-start-with-one-affected-file',
        title: 'Start with one affected file',
        paragraphs: [
          'Choose a document you recognize and note where its latest edits were made. In Finder, open iCloud Drive in List view and enable iCloud Status in View Options. Record the status, file path and time. Waiting to Upload means the file has not yet reached iCloud; a cloud-only item is a different, normal condition.',
          'Our suggested comparison is between the same document on this Mac and its visible copy on iCloud.com. A web copy with an older date is a reason to preserve the local version. Avoid editing both copies while investigating, because that introduces another change to reconcile.',
        ],
      },
      {
        id: '2-check-the-two-kinds-of-space',
        title: 'Check the two kinds of space',
        paragraphs: [
          'Review the account storage in System Settings → your name → iCloud, then separately check General → Storage for this Mac. A free local disk does not establish that the account has room. Likewise, buying cloud capacity does not create working space on your SSD.',
          'Check that iCloud Drive is enabled for this Mac and that you are using the intended Apple Account. Check Apple’s System Status page for a reported incident. An ordinary working internet connection is useful evidence, but does not prove that every iCloud service is healthy.',
        ],
      },
      {
        id: '3-compare-observations-before-calling-it-stuck',
        title: 'Compare observations before calling it stuck',
        paragraphs: [
          'Leave the Mac connected and compare the same file later. There is no universal waiting period that proves failure: a large transfer and a small edited note have different circumstances. Record whether the status changes, new edits occur, or other files complete.',
          'ClearDisk 1.1’s iCloud Doctor uses comparable local scan history to flag potentially stuck items. That phrase describes repeated matching pending observations, not continuous monitoring or a guaranteed diagnosis. Unknown metadata and incomplete scans cannot establish a healthy account.',
        ],
      },
      {
        id: '4-keep-a-useful-escalation-record',
        title: 'Keep a useful escalation record',
        paragraphs: [
          'If the same file remains pending, preserve a separate copy of important unsynced work before changing account settings. Note the macOS version, exact status and whether other files are affected. Share filenames or screenshots with support only after reviewing them for private information.',
          'Resolve explicit conflicts in the app that owns the document. Do not erase hidden sync databases, repeatedly sign out, or delete the original to force a retry. iCloud Doctor can surface observed errors and reveal a file in Finder; it cannot force Apple’s servers to accept it.',
        ],
      },
    ],
    related: [
      'icloud-drive-status-icons-mac',
      'icloud-storage-full-but-not-mac',
      'icloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: check iCloud Drive file and folder status',
        url: 'https://support.apple.com/en-ae/guide/mac-help/mchlc994344b/mac',
      },
      {
        label: 'Apple: set up iCloud Drive',
        url: 'https://support.apple.com/en-us/118443',
      },
      {
        label: 'Apple: manage iCloud storage',
        url: 'https://support.apple.com/en-us/108922',
      },
      {
        label: 'Apple: System Status',
        url: 'https://www.apple.com/support/systemstatus/',
      },
    ],
  },
  {
    slug: 'icloud-drive-status-icons-mac',
    title: 'iCloud Drive status icons on Mac, explained',
    description:
      'Understand Finder’s iCloud status column on Mac, distinguish cloud-only files from pending uploads, and use the status to choose the right next step safely.',
    summary:
      'File location and file availability are different facts. Use Finder’s iCloud Status column to understand what macOS reports before downloading, archiving or removing anything.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-make-status-visible',
        title: 'Make status visible',
        paragraphs: [
          'Open iCloud Drive in Finder, switch to List view and turn on iCloud Status in View Options. Read the row for the individual item rather than relying only on the folder’s appearance. A folder can contain files in different stages.',
          'Keep the path visible when comparing similarly named documents. Our practical advice is to record the exact item and time, since a status that was true before another app saved changes may no longer describe the latest version.',
        ],
      },
      {
        id: '2-separate-availability-from-a-problem',
        title: 'Separate availability from a problem',
        paragraphs: [
          'In iCloud describes content that needs a download before offline use. Downloaded indicates a locally available, up-to-date item. Keep Downloaded expresses an intention to retain it locally when storage optimization runs.',
          'These are useful storage states, not a ranking from bad to good. For example, reference material you rarely open may be perfectly useful as cloud-only content. An upcoming presentation has a different requirement because you need its contents without a network.',
        ],
      },
      {
        id: '3-read-pending-and-error-states-carefully',
        title: 'Read pending and error states carefully',
        paragraphs: [
          'Waiting to Upload describes unfinished cloud storage of an item. Out of Space points to cloud capacity. Ineligible means the item cannot be stored there; inspect Apple’s current limits and the affected item instead of assuming all sync problems share one cause.',
          'A transfer indicator suggests activity, but a screenshot alone cannot tell you how long that activity has lasted. Our recommendation is to compare the same item later and keep any explicit error text. Do not convert an unknown or missing value into a reassuring success label.',
        ],
      },
      {
        id: '4-use-observations-to-choose-an-action',
        title: 'Use observations to choose an action',
        paragraphs: [
          'For offline access, request a download and verify it finishes. For a persistent upload issue, use the pending-upload guide. For local space, review uploaded local copies rather than deleting a file because a cloud icon looks unfamiliar.',
          'ClearDisk 1.1’s iCloud Doctor groups observed metadata into errors, conflicts, pending transfers, local copies and cloud-only items. Its Unknown state remains a limitation of the observation. These results do not measure your whole iCloud account or inspect Photos, Notes and Messages.',
        ],
      },
    ],
    related: [
      'icloud-drive-stuck-uploading-mac',
      'keep-icloud-files-downloaded-mac',
      'icloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: check iCloud Drive file and folder status',
        url: 'https://support.apple.com/en-ae/guide/mac-help/mchlc994344b/mac',
      },
      {
        label: 'Apple: work with files and folders in iCloud Drive',
        url: 'https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac',
      },
    ],
  },
  {
    slug: 'icloud-storage-full-but-not-mac',
    title: 'iCloud storage full but your Mac has space?',
    description:
      'Understand an iCloud storage-full warning even when your Mac has free space, or after deleting files. Check account categories and choose the right action.',
    summary:
      'Your iCloud plan and your Mac’s SSD have separate limits. Check the account’s category breakdown before treating a storage warning as a problem a Mac cleaner can solve.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-identify-the-warning’s-owner',
        title: 'Identify the warning’s owner',
        paragraphs: [
          'Write down whether the warning appears in iCloud settings, Finder, Photos or a local installer. Then compare the iCloud account total with the Mac’s available disk space. Those numbers answer different questions and should not be expected to match.',
          'Apple’s account-storage guidance lists several consumers, including backups, Photos, Drive, Mail and Messages. A small iCloud Drive folder on your Mac does not rule out a full account, because it represents only part of that storage.',
        ],
      },
      {
        id: '2-if-you-already-deleted-files',
        title: 'If you already deleted files',
        paragraphs: [
          'Check what action you actually used. Removing a local download leaves the cloud original in place, so that operation is not a reduction in your iCloud plan usage. Deleting unrelated Mac caches also leaves the account total unchanged.',
          'If you intentionally deleted cloud originals, check the account breakdown again rather than subtracting a Finder folder size from the account total. Our recommendation is to confirm which category changed and whether the file still appears in the intended account. Avoid deleting more while the result is unclear.',
        ],
      },
      {
        id: '3-review-the-category-that-actually-uses-space',
        title: 'Review the category that actually uses space',
        paragraphs: [
          'Use Apple’s Manage iCloud Storage instructions for the category involved. An old device backup is a different decision from an active shared folder or a Photos library. Preserve material you need before making a permanent change.',
          'Do not empty every Recently Deleted area on the assumption that it explains the warning. Recovery and quota rules differ by service; read the guidance for the category you are reviewing. If a category remains inconsistent with what you see, collect those specific observations for Apple support.',
        ],
      },
      {
        id: '4-choose-a-mac-tool-for-a-mac-question',
        title: 'Choose a Mac tool for a Mac question',
        paragraphs: [
          'A local scanner is useful when you need to identify what occupies the SSD. ClearDisk’s iCloud Doctor focuses on accessible Drive metadata and allocated local bytes. It cannot calculate complete account usage, remove iPhone backups from your account, or repair quota accounting.',
          'An archive is a separate retained copy. It becomes part of a cloud-space decision only if you later review and intentionally delete the cloud original, with the effect on other synced devices understood. Keep the backup and deletion decisions separate.',
        ],
      },
    ],
    related: [
      'icloud-drive-taking-up-space-on-mac',
      'archive-icloud-drive-to-mac',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Apple: manage iCloud storage',
        url: 'https://support.apple.com/en-us/108922',
      },
      {
        label: 'Apple: iCloud storage versus device storage',
        url: 'https://support.apple.com/en-us/102670',
      },
    ],
  },
  {
    slug: 'icloud-remove-download-missing-mac',
    title: 'iCloud Remove Download missing on Mac?',
    description:
      'Check why Remove Download may be unavailable for an iCloud Drive file on Mac, inspect its current state, and avoid confusing local removal with deletion.',
    summary:
      'An unavailable control is a reason to inspect the file’s location and state. Deleting the file is not a substitute for removing its local download.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-confirm-the-actual-location',
        title: 'Confirm the actual location',
        paragraphs: [
          'Reveal the item in Finder and inspect its path. Search results, aliases and recent-file lists can lead to a document outside iCloud Drive. Another provider’s folder may have its own controls and availability rules.',
          'Start with one ordinary file whose purpose you understand. Our diagnostic sequence uses a single row so that a mixed selection of folders, packages and documents does not hide which item is responsible for the missing action.',
        ],
      },
      {
        id: '2-read-the-current-state',
        title: 'Read the current state',
        paragraphs: [
          'Check Finder’s iCloud Status column. A file already stored only in the cloud does not offer the same useful local-space opportunity as a downloaded file. If it is waiting, transferring or reporting a conflict, address that state before trying to remove a copy.',
          'If Finder shows Keep Downloaded, review whether you still need that retention setting. Apple documents deselecting it separately. Changing a retention preference is not proof that bytes have already been freed.',
        ],
      },
      {
        id: '3-avoid-unsafe-substitutes',
        title: 'Avoid unsafe substitutes',
        paragraphs: [
          'Do not drag the item to Trash or delete files from hidden synchronization directories to mimic Remove Download. Those operations have different consequences. Keep the document intact while you determine why the supported control is unavailable.',
          'ClearDisk 1.1 rechecks metadata before requesting local eviction and refuses unsafe or uncertain states. A refusal protects work that may not be uploaded. It is not evidence that bypassing the check through another tool is safe.',
        ],
      },
      {
        id: '4-measure-the-outcome-you-wanted',
        title: 'Measure the outcome you wanted',
        paragraphs: [
          'After an allowed local-removal request, observe the file’s new state and the Mac’s available space. Request accepted does not mean completed. Opening the document to inspect its contents can download it again.',
          'If Finder still offers no explanation, record the item type, macOS version and visible status for support. Use the existing iCloud local-storage guide for the wider storage workflow; this page is specifically for diagnosing an unavailable action.',
        ],
      },
    ],
    related: [
      'icloud-drive-status-icons-mac',
      'icloud-drive-taking-up-space-on-mac',
      'icloud-drive-stuck-uploading-mac',
    ],
    sources: [
      {
        label: 'Apple: work with files and folders in iCloud Drive',
        url: 'https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac',
      },
      {
        label: 'Apple: check iCloud Drive file and folder status',
        url: 'https://support.apple.com/en-ae/guide/mac-help/mchlc994344b/mac',
      },
    ],
  },
  {
    slug: 'keep-icloud-files-downloaded-mac',
    title: 'Keep iCloud files downloaded for offline use on Mac',
    description:
      'Prepare iCloud Drive documents for offline work on Mac: distinguish Download Now from Keep Downloaded, check supporting files, and verify before travelling.',
    summary:
      'Download Now requests a local copy. Keep Downloaded asks Finder to retain selected content. Prepare and verify the files your work needs before losing your connection.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-make-an-offline-working-set',
        title: 'Make an offline working set',
        paragraphs: [
          'List the documents needed for the actual task: a presentation, its source images, reference PDFs and any linked assets. A main document that opens is not sufficient if its references remain unavailable.',
          'Our suggested approach is a small, named working set. Avoid selecting your entire Drive as a shortcut, especially if the Mac is already short of space. Check available local capacity before requesting a large collection. Include any app-specific credentials or licenses your workflow needs separately; downloading documents does not make a web-only app work offline.',
        ],
      },
      {
        id: '2-choose-the-right-finder-control',
        title: 'Choose the right Finder control',
        paragraphs: [
          'Apple documents Download Now for retrieving content and Keep Downloaded for retaining selected items despite storage optimization. Finder’s wording and availability depend on the macOS version and current file state.',
          'ClearDisk 1.1’s download action requests retrieval; it is not persistent pinning. Use Finder for Keep Downloaded. If you need retention beyond the current session, make that choice explicitly instead of assuming every downloaded file will stay forever.',
        ],
      },
      {
        id: '3-verify-with-the-work-itself',
        title: 'Verify with the work itself',
        paragraphs: [
          'Wait for the download state to finish, then open the needed documents and their supporting resources. Our recommended offline check is to save work, temporarily disconnect, and confirm that the task can be completed from the local copies.',
          'Do not treat that check as a backup test. A locally available document still participates in synchronization when the connection returns. Keep a separate backup for work that needs independent retention.',
        ],
      },
      {
        id: '4-review-the-working-set-afterward',
        title: 'Review the working set afterward',
        paragraphs: [
          'When the trip or project ends, revisit the files you retained. Decide which still need offline access and which you can retrieve later. Age alone is not proof a document is unused.',
          'If you choose to reduce local copies, confirm their latest edits are uploaded first. Removing a local download affects offline availability and Mac storage; deleting the original affects the synced document. Use the local-storage guide for that separate decision.',
        ],
      },
    ],
    related: [
      'icloud-drive-taking-up-space-on-mac',
      'icloud-remove-download-missing-mac',
      'archive-icloud-drive-to-mac',
    ],
    sources: [
      {
        label: 'Apple: work with files and folders in iCloud Drive',
        url: 'https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac',
      },
      {
        label: 'Apple: archive or copy your iCloud information',
        url: 'https://support.apple.com/en-ca/108306',
      },
    ],
  },
  {
    slug: 'archive-icloud-drive-to-mac',
    title: 'Archive iCloud Drive files to your Mac safely',
    description:
      'Create an independent local copy of iCloud Drive files, verify its contents and destination, and understand why archiving alone does not free cloud storage.',
    summary:
      'A useful archive is a verified copy outside synchronization. Keep the cloud original until you have checked the copy and made a separate decision about deletion.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-choose-a-destination-outside-sync',
        title: 'Choose a destination outside sync',
        paragraphs: [
          'A folder called Archive is not automatically local-only. Desktop and Documents may themselves belong to iCloud Drive, and another cloud provider may manage other locations. Check the full destination path and its synchronization settings.',
          'Prefer a destination whose ownership and backup plan you understand. Our recommendation is to start with one ordinary document. Do not merge a new archive into a folder full of similarly named older files where accidental overwrites are hard to spot.',
        ],
      },
      {
        id: '2-retrieve-content-before-relying-on-a-copy',
        title: 'Retrieve content before relying on a copy',
        paragraphs: [
          'Cloud-only entries need their contents downloaded before they can become an independent archive. Account for download time and available local capacity. Apple’s archive guidance explains copying Drive files and notes that sharing access does not transfer with a copied file.',
          'Our verification approach is to preserve the source while checking the destination. Do not use a move operation as the first proof that a usable copy exists. For live projects, close the owning app or pause editing so the source does not change during the copy.',
        ],
      },
      {
        id: '3-verify-the-archive,-including-its-limits',
        title: 'Verify the archive, including its limits',
        paragraphs: [
          'Open the copied document from the destination path and check the content you need. For a collection, compare the expected members rather than judging success from one folder name or matching total size. Keep an independent backup of the archive if it matters.',
          'ClearDisk 1.1’s Archive to Mac workflow copies supported regular files to a checked nonsynced destination, verifies bytes and source stability, and retains the cloud original. Unsupported items or uncertain destinations are refused. An incomplete copy must not be treated as a verified archive.',
        ],
      },
      {
        id: '4-decide-about-the-original-separately',
        title: 'Decide about the original separately',
        paragraphs: [
          'A completed archive adds a copy; it does not free iCloud space. ClearDisk leaves the final original-file review in Finder. If you later delete an iCloud original, that deletion affects other devices using the same Drive.',
          'Before that decision, consider shared access, linked documents and the archive’s backup. If your goal was simply less SSD use while keeping cloud access, removing a local download is a different workflow and may fit better.',
        ],
      },
    ],
    related: [
      'icloud-storage-full-but-not-mac',
      'icloud-drive-taking-up-space-on-mac',
      'icloud-desktop-documents-files-missing-mac',
    ],
    sources: [
      {
        label: 'Apple: archive or copy your iCloud information',
        url: 'https://support.apple.com/en-ca/108306',
      },
      {
        label: 'Apple: work with files and folders in iCloud Drive',
        url: 'https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac',
      },
    ],
  },
  {
    slug: 'icloud-desktop-documents-files-missing-mac',
    title: 'Desktop files missing after changing iCloud settings?',
    description:
      'Find Desktop and Documents files after changing iCloud Drive settings on Mac, compare local and cloud folders, and avoid replacing a complete copy too soon.',
    summary:
      'A new empty Desktop does not by itself prove deletion. Inspect the local and iCloud locations before moving folders or changing more settings.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-record-what-changed',
        title: 'Record what changed',
        paragraphs: [
          'Note whether you turned off Desktop and Documents, disabled Drive entirely, signed out, or changed accounts. Those actions are different. Keep the approximate time and the choices you made in any macOS prompts.',
          'Our first step is inspection rather than another settings change. Repeatedly toggling synchronization makes it harder to identify which folder contains the latest copy and can introduce more copies that need review.',
        ],
      },
      {
        id: '2-inspect-local-and-cloud-locations',
        title: 'Inspect local and cloud locations',
        paragraphs: [
          'Apple explains that turning off Desktop and Documents leaves the existing content in iCloud Drive while creating local folders. Open iCloud Drive in Finder and compare its Desktop and Documents folders with the folders in your home directory.',
          'If you chose to keep a local copy when disabling Drive or signing out, check for the resulting iCloud Drive archive in your home folder. Verify its actual contents. A name or a remembered prompt is not proof that every file downloaded successfully.',
        ],
      },
      {
        id: '3-reconcile-copies-deliberately',
        title: 'Reconcile copies deliberately',
        paragraphs: [
          'Compare a few recognizable documents by content and latest edits. If the same name exists in both places, avoid overwriting either version until you understand which changes you need. Keep a separate copy before merging important work.',
          'Our recommended trial is one completed document copied to the intended nonsynced destination. Confirm it opens from that path. For a large collection, make a list of expected folders and verify the result before considering cleanup.',
        ],
      },
      {
        id: '4-if-an-item-is-still-missing',
        title: 'If an item is still missing',
        paragraphs: [
          'Check the intended Apple Account on iCloud.com and use Recently Deleted if actual deletion may have occurred. If a different device still has a needed version, preserve it before making further edits or changes to sync settings.',
          'iCloud Doctor inspects accessible Drive items, not every prior account state or deleted file. An empty or unavailable scan cannot prove your cloud data is gone. Use the recovery guide or Apple support when you cannot locate the original.',
        ],
      },
    ],
    related: [
      'archive-icloud-drive-to-mac',
      'recover-deleted-icloud-drive-files-mac',
      'icloud-drive-status-icons-mac',
    ],
    sources: [
      {
        label: 'Apple: turn off Desktop and Documents',
        url: 'https://support.apple.com/en-gb/126628',
      },
      {
        label: 'Apple: set up iCloud Drive',
        url: 'https://support.apple.com/en-us/118443',
      },
      {
        label: 'Apple: recover deleted files on iCloud.com',
        url: 'https://support.apple.com/en-euro/guide/icloud/-mmae56ea1ca5/icloud',
      },
    ],
  },
  {
    slug: 'recover-deleted-icloud-drive-files-mac',
    title: 'Recover deleted iCloud Drive files on Mac',
    description:
      'Look for deleted iCloud Drive documents in Mac Trash and iCloud recovery, understand the recovery window, and preserve restored files before more cleanup.',
    summary:
      'Stop further cleanup and check the recoverable locations first. Recovery depends on what was deleted, when it happened, and whether it was permanently removed.',
    published: '2026-09-09',
    updated: '2026-09-09',
    sections: [
      {
        id: '1-distinguish-deletion-from-a-removed-download',
        title: 'Distinguish deletion from a removed download',
        paragraphs: [
          'If the item is still visible in iCloud Drive with a cloud-only state, its local content may simply need downloading. That is different from a document missing from the folder after a delete action.',
          'Our first check is the filename, expected folder and intended account. Search carefully for renamed or moved copies before restoring an older version over current work. A missing item in a local scanner does not establish that the cloud original was deleted.',
        ],
      },
      {
        id: '2-check-trash-and-web-recovery',
        title: 'Check Trash and web recovery',
        paragraphs: [
          'Look in the Mac’s Trash for the document. Apple also documents recovery of eligible deleted files through iCloud.com within 30 days. In iCloud Drive on the web, inspect Recently Deleted; other supported app files may appear through Data Recovery.',
          'Permanently removed files cannot be recovered through that Apple recovery workflow. Do not promise yourself a second chance before emptying Trash or choosing permanent deletion. If the item is recoverable, restore it and check its original folder.',
        ],
      },
      {
        id: '3-verify-the-restored-version',
        title: 'Verify the restored version',
        paragraphs: [
          'Open the restored file and inspect the actual content, especially its latest edits. Our recommendation is to save a separate copy before resuming collaborative editing so that you have a reference if a version conflict appears.',
          'If several similarly named files exist, compare them without overwriting. A recovered item can be the right filename but still need reconciliation with changes saved elsewhere. For an application-managed document, use the owning app’s version or recovery features where available.',
        ],
      },
      {
        id: '4-if-recovery-is-unavailable',
        title: 'If recovery is unavailable',
        paragraphs: [
          'Check independent backups and any archive you made before deletion. Preserve any surviving copy on another device before attempting more changes. For irreplaceable material, contact Apple or the owning app’s support with the timeline and the exact recovery state.',
          'ClearDisk’s iCloud Doctor is a metadata and local-storage tool, not a deleted-file recovery service. Its archive workflow retains the cloud original and asks you to review deletion separately in Finder. That boundary helps prevent cleanup from becoming an accidental recovery task.',
        ],
      },
    ],
    related: [
      'archive-icloud-drive-to-mac',
      'icloud-desktop-documents-files-missing-mac',
      'icloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: recover deleted files on iCloud.com',
        url: 'https://support.apple.com/en-euro/guide/icloud/-mmae56ea1ca5/icloud',
      },
      {
        label: 'Apple: delete files in iCloud Drive on iCloud.com',
        url: 'https://support.apple.com/en-ie/guide/icloud/mm3b7fcd0c10/icloud',
      },
    ],
  },
];
