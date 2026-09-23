import type { Guide } from './guides.ts';

const freeUpStorage = {
  label: 'Apple: free up storage space on Mac',
  url: 'https://support.apple.com/en-us/102624',
};
const localSnapshots = {
  label: 'Apple: about Time Machine local snapshots',
  url: 'https://support.apple.com/en-us/102154',
};

export const spaceQaGuides: Guide[] = [
  {
    slug: 'disk-almost-full-notification-mac',
    title: 'Can you turn off “Your disk is almost full” on Mac?',
    description:
      'Why your Mac shows “Your disk is almost full”, why there’s no supported way to switch it off, and how to make enough room that it stops on its own.',
    summary:
      'Apple documents no setting that turns this warning off, and hiding it removes the last notice before apps start failing to save. The dependable way to silence it is to give the startup disk more free room, then keep a margin so it doesn’t come back.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-triggers-it',
        title: 'What triggers the warning',
        paragraphs: [
          'The alert reads “Your disk is almost full” with the suggestion “Save space by optimizing storage,” and its Manage button leads to storage management. On macOS Tahoe it comes from a background agent called diskspaced, part of the system’s own storage-management framework, not from an app you installed. Apple doesn’t publish the free-space level that sets it off.',
          'The agent’s log messages on macOS Tahoe say that it ignores volumes other than the one holding your home folder, and that it skips a warning when it notified you recently. So an external drive filling up won’t produce it, and a quiet day doesn’t mean the problem went away. Apple also says macOS clears caches and logs that are safe to delete when space is needed, so treat the warning as a sign that automatic clean-up alone isn’t keeping enough room free.',
        ],
      },
      {
        id: 'why-hiding-it-is-risky',
        title: 'Why hiding it is riskier than it looks',
        paragraphs: [
          'The warning is the only notice macOS gives before a full disk starts breaking ordinary work. When the startup disk runs out, apps can fail to save documents, downloads and updates stop, and memory swap has nowhere to grow, which is one route to “Your system has run out of application memory.” In the worst case a Mac with no room left struggles to start up at all.',
          'Time Machine is affected too. Apple says local snapshots are stored only on disks that have plenty of free space, so a disk that lives near full keeps fewer recent recovery points on the Mac itself. None of these problems announce themselves the way the warning does, which is why silencing it tends to trade one irritation for a harder problem later.',
        ],
      },
      {
        id: 'check-real-free-space',
        title: '1. Check how much room is really free',
        paragraphs: [
          'Open System Settings → General → Storage and read the available figure. That number includes purgeable space, which macOS can reclaim on demand, so it can look healthier than the disk feels. For a stricter reading, run df -h / in Terminal and look at the Avail column, which counts only free space.',
          'Ignore the Used column on that line. Current macOS splits the startup disk into a sealed, read-only system volume and a separate data volume; / is the system volume, so its Used figure stays small whatever you do. Avail is shared by every volume on the disk, which is why it’s the number worth writing down.',
        ],
        code: ['df -h /'],
      },
      {
        id: 'make-room',
        title: '2. Make room you can explain',
        paragraphs: [
          'Start with space that returns straight away and is easy to verify: review and empty the Trash, clear installers and disk images out of Downloads, and move finished projects to another drive. The storage-full guide linked below walks through that order. Measure after each step rather than removing things in bulk.',
          'If the disk keeps filling after you clear it, something is writing new data, and deleting the same things again only buys time. The guide to finding what is slowly filling the disk shows how to catch the app or folder responsible. ClearDisk’s free scan shows the largest folders, including hidden Library and developer folders, with their sizes, and lets you move what you choose to the Trash rather than deleting it outright.',
        ],
      },
      {
        id: 'keep-a-margin',
        title: '3. Keep a margin so the warning stays away',
        paragraphs: [
          'Getting just below the trigger point means the warning returns with the next download or update. Decide on a floor of free space that covers the largest thing this Mac routinely writes, such as a macOS update, a video export or a heavy swap session, and act when you drop below it. The free-space guide explains how to work that number out without leaning on a percentage.',
          'If the floor never holds, the disk is too small for what you keep on it. Moving libraries to an external drive or letting iCloud hold older files are the realistic fixes, and the guide to freeing space without deleting anything compares them.',
        ],
      },
      {
        id: 'if-you-still-want-it-gone',
        title: 'If you still want it gone',
        paragraphs: [
          'Apple doesn’t document a switch for this warning, and this guide doesn’t offer a hidden Terminal preference for it. System Settings → Notifications controls how apps and websites notify you, and a Focus can hold notifications back while it’s on. Apple doesn’t say whether this system warning follows those settings, so don’t count on them to hide it.',
          'Tips that unload the diskspaced agent with launchctl, or edit files in protected system folders, change macOS itself rather than a setting. They are undocumented, a macOS update can undo them, and they leave you without the early warning described above. If the alert appears while Storage settings and df both show plenty of free room, that mismatch is worth reporting to Apple Support rather than hiding.',
        ],
      },
    ],
    related: [
      'mac-storage-full',
      'find-what-is-filling-disk-mac',
      'how-much-free-space-to-keep-mac',
      'free-up-space-without-deleting-files',
    ],
    sources: [
      freeUpStorage,
      {
        label: 'Apple: optimize storage space on your Mac',
        url: 'https://support.apple.com/guide/mac-help/sysp4ee93ca4/mac',
      },
      localSnapshots,
    ],
  },
  {
    slug: 'find-what-is-filling-disk-mac',
    title: 'How to find what’s slowly filling your Mac’s disk',
    description:
      'Find what keeps filling your Mac’s disk: log free space, rank apps by Bytes Written, list big files changed in the last two days and compare folder sizes.',
    summary:
      'Measure first, then catch the writer. Log free space with df, check which apps write the most in Activity Monitor’s Disk tab, list large files changed in the last two days, and compare folder sizes a day apart. Growth you can pin to one path or one app has a fix; growth you only see in a category total doesn’t yet.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'log-free-space',
        title: '1. Log free space at the same times each day',
        paragraphs: [
          'Slow growth is easy to misjudge from memory, so write it down. Run the second command below once or twice a day; it appends the date and the free space on your startup disk to a small text file in your home folder. Read the Avail column of df, not Used: on current macOS, / is a sealed system volume whose Used figure barely moves, while Avail is shared by every volume on the disk.',
          'Use the same tool each time. Storage settings counts purgeable space as available and df doesn’t, so switching between them can invent a change. A drop that recovers within hours often comes from temporary files, local snapshots or swap; a steady loss over several days means something is accumulating.',
        ],
        code: [
          'df -h /',
          "echo \"$(date '+%F %R')  $(df -h / | awk 'NR==2 {print $4}')\" >> ~/free-space-log.txt",
        ],
      },
      {
        id: 'activity-monitor-disk',
        title: '2. See which apps write the most',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities and click Disk. Click the Bytes Written column heading to sort by it, and click again if you need to flip the order. The figure accumulates while each process runs, so a sync client, a backup tool, a browser or an app stuck in a logging loop tends to rise to the top over a day. Apple also offers View → Dock Icon → Show Disk Activity for a live graph in the Dock.',
          'Treat this as a list of suspects, not a measurement of space. Apps overwrite and delete much of what they write, so a process with a huge Bytes Written total may keep almost nothing, while a modest writer that never cleans up can fill a disk. Note the top few names and look for their folders in the next steps.',
        ],
      },
      {
        id: 'recent-large-files',
        title: '3. List large files changed in the last two days',
        paragraphs: [
          'The command below only reads. It searches your home folder (~) for files (-type f) larger than 500 MB (-size +500M) whose contents changed in the last two days (-mtime -2), without crossing into other mounted disks (-xdev). The -exec du -h part prints each file’s size, and 2>/dev/null hides “Permission denied” lines for folders macOS protects.',
          'On a large home folder it can take a few minutes. If nothing appears, lower the size to +100M or widen the window to -mtime -7. A result inside a Library folder is a strong lead, because the path usually names the app, and that app’s own settings are the place to fix it. Folders made of many small files won’t show up here; the next step catches those.',
        ],
        code: ['find ~ -xdev -type f -size +500M -mtime -2 -exec du -h {} + 2>/dev/null'],
      },
      {
        id: 'compare-folder-sizes',
        title: '4. Compare folder sizes a day apart',
        paragraphs: [
          'Run the first command now and the second a day later. Each writes the size of every folder up to three levels inside your home folder to a text file; it only reads your files, but it can take several minutes. The third command lines the two lists up and prints the folders that grew by 500 MB or more, largest first.',
          'A folder that didn’t exist yesterday shows up through its parent, so follow the growth down a level with du -sh on that path. To include folders macOS protects, such as Mail and Messages data, give Terminal Full Disk Access under System Settings → Privacy & Security first. Move the two text files to the Trash when you’re done.',
        ],
        code: [
          "du -xk -d 3 ~ 2>/dev/null | LC_ALL=C sort -t $'\\t' -k2 > ~/du-before.txt",
          "du -xk -d 3 ~ 2>/dev/null | LC_ALL=C sort -t $'\\t' -k2 > ~/du-after.txt",
          "LC_ALL=C join -t $'\\t' -j 2 ~/du-before.txt ~/du-after.txt | awk -F'\\t' '$3-$2 >= 512000 {printf \"%d MB\\t%s\\n\", ($3-$2)/1024, $1}' | sort -rn | head -20",
        ],
      },
      {
        id: 'watch-live-writes',
        title: '5. Watch live writes, briefly and with a suspect',
        paragraphs: [
          'fs_usage shows file system calls as they happen, including the path each process touches. It needs an administrator password, and without a filter it produces a flood of lines. Give it a time limit (-t 20 stops it after 20 seconds), file system events only (-f filesys), wide output so paths aren’t cut short (-w), and the name of the process you suspect at the end. Press Control-C to stop early.',
          'Look for the folder the process keeps writing to, then stop. The output contains your file paths, so review it before pasting it anywhere public. By default fs_usage leaves out Terminal and your shell, so it doesn’t trace itself.',
        ],
        code: ['sudo fs_usage -w -f filesys -t 20 ProcessName'],
      },
      {
        id: 'space-that-comes-and-goes',
        title: 'Space that comes and goes on its own',
        paragraphs: [
          'Some changes are macOS managing itself. Time Machine keeps hourly local snapshots on the startup disk and removes them as they age or when space is needed; tmutil listlocalsnapshots / lists them by date, without sizes, and changes nothing. Swap files grow under memory pressure and shrink later, and macOS updates download before they install.',
          'A free ClearDisk scan run before and after a day of normal work shows which folders grew, though it doesn’t name the process doing the writing.',
        ],
        code: ['tmutil listlocalsnapshots /'],
      },
    ],
    related: [
      'system-data-keeps-growing',
      'check-disk-space-mac-terminal',
      'time-machine-snapshots',
      'find-large-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: view disk activity in Activity Monitor',
        url: 'https://support.apple.com/guide/activity-monitor/view-disk-activity-actmntr1005/mac',
      },
      localSnapshots,
      {
        label: 'Apple: available, free and purgeable space in Disk Utility',
        url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
      },
    ],
  },
  {
    slug: 'free-up-space-without-deleting-files',
    title: 'How to free up Mac space without deleting anything',
    description:
      'Free up Mac storage without losing files: move libraries to an external drive, let iCloud keep older files on demand, or zip folders you rarely open.',
    summary:
      'Move the local copy somewhere else instead of destroying it: finished work to an external drive, libraries with their app’s own method, older files to iCloud with Optimize Mac Storage, and rarely opened folders into zip archives. Each option trades convenience, cost or offline access for space.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-can-mean',
        title: 'What “without deleting” can realistically mean',
        paragraphs: [
          'A file takes the same space wherever it sits on the Mac’s own disk, so reshuffling folders frees nothing. Space comes back only when the local copy leaves the disk: after it has been copied to another drive, uploaded to iCloud, or packed into a smaller archive. In every case the copy on the Mac is removed in the end; the point is that a complete copy still exists somewhere you can reach.',
          'That makes the other copy the thing to protect. A file that exists only on an external drive, or only in iCloud, isn’t backed up unless you arrange it, so check that Time Machine or another backup covers the new location before you rely on it.',
        ],
      },
      {
        id: 'external-drive',
        title: '1. Move finished work to an external drive',
        paragraphs: [
          'Good candidates are things you open rarely but want to keep: completed video and audio projects, old camera imports, disk images, archives and virtual machines you no longer run every day. In Finder, dragging to another disk copies; Apple’s Finder guide says to press and hold Command while dragging to move instead. Copying first is the safer habit: open a few files from the drive, then move the originals on the Mac to the Trash and empty it once you’re satisfied.',
          'An SSD suits material you still open now and then; a larger hard disk is fine for things you rarely touch. Format a drive that only Macs use as APFS, and eject it before unplugging. The external SSD guide linked below covers choosing and preparing the drive.',
        ],
      },
      {
        id: 'move-libraries',
        title: '2. Move app libraries with the app’s own method',
        paragraphs: [
          'Libraries are databases, not ordinary folders, so move them the way their app expects. For Photos, quit the app, copy the library to an APFS or Mac OS Extended drive, open it from there, and make it the System Photo Library if you use iCloud Photos. For Music, choose a new media folder in Music → Settings → Files, then use File → Library → Organize Library with Consolidate files, which copies the media and leaves the originals in place until you remove them.',
          'A library on an external drive is available only while the drive is connected. The Photos move guide linked below lists what to check before you remove the original library from the Mac.',
        ],
      },
      {
        id: 'icloud-on-demand',
        title: '3. Let iCloud keep full copies on demand',
        paragraphs: [
          'iCloud Drive can hold older files in the cloud and keep only recently used ones on the Mac. Open System Settings, click your name, click iCloud, click Drive, and turn on Optimize Mac Storage. Apple notes that when space isn’t needed, the full contents of iCloud Drive stay on the Mac, so this frees room gradually as the disk fills rather than all at once. Photos has its own Optimize Mac Storage option under Photos → Settings → iCloud, which keeps smaller versions on the Mac and full-resolution originals in iCloud Photos.',
          'The costs are real. Everything counts against your iCloud storage plan, a file that was moved out needs a connection to open, and deleting a synced file removes it from every device. Control-click anything you need offline and choose Keep Downloaded. Other cloud services offer the same on-demand idea through their own settings.',
        ],
      },
      {
        id: 'compress-rarely-used',
        title: '4. Compress folders you rarely open',
        paragraphs: [
          'Apple lists compression as a way to save space: Control-click a file or folder in Finder and choose Compress to create a .zip beside it. The original stays where it was, so you gain space only after you’ve opened the archive to check it and moved the original to the Trash. You also need enough free room to create the archive, and to expand it again later.',
          'Results depend on the content. Text, logs, spreadsheets, source code and uncompressed audio often shrink noticeably; photos, videos, music files and apps are usually compressed already and barely change. Compress one sample folder first and compare the two sizes with Get Info before archiving more.',
        ],
      },
      {
        id: 'choosing-between-them',
        title: 'Choosing between them',
        paragraphs: [
          'Decide by how often you need the files and where you’ll be when you do. These trade-offs usually settle it.',
          'If you’re not sure what is worth moving, ClearDisk’s free scan lists the largest folders and files on the Mac so you can pick the few that make a real difference.',
        ],
        items: [
          'External drive: fast, works offline and needs no subscription, but the files are there only when the drive is, and the drive needs its own backup.',
          'iCloud with Optimize Mac Storage: files follow you across devices, at the cost of iCloud storage and a connection to open files that were moved out.',
          'Compression: no new hardware or plan, but small gains for media and an extra step every time you need the files.',
          'Moving files between folders on the same disk: tidier, but it frees nothing.',
        ],
      },
    ],
    related: [
      'expand-mac-storage-external-ssd',
      'move-photos-library-to-external-drive',
      'optimize-storage-mac',
      'icloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      freeUpStorage,
      {
        label: 'Apple: store files in iCloud Drive on Mac',
        url: 'https://support.apple.com/guide/mac-help/store-files-in-icloud-drive-mchle5a61431/mac',
      },
      {
        label: 'Apple: organize files in folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/organize-files-with-folders-mh26885/mac',
      },
    ],
  },
  {
    slug: 'how-much-free-space-to-keep-mac',
    title: 'How much free space should you keep on a Mac SSD?',
    description:
      'Apple gives no free-space percentage for Macs. Here’s why updates, swap and snapshots need headroom, and how to pick a margin that fits your own Mac.',
    summary:
      'Apple doesn’t publish a percentage. Keep enough free room for the largest thing your Mac routinely has to write, such as a macOS update, a big export or heavy swap, plus a margin, and treat the installer’s own figure as the requirement when an upgrade is due.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-apple-says',
        title: 'What Apple says, and what it doesn’t',
        paragraphs: [
          'Apple’s support pages don’t give a universal free-space target for Macs. Its page on a Mac that runs slowly lists a startup disk without enough free space as one possible cause, and suggests moving files to another disk or deleting files you no longer need. For macOS installs, the installer states how much space it needs, and Apple notes that Software Update can use less storage to download and install updates than other methods.',
          'The percentages quoted in forums and articles are rules of thumb, not Apple guidance. A percentage also scales oddly: 10 percent of a 256 GB disk and 10 percent of a 4 TB disk are very different amounts of room, while the space a macOS update asks for doesn’t depend on the size of your disk. A figure in gigabytes, worked out from what your own Mac does, holds up better.',
        ],
      },
      {
        id: 'what-free-space-is-for',
        title: 'What the free space is actually for',
        paragraphs: [
          'Free space isn’t idle. macOS and your apps borrow it all the time, and the amount they need changes from hour to hour.',
          'When those needs collide on a nearly full disk, the results are concrete: a document that won’t save, an update that won’t start, or a memory warning.',
        ],
        items: [
          'Updates: an update downloads, unpacks and stages its files before it installs, so it needs more room than its download size.',
          'Swap: when memory is under pressure, macOS writes memory out to swap files on the startup disk. Activity Monitor shows this as Swap Used.',
          'Local snapshots: Apple says Time Machine stores local snapshots only on disks that have plenty of free space, so a disk kept near full holds fewer recent recovery points.',
          'App working files: exports, renders, imports, builds and expanded archives often need their full size free before an old copy goes away.',
        ],
      },
      {
        id: 'does-a-full-ssd-slow-a-mac',
        title: 'Does a full SSD slow down a Mac?',
        paragraphs: [
          'It can contribute. Apple lists insufficient free disk space among the causes of a slow Mac, and a disk with no room to grow swap leaves macOS fewer options when memory is tight. But free space isn’t a speed dial: once there is comfortable room, freeing more won’t make the Mac faster.',
          'If the Mac is slow while the disk has plenty of space, look at CPU use, memory pressure and login items instead. The slow-Mac guide linked below goes through them in order.',
        ],
      },
      {
        id: 'work-out-your-floor',
        title: '1. Work out your own floor',
        paragraphs: [
          'List the big writes this Mac makes in a normal month. Include the next macOS upgrade (the installer shows its requirement when you start it), your largest export or project build, anything you download in bulk, and the Swap Used figure in Activity Monitor → Memory on a busy day.',
          'The largest of those, plus any that can happen at the same time, is your floor. Add a margin for the unexpected, and more if you often work away from other storage. The result is a figure in gigabytes you can check against, which tells you more than a percentage does.',
        ],
      },
      {
        id: 'check-and-act-early',
        title: '2. Check it and act before the warning',
        paragraphs: [
          'Read the available figure in System Settings → General → Storage, or the Avail column of df -h / in Terminal, which leaves out purgeable space and so errs on the cautious side. When you drift toward your floor, clear something you understand before the “Your disk is almost full” warning does the reminding for you.',
          'If you pass the floor repeatedly without adding anything new, something is growing on its own. The guide to finding what fills the disk shows how to catch it with a few read-only commands.',
        ],
        code: ['df -h /'],
      },
      {
        id: 'if-the-floor-never-holds',
        title: 'If the floor never holds',
        paragraphs: [
          'A floor you can’t keep means the disk is too small for what lives on it, not that you need to clean harder. Clearing the same caches every week to stay above it only hides the shortfall, because apps rebuild them as they work. Move libraries and finished work to an external drive, let iCloud hold older files, and keep the internal disk for macOS, apps and current work.',
          'If you’re choosing a new Mac, the storage-size guide explains how to size it from what you keep. ClearDisk’s free scan shows what uses the space now, which is a useful input for either decision.',
        ],
      },
    ],
    related: [
      'mac-running-slow-low-storage',
      'how-much-storage-mac',
      'not-enough-space-to-update-macos',
      'find-what-is-filling-disk-mac',
    ],
    sources: [
      {
        label: 'Apple: if your Mac runs slowly',
        url: 'https://support.apple.com/guide/mac-help/mchlp1731/mac',
      },
      {
        label: 'Apple: how to download and install macOS',
        url: 'https://support.apple.com/en-us/102662',
      },
      localSnapshots,
    ],
  },
  {
    slug: 'time-machine-drive-size',
    title: 'How big should a Time Machine backup drive be?',
    description:
      'Apple recommends a Time Machine disk at least twice your Mac’s storage capacity. What that buys, what makes backups grow, and when a smaller disk works.',
    summary:
      'Apple’s guidance is a backup disk with at least twice the storage capacity of your Mac, so a Mac with 1 TB pairs with a 2 TB drive. A smaller disk still works if it holds one full backup of what you back up; the extra room buys history, because Time Machine deletes the oldest backups when space runs low.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-apple-recommends',
        title: 'What Apple recommends',
        paragraphs: [
          'Apple’s wording is that your backup disk should ideally have “at least twice the storage capacity of your Mac,” with the example of a 2 TB drive for a Mac with 1 TB. If you choose a smaller disk, Time Machine shows a message that it is smaller than recommended, and you can still continue backing up.',
          'The rule is based on your Mac’s capacity, not on how full it is today. That keeps it valid as the Mac fills up over the years, and it’s simple to apply when buying. Treat it as a sensible default rather than a hard minimum.',
        ],
      },
      {
        id: 'what-fills-a-backup-disk',
        title: 'What fills a backup disk over time',
        paragraphs: [
          'The first backup copies everything Time Machine includes, which is your files and the apps you added but not the system files and apps installed with macOS, minus anything you exclude. After that, each backup saves only new and changed items, so the disk fills with history: older versions of files you edited and copies of files you have since deleted.',
          'When the disk runs low, Time Machine deletes older backups to make room, and Apple notes that it never deletes the last remaining backup. The size of the disk therefore decides how far back you can reach, not whether backups work. Large items that change often, such as virtual machine disks, busy databases or a media library you import into daily, eat into that history fastest, because a changed item is saved again.',
        ],
      },
      {
        id: 'measure-what-you-back-up',
        title: '1. Measure what you actually back up',
        paragraphs: [
          'Open System Settings → General → Storage and note how much of the Mac’s disk is used. Subtract anything you plan to exclude; what remains is roughly the size of your first backup.',
          'If more than one Mac backs up to the same disk, for example through a shared folder on another Mac, add them together. If you also back up an external drive with Time Machine, add what that drive holds.',
        ],
      },
      {
        id: 'choose-capacity',
        title: '2. Choose capacity for the history you want',
        paragraphs: [
          'A disk about the size of your first backup holds little more than the latest state and will be thinning old backups almost from the start. Twice the Mac’s capacity, Apple’s figure, leaves room for the Mac to fill up and still keep a useful stretch of history. If you edit large files every day or want to reach back years, go larger.',
          'A bigger disk is also the answer when an existing one can no longer complete a backup. The full-disk guide linked below covers switching to a new disk while keeping the old one as an archive.',
        ],
      },
      {
        id: 'format-as-apfs',
        title: '3. Format it as APFS and keep it for backups',
        paragraphs: [
          'Apple lists APFS or APFS Encrypted as the preferred format for a Time Machine backup disk. If the disk you select isn’t APFS, Time Machine offers to erase and reformat it, which permanently removes what is on it, so copy anything you need off first. A disk that already holds a Mac OS Extended Time Machine backup can keep being used without reformatting.',
          'Time Machine reserves the entire APFS volume it backs up to. To keep other files on the same physical drive, Apple suggests adding a second APFS volume in Disk Utility; the two volumes then share the available space, so those files eat into your backup history. A separate drive for everyday files is simpler.',
        ],
      },
      {
        id: 'exclude-what-you-can-rebuild',
        title: '4. Exclude what you can rebuild',
        paragraphs: [
          'Open System Settings → General → Time Machine, click Options, then click the add button and choose items to exclude. Good candidates are things you can download or regenerate: package caches, node_modules folders, Xcode Derived Data, Docker’s disk image, and virtual machines you back up another way. Keep documents, photos and anything that exists nowhere else.',
          'Exclusions apply to future backups; copies already on the disk stay until those backups age out. Apple also notes that excluded items still appear in Time Machine local snapshots on the Mac. Measure folders before excluding them, so the few you pick are the ones that matter.',
        ],
      },
    ],
    related: [
      'time-machine-backup-disk-full',
      'delete-old-time-machine-backups',
      'time-machine-snapshots',
      'format-external-hard-drive-mac',
    ],
    sources: [
      {
        label: 'Apple: if Time Machine recommends a larger backup disk',
        url: 'https://support.apple.com/guide/mac-help/mchl72b408e0/mac',
      },
      {
        label: 'Apple: types of disks you can use with Time Machine',
        url: 'https://support.apple.com/guide/mac-help/types-of-disks-you-can-use-with-time-machine-mh15139/mac',
      },
      {
        label: 'Apple: exclude files from a Time Machine backup',
        url: 'https://support.apple.com/guide/mac-help/exclude-files-from-a-time-machine-backup-mh15622/mac',
      },
    ],
  },
  {
    slug: 'delete-old-time-machine-backups',
    title: 'How to delete old Time Machine backups on Mac',
    description:
      'Delete old Time Machine backups safely: let Time Machine thin them itself, or remove a chosen backup with tmutil delete. Never pull folders out by hand.',
    summary:
      'Usually you don’t need to: Time Machine deletes the oldest backups itself when its disk fills. To remove a particular old backup, list the backups with tmutil, then delete one by its timestamp with sudo tmutil delete. Don’t pull backups apart in Finder or with rm.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'do-you-need-to',
        title: 'First, check whether you need to',
        paragraphs: [
          'Time Machine is built to fill its disk. Apple says that as the backup disk fills up, Time Machine deletes older backups to make room for new ones, so a backup disk with almost no free space is normal. If backups still complete, there is nothing to fix.',
          'Manual deletion makes sense in a few cases: backups fail for lack of space and you would rather give up old history than buy a disk, or the drive holds a second volume that needs the room. Deleting backups frees space on the backup disk only. It doesn’t touch your Mac’s own storage.',
        ],
      },
      {
        id: 'full-disk-access',
        title: '1. Connect the drive and give Terminal Full Disk Access',
        paragraphs: [
          'Connect the backup disk and wait until no backup is running; the Time Machine menu shows this, and so does tmutil status (Running = 0). The tmutil manual says listing and deleting backups need root and Full Disk Access, so open System Settings → Privacy & Security → Full Disk Access, turn it on for Terminal, then quit and reopen Terminal.',
          'Without that permission, the commands below fail with “Operation not permitted.” Find the disk’s mount point with tmutil destinationinfo, which prints it as Mount Point, usually /Volumes/ followed by the disk’s name.',
        ],
        code: ['tmutil status', 'tmutil destinationinfo'],
      },
      {
        id: 'list-backups',
        title: '2. List the backups on the disk',
        paragraphs: [
          'Run the first command below, replacing Backup Disk with your disk’s name and keeping the quotes if the name has spaces. It lists this Mac’s completed backups, and each carries a date stamp in the form YYYY-MM-DD-HHMMSS, such as 2025-03-14-093012. That stamp is what the delete command needs. The second command shows the latest backup, which is the one to keep.',
          'If you see “No machine directory found,” the path is wrong, the disk isn’t mounted, or the backups on it belong to a different Mac. Check the name under /Volumes and try again rather than reaching for more forceful commands.',
        ],
        code: [
          'sudo tmutil listbackups -d "/Volumes/Backup Disk"',
          'sudo tmutil latestbackup -d "/Volumes/Backup Disk"',
        ],
      },
      {
        id: 'delete-by-timestamp',
        title: '3. Delete an old backup by its timestamp',
        paragraphs: [
          'The delete verb takes the backup disk’s mount point after -d and a timestamp after -t, copied exactly from the list. You can repeat -t to remove several backups in one command. Start with the oldest and never delete the most recent. The manual also notes that this verb can delete backups made by other Macs, so check the dates twice before pressing Return.',
          'There’s no Trash and no undo: a deleted backup is gone. Deleting can take some time on a large or slow disk. When it finishes, run listbackups again to confirm, and check the disk’s free space with Get Info in Finder. For older Mac OS Extended backup disks the manual adds a -p option that deletes a specific path from backups; it doesn’t apply to APFS backup disks.',
        ],
        code: ['sudo tmutil delete -d "/Volumes/Backup Disk" -t 2025-03-14-093012'],
      },
      {
        id: 'what-not-to-do',
        title: 'What not to do',
        paragraphs: [
          'Don’t delete or move things inside the backup disk by hand, and never run rm on it. Time Machine tracks what each backup shares with the next, and pulling pieces out can leave the remaining backups inconsistent. On APFS backup disks each backup lives in a snapshot rather than an ordinary folder, and Apple’s current guide doesn’t describe a Finder method for removing one.',
          'Apple’s older guide for macOS Catalina and earlier, written for Mac OS Extended backups, described selecting an item in Time Machine and choosing Delete All Backups of it from the Action menu. It allowed deleting whole dated folders in Finder, never items inside them, and warned against moving or removing anything in Backups.backupdb with Terminal or other apps; tmutil is Time Machine’s own tool, not a file mover. To start over completely, erasing the disk and adding it again in Time Machine settings removes all history at once, so do that only with another recent backup in hand.',
        ],
      },
      {
        id: 'local-snapshots-are-separate',
        title: 'Local snapshots are a separate thing',
        paragraphs: [
          'The hourly snapshots Time Machine keeps on your Mac’s own disk are not the backups on the external drive. They use the Mac’s storage, macOS removes them as they age or as space is needed, and tmutil listlocalsnapshots / lists them. Deleting old backups on the backup disk doesn’t touch them, and removing them doesn’t touch the backup disk.',
          'If the goal is a backup disk that keeps working, excluding what you can rebuild or moving to a larger disk usually beats deleting history by hand. The drive-size guide covers how much room to plan for.',
        ],
        code: ['tmutil listlocalsnapshots /'],
      },
    ],
    related: [
      'time-machine-backup-disk-full',
      'time-machine-snapshots',
      'time-machine-drive-size',
      'operation-not-permitted-terminal-mac',
    ],
    sources: [
      {
        label: 'Apple: if the Time Machine backup disk for your Mac is full',
        url: 'https://support.apple.com/guide/mac-help/mh15137/mac',
      },
      {
        label: 'Apple (macOS Catalina guide): delete a file from your Time Machine backup disk',
        url: 'https://support.apple.com/guide/mac-help/delete-a-file-time-machine-backup-disk-mh26863/10.15/mac/10.15',
      },
      localSnapshots,
    ],
  },
];
