import type { Guide } from './guides.ts';

const memoryUsage = {
  label: 'Apple: view memory usage in Activity Monitor',
  url: 'https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac',
};
const needMoreRam = {
  label: 'Apple: check if your Mac needs more RAM',
  url: 'https://support.apple.com/guide/activity-monitor/check-if-your-mac-needs-more-ram-actmntr34865/mac',
};

export const systemQaGuides: Guide[] = [
  {
    slug: 'free-command-on-mac',
    title: 'Is there a free command on Mac? Check RAM in Terminal',
    description:
      'macOS has no free command. Use top, vm_stat, sysctl and memory_pressure to see used, free and swap memory in Terminal, and learn which number matters.',
    summary:
      'No, macOS doesn’t include free, but top -l 1 | grep PhysMem gives a one-line summary of used and unused RAM, and sysctl vm.swapusage adds swap. vm_stat has the detail in pages; memory_pressure and Activity Monitor show whether the Mac is actually short of memory.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'top-one-liner',
        title: '1. Get a one-line summary with top',
        paragraphs: [
          'Linux’s free prints total, used and free memory in one small table. The nearest thing on a Mac is top in logging mode: -l 1 takes a single sample and exits instead of opening the live screen, and grep keeps only the memory line. The result looks like “PhysMem: 125G used (8482M wired, 12G compressor), 2126M unused.”',
          'Used covers memory apps hold, wired memory the system must keep in RAM, and the compressor, which stores squeezed pages in RAM instead of writing them to disk. Unused is RAM holding nothing at all. On a Mac that has been running for a while that last figure is usually small, and that is normal rather than a shortage: macOS keeps recently used files cached in spare RAM and hands it back when an app needs it.',
        ],
        code: ['top -l 1 | grep PhysMem'],
      },
      {
        id: 'sysctl-total-swap',
        title: '2. Add total RAM and swap with sysctl',
        paragraphs: [
          'The total and swap rows of free come from two kernel values. hw.memsize is the installed RAM in bytes; the second command divides it by 1,073,741,824 to print whole gigabytes. vm.swapusage reports swap total, used and free, and notes that swap is encrypted.',
          'Swap on a Mac isn’t a fixed partition. macOS creates swap files on the startup disk as it needs them, so the total grows and shrinks, and a few gigabytes of swap in use on a busy day is not a fault on its own. The swap guide explains where those files live and when swap is a warning sign.',
        ],
        code: ['sysctl hw.memsize vm.swapusage', 'echo $(( $(sysctl -n hw.memsize) / 1073741824 )) GB'],
      },
      {
        id: 'vm-stat-pages',
        title: '3. Read vm_stat, and convert pages to bytes',
        paragraphs: [
          'vm_stat is the detailed view, but it counts pages, not bytes. Its first line states the page size: 16,384 bytes on a Mac with Apple silicon, and 4,096 on an Intel Mac. pagesize prints the same value. Multiply any count by it to get bytes, or use the awk line below, which does the arithmetic and prints the main rows in megabytes.',
          'Apple’s memory documentation defines the lists: free pages aren’t being used for anything, active pages were accessed recently, inactive pages still hold valid data but haven’t been touched lately and can be reclaimed, and wired pages must never be paged out. “Pages occupied by compressor” is the RAM the compressor itself takes up. vm_stat -c 5 1 prints five samples one second apart, like free -s 1; after the first row, each row shows the change since the previous one.',
        ],
        code: [
          'pagesize',
          'vm_stat',
          "vm_stat | awk -v ps=$(pagesize) -F': +' '/^Pages (free|active|inactive|speculative|wired|occupied)/ {printf \"%-30s %8.0f MB\\n\", $1, $2*ps/1048576}'",
          'vm_stat -c 5 1',
        ],
      },
      {
        id: 'memory-pressure-command',
        title: '4. Check memory_pressure for an “available” figure',
        paragraphs: [
          'free’s available column estimates how much memory apps could still get. The closest built-in figure is the last line of memory_pressure run with no options, such as “System-wide memory free percentage: 84%”. Above it, the tool states the total RAM and page size, then repeats vm_stat’s counts grouped into free, swap, queue, compressor and file activity.',
          'Run it exactly as shown. With -l or -p, memory_pressure deliberately allocates memory to push the Mac into a warning or critical state; that is a testing tool for developers, not a status check. Without options it only reports.',
        ],
        code: ['memory_pressure'],
      },
      {
        id: 'why-free-looks-low',
        title: 'Why free memory looks low, and what to watch instead',
        paragraphs: [
          'A Mac keeps as much useful data in RAM as it can, compresses memory that hasn’t been used lately, and only then writes to swap. Apple’s Activity Monitor guide makes the point directly: having free or unused memory doesn’t necessarily improve performance. A small unused figure from top, or a low free count from vm_stat, is not a reason to act.',
          'The figure that tells you whether the Mac is short of memory is the Memory Pressure graph in Activity Monitor’s Memory tab. Apple describes green as RAM being used efficiently, yellow as a sign the Mac might eventually need more RAM, and red as a sign it needs more. If pressure stays high, quit what you aren’t using. Commands that claim to clear RAM are covered in the purge guide; they rarely help.',
        ],
      },
      {
        id: 'free-alias',
        title: 'A free shortcut for Terminal',
        paragraphs: [
          'If you type free out of habit, add this line to ~/.zshrc, the file zsh reads when a Terminal window opens, then open a new window. Typing free then prints the PhysMem line and the swap line together. It is only a shortcut for the commands above, so it reads the same values and changes nothing.',
          'For scripts, read the raw sources instead: sysctl -n hw.memsize returns plain bytes, and vm_stat’s counts are easy to parse once you multiply by the page size. top switches between M and G depending on the value, which makes its line easier to read than to parse.',
        ],
        code: ["alias free='top -l 1 | grep PhysMem; sysctl vm.swapusage'"],
      },
    ],
    related: [
      'mac-swap-memory',
      'purge-command-mac-memory',
      'mac-out-of-application-memory',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      memoryUsage,
      needMoreRam,
      {
        label: 'Apple Developer: about the virtual memory system',
        url: 'https://developer.apple.com/library/archive/documentation/Performance/Conceptual/ManagingMemory/Articles/AboutMemory.html',
      },
    ],
  },
  {
    slug: 'mds-stores-high-cpu-mac',
    title: 'mds_stores using high CPU on Mac: what Spotlight is doing',
    description:
      'mds, mds_stores and mdworker are Spotlight indexing your Mac. Why they run hot after updates or new drives, how to check them, exclude folders or rebuild.',
    summary:
      'mds and mds_stores are Spotlight’s indexing processes, and high CPU usually means they are building or updating the index, most often after a macOS update, a large file copy or a newly connected drive. Give it time on power; if it never settles, exclude busy folders or rebuild the index.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-the-processes-are',
        title: 'What mds, mds_stores and mdworker do',
        paragraphs: [
          'mds is the metadata server behind Spotlight. Its manual page says it serves every client of the metadata APIs, including Spotlight, has no settings, and shouldn’t be run by hand. mdworker and mdworker_shared are the workers mds uses to scan and index files when a volume is mounted or a file changes. mds_stores, as its name suggests, looks after the index databases themselves, which mdutil calls metadata stores.',
          'Indexing is incremental. Once the index is built, these processes wake when files change and go quiet again. Heavy work follows events that change many files at once: installing a macOS update, restoring from a backup, copying a large folder, unpacking a project with thousands of files, or connecting a drive Spotlight hasn’t seen before.',
        ],
      },
      {
        id: 'confirm-spotlight',
        title: '1. Confirm Spotlight is the busy process',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities, click CPU and sort by % CPU. Or run the ps line below, which lists each Spotlight process with its current CPU share. Several mdworker_shared processes at once is normal while indexing is under way.',
          'mdutil -s / reports whether indexing is enabled for the startup volume, and mdutil -s -a does the same for every mounted volume, including external drives and disk images. It shows status, not progress. Apple’s Spotlight article notes that, depending on how much data there is, indexing can take hours or even days.',
        ],
        code: ["ps -Ac -o pid,pcpu,comm | grep -E 'mds|mdworker'", 'mdutil -s /', 'mdutil -s -a'],
      },
      {
        id: 'let-it-finish',
        title: '2. Let it finish',
        paragraphs: [
          'After a macOS update, leave the Mac awake and connected to power for a few hours. Indexing that keeps being interrupted by sleep simply takes longer. Apple says indexing happens after a software update or upgrade, so a busy mds_stores on the first day is expected; the slow-after-update guide covers the rest of that period.',
          'Low free space can hold it up further. The mdutil manual notes that indexing may be delayed by low disk space, and the index needs room to grow. If the startup disk is nearly full, free some space first.',
        ],
      },
      {
        id: 'exclude-busy-folders',
        title: '3. Exclude folders that change all the time',
        paragraphs: [
          'If CPU use never settles, something is probably rewriting files all day: a build folder, a virtual machine disk, a sync folder being downloaded again, or a database a developer tool keeps updating. Spotlight notices each change and indexes it again. Excluding that folder stops the churn without turning Spotlight off.',
          'Open System Settings → Spotlight (Siri & Spotlight on some releases), scroll down and click Search Privacy (Spotlight Privacy on some releases). Click the add button and choose the folder or drive, or drag it into the list. Apple notes two limits: excluding certain folders can mean you aren’t told about some app updates, and a Time Machine backup disk keeps being indexed because Time Machine needs it.',
        ],
      },
      {
        id: 'rebuild-index',
        title: '4. Rebuild the index if search is also wrong',
        paragraphs: [
          'If Spotlight is busy and also misses files you know exist, rebuild the index. Apple’s method uses the same privacy list: add the disk or folder, wait a few seconds, select it, click the remove button, then click Done. Spotlight then indexes it from scratch, so expect mds_stores to be busy again for a while.',
          'mdutil -E does the same from Terminal: it erases the index for the volume you name, and Spotlight rebuilds it. It needs an administrator password. Don’t delete the hidden .Spotlight-V100 folder by hand; macOS protects it, and both supported routes already clear it and start the rebuild.',
        ],
        code: ['sudo mdutil -E /'],
      },
      {
        id: 'when-to-worry',
        title: 'When to look further',
        paragraphs: [
          'Don’t turn indexing off for the whole startup disk to quiet the fan. Apple warns that excluding the internal disk means you won’t be notified about any app updates, and search in Finder and many apps depends on the index.',
        ],
        items: [
          'Still high CPU a day or two after an update, with the Mac left awake: look for a folder that keeps changing and exclude it.',
          'The same external drive is indexed every time you connect it: add it to the privacy list if you never search it.',
          'Spotlight can’t find files you know exist: rebuild the index as above.',
          'mdutil -s shows indexing disabled on the startup volume and you didn’t turn it off: sudo mdutil -i on / turns it back on.',
        ],
      },
    ],
    related: ['mac-slow-after-macos-update', 'mac-running-slow-low-storage', 'mac-storage-full', 'free-command-on-mac'],
    sources: [
      {
        label: 'Apple: about Spotlight indexing and search results',
        url: 'https://support.apple.com/en-us/102321',
      },
      {
        label: 'Apple: prevent Spotlight searches in specific folders or disks',
        url: 'https://support.apple.com/guide/mac-help/mchl1bb43b84/mac',
      },
    ],
  },
  {
    slug: 'purge-command-mac-memory',
    title: 'sudo purge on Mac: does it clear RAM, and should you?',
    description:
      'What sudo purge really does on a Mac: it empties the disk cache, not app memory. Why it rarely helps, and what to do instead when memory pressure is high.',
    summary:
      'sudo purge empties the disk cache, the file data macOS keeps in otherwise unused RAM; it doesn’t touch memory that apps are using. The drop is temporary and can make the next few minutes slower. If the Mac is short of memory, quit the app holding it.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-purge-does',
        title: 'What purge actually does',
        paragraphs: [
          'The manual page is short and specific: purge forces the disk cache to be flushed and emptied, so that a Mac approximates the cold cache it has just after startup, for performance analysis. It also says what it leaves alone: memory apps have allocated for their own data. That is the memory Activity Monitor counts as App Memory, and it’s usually what people are hoping to reclaim.',
          'The disk cache appears as Cached Files in Activity Monitor’s Memory tab, which Apple describes as files cached by the system into unused memory to improve performance. Emptying it makes the memory figures look better for a moment. The next time an app reads those files, macOS reads them from the disk again and the cache fills back up.',
        ],
        code: ['man purge'],
      },
      {
        id: 'why-it-rarely-helps',
        title: 'Why it rarely helps',
        paragraphs: [
          'Cached files are the easiest memory for macOS to give back. When an app needs RAM, the system can drop cache on its own, without being asked. Apple’s memory guidance puts it plainly: having free or unused memory doesn’t necessarily improve performance, and macOS gets the best performance by using and managing all of it.',
          'So purging swaps a cache that was helping for empty RAM that does nothing, and the Mac spends the next few minutes reading files from disk again. It won’t stop an app that keeps growing, won’t shrink memory that open apps hold, won’t remove swap files, and won’t free any disk space.',
        ],
      },
      {
        id: 'three-purges',
        title: 'Three different things called purge',
        paragraphs: [
          'The word turns up in three places on a Mac, and they aren’t related. None of them is something you need to trigger by hand in normal use.',
        ],
        items: [
          'The purge command empties the disk cache held in RAM, and nothing else.',
          'Purgeable pages in vm_stat are memory apps have marked as disposable. Apple’s developer documentation says the system discards it rather than writing it to disk when memory is reclaimed, and the app recreates it if needed.',
          'Purgeable space in Storage settings and Disk Utility is disk space macOS can free on its own when it needs room. The purgeable space guide covers it.',
        ],
      },
      {
        id: 'if-you-run-it',
        title: '1. If you still want to run it',
        paragraphs: [
          'purge lives at /usr/sbin/purge and needs administrator rights, so run it with sudo and enter your password. Save your work first: apps may pause briefly while the files they use are read back from disk.',
          'The useful cases are narrow: timing how long an app takes to open from a cold cache, or testing disk read speed without cached data skewing the result. For everyday slowness, the next step does more.',
          'If you want to see the effect for yourself, run top -l 1 | grep PhysMem before and after, or watch Cached Files in Activity Monitor. Unused memory should rise straight after a purge, then fall again as you open files and apps and macOS fills the cache back up. That round trip is the whole effect: nothing about the apps you have open has changed.',
        ],
        code: ['sudo purge'],
      },
      {
        id: 'free-memory-that-matters',
        title: '2. Free the memory that actually matters',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities and click Memory. Look at the Memory Pressure graph before any number: Apple describes green as RAM being used efficiently, yellow as a sign the Mac might eventually need more RAM, and red as a sign it needs more. If it’s green, there is nothing to clear.',
          'If it’s yellow or red, sort by the Memory column and quit the app at the top that you don’t need, after saving your work. Browsers with many tabs, virtual machines, large creative projects and developer tools are the usual candidates. A restart clears everything, including memory an app failed to release, and is the reliable way to start clean.',
          'If macOS warns that it has run out of application memory, or swap keeps climbing, the linked guides cover each case. Check free disk space too, because swap files need room on the startup disk.',
        ],
      },
    ],
    related: ['mac-swap-memory', 'mac-out-of-application-memory', 'free-command-on-mac', 'purgeable-space-on-mac'],
    sources: [
      memoryUsage,
      needMoreRam,
      {
        label: 'Apple Developer: caching and purgeable memory',
        url: 'https://developer.apple.com/library/archive/documentation/Performance/Conceptual/ManagingMemory/Articles/CachingandPurgeableMemory.html',
      },
    ],
  },
  {
    slug: 'remove-background-items-mac',
    title: 'How to remove background items on Mac after uninstalling',
    description:
      'Deleted an app but it still shows under Allow in the Background? Turn it off, find the launch agent it left behind, remove it safely, or reset with sfltool.',
    summary:
      'Turn the item off in System Settings → General → Login Items & Extensions first. If the app is gone but the entry stays, find its leftover launch agent or daemon in /Library/LaunchAgents, /Library/LaunchDaemons or ~/Library/LaunchAgents and move it to the Trash. sfltool resetbtm resets the list as a last resort.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'why-entries-stay',
        title: 'Why the entry outlives the app',
        paragraphs: [
          'Since macOS Ventura, System Settings lists apps that run helpers in the background, and macOS tells you when a new one is added. Many apps install those helpers as launch agents or launch daemons: small property list files that tell launchd, the macOS service manager, which program to run and when. Some also add a privileged helper tool in /Library/PrivilegedHelperTools.',
          'Dragging an app to the Trash doesn’t remove files outside the app, so a plist in /Library/LaunchAgents can stay behind. If it points to a program inside the deleted app, launchd has nothing to run, but the entry can keep its place in the list, sometimes under the developer’s name rather than the app’s.',
        ],
      },
      {
        id: 'turn-it-off',
        title: '1. Turn the item off in System Settings',
        paragraphs: [
          'Open System Settings → General → Login Items & Extensions; Ventura and Sonoma call it Login Items. The background list is App Background Activity in macOS Tahoe and Allow in the Background in earlier releases. Turn off the switch next to the app or developer. Open at Login, at the top, is a separate list of apps that open when you log in; select a leftover there and click the remove button.',
          'Turning an item off stops it running but deletes nothing, which is what you want while you are unsure what it is. If the app is still installed and you use it, prefer the switch to removing files: some apps need their helper to update, sync or back up.',
        ],
      },
      {
        id: 'find-the-file',
        title: '2. Find the file behind the entry',
        paragraphs: [
          'Apple’s launchd documentation names the locations for third-party jobs: /Library/LaunchAgents and /Library/LaunchDaemons for items installed for all users, and ~/Library/LaunchAgents for your account only. File names usually start with the developer’s reversed domain, such as com.example.agent.plist, which makes the owner easy to spot. Leave /System/Library/LaunchAgents and /System/Library/LaunchDaemons alone; they belong to macOS.',
          'plutil -p prints a plist in readable form and changes nothing. Look at ProgramArguments (or Program): it names what the job runs. If that path points into an app you have deleted, the file is a leftover. For a helper tool, codesign shows who signed it, and the Authority line names the developer. Replace the example names with the file you are checking.',
        ],
        code: [
          'ls -l /Library/LaunchAgents /Library/LaunchDaemons ~/Library/LaunchAgents',
          'ls -l /Library/PrivilegedHelperTools',
          'plutil -p /Library/LaunchAgents/com.example.agent.plist',
          'codesign -dvv /Library/PrivilegedHelperTools/com.example.helper 2>&1 | grep Authority',
        ],
      },
      {
        id: 'remove-leftover',
        title: '3. Remove a leftover only when its app is gone',
        paragraphs: [
          'Check the developer’s site for an uninstaller first; it knows every file the app installed, including ones outside these folders. Otherwise, in Finder choose Go → Go to Folder, enter the folder path, and drag the leftover plist to the Trash. Files in /Library ask for an administrator password. Move a helper from /Library/PrivilegedHelperTools only when it plainly belongs to the same app.',
          'Restart afterwards so launchd drops any job it had already loaded, then check the list in System Settings again. Don’t remove files for an app you still use, and don’t remove anything you can’t tie to a specific app; turning its switch off can be undone, while deleting it is a guess. Empty the Trash only after the Mac has run normally for a while.',
        ],
      },
      {
        id: 'reset-with-sfltool',
        title: '4. Reset the list with sfltool if an entry won’t go',
        paragraphs: [
          'Occasionally a row survives after its file is gone, because macOS keeps its own record of login and background items. Apple’s deployment guide documents two commands for that record: sfltool dumpbtm prints the current status of login and background items, and sfltool resetbtm resets the data. macOS may ask for an administrator password.',
          'Resetting is a blunt tool. Restart afterwards; as apps that are still installed register their helpers again, expect background item notifications for apps you already had, and review your switches, because earlier choices may not carry over. Use it once to clear stale entries, not as routine maintenance.',
        ],
        code: ['sfltool dumpbtm', 'sfltool resetbtm'],
      },
    ],
    related: ['uninstall-apps-on-mac', 'mac-running-slow-low-storage', 'application-support-folder-mac', 'show-library-folder-mac'],
    sources: [
      {
        label: 'Apple: change Login Items & Extensions settings on Mac',
        url: 'https://support.apple.com/guide/mac-help/mtusr003/mac',
      },
      {
        label: 'Apple: manage login items and background tasks on Mac',
        url: 'https://support.apple.com/guide/deployment/manage-login-items-background-tasks-mac-depdca572563/web',
      },
      {
        label: 'Apple Developer: creating launch daemons and agents',
        url: 'https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html',
      },
    ],
  },
  {
    slug: 'uninstall-rosetta-2-mac',
    title: 'Can you uninstall Rosetta 2 on Mac? What to do instead',
    description:
      'Apple offers no way to uninstall Rosetta 2, and it uses little space. Check whether it’s installed, which apps still need it, and why removing it is risky.',
    summary:
      'Not in any supported way: Apple provides a command to install Rosetta 2 but none to remove it, its files are protected by System Integrity Protection, and they take up only a few megabytes. Leave it installed; if you want to stop relying on it, find and replace your Intel apps.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-rosetta-is',
        title: 'What Rosetta 2 is',
        paragraphs: [
          'Rosetta 2 translates apps built for Intel processors so they run on a Mac with Apple silicon. macOS doesn’t install it up front: you are asked the first time you open an Intel app, or you can install it with softwareupdate --install-rosetta. Intel Macs don’t use it.',
          'It also has an end date in Apple’s plans. Apple’s support article says Rosetta is available on Apple silicon Macs through macOS 27, and that from macOS 28 it will work only for certain older, unmaintained games that rely on Intel frameworks. That is a better reason to review your Intel apps than disk space.',
        ],
      },
      {
        id: 'check-installed',
        title: '1. Check whether Rosetta is installed',
        paragraphs: [
          'oahd is the Rosetta service; if pgrep prints a process number, Rosetta is installed and running. The arch line asks macOS to run a tiny system tool as Intel code: it prints the message when Rosetta works, and fails with “Bad CPU type in executable” when Rosetta isn’t installed.',
          'pkgutil lists installer receipts. On a Mac with Rosetta you’ll see com.apple.pkg.RosettaUpdateAuto. On an Intel Mac none of this applies.',
        ],
        code: [
          '/usr/bin/pgrep oahd',
          'arch -x86_64 /usr/bin/true && echo "Rosetta works"',
          'pkgutil --pkgs | grep -i rosetta',
        ],
      },
      {
        id: 'how-little-space',
        title: '2. See how little space it takes',
        paragraphs: [
          'Rosetta’s programs are small. On a Mac with macOS Tahoe 26.6 that we checked, the two folders in the du line came to about 1 MB together. Rosetta is not a meaningful source of used storage, and removing it wouldn’t change the numbers in Storage settings.',
          'The Rosetta service keeps its working data in /var/db/oah, which macOS protects: du reports “Operation not permitted”. The ls -lO line shows the restricted flag on the folders inside /Library/Apple, which is System Integrity Protection marking the folder as off-limits, even to administrators.',
        ],
        code: ['du -sh /Library/Apple/usr/libexec/oah /usr/libexec/rosetta', 'ls -lO /Library/Apple'],
      },
      {
        id: 'why-no-uninstall',
        title: 'Why there is no uninstall',
        paragraphs: [
          'Apple documents how to install Rosetta and nothing about removing it. Parts of it live in /usr and /var, which Apple lists among the locations System Integrity Protection guards, and the rest sits under /Library/Apple with the same restricted flag. Deleting those files means starting up in macOS Recovery and turning System Integrity Protection off, which lowers the Mac’s protection against malicious software, all to save a megabyte or two.',
          'It also doesn’t stick. The next Intel app, or an installer or plug-in built for Intel, asks to install Rosetta again. We don’t recommend removing it, and this guide doesn’t give steps for it. If you simply don’t want Rosetta in use, stop opening Intel apps; when there is nothing to translate, it has nothing to do.',
        ],
      },
      {
        id: 'find-intel-apps',
        title: '3. Find the apps that still need Rosetta',
        paragraphs: [
          'For one app, select it in Finder and choose File → Get Info. Apple lists the Kind values: Application (Intel) needs Rosetta, while Application (Universal) and Application (Apple silicon) don’t. For every app at once, hold Option, choose Apple menu → System Information, then click Applications under Software and sort by the Kind column, which reads Intel, Universal, Apple Silicon, iOS or Other.',
          'The Terminal line prints the names of Intel apps from the same report; it can take a minute on a Mac with many apps. Check each developer’s site for a Universal or Apple silicon version, or look for a replacement. Updating usually removes the need for Rosetta entirely.',
          'Command-line tools count too. On a Mac with Apple silicon, Homebrew’s native installation lives in /opt/homebrew; one under /usr/local is normally the Intel version, and the tools it installed run through Rosetta. brew config shows which prefix you are using, and its Rosetta 2 line reads true when that Homebrew is running under translation.',
        ],
        code: [
          "system_profiler SPApplicationsDataType | awk '/^    [^ ].*:$/ {app=$0} /Kind: Intel/ {print app}'",
          "brew config | grep -E 'HOMEBREW_PREFIX|Rosetta'",
        ],
      },
    ],
    related: ['uninstall-apps-on-mac', 'delete-built-in-apps-mac', 'how-to-check-storage-on-mac', 'mac-running-slow-low-storage'],
    sources: [
      {
        label: 'Apple: using Intel-based apps on a Mac with Apple silicon',
        url: 'https://support.apple.com/en-us/102527',
      },
      {
        label: 'Apple: about System Integrity Protection on your Mac',
        url: 'https://support.apple.com/en-us/102149',
      },
    ],
  },
  {
    slug: 'delete-built-in-apps-mac',
    title: 'Can you delete Safari, Mail or GarageBand on Mac?',
    description:
      'Safari, Mail and Chess sit on the Mac’s read-only system volume and can’t be deleted. GarageBand, iMovie, Pages, Numbers and Keynote can. How to tell which.',
    summary:
      'Safari, Mail, Chess and the other apps that come with macOS can’t be deleted: they live on a sealed, read-only system volume, and the space they use belongs to macOS. Apple’s App Store apps, such as GarageBand, iMovie, Keynote, Pages and Numbers, can be deleted like any other app and reinstalled from the App Store.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'why-they-wont-delete',
        title: 'Why Safari, Mail and Chess won’t delete',
        paragraphs: [
          'Since macOS Catalina, the operating system runs from a dedicated volume named Macintosh HD that is read-only, while your files and apps live on a separate Macintosh HD - Data volume; Finder shows the two as one. Apps that ship with macOS are part of that system volume. Drag one to the Trash and Finder replies that it “can’t be modified or deleted because it’s required by macOS.”',
          'Since macOS Big Sur, that volume is also cryptographically sealed, and the Mac checks the seal at startup. Removing a built-in app would mean switching those protections off, and there would be nothing to gain: the space belongs to macOS itself and isn’t storage you can reclaim. Storage settings count it under macOS, the category for the system itself; the macOS storage guide explains why that figure is large.',
        ],
      },
      {
        id: 'tell-them-apart',
        title: '1. Tell a built-in app from an App Store app',
        paragraphs: [
          'Built-in apps live in /System/Applications, even though Finder shows them in the Applications folder alongside yours; anything the ls line lists is part of macOS. Safari is a special case: /Applications/Safari.app is a link into a separately updated part of the system, and it can’t be deleted either.',
          'System Information answers for every app: hold Option, choose Apple menu → System Information, then click Applications under Software. The Obtained from column reads Apple for built-in apps and App Store for anything installed from the App Store, including Apple’s own. The awk line prints that App Store group, and the mount line shows the startup volume flagged sealed and read-only.',
        ],
        code: [
          'ls /System/Applications',
          "system_profiler SPApplicationsDataType | awk '/^    [^ ].*:$/ {app=$0} /Obtained from: App Store/ {print app}'",
          "mount | grep ' on / '",
        ],
      },
      {
        id: 'delete-app-store-apps',
        title: '2. Delete GarageBand, iMovie, Keynote, Pages or Numbers',
        paragraphs: [
          'These come from the App Store, so they uninstall like any App Store app. Apple’s App Store guide describes clicking Apps in the Dock, then clicking and holding the app’s icon until it jiggles and clicking its Close button. You can also drag the app from the Applications folder to the Trash in Finder. Older macOS releases offer the same jiggle-and-delete in Launchpad.',
          'Your documents stay where they are, because deleting an app doesn’t remove the files you made with it. The same goes for content these apps download: GarageBand’s sound library lives outside the app, and iMovie keeps its library in your Movies folder. The linked guides cover removing each of those, and that is usually where the real space is.',
          'To get an app back, open the App Store, click your name at the bottom of the sidebar, find the app in your purchases and click the download button.',
        ],
      },
      {
        id: 'hide-what-stays',
        title: '3. Keep the ones you can’t delete out of your way',
        paragraphs: [
          'Control-click a built-in app in the Dock and choose Options → Remove from Dock. To stop Safari or Mail opening links, pick another default web browser in System Settings → Desktop & Dock, and another default email reader in Mail → Settings → General.',
          'None of this changes storage; it only keeps the apps out of sight. If the goal is space, the storage guides show what is actually using it.',
        ],
      },
      {
        id: 'what-not-to-try',
        title: 'What not to try',
        paragraphs: [
          'Instructions that tell you to disable System Integrity Protection, mount the system volume as writable or delete from /System either predate the sealed system volume or ignore it. On current macOS they fail, break the seal the Mac verifies at startup, or both. Apple’s uninstall article is plain that you can’t use Finder to delete apps your Mac requires, and there is no supported workaround.',
          'If a built-in app misbehaves, update macOS. If you simply don’t want it, hiding it costs nothing.',
        ],
      },
    ],
    related: ['uninstall-apps-on-mac', 'garageband-sound-library-mac', 'imovie-library-taking-up-space', 'macos-storage-category-size'],
    sources: [
      {
        label: 'Apple: about the read-only system volume in macOS',
        url: 'https://support.apple.com/en-us/101400',
      },
      {
        label: 'Apple: delete or uninstall apps on Mac',
        url: 'https://support.apple.com/en-us/102610',
      },
      {
        label: 'Apple: install and uninstall App Store purchases on Mac',
        url: 'https://support.apple.com/guide/app-store/install-and-uninstall-purchased-apps-fir0fb69db23/mac',
      },
    ],
  },
  {
    slug: 'com-apple-bird-taking-space',
    title: 'What is com.apple.bird, and why is it so big on Mac?',
    description:
      'bird is the macOS process behind iCloud Drive, and com.apple.bird is its cache. Where its files live, how to size them, and the safe way to shrink them.',
    summary:
      'bird is the macOS daemon that syncs iCloud Drive, and com.apple.bird is its cache folder. When bird seems to use a lot of space, the space is usually iCloud Drive files stored on the Mac; reduce it with Remove Download or Optimize Mac Storage, not by deleting bird’s folders.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-bird-is',
        title: 'What bird and cloudd are',
        paragraphs: [
          'bird’s manual page calls it one of the system daemons behind Documents in the Cloud, the feature now called iCloud Drive: it keeps the files on your Mac and in iCloud in step. cloudd is the CloudKit daemon, which syncs data for apps that store it in iCloud. You may see fileproviderd working alongside them. The manual pages say these daemons have no settings and shouldn’t be run by hand.',
          'Their activity rises when there is a lot to sync: turning on Desktop & Documents Folders, adding a large folder, signing in on a new Mac, or catching up after iCloud storage was full. High CPU during that work is expected and should fade once everything has synced.',
        ],
      },
      {
        id: 'where-the-space-is',
        title: '1. See where the space actually is',
        paragraphs: [
          'Three locations are involved. ~/Library/Caches/com.apple.bird is bird’s cache. ~/Library/Mobile Documents holds the iCloud Drive files stored on this Mac, including the folders apps keep there; Finder presents it as iCloud Drive. ~/Library/Application Support/CloudDocs holds bird’s own database of iCloud Drive items.',
          'On a Mac we tested with macOS Tahoe 26.6, the com.apple.bird cache was empty, Mobile Documents held the downloaded iCloud Drive files, and listing CloudDocs returned “Operation not permitted”: macOS protects it unless Terminal has Full Disk Access. If an app labels a large amount of storage as bird, check Mobile Documents first, because that is where downloaded iCloud Drive files are counted.',
        ],
        code: [
          'du -sh ~/Library/Caches/com.apple.bird',
          'du -sh ~/"Library/Mobile Documents"',
          'ls ~/"Library/Application Support/CloudDocs"',
        ],
      },
      {
        id: 'reduce-local-copy',
        title: '2. Reduce the local copy the supported way',
        paragraphs: [
          'In Finder, open iCloud Drive, Control-click files or folders you don’t need offline and choose Remove Download. They stay in iCloud and on your other devices, and download again when you open them. To let macOS do this automatically, go to System Settings → your name → iCloud → Drive and turn on Optimize Mac Storage; Apple says older documents are then kept only in iCloud when space is needed.',
          'If you want some files on this Mac only, Apple’s route is to drag them from iCloud Drive to a folder outside it, such as Downloads. They are copied to the Mac and removed from iCloud Drive on all your devices, which frees iCloud storage rather than Mac storage.',
          'Items marked Keep Downloaded are exempt, so clear that option on anything you no longer need offline. ClearDisk’s iCloud Doctor section lists iCloud Drive local copies and never deletes the cloud originals, which helps if you want to see the largest ones first.',
        ],
      },
      {
        id: 'why-not-delete',
        title: 'Why deleting bird’s folders is risky',
        paragraphs: [
          'Deleting inside Mobile Documents isn’t clearing a cache; it removes those files from iCloud Drive. Apple notes that items dragged out of iCloud Drive are removed from iCloud Drive on all your devices. Files still waiting to upload may exist only on this Mac: Apple says that when iCloud storage is full, a document stays on your Mac and uploads once space is available.',
          'CloudDocs is bird’s record of what is in sync, and removing it isn’t a documented fix for anything, so leave it alone. The cache folder was empty on our test Mac, so clearing it is unlikely to free space worth the trouble.',
        ],
      },
      {
        id: 'if-it-keeps-growing',
        title: '3. If bird stays busy or the space keeps growing',
        paragraphs: [
          'Check sync first. Apple’s tip is to hold the pointer over iCloud Drive in the Finder sidebar and click the status icon to see what is happening. In Terminal, brctl status lists items that haven’t finished syncing; its output is technical, but a container marked caught-up has nothing waiting.',
          'If uploads are stuck, or iCloud says it is full while the Mac still holds the files, the linked guides go through those cases. Space that grows while nothing is pending is usually new content: an app saving large files into its iCloud folder, or Desktop & Documents syncing a folder you just filled.',
        ],
        code: ['brctl status'],
      },
    ],
    related: [
      'icloud-drive-taking-up-space-on-mac',
      'icloud-drive-stuck-uploading-mac',
      'icloud-storage-full-but-not-mac',
      'keep-icloud-files-downloaded-mac',
    ],
    sources: [
      {
        label: 'Apple: store files in iCloud Drive on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchle5a61431/mac',
      },
      {
        label: 'Apple: work with folders and files in iCloud Drive',
        url: 'https://support.apple.com/guide/mac-help/mchl1a02d711/mac',
      },
    ],
  },
  {
    slug: 'list-disks-terminal-mac',
    title: 'lsblk on Mac: list disks and partitions in Terminal',
    description:
      'macOS has no lsblk. diskutil list shows every disk, partition and APFS volume; filters, diskutil info, df and system_profiler show drives and free space.',
    summary:
      'The macOS equivalent of lsblk is diskutil list, which prints every disk, partition and APFS volume with its identifier and size. diskutil list external physical narrows it to drives you have plugged in, diskutil info describes one in detail, and df -h shows how full each mounted volume is.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'diskutil-list',
        title: '1. List everything with diskutil list',
        paragraphs: [
          'diskutil list prints one block per disk. The heading says what kind it is: (internal, physical) is the built-in SSD, (external, physical) a USB or Thunderbolt drive, (disk image) a mounted .dmg, and (synthesized) an APFS container. Each row shows the type, name, size and identifier, such as disk3s1, which is what other diskutil commands expect.',
          'The synthesized blocks are what confuse people coming from Linux. APFS presents each container as a whole disk of its own, with its volumes numbered as slices, and the diskutil manual says that container disk exists for identification only and has no storage. So the internal SSD appears twice: once as disk0 with its partitions, and again as the container that holds Macintosh HD, Macintosh HD - Data, Preboot, Recovery and VM.',
        ],
        code: ['diskutil list'],
      },
      {
        id: 'filter-the-list',
        title: '2. Show only external or internal drives',
        paragraphs: [
          'Filters cut the list down. external physical shows only drives you have connected, which is the quickest way to check whether macOS sees a new drive at all; if it prints nothing, macOS doesn’t see any external drive. internal physical shows the built-in disk, and naming a disk, as in diskutil list disk0, shows just that one.',
          'Add -plist to get machine-readable output for scripts, much like lsblk --json. If a drive is missing here, it isn’t a file system problem you can fix with these commands: check the cable, port, enclosure and power, as the external-drive guide describes.',
        ],
        code: ['diskutil list external physical', 'diskutil list internal physical', 'diskutil list disk0'],
      },
      {
        id: 'diskutil-info',
        title: '3. Get details on one disk or volume',
        paragraphs: [
          'diskutil info does the job of lsblk -f and blkid together. Give it a mount point or identifier and it reports the file system, volume UUID, mount point, used space, the container’s free space, whether the volume is read-only, whether the device is solid state, and its SMART status.',
          'On current macOS, diskutil info / describes a snapshot of the sealed system volume. It is marked read-only, and its used space covers only macOS itself. For your own files, ask about /System/Volumes/Data instead. diskutil info disk0 describes the physical SSD, including its size and connection protocol.',
        ],
        code: ['diskutil info /', 'diskutil info /System/Volumes/Data', 'diskutil info disk0'],
      },
      {
        id: 'apfs-list',
        title: '4. See APFS containers and volumes',
        paragraphs: [
          'diskutil apfs list has no direct Linux counterpart. For each container it shows the capacity ceiling, the space in use by all its volumes and the space not yet allocated, then each volume with its role, such as System, Data, Preboot, Recovery or VM, and whether it is sealed or protected by FileVault.',
          'Volumes in a container share its free space, so the Capacity Not Allocated line is the free space for all of them. The APFS guide explains containers, volumes and partitions in more depth.',
        ],
        code: ['diskutil apfs list'],
      },
      {
        id: 'df-and-system-profiler',
        title: '5. Check usage with df, and hardware with system_profiler',
        paragraphs: [
          'df works much as it does on Linux, with BSD flags. df -h uses binary units, so a 1 TB SSD shows as about 926Gi; df -H uses powers of 1,000 and matches the GB figures in diskutil and System Settings. On the startup disk, read the /System/Volumes/Data line; the / line is the system snapshot and stays small. Every volume in the container reports the same available space.',
          'system_profiler SPStorageDataType lists each mounted volume with its free space, capacity, file system and whether it is writable, plus the physical drive behind it: device name, medium type, protocol and SMART status. For a graphical view, Disk Utility’s View → Show All Devices shows the same tree of disks, containers and volumes.',
          'Every command here only reads. diskutil can also erase and partition disks, so check the identifier carefully before running any diskutil verb other than list or info.',
        ],
        code: ['df -h', 'df -H /System/Volumes/Data', 'system_profiler SPStorageDataType'],
      },
    ],
    related: ['apfs-container-vs-volume', 'external-hard-drive-not-showing-up-mac', 'check-disk-space-mac-terminal', 'disk-utility-mac'],
    sources: [
      {
        label: 'Apple: view all devices or only volumes in Disk Utility',
        url: 'https://support.apple.com/guide/disk-utility/view-all-devices-or-only-volumes-dskud6b39edb/mac',
      },
      {
        label: 'Apple: get detailed information about a disk in Disk Utility',
        url: 'https://support.apple.com/guide/disk-utility/get-detailed-information-about-a-disk-dskutl1005/mac',
      },
      {
        label: 'Apple: System Information User Guide',
        url: 'https://support.apple.com/guide/system-information/system-information-user-guide-syspr35536/mac',
      },
    ],
  },
  {
    slug: 'show-folder-sizes-finder-mac',
    title: 'How to show folder sizes in Finder on Mac',
    description:
      'Show folder sizes in Finder: turn on Calculate all sizes in List view, total selected files with the Inspector, and compare many folders with du.',
    summary:
      'In List view, choose View → Show View Options and turn on Calculate all sizes; folders then show their size and can be sorted by it. To total several selected items, press Option-Command-I for the Inspector. Get Info (Command-I) sizes a single folder.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'list-view-sizes',
        title: '1. Show folder sizes in List view',
        paragraphs: [
          'By default Finder leaves the Size column empty for folders, showing two dashes, because adding up every file inside takes time. Open the folder, switch to List view with View → as List or Command-2, then choose View → Show View Options or press Command-J and select Calculate all sizes. Sizes appear as Finder finishes counting.',
          'The setting applies to the folder you had open. To make it the default for List view, click Use as Defaults in the same window; folders that already have their own view settings may keep them. Click the Size column header to sort by size. In very large folders or on network drives, calculating can make Finder feel slower, so turn it off where you don’t need it.',
        ],
      },
      {
        id: 'total-a-selection',
        title: '2. Total the size of selected files',
        paragraphs: [
          'Select the files and folders, then press Option-Command-I, or hold Option and choose File → Show Inspector. The Inspector is a single window that describes the whole selection, including the number of items and their combined size. It follows the selection, so you can add or remove items and watch the total change.',
          'Build the selection the usual Finder way: Command-click adds or removes single items, Shift-click in List view selects a range, and Command-A selects everything in the window. With the Inspector open, selecting everything in a folder gives its total without opening Get Info at all.',
          'Command-I, the usual Get Info shortcut, opens a separate window for each selected item, which is no help for a total. Apple’s Finder help also documents Get Summary Info for multiple items; it appears in the File menu when you hold Control.',
        ],
      },
      {
        id: 'get-info-one-folder',
        title: '3. Check one folder with Get Info',
        paragraphs: [
          'Select a folder and press Command-I. The Size line counts up while Finder works through the contents, then shows the total in bytes, the space used on disk and the number of items. For a large folder, wait until the count stops before you trust the number.',
          'Size and on-disk size differ because files occupy whole storage blocks, so a folder of many tiny files uses more on disk than its byte count suggests. Treat either figure as a guide to what deleting would free, not a promise: iCloud Drive files that aren’t downloaded, and copies that APFS stores as clones sharing space with another file, don’t take their full size on this Mac.',
        ],
      },
      {
        id: 'status-bar',
        title: 'The status bar doesn’t total a selection',
        paragraphs: [
          'View → Show Status Bar (Command-/) adds a strip to the Finder window. Apple describes it as showing the number of items in the folder and the available space on the disk. It counts how many items you have selected but doesn’t add up their size, which is why the Inspector is the tool for that.',
          'Show Path Bar (Option-Command-P) is worth turning on at the same time: once you find a large folder, it shows where that folder actually lives. In Icon view, Show item info in the View Options window adds a line under each icon; Apple says it can include the file size, but it won’t add up a folder for you.',
        ],
      },
      {
        id: 'terminal-many-folders',
        title: 'Size many folders at once in Terminal',
        paragraphs: [
          'Finder is slow for comparing dozens of folders. du -sh prints one line per folder with its size in readable units, and sort -h puts the largest last. It only reads; the Terminal guide explains the flags, hidden folders and permission errors.',
          'ClearDisk’s free scan gives the same kind of answer as a storage map and a large-files list, for the whole disk or a folder you choose, if you would rather see sizes than read them.',
        ],
        code: ['du -sh ~/Documents/* | sort -h', 'du -sh ~/Library/* 2>/dev/null | sort -h'],
      },
    ],
    related: ['check-disk-space-mac-terminal', 'find-large-files-on-mac', 'how-to-check-storage-on-mac', 'disk-space-analyzer-mac'],
    sources: [
      {
        label: 'Apple: get file, folder and disk information on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1774/mac',
      },
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
      {
        label: 'Apple: change how folders are displayed in the Finder',
        url: 'https://support.apple.com/guide/mac-help/mchldaafb302/mac',
      },
    ],
  },
];
