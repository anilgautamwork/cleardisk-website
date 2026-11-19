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
    title: 'How to Reindex Spotlight on Mac (Settings or Terminal)',
    h1: 'How to reindex Spotlight on Mac using System Settings or Terminal (mdutil)',
    description:
      'Reindex Spotlight on Mac when search misses files or stalls: follow Apple’s Search Privacy steps or run sudo mdutil -E / in Terminal, plus check progress.',
    summary:
      'To reindex Spotlight on Mac, either add Macintosh HD to System Settings → Spotlight → Search Privacy, wait 30 seconds, and remove it (Apple’s recommended GUI method), or run sudo mdutil -E / in Terminal to erase and rebuild the startup volume’s index. Keep your Mac awake on power while mds_stores rebuilds the index.',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      {
        id: 'when-to-reindex',
        title: 'When you actually need to reindex Spotlight',
        paragraphs: [
          'Rebuilding the Spotlight index fixes search when Command + Space fails to find apps or files you know exist, Finder searches return blank results, Mail search misses recent messages, or System Settings Storage stays stuck on “Calculating…”.',
          'Do not delete the hidden .Spotlight-V100 folder by hand in Finder or Terminal. macOS protects that directory, and both supported methods below safely erase and recreate it without touching your files.',
        ],
        items: [
          'Command + Space cannot find installed apps in /Applications or recent documents.',
          'Finder search returns zero hits inside folders you know contain matching text.',
          'Spotlight indexing (mds_stores) has stayed stuck at high CPU for more than 24–48 hours after an update.',
          'An external drive never shows up in Spotlight or Finder search results.',
        ],
      },
      {
        id: 'system-settings-method',
        title: '1. Reindex Spotlight using System Settings (Apple’s GUI method)',
        paragraphs: [
          'Apple’s official method works on macOS Ventura, Sonoma, Sequoia, Tahoe, and macOS 27 Golden Gate without typing commands. Adding a volume to Search Privacy tells macOS to discard its current index; removing it immediately starts a clean rebuild.',
        ],
        items: [
          'Open Apple menu → System Settings.',
          'Scroll down and click Spotlight (labeled Siri & Spotlight on macOS 13–14).',
          'Scroll to the bottom and click Search Privacy (or Spotlight Privacy on older releases).',
          'Click the + button (or drag Macintosh HD from Finder into the list), select your startup disk or specific folder, and click Choose, then Done.',
          'Wait about 30 seconds so macOS clears the old index.',
          'Open Search Privacy again, select the drive you just added, click the − (Remove) button, and click Done.',
        ],
      },
      {
        id: 'terminal-mdutil-method',
        title: '2. Reindex Spotlight in Terminal with sudo mdutil -E',
        paragraphs: [
          'If you prefer Terminal—or need to reindex an external drive directly—macOS ships with mdutil (verified on macOS 27.0.1). Run sudo mdutil -E / to erase and rebuild the startup volume index, or target a specific external volume under /Volumes/.',
          'When Terminal prompts for your Mac login password, no characters or dots appear as you type; that is normal security behavior. Type your password and press Return.',
        ],
        code: [
          'sudo mdutil -E /',
          'sudo mdutil -E "/Volumes/YourDriveName"',
          'mdutil -s /',
        ],
        items: [
          'sudo mdutil -E /: erases the current index on Macintosh HD and triggers a fresh rebuild.',
          'mdutil -s /: prints whether Spotlight indexing is currently enabled on your startup disk.',
          'sudo mdutil -i on /: turns Spotlight indexing back on if mdutil -s reports “Indexing disabled.”',
          'ClearDisk license holders can also trigger a Spotlight reindex from ClearDisk’s maintenance tools without typing sudo commands.',
        ],
      },
      {
        id: 'check-progress',
        title: '3. Check indexing progress and wait on power',
        paragraphs: [
          'Press Command + Space and type any word. While Spotlight is actively rebuilding, a slim progress bar or “Indexing…” label appears beneath the search field. Depending on how many files sit on your SSD, a full reindex can take anywhere from 15 minutes to several hours.',
          'Plug your Mac into power and avoid putting it to sleep repeatedly—interrupted indexing takes much longer. Expect mds_stores and mdworker_shared to use noticeable CPU temporarily while the rebuild runs.',
        ],
        links: [
          {
            label: 'Why mds_stores uses high CPU during indexing and when to exclude noisy folders',
            href: '/mds-stores-high-cpu-mac',
          },
          {
            label: 'Fix Mac storage stuck on “Calculating…” after an update',
            href: '/mac-storage-calculating',
          },
        ],
      },
      {
        id: 'if-reindex-fails',
        title: '4. Fix Spotlight if reindexing stalls or says “Indexing disabled”',
        paragraphs: [
          'The mdutil manual notes that very low free disk space can delay or stall Spotlight indexing because the metadata store needs working room to write its database. If your startup disk is nearly full, free at least 15–20 GB before rebuilding.',
          'If sudo mdutil -E / prints “Indexing and searching disabled,” run sudo mdutil -i on / first, then rerun sudo mdutil -E /. Also confirm your drive is not still listed under System Settings → Spotlight → Search Privacy.',
        ],
        code: ['sudo mdutil -i on /', 'sudo mdutil -E /'],
        links: [
          {
            label: 'Mac storage full? What to delete first safely',
            href: '/mac-storage-full',
          },
          {
            label: 'Find Intel apps on Mac (uses Spotlight mdfind queries)',
            href: '/find-intel-apps-on-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Does reindexing Spotlight delete any of my files?',
        a: 'No. Reindexing Spotlight only erases and rebuilds Spotlight’s hidden search catalog of your files. Your documents, apps, photos, and settings remain completely untouched.',
      },
      {
        q: 'How long does it take to reindex Spotlight on a Mac?',
        a: 'A full Spotlight reindex typically takes anywhere from 15 minutes on a lightly used SSD to several hours on a Mac with hundreds of thousands of files. Leaving the Mac awake and plugged into power helps it finish faster.',
      },
      {
        q: 'What does sudo mdutil -E / do on Mac?',
        a: 'In macOS Terminal, sudo mdutil -E / erases the existing Spotlight metadata store for your startup volume (/) and immediately instructs macOS to rebuild a fresh index in the background.',
      },
      {
        q: 'Why does Spotlight say “Indexing disabled” when I run mdutil?',
        a: 'That message means Spotlight indexing was previously switched off for that volume. Run sudo mdutil -i on / to re-enable indexing, verify it is not excluded in Search Privacy, and then run sudo mdutil -E /.',
      },
      {
        q: 'Can I reindex just one folder or external drive instead of my whole Mac?',
        a: 'Yes. In System Settings, Spotlight, Search Privacy, add and then remove just that single folder or external drive—or run sudo mdutil -E "/Volumes/DriveName" in Terminal for an external disk.',
      },
      {
        q: 'Why is my Mac fan loud or warm right after reindexing Spotlight?',
        a: 'Spotlight runs mds_stores and mdworker_shared across your files to rebuild its search database, which temporarily raises CPU usage. Usage should return to normal once the Indexing bar finishes.',
      },
    ],
    related: [
      'mds-stores-high-cpu-mac',
      'mac-storage-calculating',
      'mac-running-slow-low-storage',
      'mac-storage-full',
      'find-intel-apps-on-mac',
    ],
    sources: [
      {
        label: 'Apple Support: rebuild the Spotlight index on your Mac (102321)',
        url: 'https://support.apple.com/en-us/102321',
      },
      {
        label: 'Apple Support: prevent Spotlight searches in specific folders or disks',
        url: 'https://support.apple.com/guide/mac-help/mchl1bb43b84/mac',
      },
      {
        label: 'MacRumors: how to rebuild the Spotlight index on Mac',
        url: 'https://www.macrumors.com/how-to/rebuild-spotlight-search-index-on-mac/',
      },
    ],
  },
  {
    slug: 'windowserver-high-cpu-mac',
    title: 'WindowServer High CPU on Mac: 7 Fixes That Actually Work',
    h1: 'WindowServer high CPU on Mac: why it spikes and 7 fixes to try in order',
    description:
      'Fix WindowServer high CPU on Mac in 7 steps: reduce transparency, clear Desktop icons, check external display scaling, close heavy tabs, and test Safe Mode.',
    summary:
      'WindowServer is the core macOS process that draws every window, desktop icon, menu bar, and blur effect on screen—you cannot quit it without logging out. When WindowServer stays above 30–40% CPU at idle, work through these 7 ordered fixes: close heavy browser/Electron tabs, enable Reduce transparency, declutter Desktop icons, check external display scaling, stop screen sharing, restart or test Safe Mode, and update macOS.',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      {
        id: 'what-is-windowserver',
        title: 'What WindowServer is (and what CPU % is normal)',
        paragraphs: [
          'WindowServer is macOS’s display compositor: every pixel drawn by every open app, animated browser tab, transparent sidebar, Desktop thumbnail, and external monitor passes through WindowServer. That is why Activity Monitor attributes graphics-pipeline overhead to WindowServer even when a misbehaving browser tab or Electron app is causing the work.',
          'Brief spikes to 20–50% while dragging windows, scrolling high-refresh-rate displays, or playing video are normal. Sustained usage above 30–60% while your Mac is sitting idle—causing lag, hot fans, or fast battery drain—points to one of the 7 triggers below. Never force-quit WindowServer in Activity Monitor; doing so immediately logs you out and closes unsaved work.',
        ],
        items: [
          'Check live usage in Applications → Utilities → Activity Monitor → CPU tab, sorted by % CPU.',
          'Or keep ClearDisk’s Why Slow menu-bar monitor running to spot CPU and memory pressure spikes without leaving Activity Monitor open.',
        ],
        links: [
          {
            label: 'See ClearDisk’s Why Slow menu-bar CPU & memory monitor',
            href: '/features',
          },
          {
            label: 'Why is my Mac running slow? Full CPU, memory & storage triage',
            href: '/mac-running-slow-low-storage',
          },
        ],
      },
      {
        id: 'close-heavy-tabs',
        title: '1. Close heavy browser tabs and Electron apps',
        paragraphs: [
          'Web browsers (Chrome, Edge, Arc, Firefox) and Electron desktop apps (Slack, Discord, VS Code, Notion) are the #1 hidden trigger behind WindowServer spikes because animated web pages, WebGL canvases, and GPU-accelerated video keep asking macOS to repaint frames nonstop.',
          'Quit apps one by one while watching WindowServer’s % CPU in Activity Monitor. When WindowServer suddenly drops from 60% to single digits right after quitting Chrome or Slack, you have found the culprit.',
        ],
        links: [
          {
            label: 'Why Chrome uses so much memory and CPU on Mac (and how to tame it)',
            href: '/blog/chrome-using-too-much-memory-mac',
          },
        ],
      },
      {
        id: 'reduce-transparency',
        title: '2. Turn on Reduce transparency and Reduce motion',
        paragraphs: [
          'Translucent sidebars, menu-bar blur, glass effects, and window animations force WindowServer to composite layered pixels continuously. Turning off transparency frequently cuts idle WindowServer CPU immediately—especially on older Macs or multi-monitor setups.',
        ],
        items: [
          'Open Apple menu → System Settings → Accessibility → Display.',
          'Toggle on Reduce transparency.',
          'Optionally toggle on Reduce motion under Accessibility → Motion to stop continuous desktop-switching animations.',
        ],
      },
      {
        id: 'clean-desktop-icons',
        title: '3. Clean up cluttered Desktop files and screenshots',
        paragraphs: [
          'macOS treats every individual icon, screenshot, and preview thumbnail sitting directly on your Desktop as its own window object that WindowServer tracks and redraws. Hundreds of screenshots on the Desktop quietly inflate WindowServer’s CPU and RAM footprint.',
          'Move loose files into a single folder inside Documents (or enable Finder’s Use Stacks by right-clicking the Desktop), then check Activity Monitor again.',
        ],
        links: [
          {
            label: 'Change where macOS saves screenshots so your Desktop stays clean',
            href: '/change-screenshot-location-mac',
          },
        ],
      },
      {
        id: 'external-displays',
        title: '4. Check external monitors, scaled resolutions, and separate Spaces',
        paragraphs: [
          'High-DPI external monitors running non-integer scaled resolutions (for example, “Looks like 2560 × 1440” on a 4K display) force macOS to render an oversized framebuffer (5120 × 2880) and downscale every frame in real time—multiplying WindowServer’s workload.',
        ],
        items: [
          'Test by unplugging external displays for 30 seconds: if WindowServer CPU drops immediately, the display configuration is the trigger.',
          'Open System Settings → Displays and test the default native resolution or a 60 Hz refresh rate instead of aggressive scaling.',
          'Open System Settings → Desktop & Dock, scroll to Mission Control, and test toggling off “Displays have separate Spaces” (requires logging out and back in).',
        ],
      },
      {
        id: 'screen-sharing-recording',
        title: '5. Stop screen sharing, recording, AirPlay, or virtual displays',
        paragraphs: [
          'Active screen capture—Zoom, Microsoft Teams, Google Meet, Loom, OBS, Sidecar, AirPlay mirroring, or third-party virtual-display utilities—locks WindowServer into continuously copying and encoding screen frames. Quit any lingering capture or menu-bar recording apps when you are not actively sharing.',
        ],
      },
      {
        id: 'restart-safe-mode',
        title: '6. Restart your Mac (and test Safe Mode if it returns)',
        paragraphs: [
          'WindowServer can accumulate graphics-memory leaks over weeks of uptime without a reboot. A normal restart clears stuck compositing threads immediately.',
          'If high WindowServer CPU returns right after rebooting with no apps open, start up in Safe Mode once (hold the power button on Apple silicon until Loading startup options appears, select your volume, hold Shift, and click Continue in Safe Mode). Safe Mode clears system graphics caches and blocks third-party login items so you can tell whether a background utility is causing the spike.',
        ],
        links: [
          {
            label: 'Remove unnecessary background items and login agents on Mac',
            href: '/remove-background-items-mac',
          },
        ],
      },
      {
        id: 'update-macos-apps',
        title: '7. Update macOS and GPU-heavy apps',
        paragraphs: [
          'WindowServer regressions are frequently fixed in point updates to macOS and in framework updates to Electron apps (Slack, Discord, VS Code, Figma). Open System Settings → General → Software Update and update your heaviest daily apps if the spike began right after an OS upgrade.',
        ],
        links: [
          {
            label: 'Mac slow after a macOS update? What settles on its own vs what to fix',
            href: '/mac-slow-after-macos-update',
          },
          {
            label: 'Fix “Your system has run out of application memory” on Mac',
            href: '/mac-out-of-application-memory',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Is WindowServer a virus or malware on Mac?',
        a: 'No. WindowServer is a legitimate, essential core macOS process built by Apple that draws all application windows, menus, icons, and visual effects on your screen.',
      },
      {
        q: 'Can I force quit WindowServer in Activity Monitor?',
        a: 'Do not force quit WindowServer. Because it manages your entire graphical login session, killing WindowServer immediately logs you out of macOS and closes all open apps without saving unsaved work.',
      },
      {
        q: 'What is normal WindowServer CPU usage on a Mac?',
        a: 'At idle on a single screen, WindowServer normally stays between 1% and 15% CPU, spiking briefly to 30–50% while scrolling or dragging windows. Sustained usage above 30–50% while idle indicates a heavy app, display scaling issue, or graphics leak.',
      },
      {
        q: 'Why does WindowServer CPU jump when I plug in an external monitor?',
        a: 'Driving an external 4K or ultrawide display—especially at a non-native scaled resolution or high refresh rate—forces WindowServer to render and downscale far more pixels per second.',
      },
      {
        q: 'Does Reduce transparency actually lower WindowServer CPU?',
        a: 'Yes. Enabling Reduce transparency under System Settings, Accessibility, Display turns off continuous background blur compositing across windows and menus, which noticeably reduces WindowServer CPU and GPU load.',
      },
      {
        q: 'Why does WindowServer use gigabytes of RAM as well as CPU?',
        a: 'Every open window, browser tab, and Desktop icon allocates graphics buffers inside WindowServer. Over long uptimes without rebooting, memory leaks in apps or macOS can bloat WindowServer’s memory until you close heavy apps or restart.',
      },
    ],
    related: [
      'mac-running-slow-low-storage',
      'mac-out-of-application-memory',
      'mac-slow-after-macos-update',
      'mds-stores-high-cpu-mac',
      'remove-background-items-mac',
    ],
    sources: [
      {
        label: 'Apple Support: start up your Mac in safe mode (116946)',
        url: 'https://support.apple.com/en-us/116946',
      },
      {
        label: 'Apple Support: change Display settings for accessibility (Reduce transparency)',
        url: 'https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac',
      },
      {
        label: 'Apple Support: view CPU activity in Activity Monitor on Mac',
        url: 'https://support.apple.com/guide/activity-monitor/view-cpu-activity-actmntr43452/mac',
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
];
