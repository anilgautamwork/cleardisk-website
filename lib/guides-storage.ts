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
      'find-large-files-on-mac',
      'move-photos-library-to-external-drive',
      'mac-storage-full',
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
      'mac-storage-not-updating-after-deleting-files',
      'mac-storage-full',
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
      'icloud-drive-taking-up-space-on-mac',
      'system-data-keeps-growing',
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
];
