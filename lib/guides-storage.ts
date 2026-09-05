import type { Guide } from './guides.ts';

const storage = {
  label: 'Apple: free up storage space on Mac',
  url: 'https://support.apple.com/en-us/102624',
};
const trash = {
  label: 'Apple: delete files and folders on Mac',
  url: 'https://support.apple.com/en-asia/guide/mac-help/mchlp1093/mac',
};
const snapshots = {
  label: 'Apple: Time Machine local snapshots',
  url: 'https://support.apple.com/en-us/102154',
};
const diskInfo = {
  label: 'Apple: disk information and purgeable space',
  url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
};
const cloudFiles = {
  label: 'Apple: work with files in iCloud Drive',
  url: 'https://support.apple.com/en-gb/guide/mac-help/mchl1a02d711/mac',
};

export const storageGuides: Guide[] = [
  {
    slug: 'find-large-files-on-mac',
    title: 'How to find large files on Mac before deleting anything',
    description:
      'Find large files on Mac using Storage settings and Finder, then check each file’s location, purpose and backup before deciding what to remove.',
    summary:
      'Start with the Documents view in Storage settings, then inspect the largest results in Finder. A large file is a candidate for review, not proof that it is unnecessary.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'storage-list',
        title: '1. Open the built-in large-file list',
        paragraphs: [
          'On macOS Ventura or later, open System Settings → General → Storage. Open Documents with its information button. Apple documents views for large files, downloads and a File Browser; click Size to sort the results. Select a candidate and use Show in Finder to inspect its location. Names and available categories can vary with your macOS version and files.',
          'Our suggested starting point is five recognizable results. Record their names, locations and approximate sizes before changing anything. This creates a manageable review list and avoids losing track of what you intended to keep halfway through a cleanup.',
        ],
      },
      {
        id: 'finder-search',
        title: '2. Narrow the search when you know the project or file type',
        paragraphs: [
          'Apple’s Finder search supports additional criteria. Search for a project name in Finder, click the plus button below the search field, and choose a criterion such as Kind. Other opens additional attributes. Check whether the selected search scope is the current folder or This Mac. Remove an unwanted criterion if results become too narrow.',
          'For example, searching a finished project by name and limiting the kind to movies can help separate exported videos from unrelated documents. Repeat for another known project rather than assuming one search covers everything on the drive. An empty result means that search found nothing; it does not establish that the disk contains no large files.',
        ],
      },
      {
        id: 'decision-checks',
        title: '3. Decide what each result represents',
        paragraphs: [
          'These are our practical review questions, rather than automatic deletion rules. The answer determines whether the next step is removal, a verified copy to another drive, or an application-specific storage workflow.',
        ],
        items: [
          'Is it an original or an export? A camera original and a compressed delivery copy can look similar while serving different purposes.',
          'Can you obtain it again? Check that the download still exists and that you retain any account access it requires.',
          'Is another project using it? A completed video can still depend on source audio or footage stored beside it.',
          'Is it a library or backup? Follow the relevant app’s management process instead of deleting pieces inside the package.',
          'Is it in a synced folder? Establish what deletion will do on your other devices before proceeding.',
        ],
      },
      {
        id: 'verify-space',
        title: '4. Verify a small change',
        paragraphs: [
          'For files you want to retain elsewhere, open the destination copy and check the content before removing the source. Keep irreplaceable work backed up independently. Moving a file between folders on the same drive is organization, not a plan for gaining capacity.',
          'Finder’s Trash lets you review ordinary file removals before permanent deletion. Apple provides File → Put Back for restoring an item still in Trash. Review its contents before emptying it; that final action permanently removes them.',
          'Compare available space afterward. Stop when you have room for the intended task. If recognizable documents do not explain the shortage, use the System Data guide to investigate the remaining categories instead of extending a bulk selection into unfamiliar folders.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'disk-space-analyzer-mac',
      'delete-iphone-backups-on-mac',
      'move-photos-library-to-external-drive',
    ],
    sources: [
      {
        label: 'Apple: Storage settings and Documents views',
        url: 'https://support.apple.com/en-gb/guide/mac-help/mchl3d437fbc/mac',
      },
      {
        label: 'Apple: narrow Finder search results',
        url: 'https://support.apple.com/en-ae/guide/mac-help/-mh15155/mac',
      },
      trash,
    ],
  },
  {
    slug: 'delete-iphone-backups-on-mac',
    title: 'How to delete old iPhone backups on Mac',
    description:
      'Review local iPhone and iPad backups in Finder, keep the restore points you need, and delete an identified backup without editing its internal files.',
    summary:
      'Use Finder’s Manage Backups list to identify and delete a local device backup. First decide which restore point you need to retain; an old backup can contain information your current device no longer has.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'which-backup',
        title: '1. Separate local backups from iCloud backups',
        paragraphs: [
          'This workflow covers backups stored on your Mac. Apple manages iCloud device backups separately through iCloud settings. Removing a backup from your iCloud account does not remove a local Finder backup. Apple also warns that deleting an iCloud backup turns off iCloud Backup for that device, so do not use that screen to solve a Mac disk-space problem.',
          'Our review rule: write down the device and the restore date you want to preserve. “Old” is not the same as “unneeded.” A backup made before you replaced a phone, removed an app or changed accounts may have a different purpose from yesterday’s backup.',
        ],
      },
      {
        id: 'identify-backups',
        title: '2. Identify the backup in Finder',
        paragraphs: [
          'Apple’s current instructions are to connect your iPhone or iPad by USB, select it in Finder and trust it if requested. In the General tab, choose Manage Backups. Control-click a backup to see actions including Delete, Archive and Show in Finder. Inspect the relevant entry before choosing Delete.',
          'For location checking, Finder → Go → Go to Folder accepts ~/Library/Application Support/MobileSync/Backup/. Apple identifies this as the local backup directory. Use the named Finder backup entry to establish what a folder belongs to; do not choose a restore point by an unfamiliar directory name alone.',
        ],
      },
      {
        id: 'retain-restore-point',
        title: '3. Check the restore point you will retain',
        paragraphs: [
          'If you need a fresh local backup and have enough room, Apple’s Finder workflow uses Back Up Now. After successful completion, Finder shows its date and time. Encryption is required to include Health and Activity data; keep the encryption password because Apple says the backup cannot be recovered without it.',
          'A successful timestamp is a useful check, not a reason to discard every historical copy. Our suggested decision checklist is below. If you cannot answer one of these questions, keep that backup while you resolve the uncertainty.',
        ],
        items: [
          'Which device does the backup represent, and is that device still available?',
          'Does the newer backup cover the information you want, or do you need an earlier state?',
          'If encrypted, do you have the password stored somewhere you can access after losing the phone?',
          'Are you removing your only remaining recovery copy for a retired or damaged device?',
        ],
      },
      {
        id: 'delete-and-check',
        title: '4. Remove one identified backup and check again',
        paragraphs: [
          'Return to Manage Backups, select the identified restore point, choose Delete and review the confirmation. Afterward, check the list to confirm that the backup you intended to keep is still present.',
          'Our recommendation is to remove complete backups through their management interface. Do not trim individual database files or folders inside a backup to make it smaller: partial removal leaves you unable to rely on that restore point.',
          'Compare the Mac’s available space before considering another deletion. If the gain is smaller than expected, investigate the measurement with the related guide. Do not remove a second backup merely to make a category bar reach a target. If backups repeatedly exhaust the disk, plan where you will keep recovery copies before the next device replacement.',
        ],
      },
    ],
    related: [
      'find-large-files-on-mac',
      'messages-taking-up-space-on-mac',
      'mac-storage-not-updating-after-deleting-files',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Apple: locate and manage iPhone and iPad backups',
        url: 'https://support.apple.com/en-us/108809',
      },
      {
        label: 'Apple: back up an iPhone or iPad with a Mac',
        url: 'https://support.apple.com/en-us/108796',
      },
      {
        label: 'Apple: view and manage iCloud device backups',
        url: 'https://support.apple.com/en-euro/guide/icloud/mm122d3ef202/icloud',
      },
    ],
  },
  {
    slug: 'icloud-drive-taking-up-space-on-mac',
    title: 'Why iCloud Drive takes up space on your Mac',
    description:
      'Check which iCloud files are downloaded, remove local downloads without deleting cloud files, and understand Keep Downloaded and offline access.',
    summary:
      'iCloud Drive can keep local copies for offline work. To reduce local storage while keeping a synced file, check its upload status and use Remove Download instead of deleting it.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'check-status',
        title: '1. Check whether the file is actually in iCloud',
        paragraphs: [
          'In Finder, open iCloud Drive, choose View → as List, then View → Show View Options and enable iCloud Status. Apple distinguishes Downloaded, In iCloud, Waiting to Upload, Keep Downloaded and Out of Space. Waiting to Upload means the item is not yet stored in iCloud; Out of Space refers to insufficient cloud capacity.',
          'Our first check is a small set of files you recognize. Resolve unfinished uploads before trying to remove local copies. A file merely appearing inside the iCloud Drive folder is not enough evidence that its latest contents have reached the cloud.',
        ],
      },
      {
        id: 'remove-local-copy',
        title: '2. Remove a download you no longer need offline',
        paragraphs: [
          'Apple’s local-storage action is to Control-click an item in iCloud Drive and choose Remove Download. Download Now brings a cloud-only file back for offline use. If Keep Downloaded is selected, Control-click and deselect it when you no longer want the item retained locally.',
          'Deleting is a different operation: Apple’s Desktop and Documents guidance explains that deleting an iCloud Drive file also deletes it from other devices signed into the same account. Use removal of the download when your goal is to keep the document but free local space.',
          'Our suggested trial is one completed document rather than an entire working folder. Confirm it remains listed with the expected cloud status. Avoid opening it immediately just to test the storage gain, since requesting its contents can require a download again.',
        ],
      },
      {
        id: 'choose-offline-files',
        title: '3. Plan what you need without internet',
        paragraphs: [
          'Apple says Optimize Mac Storage can leave older documents in iCloud when space is needed. Keep Downloaded lets you retain selected items. This is a storage policy, not a promise to remove a particular number of gigabytes immediately.',
          'Our practical approach is to make two short lists: work needed during travel and completed material you can retrieve later. Decide using the task you must finish, rather than the age or size of a file alone.',
        ],
        items: [
          'Before a trip, open the files you will need and verify their downloaded status while internet access is available.',
          'Include supporting material such as reference PDFs, source images and linked documents in your offline plan.',
          'For a completed project, keep an independent backup if losing it would matter; synchronization alone is not your retention plan.',
          'Repeat the review after the project ends so temporary offline needs do not become permanent local storage commitments.',
        ],
      },
      {
        id: 'limits',
        title: '4. Investigate missing controls or a small storage change',
        paragraphs: [
          'If Remove Download is unavailable, recheck that you are inspecting an iCloud Drive item and review its status. Do not work around the missing control by deleting hidden synchronization folders. Record the macOS version and status message for Apple support if the state remains unexplained.',
          'Compare local available space after the operation. Our diagnostic inference is that a large apparent document collection need not represent the same amount of removable local data: some entries may already be cloud-only. The correct next step is checking their status, not deleting more of the collection.',
          'iCloud Photos uses its own library and storage settings. If the large item is a Photos library, use the Photos guide rather than treating that package as an ordinary iCloud Drive document.',
        ],
      },
    ],
    related: [
      'cloud-drive-taking-up-space-on-mac',
      'photos-library-taking-up-space-mac',
      'find-large-files-on-mac',
      'move-photos-library-to-external-drive',
    ],
    sources: [
      cloudFiles,
      {
        label: 'Apple: check iCloud Drive file status',
        url: 'https://support.apple.com/en-ie/guide/mac-help/mchlc994344b/mac',
      },
      {
        label: 'Apple: Desktop and Documents in iCloud Drive',
        url: 'https://support.apple.com/en-gb/109344',
      },
    ],
  },
  {
    slug: 'purgeable-space-on-mac',
    title: 'Purgeable space on Mac: what it means and what to do',
    description:
      'Understand free versus available Mac storage, why purgeable space is not a junk folder, and how to investigate an operation that still needs more room.',
    summary:
      'Purgeable space is storage macOS can reclaim when needed. It may already be included in available space, so adding it to the available total can count the same capacity twice.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'read-the-labels',
        title: '1. Read the storage labels together',
        paragraphs: [
          'Apple’s Disk Utility guide explains that available storage can include both free and purgeable space. Select the relevant disk or volume in Disk Utility and inspect its information. Purgeable means macOS can remove eligible files when it needs their space; it is not an ordinary folder with a supported Empty command.',
          'An illustrative example: if a tool reports 40GB available, including 15GB purgeable, it has not promised 55GB available. The 15GB is already inside the 40GB figure. This arithmetic example explains the labels; it is not a measurement of your Mac or a guarantee about an installer’s requirements.',
        ],
      },
      {
        id: 'snapshots',
        title: '2. Understand the Time Machine connection',
        paragraphs: [
          'Apple counts Time Machine local snapshot storage as available and removes snapshots as they age or space is needed. These snapshots provide local recovery points when the backup disk is unavailable. A snapshot listing therefore does not establish how many additional bytes a cleaner can recover.',
          'Our recommendation is to preserve your normal backup routine. Reclassifying a recovery mechanism as junk does not improve the evidence about your storage problem. If a tool reports a snapshot count, do not convert that count into an assumed capacity estimate.',
        ],
      },
      {
        id: 'operation-fails',
        title: '3. If a download, copy or installation is blocked',
        paragraphs: [
          'Use the following diagnostic sequence. It is our practical troubleshooting workflow, not a claim that every failure is caused by purgeable space. The failure message and destination matter more than the largest number in a storage panel.',
        ],
        items: [
          'Record the exact warning and the amount of space the operation requests. Do not replace that requirement with a universal percentage.',
          'Confirm the destination volume. Free room on the internal drive does not increase the capacity of an external drive receiving a copy.',
          'Compare the same volume in the same tool before and after one change. Keep available and free figures separately labeled in your notes.',
          'Save work and pause optional downloads or exports so new files do not obscure the comparison.',
          'Review a few known large files if more working room is required, then retry the original operation once you have made a meaningful change.',
        ],
      },
      {
        id: 'avoid-forcing',
        title: '4. Avoid forcing a particular number',
        paragraphs: [
          'Do not manufacture huge temporary files to pressure the disk into purging data. Our reason is practical: filling the remaining working space introduces another competing operation while you are trying to diagnose a shortage. It also makes the before-and-after measurement harder to interpret.',
          'Deleting recognizable material you no longer need can be useful even when purgeable storage exists. Keep those decisions separate: determine whether you want the file, verify any retained copy, and check the operation afterward. The existence of reclaimable storage is not a reason to erase backups or system resources.',
          'If the requested operation still fails despite apparently sufficient available space, preserve the error text, destination and measurements for the application’s support team or Apple. Do not assume the discrepancy proves corruption, and do not repeatedly remove unrelated files. The related storage-after-deletion guide covers checks for a change that has not produced the result you expected.',
        ],
      },
    ],
    related: [
      'time-machine-snapshots',
      'mac-storage-not-updating-after-deleting-files',
      'mac-storage-glossary',
      'what-is-system-data-on-mac',
    ],
    sources: [diskInfo, snapshots],
  },
  {
    slug: 'mac-storage-not-updating-after-deleting-files',
    title: 'Mac storage not updating after deleting files?',
    description:
      'Check Trash, the destination volume, cloud-only files and available-space accounting before deleting more to fix a Mac storage number that has not changed.',
    summary:
      'First confirm that deletion finished and that you are measuring the drive those files occupied. Then compare available space, rather than relying only on a category bar.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'trash',
        title: '1. Check whether the files are still in Trash',
        paragraphs: [
          'Apple says a file moved to Trash still occupies storage until Trash is emptied. Open Trash and inspect the items. Restore anything you still need before choosing Empty Trash. Permanent deletion is the point at which that recovery opportunity ends.',
          'Our first diagnostic question is what “deleted” meant in your last action. Moving a file to Trash, removing a download and deleting material through an app are different operations. Write down which one you performed so you can evaluate its expected effect.',
        ],
      },
      {
        id: 'same-volume',
        title: '2. Compare the same storage location',
        paragraphs: [
          'This is a practical consistency check: confirm the original file’s location and the volume whose capacity you are watching. Removing a video from an external drive cannot be expected to free that amount on your Mac’s internal drive. Moving a file to a different folder on the same volume is not removal from that volume.',
          'If you copied files elsewhere, check that the copy finished and that you actually removed the originals afterward. Conversely, do not delete the originals just because a transfer window disappeared: open representative destination files and verify the copy first.',
        ],
      },
      {
        id: 'available-space',
        title: '3. Distinguish category changes from usable capacity',
        paragraphs: [
          'Apple says Storage settings update automatically as you free space. It does not give a fixed refresh deadline. Reopen System Settings → General → Storage after the operation finishes and compare the available-space figure. A particular category bar is not the only result worth checking.',
          'Disk Utility’s available figure can include purgeable storage. Apple also counts Time Machine local snapshots as available and manages their removal automatically. These definitions are why free, available and category totals should not be treated as interchangeable measurements.',
          'Our suggested note has four fields: time, volume, measurement label and value. For example, compare “internal volume, available” with the same field after cleanup. Comparing yesterday’s category total with today’s free-space number cannot isolate the result of a deletion.',
        ],
      },
      {
        id: 'cloud-and-growth',
        title: '4. Check cloud status and competing activity',
        paragraphs: [
          'Apple distinguishes iCloud Drive entries stored only in the cloud from downloaded files. Removing an already cloud-only document is not a useful way to recover its full apparent size locally. Review the iCloud Drive guide before removing additional synced content.',
          'Our troubleshooting inference is that new downloads, exports or other app activity can offset the effect of a deletion. Save your work, pause optional transfers and compare once more during a quiet period. If the same folder keeps increasing, record its path and the application you were using when it changed.',
        ],
      },
      {
        id: 'next-step',
        title: '5. Choose the next step from the evidence',
        paragraphs: [
          'If you now have enough room and the original save or install succeeds, stop cleaning. If it still fails, capture its exact message and required space. Save work and restart normally if you need a fresh application state; treat that as a diagnostic step, not a guaranteed storage repair.',
          'Persistent unexplained errors call for support with the volume name, before-and-after figures and action taken. Share those details without uploading private filenames or files. Repeatedly deleting unrelated folders makes both recovery and diagnosis harder.',
        ],
      },
    ],
    related: [
      'purgeable-space-on-mac',
      'time-machine-snapshots',
      'trash-wont-empty-mac',
      'cloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      storage,
      trash,
      diskInfo,
      snapshots,
      {
        label: 'Apple: check iCloud Drive file status',
        url: 'https://support.apple.com/en-ie/guide/mac-help/mchlc994344b/mac',
      },
    ],
  },
  {
    slug: 'move-photos-library-to-external-drive',
    title: 'How to move your Photos library to an external drive',
    description:
      'Move your Mac Photos library to an external drive, verify the copied library and iCloud settings, and remove the original only after checking backups.',
    summary:
      'Use a directly connected Mac-formatted drive, copy the whole Photos library while Photos is closed, and open the destination library before removing the original. Keep a separate backup.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'prepare-drive',
        title: '1. Check the destination before copying',
        paragraphs: [
          'Apple requires APFS or Mac OS Extended (Journaled) for the destination. It excludes a device used for Time Machine backups and advises against SD cards, USB flash drives, network storage and cloud storage for a Photos library. Use an appropriate directly connected external drive.',
          'Our preparation check is to compare the library size with the destination’s available capacity and leave room for future imports. Do not erase a drive containing your only copy of other files just to change its format. A storage migration should start with a usable destination and a current backup, not a formatting experiment.',
        ],
      },
      {
        id: 'copy-library',
        title: '2. Copy the whole library and open the copy',
        paragraphs: [
          'Quit Photos. Locate the library in Finder; the default location is Pictures in your home folder. Drag the library to the external drive and wait for the copy to finish. Then double-click the library at its destination. Apple also supports holding Option while opening Photos to choose a library.',
          'Our verification checklist is to inspect recent pictures, several older albums, edited images and a few videos. Check actual content rather than just the library’s filename. Leave the original in place during these checks so a failed or incomplete copy does not become your only working version.',
        ],
      },
      {
        id: 'icloud-library',
        title: '3. Verify the System Photo Library and iCloud behavior',
        paragraphs: [
          'For iCloud Photos, the moved library must be the System Photo Library. Open Photos → Settings → General and use Use as System Photo Library if needed. Apple says a disabled button means the open library already has that role. Be careful when selecting a different library: enabling iCloud Photos merges its contents with iCloud and can trigger downloads.',
          'If Optimize Mac Storage was enabled, Apple says full-size originals can be in iCloud while smaller versions remain locally. Our consequence check is that copying the local library does not prove every original is available offline. Decide whether you require originals on the external drive and verify that requirement before calling the migration complete.',
        ],
      },
      {
        id: 'backup-coverage',
        title: '4. Check what your backup actually includes',
        paragraphs: [
          'Apple recommends a local library backup even with iCloud Photos. Referenced files stored outside the library are not included when the library is backed up, so those need separate coverage. Apple’s referenced-file guide explains how to locate them and consolidate them if appropriate.',
          'Our backup check is to identify a recovery copy on a different device from the working library. After you remove the Mac’s original, the external library becomes your working copy; it is no longer an extra copy. Verify that your backup routine covers this new location rather than assuming the old arrangement follows it automatically.',
        ],
      },
      {
        id: 'remove-original',
        title: '5. Remove the original only after verification',
        paragraphs: [
          'Once the destination and backup are verified, quit Photos and move only the original library to Trash. Review before emptying it. Connect the external drive before opening Photos: Apple warns that an unavailable destination can cause Photos to create an empty library in the default location.',
          'If you later see an empty library, our first check is the drive connection and the selected library, not an assumption that the photos vanished. Quit Photos and use the Option-key library chooser to inspect the intended destination. Resolve copy, permissions or missing-content errors before permanently removing anything else.',
        ],
      },
    ],
    related: [
      'photos-library-taking-up-space-mac',
      'find-large-files-on-mac',
      'mac-storage-not-updating-after-deleting-files',
      'icloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: move a Photos library to save Mac storage',
        url: 'https://support.apple.com/en-gb/108345',
      },
      {
        label: 'Apple: designate a System Photo Library',
        url: 'https://support.apple.com/en-gb/104946',
      },
      {
        label: 'Apple: back up a Photos library',
        url: 'https://support.apple.com/en-ca/guide/photos/pht6d60d10f/mac',
      },
      {
        label: 'Apple: referenced photos and videos',
        url: 'https://support.apple.com/guide/photos/change-where-photos-and-videos-are-stored-pht1ed9b966d/mac',
      },
      {
        label: 'Apple: optimize storage in Photos',
        url: 'https://support.apple.com/en-ca/guide/photos/phta9b4673b4/mac',
      },
    ],
  },
  {
    slug: 'time-machine-snapshots',
    title: 'Time Machine local snapshots taking up space on Mac',
    description:
      'Why Time Machine local snapshots count as purgeable space on Mac, how macOS removes them on its own, and Apple’s supported way to reclaim room when needed.',
    summary:
      'Local snapshots are hourly recovery points macOS keeps on the startup disk. Apple counts their space as available and thins them automatically, so the figure you see is rarely space you need to fight for.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'check-whether-snapshots-matter',
        title: '1. Check whether snapshots are part of your number',
        paragraphs: [
          'Open System Settings → General → Storage and note the available space. Apple documents that your Mac counts the space used by local snapshots as available storage, so snapshots can sit inside System Data or a purgeable figure without reducing the room macOS will give to a download or an installer.',
          'To see what exists, open Terminal and run tmutil listlocalsnapshots / with the trailing slash. The command only lists snapshot names with their dates; it changes nothing and reports no sizes. Disk Utility shows the same idea from the other side: available space can include both free space and purgeable space that macOS can free when it needs to.',
          'A cleanup app that shows a snapshot count is reporting the same list. ClearDisk reports how many local snapshots it finds, not a measured size, because macOS does not expose a reliable per-snapshot figure. Do not turn a count into an estimate of reclaimable gigabytes.',
        ],
        code: ['tmutil listlocalsnapshots /'],
      },
      {
        id: 'what-macos-does-on-its-own',
        title: '2. Understand what macOS does on its own',
        paragraphs: [
          'Apple’s description is specific. Time Machine saves one snapshot of the startup disk roughly every hour and keeps it for 24 hours, plus an extra snapshot of the last successful backup that it keeps until space is needed. It stores snapshots only on disks with plenty of free space and deletes them as they age or as space is needed for other things.',
          'That is why a large purgeable figure is not a to-do item. If a copy, download or update needs the room, macOS is designed to remove snapshots first. The reason to act manually is narrower: an operation is refusing to start even though the available figure looks sufficient, or you want a clean before-and-after measurement while diagnosing something else.',
        ],
        items: [
          'What you lose by removing them: the ability to restore a file changed in the last 24 hours while your backup disk is disconnected. On a laptop that rarely meets its backup drive, that is the only recent backup.',
          'What you do not gain: a permanent increase. Time Machine creates the next snapshot within about an hour, so the figure returns.',
          'What is unaffected: the backups on your external Time Machine disk. Local snapshots and external backups are separate copies.',
        ],
      },
      {
        id: 'let-time-machine-thin-them',
        title: '3. Use the supported route to remove them',
        paragraphs: [
          'Apple’s documented method is to pause automatic backups briefly. On macOS Ventura and later, open System Settings → General → Time Machine, click Options, and set the backup frequency to Manually. Apple says local snapshots are deleted after several minutes. Then set the frequency back so backups resume. The exact controls differ on older macOS versions; Apple’s snapshot article lists each one.',
          'If your backup disk is available, connecting it and letting a backup complete is the gentler option. Time Machine keeps managing local snapshots on its own schedule afterwards. This guide does not supply a deletion command: the tmutil command line can delete named snapshots, but the settings route above is the one Apple documents for people who are not already comfortable with Terminal.',
          'Do not leave Time Machine off to keep the space. The snapshots exist to protect the last day of your work, and disabling backups to hold on to a few gigabytes trades a recovery point for room that a full disk will consume again.',
        ],
      },
      {
        id: 'if-you-still-need-space',
        title: '4. If the disk is still full afterwards',
        paragraphs: [
          'When removing snapshots changes little, snapshots were not the cause. Compare the available figure before and after a single change, then look at what actually grew. Files in the Trash keep their space until you empty it, and the storage-not-updating guide covers Trash, cloud placeholders and delayed figures.',
          'For an unexplained System Data number, work through the files rather than the category. Storage settings shows large documents and downloads; a local scanner can show hidden Library folders, app containers and developer caches with their allocated sizes so you can review them one group at a time. ClearDisk’s free scan does this on your Mac without uploading anything, and lists snapshots as a count alongside the files it can read.',
        ],
      },
    ],
    related: [
      'purgeable-space-on-mac',
      'time-machine-backup-disk-full',
      'mac-storage-not-updating-after-deleting-files',
      'what-is-system-data-on-mac',
    ],
    sources: [
      snapshots,
      {
        label: 'Apple: back up your files with Time Machine on Mac',
        url: 'https://support.apple.com/guide/mac-help/back-up-your-mac-with-time-machine-mh35860/mac',
      },
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
    ],
  },
  {
    slug: 'messages-taking-up-space-on-mac',
    title: 'Messages taking up space on Mac: delete attachments',
    description:
      'How to see what Messages stores on your Mac, delete photos and videos from conversations, set Keep Messages to expire old chats, and what iCloud sync changes.',
    summary:
      'Years of photos, videos and voice notes inside conversations add up. Messages can delete them selectively or on a schedule, and the space returns after the Recently Deleted window.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'see-what-messages-stores',
        title: '1. See what Messages is storing',
        paragraphs: [
          'Open System Settings → General → Storage. Apple’s storage guidance lists Messages among the categories with their own management options; its information button opens the attachments Messages holds, sorted by size, and lets you select and delete the ones you no longer want.',
          'From the file side, a disk scanner shows the Messages folder inside your Library, where the app keeps its database and an Attachments folder. Treat it as review-only. The safe way to shrink it is through the app, because the database tracks every file and a deletion in Finder leaves conversations pointing at attachments that no longer exist.',
        ],
      },
      {
        id: 'delete-attachments-in-a-conversation',
        title: '2. Delete attachments inside a conversation',
        paragraphs: [
          'Open the conversation and show its details. Apple’s guide describes scrolling to the categories such as Photos, Shift-clicking to select several items, then Control-clicking and choosing Delete. This removes the attachment from the conversation while keeping the messages around it.',
          'Deleted messages and attachments stay in Recently Deleted for up to 30 days, so the space does not return immediately. That window is the safety net; it also means a large cleanup shows up in Storage settings only after it expires.',
        ],
      },
      {
        id: 'expire-old-conversations',
        title: '3. Set old conversations to expire',
        paragraphs: [
          'Choose Messages → Settings → General and open the Keep messages menu. Apple’s warning is worth quoting in spirit: pick anything other than Forever and conversations, including all attachments, are removed automatically once the period passes. For a Mac that only mirrors an iPhone, one year is a reasonable setting; for a Mac that holds the only copy of something, keep Forever and delete by hand.',
          'This is the setting that stops the folder growing back. Deleting attachments once is a cleanup; a retention period is maintenance.',
        ],
      },
      {
        id: 'what-icloud-changes',
        title: '4. Understand what Messages in iCloud changes',
        paragraphs: [
          'With Messages in iCloud turned on, Apple’s guide states that deleting a message or conversation on your Mac deletes it from every device where the feature is on. Deleted items can be recovered for 30 days and are permanently removed from iCloud after 40 days. Delete with that in mind; the Mac is not a spare copy of your iPhone’s history.',
          'If you want the Mac to hold less while the iPhone keeps everything, deleting is the wrong tool. Leave the conversations in place and rely on the retention setting only where you accept the loss on all devices.',
        ],
      },
      {
        id: 'check-the-result',
        title: '5. Check the result',
        paragraphs: [
          'Compare the Messages figure in Storage settings after the Recently Deleted window, or after clearing Recently Deleted from the conversation list. Rescan with a disk tool to confirm the Attachments folder actually shrank; if it did not, the items are still within their 30 days.',
          'When Messages was not the largest category after all, the guides on System Data, Mail and large files cover the usual next places. ClearDisk’s free scan shows the Messages and Mail folders with allocated sizes but does not offer them for removal, because their apps own the data.',
        ],
      },
    ],
    related: [
      'mail-taking-up-space-on-mac',
      'free-up-space-on-mac',
      'delete-iphone-backups-on-mac',
      'what-is-system-data-on-mac',
    ],
    sources: [
      {
        label: 'Apple: delete messages and conversations in Messages on Mac',
        url: 'https://support.apple.com/guide/messages/delete-messages-and-conversations-icht1035/mac',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'cloud-drive-taking-up-space-on-mac',
    title: 'Google Drive, Dropbox or OneDrive taking up space on Mac',
    description:
      'Why a cloud drive fills a Mac’s disk, how to switch Google Drive to streaming, make Dropbox files online-only, and free space with OneDrive Files On-Demand.',
    summary:
      'Every desktop sync app can keep a full local copy or a cloud-only placeholder. The space comes back when you switch modes through the app, never by deleting inside a synced folder.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'which-mode-is-the-drive-in',
        title: '1. Work out which mode the drive is in',
        paragraphs: [
          'Storage settings does not separate cloud caches from documents, so start in Finder. Each sync app marks files with a status: a cloud icon means the file lives online and takes no local space, a check mark or similar badge means a full copy is on the disk. A folder full of check marks is the reason the drive is large.',
          'A disk scanner shows the actual local bytes per folder. On current macOS, apps built on Apple’s File Provider keep their local copies under a CloudStorage folder inside your Library, so that is where the size appears. Note the figure before changing anything so you can confirm the result.',
        ],
      },
      {
        id: 'google-drive-stream-not-mirror',
        title: '2. Google Drive: stream instead of mirror',
        paragraphs: [
          'Google documents two modes. Mirrored files are always stored on your computer and in the cloud; streamed files are primarily stored in the cloud and made available offline only when you open them. Switch in Drive for desktop under Settings → Preferences → Folders from Drive → My Drive syncing options, and choose Stream files.',
          'Streaming still keeps a local copy of anything you have opened, so the folder does not drop to zero. Google notes that shared files can fill a hard drive if you sync them even though they never count against your Google storage, which is worth checking if a shared drive is mirrored.',
        ],
      },
      {
        id: 'dropbox-online-only',
        title: '3. Dropbox: make folders online-only',
        paragraphs: [
          'Dropbox’s help page describes the step on Mac: open the Dropbox folder in Finder, right-click a file or folder, and choose Make online-only. An online-only file is stored in the cloud and does not take up storage on your computer; it still appears in Finder and downloads when you open it.',
          'Selective sync is the older alternative and removes a folder from the Mac entirely while keeping it in your account. Dropbox’s troubleshooting page notes that Basic users can only make files online-only on the latest Dropbox for macOS built on File Provider, while selective sync works on every plan. If the menu item is missing, that is usually why.',
        ],
      },
      {
        id: 'onedrive-free-up-space',
        title: '4. OneDrive: use Free up space',
        paragraphs: [
          'Microsoft’s Files On-Demand page for Mac gives the step: right-click a file or folder in the OneDrive folder and choose Free up space. The item becomes online-only, shown with a cloud icon, and downloads when opened. Always Keep on This Device does the opposite and pins a full copy; a green check mark means a copy is currently on the disk.',
          'Microsoft documents cases where a pinned item can exist both as a placeholder and as a cached copy, which is why measuring afterwards matters more than trusting the icon.',
        ],
      },
      {
        id: 'measure-and-what-not-to-do',
        title: '5. Measure again, and never delete inside a synced folder',
        paragraphs: [
          'After switching modes, rescan. Space returns as the app releases local copies, which can take a while for a large folder. Files you open afterwards come back down, so a working set of recent documents will always occupy some room.',
          'Do not delete files inside a synced folder to save space: the deletion syncs to the cloud and to every other device. Use the app’s online-only or streaming controls instead. iCloud Drive has its own version of this behaviour, covered in the iCloud guide. ClearDisk shows these folders with allocated sizes so you can see which drive is holding the space, but it does not change sync settings and does not offer synced folders for removal.',
        ],
      },
    ],
    related: [
      'icloud-drive-taking-up-space-on-mac',
      'mac-storage-not-updating-after-deleting-files',
      'find-large-files-on-mac',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Google: stream and mirror files with Drive for desktop',
        url: 'https://support.google.com/drive/answer/13401938?hl=en',
      },
      {
        label: 'Dropbox: free up space with online-only files',
        url: 'https://help.dropbox.com/sync/make-files-online-only',
      },
      {
        label: 'Dropbox: how to troubleshoot disk space issues',
        url: 'https://help.dropbox.com/storage-space/low-disk-space',
      },
      {
        label:
          'Microsoft: save disk space with OneDrive Files On-Demand for Mac',
        url: 'https://support.microsoft.com/en-us/office/save-disk-space-with-onedrive-files-on-demand-for-mac-529f6d53-e572-4922-a585-e7a318c135f0',
      },
    ],
  },
  {
    slug: 'photos-library-taking-up-space-mac',
    title: 'Photos library taking up space on Mac: what to change',
    description:
      'Why the Photos library grows, how Optimize Mac Storage keeps originals in iCloud, what deleting does across devices, and when to move it to another drive.',
    summary:
      'The Photos library is one package that holds every original. Optimize Mac Storage trades local originals for iCloud copies; moving the library trades the internal disk for an external one. Deleting is the only option that removes photos, everywhere.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'see-the-library-size',
        title: '1. See the library size',
        paragraphs: [
          'System Settings → General → Storage lists Photos as its own category. In Finder, the library is a single file called Photos Library in your Pictures folder; select it and choose File → Get Info for the size. It is a package, not a folder to browse, so never open it and delete files inside.',
          'A disk scanner reports the same package with its allocated size and can show whether other copies exist: exported albums, an old iPhoto library, or a second library from a migration. Those duplicates are often the easy saving.',
        ],
      },
      {
        id: 'optimize-mac-storage',
        title: '2. Turn on Optimize Mac Storage',
        paragraphs: [
          'Apple’s Photos guide describes the setting: choose Photos → Settings → iCloud, make sure iCloud Photos is on, and select Optimize Mac Storage. Optimize stores smaller versions of your photos on the Mac when storage space is limited and keeps the original, full-size photos in iCloud. Download Originals to this Mac does the opposite and restores the full-size versions.',
          'Two conditions apply. iCloud Photos has to be on, which means the whole library counts against your iCloud storage as well as device storage. And Optimize works when space is limited rather than immediately, so the library shrinks over time, not the moment you click.',
        ],
      },
      {
        id: 'delete-with-sync-rules-in-mind',
        title: '3. Delete with the sync rules in mind',
        paragraphs: [
          'Apple’s iCloud Photos page is clear: when you delete photos on one device, they are deleted everywhere you use iCloud Photos. Deleted items stay in Recently Deleted for 30 days, so the space returns after that window or after you delete them from Recently Deleted too.',
          'Delete for the right reason. Screenshots, burst duplicates and screen recordings are common candidates; originals of edited photos are not, because the edit depends on them.',
        ],
      },
      {
        id: 'move-the-library',
        title: '4. Move the library instead of shrinking it',
        paragraphs: [
          'When you want every original at hand but not on the internal disk, move the library to an external drive. Apple documents the procedure, and the move-photos guide walks through the drive requirements and the verification step before you remove the original.',
          'Moving is the right choice for large video libraries and for Macs with a small SSD and a permanently connected drive. It is the wrong choice for a laptop that leaves the drive at home, because Photos needs the library present to open at all.',
        ],
      },
      {
        id: 'what-not-to-do',
        title: '5. What not to do',
        paragraphs: [
          'Do not edit inside the Photos Library package, do not delete its caches by hand, and do not turn off iCloud Photos to save space without first downloading originals. Turning it off only stops syncing; it does not remove the local library.',
          'ClearDisk shows the Photos Library package with its allocated size but does not offer it for removal, because Photos owns the data. Use the scan to find duplicate libraries and large exports outside it; use Photos for everything inside.',
        ],
      },
    ],
    related: [
      'move-photos-library-to-external-drive',
      'icloud-drive-taking-up-space-on-mac',
      'find-large-files-on-mac',
      'delete-iphone-backups-on-mac',
    ],
    sources: [
      {
        label: 'Apple: optimize storage in Photos on Mac',
        url: 'https://support.apple.com/guide/photos/optimize-storage-in-photos-on-mac-phta9b4673b4/mac',
      },
      {
        label: 'Apple: set up and use iCloud Photos',
        url: 'https://support.apple.com/en-us/108782',
      },
      {
        label: 'Apple: move your Photos library to save space on your Mac',
        url: 'https://support.apple.com/en-us/108345',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'time-machine-backup-disk-full',
    title: 'Time Machine backup disk full: what happens and what to do',
    description:
      'What Time Machine does when its backup disk fills up, why the oldest backups disappear, how to exclude folders, and when a larger disk is the answer.',
    summary:
      'Time Machine is designed to fill its disk and then thin the oldest backups. A full backup disk is normal; a Mac that can no longer complete a backup is the problem to fix.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'what-full-means',
        title: '1. Know what “full” means for Time Machine',
        paragraphs: [
          'Apple’s Time Machine page sets the expectation: it makes hourly backups for the past 24 hours, daily backups for the past month and weekly backups for all previous months, and the oldest backups are deleted when your backup disk is full. Apple’s full-disk page says the same in the present tense: as the disk fills up, Time Machine deletes older backups to make room for new ones.',
          'So a backup disk that shows almost no free space is in its normal working state. The number to watch is not free space on the backup disk but the date of the latest successful backup.',
        ],
      },
      {
        id: 'check-backups-still-complete',
        title: '2. Check that backups are still completing',
        paragraphs: [
          'Open System Settings → General → Time Machine and read the latest backup time, or click the Time Machine icon in the menu bar. A recent timestamp means the thinning is working. A backup that fails with a message about space means one new backup no longer fits even after the oldest were removed, which happens when the data you back up has grown past what the disk can hold.',
          'Before changing anything, work out what grew. A new Photos library, virtual machine images, video projects or a developer folder full of build output are the usual causes, and each is easier to exclude or move than to shrink the backup.',
        ],
      },
      {
        id: 'exclude-what-you-do-not-need',
        title: '3. Exclude what you do not need backed up',
        paragraphs: [
          'Apple documents the control: in Time Machine settings, click Options and add items to the exclusion list. Good candidates are things you can rebuild or download again: node_modules folders, Xcode’s Derived Data, package caches, Docker’s disk image and virtual machines you snapshot elsewhere. Keep documents, photos and anything without another copy.',
          'Excluding a folder stops future backups of it but does not remove it from existing backups; that space returns only as those older backups age out. Measure the folders first so you exclude the ones that matter, and prefer a few large exclusions to many small ones.',
        ],
      },
      {
        id: 'when-a-larger-disk-is-the-answer',
        title: '4. When a larger disk is the answer',
        paragraphs: [
          'Apple’s advice when you run out of space is direct: connect a new backup disk, open Time Machine settings and select it as your backup disk. Time Machine begins a fresh history on the new disk; keep the old one as an archive of the history it holds rather than erasing it on day one.',
          'How much larger depends on how far back you want to reach. More capacity than the data you back up buys history; the same capacity buys only the latest state. If the backup disk is also used for other files, that shared space is what Time Machine is competing with.',
        ],
      },
      {
        id: 'what-not-to-delete-by-hand',
        title: '5. What not to delete by hand',
        paragraphs: [
          'Do not delete backup folders on the backup disk in Finder. Time Machine tracks what each backup shares with the next, and removing pieces by hand can leave the remaining backups unusable. Let Time Machine thin the disk, exclude what you do not need, or replace the disk.',
          'The local snapshots on your Mac’s own disk are a separate mechanism covered in the snapshots guide; a full backup disk does not fill your Mac, and a full Mac does not fill the backup disk. ClearDisk scans the Mac’s internal storage, not the backup volume, and reports snapshots as a count so you can keep the two questions apart.',
        ],
      },
    ],
    related: [
      'time-machine-snapshots',
      'find-node-modules-folders-mac',
      'move-photos-library-to-external-drive',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Apple: back up your Mac with Time Machine',
        url: 'https://support.apple.com/en-us/104984',
      },
      {
        label: 'Apple: if the Time Machine backup disk for your Mac is full',
        url: 'https://support.apple.com/guide/mac-help/mh15137/mac',
      },
      {
        label: 'Apple: Time Machine local snapshots',
        url: 'https://support.apple.com/en-us/102154',
      },
    ],
  },
];
