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
];
