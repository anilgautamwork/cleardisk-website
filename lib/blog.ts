import type { Guide } from './guides.ts';

export const blogPosts: Guide[] = [
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
