import { getGuide } from './guides.ts';
export type FaqQuestion = {
  id: string;
  question: string;
  answer: string;
  guide?: string;
};
export type FaqTopic = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  updated: string;
  questions: FaqQuestion[];
};
// Every answer is a short, complete reply on its own; `guide` points at the
// page that goes deeper. Keep answers consistent with the guide they cite.
export const faqTopics: FaqTopic[] = [
  {
    slug: 'system-data',
    title: 'System Data on Mac: questions and answers',
    description:
      'Short answers to the questions people ask about System Data on a Mac: what it is, whether it is safe to delete, why it is so large, and how to shrink it.',
    intro:
      'Start with the number in Storage settings, then find the files behind it. These answers explain what System Data includes, where to look and what to leave alone.',
    updated: '2026-10-04',
    questions: [
      {
        id: 'what-is-system-data',
        question: 'What is System Data on a Mac?',
        answer:
          'System Data is the storage category for files that macOS does not place in a more specific category. Apple lists logs, caches, virtual memory files, temporary files, fonts, app support files and plug-ins. It is not one folder or a list of disposable files.',
        guide: 'what-is-system-data-on-mac',
      },
      {
        id: 'see-system-data',
        question: 'How do I see System Data in Mac storage?',
        answer:
          'On macOS Ventura 13 or later, open Apple menu → System Settings → General → Storage and find System Data in the category list. It shows a total, not a file browser. Use Finder or the app that created the data to investigate specific files.',
        guide: 'how-to-check-storage-on-mac',
      },
      {
        id: 'is-it-safe-to-delete',
        question: 'Is it safe to delete System Data?',
        answer:
          'System Data is a category, not a folder to empty. Identify the app and purpose of each file, use that app’s storage controls where possible, and keep backups you still need. A cache label or an old date does not make a file safe to remove.',
        guide: 'clear-system-data-on-mac',
      },
      {
        id: 'why-so-high',
        question: 'Why is System Data so high on my Mac?',
        answer:
          'Usually one or two producers: a developer tool, a creative app’s caches, old iPhone backups, or Mail and Messages attachments. Finding the producer matters more than the total, because it decides whether the number comes back.',
        guide: 'system-data-keeps-growing',
      },
      {
        id: 'hundred-gb',
        question: 'How do I get rid of 100GB or more of System Data?',
        answer:
          'Identify the largest contributors first, then review files you recognize and can replace or no longer need. Keep required backups and project originals. A 100GB category does not mean 100GB is removable; compare available space after each small change.',
        guide: 'system-data-too-large',
      },
      {
        id: 'how-to-clear',
        question: 'How do I clear System Data on a Mac?',
        answer:
          'Check available space in System Settings → General → Storage, then identify which apps or files account for the shortage. Use the owning app’s cleanup controls where possible. Review selected paths and backups before removal, and inspect Trash before permanently emptying it.',
        guide: 'clear-system-data-on-mac',
      },
      {
        id: 'keeps-growing',
        question: 'Why does System Data keep growing after I clean it?',
        answer:
          'Because the app that produced it is still producing it. Compare two scans a few days apart, identify the folder that grew, and change that app’s cache limit, download or logging setting instead of deleting again.',
        guide: 'system-data-keeps-growing',
      },
      {
        id: 'terminal',
        question: 'Can I clear System Data with Terminal?',
        answer:
          'Use Terminal to inspect space before deciding what to remove. The df command reports filesystem space; du measures accessible paths. Permission errors mean the measurement is incomplete. Neither command identifies whether a file is safe to delete.',
        guide: 'check-disk-space-mac-terminal',
      },
      {
        id: 'snapshots',
        question: 'Are Time Machine snapshots part of System Data?',
        answer:
          'Their space can appear inside System Data or the purgeable figure, but Apple counts it as available and deletes snapshots on its own as they age or as space is needed. They are rarely the space you need to fight for.',
        guide: 'time-machine-snapshots',
      },
      {
        id: 'other-storage',
        question: 'Is “Other” storage the same as System Data?',
        answer:
          'Yes for practical purposes. Older macOS versions called the catch-all category Other; current versions call it System Data. Searches for either describe the same problem and the same fixes apply.',
        guide: 'mac-storage-glossary',
      },
      {
        id: 'library-folder',
        question: 'Where does System Data actually live?',
        answer:
          'There is no single System Data folder. Some contributors live in your user Library; others are managed elsewhere by macOS. Open Finder → Go → Go to Folder and enter ~/Library to inspect your own app data. Do not delete the Library folder or assume every item there belongs to System Data.',
        guide: 'show-library-folder-mac',
      },
    ],
  },
  {
    slug: 'mac-storage-full',
    title: 'Mac storage full: questions and answers',
    description:
      'Short answers for a full Mac: why it stays full after deleting, why an update says there is not enough space, what purgeable means, and what to clear first.',
    intro:
      'A full disk raises the same questions on every Mac. These are the ones people ask most, each with a short answer and the guide that walks through the fix.',
    updated: '2026-09-30',
    questions: [
      {
        id: 'still-full-after-deleting',
        question: 'Why is my Mac still full after deleting files?',
        answer:
          'First check what was deleted: moving a file to Trash, removing a cloud download and deleting inside an app have different effects. Review Trash before emptying it permanently, then compare available space. Storage updates automatically; there is no fixed one-minute deadline. Time Machine local snapshots already count as available space.',
        guide: 'mac-storage-not-updating-after-deleting-files',
      },
      {
        id: 'what-to-clear-first',
        question: 'What should I clear first when storage is full?',
        answer:
          'Start with recognizable downloads, replaceable installers and offline media you no longer need. Check backups and original project files before removing anything. If you move files to another drive, verify the destination copy opens. Review Trash before permanent deletion; there is no guaranteed amount to recover.',
        guide: 'mac-storage-full',
      },
      {
        id: 'not-enough-space-update',
        question: 'Why does a macOS update say there is not enough space?',
        answer:
          'The installer needs more room than its download, because it unpacks and macOS stages files while installing. Clear what you recognise, prefer Software Update to a full installer, and use Apple’s safe mode trick for a temporary boost.',
        guide: 'not-enough-space-to-update-macos',
      },
      {
        id: 'purgeable',
        question: 'What is purgeable space, and can I clear it?',
        answer:
          'Files macOS can remove itself when it needs the room, already counted inside the available figure. You cannot empty it by hand, and you rarely need to; it is released as space is required.',
        guide: 'purgeable-space-on-mac',
      },
      {
        id: 'available-vs-free',
        question: 'Why do two tools show different free space?',
        answer:
          'Storage settings reports available space, which can include purgeable space; Terminal and some tools report free space, which does not. Both are right; they answer different questions.',
        guide: 'mac-storage-glossary',
      },
      {
        id: 'trash-wont-empty',
        question: 'What if the Trash will not empty?',
        answer:
          'Read the error first. Quit the app using the file, check a locked item in Get Info, or reconnect its external drive as appropriate. Verify the item is no longer needed before retrying. Delete Immediately is permanent removal, not a general solution to permissions or in-use errors.',
        guide: 'trash-wont-empty-mac',
      },
      {
        id: 'check-storage',
        question: 'How do I check what is using my Mac’s storage?',
        answer:
          'Open System Settings → General → Storage on macOS Ventura or later. Categories with an information button offer more details or management controls; Documents includes large-file views. Not every category lists files. Use Finder or a scanner to investigate recognizable paths, and check any permission warnings.',
        guide: 'how-to-check-storage-on-mac',
      },
      {
        id: 'after-update',
        question: 'Why is storage full right after a macOS update?',
        answer:
          'An update can create temporary files, rebuild caches or leave a downloaded installer. Compare Storage settings and inspect actual paths before removing anything. Do not assume every large item is an update leftover or will disappear on a fixed schedule. Time Machine local snapshots are managed automatically and count as available space.',
        guide: 'mac-storage-full-after-macos-update',
      },
      {
        id: 'downloads',
        question: 'Is the Downloads folder worth clearing?',
        answer:
          'Review it, rather than emptying it wholesale. Sort by size and check whether each installer, archive or document is replaceable or your only copy. Keep what you need, remove a small understood selection, and review Trash before emptying it.',
        guide: 'clear-downloads-folder-mac',
      },
      {
        id: 'optimize-storage',
        question: 'Should I turn on Apple’s Optimize Storage recommendations?',
        answer:
          'Review each recommendation separately. iCloud options use your cloud allowance, Optimize Storage can remove watched Apple TV downloads, and automatic Trash removal permanently deletes items after 30 days. Available options vary. Choose based on what you need offline and whether you want automatic deletion.',
        guide: 'optimize-storage-mac',
      },
    ],
  },
  {
    slug: 'clear-cache',
    title: 'Clearing cache on Mac: questions and answers',
    description:
      'Short answers about Mac caches: whether deleting them is safe, how to clear Safari and Chrome, what the system cache is, and which developer caches count.',
    intro:
      'Caches are the most-searched cleanup topic on the Mac and the most misunderstood. These answers separate the safe, rebuildable caches from the folders that only look like caches.',
    updated: '2026-09-30',
    questions: [
      {
        id: 'safe-to-delete-caches',
        question: 'Is it safe to delete caches on a Mac?',
        answer:
          'Use the app’s documented cache controls first. Clearing a cache can remove offline content, trigger downloads or interrupt work; a folder’s name alone is not a safety guarantee. Quit the owning app before any documented manual cleanup, and leave unfamiliar system folders alone.',
        guide: 'clear-cache-on-mac',
      },
      {
        id: 'safari',
        question: 'How do I clear the Safari cache?',
        answer:
          'For cache-only cleanup, use Empty Caches in Safari’s Develop menu after enabling developer features in Advanced settings; wording varies by version. Privacy → Manage Website Data removes cookies and other site data too, can sign you out and is a different action.',
        guide: 'clear-browser-cache-mac',
      },
      {
        id: 'chrome',
        question: 'How do I clear the Chrome cache on a Mac?',
        answer:
          'From Chrome’s own settings, under Privacy and security → Delete browsing data, choose cached images and files only if you want to keep logins. Do not delete Chrome’s folders in the Library by hand.',
        guide: 'clear-browser-cache-mac',
      },
      {
        id: 'system-cache',
        question: 'How do I clear the system cache?',
        answer:
          'Not by hand. Apple’s supported route is starting up in safe mode, which clears certain system caches that macOS recreates as needed. User-level caches live in ~/Library/Caches and can be reviewed app by app.',
        guide: 'clear-cache-on-mac',
      },
      {
        id: 'library-caches',
        question: 'Can I delete everything in ~/Library/Caches?',
        answer:
          'Do not empty the folder as a blanket fix. Identify the app behind a large folder and use its documented cleanup controls. Check offline content and ongoing work first. Quit the app before any documented manual removal, and never extend the selection into Application Support, Containers or unfamiliar system files.',
        guide: 'clear-cache-on-mac',
      },
      {
        id: 'cache-grows-back',
        question: 'Why does the cache grow back so fast?',
        answer:
          'Because caching is the app’s normal behaviour. If a cache returns to the same size within days, lower the app’s cache limit or change its download settings; deleting it again only repeats the cycle.',
        guide: 'system-data-keeps-growing',
      },
      {
        id: 'developer-caches',
        question: 'Which developer caches take the most space?',
        answer:
          'Xcode’s Derived Data and simulators, Docker’s disk image, node_modules folders, and the package caches of npm, pnpm, Yarn, pip and Homebrew. Each has a documented command or setting to shrink it.',
        guide: 'clear-npm-cache-mac',
      },
      {
        id: 'homebrew',
        question: 'How do I clear the Homebrew cache?',
        answer:
          'Run brew cleanup -n to preview, then brew cleanup to remove stale downloads and old versions; add --prune=all to clear every cached download. Homebrew runs cleanup automatically after installs unless you disabled it.',
        guide: 'clean-homebrew-cache-mac',
      },
      {
        id: 'xcode',
        question: 'Is it safe to delete Xcode’s Derived Data?',
        answer:
          'Yes; it is build output Xcode regenerates on the next build. Keep archives, source and simulator data separate, and expect the first build afterwards to take longer.',
        guide: 'clear-xcode-derived-data',
      },
      {
        id: 'app-caches',
        question: 'Do apps have their own clear-cache buttons?',
        answer:
          'Many do: chat, meeting, music and creative apps usually offer a cache limit or a clear-cache control in their settings. Use it before opening the Library; it clears exactly what the app can rebuild.',
        guide: 'clear-cache-on-mac',
      },
    ],
  },
  {
    slug: 'uninstall-apps',
    title: 'Uninstalling apps on Mac: questions and answers',
    description:
      'Short answers about removing Mac apps: why an app will not delete, how to uninstall completely, what is left in the Library, and whether Apple apps can go.',
    intro:
      'Dragging an app to the Trash removes the app but not everything it stored. These answers cover the questions that follow, from stubborn apps to the folders they leave behind.',
    updated: '2026-09-15',
    questions: [
      {
        id: 'cant-delete-app',
        question: 'Why can’t I delete an app on my Mac?',
        answer:
          'Either it is part of macOS, which Finder cannot delete, or it is still running. Quit it, including any menu bar helper, and try again; Apple suggests restarting or safe mode if it stays in use.',
        guide: 'uninstall-apps-on-mac',
      },
      {
        id: 'completely',
        question: 'How do I completely uninstall an app?',
        answer:
          'Use the maker’s uninstaller when available. Otherwise, quit the app and move it to the Trash. Review remaining support data separately: it may contain saved work or be shared with other apps. Back up anything needed and follow the maker’s removal instructions.',
        guide: 'uninstall-apps-on-mac',
      },
      {
        id: 'force',
        question: 'How do I force uninstall an app on macOS?',
        answer:
          'There is no force option in Finder. Quit the app, remove its login items, restart if needed, then delete it normally. If the maker ships an uninstaller, that is the force option.',
        guide: 'uninstall-apps-on-mac',
      },
      {
        id: 'apple-apps',
        question: 'Can I uninstall Apple’s built-in apps?',
        answer:
          'Apps installed with macOS such as Mail, Music, Books and Notes cannot be deleted with Finder. Apple apps from the App Store, such as Pages or Keynote, can be removed like any other app.',
        guide: 'uninstall-apps-on-mac',
      },
      {
        id: 'leftovers',
        question: 'What does an app leave behind after uninstalling?',
        answer:
          'Dragging an app to the Trash can leave settings, databases, downloaded content, containers and helpers. A maker’s uninstaller may remove some of these. Check its instructions and preserve saved work before removing remaining data.',
        guide: 'application-support-folder-mac',
      },
      {
        id: 'application-support',
        question: 'Can I delete the Application Support folder?',
        answer:
          'Do not delete the whole folder. Even a removed app’s subfolder may hold documents, databases or shared data. Check its contents, preserve anything needed and follow the maker’s instructions. Leave it alone if you cannot establish what it holds.',
        guide: 'application-support-folder-mac',
      },
      {
        id: 'containers',
        question: 'Can I delete the Containers or Group Containers folders?',
        answer:
          'Do not delete the folders themselves or Apple service containers. Removing an app does not make its container disposable: saved work may remain, and other apps or extensions may use a group container. Identify and back up needed data before following the maker’s removal instructions.',
        guide: 'containers-folder-mac',
      },
      {
        id: 'login-items',
        question: 'Why does a deleted app still seem to run?',
        answer:
          'A leftover helper is still launching at login. Open System Settings → General → Login Items & Extensions and remove anything that belonged to the app, then restart.',
        guide: 'uninstall-apps-on-mac',
      },
      {
        id: 'free-uninstaller',
        question: 'Do I need an uninstaller app?',
        answer:
          'Not for most apps, but a free uninstaller automates the Library search for leftovers. The free-tools guide lists the ones their makers describe, with a note that we make ClearDisk and did not test them side by side.',
        guide: 'best-free-mac-cleaner',
      },
    ],
  },
  {
    slug: 'backups-cloud-photos',
    title: 'Backups, cloud drives and Photos: questions and answers',
    description:
      'Short answers about iPhone backups, Time Machine, iCloud Drive, Google Drive, Dropbox, OneDrive, Photos, Mail and Messages taking up space on a Mac.',
    intro:
      'Backups and synced files are where a Mac’s space goes quietly. These answers cover where each one lives, what deleting does on your other devices, and which controls free space without losing anything.',
    updated: '2026-09-06',
    questions: [
      {
        id: 'iphone-backup-location',
        question: 'Where are iPhone backups stored on a Mac?',
        answer:
          'In ~/Library/Application Support/MobileSync/Backup, which Apple documents. The reliable route is Finder → your device → General → Manage Backups, then right-click a backup and choose Show in Finder or Delete.',
        guide: 'delete-iphone-backups-on-mac',
      },
      {
        id: 'time-machine-snapshots',
        question: 'Can I delete Time Machine local snapshots?',
        answer:
          'You can, through Apple’s supported route of briefly pausing automatic backups, but macOS thins them on its own and counts their space as available. Removing them costs a day of recovery points for little lasting gain.',
        guide: 'time-machine-snapshots',
      },
      {
        id: 'time-machine-disk-full',
        question: 'What happens when the Time Machine backup disk is full?',
        answer:
          'Time Machine deletes the oldest backups to make room, which is normal. The problem case is a backup that no longer fits at all; exclude rebuildable folders or connect a larger disk.',
        guide: 'time-machine-backup-disk-full',
      },
      {
        id: 'icloud-drive',
        question: 'Why is iCloud Drive taking up space on my Mac?',
        answer:
          'Because files you opened or chose to keep downloaded are stored locally as well as in iCloud. Remove Download on a file or folder keeps it in iCloud and frees the local copy; deleting removes it everywhere.',
        guide: 'icloud-drive-taking-up-space-on-mac',
      },
      {
        id: 'google-drive-dropbox-onedrive',
        question:
          'How do I stop Google Drive, Dropbox or OneDrive filling my Mac?',
        answer:
          'Switch Google Drive to streaming, make Dropbox folders online-only, and use OneDrive’s Free up space. Never delete inside a synced folder to save space; the deletion syncs to the cloud and your other devices.',
        guide: 'cloud-drive-taking-up-space-on-mac',
      },
      {
        id: 'photos-library',
        question: 'Why is the Photos library so large, and what can I do?',
        answer:
          'It holds every original. Optimize Mac Storage keeps originals in iCloud and smaller copies on the Mac; moving the library to an external drive keeps every original off the internal disk. Deleting removes photos everywhere.',
        guide: 'photos-library-taking-up-space-mac',
      },
      {
        id: 'mail',
        question: 'Why is Mail taking up so much space?',
        answer:
          'Mail keeps local copies of messages and, by default, most attachments. Set Download Attachments to Recent per account, remove attachments from messages you keep, and erase deleted items. Never trim Mail’s folders in Finder.',
        guide: 'mail-taking-up-space-on-mac',
      },
      {
        id: 'messages',
        question: 'How do I delete Messages attachments on a Mac?',
        answer:
          'Open a conversation’s details, select the photos or files and delete them, or set Keep messages to 30 days or one year. With Messages in iCloud on, deletions apply to every device, after a 30-day Recently Deleted window.',
        guide: 'messages-taking-up-space-on-mac',
      },
      {
        id: 'move-photos',
        question: 'Can I move the Photos library to an external drive?',
        answer:
          'Yes; Apple documents the procedure. The drive should be formatted for Mac and stay connected when you use Photos, and you should open the moved library and verify it before removing the original.',
        guide: 'move-photos-library-to-external-drive',
      },
    ],
  },
  {
    slug: 'cleardisk',
    title: 'ClearDisk: questions and answers',
    description:
      'Short answers about ClearDisk for Mac: what the free scan shows, what the one-time license unlocks, privacy, Full Disk Access, refunds and lost keys.',
    intro:
      'ClearDisk is a Mac app that shows what fills your disk, explains System Data in plain words and moves the files you choose to the Trash. These are the questions people ask before downloading or buying.',
    updated: '2026-09-06',
    questions: [
      {
        id: 'is-scanning-free',
        question: 'Is scanning really free?',
        answer:
          'Yes. Unlimited local scans, the System Data breakdown, the storage map, the largest-files list and Reveal in Finder are free with no account. Cleanup from inside the app is the paid part.',
        guide: 'disk-space-analyzer-mac',
      },
      {
        id: 'price',
        question: 'How much does ClearDisk cost, and is it a subscription?',
        answer:
          'A one-time license of $10, shown in your local currency at checkout, covers up to three Macs you own including ClearDisk 2.0.0. There is no monthly or annual charge.',
      },
      {
        id: 'what-cleanup-does',
        question: 'What does the cleanup license actually do?',
        answer:
          'It lets you remove selected files from inside the app. Files go to the Trash first with undo; permanent deletion is a separate, typed confirmation. Protected system and account folders are shown but never offered for removal.',
        guide: 'clear-system-data-on-mac',
      },
      {
        id: 'uploads',
        question: 'Does ClearDisk upload my files?',
        answer:
          'No. Scanning and analysis run on your Mac, and file names and scan results are never uploaded. License activation sends your key, a device identifier, your computer name and the app version. Software update checks and downloads also use the network; they do not upload your files or scan results.',
      },
      {
        id: 'full-disk-access',
        question: 'Why does it ask for Full Disk Access?',
        answer:
          'macOS keeps some folders private until you grant it, under System Settings → Privacy & Security. Without it the scan sees less and says so; with it, the Library, containers and developer folders appear with their real sizes.',
        guide: 'show-library-folder-mac',
      },
      {
        id: 'what-it-does-not-do',
        question: 'What does ClearDisk not do?',
        answer:
          'It does not clean memory, remove malware, repair iCloud sync, find duplicates or promise a fixed amount of freed space. It reports Time Machine snapshots as a count, not a size, because macOS does not expose one.',
        guide: 'best-free-mac-cleaner',
      },
      {
        id: 'which-macs',
        question: 'Which Macs does it run on?',
        answer:
          'Any Mac running macOS 15 Sequoia or later. The download is one universal app for Apple silicon and Intel, signed and notarized by Apple.',
      },
      {
        id: 'refund',
        question: 'Can I get a refund?',
        answer:
          'Yes, within 30 days of purchase, from the email address used at checkout, by writing to hello@cleardisk.app. Refunds return to the original payment method and the refunded license is disabled.',
      },
      {
        id: 'lost-key',
        question: 'I lost my license key. How do I get it back?',
        answer:
          'Use the recovery page on this site with the email address you used at checkout, and the key is re-sent. Support at hello@cleardisk.app can help if the address has changed.',
      },
      {
        id: 'remove-cleardisk',
        question: 'How do I remove ClearDisk?',
        answer:
          'Move ClearDisk from Applications to the Trash and empty it. It installs no extensions and changes no system settings, so nothing else needs undoing.',
        guide: 'uninstall-apps-on-mac',
      },
    ],
  },
  {
    slug: 'disk-cleanup',
    title: 'Mac disk cleanup: questions and answers',
    description:
      'Short answers about cleaning up a Mac disk: the built-in cleanup tool, freeing 20 or 30 GB fast, why a disk fills suddenly, a full disk, and what to keep.',
    intro:
      'These are the questions Google shows next to “clear disk space on Mac” searches. Each gets a short, direct answer and a link to the guide with the full steps.',
    updated: '2026-09-30',
    questions: [
      {
        id: 'clear-disk-space',
        question: 'How do I clear disk space on a Mac?',
        answer:
          'In order of return for effort: empty the Trash, clear Downloads, delete old macOS installers and superseded iPhone backups, remove apps you no longer use, then investigate System Data. Measure after each step so you know what worked.',
        guide: 'free-up-space-on-mac',
      },
      {
        id: 'built-in-tool',
        question: 'Does Mac have a disk cleanup tool?',
        answer:
          'Yes, two. System Settings → General → Storage lists large files, downloads, backups and apps, and Optimize Storage offers Apple’s recommendations. Disk Utility handles the drive itself: repairs, formats and free-versus-purgeable space. Neither opens System Data.',
        guide: 'how-to-check-storage-on-mac',
      },
      {
        id: 'free-20-gb',
        question: 'How do I free up 20 GB of storage?',
        answer:
          'Look for single large items first: an Install macOS app in Applications, an iPhone backup in Storage settings, Xcode’s Derived Data, Docker’s disk image, or a Downloads folder of disk images. One of those is often 10 to 20 GB on its own.',
        guide: 'find-what-is-filling-disk-mac',
      },
      {
        id: 'free-30-gb',
        question: 'How do I free up 30 GB or more?',
        answer:
          'Combine the quick wins with a decision about media: move the Photos library or video projects to an external drive, or turn on Optimize Mac Storage for Photos. Developer Macs can usually find 30 GB in caches alone.',
        guide: 'free-up-space-on-mac',
      },
      {
        id: 'disk-full-suddenly',
        question: 'Why is my disk full all of a sudden?',
        answer:
          'Something produced a lot of data quickly: a macOS update left a snapshot and installer, a cloud drive switched from streaming to mirroring, a backup or export ran, or an app grew its cache. Find what changed in the last few days before deleting anything.',
        guide: 'system-data-keeps-growing',
      },
      {
        id: 'disk-drive-full',
        question: 'Why is my disk drive full?',
        answer:
          'Open Storage settings and read the categories. If Documents, Photos or Apps dominate, it is your files. If System Data dominates, it is caches, containers, developer data or backups, which need the Library folder or a scanner to see.',
        guide: 'what-is-system-data-on-mac',
      },
      {
        id: 'clear-if-full',
        question: 'How do I clear a disk that is completely full?',
        answer:
          'Empty the Trash first, because nothing else frees space until you do. Then delete one large recognizable item so macOS has working room, restart, and continue with the normal order. If the Mac will not start, use macOS Recovery.',
        guide: 'mac-wont-start-disk-full',
      },
      {
        id: 'hundred-percent-disk',
        question: 'How do I fix 100% disk usage on a Mac?',
        answer:
          'On a Mac this usually means the disk is nearly full rather than busy. Get free space above a few percent of the drive and performance returns. If the Mac is slow with plenty of space, look at memory pressure and background processes instead.',
        guide: 'mac-running-slow-low-storage',
      },
      {
        id: 'how-much-to-keep',
        question: 'How much free space should a Mac have?',
        answer:
          'Enough for updates and swap: keep roughly 10 to 15 percent free, and never let it drop below a few gigabytes. macOS updates alone can need 20 GB or more of working room.',
        guide: 'how-much-free-space-to-keep-mac',
      },
      {
        id: 'safe-to-delete',
        question: 'What is safe to delete and what should I keep?',
        answer:
          'Start with files you recognize, no longer need and can replace or have independently backed up. Cache folders, backups and generated output still need review. Keep originals, required restore points and unfamiliar system resources. If unsure, leave the file in place while you identify it; Trash is not a backup.',
        guide: 'clear-system-data-on-mac',
      },
    ],
  },
];
export function getFaqTopic(slug: string): FaqTopic | undefined {
  return faqTopics.find((topic) => topic.slug === slug);
}
export function faqGuide(slug: string) {
  return getGuide(slug);
}
