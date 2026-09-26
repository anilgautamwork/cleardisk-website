import type { Guide } from './guides.ts';

// Apple Disk Utility and Mac Help sources checked 2026-09-24.
const firstAid = {
  label: 'Apple: how to repair a Mac storage device with Disk Utility',
  url: 'https://support.apple.com/en-us/102611',
};
const repairGuide = {
  label: 'Apple: repair a storage device in Disk Utility on Mac',
  url: 'https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac',
};
const mount = {
  label: 'Apple: mount a volume that’s been ejected in Disk Utility',
  url: 'https://support.apple.com/guide/disk-utility/mount-a-volume-thats-been-ejected-dskutl1027/mac',
};
const erase = {
  label: 'Apple: erase and reformat a storage device in Disk Utility',
  url: 'https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac',
};
const formats = {
  label: 'Apple: file system formats available in Disk Utility',
  url: 'https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac',
};
const cantEject = {
  label: 'Apple: if you can’t eject a disk on Mac',
  url: 'https://support.apple.com/guide/mac-help/mchlp1285/mac',
};
const appUsingDisk = {
  label: 'Apple: if you can’t eject a disk because an app is using it',
  url: 'https://support.apple.com/guide/mac-help/mh27076/mac',
};
const intro = {
  label: 'Apple: intro to Disk Utility on Mac',
  url: 'https://support.apple.com/guide/disk-utility/intro-to-disk-utility-dskutl1029/mac',
};
const diskInfo = {
  label: 'Apple: available, free and purgeable space in Disk Utility',
  url: 'https://support.apple.com/en-tm/guide/disk-utility/dskutl1005/mac',
};

export const driveGuides: Guide[] = [
  {
    slug: 'external-hard-drive-not-showing-up-mac',
    title: 'External hard drive not showing up on Mac: what to check',
    description:
      'Find out why an external drive isn’t showing up on your Mac: Finder settings, cables and power, Disk Utility’s device list, mounting, First Aid and formats.',
    summary:
      'A drive can be missing from Finder, missing from Disk Utility, or visible but not mounted. Each points to a different fix, so work out which one you have before trying anything else.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'check-finder-settings',
        title: '1. Check that Finder is set to show it',
        paragraphs: [
          'Sometimes the drive is connected and working, and Finder is just hiding it. Open Finder → Settings. On the General tab, select External disks under “Show these items on the desktop”. On the Sidebar tab, select External disks under Locations. If the drive now appears, nothing was wrong with it.',
        ],
      },
      {
        id: 'check-the-connection',
        title: '2. Check the cable, port and power',
        paragraphs: [
          'Apple’s repair article says that if a storage device does not appear at all, you should check its cable, connections and power, and try again with nonessential devices unplugged. In practice: try a different cable and a different port, plug the drive directly into the Mac rather than through a hub, and make sure a drive with its own power supply is switched on.',
          'Bus-powered portable drives can fail to spin up on an underpowered hub or a long adapter chain. If the drive has a light, note whether it comes on at all; a drive that shows no sign of power is a hardware or cable question, not a macOS one.',
        ],
      },
      {
        id: 'look-in-disk-utility',
        title: '3. Look for it in Disk Utility',
        paragraphs: [
          'Open Disk Utility from Applications → Utilities, then choose View → Show All Devices. This lists the physical devices the Mac can see, not just the volumes it has mounted. If the drive is listed here, the Mac is talking to it, and the problem is the volume on it. If it is not listed after the connection checks above, Apple’s guidance is that the Mac or the drive may need service.',
          'Terminal can confirm the same thing without changing anything. The command below lists every disk and partition the Mac detects, including external ones.',
        ],
        code: ['diskutil list'],
      },
      {
        id: 'mount-it',
        title: '4. Mount a volume that is listed but greyed out',
        paragraphs: [
          'A volume that appears dimmed in Disk Utility is detected but not mounted. Select it and click Mount; Apple also notes you can disconnect and reconnect the device to mount it again. An encrypted volume asks for its password at this point. Once mounted, it appears under Locations in Finder.',
        ],
      },
      {
        id: 'run-first-aid',
        title: '5. Run First Aid if it still won’t mount',
        paragraphs: [
          'Select the volume and click First Aid. Apple’s order is to start with the last volume on the device, work up through each volume, then the container, then the device itself. If First Aid says the disk is about to fail, Apple’s advice is to back up what you can and replace it; it cannot be repaired.',
          'If First Aid cannot repair the disk and the data matters, stop there. Reformatting erases everything, so copy off whatever is readable first. If the files are irreplaceable and nothing mounts, a data recovery service is safer than repeated repair attempts.',
        ],
      },
      {
        id: 'windows-formats',
        title: 'If the drive came from a Windows PC',
        paragraphs: [
          'macOS reads exFAT and FAT drives and can write to them. It can read NTFS drives but not write to them, so an NTFS drive shows up but refuses to accept files. If you need to use a drive with both Mac and Windows, exFAT is the format Apple’s Disk Utility guide suggests for Windows volumes over 32 GB. Reformatting erases the drive, so copy its files first. The formatting guide below walks through it.',
        ],
      },
    ],
    questions: [
      {
        q: "Why doesn't my external drive show up on the desktop or in Finder?",
        a: 'It might just be hidden. Open Finder, Settings, General, and select External disks under Show these items on the desktop, then also select External disks under Locations on the Sidebar tab.',
      },
      {
        q: 'My external drive shows in Disk Utility but not Finder, what does that mean?',
        a: "If it's listed in Disk Utility under View, Show All Devices, the Mac is detecting it, so the problem is with the volume rather than the connection. A dimmed volume there is detected but not mounted; select it and click Mount.",
      },
      {
        q: "Why can't I copy files onto my external hard drive?",
        a: 'It may be formatted as NTFS. macOS can read NTFS drives but cannot write to them, so an NTFS drive will show up but refuse new files; a drive shared between Mac and Windows over 32GB should generally use exFAT instead.',
      },
      {
        q: "What should I check first if an external drive isn't detected at all?",
        a: 'Check its cable, connections and power: try a different cable and port, plug it directly into the Mac rather than through a hub, and confirm a self-powered drive is switched on, since bus-powered drives can fail on an underpowered hub.',
      },
    ],
    related: [
      'format-external-hard-drive-mac',
      'eject-external-drive-mac',
      'disk-utility-mac',
      'move-photos-library-to-external-drive',
    ],
    sources: [firstAid, repairGuide, mount, formats],
  },
  {
    slug: 'eject-external-drive-mac',
    title: 'How to eject an external drive on Mac when it won’t eject',
    description:
      'Eject an external drive on Mac safely, and what to do when macOS says an app is using it: quit the app, log out, or shut down before you unplug the drive.',
    summary:
      'Ejecting tells macOS to finish writing and let go of the drive. When it refuses, something still has a file open. Find that app, close it, and only then unplug.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'eject-normally',
        title: '1. Eject it the normal way',
        paragraphs: [
          'Any of these work: click the eject button next to the drive’s name in the Finder sidebar, select the drive and choose File → Eject or press Command-E, or drag the drive’s icon from the desktop to the Trash, which turns into an eject symbol. Wait until the drive disappears from Finder before unplugging it.',
          'Unplugging without ejecting can interrupt a write in progress. Most of the time nothing bad happens, but the times it does are the ones where you lose the file you just copied.',
        ],
      },
      {
        id: 'quit-the-app-using-it',
        title: '2. If an app is using the drive, quit it',
        paragraphs: [
          'The most common refusal is that one or more programs may be using the disk. Apple’s advice is to quit the apps using it, or, if you can’t quit an app, close the documents on that disk. The warning sometimes names the app. If it doesn’t, press Command-Tab to see what is open.',
          'Likely suspects are the app that last opened a file from the drive, a video or photo editor, a backup or sync tool, and Terminal if a window is sitting inside a folder on the drive. Spotlight indexing a newly connected drive can also hold it briefly; waiting a minute and trying again is reasonable.',
        ],
      },
      {
        id: 'log-out-or-shut-down',
        title: '3. Log out, then shut down if needed',
        paragraphs: [
          'Apple’s next step for an external disk is Apple menu → Log Out, log back in, and try to eject again. Logging out closes every app you had open, which releases the drive. If it still won’t eject, choose Apple menu → Shut Down, disconnect the drive while the Mac is off, then start up again.',
          'Shutting down is the safe version of force eject: macOS finishes writing before it powers off. Pulling the cable while the Mac is running and the drive is busy is the version to avoid.',
        ],
      },
      {
        id: 'another-user',
        title: 'If another user is logged in',
        paragraphs: [
          'On a shared Mac, a drive can be in use by another account that is still logged in with fast user switching. Log that account out, or shut down, before disconnecting.',
        ],
      },
      {
        id: 'if-it-keeps-happening',
        title: 'If it keeps happening',
        paragraphs: [
          'A drive that often refuses to eject usually has a background app that keeps it busy: a backup tool, a cloud sync folder stored on it, or a media library kept on the drive. Check that app’s settings. If the drive also disconnects on its own or throws errors, run First Aid in Disk Utility; the guide to a drive that isn’t showing up covers the order.',
        ],
      },
    ],
    questions: [
      {
        q: "Why won't my external drive eject on Mac?",
        a: "The most common reason is that an app is still using it; Apple's advice is to quit the apps using the disk or close the documents open from it. If the warning doesn't name the app, press Command-Tab to see what's open.",
      },
      {
        q: 'Is it safe to just unplug an external drive without ejecting it?',
        a: 'No. Unplugging without ejecting can interrupt a write in progress; most of the time nothing bad happens, but the times it does are the ones where you lose the file you just copied.',
      },
      {
        q: "What do I do if a drive still won't eject after quitting apps?",
        a: "Log out and log back in, which closes every open app and releases the drive, then try ejecting again. If it still won't eject, shut down the Mac, disconnect the drive while it's off, and start up again.",
      },
      {
        q: 'Why does my external drive keep refusing to eject every time?',
        a: "It usually has a background app keeping it busy, such as a backup tool, a cloud sync folder stored on it, or a media library kept on the drive. Check that app's settings for what's holding it open.",
      },
    ],
    related: [
      'external-hard-drive-not-showing-up-mac',
      'disk-utility-mac',
      'format-external-hard-drive-mac',
      'trash-wont-empty-mac',
    ],
    sources: [cantEject, appUsingDisk, repairGuide],
  },
  {
    slug: 'format-external-hard-drive-mac',
    title: 'How to format an external hard drive on Mac',
    description:
      'Format or reformat an external drive on Mac with Disk Utility: pick APFS, Mac OS Extended or exFAT for your use, choose the right scheme, and back up first.',
    summary:
      'Formatting erases the drive and sets how it stores files. Pick the format by where the drive will be used, not by what is newest, and copy anything you need off it before you start.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'back-up-first',
        title: '1. Copy off anything you want to keep',
        paragraphs: [
          'Apple’s Disk Utility guide is blunt: erasing a storage device deletes everything on it. Copy the files you need to another drive first, and open a few of the copies to be sure they work. If the drive is a Time Machine backup disk, formatting deletes that backup history too.',
        ],
      },
      {
        id: 'choose-a-format',
        title: '2. Choose the format for how you’ll use it',
        paragraphs: [
          'The format decides which computers can use the drive. Apple’s guide describes each option; this is how they map to common uses.',
        ],
        items: [
          'APFS: for drives used only with Macs running macOS 10.13 or later. It is Apple’s default and is designed for SSDs and flash storage, and it also works on hard drives.',
          'Mac OS Extended (Journaled): for a drive that must also work with older Macs running macOS 10.12 or earlier.',
          'exFAT: for a drive shared between Mac and Windows. Apple’s guide suggests it for Windows volumes over 32 GB.',
          'MS-DOS (FAT): for small drives of 32 GB or less that need to work with Windows or devices like cameras. It cannot store a single file larger than 4 GB.',
          'The encrypted variants of APFS and Mac OS Extended add a password to the drive, which is worth it for a portable drive you might lose.',
        ],
      },
      {
        id: 'erase-in-disk-utility',
        title: '3. Erase it in Disk Utility',
        paragraphs: [
          'Open Disk Utility from Applications → Utilities. Choose View → Show All Devices, then select the device itself in the sidebar, not just the volume under it. Click Erase, enter a name, choose the format, and set Scheme to GUID Partition Map. Click Erase, then Done when it finishes.',
          'Selecting the whole device rather than a volume gives you a clean partition map, which avoids most leftover-partition oddities on drives that came formatted for Windows.',
        ],
      },
      {
        id: 'security-options',
        title: '4. Know what Security Options can and can’t do',
        paragraphs: [
          'The Security Options button can write over erased data several times, but Apple notes it is available only for some types of storage, and not for solid-state drives. For an SSD, Apple’s recommendation is to use an encrypted format from the start, so that erasing it leaves nothing readable.',
        ],
      },
      {
        id: 'after-formatting',
        title: '5. Check the result',
        paragraphs: [
          'The drive should now appear in Finder with its new name. Copy a large file to it and back to make sure it reads and writes. If Disk Utility reported errors during erase, run First Aid, and treat a drive that fails again as one to replace rather than trust with backups.',
        ],
      },
    ],
    questions: [
      {
        q: 'What format should I use for a drive shared between Mac and Windows?',
        a: "exFAT. Apple's Disk Utility guide suggests it for Windows volumes over 32GB shared between Mac and Windows; MS-DOS (FAT) is only for smaller drives of 32GB or less and can't store a single file larger than 4GB.",
      },
      {
        q: 'Will formatting an external drive delete my Time Machine backups?',
        a: 'Yes, if that drive holds your Time Machine backup history. Erasing a storage device deletes everything on it, so copy off anything you need first and expect formatting a Time Machine disk to remove its backup history too.',
      },
      {
        q: 'Should I select the volume or the device when erasing in Disk Utility?',
        a: 'Select the device itself in the sidebar, not just the volume under it. This gives a clean partition map, which avoids leftover-partition oddities on drives that came formatted for Windows.',
      },
      {
        q: 'Can I securely overwrite data when erasing an SSD?',
        a: "Not with the Security Options button, since Apple notes it isn't available for solid-state drives. For an SSD, Apple recommends using an encrypted format from the start so erasing it later leaves nothing readable.",
      },
    ],
    related: [
      'external-hard-drive-not-showing-up-mac',
      'disk-utility-mac',
      'eject-external-drive-mac',
      'move-photos-library-to-external-drive',
    ],
    sources: [erase, formats, repairGuide],
  },
  {
    slug: 'disk-utility-mac',
    title: 'Disk Utility on Mac: check, repair and mount your drives',
    description:
      'How to use Disk Utility on Mac: show all devices, read free and purgeable space, run First Aid in the right order, and mount, erase or partition drives.',
    summary:
      'Disk Utility is the Mac’s built-in tool for the drives themselves: formats, partitions, repairs and capacity. It won’t tell you which files fill the disk, but it tells you whether the disk is healthy and how full it really is.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'open-disk-utility',
        title: '1. Open Disk Utility',
        paragraphs: [
          'It lives in Applications → Utilities. You can also press Command-Space and type Disk Utility, or choose Go → Utilities in Finder. To work on the startup disk itself, for example to repair it when the Mac won’t start up properly, Apple says to open Disk Utility from macOS Recovery instead.',
          'Choose View → Show All Devices straight away. Without it, the sidebar shows volumes only, and several tasks need the physical device selected.',
        ],
      },
      {
        id: 'read-the-space',
        title: '2. Read how full a drive really is',
        paragraphs: [
          'Select a volume to see its capacity, used and available space. Apple’s Disk Utility guide explains that available space can include both free space and purgeable space, which macOS removes on its own when it needs room. That is why Disk Utility, Finder and Storage settings can show slightly different numbers for the same disk.',
          'Disk Utility shows totals, not contents. To find which folders are using the space, use Storage settings, the Terminal commands in the disk-space guide, or a scanner.',
        ],
      },
      {
        id: 'first-aid',
        title: '3. Run First Aid when a drive misbehaves',
        paragraphs: [
          'First Aid checks and repairs the file system. Apple’s order is to start with the last volume on a device, work upward through each volume and container, and finish with the device itself. A clean result means the disk is fine or has been repaired.',
          'If First Aid says the disk is about to fail, back it up and replace it; Apple is clear that it cannot be repaired. If First Aid can’t repair it, back up what you can before trying anything that erases.',
        ],
      },
      {
        id: 'mount-and-unmount',
        title: '4. Mount and unmount volumes',
        paragraphs: [
          'A dimmed volume in the sidebar is connected but not mounted. Select it and click Mount to make it available in Finder. The eject button next to a volume unmounts it, which is useful before repairing it or before disconnecting a drive that Finder won’t eject.',
        ],
      },
      {
        id: 'erase-and-partition',
        title: '5. Erase, format and partition',
        paragraphs: [
          'Erase reformats a device or volume and deletes everything on it; the formatting guide covers which format to pick. Partition splits one physical drive into separate volumes. With APFS, adding a volume to a container is usually a better choice than partitioning, because APFS volumes share the container’s free space.',
        ],
      },
      {
        id: 'what-it-does-not-do',
        title: 'What Disk Utility won’t do',
        paragraphs: [
          'It won’t tell you what is filling your Mac, clear caches or reduce System Data, and running First Aid does not free space. If the startup disk is simply full, the storage guides are the right place to start. ClearDisk’s free scan shows the folders behind the numbers Disk Utility reports.',
        ],
      },
    ],
    questions: [
      {
        q: 'Why do Disk Utility, Finder and Storage settings show different amounts of free space?',
        a: 'Available space can include both free space and purgeable space, which macOS removes on its own when it needs room. That is why Disk Utility, Finder and Storage settings can show slightly different numbers for the same disk.',
      },
      {
        q: 'Does running First Aid free up disk space?',
        a: 'No. First Aid only checks and repairs the file system; running it does not free space. If the startup disk is simply full, the storage guides are the right place to start instead.',
      },
      {
        q: "Why is a volume greyed out in Disk Utility's sidebar?",
        a: 'A dimmed volume is connected but not mounted. Select it and click Mount to make it available in Finder, or use the eject button next to it to unmount before repairing or disconnecting a drive.',
      },
      {
        q: 'Should I partition a drive or add an APFS volume instead?',
        a: "With APFS, adding a volume to a container is usually the better choice than partitioning, because APFS volumes share the container's free space rather than splitting it into fixed sections.",
      },
    ],
    related: [
      'external-hard-drive-not-showing-up-mac',
      'format-external-hard-drive-mac',
      'how-to-check-storage-on-mac',
      'purgeable-space-on-mac',
    ],
    sources: [intro, firstAid, repairGuide, mount, diskInfo, erase],
  },
];
