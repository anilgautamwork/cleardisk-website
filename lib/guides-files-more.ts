import type { Guide } from './guides.ts';

export const moreFileGuides: Guide[] = [
  {
    slug: 'change-screenshot-location-mac',
    title: 'Where Mac screenshots are saved, and how to change it',
    description:
      'Mac screenshots save to the Desktop by default. Pick another folder with Shift-Command-5 → Options → Save to, then clear out old ones with a Finder search.',
    summary:
      'By default, macOS saves screenshots to your Desktop as PNG files named with the date and time. To change that, press Shift-Command-5, click Options and choose a folder under Save to.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'default-location',
        title: 'Where screenshots go by default',
        paragraphs: [
          'Apple’s screenshot guide says screenshots save to the Desktop unless you change it, as .png files, while screen recordings save as .mov files. Current releases name them “Screenshot” or “Screen Recording” followed by the date and time. Older releases used “Screen Shot”, with a space, which matters when you search for them later.',
          'If Desktop & Documents Folders is turned on in iCloud, the Desktop lives in iCloud Drive, so every screenshot also syncs and counts against your iCloud storage. That is often the real reason to send them somewhere else, rather than a tidy Desktop.',
        ],
      },
      {
        id: 'change-in-screenshot-app',
        title: '1. Pick a new folder in the Screenshot app',
        paragraphs: [
          'Press Shift-Command-5 to open the Screenshot toolbar. Click Options and look under Save to. Choose one of the preset locations, such as Documents, or click Other Location and select any folder. Apple describes this Options menu as the place to change the default location, and later screenshots follow it, including those taken with Shift-Command-3 and Shift-Command-4.',
          'Press Escape to close the toolbar without taking a shot, then take one test screenshot and check where it lands. If you choose Clipboard instead of a folder, no file is saved at all. That keeps the disk clean, but a screenshot you forget to paste is gone.',
        ],
      },
      {
        id: 'dedicated-folder',
        title: '2. Give screenshots a folder of their own',
        paragraphs: [
          'Create the folder first so you can select it with Other Location. A folder called Screenshots inside Pictures stays out of iCloud Drive; one inside Documents syncs with it when Desktop & Documents Folders is on. Drag the folder to Favorites in the Finder sidebar so it is one click away.',
          'One dedicated folder turns cleanup into a single decision: sort it by date, keep the few that matter and move the rest to the Trash. The new setting only affects new screenshots. The ones already on the Desktop stay there until you move or review them.',
          'Screen recordings follow the same Save to choice, and they are usually far larger than screenshots: a few minutes of video can outweigh hundreds of images. When you clean the folder, look at the .mov files first.',
        ],
      },
      {
        id: 'clipboard-and-thumbnail',
        title: '3. Skip the file for one-off shots',
        paragraphs: [
          'Apple documents a shortcut that avoids files entirely: hold Control while you press the other keys. Control-Shift-Command-3 copies the whole screen to the clipboard, and adding Control to Shift-Command-4 copies a selection. Paste it into a message, document or note and nothing is left on disk.',
          'The floating thumbnail is another route. When Show Floating Thumbnail is on in Options, a preview sits in the bottom-right corner of the screen for a few seconds, and you can drag it into a document, an email, a note or a Finder window. The shot goes where you need it instead of piling up on the Desktop.',
        ],
      },
      {
        id: 'clean-up-old-screenshots',
        title: '4. Clear out the screenshots you already have',
        paragraphs: [
          'Open the Desktop, or wherever your screenshots went, and type Screenshot in the Finder search field. Choose the suggestion that matches the name rather than the contents, and set the scope to the current folder or This Mac. In list view, sort by Date Created or Size. Repeat the search with “Screen Shot” to catch files from older macOS releases.',
          'Renamed screenshots will not match a name search. Spotlight marks screen captures in their metadata, so the read-only mdfind commands below list them by path whatever they are called, in folders Spotlight indexes. The second one limits the search to the Desktop. Neither deletes anything. Move what you don’t need to the Trash, then empty the Trash when you are sure: that is the step that returns the space.',
        ],
        code: [
          'mdfind "kMDItemIsScreenCapture == 1"',
          'mdfind -onlyin ~/Desktop "kMDItemIsScreenCapture == 1"',
        ],
      },
    ],
    related: [
      'icloud-desktop-documents-files-missing-mac',
      'find-large-files-on-mac',
      'delete-files-on-mac',
      'clear-downloads-folder-mac',
    ],
    sources: [
      {
        label: 'Apple: how to take a screenshot on your Mac',
        url: 'https://support.apple.com/en-us/102646',
      },
      {
        label: 'Apple: take screenshots or screen recordings on Mac',
        url: 'https://support.apple.com/guide/mac-help/take-a-screenshot-mh26782/mac',
      },
    ],
  },
  {
    slug: 'find-duplicate-files-mac',
    title: 'Find duplicate files on Mac with built-in tools',
    description:
      'Find duplicate files on Mac with Photos’ Duplicates, Music’s Show Duplicate Items, Finder sorting and a read-only Terminal checksum, and delete copies safely.',
    summary:
      'macOS has no single duplicate finder, but Photos and Music detect their own duplicates, Finder can put likely copies side by side, and a read-only Terminal command proves when two files are identical. ClearDisk does not find duplicates.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'photos-duplicates',
        title: '1. Photos: merge from the Duplicates collection',
        paragraphs: [
          'Photos and videos are the most common duplicates, and they live inside the Photos Library package, where Finder cannot safely touch them. Apple’s Photos guide describes a Duplicates collection under Utilities in the sidebar, filled in once Photos has analysed the library. If you don’t see it, hold the pointer over Utilities and click the menu button that appears.',
          'Select a row of duplicates, or press Command-A for all of them, and click Merge. Apple says one item remains where the set was and the others move to Recently Deleted, where they can be recovered for 30 days. The space returns after that, or when you delete them from Recently Deleted yourself. With iCloud Photos on, those deletions apply on your other devices too.',
        ],
      },
      {
        id: 'music-duplicates',
        title: '2. Music: Show Duplicate Items',
        paragraphs: [
          'In the Music app, click Songs in the sidebar, select a song, and choose File → Library → Show Duplicate Items. Hold Option to change the command to Show Exact Duplicate Items, which Apple defines as the same song, artist, album and version. The plain version also lists legitimate repeats, such as a track that appears on both an album and a soundtrack.',
          'Delete unwanted copies from the library inside Music, not in Finder, so the library stays consistent. Click Done, or choose File → Library → Show All Items, to return to the full list.',
        ],
      },
      {
        id: 'finder-side-by-side',
        title: '3. Finder: put likely copies side by side',
        paragraphs: [
          'For documents, installers and exports, open a folder in list view and sort by Name, then by Size. Copies made with Finder’s Duplicate command end in “copy”, and a file downloaded twice usually gains a number, so both sort next to the original. For a wider net, File → New Smart Folder saves a search, for example Kind is Movie and File Size is greater than 1 GB, that updates itself as files change.',
          'A matching name and size is a hint, not proof. Two exports of the same project can have the same size and different content, and two files with different names can be byte-for-byte identical. Open both before deleting either, or check them with the command in the next step.',
        ],
      },
      {
        id: 'terminal-checksums',
        title: '4. Terminal: list identical files, read-only',
        paragraphs: [
          'A checksum settles the question: identical files produce the same SHA-256 hash. The commands below move into a folder, hash every file larger than 1 MB, and print only the groups whose hashes match. They read files and change nothing. Replace ~/Documents with the folder you want to check; a large folder takes a while because every file is read in full.',
          'Terminal may ask for permission to access Documents, Desktop or Downloads the first time; that is macOS privacy protection, not an error. Treat the output as a review list. Delete from Finder with Command-Delete so Put Back is still available, and never delete a match inside a library package such as Photos Library or inside an app.',
        ],
        code: [
          'cd ~/Documents',
          "find . -type f -size +1M -exec shasum -a 256 {} + | sort | awk '$1 == prev { if (!shown) print last; print; shown = 1; next } { prev = $1; last = $0; shown = 0 }'",
        ],
      },
      {
        id: 'clones-free-less',
        title: 'Why deleting a copy can free less than expected',
        paragraphs: [
          'On APFS, the file system of a current Mac’s startup disk, a copy made on the same volume can be a clone. Apple’s developer documentation describes a clone as a copy that occupies no additional space on disk; the two files share their data until one of them changes. Deleting a clone removes a name, and sometimes very little storage.',
          'That makes a duplicate hunt most worthwhile for files that arrived separately: the same download saved twice, camera imports repeated from a card, or folders copied back from another disk. Empty the Trash afterwards and compare available space in System Settings → General → Storage.',
        ],
      },
      {
        id: 'where-cleardisk-fits',
        title: 'Where ClearDisk fits',
        paragraphs: [
          'ClearDisk does not detect duplicate files and does not compare file contents. Its free scan lists the largest files with their paths and sizes, which is often how a second copy of a big video, disk image or archive becomes obvious. Confirm with the checksum command before removing either copy.',
        ],
      },
    ],
    related: [
      'find-large-files-on-mac',
      'photos-library-taking-up-space-mac',
      'apple-music-downloads-mac',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: remove duplicate photos and videos on Mac',
        url: 'https://support.apple.com/guide/photos/remove-duplicates-pht5a3157c1d/mac',
      },
      {
        label: 'Apple: find duplicate items in Music on Mac',
        url: 'https://support.apple.com/guide/music/find-duplicate-items-mus4a9a2d6f1/mac',
      },
      {
        label: 'Apple Developer: about Apple File System',
        url: 'https://developer.apple.com/documentation/foundation/about-apple-file-system',
      },
    ],
  },
  {
    slug: 'recover-files-from-trash-mac',
    title: 'How to recover deleted files from the Trash on Mac',
    description:
      'Get files back from the Mac Trash with Put Back, find where the Trash lives on disk, and what to try once it has been emptied: Time Machine and iCloud Drive.',
    summary:
      'If the Trash hasn’t been emptied, open it and choose File → Put Back, or drag the item out. Once it has been emptied, the realistic routes are a Time Machine backup and, for iCloud Drive files, Recently Deleted on iCloud.com.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'open-the-trash',
        title: '1. Open the Trash and look first',
        paragraphs: [
          'Click the Trash at the right end of the Dock. Switch to list view and sort by name, or type part of the name in the search field and set the scope to the Trash. Deleted items keep their names, so searching is usually quicker than scrolling.',
          'If the file isn’t there, think about how it was deleted. Items removed with Delete Immediately, with rm in Terminal or by some apps’ own delete commands never pass through the Trash. Photos and Mail keep their own deleted items: Recently Deleted in Photos, and the Trash mailbox in Mail.',
        ],
      },
      {
        id: 'put-back',
        title: '2. Put Back, or drag it out',
        paragraphs: [
          'Apple documents two ways to restore: select the item and choose File → Put Back, or drag it out of the Trash into any folder. Put Back returns it to the folder it came from, which is the safest choice when you are not sure where it belongs. If Put Back isn’t available for an item, drag it to a folder instead.',
          'For files deleted from an external drive, connect that drive first. Each disk keeps its own Trash, and its items appear in the Dock’s Trash only while the disk is mounted. Restore what you need before emptying anything else.',
        ],
      },
      {
        id: 'where-the-trash-lives',
        title: 'Where the Trash lives on disk',
        paragraphs: [
          'The Trash in the Dock is a view over several hidden folders. For your startup disk it is .Trash in your home folder, written ~/.Trash. Each other volume has a hidden .Trashes folder at its top level, with a subfolder for each user, and its contents appear only while that disk is connected.',
          'You don’t need these paths to recover anything; the Dock icon shows them all. They matter when Terminal reports “Operation not permitted” for ~/.Trash, which is macOS privacy protection for that folder, and when a disk scan shows the Trash as a large category. Items in the Trash still use their space until it is emptied.',
        ],
      },
      {
        id: 'time-machine',
        title: '3. After the Trash is emptied: Time Machine',
        paragraphs: [
          'Emptying the Trash is meant to be final, and Put Back goes with it. If Time Machine was backing up, open a Finder window on the folder where the file used to be, then open Time Machine from Applications or Spotlight. Use the arrows or the timeline to reach a backup from before the deletion, select the item and click Restore. Apple notes that restored items return to their original location.',
          'A backup only contains what existed when it ran, so a file created and deleted between backups may not be in any of them. When the backup disk isn’t available, Apple says Time Machine uses local snapshots instead. It keeps those for about 24 hours, so they help only with a recent deletion.',
        ],
      },
      {
        id: 'icloud-and-other-clouds',
        title: '4. iCloud Drive and other synced folders',
        paragraphs: [
          'Files deleted from iCloud Drive have a second route: Recently Deleted in iCloud Drive on iCloud.com keeps eligible files for 30 days. Apple also removes iCloud Drive items from the Mac’s Trash after 30 days regardless of Finder settings. The iCloud Drive recovery guide walks through both.',
          'Google Drive, Dropbox and OneDrive keep their own deleted-files history on their websites. Check there before assuming a synced file is gone, and restore it through the service rather than copying an old version back by hand.',
        ],
      },
      {
        id: 'if-nothing-has-a-copy',
        title: 'If nothing has a copy',
        paragraphs: [
          'This guide can’t promise more. Recovery apps exist, but none can guarantee results, and installing one or saving new files to the same disk can overwrite what remains. If the data is valuable, stop saving to that disk and contact a professional recovery service before experimenting.',
          'To avoid a repeat, keep Time Machine running and leave the 30-day auto-empty option off if you use the Trash as a safety net. ClearDisk’s review dialog offers Move to Trash for the same reason; its Remove Permanently option skips the Trash and cannot be undone.',
        ],
      },
    ],
    related: [
      'recover-deleted-icloud-drive-files-mac',
      'empty-trash-automatically-mac',
      'time-machine-snapshots',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
      {
        label: 'Apple: restore items backed up with Time Machine on Mac',
        url: 'https://support.apple.com/guide/mac-help/restore-files-mh11422/mac',
      },
      {
        label: 'Apple: about Time Machine local snapshots',
        url: 'https://support.apple.com/en-us/102154',
      },
    ],
  },
  {
    slug: 'empty-trash-automatically-mac',
    title: 'Empty the Trash automatically on Mac after 30 days',
    description:
      'Turn on automatic Trash emptying on Mac in Finder or Storage settings, what the 30-day timer counts, and what it means for getting deleted files back.',
    summary:
      'Choose Finder → Settings → Advanced and select “Remove items from the Trash after 30 days”, or use the Empty Trash Automatically recommendation in Storage settings. Both change the same setting; the cost is that Put Back stops working for anything deleted more than a month ago.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'turn-on-in-finder',
        title: '1. Turn it on in Finder',
        paragraphs: [
          'Click Finder in the Dock, choose Finder → Settings and click Advanced. Select “Remove items from the Trash after 30 days”. Apple’s guide to deleting files documents this path. On releases before macOS Ventura the menu item is called Preferences rather than Settings. If the Finder menu isn’t showing, click an empty area of the Desktop first so Finder is the active app.',
          'The timer counts how long each item has been in the Trash, not how old the file is. Apple describes it as erasing items that have been in the Trash for more than 30 days, so a ten-year-old document you delete today still has a month before it goes.',
        ],
      },
      {
        id: 'turn-on-in-storage',
        title: '2. Or turn it on from Storage settings',
        paragraphs: [
          'Open System Settings → General → Storage. While the option is off, the Recommendations include Empty Trash Automatically, with the same 30-day description. Turning it on there changes the Finder setting, and Apple says you can change it later in the Finder.',
          'Items that have already been in the Trash for longer than 30 days become eligible straight away, so look through the Trash before you switch it on. Anything newer stays until its 30 days are up or you empty the Trash yourself.',
        ],
      },
      {
        id: 'what-it-means-for-recovery',
        title: 'What it means for recovery',
        paragraphs: [
          'Put Back only works while an item is still in the Trash. With the timer on, your window to change your mind is 30 days from the moment you deleted something; after that, the way back is a backup. That is a fair trade if Time Machine runs regularly and you rarely rescue files from the Trash. It is a poor one if the Trash is where you park things you might still want. Time Machine backs up files while they exist, so a file erased by the timer can still be in a backup made before you deleted it.',
          'iCloud Drive follows its own rule: Apple empties items moved to the Trash from iCloud Drive after 30 days regardless of the Finder setting, and Recently Deleted on iCloud.com is the remaining route. Photos keeps deleted items in its own Recently Deleted album on its own schedule; the Finder setting doesn’t touch it.',
        ],
      },
      {
        id: 'review-before-relying',
        title: '3. Know what the timer won’t do',
        paragraphs: [
          'Items deleted from an external drive stay on that drive and appear in the Trash only while it is connected. Don’t count on a timer to deal with them; empty the Trash yourself while the drive is attached.',
          'The timer is not a plan for a full disk either. Thirty days is a long time when a Mac is out of space. If you need room now, review the Trash and empty it yourself with Finder → Empty Trash, or Shift-Command-Delete, which Apple lists among its Finder shortcuts.',
          'If you want something in between, leave the timer off and make emptying a habit: open the Trash, sort by name or size, put back anything you meant to keep, then empty it. That keeps the safety net and still returns the space.',
        ],
      },
      {
        id: 'turn-it-off',
        title: '4. Turn it off again',
        paragraphs: [
          'Clear the same checkbox in Finder → Settings → Advanced. Nothing already erased comes back, but items still in the Trash stay there until you empty it. On a shared Mac, each user account has its own Trash and its own Finder settings, so the choice applies to your account only.',
          'Files that ClearDisk moves to the Trash follow the same timer once they are there. Its Remove Permanently option skips the Trash entirely, so the timer and Put Back never apply to those.',
        ],
      },
    ],
    related: [
      'recover-files-from-trash-mac',
      'optimize-storage-mac',
      'trash-wont-empty-mac',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
      {
        label: 'Apple: optimize storage space on your Mac',
        url: 'https://support.apple.com/guide/mac-help/sysp4ee93ca4/mac',
      },
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
    ],
  },
  {
    slug: 'downloads-folder-missing-mac',
    title: 'Downloads folder missing from Dock or Finder on Mac',
    description:
      'Downloads gone from the Dock or Finder sidebar? Open it with Option-Command-L, add it back in Finder settings or the Dock, and check before making a new one.',
    summary:
      'The folder is almost always still at ~/Downloads; only a shortcut to it was removed. Press Option-Command-L to open it, then add it back in Finder → Settings → Sidebar or drag it to the right side of the Dock.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'check-it-exists',
        title: '1. Check that the folder still exists',
        paragraphs: [
          'In Finder, choose Go → Downloads, or press Option-Command-L, which Apple lists as the shortcut for opening the Downloads folder. If a window opens, the folder is fine and only a sidebar or Dock shortcut disappeared. Shift-Command-H opens your home folder, where Downloads sits beside Desktop, Documents and Pictures.',
          'The full path is /Users/yourname/Downloads, written ~/Downloads for short, and Shift-Command-G opens Go to Folder if you want to type it. Removing a shortcut never deletes the folder: Apple notes that dragging an item out of the sidebar or the Dock removes only the link, and the item stays where it was.',
          'Terminal gives the same answer without changing anything. The command below prints the folder’s details if it exists, and “No such file or directory” if it doesn’t.',
        ],
        code: ['ls -ld ~/Downloads'],
      },
      {
        id: 'finder-sidebar',
        title: '2. Put it back in the Finder sidebar',
        paragraphs: [
          'Choose Finder → Settings, click Sidebar and select Downloads in the Favorites list. It reappears straight away. Alternatively, open your home folder and drag Downloads into the Favorites section of the sidebar, then drag it up or down to change its position.',
          'If the whole Favorites section has collapsed, hold the pointer over its heading until Show appears and click it. If the sidebar itself is gone, choose View → Show Sidebar. Sidebar choices belong to your user account, so another account on the same Mac keeps its own list.',
        ],
      },
      {
        id: 'dock',
        title: '3. Put it back in the Dock',
        paragraphs: [
          'Open your home folder with Shift-Command-H and drag Downloads to the right side of the Dock, past the divider near the Trash. Apple’s Dock guide puts files and folders on that side and apps on the other. Control-click the new icon to choose whether it displays as a folder or a stack, and how its contents open. To remove it again, drag it out of the Dock until Remove appears; the folder itself stays put.',
          'Drag the Downloads folder from your home folder, not a file from inside it and not a similarly named folder somewhere else. If you add a Downloads folder from iCloud Drive or a backup, the Dock will point there, while new downloads keep landing in the real one.',
        ],
      },
      {
        id: 'if-it-is-really-gone',
        title: '4. If Go → Downloads can’t find it',
        paragraphs: [
          'This is rare. Look in the Trash first and use File → Put Back if the folder is there. Then search Finder for a folder named Downloads: it may have been dragged into Documents, iCloud Drive or another folder by accident. If so, move it back into your home folder rather than making a new one.',
          'Don’t create a second Downloads folder while the original still exists somewhere, or files end up split between the two. Only when the folder is truly gone, create a new folder named Downloads in your home folder, then check that your browser saves there. If the folder was deleted and the Trash has since been emptied, Time Machine can restore it with its contents; the Trash recovery guide covers that.',
        ],
      },
      {
        id: 'icloud-and-browsers',
        title: 'iCloud and browser settings',
        paragraphs: [
          'Turning on Desktop & Documents Folders in iCloud moves those two folders into iCloud Drive. Apple’s description covers Desktop and Documents only, and Downloads stays in your home folder. If Desktop or Documents look empty after an iCloud change, that is a different problem, covered in its own guide.',
          'If downloads seem to vanish, the browser may be saving somewhere else. In Safari, Settings → General → File download location shows the folder; other browsers have the same choice in their download settings. Set it back to Downloads and new files will appear where you expect.',
        ],
      },
    ],
    related: [
      'clear-downloads-folder-mac',
      'icloud-desktop-documents-files-missing-mac',
      'mac-folder-structure-explained',
      'show-library-folder-mac',
    ],
    sources: [
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
      {
        label: 'Apple: customize the Finder sidebar on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchl83c9e8b8/mac',
      },
      {
        label: 'Apple: use the Dock on Mac',
        url: 'https://support.apple.com/guide/mac-help/use-the-dock-mh35859/mac',
      },
    ],
  },
  {
    slug: 'photos-optimize-storage-not-working',
    title: 'Photos Optimize Mac Storage not working? What to check',
    description:
      'Photos optimizes only when the Mac needs space and originals are already in iCloud. Check sync status, iCloud storage and the System Photo Library first.',
    summary:
      'Optimize Mac Storage shrinks the library only when the Mac needs space, and only for photos whose originals are already in iCloud. If the library stays large, check the status at the bottom of All Photos, your iCloud storage and which library is the System Photo Library.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'how-it-works',
        title: 'How Optimize Mac Storage actually works',
        paragraphs: [
          'The setting is in Photos → Settings → iCloud, beneath iCloud Photos. Apple describes it as keeping space-saving versions on the device while iCloud holds the originals, and adds the condition people miss: optimization happens when you need more device storage, starting with the photos and videos you access least.',
          'So a Mac with plenty of free space can keep most originals for a long time, and the library does not shrink the moment you select the option. That is the feature working as designed. The number to watch is available space when the disk gets tight, not the library size on a quiet day.',
          'The setting also belongs to each device. Turning on Optimize on an iPhone does nothing for the Mac’s library, and choosing Download Originals on the Mac doesn’t change the iPhone.',
        ],
      },
      {
        id: 'check-sync-status',
        title: '1. Check the status at the bottom of All Photos',
        paragraphs: [
          'Open Photos, select Library in the sidebar, click All Photos in the toolbar and scroll to the very bottom. Apple’s troubleshooting page points here for the library status, and says to follow any directions the status message gives.',
          'A photo that hasn’t finished uploading has no original in iCloud yet, so Photos has nothing to fall back on and keeps the full-size file. If the status shows a large upload still in progress, or items that can’t upload, deal with that first. Apple’s page also describes an Unable to Upload album for items that failed, and suggests reimporting them.',
        ],
      },
      {
        id: 'clear-what-pauses-sync',
        title: '2. Clear whatever is pausing the upload',
        paragraphs: [
          'Apple lists the usual reasons syncing pauses: Low Power Mode, a poor network connection, the device getting too warm, and exceeding your iCloud storage. For a large library, its advice is to connect to Wi-Fi and let syncing run without interruptions, for example overnight. Upload time depends on the size of the library and your internet speed.',
          'If iCloud storage is full, new photos stop uploading and nothing new can be optimized. Free space in iCloud or change your plan first; the iCloud storage guide explains how to see what uses it. Also confirm this Mac is signed in with the same Apple Account as your other devices.',
        ],
      },
      {
        id: 'system-photo-library',
        title: '3. Make sure it is the System Photo Library',
        paragraphs: [
          'iCloud Photos works only with the System Photo Library, and Optimize Mac Storage depends on iCloud Photos. If you keep more than one library, or opened one from an external drive, check which one is active: quit Photos, hold Option while opening it, and note the library you choose. In Photos → Settings → General, Use as System Photo Library shows whether it already is.',
          'Switching the System Photo Library is a bigger change than it looks. Apple notes that with iCloud Photos on, a newly designated library merges with what is in iCloud, and iCloud content downloads again. Do it deliberately, with a backup, and expect it to take time and space before any saving appears.',
        ],
      },
      {
        id: 'measure-the-right-thing',
        title: '4. Give it time, then measure available space',
        paragraphs: [
          'After uploads finish, the library shrinks only as the Mac needs room. Watch available space in System Settings → General → Storage over days, not minutes. If you need space immediately, Optimize is the wrong tool: moving the library to an external drive or deleting items you don’t want are the direct routes, and the Photos library guide compares them.',
          'Don’t try to hurry it by deleting files inside the Photos Library package, and don’t turn off iCloud Photos while originals exist only in iCloud; choose Download Originals to this Mac first if you plan to stop using it. ClearDisk shows the Photos Library package and its size, but leaves its contents to Photos.',
        ],
      },
    ],
    related: [
      'photos-library-taking-up-space-mac',
      'icloud-storage-full-but-not-mac',
      'move-photos-library-to-external-drive',
      'optimize-storage-mac',
    ],
    sources: [
      {
        label: 'Apple: set up and use iCloud Photos',
        url: 'https://support.apple.com/en-us/108782',
      },
      {
        label: 'Apple: if your iCloud Photos aren’t syncing',
        url: 'https://support.apple.com/en-us/101559',
      },
      {
        label: 'Apple: designate a System Photo Library in Photos',
        url: 'https://support.apple.com/en-us/104946',
      },
    ],
  },
];
