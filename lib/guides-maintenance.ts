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
    title: 'How to free up disk space on Mac, step by step',
    description:
      'Clear storage on Mac in a sensible order: check Storage settings, use Apple’s built-in recommendations, clear Downloads and Trash, then review large files.',
    summary:
      'Start with the files you recognise. Check available space, review downloads and unused apps, then investigate anything you still cannot explain. Keep a backup before removing important work.',
    published: '2026-09-05',
    updated: '2026-09-26',
    sections: [
      {
        id: 'measure-first',
        title: '1. Check what is using space',
        paragraphs: [
          'On macOS Ventura 13 or later, open System Settings → General → Storage. On older versions, choose Apple menu → About This Mac → Storage. Look for the largest categories and open More Info where that button is available. System Data has no single list you can empty.',
          'Note the available space before changing anything. If an update or export says how much room it needs, keep that figure nearby. You have a specific job to finish, not a storage bar to make perfect.',
        ],
      },
      {
        id: 'built-in-recommendations',
        title: '2. Use the built-in recommendations, knowing what each does',
        paragraphs: [
          'Read the storage recommendations macOS offers for your setup. Some use iCloud to reduce local storage; others manage downloaded media or automatically remove old items from Trash. Choose an option only after checking what it changes.',
          'iCloud storage and Mac disk space are separate. Using iCloud requires room in that account, and deleting a synced file is different from removing its local download. Review the iCloud guide before changing where your files are stored.',
        ],
        links: [
          {
            label: 'Understand iCloud storage versus Mac storage',
            href: '/icloud-storage-full-but-not-mac',
          },
        ],
      },
      {
        id: 'obvious-space',
        title: '3. Clear the obvious space',
        paragraphs: [
          'Start with a file you can identify: an installer for an app you already installed, a duplicate export or a download you no longer need. Open anything you are unsure about. For apps, check for the maker’s uninstaller before using Finder.',
        ],
        items: [
          'Downloads: sort by size and date, then check that you no longer need each item or can obtain it again.',
          'Applications: use the maker’s uninstall instructions. Removing an app does not cancel its subscription.',
          'Mail: erase junk and deleted messages from within Mail rather than hunting for its files.',
          'Trash: review its contents and restore anything you need before emptying it. Emptying Trash is permanent; moving files there alone does not free their space.',
        ],
      },
      {
        id: 'large-media',
        title: '4. Move large media instead of deleting it',
        paragraphs: [
          'Videos, photo libraries and project archives are often the biggest files and the least replaceable. Apple’s guidance is to move them to an external drive rather than delete them. Copy first, open the copy and check it, then remove the original. The Photos library has its own relocation steps, covered in the linked guide.',
          'Moving a file between folders on the same disk does not free that disk’s space. Use a separate storage device, verify the copy and keep a backup before removing the original.',
        ],
      },
      {
        id: 'system-data-last',
        title: '5. Review System Data last, and know when to stop',
        paragraphs: [
          'If System Data is large and you still need room, inspect what contributes to it. Do not delete an unfamiliar Library folder because of its size. Start with the app that created it and that app’s own cleanup controls.',
          'ClearDisk can show local paths and allocated sizes to help with that investigation. Its results need not match Apple’s category totals. Scanning is free; you can review the findings before deciding whether you need its paid cleanup controls. Stop when you have enough room for the task that brought you here.',
        ],
      },
    ],
    questions: [
      {
        q: "What's the safest order to free up space on a Mac?",
        a: "Check what's using space in Storage settings, then clear files you can identify like old installers, unneeded downloads and junk mail before touching anything unfamiliar. Review System Data last, since it has no single list you can empty, and stop once you have enough room for the task.",
      },
      {
        q: 'Will using iCloud to store my Desktop and Documents free up Mac storage?',
        a: 'It can, but iCloud storage and Mac disk space are separate, so using iCloud requires room in that account too. Deleting a synced file is different from removing its local download, so review what the recommendation actually changes before turning it on.',
      },
      {
        q: 'Should I delete large videos or move them to save space?',
        a: "Apple's guidance is to move large media like videos, photo libraries and project archives to an external drive rather than delete them, since they are often the biggest files and the least replaceable. Copy the file first, open and check the copy, then remove the original.",
      },
      {
        q: 'Is a Mac cleaner app worth it for freeing up space?',
        a: "Scanning with a tool like ClearDisk is free and can show local paths and sizes to help investigate System Data, though its results won't necessarily match Apple's category totals exactly. You can review what it finds before deciding whether you need its paid cleanup features at all.",
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
    sources: [
      storage,
      settings,
      trash,
      {
        label: 'Apple: delete or uninstall apps',
        url: 'https://support.apple.com/en-us/102610',
      },
    ],
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
    questions: [
      {
        q: 'Is it safe to delete caches on a Mac?',
        a: 'Caches are rebuildable by definition, so removing one costs a slower first launch, not data. The risk is deleting the wrong folder next to it or clearing a cache while the app is running. Quit the app, clear only folders you can name, and use the Trash so you can put a folder back.',
      },
      {
        q: 'How do I clear the Safari cache?',
        a: 'Apple’s route is Safari → Settings → Privacy → Manage Website Data → Remove All, which also removes cookies. To clear only the cache, enable the Develop menu under Safari’s Advanced settings and choose Develop → Empty Caches.',
      },
      {
        q: 'Is there a keyboard shortcut to clear cache and cookies?',
        a: 'Not for cookies. With the Develop menu enabled, Option-Command-E empties Safari’s caches; website data and cookies are removed from the Privacy settings pane.',
      },
      {
        q: 'How do I clear the system cache?',
        a: 'Not by hand. Apple’s supported route is starting up in safe mode, which clears certain system caches that macOS recreates as needed. User-level caches live in ~/Library/Caches and are covered above.',
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
    updated: '2026-09-23',
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
          'Install an analyzer when the built-in views stop explaining the number: System Data is large and Documents is not, storage grows back after cleanup, or you need to see inside ~/Library, application containers and developer directories in one pass. A scanner can help you compare those folders in one view.',
          'Expect a permission step. macOS keeps some locations private until you grant the app Full Disk Access in System Settings → Privacy & Security. Without it, an analyzer sees less and should say so. Also expect that iCloud files stored only in the cloud do not have their full contents stored locally, and that anything you move to the Trash keeps its space until the Trash is emptied.',
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
          'The $10 one-time cleanup license unlocks Move to Trash and Remove Permanently. In version 2.0.0, type delete and click the red button to confirm permanent removal. This skips the Trash; only the Trash option supports undo while the items remain there.',
          'Limits: it needs macOS 15 or later, asks for Full Disk Access to read private folders, reports Time Machine local snapshots as a count rather than a size, and does not clean memory, remove malware, guarantee iCloud sync repair or find duplicates. iCloud Doctor inspects accessible Drive metadata and local copies.',
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
    questions: [
      {
        q: "What does a disk space analyzer do that Storage settings doesn't?",
        a: 'For documents, photos and apps, Storage settings already shows where space went, but the difference shows up in what Apple groups as System Data: caches, logs, app containers, device backups and developer files no category names individually. A good analyzer also reports the space a file actually occupies on disk.',
      },
      {
        q: 'Do I need Full Disk Access to scan my whole Mac?',
        a: 'Yes, for the private locations macOS keeps hidden, an analyzer needs Full Disk Access granted in System Settings, Privacy and Security. Without it, the app sees less of the disk and should say so rather than silently skipping folders and showing an incomplete total.',
      },
      {
        q: 'Is ClearDisk actually free to scan a Mac?',
        a: 'According to its own description, scanning is free and unlimited and everything runs on the Mac, with file names and results never uploaded. Removing files needs a one-time $10 license, and permanent removal in version 2.0.0 skips the Trash and cannot be undone.',
      },
      {
        q: 'What should I check before paying for a Mac cleaner app?',
        a: "Ask whether you can see scan results before paying and whether the price is one-time or a subscription, and whether removal goes through the Trash with a way back. Also check if it's notarized by Apple, shows hidden folders and allocated sizes, and admits when it lacked permission to read something.",
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
    questions: [
      {
        q: 'How much space do I actually need to update macOS?',
        a: 'Use the figure the update dialog itself states, not a generic amount, and compare it with the available space in System Settings, General, Storage. The installer needs more room than its download size because it unpacks and macOS keeps staging copies while installing.',
      },
      {
        q: 'Can starting in safe mode help make room for a macOS update?',
        a: "Yes, according to Apple's storage guidance, starting in safe mode clears certain system caches, which are recreated as needed, and that can provide enough temporary space to complete an update. Run the update from safe mode, then restart normally afterward.",
      },
      {
        q: 'Should I delete Time Machine local snapshots to fit a macOS update?',
        a: "Local snapshots are already counted as available space and macOS removes them on its own as it needs room, so they rarely actually block an update. There is a supported way to thin them if you want a clean measurement, but don't disable backups permanently for a few gigabytes.",
      },
      {
        q: 'Is it better to use Software Update or download the full macOS installer?',
        a: 'Prefer Software Update, since Apple says it can use less storage to download and install updates. A full installer from the App Store is a separate multi-gigabyte app that needs its own room, so keep to one route rather than having both at once.',
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
    questions: [
      {
        q: 'Why does Mail take up so much storage on my Mac?',
        a: "Mail keeps a local copy of your messages and, by default, most attachments, and the same attachment can actually exist three times: inside the message, in a Mail Downloads folder, and in your regular Downloads folder. Check Mail's category size in Storage settings to see the total.",
      },
      {
        q: 'How do I stop Mail from downloading every attachment?',
        a: "In Mail's Settings, under Accounts and Account Information, set Download Attachments to Recent, which Apple describes as attachments from the past 15 months, or None for no automatic download. This setting is per account, and Mail always downloads media like images and PDFs regardless.",
      },
      {
        q: 'Is it safe to remove attachments from old emails?',
        a: 'You can select a message and choose Remove Attachments, but for IMAP accounts this deletes the attachment from the mail server permanently, so save anything you still need first. Work through your biggest messages rather than running this across a whole mailbox at once.',
      },
      {
        q: 'Can I delete files inside the Mail folder in Library to save space?',
        a: "No, don't delete folders inside ~/Library/Mail or Mail's container in Finder, since they hold your mailboxes and the search index. Removing them can lose messages that were never on a server; use Mail's own attachment and junk settings instead.",
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
    questions: [
      {
        q: 'How do I open the Library folder on a Mac?',
        a: "Hold Option, open Finder's Go menu, and Library appears between Home and Computer, or choose Go to Folder and type ~/Library. There are three Library folders and only this one, belonging to your account, is meant for you to look through.",
      },
      {
        q: 'Is it safe to delete files in Application Support?',
        a: "Treat it as review-only: Application Support holds settings, databases and licenses for apps, and deleting a folder there can reset or break the app it belongs to. Only review it once the app is closed, and don't delete it wholesale.",
      },
      {
        q: "What's taking up so much space in my Mac's Library folder?",
        a: "The usual big folders are Caches, which are rebuildable working files safe to review once the app is closed, and Application Support, Containers and Group Containers, which hold app data best managed through the app itself. Developer, Mail and Messages have their own guides and shouldn't be trimmed directly.",
      },
      {
        q: 'Should I make the Library folder always visible in Finder?',
        a: "You can, using View, Show View Options in your home folder and selecting Show Library Folder, but it's just a convenience and doesn't change what's inside. Keep measuring folders before deleting anything, since making Library visible also makes accidental deletion easier.",
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'show-hidden-files-mac',
      'application-support-folder-mac',
      'clear-system-data-on-mac',
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
    questions: [
      {
        q: "Why won't my Mac let me empty the Trash?",
        a: "When emptying fails, macOS states the reason: the item is locked, in use by an app, or you don't have permission. Read that message first, since it tells you which fix applies, rather than trying a random command from a forum.",
      },
      {
        q: 'How do I unlock a file so I can delete it on Mac?',
        a: "Select the item, press Command-I to open Get Info, and deselect the Locked checkbox; if it's greyed out, click the lock at the bottom and enter an administrator name and password first. Then empty the Trash again.",
      },
      {
        q: 'The Trash says a file is in use, what do I do?',
        a: "Quit the app that created or opened the file, then try emptying the Trash again, since it can't be removed until the app releases it. If you're not sure which app it is, close everything, log out and back in or restart first.",
      },
      {
        q: 'Can I delete just one stuck item without emptying the whole Trash?',
        a: 'Yes, Control-click the item in the Trash and choose Delete Immediately, which removes just that one item permanently and leaves the rest of the Trash alone. If that also fails with an in-use message, the app or process behind it still needs to quit.',
      },
    ],
    related: [
      'delete-files-on-mac',
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
    updated: '2026-09-24',
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
          'Run df -h / and read the Avail column. On current macOS, / is the sealed system volume, so its Used figure counts only macOS itself and barely moves; Avail is the free space every volume on the disk shares. It does not include the purgeable space that Disk Utility and Storage settings fold into their available figure, which is why Terminal can show less room than System Settings does. Add /System/Volumes/Data to see what your own files and apps use.',
          'Write the Avail figure down. After any cleanup, run the same command again; the change in Avail is what you actually reclaimed, and it is the only number that settles arguments with a storage bar.',
        ],
        code: ['df -h / /System/Volumes/Data'],
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
    questions: [
      {
        q: 'How do I check how much free space I have on Mac using Terminal?',
        a: "Run df -h / and read the Avail column, which shows the free space every volume on the disk shares; this doesn't include the purgeable space that Disk Utility and Storage settings fold into their own available figure. Add /System/Volumes/Data to see what your own files and apps use.",
      },
      {
        q: 'What Terminal command shows the biggest folders in Library?',
        a: 'Run du -sh ~/Library/* 2>/dev/null | sort -h, which sizes every folder in your user Library smallest to largest so the last lines are the ones that matter. Repeat the same command one level deeper into any large folder to narrow it down further.',
      },
      {
        q: 'Is it safe to delete files using Terminal commands I found online?',
        a: 'This kind of guide deliberately avoids any deletion command, using only df and du, which read the disk without changing anything. Take what you measure to Finder instead and remove files through the Trash, so you keep the option to put them back.',
      },
      {
        q: 'Why does Terminal say permission denied when I check folder sizes?',
        a: "Terminal is limited by permissions like any app, and folders macOS protects return errors until you grant Terminal Full Disk Access under System Settings, Privacy and Security. Even with that access, local snapshots and purgeable space still won't show up in a plain du total.",
      },
    ],
    related: [
      'show-library-folder-mac',
      'show-hidden-files-mac',
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
    questions: [
      {
        q: "Can I delete the 'Install macOS' app after updating?",
        a: 'Yes, once the upgrade has finished you can drag it to the Trash, since Apple provides installers for download again, making this only a bandwidth trade rather than a safety issue. The exception is if you plan to make a bootable installer for another Mac.',
      },
      {
        q: "Why can't I delete a macOS installer or disk image?",
        a: "If a .dmg is still open, it appears as a mounted volume in Finder's sidebar and needs to be ejected before it can be deleted, since a mounted image counts as in use. For the installer app itself, quit Installer and eject anything it mounted, then try again.",
      },
      {
        q: 'Do I need to keep the .dmg files in my Downloads folder?',
        a: "No, once you've dragged the app it contained into Applications, the disk image is a leftover copy and safe to delete. The installed app keeps working because it was already copied out of the image, and package files work the same way.",
      },
      {
        q: 'How do I stop macOS installers from piling up on my Mac?',
        a: 'Use Software Update rather than downloading a full installer for routine upgrades, since Apple says it can use less storage, and clear Downloads after each install so disk images stop accumulating there. Setting your browser to ask where to save also helps.',
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
    title: 'Best free Mac cleaner apps: choose the right tool',
    description:
      'Compare Mac cleaner apps by the job: uninstalling apps, finding large files or reviewing System Data. See what is free, what costs money, and what to check.',
    summary:
      'The right Mac cleaner app depends on what you need to remove. Start with macOS Storage settings, then choose an uninstaller, a disk scanner or a maintenance tool for the job left over.',
    published: '2026-09-06',
    updated: '2026-09-26',
    sections: [
      {
        id: 'choose-the-job',
        title: 'Which kind of Mac cleaner app do you need?',
        paragraphs: [
          'An old app and an unexplained storage total call for different tools. An uninstaller looks for files associated with an app you want to remove. A disk scanner shows where space is used, including documents and media you may want to keep.',
          'If you know which download to delete, Finder may be enough. If your MacBook is nearly full and you cannot find the cause, inspect the biggest folders first. A maintenance utility is useful when you have a specific maintenance task; it is not a reason to run every cleanup option.',
        ],
      },
      {
        id: 'what-macos-already-includes',
        title: 'What macOS already includes',
        paragraphs: [
          'On macOS Ventura 13 or later, open System Settings → General → Storage. Review the categories and use More Info where that button appears. On older macOS versions, start in About This Mac → Storage. You can investigate Downloads and unused applications without buying a cleaner.',
          'Before uninstalling an app, check for its own removal tool. Apple recommends that route when one is provided. Documents you made with the app may remain, and removing the app does not cancel a subscription.',
        ],
        links: [
          {
            label: 'Uninstall apps using Apple’s documented methods',
            href: '/uninstall-apps-on-mac',
          },
        ],
      },
      {
        id: 'free-apps-by-job',
        title: 'Free apps, by the job they do',
        paragraphs: [
          'We checked the makers’ pages on September 26, 2026. We make ClearDisk and have not run a side-by-side performance test. The notes below describe each app’s purpose and payment boundary.',
        ],
        items: [
          'AppCleaner, from FreeMacSoft: drop an app into its window to find related files for removal. Review the results before deleting. Choose a download compatible with your macOS version.',
          'GrandPerspective: an open-source visual disk map, available free through the project’s SourceForge download. Its App Store distribution is paid. A large rectangle shows a large file, not whether that file is safe to remove.',
          'OmniDiskSweeper, from The Omni Group: a file list ordered by size with options to open items or move them to Trash. Useful if you prefer a list to a visual map.',
          'OnyX, from Titanium Software: a free maintenance utility with cleaning, verification and other system tasks. Download the build intended for your macOS version and read what a task changes before running it.',
          'ClearDisk: free local scans, a storage map, a largest-files list and a System Data breakdown. In-app cleanup needs the $10 one-time license. It requires macOS 15 or later; it is not a download for older OS X versions.',
        ],
        links: [
          {
            label: 'AppCleaner compatibility and removal walkthrough',
            href: '/blog/appcleaner-os-x',
          },
          {
            label: 'What a disk space analyzer can show',
            href: '/disk-space-analyzer-mac',
          },
        ],
      },
      {
        id: 'free-scan-or-free-cleanup',
        title: 'Does free mean a scan, cleanup or a trial?',
        paragraphs: [
          'Check the action you need before installing. A free scan may show files but require payment to remove them. A trial may unlock the full app for a limited time. An app can also be free from its maker and paid through a store, as GrandPerspective is.',
          'CleanMyMac is a separate product made by MacPaw. Its purchase options include subscriptions and, for some editions, a one-time purchase. Check the chosen edition’s features, device limit and major-upgrade terms rather than assuming every cleaner has the same payment model.',
          'ClearDisk’s scans stay free. Its cleanup dialog offers Move to Trash or permanent removal after confirmation. Choose Trash when you want the option to undo while the items remain there; permanent removal cannot be undone.',
        ],
        links: [
          {
            label: 'CleanMyMac editions and purchase options',
            href: 'https://macpaw.com/support/cleanmymac/knowledgebase/editions',
          },
          { label: 'ClearDisk license details', href: '/pricing' },
        ],
      },
      {
        id: 'stay-safe',
        title: 'How to stay safe with any cleaner',
        paragraphs: [
          'Use the maker’s official download page and check its system requirements. Keep a backup of work you cannot replace. Before removing a result, look at its path and the app that created it; “large” and “cache” are not enough information by themselves.',
          'Check whether removal uses Trash or deletes immediately. Read any warning about folders the scanner could not access. A partial scan can still be useful, but it cannot explain files it never read. Files moved to Trash continue to occupy space until you empty it.',
        ],
      },
      {
        id: 'how-to-choose',
        title: 'Try the smallest tool that answers your question',
        paragraphs: [
          'If Storage settings shows an old video export you recognise, review that file in Finder. If you want to remove an app, start with its maker’s uninstaller or inspect an AppCleaner result. If the space is still unexplained, try a disk scan.',
          'Pay when you have seen what a tool finds and want the feature behind the price. A scanner should make your own files easier to understand; the size of someone else’s cleanup is not a promise for your Mac.',
        ],
        links: [
          {
            label: 'A practical approach to cleaning your Mac',
            href: '/blog/how-should-i-clean-my-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: "What's the best free way to clean up a Mac?",
        a: "The right tool depends on the job: an uninstaller finds files tied to an app you want to remove, while a disk scanner shows where space is used across the whole drive. Start with macOS's own Storage settings before installing anything, since it's often enough on its own.",
      },
      {
        q: 'Is GrandPerspective actually free?',
        a: "It's an open-source visual disk map that's free through the project's SourceForge download, though its separate App Store distribution is paid. A large rectangle in its map shows a large file, not whether that file is safe to remove.",
      },
      {
        q: 'Is CleanMyMac the same company as ClearDisk?',
        a: "No, CleanMyMac is a separate product made by MacPaw, with purchase options that include subscriptions and, for some editions, a one-time purchase. ClearDisk's own scans stay free, with a $10 one-time license needed for its in-app cleanup.",
      },
      {
        q: 'How do I know if a Mac cleaner app is safe to use?',
        a: "Use the maker's official download page, check its system requirements, and see whether removal goes through the Trash or deletes immediately. Read any warning about folders the scanner couldn't access, since a partial scan can still be useful but can't explain files it never read.",
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
        label: 'Apple: delete or uninstall apps',
        url: 'https://support.apple.com/en-us/102610',
      },
      {
        label: 'MacPaw: CleanMyMac editions and purchase options',
        url: 'https://macpaw.com/support/cleanmymac/knowledgebase/editions',
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
    updated: '2026-09-24',
    sections: [
      {
        id: 'measure-before-you-judge',
        title: '1. Measure before you judge',
        paragraphs: [
          'Open System Settings → General → Storage and note the available figure and the System Data figure. Both can look worse for a day after an update than they will a week later, because some of what the update left behind is temporary by design. Write the numbers down and compare after 24 hours before removing anything.',
          'If you use Terminal, the Avail column of df -h / gives free space without purgeable space folded in, which makes the before-and-after comparison cleaner. The Terminal guide covers the read-only commands.',
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
    questions: [
      {
        q: 'Why is my Mac storage full right after a macOS update?',
        a: 'An update can leave behind a pre-update snapshot of the previous system, the installer app if you used a full installer, and caches the system is still rebuilding, and this can look worse for a day than it will a week later. Write down the numbers and compare after 24 hours.',
      },
      {
        q: 'Should I delete the snapshot macOS makes before an update?',
        a: "The snapshot is saved so the update can be undone, and its space is already counted as available since macOS deletes snapshots on its own as they age or as space is needed. Don't use a third-party tool to force its removal; it's also your way back if the update misbehaves.",
      },
      {
        q: 'Why does System Data look bigger after updating macOS?',
        a: 'macOS recreates certain system caches as needed after an update, so the system and your apps rebuilding what the upgrade invalidated can look like growth. Background work like indexing and iCloud or Photos re-syncing also uses space temporarily, so let the Mac idle overnight before measuring again.',
      },
      {
        q: "My storage still hasn't recovered days after a macOS update, what now?",
        a: "If System Data is still well above its pre-update level after several days, the update is no longer the cause, and it's worth working through the actual files rather than the category. A free local scan can list Library folders, developer directories and installers with their sizes to compare.",
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
          'Online-only, streamed or placeholder file: a file that has its contents in the cloud while local metadata can still occupy space. The opposite is mirrored or downloaded. See the cloud drive and iCloud guides.',
          'node_modules: a per-project folder of installed JavaScript dependencies that can be recreated by reinstalling. See the node_modules guide.',
          'Derived Data: Xcode’s rebuildable build output under ~/Library/Developer. See the Xcode guide.',
          'Docker.raw: the single file that holds every Docker container, image and volume on a Mac; its allocated size grows and rarely shrinks on its own. See the Docker guide.',
          'Package cache: downloads kept by npm, pnpm, Yarn, pip or Homebrew so a reinstall is faster. Each manager documents a command to clear it. See the cache guides.',
        ],
      },
    ],
    questions: [
      {
        q: "What's the difference between 'available' and 'free' space on a Mac?",
        a: "Available is the space macOS is prepared to give you, which can include purgeable space it hasn't released yet, while free space is only the part already released. Used covers everything on the volume, including files still sitting in the Trash until it's emptied.",
      },
      {
        q: "What does 'purgeable space' mean on a Mac?",
        a: "Purgeable space is files macOS can remove on its own when it needs the room; you can't empty it by hand, and it's already counted inside the available figure Disk Utility shows. It commonly relates to Time Machine local snapshots, which macOS also thins automatically.",
      },
      {
        q: 'What is a container folder on a Mac?',
        a: "A container is a sandboxed app's private folder inside ~/Library/Containers, which includes the data for apps like Mail and Messages. You're meant to change what's in it through the app itself, not by editing it in Finder.",
      },
      {
        q: 'Why do two tools show different sizes for the same folder on Mac?',
        a: 'Both can be right because of allocated size: the space a file actually occupies on disk, which on APFS can be far less than the logical size Finder shows first for cloned or sparse files. Full Disk Access also affects this, since a scanner without it sees less and should say so.',
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
    questions: [
      {
        q: 'How do I free up space on my Mac?',
        a: 'Start with the clear-storage guide: empty the Trash, clear Downloads, use Apple’s recommendations, then review large files and System Data.',
      },
      {
        q: 'How do I check available storage?',
        a: 'System Settings → General → Storage shows Available at the top of the bar; Disk Utility shows the same volume with free and purgeable space separated.',
      },
      {
        q: 'How many GB does my Mac have?',
        a: 'Choose Apple menu → About This Mac and click More Info, then Storage, or open Disk Utility and select the startup volume; the capacity shown there is the full size of the disk.',
      },
      {
        q: 'Why is my Mac storage still full after deleting?',
        a: 'Space returns only when the Trash is emptied, and Storage settings can lag; purgeable space and local snapshots can also hold the figure for a while. The storage-not-updating guide covers each case.',
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'find-large-files-on-mac',
      'check-disk-space-mac-terminal',
      'free-up-space-on-mac',
      'clear-cache-on-mac',
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
      'Dragging an app to the Trash can leave settings, caches and login items behind. Use the maker’s uninstaller when there is one, then review what stays behind in your Library.',
    published: '2026-09-06',
    updated: '2026-09-26',
    sections: [
      {
        id: 'check-for-an-uninstaller',
        title: '1. Check for the app’s own uninstaller first',
        paragraphs: [
          'Quit the app, then check its folder, settings or help for an Uninstall option. Apple recommends using the app’s own uninstaller when one is available because it can also remove associated login items, extensions and other data.',
          'Keep documents and export any app data you need before starting. Uninstalling does not cancel a subscription, and you may still need the app to open documents you created with it.',
        ],
      },
      {
        id: 'delete-the-app',
        title: '2. Move the app to Trash using Finder',
        paragraphs: [
          'If there is no uninstaller, find the app in Finder, usually in Applications. Drag it to Trash or select File → Move to Trash. macOS may ask for an administrator account name and password.',
          'Review Trash before choosing Finder → Empty Trash. Emptying it permanently removes its contents and frees the space occupied by those items. Moving an app to Trash alone does not free that space.',
        ],
      },
      {
        id: 'if-an-app-will-not-delete',
        title: '3. If an app will not delete',
        paragraphs: [
          'If macOS says the app is in use, quit it and try again. Apple suggests restarting or safe mode if it still cannot be removed. Finder cannot delete apps required by macOS; a cleaner is not a reason to work around that protection.',
          'If the maker’s uninstaller fails, check its support instructions. Avoid deleting pieces from inside an app package or repeating the removal with a Terminal command you do not understand.',
        ],
      },
      {
        id: 'find-what-the-app-left-behind',
        title: '4. Find what the app left behind',
        paragraphs: [
          'Removing an app can leave support files in Library. A folder bearing the app’s name may also contain work you want to keep. Inspect it and check the maker’s instructions before removing it; a matching name alone is not proof that it is disposable.',
        ],
        items: [
          'Application Support: settings, databases and downloaded content, under the app or vendor name.',
          'Containers and Group Containers: data for sandboxed apps, named by bundle identifier such as com.vendor.app.',
          'Caches: working files often named by bundle identifier. Confirm which app uses the folder; do not empty the whole Caches directory.',
          'Preferences: settings often stored in .plist files. Leave them unless the maker recommends a reset or you intend to discard those settings.',
          'Logs and Saved Application State: check their owner before removal. For LaunchAgents or a helper that keeps opening, follow the maker’s uninstall instructions.',
        ],
      },
      {
        id: 'login-items-and-the-last-check',
        title: '5. Login items, extensions and the last check',
        paragraphs: [
          'If a helper still opens after uninstalling, use the maker’s removal instructions for it. A helper may be shared with another app you still use. Check available storage after you have reviewed and emptied Trash.',
          'AppCleaner can look for related files when you drop an app into it; review those results before deletion. ClearDisk serves a different purpose: its scan helps inspect local paths and sizes. It blocks general Application Support and container data from removal, so use the maker’s instructions for those folders.',
        ],
        links: [
          {
            label: 'AppCleaner: check compatibility and review related files',
            href: '/blog/appcleaner-os-x',
          },
          {
            label: 'Review free Mac cleaner apps by purpose',
            href: '/best-free-mac-cleaner',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Why can’t I delete an app on my Mac?',
        a: 'Either it is part of macOS, which Apple says Finder cannot delete, or it is still running. Quit it, including any menu bar helper, and try again; Apple suggests restarting or safe mode if it stays in use.',
      },
      {
        q: 'How do I completely uninstall an app?',
        a: 'Use its own uninstaller where available. Otherwise use Finder, then check the maker’s guidance for leftover data. Keep documents and shared files you still need; no generic removal method can guarantee that every related item is found.',
      },
      {
        q: 'How do I force uninstall an app on macOS?',
        a: 'If it is in use, quit it and restart if needed. Use the maker’s uninstaller or support guidance rather than force-deleting protected files.',
      },
      {
        q: 'Does uninstalling cancel a subscription?',
        a: 'No. Cancel it with the seller or account that bills you, separately from deleting the app.',
      },
      {
        q: 'Can I uninstall Apple apps on Mac?',
        a: 'Apps installed with macOS such as Mail, Music, Books and Notes cannot be deleted with Finder. Apple apps you got from the App Store, such as Pages or Keynote, can be removed like any other app.',
      },
    ],
    related: [
      'application-support-folder-mac',
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
      {
        label: 'FreeMacSoft: AppCleaner',
        url: 'https://freemacsoft.net/appcleaner/',
      },
    ],
  },
  {
    slug: 'show-hidden-files-mac',
    title: 'How to show hidden files on Mac, and which ones hold space',
    description:
      'Show hidden files on Mac with the Finder toggle, Go to Folder or Terminal, why dot folders and Library are hidden, and see which of them hold the space.',
    summary:
      'Finder hides dot folders and the Library to keep app data out of the way, not because it is small. Three routes reveal them; a scanner shows which ones are worth opening.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'toggle-hidden-files-in-finder',
        title: '1. Toggle hidden files in Finder',
        paragraphs: [
          'In any Finder window, press Shift-Command-Period. Hidden files and folders appear greyed out; press the same keys again to hide them. Apple’s published shortcut list does not include this toggle, but it has been part of Finder since macOS Sierra and works in every current version, including in Open and Save dialogs.',
          'What appears are items whose names begin with a dot, such as .DS_Store files in every folder and, in your home folder, developer folders like .npm, .cache, .docker and .gradle. The dot files scattered through documents are tiny; the dot folders in your home folder are the ones that can hold gigabytes.',
        ],
      },
      {
        id: 'open-a-hidden-folder-directly',
        title: '2. Open a hidden folder directly',
        paragraphs: [
          'When you know the path, Apple’s Finder guide gives the direct route: choose Go → Go to Folder, or press Shift-Command-G, and type the path. A tilde stands for your home folder, so ~/Library opens your user Library and ~/.npm opens npm’s cache. Press Tab to accept a suggested path and Return to open it.',
          'The Library folder is hidden by a different rule than dot folders: it has no dot but Finder hides it anyway. Holding Option while opening the Go menu adds a Library item, and the Library guide covers what is inside and what to leave alone.',
        ],
      },
      {
        id: 'list-hidden-items-in-terminal',
        title: '3. List hidden items in Terminal',
        paragraphs: [
          'Terminal shows everything by default. ls -la ~ lists your home folder including dot items, and du -sh ~/.[!.]* 2>/dev/null | sort -h sizes each hidden folder and sorts them smallest to largest. Both commands only read. The Terminal guide covers the rest of the measuring commands.',
        ],
        code: ['ls -la ~', 'du -sh ~/.[!.]* 2>/dev/null | sort -h'],
      },
      {
        id: 'which-hidden-folders-hold-space',
        title: '4. Which hidden folders hold space',
        paragraphs: [
          'On most Macs the hidden folders that matter fall into three groups. Everything in this list is safe to measure; only some of it is safe to remove, and each group has its own guide.',
        ],
        items: [
          'Package caches in your home folder: .npm, .cache (pip, pnpm, yarn and many tools), .cargo, .gradle, .m2. Rebuildable; each manager documents a command to clear it.',
          'The user Library: Caches, Containers, Application Support, Developer, Mail and Messages. Review-only unless a guide says otherwise.',
          '.docker and virtual machine folders: a single disk image can be tens of gigabytes and shrinks only through the app that owns it.',
          '.Trash on each volume: the per-disk Trash. Empty it through Finder rather than deleting inside it.',
        ],
      },
      {
        id: 'hide-them-again',
        title: '5. Hide them again, and measure before deleting',
        paragraphs: [
          'Press Shift-Command-Period again when you are done; a Finder full of greyed-out files makes ordinary work slower and accidental deletion easier. Nothing you reveal needs to stay revealed to be measured.',
          'Measure before touching anything: Get Info on a folder, the Terminal commands above, or a disk scanner with Full Disk Access that lists hidden folders with allocated sizes and a label. ClearDisk’s free scan shows dot folders and the Library alongside everything else, and moves what you choose to the Trash first so you can put it back.',
        ],
      },
    ],
    questions: [
      {
        q: 'How do I show hidden files on a Mac?',
        a: "Press Shift-Command-Period in any Finder window, which has worked since macOS Sierra and toggles hidden items, including dot folders like .npm, .cache and .docker in your home folder. Press the same keys again to hide them once you're done.",
      },
      {
        q: 'Are dot folders like .npm and .cache safe to delete?',
        a: "Package caches such as .npm, .cache, .cargo, .gradle and .m2 are rebuildable, and each manager documents its own command to clear them properly. It's still worth measuring them first, since some, like Docker's virtual machine folders, can be tens of gigabytes.",
      },
      {
        q: "Why is the Library folder hidden if it's not a dot folder?",
        a: "Finder hides ~/Library by a different rule than dot folders: it has no dot in its name, but Finder hides it anyway. Holding Option while opening Finder's Go menu adds a Library item so you can open it directly.",
      },
      {
        q: "What's the Terminal command to list hidden folder sizes on Mac?",
        a: 'Run du -sh ~/.[!.]* 2>/dev/null | sort -h, which sizes every hidden folder in your home folder and sorts them smallest to largest so you can see which ones are worth opening. This command only reads the disk and changes nothing.',
      },
    ],
    related: [
      'show-library-folder-mac',
      'check-disk-space-mac-terminal',
      'clear-npm-cache-mac',
      'clean-docker-disk-space-mac',
    ],
    sources: [
      {
        label: 'Apple: go directly to a specific folder on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1236/mac',
      },
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
      {
        label: 'Apple: understand Storage settings',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
      },
    ],
  },
  {
    slug: 'delete-files-on-mac',
    title: 'How to delete files on Mac and actually free the space',
    description:
      'Delete files on Mac the way Apple documents: Command-Delete, Put Back, Delete Immediately, 30-day auto-empty, and why space returns after emptying.',
    summary:
      'Move unwanted local files to the Trash, review them, then empty it when you are ready. Permanent removal skips that chance to put files back. If available space does not increase as expected, check snapshots and storage accounting before deleting more.',
    published: '2026-09-06',
    updated: '2026-09-23',
    sections: [
      {
        id: 'move-to-the-trash',
        title: '1. Move items to the Trash',
        paragraphs: [
          'Apple’s guide gives two equivalent moves: drag the item to the Trash in the Dock, or select it and press Command-Delete. Select several items with Command-click or Shift-click to delete them together. Apple’s shortcut list also includes Shift-Command-Delete to empty the Trash and Option-Shift-Command-Delete to empty it without the confirmation dialog.',
          'Nothing has been removed yet. The file is in the Trash, still using its space, and can be returned. That is the point of the two-step design and the reason this guide does not start with a Terminal command.',
        ],
      },
      {
        id: 'put-back-anything-you-regret',
        title: '2. Put back anything you regret',
        paragraphs: [
          'Open the Trash and drag an item out, or select it and choose File → Put Back, which returns it to the folder it came from. Apple documents both. Review the Trash before emptying when you have deleted in bulk; a single wrong item is easier to find now than after a restore from backup.',
        ],
      },
      {
        id: 'empty-the-trash-or-one-item',
        title: '3. Empty the Trash, or delete one item immediately',
        paragraphs: [
          'Click Empty in the Trash window or choose Finder → Empty Trash. Apple’s storage guidance is explicit that a file’s space does not become available until you do this, which is why a Mac can feel just as full after an afternoon of deleting. For one item, Control-click it in the Trash and choose Delete Immediately; it goes without emptying everything else.',
          'To make emptying automatic, open Finder → Settings → Advanced and select Remove items from the Trash after 30 days. Apple notes that items deleted from iCloud Drive are emptied after 30 days regardless of that setting.',
        ],
      },
      {
        id: 'files-that-will-not-delete',
        title: '4. Files that will not delete',
        paragraphs: [
          'For a locked file, Finder may ask you to confirm the move to Trash. You can also select the file, press Command-I and clear the Locked checkbox first. A file an app still has open needs the app quit. A file on an external drive goes into that drive’s own Trash, which empties only while the drive is connected. The Trash guide walks through each case and the permission prompts that come with them.',
        ],
      },
      {
        id: 'delete-to-free-space',
        title: '5. Delete to free space, in the right order',
        paragraphs: [
          'When the goal is room rather than tidiness, delete by size. Storage settings lists large files and downloads under Documents; the large-files guide covers reviewing them, and the check-storage guide covers the categories. Empty the Trash after each round and compare the available figure.',
          'ClearDisk 2.0.0 lets you choose Move to Trash or Remove Permanently in its review dialog. For permanent removal, type delete and click the red Remove Permanently button. You do not need to type a long filename. Check the selected paths first: this action skips Trash and cannot be undone. Move to Trash remains available if you want to keep a way back.',
        ],
      },
    ],
    questions: [
      {
        q: "What's the keyboard shortcut to delete a file on Mac?",
        a: 'Select the item and press Command-Delete to move it to the Trash, or Command-click or Shift-click to select several files first. Nothing is actually removed yet; the file just sits in the Trash, still using its space, until you empty it or put it back.',
      },
      {
        q: 'How do I get a file back after moving it to the Trash on Mac?',
        a: 'Open the Trash and drag the item out, or select it and choose File, Put Back, which returns it to the folder it came from. Review the Trash before emptying in bulk, since a single wrong item is easier to catch now than after restoring from a backup.',
      },
      {
        q: 'Does moving a file to Trash free up space on my Mac?',
        a: "No, a file's space doesn't become available until you actually empty the Trash, which is why a Mac can feel just as full after an afternoon of deleting. For a single item you're sure about, Control-click it and choose Delete Immediately instead.",
      },
      {
        q: 'Can I make the Trash empty itself automatically on Mac?',
        a: 'Yes, open Finder Settings, Advanced, and select Remove items from the Trash after 30 days. Items deleted from iCloud Drive are emptied after 30 days regardless of that setting, since Apple applies it to iCloud Drive separately.',
      },
    ],
    related: [
      'trash-wont-empty-mac',
      'clear-downloads-folder-mac',
      'find-large-files-on-mac',
      'how-to-check-storage-on-mac',
      'mac-storage-not-updating-after-deleting-files',
    ],
    sources: [
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'optimize-storage-mac',
    title: 'Optimize Storage on Mac: what each recommendation does',
    description:
      'What Apple’s Store in iCloud, Optimize Storage and Empty Trash Automatically recommendations actually change, when to turn them on, and how to undo each one.',
    summary:
      'The recommendations in Storage settings are three separate switches with three different costs. Two move your files into the cloud on demand; one empties the Trash on a timer.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'where-the-recommendations-live',
        title: '1. Where the recommendations live',
        paragraphs: [
          'Open System Settings → General → Storage. Apple’s page on optimizing storage space describes the Recommendations shown there and adds a line people miss: when space is needed, macOS also clears caches and logs that are safe to delete on its own. So the recommendations are about your files, not about System Data.',
          'The words are reused elsewhere, which causes confusion. Photos has its own Optimize Mac Storage setting, iCloud Drive has one too, and the recommendation called Optimize Storage is a third thing. This guide takes the three recommendations in order and says which other settings each one flips.',
        ],
      },
      {
        id: 'store-in-icloud',
        title: '2. Store in iCloud',
        paragraphs: [
          'Apple’s description: store files from your Desktop and Documents folders in iCloud Drive, store photos and videos in iCloud Photos, store messages and attachments in iCloud, and optimize storage by keeping only recently opened files on your Mac when space is needed. It is the biggest saving and the biggest change, because it turns on three syncs at once and lets macOS evict older files to the cloud.',
          'Three costs follow. Everything now counts against your iCloud storage plan. A file that was evicted needs a connection to open, which matters on a laptop used offline; Apple documents the Download Now and Remove Download controls in iCloud Drive for managing that by hand. And deleting a synced file deletes it everywhere. Apple notes you can adjust the pieces later in the iCloud pane of Apple Account settings, in Photos settings and in Messages settings.',
        ],
      },
      {
        id: 'optimize-storage',
        title: '3. Optimize Storage',
        paragraphs: [
          'Apple’s description: save space by automatically removing Apple TV movies and TV shows you have already watched, and by keeping only recent email attachments on this Mac when storage space is needed. Both are cheap and reversible. A watched purchase downloads again from the TV app, and older attachments stay on the mail server; Mail fetches one when you open it.',
          'The attachment half is the same control as Mail’s Download Attachments setting, which the Mail guide covers. If Mail is a large part of your storage, that setting does the work whether or not you use the recommendation.',
        ],
      },
      {
        id: 'empty-trash-automatically',
        title: '4. Empty Trash Automatically',
        paragraphs: [
          'Apple’s description: automatically erase items that have been in the Trash for more than 30 days. It is the same option as Finder → Settings → Advanced → Remove items from the Trash after 30 days, and Apple says you can change it there later. Apple also notes that items deleted from iCloud Drive are emptied after 30 days regardless of the setting.',
          'The cost is the safety net. Put Back works only while an item is still in the Trash, so with this on, anything you deleted more than a month ago is gone. Turn it on if you never look in the Trash anyway; leave it off if you use the Trash as a holding area.',
        ],
      },
      {
        id: 'turning-them-off',
        title: '5. Turning each one off, and what none of them do',
        paragraphs: [
          'Each recommendation is undone in the app it changed rather than in Storage settings.',
        ],
        items: [
          'Desktop and Documents in iCloud, and on-demand files: the iCloud pane of Apple Account settings, under iCloud Drive. Download anything you need offline first.',
          'Photos: Photos → Settings → iCloud, choose Download Originals to this Mac. Apple’s Photos guide covers the two options.',
          'Messages: Messages → Settings → iCloud, where Messages in iCloud can be turned off.',
          'Email attachments: Mail → Settings → Accounts → Account Information, set Download Attachments to All.',
          'Trash: Finder → Settings → Advanced, clear Remove items from the Trash after 30 days.',
          'None of these touch developer caches, app containers or the rest of System Data. For that part, the System Data and Library guides apply, and a free local scan such as ClearDisk’s shows those folders with allocated sizes and moves what you choose to the Trash first.',
        ],
      },
    ],
    questions: [
      {
        q: "What does 'Store in iCloud' actually do to my Mac storage?",
        a: 'It turns on syncing your Desktop and Documents folders, photos and messages to iCloud at once, letting macOS evict older files to the cloud when space is needed. Everything then counts against your iCloud storage plan, and deleting a synced file deletes it everywhere.',
      },
      {
        q: "Is the 'Optimize Storage' recommendation safe to turn on?",
        a: "Yes, it's described as cheap and reversible: it removes Apple TV movies and shows you've already watched and keeps only recent email attachments locally when space is needed. A watched purchase downloads again from the TV app, and older attachments return from the mail server when opened.",
      },
      {
        q: 'What happens if I turn on Empty Trash Automatically?',
        a: 'It erases items that have been in the Trash for more than 30 days, the same option found in Finder Settings, Advanced. The cost is the safety net: Put Back only works while an item is still in the Trash, so anything older than a month is gone for good.',
      },
      {
        q: 'Does Optimize Storage clean up System Data on Mac?',
        a: 'No, none of these three recommendations touch developer caches, app containers or the rest of System Data; they only affect iCloud-synced files, Apple TV downloads, Mail attachments and the Trash. For System Data itself, you need to look at the Library folders directly.',
      },
    ],
    related: [
      'free-up-space-on-mac',
      'icloud-drive-taking-up-space-on-mac',
      'photos-library-taking-up-space-mac',
      'mail-taking-up-space-on-mac',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: optimize storage space on your Mac',
        url: 'https://support.apple.com/guide/mac-help/sysp4ee93ca4/mac',
      },
      {
        label: 'Apple: work with folders and files in iCloud Drive',
        url: 'https://support.apple.com/guide/mac-help/mchl1a02d711/mac',
      },
      {
        label: 'Apple: optimize storage in Photos on Mac',
        url: 'https://support.apple.com/guide/photos/optimize-storage-in-photos-on-mac-phta9b4673b4/mac',
      },
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
    ],
  },
  {
    slug: 'clear-downloads-folder-mac',
    title: 'Clear the Downloads folder on Mac without losing anything',
    description:
      'Sort the Mac Downloads folder by size, spot installers, archives and duplicates you can drop, empty the Trash, and set Safari and Mail so it stops refilling.',
    summary:
      'Downloads is the one folder on a Mac that fills itself. Most of it is installers and archives whose job is done; a few items are the only copy you have. Sort by size, decide by type, and empty the Trash.',
    published: '2026-09-06',
    updated: '2026-09-06',
    sections: [
      {
        id: 'open-downloads-sorted-by-size',
        title: '1. Open Downloads sorted by size',
        paragraphs: [
          'Apple’s storage guidance lists deleting files in your Downloads folder among its first suggestions. Open the folder from the Dock or Finder’s sidebar, switch to list view, and click the Size column so the largest items sit at the top. System Settings → General → Storage offers the same list under Documents → Downloads, sorted by size with a Show in Finder option.',
          'Note the total before you start. Finder shows it at the bottom of the window in list view, or select everything and press Command-I; the Terminal command du -sh ~/Downloads reads it without changing anything.',
        ],
        code: ['du -sh ~/Downloads'],
      },
      {
        id: 'decide-by-type',
        title: '2. Decide by type, not by name',
        paragraphs: [
          'Most of the folder falls into a few categories, and each has a clear answer.',
        ],
        items: [
          'Installers and disk images (.dmg, .pkg): the app is already in Applications; the image is a leftover. Eject any mounted image first, then delete it. The installer guide covers the exceptions.',
          'Archives (.zip) you have already expanded: the expanded folder sits beside them; keep one copy, and only if you still need it.',
          'Documents and exports you saved here by accident: move them to Documents or the project folder they belong to. Moving does not free space, but it keeps them out of the next cleanup.',
          'Media you downloaded to watch or listen once: delete, or move to an external drive if you want it later.',
          'Anything you cannot identify: open it, or leave it for a second pass. Unknown does not mean disposable.',
        ],
      },
      {
        id: 'delete-and-empty',
        title: '3. Delete, then empty the Trash',
        paragraphs: [
          'Select what goes and press Command-Delete, which Apple documents as the move-to-Trash shortcut. Nothing is freed yet: Apple’s guidance is explicit that space returns only when you empty the Trash. Review the Trash once, then choose Finder → Empty Trash and compare the Downloads total with your first measurement.',
          'If a file refuses to delete, it is usually a disk image still mounted or a file an app still has open. The Trash guide walks through those cases.',
        ],
      },
      {
        id: 'stop-it-refilling',
        title: '4. Stop it refilling',
        paragraphs: [
          'Two settings decide how fast the folder grows again. In Safari, Apple’s guide describes Safari → Settings → General, where File download location sets the folder and Remove download list items decides when entries leave the list. Choosing Ask for each download makes you decide a destination every time, which is what keeps installers out of Downloads. Other browsers have the same setting under their own downloads preferences.',
          'Mail saves attachments to Downloads by default; Apple notes you can pick a different folder under Mail → Settings → General. The Downloads list under Documents in Storage settings gives the same view whenever you want a quick check.',
        ],
      },
      {
        id: 'downloads-elsewhere',
        title: '5. The other downloads folders',
        paragraphs: [
          'Downloads is not the only place downloads land. Mail keeps attachments you opened in a Mail Downloads folder inside its container in your Library, browsers keep their own caches, and messaging apps store received files in their containers. The Mail and Library guides cover those; the check-storage guide shows how the categories add up.',
          'A free local scan lists every one of those folders with allocated sizes, so you can see whether the Downloads folder was the real problem or only the visible one. ClearDisk shows them, lets you reveal each in Finder, and moves what you choose to the Trash first.',
        ],
      },
    ],
    questions: [
      {
        q: "What's safe to delete from the Downloads folder on Mac?",
        a: "Installers and disk images are usually leftovers once the app is already in Applications, and .zip archives you've already expanded can go once you keep the expanded copy you need. Anything you can't identify is worth opening first, since unknown doesn't mean disposable.",
      },
      {
        q: 'How do I stop installers from piling up in Downloads?',
        a: "In Safari's settings under General, set File download location to a folder of your choice, or choose Ask for each download so you decide a destination every time, keeping installers out of Downloads by default. Other browsers have the same setting under their own download preferences.",
      },
      {
        q: 'Why does my Downloads folder keep filling up with attachments?',
        a: "Mail saves attachments to Downloads by default, though you can pick a different folder under Mail's Settings, General. Downloads also isn't the only place downloads land, since Mail keeps opened attachments in its own Mail Downloads folder inside your Library too.",
      },
      {
        q: 'How do I actually free space after deleting files from Downloads?',
        a: 'Select what you want gone and press Command-Delete to move it to the Trash, then empty the Trash afterward, since space only returns once you do that. Compare the Downloads total before and after using Get Info or the du -sh ~/Downloads command in Terminal.',
      },
    ],
    related: [
      'free-up-space-on-mac',
      'delete-macos-installer-mac',
      'delete-files-on-mac',
      'mail-taking-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Apple: download items from the web using Safari on Mac',
        url: 'https://support.apple.com/guide/safari/download-items-from-the-web-sfri40598/mac',
      },
      {
        label: 'Apple: view, save, or delete email attachments in Mail on Mac',
        url: 'https://support.apple.com/guide/mail/view-save-or-delete-email-attachments-mlhlp1123/mac',
      },
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
    ],
  },
  {
    slug: 'application-support-folder-mac',
    title: 'Application Support folder on Mac: what is safe to delete',
    description:
      'What the Application Support folder holds, how to measure it, and why removing an app does not make its saved documents, databases or shared data disposable.',
    summary:
      'Found a large Application Support folder? Start by checking which app owns it. It may hold downloaded content, but it can also hold your saved work. Even after you uninstall the app, keep any data you still need.',
    published: '2026-09-06',
    updated: '2026-09-15',
    sections: [
      {
        id: 'what-it-holds',
        title: '1. What the folder holds',
        paragraphs: [
          'There are two Application Support folders. ~/Library/Application Support belongs to your account and holds the data of the apps you use: a subfolder per app or vendor with settings, small databases, downloaded content such as voices, templates and models, and licence files. /Library/Application Support holds the same kind of data for items shared by every user, often installed by drivers and larger suites.',
          'Treat Application Support as app data, not a cache you can empty. Some files can be downloaded again; others may be your only copy. Deleting a folder can reset settings or erase local work.',
        ],
      },
      {
        id: 'open-and-measure',
        title: '2. Open it and measure it',
        paragraphs: [
          'In Finder, choose Go → Go to Folder, enter ~/Library/Application Support and press Return. Select a subfolder and press Command-I to check its size. If you prefer Terminal, the command below measures readable subfolders and sorts them from smallest to largest. It does not delete files; inaccessible entries are omitted.',
          'Some app support data can appear in System Data. Apple defines that category as files that do not fit a more specific category; it is not a direct measurement of this folder. Compare the folder sizes you can read instead of assuming they explain the entire total.',
        ],
        code: [
          'du -sh ~/Library/Application\\ Support/* 2>/dev/null | sort -h',
        ],
      },
      {
        id: 'what-grows-and-why',
        title: '3. What grows, and why',
        paragraphs: [
          'Start with the largest folder you recognize. Open the app that owns it and look for storage, downloads or cache settings. The options depend on the app.',
        ],
        items: [
          'Chat and collaboration apps: message and file caches per workspace. Their own settings usually offer a cache limit or a clear-cache button.',
          'Creative and design suites: brushes, fonts, templates, media caches and sync data. Adjust in the app’s preferences; the Photoshop scratch guide covers the largest case.',
          'Developer tools and editors: extensions, language servers, indexes and workspace storage. Uninstall extensions you no longer use.',
          'Music and audio apps: sound libraries and instrument content, often tens of gigabytes, with an in-app download manager to remove them.',
          'Browsers and launchers: profiles, updates and game libraries. Remove games and profiles inside the app rather than in Finder.',
          'Folders named after apps you deleted: review their contents and the maker’s removal instructions. They can still hold documents, databases or data shared with other apps.',
        ],
      },
      {
        id: 'what-is-safe-to-delete',
        title: '4. Decide what is safe to delete',
        paragraphs: [
          'Use the app’s storage controls or its maker’s uninstaller first. Uninstalling an app does not prove that its remaining data is disposable: a folder can contain a local database, saved work or resources shared with another app. Identify the owner, check the contents and export or back up anything you need before considering removal. Leave unfamiliar folders alone.',
          'For example, a folder named after a removed note-taking app may hold your only copy of old notes. Reinstall the app and export them if necessary. Only move a folder to the Trash after confirming that its data is unwanted and no installed app depends on it. Verify your backup before emptying the Trash; simply waiting a few days does not establish that deletion is safe.',
        ],
      },
      {
        id: 'what-never-to-delete',
        title: '5. What never to delete',
        paragraphs: [
          'Do not delete the Application Support folder itself, anything under /Library/Application Support that you did not install, or subfolders named for Apple, CrashReporter, com.apple or iCloud; macOS and its services store data there. Do not delete a running app’s folder to fix a problem; reinstalling the app or using its reset option is the supported route.',
          'ClearDisk’s free scan helps you inspect paths and sizes. Its removal guard blocks general Application Support data; local device backups have a separate exception. Review ordinary app data through the owning app or its maker’s instructions. A large folder is not necessarily disposable.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to delete a large Application Support folder?',
        a: 'Not automatically; Application Support holds settings, databases, downloaded content and licence files for an app, so it can hold your only copy of saved work as well as replaceable content. Check which app owns the folder and use its own storage or cache settings before removing anything.',
      },
      {
        q: 'I uninstalled an app, can I delete its Application Support folder?',
        a: "Not necessarily right away. Uninstalling the app doesn't prove its remaining data is disposable, since the folder can contain a local database, saved work or resources shared with another app, so check its contents and back up anything you need first.",
      },
      {
        q: "What's usually taking up space in Application Support?",
        a: "It varies by app type: chat apps keep message and file caches per workspace, creative suites store brushes, templates and media caches, and music apps keep large sound libraries, often with their own in-app controls to manage them. Adjust these through each app's own settings rather than deleting in Finder.",
      },
      {
        q: 'Can ClearDisk delete files in Application Support for me?',
        a: "No, ClearDisk's removal guard blocks general Application Support data from being removed through the app, with a separate exception for local device backups. Review that kind of app data through the owning app or its maker's instructions instead.",
      },
    ],
    related: [
      'containers-folder-mac',
      'show-library-folder-mac',
      'uninstall-apps-on-mac',
      'what-is-system-data-on-mac',
      'clear-cache-on-mac',
    ],
    sources: [
      {
        label: 'Apple: go directly to a specific folder on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1236/mac',
      },
      {
        label: 'Apple: delete or uninstall apps on Mac',
        url: 'https://support.apple.com/en-us/102610',
      },
      {
        label: 'Apple: understand Storage settings',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
      },
    ],
  },
  {
    slug: 'containers-folder-mac',
    title: 'Group Containers and Containers on Mac: safe to delete?',
    description:
      'What Containers and Group Containers hold on a Mac, how to measure their size, and how to review saved work and shared app data before considering deletion.',
    summary:
      'A large container can hold an app’s saved work as well as its downloads. Group Containers can belong to several apps at once. Before removing anything, find out who uses it and whether you need the data.',
    published: '2026-09-06',
    updated: '2026-09-15',
    sections: [
      {
        id: 'what-they-are',
        title: '1. What the two folders are',
        paragraphs: [
          'Apple’s developer documentation describes app data containers as folders the system creates for apps that use the App Sandbox; the container is where the app’s files live, and it carries System Integrity Protection so other software cannot quietly modify them. On your Mac they sit in ~/Library/Containers, one folder per app, named by the app’s bundle identifier such as com.apple.mail, though Finder often shows the app’s name and icon instead.',
          'Group Containers, in ~/Library/Group Containers, are shared by a group of apps and extensions from one developer. Apple notes that in macOS 15 and later these also get System Integrity Protection, and that any app outside the group that tries to read one triggers a prompt asking you to authorize access. That prompt is the one that says an app wants to access data from other apps; it is the same protection seen from the other side.',
        ],
      },
      {
        id: 'open-and-measure',
        title: '2. Open them and measure them',
        paragraphs: [
          'Choose Go → Go to Folder in Finder and type ~/Library/Containers or ~/Library/Group Containers. Inside a container you will find a Data folder that mirrors a home folder, with its own Library, Documents and Downloads; that structure is why the folder can be large and why it confuses a first look. In Terminal, one read-only command sizes every container and sorts them.',
          'Some container data can appear in System Data, but the category is not a direct measurement of these folders. The commands only report readable entries; access restrictions can leave files out.',
        ],
        code: [
          'du -sh ~/Library/Containers/* 2>/dev/null | sort -h | tail -15',
          'du -sh ~/Library/Group\\ Containers/* 2>/dev/null | sort -h | tail -15',
        ],
      },
      {
        id: 'what-is-usually-large',
        title: '3. What is usually large',
        paragraphs: [
          'Look for the apps you use for mail, messages and offline media. Their containers may be large because they store content you asked to keep on your Mac.',
        ],
        items: [
          'Mail’s container: opened attachments in its Mail Downloads folder. Shrink it through Mail, as the Mail guide describes.',
          'Office and productivity suites: a group container shared by the suite, often holding a mail client’s profile and cached content. Manage it inside the apps.',
          'Chat, meeting and collaboration apps: caches of files and media per workspace, with a cache limit or clear-cache control in the app’s own settings.',
          'iCloud-related group containers: local state for iCloud Drive and syncing. Leave them; the cloud drive guides cover the actual space.',
          'Containers named for apps you deleted: check for saved documents and databases before considering removal. Group Containers may still serve other apps or extensions.',
        ],
      },
      {
        id: 'decide-what-can-go',
        title: '4. Decide what can go',
        paragraphs: [
          'Use the app’s own controls to clear caches or remove downloaded content. Read any confirmation carefully, especially when sync is involved. Deleting a container while its app is running can damage settings or erase local work.',
          'Removing an app leaves a separate decision about its saved data. Apple recommends the maker’s uninstaller when available; its instructions can explain which support files belong to the app. Before removing a container, check for local documents or databases, save anything you need and confirm that no installed app or extension uses it. A shared suite container can still be needed after one app is uninstalled. If ownership or contents are unclear, leave it.',
        ],
      },
      {
        id: 'what-never-to-delete',
        title: '5. What never to delete',
        paragraphs: [
          'Never delete containers named com.apple or group.com.apple; they belong to macOS apps and services and are protected for a reason. Do not delete the Containers or Group Containers folders themselves, and do not remove the protection by copying data out and back with Terminal to get around a prompt.',
          'ClearDisk can help you inspect paths and sizes. Its removal guard blocks Containers and Group Containers, including their contents. Use the owning app or its maker’s instructions to manage that data; a scan result is not permission to delete it.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to delete a Container or Group Container folder on Mac?',
        a: "Generally review-only: a container can hold an app's saved work as well as its downloads, and a Group Container can be shared by several apps and extensions from one developer at once. Find out who uses it and whether you need the data before considering removal.",
      },
      {
        q: 'Why does my Mac ask if an app can access data from other apps?',
        a: "That's System Integrity Protection on Group Containers, which in macOS 15 and later triggers a prompt asking you to authorize access whenever an app outside the sharing group tries to read one. It's the same protection that keeps other software from quietly modifying container data.",
      },
      {
        q: 'What usually takes up space in Containers on Mac?',
        a: "Look at apps for mail, messages and offline media first, since their containers can be large because they store content you asked to keep locally, such as Mail's opened attachments in its Mail Downloads folder. Chat apps also cache files per workspace, usually with a clear-cache control.",
      },
      {
        q: 'Can I delete containers named com.apple on Mac?',
        a: "No, never delete containers named com.apple or group.com.apple, since they belong to macOS apps and services and are protected for a reason. Don't try to get around the access prompt by copying data out and back with Terminal either.",
      },
    ],
    related: [
      'application-support-folder-mac',
      'show-library-folder-mac',
      'uninstall-apps-on-mac',
      'mail-taking-up-space-on-mac',
    ],
    sources: [
      {
        label:
          'Apple Developer: protecting local app data using containers on macOS',
        url: 'https://developer.apple.com/documentation/xcode/protecting-local-app-data-using-containers',
      },
      {
        label:
          'Apple Developer: accessing app group containers in your existing macOS app',
        url: 'https://developer.apple.com/documentation/xcode/accessing-app-group-containers',
      },
      {
        label: 'Apple: go directly to a specific folder on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1236/mac',
      },
      {
        label: 'Apple: delete or uninstall apps on Mac',
        url: 'https://support.apple.com/en-us/102610',
      },
    ],
  },
];
