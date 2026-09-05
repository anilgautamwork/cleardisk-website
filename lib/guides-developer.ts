import type { Guide } from './guides.ts';

export const developerGuides: Guide[] = [
  {
    slug: 'clear-xcode-derived-data',
    title: 'How to clear Xcode Derived Data on Mac',
    description:
      'Clear Xcode Derived Data on Mac: find the folder, remove a reviewed project cache, and keep source code, release archives and simulator data separate.',
    summary:
      'Derived Data contains generated build products and indexes. Start with one inactive project, confirm its location, and expect Xcode to rebuild what you remove.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'understand-the-tradeoff',
        title: '1. Decide whether cleanup solves your problem',
        paragraphs: [
          'A project you have stopped working on is a better storage candidate than the project you rebuild all day. Removing its generated data can recover working room, but opening it again will create new files. The next build and indexing pass may take longer. Keep the cache if that saved work is more useful than the space.',
          'If your goal is to fix a build error, read the error first. Apple’s Xcode team recommends checking settings and trying a clean build folder before deleting Derived Data reflexively. A duplicate build input, missing dependency or signing error can survive cache removal unchanged.',
        ],
      },
      {
        id: 'find-the-right-location',
        title: '2. Confirm the project’s Derived Data location',
        paragraphs: [
          'For Xcode versions with a Locations pane, open Xcode → Settings → Locations and inspect the Derived Data path. Older releases call Settings “Preferences.” A custom workspace or build configuration can use a different location, so do not assume the default folder accounts for everything.',
          'The usual default is ~/Library/Developer/Xcode/DerivedData. In Finder, choose Go → Go to Folder and paste that path to inspect it. Match the project name to the folder you intend to review, then use Get Info to check its size. Do not treat every similarly named folder as part of the same project.',
        ],
      },
      {
        id: 'choose-a-small-selection',
        title: '3. Remove a reviewed selection',
        paragraphs: [
          'Save your work and stop builds, tests and previews. Quit Xcode before manually moving a selected project’s generated folder to Trash. If you have several Xcode versions open, close the sessions that may use that location. Keep the selection narrow enough that you can explain what it belongs to.',
          'Xcode 27 adds a Delete Derived Data menu action, confirmed in Apple’s WWDC26 Xcode lab. If your installed version offers it, review the action’s scope and confirmation. Its presence is version dependent; this guide does not assume all releases have the same menu or that the action uses Trash.',
        ],
      },
      {
        id: 'keep-release-material',
        title: '4. Keep source, archives and test state separate',
        paragraphs: [
          'Do not extend this cleanup to the whole Library/Developer directory. Your project repository, release archives, simulator devices and platform runtimes serve different purposes. A release archive may be needed for distribution or debugging; a simulator may contain a test database that is not in source control.',
          'Before removing a project folder, check for unusual workflows that saved an export or manually modified dependency inside generated storage. Copy anything you cannot reconstruct to a documented project location. A folder name is useful evidence, but it cannot prove that every file inside is replaceable.',
        ],
      },
      {
        id: 'verify-and-maintain',
        title: '5. Rebuild once and check available space',
        paragraphs: [
          'Reopen a project you still use and build it once. Confirm that its dependencies resolve and your expected work remains available. If you used Trash, review the removed contents before emptying it: the files still occupy space until permanent removal. Compare available storage after that step.',
          'Avoid turning cleanup into an every-build ritual. If the folder immediately grows again, that is evidence of the project’s workload. Review inactive projects periodically, and investigate simulator runtimes separately when they are the larger contributor. ClearDisk can help inspect paths and sizes; deciding what development state to retain remains your choice.',
        ],
      },
    ],
    related: [
      'remove-unused-ios-simulators',
      'system-data-keeps-growing',
      'clear-system-data-on-mac',
    ],
    sources: [
      {
        label: 'Apple: Xcode Tips and Tricks Group Lab, WWDC26',
        url: 'https://developer.apple.com/videos/play/wwdc2026/8013/',
      },
      {
        label: 'Apple: Xcode build settings reference',
        url: 'https://developer.apple.com/documentation/xcode/build-settings-reference',
      },
      {
        label: 'Apple: downloading and installing additional Xcode components',
        url: 'https://developer.apple.com/documentation/xcode/downloading-and-installing-additional-xcode-components',
      },
    ],
  },
  {
    slug: 'remove-unused-ios-simulators',
    title: 'Remove unused iOS simulators and runtimes on Mac',
    description:
      'Remove unused iOS simulators and runtimes with Xcode on Mac, while keeping the device versions and test data your current projects still need.',
    summary:
      'A simulator device and its operating-system runtime are different things. Review both in Xcode, retain your testing requirements, and remove only the entries you no longer need.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'device-versus-runtime',
        title: '1. Identify what is taking the space',
        paragraphs: [
          'An iPhone simulator is a virtual device with its own installed apps and state. A simulator runtime supplies the operating-system version used by one or more virtual devices. Deleting a device does not mean you have removed its shared runtime. Conversely, removing a runtime can leave you unable to run devices that depend on it.',
          'Start by writing down the OS versions and device sizes you actually test. Include the oldest supported version and any reproduction environment for an unresolved bug. The newest runtime alone may not cover your project’s requirements. An old release is not automatically an unused release.',
        ],
      },
      {
        id: 'review-devices',
        title: '2. Remove an individual unused device',
        paragraphs: [
          'Stop the simulator session and any active tests. In Xcode, choose Window → Devices and Simulators, then select Simulators. Inspect the name, device type and OS version of the entry you plan to remove. If you use custom names, make sure the name still matches what the device is used for.',
          'Control-click the selected simulator, choose Delete, and confirm after reviewing the dialog. Treat the device’s app data as lost when the device is deleted. Export any test documents or fixtures you still need first; reinstalling the app later is not a way to recover its old local state.',
        ],
      },
      {
        id: 'review-runtimes',
        title: '3. Remove an unused operating-system runtime',
        paragraphs: [
          'Open Xcode → Settings and look for Components. Apple’s current component guide lists platform support, optional components and installed runtimes separately. Review the installed versions and the storage Xcode says each removal would recover. Choose only a runtime outside your current testing needs.',
          'Depending on the Xcode release, removal uses an information button followed by Delete, or a selected runtime and a minus button. Older versions may group downloads under Platforms. Follow the matching control and confirmation in your installed release rather than trying to delete an internal runtime folder in Finder.',
        ],
      },
      {
        id: 'preserve-other-work',
        title: '4. Check what must stay available',
        paragraphs: [
          'Removing a downloaded runtime usually means downloading it again before you can test that OS. Plan around connection speed, offline work and compatibility with the Xcode version you use. Before a trip or a release deadline, the cost of recreating a test environment may outweigh the recovered space.',
          'Keep source projects and release archives outside this decision. Simulator cleanup does not require deleting all of CoreSimulator, removing Xcode itself, or changing protected macOS folders. If a runtime appears in a disk scan but not in Xcode’s management interface, collect the path and installed Xcode version for support instead of forcing removal.',
        ],
      },
      {
        id: 'confirm-test-coverage',
        title: '5. Verify your remaining test destinations',
        paragraphs: [
          'Return to a project and check its available run destinations. Launch a retained simulator and run the relevant tests. Confirm the particular device and OS combination you intended to keep still works. This is a more useful check than simply seeing a smaller folder total.',
          'Compare available Mac storage after the removal completes. If development storage is still large, inspect Derived Data separately. Keep a small record of which runtimes you intentionally retain and why; that makes the next Xcode update easier to review without rebuilding your entire test setup from memory.',
        ],
      },
    ],
    related: [
      'clear-xcode-derived-data',
      'system-data-too-large',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Apple: adding and removing simulators',
        url: 'https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators',
      },
      {
        label: 'Apple: managing additional Xcode components',
        url: 'https://developer.apple.com/documentation/xcode/downloading-and-installing-additional-xcode-components',
      },
    ],
  },
  {
    slug: 'clean-docker-disk-space-mac',
    title: 'How to clean up Docker disk space on Mac',
    description:
      'Clean up Docker disk space on Mac: inspect Docker Desktop storage, review containers and images, and separate disposable build cache from volumes.',
    summary:
      'Use Docker’s own storage information before touching Docker.raw. Review unused objects individually, and protect volumes and container data that cannot be rebuilt.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'measure-docker',
        title: '1. Measure Docker’s actual usage',
        paragraphs: [
          'Docker Desktop stores Linux containers and images inside a disk image. A large apparent Docker.raw size is not necessarily the amount of Mac storage occupied: sparse files can report a maximum size larger than their allocated space. Use Docker Desktop’s storage settings and compare available Mac space before choosing a target.',
          'With Docker running, the read-only command docker system df -v reports detailed usage by object type. Also inspect docker container ls -a and docker image ls, which list containers and images without deleting them. Confirm you are connected to the intended Docker context, especially if you also work with remote engines.',
        ],
      },
      {
        id: 'classify-data',
        title: '2. Separate rebuildable objects from retained data',
        paragraphs: [
          'A downloaded image may be easy to fetch again. A locally built image may require source files, build secrets and access to an old dependency registry. A stopped container can still hold files in its writable layer. “Stopped” describes its running state; it does not establish that its contents are disposable.',
          'Volumes commonly hold databases, uploads and other persistent state. Identify the application behind each volume before deleting anything. If the data matters, use the application’s backup procedure and verify the backup. Copying a database’s live files is not automatically an application-consistent backup.',
        ],
      },
      {
        id: 'remove-selected-objects',
        title: '3. Review objects in Docker Desktop',
        paragraphs: [
          'Open the Containers view, inspect a project you no longer use, and check its mounts and retained files before selecting its removal action. Then review the Images view for images you can recreate. Docker Desktop’s interface and available controls vary by version, so read each confirmation for the objects affected.',
          'Treat the Volumes view as a separate review. Docker documents inspection and export options there; some actions have account or subscription requirements. A volume named after an abandoned Compose project may still contain your only local database. Keep it until the data is backed up or explicitly no longer needed.',
        ],
      },
      {
        id: 'understand-pruning',
        title: '4. Understand prune before using it',
        paragraphs: [
          'Docker’s system prune operation removes several kinds of unused objects, including stopped containers, dangling images, unused networks and build cache. Additional flags broaden its reach. This guide deliberately uses inspection and selected removal instead of offering a bulk prune command to copy without reviewing the consequences.',
          'Build cache can save substantial work on the next build. Decide whether recovering that space is worth slower builds and possible downloads. If you choose a prune workflow, consult the official reference for your installed version, check filters and confirmation text, and avoid assuming “unused” means “unimportant.”',
        ],
      },
      {
        id: 'check-host-storage',
        title: '5. Check both Docker and the Mac afterward',
        paragraphs: [
          'Repeat docker system df -v and compare available Mac space after Docker finishes reclaiming storage. Host reclamation and Docker object totals answer different questions. Deleting files inside a running container may not immediately shrink the disk image. Do not delete Docker.raw or reduce its maximum size as a casual cleanup shortcut.',
          'Start a retained development stack and check its data. If Docker remains the main storage user, plan retention for old images and build cache around your normal workload. If another folder is larger, investigate it separately; a general disk scan helps locate the source but cannot decide which Docker database you should keep.',
        ],
      },
    ],
    related: [
      'find-node-modules-folders-mac',
      'system-data-keeps-growing',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Docker: Desktop for Mac disk usage FAQ',
        url: 'https://docs.docker.com/desktop/troubleshoot-and-support/faqs/macfaqs/',
      },
      {
        label: 'Docker: prune unused objects',
        url: 'https://docs.docker.com/engine/manage-resources/pruning/',
      },
      {
        label: 'Docker: inspect disk usage with docker system df',
        url: 'https://docs.docker.com/reference/cli/docker/system/df/',
      },
      {
        label: 'Docker: the Images view',
        url: 'https://docs.docker.com/desktop/use-desktop/images/',
      },
      {
        label: 'Docker: the Volumes view',
        url: 'https://docs.docker.com/desktop/use-desktop/volumes/',
      },
    ],
  },
  {
    slug: 'find-node-modules-folders-mac',
    title: 'Find large node_modules folders on Mac',
    description:
      'Find large node_modules folders on Mac, measure their sizes, and check that each project’s dependencies can be restored before removing a folder.',
    summary:
      'Start inside your project directory, list node_modules without deleting anything, and keep source files and lockfiles. Reinstallation is only reliable when the dependencies remain available.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'choose-scope',
        title: '1. Search the projects you recognize',
        paragraphs: [
          'Old JavaScript projects can retain installed dependencies long after you stop using them. Begin with the directory where you keep repositories, rather than scanning the whole drive. This reduces unrelated results and makes each finding easier to connect to an actual project. Include old experiments only if you know where they live.',
          'In Terminal, first change into that project directory. Then run: find . -type d -name node_modules -prune -print. This is a read-only listing. The dot means the current directory; confirm that location before running it. The prune option stops descending into a matched dependency tree, keeping the output more manageable.',
        ],
      },
      {
        id: 'measure-selected-folder',
        title: '2. Measure a folder before deciding',
        paragraphs: [
          'In Finder, open a returned path and use Get Info on node_modules. Alternatively, from the parent projects directory, run du -sh "./your-project/node_modules", replacing the example with the exact path you reviewed. Keep the quotes if names contain spaces. This command reports size without changing the folder.',
          'Treat totals carefully when projects use shared package stores or linked files. Different tools may account for shared storage differently, so adding every folder size is not a guarantee of recoverable bytes. Check actual available space after one removal before extrapolating savings across all your projects.',
        ],
      },
      {
        id: 'check-restoration',
        title: '3. Check that you can reconstruct dependencies',
        paragraphs: [
          'Keep package.json, the package manager’s lockfile, source code, configuration and any required local packages. Record the Node and package-manager versions from the project’s documentation. Check for manual edits inside node_modules, patch files, private registry access and dependencies that may no longer be downloadable.',
          'For an npm project with a compatible package-lock.json or npm-shrinkwrap.json, npm ci performs a clean install. It requires agreement between the lockfile and package.json and removes an existing node_modules before installing. Use the project’s documented command and required flags; do not switch a pnpm or Yarn project to npm just for cleanup.',
        ],
      },
      {
        id: 'remove-one-inactive-tree',
        title: '4. Remove one inactive dependency tree',
        paragraphs: [
          'Stop the project’s development server, watchers and tests. In Finder, move only the reviewed node_modules folder to Trash. Leave the project root and hidden configuration intact. If you found files you modified manually, preserve those changes outside generated dependencies before proceeding.',
          'For a project you need to retain, verify a fresh dependency install and the project’s normal build or test command when practical. Installation can execute package scripts and use the network, so perform it only for projects you trust. For archival projects that cannot be reconstructed, keep a verified backup instead of assuming a lockfile is sufficient.',
        ],
      },
      {
        id: 'avoid-cache-confusion',
        title: '5. Distinguish dependencies from package caches',
        paragraphs: [
          'The npm download cache is separate from each project’s node_modules. npm documents its cache as self-healing and provides npm cache verify for checking it; repeatedly clearing that cache is not the same as removing inactive project dependencies. Leave shared package stores alone unless you understand the package manager’s own cleanup workflow.',
          'Review Trash before emptying it, then compare available Mac space. Expect dependencies to return when you resume work on a project. Keep the projects you use frequently ready to run, and review inactive repositories when storage pressure justifies the time needed to restore them later.',
        ],
      },
    ],
    related: [
      'clean-docker-disk-space-mac',
      'clear-xcode-derived-data',
      'system-data-too-large',
    ],
    sources: [
      {
        label: 'npm: clean installation with npm ci',
        url: 'https://docs.npmjs.com/cli/v11/commands/npm-ci/',
      },
      {
        label: 'npm: cache behavior and verification',
        url: 'https://docs.npmjs.com/cli/v11/commands/npm-cache/',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'clear-browser-cache-mac',
    title: 'Clear browser cache on Mac without clearing everything',
    description:
      'Clear browser cache on Mac in Safari, Chrome or Firefox while understanding the separate effects of removing cookies, history and site data.',
    summary:
      'Use the browser’s own controls and select cached content deliberately. Cookies, browsing history, saved passwords and downloaded files are different categories with different consequences.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'choose-the-problem',
        title: '1. Decide what you are trying to fix',
        paragraphs: [
          'A stale page and a full Mac drive are different problems. Clearing cached page resources can help troubleshoot outdated content, but it may recover little storage compared with a video download or project library. If storage is your goal, check the browser’s reported usage and your Mac’s available space first.',
          'Save web forms and finish uploads before starting. Check which browser profile you are using, especially if you have separate work and personal profiles. A cache is recreated as you browse. Clearing it is a one-time change, not a promise that browser storage will remain small.',
        ],
      },
      {
        id: 'safari-cache',
        title: '2. Clear Safari’s cache',
        paragraphs: [
          'In current Safari for Mac, choose Safari → Settings → Advanced and enable “Show features for web developers.” Then choose Develop → Empty Caches. Apple describes this command as clearing browser caches, including when cached content prevents a developer from seeing page changes.',
          'Older Safari versions may call the setting “Show Develop menu in menu bar,” and Settings may be called Preferences. Use the matching option for your version. Clear History and Privacy → Manage Website Data are different controls: do not choose a broader deletion action merely because it is easier to find.',
        ],
      },
      {
        id: 'chrome-cache',
        title: '3. Clear Chrome’s cached files',
        paragraphs: [
          'In Chrome, open the three-dot menu and choose Delete browsing data. Select the time range appropriate to the problem, then select Cached images and files. Inspect all other selected categories before choosing Delete data. For a cache-only change, leave cookies, history and other information you want to retain unselected.',
          'Deleting cookies and site data can remove website state and sign you out. Deleting download history removes the list, not the downloaded files in Finder. Some browsing information can sync through your Google Account; do not select synced categories casually when you intend only to troubleshoot local cached resources.',
        ],
      },
      {
        id: 'firefox-cache',
        title: '4. Clear Firefox’s cached content',
        paragraphs: [
          'In Firefox Settings, open Privacy & Security and find Cookies and Site Data, then select Clear Data. In newer versions, choose a time range and select Temporary cached files and pages. Older versions label the cache option Cached Web Content. Leave the cookies and site-data option unchecked if you want to retain that information.',
          'Read the remaining categories in the dialog before confirming. Browser interfaces evolve, and a previous selection can change the scope of your next cleanup. If you need to remove storage for one troublesome website, use the browser’s site-data controls and accept that the site may lose login or offline state.',
        ],
      },
      {
        id: 'check-result',
        title: '5. Reload and reassess',
        paragraphs: [
          'Revisit the page you were troubleshooting and check its behavior. The first load may need to download resources again. If the same problem persists, record the page and symptom and investigate extensions or the site itself; repeated cache clearing is not evidence that the underlying problem is fixed.',
          'If you wanted disk space, compare available storage after cleanup. Review actual Downloads separately and leave browser profile folders intact: they can contain much more than a cache. When another app or folder accounts for most of the drive, use the related storage guides to focus on that larger source.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'system-data-keeps-growing',
      'clear-system-data-on-mac',
    ],
    sources: [
      {
        label: 'Apple: enable Safari developer features',
        url: 'https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features',
      },
      {
        label: 'Apple: Safari Develop menu and Empty Caches',
        url: 'https://developer.apple.com/documentation/safari-developer-tools/develop-menu',
      },
      {
        label: 'Google: delete browsing data in Chrome',
        url: 'https://support.google.com/chrome/answer/2392709?hl=en',
      },
      {
        label: 'Mozilla: clear the Firefox cache',
        url: 'https://support.mozilla.org/en-US/kb/how-clear-firefox-cache',
      },
    ],
  },
  {
    slug: 'photoshop-scratch-disk-full-mac',
    title: 'Photoshop scratch disk full on Mac: what to check',
    description:
      'Photoshop scratch disk full on Mac? Identify the selected scratch drive, recover working space, and choose suitable scratch storage without risking projects.',
    summary:
      'A scratch disk is Photoshop’s temporary working storage. Check the selected drive and its free space before deleting files or changing performance settings.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'protect-open-work',
        title: '1. Preserve the work that is already open',
        paragraphs: [
          'If Photoshop still responds, save your document to a location with enough room before experimenting. Keep your original project, linked assets and recovery information. A scratch-disk warning concerns working storage; it does not make your PSD files or Photos library disposable. Avoid force-quitting an unsaved session just to begin cleanup.',
          'Record the exact message and the operation that triggered it: opening a document, creating a canvas or applying a filter. This helps distinguish ongoing storage pressure from a single unusually demanding operation. Check which drive is full instead of assuming every Photoshop warning refers to Macintosh HD.',
        ],
      },
      {
        id: 'check-selected-drive',
        title: '2. Inspect the configured scratch disk',
        paragraphs: [
          'In current Photoshop for macOS, choose Photoshop → Settings → Scratch Disks. Older versions call this Preferences. Check which drives are selected and their priority. Scratch space is disk storage used for temporary work; buying more cloud storage does not directly create free space on the selected local drive.',
          'Check that drive’s available capacity in Finder or macOS storage tools. Adobe’s current troubleshooting guidance recommends freeing at least 100GB on the primary scratch disk. Treat that as Adobe’s Photoshop-specific troubleshooting recommendation, not a universal requirement for every Mac app or a promise that every document will fit.',
        ],
      },
      {
        id: 'recover-working-space',
        title: '3. Recover space from files you can evaluate',
        paragraphs: [
          'Start with completed exports, obsolete installers or other large files you recognize. If you move a finished project to another drive, open the destination copy and verify its assets before removing the original. Keep a separate backup of irreplaceable work; the new working location alone is not a backup.',
          'Review Trash before emptying it. Moving files to Trash does not recover their occupied space until they are permanently removed. Do not apply Windows instructions for deleting Photoshop Temp files to macOS, and do not remove arbitrary Adobe support or recovery folders while a document is open.',
        ],
      },
      {
        id: 'choose-additional-drive',
        title: '4. Consider another suitable scratch drive',
        paragraphs: [
          'If you already have a suitable drive, Photoshop’s Scratch Disks settings let you select additional drives and change their priority. Adobe lists APFS and Mac OS Extended (Journaled) as supported Mac scratch-drive formats. Verify the drive is connected, writable and has enough capacity before selecting it.',
          'Changing the scratch setting does not move your original document or create a project backup. Do not erase a drive simply to match a suggested format without first preserving its contents. Confirm the selection, restart Photoshop when prompted, and test a copy of a representative document before relying on the new setup.',
        ],
      },
      {
        id: 'if-error-returns',
        title: '5. Investigate recurring scratch pressure',
        paragraphs: [
          'Review the document dimensions and units, layer count and recent operation. A mistaken large canvas deserves correction before you start deleting more files. In Photoshop’s performance settings, reducing retained history can reduce temporary-storage demand, but it also reduces the steps you can undo. Make that tradeoff deliberately.',
          'Keep recovery protection unless you understand and accept the loss of recovery opportunities. If Photoshop cannot launch or the warning persists despite adequate space, follow Adobe’s version-specific troubleshooting and contact support with the message, drive and document details. ClearDisk can help locate large local files, but it does not configure Photoshop or repair a damaged project.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'system-data-too-large',
      'system-data-keeps-growing',
    ],
    sources: [
      {
        label: 'Adobe: troubleshoot scratch disk full errors',
        url: 'https://helpx.adobe.com/photoshop/desktop/troubleshoot/performance-stability-issues/troubleshoot-scratch-disk-full-errors-in-photoshop.html',
      },
      {
        label: 'Adobe: set up and manage scratch disks',
        url: 'https://helpx.adobe.com/photoshop/desktop/troubleshoot/troubleshoot-tools-resources/set-up-and-manage-scratch-disks.html',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
];
