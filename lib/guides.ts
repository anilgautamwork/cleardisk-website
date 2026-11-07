import { icloudGuides } from './guides-icloud.ts';
import { storageGuides } from './guides-storage.ts';
import { developerGuides } from './guides-developer.ts';
import { maintenanceGuides } from './guides-maintenance.ts';
import { driveGuides } from './guides-drives.ts';
import { moreDeveloperGuides } from './guides-developer-more.ts';
import { creativeGuides } from './guides-creative.ts';
import { everydayAppGuides } from './guides-everyday-apps.ts';
import { systemFolderGuides } from './guides-system-folders.ts';
import { memoryDriveGuides } from './guides-memory-drives.ts';
import { moreFileGuides } from './guides-files-more.ts';
import { dockerGuides } from './guides-docker.ts';
import { devQaGuides } from './guides-dev-qa.ts';
import { fileQaGuides } from './guides-qa-files.ts';
import { systemQaGuides } from './guides-qa-system.ts';
import { spaceQaGuides } from './guides-qa-space.ts';
export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  links?: { label: string; href: string }[];
  code?: string[];
  items?: string[];
  figure?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
};
export type GuideQuestion = { q: string; a: string };
export type Guide = {
  slug: string;
  title: string;
  h1?: string;
  description: string;
  summary: string;
  published: string;
  updated: string;
  sections: GuideSection[];
  // Short answers to the searches people make around this topic. Rendered as
  // a "Common questions" section with one heading per question and emitted
  // as FAQPage schema, so the visible text and the markup always match.
  questions?: GuideQuestion[];
  related: string[];
  sources: { label: string; url: string }[];
};
const storage = {
  label: 'Apple: free up storage space on Mac',
  url: 'https://support.apple.com/en-us/102624',
};
const definition = {
  label: 'Apple: understand Storage settings',
  url: 'https://support.apple.com/en-gb/guide/mac-help/mchl3d437fbc/mac',
};
const snapshots = {
  label: 'Apple: Time Machine local snapshots',
  url: 'https://support.apple.com/en-euro/102154',
};

const foundationGuides: Guide[] = [
  {
    slug: 'clear-system-data-on-mac',
    title: 'How to Clear System Data on Mac Safely (Step-by-Step)',
    h1: 'How to clear System Data on Mac',
    description:
      'Learn how to clear System Data on Mac safely without deleting files you need. Find what is inside 100GB+ System Data, stop recurring growth, and free space.',
    summary:
      'To clear System Data on Mac safely, check System Settings → General → Storage, identify the largest folders in ~/Library/Caches and ~/Library/Application Support, and remove only rebuildable app data or old backups.',
    published: '2026-09-05',
    updated: '2026-11-07',
    sections: [
      {
        id: 'start-with-the-number',
        title: '1. Check what is actually running out',
        paragraphs: [
          'Open System Settings → General → Storage. Note the available space and the size of System Data. The second number tells you how macOS grouped some files; the first tells you how much room you have to work.',
          'A large category is a reason to investigate, not a target to erase. If an installation is blocked or your Mac cannot save a file, start with the urgent storage-full guide linked below.',
        ],
        links: [
          {
            label: 'What is System Data on Mac and what belongs inside it',
            href: '/what-is-system-data-on-mac',
          },
          {
            label: 'Mac storage full: what to delete first',
            href: '/mac-storage-full',
          },
        ],
      },
      {
        id: 'identify-the-source',
        title: '2. Find a source you recognize',
        paragraphs: [
          'Think about the work this Mac does. Development tools, creative apps, downloaded media and local device backups leave different storage footprints. Start with the applications you use rather than treating every hidden folder as disposable.',
          'ClearDisk’s free scan groups the files it finds and lets you inspect paths and sizes. Its System Data view labels groups Safe, Review or Leave it. Check the individual paths even in a Safe group. Review groups need a decision about the files; Leave it groups are there to explain usage, not invite removal. These labels do not mean that every byte in Apple’s category is removable.',
        ],
        links: [
          {
            label: 'See our sample scan and what its size filter includes',
            href: '/find-large-files-on-mac#sample-scan',
          },
        ],
        items: [
          'Use a home-folder or full-disk scan for ClearDisk’s System Data view. In our ClearDisk 2.0.0 selected-folder test, that view was unavailable; a scan of one Downloads folder cannot explain the whole Mac.',
          'Look at an app’s own storage or download settings before changing its files in Finder.',
          'Review old local device backups only when you know which restore points you still need.',
          'For development files, distinguish generated build data from projects and release archives.',
          'Leave unfamiliar system resources and protected folders alone.',
        ],
      },
      {
        id: 'remove-deliberately',
        title: '3. Remove a small, understood selection',
        paragraphs: [
          'Close the app that owns the files before cleanup. Review the selected paths, keep a backup of anything irreplaceable, and begin with items you know you can replace or no longer need.',
          'ClearDisk’s review dialog offers Move to Trash and Remove Permanently. Choose Move to Trash if you want the option to undo while the files remain there. In ClearDisk 2.0.0, permanent removal requires typing delete, then clicking the red Remove Permanently button. It skips the Trash and cannot be undone. Scanning is free; the cleanup license costs $10 once.',
        ],
      },
      {
        id: 'check-the-result',
        title: '4. Check the result, then decide about Trash',
        paragraphs: [
          'Test the affected app and make sure your important work is still available. Files in Trash still occupy storage. Only empty it after reviewing its contents and accepting that the removal is permanent.',
          'Compare available space after cleanup, then rescan if needed. Do not expect the System Data bar to match a sum of selected folders exactly: category accounting, permissions and macOS-managed storage can produce different figures.',
        ],
      },
      {
        id: 'system-data-too-large',
        title: 'System Data taking up 100GB or more?',
        paragraphs: [
          'Whether Storage settings shows 100GB, 150GB, 200GB or half your drive under System Data on a MacBook Air, MacBook Pro or desktop Mac, there is no universal safe limit. A development or video-editing Mac and a Mac used mainly for email have very different footprints; the diagnosis comes from which folders hold the bytes.',
          'Match the largest folders to how you use your Mac before removing anything:',
        ],
        items: [
          'Develop apps: inspect Xcode DerivedData, iOS simulators, Docker disk images and package caches, keeping project source and release archives intact.',
          'Edit video, audio or photos: use your creative app’s media cache and scratch-disk controls rather than deleting project folders in Finder.',
          'Back up an iPhone or iPad locally: review device backups in Finder or ~/Library/Application Support/MobileSync/Backup before removing older copies.',
          'Use many desktop apps: inspect ~/Library/Caches and ~/Library/Application Support, and never assume everything in Application Support is a disposable cache.',
          'Use Time Machine: remember that macOS counts local snapshots as available space and thins them automatically.',
        ],
        links: [
          {
            label: 'Clear Xcode DerivedData and developer build caches',
            href: '/clear-xcode-derived-data',
          },
          {
            label: 'Delete old iPhone and iPad backups on Mac',
            href: '/delete-iphone-backups-on-mac',
          },
        ],
      },
      {
        id: 'if-it-returns',
        title: 'Why System Data keeps growing after cleanup',
        paragraphs: [
          'When System Data fills back up after you clean it, deleting the same folder again only hides the symptom. Record a baseline of available space, the System Data figure and the largest paths in a local scan, then compare after one normal piece of work—such as building a project, importing media or syncing mail.',
          'Once a specific folder grows, check that application’s own cache limit, download retention, project location or logging settings. Also confirm whether your previous cleanup moved files to Trash without emptying it, and remember that ClearDisk reports a Time Machine local snapshot count rather than a guaranteed amount of recoverable space.',
        ],
        links: [
          {
            label: 'Inspect macOS log files in ~/Library/Logs and /var/log',
            href: '/mac-log-files',
          },
          {
            label: 'Clean Docker disk space and virtual disks on Mac',
            href: '/clean-docker-disk-space-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'Is it safe to delete System Data on a Mac?',
        a: 'System Data is a storage category, not one folder, so there is nothing to safely empty in one action. Check the files behind the number, close the owning app first, and start with a small selection you recognize. Leave unfamiliar system resources and protected folders alone.',
      },
      {
        q: 'How do I clear System Data on Mac without breaking anything?',
        a: 'Open System Settings, General, Storage to see the available space and the System Data size, then look at development tools, creative apps, downloads and backups for a source you recognize. Close the owning app, keep a backup of anything irreplaceable, and start with items you know you no longer need.',
      },
      {
        q: 'Why does my Mac show 100GB or more of System Data?',
        a: "A 100GB or 200GB System Data figure usually comes from how you use the Mac, such as developer build folders, creative app media caches, local iPhone or iPad backups, or Time Machine snapshots. Match the largest folder to an app you recognize and use its cleanup controls rather than guessing from the category total.",
      },
      {
        q: 'Why does System Data keep growing back after I clean it?',
        a: 'Repeatedly deleting the same files hides the symptom rather than fixing the cause. Compare a baseline scan before and after a normal activity like building a project or downloading media, find the specific folder that grew, and adjust that app’s cache limit or download settings.',
      },
      {
        q: 'Does emptying the Trash free up System Data space right away?',
        a: 'No. Moving files to the Trash keeps them counted as used space until you empty the Trash yourself, and even then the System Data bar may not fall by the exact amount you removed. Category accounting, permissions and macOS-managed storage can produce different figures than a simple sum of what you deleted.',
      },
      {
        q: 'Can ClearDisk permanently delete System Data files?',
        a: 'Yes. In ClearDisk 2.0.0, Remove Permanently requires typing delete and clicking the red button, and it skips the Trash entirely, so the removal cannot be undone. Move to Trash is the reversible option, and the cleanup license itself costs $10 once after a free scan.',
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'mac-storage-full',
      'check-disk-space-mac-terminal',
      'delete-iphone-backups-on-mac',
    ],
    sources: [storage, definition, snapshots],
  },
  {
    slug: 'what-is-system-data-on-mac',
    title: 'What Is System Data on Mac? Where It Lives & What’s Safe',
    h1: 'What is System Data on Mac?',
    description:
      'What is System Data on Mac, where it lives in macOS storage, why its size changes, and how to tell rebuildable caches from app files you should keep.',
    summary:
      'System Data on a Mac is the catch-all macOS storage category for files that do not fit Apps, Documents or Photos—mostly caches, logs, temporary files, VM images and ~/Library support data.',
    published: '2026-09-05',
    updated: '2026-11-07',
    sections: [
      {
        id: 'see-system-data',
        title: 'How to see System Data in Mac storage',
        paragraphs: [
          'On macOS Ventura 13 or later, choose Apple menu → System Settings → General → Storage. Look for System Data in the category list. On older macOS versions, open About This Mac → Storage instead; the catch-all category may be called Other.',
          'System Data shows a total without a file list or a delete button. To investigate your own files, use Finder or the app that created them. A scanner can help locate large paths, but its results depend on access permissions and will not necessarily equal Apple’s category total.',
        ],
        links: [
          {
            label: 'Check storage categories step by step',
            href: '/how-to-check-storage-on-mac',
          },
          { label: 'More System Data questions', href: '/faq/system-data' },
        ],
      },
      {
        id: 'inside-the-category',
        title: 'What belongs in System Data?',
        paragraphs: [
          'Apple lists caches, logs, temporary files, virtual-memory files and other runtime resources among its examples. Fonts, plug-ins and app support data can also belong here. There is no single folder whose contents equal the total.',
          'For cleanup decisions, a file’s purpose matters more than its category. App support data can include saved work and settings. Use the owning app’s controls or documentation before changing it.',
        ],
        items: [
          'macOS is a separate category for the operating system and its built-in apps. System Data does not mean the size of macOS itself.',
          'Mail and Messages have their own categories, including attachments. Local device backups appear under iOS Files. Do not automatically attribute these files to System Data.',
          'A storage app may group files differently. ClearDisk’s System Data view includes a row for iPhone and iPad backups; that does not reproduce Apple’s category boundaries.',
        ],
        links: [
          {
            label: 'Inspect Library caches and their limits',
            href: '/library-caches-folder-mac',
          },
          {
            label: 'Understand Application Support data',
            href: '/application-support-folder-mac',
          },
        ],
      },
      {
        id: 'why-it-varies',
        title: 'Why the number can change',
        paragraphs: [
          'Your Mac’s workload changes. An app may download content, generate previews, build a project or retain diagnostic logs. Some of that work happens in the background, so a larger storage figure does not always correspond to a file you consciously saved.',
          'Compare the same measurement before and after a specific activity. A file scan is most useful when it helps identify the actual path and the application responsible, rather than merely giving you a second large total.',
        ],
      },
      {
        id: 'different-measurements',
        title: 'Why two storage tools may disagree',
        paragraphs: [
          'Different tools report a file’s logical size, its allocated disk space or a category total. ClearDisk measures allocated file sizes in the locations it can scan. A protected or skipped path can leave its results incomplete; additional permissions do not establish that its total equals Apple’s System Data figure.',
          'Apple counts Time Machine local snapshot space as available and removes snapshots as they age or space is needed. ClearDisk shows their count, not their size. Neither a count nor a difference between two storage totals establishes how many bytes you can reclaim.',
        ],
      },
      {
        id: 'cloud-is-different',
        title: 'Mac storage and iCloud storage are different',
        paragraphs: [
          'A nearly full Mac drive and a nearly full iCloud account are different problems. Confirm which warning you are seeing before choosing a fix. ClearDisk analyzes local Mac files; it is not an iCloud quota manager or a sync-repair tool.',
          'If a file belongs to a synced folder, understand the service’s deletion behavior before removing it. Keeping an item in the cloud and deleting it everywhere are different actions.',
        ],
      },
      {
        id: 'what-to-do',
        title: 'What to do with this information',
        paragraphs: [
          'If you have enough working space, a large System Data number alone does not require immediate cleanup. If you need room, identify the largest understandable contributors, review them, and remove only what you no longer need.',
          'Before changing anything, record the date, available space and System Data total from the same volume in Storage settings. If a scanner reports less, check its selected location and any access errors. Keep the difference unresolved until you can identify what accounts for it.',
          'For example, suppose Storage settings shows 80 GB of System Data and a scanner finds 30 GB in selected folders. The 50 GB difference is not evidence of 50 GB of hidden junk. These are illustrative numbers, not a ClearDisk scan or a savings estimate.',
        ],
        links: [
          {
            label: 'How to clear System Data on Mac step by step',
            href: '/clear-system-data-on-mac',
          },
          {
            label: 'Deal with a full startup disk',
            href: '/mac-storage-full',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'What is System Data in Mac storage?',
        a: 'It is the category for files that do not fit another storage category, such as caches, logs, temporary files and app support data. Its size is not an estimate of removable junk, and it does not correspond to one folder.',
      },
      {
        q: 'Is it okay to delete System Data on Mac?',
        a: 'Do not delete by category. Identify each file and use the owning app’s cleanup controls when available. Keep needed backups and saved work; an old date or cache label does not make a file disposable. Leave unfamiliar system-managed files alone.',
      },
      {
        q: 'Why can’t I open System Data to delete files?',
        a: 'Storage settings displays this category as a total without a file-removal control. Inspect identifiable files in Finder or the app that owns them. Categories with an information button provide their own management options; a missing button does not mean a permission error.',
      },
      {
        q: 'How do I get rid of 100GB of System Data?',
        a: 'A 100GB category does not mean 100GB can be removed. Find the largest recognizable contributors, check backups and saved work, and make one small, understood change. Compare available space afterward; there is no guaranteed amount to recover.',
      },
    ],
    related: [
      'other-storage-on-mac',
      'clear-system-data-on-mac',
      'how-to-check-storage-on-mac',
      'show-library-folder-mac',
      'mac-storage-glossary',
    ],
    sources: [definition, storage, snapshots],
  },
  {
    slug: 'mac-storage-full',
    title: 'Mac Storage Full? What to Delete First (Safe Order)',
    h1: 'Mac storage full: what to check and delete first',
    description:
      'Mac storage full and not sure what to delete first? Follow this safe sequence to check usable space, clear large files, empty Trash, and inspect System Data.',
    summary:
      'When your Mac storage is full, start with files you recognize in Downloads and Applications, empty the Trash, and then inspect System Data and large folders before deleting anything else.',
    published: '2026-09-05',
    updated: '2026-11-07',
    sections: [
      {
        id: 'check-the-warning',
        title: '1. Confirm which storage is full',
        paragraphs: [
          'Read the warning carefully. Your Mac drive, an external drive and your iCloud account have separate capacities. A local cleaner cannot fix a full cloud quota simply by clearing Mac caches.',
          'Open System Settings → General → Storage and look at available space. If a download or installer needs more room, use its stated requirement rather than a universal target copied from a cleanup article.',
        ],
        links: [
          {
            label: 'Check your Mac’s storage and available space',
            href: '/how-to-check-storage-on-mac',
          },
          {
            label: 'If the warning is about iCloud storage instead',
            href: '/icloud-storage-full-but-not-mac',
          },
        ],
      },
      {
        id: 'recover-working-room',
        title: '2. Review familiar files first',
        paragraphs: [
          'Start with obvious candidates you can evaluate: old downloads, installers you can obtain again, or large files you have independently backed up. Inspect the file before deciding; size does not make something unimportant.',
          'If you choose to move work to another drive, verify the destination copy opens before removing the original. Be particularly careful with libraries and synced folders, which may need an application-specific move workflow.',
        ],
        items: [
          'Review Downloads and files you intentionally saved.',
          'Use an application’s own controls to remove offline downloads or unused content.',
          'Keep required backups and original project files.',
          'Avoid changing protected system folders to make space.',
        ],
        links: [
          {
            label: 'Find large files: built-in tools and our sample scan',
            href: '/find-large-files-on-mac#sample-scan',
          },
          {
            label: 'Keep your photos while reducing local storage',
            href: '/free-up-space-without-deleting-files#keep-your-photos',
          },
        ],
      },
      {
        id: 'after-deleting',
        title: '3. If storage is still full after deleting files',
        paragraphs: [
          'Check Trash. A move to Trash is reversible storage relocation, not immediate space recovery. Review everything in it before choosing permanent removal.',
          'If Trash is already empty, compare the same available-space measurement again and inspect the remaining large paths. Another app may be writing new data while you clean.',
        ],
        links: [
          {
            label: 'See what Move to Trash and Put Back actually do',
            href: '/mac-storage-not-updating-after-deleting-files#sample-trash',
          },
          {
            label: 'How to free up space on Mac when the disk stays full',
            href: '/free-up-space-on-mac',
          },
        ],
      },
      {
        id: 'find-what-remains',
        title: '4. Investigate the unexplained remainder',
        paragraphs: [
          'If the biggest remaining category is System Data, switch from deleting familiar files to identifying its contributors. ClearDisk’s free scan can show named groups, paths and large files without uploading your scan results.',
          'You remain responsible for choosing what to remove. Some files support active applications or system operation. The scanner is useful because it helps make that choice informed, not because everything it finds should go.',
        ],
        links: [
          {
            label: 'How to clear System Data on Mac by file and app',
            href: '/clear-system-data-on-mac',
          },
          {
            label: 'Compare built-in tools, file scanners and Mac cleaners',
            href: '/best-free-mac-cleaner',
          },
        ],
      },
      {
        id: 'before-updating',
        title: '5. Before trying the install or update again',
        paragraphs: [
          'Save your work, verify important files are backed up, and confirm that the required space is available. If the Mac has no room even for a small utility, use its built-in Storage and Finder tools first.',
          'Apple’s storage guidance includes additional built-in options for temporary working space. If storage errors persist or the disk behaves abnormally, seek support rather than repeatedly removing unfamiliar files.',
        ],
      },
    ],
    questions: [
      {
        q: 'Why is my Mac storage full but iCloud says it has space?',
        a: 'Free space in iCloud does not add capacity to your Mac’s physical drive. Downloaded cloud files can still occupy local storage. Check System Settings → General → Storage, then review what needs to remain offline. Photos optimization and iCloud Drive download removal use different controls; do not delete synced originals just to remove a local copy.',
      },
      {
        q: 'What should I delete first when my Mac storage is full?',
        a: 'Start with files you can evaluate yourself: old downloads, installers you can get again, or large files you have already backed up elsewhere. If you move work to another drive, verify the copy opens before removing the original, since libraries and synced folders need their own app-specific move process.',
      },
      {
        q: 'I emptied the Trash but my Mac is still full, what next?',
        a: 'Confirm which drive you cleared, compare available space again, and check whether an app is writing new files. Storage categories update automatically, without a fixed refresh deadline. Time Machine local snapshots count as available space. If a scan shows little, check its scope and permissions before removing more files.',
      },
      {
        q: "Is it safe to use a free Mac scanner to find what's filling my disk?",
        a: 'A free scan such as ClearDisk can show named groups, paths and large files without uploading your results, which helps make an informed choice. You still decide what to remove, since some of what it finds supports active applications or system operation rather than being safe to delete.',
      },
    ],
    related: [
      'disk-almost-full-notification-mac',
      'clear-system-data-on-mac',
      'how-to-check-storage-on-mac',
      'not-enough-space-to-update-macos',
      'mac-storage-full-after-macos-update',
    ],
    sources: [storage],
  },
];
const deeperGuides: Record<string, string> = {
  'clear-system-data-on-mac': 'find-large-files-on-mac',
  'what-is-system-data-on-mac': 'clear-browser-cache-mac',
  'mac-storage-full': 'purgeable-space-on-mac',
};
for (const guide of foundationGuides)
  guide.related.push(deeperGuides[guide.slug]);
export const guides: Guide[] = [
  ...foundationGuides,
  ...maintenanceGuides,
  ...storageGuides,
  ...developerGuides,
  ...icloudGuides,
  ...driveGuides,
  ...moreDeveloperGuides,
  ...creativeGuides,
  ...everydayAppGuides,
  ...systemFolderGuides,
  ...memoryDriveGuides,
  ...moreFileGuides,
  ...dockerGuides,
  ...devQaGuides,
  ...fileQaGuides,
  ...systemQaGuides,
  ...spaceQaGuides,
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

const bySlugs = (slugs: string[]): Guide[] =>
  slugs.map((slug) => {
    const guide = getGuide(slug);
    if (!guide) throw new Error('Missing guide in cluster: ' + slug);
    return guide;
  });

export type GuideGroup = {
  id: string;
  cluster: string;
  title: string;
  description: string;
  pillar: { href: string; label: string };
  secondaryPillar?: { href: string; label: string };
  guides: Guide[];
};

export const guideGroups: GuideGroup[] = [
  {
    id: 'system-data',
    cluster: 'System Data',
    title: 'System Data & macOS storage categories',
    description:
      'What macOS counts inside System Data, Other and Purgeable space, and how to clear System Data safely without breaking active apps.',
    pillar: {
      href: '/what-is-system-data-on-mac',
      label: 'what is System Data on Mac',
    },
    secondaryPillar: {
      href: '/clear-system-data-on-mac',
      label: 'how to clear System Data on Mac',
    },
    guides: bySlugs([
      'clear-system-data-on-mac',
      'what-is-system-data-on-mac',
      'mac-storage-glossary',
      'purgeable-space-on-mac',
      'other-storage-on-mac',
      'ios-files-on-mac',
      'documents-storage-on-mac',
      'macos-storage-category-size',
    ]),
  },
  {
    id: 'storage-full',
    cluster: 'Storage full',
    title: 'Storage full & macOS update space',
    description:
      'Step-by-step triage when your startup disk is almost full, a macOS update says there is not enough space, or you need to free up space on Mac fast.',
    pillar: {
      href: '/mac-storage-full',
      label: 'Mac storage full: what to delete first',
    },
    secondaryPillar: {
      href: '/free-up-space-on-mac',
      label: 'how to free up space on Mac',
    },
    guides: bySlugs([
      'mac-storage-full',
      'free-up-space-on-mac',
      'not-enough-space-to-update-macos',
      'delete-macos-installer-mac',
      'mac-storage-full-after-macos-update',
      'optimize-storage-mac',
      'mac-wont-start-disk-full',
      'disk-almost-full-notification-mac',
      'find-what-is-filling-disk-mac',
      'free-up-space-without-deleting-files',
      'how-much-free-space-to-keep-mac',
    ]),
  },
  {
    id: 'check-storage',
    cluster: 'Check storage',
    title: 'Check storage, find large files & disk analyzers',
    description:
      'How to check storage on Mac in System Settings, Finder and Terminal, find large or duplicate files, and compare visual disk space analyzers.',
    pillar: {
      href: '/how-to-check-storage-on-mac',
      label: 'how to check storage on Mac',
    },
    secondaryPillar: {
      href: '/find-large-files-on-mac',
      label: 'how to find large files on Mac',
    },
    guides: bySlugs([
      'how-to-check-storage-on-mac',
      'find-large-files-on-mac',
      'disk-space-analyzer-mac',
      'check-disk-space-mac-terminal',
      'mac-storage-not-updating-after-deleting-files',
      'ncdu-on-mac',
      'mac-storage-calculating',
      'how-much-storage-mac',
      'find-duplicate-files-mac',
      'show-folder-sizes-finder-mac',
    ]),
  },
  {
    id: 'caches',
    cluster: 'Caches',
    title: 'Caches, Library folders & logs',
    description:
      'How to clear cache on Mac across user, browser and system folders, and how to tell ~/Library/Caches apart from Application Support and Containers.',
    pillar: {
      href: '/clear-cache-on-mac',
      label: 'how to clear cache on Mac',
    },
    guides: bySlugs([
      'clear-cache-on-mac',
      'library-caches-folder-mac',
      'application-support-folder-mac',
      'containers-folder-mac',
      'clear-browser-cache-mac',
      'sleepimage-file-mac',
      'private-var-folders-mac',
      'mac-log-files',
      'remove-language-files-mac',
    ]),
  },
  {
    id: 'icloud-drive',
    cluster: 'iCloud Drive',
    title: 'iCloud Drive sync, local copies & cloud storage',
    description:
      'Diagnose iCloud Drive not syncing on Mac, understand status icons and com.apple.bird, and free local SSD space without deleting cloud originals.',
    pillar: {
      href: '/icloud-doctor',
      label: 'diagnose iCloud Drive not syncing on Mac with iCloud Doctor',
    },
    secondaryPillar: {
      href: '/icloud-drive-taking-up-space-on-mac',
      label: 'iCloud Drive taking up space on Mac',
    },
    guides: bySlugs([
      'icloud-drive-taking-up-space-on-mac',
      'cloud-drive-taking-up-space-on-mac',
      'icloud-drive-stuck-uploading-mac',
      'icloud-drive-status-icons-mac',
      'icloud-storage-full-but-not-mac',
      'icloud-remove-download-missing-mac',
      'keep-icloud-files-downloaded-mac',
      'archive-icloud-drive-to-mac',
      'icloud-desktop-documents-files-missing-mac',
      'recover-deleted-icloud-drive-files-mac',
      'com-apple-bird-taking-space',
    ]),
  },
  {
    id: 'developer-storage',
    cluster: 'Developer storage',
    title: 'Developer storage: Xcode, Docker, Homebrew & toolchains',
    description:
      'Reclaim developer storage on Mac across Xcode DerivedData, iOS simulators, Docker disk images, Homebrew, npm, pnpm, Cargo, Conda, Android Studio and local AI models.',
    pillar: {
      href: '/developer-storage-on-mac',
      label: 'developer storage on Mac',
    },
    secondaryPillar: {
      href: '/clear-xcode-derived-data',
      label: 'clear Xcode Derived Data on Mac',
    },
    guides: bySlugs([
      'developer-storage-on-mac',
      'clear-xcode-derived-data',
      'remove-unused-ios-simulators',
      'clean-docker-disk-space-mac',
      'find-node-modules-folders-mac',
      'clean-homebrew-cache-mac',
      'clear-npm-cache-mac',
      'clear-gradle-cache-mac',
      'clear-cocoapods-cache-mac',
      'clear-pip-cache-mac',
      'clean-conda-disk-space-mac',
      'ollama-models-location-mac',
      'android-studio-disk-space-mac',
      'clear-yarn-pnpm-cache-mac',
      'clear-cargo-cache-mac',
      'clear-jetbrains-cache-mac',
      'virtual-machine-disk-space-mac',
      'delete-docker-images-mac',
      'remove-docker-containers-mac',
      'docker-dangling-vs-unused-images',
      'docker-overlay2-on-mac',
      'docker-raw-file-mac',
      'clear-docker-build-cache-mac',
      'remove-docker-volumes-mac',
      'docker-image-in-use-conflict',
      'uninstall-node-js-mac',
      'uninstall-anaconda-mac',
      'uninstall-homebrew-mac',
      'homebrew-list-installed-packages',
      'pip-no-cache-dir',
      'xcode-xip-file-mac',
      'reinstall-command-line-tools-mac',
    ]),
  },
  {
    id: 'trash-and-files',
    cluster: 'Trash & files',
    title: 'Trash, hidden files, Downloads & Library folders',
    description:
      'How to delete files on Mac, empty a stubborn Trash, show hidden files and ~/Library, and manage Downloads and screenshots.',
    pillar: {
      href: '/delete-files-on-mac',
      label: 'how to delete files on Mac',
    },
    secondaryPillar: {
      href: '/show-hidden-files-mac',
      label: 'how to show hidden files on Mac',
    },
    guides: bySlugs([
      'delete-files-on-mac',
      'show-hidden-files-mac',
      'show-library-folder-mac',
      'trash-wont-empty-mac',
      'clear-downloads-folder-mac',
      'mac-folder-structure-explained',
      'change-screenshot-location-mac',
      'recover-files-from-trash-mac',
      'empty-trash-automatically-mac',
      'downloads-folder-missing-mac',
      'move-files-to-trash-terminal-mac',
      'delete-immediately-skip-trash-mac',
      'ds-store-files-mac',
      'stop-mac-hidden-files-on-usb',
      'relocated-items-folder-mac',
    ]),
  },
  {
    id: 'uninstall-and-apps',
    cluster: 'Uninstall & apps',
    title: 'Uninstalling apps, background items & Rosetta 2',
    description:
      'How to uninstall apps on Mac completely, clean up leftover Library files and login items, and check built-in apps or Rosetta 2.',
    pillar: {
      href: '/uninstall-apps-on-mac',
      label: 'how to uninstall apps on Mac',
    },
    guides: bySlugs([
      'uninstall-apps-on-mac',
      'remove-background-items-mac',
      'uninstall-rosetta-2-mac',
      'delete-built-in-apps-mac',
    ]),
  },
  {
    id: 'photos-and-backups',
    cluster: 'Photos & backups',
    title: 'Photos library, iPhone backups & Time Machine',
    description:
      'Manage large Photos libraries, old iPhone and iPad backups in Finder, and Time Machine local snapshots and backup drives.',
    pillar: {
      href: '/free-up-space-on-mac',
      label: 'how to free up space on Mac',
    },
    secondaryPillar: {
      href: '/photos-library-taking-up-space-mac',
      label: 'Photos library taking up space on Mac',
    },
    guides: bySlugs([
      'photos-library-taking-up-space-mac',
      'move-photos-library-to-external-drive',
      'photos-optimize-storage-not-working',
      'delete-iphone-backups-on-mac',
      'time-machine-snapshots',
      'time-machine-backup-disk-full',
      'time-machine-drive-size',
      'delete-old-time-machine-backups',
    ]),
  },
  {
    id: 'creative-and-media-apps',
    cluster: 'Creative & media apps',
    title: 'Creative & media apps: Adobe, Final Cut, DaVinci & Logic',
    description:
      'Clear scratch disks, render files, media caches and sound libraries across Photoshop, Premiere Pro, Lightroom, DaVinci Resolve, Final Cut Pro, Logic Pro and GarageBand.',
    pillar: {
      href: '/free-up-space-on-mac',
      label: 'how to free up space on Mac',
    },
    secondaryPillar: {
      href: '/photoshop-scratch-disk-full-mac',
      label: 'Photoshop scratch disk full on Mac',
    },
    guides: bySlugs([
      'photoshop-scratch-disk-full-mac',
      'clear-premiere-pro-media-cache-mac',
      'clear-davinci-resolve-cache-mac',
      'clear-lightroom-cache-mac',
      'adobe-creative-cloud-space-mac',
      'final-cut-pro-storage-full',
      'logic-pro-sound-library-space',
      'garageband-sound-library-mac',
      'imovie-library-taking-up-space',
    ]),
  },
  {
    id: 'apps-taking-space',
    cluster: 'Apps taking space',
    title: 'Everyday apps: Mail, Messages, Chrome, Steam & chat apps',
    description:
      'Reduce local storage used by Mail, Messages, Google Chrome, Steam games, WhatsApp, Telegram, Slack, Microsoft Teams, Spotify, Apple TV and Apple Music.',
    pillar: {
      href: '/free-up-space-on-mac',
      label: 'how to free up space on Mac',
    },
    secondaryPillar: {
      href: '/mail-taking-up-space-on-mac',
      label: 'Mail taking up space on Mac',
    },
    guides: bySlugs([
      'mail-taking-up-space-on-mac',
      'messages-taking-up-space-on-mac',
      'google-chrome-taking-up-space-mac',
      'chrome-on-device-ai-model-mac',
      'steam-games-storage-mac',
      'whatsapp-taking-up-space-on-mac',
      'telegram-taking-up-space-on-mac',
      'clear-spotify-cache-mac',
      'clear-slack-cache-mac',
      'clear-teams-cache-mac',
      'apple-tv-downloads-mac',
      'apple-music-downloads-mac',
      'podcasts-taking-up-space-mac',
    ]),
  },
  {
    id: 'performance-and-memory',
    cluster: 'Performance & memory',
    title: 'Performance, memory pressure, swap & CPU processes',
    description:
      'Diagnose why your Mac is running slow, out-of-application-memory warnings, swap usage, Spotlight mds_stores CPU spikes and Terminal memory commands.',
    pillar: {
      href: '/mac-running-slow-low-storage',
      label: 'why is my Mac so slow and how low storage affects speed',
    },
    guides: bySlugs([
      'mac-running-slow-low-storage',
      'mac-out-of-application-memory',
      'mac-swap-memory',
      'mac-slow-after-macos-update',
      'mds-stores-high-cpu-mac',
      'free-command-on-mac',
      'purge-command-mac-memory',
      'operation-not-permitted-terminal-mac',
    ]),
  },
  {
    id: 'disks-and-apfs',
    cluster: 'Disks & APFS',
    title: 'Disks, APFS containers, Disk Utility & external drives',
    description:
      'Use Disk Utility on Mac, understand APFS containers and Other Volumes, fix external drives not showing up or ejecting, and expand storage with an external SSD.',
    pillar: {
      href: '/disk-utility-mac',
      label: 'Disk Utility on Mac',
    },
    secondaryPillar: {
      href: '/external-hard-drive-not-showing-up-mac',
      label: 'external hard drive not showing up on Mac',
    },
    guides: bySlugs([
      'disk-utility-mac',
      'external-hard-drive-not-showing-up-mac',
      'eject-external-drive-mac',
      'format-external-hard-drive-mac',
      'other-volumes-in-container',
      'disk-utility-first-aid-mac',
      'apfs-container-vs-volume',
      'mac-recovery-partition',
      'expand-mac-storage-external-ssd',
      'remove-boot-camp-partition',
      'list-disks-terminal-mac',
    ]),
  },
  {
    id: 'mac-cleaner-comparison',
    cluster: 'Brand & commercial',
    title: 'Choosing a Mac cleaner or disk scanner',
    description:
      'Compare built-in macOS storage tools, visual disk analyzers, app uninstallers and Mac cleaners before installing anything.',
    pillar: {
      href: '/',
      label: 'ClearDisk Mac cleaner',
    },
    guides: bySlugs(['best-free-mac-cleaner']),
  },
];

export function getGuideCluster(slug: string): GuideGroup | undefined {
  return guideGroups.find((group) =>
    group.guides.some((guide) => guide.slug === slug),
  );
}

export function getClusterGuidesForPillar(slug: string): GuideGroup[] {
  const path = '/' + slug;
  return guideGroups.filter(
    (group) =>
      group.pillar.href === path || group.secondaryPillar?.href === path,
  );
}
