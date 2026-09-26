import type { Guide } from './guides.ts';

export const everydayAppGuides: Guide[] = [
  {
    slug: 'clear-spotify-cache-mac',
    title: 'How to clear the Spotify cache on Mac',
    description:
      'Clear the Spotify cache on Mac from Settings → Storage, move it to another folder, and remove offline downloads you no longer play, without losing playlists.',
    summary:
      'Open Spotify, click your profile picture, choose Settings, scroll to Storage and click Clear cache. Offline downloads are a separate store: remove them from the downloaded albums and playlists you no longer need.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'cache-versus-downloads',
        title: 'Cache and downloads are different things',
        paragraphs: [
          'Spotify’s help describes two ways the app uses your storage. The cache holds parts of songs and podcasts so playback starts without lagging. Downloads are the albums, playlists and podcasts you chose to keep for offline listening. The cache refills itself as you listen; downloads stay until you remove them or Spotify removes them for you.',
          'On a Premium account, downloads are often the larger share. Spotify allows up to 10,000 downloaded tracks on each of up to five devices, and the free version can download podcasts only. Downloads play only inside Spotify, so they are not music files you can manage in Finder.',
        ],
      },
      {
        id: 'clear-the-cache',
        title: '1. Clear the cache from Spotify’s settings',
        paragraphs: [
          'Open the Spotify desktop app, click your profile picture at the top, and choose Settings. Scroll down to Storage and click Clear cache. This is the method Spotify documents for the desktop app, and it needs no Finder work.',
          'Expect the space to come back gradually. Songs you play next stream again and are cached again, so clearing is a one-off gain rather than a permanent reduction. Spotify recommends keeping at least 1 GB free on the device for the app to work well.',
        ],
      },
      {
        id: 'move-the-cache',
        title: '2. Move the cache if the internal disk is tight',
        paragraphs: [
          'In the same Storage section, Change location lets you keep the cache somewhere else. Choose a folder that will be available whenever you open Spotify. If you pick an external drive, keep it connected while you use the app.',
          'Spotify’s help does not document a size limit for the desktop cache; the documented controls are Clear cache and Change location. Advice to edit Spotify’s preference files to cap the cache comes from elsewhere, not from Spotify support, so treat it with care.',
        ],
      },
      {
        id: 'remove-downloads',
        title: '3. Remove downloads you no longer play',
        paragraphs: [
          'Open Your Library, open a downloaded album or playlist, and click the green download arrow to remove it. Spotify’s one-tap Remove all downloads option is documented for the mobile app; on a Mac, work through the downloaded items you recognize. Start with large playlists you rarely play offline.',
          'Spotify also removes downloads on its own if you don’t go online at least once every 30 days, if you reinstall the app, or if you exceed the five-device limit. If you rely on downloads for travel, check they still show as downloaded before you leave.',
        ],
      },
      {
        id: 'where-files-live',
        title: 'Where Spotify keeps its files on Mac',
        paragraphs: [
          'Spotify’s own clean-reinstall steps name the folders it uses: com.spotify.client and com.spotify.client.helper in ~/Library/Caches, and a Spotify folder in ~/Library/Application Support. The commands below only measure them. If you moved the cache with Change location, measure that folder instead.',
          'Deleting the Application Support folder is part of a clean reinstall, not routine cleanup; Spotify notes that you need to download your music and podcasts again after reinstalling. Use the Clear cache button for space. ClearDisk’s free scan can show these folders’ paths and sizes, but it does not press Spotify’s button for you.',
        ],
        code: [
          'du -sh ~/Library/Caches/com.spotify.client*',
          'du -sh "$HOME/Library/Application Support/Spotify"',
        ],
      },
      {
        id: 'check-the-result',
        title: '4. Check the result',
        paragraphs: [
          'Run the measuring commands again after clearing the cache or removing downloads. The folders shrink straight away, while Storage settings can take a little longer to catch up. If the number barely moved, downloads rather than cache were the larger share.',
          'If you use Spotify’s Local files feature, the songs it shows are files in your own folders, not Spotify’s storage. Clearing the cache and removing downloads never touch them, so review those folders as you would any music you own, and keep a backup of anything you cannot get again.',
        ],
      },
    ],
    questions: [
      {
        q: "What's the difference between Spotify's cache and its downloads on Mac?",
        a: 'The cache holds parts of songs and podcasts for smooth playback and refills itself as you listen. Downloads are albums, playlists and podcasts you chose for offline listening, and stay until you or Spotify remove them.',
      },
      {
        q: 'Will clearing the Spotify cache free up space permanently?',
        a: "No, it's a one-off gain. Songs you play next stream and get cached again, so the folder gradually grows back to a similar size as you keep using Spotify.",
      },
      {
        q: 'Does Spotify ever remove my downloads automatically?',
        a: "Yes. Spotify removes downloads if you don't go online at least once every 30 days, if you reinstall the app, or if you exceed the five-device download limit for your account.",
      },
      {
        q: "Are Spotify's Local Files affected by clearing the cache or removing downloads?",
        a: 'No. Local Files are files in your own folders that Spotify simply displays; clearing the cache or removing downloads never touches them, so back them up like any other music you own.',
      },
    ],
    related: [
      'clear-cache-on-mac',
      'library-caches-folder-mac',
      'apple-music-downloads-mac',
      'application-support-folder-mac',
    ],
    sources: [
      {
        label: 'Spotify: storage information',
        url: 'https://support.spotify.com/us/article/storage-information/',
      },
      {
        label: 'Spotify: listen offline',
        url: 'https://support.spotify.com/us/article/listen-offline/',
      },
      {
        label: 'Spotify: reinstalling your Spotify app',
        url: 'https://support.spotify.com/us/article/reinstall-spotify/',
      },
    ],
  },
  {
    slug: 'clear-slack-cache-mac',
    title: 'How to clear the Slack cache on Mac',
    description:
      'Clear the Slack cache on Mac with Help → Troubleshooting, know when Reset App Data is worth signing out for, and find where the desktop app keeps its files.',
    summary:
      'In the Slack desktop app, choose Help → Troubleshooting → Clear Cache and Restart. You stay signed in. Reset App Data… is the heavier option: Slack warns that it signs you out of every workspace and returns the app to its original state.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'clear-cache-and-restart',
        title: '1. Use Clear Cache and Restart first',
        paragraphs: [
          'Open the Slack desktop app, click Help in the menu bar, choose Troubleshooting, then click Clear Cache and Restart. Slack’s help lists this as the first step when the app has trouble loading. In the Mac App Store version the same item can read Clear Cache and Exit; open Slack again afterwards.',
          'The cache holds local copies of images, scripts and other content the app has already fetched. Your messages and shared files are stored by Slack, not only on this Mac, so they load again after the restart. The first launch can be slower while the cache rebuilds.',
        ],
      },
      {
        id: 'reset-app-data',
        title: '2. Reset App Data only if clearing the cache isn’t enough',
        paragraphs: [
          'The same Troubleshooting menu has a Reset App Data… item. Its confirmation says it will sign you out of all your workspaces and reset the app to its original state. Before you confirm, make sure you can sign in to every workspace again, including any single sign-on or two-factor step your organization uses.',
          'A reset also returns the app’s own preferences to their defaults, so settings you changed on this Mac may need redoing. It is a troubleshooting tool. For storage alone, start with Clear Cache and Restart, which removes cached content without the sign-outs.',
        ],
      },
      {
        id: 'where-slack-stores-data',
        title: 'Where Slack keeps its data on Mac',
        paragraphs: [
          'The version downloaded from Slack’s website keeps its data in ~/Library/Application Support/Slack. Inside you will see folders such as Cache, Code Cache, Service Worker, IndexedDB and logs, which is the layout of an app built on web technology. The Mac App Store version is sandboxed, so its data sits inside its container, ~/Library/Containers/com.tinyspeck.slackmacgap.',
          'Measure before you decide; the commands below only report sizes, and only one of the two paths will exist on most Macs. Don’t delete the folder by hand, especially while Slack is running. It also holds your sign-in and local settings, so removing it signs you out much like Reset App Data, without the app’s own safeguards.',
        ],
        code: [
          'du -sh "$HOME/Library/Application Support/Slack"',
          'du -sh ~/Library/Containers/com.tinyspeck.slackmacgap',
        ],
      },
      {
        id: 'downloaded-files',
        title: '3. Check the files you downloaded from Slack',
        paragraphs: [
          'Files you save from Slack are not part of its cache. They go to your download location, which you can check by clicking your profile picture, choosing Preferences, then Advanced, and looking under Download location. Slack notes this option is only available in the app downloaded directly from its website.',
          'Clearing the cache never touches those downloads. Review them in Finder like any other files, and keep anything that is not stored elsewhere. The Downloads folder guide linked below covers a careful way to sort them.',
        ],
      },
      {
        id: 'measure-before-and-after',
        title: '4. Measure before and after',
        paragraphs: [
          'Run the measuring command for your version of Slack before you clear the cache, then again after the restart. The difference is what the cache was holding. If the folder is still large, look at which subfolders hold the space; logs and service worker data are part of the app’s normal working set and come back with use.',
          'Storage settings may not reflect the change immediately. Give macOS a few minutes before assuming the clear did nothing.',
        ],
      },
      {
        id: 'if-it-grows-back',
        title: 'If the cache grows back',
        paragraphs: [
          'The cache rebuilds as you use Slack. Several workspaces, busy channels and lots of shared images or video all add to it, so a folder that returns to its old size is normal rather than a fault. Clearing it every week is not a fix for a slow app.',
          'If Slack is slow or will not load, its help suggests running the connection test at slack.com/help/test and checking network or security software. ClearDisk can show how large the folder is, but the Troubleshooting menu remains the supported way to clear it.',
        ],
      },
    ],
    questions: [
      {
        q: 'Does clearing the Slack cache sign me out of my workspaces?',
        a: "No. Clear Cache and Restart keeps you signed in and only removes cached content like images and scripts; your messages and files simply reload from Slack's servers after the restart.",
      },
      {
        q: "What's the difference between Clear Cache and Restart and Reset App Data in Slack?",
        a: 'Clear Cache and Restart removes cached content without signing you out. Reset App Data is heavier: it signs you out of every workspace and resets preferences to their defaults, so check you can sign back in first.',
      },
      {
        q: "Is it safe to delete Slack's Application Support folder by hand?",
        a: "No, especially while Slack is running. It holds your sign-in and local settings, so deleting it signs you out much like Reset App Data, but without the app's own safeguards.",
      },
      {
        q: "Why does Slack's cache folder grow back after I clear it?",
        a: 'The cache rebuilds as you use the app. More workspaces, busy channels and shared images or video all add to it, so a folder returning to its old size is normal rather than a fault.',
      },
    ],
    related: [
      'clear-teams-cache-mac',
      'clear-cache-on-mac',
      'application-support-folder-mac',
      'clear-downloads-folder-mac',
    ],
    sources: [
      {
        label: 'Slack: troubleshoot connection issues',
        url: 'https://slack.com/help/articles/205138367-Troubleshoot-connection-issues',
      },
      {
        label: 'Slack: manage your default download location',
        url: 'https://slack.com/help/articles/4609980592915-Manage-your-default-download-location',
      },
    ],
  },
  {
    slug: 'clear-teams-cache-mac',
    title: 'How to clear the Microsoft Teams cache on Mac',
    description:
      'Clear the Microsoft Teams cache on Mac the way Microsoft documents it: quit Teams, remove the right folders for new or classic Teams, then restart and check.',
    summary:
      'Quit Teams completely, then remove the folders Microsoft lists. For new Teams they are ~/Library/Group Containers/UBF8T346G9.com.microsoft.teams and ~/Library/Containers/com.microsoft.teams2; classic Teams used ~/Library/Application Support/Microsoft/Teams.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'check-the-problem',
        title: '1. Check that clearing the cache fits the problem',
        paragraphs: [
          'Microsoft does not recommend clearing the cache for chat or channel problems such as missing messages, chat history not loading, a team not appearing, or wrong unread counts. It does not fix those issues, and it deletes the diagnostic logs support needs to find the cause.',
          'Treat it as a targeted step for problems with the Teams app on this Mac, or for recovering space the cache has taken. If your organization manages Teams, check with IT first; they may prefer to collect logs before anything is removed.',
        ],
      },
      {
        id: 'quit-teams',
        title: '2. Quit Teams completely',
        paragraphs: [
          'Closing the window is not enough. Control-click the Teams icon in the Dock and choose Quit, or press Command-Q while Teams is active. Removing files from a running app can leave it in a half-written state.',
          'Save anything you were drafting in a chat or meeting note first. If you are unsure whether Teams is still running, press Option-Command-Esc and check that it is not listed in the Force Quit window.',
        ],
      },
      {
        id: 'new-teams',
        title: '3. Remove the new Teams cache folders',
        paragraphs: [
          'Microsoft lists two folders for new Teams. In Finder, choose Go → Go to Folder, paste ~/Library/Group Containers/UBF8T346G9.com.microsoft.teams, then move that folder to the Trash. Repeat for ~/Library/Containers/com.microsoft.teams2. The commands below measure both first, so you know what you are recovering.',
          'Microsoft’s own page gives Terminal commands using rm -rf. If you use them, note that “Group Containers” contains a space, so the path must be quoted or escaped; the Trash route also leaves you a way back until you empty it. If macOS asks whether an app may access data from other apps, that is container protection, explained in the guide linked below. If macOS refuses, do not disable security features to force it.',
        ],
        code: [
          'du -sh "$HOME/Library/Group Containers/UBF8T346G9.com.microsoft.teams"',
          'du -sh ~/Library/Containers/com.microsoft.teams2',
        ],
      },
      {
        id: 'other-microsoft-folders',
        title: 'Leave other Microsoft folders alone',
        paragraphs: [
          'Microsoft’s developer prefix, UBF8T346G9, appears on several folders in ~/Library/Group Containers. Only the one ending in com.microsoft.teams is on Microsoft’s list for Teams. UBF8T346G9.Office, for example, belongs to Microsoft’s Office apps, and Outlook keeps its data there; OneDrive and Microsoft sign-in components have their own folders too. Removing any of them is not a Teams cache clear.',
          'Group Containers are shared by a group of apps and extensions from one developer, which is why a precise path matters more here than a folder that merely looks related. If a folder is not named on Microsoft’s page, leave it where it is.',
        ],
      },
      {
        id: 'classic-teams',
        title: '4. Classic Teams: one folder',
        paragraphs: [
          'Microsoft’s page still lists steps for classic Teams, which you only need on a Mac that still has the older app. Its cache is ~/Library/Application Support/Microsoft/Teams. Quit Teams, open that folder with Go to Folder, and move the Teams folder to the Trash.',
          'Remove only the Teams folder, not the whole Microsoft folder around it; other Microsoft software can keep its own data beside it. If you are unsure which Teams you have, check which of the folders above exists on your Mac.',
        ],
      },
      {
        id: 'restart-and-check',
        title: '5. Restart Teams and check',
        paragraphs: [
          'Open Teams again. Microsoft notes the first start can take longer than usual because the cache files have to be rebuilt. You may be asked to sign in again, and some preferences you set on this Mac can return to their defaults.',
          'Your chats, files and meetings are stored in Microsoft’s cloud, not only on this Mac, so they load again once you are signed in. When Teams works as expected, review the Trash and empty it; the space is only freed then.',
        ],
      },
    ],
    questions: [
      {
        q: 'Should I clear the Teams cache to fix missing messages or wrong unread counts?',
        a: "No, Microsoft doesn't recommend it for those chat or channel problems. Clearing the cache won't fix them, and it deletes the diagnostic logs support would need to find the actual cause.",
      },
      {
        q: 'Is closing the Teams window enough before clearing its cache?',
        a: "No, you need to quit completely, either Control-click the Dock icon and choose Quit or press Command-Q. Removing files from an app that's still running can leave it in a half-written state.",
      },
      {
        q: 'Is it safe to delete every folder starting with UBF8T346G9 in Group Containers?',
        a: "No, that prefix is Microsoft's shared developer ID used by several apps. Only the folder ending in com.microsoft.teams is on Microsoft's list for Teams; others, like UBF8T346G9.Office, belong to Office apps such as Outlook.",
      },
      {
        q: 'Will I lose my chat history after clearing the Teams cache?',
        a: "No. Chats, files and meetings are stored in Microsoft's cloud rather than only on the Mac, so they load again once you sign back in, though the first start afterward is slower while the cache rebuilds.",
      },
    ],
    related: [
      'clear-slack-cache-mac',
      'containers-folder-mac',
      'clear-cache-on-mac',
      'application-support-folder-mac',
    ],
    sources: [
      {
        label: 'Microsoft Learn: clear the Teams client cache',
        url: 'https://learn.microsoft.com/en-us/troubleshoot/microsoftteams/teams-administration/clear-teams-cache',
      },
    ],
  },
  {
    slug: 'whatsapp-taking-up-space-on-mac',
    title: 'WhatsApp taking up space on Mac: media and storage',
    description:
      'Where WhatsApp stores chats and media on Mac, how to delete media and stop auto-downloads in the app, and why deleting its folder deletes your chat history.',
    summary:
      'WhatsApp for Mac keeps its chat database and downloaded media in ~/Library/Group Containers/group.net.whatsapp.WhatsApp.shared. Trim it inside WhatsApp, by deleting media chat by chat and turning off media auto-download, rather than deleting that folder.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-it-lives',
        title: 'Where WhatsApp stores data on a Mac',
        paragraphs: [
          'The current WhatsApp app for Mac keeps most of its data in a Group Container named group.net.whatsapp.WhatsApp.shared. It holds ChatStorage.sqlite, the chat database for this Mac, and a Message folder whose Media subfolder holds photos, videos, voice messages and documents. Those subfolders are named by chat identifiers rather than contact names, which makes Finder a poor tool for choosing what to delete.',
          'A smaller container, ~/Library/Containers/net.whatsapp.WhatsApp, holds the app’s own files. The commands below only measure. If you still use an older WhatsApp desktop build, its folders may differ.',
        ],
        code: [
          'du -sh "$HOME/Library/Group Containers/group.net.whatsapp.WhatsApp.shared"',
          'du -sh "$HOME/Library/Group Containers/group.net.whatsapp.WhatsApp.shared/Message"',
        ],
      },
      {
        id: 'delete-media',
        title: '1. Delete media from the chats that use the most',
        paragraphs: [
          'WhatsApp’s help says its Free up storage feature is not available in the Mac app, so work chat by chat. Open a chat, click its name to open chat info, then click Media, Links, and Docs. Click Select, choose the items, click the trash icon and choose Delete for me. Documents and links are removed the same way from their own tabs.',
          'There is no single step that deletes all media from a chat. Before you delete, save any photo or document you want to keep to a folder you back up. Busy groups that share video are usually the best place to start.',
        ],
      },
      {
        id: 'auto-download',
        title: '2. Stop media downloading automatically',
        paragraphs: [
          'Click Settings, or your profile picture, then Storage and data. In the Media auto-download section, turn off the types you don’t want saved automatically, such as videos and documents. Media then downloads only when you open it.',
          'This slows future growth; it does not remove anything already downloaded. WhatsApp also notes that where saved files go is determined by your computer settings, so media you explicitly saved may sit in Downloads rather than in WhatsApp’s container.',
        ],
      },
      {
        id: 'keep-the-container',
        title: '3. Don’t delete the container to save space',
        paragraphs: [
          'Moving group.net.whatsapp.WhatsApp.shared to the Trash removes the chat history stored on this Mac together with the data that links it to your account. You would need to link the Mac again from your phone, and you should not count on every old message and file coming back.',
          'If a disk scan, including ClearDisk’s, shows this folder near the top, treat it as chat data to review in the app, not as cache. The Group Containers guide linked below explains why these folders need care. To remove WhatsApp from the Mac entirely, follow the uninstall guide instead of deleting folders one by one.',
        ],
      },
      {
        id: 'measure-again',
        title: '4. Measure again after trimming',
        paragraphs: [
          'Run the measuring commands again once you have worked through the largest chats. The Message folder is where deleted media should show up as a smaller number. If one chat still accounts for most of the space and you no longer need it at all, deleting the whole chat removes its messages as well as its media, so export or save anything important first.',
          'Storage settings can lag behind the Finder numbers for a while, so wait a few minutes before deciding that something else needs deleting.',
        ],
      },
      {
        id: 'phone-storage',
        title: 'Your phone has its own storage tools',
        paragraphs: [
          'The Mac app is a linked device with its own local copy of chats and media, so freeing space on the Mac and on your phone are separate jobs. WhatsApp’s Free up storage screen is available in the Android and iPhone apps.',
          'If both devices are short of space, deal with each one separately: the phone app’s storage screen for the phone, and the chat-by-chat steps above for the Mac.',
        ],
      },
    ],
    questions: [
      {
        q: 'Is there a one-click way to free up storage in WhatsApp on Mac?',
        a: "No. WhatsApp's Free up storage feature isn't available in the Mac app, only on Android and iPhone. On the Mac you work chat by chat, through each chat's Media, Links and Docs tabs instead.",
      },
      {
        q: "What happens if I delete WhatsApp's Group Container folder to save space?",
        a: "It removes the chat history stored on that Mac along with the data linking it to your account, so you'd need to re-link the Mac from your phone, with no guarantee every message and file comes back.",
      },
      {
        q: 'Does turning off media auto-download in WhatsApp delete files already downloaded?',
        a: 'No, it only slows future growth by downloading media only when you open it. Anything already saved in the Media folder stays exactly where it is until you delete it yourself.',
      },
      {
        q: "Why are WhatsApp's media folders hard to sort through in Finder?",
        a: 'Because subfolders are named by chat identifiers rather than contact names, which makes Finder a poor tool for choosing what to delete; removing media inside the app itself is the more reliable route.',
      },
    ],
    related: [
      'containers-folder-mac',
      'messages-taking-up-space-on-mac',
      'telegram-taking-up-space-on-mac',
      'uninstall-apps-on-mac',
    ],
    sources: [
      {
        label: 'WhatsApp Help Center: how to delete media (Mac)',
        url: 'https://faq.whatsapp.com/372400548572711/?cms_platform=mac-desktop',
      },
      {
        label: 'WhatsApp Help Center: how to configure auto-download (Mac)',
        url: 'https://faq.whatsapp.com/366146522333492/?cms_platform=mac-desktop',
      },
      {
        label:
          'WhatsApp Help Center: how to free up storage (Mac availability)',
        url: 'https://faq.whatsapp.com/5503646096388294/?cms_platform=mac-desktop',
      },
    ],
  },
  {
    slug: 'telegram-taking-up-space-on-mac',
    title: 'Telegram taking up space on Mac: clear the cache',
    description:
      'Why Telegram uses so much storage on Mac, where it keeps its cache, and how to clear it and set limits in Telegram for macOS or in Telegram Desktop.',
    summary:
      'Telegram keeps a local cache of the media you open, while cloud chats stay on Telegram’s servers. In Telegram for macOS, go to Settings → Data and Storage → Storage Usage. In Telegram Desktop, go to Settings → Advanced → Manage local storage.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'why-so-large',
        title: 'Why Telegram uses so much storage',
        paragraphs: [
          'Telegram’s chats live in its cloud. When you open a photo, video or file, the app keeps a local copy so it opens quickly next time. Large groups and channels that share video can fill that cache quickly, even if you only scroll past.',
          'Telegram’s FAQ says you can keep all your media in the cloud and simply clear the cache to free up space, without logging out. The exception is secret chats: Telegram describes them as device-specific and not part of its cloud, so their contents exist only on the devices in that chat.',
          'Telegram for macOS also has Auto-Download Media settings under Settings → Data and Storage, covering photos, videos, files, voice and video messages and GIFs, with separate choices for groups and channels. Turning off automatic video downloads for groups and channels is a simple way to slow future growth.',
        ],
      },
      {
        id: 'which-app',
        title: '1. Check which Telegram app you have',
        paragraphs: [
          'There are two official Telegram apps for Mac. Telegram for macOS is the native Mac app, and Telegram Desktop is the cross-platform app also used on Windows and Linux. Their settings are laid out differently, which is why instructions found online often do not match what you see.',
          'Check the app’s About window or the page you downloaded it from, then follow the matching step below. Each device keeps its own cache, so clearing it on the Mac does not change what Telegram stores on your phone.',
        ],
      },
      {
        id: 'telegram-for-macos',
        title: '2. Telegram for macOS: Storage Usage',
        paragraphs: [
          'Open Settings → Data and Storage → Storage Usage. After Telegram calculates the size, it shows how much of your free disk space it uses and which chats use the most. Clear the entire cache, or select media types and clear only those.',
          'On the same screen, Auto-Remove Cached Media sets how long Keep Media holds files for private chats, group chats and channels, with exceptions for chosen chats. Maximum Cache Size caps the total; Telegram says the oldest media is deleted once the cache exceeds it. Both leave cloud media available to download again.',
        ],
      },
      {
        id: 'telegram-desktop',
        title: '3. Telegram Desktop: Manage local storage',
        paragraphs: [
          'Open Settings → Advanced, then Manage local storage in the Data and storage section. The window groups the cache into images, stickers, voice messages, video messages, GIFs and other media, with Clear buttons for each and Clear all for everything. Keep the window open while it clears.',
          'The same window sets a total size limit, a media cache limit and a Clear files older than period. Files you download from chats are separate: Telegram Desktop’s Download path setting usually points to a Telegram folder in Downloads, and clearing the cache does not remove them.',
        ],
      },
      {
        id: 'leave-folders-alone',
        title: 'Leave Telegram’s data folders alone',
        paragraphs: [
          'Telegram for macOS keeps its data in ~/Library/Group Containers, in a folder whose name ends in ru.keepcoder.Telegram. Telegram Desktop downloaded from its website uses ~/Library/Application Support/Telegram Desktop. These folders hold the data that keeps you signed in as well as the cache, so deleting them signs you out and loses anything that was not in the cloud, including secret chats.',
          'Treat those folders like a password: don’t copy them to shared drives or send them to anyone. For space, the in-app controls above do the job and keep your session intact. The commands below only measure the folders, so you can compare the size before and after clearing the cache; only one of them will exist if you use a single app.',
        ],
        code: [
          'du -sh "$HOME/Library/Group Containers/"*ru.keepcoder.Telegram',
          'du -sh "$HOME/Library/Application Support/Telegram Desktop"',
        ],
      },
    ],
    questions: [
      {
        q: "Will clearing Telegram's cache log me out or delete my chats?",
        a: "No. Clearing the cache only removes local copies of media you have already opened; your cloud chats remain on Telegram's servers and you can download the media again later. The exception is secret chats, which are device specific and not stored in the cloud, so clearing affects them differently.",
      },
      {
        q: 'Why is Telegram using so much space on my Mac?',
        a: 'Telegram downloads a local copy of any photo, video or file you open so it loads quickly next time, and large groups or channels with lots of video can fill that cache even if you only scroll past them. Turning off automatic video downloads for groups and channels slows future growth.',
      },
      {
        q: "Why don't the Telegram cache instructions I found online match my settings?",
        a: "There are two separate Mac apps: Telegram for macOS, the native app, and Telegram Desktop, the cross platform app also used on Windows and Linux. Their settings screens are laid out differently, so instructions written for one often don't match what you see in the other.",
      },
      {
        q: "Can I delete Telegram's data folder in Library to free up space?",
        a: 'No, that folder keeps the data that keeps you signed in along with the cache, so deleting it signs you out and loses anything not stored in the cloud, including secret chats. Use the in-app storage controls instead, which free space while keeping your session intact.',
      },
    ],
    related: [
      'whatsapp-taking-up-space-on-mac',
      'containers-folder-mac',
      'clear-cache-on-mac',
      'clear-downloads-folder-mac',
    ],
    sources: [
      {
        label: 'Telegram: FAQ',
        url: 'https://telegram.org/faq',
      },
      {
        label: 'Telegram: Telegram for macOS',
        url: 'https://macos.telegram.org/',
      },
      {
        label: 'Telegram: Telegram Desktop',
        url: 'https://desktop.telegram.org/',
      },
    ],
  },
  {
    slug: 'steam-games-storage-mac',
    title: 'Where are Steam games stored on Mac? Find and trim them',
    description:
      'Find where Steam stores games on Mac, see how much space each one takes in Storage settings, and uninstall or move games without losing your saves.',
    summary:
      'Steam keeps games in ~/Library/Application Support/Steam/steamapps, with each game under steamapps/common. Use Steam → Settings → Storage to see sizes, uninstall games you are not playing, or move them to a library folder on another drive.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'default-location',
        title: 'Where Steam puts games on a Mac',
        paragraphs: [
          'Valve’s Mac instructions point to Library/Application Support/Steam in your home folder. Its steamapps folder contains your game downloads and any local save files, and each installed game has its own folder under steamapps/common. Library is hidden by default, so use Go → Go to Folder in Finder to open it.',
          'To see how much space Steam takes up, measure the folder in Terminal. The commands below only report sizes. If you have added library folders on other drives, each of those has its own steamapps folder too.',
        ],
        code: [
          'du -sh "$HOME/Library/Application Support/Steam"',
          'du -sh "$HOME/Library/Application Support/Steam/steamapps/common/"* | sort -h',
        ],
      },
      {
        id: 'storage-manager',
        title: '1. See what each game uses in Steam’s settings',
        paragraphs: [
          'Open Steam, choose Steam → Settings, then select Storage. The Storage Manager shows each library drive and the games installed on it. Some older Valve instructions reach it through Settings → Downloads → Steam Library Folders instead.',
          'Steam’s own figures are the easiest guide to what each game occupies. Start with the large games you have finished or rarely play. Leave some free space afterwards too: Steam needs room to download and apply game updates, and a nearly full disk can stall them.',
        ],
      },
      {
        id: 'uninstall-games',
        title: '2. Uninstall games you are not playing',
        paragraphs: [
          'In your Steam Library, Control-click a game and choose Manage → Uninstall, then confirm. The game stays in your account, so you can install it again later, though that means downloading it in full.',
          'Check your saves first. If a game supports Steam Cloud, its Store page shows a Steam Cloud logo and Steam keeps the synced files for you. Games without it may keep saves locally, and Valve notes that steamapps can hold local save files, so copy anything you want to keep before uninstalling.',
          'To check a game’s cloud setting, Control-click it in your Library, choose Properties, and look under General for the Steam Cloud synchronization setting. Valve notes that when Steam Cloud is turned off for a game, progress that would normally sync is saved only on that Mac.',
        ],
      },
      {
        id: 'move-games',
        title: '3. Move games to another drive instead',
        paragraphs: [
          'In Settings → Storage, click + to add a new library folder, for example on an external SSD. Then select the drive that holds the game, select the game, and click Move. Future installs can go straight to the new folder.',
          'The drive has to be connected whenever you want to play those games. Valve advises against installing Steam itself on an external drive for performance reasons; moving individual game libraries is the supported route.',
        ],
      },
      {
        id: 'avoid-finder-deletion',
        title: 'Avoid deleting Steam folders by hand',
        paragraphs: [
          'Removing a game’s folder from steamapps/common in Finder can leave Steam’s records out of step with what is on the disk, and dragging the Steam app to the Trash does not remove your games. Valve’s Mac removal steps say to keep the steamapps folder if you want your games and local saves; deleting the whole Steam folder removes them.',
          'Use Uninstall inside Steam for individual games. ClearDisk’s storage map and large-files list can show when steamapps is one of the largest folders on the disk, which is a good prompt to open the Storage Manager.',
          'After uninstalling, run the measuring commands again. If a folder for an uninstalled game is still in steamapps/common, look inside before removing it: it may hold saves, mods or screenshots you added yourself. Some games also keep settings and saves outside the Steam folder, so check the game’s own documentation before you tidy up leftovers.',
        ],
      },
    ],
    questions: [
      {
        q: 'Where does Steam store games on a Mac?',
        a: 'Steam keeps games in ~/Library/Application Support/Steam/steamapps, with each installed game in its own folder under steamapps/common. If you added library folders on other drives, each of those has its own steamapps folder too, and Library is hidden by default in Finder.',
      },
      {
        q: 'Will I lose my saves if I uninstall a Steam game?',
        a: 'Not if the game supports Steam Cloud, shown by a Steam Cloud logo on its Store page, since Steam keeps those synced files for you. Games without cloud support may keep saves locally inside steamapps, so copy anything you want to keep before uninstalling.',
      },
      {
        q: 'Can I just delete the Steam folder in Finder to save space?',
        a: "Removing a game's folder from steamapps/common by hand can leave Steam's records out of step with what is actually on disk, and dragging the Steam app to the Trash does not remove your games. Use Uninstall inside Steam for individual games instead.",
      },
      {
        q: 'Can I move my Steam games to an external drive?',
        a: "Yes. In Steam's Settings, Storage tab, click plus to add a new library folder on another drive, then select the drive holding the game, select the game and click Move. The drive needs to stay connected whenever you want to play those games.",
      },
    ],
    related: [
      'uninstall-apps-on-mac',
      'application-support-folder-mac',
      'expand-mac-storage-external-ssd',
      'find-large-files-on-mac',
    ],
    sources: [
      {
        label: 'Steam Support: moving a Steam installation and games',
        url: 'https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327',
      },
      {
        label: 'Steam Support: removing and reinstalling Steam on a Mac',
        url: 'https://help.steampowered.com/en/faqs/view/30EB-87BF-531F-512D',
      },
      {
        label: 'Steam Support: Steam Cloud',
        url: 'https://help.steampowered.com/en/faqs/view/68D2-35AB-09A9-7678',
      },
    ],
  },
  {
    slug: 'apple-tv-downloads-mac',
    title: 'Apple TV downloads on Mac: find and remove them',
    description:
      'Find movies and episodes downloaded in the Apple TV app on Mac, remove them from the Downloaded list, and know what you can download again, including rentals.',
    summary:
      'In the Apple TV app, click Downloaded in the sidebar, hold the pointer over an item, click the More button and choose Delete from Library. Purchases stay available to download again; rentals and subscription titles have their own rules.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'see-downloads',
        title: '1. See what is downloaded',
        paragraphs: [
          'Open the Apple TV app and click Downloaded in the sidebar. Everything listed there is stored on this Mac. Elsewhere in the app, Apple’s help says a download icon next to a movie or episode means it is on your device; without it, the item streams.',
          'For a size overview, open System Settings → General → Storage. Apple notes that some categories, including TV, have a More Info button with details and options for that category.',
        ],
      },
      {
        id: 'delete-downloads',
        title: '2. Remove the downloads you have watched',
        paragraphs: [
          'In Downloaded, hold the pointer over the item you want to remove, click the More button, then click Delete from Library and confirm. Apple describes this as removing the videos you downloaded to the Mac. Work through finished series and movies you are unlikely to rewatch offline.',
          'If an item will not delete, Apple suggests hiding it, or checking whether it came from manual syncing with a device. Hiding removes it from your Library view while you are signed in with that Apple Account.',
          'Downloads are stored per device. Removing a movie from the Mac does not remove a copy you downloaded on an iPhone or iPad, and it does not change your purchase history.',
        ],
      },
      {
        id: 'purchases-and-rentals',
        title: 'What you can download again',
        paragraphs: [
          'Purchased movies and shows can be downloaded again: in the Apple TV app, open Movies or TV Shows under Library, hold the pointer over the title and click the Download button. Titles included with an Apple TV subscription or channel are not purchases and do not appear in that list; availability can also vary by country or region.',
          'Rentals work differently. Apple gives you 30 days to start a rental and 48 hours to finish it once you start, and a rental can be downloaded on one device at a time. Don’t delete a rental you still plan to watch offline unless you have time and a connection to download it again.',
          'If you use Family Sharing, Apple’s steps for downloading again include choosing Family Sharing and a family member’s name to reach their purchases. That makes it reasonable to remove a family purchase you have finished; it can come back the same way.',
        ],
      },
      {
        id: 'automatic-removal',
        title: '3. Let the app remove watched items',
        paragraphs: [
          'Choose TV → Settings, then click Files, and turn on Automatically delete watched movies and TV shows. Downloads are then removed after you play them.',
          'Storage settings also offer Optimize Storage, which Apple says removes Apple TV movies and shows you already watched when space is needed. Both settings act on watched items, so downloads you have not played yet stay until you remove them. The Optimize Storage guide linked below explains what that recommendation changes.',
        ],
      },
      {
        id: 'media-folder',
        title: 'The Media folder and your own videos',
        paragraphs: [
          'The same Files settings show the Media folder location, with Change and Reset buttons, plus Keep Media folder organized and Copy files to Media folder when adding to Library. By default the folder sits in ~/Movies/TV. Apple describes it as where the movies and TV shows you import are stored.',
          'Imported home videos in that folder may be your only copy, so back them up before removing anything. Delete through the Apple TV app rather than Finder so the library does not keep entries for missing files. ClearDisk’s large-files list can show which videos are biggest before you decide.',
        ],
      },
    ],
    questions: [
      {
        q: 'Can I download an Apple TV movie again after deleting it from my Mac?',
        a: "If it's a purchase, yes: open Movies or TV Shows under Library, hold the pointer over the title and click Download. Titles included with an Apple TV subscription or channel are not purchases, so they won't appear in that redownload list, and availability can vary by region.",
      },
      {
        q: 'Is it safe to delete a rented movie before I finish watching it?',
        a: "Only if you're sure you can redownload it in time. Apple gives you 30 days to start a rental and 48 hours to finish it once started, and a rental can only be downloaded on one device at a time, so don't delete one you still plan to watch.",
      },
      {
        q: 'How do I stop Apple TV downloads from building up on my Mac?',
        a: "Go to TV, Settings, then Files, and turn on Automatically delete watched movies and TV shows, which removes downloads after you play them. Storage settings also offers Optimize Storage, which removes shows you've already watched when space is needed, but both only act on watched titles.",
      },
      {
        q: 'Where are my imported home videos stored, and should I delete them?',
        a: "Imported movies and shows live in the Media folder, by default at ~/Movies/TV. Imported home videos there may be your only copy, so back them up before removing anything, and delete through the Apple TV app rather than Finder so the library doesn't keep entries for missing files.",
      },
    ],
    related: [
      'apple-music-downloads-mac',
      'podcasts-taking-up-space-mac',
      'optimize-storage-mac',
      'how-to-check-storage-on-mac',
    ],
    sources: [
      {
        label: 'Apple: delete movies and TV shows in the Apple TV app',
        url: 'https://support.apple.com/en-us/118410',
      },
      {
        label: 'Apple: redownload TV shows and movies that you purchased',
        url: 'https://support.apple.com/en-us/119602',
      },
      {
        label: 'Apple: change Files settings in the Apple TV app on Mac',
        url: 'https://support.apple.com/guide/tvapp-mac/files-settings-tv0f5accea/mac',
      },
    ],
  },
  {
    slug: 'apple-music-downloads-mac',
    title: 'Music taking up space on Mac: downloads and media files',
    description:
      'Free music storage on Mac: remove Apple Music downloads, know when Delete from Library is safe, and check or move the Music Media folder to an external drive.',
    summary:
      'For songs from the Apple Music catalog, use Remove Download: they stay in your library and stream when you are online. Delete from Library removes them everywhere Sync Library is on. Files you imported yourself live in the Music Media folder, which can live on an external drive.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'three-kinds',
        title: 'Downloads, purchases and your own files',
        paragraphs: [
          'Music on a Mac can be three different things. Apple Music catalog downloads are copies of songs you can stream again. iTunes Store purchases can be downloaded again. Songs you imported yourself, such as CD rips or files you bought elsewhere, may be the only copy you have.',
          'Apple says your music is stored in the Music folder in your home folder by default; the library is usually ~/Music/Music, with a Media folder inside. The command below only measures it.',
        ],
        code: ['du -sh ~/Music/Music'],
      },
      {
        id: 'remove-download',
        title: '1. Remove downloads you can stream instead',
        paragraphs: [
          'Open the Music app and click Songs or Albums in the sidebar. Click the More button next to a song, or over an album, and choose Remove Download. Apple says this removes the download from only your Mac.',
          'Catalog songs stay in your library afterwards but play only when the Mac is connected to the internet. Keep downloads for music you want offline, and remove the rest.',
          'Music you bought from the iTunes Store is also a candidate when space is short: Apple’s delete-music article links to steps for downloading purchases again. Imported songs are different, because Music has no copy to give back if the only file is deleted.',
        ],
      },
      {
        id: 'delete-from-library',
        title: '2. Delete from Library only when you mean it',
        paragraphs: [
          'Delete from Library removes music from your library, including playlists. If Sync Library is on, Apple notes it is also deleted from your other devices. That is a library change, not just a storage change.',
          'Selecting a song and pressing Delete asks you to choose. Keep File removes it from the library only; Move to Trash deletes the file from the Mac the next time you empty the Trash. For imported music without a backup, that deletion is permanent.',
        ],
      },
      {
        id: 'files-settings',
        title: '3. Check where the Media folder is',
        paragraphs: [
          'Choose Music → Settings, then click Files. Media Location shows where imported songs are stored, with Change and Reset buttons. Keep Media folder organized sorts files into artist and album folders, and Copy files to Media folder when adding to library controls whether Music makes its own copy of files you add.',
          'Changing Media Location affects new imports only; songs already imported stay where they are. Apple recommends not moving the Music folder or the folders inside it by hand, because Music then loses track of the files.',
          'To find where a particular song lives, select it and choose Song → Get Info; the File pane shows its location. File → Show in Finder opens it. If Show in Finder is missing, Apple says the song may be in your music library but not on this Mac, in which case it is not using local space.',
        ],
      },
      {
        id: 'external-drive',
        title: '4. Keep a library on an external drive',
        paragraphs: [
          'Apple’s guides support keeping a music library on external storage. First choose File → Library → Organize Library and select Consolidate files. Apple notes that the originals stay where they were and copies go into the Media folder, so disk use can rise until you tidy up. Quit Music and copy the library folder, usually ~/Music/Music, to the external drive.',
          'Then hold Option while you open Music, click Choose Library, and select the copy on the external drive. Play a few songs and check playlists before removing the original, and keep a backup. The drive must be connected whenever you use that library. ClearDisk’s Music & Audio category can show how much audio is on the disk before you start.',
        ],
      },
    ],
    questions: [
      {
        q: "What's the difference between Remove Download and Delete from Library in Music?",
        a: "Remove Download only removes the local copy from your Mac; catalog songs stay in your library and play again once you're online. Delete from Library removes the song from your library and playlists entirely, and if Sync Library is on it's deleted from your other devices too.",
      },
      {
        q: 'Is it safe to delete songs I imported myself, like CD rips?',
        a: 'Not without a backup. Imported songs may be the only copy you have, since Music has no copy to give back if that file is deleted, unlike catalog downloads or iTunes Store purchases, which can both be downloaded again.',
      },
      {
        q: 'Can I move my Music library to an external drive?',
        a: 'Yes. Choose File, Library, Organize Library, then Consolidate files, quit Music, copy the library folder from ~/Music/Music to the external drive, then hold Option while opening Music and choose that copy as your library. Keep the drive connected and keep a backup.',
      },
      {
        q: 'Why did deleting a song in Music ask me to choose an option?',
        a: 'Pressing Delete on a selected song offers Keep File, which removes it from the library only, or Move to Trash, which deletes the file from your Mac the next time you empty the Trash. For imported music without a backup, choosing Move to Trash is permanent.',
      },
    ],
    related: [
      'apple-tv-downloads-mac',
      'podcasts-taking-up-space-mac',
      'expand-mac-storage-external-ssd',
      'clear-spotify-cache-mac',
    ],
    sources: [
      {
        label: 'Apple: delete music in the Apple Music app',
        url: 'https://support.apple.com/en-us/102344',
      },
      {
        label: 'Apple: change where your music files are stored on Mac',
        url: 'https://support.apple.com/guide/music/change-where-music-files-are-stored-mus69248042d/mac',
      },
      {
        label: 'Apple: use multiple libraries in Music on Mac',
        url: 'https://support.apple.com/guide/music/use-multiple-libraries-mus7663a920a/mac',
      },
    ],
  },
  {
    slug: 'podcasts-taking-up-space-mac',
    title: 'Podcasts taking up space on Mac: remove downloads',
    description:
      'Remove downloaded podcast episodes on Mac, then change Podcasts settings so played episodes are deleted and new ones stop piling up on your startup disk.',
    summary:
      'In Podcasts, click Downloaded in the sidebar, click the More button at the top right and choose Remove All Downloads, or remove shows and episodes one by one. To stop the build-up, turn on Remove Played Downloads and limit Automatically Download in Podcasts → Settings → General.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'why-it-grows',
        title: 'Why Podcasts grows',
        paragraphs: [
          'The Podcasts app can download new episodes automatically for the shows you follow, and it downloads saved episodes by default. Over months, especially with video podcasts, those files add up without you downloading anything by hand. The steps below follow Apple’s current Podcasts guide; older releases can place some settings differently.',
          'Storage settings give a quick view: open System Settings → General → Storage and look for Podcasts. Apple notes that Podcasts is one of the categories with a More Info button for details.',
        ],
      },
      {
        id: 'remove-downloads',
        title: '1. Remove downloaded episodes',
        paragraphs: [
          'Open Podcasts and click Downloaded in the sidebar. To remove one episode, select the show, click the More button next to the episode and choose Remove Download. To clear a whole show, select it, click the More button at the top right, choose Remove Downloads and confirm.',
          'To clear everything, click the More button at the top right, choose Remove All Downloads, then Remove Downloads to confirm. Apple says episodes removed from the Downloaded tab are deleted from your Mac. Unsaving an episode does not remove its download, so use these steps instead.',
          'Hide Played Episodes, in the same More menu, only hides episodes from view. It frees no space, so use Remove Download or Remove All Downloads when storage is the goal.',
        ],
      },
      {
        id: 'change-settings',
        title: '2. Change the settings that cause the build-up',
        paragraphs: [
          'Choose Podcasts → Settings and click General. Remove Played Downloads deletes downloaded episodes 24 hours after you play them. Automatically Download lets you turn off automatic downloads or choose how many episodes to keep. Deselect Download When Saving if you save episodes as a reminder rather than for offline listening.',
          'Individual shows can override this. Click Shows in the sidebar, select a show, click the More button and choose Settings to set its Automatically Download and Remove Played Downloads options, or choose Turn Off Automatic Downloads.',
          'A per-show setting is useful for daily news shows or long video series that you never replay: keep only the latest episodes, and let everything played be removed. Shows you listen to on long trips can keep more.',
        ],
      },
      {
        id: 'following-stays',
        title: 'Removing downloads keeps your shows',
        paragraphs: [
          'Removing a download does not unfollow the show. Its episodes still appear and stream when you are online. With Sync Library on, the shows you follow and your play position stay in step across your devices.',
          'If you want a show gone entirely, unfollow it as well, otherwise automatic downloads bring new episodes back.',
          'Saved episodes work the same way. Removing the download of a saved episode frees the space, and you can still find and stream it later from Saved. If you save episodes only as a reminder, turning off Download When Saving stops each one from taking disk space.',
        ],
      },
      {
        id: 'where-files-live',
        title: 'Where the files live',
        paragraphs: [
          'The current Podcasts app keeps its data in ~/Library/Group Containers/243LU875E5.groups.com.apple.podcasts. The command below only measures it. A large number here usually means downloaded episodes.',
          'Don’t delete files inside that folder in Finder. The app keeps a database of what it has downloaded, and Remove All Downloads updates both the files and that record. Run the command again after removing downloads to see the difference; Storage settings may take a little longer to update.',
        ],
        code: [
          'du -sh "$HOME/Library/Group Containers/243LU875E5.groups.com.apple.podcasts"',
        ],
      },
    ],
    questions: [
      {
        q: 'Does hiding played episodes in Podcasts free up space?',
        a: 'No. Hide Played Episodes only hides episodes from view and frees no space. To actually free space, use Remove Download for a single episode or Remove All Downloads to clear everything at once.',
      },
      {
        q: 'How do I stop Podcasts from automatically downloading so many episodes?',
        a: 'In Podcasts, Settings, General, turn off Automatically Download or choose how many episodes to keep, and turn on Remove Played Downloads to delete episodes 24 hours after you play them. Individual shows can also override these settings from the Shows list.',
      },
      {
        q: "If I remove a podcast's downloads, do I stop getting new episodes?",
        a: "No. Removing a download doesn't unfollow the show, so its episodes still appear and stream when you're online, and with Sync Library on your play position stays in sync across devices. If you want a show gone entirely, unfollow it too.",
      },
      {
        q: 'Can I safely delete files in the Podcasts app folder in Finder?',
        a: "No, don't delete files inside that Group Containers folder by hand. The app keeps a database of what it has downloaded, and only Remove All Downloads inside Podcasts updates both the files and that record correctly.",
      },
    ],
    related: [
      'apple-music-downloads-mac',
      'apple-tv-downloads-mac',
      'containers-folder-mac',
      'optimize-storage-mac',
    ],
    sources: [
      {
        label: 'Apple: save, download, or remove episodes in Podcasts on Mac',
        url: 'https://support.apple.com/guide/podcasts/save-download-or-remove-episodes-poda4f6be01/mac',
      },
      {
        label: 'Apple: change settings in Podcasts on Mac',
        url: 'https://support.apple.com/guide/podcasts/change-settings-pod4130f48/mac',
      },
      {
        label: 'Apple: free up storage space on Mac',
        url: 'https://support.apple.com/en-us/102624',
      },
    ],
  },
];
