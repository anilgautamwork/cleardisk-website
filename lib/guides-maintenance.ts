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
      'how-to-check-storage-on-mac',
      'find-large-files-on-mac',
      'uninstall-apps-on-mac',
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
      'photoshop-scratch-disk-full-mac',
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
      'best-free-mac-cleaner',
      'find-large-files-on-mac',
      'what-is-system-data-on-mac',
      'clear-system-data-on-mac',
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
      'delete-macos-installer-mac',
      'time-machine-snapshots',
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
        code: ['du -sh ~/Library/Caches'],
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
      'uninstall-apps-on-mac',
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
          'Modern macOS has no Secure Empty Trash, and the commands people paste from forums bypass the Trash rather than fixing the lock. Removing files outside the Trash removes the ability to put them back, and it does not release a file that a running process still holds.',
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
  {
    slug: 'check-disk-space-mac-terminal',
    title: 'Check disk space on Mac in Terminal: measure, then decide',
    description:
      'Terminal commands that only measure: df for the whole disk, du to size Library and hidden folders, sort to rank them, and what Terminal cannot see.',
    summary:
      'Terminal is the fastest way to size the folders Finder hides. Use df and du, which only read, then remove files through Finder and the Trash so you can put them back.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'open-terminal',
        title: '1. Open Terminal and understand the two safe commands',
        paragraphs: [
          'Apple’s guide gives two routes: open Launchpad and type Terminal, or open the /Applications/Utilities folder in Finder and double-click Terminal. Everything below uses two commands that only read the disk. df reports how full a volume is; du adds up the size of a folder. Neither changes a file.',
          'Prefix nothing with sudo and do not paste commands that start with rm. This guide deliberately contains no deletion command, because the point of measuring in Terminal is to know what to remove in Finder, where the Trash gives you a way back.',
        ],
      },
      {
        id: 'size-the-whole-disk',
        title: '2. Size the whole disk with df',
        paragraphs: [
          'Run df -h / and read the line for your startup volume: size, used, available and the percentage used. The available figure here is the free space; it does not include the purgeable space that Disk Utility and Storage settings fold into their available figure, which is why Terminal can show less room than System Settings does.',
          'Write the used figure down. After any cleanup, run df -h / again; the difference is what you actually reclaimed, and it is the only number that settles arguments with a storage bar.',
        ],
        code: ['df -h /'],
      },
      {
        id: 'rank-library-folders',
        title: '3. Rank the Library folders with du',
        paragraphs: [
          'Run du -sh ~/Library/* 2>/dev/null | sort -h to size every folder inside your user Library and list them smallest to largest; the last lines are the ones that matter. The 2>/dev/null part hides permission errors for folders macOS keeps private. To go one level deeper into a big one, repeat with its path, for example du -sh ~/Library/Caches/* 2>/dev/null | sort -h.',
          'Expect Caches, Containers, Application Support, Developer, Mail and Messages near the bottom of the sorted list. The Library guide explains what each holds and which ones to leave alone; the numbers you have just produced tell you which of them to read about first.',
        ],
        code: [
          'du -sh ~/Library/* 2>/dev/null | sort -h',
          'du -sh ~/Library/Caches/* 2>/dev/null | sort -h',
        ],
      },
      {
        id: 'find-hidden-home-folders',
        title: '4. Find the hidden folders in your home folder',
        paragraphs: [
          'Developer tools keep caches in folders whose names start with a dot, which Finder hides. Run du -sh ~/.[!.]* 2>/dev/null | sort -h to size them. Typical entries are .npm, .cache, .cargo, .gradle and .docker, and on a developer Mac they can outweigh the Library.',
          'For projects, du -sh ~/Projects/*/node_modules 2>/dev/null | sort -h, adjusted to your folder name, lists every node_modules by size in one command. The node_modules and package-cache guides cover what to do with them.',
        ],
        code: [
          'du -sh ~/.[!.]* 2>/dev/null | sort -h',
          'du -sh ~/Projects/*/node_modules 2>/dev/null | sort -h',
        ],
      },
      {
        id: 'what-terminal-cannot-see',
        title: '5. What Terminal cannot see, and where to go next',
        paragraphs: [
          'Terminal is limited by permissions like any app. Folders macOS protects return errors until you grant Terminal Full Disk Access under System Settings → Privacy & Security, and even then local snapshots, purgeable space and other volumes are not in a du total. If the folders you measured do not add up to the used figure from df, that gap is the explanation, not a hidden file.',
          'Take the list to Finder: Go → Go to Folder with the path, review, move to the Trash, and empty it after the app has run again. A disk scanner produces the same list with allocated sizes and labels in one pass and adds a Reveal in Finder button, which is the step this guide does by hand. ClearDisk’s scan is free and runs locally; its cleanup is the same Trash-first move, from inside the app.',
        ],
      },
    ],
    related: [
      'show-library-folder-mac',
      'find-node-modules-folders-mac',
      'clear-npm-cache-mac',
      'best-free-mac-cleaner',
      'purgeable-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: open or quit Terminal on Mac',
        url: 'https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac',
      },
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
      {
        label: 'Apple: understand Storage settings',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
      },
    ],
  },
  {
    slug: 'delete-macos-installer-mac',
    title: 'Delete a macOS installer and leftover disk images on Mac',
    description:
      'Where the Install macOS app and old .dmg files hide, why an installer refuses to delete, when to keep one for a bootable drive, and how to get space back.',
    summary:
      'A full macOS installer is a multi-gigabyte app sitting in Applications after an upgrade, and every .dmg you ever opened is still in Downloads. Both are safe to remove once you know the rule for each.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'find-the-installers',
        title: '1. Find the installers',
        paragraphs: [
          'Apple’s download page explains that a full installer from the App Store lands in your Applications folder as an app named Install macOS followed by the version name. Open Applications and sort by size; if it is there, it is usually the largest single item. Storage settings lists it under Applications too.',
          'Disk images are the second source. Look in Downloads for .dmg, .pkg and .zip files. Each is a copy of an installer you already ran, and the app it installed lives in Applications, not inside the image.',
        ],
      },
      {
        id: 'delete-the-macos-installer',
        title: '2. Delete the macOS installer',
        paragraphs: [
          'Once the upgrade has finished, drag Install macOS to the Trash. Apple provides its installers for download again, so keeping it is a bandwidth trade, not a safety one. The exception is a bootable installer: Apple’s guide for creating one requires the full installer in Applications, so keep it if you plan to make an installer drive for another Mac.',
          'If macOS says the installer cannot be deleted because it is in use, the Installer app is still running or a volume it mounted is still attached. Quit Installer, eject anything it mounted from the Finder sidebar, and try again; if that fails, restart and delete it before opening anything else.',
        ],
      },
      {
        id: 'eject-then-delete-disk-images',
        title: '3. Eject disk images, then delete them',
        paragraphs: [
          'A .dmg that is open appears as a volume in the Finder sidebar. Click the eject icon next to it first; a mounted image counts as in use and blocks deletion. Then move the .dmg in Downloads to the Trash. The installed app keeps working, because it was copied out of the image when you dragged it to Applications.',
          'Package files (.pkg) work the same way: the installation is complete, and the package is a leftover. Keep only the ones a vendor asks you to keep, which is rare.',
        ],
      },
      {
        id: 'empty-the-trash',
        title: '4. Empty the Trash and check',
        paragraphs: [
          'Apple’s storage guidance is explicit that a file’s space is not available until you empty the Trash. Empty it, then compare System Settings → General → Storage with the figure you started from. A single installer often returns more space than an afternoon in the Library.',
          'When the Trash refuses, the Trash guide covers locked items, files in use and Delete Immediately.',
        ],
      },
      {
        id: 'keep-it-from-piling-up',
        title: '5. Keep it from piling up',
        paragraphs: [
          'Two habits prevent the next pile. Use Software Update rather than a full installer for routine upgrades; Apple notes it can use less storage to download and install. And clear Downloads after each install, or set your browser to ask where to save so installers stop landing there by default.',
          'A free local scan lists disk images and installer apps by allocated size wherever they ended up, including a second copy in a Desktop folder or an external drive. ClearDisk shows them, lets you reveal each in Finder, and moves what you choose to the Trash first.',
        ],
      },
    ],
    related: [
      'not-enough-space-to-update-macos',
      'free-up-space-on-mac',
      'trash-wont-empty-mac',
      'find-large-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: how to download and install macOS',
        url: 'https://support.apple.com/en-us/102662',
      },
      {
        label: 'Apple: create a bootable installer for macOS',
        url: 'https://support.apple.com/en-us/101578',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
    ],
  },
  {
    slug: 'best-free-mac-cleaner',
    title: 'Best free Mac cleaner: what macOS includes, then free apps',
    description:
      'The best free Mac cleaner is the one built in. What Storage settings does, which free apps cover the gaps according to their makers, and how to stay safe.',
    summary:
      'macOS ships with a storage manager, a large-file finder and a Trash with undo. Free apps add visual maps and app uninstalling. Pay only when you want in-app cleanup with a safety net.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'what-macos-already-includes',
        title: 'What macOS already includes',
        paragraphs: [
          'Before installing anything, use the tools Apple documents in its storage guidance. System Settings → General → Storage shows the category bar with recommendations: Store in iCloud, Optimize Storage for TV downloads and email attachments, Empty Trash Automatically, and Reduce Clutter, which opens lists of large files, downloads and unsupported apps. Each category has its own information button for deleting device backups, apps and attachments.',
          'Add Finder’s Get Info for sizes, the Trash with File → Put Back for undo, Disk Utility for the free-versus-purgeable distinction, and safe mode for a one-off cache clear before an update. For a Mac whose storage is mostly documents, photos and apps, this is the whole toolkit.',
        ],
      },
      {
        id: 'free-apps-by-job',
        title: 'Free apps, by the job they do',
        paragraphs: [
          'These descriptions come from each maker’s own page as read on 6 September 2026. We make ClearDisk and have not tested the others side by side, so this is a map of what exists, not a ranking.',
        ],
        items: [
          'OnyX (Titanium Software): a free multifunction maintenance utility that verifies system files, runs cleaning and maintenance tasks and uninstalls apps, with a separate build for each macOS version. Aimed at people who know which maintenance task they want.',
          'GrandPerspective: a free, open-source tree map in which each file is a rectangle proportional to its size, so the biggest folders are visible at a glance. Files can be deleted from inside the app, so read a rectangle before clicking it.',
          'OmniDiskSweeper (The Omni Group): a free list of your files from largest to smallest that lets you Trash or open them. The simplest way to find the ten biggest things on a disk.',
          'AppCleaner (FreeMacSoft): a free uninstaller that finds the small files an app leaves around the system and deletes them with the app.',
          'ClearDisk: free, unlimited local scanning with a System Data breakdown labelled Safe, Review or Leave it, a storage map, a largest-files list and Reveal in Finder. Cleanup from inside the app, Trash-first with undo, is a one-time license.',
        ],
      },
      {
        id: 'stay-safe',
        title: 'How to stay safe with any cleaner',
        paragraphs: [
          'The category attracts bad actors. In January 2026, researchers documented sponsored search results for “mac cleaner” that led to malware. Download from the maker’s own site or the App Store, check that Gatekeeper accepts the app without a workaround, and be suspicious of any tool that promises a fixed amount of freed space, a faster Mac, or memory cleaning, none of which a file scanner can honestly guarantee.',
          'Prefer tools that move files to the Trash rather than deleting immediately, that show you the path of every item before removal, and that tell you when they lacked permission to read a folder. A cleaner that silently skips protected locations produces a confident total that is wrong.',
        ],
      },
      {
        id: 'how-to-choose',
        title: 'How to choose',
        paragraphs: [
          'Start free and specific. If Storage settings already explains your number, stop there. If System Data is large and unexplained, use a scanner that opens the Library and shows allocated sizes: GrandPerspective and OmniDiskSweeper for a picture, ClearDisk for the breakdown with labels. If old apps are the problem, an uninstaller does the job. If you want maintenance scripts, OnyX is built for that.',
          'Pay only for the part you will use repeatedly. For most people that is either nothing, or a one-time license for in-app cleanup with a way back. Whatever you pick, the guides on this site work with Finder and Terminal alone, so the free path is always open.',
        ],
      },
    ],
    related: [
      'disk-space-analyzer-mac',
      'uninstall-apps-on-mac',
      'free-up-space-on-mac',
      'what-is-system-data-on-mac',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Titanium Software: OnyX',
        url: 'https://www.titanium-software.fr/en/onyx.html',
      },
      {
        label: 'GrandPerspective',
        url: 'https://grandperspectiv.sourceforge.net/',
      },
      {
        label: 'The Omni Group: OmniDiskSweeper',
        url: 'https://www.omnigroup.com/more',
      },
      {
        label: 'FreeMacSoft: AppCleaner',
        url: 'https://freemacsoft.net/appcleaner/',
      },
      {
        label:
          'AppleInsider: Mac malware in sponsored Google ads, January 2026',
        url: 'https://appleinsider.com/articles/26/01/28/mac-malware-is-sneaking-into-some-sponsored-google-ads',
      },
    ],
  },
  {
    slug: 'mac-storage-full-after-macos-update',
    title: 'Mac storage full after a macOS update: what changed',
    description:
      'Why free space drops after a macOS update: the pre-update snapshot, an installer left in Applications, rebuilt caches, and how long to wait before acting.',
    summary:
      'An update leaves three things behind: a local snapshot of the previous system, the installer app if you used one, and caches the system rebuilds. Most of it clears itself within days; the installer does not.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'measure-before-you-judge',
        title: '1. Measure before you judge',
        paragraphs: [
          'Open System Settings → General → Storage and note the available figure and the System Data figure. Both can look worse for a day after an update than they will a week later, because some of what the update left behind is temporary by design. Write the numbers down and compare after 24 hours before removing anything.',
          'If you use Terminal, df -h / gives the used figure without purgeable space folded in, which makes the before-and-after comparison cleaner. The Terminal guide covers the read-only commands.',
        ],
        code: ['df -h /'],
      },
      {
        id: 'the-pre-update-snapshot',
        title: '2. The snapshot taken before the update',
        paragraphs: [
          'Apple’s local-snapshots page states that another snapshot is saved before installing any macOS update. That snapshot holds the previous system state so an update can be undone, and its space is counted as available: macOS deletes snapshots as they age or as space is needed for other things. Apple does not publish a fixed retention for the pre-update snapshot, so treat it as temporary rather than as a folder to clear.',
          'If the number matters today, the snapshots guide describes Apple’s supported route for thinning local snapshots. Do not use a third-party tool to force it; the space returns on its own, and the snapshot is the only easy way back if the update misbehaves.',
        ],
      },
      {
        id: 'the-installer',
        title: '3. The installer, if you used one',
        paragraphs: [
          'Software Update leaves no app behind. A full installer from the App Store does: Apple’s download page notes it lands in Applications as Install macOS followed by the version name, and it stays there after the upgrade. It is often the single largest item on the disk and it is safe to move to the Trash once the upgrade is done, unless you plan to make a bootable installer.',
          'The installer guide covers the exceptions and what to do if the app refuses to delete because it is still in use.',
        ],
      },
      {
        id: 'caches-and-re-downloads',
        title: '4. Caches being rebuilt and content coming back',
        paragraphs: [
          'Apple’s storage guidance explains that macOS recreates certain system caches as needed, which is why they can look like growth after an update: the system and your apps rebuild what the upgrade invalidated. Background work in the first day, such as indexing and iCloud or Photos re-syncing optimized copies, also uses space temporarily.',
          'None of this is cleanup material. Let the Mac idle on power for a night, then measure again. What remains after that is the real change.',
        ],
      },
      {
        id: 'if-it-does-not-settle',
        title: '5. If it does not settle',
        paragraphs: [
          'When System Data is still far above its pre-update level after a few days, the update is no longer the cause. Work through the files rather than the category: the Library guide explains what the large folders hold, and the recurring-growth guide shows how to find the app producing new data.',
          'A free local scan lists Library folders, developer directories and installers with allocated sizes so you can compare them with the numbers you wrote down in step one. ClearDisk labels what it finds Safe, Review or Leave it, moves anything you choose to the Trash first, and reports snapshots as a count so you do not mistake them for removable files.',
        ],
      },
    ],
    related: [
      'time-machine-snapshots',
      'delete-macos-installer-mac',
      'system-data-keeps-growing',
      'not-enough-space-to-update-macos',
    ],
    sources: [
      {
        label: 'Apple: Time Machine local snapshots',
        url: 'https://support.apple.com/en-us/102154',
      },
      {
        label: 'Apple: how to download and install macOS',
        url: 'https://support.apple.com/en-us/102662',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'mac-storage-glossary',
    title: 'Mac storage glossary: System Data, purgeable space and more',
    description:
      'Plain definitions of the Mac storage terms that confuse cleanup: System Data, Other, purgeable space, local snapshots, allocated size, containers and more.',
    summary:
      'Most storage confusion is vocabulary. These are the terms macOS, Finder and cleanup tools use, what each one actually measures, and which guide picks up from there.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'the-storage-bar',
        title: 'The storage bar',
        paragraphs: [
          'System Settings → General → Storage shows a bar divided into categories. Apple defines them in its Storage settings guide; the ones below cause the most questions.',
        ],
        items: [
          'System Data: Apple’s general category for files that do not belong to any more specific category, such as caches, logs, app containers and developer files. It is a category, not a folder. See the What is System Data guide.',
          'Other: the name older macOS versions used for roughly the same catch-all. Searches for “Other storage” and “System Data” describe the same problem.',
          'Available: the space macOS is prepared to give you, which can include purgeable space it has not released yet. Free space is the part already released.',
          'Used: everything on the volume, including files in the Trash until it is emptied.',
        ],
      },
      {
        id: 'space-that-comes-back',
        title: 'Space that comes back on its own',
        paragraphs: [
          'Some of what looks used is space macOS manages for you. Counting it as removable is the most common cleanup mistake.',
        ],
        items: [
          'Purgeable space: files macOS can remove when it needs the room, as Disk Utility describes. You cannot empty it by hand and it is already inside the available figure. See the purgeable space guide.',
          'Local snapshot: an hourly copy of the startup disk that Time Machine keeps for 24 hours, plus one before a macOS update. Apple counts its space as available and thins it automatically. See the snapshots guide.',
          'Cache: working files an app can rebuild. Safe to remove once the app is closed, and expected to come back.',
          'Optimize Storage: a family of settings that keep originals in iCloud or on the server and smaller copies on the Mac. Photos, Mail and TV each have their own version.',
        ],
      },
      {
        id: 'where-files-live',
        title: 'Where files live',
        paragraphs: [
          'Finder hides or bundles several of the places that hold the most space.',
        ],
        items: [
          'Library: the folder that holds app data. There are three: ~/Library for your account, /Library for all users, and /System/Library for macOS, which is protected. See the Library folder guide.',
          'Container: a sandboxed app’s private folder inside ~/Library/Containers, including the data for Mail and Messages. Change it through the app, not Finder.',
          'Package: a folder that Finder shows as a single file, such as the Photos Library or an app bundle. Never edit inside one to save space.',
          'Disk image: a .dmg file that mounts as a volume. The app you installed was copied out of it, so the image is a leftover once ejected.',
          'Trash: one per disk. Items deleted from an external drive stay in that drive’s Trash and use its space until you empty the Trash with the drive connected.',
        ],
      },
      {
        id: 'sizes-and-permissions',
        title: 'Sizes and permissions',
        paragraphs: [
          'Two tools can report different numbers for the same folder and both be right.',
        ],
        items: [
          'Allocated size: the space a file actually occupies on disk. On APFS, cloned and sparse files can occupy far less than their logical size, which is the size Finder shows first.',
          'Full Disk Access: the permission under System Settings → Privacy & Security that lets an app read folders macOS otherwise keeps private. Without it, a scanner sees less and should say so.',
          'Hidden folder: a folder whose name begins with a dot, such as ~/.npm. Finder hides them; Terminal and scanners with Full Disk Access do not. See the Terminal guide.',
        ],
      },
      {
        id: 'cloud-and-developer-terms',
        title: 'Cloud and developer terms',
        paragraphs: [
          'These come up whenever a Mac belongs to a developer or syncs with a cloud drive.',
        ],
        items: [
          'Online-only, streamed or placeholder file: a file that lives in the cloud and takes no local space until opened. The opposite is mirrored or downloaded. See the cloud drive and iCloud guides.',
          'node_modules: a per-project folder of installed JavaScript dependencies that can be recreated by reinstalling. See the node_modules guide.',
          'Derived Data: Xcode’s rebuildable build output under ~/Library/Developer. See the Xcode guide.',
          'Docker.raw: the single file that holds every Docker container, image and volume on a Mac; its allocated size grows and rarely shrinks on its own. See the Docker guide.',
          'Package cache: downloads kept by npm, pnpm, Yarn, pip or Homebrew so a reinstall is faster. Each manager documents a command to clear it. See the cache guides.',
        ],
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'purgeable-space-on-mac',
      'time-machine-snapshots',
      'show-library-folder-mac',
      'disk-space-analyzer-mac',
    ],
    sources: [
      {
        label: 'Apple: understand Storage settings',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
      },
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
      {
        label: 'Apple: Time Machine local snapshots',
        url: 'https://support.apple.com/en-us/102154',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'how-to-check-storage-on-mac',
    title: 'How to check storage on Mac and see what uses the space',
    description:
      'Open Storage settings, read the bar, drill into Applications, Documents and Messages, check a single drive, and find what the categories hide.',
    summary:
      'Storage settings answers the first question in one screen and the categories answer the second. The last part, what sits inside System Data, needs Terminal or a scanner.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'open-storage-settings',
        title: '1. Open Storage settings',
        paragraphs: [
          'Apple’s guide gives the path: choose Apple menu → System Settings, click General in the sidebar, then click Storage. On macOS versions before Ventura, Apple’s storage page points to Apple menu → About This Mac → Storage instead. The steps are the same on a MacBook Air, MacBook Pro, iMac or Mac mini.',
          'Give the screen a minute. The bar appears immediately but the categories keep refining while macOS finishes counting, so the first numbers you see can shift before they settle.',
        ],
      },
      {
        id: 'read-the-bar',
        title: '2. Read the bar',
        paragraphs: [
          'Apple describes the coloured bar as the storage used by different apps and file types, with the amount of free storage shown as Available. Hover over a segment to see its name and size. The categories are macOS’s classification, not folders: a file counts once, under whichever category fits it best.',
          'Two segments confuse most people. System Data is Apple’s catch-all for files that fit no other category, which its guide says primarily includes system files such as logs, caches and runtime resources. Available can include purgeable space that macOS has not released yet, which Disk Utility separates from free space. The related guides cover both in detail.',
        ],
      },
      {
        id: 'open-a-category',
        title: '3. Open a category with its information button',
        paragraphs: [
          'Apple’s guide notes that categories such as Applications, Documents, Messages, Mail, iOS files and Trash have an information button that opens them. This is where the useful lists live.',
        ],
        items: [
          'Applications: every app sorted by size, with a column showing where it came from and whether it is still supported.',
          'Documents: three views, Large Files, Downloads and a File Browser, each sortable by size with a Show in Finder option.',
          'Messages and Mail: attachments by size, deletable from the list. The Mail and Messages guides explain what deleting does to your accounts.',
          'iOS files: iPhone and iPad backups stored on the Mac, with their dates.',
          'Trash: what is waiting to be emptied, and how much space emptying it returns.',
        ],
      },
      {
        id: 'check-a-single-drive',
        title: '4. Check a single disk or an external drive',
        paragraphs: [
          'Storage settings describes the startup disk. For any volume, open Disk Utility, select it and read the capacity, used and available figures; Apple’s Disk Utility guide explains that available can include both free space and purgeable space. In Finder, select a drive and choose File → Get Info for the same numbers.',
          'External drives keep their own Trash, so a drive that looks full after you deleted files needs its Trash emptied while it is connected. The Trash guide covers the cases where that refuses.',
        ],
      },
      {
        id: 'see-what-the-categories-hide',
        title: '5. See what the categories hide',
        paragraphs: [
          'System Data has no information button and no list, which is the point where Storage settings stops helping. The next layer is the folders themselves: the Library guide explains what is in there, the Terminal guide gives the read-only commands that size every folder, and the large-files guide covers documents that Storage settings misses because they sit outside your home folder.',
          'A disk scanner does the same in one pass, with allocated sizes and a label for each folder. ClearDisk’s scan is free and local, shows the System Data folders Storage settings only totals, and lets you reveal any item in Finder before deciding what to do with it.',
        ],
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'find-large-files-on-mac',
      'check-disk-space-mac-terminal',
      'free-up-space-on-mac',
      'purgeable-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: change Storage settings on Mac',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
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
  {
    slug: 'uninstall-apps-on-mac',
    title: 'How to uninstall apps on Mac, and remove what they leave',
    description:
      'Uninstall Mac apps the way Apple documents: the app’s own uninstaller or Finder, when an app will not delete, and how to find the files it leaves in Library.',
    summary:
      'Dragging an app to the Trash removes the app but not its settings, caches or login items. Use the maker’s uninstaller when there is one, then review what stays behind in your Library.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'check-for-an-uninstaller',
        title: '1. Check for the app’s own uninstaller first',
        paragraphs: [
          'Apple’s page on deleting apps is direct: find out whether the app includes an Uninstall or Uninstaller app, because that is the best way to delete it, and some apps offer removal as a menu item or setting instead. Apple’s guide for apps installed from the internet adds the practical step: if the app is in a folder, open the folder and look for Uninstall [App] or [App] Uninstaller, then double-click it.',
          'Uninstallers matter for suites that install more than one thing: creative and office suites, security software, drivers and anything with a menu bar helper. Apple notes they help remove login items, extensions and other data the app stored, which Finder cannot see.',
        ],
      },
      {
        id: 'delete-the-app',
        title: '2. Delete the app with Finder or from its icon',
        paragraphs: [
          'For an app without an uninstaller, Apple’s steps are to drag it from the Applications folder to the Trash, or select it and choose File → Move to Trash, entering an administrator name and password if asked. For apps from the App Store, Apple’s App Store guide describes pressing and holding the app’s icon until it jiggles and clicking the delete button, in Launchpad or the Apps window that replaces it on recent macOS.',
          'Then choose Finder → Empty Trash. Until you do, the app still occupies its space, and a large app such as a game or a creative suite can be tens of gigabytes.',
        ],
      },
      {
        id: 'if-an-app-will-not-delete',
        title: '3. If an app will not delete',
        paragraphs: [
          'Two causes cover almost every case. Apple states that you cannot use Finder to delete apps required by your Mac, including many installed by macOS such as Mail, Music, Books and Notes; they are part of the system and are not taking space you can reclaim. The second is an app that is still in use: quit it, including any helper it runs in the menu bar, and try again. Apple’s page suggests restarting, or starting up in safe mode, when the app stays in use.',
          'Do not delete an app’s folder from inside a package or force it with Terminal. If the maker ships an uninstaller and the app will not go, run the uninstaller; that is what it is for.',
        ],
      },
      {
        id: 'find-what-the-app-left-behind',
        title: '4. Find what the app left behind',
        paragraphs: [
          'Apple’s page makes the limit clear: deleting or uninstalling an app does not remove documents or other files you created. It also leaves behind support data unless an uninstaller cleaned it. The usual places are inside your Library, named after the app or its maker.',
        ],
        items: [
          'Application Support: settings, databases and downloaded content, under the app or vendor name.',
          'Containers and Group Containers: data for sandboxed apps, named by bundle identifier such as com.vendor.app.',
          'Caches: rebuildable working files, also by bundle identifier. Safe to remove once the app is gone.',
          'Preferences: small .plist files. Harmless to leave; remove only if you want a fresh start on reinstall.',
          'Logs, Saved Application State and LaunchAgents: usually tiny, worth checking for a helper that keeps launching.',
        ],
      },
      {
        id: 'login-items-and-the-last-check',
        title: '5. Login items, extensions and the last check',
        paragraphs: [
          'Open System Settings → General → Login Items & Extensions and remove anything that belonged to the app; a leftover helper is the most common reason a deleted app still appears to run. Then empty the Trash and check System Settings → General → Storage.',
          'The Library guide explains those folders and which to leave alone. If you would rather not search by hand, the free-tools guide lists uninstallers that do this search for you, and ClearDisk’s free scan shows Application Support, Containers and Caches with allocated sizes so you can review a leftover before it goes to the Trash. Keep documents; only the app’s own data is the target.',
        ],
      },
    ],
    related: [
      'show-library-folder-mac',
      'best-free-mac-cleaner',
      'free-up-space-on-mac',
      'trash-wont-empty-mac',
    ],
    sources: [
      {
        label: 'Apple: delete or uninstall apps on Mac',
        url: 'https://support.apple.com/en-us/102610',
      },
      {
        label:
          'Apple: install and uninstall apps from the internet or a disc on Mac',
        url: 'https://support.apple.com/guide/mac-help/mh35835/mac',
      },
      {
        label:
          'Apple: install and uninstall purchases from the App Store on Mac',
        url: 'https://support.apple.com/guide/app-store/install-and-uninstall-purchased-apps-fir0fb69db23/mac',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
];
