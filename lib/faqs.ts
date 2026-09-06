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
      'System Data is the category that confuses more Mac owners than any other. These are the questions that come up most, each with a short answer and the guide that goes deeper.',
    updated: '2026-09-06',
    questions: [
      {
        id: 'what-is-system-data',
        question: 'What is System Data on a Mac?',
        answer:
          'It is Apple’s catch-all category for files that do not fit any other category in Storage settings: caches, logs, app containers, developer files, device backups and system resources. It is a category, not a folder, so there is nothing to open and empty.',
        guide: 'what-is-system-data-on-mac',
      },
      {
        id: 'is-it-safe-to-delete',
        question: 'Is it safe to delete System Data?',
        answer:
          'Some of it. Caches and superseded device backups can go; Application Support, Containers and anything macOS manages should stay. Because the category mixes both, delete by file and app, never by category.',
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
          'Measure the Library and hidden folders first, then remove the largest rebuildable items and backups you no longer need. Expect the number to drop in steps as you handle each producer, not all at once.',
        guide: 'system-data-too-large',
      },
      {
        id: 'how-to-clear',
        question: 'How do I clear System Data on a Mac?',
        answer:
          'Find the files behind the number: open the Library, size its folders, handle caches, developer data, device backups and attachments through their apps or the Trash, then empty the Trash. There is no single switch.',
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
          'Terminal is best for measuring, not deleting. The df and du commands size the disk and every Library folder without changing anything; remove files through Finder and the Trash so you can put them back.',
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
          'Mostly in your user Library: Caches, Application Support, Containers, Developer, Mail and Messages. Finder hides the folder; hold Option and open the Go menu, or use Go to Folder with ~/Library.',
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
    updated: '2026-09-06',
    questions: [
      {
        id: 'still-full-after-deleting',
        question: 'Why is my Mac still full after deleting files?',
        answer:
          'Space returns only when the Trash is emptied, and Storage settings can lag for a while. Purgeable space and local snapshots can also hold the figure. Empty the Trash, wait a minute, and compare again.',
        guide: 'mac-storage-not-updating-after-deleting-files',
      },
      {
        id: 'what-to-clear-first',
        question: 'What should I clear first when storage is full?',
        answer:
          'The Trash, the Downloads folder, old installers in Applications and superseded iPhone backups. Those return the most space with the least risk, before you touch anything in the Library.',
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
          'Read the message: a locked file needs unlocking with Get Info, a file in use needs its app quit, and an item from an external drive needs that drive connected. Delete Immediately handles a single stubborn item.',
        guide: 'trash-wont-empty-mac',
      },
      {
        id: 'check-storage',
        question: 'How do I check what is using my Mac’s storage?',
        answer:
          'System Settings → General → Storage shows the bar and its categories; each category has an information button that lists its contents by size. What the categories hide needs Terminal or a scanner.',
        guide: 'how-to-check-storage-on-mac',
      },
      {
        id: 'after-update',
        question: 'Why is storage full right after a macOS update?',
        answer:
          'The update leaves a local snapshot of the previous system, the installer app if you used one, and caches the system rebuilds. Most of it clears itself within days; the installer does not.',
        guide: 'mac-storage-full-after-macos-update',
      },
      {
        id: 'downloads',
        question: 'Is the Downloads folder worth clearing?',
        answer:
          'Usually yes. It fills with installers, disk images and archives whose job is done. Sort it by size, delete by type, empty the Trash, and set Safari to ask where each download goes.',
        guide: 'clear-downloads-folder-mac',
      },
      {
        id: 'optimize-storage',
        question: 'Should I turn on Apple’s Optimize Storage recommendations?',
        answer:
          'They are three separate switches with different costs: two move files into iCloud on demand and count against your iCloud plan, one empties the Trash on a 30-day timer. Turn on the ones whose cost you accept.',
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
    updated: '2026-09-06',
    questions: [
      {
        id: 'safe-to-delete-caches',
        question: 'Is it safe to delete caches on a Mac?',
        answer:
          'Caches are rebuildable by definition, so removing one costs a slower first launch, not data. The risk is deleting the wrong folder next to it or clearing a cache while its app is running. Quit the app and use the Trash.',
        guide: 'clear-cache-on-mac',
      },
      {
        id: 'safari',
        question: 'How do I clear the Safari cache?',
        answer:
          'Safari → Settings → Privacy → Manage Website Data → Remove All clears cache and cookies together. To clear only the cache, enable the Develop menu under Advanced and choose Develop → Empty Caches.',
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
          'You can, but it is the blunt version. Apps rebuild what they need, so you lose time rather than data, and any app that is open while you do it may misbehave until restarted. Clear the largest folders for apps you have quit instead.',
        guide: 'show-library-folder-mac',
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
    updated: '2026-09-06',
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
          'Run the maker’s uninstaller if there is one, otherwise move the app to the Trash, then remove its leftovers in Application Support, Containers and Caches and any login item it installed.',
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
          'Its settings, databases and downloaded content in Application Support, its sandbox data in Containers, its caches, preferences, and sometimes a login item or launch agent. None of it is removed by deleting the app.',
        guide: 'application-support-folder-mac',
      },
      {
        id: 'application-support',
        question: 'Can I delete the Application Support folder?',
        answer:
          'Not the folder itself, and not the subfolders of apps you still use. Subfolders named for apps you have already removed can go to the Trash; anything you cannot match to an app should stay.',
        guide: 'application-support-folder-mac',
      },
      {
        id: 'containers',
        question: 'Can I delete the Containers or Group Containers folders?',
        answer:
          'Never the folders themselves or anything named com.apple. A container for an app you have removed is a leftover and can go; a group container shared by a suite you still use must stay.',
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
          'A one-time license of $10, shown in your local currency at checkout, covers up to three Macs you own and every 1.x update. There is no monthly or annual charge.',
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
          'No. Scanning and analysis run on your Mac, and file names and scan results are never uploaded. The only network request is license activation, which sends your key, a device identifier, your computer name and the app version.',
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
];
export function getFaqTopic(slug: string): FaqTopic | undefined {
  return faqTopics.find((topic) => topic.slug === slug);
}
export function faqGuide(slug: string) {
  return getGuide(slug);
}
