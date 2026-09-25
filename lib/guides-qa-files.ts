import type { Guide } from './guides.ts';

export const fileQaGuides: Guide[] = [
  {
    slug: 'google-chrome-taking-up-space-mac',
    title: 'Google Chrome taking up space on Mac? What to clear',
    description:
      'Where Google Chrome keeps gigabytes on a Mac: profiles, site storage, extensions, cache and its AI model. Measure each part, then clear it from Chrome.',
    summary:
      'Chrome’s disk use is split between two folders: ~/Library/Application Support/Google/Chrome, which holds your profiles, site storage, extensions and the on-device AI model, and ~/Library/Caches/Google/Chrome, which holds the cache. Measure both, then clear from inside Chrome: All sites for site storage, Delete browsing data for the cache, and Manage Chrome profiles for profiles you no longer use.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-chrome-keeps-files',
        title: 'Where Chrome keeps its files',
        paragraphs: [
          'Chrome keeps almost everything in its user data folder, ~/Library/Application Support/Google/Chrome. Each profile is a subfolder: Default for the first one, then Profile 1, Profile 2 and so on, and the numbers don’t have to be consecutive. History, bookmarks, passwords and settings are small. The large parts are usually what websites store on your Mac: the Service Worker folder, including the CacheStorage web apps use for offline copies, plus IndexedDB, File System and Local Storage. Installed extensions sit in each profile’s Extensions folder.',
          'Two things live outside the profiles. The top of the same folder holds components Chrome shares between profiles, such as OptGuideOnDeviceModel, the on-device AI model, which can be several gigabytes by itself. The cache that Chrome calls “Cached images and files” is in a separate folder, ~/Library/Caches/Google/Chrome, again with one subfolder per profile, as Chromium’s documentation describes. The app in /Applications is a third, usually smaller, share.',
        ],
      },
      {
        id: 'measure-first',
        title: '1. Measure the folders before clearing anything',
        paragraphs: [
          'These commands only read. The first gives the two totals. The second lists everything at the top of the user data folder from smallest to largest, so you can see whether one profile, the AI model or something else accounts for most of it. The last two look inside a single profile at the usual large folders; replace Default with the profile folder you want to check.',
          'To match a folder name with a profile, open that profile’s window, type chrome://version in the address bar and read the Profile Path line. ClearDisk’s free scan shows the same folders by path and size, but the clearing itself is best done from Chrome, as below. Measure again after each change; Chrome writes to these folders while it runs, so small differences are normal.',
        ],
        code: [
          'du -sh "$HOME/Library/Application Support/Google/Chrome" "$HOME/Library/Caches/Google/Chrome"',
          'du -sh "$HOME/Library/Application Support/Google/Chrome"/* 2>/dev/null | sort -h',
          'cd "$HOME/Library/Application Support/Google/Chrome/Default"',
          'du -sh "Service Worker" IndexedDB Extensions',
        ],
      },
      {
        id: 'delete-site-storage',
        title: '2. Delete stored data for the sites that use the most',
        paragraphs: [
          'Site storage is usually where the gigabytes are, and Chrome can show it per site. Type chrome://settings/content/all in the address bar, or open Settings from the three-dot menu and choose Privacy and security → Site settings → View permissions and data stored across sites. Sort the list by Data stored to bring the heaviest sites to the top.',
          'Open a site you recognize and delete its data. That removes its cookies, offline copies, databases and permissions, so you’ll be signed out of that site, and any offline mail, documents or media it kept will download again when you next use it. The confirmation mentions it when the site also has an installed web app. Delete all data does the same for every site at once, which is rarely what you want when only a handful are large.',
        ],
      },
      {
        id: 'cache-scope',
        title: '3. Clear the cache without signing out',
        paragraphs: [
          'Chrome’s Delete browsing data dialog mixes categories with very different costs. Cached images and files is the folder in ~/Library/Caches: pages load a little slower for a while and nothing else changes, so it’s the safe choice when you only want space. Cookies and other site data is the same site storage as step 2, for every site in the time range. Google lists web storage and IndexedDB data under it, and it signs you out of most websites.',
          'For space, choose All time as the range, select Cached images and files only, and confirm. The browser cache guide walks through the dialog in Safari, Chrome and Firefox. Each profile has its own cache and site storage, so repeat this in each profile window you want to trim. The cache refills as you browse; that is its job, not a sign that clearing failed.',
        ],
      },
      {
        id: 'profiles-and-extensions',
        title: '4. Remove profiles and extensions you don’t use',
        paragraphs: [
          'An old profile keeps its own history, cache, site storage and extensions. To remove one, choose Profile at the top right of a Chrome window, then Manage Chrome profiles; on the profile you want to remove, choose More → Delete and confirm. Google’s help is direct that the profile’s bookmarks, history, passwords and other settings are erased from the computer, so open the profile and export anything you still need first.',
          'Extensions are smaller, but each keeps code and data in every profile that has it. Review chrome://extensions in each profile and remove the ones you no longer use.',
          'Leave two things alone. Don’t delete folders inside Google Chrome.app: after an update you may see two version folders there, and Chrome manages them; changing an app bundle also breaks its code signature. And don’t move the whole Chrome data folder to the Trash as a cleanup step. That resets Chrome, and bookmarks or passwords that weren’t synced go with it.',
        ],
      },
      {
        id: 'memory-vs-disk-cache',
        title: 'Memory cache vs disk cache',
        paragraphs: [
          'In DevTools’ Network panel, the Size column shows “(memory cache)” or “(disk cache)” for responses Chrome didn’t fetch from the network. Memory cache is a copy Chrome holds in RAM while it’s running; it uses no disk space and is gone when the tab or browser closes. Disk cache is the folder in ~/Library/Caches/Google/Chrome, which survives restarts and is what Cached images and files clears.',
          'Chrome chooses between them; there is no setting to prefer one. Neither is the same as Cache Storage, which a site’s own code writes through the Cache API and which lives with that site’s data in the profile folder. Google’s DevTools documentation treats the two as separate systems. To remove Cache Storage, delete the site’s data as in step 2; clearing the cache won’t touch it.',
        ],
      },
    ],
    related: [
      'chrome-on-device-ai-model-mac',
      'clear-browser-cache-mac',
      'application-support-folder-mac',
      'library-caches-folder-mac',
    ],
    sources: [
      {
        label: 'Chromium: user data directory locations',
        url: 'https://chromium.googlesource.com/chromium/src/+/main/docs/user_data_dir.md',
      },
      {
        label: 'Google: delete browsing data in Chrome',
        url: 'https://support.google.com/chrome/answer/2392709?hl=en&co=GENIE.Platform%3DDesktop',
      },
      {
        label: 'Google: manage Chrome profiles',
        url: 'https://support.google.com/chrome/answer/2364824?hl=en',
      },
    ],
  },
  {
    slug: 'chrome-on-device-ai-model-mac',
    title: 'What is Chrome’s OptGuideOnDeviceModel folder on Mac?',
    description:
      'OptGuideOnDeviceModel holds weights.bin, the Gemini Nano model Chrome runs on your Mac. See its size, why it downloaded, and how to remove it for good.',
    summary:
      'OptGuideOnDeviceModel is where Chrome keeps Gemini Nano, the generative AI model it runs on your Mac for features such as writing help and scam warnings; weights.bin is the model itself. To remove it and keep it from returning, turn off On-device AI in Chrome’s settings. Chrome deletes the files and won’t download them again while the setting is off.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-is',
        title: 'What the folder and weights.bin are',
        paragraphs: [
          'The folder sits at the top of Chrome’s data folder, ~/Library/Application Support/Google/Chrome/OptGuideOnDeviceModel, not inside a profile, so every Chrome profile in your macOS account shares one copy. Inside is a folder named for the model version, and in it weights.bin, the model’s weights, which make up nearly all of the size, along with a manifest and a few smaller cache files. On the Mac used to check this guide the folder was about 4 GB; Google says the size changes as Chrome updates the model.',
          'The model is Gemini Nano. Google’s Chrome Help lists the features that use on-device models: help writing or rephrasing text, scam warnings, page summaries and tab organization. Websites can also use it through Chrome’s built-in AI APIs. Nearby folders such as OptGuideOnDeviceClassifierModel and OnDeviceHeadSuggestModel hold other, much smaller models that Chrome manages the same way.',
        ],
      },
      {
        id: 'check-it',
        title: '1. Check whether you have it, and how big it is',
        paragraphs: [
          'The first command gives the folder’s size; the second shows which model version is installed. Both only read. If the folder doesn’t exist, Chrome hasn’t downloaded the model in this macOS account.',
          'Chrome also has a status page: type chrome://on-device-internals in the address bar. Google’s developer documentation points to it for the model’s current state and size. It is a diagnostic page meant for developers, so treat it as information rather than a place to change settings.',
        ],
        code: [
          'du -sh "$HOME/Library/Application Support/Google/Chrome/OptGuideOnDeviceModel"',
          'ls "$HOME/Library/Application Support/Google/Chrome/OptGuideOnDeviceModel"',
        ],
      },
      {
        id: 'why-it-downloaded',
        title: 'Why it appeared, and why it can come and go',
        paragraphs: [
          'Chrome downloads the model in the background when a Mac meets Google’s requirements, so it’s ready before a feature needs it. Google’s help lists an unmetered network connection, roughly 20 GB of free disk space and enough device performance. The developer documentation is more specific: macOS 13 or later, at least 22 GB free on the volume that holds your Chrome profile, and either a GPU with more than 4 GB of video memory or 16 GB of RAM with at least four CPU cores.',
          'Chrome also removes the model on its own. Google’s developer documentation says that if free space falls below 10 GB after the download, the model is removed, and it downloads again once the requirements are met. On a Mac that hovers around those numbers, the folder can disappear and return, which looks like a mystery file coming back. That is Chrome’s designed behavior, not a sign of anything wrong.',
        ],
      },
      {
        id: 'turn-off-on-device-ai',
        title: '2. Turn off On-device AI to remove it',
        paragraphs: [
          'Open the three-dot menu, choose Settings, then AI Innovations, and turn off On-device AI. That is the path in Google’s Chrome Help; if your version places it elsewhere, type “on-device” into the search field at the top of Settings. Google says turning it off deletes the on-device model files, stops the features that depend on them, and keeps Chrome from downloading them again while the setting is off.',
          'The setting applies per user and per device, so repeat it in each macOS account and on each Mac where you want the model gone. Afterwards, quit and reopen Chrome and run the size command again. Turning the setting back on allows the download again when your Mac meets the requirements.',
        ],
      },
      {
        id: 'manual-delete',
        title: 'Why deleting weights.bin yourself isn’t the fix',
        paragraphs: [
          'Moving the folder to the Trash does recover the space once the Trash is emptied, but Google’s help says locating and deleting the model files manually is not recommended and may not prevent future downloads, which the setting controls. With On-device AI still on and enough free space, expect Chrome to fetch the model again.',
          'If you have already deleted it, turn the setting off now so the download doesn’t repeat. Leave the neighboring model folders and the rest of Chrome’s data folder alone; the Chrome storage guide covers the parts you can clear from Chrome itself.',
        ],
      },
      {
        id: 'managed-macs',
        title: '3. On managed Macs, use the policy',
        paragraphs: [
          'Administrators can control the download with the Chrome Enterprise policy GenAILocalFoundationalModelSettings, supported on Mac from Chrome 124. Set to 0, or left unset, Chrome downloads the model automatically. Set to 1, Chrome doesn’t download it and deletes a copy that is already there. On a Mac, Chrome policies are normally delivered in a configuration profile through device management.',
          'Google’s policy text also mentions ComponentUpdatesEnabled. Turning that off stops the download too, but it also disables updates for every other Chrome component that isn’t security-critical, so it’s a blunter tool than the dedicated policy. On a personal Mac, the On-device AI switch is the simpler route.',
        ],
      },
    ],
    related: [
      'google-chrome-taking-up-space-mac',
      'application-support-folder-mac',
      'find-what-is-filling-disk-mac',
      'mac-storage-full',
    ],
    sources: [
      {
        label: 'Google: manage on-device generative AI models in Chrome',
        url: 'https://support.google.com/chrome/answer/16961953?hl=en',
      },
      {
        label: 'Google: built-in AI hardware and storage requirements',
        url: 'https://developer.chrome.com/docs/ai/get-started',
      },
      {
        label: 'Chrome Enterprise: GenAILocalFoundationalModelSettings policy',
        url: 'https://chromeenterprise.google/policies/#GenAILocalFoundationalModelSettings',
      },
    ],
  },
  {
    slug: 'move-files-to-trash-terminal-mac',
    title: 'How to move files to the Trash from Terminal on Mac',
    description:
      'Move files to the Mac Trash from Terminal with the trash command in macOS 15 and later, a Finder osascript one-liner, or Homebrew, and why not to alias rm.',
    summary:
      'On macOS 15 Sequoia and later, type trash followed by the file names: macOS includes a trash command that moves items to your Trash, where they stay until you empty it. On older versions, ask Finder to do it with osascript, or run a Homebrew trash tool by its full path. Don’t alias rm to any of them.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'built-in-trash',
        title: '1. Use the trash command built into macOS',
        paragraphs: [
          'macOS includes /usr/bin/trash; its manual page says it first appeared in macOS 15.0. Give it one or more files or folders and it moves them into your Trash, as long as that folder exists and permissions allow the move. Quote names that contain spaces, and run which trash to check the command is there before relying on it in a script. In a script that may also run on an older Mac, test with command -v trash first, which succeeds only when the command exists, so the script can stop with a clear message instead of failing halfway.',
          'It has two options besides help. -v prints more detail about what it did. -s, long form --stopOnError, makes it exit with an error if any move fails, which is what you want in a script so a failure isn’t silently skipped. Items appear in the Trash in the Dock and keep using space until you empty it.',
          'Apple’s manual page doesn’t say whether Finder’s Put Back works for items moved this way; if it’s dimmed, drag the item out of the Trash to where it belongs. Listing ~/.Trash in Terminal to check may fail with “Operation not permitted.” That is macOS privacy protection, explained in its own guide, not a problem with the command.',
        ],
        code: ['which trash', 'trash -v "Old report.pdf" build-output', 'man trash'],
      },
      {
        id: 'finder-osascript',
        title: '2. On older macOS, ask Finder with osascript',
        paragraphs: [
          'Before macOS 15 there was no built-in command, but Terminal can ask Finder to do the move. Finder’s AppleScript delete command moves an item to the Trash rather than erasing it. Because Finder performs the move, the item should behave like one you dragged there.',
          'Give the full path, because a tilde isn’t expanded inside the quotes. The first time, macOS asks whether Terminal may control Finder; allow it, or change the choice later in System Settings → Privacy & Security → Automation.',
        ],
        code: [
          "osascript -e 'tell application \"Finder\" to delete POSIX file \"/Users/yourname/Desktop/old-report.pdf\"'",
        ],
      },
      {
        id: 'homebrew-tools',
        title: '3. Homebrew’s trash tools, and the one to avoid',
        paragraphs: [
          'Homebrew has several formulas that install a command called trash, including trash and macos-trash. Homebrew marks them keg-only because macOS now ships its own, so after brew install trash the command isn’t added to your PATH. On macOS 15 and later, typing trash still runs Apple’s. To use Homebrew’s copy, call it by its full path, as in the second line.',
          'trash-cli is a different kind of tool: Homebrew describes it as an interface to the freedesktop.org trashcan, the convention Linux desktops use, not the Finder’s Trash. On a Mac, choose the built-in command or one of the Mac-specific formulas.',
        ],
        code: ['brew install trash', '"$(brew --prefix trash)/bin/trash" old-notes.txt'],
      },
      {
        id: 'dont-alias-rm',
        title: 'Why not alias rm to trash',
        paragraphs: [
          'It’s tempting to make rm safer by pointing it at trash. The two commands don’t accept the same options, so habits like rm -rf either fail or behave differently. An alias also applies only to the interactive shells you configured: scripts, sudo, other user accounts and every other Mac or server still run the real rm, which deletes immediately. The alias trains you to type rm casually in exactly the places where it’s still permanent.',
          'Use trash by name when you want a way back, and keep rm for when you mean it. If trash is too long to type, give it a short alias of its own that isn’t rm. Remember that moving files to the Trash doesn’t free space until you empty it, and that anything removed with rm comes back only from a backup.',
        ],
      },
    ],
    related: [
      'delete-immediately-skip-trash-mac',
      'operation-not-permitted-terminal-mac',
      'recover-files-from-trash-mac',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Homebrew: trash formula (keg-only, shadowed by macOS)',
        url: 'https://formulae.brew.sh/formula/trash',
      },
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
    ],
  },
  {
    slug: 'delete-immediately-skip-trash-mac',
    title: 'How to skip the Trash when deleting files on Mac',
    description:
      'Skip the Trash on Mac with Option-Command-Delete or File → Delete Immediately, what you can’t undo afterwards, and why snapshots can delay the free space.',
    summary:
      'Select the item in Finder and press Option-Command-Delete, or hold Option and choose File → Delete Immediately. Finder asks you to confirm, then deletes it without passing through the Trash, so there is no Put Back. Only a backup can bring it back.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'delete-immediately',
        title: '1. Delete an item immediately from any Finder window',
        paragraphs: [
          'Select the files or folders, then press Option-Command-Delete. The menu route is the same command: open the File menu and hold Option, and Move to Trash changes to Delete Immediately. Finder shows a confirmation; click Delete to go ahead. Apple’s published shortcut list covers Command-Delete and the Empty Trash shortcuts but not this one, which Finder shows in its File menu while Option is held.',
          'This is the right tool when you’re certain and the Trash itself is in the way: a very large file on a nearly full disk, or files on an external drive whose own Trash you don’t want to fill. For everyday deleting, Command-Delete and the Trash give you a way back at no cost. Delete Immediately also works on folders, and everything inside goes with them, including files you may never have looked at, so open a folder and check it first.',
        ],
      },
      {
        id: 'empty-trash-options',
        title: '2. Remove items that are already in the Trash',
        paragraphs: [
          'Apple documents two ways to finish the job. To remove one item, open the Trash, Control-click the item, choose Delete Immediately and confirm. To remove everything, click Empty in the Trash window or choose Finder → Empty Trash; Shift-Command-Delete does the same from the keyboard.',
          'The warning before emptying can be skipped: hold Option as you click Empty or choose Empty Trash, or press Option-Shift-Command-Delete. To stop it for good, choose Finder → Settings → Advanced and turn off “Show warning before emptying the Trash.” Keep the warning if you share the Mac or delete in bulk.',
        ],
      },
      {
        id: 'what-is-irreversible',
        title: 'What you can’t undo afterwards',
        paragraphs: [
          'Apple’s warning is plain: items emptied from the Trash are permanently deleted. Delete Immediately reaches the same result without the Trash stage, so Put Back and dragging the item out are no longer options. The same is true of rm in Terminal and of apps whose delete commands bypass the Trash.',
          'What remains is anything outside Finder’s reach. A Time Machine backup made before the deletion can restore the file, and so can a local snapshot if the deletion was recent. Files deleted from iCloud Drive may still be in Recently Deleted on iCloud.com, and Dropbox, Google Drive and OneDrive keep their own deleted-files history. The recovery guide covers each route.',
        ],
      },
      {
        id: 'snapshots-and-space',
        title: 'Why the space may not show up straight away',
        paragraphs: [
          'When Time Machine is set up, it saves a local snapshot of the startup disk about every hour and keeps each for 24 hours, according to Apple. A file deleted after a snapshot was taken still has its data held by that snapshot until the snapshot goes. That is also why a very recent deletion can sometimes be restored.',
          'Apple says the Mac counts snapshot space as available and deletes snapshots as they age or when space is needed, so Finder usually reports the gain. Terminal tools such as df can show less free space until the snapshot is removed. The snapshots guide explains how to check them; don’t delete more files just because df and Finder disagree.',
        ],
      },
      {
        id: 'other-tools',
        title: '3. Know which other tools skip the Trash',
        paragraphs: [
          'rm in Terminal never uses the Trash, and neither does find with -delete. For the Terminal equivalent of Move to Trash, macOS 15 and later include a trash command; the Terminal guide covers it and the alternatives for older versions.',
          'Cleanup apps often offer both routes. ClearDisk’s review dialog has Move to Trash and Remove Permanently; the permanent option needs you to type delete, skips the Trash and cannot be undone. Whatever the tool, the safe order is the same: review the selection, move it to the Trash, check nothing you need is missing, then empty it.',
        ],
      },
    ],
    related: [
      'delete-files-on-mac',
      'recover-files-from-trash-mac',
      'time-machine-snapshots',
      'move-files-to-trash-terminal-mac',
    ],
    sources: [
      {
        label: 'Apple: delete files and folders on Mac',
        url: 'https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac',
      },
      {
        label: 'Apple: Mac keyboard shortcuts',
        url: 'https://support.apple.com/en-us/102650',
      },
      {
        label: 'Apple: about Time Machine local snapshots',
        url: 'https://support.apple.com/en-us/102154',
      },
    ],
  },
  {
    slug: 'operation-not-permitted-terminal-mac',
    title: '“Operation not permitted” in Mac Terminal: what to check',
    description:
      'Check why Mac Terminal says “Operation not permitted”: app privacy access, locked files and system protections, with read-only commands to narrow the cause.',
    summary:
      'Start with the path and the action that failed. macOS privacy controls can block Terminal from reading protected data, but Full Disk Access does not override every restriction. Check app access, file locks and system protections before retrying anything that changes files.',
    published: '2026-09-24',
    updated: '2026-09-25',
    sections: [
      {
        id: 'what-it-means',
        title: 'What the message actually means',
        paragraphs: [
          'If ls ~/.Trash returns “Operation not permitted,” app privacy access is one thing to check. Owning a folder does not, by itself, give Terminal access through macOS privacy controls. Record the exact path and whether you were listing, copying or deleting: the message alone does not identify which protection blocked the operation.',
          'For a privacy-access denial, sudo does not solve the problem. It changes the user running a command, not the app’s privacy authorization. Your Trash is one protected location, as the message shows; Apple’s description of Full Disk Access names others, including Mail, Messages and Safari data and Time Machine backups. Desktop, Documents, Downloads and removable drives work differently: macOS asks the first time an app tries to use them.',
        ],
      },
      {
        id: 'grant-full-disk-access',
        title: '1. Check the app’s privacy access',
        paragraphs: [
          'For Desktop, Documents or Downloads, check the terminal app under System Settings → Privacy & Security → Files & Folders first. If your task requires broader access to protected data, open Full Disk Access in the same settings pane. Click the add button (+), go to Applications → Utilities, select Terminal and click Open, then make sure its switch is on. macOS asks for your password or Touch ID. On macOS 12 and earlier, the same list is in System Preferences → Security & Privacy → Privacy.',
          'Quit Terminal completely and open it again; the change applies after a relaunch, and System Settings may offer to quit it for you. If you use a different terminal, such as iTerm2 or the one built into VS Code, add that app instead, because the permission follows whichever app runs the command.',
        ],
      },
      {
        id: 'check-again',
        title: '2. Test with a read-only command',
        paragraphs: [
          'After relaunching Terminal, test access without changing files. Do not automatically repeat a deletion or other modifying command. Both lines below only read: the first lists what is in your Trash, the second shows how much space it uses. Items in the Trash still count against your disk until you empty it, and emptying is best done in Finder, where you can see what is going.',
          'If you only wanted a look, you may not need Terminal at all: the Trash in the Dock shows the same files, and Finder shows hidden items with Shift-Command-Period. The hidden-files guide covers the other dot folders you’re likely to look at next.',
        ],
        code: ['ls -la ~/.Trash', 'du -sh ~/.Trash'],
      },
      {
        id: 'sip-read-only',
        title: 'Why system folders stay read-only even then',
        paragraphs: [
          'Full Disk Access lets Terminal read your data; it doesn’t make macOS itself writable. Apple lists what System Integrity Protection covers: /System, /usr, /bin, /sbin, /var and the apps that come with macOS, while /Applications, /Library and /usr/local stay writable for installers. Apple says SIP restricts the root user and allows changes to those parts only by Apple-signed processes such as software updates. The system itself also sits on a signed, read-only volume.',
          'So “Operation not permitted” when you try to change something under /System or /usr/bin is expected, with or without sudo. ls -lO shows the restricted flag on those items, and csrutil status reports whether SIP is on. Don’t disable SIP to delete system files: it lowers the Mac’s protection, and those files are managed by macOS updates.',
        ],
        code: ['ls -lOd /System /usr/bin', 'csrutil status'],
      },
      {
        id: 'other-causes',
        title: 'Other causes of the same message',
        paragraphs: [
          'A locked file gives the same error when you try to delete or change it, because the lock is a file flag. ls -lO shows uchg in the flags column for a locked item. Clear it in Finder with File → Get Info and the Locked checkbox, or in Terminal with chflags nouchg followed by the file name, then try again.',
          'Files on a network share, or on a drive another system formatted, can refuse changes for reasons of their own. If a read-only check still fails after granting the required access and relaunching, check the location and file permissions. On a managed Mac, ask your administrator about restrictions. Keep SIP enabled.',
        ],
      },
      {
        id: 'revoke-access',
        title: '3. Remove the access when you’re done',
        paragraphs: [
          'Full Disk Access is broad: Apple describes it as letting an app access all files, including other apps’ data, Time Machine backups and certain administrative settings for all users. Anything you run in Terminal, including a script you downloaded, runs with it. If you granted it for one task, switch Terminal off in the Full Disk Access list afterwards, or select it and click the remove button (–).',
          'Leaving it on is a reasonable choice if you work in Terminal every day and know what you run there. Either way, you can revisit it in the same pane at any time.',
        ],
      },
    ],
    related: [
      'show-hidden-files-mac',
      'recover-files-from-trash-mac',
      'move-files-to-trash-terminal-mac',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      {
        label: 'Apple: change Privacy & Security settings on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchl211c911f/mac',
      },
      {
        label: 'Apple: about System Integrity Protection on your Mac',
        url: 'https://support.apple.com/en-us/102149',
      },
      {
        label: 'Apple: signed system volume security',
        url: 'https://support.apple.com/guide/security/signed-system-volume-security-secd698747c9/web',
      },
    ],
  },
  {
    slug: 'ds-store-files-mac',
    title: 'What is .DS_Store on Mac, and is it safe to delete?',
    description:
      '.DS_Store files store the Finder’s view settings. Deleting one is safe but resets that folder’s layout. Stop them on network shares, and keep them out of Git.',
    summary:
      'Yes, deleting a .DS_Store file is safe. It only stores how the Finder displays that folder, such as view style, sort order and icon positions, so the folder’s window goes back to your default view and the Finder writes a new file when it next needs one. They are a few kilobytes each, so deleting them frees almost no space.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-holds',
        title: 'What a .DS_Store file holds',
        paragraphs: [
          'The Finder writes a hidden file named .DS_Store into folders you open or rearrange. It records how that folder’s window should look: icon or list view, sort order, column widths, icon positions and a background picture if you set one. Apple’s note on network browsing describes the Finder gathering labels, tags and other metadata to decide how each window and its contents appear; .DS_Store files are where the per-folder layout is kept.',
          'Your documents don’t depend on it. On Mac-formatted disks, tags and other file metadata are stored with each file, so removing a .DS_Store doesn’t strip tags or change any file. You can see the files in Finder with Shift-Command-Period, or in Terminal with ls -la.',
        ],
      },
      {
        id: 'consequences',
        title: 'What happens when you delete one',
        paragraphs: [
          'The folder forgets its custom layout. Next time you open it, the Finder uses your default view options and writes a fresh .DS_Store as soon as it has something to remember. If you deleted it while the folder was open, the Finder may simply write it back. Apart from the window layout, nothing is lost.',
          'That makes deleting them pointless as a space cleanup. There are good reasons to remove them anyway: before zipping a folder for someone on Windows or Linux, before copying files to a device that shows hidden files, or when they have slipped into a code repository. The first command below lists them under a folder and only reads. The second moves them to the Trash with the trash command in macOS 15 and later. Change ~/Projects to the folder you mean; run across your whole home folder, it would reset every custom Finder layout there.',
        ],
        code: [
          'find ~/Projects -name .DS_Store -type f',
          'find ~/Projects -name .DS_Store -type f -exec trash {} +',
        ],
      },
      {
        id: 'network-shares',
        title: 'Stop them on network shares',
        paragraphs: [
          'Apple documents a setting for this, aimed at SMB file shares. The first command below turns it on; log out of your macOS account and back in for it to take effect. Apple presents it as a way to speed up browsing large shares: the Finder stops using .DS_Store files there and shows each folder’s contents in plain alphanumeric order.',
          'The trade-off is that view settings you choose for folders on the share aren’t kept. To undo it, run the second command and log out and in again. It applies to your user account on this Mac only; other Macs that use the same share need the same setting.',
        ],
        code: [
          'defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE',
          'defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool FALSE',
        ],
      },
      {
        id: 'usb-drives',
        title: 'USB drives and memory cards',
        paragraphs: [
          'Apple doesn’t document an equivalent setting for USB drives. You’ll find one quoted online, but this guide sticks to settings Apple supports. On removable drives, .DS_Store is one of several hidden items macOS writes, alongside Spotlight, event-log and Trash folders, and ._ files on drives formatted for Windows.',
          'The guide to hidden files on USB drives covers what each of those is and how to reduce them: exclude the drive from Spotlight, empty the Trash before ejecting, clean up ._ files with dot_clean, and eject properly.',
        ],
      },
      {
        id: 'keep-out-of-git',
        title: 'Keep .DS_Store out of Git',
        paragraphs: [
          'Git reads a global ignore file for patterns you never want in any repository. On most Macs its default location is ~/.config/git/ignore, so the two commands below create the folder if needed and add .DS_Store to that file. If you have pointed core.excludesFile at a different file, add the line there instead; git config --global core.excludesFile shows the setting.',
          'Ignoring affects only files Git isn’t already tracking. If a .DS_Store was committed earlier, remove it from the index with git rm --cached and the file’s path, then commit; the file stays on disk and Git stops tracking it. Adding the pattern to a project’s own .gitignore also helps collaborators who haven’t set up a global file.',
        ],
        code: ['mkdir -p ~/.config/git', 'echo .DS_Store >> ~/.config/git/ignore'],
      },
    ],
    related: [
      'show-hidden-files-mac',
      'stop-mac-hidden-files-on-usb',
      'mac-folder-structure-explained',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: adjust SMB browsing behavior in macOS',
        url: 'https://support.apple.com/en-us/102064',
      },
      {
        label: 'Git: gitignore documentation',
        url: 'https://git-scm.com/docs/gitignore',
      },
    ],
  },
  {
    slug: 'stop-mac-hidden-files-on-usb',
    title: 'How to stop a Mac writing hidden files to USB drives',
    description:
      'Why a Mac leaves .Spotlight-V100, .fseventsd, .Trashes and ._ files on USB drives and SD cards, and how to reduce them with Spotlight settings and dot_clean.',
    summary:
      'You can reduce them, not switch them all off. Exclude the drive from Spotlight, empty the Trash before ejecting, run dot_clean on ExFAT or FAT32 drives to remove ._ files, then eject properly. macOS has no documented setting that stops every hidden file on removable drives.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-they-are',
        title: 'What the hidden files are',
        paragraphs: [
          'A Mac treats a USB stick or memory card like any other disk, so it adds the same housekeeping files it keeps on its own drives. Their names start with a dot, which hides them on the Mac, but Windows PCs, TVs, cameras and car stereos often show them or try to open them.',
          'None of them harms the files you copied, and apart from .Trashes, which holds whatever you deleted, they are usually small. The steps below deal with them in order of how much difference they make.',
        ],
        items: [
          '.Spotlight-V100: the Spotlight index for that drive, so its files show up in searches.',
          '.fseventsd: a log of file-system changes on the drive, kept for macOS services that watch for changes.',
          '.Trashes: the drive’s own Trash. Anything you delete from the drive in Finder waits here, using the drive’s space, until you empty the Trash.',
          '._ files, such as ._photo.jpg: AppleDouble files holding Mac metadata, such as extended attributes and Finder information, on formats that can’t store it natively, including ExFAT and FAT32.',
          '.DS_Store: the Finder’s view settings for each folder you open.',
        ],
      },
      {
        id: 'empty-trash-first',
        title: '1. Empty the Trash before you eject',
        paragraphs: [
          'Files deleted from a removable drive go to .Trashes on that drive, not to your Mac, and they are emptied only while the drive is connected. Before ejecting, open the Trash in the Dock, check what is there and empty it. Or skip the Trash for files on the drive: select them and press Option-Command-Delete to delete them immediately, once you’re sure you don’t need them.',
          'This is the step that recovers real space. A card that still seems full after you deleted photos in Finder often has them waiting in .Trashes.',
        ],
      },
      {
        id: 'exclude-from-spotlight',
        title: '2. Exclude the drive from Spotlight',
        paragraphs: [
          'With the drive connected, open System Settings, click Spotlight in the sidebar, then click Search Privacy and add the drive with the add button (+), or drag it into the list. That is the path in macOS 15 and later; in macOS 13 and 14 it is Siri & Spotlight → Spotlight Privacy. Spotlight stops indexing the drive, and its files no longer appear in searches.',
          'In Terminal, mdutil does the same. The first command turns indexing off for the volume, the second shows its status, and the third removes the existing index folder; its manual page notes that removing the index doesn’t disable indexing by itself, so run it after the first. Replace NAME with the drive’s name as it appears in /Volumes, in quotes if it contains spaces. macOS may still keep a small .Spotlight-V100 folder that records the setting for that drive.',
        ],
        code: [
          'sudo mdutil -i off /Volumes/NAME',
          'mdutil -s /Volumes/NAME',
          'sudo mdutil -X /Volumes/NAME',
        ],
      },
      {
        id: 'dot-clean',
        title: '3. Clean up ._ files with dot_clean',
        paragraphs: [
          'On ExFAT and FAT32 drives, a file copied from a Mac can get a ._ companion. macOS includes dot_clean for these. With -n it deletes only the ._ files whose matching file no longer exists; with -m it deletes all of them. Run it just before ejecting, when you’re done copying.',
          'What you lose with -m is the Mac-only information those files carried, such as Finder tags, for the copies on that drive. The originals on your Mac are untouched. If you want the drive to keep that metadata, format it as APFS or Mac OS Extended, which store it natively, though other devices may not be able to read those formats.',
        ],
        code: ['dot_clean -n /Volumes/NAME', 'dot_clean -m /Volumes/NAME'],
      },
      {
        id: 'what-stays',
        title: 'What you can’t switch off',
        paragraphs: [
          'macOS has no documented setting to stop .fseventsd on removable drives, and Apple documents its .DS_Store setting for network shares only. Instructions online that promise to stop everything rely on undocumented tricks that can change between macOS releases. The practical approach is the routine above: empty, exclude, clean, eject.',
          'If a device needs a completely clean card, as some cameras and car stereos do, the reliable fix is to copy off anything you want to keep and let that device format the card itself. The .DS_Store guide covers those files in more detail.',
        ],
      },
      {
        id: 'eject-properly',
        title: '4. Eject properly',
        paragraphs: [
          'Drag the drive to the Trash in the Dock, click the eject button beside it in the Finder sidebar, or select it and choose File → Eject, then wait until it disappears from Finder before unplugging. Ejecting lets macOS finish writing, including its housekeeping files, so a drive pulled out early is at more risk than one that simply has a few hidden files.',
          'If the Mac says the drive is in use, quit the app that has a file open on it. The eject guide covers the stubborn cases.',
        ],
      },
    ],
    related: [
      'eject-external-drive-mac',
      'ds-store-files-mac',
      'format-external-hard-drive-mac',
      'trash-wont-empty-mac',
    ],
    sources: [
      {
        label: 'Apple: prevent Spotlight searches in specific folders or disks',
        url: 'https://support.apple.com/guide/mac-help/mchl1bb43b84/mac',
      },
      {
        label: 'Apple: if you can’t eject a disk on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1285/mac',
      },
    ],
  },
  {
    slug: 'relocated-items-folder-mac',
    title: 'Relocated Items folder on Mac: can you delete it?',
    description:
      'Relocated Items appears after a macOS upgrade with files the upgrade couldn’t keep in place. See what’s inside, when to delete it, and fix permission errors.',
    summary:
      'Relocated Items holds files a macOS upgrade couldn’t leave where they were, usually system configuration files that you or an app changed. Look inside, keep anything you still need, and then you can delete it. The alias on your Desktop is only a shortcut to /Users/Shared/Relocated Items.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-is',
        title: 'What the folder is',
        paragraphs: [
          'Apple explains that an upgrade transfers and verifies your files, and anything that couldn’t be moved to its new location is placed in a Relocated Items folder. The real folder is in the Shared folder within the Users folder, /Users/Shared/Relocated Items, and the upgrade puts an alias to it on your Desktop. Deleting the alias removes only the shortcut. The folder’s appearance doesn’t mean the upgrade failed; it means a few files were set aside for you to review rather than overwritten silently.',
          'Apple also says a PDF in the folder explains what to do with its contents, so open that first if there is one. Items inside sit in folders that mirror where they came from: a Configuration folder containing private/etc, for instance, holds files from /private/etc. On the Mac used for this guide, recent upgrades left copies of SSH and time-zone configuration there.',
        ],
      },
      {
        id: 'several-folders',
        title: 'Why there may be several',
        paragraphs: [
          'Each upgrade can produce its own set. On the Mac used for this guide, earlier folders had been renamed Previously Relocated Items, Previously Relocated Items 1 and so on, all in /Users/Shared next to the current one. They are the same kind of leftovers from earlier upgrades, and the same decision applies to each.',
          'The folders are usually small, so there is no space reason to hurry. Select one and press Command-I to see its size before deciding.',
        ],
      },
      {
        id: 'check-contents',
        title: '1. Check whether you need anything inside',
        paragraphs: [
          'Think about whether you ever changed a system configuration file by hand or through an app: the hosts file, SSH server settings, a web server configuration, a shell setting for all users. If so, compare the relocated copy with the current file at the matching path, and reapply your change if the upgrade replaced it. If you never changed such files, there is nothing to restore; the upgrade already installed current versions.',
          'To read a relocated file without changing it, open it with Quick Look or TextEdit. Don’t copy system files back over the current ones wholesale: they come from an older macOS, and the current versions are the ones that match the system you have now.',
        ],
      },
      {
        id: 'move-to-trash',
        title: '2. Move it to the Trash',
        paragraphs: [
          'When you’re sure, drag the folder from /Users/Shared to the Trash, or select it and press Command-Delete. The items belong to the system account, so the Finder asks for an administrator name and password, or Touch ID. Delete the Desktop alias too, then empty the Trash when you’re ready.',
          'If you’d rather keep a copy, compress the folder first and store the archive with your backups. The folder is a copy for you to review; macOS doesn’t read its settings from /Users/Shared.',
        ],
      },
      {
        id: 'permission-errors',
        title: 'If the Finder won’t delete it',
        paragraphs: [
          'Some people find a subfolder, such as one named Security, that the Finder won’t move even after they authenticate. Apple’s permissions guide gives the Finder route: select the folder, choose File → Get Info, open Sharing & Permissions, click the lock, give your account Read & Write, then choose Apply to enclosed items from the action menu at the bottom. Try moving it to the Trash again afterwards.',
          'If you try from Terminal and see “Operation not permitted,” that is macOS privacy protection for the app you are using, not a problem with the folder; the Terminal guide explains Full Disk Access and how to remove it afterwards. If an item still resists, leaving it is harmless: it is usually a small folder of old copies and doesn’t affect how the Mac runs.',
        ],
      },
    ],
    related: [
      'mac-storage-full-after-macos-update',
      'operation-not-permitted-terminal-mac',
      'mac-folder-structure-explained',
      'delete-files-on-mac',
    ],
    sources: [
      {
        label: 'Apple: if a Relocated Items folder appears after upgrading macOS',
        url: 'https://support.apple.com/guide/mac-help/mchl8ae423a3/mac',
      },
      {
        label: 'Apple: change permissions for files, folders or disks on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchlp1203/mac',
      },
      {
        label: 'Apple: change Privacy & Security settings on Mac',
        url: 'https://support.apple.com/guide/mac-help/mchl211c911f/mac',
      },
    ],
  },
];
