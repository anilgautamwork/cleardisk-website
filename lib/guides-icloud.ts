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
    questions: [
      {
        q: 'What does Waiting to Upload mean for a file in Finder?',
        a: "It means the file hasn't yet reached iCloud. Open iCloud Drive in Finder's List view and turn on iCloud Status in View Options to see this status for each item.",
      },
      {
        q: 'How long should I wait before considering an iCloud upload stuck?',
        a: "There's no universal waiting period, since a large transfer and a small edited note have different circumstances. Compare the same file's status later and note whether it changes, rather than assuming a fixed timeout means it's stuck.",
      },
      {
        q: 'Can ClearDisk tell me for certain that an iCloud upload is stuck?',
        a: "Not with certainty. ClearDisk 1.1's iCloud Doctor uses comparable local scan history to flag potentially stuck items, based on repeated matching pending observations rather than continuous monitoring or a guaranteed diagnosis.",
      },
      {
        q: 'Should I sign out of iCloud to fix a stuck upload?',
        a: "No. Avoid erasing hidden sync databases, repeatedly signing out, or deleting the original file to force a retry. Instead, preserve a copy of important unsynced work and check Apple's System Status page for reported incidents.",
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
    questions: [
      {
        q: "What's the difference between In iCloud and Downloaded status in Finder?",
        a: 'In iCloud describes content that needs a download before offline use, while Downloaded means the item is locally available and up to date. These are storage states, not a ranking from bad to good.',
      },
      {
        q: 'What does the Out of Space status mean for an iCloud Drive file?',
        a: "It points to a cloud capacity problem rather than a local disk issue. Ineligible is different again: it means the item can't be stored in iCloud Drive at all, so check the specific item and Apple's current limits.",
      },
      {
        q: 'Where do I turn on iCloud status icons in Finder?',
        a: 'Open iCloud Drive in Finder, switch to List view, and turn on iCloud Status in View Options. Read the status for each individual item, since a single folder can contain files in different stages.',
      },
      {
        q: "What does an Unknown status from ClearDisk's iCloud Doctor mean?",
        a: "It's a limitation of the observation, not a diagnosis. iCloud Doctor groups observed metadata into errors, conflicts, pending transfers, local copies and cloud-only items, but an Unknown result doesn't measure your whole account or inspect Photos, Notes or Messages.",
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
    questions: [
      {
        q: 'Why does iCloud say storage is full when my Mac has plenty of space?',
        a: "Because your iCloud plan and your Mac's SSD are separate limits answering different questions. Apple's account-storage breakdown includes backups, Photos, Drive, Mail and Messages, and a small local folder doesn't rule out a full account.",
      },
      {
        q: 'Will deleting local downloads fix a full iCloud account?',
        a: "No. Removing a local download leaves the cloud original in place, so it doesn't reduce how much of your iCloud plan is used. Check the account's category breakdown instead of Mac folder sizes.",
      },
      {
        q: 'Can ClearDisk tell me exactly why my iCloud account is full?',
        a: "Not fully. Its iCloud Doctor focuses on accessible Drive metadata and allocated local bytes; it can't calculate complete account usage, remove iPhone backups from your account, or repair quota accounting.",
      },
      {
        q: 'What should I check first when iCloud storage shows as full?',
        a: "Note which category is affected, such as backups, Photos, Drive, Mail or Messages, and check Apple's Manage iCloud Storage instructions for that category rather than deleting unrelated Mac caches, which won't change the account total.",
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
    questions: [
      {
        q: 'Why is Remove Download greyed out for an iCloud file?',
        a: "The control can be unavailable depending on the file's current state, for example if it's already cloud-only or is waiting, transferring, or reporting a conflict. Check Finder's iCloud Status column to see the actual state.",
      },
      {
        q: 'Can I delete an iCloud file in Finder instead of using Remove Download?',
        a: "No, they have different consequences. Deleting a file, or removing files from hidden synchronization directories, isn't a safe substitute for Remove Download, since it can affect the synced original rather than just the local copy.",
      },
      {
        q: 'Does requesting a local removal in ClearDisk free the space right away?',
        a: "Not necessarily. ClearDisk 1.1 rechecks metadata before requesting local eviction and refuses unsafe or uncertain states, but a request being accepted doesn't mean it's completed; check the file's new status and available space afterward.",
      },
      {
        q: 'Will opening a file after removing its local download use space again?',
        a: "Yes. Opening the document to inspect its contents can download it again, so check the file's state and your Mac's available space after removal rather than assuming it stays freed.",
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
    updated: '2026-09-18',
    sections: [
      {
        id: '1-make-an-offline-working-set',
        title: 'Make an offline working set',
        paragraphs: [
          'List the documents needed for the actual task: a presentation, its source images, reference PDFs and any linked assets. A main document that opens is not sufficient if its references remain unavailable.',
          'Choose the project folders you need rather than downloading your entire Drive. Check free space on the Mac before requesting a large collection. Open the apps you plan to use and check their offline requirements, including sign-in or license checks. Downloading a document will not make a web-only app work offline.',
        ],
      },
      {
        id: '2-choose-the-right-finder-control',
        title: 'Choose the right Finder control',
        paragraphs: [
          'Open Finder and select iCloud Drive in the sidebar. Control-click an online-only file and choose Download Now to retrieve it. To retain a file or folder when Optimize Mac Storage is enabled, Control-click it and choose Keep Downloaded. Look for the Keep Downloaded icon beside its name. Available controls depend on your macOS version and the current file state.',
          'ClearDisk 1.1’s download action requests retrieval; it is not persistent pinning. Use Finder for Keep Downloaded. If you need retention beyond the current session, make that choice explicitly instead of assuming every downloaded file will stay forever.',
        ],
      },
      {
        id: '3-verify-with-the-work-itself',
        title: 'Verify with the work itself',
        paragraphs: [
          'Wait for downloads to finish, then open the documents and their supporting files. Before travelling, save your work and briefly disconnect from the internet to rehearse the task. For a presentation, check that linked images appear and embedded videos play. Reconnect afterward so any saved changes can sync.',
          'Do not treat that check as a backup test. A locally available document still participates in synchronization when the connection returns. Keep a separate backup for work that needs independent retention.',
        ],
      },
      {
        id: '4-review-the-working-set-afterward',
        title: 'Review the working set afterward',
        paragraphs: [
          'After the trip, review which files still need offline access. For an item you no longer need to retain, Control-click it in Finder and choose Keep Downloaded again to clear the checkmark. This changes the retention setting; do not assume it immediately frees disk space.',
          'If you choose to reduce local copies, confirm their latest edits are uploaded first. Removing a local download affects offline availability and Mac storage; deleting the original affects the synced document. Use the local-storage guide for that separate decision.',
        ],
      },
    ],
    questions: [
      {
        q: "What's the difference between Download Now and Keep Downloaded in Finder?",
        a: "Download Now retrieves an online-only file once. Keep Downloaded asks Finder to retain it locally even when Optimize Mac Storage is enabled, so it isn't evicted again automatically.",
      },
      {
        q: "Does ClearDisk's download feature keep files downloaded permanently?",
        a: "No. ClearDisk 1.1's download action requests retrieval for that session; it is not persistent pinning. If you need a file to stay downloaded beyond the current session, use Finder's own Keep Downloaded control instead, since only that setting persists.",
      },
      {
        q: 'How do I prepare iCloud files for offline use before traveling?',
        a: 'List the documents and linked assets your task actually needs, download or Keep Downloaded that specific set rather than your entire Drive, and rehearse by briefly disconnecting from the internet to confirm everything opens.',
      },
      {
        q: 'Does keeping a file downloaded count as a backup?',
        a: "No. A locally available document still participates in synchronization once you reconnect, so it isn't a backup test. Keep a separate backup for any work that needs independent retention.",
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
          'ClearDisk 1.1’s Archive to Mac workflow copies supported documents and data-only folders or document packages into ~/ClearDisk Archives. It verifies bytes and source stability and retains the cloud original. Close the owning app first. Executable files and unsupported file metadata are refused with Finder guidance. The destination excludes known cloud locations; check that no other sync client watches it. An incomplete copy is not a verified archive.',
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
    questions: [
      {
        q: 'Where does ClearDisk save archived iCloud files?',
        a: "ClearDisk 1.1's Archive to Mac workflow copies supported documents, data-only folders or document packages into a folder called ~/ClearDisk Archives, verifying the bytes and source stability while keeping the cloud original in place.",
      },
      {
        q: 'Does archiving a file to my Mac free up iCloud storage?',
        a: "No. A completed archive adds a copy; it doesn't free iCloud space by itself. Freeing iCloud space needs a separate decision to delete the cloud original, which is left for you to review in Finder.",
      },
      {
        q: 'Will an archived copy keep the shared-file access from iCloud?',
        a: "No. Apple's archive guidance notes that sharing access does not transfer with a copied file, so a shared document loses that shared access once it becomes an independent archived copy.",
      },
      {
        q: 'Can I archive any type of iCloud file with ClearDisk?',
        a: 'Not everything. Executable files and files with unsupported metadata are refused with Finder guidance, and the archive destination excludes known cloud locations, so confirm no other sync client is watching wherever you archive to.',
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
    questions: [
      {
        q: 'Did I lose my files by turning off Desktop and Documents sync?',
        a: "Not automatically. Apple explains that turning off Desktop and Documents leaves the existing content in iCloud Drive while creating new local folders, so compare iCloud Drive in Finder against your home folder's Desktop and Documents.",
      },
      {
        q: 'Where do my files go if I chose to keep a local copy when disabling iCloud Drive?',
        a: 'macOS creates an iCloud Drive archive folder in your home folder; check that folder and verify its actual contents rather than assuming everything downloaded successfully.',
      },
      {
        q: 'Should I keep changing iCloud settings if my Desktop looks empty?',
        a: 'No. Inspection comes before more settings changes, since repeatedly toggling synchronization makes it harder to identify which folder holds the latest copy and can create additional copies that need review.',
      },
      {
        q: "Can ClearDisk's iCloud Doctor find files from a previous account state?",
        a: "No. It inspects accessible Drive items, not every prior account state or deleted file, so an empty or unavailable scan result doesn't prove your cloud data is actually gone.",
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
    updated: '2026-09-15',
    sections: [
      {
        id: '1-distinguish-deletion-from-a-removed-download',
        title: 'Distinguish deletion from a removed download',
        paragraphs: [
          'If the item is still visible in iCloud Drive with a cloud-only state, its local content may simply need downloading. That is different from a document missing from the folder after a delete action.',
          'Check the filename, folder and Apple Account first. Search for renamed or moved copies before restoring an older version over current work. If a local scanner cannot find a file, that alone does not mean the cloud original was deleted.',
        ],
      },
      {
        id: '2-check-trash-and-web-recovery',
        title: 'Check Trash and web recovery',
        paragraphs: [
          'Check the Mac’s Trash first. For iCloud Drive or iWork files, sign in at iCloud.com, open Drive and choose Recently Deleted. Select the files, then choose Recover. Apple allows recovery of eligible files deleted within the last 30 days.',
          'For files from other supported apps, open Data Recovery on iCloud.com, choose Restore Files, select the items and choose Restore Files again. Recovered files return to their original folders. Files you permanently removed cannot be restored through this workflow.',
          'Wait until recovery finishes before editing or deleting anything in iCloud Drive. Apple warns that changes during recovery can interrupt it. Do not start another cleanup while you wait.',
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
    questions: [
      {
        q: 'How do I recover a file I deleted from iCloud Drive?',
        a: "Check the Mac's Trash first, then sign in at iCloud.com, open Drive, choose Recently Deleted, select the files and choose Recover. Apple allows recovery of eligible files deleted within the last 30 days.",
      },
      {
        q: 'Can I recover iCloud files from apps other than Drive?',
        a: 'Yes. For files from other supported apps, open Data Recovery on iCloud.com, choose Restore Files, select the items, and choose Restore Files again; recovered files return to their original folders.',
      },
      {
        q: 'Should I keep working in iCloud Drive while a recovery is in progress?',
        a: 'No. Apple warns that changes during recovery can interrupt it, so wait until recovery finishes before editing or deleting anything else in iCloud Drive, and avoid starting another cleanup in the meantime.',
      },
      {
        q: 'Can ClearDisk recover permanently deleted iCloud files?',
        a: "No. ClearDisk's iCloud Doctor is a metadata and local-storage tool, not a deleted-file recovery service; its archive workflow keeps the cloud original and leaves deletion review to you in Finder rather than recovering files already deleted.",
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
