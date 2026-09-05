import type { Guide } from './guides.ts';

const storage = {
  label: 'Apple: free up storage space on Mac',
  url: 'https://support.apple.com/en-us/102624',
};
const settings = {
  label: 'Apple: understand Storage settings',
  url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
};
const trash = {
  label: 'Apple: delete files and folders on Mac',
  url: 'https://support.apple.com/en-asia/guide/mac-help/mchlp1093/mac',
};

export const maintenanceGuides: Guide[] = [
  {
    slug: 'free-up-space-on-mac',
    title: 'How to free up space on Mac, step by step',
    description:
      'Free up space on Mac in a sensible order: check Storage settings, use Apple’s built-in recommendations, clear Downloads and Trash, then review large files.',
    summary:
      'Routine cleanup works best in order: measure first, use the controls macOS already offers, remove what you recognise, and only then investigate the categories you cannot explain.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'measure-first',
        title: '1. Check what is using space',
        paragraphs: [
          'Open System Settings → General → Storage. The bar shows how macOS groups your files: Applications, Documents, Photos, Mail, Messages, macOS itself and System Data, which Apple describes as files that do not fall into the other categories, primarily logs, caches, virtual memory and other runtime resources. The information button next to each category lists what it holds.',
          'Write down the available space and the two or three largest categories before changing anything. A number you can compare against later is the only reliable way to know whether a step worked, because the bar can take a while to refresh and some categories change on their own.',
        ],
      },
      {
        id: 'built-in-recommendations',
        title: '2. Use the built-in recommendations, knowing what each does',
        paragraphs: [
          'Storage settings offers a short list of recommendations. Store in iCloud keeps recent files on the Mac and moves older ones to iCloud Drive, which frees local space only while you have iCloud storage to spare. Optimize Storage removes movies and TV shows you have already watched. Empty Trash Automatically deletes items that have been in the Trash for 30 days.',
          'These are Apple’s own controls and they are the safest place to start. Read what each one changes before turning it on: Store in iCloud, in particular, changes where your files live, not just how much space they use.',
        ],
      },
      {
        id: 'obvious-space',
        title: '3. Clear the obvious space',
        paragraphs: [
          'Apple’s own checklist covers most everyday clutter: the Downloads folder, apps you no longer use, junk and deleted items in Mail, and the Trash itself. A file you move to the Trash keeps using space until you empty it, so emptying the Trash is often the single largest immediate gain.',
        ],
        items: [
          'Downloads: sort by size and date. Installers and disk images you have already used can usually go.',
          'Applications: remove apps you have not opened in months; move them to the Trash from the Applications folder or uninstall through the app’s own method if it has one.',
          'Mail: erase junk and deleted messages from within Mail rather than hunting for its files.',
          'Trash: empty it, then compare the available space with your note from step one.',
        ],
      },
      {
        id: 'large-media',
        title: '4. Move large media instead of deleting it',
        paragraphs: [
          'Videos, photo libraries and project archives are often the biggest files and the least replaceable. Apple’s guidance is to move them to an external drive rather than delete them. Copy first, open the copy and check it, then remove the original. The Photos library has its own relocation steps, covered in the linked guide.',
          'Moving a file between folders on the same drive frees nothing. Only a different volume, a cloud tier that removes the local copy, or deletion changes the number.',
        ],
      },
      {
        id: 'system-data-last',
        title: '5. Review System Data last, and know when to stop',
        paragraphs: [
          'If the categories you recognise are tidy and the disk is still short of room, System Data is usually where the remainder lives. Treat it as a category to inspect, not a folder to empty: the System Data guides linked below explain how to find the files behind the number and which ones to leave alone.',
          'Stop when you have the room you need for the task in front of you. Chasing the last few gigabytes is where most cleanup mistakes happen. ClearDisk’s free scan shows the same categories with the paths behind them, which makes the review in this step faster; deleting by hand remains your decision either way.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'find-large-files-on-mac',
      'disk-space-analyzer-mac',
      'mail-taking-up-space-on-mac',
      'clear-system-data-on-mac',
    ],
    sources: [storage, settings, trash],
  },
  {
    slug: 'clear-cache-on-mac',
    title: 'How to clear cache on Mac safely',
    description:
      'Clear cache on Mac the safe way: use each app’s own controls, know what Safari, Chrome and system caches actually hold, and skip the blanket Library deletion.',
    summary:
      'Caches are working files an app can rebuild. macOS counts most of them inside System Data. Clear them from the app that made them, and avoid emptying Library folders wholesale.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'what-a-cache-is',
        title: '1. Know what a cache is and where it lives',
        paragraphs: [
          'A cache is a copy of something an app expects to need again: website images, thumbnails, downloaded updates, build products. Apple’s Storage settings count caches, logs and other runtime files inside System Data, which is why that category grows as you use your Mac and shrinks again after cleanup.',
          'User caches live under the hidden Library folder in your home folder, in Caches. System caches live in the top-level Library and in protected system locations you should not edit. Because a cache is rebuilt on demand, clearing one costs you a slower first launch or a re-download, not your data. Deleting the wrong folder next to it can cost you settings or documents, which is why this guide works app by app.',
        ],
      },
      {
        id: 'safari',
        title: '2. Clear Safari’s website data',
        paragraphs: [
          'Apple’s route for website data is Safari → Settings → Privacy → Manage Website Data. Select one or more sites and click Remove, or click Remove All. Apple notes that removing this data may sign you out of websites or change how they behave, and that it can change or remove the same data in other apps.',
          'For a cache-only clear, Safari → Settings → Advanced → Show features for web developers adds a Develop menu whose Empty Caches command removes cached page resources without touching cookies or history.',
        ],
      },
      {
        id: 'other-browsers',
        title: '3. Clear Chrome and Firefox from their own settings',
        paragraphs: [
          'Chrome and Firefox keep their caches in their own profile folders and each offers a clear-browsing-data dialog where cached images and files can be selected on their own, separate from cookies, history and passwords. The browser cache guide linked below walks through each dialog and what every checkbox removes.',
        ],
      },
      {
        id: 'app-caches',
        title: '4. Let apps clear their own caches',
        paragraphs: [
          'Many apps that download or generate large working sets, including music and chat apps, design tools and developer tools, have a cache or storage setting of their own. Prefer it over deleting files behind the app’s back: the app knows which files are safe to drop and updates its own records.',
          'Developer caches are the largest offenders on many Macs. Xcode’s Derived Data and Docker’s disk image each have a dedicated guide below with the version-specific controls.',
        ],
      },
      {
        id: 'by-hand',
        title: '5. If you clear a cache folder by hand',
        paragraphs: [
          'Sometimes an app offers no control and its cache folder is plainly large. Work carefully and keep the change reversible.',
        ],
        items: [
          'Quit the app first, so it is not writing to the folder you are clearing.',
          'Move the folder’s contents to the Trash rather than deleting them permanently; keep the folder itself in place.',
          'Open the app once and confirm it behaves normally before you empty the Trash.',
          'Never edit the System folder or the top-level Library on a hunch; macOS protects them for a reason.',
          'Compare Storage settings before and after. If System Data climbs straight back, the guide on recurring growth explains how to find the app responsible.',
        ],
      },
    ],
    related: [
      'clear-browser-cache-mac',
      'clear-system-data-on-mac',
      'system-data-keeps-growing',
    ],
    sources: [
      settings,
      {
        label: 'Apple: manage cookies and website data in Safari',
        url: 'https://support.apple.com/en-us/guide/safari/sfri11471/mac',
      },
      {
        label: 'Apple: Safari advanced settings and the Develop menu',
        url: 'https://support.apple.com/en-us/guide/safari/sfri20948/mac',
      },
      {
        label: 'Apple: Safari Develop menu and Empty Caches',
        url: 'https://developer.apple.com/documentation/safari-developer-tools/develop-menu',
      },
    ],
  },
  {
    slug: 'disk-space-analyzer-mac',
    title: 'Disk space analyzer for Mac: built-in tools and ClearDisk',
    description:
      'Choosing a disk space analyzer for Mac: what Storage settings and Finder show for free, when a scanner earns its place, and what ClearDisk’s free scan sees.',
    summary:
      'A disk space analyzer answers one question: which files hold the space. Start with what macOS shows for free, then add a scanner when you need file-level detail across the whole disk, including the folders macOS hides.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'what-an-analyzer-does',
        title: 'What a disk space analyzer actually does',
        paragraphs: [
          'An analyzer reads the file system and adds up sizes by folder, type or app so you can see where the space went. That sounds like what Storage settings already does, and for documents, photos and apps it is. The difference appears in the folders Apple groups as System Data: caches, logs, app containers, device backups and developer files that no category names.',
          'Two details separate a useful analyzer from a pretty chart. It should report the space a file actually occupies on disk, which on APFS can differ from the size Finder shows for cloned or sparse files. And it should say when it could not read a folder, because a scan that silently skips protected locations produces a confident, wrong total.',
        ],
      },
      {
        id: 'what-macos-gives-you-free',
        title: 'What macOS already gives you for free',
        paragraphs: [
          'Before installing anything, use the built-in views. Apple documents each of them, and for many Macs they are enough.',
        ],
        items: [
          'System Settings → General → Storage shows the category bar and, behind Documents, a Large Files list, a Downloads list and a File Browser sorted by size.',
          'Finder’s Get Info and list view sorted by size work for any folder you can open, and File → Put Back restores anything you move to the Trash before emptying it.',
          'Disk Utility separates available space into free and purgeable space, which explains why two tools can report different numbers for the same disk.',
          'Terminal’s du command measures a folder without changing it, for example du -sh ~/Library/Caches. It reports what your account is allowed to read.',
        ],
      },
      {
        id: 'when-a-scanner-is-worth-it',
        title: 'When a scanner earns its place',
        paragraphs: [
          'Install an analyzer when the built-in views stop explaining the number: System Data is large and Documents is not, storage grows back after cleanup, or you need to see inside ~/Library, application containers and developer directories in one pass. Those folders are where an hour of Finder browsing turns into a five-minute scan.',
          'Expect a permission step. macOS keeps some locations private until you grant the app Full Disk Access in System Settings → Privacy & Security. Without it, an analyzer sees less and should say so. Also expect that iCloud files stored only in the cloud do not occupy local space, and that anything you move to the Trash keeps its space until the Trash is emptied.',
        ],
      },
      {
        id: 'what-cleardisk-shows',
        title: 'What ClearDisk shows, and what it does not',
        paragraphs: [
          'ClearDisk is our own analyzer, so read this section as the maker’s description rather than a review. Scanning is free and unlimited, and everything runs on your Mac; file names and scan results are never uploaded.',
        ],
        items: [
          'A System Data breakdown into named groups, each labelled Safe, Review or Leave it, with a plain explanation of what the files do.',
          'A visual storage map and a largest-files list, with Reveal in Finder for anything you want to inspect before deciding.',
          'Sizes reported as space allocated on disk, and protected system and account folders shown but never offered for removal.',
          'Cleanup from inside the app is a one-time license: files go to the Trash first with undo, and permanent deletion is a separate, typed confirmation.',
          'Limits: it needs macOS 15 or later, asks for Full Disk Access to read private folders, reports Time Machine local snapshots as a count rather than a size, and does not clean memory, remove malware, repair iCloud sync or find duplicates.',
        ],
      },
      {
        id: 'how-to-compare-tools',
        title: 'How to compare tools honestly',
        paragraphs: [
          'We have not tested competing analyzers side by side, so this page does not rank them. These are the questions we would ask of any tool, including ours, before paying for it.',
        ],
        items: [
          'Can you scan and see the results before paying, and is the price one-time or a subscription? How many Macs does it cover?',
          'Does removal go to the Trash with a way back, or straight to permanent deletion?',
          'Does the app upload file names or scan results anywhere? Read the privacy policy, not the marketing page.',
          'Is the app notarized by Apple so Gatekeeper can check it, and can you remove it by dragging it to the Trash?',
          'Does it show hidden folders and allocated sizes, and does it tell you when it lacked permission to read something?',
          'What is the refund window, and is there a working support address?',
        ],
      },
    ],
    related: [
      'find-large-files-on-mac',
      'what-is-system-data-on-mac',
      'clear-system-data-on-mac',
      'free-up-space-on-mac',
    ],
    sources: [
      storage,
      settings,
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
      trash,
    ],
  },
  {
    slug: 'not-enough-space-to-update-macos',
    title: 'Not enough space to update macOS: what to free first',
    description:
      'When a macOS update says there is not enough space: why it needs more room than the download, what to clear first, and Apple’s safe mode trick for more room.',
    summary:
      'The update needs more room than its download size because the installer unpacks and macOS stages files. Clear what you recognise first, prefer Software Update to a full installer, and let macOS thin its own caches and snapshots.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'read-the-number',
        title: '1. Read the number in the message, then check Storage',
        paragraphs: [
          'The update dialog states how much space it needs. Compare that with System Settings → General → Storage. Apple’s update-error page is blunt about this case: if the message says your Mac does not have enough storage space, free up storage space. There is no setting that makes the installer smaller.',
          'If Storage shows more available space than the message asks for, remember what the figure includes. Disk Utility explains that available space can include purgeable space, which macOS frees only when it needs to, and files sitting in the Trash keep their space until you empty it. The installer also needs more than its download size, because it unpacks and macOS keeps staging copies while it installs. Treat the number in the message as the real requirement.',
        ],
      },
      {
        id: 'clear-what-you-recognise',
        title: '2. Clear what you can recognise',
        paragraphs: [
          'Start with the items Apple lists in its storage guidance, in the order that returns the most space with the least risk.',
        ],
        items: [
          'Empty the Trash. Apple notes that a file’s space does not become available until you do.',
          'Clear the Downloads folder of installers, disk images and archives you have already used.',
          'Look in Applications for an “Install macOS …” app from an earlier upgrade. A full installer is a multi-gigabyte file that can be downloaded again from Apple, so it can go to the Trash once you no longer need it.',
          'Review iPhone and iPad backups stored on the Mac. Keep the most recent one per device and remove superseded ones through Finder.',
          'Check the Large Files list under Documents in Storage settings for exports, videos and archives you can move to another drive.',
        ],
      },
      {
        id: 'prefer-software-update',
        title: '3. Prefer Software Update to a full installer',
        paragraphs: [
          'Apple’s download-and-install page says Software Update is the fastest and easiest way to get macOS updates and upgrades, and that it can use less storage space to download and install them. A full installer from the App Store lands in your Applications folder as a separate multi-gigabyte app and needs room of its own before the update even begins.',
          'So if you have both a partly downloaded update in Software Update and a full installer in Applications, keep one route. Apple only recommends deleting and re-downloading an installer when it is damaged, so do not chase the problem by downloading again unless installation fails for that reason.',
        ],
      },
      {
        id: 'safe-mode',
        title: '4. Use safe mode for a temporary boost',
        paragraphs: [
          'Apple’s storage guidance describes a specific trick for this situation. Starting your Mac in safe mode clears certain system caches, which are created again as needed, and that can provide enough space to complete a task that needs more space only while it is underway, such as installing a macOS update. Apple’s update-error page separately suggests installing from safe mode when you use the App Store or Software Update.',
          'On a Mac with Apple silicon: shut down, press and hold the power button until “Loading startup options” appears, select your startup disk, then press and hold Shift and click Continue in Safe Mode. On an Intel Mac, restart and hold Shift until the login window appears. “Safe Boot” shows in the menu bar. Run the update from there, then restart normally afterwards.',
        ],
      },
      {
        id: 'if-it-still-will-not-fit',
        title: '5. If it still will not fit',
        paragraphs: [
          'Local Time Machine snapshots are counted as available space and macOS removes them as it needs room, so they rarely block an update. The snapshots guide covers Apple’s supported way to thin them if you want a clean measurement. Do not disable backups permanently to hold on to a few gigabytes.',
          'When the shortfall lives inside System Data, work through the files rather than the category: hidden Library folders, app caches, developer directories and old device backups. ClearDisk’s free scan lists them with allocated sizes on your Mac, marks system and account folders as Leave it, and moves anything you choose to the Trash first so you can empty it once the update has finished. If the message is not about storage at all, Apple’s update-error page lists the other fixes: a stable connection, installing from macOS Recovery, and repairing the startup disk.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'free-up-space-on-mac',
      'time-machine-snapshots',
      'delete-iphone-backups-on-mac',
    ],
    sources: [
      {
        label: 'Apple: if an error occurred while updating or installing macOS',
        url: 'https://support.apple.com/en-us/102531',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Apple: how to download and install macOS',
        url: 'https://support.apple.com/en-us/102662',
      },
      {
        label: 'Apple: start up your Mac in safe mode',
        url: 'https://support.apple.com/guide/mac-help/start-up-your-mac-in-safe-mode-mh21245/mac',
      },
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
    ],
  },
  {
    slug: 'mail-taking-up-space-on-mac',
    title: 'Mail taking up space on Mac: attachments and old messages',
    description:
      'Why Apple Mail can use gigabytes on a Mac, how to stop downloading every attachment, remove saved ones, erase deleted messages, and what not to touch by hand.',
    summary:
      'Mail keeps a local copy of your messages and, by default, most attachments. Its own settings can shrink that without breaking a mailbox. Deleting folders inside your Library cannot.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'see-how-much-mail-uses',
        title: '1. See how much Mail is really using',
        paragraphs: [
          'Open System Settings → General → Storage and look for Mail in the category list. The figure covers the local copies of your messages and the attachments Mail has downloaded. A disk scanner shows the same thing from the file side: the Mail folder inside your Library and Mail’s container, which also holds a Mail Downloads folder for attachments you opened without saving.',
          'Apple notes that attachments you save are put in the Downloads folder by default, or in a folder you choose under Mail → Settings → General. So the same PDF can exist three times: inside the message, in Mail Downloads, and in Downloads. The steps below shrink each copy through Mail rather than around it.',
        ],
      },
      {
        id: 'stop-downloading-every-attachment',
        title: '2. Stop Mail downloading every attachment',
        paragraphs: [
          'Choose Mail → Settings → Accounts, select the account, and open Account Information. The Download Attachments menu offers All, Recent and None. Apple describes Recent as attachments received within the past 15 months and None as no automatic download. Mail always downloads media attachments such as images, PDFs, video and audio; the menu applies to other types like spreadsheets and zipped files.',
          'Recent is the sensible setting for a laptop with a small SSD. Messages and attachments stay on the server for iCloud and other IMAP accounts, so Mail fetches an older attachment when you open it. Repeat the setting for each account; it is per account, not global.',
        ],
      },
      {
        id: 'remove-attachments-you-keep',
        title: '3. Remove attachments from messages you keep',
        paragraphs: [
          'Select a message and choose Message → Remove Attachments. Apple’s guide says the message stays in the mailbox with a note that attachments were removed. The warning matters: for IMAP accounts the attachment is deleted from the mail server permanently, so save anything you still need first, then remove it.',
          'Work through the biggest messages rather than everything. In Mail, sort a mailbox by size or search for messages with attachments, save the files you want to keep to a folder you control, and remove the rest. Do not run this across a whole mailbox in one pass; the deletion is permanent on the server.',
        ],
      },
      {
        id: 'erase-deleted-and-junk',
        title: '4. Erase deleted and junk messages',
        paragraphs: [
          'Deleted messages are not gone until they are erased. Choose Mailbox → Erase Deleted Items and pick an account, or Control-click a Trash mailbox in the sidebar and choose Erase Deleted Items. Apple’s storage guidance lists this step too. The Junk mailbox has its own Erase Junk Mail command.',
          'To make it routine, open Mail → Settings → Accounts, select the account and click Mailbox Behaviors. The Trash Mailbox menu sets where deleted messages are kept, and the erase option sets when they are removed for good. POP accounts have separate retention settings under Advanced; check them before assuming an old message is safe on the server.',
        ],
      },
      {
        id: 'what-not-to-do',
        title: '5. What not to delete by hand',
        paragraphs: [
          'Do not delete folders inside ~/Library/Mail or Mail’s container in Finder. They hold your mailboxes and the index Mail uses to search them. Removing them can lose messages that were never on a server, and for IMAP accounts Mail simply downloads everything again. Use the settings above, and treat those folders as review-only when a scanner lists them.',
          'If Mail is still large afterwards, the size is the messages themselves. Create mailboxes and use Rules under Mail → Settings to sort mail automatically, export anything you need offline with File → Save As or File → Export as PDF, and delete the rest. A local scan can confirm where the space went and whether the Downloads folder holds saved attachments you have already dealt with.',
        ],
      },
    ],
    related: [
      'messages-taking-up-space-on-mac',
      'free-up-space-on-mac',
      'clear-cache-on-mac',
      'what-is-system-data-on-mac',
    ],
    sources: [
      {
        label: 'Apple: delete emails and manage storage in Mail on Mac',
        url: 'https://support.apple.com/guide/mail/delete-emails-and-manage-storage-mlhlp1001/mac',
      },
      {
        label: 'Apple: view, save, or delete email attachments in Mail on Mac',
        url: 'https://support.apple.com/guide/mail/view-save-or-delete-email-attachments-mlhlp1123/mac',
      },
      {
        label: 'Apple: change Account Information settings in Mail on Mac',
        url: 'https://support.apple.com/guide/mail/change-account-information-settings-cpmlprefacctinfo/mac',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'show-library-folder-mac',
    title: 'How to show the Library folder on Mac, and what is inside',
    description:
      'Apple’s ways to open the hidden Library folder on Mac, what its Caches, Application Support and Containers folders hold, and which of them to leave alone.',
    summary:
      'The user Library is where most of System Data lives. Finder hides it to protect app settings and data, not because everything in it is junk. Open it, measure it, and only then decide.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'open-it-from-the-go-menu',
        title: '1. Open it from the Go menu',
        paragraphs: [
          'Apple’s Finder guide gives the two quickest routes. In Finder, press and hold the Option key, open the Go menu, and Library appears between Home and Computer; choose it. Or choose Go → Go to Folder and type ~/Library, where the tilde stands for your home folder. Press Return and the folder opens.',
          'There are three Library folders and only one is yours. ~/Library belongs to your user account and holds app data. /Library, at the top of the disk, holds items shared by every user. /System/Library belongs to macOS and is protected; nothing in this guide applies to it.',
        ],
      },
      {
        id: 'keep-it-visible',
        title: '2. Keep it visible if you visit often',
        paragraphs: [
          'Open your home folder in Finder, choose View → Show View Options, and select Show Library Folder. The folder then appears alongside Documents and Downloads until you clear the checkbox. It is a convenience, not a change to what the folder contains.',
          'Add it to the Finder sidebar by dragging it there if you prefer. Either way, keep the habit of measuring before deleting; visibility is what makes accidental deletion possible.',
        ],
      },
      {
        id: 'what-the-big-folders-hold',
        title: '3. What the big folders hold',
        paragraphs: [
          'Sizes vary by what you use, but the same folders dominate most Macs. Apple’s Storage settings count most of this as System Data, which is why the category grows without any file you remember saving.',
        ],
        items: [
          'Caches: rebuildable working files per app. Safe to review once the app is closed; expect the app to recreate what it needs.',
          'Application Support: settings, databases and licenses for apps. Review only; deleting a folder resets or breaks its app.',
          'Containers and Group Containers: data for sandboxed apps, including Mail and Messages. Leave them and use the app’s own controls.',
          'Developer: Xcode’s Derived Data, archives and simulators. Covered by the Xcode and simulator guides.',
          'Mail and Messages: message stores and attachments. Covered by their own guides; never trim them in Finder.',
          'Mobile Documents and CloudStorage: local copies of iCloud Drive and other cloud drives. Change sync settings, not files.',
          'Logs and Saved Application State: usually small; rarely worth attention.',
        ],
      },
      {
        id: 'measure-before-you-touch',
        title: '4. Measure before you touch anything',
        paragraphs: [
          'Select a folder and choose File → Get Info to see its size, or run du -sh ~/Library/Caches in Terminal for a quick read-only figure. Both take time on a large folder. A disk scanner with Full Disk Access lists every Library folder at once with allocated sizes and a label, so you can compare Caches against Containers before opening either.',
          'Write down the two or three largest folders and the app each belongs to. That list, not the Library as a whole, is what you act on.',
        ],
      },
      {
        id: 'what-not-to-delete',
        title: '5. What not to delete',
        paragraphs: [
          'Never touch /System/Library, and do not delete Application Support, Containers or Preferences wholesale. Remove cache folders only for apps you have quit, move them to the Trash rather than deleting immediately, and empty the Trash after the app has run once and behaved. If a folder returns to the same size within days, the app is producing it deliberately; the recurring-growth guide covers how to trace that.',
          'ClearDisk’s free scan opens the same folders with the same labels, Safe, Review and Leave it, and moves selections to the Trash first. It shows protected system and account folders but does not offer them for removal, which is the boundary this guide recommends you keep by hand as well.',
        ],
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'clear-system-data-on-mac',
      'clear-cache-on-mac',
      'system-data-keeps-growing',
    ],
    sources: [
      {
        label: 'Apple: go directly to a specific folder on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1236/mac',
      },
      {
        label: 'Apple: understand Storage settings',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'trash-wont-empty-mac',
    title: 'Trash won’t empty on Mac: locked, in use or on another disk',
    description:
      'When the Mac Trash will not empty: unlock items with Get Info, quit the app using the file, use Delete Immediately, and handle the Trash on external disks.',
    summary:
      'The Trash refuses for a reason it usually names: a locked file, a file an app still has open, or an item that lives on a disk that is not connected. Fix the reason and the normal Empty command works again.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'read-the-message',
        title: '1. Read the message first',
        paragraphs: [
          'When emptying fails, macOS says why: the item is locked, in use, or you do not have permission. That sentence decides the fix, so do not skip it and reach for a command from a forum. Apple’s storage guidance also explains why this matters for space: a file moved to the Trash keeps its storage until the Trash is emptied.',
          'Open the Trash and look at what is there. A single stubborn item often blocks the whole operation, and it is usually recognisable: an installer that is still mounted, a document open in an app, a virtual machine, or a folder copied from an external disk.',
        ],
      },
      {
        id: 'locked-items',
        title: '2. Locked items: unlock with Get Info',
        paragraphs: [
          'Apple’s guide gives the step: select the item, choose File → Get Info or press Command-I, and deselect the Locked checkbox. If the checkbox is greyed out, click the lock at the bottom of the window and enter an administrator name and password first. Then empty the Trash again.',
          'Files copied from another Mac or restored from a backup can arrive locked. Unlocking them changes nothing else about the file, so it is safe to do before you decide whether to delete.',
        ],
      },
      {
        id: 'items-in-use',
        title: '3. Items in use: quit the app, then try again',
        paragraphs: [
          'A file that an app has open cannot be removed until the app lets go. Quit the app that created or opened it and empty the Trash again. When you are not sure which app it is, close everything, then log out and back in, or restart, and empty the Trash before opening anything else. This is our practical order; it clears the lock without touching the file system directly.',
          'Modern macOS has no force-empty command, and the commands people paste from forums bypass the Trash rather than fixing the lock. Removing files outside the Trash removes the ability to put them back, and it does not release a file that a running process still holds.',
        ],
      },
      {
        id: 'delete-one-stubborn-item',
        title: '4. Delete a single stubborn item',
        paragraphs: [
          'Apple documents a per-item route: Control-click the item in the Trash and choose Delete Immediately. It removes that item permanently and leaves the rest of the Trash where it is, so use File → Put Back on anything you want to keep first.',
          'If Delete Immediately also fails with an in-use message, the lock is real and the app or process behind it still needs to quit. Restart and try again before anything else.',
        ],
      },
      {
        id: 'external-disks-and-space',
        title: '5. Trash on external disks, and what still counts',
        paragraphs: [
          'Each disk keeps its own Trash. Items you deleted from an external drive appear in the Trash only while that drive is connected, and the space they use is on that drive, not your Mac. Connect the disk, then empty the Trash; ejecting it does not free anything. A backup disk used by Time Machine is managed by Time Machine, and its backups are not meant to be deleted through the Trash at all.',
          'After the Trash empties, check System Settings → General → Storage. If the available figure has not moved, the snapshots and storage-not-updating guides explain purgeable space and delayed figures. ClearDisk’s own removal is Trash-first for exactly this reason: files go where you can still put them back, and the space returns when you empty the Trash yourself.',
        ],
      },
    ],
    related: [
      'mac-storage-not-updating-after-deleting-files',
      'purgeable-space-on-mac',
      'time-machine-snapshots',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
    ],
  },
];
