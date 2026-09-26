import type { Guide } from './guides.ts';

const storageSettings = {
  label: 'Apple: change Storage settings on Mac',
  url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
};
const fileSystemBasics = {
  label: 'Apple Developer: File System Basics',
  url: 'https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html',
};
const libraryDetails = {
  label: 'Apple Developer: macOS Library directory details',
  url: 'https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html',
};
const readOnlyVolume = {
  label: 'Apple: about the read-only system volume',
  url: 'https://support.apple.com/en-us/101400',
};
const signedVolume = {
  label: 'Apple Platform Security: signed system volume',
  url: 'https://support.apple.com/guide/security/signed-system-volume-security-secd698747c9/web',
};
const apfsRole = {
  label: 'Apple Platform Security: role of Apple File System',
  url: 'https://support.apple.com/guide/security/role-of-apple-file-system-seca6147599e/web',
};
const safeMode = {
  label: 'Apple: start up your Mac in safe mode',
  url: 'https://support.apple.com/en-us/116946',
};

export const systemFolderGuides: Guide[] = [
  {
    slug: 'other-storage-on-mac',
    title: 'Other storage on Mac: what it was and where it went',
    description:
      'Mac “Other” storage huge? Newer macOS calls it System Data. What the old category held, how to check it on Big Sur or earlier, and where to look first.',
    summary:
      'Other is the name older versions of macOS gave to the catch-all storage category. From macOS Monterey on, the same kind of files appear as System Data. Either way it is a category, not a folder: find the files behind it before deleting anything.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'other-became-system-data',
        title: 'Other became System Data',
        paragraphs: [
          'Apple’s storage guide for macOS Big Sur defines Other as files that don’t fall into the other categories, primarily files and data used by the system such as log files, caches, VM files and other runtime resources, plus temporary files, fonts, app support files and plug-ins. The Monterey edition of the same guide gives the same definition under a new name, System Data. Apple’s current free-up-storage article still calls it “System Data (or Other).”',
          'So a question about “Other storage” and a question about System Data are the same question. The advice in the System Data guides applies to both, and the difference you see is mostly the label on the bar. One detail did change: on Big Sur and earlier, a separate System category held macOS itself, and Apple’s guide for those versions says it also included Time Machine local snapshots. Newer versions call that category macOS.',
        ],
      },
      {
        id: 'check-your-label',
        title: '1. Check which label your Mac uses',
        paragraphs: [
          'On macOS Ventura or later, open System Settings → General → Storage. On earlier versions, choose Apple menu → About This Mac, click Storage, then click Manage to open the Storage Management window. If the bar shows Other, you are on Big Sur or earlier; if it shows System Data, you are on a later release.',
          'Wait for every category to finish calculating before you judge the numbers. Apple’s guide for these older releases notes that values are refined as each category is calculated, so a first look can overstate Other while the rest of the bar is still being counted. Apple also says you can’t manage the contents of this category from that window: there is no list to open and nothing to select.',
        ],
      },
      {
        id: 'use-the-sidebar-first',
        title: '2. On Big Sur or earlier, clear the listed categories first',
        paragraphs: [
          'The Storage Management sidebar lists Applications, Documents, iOS Files, Trash and others. Those categories list files individually, and Apple’s guide lets you select an item and click Delete. Removing an old device backup or a forgotten large download there frees space directly, and it is easier to judge than anything hidden in Other.',
          'Apple’s older guide also notes that when space is needed, macOS clears caches and logs that are safe to delete, including interrupted downloads and staged updates. That is one reason the Other figure moves on its own. It is not a reason to delete files by hand to force the number down.',
        ],
      },
      {
        id: 'find-what-it-is-made-of',
        title: '3. Find the folders that make up Other',
        paragraphs: [
          'Other is made of the same things as System Data: your user Library with its Caches, Application Support and Containers folders, developer tools, virtual machines, hidden package caches and files macOS manages. Size the Library from Terminal with the read-only command below; the largest entries at the bottom are where to start. The Library and Terminal guides explain what each folder holds.',
          'ClearDisk requires macOS 15 or later, so on a Mac that still shows Other you will be working with Finder, Terminal and Storage Management. The method is the same: identify the owner of the largest folder, use that app’s own settings where it has them, and move only what you understand to the Trash.',
        ],
        code: ['du -sh ~/Library/* 2>/dev/null | sort -h | tail -10'],
      },
      {
        id: 'what-not-to-do',
        title: 'What not to do',
        paragraphs: [
          'Don’t run scripts that promise to “delete Other storage” with administrator rights, and don’t empty the Library, /private/var or a folder named System. Those commands remove app data and system files along with caches, and they can leave apps or macOS unable to start. A large category is a prompt to investigate, not a single thing to erase.',
          'If the disk is so full that the Mac can’t save files or install updates, start with the storage-full guide, which puts the quickest safe wins first. Then return to the System Data guides for the slower work of finding which app keeps producing the files.',
        ],
      },
    ],
    questions: [
      {
        q: 'What is the difference between Other storage and System Data on a Mac?',
        a: "They're the same thing under different names. Apple's Big Sur storage guide defined Other as files like caches, logs, VM files and app support data that don't fit other categories, and later versions renamed that category System Data with the same definition.",
      },
      {
        q: 'Why does the Other or System Data category look huge right after I check it?',
        a: 'Values are refined as each category finishes calculating, so a first look can overstate Other while the rest of the bar is still being counted. Wait for every category to finish before trusting the numbers you see.',
      },
      {
        q: "Can I click on Other storage to see what's inside it and delete files?",
        a: "No. Apple's Storage window doesn't let you manage the contents of this category, since there is no list to open or select from. You have to look at the folders that make it up, mainly your user Library, separately in Finder or Terminal.",
      },
      {
        q: 'Should I run a script that promises to delete Other storage with admin rights?',
        a: 'No. Those scripts can remove app data and system files along with caches, and can leave apps or macOS unable to start. A large Other or System Data figure is a prompt to investigate which folders are large, not something to erase with one command.',
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'clear-system-data-on-mac',
      'system-data-too-large',
      'show-library-folder-mac',
    ],
    sources: [
      {
        label: 'Apple: see used and available storage (macOS Big Sur)',
        url: 'https://support.apple.com/guide/system-information/see-available-storage-space-syspf9b375b9/11.0/mac/11.0',
      },
      {
        label: 'Apple: optimize storage space (macOS Monterey and earlier)',
        url: 'https://support.apple.com/guide/system-information/optimize-storage-space-sysp4ee93ca4/11.0/mac/12.0',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
  {
    slug: 'ios-files-on-mac',
    title: 'iOS Files on Mac: backups and updates using space',
    description:
      'What the iOS Files category in Mac Storage settings counts: iPhone and iPad backups plus device software. How to review it and what is safe to remove.',
    summary:
      'iOS Files is the Storage settings category for iPhone and iPad backups and device software (firmware) kept on your Mac. Review it from Storage settings, keep the backups you still need, and remove software files once your devices are updated.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-counts',
        title: 'What the category counts',
        paragraphs: [
          'Apple’s Storage settings guide describes iOS Files in five words: it contains iOS backups and firmware. Backups are the local copies Finder, or iTunes on older macOS, makes when you back up an iPhone or iPad to the Mac. Apple documents their location as ~/Library/Application Support/MobileSync/Backup. Firmware is the device software file your Mac downloads to update or restore a connected device.',
          'Both can be large. A backup’s size depends on how much data the device holds that isn’t already kept in iCloud, so a well-used phone can produce a large one. Several devices, or several years of devices, multiply that. The category is useful precisely because none of these files sit in folders you would normally open.',
        ],
      },
      {
        id: 'open-ios-files',
        title: '1. Open iOS Files in Storage settings',
        paragraphs: [
          'On macOS Ventura or later, open System Settings → General → Storage and click the information button next to iOS Files. The list shows each item with its size and date. Apple’s general instruction for these categories is to select an unneeded file and click Delete, or click Show in Finder to see where it lives.',
          'On macOS Monterey or earlier, choose Apple menu → About This Mac → Storage → Manage and select iOS Files in the sidebar. Apple’s guide for those versions says backup and firmware files are listed individually there, with the same select-and-Delete action. Read any confirmation before you click, because a deletion from this list may not pass through the Trash.',
        ],
      },
      {
        id: 'decide-about-backups',
        title: '2. Decide which backups to keep',
        paragraphs: [
          'A backup can be the only copy of messages, health data or photos from a device you no longer have. Before deleting one, identify the device and the date, and make sure the restore point you want to keep is still in the list. If you use encrypted backups, check that you still know the password; without it the backup can’t be restored.',
          'The dedicated backup guide walks through Finder’s Manage Backups list, which names each backup by device and time and is the safest place to remove one. Don’t open the Backup folder and delete subfolders or files inside a backup: a partial backup is not a smaller backup, it is one you can no longer rely on.',
        ],
      },
      {
        id: 'remove-software-files',
        title: '3. Remove leftover device software',
        paragraphs: [
          'Firmware files are only needed while your Mac updates or restores a device. Once the device runs that version, the file is a leftover, and your Mac downloads current software again the next time it needs to restore or update a device. If iOS Files lists a software file, it is usually the easiest space to recover in this category.',
          'Apple doesn’t document a folder for these files on current macOS, so use the iOS Files list rather than hunting for a path. Macs that synced with iTunes kept them in ~/Library/iTunes/iPhone Software Updates; if Finder’s Go → Go to Folder finds that folder on your Mac, check its size and move old software files to the Trash. If the folder doesn’t exist, there is nothing to clean there.',
        ],
      },
      {
        id: 'check-the-result',
        title: '4. Check the result',
        paragraphs: [
          'Reopen Storage settings after a minute and compare Available, not just the iOS Files bar. If you moved files to the Trash, the space returns only after you empty it. If the number hasn’t changed, the storage-not-updating guide covers the usual reasons.',
          'ClearDisk’s scan lists iPhone and iPad backups in its System Data view with a Review label, alongside their paths and sizes. The label means “decide for yourself”: use it to see how much each backup occupies, then keep or remove them through Finder with the device and date in front of you.',
        ],
      },
    ],
    questions: [
      {
        q: 'What exactly does the iOS Files storage category contain?',
        a: 'Apple describes it in five words: iOS backups and firmware. Backups are local copies Finder makes when you back up an iPhone or iPad, and firmware is the device software file your Mac downloads to update or restore a connected device.',
      },
      {
        q: 'Is it safe to delete an iPhone backup listed under iOS Files?',
        a: "Only if you're sure you don't need it. A backup can be the only copy of messages, health data or photos from a device you no longer have, so identify the device and date first, and if it's encrypted make sure you still know the password.",
      },
      {
        q: 'Do I need to keep firmware files listed under iOS Files?',
        a: 'No, not once your device is running that software version. Firmware is only needed while your Mac updates or restores a device, and your Mac downloads current software again next time it needs to, so a leftover firmware file is usually easy space to recover.',
      },
      {
        q: "I deleted files from iOS Files but my available storage didn't change. Why?",
        a: 'If you moved files to the Trash, the space only returns after you empty it, so check that first. Reopen Storage settings after a minute and compare the Available figure, not just the iOS Files bar, since it can take time to update.',
      },
    ],
    related: [
      'delete-iphone-backups-on-mac',
      'how-to-check-storage-on-mac',
      'mac-storage-not-updating-after-deleting-files',
      'what-is-system-data-on-mac',
    ],
    sources: [
      storageSettings,
      {
        label: 'Apple: find and delete files (macOS Monterey and earlier)',
        url: 'https://support.apple.com/guide/system-information/find-and-delete-files-syspf5a64aa6/11.0/mac/12.0',
      },
      {
        label: 'Apple: locate and manage iPhone and iPad backups',
        url: 'https://support.apple.com/en-us/108809',
      },
    ],
  },
  {
    slug: 'documents-storage-on-mac',
    title: 'Documents storage on Mac: why it doesn’t add up',
    description:
      'The Documents category in Mac Storage settings is not the Documents folder. What it counts, why it rarely matches Finder, and how to use its three views.',
    summary:
      'The Documents category isn’t your Documents folder. Apple counts files anywhere in your home folder that no other category claims, including Downloads and loose videos, so the figure rarely matches what Finder shows for one folder.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-counts',
        title: 'What the category counts',
        paragraphs: [
          'Apple’s Storage settings guide says the Documents category contains files in your home folder that aren’t included in other categories, such as Pages documents and PDFs. It also includes videos and photos that aren’t managed by your photo library, for example an image a friend sent with AirDrop. Your Desktop, Downloads, Movies and any folder you created in your home folder can all contribute.',
          'Apple’s guide for earlier versions adds two notes that still explain most confusion. The categories do not correspond to specific folders on your Mac, and on a Mac with more than one user account they show the account that is logged in. Documents is a classification of your files, not a folder size.',
        ],
      },
      {
        id: 'why-it-does-not-match',
        title: 'Why it doesn’t match Finder',
        paragraphs: [
          'When the Documents figure and the Documents folder disagree, one of a handful of accounting rules is usually responsible. None of them means files are hidden from you.',
          'The fastest way to compare like with like is the File Browser described below, which shows folder totals using the same classification as the bar. Finder’s Get Info on the Documents folder answers a different question, the size of one folder, and both answers can be right at the same time.',
        ],
        items: [
          'Other folders count too: Downloads, Desktop and project folders in your home folder add to Documents.',
          'Other categories take their files out: a Photos library, Mail, Messages and Music content are counted under their own categories, not here.',
          'iCloud Drive is separate: if Desktop and Documents are stored in iCloud Drive, Apple counts those files under iCloud Drive instead.',
          'Other accounts are separate: files belonging to other users appear under Other Users & Shared.',
          'Copies can share space: on APFS, a file duplicated in Finder can share storage with its original, so adding up sizes can overstate what they occupy.',
          'The bar may still be calculating: figures settle only after every category has been counted.',
        ],
      },
      {
        id: 'open-the-views',
        title: '1. Open Documents and use its views',
        paragraphs: [
          'Open System Settings → General → Storage and click the information button next to Documents. Apple’s guide describes buttons for large files and for downloads, sorting by Name, Kind, Last Accessed or Size, and a File Browser that shows how much storage various folders use. Sort by Size first; the top of the list is where decisions pay off. Downloads has its own button because it is often the quickest win: installers and archives there have usually served their purpose.',
          'Select an item and click Show in Finder to see where it lives and what surrounds it. You can also click Delete in the list, but read the confirmation: removing a file there may not pass through the Trash. When you want the option to undo, move the file to the Trash from Finder instead.',
        ],
      },
      {
        id: 'use-the-file-browser',
        title: '2. Use the File Browser to find the heavy folder',
        paragraphs: [
          'Large Files shows individual items, which misses a folder of ten thousand medium-sized files. The File Browser shows folder totals, so step down from your home folder into whichever folder is largest, and repeat. Apple’s guide for earlier versions notes that folders already represented by another category appear dimmed, which is a quick way to see why a big folder isn’t counted here.',
          'Typical finds are old video exports, screen recordings on the Desktop, disk images and installers in Downloads, virtual machine files saved in a documents folder, and copies of projects nobody opened in years. Each of these has a clear owner, which makes the keep-or-remove decision easier than anything in System Data.',
        ],
      },
      {
        id: 'decide-by-content',
        title: '3. Decide by content, not by size',
        paragraphs: [
          'A large file is a candidate for review, not proof it is unwanted. Move media you want to keep to an external drive and check the copy opens before removing the original. Clear old installers and archives from Downloads, and empty the Trash only after checking what is in it. The large-files and Downloads guides go through both in detail.',
          'ClearDisk’s free scan has its own categories, including Documents and Downloads, plus a large-files list and a map of every folder. Its categories are its own classification and won’t match Apple’s figure exactly, but the paths and sizes are what matter for deciding what to move or remove.',
        ],
      },
    ],
    questions: [
      {
        q: "Why doesn't the Documents storage figure match the size of my actual Documents folder?",
        a: 'Documents is a classification of files across your whole home folder, not the size of one folder. It also counts things like Downloads, Desktop and loose videos or photos, while excluding files already counted under other categories such as Photos, Mail or Music.',
      },
      {
        q: 'Why are my Desktop and Documents not showing up under the Documents storage category?',
        a: "If Desktop and Documents are stored in iCloud Drive, Apple counts those files under iCloud Drive instead of Documents. That's one of several accounting rules, along with other user accounts' files appearing under Other Users and Shared rather than here.",
      },
      {
        q: "What's the difference between the Large Files and File Browser views in Storage settings?",
        a: 'Large Files lists individual big items, which misses a folder made up of many medium sized files. The File Browser instead shows folder totals using the same classification as the storage bar, so stepping down through folders there finds a heavy folder faster.',
      },
      {
        q: 'Can duplicating a file in Finder make my storage numbers look wrong?',
        a: 'It can look that way. On APFS, a file duplicated in Finder can share storage with its original, so adding up the sizes of both copies can overstate what they actually occupy on disk.',
      },
    ],
    related: [
      'find-large-files-on-mac',
      'clear-downloads-folder-mac',
      'how-to-check-storage-on-mac',
      'icloud-drive-taking-up-space-on-mac',
    ],
    sources: [
      storageSettings,
      {
        label: 'Apple: see used and available storage (macOS Monterey)',
        url: 'https://support.apple.com/guide/system-information/see-available-storage-space-syspf9b375b9/11.0/mac/12.0',
      },
      {
        label: 'Apple: find and delete files (macOS Monterey and earlier)',
        url: 'https://support.apple.com/guide/system-information/find-and-delete-files-syspf5a64aa6/11.0/mac/12.0',
      },
    ],
  },
  {
    slug: 'macos-storage-category-size',
    title: 'macOS storage category on Mac: why it’s so large',
    description:
      'Why the macOS category in Storage settings is large, what the sealed system volume holds, why its size varies by version, and why you can’t shrink it.',
    summary:
      'The macOS category is the operating system itself: built-in apps and system files on a read-only, sealed volume. Its size depends on the macOS version, and there is nothing in it you can or should delete. Free space in the categories you control instead.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-apple-counts',
        title: 'What Apple counts as macOS',
        paragraphs: [
          'Apple’s Storage settings guide says the macOS category contains macOS system applications and files, with Mail, Terminal and Calculator as examples. It groups macOS with Other Users and System Data as categories that only show how much space they occupy: you can’t select and delete files in them.',
          'On macOS Big Sur and earlier the same category was called System, and Apple’s guide for those versions listed Time Machine local snapshots among its contents. That is one reason screenshots from older Macs show a much larger System figure than a current Mac shows for macOS. The categories don’t map one to one across versions.',
        ],
      },
      {
        id: 'why-it-has-a-floor',
        title: 'Why it has a fixed floor',
        paragraphs: [
          'Since macOS Catalina, the operating system runs on a dedicated, read-only system volume named Macintosh HD, while your files and apps live on a separate volume named Macintosh HD - Data. Apple notes that Finder shows both as Macintosh HD. From macOS Big Sur, the system volume is also signed: Apple’s security guide describes a cryptographic seal covering every byte of it, which macOS verifies at runtime.',
          'The practical result is that the macOS figure is set by the release you run, not by how you use the Mac. It changes when you update, and it differs between versions as Apple adds features, languages and resources. This guide deliberately gives no typical number: compare your own figure before and after an update rather than against someone else’s Mac.',
        ],
      },
      {
        id: 'see-the-system-volume',
        title: '1. See the system volume’s real size',
        paragraphs: [
          'Open Disk Utility, choose View → Show All Devices, and select the volume named Macintosh HD under your internal disk to see how much it uses. In Terminal, the read-only command below lists every volume in the container with its role; look for the one marked System and its Capacity Consumed line.',
          'Don’t expect that number to equal the macOS category exactly. Storage settings is a classification of files, and the startup container also holds Preboot, Recovery and VM volumes that the category doesn’t describe. The guide on Other Volumes in Container explains those.',
        ],
        code: ['diskutil apfs list'],
      },
      {
        id: 'why-you-cannot-shrink-it',
        title: 'Why you can’t shrink it, and shouldn’t try',
        paragraphs: [
          'Apple says you can’t use Finder to delete apps required by your Mac, including many built-in apps such as Mail, Music, Books, Notes and Maps, or anything in the System folder. The volume they live on is read-only by design. Guides that suggest turning off system protections to remove built-in apps trade the Mac’s security model for very little space, and nothing on this site recommends it.',
          'Reinstalling macOS is not a storage fix either: a fresh install of the same version occupies the same system volume. If the Mac needs room for an update, the update guide explains how much to free and where to find it.',
        ],
      },
      {
        id: 'work-on-what-you-control',
        title: '2. Work on the categories you control',
        paragraphs: [
          'If the bar looks larger right after an update, give it time. A snapshot taken before the update and staged update files can inflate figures briefly; the after-update guide covers what settles on its own. Otherwise, treat the macOS figure as fixed overhead and look at Applications, Documents, iOS Files, Trash and System Data, which are the parts your choices affect.',
          'Those categories have concrete actions: uninstall apps you don’t use, move media to an external drive, remove old device backups, and find the app behind a large System Data figure. Each has its own guide below. If you are freeing space specifically for a macOS update, the update guide explains how much room to leave and what to clear first.',
        ],
      },
    ],
    questions: [
      {
        q: 'Can I free up space by removing built-in Mac apps like Mail or Notes?',
        a: "No. Apple says you can't use Finder to delete apps required by your Mac, including built-in apps such as Mail, Music, Books, Notes and Maps, because they live on a read-only system volume by design. Turning off system protections to remove them isn't worth the risk.",
      },
      {
        q: 'Will reinstalling macOS shrink the macOS storage category?',
        a: "No. A fresh install of the same macOS version occupies the same system volume, so reinstalling isn't a storage fix. The macOS category's size is set by the release you run, not by how you use the Mac.",
      },
      {
        q: 'Why is the macOS category bigger on some Macs than others?',
        a: 'It differs between macOS versions as Apple adds features, languages and resources, and it changes when you update. On Big Sur and earlier, the same category was called System and also included Time Machine local snapshots, which made older figures look much larger.',
      },
      {
        q: 'The macOS category grew right after I updated. Should I worry?',
        a: "Not right away. A snapshot taken before the update and staged update files can inflate figures briefly after installing, and that usually settles on its own. If it's a real concern, focus instead on categories you control, such as Applications and Documents.",
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'other-volumes-in-container',
      'mac-storage-full-after-macos-update',
      'not-enough-space-to-update-macos',
    ],
    sources: [storageSettings, readOnlyVolume, signedVolume],
  },
  {
    slug: 'other-volumes-in-container',
    title: 'Other Volumes in Container on Mac: what it means',
    description:
      'What Other Volumes in Container means on a Mac: the Preboot, Recovery and VM volumes sharing your disk, how to list them, and which ones to leave alone.',
    summary:
      'Other Volumes in Container is space used by the other APFS volumes that share your startup disk: Preboot, Recovery, VM and sometimes a second macOS installation. Most of it is required. Look in Disk Utility before touching anything, and never delete a system volume.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'one-container-several-volumes',
        title: 'One container, several volumes',
        paragraphs: [
          'An APFS disk is divided into containers, and each container holds volumes that share its free space. Apple’s Disk Utility guide explains that each volume uses only part of the container, so the space available to any one volume is the container’s size minus what all its volumes use. Space taken by one volume is therefore missing from every other volume’s available figure.',
          'Apple’s security guide says that in macOS 10.15 or later a startup container holds at least five volumes. Preboot contains data needed to start each system volume. VM stores encrypted swap files. Recovery holds what the Mac needs to start in recoveryOS. The System volume holds macOS, and the Data volume holds your files and apps. Storage categories describe mostly the Data volume, so the rest shows up as other volumes.',
        ],
      },
      {
        id: 'where-the-label-appears',
        title: 'Where the label appears',
        paragraphs: [
          'Depending on the macOS version, the storage bar can include a segment named Other Volumes in Container; it was a common sight in About This Mac → Storage on releases such as Catalina and Big Sur. In current Storage settings, Apple provides an All Volumes view that shows used and available space for each volume and container on the internal disk.',
          'The segment is not a folder and has no list of files. Its size depends on your Mac and its history: swap in use, the recovery system for your version, and any extra volumes that were created. Because swap lives on the VM volume, the figure can change from day to day without you adding anything.',
        ],
      },
      {
        id: 'list-the-volumes',
        title: '1. List the volumes in Disk Utility',
        paragraphs: [
          'Open Disk Utility and choose View → Show All Devices so the sidebar shows the disk, its containers and every volume. Select each volume in the internal container and note its name and used space. In Terminal, the read-only command below prints the same structure, including each volume’s role, mount point and capacity consumed.',
          'On a typical Mac you will see Macintosh HD (the System role), Macintosh HD - Data (the Data role, mounted at /System/Volumes/Data), Preboot, Recovery and VM. Anything else is worth identifying: its name and role usually tell you where it came from.',
        ],
        code: ['diskutil apfs list'],
      },
      {
        id: 'what-the-extras-are',
        title: '2. Identify anything beyond the usual five',
        paragraphs: [
          'Extra volumes have ordinary explanations. Check each against the list below before drawing conclusions.',
          'If a volume’s name doesn’t explain it, its role and mount point usually do. A volume you created normally has no special role and a name you chose; a second installation shows up as its own System and Data pair. Write down what you find before you change anything, including the size of each volume.',
        ],
        items: [
          'A second macOS installation: Apple notes each additional system volume gets its own Data volume, while Preboot, VM and Recovery are shared.',
          'A volume you created: a separate APFS volume for projects, tests or a beta release shares the container’s space.',
          'A leftover from an interrupted installation: occasionally an extra Data volume remains after an install or upgrade failed.',
          'Boot Camp is not one of these: a Windows partition sits outside the APFS container and is removed with Boot Camp Assistant, as its own guide explains.',
        ],
      },
      {
        id: 'when-a-volume-is-extra',
        title: '3. Remove only a volume you have confirmed is extra',
        paragraphs: [
          'Never delete Preboot, Recovery, VM, the System volume or the Data volume your Mac is using; the Mac needs them to start, recover and run. Apple’s Disk Utility guide warns that deleting a volume permanently erases all its data, and that a volume in use can’t be deleted from the running system.',
          'If you have identified a volume you created and no longer need, or a second installation you are finished with, back up first with Time Machine, open the volume and copy anything you want to keep, then select it in Disk Utility and click the Delete Volume (−) button in the toolbar. If you can’t tell which Data volume is in use, or the volume won’t delete, stop and contact Apple Support rather than working in Recovery on a guess.',
        ],
      },
    ],
    questions: [
      {
        q: 'What counts as Other Volumes in Container on a Mac?',
        a: "It's the space used by volumes sharing your startup disk's container besides your main Data volume, mainly Preboot, which holds data needed to start the system, Recovery, and VM, which stores encrypted swap files. A second macOS installation can add its own System and Data pair too.",
      },
      {
        q: 'Can I delete the Preboot, Recovery or VM volumes to free space?',
        a: "No, never delete Preboot, Recovery, VM, the System volume or the Data volume in use, since the Mac needs them to start, recover and run. Deleting a volume permanently erases all its data, and a volume in use can't be deleted from the running system.",
      },
      {
        q: 'Why does Other Volumes in Container change size without me adding files?',
        a: 'Because swap lives on the VM volume, and how much swap macOS is using can change from day to day on its own, which shifts this figure without you adding anything yourself.',
      },
      {
        q: 'I have an extra volume I created myself. How do I remove it safely?',
        a: "Back it up first with Time Machine, open the volume and copy anything you want to keep, then select it in Disk Utility and click the Delete Volume button. If you can't tell which Data volume is in use, stop and contact Apple Support instead.",
      },
    ],
    related: [
      'apfs-container-vs-volume',
      'macos-storage-category-size',
      'mac-recovery-partition',
      'remove-boot-camp-partition',
    ],
    sources: [
      apfsRole,
      {
        label: 'Apple: add, delete or erase APFS volumes in Disk Utility',
        url: 'https://support.apple.com/guide/disk-utility/add-delete-or-erase-apfs-volumes-dskua9e6a110/mac',
      },
      storageSettings,
    ],
  },
  {
    slug: 'mac-storage-calculating',
    title: 'Mac storage stuck on Calculating: what to try',
    description:
      'Mac Storage settings stuck on Calculating, or Photos still calculating? Wait for indexing, restart, try safe mode, and get the numbers you need meanwhile.',
    summary:
      'Storage settings measures each category before it shows sizes, and on a full or busy Mac that can take a while. Give it time, let Spotlight and Photos finish their work, then restart. Safe mode and reindexing come after that, not before.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'give-it-time',
        title: '1. Give it time, and get the numbers elsewhere',
        paragraphs: [
          'Apple’s storage guide for earlier macOS versions describes the process plainly: macOS calculates how much space each category uses, values are refined as each category is calculated, and you should wait until all of them finish before trusting the figures. A disk with millions of files, a recent migration or a fresh update all make that first count slower.',
          'You don’t need the categories to know how full the disk is. Disk Utility shows used and available space for the startup volume straight away, and df -h / in Terminal does the same. Available space is what decides whether you can save, install or update; the category bar only helps you decide where to look.',
        ],
        code: ['df -h /'],
      },
      {
        id: 'indexing-and-photos',
        title: '2. Let indexing and Photos finish',
        paragraphs: [
          'After an update, a migration or a restore, Spotlight reindexes the disk, and Apple says indexing can take hours or even days depending on how much data you have. Apple doesn’t document whether Storage settings waits for that work, but a Mac busy indexing is doing a lot of disk reading already, so it is sensible to let it finish before treating a slow Storage view as a fault.',
          'If Photos is the category still calculating, check what Photos itself is doing. Apple’s instructions are to open Photos, select Library, click All Photos and scroll to the bottom, where the library status shows the number of items, the last iCloud update and whether an update is in progress. An import or sync still running is a reason to wait.',
        ],
      },
      {
        id: 'restart',
        title: '3. Restart, then open Storage settings once',
        paragraphs: [
          'Save your work, choose Apple menu → Restart, and after logging in open System Settings → General → Storage and leave it open for a few minutes. A restart ends any stuck process and gives the calculation a clean start. Opening and closing the pane repeatedly doesn’t help it finish.',
          'If the categories fill in, you are done: go back to the storage guides for what to do with them. If one category still says Calculating after a long wait while the rest are filled in, the remaining steps are worth trying in order.',
        ],
      },
      {
        id: 'safe-mode',
        title: '4. Try safe mode',
        paragraphs: [
          'Apple says safe mode prevents login items and non-essential extensions from loading, performs a basic check of the startup disk and clears some system caches, which are created again as needed. On a Mac with Apple silicon, shut down, press and hold the power button until startup options appear, select your startup disk, then hold Shift and click Continue in Safe Mode. On an Intel Mac, hold Shift as the Mac restarts until the login window appears.',
          'Open Storage settings in safe mode and see whether it completes, then restart normally to leave safe mode. If it works in safe mode but not afterwards, a login item or extension is a likely suspect; review them in System Settings → General → Login Items & Extensions (Login Items on earlier versions).',
        ],
      },
      {
        id: 'reindex-last',
        title: '5. Rebuild the Spotlight index only if search is also wrong',
        paragraphs: [
          'If Spotlight also fails to find files you know exist, Apple’s procedure is to open System Settings → Spotlight (or Siri & Spotlight), click Search Privacy (or Spotlight Privacy), add Macintosh HD to the list, wait a few seconds, then remove it and click Done. Spotlight then indexes the whole disk again, which takes time, and searches are incomplete until it finishes.',
          'If none of this helps, run First Aid in Disk Utility and make sure your backup is current. ClearDisk’s scan measures folders directly rather than reading Storage settings, so it can show where the space is while the category bar is still counting; it doesn’t repair the Storage pane itself.',
        ],
      },
    ],
    questions: [
      {
        q: 'How long should Storage settings take to finish calculating?',
        a: 'It can take a while on a disk with millions of files, a recent migration or a fresh update, and values are refined as each category finishes, so wait until all categories are done before trusting the numbers.',
      },
      {
        q: 'Is there a faster way to check how full my disk is while Storage settings is still calculating?',
        a: "Yes. Disk Utility shows used and available space for the startup volume immediately, and running df -h / in Terminal does the same. Available space is what decides whether you can save, install or update, so you don't need the category bar finished for that.",
      },
      {
        q: 'Should I rebuild the Spotlight index if Storage settings is stuck on Calculating?',
        a: 'Only if Spotlight search is also failing to find files you know exist. Rebuilding means adding Macintosh HD to Search Privacy, waiting a few seconds, then removing it, which makes Spotlight index the whole disk again, so try a restart and safe mode first.',
      },
      {
        q: "Does restarting help when Storage settings won't finish calculating?",
        a: "Yes, it's a reasonable step. A restart ends any stuck process and gives the calculation a clean start, but opening and closing the Storage pane repeatedly doesn't help it finish, so give it a few minutes after logging back in.",
      },
    ],
    related: [
      'how-to-check-storage-on-mac',
      'mac-storage-not-updating-after-deleting-files',
      'disk-utility-first-aid-mac',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      {
        label: 'Apple: optimize storage space (macOS Monterey and earlier)',
        url: 'https://support.apple.com/guide/system-information/optimize-storage-space-sysp4ee93ca4/11.0/mac/12.0',
      },
      {
        label: 'Apple: about Spotlight indexing and rebuilding the index',
        url: 'https://support.apple.com/en-us/102321',
      },
      safeMode,
    ],
  },
  {
    slug: 'sleepimage-file-mac',
    title: 'sleepimage on Mac: what it is and why to keep it',
    description:
      'What /private/var/vm/sleepimage is on a Mac, why its size follows memory, how to check it, and why deleting it or changing pmset settings doesn’t help.',
    summary:
      '/private/var/vm/sleepimage is the hibernation image: a copy of memory macOS writes so a sleeping Mac can recover its open apps and documents if power is lost. macOS manages it, it needs administrator rights to touch, and deleting it gains nothing that lasts.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-the-file-is',
        title: 'What the file is',
        paragraphs: [
          'When a Mac sleeps, memory stays powered, which is why waking is quick. Apple calls the laptop safeguard safe sleep: each time the Mac goes to sleep, its current state, including open apps and documents, is saved, so nothing is lost if the Mac shuts down completely during sleep, for example because the battery runs out. The saved state is the hibernation image, and its default location is /var/vm/sleepimage, which is the same place as /private/var/vm/sleepimage.',
          'The pmset manual on your Mac (man pmset) describes the modes. Portables default to hibernatemode 3, which stores a copy of memory on disk while keeping memory powered, and wakes from memory unless a power loss forces a restore from the image. Desktops default to 0, plain sleep, though the manual notes that standby and autopoweroff can still write an image on Macs that support them.',
        ],
      },
      {
        id: 'check-it',
        title: '1. Check its size and your settings',
        paragraphs: [
          'The two read-only commands below show the file with its size, and the current hibernation settings. Neither changes anything. Its size relates to memory rather than to your documents, and macOS decides it; a large sleepimage on a Mac with a lot of memory is expected, not a sign of a fault.',
          'Apple’s Storage settings guide lists VM files among the things counted in System Data, so this file is part of that category rather than something you will find in Documents. Swap files are separate: Apple’s security guide says macOS keeps encrypted swap files on the VM volume, which the swap memory guide covers.',
        ],
        code: [
          'ls -lh /private/var/vm',
          'pmset -g | grep -E "hibernatemode|hibernatefile|standby"',
        ],
      },
      {
        id: 'why-not-delete-it',
        title: 'Why not to delete it',
        paragraphs: [
          'The file belongs to the system and can only be removed with administrator rights. Deleting it doesn’t switch hibernation off, so macOS needs the image again at the next sleep and the space goes back into use. In the meantime you have removed the copy that protects your open work if a laptop’s battery runs flat while it sleeps.',
          'There is also no way to move it off the startup disk to save internal space: the pmset manual says the hibernation file may only be located on the root volume. Treat sleepimage like the rest of macOS’s working files: measured, understood and left where it is.',
        ],
      },
      {
        id: 'why-not-change-hibernatemode',
        title: 'Why not to change hibernatemode',
        paragraphs: [
          'Articles that promise to reclaim this space usually suggest setting hibernatemode to 0 with sudo pmset and deleting the file. On a laptop that turns off the safety net: the pmset manual says that with mode 0 the Mac must wake from memory and will lose context on power loss. The manual itself asks for caution with this setting.',
          'Changing power management defaults to recover a few gigabytes rarely makes sense. If the disk is so full that a memory-sized file matters, the disk needs a larger cleanup, and a Mac that can’t find room for its hibernation image is also short of room for swap, updates and temporary files.',
        ],
      },
      {
        id: 'find-space-elsewhere',
        title: '2. Find the space somewhere else',
        paragraphs: [
          'Start with the storage-full guide if the Mac is struggling now: emptying the Trash, clearing Downloads and removing old device backups usually recovers far more than any system file. Then look at System Data for caches and app data you can identify.',
          'If memory pressure is the real question, the swap memory guide explains how to read Activity Monitor and why swap grows. Both paths lead to changes you can reverse, which is the right kind of cleanup for files the operating system depends on.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to delete the sleepimage file to free up space?',
        a: "No, and it won't help for long. The file belongs to the system and needs administrator rights to remove, but deleting it doesn't switch hibernation off, so macOS creates it again at the next sleep and the space goes back into use.",
      },
      {
        q: 'Why is my sleepimage file so large?',
        a: 'Its size relates to how much memory your Mac has, not to your documents, so a large sleepimage on a Mac with a lot of RAM is expected rather than a sign of a fault. macOS decides its size on its own.',
      },
      {
        q: 'Can I move the sleepimage file to another drive to save internal space?',
        a: "No. The pmset manual states the hibernation file may only be located on the root volume, so there's no way to move it off the startup disk to another drive.",
      },
      {
        q: 'Should I change hibernatemode to 0 and delete sleepimage to reclaim space?',
        a: "That's not a good trade on a laptop. With hibernatemode set to 0, the Mac must wake from memory and will lose its open apps and documents on power loss, so changing power management defaults to recover a few gigabytes rarely makes sense.",
      },
    ],
    related: [
      'mac-swap-memory',
      'what-is-system-data-on-mac',
      'mac-storage-full',
      'private-var-folders-mac',
    ],
    sources: [
      {
        label: 'Apple: what is safe sleep on Mac?',
        url: 'https://support.apple.com/guide/mac-help/mh10328/mac',
      },
      storageSettings,
      apfsRole,
    ],
  },
  {
    slug: 'private-var-folders-mac',
    title: '/private/var/folders on Mac: large and safe to clear?',
    description:
      'What /private/var/folders holds on a Mac: per-user temporary files and caches. How macOS cleans it, how to measure yours, and why not to delete it by hand.',
    summary:
      '/private/var/folders holds each user’s temporary files and system-managed caches. macOS cleans much of it on its own. Don’t delete inside it by hand: measure it, restart, and if one app keeps filling it, fix that app.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-lives-there',
        title: 'What lives there',
        paragraphs: [
          'Each user account on the Mac gets a folder inside /private/var/folders with a random-looking two-level name. Inside it, T holds temporary items, C holds caches and 0 holds per-user data for system services; other folders can appear alongside them. Apps and macOS put working files there that they don’t want in your Library. The path starts with /var because /var is a link to /private/var.',
          'Apple’s File System Basics guide lists /var among the Unix folders Finder hides, describing it as the home of log files and other files whose content is variable. Apple’s Storage settings count temporary files and caches under System Data, which is where this folder’s size ends up.',
        ],
      },
      {
        id: 'how-macos-cleans-it',
        title: 'How macOS cleans it',
        paragraphs: [
          'The confstr manual on your Mac (man confstr) documents the two folders apps are meant to use. Files in the temporary items folder may be removed by the system if they are not accessed in 3 days. The cache folder is not cleaned automatically, but its files are removed during a safe boot.',
          'Apple’s safe mode article says the same thing from the other side: starting in safe mode clears some system caches, which are created again as needed. Between the automatic temporary-file cleanup, restarts and safe mode, macOS has supported ways to reset this folder, and none of them involve deleting it yourself.',
        ],
      },
      {
        id: 'measure-yours',
        title: '1. Measure your own folders',
        paragraphs: [
          'getconf prints the paths for your account, and du sizes them. The third command lists the largest items in your cache folder; most are named by an app’s bundle identifier, such as com.apple.Safari, which tells you whose files they are. All three commands only read.',
          'Other accounts’ folders and system-owned ones are not readable without administrator rights, so the total you see covers your own account. That is fine: your folders are the ones your apps fill.',
        ],
        code: [
          'getconf DARWIN_USER_TEMP_DIR',
          'du -sh "$(getconf DARWIN_USER_TEMP_DIR)" "$(getconf DARWIN_USER_CACHE_DIR)"',
          'du -sh "$(getconf DARWIN_USER_CACHE_DIR)"* 2>/dev/null | sort -h | tail -10',
        ],
      },
      {
        id: 'restart-first',
        title: '2. Restart, then measure again',
        paragraphs: [
          'Quit your apps, restart, and run the same commands. If the figure dropped, the space belonged to temporary work of apps that were running, and nothing more is needed. If a single app’s folder is still large, note its name and size.',
          'An app that repeatedly fills this folder is behaving the way it was built to, or has a bug. Check for an update, look for a cache or temporary-file setting in the app, and contact its developer with the folder name and size if it keeps growing. That fixes the cause instead of the symptom.',
        ],
      },
      {
        id: 'safe-mode-for-caches',
        title: '3. Use safe mode for the cache folder',
        paragraphs: [
          'If the cache folder is the large one, start up in safe mode once, following Apple’s steps for your Mac, then restart normally. The confstr manual says files in that folder are removed during safe boot, and the apps that use it rebuild what they need afterwards.',
          'Expect the first launch of some apps to be a little slower while they rebuild. If the same folder is large again within days, go back to step 2 and look at the app that owns it.',
        ],
      },
      {
        id: 'why-not-by-hand',
        title: 'Why not to delete it by hand',
        paragraphs: [
          'Running apps and background services keep files open in these folders. Deleting them while you are logged in can crash apps, interrupt downloads or break services until the next restart, and a file that is still open keeps its space until the process using it closes anyway.',
          'Commands that circulate online, such as removing everything under /private/var/folders with sudo, also delete other users’ files and system state. There is no reason to take that risk when a restart and safe mode reach the same result the supported way.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to delete files inside /private/var/folders?',
        a: "No, don't delete inside it by hand. Running apps and background services keep files open there, so deleting them while logged in can crash apps or interrupt downloads, and sudo commands that remove everything there also delete other users' files and system state.",
      },
      {
        q: 'Does macOS ever clean up /private/var/folders on its own?',
        a: "Yes, partly. Files in the temporary items folder may be removed by the system if they haven't been accessed in 3 days, and the cache folder, while not cleaned automatically, has its files removed during a safe boot.",
      },
      {
        q: 'How do I find out which app is filling up /private/var/folders?',
        a: "Measure your own folders with the read-only commands, then list the largest items in your cache folder; most are named by an app's bundle identifier, such as com.apple.Safari, which tells you whose files they are.",
      },
      {
        q: "Restarting didn't shrink my /private/var/folders. What's next?",
        a: "If a single app's folder is still large after a restart, that app may be behaving normally or have a bug. Check for an update or a cache setting in the app, or start up in safe mode once, since the cache folder is cleared during a safe boot.",
      },
    ],
    related: [
      'library-caches-folder-mac',
      'what-is-system-data-on-mac',
      'mac-folder-structure-explained',
      'check-disk-space-mac-terminal',
    ],
    sources: [safeMode, storageSettings, fileSystemBasics],
  },
  {
    slug: 'library-caches-folder-mac',
    title: 'The Library Caches folder on Mac, folder by folder',
    description:
      'What ~/Library/Caches and /Library/Caches hold, how folder names map to apps, how to rank them by size, and which cache folders to leave to macOS.',
    summary:
      '~/Library/Caches holds rebuildable working files, usually one folder per app named by its bundle identifier. It is the safest part of the Library to review: identify the owner, quit it, and move that one folder to the Trash. /Library/Caches is shared by all users and best left mostly alone.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'three-caches-folders',
        title: 'Three Caches folders, one of them yours',
        paragraphs: [
          '~/Library/Caches belongs to your account; open it from Finder with Go → Go to Folder. /Library/Caches, at the top of the disk, holds caches shared by every user, often from system services and background updaters. /System/Library/Caches belongs to macOS and is not somewhere to clean.',
          'Apple’s developer guidance defines the folder’s purpose: it contains cached data that can be regenerated as needed, and apps should never rely on cache files existing. Apps are responsible for managing their own caches, which is why an app’s own clear-cache setting is always the first choice, as the cache-clearing guide explains app by app. Apple’s Storage settings count caches in System Data, so this folder is one of the places that category comes from.',
        ],
      },
      {
        id: 'read-the-names',
        title: '1. Read the folder names',
        paragraphs: [
          'Apple’s convention is a subfolder named after the app’s bundle identifier, such as com.example.MyApp. Names starting com.apple belong to macOS and Apple apps; com.google, com.microsoft and similar prefixes point to the vendor. Some tools use a plain name instead, such as Homebrew or pip.',
          'To confirm which identifier an installed app uses, read it from the app with mdls, as below. When a folder’s identifier matches no app you have, it is usually a cache left by an app you removed, which is one of the easier things to clear.',
        ],
        code: [
          'mdls -name kMDItemCFBundleIdentifier -raw /Applications/Safari.app',
        ],
      },
      {
        id: 'measure-and-rank',
        title: '2. Measure and rank',
        paragraphs: [
          'The first command lists the fifteen largest folders in your Caches folder, largest last. The second does the same for the shared folder. Some com.apple folders are protected and are skipped silently; that is expected.',
          'On many Macs a few folders account for most of the total. Write down the top three and the app each belongs to, and ignore the long tail of small folders: clearing them recovers little and costs every app a slower next launch.',
        ],
        code: [
          'du -sh ~/Library/Caches/* 2>/dev/null | sort -h | tail -15',
          'du -sh /Library/Caches/* 2>/dev/null | sort -h | tail -10',
        ],
      },
      {
        id: 'what-is-usually-large',
        title: '3. What is usually large',
        paragraphs: [
          'The same few kinds of cache tend to top the list. Each has a better route than Finder deletion where one exists.',
          'Two patterns deserve a second look. A large cache for an app you use every day will simply grow back, so clearing it buys a few days of space at the cost of a slower app. A cache for an app you rarely open, or no longer have, is the better target: it stays gone.',
        ],
        items: [
          'Browser caches: Chrome keeps its disk cache under Google; Safari’s is under com.apple.Safari. Clear them from the browser, as the browser cache guide shows.',
          'Package managers: Homebrew keeps downloads in ~/Library/Caches/Homebrew and pip in ~/Library/Caches/pip. Use brew cleanup and pip cache purge rather than Finder.',
          'Developer and creative tools: build caches, previews and media caches. Check the tool’s settings for a cache location or clear option.',
          'Apps you have removed: their cache folders are leftovers and can go to the Trash.',
          'com.apple folders: leave them. macOS manages these and clears caches it considers safe when space is needed.',
        ],
      },
      {
        id: 'remove-one-folder',
        title: '4. Remove one folder at a time',
        paragraphs: [
          'Quit the app that owns the folder, then move that app’s folder to the Trash; leave the Caches folder itself in place. Open the app, confirm it works and has rebuilt what it needs, and empty the Trash afterwards. Expect the folder to grow back as you use the app; a cache that returns to the same size quickly is doing its job.',
          'In /Library/Caches, only remove a folder that clearly belongs to software you installed and have since removed. ClearDisk’s System Data view groups these files as Application caches and Browser caches, labeled Safe because they rebuild; the label still assumes you quit the app first and use the Trash.',
          'Avoid tools or commands that empty the whole Caches folder at once. Everything comes back, every app starts cold at the same time, and anything an app cached for offline use has to be downloaded again.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which Caches folder on my Mac is safe to look through?',
        a: "~/Library/Caches, inside your own account, is the safest to review, since it holds rebuildable data organized mostly one folder per app. /Library/Caches is shared by every user and best left mostly alone, and /System/Library/Caches belongs to macOS and isn't somewhere to clean.",
      },
      {
        q: 'How do I know which app a folder in Library/Caches belongs to?',
        a: "Apple's convention names each subfolder after the app's bundle identifier, such as com.example.MyApp, where com.apple prefixes belong to macOS and Apple apps and prefixes like com.google or com.microsoft point to that vendor. You can confirm an app's identifier with mdls if unsure.",
      },
      {
        q: 'Is it okay to empty my whole Caches folder at once?',
        a: "It's better to avoid that. Everything comes back, every app starts up cold at the same time, and anything an app cached for offline use has to be downloaded again, so removing one identified folder at a time is safer.",
      },
      {
        q: "What's the right way to clear a specific app's cache folder in Finder?",
        a: 'Quit the app that owns the folder, move just that folder to the Trash, then reopen the app to confirm it works and rebuilds what it needs, and empty the Trash afterward. Leave the Caches folder itself in place.',
      },
    ],
    related: [
      'clear-cache-on-mac',
      'show-library-folder-mac',
      'application-support-folder-mac',
      'clear-browser-cache-mac',
    ],
    sources: [libraryDetails, fileSystemBasics, storageSettings],
  },
  {
    slug: 'mac-log-files',
    title: 'Mac log files: where they are and when to clear them',
    description:
      'Where Mac log files live: ~/Library/Logs, /Library/Logs, /var/log and the unified log. How to read them in Console, measure them, and deal with a large one.',
    summary:
      'Mac logs live in ~/Library/Logs, /Library/Logs and /private/var/log, while most system messages go to the unified log that Console reads. They are usually small. A large log is a symptom: find the app writing it before deleting anything.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-logs-live',
        title: 'Where logs live',
        paragraphs: [
          'macOS has two kinds of logging. Traditional log files are text files that apps and services write into a few folders. The unified logging system, which Apple’s developer documentation says centralizes log data in memory and on disk rather than in text files, handles most of what macOS itself records. You read unified logs with Console or the log command, not in Finder.',
          'Crash reports are the files people most often find in bulk. Each one is small, but an app that crashes repeatedly leaves one per crash, so a crowded DiagnosticReports folder is a quick way to spot an app with a problem.',
        ],
        items: [
          '~/Library/Logs: logs from apps you run, plus a DiagnosticReports folder with crash and diagnostic reports for your account.',
          '/Library/Logs: logs and reports from software that works for every user, with its own DiagnosticReports folder.',
          '/private/var/log (also shown as /var/log): Unix-style system logs such as system.log. macOS rotates some of these and keeps compressed older copies.',
          'The unified log store: managed by macOS. It is not a folder to open or clean by hand.',
        ],
      },
      {
        id: 'view-in-console',
        title: '1. Read logs and reports in Console',
        paragraphs: [
          'Open Console from Applications → Utilities. Apple’s Console guide lists the report types in its sidebar: Crash Reports (.ips files), Spin Reports, Log Reports (.log and similar), Diagnostic Reports, Mac Analytics Data from /var/log/DiagnosticMessages, and the legacy system.log. User reports come from apps you use; system reports need an administrator account to view.',
          'Select a report to read it, choose File → Reveal in Finder to see where it lives, or File → Move to Trash to remove it. Console is the tidy way to clear out old crash reports once you no longer need them, because it only touches the report you selected. A crash report also names the process that failed near the top, which tells you which app to update or report.',
        ],
      },
      {
        id: 'measure',
        title: '2. Measure the log folders',
        paragraphs: [
          'The first command sizes the three folders; the second ranks what is inside your own Logs folder. The third shows the last five minutes of the unified log, trimmed to a few lines, which is a quick way to see whether something is logging constantly. It uses the full path /usr/bin/log because zsh, the default shell, has its own unrelated log command. All three only read.',
          'On most Macs these totals are small next to caches, backups or media. If they are, stop here: clearing logs will not make a noticeable difference to your storage, and they are useful when something goes wrong.',
        ],
        code: [
          'du -sh ~/Library/Logs /Library/Logs /private/var/log 2>/dev/null',
          'du -sh ~/Library/Logs/* 2>/dev/null | sort -h | tail -10',
          '/usr/bin/log show --last 5m | tail -20',
        ],
      },
      {
        id: 'large-log',
        title: '3. When one log is large',
        paragraphs: [
          'A log that runs to gigabytes almost always belongs to one app or background helper that is logging too much: a debug or verbose setting left on, or the same error repeating every second. The folder or file name usually names the app. Check the app for a logging option, install its updates, and report the problem to its developer if it continues.',
          'Then quit the app and move the old log to the Trash. If the app is still running, a deleted log keeps its space until the app closes the file, which is why quitting first matters. Leave logs from software you don’t recognize until you know what wrote them.',
        ],
      },
      {
        id: 'leave-alone',
        title: 'What to leave alone',
        paragraphs: [
          'Don’t empty /private/var/log wholesale or try to clear the unified log store with sudo commands. macOS manages both, and the history they hold is what Apple Support or a developer will ask for when you report a fault. Deleting it trades diagnostic evidence for very little space.',
          'ClearDisk’s System Data view shows Logs as its own group, labeled Safe, so you can see the total alongside caches and backups. The label reflects that logs don’t hold your data; the size usually shows they aren’t where your storage went.',
        ],
      },
    ],
    questions: [
      {
        q: 'Where can I find crash reports and other logs on my Mac?',
        a: 'Open Console from Applications, Utilities, which lists Crash Reports, Spin Reports, Log Reports and Diagnostic Reports in its sidebar. User reports come from apps you run and are stored in ~/Library/Logs, while system reports need an administrator account to view.',
      },
      {
        q: 'Is it worth clearing Mac log files to free up space?',
        a: "Usually not much. On most Macs these totals are small next to caches, backups or media, so clearing logs won't make a noticeable difference to storage, and they're useful if something goes wrong and you need to report a fault.",
      },
      {
        q: 'What does it mean if one log file is huge?',
        a: 'A log running to gigabytes almost always belongs to one app or background helper logging too much, such as a debug setting left on or the same error repeating constantly. Check that app for a logging option, then quit it before moving the old log to the Trash.',
      },
      {
        q: 'Should I delete files from /private/var/log or the unified log store to save space?',
        a: "No, don't empty /private/var/log wholesale or try to clear the unified log store with sudo commands. macOS manages both, and that history is what Apple Support or a developer will ask for when you report a problem.",
      },
    ],
    related: [
      'library-caches-folder-mac',
      'system-data-keeps-growing',
      'what-is-system-data-on-mac',
      'show-library-folder-mac',
    ],
    sources: [
      {
        label: 'Apple: view reports in Console on Mac',
        url: 'https://support.apple.com/guide/console/reports-cnsl664be99a/mac',
      },
      {
        label: 'Apple Developer: logging',
        url: 'https://developer.apple.com/documentation/os/logging',
      },
      libraryDetails,
    ],
  },
  {
    slug: 'mac-folder-structure-explained',
    title: 'Mac folder structure explained: what’s yours to clean',
    description:
      'How a Mac’s disk is organized: the sealed system volume, the Data volume, /System, /Library, ~/Library and /private, and which parts are yours to clean.',
    summary:
      'A Mac’s disk looks like one Macintosh HD but is two volumes: a sealed, read-only system volume and a Data volume with your files and apps. Your home folder and the apps you installed are yours to manage; /System, /private and most of /Library belong to macOS.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'two-volumes',
        title: 'One disk name, two volumes',
        paragraphs: [
          'Since macOS Catalina, macOS runs on a dedicated, read-only system volume named Macintosh HD, and your files live on a separate volume named Macintosh HD - Data. Apple notes that Finder shows both as Macintosh HD. From Big Sur, the system volume is also cryptographically sealed, so macOS can detect any change to it.',
          'macOS joins the two with firmlinks, so folders such as /Applications, /Library, /Users and /private appear in one tree while their contents live on the Data volume. The read-only commands below show the two volumes and the list of firmlinked folders. The practical point: almost everything that can grow sits on the Data volume, and everything on the system volume is fixed by your macOS version. It is also why deleting something inside /System fails even with an administrator password.',
        ],
        code: ['df -h / /System/Volumes/Data', 'cat /usr/share/firmlinks'],
      },
      {
        id: 'top-level-folders',
        title: 'The top-level folders',
        paragraphs: [
          'Apple’s File System Basics guide describes the folders you see at the top of the disk, and the Unix folders Finder hides.',
          'Apple explains that the hidden Unix folders are an important part of the system but more useful to software developers than to end users. They hold command-line tools, configuration and the system’s changing data, all managed by macOS. /Volumes is the one worth knowing: every mounted disk, disk image and network share appears there, so something large under /Volumes is another disk, not your startup volume.',
        ],
        items: [
          '/Applications: apps for every user of the Mac; the App Store installs here. Apple’s built-in apps live in /System/Applications and Finder shows them together.',
          '/Users: one home folder per account, plus Shared for files every account can reach.',
          '/Library: resources shared by all users, such as fonts, Application Support data, caches and background helpers.',
          '/System: macOS itself. Apple says these resources must not be modified.',
          'Hidden Unix folders: /private (with etc, tmp and var), /usr, /bin, /sbin, /Volumes for mounted disks, and /opt, where Homebrew lives on Apple silicon.',
        ],
      },
      {
        id: 'home-folder',
        title: 'Inside your home folder',
        paragraphs: [
          'Your home folder holds Desktop, Documents, Downloads, Movies, Music, Pictures and Public, which Apple reserves for your own documents and media. It also holds Library, which Finder has hidden since OS X Lion because it is where apps store their own files: settings, caches, containers and support data. Folders whose names begin with a dot are hidden too, and developer tools keep large caches in them.',
          'This is the part of the disk that fills up, and the part where your choices matter. The Library guide explains each of its folders; the hidden-files guide shows how to see the dot folders.',
        ],
      },
      {
        id: 'what-is-yours',
        title: 'What is yours to clean',
        paragraphs: [
          'Sort the disk into three zones before deleting anything. The boundary is who created the files and whether they can be recreated. Anything in the middle zone deserves the owner check: which app made it, whether it holds data you created, and whether the app can rebuild it.',
          'The zones map onto Storage settings too. Your home folder feeds Documents, Photos, Music and the other named categories; most of the Library and the hidden folders feed System Data; the system volume is the macOS category. When a category is large, this map tells you which part of the disk to look in.',
        ],
        items: [
          'Yours: documents and media in your home folder, Downloads, apps you installed in /Applications, and package caches in dot folders, cleared with each tool’s own command.',
          'Review first: ~/Library/Caches (rebuildable), Application Support and Containers (app data, sometimes your only copy), and items in /Library left by software you removed, preferably through the vendor’s uninstaller.',
          'Leave alone: /System, /private, /usr, /bin, /sbin, Apple’s items in /Library, and the Preboot, Recovery and VM volumes.',
        ],
      },
      {
        id: 'look-safely',
        title: 'Look around safely',
        paragraphs: [
          'In Finder, choose Go → Computer and open Macintosh HD to see the top level; press Shift-Command-Period to show hidden items and again to hide them. In Terminal, ls -la / lists the same folders. Looking changes nothing. Deleting outside your home folder is where mistakes happen, so measure first and use the Trash.',
          'ClearDisk’s storage map shows the whole disk as nested blocks, so you can see which of these zones holds the space before opening any folder. It shows protected system folders for context but does not offer them for removal.',
        ],
      },
    ],
    questions: [
      {
        q: 'Why does my Mac show one Macintosh HD when there are actually two volumes?',
        a: 'Since macOS Catalina, the operating system runs on a separate read-only system volume also named Macintosh HD, while your files live on Macintosh HD - Data. macOS joins them with firmlinks so folders like Applications and Users appear together, even though Finder just shows both as Macintosh HD.',
      },
      {
        q: 'Which folders on my Mac are actually safe for me to clean up?',
        a: 'Documents and media in your home folder, Downloads, apps you installed in Applications, and package caches in dot folders are yours to manage directly. Folders like ~/Library/Caches deserve a check of which app owns them first, while System and private should be left alone entirely.',
      },
      {
        q: "Why can't I delete something inside the /System folder even with an administrator password?",
        a: 'Because /System lives on the read-only, cryptographically sealed system volume, and Apple says those resources must not be modified. That volume is fixed by your macOS version, so nothing there is meant to be deleted by users.',
      },
      {
        q: 'Is it safe to look through hidden Unix folders like /private and /usr?',
        a: "Yes, just looking changes nothing. You can view them with Finder's Shift-Command-Period shortcut to show hidden items, or with ls -la / in Terminal; the risk is only in deleting things outside your home folder, which is where mistakes happen.",
      },
    ],
    related: [
      'show-library-folder-mac',
      'show-hidden-files-mac',
      'macos-storage-category-size',
      'private-var-folders-mac',
    ],
    sources: [fileSystemBasics, readOnlyVolume, signedVolume],
  },
  {
    slug: 'remove-language-files-mac',
    title: 'Removing language files on Mac: why it’s a bad idea',
    description:
      'Removing unused language files from Mac apps breaks their code signatures, comes back with every update and saves less than it seems. What to do instead.',
    summary:
      'Stripping unused localizations (.lproj folders) out of apps used to be a popular space saver. On current macOS it invalidates the app’s code signature, updates put the files back, and the saving is usually small. Leave app bundles intact and free space elsewhere.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-language-files-are',
        title: 'What language files are',
        paragraphs: [
          'A Mac app is a bundle: a folder that Finder shows as a single file. Inside, Contents/Resources holds a folder ending in .lproj for each language the app supports, containing its translated text and sometimes localized images. Apple’s bundle guide describes this layout. macOS picks the folder that matches your preferred languages and ignores the rest. Frameworks and helpers inside the bundle often carry their own .lproj folders too, which is why stripping tools had to walk the whole app.',
          'Years ago, when disks were small and apps were not signed, deleting the unused folders was a common tweak. Utilities existed to do it in bulk. The idea still circulates, but macOS has changed underneath it.',
        ],
      },
      {
        id: 'breaks-signatures',
        title: 'Why it breaks apps now',
        paragraphs: [
          'Apple’s code signing technote says signatures made in OS X Mavericks and later always seal all files in a bundle, that it is no longer possible to exclude parts of a bundle from the signature, and that bundles should be treated as read-only once signed. Removing a .lproj folder is a change to sealed content, so the app’s signature no longer matches.',
          'The same technote spells out the consequences: Gatekeeper can reject the app, and macOS services that rely on a valid code identity fail. What you see depends on the app, from warnings on launch to features that quietly stop working. Apple’s own apps live on the sealed system volume and can’t be modified at all.',
        ],
      },
      {
        id: 'updates-restore-them',
        title: 'Updates put them back',
        paragraphs: [
          'An app update replaces the bundle with a complete, freshly signed copy, languages included. The space you saved disappears at the next update, and a stripping tool would have to run again, breaking the signature again. Across a whole Applications folder that is a lot of churn for a figure that keeps resetting.',
          'Measured honestly, the saving varies: a large office suite can carry a noticeable amount of localized material, while most apps carry little. Either way it is usually small next to caches, old device backups, downloads or media, which you can remove without touching any app.',
        ],
      },
      {
        id: 'measure',
        title: '1. Measure before you believe the saving',
        paragraphs: [
          'If you are curious, measure one app. The first command totals the top-level language folders inside a bundle; replace AppName with the app’s name. The second ranks your largest apps, which is the more useful list: an app you never use is worth far more space than another app’s translations. Both commands only read.',
          'If you already stripped languages from an app in the past, the third command checks its signature. An error means the bundle has been modified; reinstall the app from the App Store or the developer to get a clean, signed copy.',
        ],
        code: [
          'du -shc /Applications/AppName.app/Contents/Resources/*.lproj | tail -1',
          'du -sh /Applications/*.app 2>/dev/null | sort -h | tail -10',
          'codesign --verify --deep --strict /Applications/AppName.app',
        ],
      },
      {
        id: 'do-this-instead',
        title: '2. Do this instead',
        paragraphs: [
          'If the goal is an app in a different language, use the supported setting: Apple’s guide says to open System Settings → General → Language & Region and go to Applications, then choose an app and a language. Nothing is removed and nothing breaks.',
          'If the goal is space, uninstall apps you no longer use, clear the Downloads folder, review large files and look at what System Data is made of. Each of those has a guide below, and each recovers space without modifying signed software. If an app misbehaves after an old language cleanup, reinstalling it is the fix; re-signing someone else’s app yourself is not a substitute.',
        ],
      },
    ],
    questions: [
      {
        q: 'Can I delete unused language folders from apps to save space on my Mac?',
        a: "It's not a good idea on current macOS. Removing a .lproj folder changes a signed app bundle, so its code signature no longer matches, and Gatekeeper can reject the app or macOS services relying on a valid code identity can fail.",
      },
      {
        q: 'If I stripped languages from an app in the past, will an update fix it?',
        a: 'Yes, an app update replaces the whole bundle with a complete, freshly signed copy including all languages, so the space you saved disappears at the next update anyway, and a stripping tool would have to run again and break the signature again.',
      },
      {
        q: 'How much space do language files in apps actually take up?',
        a: "It varies. A large office suite can carry a noticeable amount of localized material, but most apps carry little, and either way it's usually small next to caches, old device backups, downloads or media.",
      },
      {
        q: 'How do I make an app open in a different language without breaking it?',
        a: 'Use the supported setting instead of deleting files: open System Settings, General, Language & Region, go to Applications, then choose the app and a language. Nothing is removed and nothing breaks.',
      },
    ],
    related: [
      'uninstall-apps-on-mac',
      'free-up-space-on-mac',
      'find-large-files-on-mac',
      'mac-folder-structure-explained',
    ],
    sources: [
      {
        label: 'Apple Developer: macOS code signing in depth (TN2206)',
        url: 'https://developer.apple.com/library/archive/technotes/tn2206/_index.html',
      },
      {
        label: 'Apple: change the language your Mac uses',
        url: 'https://support.apple.com/guide/mac-help/change-the-language-your-mac-uses-mh26684/mac',
      },
      {
        label: 'Apple Developer: bundle structures',
        url: 'https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html',
      },
    ],
  },
];
