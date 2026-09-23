import type { Guide } from './guides.ts';

// Written for the “Memory, speed & drives” batch. lib/guides-drives.ts (driveGuides) already
// existed with four committed drive guides, so this batch lives in its own file.
// Apple sources checked 2026-09-24.
const memoryUsage = {
  label: 'Apple: view memory usage in Activity Monitor',
  url: 'https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac',
};
const needsRam = {
  label: 'Apple: check if your Mac needs more RAM',
  url: 'https://support.apple.com/guide/activity-monitor/check-if-your-mac-needs-more-ram-actmntr34865/mac',
};
const runsSlowly = {
  label: 'Apple: if your Mac runs slowly',
  url: 'https://support.apple.com/guide/mac-help/mchlp1731/mac',
};
const recovery = {
  label: 'Apple: how to start up from macOS Recovery',
  url: 'https://support.apple.com/en-us/102518',
};
const safeMode = {
  label: 'Apple: start up your Mac in safe mode',
  url: 'https://support.apple.com/en-us/116946',
};
const repairDisk = {
  label: 'Apple: how to repair a Mac storage device with Disk Utility',
  url: 'https://support.apple.com/en-us/102611',
};
const eraseDisk = {
  label: 'Apple: erase and reformat a storage device in Disk Utility',
  url: 'https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac',
};
const fileSystems = {
  label: 'Apple: file system formats available in Disk Utility',
  url: 'https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac',
};

export const memoryDriveGuides: Guide[] = [
  {
    slug: 'mac-swap-memory',
    title: 'Mac swap memory: what Swap Used means and when to act',
    description:
      'What Swap Used means in Activity Monitor on Mac, where macOS keeps its swap files, how to check them in Terminal, and when high swap is worth acting on.',
    summary:
      'Swap is disk space macOS uses when RAM is under pressure. Some swap is normal; Memory Pressure is the figure that matters. If it stays yellow or red, reduce what is running, and make sure the startup disk has room for swap.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-swap-is',
        title: 'What swap is',
        paragraphs: [
          'Your Mac keeps active work in RAM. When apps ask for more memory than is free, macOS first compresses memory that hasn’t been used recently, then moves some of it to swap files on the startup disk. Reading data back from disk is slower than reading it from RAM, which is why heavy swapping can make a Mac feel sluggish.',
          'A Swap Used figure above zero is not a fault. macOS can leave data in swap long after the pressure that put it there has passed, so a number that looks large on its own tells you little. Apple’s Activity Monitor guide describes Swap Used simply as the space being used on your startup disk to swap unused files to and from RAM.',
        ],
      },
      {
        id: 'read-activity-monitor',
        title: 'Read the Memory tab in Activity Monitor',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities and click Memory. The panel at the bottom of the window shows Memory Pressure as a graph, along with Physical Memory, Memory Used, Cached Files and Swap Used, plus a breakdown of the memory in use.',
          'Memory Pressure is the figure to watch. Apple says it reflects free memory, swap rate, wired memory and file cached memory together. Green means RAM is being used efficiently, yellow means the Mac might eventually need more RAM, and red means it needs more. Brief yellow during a heavy task is different from a graph that stays high all day.',
        ],
        items: [
          'App Memory: memory being used by apps.',
          'Wired Memory: memory the system needs that must stay in RAM and can’t be used by other apps.',
          'Compressed: memory macOS has compressed to make more RAM available.',
          'Cached Files: files the system keeps in otherwise unused memory to improve performance.',
        ],
      },
      {
        id: 'where-swap-lives',
        title: 'Where the swap files live',
        paragraphs: [
          'On recent macOS releases, swap files sit on a separate APFS volume named VM, mounted at /System/Volumes/VM. Older articles point to /private/var/vm. The VM volume shares free space with the other volumes in the startup disk’s container, so it doesn’t need a fixed-size partition of its own.',
          'You can look without changing anything. The first command below prints total, used and free swap; the second lists the swap files and their sizes. Don’t delete, move or edit these files: macOS creates and removes them as needed, and they are in use while the Mac is running.',
        ],
        code: ['sysctl vm.swapusage', 'ls -lh /System/Volumes/VM'],
      },
      {
        id: 'low-disk-space',
        title: 'Why low disk space matters for swap',
        paragraphs: [
          'Swap lives on the startup disk, so it competes with your files for free space. When the disk is nearly full, macOS has less room to grow swap during a heavy task. That is one path to the “Your system has run out of application memory” alert, and one reason Apple lists both low free space and memory demand among the causes of a slow Mac.',
          'Freeing storage gives swap room; it doesn’t add RAM. Disk cleanup tools, ClearDisk included, change how much storage is free, not how much memory your apps use. If Memory Pressure is red while the disk has plenty of space, the answer lies in what you run, not in what you store.',
        ],
      },
      {
        id: 'reduce-pressure',
        title: 'Bring memory pressure down',
        paragraphs: [
          'In the Memory tab, sort by the Memory column to see which processes hold the most. Quit apps you aren’t using, close browser windows and tabs you don’t need, and save your work before quitting anything large. If one app’s memory keeps climbing while it sits idle, quit and reopen it, check for an update, and report it to the developer.',
          'If pressure stays red during work you do every day, the Mac may have less memory than the workload needs. Apple’s guide explains how to check: hold Option, choose Apple menu → System Information, and click Memory under Hardware. If no Memory Slots section appears, the memory can’t be upgraded, and the realistic options are running fewer heavy apps at once or choosing more memory next time.',
        ],
      },
    ],
    related: [
      'mac-out-of-application-memory',
      'mac-running-slow-low-storage',
      'apfs-container-vs-volume',
      'mac-storage-full',
    ],
    sources: [memoryUsage, needsRam, runsSlowly],
  },
  {
    slug: 'mac-out-of-application-memory',
    title: 'Your system has run out of application memory on Mac',
    description:
      'What to do when your Mac says it has run out of application memory: save your work, quit the app using the most, restart, and leave disk room for swap files.',
    summary:
      'Save what you can, then quit the app using the most memory. The alert means RAM, compression and swap couldn’t keep up with demand. If it keeps returning, find the app responsible in Activity Monitor and make sure the startup disk isn’t nearly full.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'save-and-quit',
        title: '1. Save your work, then quit something',
        paragraphs: [
          'The alert appears when apps ask for more memory than macOS can supply from RAM, compressed memory and swap. It lists the apps that are open so you can quit one. Before you do, switch to any app with unsaved work and save it if the app still responds.',
          'Quit apps normally first: choose the app, then Quit from its menu or press Command-Q. If an app doesn’t respond, press Option-Command-Esc or choose Apple menu → Force Quit, select it and click Force Quit. Force quitting can lose unsaved changes in that app, so leave the one holding your work until last.',
        ],
      },
      {
        id: 'find-the-cause',
        title: '2. Find the app using the memory',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities, click Memory and sort by the Memory column. A single process far larger than you would expect is the usual cause: a browser with many tabs, a creative app with a large project, a virtual machine, or a developer tool working on a big build.',
          'Browsers are worth checking first. Tabs and web apps often run as separate processes, and a page left open for days can hold more memory than it seems to need. Close tabs you don’t need, or quit and reopen the browser. In Activity Monitor you can also select a process, click the Stop button, and choose Quit, which lets it quit when it is safe to do so.',
        ],
      },
      {
        id: 'check-swap-room',
        title: '3. Check whether the disk has room for swap',
        paragraphs: [
          'macOS extends memory by writing swap files to the startup disk. If the disk is almost full, there is less room for those files, and the alert can appear sooner than it would with free space available. Open System Settings → General → Storage and look at how much space is available.',
          'If storage is nearly full, freeing some space is part of the fix. Start with the storage-full guide linked below. ClearDisk can show what is using space on the disk; it doesn’t free memory or stop an app from using too much of it.',
        ],
      },
      {
        id: 'restart',
        title: '4. Restart if the Mac stays sluggish',
        paragraphs: [
          'After you quit the heavy app, Memory Pressure in Activity Monitor should settle. If the Mac stays slow, or apps won’t quit, restart from the Apple menu. Apple’s force-quit article says that if the Mac won’t restart, you can press and hold the power button for up to 10 seconds to turn it off, which also discards unsaved work.',
          'A restart releases memory held by apps and background processes. It won’t fix a cause that returns as soon as you reopen the same project or the same set of tabs, so note what you were running when the alert appeared. Reopen apps one at a time afterward and watch Memory Pressure as you do; the point where it turns yellow shows which app or project to keep an eye on.',
        ],
      },
      {
        id: 'if-it-keeps-happening',
        title: '5. If it keeps happening',
        paragraphs: [
          'Repeated alerts with the same app point to that app. Update it, look in its settings for cache or memory limits, and check the developer’s support pages for a known issue. An app whose memory grows steadily while it sits idle may have a memory leak; quitting it periodically is a workaround, not a fix.',
          'If different apps trigger the alert during ordinary work and Memory Pressure is often red, the workload may need more memory than the Mac has. Apple’s Activity Monitor guide shows how to check whether memory can be upgraded. If it can’t, running fewer heavy apps at once is the practical change.',
        ],
      },
    ],
    related: [
      'mac-swap-memory',
      'mac-running-slow-low-storage',
      'mac-storage-full',
      'free-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: how to force an app to quit on Mac',
        url: 'https://support.apple.com/en-us/102586',
      },
      memoryUsage,
      {
        label: 'Apple: quit an app or process in Activity Monitor',
        url: 'https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac',
      },
    ],
  },
  {
    slug: 'mac-running-slow-low-storage',
    title: 'Mac running slow? Check storage, memory and CPU first',
    description:
      'A calm checklist for a slow Mac: check free storage, then Memory Pressure and CPU in Activity Monitor, then login items, and fix the cause you actually find.',
    summary:
      'Low storage is one cause of a slow Mac, not the only one. Check free space, then Activity Monitor’s CPU, Memory and Energy tabs, then what opens at login. Fix the cause you can actually see.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'check-free-space',
        title: '1. Check free storage',
        paragraphs: [
          'Apple’s “If your Mac runs slowly” page lists a startup disk without enough free space as a possible cause. Open System Settings → General → Storage and read the available figure at the top. A nearly full disk leaves less room for swap and temporary files, and some apps slow down or fail to save when they can’t write.',
          'If space is tight, move or delete files you understand, and review the recommendations in the same Storage settings. If there is plenty of free space, skip ahead: cleaning more won’t make the Mac faster. ClearDisk’s free scan can show what is using the space; it doesn’t change CPU load or memory use.',
        ],
      },
      {
        id: 'check-cpu',
        title: '2. Look for a process using the CPU',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities, click CPU and sort by % CPU. A process that stays near the top while you aren’t using it deserves a closer look. Common examples are a browser tab running a heavy page, a sync app catching up, or an app stuck in a loop.',
          'Quit the app normally if you can. If it doesn’t respond, use Force Quit from the Apple menu, accepting that unsaved changes in that app may be lost. Don’t quit processes you don’t recognize just because they are busy; many belong to macOS and restart on their own. Look the name up in Apple’s or the developer’s documentation first.',
        ],
      },
      {
        id: 'check-memory-energy',
        title: '3. Check Memory Pressure and Energy',
        paragraphs: [
          'Click Memory and look at the Memory Pressure graph. Apple describes green as RAM being used efficiently, yellow as a sign the Mac might eventually need more RAM, and red as a sign it needs more. If pressure is high, sort by Memory and close what you don’t need, starting with browser tabs and large projects.',
          'The Energy tab ranks apps by energy impact, which often tracks what keeps the Mac busy in the background. An app that ranks high while you aren’t using it can be quit, or its background activity reduced in the app’s own settings. Apple describes energy impact as a relative measure, so compare apps with each other rather than reading one number on its own.',
        ],
      },
      {
        id: 'login-items',
        title: '4. Review what opens at login',
        paragraphs: [
          'Apps that open automatically keep running whether you need them or not. Open System Settings → General → Login Items & Extensions (called Login Items in some earlier releases). Review Open at Login and remove apps you don’t need at startup. App Background Activity lets apps check for updates or sync while closed; turning an item off can stop that feature of the app.',
          'Change a few items at a time and restart, so you can tell which change helped. If you suspect third-party software, starting in safe mode, which skips login items and extensions that aren’t required by macOS, shows whether the Mac behaves better without them.',
        ],
      },
      {
        id: 'other-causes',
        title: 'Other causes worth ruling out',
        paragraphs: [
          'Apple also lists apps that aren’t compatible with your Mac and simply having too many apps open. An app that requires a different processor or graphics hardware can run poorly; check its requirements and look for an updated version. Keep macOS and your apps up to date, and restart after long sessions with heavy apps. If the slowdown began right after you installed something, that app is the first suspect.',
          'If the disk itself might be the problem, Apple suggests checking it with Disk Utility; the First Aid guide linked below explains the order and what a failure means. A Mac that slows down right after a macOS update is often still finishing background work, which has its own guide.',
        ],
      },
    ],
    related: [
      'mac-slow-after-macos-update',
      'mac-swap-memory',
      'mac-storage-full',
      'disk-utility-first-aid-mac',
    ],
    sources: [
      runsSlowly,
      memoryUsage,
      {
        label: 'Apple: change Login Items & Extensions settings',
        url: 'https://support.apple.com/guide/mac-help/mtusr003/mac',
      },
    ],
  },
  {
    slug: 'mac-slow-after-macos-update',
    title: 'Mac running slow after a macOS update: what to check',
    description:
      'Why a Mac can feel slow after a macOS update, starting with Spotlight indexing, and what to check if it doesn’t settle: apps, login items and free storage.',
    summary:
      'Some slowness right after an update is expected: Spotlight re-indexes, and Apple says that can take hours or even days. Leave the Mac on power for a while, update your apps, then check Activity Monitor and free storage if it doesn’t settle.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'let-it-finish',
        title: '1. Let background work finish',
        paragraphs: [
          'Apple’s Spotlight article says indexing happens after you install a software update or upgrade, and that, depending on how much data you have, it can take hours or even days. While it runs, the Mac is doing more work in the background than usual, and search results may be incomplete.',
          'Apple says indexing finishes faster when the device isn’t in use, is connected to power, and is on Wi-Fi or Ethernet. Press Command-Space: while indexing is still in progress, an indicator appears at the top of the Spotlight window. Other apps can do first-run work after an update too, so give the Mac a quiet stretch on power before drawing conclusions.',
        ],
      },
      {
        id: 'see-whats-busy',
        title: '2. See what is actually busy',
        paragraphs: [
          'Open Activity Monitor and sort the CPU tab by % CPU. In the first hours after an update, Spotlight’s processes, named mds, mds_stores and mdworker, can sit near the top; that is expected and should fade. What you are looking for is a process that stays busy day after day, or a third-party app that is always there.',
          'Check the Memory tab as well. If Memory Pressure is yellow or red, sort by Memory to see which app holds the most. An app that behaved well before the update and now uses far more CPU or memory is a candidate for an update of its own. Note the process name and how long it has stayed busy; that is what a developer or Apple Support will ask for.',
        ],
      },
      {
        id: 'update-apps',
        title: '3. Update your apps',
        paragraphs: [
          'A new macOS release can expose problems in apps that haven’t been updated for it. Open the App Store and check for updates, then use the update option inside apps from other sources. For apps that add system extensions, drivers or background helpers, look for a version that the developer says supports your macOS release.',
          'If one app is clearly the problem and no update exists yet, quit it when you aren’t using it, or remove it from login items until the developer ships a fix. Be wary of forum claims about a slowdown “bug” in a specific update unless Apple or the developer confirms it.',
        ],
      },
      {
        id: 'login-items',
        title: '4. Review login items and background activity',
        paragraphs: [
          'Open System Settings → General → Login Items & Extensions and review Open at Login and App Background Activity. Turn off only items you recognize and don’t need; some belong to apps you rely on, such as a backup or sync tool, and turning them off stops that work.',
          'To test whether third-party software is involved, start up in safe mode, which prevents login items and extensions that aren’t required by macOS from loading. If the Mac is noticeably better in safe mode, restart normally and reintroduce login items a few at a time.',
        ],
      },
      {
        id: 'storage-headroom',
        title: '5. Check storage headroom',
        paragraphs: [
          'An update needs room to install, and the Mac needs room afterward for swap, caches and the new index. Open System Settings → General → Storage and compare the available space with what you had before. If it dropped sharply, the storage-after-update guide explains what often changes, such as snapshots and leftover installers.',
          'If space is short, free some before judging speed. ClearDisk’s free scan can show which folders grew; it can’t speed up macOS or make indexing finish sooner. If the Mac is still slow after several days with enough free space and updated apps, contact Apple Support or the developer of the app that stays busy.',
        ],
      },
    ],
    related: [
      'mac-running-slow-low-storage',
      'mac-storage-full-after-macos-update',
      'not-enough-space-to-update-macos',
      'mac-swap-memory',
    ],
    sources: [
      {
        label: 'Apple: about Spotlight indexing and search results',
        url: 'https://support.apple.com/en-us/102321',
      },
      runsSlowly,
      safeMode,
    ],
  },
  {
    slug: 'mac-wont-start-disk-full',
    title: 'Mac won’t start because the disk is full: what to do',
    description:
      'If a full disk stops your Mac starting up, try safe mode, check the disk in macOS Recovery, copy important files off, then free space once you can log in.',
    summary:
      'Don’t start by deleting files from Terminal. Try safe mode first; if you can log in, free space there. If not, use macOS Recovery to run First Aid and copy important files to another Mac before anything else.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'note-the-symptom',
        title: '1. Note where startup stops',
        paragraphs: [
          'A Mac with a nearly full disk may stall at the Apple logo or progress bar, reach the login window and then hang, or show storage warnings just before it stops responding. If you saw warnings that the disk was almost full beforehand, a full disk is a likely cause.',
          'A question mark or a circle with a line through it points to a different problem, such as the Mac not finding a usable startup system. Apple Support has separate steps for each of those screens; follow them rather than the steps below.',
        ],
      },
      {
        id: 'safe-mode',
        title: '2. Try safe mode and free space there',
        paragraphs: [
          'Safe mode loads less at startup and performs a basic check of the startup disk. On a Mac with Apple silicon, shut down, press and hold the power button until startup options appear, select your startup disk, then hold Shift and click Continue in Safe Mode. On an Intel-based Mac, turn it on and immediately hold Shift until the login window appears.',
          'If you can log in, free space before restarting normally. Empty the Trash if it holds only files you are sure about, move large files you recognize to an external drive, and delete old downloads and installers. Once the Mac starts normally, use Storage settings or a scan such as ClearDisk’s to find what filled the disk.',
        ],
      },
      {
        id: 'recovery-first-aid',
        title: '3. Check the disk in macOS Recovery',
        paragraphs: [
          'If safe mode doesn’t reach the desktop, start up from macOS Recovery. On Apple silicon, shut down, then press and hold the power button until “Loading startup options” appears, click Options, then Continue. On an Intel-based Mac, press the power button and immediately hold Command-R. You may be asked to choose a user and enter a password.',
          'Choose Disk Utility, choose View → Show All Devices, and run First Aid on the startup volumes, then the container, then the disk. If a volume is dimmed, select it and click Mount first. First Aid repairs file system problems; it doesn’t free space, but it rules out damage before you copy or reinstall anything.',
        ],
      },
      {
        id: 'copy-files-off',
        title: '4. Copy important files to another Mac',
        paragraphs: [
          'If you can’t log in and have no recent backup, copy what matters before trying anything bigger. On a Mac with Apple silicon, start up in macOS Recovery, choose Utilities → Share Disk, select the volume and click Start Sharing. Connect the other Mac with a USB, USB-C or Thunderbolt cable; it finds the shared disk under Network in Finder and connects as Guest.',
          'An Intel-based Mac can use target disk mode instead, which makes it appear as an external disk on the other Mac. Copy documents, photos and anything else you can’t replace, then eject the volume and stop sharing. With a copy in hand, a failed repair or a reinstall is far less risky.',
        ],
      },
      {
        id: 'what-to-avoid',
        title: 'What to avoid, and when to get help',
        paragraphs: [
          'Recovery includes Terminal, and advice online often suggests deleting folders from it. Paths in Recovery differ from a normal startup, there is no Trash, and a mistyped command can remove the wrong data permanently. Unless you are comfortable at the command line and have a backup, don’t delete files from Recovery’s Terminal.',
          'Reinstalling macOS from Recovery is another route Apple offers, but the installer needs free space too, so it may not get far on a full disk. Contact Apple Support if First Aid reports errors it can’t repair or the Mac still won’t start after safe mode and Recovery. Once it runs normally, keep enough free space for updates, swap and caches.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'disk-utility-first-aid-mac',
      'mac-recovery-partition',
      'not-enough-space-to-update-macos',
    ],
    sources: [
      safeMode,
      recovery,
      {
        label: 'Apple: transfer files between a Mac with Apple silicon and another Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlb37e8ca7/mac',
      },
    ],
  },
  {
    slug: 'disk-utility-first-aid-mac',
    title: 'How to run Disk Utility First Aid on Mac, and if it fails',
    description:
      'Run Disk Utility First Aid on Mac in the right order, volumes, then container, then disk, and what to do when it fails or reports errors it can’t repair.',
    summary:
      'Back up first, then run First Aid on each volume, then the container, then the disk. For the startup disk, use macOS Recovery. If First Aid fails, back up what you can, erase the disk, reinstall macOS and restore.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'back-up-first',
        title: '1. Back up before you repair',
        paragraphs: [
          'First Aid checks a disk’s file system structures and fixes the problems it can. Apple recommends having a current backup before you start, in case you need to recover damaged files. If the disk holds your only copy of something, copy it to another drive first.',
          'First Aid isn’t a cleanup or speed tool. It doesn’t free space, remove caches or make a healthy Mac faster. Run it when a disk behaves oddly: apps report errors while saving, a drive won’t mount, or macOS says a disk needs repair. It checks the file system, not the hardware, so a clean result doesn’t prove a drive will stay healthy.',
        ],
      },
      {
        id: 'run-first-aid',
        title: '2. Run First Aid in the right order',
        paragraphs: [
          'Open Disk Utility from Applications → Utilities and choose View → Show All Devices, so the sidebar shows each disk, its containers and its volumes. Apple’s order is to start with the last volume on the device and work upward: each volume, then each container, then the device itself.',
          'Select an item, click First Aid, then click Run and wait for the result before moving to the next item up. For an external drive, connect it directly with a cable you trust, and don’t disconnect it until Disk Utility reports that First Aid has finished.',
        ],
        items: [
          'Volumes first, such as Macintosh HD - Data and Macintosh HD.',
          'Then the container that holds them.',
          'Then the physical disk at the top of that group.',
        ],
      },
      {
        id: 'startup-disk',
        title: '3. Check the startup disk from macOS Recovery',
        paragraphs: [
          'Apple says to start up from macOS Recovery if you are repairing your startup disk or your Mac doesn’t start up all the way. On a Mac with Apple silicon, shut down, press and hold the power button until startup options load, click Options, then Continue. On an Intel-based Mac, turn it on and immediately hold Command-R.',
          'In Recovery, open Disk Utility and follow the same order. If the Data volume appears dimmed, select it and click Mount; with FileVault turned on, you’ll be asked for a password. Checking from Recovery means macOS isn’t running from the disk while First Aid works on it. If you can’t reach Recovery, starting in safe mode performs a basic check of the startup disk, which Apple describes as similar to the more comprehensive First Aid check.',
        ],
      },
      {
        id: 'if-it-fails',
        title: '4. If First Aid reports errors or fails',
        paragraphs: [
          'If First Aid says it repaired the disk, restart and use the Mac normally. If it reports overlapped extent allocation errors, Apple explains that two or more files occupy the same space on the disk and at least one of them is likely damaged. Check the files you care about, and restore damaged ones from a backup.',
          'If First Aid fails, Apple’s guidance is to back up as much data as possible, reformat the disk, reinstall macOS, then restore your backed-up data. If Disk Utility says the disk is about to fail, Apple says to back up your data and replace the disk, because it can’t be repaired.',
        ],
      },
      {
        id: 'what-it-cant-fix',
        title: 'What First Aid can’t fix',
        paragraphs: [
          'A drive that doesn’t appear in Disk Utility at all can’t be checked. Apple suggests shutting down, unplugging nonessential devices, and checking the cable, connections and power of an external drive; the guide to a drive that isn’t showing up covers those checks in order.',
          'First Aid also can’t bring back deleted files or recover space. If the disk checks out healthy but is simply full, the storage guides are the next step, starting with finding what uses the space before deleting anything. First Aid also doesn’t inspect what is inside your files: a photo or document can be damaged even when the file system around it is sound.',
        ],
      },
    ],
    related: [
      'disk-utility-mac',
      'mac-wont-start-disk-full',
      'external-hard-drive-not-showing-up-mac',
      'mac-recovery-partition',
    ],
    sources: [
      repairDisk,
      {
        label: 'Apple: repair a storage device in Disk Utility',
        url: 'https://support.apple.com/guide/disk-utility/dskutl1040/mac',
      },
      recovery,
    ],
  },
  {
    slug: 'apfs-container-vs-volume',
    title: 'APFS container vs volume vs partition on Mac, explained',
    description:
      'How APFS containers, volumes and partitions differ on Mac, why volumes share a container’s free space, and how to see the layout in Disk Utility or Terminal.',
    summary:
      'A partition is a fixed slice of a disk. An APFS container usually fills a partition, and the volumes inside it share the container’s free space on demand. Apple’s advice is to add APFS volumes rather than partition in most cases.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'three-layers',
        title: 'Three layers: disk, container, volume',
        paragraphs: [
          'A physical disk is the storage device itself. It is divided into partitions, which are fixed ranges of space. On a disk formatted with APFS, a partition usually holds one APFS container, and the container holds one or more volumes: the items you see as drives in Finder.',
          'Apple’s guide treats an APFS container and its partition as one unit: when a single APFS container has multiple volumes, the container’s free space is shared and can be allocated to any of them as needed. That is why several volumes can live on one disk without you deciding their sizes in advance.',
        ],
      },
      {
        id: 'startup-disk-layout',
        title: 'What your startup disk looks like',
        paragraphs: [
          'The startup disk on a current Mac is one main APFS container with several volumes. Macintosh HD is the read-only system volume and Macintosh HD - Data holds your files and apps; Finder presents them together. Smaller volumes named Preboot, Recovery and VM hold startup files, the recovery system and swap. Macs with Apple silicon also have small containers outside the main one.',
          'Because these volumes share one container, space used by any of them reduces the free space available to all of them. You don’t need to manage them individually, and you shouldn’t delete or resize the system volumes to reclaim space.',
        ],
      },
      {
        id: 'see-the-layout',
        title: 'See the layout in Disk Utility and Terminal',
        paragraphs: [
          'Open Disk Utility and choose View → Show All Devices. The sidebar then shows each physical disk, the containers on it and the main volumes inside. Selecting a container shows its size along with how much its volumes use and how much remains free.',
          'Terminal gives the full picture, including volumes Disk Utility doesn’t list. Both commands below only read information. The first shows partitions and containers on each disk; the second shows each APFS container with its volumes, their roles and the space each one consumes.',
        ],
        code: ['diskutil list', 'diskutil apfs list'],
      },
      {
        id: 'volume-or-partition',
        title: 'When to add a volume, and when to partition',
        paragraphs: [
          'Apple’s Disk Utility guide says that with APFS you shouldn’t partition your disk in most cases; create additional APFS volumes in the same container instead. A new volume takes space only as it fills, and you can set a Reserve Size to guarantee it room or a Quota Size to cap it.',
          'A separate partition still makes sense when part of a disk needs a different file system, such as an exFAT section on an external drive shared with a Windows PC. On Intel-based Macs, Boot Camp creates its own Windows partition, which sits outside the APFS container and doesn’t share its free space.',
        ],
      },
      {
        id: 'volume-formats',
        title: 'Formats inside a container',
        paragraphs: [
          'Each volume in an APFS container can use its own APFS variant: APFS, APFS (Encrypted), APFS (Case-sensitive) or APFS (Case-sensitive, Encrypted). A case-sensitive volume treats “Homework” and “HOMEWORK” as different names, which some developer tools need and most people don’t.',
          'Older disks and some external drives use Mac OS Extended instead. That format has no containers: each partition holds one volume of a fixed size, so free space on one volume can’t be used by another. That is the main practical difference you’ll notice between the two.',
        ],
      },
      {
        id: 'free-space',
        title: 'What this means for free space',
        paragraphs: [
          'Free space belongs to the container, not to each volume. Two APFS volumes in the same container usually report the same available space, because they draw from the same pool. A volume only has space set aside for it if someone gave it a reserve.',
          'To free space, look at what fills the volumes rather than at the layout. Your files and apps are on the Data volume; the guide to other volumes in the container and the storage guides explain how to find what is large before you delete anything.',
        ],
      },
    ],
    related: [
      'other-volumes-in-container',
      'mac-recovery-partition',
      'disk-utility-mac',
      'mac-storage-glossary',
    ],
    sources: [
      {
        label: 'Apple: add, delete or erase APFS volumes in Disk Utility',
        url: 'https://support.apple.com/guide/disk-utility/add-delete-or-erase-apfs-volumes-dskua9e6a110/mac',
      },
      {
        label: 'Apple: partition a physical disk in Disk Utility',
        url: 'https://support.apple.com/guide/disk-utility/partition-a-physical-disk-dskutl14027/mac',
      },
      fileSystems,
    ],
  },
  {
    slug: 'mac-recovery-partition',
    title: 'Mac recovery partition: where it is and why to keep it',
    description:
      'Where macOS Recovery lives on a Mac, why it seems missing in Disk Utility, how to start it on Apple silicon and Intel, and why deleting it won’t help storage.',
    summary:
      'macOS Recovery lives on a small hidden volume, not a partition you manage. It is hidden in Disk Utility, not missing. Keep it: it is how you repair the startup disk or reinstall macOS when the Mac won’t start normally.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-it-lives',
        title: 'Where Recovery lives',
        paragraphs: [
          'On Macs that use APFS, the recovery system is a volume named Recovery inside the startup disk’s main container, alongside Macintosh HD, Macintosh HD - Data, Preboot and VM. It isn’t a separate partition in the old sense; it shares the container’s free space like the other volumes.',
          'On a Mac with Apple silicon, diskutil list also shows a separate small container of the type Apple_APFS_Recovery. Apple’s Platform Security guide describes a fallback recoveryOS that the Mac can use when the usual, paired recoveryOS fails.',
        ],
      },
      {
        id: 'hidden-not-missing',
        title: 'Why it looks missing',
        paragraphs: [
          'Disk Utility doesn’t list the Recovery volume, even with View → Show All Devices, and Finder never shows it. That is by design: it isn’t meant to be browsed or edited, and the Preboot and VM volumes are hidden the same way. Many “recovery partition missing” worries are simply this hidden volume.',
          'Terminal shows it. The first command lists every disk with its partitions and containers; the second lists each APFS volume with its role, including one marked Recovery, and how much space it consumes. Both only read information.',
        ],
        code: ['diskutil list', 'diskutil apfs list'],
      },
      {
        id: 'start-recovery',
        title: 'How to start up from Recovery',
        paragraphs: [
          'On a Mac with Apple silicon, shut down, then press and hold the power button until “Loading startup options” or the Options icon appears. Click Options, then Continue. On an Intel-based Mac, press the power button and immediately hold Command-R until you see an Apple logo or other image.',
          'Recovery offers Restore from Time Machine, Reinstall macOS, and Disk Utility for repairing or erasing the startup disk. Terminal is in the Utilities menu. On Apple silicon, the same menu also has Share Disk, for copying files to another Mac, and Startup Security Utility.',
        ],
      },
      {
        id: 'if-it-wont-start',
        title: 'If the built-in Recovery won’t start',
        paragraphs: [
          'On an Intel-based Mac, Apple provides macOS Recovery over the internet. Option-Command-R starts it and offers to reinstall the latest macOS compatible with your Mac; Shift-Option-Command-R offers the version that came with your Mac, or the closest one still available. You’ll need a network connection, and because the recovery system is downloaded first, it takes longer on a slow one.',
          'On a Mac with Apple silicon, the fallback recoveryOS described above covers the case where the paired one can’t start. If neither works, contact Apple Support rather than trying to recreate the recovery volume yourself.',
        ],
      },
      {
        id: 'check-it-works',
        title: 'Check it before you need it',
        paragraphs: [
          'Recovery is easiest to use when you already know the steps. While the Mac is healthy, start up in Recovery once, confirm you can select your user and see the list of utilities, then choose Apple menu → Restart. Make sure you know the password for an administrator account on the Mac, since Recovery can ask for it.',
          'Recovery can only restore what you have backed up. Restore from Time Machine needs a Time Machine backup, and Reinstall macOS reinstalls the system, not your documents. A current backup makes every option in Recovery more useful.',
        ],
      },
      {
        id: 'dont-delete-it',
        title: 'Don’t delete it to save space',
        paragraphs: [
          'Compare the Recovery volume’s size in diskutil apfs list with your Data volume: the recovery system is a small share of the disk. Removing it takes away the tool you need to repair the startup disk, reinstall macOS or restore from Time Machine when the Mac won’t start normally.',
          'Instructions that delete recovery partitions with diskutil were written for older disk layouts and carry real risk on a current Mac. If storage is the problem, look at what fills the Data volume instead: your files, app data and caches, which the storage guides cover.',
        ],
      },
    ],
    related: [
      'apfs-container-vs-volume',
      'mac-wont-start-disk-full',
      'disk-utility-first-aid-mac',
      'other-volumes-in-container',
    ],
    sources: [
      recovery,
      {
        label: 'Apple: use macOS Recovery on an Intel-based Mac',
        url: 'https://support.apple.com/guide/mac-help/mchl338cf9a8/mac',
      },
      {
        label: 'Apple Platform Security: boot modes for a Mac with Apple silicon',
        url: 'https://support.apple.com/guide/security/boot-modes-sec10869885b/web',
      },
    ],
  },
  {
    slug: 'how-much-storage-mac',
    title: 'How much storage do you need on a Mac? 256GB vs 512GB',
    description:
      'How to choose Mac storage, 256GB, 512GB or more, from the work you do, with headroom for updates and swap, and when external or cloud storage is enough.',
    summary:
      'Choose from your own usage, not a rule of thumb. Measure what you keep locally, add growth, and leave headroom for updates and swap. Plan as if the storage you order is the storage you keep, and choose the larger size if you are unsure.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'buy-once',
        title: 'The storage you order is the storage you keep',
        paragraphs: [
          'Apple sells storage as part of a Mac’s configuration: its specs pages list a starting capacity and the larger sizes a model is “configurable to” when you order. Current MacBook models have no drive the owner can replace, so plan as if the internal capacity you choose is permanent.',
          'When this guide was written, Apple’s MacBook Air specs page listed 512GB as the starting capacity; earlier models started at 256GB and are still common refurbished and secondhand. Apple also notes that 1TB means one trillion bytes and that formatted capacity is less, and macOS itself uses part of the disk.',
        ],
      },
      {
        id: 'measure-your-use',
        title: 'Start from what you keep locally',
        paragraphs: [
          'If you have a Mac now, open System Settings → General → Storage and note how much is used and which categories are largest. That number, not the size of your current disk, is the starting point. If this is your first Mac, the phone, old computer or cloud account that holds your files today gives a fair first estimate. The guide to checking storage explains what each category holds.',
          'Then separate what must be on the Mac from what could live elsewhere. Files in iCloud Drive with Optimize Mac Storage turned on, photos kept with Optimize Mac Storage in Photos, and streamed music take little local space. Downloaded media, a Photos library stored at full resolution and large project folders take their full size.',
        ],
      },
      {
        id: 'match-the-work',
        title: 'Match the capacity to the work',
        paragraphs: [
          'Light use, such as a browser, email, documents and streaming, needs the least room, and cloud storage can hold older files. Larger capacities matter when you keep big things locally: a full Photos library, offline downloads, video projects, audio sample libraries, games, virtual machines, or developer tools such as Xcode, simulators and Docker.',
          'If you are choosing between 256GB and 512GB, the real question is whether you will keep media or development tools on the Mac. If you won’t, the smaller size can work with some discipline. If you will, or aren’t sure, the larger size leaves room to grow. Development and creative work also grow quietly through caches, build products and render files.',
        ],
      },
      {
        id: 'leave-headroom',
        title: 'Leave headroom',
        paragraphs: [
          'A disk that runs nearly full causes problems beyond running out of room for files. macOS needs free space to download and install updates, to use swap when memory is busy, and for caches and temporary files. Apple lists a startup disk without enough free space as one possible cause of a slow Mac.',
          'So don’t size a Mac to fit today’s files exactly. Add the growth you expect over the years you plan to keep it, then leave space on top. The update-space guide explains why a macOS update needs more room than its download size suggests.',
        ],
      },
      {
        id: 'external-and-cloud',
        title: 'When external or cloud storage is enough',
        paragraphs: [
          'External drives are a sound way to add capacity for things that don’t need to be on the Mac all the time: archives, finished projects, media libraries you open occasionally, and Time Machine backups. They are less convenient on a laptop you carry everywhere, because the files are only there when the drive is.',
          'iCloud Drive and other cloud services can keep older files off the Mac and download them on demand, at the cost of a subscription and a network connection. Neither replaces enough internal space for macOS, your apps and daily work. ClearDisk’s free scan can show what uses the space on your current Mac, a useful check before choosing.',
        ],
      },
    ],
    related: [
      'expand-mac-storage-external-ssd',
      'how-to-check-storage-on-mac',
      'developer-storage-on-mac',
      'not-enough-space-to-update-macos',
    ],
    sources: [
      {
        label: 'Apple: MacBook Air technical specifications',
        url: 'https://www.apple.com/macbook-air/specs/',
      },
      runsSlowly,
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'expand-mac-storage-external-ssd',
    title: 'Expand Mac storage with an external SSD: what to move',
    description:
      'Expand Mac storage with an external SSD: pick a drive and format, move Photos, Music, projects and virtual machines safely, and keep backups separate.',
    summary:
      'An external SSD is the practical way to add space to a Mac whose internal storage is fixed. Format it as APFS, move large libraries using each app’s own method, keep apps and your home folder on the Mac, and back up the drive too.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'choose-the-drive',
        title: '1. Choose the drive and connection',
        paragraphs: [
          'Any external drive adds capacity. An SSD suits libraries and projects you open often, because it responds much faster than a spinning hard disk. Match the drive’s interface to your Mac’s ports: Thunderbolt and USB connections come in different speeds, and the slowest link among the drive, cable and port sets the pace.',
          'Check the drive maker’s specifications for the interface it supports and the cable it needs, rather than relying on the connector shape. On a laptop, a drive powered through its cable avoids another adapter; on a desktop Mac, a drive that stays connected is simplest. Buy capacity for the libraries you plan to move plus room for them to grow, since a nearly full external drive is as awkward to work with as a nearly full internal one.',
        ],
      },
      {
        id: 'format-it',
        title: '2. Format it for the Mac',
        paragraphs: [
          'For a drive that only Macs will use, erase it as APFS in Disk Utility with the GUID Partition Map scheme; the formatting guide walks through it. Apple’s Photos article requires APFS or Mac OS Extended (Journaled) for a library on an external drive, so an exFAT drive isn’t suitable for it. The same article advises against keeping a library on removable media such as SD cards and USB flash drives, or on network or cloud storage, because of the risk of data loss.',
          'Use a separate drive for Time Machine. Apple notes that you can’t store your Photos library on a storage device used for Time Machine backups, and keeping backups apart from working files means one failed drive doesn’t take both.',
        ],
      },
      {
        id: 'move-libraries',
        title: '3. Move large libraries with each app’s method',
        paragraphs: [
          'Photos: quit Photos, drag the Photos Library from your Pictures folder to the drive, and open it from there. If you use iCloud Photos, designate it as the System Photo Library. The Photos guide linked below covers each step and what to check before removing the original.',
          'Music: in Music → Settings → Files, click Change and choose a folder on the drive, then choose File → Library → Organize Library and select Consolidate files. Consolidating copies files and leaves the originals where they were, so check that your library plays from the drive before removing them. Move virtual machines and finished projects with their app quit, following that app’s documentation.',
        ],
        items: [
          'Good candidates: Photos libraries, Music media, virtual machine files, finished video and audio projects, and archives you keep.',
          'Keep on the Mac: macOS, your apps, your home folder, and files you need when the drive isn’t connected.',
        ],
      },
      {
        id: 'keep-apps-local',
        title: '4. Keep apps and the home folder on the Mac',
        paragraphs: [
          'Leave apps in the Applications folder on the internal disk. Some apps run from elsewhere, but updates, extensions and login items expect the usual location, and an app on a disconnected drive won’t open at all. Moving your whole home folder to an external drive is possible but fragile; avoid it unless you understand the tradeoffs and have a backup.',
          'Anything that lives only on the external drive needs its own backup. In System Settings → General → Time Machine, click Options and check that the drive isn’t in the list of excluded items, or copy the drive to another drive on a schedule.',
        ],
      },
      {
        id: 'eject-and-check',
        title: '5. Eject before unplugging, then check the space',
        paragraphs: [
          'Quit apps that use the drive and eject it in Finder before unplugging. Disconnecting a drive while Photos, Music or a virtual machine has files open on it risks damaging the library or disk image. If the drive refuses to eject, the eject guide explains how to find what is holding it.',
          'Once the libraries are moved and checked, the space returns to the internal disk. Empty the Trash only after confirming the copies open from the drive. ClearDisk’s free scan can show which large folders remain on the internal disk if you want to see what else is worth moving.',
        ],
      },
    ],
    related: [
      'move-photos-library-to-external-drive',
      'format-external-hard-drive-mac',
      'how-much-storage-mac',
      'virtual-machine-disk-space-mac',
    ],
    sources: [
      {
        label: 'Apple: move your Photos library to save space on your Mac',
        url: 'https://support.apple.com/en-us/108345',
      },
      {
        label: 'Apple: change where your music files are stored on Mac',
        url: 'https://support.apple.com/guide/music/change-where-music-files-are-stored-mus69248042d/mac',
      },
      eraseDisk,
    ],
  },
  {
    slug: 'remove-boot-camp-partition',
    title: 'Remove the Boot Camp partition on Mac and recover space',
    description:
      'Remove Windows and its Boot Camp partition on an Intel-based Mac with Boot Camp Assistant, return the space to macOS, and see why it can’t be resized.',
    summary:
      'On an Intel-based Mac, use Boot Camp Assistant to remove Windows and return its partition’s space to macOS. Back up Windows first: everything on the partition is erased. Boot Camp Assistant can’t resize the partition.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'intel-only',
        title: 'Boot Camp is for Intel-based Macs',
        paragraphs: [
          'Boot Camp Assistant installs Windows on a separate partition of an Intel-based Mac, and Apple’s list of supported models excludes Macs with Apple silicon. If you have one of those, there is no Boot Camp partition to remove; Windows on it would run in a virtual machine, whose disk files the virtual machine guide covers.',
          'The Windows partition has a fixed size and sits outside the APFS container macOS uses, so its space isn’t available to macOS while it exists. To see it, run diskutil list in Terminal; the Windows partition is usually named BOOTCAMP. In Disk Utility, with View → Show All Devices, it appears as a separate partition beside the APFS container.',
        ],
        code: ['diskutil list'],
      },
      {
        id: 'back-up-windows',
        title: '1. Back up what’s on Windows',
        paragraphs: [
          'Apple is explicit: when Windows is removed, the Windows partition and all data stored in it are erased permanently. Start up in Windows and copy documents, photos, game saves and anything else you need to an external drive or cloud storage. From macOS, the Windows partition usually appears in Finder as a disk you can read but not write, unless it is encrypted with BitLocker, so you can also copy files from that side.',
          'Check software licenses tied to the Windows installation, and deactivate any that require it before the installation disappears. Back in macOS, confirm that the copied files open.',
        ],
      },
      {
        id: 'back-up-mac',
        title: '2. Back up the Mac side too',
        paragraphs: [
          'Removing Windows changes the partitions on your internal disk. Back up macOS with Time Machine or another method first, so your Mac files are safe if the process is interrupted.',
          'Connect a laptop to power before you start, and leave the Mac alone until Boot Camp Assistant reports that it has finished.',
        ],
      },
      {
        id: 'remove-windows',
        title: '3. Remove Windows with Boot Camp Assistant',
        paragraphs: [
          'Start up in macOS, quit all open apps and log out any other users. Open Boot Camp Assistant from Applications → Utilities and click Continue. If the Select Tasks step appears, select the option to remove Windows 10 or later, then click Continue.',
          'If the Mac has a single internal disk, click Restore. If it has more than one, select the Windows disk, select “Restore disk to a single macOS partition,” then click Continue. When Boot Camp Assistant finishes, the space belongs to macOS again.',
        ],
      },
      {
        id: 'no-other-tools',
        title: '4. Don’t use other tools, and don’t expect resizing',
        paragraphs: [
          'Apple says not to use any other utilities to remove Windows or a partition that was created with Boot Camp. Use Boot Camp Assistant even if Disk Utility or a third-party partition tool seems to offer a shortcut. If Boot Camp Assistant reports an error, note the exact message and contact Apple Support before trying anything else.',
          'Boot Camp Assistant can’t change the partition’s size either: Apple’s installation guide says you can’t resize the partition later. A larger or smaller Windows partition means backing up Windows, removing it and installing again with the size you want. If Windows only needs more room for files, an external drive formatted as exFAT can be read and written by both Windows and macOS.',
        ],
      },
      {
        id: 'check-the-space',
        title: '5. Check the space',
        paragraphs: [
          'Open System Settings → General → Storage and check that available space has grown. Disk Utility should show the macOS container using the space again. If it hasn’t grown, restart and look again. If the Windows partition still appears in diskutil list, contact Apple Support rather than deleting it by hand.',
          'If you removed Windows only to free space, the storage guides help with what remains on the macOS side, starting with finding the largest items before deleting anything.',
        ],
      },
    ],
    related: [
      'apfs-container-vs-volume',
      'virtual-machine-disk-space-mac',
      'format-external-hard-drive-mac',
      'free-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple: remove Windows from your Mac using Boot Camp',
        url: 'https://support.apple.com/guide/bootcamp-assistant/remove-windows-from-your-mac-using-boot-camp-bcmp59c41c31/mac',
      },
      {
        label: 'Apple: install Windows on your newer Mac using Boot Camp',
        url: 'https://support.apple.com/guide/bootcamp-assistant/install-windows-newer-mac-boot-camp-bcmp173b3bf2/mac',
      },
      {
        label: 'Apple: install Windows 10 on your Mac with Boot Camp Assistant',
        url: 'https://support.apple.com/en-us/102622',
      },
    ],
  },
];
