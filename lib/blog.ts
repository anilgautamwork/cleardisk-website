import type { Guide } from './guides.ts';

export const blogPosts: Guide[] = [
  {
    slug: 'blog/appcleaner-os-x',
    title: 'AppCleaner for OS X: uninstalling apps safely',
    description:
      'Find the right AppCleaner version for OS X or macOS, review related files before uninstalling, and decide what to check if your Mac is still low on space.',
    summary:
      'Trying to remove an old app? Check which AppCleaner download fits your Mac, review its file list, and find out where to look if storage is still full.',
    published: '2026-09-26',
    updated: '2026-09-26',
    sections: [
      {
        id: 'which-version',
        title: 'Which AppCleaner works with your Mac?',
        paragraphs: [
          'If you searched for “AppCleaner OS X,” check your system version before downloading. Choose Apple menu → About This Mac. The name and version number there are more useful than the age of the computer.',
          'FreeMacSoft lists several AppCleaner downloads. As checked on September 26, 2026, its compatibility labels are:',
        ],
        items: [
          'AppCleaner 3.7: macOS 15 and later.',
          'AppCleaner 3.6.8: macOS 10.14 through 15.6.',
          'AppCleaner 3.6: macOS 10.13.',
          'AppCleaner 3.4: macOS 10.10 through 10.12.',
        ],
        links: [
          {
            label: 'Check the current AppCleaner downloads',
            href: 'https://freemacsoft.net/appcleaner/',
          },
          {
            label: 'Apple: find your macOS version',
            href: 'https://support.apple.com/en-us/109033',
          },
        ],
      },
      {
        id: 'what-it-removes',
        title: 'What AppCleaner looks for',
        paragraphs: [
          'AppCleaner is FreeMacSoft’s app-removal utility. Drop an application into its window and it looks for related files you can remove with it.',
          'Read that list before deleting. You may be finished with the app but still want a preset or data you have not exported. A familiar app name on a file is a useful clue, not a reason to throw it away.',
          'We make ClearDisk. This explanation uses FreeMacSoft’s published instructions, not a hands-on comparison or a claim that one app found more files than another.',
        ],
        links: [
          {
            label: 'FreeMacSoft’s AppCleaner description',
            href: 'https://freemacsoft.net/appcleaner/',
          },
        ],
      },
      {
        id: 'before-uninstalling',
        title: 'Check for the app’s own uninstaller first',
        paragraphs: [
          'Apple recommends the developer’s uninstaller when one is included. It can handle login items, extensions and other components the app installed. Check the app’s folder and its menus or settings before choosing a separate removal tool.',
          'Save your work and quit the app. Back up anything you would miss, including data that is only accessible inside that app. Removing a paid app does not cancel its subscription, and documents you created with it may still need the app to open.',
        ],
        links: [
          {
            label: 'Apple’s app removal instructions',
            href: 'https://support.apple.com/en-us/102610',
          },
          {
            label: 'Our guide to uninstallers and leftover files',
            href: '/uninstall-apps-on-mac',
          },
        ],
      },
      {
        id: 'review-the-results',
        title: 'A careful AppCleaner removal',
        paragraphs: [
          'For an app without its own removal instructions, start with one application:',
        ],
        items: [
          'Open the AppCleaner version that supports your Mac, then drag the unwanted app from Finder into its window.',
          'Read the related-file results. Check the paths and what the files contain. If a result is unclear, stop and check the app maker’s guidance before proceeding.',
          'Use the delete action once you have checked the listed items. If removed files are in Trash, inspect them before emptying it. Files left there still occupy storage.',
        ],
        links: [
          {
            label: 'AppCleaner’s documented workflow',
            href: 'https://freemacsoft.net/appcleaner/',
          },
          {
            label: 'Review and recover files from Trash',
            href: '/recover-files-from-trash-mac',
          },
        ],
      },
      {
        id: 'still-short-on-space',
        title: 'The app is gone. Why is the disk still full?',
        paragraphs: [
          'Think of an old video editor. You might be happy to remove it and still want every video you made. Apple notes that uninstalling does not remove documents you created with an app. Those files need their own review.',
          'Check storage again. On macOS Ventura 13 or later, open System Settings → General → Storage. On earlier versions, open About This Mac → Storage. Look for the category or familiar folder that still accounts for the space.',
          'System Data is a broad category that can contain caches, logs and app support files. Its total is not a list of disposable leftovers. If it remains large, identify the app or folder behind it before removing more files.',
          'Downloads, device backups and old development projects are also worth reviewing when they are relevant to your work. A project’s node_modules folder needs a rebuild plan; a backup needs a decision about whether you still depend on it. Neither becomes unnecessary just because you removed an unrelated app.',
        ],
        links: [
          {
            label: 'Apple: check storage and free up space',
            href: 'https://support.apple.com/en-us/102624',
          },
          {
            label: 'Apple: what storage categories contain',
            href: 'https://support.apple.com/guide/mac-help/mchl3d437fbc/mac',
          },
          {
            label: 'Review old node_modules folders',
            href: '/find-node-modules-folders-mac',
          },
        ],
      },
      {
        id: 'when-cleardisk-helps',
        title: 'When a separate storage scan helps',
        paragraphs: [
          'Use a storage scan when you need to find what is large across your Mac. ClearDisk’s free local scan includes a visual map, a large-file list and a System Data breakdown. File names and scan results stay on your Mac; protected locations may require macOS permission.',
          'ClearDisk requires macOS 15 or later. It does not run on older OS X releases, so it is not a download option for every reader using an older AppCleaner build.',
          'On a supported Mac, scan first and inspect the results. The cleanup license is $10 once. ClearDisk 2.0.0 offers Move to Trash with undo while items remain in Trash, or Remove Permanently after typing delete and clicking the red button. Permanent removal cannot be undone.',
          'If uninstalling the app already gave you enough room, you can stop there. A second cleanup tool is useful only if there is still a storage problem to investigate.',
        ],
        links: [
          {
            label: 'What ClearDisk’s storage scan shows',
            href: '/disk-space-analyzer-mac',
          },
          {
            label: 'Download ClearDisk for macOS 15 or later',
            href: '/download?source=guides',
          },
        ],
      },
    ],
    related: [
      'uninstall-apps-on-mac',
      'best-free-mac-cleaner',
      'what-is-system-data-on-mac',
    ],
    sources: [
      {
        label: 'FreeMacSoft: AppCleaner and compatible downloads',
        url: 'https://freemacsoft.net/appcleaner/',
      },
      {
        label: 'Apple: identify your macOS version',
        url: 'https://support.apple.com/en-us/109033',
      },
      {
        label: 'Apple: delete or uninstall apps',
        url: 'https://support.apple.com/en-us/102610',
      },
      {
        label: 'Apple: free up storage space',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Apple: Storage settings',
        url: 'https://support.apple.com/guide/mac-help/mchl3d437fbc/mac',
      },
    ],
  },
  {
    slug: 'blog/how-should-i-clean-my-mac',
    title: 'How should I clean my Mac? Decide before you delete',
    description:
      'Decide what to clean on your Mac, what to keep, and when a scanner helps. A practical look at System Data, large files, developer folders and safer removal.',
    summary:
      'You need room for your work, not another afternoon spent opening folders. Start with the files you understand. Use a scanner when you need a clearer picture.',
    published: '2026-09-26',
    updated: '2026-09-26',
    sections: [
      {
        id: 'start-with-the-job',
        title: 'What are you trying to make room for?',
        paragraphs: [
          'An update will not install. A video export stops halfway through. Or your Mac keeps warning you that its disk is nearly full. Each is a reason to check storage. None tells you which files you can afford to lose.',
          'Open System Settings → General → Storage and note the available space. If a task names an amount it needs, keep that figure nearby. It gives you a useful stopping point: enough room to finish the job, rather than the smallest possible System Data bar.',
          'This is the approach we recommend as the makers of ClearDisk. You can do the first checks with the tools already on your Mac. Our scanner becomes useful when those checks leave you asking where the rest of the space went.',
        ],
        links: [
          {
            label: 'Apple’s storage cleanup guidance',
            href: 'https://support.apple.com/en-us/102624',
          },
        ],
      },
      {
        id: 'cleanmymac-or-clean-my-mac',
        title: 'Do I need CleanMyMac to clean my Mac?',
        paragraphs: [
          'The name can make searches confusing. CleanMyMac is an app made by MacPaw. Cleaning up your Mac is also something you can do with Finder and macOS Storage settings. You do not need to buy an app just to review your Downloads folder.',
          'If you meant MacPaw’s product, its own documentation is the place to check its current features and requirements. This article is about choosing a cleanup approach. We have not tested competing cleaners side by side, so we are not ranking them or claiming ClearDisk replaces every feature they offer.',
        ],
        links: [
          {
            label: 'MacPaw’s CleanMyMac documentation',
            href: 'https://macpaw.com/support/cleanmymac/knowledgebase/my-tools',
          },
        ],
      },
      {
        id: 'recognizable-files',
        title: 'A familiar large file is a better starting point',
        paragraphs: [
          'Look through Downloads and the file lists available in Storage settings. An installer you no longer need or an old exported video may be an easier decision than thousands of small files inside Library. Open anything you are unsure about before deciding.',
          'Here is an illustrative review, not a scan result or a promise of space saved. Imagine finding these three items:',
        ],
        items: [
          'A disk image for an app you already installed: check that you can download it again and no longer need the installer.',
          'A finished video export: check whether it is the copy you delivered, and whether you still need it. A project file alone may not contain the original footage.',
          'An unfamiliar folder in Library: leave it in place until you know which app owns it and what it stores.',
        ],
        links: [
          {
            label: 'Find and review large files on Mac',
            href: '/find-large-files-on-mac',
          },
        ],
      },
      {
        id: 'system-data',
        title: 'System Data is a clue, not a delete button',
        paragraphs: [
          'Apple uses System Data for files that do not fit its more specific storage categories. That includes things such as logs, caches and app support files. A large total does not tell you that all of it is junk.',
          'The useful question is which app or folder accounts for the space. Start with that app’s storage controls. Avoid emptying Library or Application Support wholesale: a folder name is not evidence that its contents can be recreated.',
          'If the category grows again, investigate what is creating the files. Repeating the same cleanup every morning leaves the cause untouched.',
        ],
        links: [
          {
            label: 'Apple’s explanation of storage categories',
            href: 'https://support.apple.com/guide/mac-help/mchl3d437fbc/mac',
          },
          {
            label: 'Understand a growing System Data total',
            href: '/system-data-keeps-growing',
          },
        ],
      },
      {
        id: 'developer-folders',
        title: 'Developer folders need a rebuild plan',
        paragraphs: [
          'If you write software, old projects deserve a look. A node_modules folder may be replaceable, but only if you can still install the dependencies. Keep the project source, package manifest and lockfile. Check access to private packages and any local changes before removing the installed copy.',
          'npm documents npm ci as a clean install based on an existing lockfile; it also removes an existing node_modules directory before installing. That is a modifying operation, not a way to inspect a folder. Do not run it just to measure storage.',
          'For Xcode, distinguish generated build output from source code and release archives. The same rule applies: identify the folder and how you would recreate its contents before treating it as disposable.',
        ],
        links: [
          {
            label: 'npm ci requirements and behavior',
            href: 'https://docs.npmjs.com/cli/v11/commands/npm-ci/',
          },
          {
            label: 'Review node_modules folders',
            href: '/find-node-modules-folders-mac',
          },
          {
            label: 'Understand Xcode Derived Data',
            href: '/clear-xcode-derived-data',
          },
        ],
      },
      {
        id: 'when-a-scanner-helps',
        title: 'Use a scanner when finding the files is the hard part',
        paragraphs: [
          'If you already know which download to remove, Finder may be all you need. If you cannot explain the storage total, a visual map and a largest-files list can help you decide where to look next.',
          'ClearDisk offers free local scans, a visual storage map and a System Data breakdown. Scanned file names and results stay on your Mac. Reading protected locations can require permission from macOS. The app needs macOS 15 or later.',
          'The cleanup license is $10 once. In ClearDisk 2.0.0, the review dialog offers Move to Trash and Remove Permanently. Permanent removal requires typing delete and clicking the red button; it skips Trash and cannot be undone. Choose Trash if you want the option to undo while the items remain there.',
          'Try the scan before paying. It should help you understand your own files; there is no fixed number of gigabytes every Mac can reclaim.',
        ],
        links: [
          {
            label: 'Download the free ClearDisk scanner',
            href: '/download?source=guides',
          },
          { label: 'What the cleanup license includes', href: '/pricing' },
        ],
      },
      {
        id: 'finish-the-job',
        title: 'Leave yourself a way back',
        paragraphs: [
          'Keep a backup of irreplaceable work. For local files, moving to Trash gives you a review step: open Trash and use Put Back if you made a mistake. Space used by those files is not released just by moving them there. Empty Trash only after checking its contents.',
          'Then return to the job that sent you here. Can you save, install or export now? If yes, you can stop. You do not have to turn a working Mac into a storage-cleaning project.',
        ],
        links: [
          {
            label: 'Apple: deleting files and restoring items from Trash',
            href: 'https://support.apple.com/guide/mac-help/mchlp1093/mac',
          },
        ],
      },
    ],
    related: [
      'free-up-space-on-mac',
      'clear-system-data-on-mac',
      'disk-space-analyzer-mac',
    ],
    sources: [
      {
        label: 'Apple: free up storage space',
        url: 'https://support.apple.com/en-us/102624',
      },
      {
        label: 'Apple: Storage settings',
        url: 'https://support.apple.com/guide/mac-help/mchl3d437fbc/mac',
      },
      {
        label: 'Apple: delete files and folders',
        url: 'https://support.apple.com/guide/mac-help/mchlp1093/mac',
      },
      {
        label: 'npm: clean installs with npm ci',
        url: 'https://docs.npmjs.com/cli/v11/commands/npm-ci/',
      },
      {
        label: 'MacPaw: CleanMyMac tools',
        url: 'https://macpaw.com/support/cleanmymac/knowledgebase/my-tools',
      },
    ],
  },
];
