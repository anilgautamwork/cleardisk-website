import type { Guide } from './guides.ts';

export const creativeGuides: Guide[] = [
  {
    slug: 'clear-premiere-pro-media-cache-mac',
    title: 'How to clear the Premiere Pro media cache on Mac',
    description:
      'Clear the Premiere Pro media cache on Mac: find the cache location, choose between deleting unused or all files, and set cleanup by age or size in Settings.',
    summary:
      'Use Premiere Pro’s own Media Cache settings: delete unused cache files, or all of them before opening a project. By default the cache lives in ~/Library/Application Support/Adobe/Common, and Premiere Pro rebuilds what it needs.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-the-cache-holds',
        title: 'What the media cache holds',
        paragraphs: [
          'When you import video and audio, Premiere Pro creates versions it can read faster. Adobe lists peak files (.pek), which draw waveforms, and conformed audio files (.cfa) among them. These are the media cache files. A separate media cache database keeps track of where each one is.',
          'None of this is your edit. Projects, sequences and original footage are stored elsewhere, and Adobe says deleted cache files are recreated whenever the source media needs them. The cost is time: a large project conforms and indexes again the next time you open it. The database is shared with After Effects and Media Encoder, so a change here affects those apps too.',
        ],
      },
      {
        id: 'find-the-location',
        title: '1. Find the cache location and its size',
        paragraphs: [
          'Open Premiere Pro → Settings → Media Cache. Adobe’s current help pages, which call the app simply Premiere, show the menu as Premiere → Settings; older releases say Preferences. The panel shows where the media cache files and the database are stored. On macOS the default is the Common folder inside Adobe’s Application Support folder in your user Library.',
          'The command below lists each folder there with its size. Media Cache Files and Media Cache are the ones this guide covers. Adobe recommends a fast SSD for the cache, ideally a dedicated drive, so if the settings panel points somewhere else, measure that path instead.',
        ],
        code: ['du -sh ~/"Library/Application Support/Adobe/Common"/*'],
      },
      {
        id: 'delete-from-settings',
        title: '2. Delete unused or all cache files in Settings',
        paragraphs: [
          'In the Media Cache panel, click Delete next to Remove Media Cache Files. Adobe offers two choices. “Delete unused media cache files” removes files created for source media that can no longer be found. “Delete all media cache files from the system” removes everything in the current cache location.',
          'Because the unused option looks for missing source media, connect every drive that holds footage you still edit first. Otherwise cache for a disconnected drive can count as unused and has to be rebuilt later. For a full clear, Adobe says to restart Premiere Pro and choose the delete-all option before opening any project; File → Close All Projects gets you to the same state.',
        ],
      },
      {
        id: 'set-automatic-cleanup',
        title: '3. Let Premiere Pro clean up automatically',
        paragraphs: [
          'Under Media Cache Management in the same panel, the default is “Do not delete cache files automatically.” You can choose “Automatically delete cache files older than” a number of days, which starts at 90, or “Automatically delete oldest cache files when cache exceeds” a size, which starts at 10% of the volume that holds the cache.',
          'The change takes effect after you quit and reopen the app. Adobe says Premiere Pro checks the rule at launch, starts deleting about 10 minutes later, and then repeats the check weekly. Automatic deletion covers only .pek, .cfa and .ims files in the Peak and Media Cache folders, so it trims the cache without touching projects.',
        ],
      },
      {
        id: 'manual-and-previews',
        title: '4. Clear the cache manually or remove render previews',
        paragraphs: [
          'If Premiere Pro won’t open, Adobe describes a manual route. Quit the app, choose Go → Go to Folder in Finder, open ~/Library/Application Support/Adobe/Common, and move the media cache files to the Trash, then empty it. Stay inside the media cache folders: other Adobe video apps use this Common folder too.',
          'Render previews are separate from the media cache. With the Timeline active, Sequence → Delete Render Files removes a sequence’s previews, and Sequence → Delete Work Area Render Files limits the deletion to the work area. File → Project Settings → Scratch Disks shows where video and audio previews are written. Deleted previews must be rendered again before playback is smooth.',
        ],
      },
      {
        id: 'after-cleanup',
        title: 'After cleanup',
        paragraphs: [
          'Open a current project and expect a pause while audio conforms and waveforms redraw; don’t clear the cache the night before a deadline. If the cache fills the drive again quickly, use Browse in the Media Cache panel to move it to a larger fast drive rather than clearing it every week.',
          'Clearing the cache doesn’t shrink project files, exports or original footage, which are often larger. ClearDisk’s free scan can show how big the Adobe folders and your video folders are and where they sit; the cache itself is best cleared in Premiere Pro. Files moved to the Trash free space only after you empty it.',
        ],
      },
    ],
    questions: [
      {
        q: 'Does clearing the Premiere Pro media cache delete my original footage?',
        a: "No. The media cache only holds peak files and conformed audio that Premiere Pro creates for faster playback. Projects, sequences and original footage are stored elsewhere and aren't touched by clearing it.",
      },
      {
        q: 'Why does deleting unused media cache files sometimes remove cache I still need?',
        a: "Delete unused looks for source media it can't find, so if a drive holding footage you still edit isn't connected, its cache can be mistaken for unused and removed, needing a rebuild the next time you open that footage.",
      },
      {
        q: "Does Premiere Pro's media cache affect After Effects too?",
        a: 'Yes. The media cache database is shared with After Effects and Media Encoder, so clearing or relocating it in Premiere Pro changes it for those other apps as well.',
      },
      {
        q: 'Are render previews the same thing as the media cache in Premiere Pro?',
        a: "No, they're separate. Render previews are cleared with Sequence then Delete Render Files and must be rendered again before playback is smooth, while the media cache holds peak files and conformed audio instead.",
      },
    ],
    related: [
      'adobe-creative-cloud-space-mac',
      'clear-davinci-resolve-cache-mac',
      'photoshop-scratch-disk-full-mac',
      'application-support-folder-mac',
    ],
    sources: [
      {
        label: 'Adobe: clear media cache using preferences',
        url: 'https://helpx.adobe.com/premiere/desktop/troubleshooting/media-issues/clear-media-cache-using-preferences.html',
      },
      {
        label: 'Adobe: automatically manage your media cache files',
        url: 'https://helpx.adobe.com/premiere/desktop/troubleshooting/media-issues/automatically-manage-your-media-cache-files.html',
      },
      {
        label: 'Adobe: delete media cache files manually',
        url: 'https://helpx.adobe.com/premiere/desktop/troubleshooting/media-issues/delete-media-cache-files-manually.html',
      },
    ],
  },
  {
    slug: 'clear-davinci-resolve-cache-mac',
    title: 'How to clear the DaVinci Resolve cache on Mac',
    description:
      'Find the DaVinci Resolve cache location on Mac, clear render cache with Delete Render Cache, set automatic cleanup, and deal with optimized media and proxies.',
    summary:
      'Resolve writes render cache and optimized media to the Cache files location in Project Settings, by default a CacheClip folder on the first Media Storage volume. Clear render cache with Playback → Delete Render Cache; optimized media and proxies are deleted separately.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'find-cache-location',
        title: '1. Find the cache files location',
        paragraphs: [
          'Open the project and click the gear button at the bottom right of the page bar to open Project Settings. Choose Master Settings and look under Working Folders. “Cache files location” is where render cache files go. Blackmagic’s manual says it defaults to a hidden CacheClip folder on the first volume in the Media Storage list of Resolve’s preferences.',
          'That first volume is set in DaVinci Resolve → Preferences → System → Media Storage, and it also holds gallery stills. If no scratch volume was added, Resolve uses your system disk. Project Settings are saved with each project, so an older project can point to a different drive from the one you use today.',
        ],
      },
      {
        id: 'check-size',
        title: '2. See which projects hold cache',
        paragraphs: [
          'Choose Playback → Manage Render Cache to open the Cache Manager. It lists projects across your project libraries with their render cache, so you can see what is there before deleting anything. The Location menu switches between local, network and cloud libraries, or shows all of them.',
          'To check the folder itself, open it in Finder and choose File → Get Info. Because the manual describes CacheClip as hidden, press Command-Shift-Period in Finder if you can’t see it. In Terminal, replace the example path below with the one shown in Working Folders.',
        ],
        code: ['du -sh "/Volumes/YourDrive/CacheClip"'],
      },
      {
        id: 'delete-render-cache',
        title: '3. Delete render cache from inside Resolve',
        paragraphs: [
          'With the project open, choose Playback → Delete Render Cache, then All, Unused or Selected Clips. All resets every cached clip in the project. Unused removes only cache that no longer matches clips or effects in the Timeline. Selected Clips clears the cache for the clips you selected.',
          'To clear several projects at once, tick the Render Cache box for each one in the Cache Manager and click Clear Selected Cache. Blackmagic notes there is no warning dialog or undo for that button, so check the selection twice. Resolve caches again as you play and grade, which takes time on heavy timelines.',
        ],
      },
      {
        id: 'automatic-cleanup',
        title: '4. Turn on automatic cache deletion',
        paragraphs: [
          'Choose DaVinci Resolve → Preferences → User → Cache Management, select “Delete cache older than” and enter a number of days. Resolve then removes local cache files older than that, which keeps finished projects from filling the drive.',
          'Pick a period longer than the usual gap between sessions on an active project. If it is too short, a project you come back to after a break needs caching again. You can still clear cache by hand from Playback → Manage Render Cache at any time.',
        ],
      },
      {
        id: 'optimized-and-proxies',
        title: '5. Remove optimized media and proxies deliberately',
        paragraphs: [
          'Optimized media is written to the same Cache files location and stays between sessions. The manual says you must delete it manually in Finder; Delete Render Cache doesn’t remove it. Clear it for finished projects, or for clips you can regenerate. Changing a clip’s camera raw settings discards its optimized media anyway.',
          'Proxies go to the “Proxy generation location” in Working Folders, or to a Proxy folder beside the original media, depending on your Media Storage preference. Unlink Proxy Media removes only the link: the proxy file stays on disk until you delete it in Finder. Keep your original camera files; proxies and optimized media are made from them.',
        ],
      },
      {
        id: 'what-to-leave',
        title: 'What to leave alone',
        paragraphs: [
          'Don’t delete project libraries or the hidden .gallery folder to save space. Project libraries hold your edits, and the gallery holds saved stills you may rely on for grades. Export important projects as .drp files before any large cleanup.',
          'ClearDisk’s free scan can measure a chosen folder, such as a scratch drive’s CacheClip folder, and show what else takes space there. Deleting render cache is still best done with Resolve’s own commands, which know which project each file belongs to.',
        ],
      },
    ],
    questions: [
      {
        q: 'Does Delete Render Cache in Resolve also remove optimized media?',
        a: "No. Optimized media must be deleted manually in Finder, since Delete Render Cache doesn't remove it. Clear it deliberately for finished projects or for clips you can regenerate from the originals.",
      },
      {
        q: 'Is there a warning before clearing render cache in DaVinci Resolve?',
        a: "No. There is no warning dialog or undo when you click Clear Selected Cache in the Cache Manager, so double-check your project selection before confirming, since it can't be reversed.",
      },
      {
        q: 'Does unlinking proxy media in Resolve delete the proxy files?',
        a: 'No. Unlink Proxy Media only removes the link between a clip and its proxy; the proxy file itself stays on disk in Finder until you delete it yourself.',
      },
      {
        q: 'Can DaVinci Resolve delete old cache automatically?',
        a: "Yes. Turn on Delete cache older than under Preferences, User, then Cache Management, and set a number of days longer than your usual gap between sessions so an active project doesn't need re-caching.",
      },
    ],
    related: [
      'clear-premiere-pro-media-cache-mac',
      'final-cut-pro-storage-full',
      'show-hidden-files-mac',
      'find-large-files-on-mac',
    ],
    sources: [
      {
        label: 'Blackmagic Design: DaVinci Resolve 20 Reference Manual (PDF)',
        url: 'https://documents.blackmagicdesign.com/UserManuals/DaVinci_Resolve_20_Reference_Manual.pdf',
      },
    ],
  },
  {
    slug: 'clear-lightroom-cache-mac',
    title: 'Lightroom cache on Mac: where it is and how to clean it',
    description:
      'Lightroom cache location on Mac: purge the Camera Raw cache, shrink Previews.lrdata, discard Smart Previews and old backups, and set the cloud app’s limit.',
    summary:
      'Lightroom Classic keeps a Camera Raw cache, purged in Preferences → Performance, and preview files next to the catalog in ~/Pictures/Lightroom by default. Lightroom, the cloud-based app, has its own cache limit in Preferences → Cache.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'which-lightroom',
        title: 'Which Lightroom you have',
        paragraphs: [
          'Adobe makes two apps. Lightroom Classic keeps a catalog on your Mac and stores its previews beside it. Lightroom, the cloud-based app, keeps originals in Adobe’s cloud and caches copies locally. The storage controls differ, so check the app name in the menu bar before you start.',
          'Leave the catalog file (.lrcat) and the folders that hold your photos alone. The catalog stores your edits, ratings and collections; the photo folders are your originals. When troubleshooting, Adobe suggests renaming files rather than deleting them where possible.',
        ],
      },
      {
        id: 'camera-raw-cache',
        title: '1. Purge the Camera Raw cache in Lightroom Classic',
        paragraphs: [
          'Choose Lightroom Classic → Preferences → Performance and find Camera Raw Cache Settings; older releases put these under File Handling. Purge Cache empties the cache and Maximum Size caps it. Adobe’s default is 5 GB. The same panel has separate Video Cache Settings.',
          'This cache speeds up the Develop module, and Adobe suggests a larger size for performance. After a purge, the first adjustments on each photo take a little longer. If the startup disk is tight, Choose moves the cache to a faster or roomier drive instead of shrinking it.',
        ],
      },
      {
        id: 'previews-lrdata',
        title: '2. Shrink the Previews.lrdata file',
        paragraphs: [
          'By default, Adobe stores the catalog in ~/Pictures/Lightroom with two companions: Lightroom Catalog Previews.lrdata for thumbnails and previews, and Lightroom Catalog Smart Previews.lrdata. The command below shows their sizes, along with the Backups folder. If you moved the catalog, measure that folder instead.',
          '1:1 previews make the preview file large. Select photos in the Library module and choose Library → Previews → Discard Standard and 1:1 Previews, or set Catalog Settings → File Handling → Automatically Discard 1:1 Previews to a shorter period. Adobe says you can delete Previews.lrdata if it grows too large; quit Lightroom Classic first, and expect previews to rebuild as you open each folder. Standard preview size and quality are also set in Catalog Settings → File Handling, and smaller standard previews make the file grow more slowly.',
        ],
        code: ['du -sh ~/Pictures/Lightroom/*'],
      },
      {
        id: 'smart-previews',
        title: '3. Discard Smart Previews you no longer need',
        paragraphs: [
          'Smart Previews are compact files that let you edit photos whose originals aren’t connected. To remove them for selected photos, choose Library → Previews → Discard Smart Previews. They are stored separately from ordinary previews, in the Smart Previews.lrdata file.',
          'Keep them for photos on a drive you leave at home but still edit on the road. Without Smart Previews, those photos can’t be edited until the drive is connected again.',
        ],
      },
      {
        id: 'catalog-backups',
        title: '4. Prune old catalog backups',
        paragraphs: [
          'Lightroom Classic saves catalog backups in ~/Pictures/Lightroom/Backups by default, one dated folder per backup. Each holds a copy of the catalog, not your photos, and years of backups can add up.',
          'Keep the most recent few, and Adobe recommends keeping catalog backups on a different disk from the catalog. Move older dated folders to the Trash, then empty it once you’re sure. ClearDisk’s storage map can show how much of your Pictures folder the Lightroom folder takes before you decide.',
        ],
      },
      {
        id: 'lightroom-cloud-cache',
        title: '5. Set the cache limit in Lightroom',
        paragraphs: [
          'In the cloud-based Lightroom app, choose Lightroom → Preferences → Cache. It shows App & user data, Stored offline, Photo Cache and Free space. Under Manage Storage, a lower cache size limit saves disk space; Lightroom downloads photos again when you need them.',
          'Turn off Store A Copy Of All Smart Previews Locally if you don’t need offline access, or use Storage Location For Originals to keep local copies on an external drive. Let uploads finish before lowering the limit, so the cloud has every original. If you use both apps, each has its own storage settings, so cleaning one doesn’t change the other.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to delete the Previews.lrdata file in Lightroom Classic?',
        a: 'Yes, Adobe says you can delete it if it grows too large. Quit Lightroom Classic first, and expect previews to rebuild as you open each folder afterward.',
      },
      {
        q: "What's the difference between Smart Previews and regular previews in Lightroom Classic?",
        a: "Smart Previews are compact files that let you edit photos when the original isn't connected, stored in their own file separately from ordinary previews. Keep them for photos on a drive you leave at home.",
      },
      {
        q: 'How many Lightroom Classic catalog backups should I keep?',
        a: 'Keep only the most recent few, ideally stored on a different disk from the catalog, as Adobe recommends. Older dated backup folders in the Backups directory can be moved to the Trash.',
      },
      {
        q: 'Does lowering the cache limit in the cloud Lightroom app delete my photos?',
        a: "No. A lower cache size limit under Preferences then Cache just means Lightroom downloads photos again from the cloud when you need them; it doesn't remove your originals stored there.",
      },
    ],
    related: [
      'adobe-creative-cloud-space-mac',
      'photos-library-taking-up-space-mac',
      'find-large-files-on-mac',
      'expand-mac-storage-external-ssd',
    ],
    sources: [
      {
        label: 'Adobe: optimize Lightroom Classic performance',
        url: 'https://helpx.adobe.com/lightroom-classic/desktop/technical-support/performance-guidelines/optimize-performance-lightroom.html',
      },
      {
        label:
          'Adobe: Lightroom Classic preference file and other file locations',
        url: 'https://helpx.adobe.com/lightroom-classic/desktop/kb/preference-file-and-other-file-locations.html',
      },
      {
        label: 'Adobe: Lightroom preferences, including Cache',
        url: 'https://helpx.adobe.com/lightroom/desktop/introduction/preferences.html',
      },
    ],
  },
  {
    slug: 'adobe-creative-cloud-space-mac',
    title: 'Clear Adobe cache on Mac: apps, media cache and files',
    description:
      'Clear Adobe cache on Mac safely: remove old Creative Cloud app versions, trim the shared media cache, and check Creative Cloud Files before you delete it.',
    summary:
      'Adobe storage on a Mac usually comes from installed apps and old versions, the media cache shared by Premiere Pro, After Effects and Media Encoder, and your own files. Use the Creative Cloud app and each app’s settings, not a sweep of ~/Library.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-adobe-space-goes',
        title: 'Where Adobe storage usually sits',
        paragraphs: [
          'There is no single Adobe cache folder. Space comes from a few places, and each has its own safe way out. Measure first so you spend time on the one that is actually large.',
          'The commands below list Adobe apps in Applications and each folder in Adobe’s Application Support folder with its size. That folder also holds preferences and plug-ins, so don’t empty it wholesale.',
        ],
        items: [
          'Apps in /Applications, installed through the Creative Cloud desktop app, sometimes with previous versions kept alongside.',
          'The Common folder in ~/Library/Application Support/Adobe, which holds the media cache for Premiere Pro, After Effects and Media Encoder.',
          'App caches such as Photoshop scratch files, the After Effects disk cache and Lightroom previews.',
          'Your own files, including a Creative Cloud Files folder left over from Adobe’s file sync service.',
        ],
        code: [
          'du -sh /Applications/Adobe*',
          'du -sh ~/"Library/Application Support/Adobe"/*',
        ],
      },
      {
        id: 'remove-old-versions',
        title: '1. Remove apps and older versions in Creative Cloud',
        paragraphs: [
          'Open the Creative Cloud desktop app, go to Apps → All Apps, and choose More actions for the app. Select Uninstall, then Keep to retain its preferences and plug-ins or Remove to delete them. Save your work and quit the app first. Adobe’s installer is the right tool here, not dragging an Adobe folder to the Trash.',
          'Adobe removes the previous version by default when you install a new one. If Remove older versions was turned off under Preferences → Apps → Advanced options, old major versions can accumulate in Applications. Uninstall the ones you no longer need for older projects; Other versions in the same menu can reinstall a previous major version later.',
        ],
      },
      {
        id: 'shared-media-cache',
        title: '2. Trim the shared media cache',
        paragraphs: [
          'Premiere Pro, After Effects and Media Encoder share one media cache database. Each app can keep its own cache folder, but moving the database in one app moves it for the others. Clear it from Premiere Pro’s Media Cache settings, which the Premiere guide linked below covers step by step.',
          'After Effects adds a disk cache for rendered frames. In After Effects → Settings → Disk, Empty Disk Cache clears it; Adobe’s default maximum is 10% of the volume, up to 100 GB. Clean Database & Cache removes only files whose source footage can’t be found, so connect your media drives first.',
        ],
      },
      {
        id: 'creative-cloud-files',
        title: '3. Check the Creative Cloud Files folder before deleting',
        paragraphs: [
          'Adobe has discontinued Creative Cloud Synced files. Files in the local Creative Cloud Files folder are no longer copied to cloud storage, and Adobe says they remain intact on your Mac. For many people that folder is now the only copy, so it isn’t a cache.',
          'Adobe recommends moving those files to other storage or at least backing them up outside that folder. Once you have a checked copy elsewhere, you can remove the local folder to free the space. Cloud documents, Creative Cloud Libraries and Lightroom cloud storage are separate services and weren’t affected.',
        ],
      },
      {
        id: 'app-specific',
        title: '4. Handle Photoshop, Lightroom and fonts in their own places',
        paragraphs: [
          'Photoshop’s scratch disk is temporary working storage with its own settings and warnings; see the scratch disk guide rather than deleting Photoshop folders. Lightroom Classic previews and the Camera Raw cache have their own controls too, covered in the Lightroom guide.',
          'Fonts activated through Adobe Fonts are managed with your Adobe account and the Creative Cloud desktop app. Deactivate fonts you no longer use there instead of hunting for font files in Library folders.',
        ],
      },
      {
        id: 'what-to-leave',
        title: 'What not to delete',
        paragraphs: [
          'Don’t remove the whole Adobe folder from ~/Library/Application Support or /Library/Application Support, and don’t run cleanup scripts from forums. These folders hold preferences, plug-ins and shared components the apps rely on. If the Creative Cloud app itself is broken, Adobe’s troubleshooting route is its Creative Cloud Cleaner tool, which is a repair tool, not a space saver.',
          'ClearDisk’s free scan and storage map show which of these locations is actually large on your Mac, with paths and sizes. It doesn’t uninstall Adobe apps or clear their caches through Adobe’s settings, so the removals above still happen in Adobe’s apps.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is there one Adobe cache folder I can clear to free up space?',
        a: "No. Adobe storage comes from several separate places: installed apps and old versions, the shared media cache, individual app caches like Photoshop's scratch disk, and your own files, each cleared its own way.",
      },
      {
        q: 'Do old Adobe app versions stay on my Mac after updating?',
        a: 'Usually not, since Adobe removes the previous version by default when installing a new one. But if Remove older versions was turned off in Creative Cloud preferences, old major versions can accumulate in Applications.',
      },
      {
        q: 'Is it safe to delete the Creative Cloud Files folder?',
        a: 'Only after backing it up elsewhere first. Adobe discontinued Creative Cloud Synced files, so those files now live only on your Mac and are no longer a cache you can casually remove.',
      },
      {
        q: 'Can I delete the whole Adobe folder in Application Support to free space?',
        a: "No. That folder holds preferences, plug-ins and shared components the apps rely on. Clear the shared media cache and each app's own cache settings instead of removing the folder wholesale.",
      },
    ],
    related: [
      'clear-premiere-pro-media-cache-mac',
      'photoshop-scratch-disk-full-mac',
      'clear-lightroom-cache-mac',
      'uninstall-apps-on-mac',
    ],
    sources: [
      {
        label: 'Adobe: uninstall Creative Cloud apps',
        url: 'https://helpx.adobe.com/creative-cloud/apps/manage-apps/creative-cloud-apps/uninstall-or-remove-apps.html',
      },
      {
        label: 'Adobe: install previous versions and remove older versions',
        url: 'https://helpx.adobe.com/download-install/apps/download-install-apps/creative-cloud-apps/install-previous-versions-creative-cloud-apps.html',
      },
      {
        label: 'Adobe: discontinuation of Creative Cloud Synced files',
        url: 'https://helpx.adobe.com/creative-cloud/kb/eol-creative-cloud-synced-files.html',
      },
    ],
  },
  {
    slug: 'final-cut-pro-storage-full',
    title: 'Final Cut Pro storage full on Mac: what to delete first',
    description:
      'Final Cut Pro storage full? Delete generated library files, check where render and media files are stored, move cache or libraries, and keep original media.',
    summary:
      'Most reclaimable Final Cut Pro space is generated files: render, optimized and proxy media. File → Delete Generated Library Files removes them without touching original media, and Library Properties shows where each kind of file is stored.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'whats-in-a-library',
        title: 'What a Final Cut Pro library holds',
        paragraphs: [
          'A library holds events and projects and, by default, media and cache files too. Media can live inside the library or in external folders. Cache means render files, analysis files, thumbnails and audio waveforms. Automatic backups contain only the library database, not media.',
          'When the drive holding a library runs low, start with the files Final Cut Pro can regenerate from original media. To find a library on disk, select it in the Libraries sidebar and choose File → Reveal in Finder.',
        ],
      },
      {
        id: 'check-storage-used',
        title: '1. See where the library stores its files',
        paragraphs: [
          'Select the library in the Libraries sidebar and choose File → Library Properties (Control-Command-J). Near the bottom, Storage Used for Media and Motion Content lists each storage device with its total of original, optimized and proxy media for that library.',
          'Click Modify Settings to see four locations: Media, Motion Content, Cache and Backups. By default, media and cache files are stored inside the library, Motion content goes to the Motion Templates folder in Movies, and backups go to your Movies folder.',
        ],
      },
      {
        id: 'delete-generated',
        title: '2. Delete generated library files',
        paragraphs: [
          'Select the library and choose File → Delete Generated Library Files. Select Delete Render Files and choose unused or all render files; the dialog also offers optimized and proxy media, and Apple’s library-moving article says to select all options to save the most space. Apple states that original media files are not deleted.',
          'Unused render files build up when you change timelines, update Final Cut Pro, macOS or plug-ins, or move a library between Macs with different macOS versions. For a narrower cleanup, use Delete Generated Event Files, Project Files or Clip Files. Final Cut Pro renders again in the background, and optimized or proxy media must be recreated if you need it.',
        ],
      },
      {
        id: 'move-cache-backups',
        title: '3. Move cache and backups off the startup disk',
        paragraphs: [
          'In Modify Settings, set Cache → Choose to keep render files on another drive. Final Cut Pro asks whether to move your existing active render files. Backups → Choose moves future backups; Do Not Save turns them off, which leaves you without a quick way to restore.',
          'Existing source media and backups stay where they were when you change locations. Backup files carry the date and time in their names, so older ones in your Movies folder are easy to spot. Keep recent backups; File → Open Library → From Backup restores from them.',
        ],
      },
      {
        id: 'move-library',
        title: '4. Move a whole library to an external drive',
        paragraphs: [
          'Apple’s method: delete generated library files, quit Final Cut Pro, and drag the library in Finder to an external drive formatted as APFS. You can’t store a library on a drive used for Time Machine backups. Open the library from its new location and check it before moving the original to the Trash.',
          'If the library uses external media, consolidate it: in Library Properties, click Consolidate in the Media section. That copies media into the library or its storage location, so the destination needs room. Apple says you can delete external originals after consolidating only if no other library uses them.',
        ],
      },
      {
        id: 'what-to-keep',
        title: 'What to keep',
        paragraphs: [
          'Keep original media until you have confirmed a consolidated copy opens and plays. Third-party effects (FxPlug) aren’t managed within the library, so track them separately when you archive or move a project.',
          'Finder treats a library as one bundle, so don’t open it to delete items inside; use Final Cut Pro’s commands. ClearDisk’s storage map can show how large each library is compared with the rest of your Movies folder, which helps decide which library to clean or archive first.',
        ],
      },
    ],
    questions: [
      {
        q: 'Does Delete Generated Library Files remove my original footage in Final Cut Pro?',
        a: 'No, Apple states original media files are not deleted. It removes render files and, if selected, optimized and proxy media, which Final Cut Pro can recreate from the originals when needed.',
      },
      {
        q: 'Why do unused render files build up in Final Cut Pro?',
        a: 'They accumulate when you change timelines, or update Final Cut Pro, macOS or plug-ins, or move a library between Macs running different macOS versions, none of which get cleaned up automatically.',
      },
      {
        q: 'Can I store a Final Cut Pro library on my Time Machine backup drive?',
        a: "No. Apple's method for moving a library requires an external drive formatted as APFS, and a drive used for Time Machine backups can't be used for a library at all.",
      },
      {
        q: "What do Final Cut Pro's automatic backups actually contain?",
        a: 'Only the library database, not the media itself, so a backup lets you restore your project structure but is not a substitute for backing up your original footage separately.',
      },
    ],
    related: [
      'imovie-library-taking-up-space',
      'clear-davinci-resolve-cache-mac',
      'expand-mac-storage-external-ssd',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Apple: manage render files in Final Cut Pro for Mac',
        url: 'https://support.apple.com/guide/final-cut-pro/manage-render-files-ver68a8c250/mac',
      },
      {
        label: 'Apple: set storage locations in Final Cut Pro for Mac',
        url: 'https://support.apple.com/guide/final-cut-pro/set-storage-locations-ver7db6ffe77/mac',
      },
      {
        label: 'Apple: move a Final Cut Pro library',
        url: 'https://support.apple.com/en-us/119610',
      },
    ],
  },
  {
    slug: 'logic-pro-sound-library-space',
    title: 'Logic Pro sound library taking up space on Mac',
    description:
      'Logic Pro sound library taking up space? Delete unused sound packs, move the library to an external drive the supported way, and keep your projects working.',
    summary:
      'In Logic Pro, open Sound Library → Manage Packs to see pack sizes and delete what you don’t use. To keep the content but free the startup disk, move the sound library to an external drive with Apple’s method for your version.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-it-lives',
        title: 'Where the sound library lives',
        paragraphs: [
          'Starting with Logic Pro 12 and MainStage 4, Apple stores all sound library content, including patches, Apple Loops and samples, in one file called Logic Pro Library.bundle in your Music folder. Logic Pro and MainStage on the same Mac share it. Logic Pro → Settings → General → Sound Library shows its current location.',
          'When you update from an earlier version, Logic Pro clones the old library into the new file. Apple says the clone needs no extra space on your Mac and that you don’t have to delete the old files. Some size tools count cloned files twice, so the available space in Storage settings is the better check. There, Music Creation groups content from GarageBand, Logic Pro and MainStage.',
        ],
        code: ['du -sh ~/Music/"Logic Pro Library.bundle"'],
      },
      {
        id: 'manage-packs',
        title: '1. See pack sizes and delete what you don’t use',
        paragraphs: [
          'Choose Logic Pro → Sound Library and click Manage Packs in the upper-left corner. The total for installed packs appears at the top and each pack’s size is listed. Click Delete next to a pack to remove it, or next to All Installed Packs to remove everything. These steps are for Logic Pro 12; earlier releases arrange the Sound Library menu differently.',
          'Deleting a pack can affect projects that use its instruments or loops. Apple notes that some packs are needed to open certain projects, and Logic Pro asks to download them when required. Getting a pack back takes a download, so don’t remove what you need offline or on a deadline.',
        ],
      },
      {
        id: 'relocate-logic-12',
        title: '2. Move the library in Logic Pro 12 or later',
        paragraphs: [
          'Quit Logic Pro, find Logic Pro Library.bundle in your Music folder, and drag it to the new location, such as an external SSD. Apple says that if you copied it to an external device, you can then delete the original to save space on your Mac.',
          'Open Logic Pro. If it can’t find the library, it asks you to locate the file or create a new, empty one; choose to locate it. You can also use the Locate button in Logic Pro → Settings → General → Sound Library.',
        ],
      },
      {
        id: 'relocate-earlier',
        title: '3. Move the library in Logic Pro 11.2.2 or earlier',
        paragraphs: [
          'Log in as an administrator and connect a drive formatted as APFS or Mac OS Extended (Journaled); a Time Machine backup volume can’t be used. Choose Logic Pro → Sound Library → Relocate Sound Library, select the drive, and click Relocate. Click Allow if Logic Pro asks for access to a removable volume.',
          'If you get an error, quit Logic Pro and turn on Removable Volumes for Logic Pro in System Settings → Privacy & Security → Files and Folders. Don’t rename the drive afterwards, or Logic Pro can’t find the library. To bring it back, choose Relocate Sound Library again and select Macintosh HD.',
        ],
      },
      {
        id: 'drive-disconnected',
        title: 'When the drive isn’t connected',
        paragraphs: [
          'In earlier versions, Logic Pro offers Retry, Ignore or Reset when the drive is missing. Ignore replaces tracks that use library content with basic tones; Reset installs a library on your Mac again, which uses the space you tried to free. Apple also says each Mac needs its own sound library. Apple lists SSDs and USB thumb drives as possible destinations, and content you download later is installed in the library’s new location.',
          'Don’t delete content folders by hand in Finder. If an older version of Logic Pro or MainStage is still installed, Apple says to keep the original sound library, because the new bundle isn’t compatible with older versions. Your own recordings and projects are separate, and ClearDisk’s storage map can show whether they or the library take more room.',
        ],
      },
    ],
    questions: [
      {
        q: 'What happens if I delete a Logic Pro sound library pack that a project uses?',
        a: 'It can affect that project. Apple notes some packs are needed to open certain projects, and Logic Pro will ask to download the pack again when required, which needs an internet connection.',
      },
      {
        q: "Does updating Logic Pro's sound library use extra disk space for the clone?",
        a: "No. When Logic Pro clones an older library into the new bundle format, Apple says the clone needs no extra space and you don't have to delete the old files, though some size tools may double-count it.",
      },
      {
        q: 'Can I move the Logic Pro sound library to an external drive?',
        a: "Yes. Quit Logic Pro, drag Logic Pro Library.bundle from your Music folder to the external drive, open Logic Pro and use Locate if asked, then delete the original once you've confirmed the copy works.",
      },
      {
        q: "What happens if the drive holding a relocated Logic Pro sound library isn't connected?",
        a: 'In earlier versions, Logic Pro offers Retry, Ignore or Reset. Ignore replaces tracks using library content with basic tones, while Reset installs a fresh library on your Mac, using the space you tried to free.',
      },
    ],
    related: [
      'garageband-sound-library-mac',
      'expand-mac-storage-external-ssd',
      'format-external-hard-drive-mac',
      'how-much-storage-mac',
    ],
    sources: [
      {
        label: 'Apple: move Logic Pro for Mac and MainStage content',
        url: 'https://support.apple.com/en-us/111094',
      },
      {
        label: 'Apple: about the Logic Pro and MainStage sound library',
        url: 'https://support.apple.com/en-us/125036',
      },
      {
        label: 'Apple: download additional sound packs in Logic Pro for Mac',
        url: 'https://support.apple.com/guide/logicpro/download-additional-sound-packs-lgcp8b3abc1c/mac',
      },
    ],
  },
  {
    slug: 'garageband-sound-library-mac',
    title: 'GarageBand taking up space on Mac: sound library and more',
    description:
      'GarageBand storage on Mac: see what its sound library uses in Storage settings, clean up projects, remove the app, and check what songs need before deleting.',
    summary:
      'GarageBand’s storage has two parts: the app, and downloaded content such as instruments, drummers and Apple Loops that lives outside it. macOS counts that content under Music Creation in Storage settings. Check what your songs use before removing any of it.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'app-versus-content',
        title: 'The app versus its sound library',
        paragraphs: [
          'After you install GarageBand, it can download more content: patches, drummers and Apple Loops. Some tasks prompt you to download extra content before they work. That content is stored outside GarageBand.app, so dragging the app to the Trash doesn’t remove it.',
          'macOS groups this content with Logic Pro and MainStage content in one category, Music Creation. Loops you create yourself are separate: Apple lists them in ~/Library/Audio/Apple Loops, and they are your work, not a download.',
        ],
      },
      {
        id: 'check-storage-settings',
        title: '1. Check Music Creation in Storage settings',
        paragraphs: [
          'Choose Apple menu → System Settings → General → Storage and find Music Creation. Apple describes it as content from GarageBand, Logic and MainStage. Open the category to see what is listed; to remove an item, select it and click Delete.',
          'Read each item’s name before deleting. If you also use Logic Pro or MainStage, the category mixes content from all three apps, and removing shared content affects every one of them. If Music Creation is small, the space is somewhere else, possibly in your own recordings.',
        ],
      },
      {
        id: 'clean-up-projects',
        title: '2. Clean up projects before removing loops',
        paragraphs: [
          'Open a song and choose File → Clean Up Project, then click OK. GarageBand deletes audio files the project no longer uses. Recorded audio is yours, so review a song before cleaning it if you might want an old take.',
          'Songs that use loops or instruments you remove will need that content again. GarageBand asks to download what is missing, which needs an internet connection and time. For finished songs, export an audio version before you remove content they depend on.',
        ],
      },
      {
        id: 'remove-garageband',
        title: '3. Remove GarageBand completely',
        paragraphs: [
          'If you no longer use GarageBand, quit it and drag it from Applications to the Trash, then empty the Trash. Apple notes that deleting an app doesn’t remove documents you created with it, so your songs stay. You can download GarageBand again from the App Store later.',
          'Because the downloaded content lives outside the app, review Music Creation before or after removing GarageBand. Keep anything Logic Pro or MainStage still uses. Other app leftovers are covered in the uninstall guide linked below.',
        ],
      },
      {
        id: 'get-content-back',
        title: '4. Get content back when you need it',
        paragraphs: [
          'To download individual items, click the Download button next to an item in the Library or the Loop Browser. GarageBand → Sound Library → Download All Available Sounds installs everything, which is the opposite of saving space, so use it only on a Mac with room.',
          'If the sound library stops working, choose GarageBand → Sound Library → Reinstall Sound Library and click Reinstall. If Music Creation looks small but the disk is still full, ClearDisk’s free scan can show which folders hold the space, including large recordings in your Music folder.',
        ],
      },
      {
        id: 'large-songs',
        title: 'If your songs are the large part',
        paragraphs: [
          'Recorded audio, not the sound library, is sometimes where GarageBand space goes. Each recorded take is an audio file saved with the song, so a song with many tracks and takes can be large. Select a song in Finder and choose File → Get Info to see its size.',
          'For finished songs, export a mixed audio file, then move the project to an external drive or an archive you back up. Keep the project as well as the export if you might change the mix later: the export is a single mixed file, and its tracks can’t be separated again.',
        ],
      },
    ],
    questions: [
      {
        q: 'If I delete GarageBand, does that remove my songs and recordings?',
        a: "No. Apple notes that deleting an app doesn't remove documents you created with it, so your songs stay. The downloaded sound content lives outside the app too, and needs a separate review.",
      },
      {
        q: 'What does File then Clean Up Project do in GarageBand?',
        a: 'It deletes audio files the current project no longer uses. Recorded audio is your own work, so review a song for old takes you might still want before running the cleanup.',
      },
      {
        q: 'Is my own recorded audio the reason GarageBand is taking up space, or the sound library?',
        a: "It can be either. Recorded takes are saved with each song, so one with many tracks and takes can be large; check Music Creation in Storage settings first, then your own recordings if that's small.",
      },
      {
        q: "Can I get GarageBand's downloaded sounds back after removing them?",
        a: 'Yes, click Download next to an item in the Library or Loop Browser to restore it individually. Download All Available Sounds installs everything at once, so use it only on a Mac with plenty of room.',
      },
    ],
    related: [
      'logic-pro-sound-library-space',
      'uninstall-apps-on-mac',
      'how-to-check-storage-on-mac',
      'apple-music-downloads-mac',
    ],
    sources: [
      {
        label: 'Apple: get more sounds and loops for GarageBand on Mac',
        url: 'https://support.apple.com/guide/garageband/get-more-sounds-and-loops-gbnd9ed77587/mac',
      },
      {
        label: 'Apple: change Storage settings on Mac',
        url: 'https://support.apple.com/guide/mac-help/change-storage-settings-mchl3d437fbc/mac',
      },
      {
        label: 'Apple: clean up projects in GarageBand on Mac',
        url: 'https://support.apple.com/guide/garageband/clean-up-projects-gbndde92315b/mac',
      },
    ],
  },
  {
    slug: 'imovie-library-taking-up-space',
    title: 'iMovie library taking up space on Mac: what to do',
    description:
      'iMovie library taking up space on Mac? Delete render files in Settings, remove whole events you no longer need, and move the library to an external drive.',
    summary:
      'The iMovie Library in your Movies folder holds your projects plus the media and data they use. Delete render files in iMovie → Settings, delete whole events rather than single clips, or move the library to an external drive.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'whats-inside',
        title: 'What the iMovie Library holds',
        paragraphs: [
          'Apple describes the iMovie Library as holding your projects and all the media and data used in them. It sits in your Movies folder as a single item named iMovie Library. Imported clips, render files and project data all count toward its size.',
          'Finder shows the library as one file. Don’t open it to delete items inside; iMovie keeps track of what the library contains, and removing pieces by hand can break projects. Use iMovie’s own commands below. The command lists each item in your Movies folder with its size.',
        ],
        code: ['du -sh ~/Movies/*'],
      },
      {
        id: 'delete-render-files',
        title: '1. Delete render files in iMovie Settings',
        paragraphs: [
          'Choose iMovie → Settings, or press Command-Comma. Under Render Files, click Delete. Apple says this removes render files from your open libraries and that no imported media is removed.',
          'Don’t do this during an export: Apple warns the export may take longer. iMovie creates new render files as you keep editing, so this is a periodic cleanup rather than a permanent one.',
        ],
      },
      {
        id: 'delete-events',
        title: '2. Delete whole events you no longer need',
        paragraphs: [
          'Apple is specific: to free up storage space you must delete an entire event, because deleting clips from an event doesn’t free space. Select the event in the Libraries list and choose File → Move to Trash. If a clip is still used in a project, iMovie asks you to remove it from the project first.',
          'Deleting a project that contains media doesn’t remove the media. iMovie creates a new event with the project’s name that holds it, so delete that event too if you’re finished. Export the final movie first if you want to keep a watchable copy.',
        ],
      },
      {
        id: 'exported-movies',
        title: 'Check exported movies too',
        paragraphs: [
          'An exported movie is a separate file, saved wherever you chose when you shared it, so it takes space in addition to the library. Old exports are easy to overlook, especially if you exported the same project several times while editing.',
          'Before deleting an export, make sure you have a copy you trust, such as a backup drive or a cloud service where the upload has finished. Keep the library event if you may want to edit again: an export is a finished movie, and its clips, titles and audio can’t be separated again.',
        ],
      },
      {
        id: 'move-library',
        title: '3. Move the library to an external drive',
        paragraphs: [
          'Apple suggests backing up your Mac first. Quit iMovie, open your home folder’s Movies folder, and drag iMovie Library to a USB or Thunderbolt drive formatted as APFS or Mac OS Extended (Journaled). Apple doesn’t recommend SD cards, USB flash drives or network storage, and a Time Machine backup drive can’t be used.',
          'When copying finishes, double-click the library on the external drive to open it, and click OK if iMovie asks for access to a removable volume. Check that all your media is there, then drag the original from Movies to the Trash and empty it.',
        ],
      },
      {
        id: 'keep-it-small',
        title: 'Keep it from growing back',
        paragraphs: [
          'If the external drive isn’t connected, iMovie opens a new, empty library in the Movies folder on your Mac, and new imports go there. Connect the drive and open the moved library before importing, or you’ll rebuild a large library on the internal disk.',
          'Apple also supports multiple libraries, so finished work can live on an external drive while the current project stays local. ClearDisk’s storage map can show how the iMovie Library compares with exported movies and other video files, which helps decide what to archive first.',
        ],
      },
    ],
    questions: [
      {
        q: 'Does deleting individual clips from an iMovie event free up space?',
        a: "No, Apple is specific that deleting clips from an event doesn't free space; you have to delete the entire event, and if a clip is still used in a project you're asked to remove it from the project first.",
      },
      {
        q: 'Does deleting an iMovie project also delete the media inside it?',
        a: "No. Deleting a project that contains media doesn't remove the media itself; iMovie creates a new event with the project's name to hold it, so delete that event too if you're finished with the footage.",
      },
      {
        q: 'Can I store my iMovie Library on an SD card or a Time Machine drive?',
        a: "No. Apple doesn't recommend SD cards, USB flash drives or network storage for it, and a Time Machine backup drive can't be used at all; use a USB or Thunderbolt drive formatted as APFS instead.",
      },
      {
        q: "What happens if I move my iMovie Library but the external drive isn't connected?",
        a: "iMovie opens a new, empty library in the Movies folder on your Mac and sends new imports there, so connect the drive and open the moved library first, or you'll rebuild a large library internally.",
      },
    ],
    related: [
      'final-cut-pro-storage-full',
      'photos-library-taking-up-space-mac',
      'expand-mac-storage-external-ssd',
      'find-large-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: change settings in iMovie on Mac',
        url: 'https://support.apple.com/guide/imovie/change-imovie-settings-mov756ac27d8/mac',
      },
      {
        label: 'Apple: organize media and events in iMovie on Mac',
        url: 'https://support.apple.com/guide/imovie/organize-media-and-events-mov74d7d370c/mac',
      },
      {
        label: 'Apple: move your iMovie for Mac library',
        url: 'https://support.apple.com/en-us/102186',
      },
    ],
  },
];
