import type { Guide } from './guides.ts';

export const serpGapGuides: Guide[] = [
  {
    slug: 'omnidisksweeper-alternative',
    title: 'OmniDiskSweeper Alternative: 6 Free or Modern Mac Tools',
    h1: 'OmniDiskSweeper alternatives on Mac in 2026: 6 free and modern disk analyzers',
    description:
      'Compare 6 OmniDiskSweeper alternatives for Mac: GrandPerspective, Disk Inventory X, DaisyDisk, ClearDisk, ncdu, and macOS Storage by view, safety, and cost.',
    summary:
      'OmniDiskSweeper is beloved because it is free, lightweight, and shows folders sorted by size without bloated cleaner suites—but it lacks a visual map, deletes immediately without a Trash-first review flow, and feels dated on modern APFS Macs. Depending on whether you want a free open-source treemap, a polished sunburst ring, a Trash-first cleaner, or a Terminal scanner, these 6 alternatives cover every workflow.',
    published: '2026-11-19',
    updated: '2026-11-19',
    itemList: {
      name: '6 OmniDiskSweeper alternatives for Mac in 2026',
      items: [
        'GrandPerspective (free open-source visual treemap)',
        'ClearDisk (free treemap + System Data scan, Trash-first review, $10 once for cleanup)',
        'DaisyDisk (fast sunburst ring analyzer, $9.99 one-time)',
        'Disk Inventory X (free folder list + file-type colored treemap)',
        'ncdu (free, fast Terminal list analyzer via Homebrew)',
        'Built-in macOS Storage settings (free native category breakdown)',
      ],
    },
    sections: [
      {
        id: 'why-people-switch',
        title: 'Why Mac users look for an OmniDiskSweeper alternative',
        paragraphs: [
          'OmniDiskSweeper still runs on modern Macs and remains one of the quickest ways to sort folders from largest to smallest in Miller columns. Most people look for an alternative for three practical reasons: they want a visual treemap or sunburst chart instead of nested text columns, they want safer Trash-first review (OmniDiskSweeper’s Destroy button deletes items immediately without going through Trash), or they want System Data and purgeable APFS space explained alongside raw folder sizes.',
          'Before installing any disk analyzer on macOS 15 or later, grant it Full Disk Access under System Settings → Privacy & Security → Full Disk Access so it can read ~/Library, Mail, Messages, and container folders rather than silently undercounting gigabytes.',
        ],
        items: [
          'Want a free open-source visual treemap: GrandPerspective.',
          'Want a modern treemap + System Data safety labels + Trash-first review: ClearDisk (free scan, $10 one-time cleanup).',
          'Want the fastest polished sunburst ring chart: DaisyDisk ($9.99 one-time).',
          'Want a free hybrid of folder list + colored treemap: Disk Inventory X.',
          'Want OmniDiskSweeper’s pure text list speed in Terminal: ncdu (free via Homebrew).',
          'Want zero installs for a quick category check: Built-in macOS Storage settings.',
        ],
      },
      {
        id: 'grandperspective',
        title: 'Pick 1: GrandPerspective (best free open-source treemap)',
        paragraphs: [
          'GrandPerspective is a classic open-source Mac utility that turns your entire drive into a proportional treemap where every file is a colored rectangle sized by disk usage. Massive video archives, disk images, and forgotten backups jump out instantly as huge blocks without clicking through ten nested folders.',
          'Trade-off: its interface is utilitarian and focuses purely on visualization rather than explaining what ~/Library folders are safe to delete. It is free directly from SourceForge (with a small optional paid build on the Mac App Store to support development).',
        ],
        items: [
          'View style: Proportional rectangular treemap.',
          'Price: Free open source (optional paid Mac App Store build).',
          'Best for: Spotting giant single files visually at zero cost.',
        ],
      },
      {
        id: 'cleardisk',
        title: 'Pick 2: ClearDisk (best modern treemap with safety labels and Trash-first cleanup)',
        paragraphs: [
          'ClearDisk combines a native macOS treemap storage map with categorized System Data, Dev Junk (Xcode, Docker, Homebrew, npm), Large Files, and iCloud Doctor diagnostics. Unlike OmniDiskSweeper’s immediate Destroy button, ClearDisk separates free scanning from a review dialog that defaults to Move to Trash and labels System Data groups Safe, Review, or Leave it.',
          'Scanning and browsing the storage map are completely free on macOS 15 or later (Apple silicon and Intel); unlocking in-app cleanup costs $10 once with no subscription.',
        ],
        figure: {
          src: '/guides/sample-storage-map.jpg',
          alt: 'ClearDisk visual storage treemap showing three sample files sized 134.2 MB, 33.6 MB, and 2.1 MB on macOS 27.0.1',
          width: 2200,
          height: 1496,
          caption:
            'ClearDisk’s free Treemap view on macOS 27.0.1 alongside System Data, Dev Junk, Large Files, and iCloud Doctor in the sidebar.',
        },
        items: [
          'View style: Interactive visual treemap + categorized System Data & Dev Junk lists.',
          'Price: Free scan and storage map; $10 one-time license for in-app cleanup.',
          'Best for: Users who want visual disk mapping plus Trash-first review and clear guidance on ~/Library folders.',
        ],
        links: [
          {
            label: 'Compare ClearDisk with DaisyDisk and 5 other visual analyzers',
            href: '/daisydisk-alternative',
          },
          {
            label: 'See ClearDisk pricing and what is included in the free scan',
            href: '/pricing',
          },
        ],
      },
      {
        id: 'daisydisk',
        title: 'Pick 3: DaisyDisk (best polished sunburst analyzer)',
        paragraphs: [
          'DaisyDisk is widely considered the gold standard for interactive sunburst ring charts on Mac. It scans modern Apple silicon APFS volumes rapidly, lets you drill down by clicking ring segments, and includes a Collector drop-zone at the bottom corner so you stage files before deleting them.',
          'Trade-off: DaisyDisk’s free trial limits deletion until you pay $9.99 once, and it intentionally stays a visual file map rather than a developer-cache or System Data explainer.',
        ],
        items: [
          'View style: Multi-level interactive sunburst ring chart.',
          'Price: $9.99 one-time license (free trial to scan).',
          'Best for: Fast, polished visual exploration on Apple silicon.',
        ],
      },
      {
        id: 'disk-inventory-x',
        title: 'Pick 4: Disk Inventory X (best free list + treemap hybrid)',
        paragraphs: [
          'Disk Inventory X pairs a traditional expandable folder list on the left (similar to OmniDiskSweeper’s top-down breakdown) with a file-type color-coded treemap on the right. Seeing both views simultaneously makes it easy to confirm which folder owns a big block of files.',
          'Trade-off: it is an older open-source project that scans slower on large modern drives than native Apple silicon apps and does not interpret APFS purgeable space or Time Machine local snapshots.',
        ],
        items: [
          'View style: Side-by-side folder list + file-type colored treemap.',
          'Price: Free (open source).',
          'Best for: Users transitioning from OmniDiskSweeper’s list view who want a free visual map beside it.',
        ],
      },
      {
        id: 'ncdu',
        title: 'Pick 5: ncdu (best free Terminal list alternative)',
        paragraphs: [
          'If you love OmniDiskSweeper specifically because it skips flashy graphics and just gives you a fast, keyboard-navigable list sorted by size, ncdu (NCurses Disk Usage) delivers that exact workflow inside Terminal. Install it with Homebrew and point it at your home directory to scan thousands of nested developer folders in seconds.',
        ],
        code: ['brew install ncdu', 'ncdu ~'],
        items: [
          'View style: Keyboard-driven text list with size bars in Terminal.',
          'Price: Free open source via Homebrew.',
          'Best for: Developers and power users who prefer Terminal speed over GUI charts.',
        ],
        links: [
          {
            label: 'Complete guide to using ncdu on Mac safely',
            href: '/ncdu-on-mac',
          },
          {
            label: 'Need Homebrew first? How to install Homebrew on Mac',
            href: '/install-homebrew-mac',
          },
        ],
      },
      {
        id: 'macos-storage',
        title: 'Pick 6: Built-in macOS Storage settings (best zero-install check)',
        paragraphs: [
          'Open Apple menu → System Settings → General → Storage to see Apple’s native breakdown across Applications, Documents, Photos, Developer, macOS, and System Data. Clicking the info (i) button beside Documents opens a Large Files tab you can sort and delete without installing any third-party app.',
          'Trade-off: Apple’s Storage panel does not let you browse inside System Data or drill down into arbitrary ~/Library folders the way OmniDiskSweeper or a dedicated analyzer does.',
        ],
        links: [
          {
            label: 'How to check storage on Mac step by step',
            href: '/how-to-check-storage-on-mac',
          },
          {
            label: 'What is System Data on Mac and how to inspect what is inside',
            href: '/what-is-system-data-on-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Does OmniDiskSweeper still work on modern Apple silicon Macs?',
        a: 'Yes, OmniDiskSweeper still runs on current macOS versions and remains free. Most people switch because they want a visual treemap or sunburst map, Trash-first safety review instead of immediate deletion, or System Data and APFS explanations.',
      },
      {
        q: 'What is the best completely free alternative to OmniDiskSweeper on Mac?',
        a: 'GrandPerspective is the best free open-source visual treemap alternative, while ncdu (installed via Homebrew) is the best free list-based alternative if you are comfortable using Terminal.',
      },
      {
        q: 'Why does OmniDiskSweeper show a different total than macOS Storage settings?',
        a: 'Disk analyzers only measure files their permissions allow them to read, and they do not always match Apple’s APFS purgeable space or Time Machine local snapshot accounting. Granting Full Disk Access closes most of the folder-reading gap.',
      },
      {
        q: 'Is it safe to delete files directly inside OmniDiskSweeper?',
        a: 'Be cautious: OmniDiskSweeper’s Destroy action deletes selected files immediately without moving them to the Trash first. Always inspect the full path, avoid deleting unfamiliar ~/Library or system folders, or use a Trash-first tool instead.',
      },
      {
        q: 'Which OmniDiskSweeper alternative explains System Data on Mac?',
        a: 'ClearDisk scans your drive for free and groups recognizable System Data folders, developer caches, and iPhone backups with Safe, Review, and Leave it labels alongside a visual treemap.',
      },
      {
        q: 'How do I give a disk analyzer Full Disk Access on Mac?',
        a: 'Open System Settings, go to Privacy & Security, click Full Disk Access, and toggle on your disk analyzer app, then quit and reopen the app so it can scan protected ~/Library folders.',
      },
    ],
    related: [
      'daisydisk-alternative',
      'disk-space-analyzer-mac',
      'ncdu-on-mac',
      'best-free-mac-cleaner',
      'how-to-check-storage-on-mac',
    ],
    sources: [
      {
        label: 'The Omni Group: OmniDiskSweeper official downloads',
        url: 'https://www.omnigroup.com/more',
      },
      {
        label: 'GrandPerspective: open-source Mac disk usage utility',
        url: 'https://grandperspectiv.sourceforge.net/',
      },
      {
        label: 'DaisyDisk: official Mac disk space analyzer',
        url: 'https://daisydiskapp.com/',
      },
      {
        label: 'Apple Support: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'reindex-spotlight-mac',
    title: 'How to Reindex Spotlight on Mac (and When You Shouldn’t)',
    h1: 'How to reindex Spotlight on Mac (and when you shouldn’t)',
    description:
      'Rebuild the Spotlight index on Mac with Apple’s Search Privacy trick or sudo mdutil -E /, plus how to tell when you shouldn’t reindex and how long it takes.',
    summary:
      'To reindex Spotlight on Mac, open System Settings → Spotlight (or Siri & Spotlight), click Search Privacy, add Macintosh HD, wait a few seconds, remove it, and click Done—or run sudo mdutil -E / in Terminal. Before rebuilding, confirm the index is actually damaged: forcing a reindex while Spotlight is still finishing normal post-update indexing just resets the clock.',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      {
        id: 'do-you-need-to-reindex',
        title: 'Do you actually need to reindex Spotlight?',
        paragraphs: [
          'Rebuilding the Spotlight index has become the default advice for every Spotlight symptom, yet often it is the wrong move. Howard Oakley of The Eclectic Light Company notes that the only real reason to rebuild is when the index is known to be damaged or corrupted: forcing a rebuild while Spotlight is still working through normal background indexing resets the clock without telling you how close it was to finishing.',
          'Apple’s Spotlight indexing guidance explains that indexing runs after initial Mac setup, after every macOS software update or upgrade, and whenever large amounts of data change—and that a full first pass can take hours or even days. Mail and Calendar in-app search also use a separate part of Spotlight, so a disk reindex frequently will not fix them.',
        ],
        items: [
          'Files you know exist never show up days after you created them (damaged index) → Reindex: Yes.',
          'Search keeps showing files you deleted long ago (stale index) → Reindex: Yes.',
          'Spotlight finds apps but shows nothing for files → Check Spotlight settings first, then Reindex: Yes.',
          'mds_stores or mdworker using high CPU after an update, or Spotlight shows “Indexing…” (normal indexing) → Reindex: No, wait.',
          'One specific result type (Mail, Contacts, PDFs) is missing (category unchecked in Settings) → Reindex: No, turn the category on.',
          'Search inside Mail or Calendar is broken (separate in-app search) → Reindex usually won’t help.',
          'Spotlight window won’t open at all (crashed process or OS bug) → Restart and update macOS first.',
        ],
      },
      {
        id: 'before-you-rebuild',
        title: 'Before you rebuild: 3 quick checks',
        paragraphs: [
          'Before erasing your index, run three fast checks. You can also test whether the index itself is healthy by pressing Command + F inside a Finder window and searching for a known file by its exact name: if Finder finds it while the Spotlight menu does not, the index is likely fine and the issue is the Spotlight interface.',
        ],
        items: [
          '1. Update macOS: Apple’s first recommendation for odd Spotlight behavior is installing the latest point update (several early macOS 26 Tahoe Spotlight bugs were resolved in later updates).',
          '2. Check Spotlight categories: open System Settings → Spotlight and confirm Documents, Applications, Folders, and PDFs are checked—unchecked categories never appear regardless of index health.',
          '3. Check Search Privacy: click Search Privacy at the bottom of Spotlight settings and confirm the folder or disk you are searching is not intentionally excluded.',
        ],
      },
      {
        id: 'system-settings-method',
        title: '1. Reindex Spotlight in System Settings (Apple’s method)',
        paragraphs: [
          'Apple documents the Search Privacy add-and-remove method for macOS Ventura 13 and later, including Sequoia, Tahoe, and macOS 27 Golden Gate (older releases use System Preferences → Spotlight → Privacy). To reindex just one stubborn project folder instead of the whole drive, add and remove only that folder—it finishes much faster.',
          'If macOS shows an “unknown” or permissions error when adding a disk or folder, your user account may not own some items inside it; Apple’s Mac User Guide covers correcting folder ownership and permissions.',
        ],
        items: [
          'Click Apple menu → System Settings.',
          'Select Spotlight in the sidebar (labeled Siri & Spotlight on macOS 13–14).',
          'Scroll to the bottom and click Search Privacy (or Spotlight Privacy).',
          'Click the add (+) button and choose Macintosh HD, or drag a specific disk or folder into the list.',
          'Wait a few seconds so macOS clears the existing index.',
          'Select the item you just added, click the remove (−) button, then click Done and quit System Settings.',
        ],
      },
      {
        id: 'terminal-mdutil-method',
        title: '2. Reindex Spotlight in Terminal with mdutil',
        paragraphs: [
          'If the System Settings method does not take—or you are troubleshooting an external volume or remote Mac—use macOS’s built-in mdutil utility (verified on macOS 27.0.1). Per the mdutil manual page, sudo mdutil -E / erases local index stores on the startup disk and immediately rebuilds them without needing to disable indexing first.',
          'Some users on recent macOS releases report that sudo mdutil -E / alone did not clear stubborn search issues while rebuilding all mounted volumes with sudo mdutil -aE did; use -aE only if the single-volume rebuild did not help, because it takes longer. Older guides also mention -X, which deletes the index directory outright—Oakley notes -E is enough for a rebuild, and if you ever run -X or -i off, you must run sudo mdutil -i on / afterward to turn indexing back on.',
        ],
        code: [
          'sudo mdutil -E /',
          'mdutil -s /',
          'sudo mdutil -i on /',
          'sudo mdutil -E "/Volumes/YourDriveName"',
          'sudo mdutil -aE',
        ],
      },
      {
        id: 'reindex-with-cleardisk',
        title: '3. Reindex Spotlight with ClearDisk',
        paragraphs: [
          'ClearDisk includes Spotlight reindexing as a guided action in its $10 one-time license alongside cleanup and app-quit tools—a quicker route if you prefer not to dig through System Settings or run sudo commands in Terminal. The same rule still applies: reindex when search is genuinely broken, and leave it alone when Spotlight is simply finishing normal post-update work.',
        ],
        links: [
          {
            label: 'See all features included in ClearDisk 2.2.1',
            href: '/features',
          },
        ],
      },
      {
        id: 'how-long-it-takes',
        title: '4. How long Spotlight reindexing takes (and how to check progress)',
        paragraphs: [
          'There is no fixed duration: Apple notes a full pass can take hours or even days depending on how much data sits on your SSD. Modern macOS also extracts text (OCR) from images and scanned PDFs and classifies photo content, which takes far longer than plain filenames. Keep your Mac awake, plugged into power, and connected to Wi-Fi or Ethernet so it finishes sooner.',
          'Watch out for a misleading progress bar: Apple notes an indexing indicator may appear at the top of the Spotlight window, yet Oakley found that bar only covers the phase when search is unavailable—heavy background indexing often continues after it vanishes. To see whether indexing is truly still running, open Activity Monitor → CPU tab and look for mds, mds_stores, and mdworker (on Apple silicon, these run mostly on efficiency cores so they rarely bog down normal work).',
        ],
        links: [
          {
            label: 'mds_stores staying high for days? Fix Spotlight high CPU on Mac',
            href: '/mds-stores-high-cpu-mac',
          },
          {
            label: 'Mac storage stuck on “Calculating…”? Fixes that work',
            href: '/mac-storage-calculating',
          },
        ],
      },
      {
        id: 'if-reindexing-didnt-fix-it',
        title: 'If reindexing didn’t fix it (and how big .Spotlight-V100 is)',
        paragraphs: [
          'Spotlight stores its metadata inside a hidden .Spotlight-V100 folder at the root of each indexed volume. It is normally a small fraction of your disk and grows with the volume of text, PDFs, and photos macOS indexes—never delete .Spotlight-V100 manually; use Search Privacy or mdutil instead.',
          'Reindex when Spotlight is truly broken—missing files it should know about or surfacing files deleted long ago. Use Apple’s Search Privacy trick first, sudo mdutil -E / second, and give it time on power. If Spotlight is simply busy after an update, the fastest fix is leaving it alone.',
        ],
        items: [
          'The same file keeps crashing indexing: a malformed document or PDF can crash an importer repeatedly; reindex that single folder and move suspicious files out.',
          'Mail or Calendar search still fails: in-app search uses a separate Spotlight component; Oakley recommends contacting Apple Support for persistent Mail/Calendar search failures.',
          'Cloud sync folders cause endless reindexing: iCloud Drive, Dropbox, and OneDrive generate constant file churn; test excluding a busy sync folder in Search Privacy temporarily.',
          'Search works but feels sluggish: very low free disk space slows everything, including Spotlight—keep enough free working room on your SSD.',
          'Index keeps disappearing alongside crashes: run Disk Utility First Aid and verify your Time Machine backups are current.',
        ],
        links: [
          {
            label: 'Cloud drives taking up space and churning on Mac',
            href: '/cloud-drive-taking-up-space-on-mac',
          },
          {
            label: 'How much free space should you keep on a Mac?',
            href: '/how-much-free-space-to-keep-mac',
          },
          {
            label: 'Run Disk Utility First Aid on Mac to check volume health',
            href: '/disk-utility-first-aid-mac',
          },
          {
            label: 'What is System Data on Mac and where the bigger culprits live',
            href: '/what-is-system-data-on-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'How do I rebuild the Spotlight index on a Mac?',
        a: 'Open System Settings, go to Spotlight, click Search Privacy, add Macintosh HD, wait a few seconds, remove it, and click Done. You can also run sudo mdutil -E / in Terminal to trigger the same rebuild.',
      },
      {
        q: 'Is it safe to reindex Spotlight on Mac?',
        a: 'Yes. Reindexing only erases and rebuilds Spotlight’s hidden search catalog so your documents, apps, and photos are never touched. Search results will simply be incomplete until the rebuild finishes.',
      },
      {
        q: 'How long does it take to reindex Spotlight on a Mac?',
        a: 'Reindexing can take anywhere from a few minutes for a single folder to several hours or days for a full disk with large photo libraries and scanned PDFs. Keeping your Mac awake, plugged into power, and online helps it finish faster.',
      },
      {
        q: 'Why is Spotlight not finding my files on Mac?',
        a: 'First check that the file category is turned on in System Settings under Spotlight and that the folder is not excluded in Search Privacy. If both look right and files more than a day old are still missing, the index is likely damaged and needs a rebuild.',
      },
      {
        q: 'Should I reindex Spotlight after a macOS update?',
        a: 'Usually no. macOS automatically reindexes after software updates, so forcing a manual rebuild while it is still working just resets the clock. Give your Mac a day or two on power, and rebuild only if search still misses files afterward.',
      },
      {
        q: 'What is the difference between mdutil -E and mdutil -X?',
        a: 'mdutil -E erases the existing Spotlight index and automatically starts rebuilding it, which is all you need for a normal rebuild. mdutil -X removes the index directory completely and requires running sudo mdutil -i on afterward to restart indexing.',
      },
    ],
    related: [
      'mds-stores-high-cpu-mac',
      'mac-storage-calculating',
      'cloud-drive-taking-up-space-on-mac',
      'disk-utility-first-aid-mac',
      'what-is-system-data-on-mac',
    ],
    sources: [
      {
        label: 'Apple Support: rebuild the Spotlight index on your Mac (102321)',
        url: 'https://support.apple.com/en-us/102321',
      },
      {
        label: 'Apple Mac User Guide: change permissions for files, folders, or disks on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1203/mac',
      },
      {
        label: 'The Eclectic Light Company (Howard Oakley): when and how to rebuild Spotlight indexes',
        url: 'https://eclecticlight.co/2024/11/19/when-and-how-to-rebuild-spotlight-indexes/',
      },
      {
        label: 'The Eclectic Light Company (Howard Oakley): in the background — Spotlight indexing (2026)',
        url: 'https://eclecticlight.co/2026/02/10/in-the-background-spotlight-indexing/',
      },
      {
        label: 'MacRumors: how to rebuild the Spotlight search index on Mac',
        url: 'https://www.macrumors.com/how-to/rebuild-spotlight-search-index-on-mac/',
      },
    ],
  },
  {
    slug: 'windowserver-high-cpu-mac',
    title: 'WindowServer High CPU on Mac: What It Means & 9 Fixes',
    h1: 'WindowServer high CPU on Mac: what it means and how to fix it',
    description:
      'Why WindowServer uses so much CPU on your Mac (displays, windows, Stage Manager, transparency) and 9 fixes, from Activity Monitor to display settings.',
    summary:
      'WindowServer is the core macOS process (owned by _windowserver) that draws everything you see on screen—so its CPU spikes whenever lots of windows/tabs, external or scaled displays, Liquid Glass transparency, Stage Manager, Spaces, or a runaway app ask it to keep redrawing. Measure % CPU and GPU History in Activity Monitor first, quit apps one at a time to isolate the driver, and never force-quit WindowServer itself.',
    published: '2026-11-19',
    updated: '2026-11-21',
    sections: [
      {
        id: 'what-is-windowserver',
        title: 'What WindowServer is (and when high CPU is normal)',
        paragraphs: [
          'Every app draws its own windows, and WindowServer stacks them into the single image your display shows. Howard Oakley of The Eclectic Light Company describes it as the master compositor: it starts at the login window and runs until shutdown as the _windowserver system user alongside distnoted. It also manages Spaces, window tabs, multiple displays, screenshots, and routing clicks and keystrokes to the right app. It is a core macOS process, never a virus.',
          'Activity Monitor reports CPU per core, so 120% to 150% means roughly one to one and a half cores out of the 8 to 16 cores on most Apple silicon Macs. Brief spikes past 100% are normal while dragging windows across displays, connecting monitors, sharing your screen, scrolling heavy web pages, or opening Mission Control. It becomes a problem when usage stays elevated at idle alongside lag, loud fans, or fast battery drain. Never force-quit WindowServer—doing so logs you out or freezes macOS and discards unsaved work.',
        ],
        items: [
          'Core macOS compositor owned by _windowserver (runs alongside distnoted).',
          'Short spikes past 100% during window drags, screen sharing, or display switches are normal.',
          'CPU % in Activity Monitor is per core (150% = ~1.5 cores active).',
          'Adobe users on macOS 26 Tahoe and macOS 27 Golden Gate have also reported heavy WindowServer GPU load with Photoshop/Illustrator on 4K external displays.',
        ],
      },
      {
        id: 'measure-first',
        title: '1. Measure WindowServer CPU and GPU History before changing anything',
        paragraphs: [
          'Write down your baseline first. Every fix below is a controlled test: change one setting, wait 30 seconds, and keep the change only when both Activity Monitor’s number and the lag actually improve.',
        ],
        items: [
          'Open Activity Monitor from Applications → Utilities.',
          'Click the CPU tab and type WindowServer in the search bar.',
          'Note its % CPU with your usual apps open and the Mac idle for one minute.',
          'Open Window → GPU History to see how hard the GPU side is working.',
        ],
      },
      {
        id: 'find-the-driver-app',
        title: '2. Find the app making WindowServer work overtime',
        paragraphs: [
          'WindowServer’s load almost always belongs to another open app. Quit apps one at a time while watching Activity Monitor: when WindowServer drops sharply after quitting one app, you have found the driver—update that app, check its hardware-acceleration setting, or close it when idle.',
        ],
        items: [
          'Browsers with dozens of open tabs (Chrome and Safari alike), especially video, animated ads, or WebGL canvases.',
          'Electron desktop apps such as Slack, Discord, Microsoft Teams, and code editors.',
          'Screen capture and sharing apps: Zoom, Teams, OBS, Loom, screenshot tools, and anything holding Screen Recording permission.',
          'Creative apps with GPU-heavy canvases (Photoshop, Illustrator, video editors).',
          'Menu-bar utilities with animated icons or rapidly polling live graphs.',
        ],
        links: [
          {
            label: 'Why Google Chrome uses so much memory and CPU on Mac',
            href: '/blog/chrome-using-too-much-memory-mac',
          },
        ],
      },
      {
        id: 'reduce-drawing-work',
        title: '3. Reduce what WindowServer has to draw (Fixes 1–4)',
        paragraphs: [
          'Even minimized windows, cluttered Desktop icons, Liquid Glass blur effects, Stage Manager groups, and extra Spaces still cost WindowServer CPU and memory to manage. Work through these four display-compositing trims:',
        ],
        items: [
          'Fix 1 — Close unused windows, tabs, and Desktop clutter: Oakley notes hidden/minimized windows are not free, and macOS tracks every loose Desktop icon as a window object.',
          'Fix 2 — Turn on Reduce transparency: open System Settings → Accessibility → Display and enable Reduce transparency. On macOS 26 Tahoe and macOS 27 Golden Gate, Liquid Glass adds extra blur layers, so this toggle cuts real compositing load.',
          'Fix 3 — Turn off Stage Manager and trim unused Spaces: Stage Manager can substantially raise WindowServer CPU and memory. Switch it off in Control Center or System Settings → Desktop & Dock, and remove unused desktops in Mission Control.',
          'Fix 4 — Switch off animated wallpapers and enable Reduce motion: replace dynamic/aerial wallpapers with a static image for a day and toggle on Reduce motion under Accessibility → Display (or Motion).',
        ],
        links: [
          {
            label: 'Change where macOS saves screenshots so your Desktop stays clutter-free',
            href: '/change-screenshot-location-mac',
          },
        ],
      },
      {
        id: 'check-external-displays',
        title: '4. Check external monitors, scaling, refresh rate, and Adobe 4K bugs (Fixes 5–8)',
        paragraphs: [
          'External 4K and 5K displays are among the single biggest WindowServer loads because each screen requires its own composited framebuffer, and non-native scaled resolutions force macOS to render an oversized image and downscale every frame.',
          'Known Adobe issue: since macOS 26, Photoshop and Illustrator users on 4K/5K external monitors have reported extreme WindowServer GPU load even with no document open—tracked across Adobe’s community bug threads into macOS 27 Golden Gate (with Illustrator beta fixes rolling out). Keep Adobe apps updated before tearing apart macOS display settings.',
        ],
        items: [
          'Fix 5 — Test by disconnecting one external display: if WindowServer drops immediately in Activity Monitor, the monitor setup is the primary cost.',
          'Fix 6 — Switch to Default for display or native resolution: in System Settings → Displays, avoid non-integer “Looks like” scaling modes and compare.',
          'Fix 7 — Lower refresh rate to 60 Hz: on 120 Hz+ external displays, testing 60 Hz halves the compositing frame rate.',
          'Fix 8 — Test turning off “Displays have separate Spaces”: under System Settings → Desktop & Dock → Mission Control (requires logging out and back in; only keep it off if you do not rely on per-display Spaces).',
        ],
      },
      {
        id: 'update-and-restart',
        title: '5. Install macOS and app updates, then restart (Fix 9)',
        paragraphs: [
          'Graphics and compositing regressions are regularly patched in macOS point updates. Check System Settings → General → Software Update and update the heavy apps you isolated in Step 2, then reboot. WindowServer’s memory footprint creeps up over long uptimes without restarts; if the spike only appears after days of uptime, restarting clears the leak.',
        ],
        links: [
          {
            label: 'Mac slow after a macOS update? What settles on its own vs what to fix',
            href: '/mac-slow-after-macos-update',
          },
          {
            label: 'Mac background processes explained (distnoted, kernel_task, dasd & more)',
            href: '/mac-processes-explained',
          },
        ],
      },
      {
        id: 'windowserver-memory-and-crashes',
        title: 'WindowServer high memory, crashes, and checking with ClearDisk',
        paragraphs: [
          'High WindowServer RAM follows the same triggers as CPU—every window, tab, Space, Stage Manager group, and external monitor consumes unified memory on Apple silicon, which can push an 8 GB Mac straight into swap. If WindowServer itself crashes, the screen freezes and clicks stop responding; on modern macOS, Oakley notes that typically leads to a kernel panic or requires a forced shutdown. Repeated crashes point to a dock, cable, display adapter, or graphics driver—test with all external displays unplugged, try Safe Mode, and submit Console crash reports via Feedback Assistant.',
          'Because WindowServer is a symptom, spotting which app is driving it is what saves time. ClearDisk’s Why Slow view surfaces live CPU load, memory pressure, and your 5 heaviest apps in one place alongside a menu-bar monitor so you can watch metrics while testing fixes. Viewing is free; quitting apps inside ClearDisk is part of the $10 one-time license and always asks before acting.',
        ],
        links: [
          {
            label: 'Understand Mac swap memory and Memory Pressure in Activity Monitor',
            href: '/mac-swap-memory',
          },
          {
            label: 'Fix “Your system has run out of application memory” on Mac',
            href: '/mac-out-of-application-memory',
          },
          {
            label: 'kernel_task high CPU on Mac: causes and fixes',
            href: '/blog/kernel-task-high-cpu-mac',
          },
          {
            label: 'See ClearDisk’s Why Slow CPU & memory menu-bar monitor',
            href: '/features',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'What is WindowServer on my Mac?',
        a: 'WindowServer is the essential core macOS compositor process that combines every open app’s windows into the image shown on your display, manages Spaces and external monitors, and routes clicks and keystrokes to the right app.',
      },
      {
        q: 'Is it safe to force quit WindowServer?',
        a: 'No. Force-quitting WindowServer immediately logs you out or freezes your Mac, causing you to lose unsaved work, and the process restarts with the same load. Find and quit the app driving it instead.',
      },
      {
        q: 'Why is WindowServer using so much CPU?',
        a: 'Something on your Mac is asking it to redraw continuously: dozens of browser tabs, external 4K/5K or scaled displays, Liquid Glass transparency, Stage Manager, extra Spaces, screen sharing, or a GPU-heavy app. Quit apps one at a time in Activity Monitor to isolate which one.',
      },
      {
        q: 'Does an external monitor make WindowServer use more CPU?',
        a: 'Yes. Every external display needs its own composited framebuffer, and 4K or 5K monitors running non-native scaled resolutions or high refresh rates multiply the work. Unplugging the monitor for 30 seconds is the fastest way to test it.',
      },
      {
        q: 'Is WindowServer worse on macOS Tahoe and macOS 27?',
        a: 'Many Mac users noticed higher WindowServer CPU and GPU load after upgrading to macOS 26 Tahoe and macOS 27 because the Liquid Glass interface adds heavier transparency and blur effects. Turning on Reduce transparency and installing the latest macOS updates are the best first fixes.',
      },
      {
        q: 'What is a normal WindowServer CPU percentage?',
        a: 'There is no single fixed number because it depends on your displays, resolution scaling, and open windows. Measure WindowServer at idle with your normal setup in Activity Monitor, then compare after each fix—short spikes while moving windows or switching Spaces are expected.',
      },
    ],
    related: [
      'mac-processes-explained',
      'dasd-high-cpu-memory-mac',
      'mac-running-slow-low-storage',
      'mac-out-of-application-memory',
      'mac-swap-memory',
      'mds-stores-high-cpu-mac',
    ],
    sources: [
      {
        label: 'The Eclectic Light Company (Howard Oakley): Explainer — WindowServer',
        url: 'https://eclecticlight.co/2025/12/13/explainer-windowserver-2/',
      },
      {
        label: 'Apple Support: start up your Mac in safe mode (116946)',
        url: 'https://support.apple.com/en-us/116946',
      },
      {
        label: 'Apple Support: change Display settings for accessibility (Reduce transparency)',
        url: 'https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac',
      },
      {
        label: 'Adobe Community: macOS 26/27 Photoshop high WindowServer GPU usage on 4K displays',
        url: 'https://community.adobe.com/bug-reports-711/p-macos26-photoshop-v27-5-later-extremely-high-gpu-usage-from-the-windowserver-process-1558221/index3.html',
      },
      {
        label: 'Adobe Help: Configure GPU performance settings in Illustrator',
        url: 'https://helpx.adobe.com/illustrator/kb/gpu-performance-preview-improvements.html',
      },
      {
        label: 'Mole: WindowServer high CPU troubleshooting guide',
        url: 'https://mole.fit/blog/windowserver-high-cpu-mac',
      },
    ],
  },
  {
    slug: 'clear-outlook-cache-mac',
    title: 'How to Clear Outlook Cache on Mac (Reset or Free Space)',
    h1: 'How to clear Outlook cache on Mac (New Outlook, Legacy Outlook, and System Data)',
    description:
      'Clear Outlook cache on Mac to fix sync or free System Data: Reset Account in New Outlook, Empty Cache in Legacy, or clean Outlook 15 Profiles safely.',
    summary:
      'To clear Outlook cache on Mac safely, use Outlook’s built-in Reset Account option (Tools → Accounts → Manage → Reset Account) in New Outlook, or right-click a folder → Properties → Empty Cache in Legacy Outlook. If Outlook is bloating System Data by tens of gigabytes, quit Outlook completely and inspect ~/Library/Group Containers/UBF8T346G9.Office/Outlook before removing rebuildable cache files—never delete Outlook.sqlite without backing up local “On My Computer” mail.',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      {
        id: 'why-outlook-bloats-system-data',
        title: 'Why Outlook for Mac bloats System Data (and which method to pick)',
        paragraphs: [
          'Microsoft Outlook does not store its cached mail and attachments inside Apple Mail’s folder. Instead, Outlook writes its profile database and local caches inside ~/Library/Group Containers/UBF8T346G9.Office/Outlook and ~/Library/Caches/com.microsoft.Outlook—locations macOS counts under System Data rather than Mail.',
          'Pick the method below that matches your goal: Method 1 or Method 2 for broken sync, missing emails, or stale autocomplete in a cloud mailbox (Exchange, Microsoft 365, Gmail, IMAP), and Method 3/4 when Outlook is consuming 10 GB to 50 GB+ of disk space.',
        ],
        items: [
          'New Outlook for Mac (sync or search issues): use Method 1 (Reset Account).',
          'Legacy Outlook for Mac (one folder out of sync): use Method 2 (Empty Cache on that folder).',
          'Huge System Data footprint on SSD: measure with Method 3, then clean cache files safely in Method 4.',
        ],
        links: [
          {
            label: 'Apple Mail taking up space instead? How to shrink Mail storage on Mac',
            href: '/mail-taking-up-space-on-mac',
          },
          {
            label: 'Clear Microsoft Teams cache on Mac as well',
            href: '/clear-teams-cache-mac',
          },
        ],
      },
      {
        id: 'new-outlook-reset-account',
        title: '1. Reset the account in New Outlook for Mac (Microsoft’s official method)',
        paragraphs: [
          'In the current “New Outlook” for Mac, Microsoft replaced per-folder Empty Cache with Reset Account. Resetting discards local cached copies of your cloud mailbox and re-downloads fresh headers and messages from your server without deleting anything stored on Exchange, Microsoft 365, or Gmail.',
        ],
        items: [
          'Open Microsoft Outlook on your Mac and make sure you have a working internet connection.',
          'In the top menu bar, click Tools → Accounts (or open Outlook → Settings → Accounts).',
          'Select the affected email account in the left sidebar.',
          'Click the Manage button (or the three dots ••• at the bottom of the pane) and choose Reset Account.',
          'Quit and reopen Outlook, then give it time to re-sync your mailbox.',
        ],
      },
      {
        id: 'legacy-outlook-empty-cache',
        title: '2. Empty cache for one folder in Legacy Outlook for Mac',
        paragraphs: [
          'If you still run Legacy Outlook and a single folder—such as Inbox, Sent, or Calendar—stopped syncing with an Exchange or Microsoft 365 server, you can empty just that folder’s cache without re-downloading your entire account.',
        ],
        items: [
          'Confirm your Mac is online and connected to your Exchange/Microsoft 365 server.',
          'In Outlook’s left navigation pane, Control-click (right-click) the specific folder you want to reset.',
          'Choose Properties from the shortcut menu.',
          'On the General tab, click Empty Cache, then let Outlook re-download that folder from the server.',
        ],
      },
      {
        id: 'measure-outlook-storage',
        title: '3. Measure how much Mac storage Outlook is actually using',
        paragraphs: [
          'Before touching files in ~/Library, measure Outlook’s Group Container and Caches folders with this read-only Terminal command—or run a free ClearDisk scan to compare Outlook against Xcode, Teams, and the rest of System Data side by side.',
        ],
        code: [
          'du -sh "$HOME/Library/Group Containers/UBF8T346G9.Office/Outlook" "$HOME/Library/Caches/com.microsoft.Outlook" 2>/dev/null',
        ],
      },
      {
        id: 'manual-cache-cleanup',
        title: '4. Manually clear Outlook cache files in Finder (with data-loss safeguards)',
        paragraphs: [
          'If Outlook’s cache directory is bloated or resetting inside the app fails, quit Outlook completely (Command + Q) before touching any file inside ~/Library. Always check whether you store local-only mail under “On My Computer” before clearing profile folders—local-only folders do not live on a mail server and must be exported (.olm) or backed up with Time Machine first.',
        ],
        code: [
          '~/Library/Caches/com.microsoft.Outlook',
          '~/Library/Group Containers/UBF8T346G9.Office/Outlook/Outlook 15 Profiles/Main Profile/Data',
        ],
        items: [
          'Quit Outlook completely with Command + Q (verify no dot sits under Outlook in the Dock).',
          'In Finder, press Shift + Command + G, paste ~/Library/Caches/com.microsoft.Outlook, and move its cached contents to Trash—these are rebuildable app caches.',
          'If your profile itself is tens of gigabytes, open ~/Library/Group Containers/UBF8T346G9.Office/Outlook/Outlook 15 Profiles/Main Profile/Data via Shift + Command + G and inspect cache/attachment subdirectories (such as Recent Addresses or cached message attachments).',
          'Caution: do not delete Outlook.sqlite or the entire Main Profile folder unless you have verified every mailbox is synced to the cloud and backed up any local “On My Computer” folders.',
          'Empty the Trash only after reopening Outlook and confirming your mail, calendar, and contacts load cleanly.',
        ],
        links: [
          {
            label: 'How to clear System Data on Mac safely step by step',
            href: '/clear-system-data-on-mac',
          },
          {
            label: 'How to clear app and browser caches on Mac safely',
            href: '/clear-cache-on-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Will clearing the Outlook cache on Mac delete my emails?',
        a: 'No, not for cloud-synced accounts like Microsoft 365, Exchange, Outlook.com, or Gmail—Outlook simply re-downloads messages from the server. However, locally stored “On My Computer” folders are not on a server, so never delete your main Outlook profile without backing them up first.',
      },
      {
        q: 'Where is the Outlook cache stored on a Mac?',
        a: 'Outlook keeps rebuildable app caches in ~/Library/Caches/com.microsoft.Outlook and stores its main profile and cached mailbox data inside ~/Library/Group Containers/UBF8T346G9.Office/Outlook/Outlook 15 Profiles.',
      },
      {
        q: 'Why is the Empty Cache button missing in Outlook for Mac?',
        a: 'Microsoft removed the per-folder Empty Cache button in the New Outlook for Mac. Instead, open Tools, Accounts, select your email account, click Manage (or the three dots), and choose Reset Account.',
      },
      {
        q: 'Why is Outlook taking up so much System Data on my Mac?',
        a: 'macOS counts files inside ~/Library/Group Containers and ~/Library/Caches under System Data rather than Mail. Years of cached attachments and multiple Outlook profiles can easily add 10 GB to 50 GB to System Data.',
      },
      {
        q: 'Is it safe to delete Outlook.sqlite on Mac?',
        a: 'Only delete Outlook.sqlite if you intend to wipe and rebuild your entire Outlook profile from scratch and have already backed up any local “On My Computer” messages or calendars. For routine sync fixes, use Reset Account first.',
      },
      {
        q: 'How do I clear cached autocomplete email addresses in Outlook for Mac?',
        a: 'When composing a new email, type the name to reveal the suggestion list and click the X beside an outdated address, or use Reset Account in New Outlook if stale directory entries persist.',
      },
    ],
    related: [
      'mail-taking-up-space-on-mac',
      'clear-teams-cache-mac',
      'clear-system-data-on-mac',
      'clear-cache-on-mac',
      'library-caches-folder-mac',
    ],
    sources: [
      {
        label: 'Microsoft Support: clear the cache in Outlook for Mac (Empty Cache & Reset Account)',
        url: 'https://support.microsoft.com/en-us/office/clear-the-cache-in-outlook-for-mac-6f230dfa-7f12-4606-bb1a-55ee19087033',
      },
      {
        label: 'Microsoft Support: manage profiles or identities in Outlook for Mac',
        url: 'https://support.microsoft.com/en-us/office/manage-profiles-or-identities-in-outlook-for-mac-fed2a955-74df-4a24-bef6-78a426958c4c',
      },
      {
        label: 'Apple Support: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'mac-processes-explained',
    title: 'Mac Background Processes Explained (Activity Monitor Guide)',
    h1: 'Mac background processes explained: what’s safe in Activity Monitor',
    description:
      'What kernel_task, WindowServer, mds_stores, distnoted, coresymbolicationd, dyld, bird, dasd, photoanalysisd and other Mac processes do, and when to worry.',
    summary:
      'Most unfamiliar names in Activity Monitor are core macOS services doing normal work: kernel_task manages heat, WindowServer draws your display, mds_stores runs Spotlight, bird syncs iCloud Drive, distnoted routes notifications, and dasd schedules background tasks. Investigate a process only when it stays above 50% CPU for hours, returns after restart, or runs outside /System/ and /usr/.',
    published: '2026-11-21',
    updated: '2026-11-21',
    sections: [
      {
        id: 'how-to-check-a-process',
        title: 'Key takeaways and how to check what any process is',
        paragraphs: [
          'Before assuming an unfamiliar process is malware or forcing it to quit, inspect who owns it and where its executable lives. A path starting with /System/, /usr/libexec/, or /usr/sbin/ belongs to macOS; a path inside ~/Library/ or /Library/ belongs to third-party software you installed.',
          'Never force-quit system processes owned by root or system accounts like _windowserver or _spotlight: most relaunch immediately, and killing WindowServer logs you out or freezes the Mac. To stop a third-party app helper you recognize, select it in Activity Monitor, click the Stop (X) button, and choose Quit before Force Quit.',
        ],
        items: [
          'Open Activity Monitor (Applications → Utilities), select the process, and click the info (i) button.',
          'Check Parent Process and User (root, _windowserver, _spotlight, or _distnote indicate macOS services).',
          'Open the Open Files and Ports tab to verify the binary path (/System/ or /usr/ vs ~/Library/ or /tmp).',
          'Spikes for 24–48 hours after a macOS update are normal as Spotlight, Photos, shared caches, and iCloud catch up.',
          'Never delete system caches manually to quiet a process; booting into Safe Mode once clears them the supported way.',
        ],
        links: [
          {
            label: 'Where third-party login items and launch agents live on Mac',
            href: '/remove-background-items-mac',
          },
        ],
      },
      {
        id: 'quick-reference',
        title: 'Quick reference: 17 common Mac processes in Activity Monitor',
        paragraphs: [
          'Use this quick index to tell normal background work apart from a genuine runaway process:',
        ],
        items: [
          'kernel_task — macOS kernel & CPU thermal throttling (normal when warm/charging; investigate if high while cool).',
          'WindowServer — composites every window on screen (normal during window drags/external displays; investigate if high at idle).',
          'mds, mds_stores, mdworker — Spotlight indexing (normal after updates/large copies; investigate if high for days).',
          'corespotlightd — in-app Spotlight index for Mail and Messages (normal after large syncs; investigate if constantly pegged).',
          'distnoted — distributed system notification server (normal briefly; investigate if one copy stays stuck high for hours).',
          'coresymbolicationd — symbol cache for crash reports & debugging (normal during Xcode/crashes; investigate if cache grows to gigabytes).',
          'dyld / update_dyld_shared_cache — dynamic linker & shared library cache builder (normal right after macOS/Xcode updates).',
          'dasd — Duet Activity Scheduler Daemon for deferred tasks (normal at ~0% CPU / ~40 MB RAM; investigate if leaking 10–70 GB RAM on macOS 27).',
          'bird, cloudd, fileproviderd — iCloud Drive and cloud file sync (normal while uploading/downloading; investigate if stuck for days).',
          'photoanalysisd, mediaanalysisd — Photos face, object, and OCR analysis (normal after big photo imports; runs when idle on power).',
          'backupd — Time Machine backup engine (normal during active backups; investigate if backups never finish).',
          'softwareupdated — checks and downloads macOS updates (normal during downloads; investigate if stuck for hours).',
          'trustd, syspolicyd — certificate and Gatekeeper signature checks (normal when browsing or launching newly downloaded apps).',
          'nsurlsessiond — background downloads for iCloud, App Store, and apps (investigate if consuming data with nothing syncing).',
          'oahd — Rosetta 2 translation service for Intel apps (normal on first launch of an Intel app).',
          'logd — unified macOS system logger (investigate if a noisy app causes logs to bloat disk space).',
          'ReportCrash — writes crash logs (normal right after a crash; if constant, an app is crash-looping).',
        ],
      },
      {
        id: 'top-slowdown-processes',
        title: 'The processes behind most “why is my Mac slow” searches',
        paragraphs: [
          'kernel_task is the macOS kernel itself; Apple’s support documentation explains that one of its visible jobs is managing CPU temperature by making CPU time less available to hot, intense apps until the Mac cools down. Give the Mac airflow, close the real heavy app, and avoid charging on soft surfaces.',
          'WindowServer draws every window, Space, transparent layer, and external monitor onto your screen—never force-quit it. mds, mds_stores, mdworker, and corespotlightd power Spotlight; Howard Oakley notes modern Spotlight also runs OCR on images and PDFs plus photo classification, which takes far longer than plain text after updates.',
          'On macOS 27 Golden Gate, users have also encountered a runaway dasd (Duet Activity Scheduler Daemon) memory leak and 90–100% CPU loop—covered in our dedicated dasd guide linked below.',
        ],
        links: [
          {
            label: 'kernel_task high CPU on Mac: causes and fixes',
            href: '/blog/kernel-task-high-cpu-mac',
          },
          {
            label: 'WindowServer high CPU on Mac: what it means and 9 fixes',
            href: '/windowserver-high-cpu-mac',
          },
          {
            label: 'mds_stores high CPU on Mac & how to reindex Spotlight safely',
            href: '/mds-stores-high-cpu-mac',
          },
          {
            label: 'How to reindex Spotlight on Mac (and when you shouldn’t)',
            href: '/reindex-spotlight-mac',
          },
          {
            label: 'dasd high CPU and memory leak on macOS 27: how to fix it',
            href: '/dasd-high-cpu-memory-mac',
          },
        ],
      },
      {
        id: 'processes-looked-up-by-name',
        title: 'Processes people look up by name: distnoted, coresymbolicationd, dyld, bird, oahd, logd',
        paragraphs: [
          'distnoted is macOS’s distributed notification server, broadcasting small system events (“network changed,” “file saved”) between apps—you will normally see multiple copies (for each user, root, and _windowserver alongside WindowServer). If one copy spikes, check its User column and quit recently opened apps one at a time, or restart.',
          'coresymbolicationd manages the OS library symbol cache at /System/Library/Caches/com.apple.coresymbolicationd/ so crash logs show readable function names. Usually a few hundred MB, it has been reported growing to 7 GB or even 33 GB on Macs with repeated crashes or heavy Xcode use. Do not delete that system folder manually—boot into Safe Mode once to clear system caches cleanly, and check Console → Crash Reports if it fills back up.',
          'dyld is the dynamic linker; its helpers update_dyld_shared_cache and update_dyld_sim_shared_cache spike briefly after macOS or Xcode/simulator updates. Removing old iOS simulator runtimes cuts both simulator-cache churn and tens of gigabytes of disk space. Elsewhere in Activity Monitor: bird/cloudd/fileproviderd sync iCloud Drive, photoanalysisd/mediaanalysisd index Photos when idle on power, oahd translates Intel apps via Rosetta 2, and logd writes unified system logs.',
        ],
        links: [
          {
            label: 'Remove unused iOS simulators to stop update_dyld_sim_shared_cache churn',
            href: '/remove-unused-ios-simulators',
          },
          {
            label: 'com.apple.bird taking up space & iCloud Drive stuck uploading',
            href: '/com-apple-bird-taking-space',
          },
          {
            label: 'Find Intel apps on Mac (what triggers oahd / Rosetta 2)',
            href: '/find-intel-apps-on-mac',
          },
          {
            label: 'Inspect Mac log files when logd grows large',
            href: '/mac-log-files',
          },
        ],
      },
      {
        id: 'suspicious-sounding-safe-processes',
        title: 'Processes that sound suspicious—and when to actually worry',
        paragraphs: [
          'Several normal macOS daemons have alarming names: trustd verifies TLS/app certificates, syspolicyd runs Gatekeeper checks on newly opened apps, nsurlsessiond manages background system/iCloud downloads, rapportd and sharingd power AirDrop/Handoff/Universal Clipboard, and launchd (PID 1) launches every other process—never quit launchd. All of them run from /System/ or /usr/.',
          'Watch for four warning signs instead: a process stays above 50% CPU for hours at idle, returns immediately after restarting, runs from ~/Library, /tmp, or an unrecognized directory, or uses a misspelled near-miss of a real macOS process name. Restart first, install macOS and app updates, test in Safe Mode to isolate login items, and uninstall any unwanted third-party software cleanly.',
          'If Activity Monitor’s hundreds of rows feel overwhelming, ClearDisk’s free Why Slow view trims the noise down to live CPU load, memory pressure, and your 5 heaviest apps with a menu-bar monitor (quitting apps from ClearDisk uses the $10 license and always prompts to confirm).',
        ],
        links: [
          {
            label: 'Why is my Mac running slow? Full CPU, memory & storage checklist',
            href: '/mac-running-slow-low-storage',
          },
          {
            label: 'How to uninstall unwanted Mac apps and their leftovers completely',
            href: '/uninstall-apps-on-mac',
          },
          {
            label: 'Photos library taking up space while photoanalysisd runs',
            href: '/photos-library-taking-up-space-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to quit background processes on a Mac?',
        a: 'Quitting third-party app helpers you recognize is safe, though you should fix the parent app if it keeps respawning. Never force-quit macOS system processes owned by root or system accounts like _windowserver, since most relaunch immediately and some log you out or freeze the Mac.',
      },
      {
        q: 'How do I know if a Mac process is a virus?',
        a: 'Select the process in Activity Monitor, click the info button, and inspect Open Files and Ports. Legitimate macOS system processes run from /System/ or /usr/, whereas an unrecognized binary running from ~/Library, /tmp, or an odd folder with a misspelled name deserves investigation.',
      },
      {
        q: 'What is distnoted and why is it using CPU?',
        a: 'distnoted is macOS’s distributed notification server that relays small events between apps and system services. High CPU on one copy usually means an app is flooding it with notifications—quit recently opened apps one at a time or restart your Mac.',
      },
      {
        q: 'Can I delete the coresymbolicationd cache on Mac?',
        a: 'It is a rebuildable system cache, but do not delete /System/Library/Caches/com.apple.coresymbolicationd/ by hand. Start up in Safe Mode once and restart normally to clear system caches the supported way, then check Console Crash Reports if it grows back fast.',
      },
      {
        q: 'Why do background processes use more CPU after a macOS update?',
        a: 'Right after a macOS update, Spotlight reindexes files, Photos reanalyzes faces and text, dyld rebuilds shared library caches, and iCloud catches up. Leaving your Mac awake, plugged into power, and on Wi-Fi lets it settle within a day or two.',
      },
      {
        q: 'What does kernel_task do on a Mac?',
        a: 'Among its core operating-system jobs, kernel_task helps regulate CPU temperature by limiting how much CPU busy apps can claim when the chip gets warm. High kernel_task usage usually reflects heat and backs off once the Mac cools down.',
      },
    ],
    related: [
      'windowserver-high-cpu-mac',
      'dasd-high-cpu-memory-mac',
      'mds-stores-high-cpu-mac',
      'mac-running-slow-low-storage',
      'remove-background-items-mac',
      'reindex-spotlight-mac',
    ],
    sources: [
      {
        label: 'Apple Support: if kernel_task is using a large percentage of your Mac CPU (102172)',
        url: 'https://support.apple.com/en-nz/102172',
      },
      {
        label: 'Apple Platform Support: check app installation and processes on Mac',
        url: 'https://support.apple.com/guide/platform-support/check-app-installation-and-processes-on-mac-supd2dffe733/web',
      },
      {
        label: 'The Eclectic Light Company (Howard Oakley): when and how to rebuild Spotlight indexes',
        url: 'https://eclecticlight.co/2024/11/19/when-and-how-to-rebuild-spotlight-indexes/',
      },
      {
        label: 'The Eclectic Light Company (Howard Oakley): Explainer — WindowServer',
        url: 'https://eclecticlight.co/2025/12/13/explainer-windowserver-2/',
      },
      {
        label: 'Apple Discussions: com.apple.coresymbolicationd cache growing to 7 GB',
        url: 'https://discussions.apple.com/thread/7175297',
      },
      {
        label: 'MacRumors Forums: coresymbolicationd cache reaching 33 GB and safe-mode cleanup',
        url: 'https://forums.macrumors.com/threads/is-it-safe-to-delete-the-com-apple-coresymbolicationd-folder-from-system-cache-mine-is-33gb.2156172',
      },
    ],
  },
  {
    slug: 'dasd-high-cpu-memory-mac',
    title: 'dasd High CPU and Memory Leak on Mac (macOS 27 Fix)',
    h1: 'dasd high CPU and memory leak on Mac: what it is and how to fix it',
    description:
      'Fix dasd high CPU and 20–70 GB memory leaks on macOS 27 Golden Gate: inspect Activity Monitor, update macOS, test Safe Mode, and check PowerLog safely.',
    summary:
      'dasd (Duet Activity Scheduler Daemon, /usr/libexec/dasd) is Apple’s core macOS background-task scheduler—normally quiet at near 0% CPU and ~40 MB of RAM. On macOS 27 Golden Gate, a widely reported bug can trap dasd in an endless task-scoring loop, driving 90–100% CPU and leaking 20–70 GB of RAM into swap. Confirm it in Activity Monitor, update macOS, test Safe Mode, and only inspect/reset the corrupted PowerLog database with a full Time Machine backup first.',
    published: '2026-11-21',
    updated: '2026-11-21',
    sections: [
      {
        id: 'what-is-dasd',
        title: 'What dasd is (and why it leaks memory on macOS 27)',
        paragraphs: [
          'dasd stands for Duet Activity Scheduler Daemon, running from /usr/libexec/dasd as root (verified read-only on macOS 27.0.1, where idle usage sits near 0.0% CPU and ~40 MB of RAM). Apps and macOS services register deferred work—such as cloud sync, Spotlight maintenance, analytics, and backups—through Apple’s NSBackgroundActivityScheduler / DAS-CTS framework, and dasd decides when those tasks should run based on power, thermals, and user activity.',
          'Following macOS 27 Golden Gate releases, users reported a severe regression where dasd locks a core at 90% to 100% CPU and balloons from tens of megabytes to 20–70 GB of memory, filling SSD swap and triggering “Your system has run out of application memory” alerts. Diagnostics traced repeated loops to a stuck or corrupted PerfPowerTelemetry background-processing SQLite database under /private/var/db/powerlog/.',
        ],
      },
      {
        id: 'confirm-dasd',
        title: '1. Confirm dasd is the real culprit in Activity Monitor',
        paragraphs: [
          'Before changing system settings, verify whether dasd is genuinely leaking RAM or pegging CPU—and confirm it is Apple’s legitimate /usr/libexec/dasd binary rather than a lookalike.',
        ],
        code: ['ps -eo pid,user,pcpu,rss,comm | grep "[/]usr/libexec/dasd"'],
        items: [
          'Open Activity Monitor (Applications → Utilities), select the Memory tab, and search for dasd (normal idle is roughly 20–80 MB; multi-gigabyte growth confirms a leak).',
          'Switch to the CPU tab and check whether dasd sits pinned near 90–100% while the Mac is idle.',
          'Click the info (i) button → Open Files and Ports to verify the binary path is /usr/libexec/dasd owned by root.',
          'Check Swap Used and Memory Pressure at the bottom of the Memory tab.',
        ],
        links: [
          {
            label: 'Fix “Your system has run out of application memory” on Mac',
            href: '/mac-out-of-application-memory',
          },
          {
            label: 'Understand Mac swap memory and yellow/red Memory Pressure',
            href: '/mac-swap-memory',
          },
        ],
      },
      {
        id: 'update-and-restart',
        title: '2. Restart and install the latest macOS 27 point update first',
        paragraphs: [
          'First, save your work and restart your Mac normally. On an isolated scheduling glitch, a reboot resets dasd back to ~40 MB immediately. Next, open System Settings → General → Software Update and install any available macOS 27 point release (such as 27.1 or 27.2.x)—Apple frequently ships silent fixes for early background-scheduler regressions in point updates.',
        ],
      },
      {
        id: 'safe-mode-and-free-space',
        title: '3. Test in Safe Mode and ensure 15–20% free SSD space',
        paragraphs: [
          'If dasd spikes again right after rebooting, boot once into Safe Mode (on Apple silicon: shut down, hold the power button until Loading startup options appears, select your startup volume, hold Shift, and click Continue in Safe Mode). Safe Mode clears system caches and pauses third-party launch agents so you can tell whether a misbehaving third-party background agent is flooding dasd.',
          'Also check System Settings → General → Storage: when a leaking process pushes macOS into swap on a nearly full drive, low free SSD space amplifies the freeze. Keep at least 15–20% free working space while troubleshooting.',
        ],
        links: [
          {
            label: 'Mac storage full? What to clear safely first',
            href: '/mac-storage-full',
          },
          {
            label: 'Remove suspicious or noisy third-party background items on Mac',
            href: '/remove-background-items-mac',
          },
        ],
      },
      {
        id: 'inspect-powerlog-db',
        title: '4. Inspect the PerfPowerTelemetry database (read-only check first)',
        paragraphs: [
          'If dasd still hits 90–100% CPU or multi-gigabyte memory immediately after updating and testing Safe Mode, check whether the reported PerfPowerTelemetry background-processing database exists and is unusually large on your Mac. Start with a read-only check—this deletes nothing.',
        ],
        code: [
          'ls -lh /private/var/db/powerlog/Library/PerfPowerTelemetry/BackgroundProcessing/ 2>&1',
        ],
      },
      {
        id: 'reset-corrupted-bgsql-carefully',
        title: '5. Last resort: back up before resetting a corrupted BGSQL file',
        paragraphs: [
          'Take a complete Time Machine backup before touching anything inside /private/var/db/powerlog/, and do not run system-directory edits on an IT-managed work Mac without admin approval. Community workarounds for a confirmed macOS 27 dasd telemetry loop back up and remove only the specific CurrentBackgroundProcessingDB.BGSQL* files (rather than wiping all of /private/var/db/powerlog blindly), then reboot immediately so macOS creates a fresh database.',
          'After rebooting, verify dasd returns to near 0% CPU and ~40 MB RAM in Activity Monitor (or keep ClearDisk’s free Why Slow menu-bar monitor open to catch any recurrence early). If the leak returns even on a fresh database, file a sysdiagnose through Apple’s Feedback Assistant so Apple can patch the underlying daemon bug.',
        ],
        code: [
          'sudo mkdir -p ~/Desktop/PowerLog-Backup',
          'sudo cp -p /private/var/db/powerlog/Library/PerfPowerTelemetry/BackgroundProcessing/CurrentBackgroundProcessingDB.BGSQL* ~/Desktop/PowerLog-Backup/',
          'sudo rm /private/var/db/powerlog/Library/PerfPowerTelemetry/BackgroundProcessing/CurrentBackgroundProcessingDB.BGSQL*',
        ],
        links: [
          {
            label: 'Mac background processes explained (full Activity Monitor guide)',
            href: '/mac-processes-explained',
          },
          {
            label: 'See ClearDisk’s Why Slow CPU & memory pressure menu-bar monitor',
            href: '/features',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'What is the dasd process on Mac?',
        a: 'dasd is Apple’s Duet Activity Scheduler Daemon (/usr/libexec/dasd), a built-in macOS background service owned by root that schedules deferred tasks like cloud sync, indexing, and maintenance based on battery, CPU load, and thermal conditions.',
      },
      {
        q: 'Is dasd malware or safe to force quit?',
        a: 'dasd is a legitimate macOS system daemon, not malware. Force-quitting it in Activity Monitor is only a temporary band-aid because launchd immediately relaunches it—if its scheduling database is stuck, the CPU and memory spike quickly returns.',
      },
      {
        q: 'Why is dasd using 20 GB to 70 GB of RAM on macOS 27?',
        a: 'Users on macOS 27 Golden Gate reported a regression where a corrupted PerfPowerTelemetry background-processing database traps dasd in an infinite task-scoring loop, leaking tens of gigabytes into RAM and SSD swap.',
      },
      {
        q: 'What is normal dasd CPU and memory usage on Mac?',
        a: 'On a healthy macOS 27 Mac at idle, /usr/libexec/dasd sits near 0% CPU and roughly 20 to 80 MB of memory. Sustained 90–100% CPU or multi-gigabyte memory growth indicates a stuck scheduling loop or memory leak.',
      },
      {
        q: 'Does Safe Mode fix dasd high CPU on Mac?',
        a: 'Safe Mode clears system caches and disables third-party login items so you can rule out third-party apps flooding the scheduler. If the underlying PowerLog telemetry database itself is corrupted, updating macOS or resetting that file after a backup may still be needed.',
      },
      {
        q: 'Should I delete the entire /private/var/db/powerlog folder?',
        a: 'No—avoid blindly wiping the entire /private/var/db/powerlog directory. Back up with Time Machine first, install the latest macOS point update, and if you use the terminal workaround, back up and remove only the specific CurrentBackgroundProcessingDB.BGSQL* files before rebooting.',
      },
    ],
    related: [
      'mac-processes-explained',
      'mac-out-of-application-memory',
      'mac-swap-memory',
      'windowserver-high-cpu-mac',
      'mac-slow-after-macos-update',
      'mac-running-slow-low-storage',
    ],
    sources: [
      {
        label: 'Apple Developer Documentation: NSBackgroundActivityScheduler',
        url: 'https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler',
      },
      {
        label: 'Apple Support: start up your Mac in safe mode (116946)',
        url: 'https://support.apple.com/en-us/116946',
      },
      {
        label: 'Apple Support: view memory usage in Activity Monitor on Mac',
        url: 'https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac',
      },
      {
        label: 'Apple Platform Support: check app installation and processes on Mac',
        url: 'https://support.apple.com/guide/platform-support/check-app-installation-and-processes-on-mac-supd2dffe733/web',
      },
    ],
  },
];
