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
};
export type GuideQuestion = { q: string; a: string };
export type Guide = {
  slug: string;
  title: string;
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
    title: 'How to clear System Data on Mac',
    description:
      'A practical guide to clearing System Data on Mac: identify the files behind the number, review what matters, and understand what cleanup can change.',
    summary:
      'Start by finding the files behind the number. System Data is a storage category, not a single folder you can safely empty. Review identifiable files before removing anything.',
    published: '2026-09-05',
    updated: '2026-09-23',
    sections: [
      {
        id: 'start-with-the-number',
        title: '1. Check what is actually running out',
        paragraphs: [
          'Open System Settings → General → Storage. Note the available space and the size of System Data. The second number tells you how macOS grouped some files; the first tells you how much room you have to work.',
          'A large category is a reason to investigate, not a target to erase. If an installation is blocked or your Mac cannot save a file, start with the urgent storage-full guide linked below.',
        ],
      },
      {
        id: 'identify-the-source',
        title: '2. Find a source you recognize',
        paragraphs: [
          'Think about the work this Mac does. Development tools, creative apps, downloaded media and local device backups leave different storage footprints. Start with the applications you use rather than treating every hidden folder as disposable.',
          'ClearDisk’s free scan groups the files it finds and lets you inspect paths and sizes. Its System Data view labels groups Safe, Review or Leave it. These labels help you decide what to examine; they do not mean that every byte in Apple’s category is removable.',
        ],
        items: [
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
        id: 'if-it-returns',
        title: 'If System Data comes back',
        paragraphs: [
          'Repeated cleanup is not a diagnosis. If the same app recreates a large folder, examine its cache limit, downloads, logging or project settings. The recurring-growth guide explains how to narrow this down.',
          'If snapshots appear large, first understand how macOS manages them. ClearDisk reports a local snapshot count, not their storage size; do not assume that deleting ordinary files or buying a cleanup license can remove all of it.',
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
      'system-data-keeps-growing',
      'mac-storage-full',
      'check-disk-space-mac-terminal',
    ],
    sources: [storage, definition, snapshots],
  },
  {
    slug: 'what-is-system-data-on-mac',
    title: 'What is System Data on Mac? Storage explained',
    description:
      'What System Data on Mac actually contains, why its size keeps changing, and how to tell ordinary app files from storage you should leave alone.',
    summary:
      'System Data is macOS’s catch-all for files that do not fit its other storage categories. It can include caches, logs, app support files and runtime resources. It is not all junk.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'inside-the-category',
        title: 'A category, not one folder',
        paragraphs: [
          'There is no single System Data folder corresponding to the number in Storage settings. Files from different locations and different applications can contribute to the category. Deleting a folder just because its name contains “System” is the wrong approach.',
          'For cleanup decisions, a file’s purpose matters more than the category macOS assigns it. An app support folder might contain useful personal data, while a generated cache may be replaceable. Even replaceable files can interrupt an app when removed while it is running.',
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
          'Different tools answer different questions: how large a file says it is, how much disk space it occupies, or which category it belongs to. Permissions also affect what a scanner can see. ClearDisk measures allocated file sizes and may need Full Disk Access for protected locations.',
          'Local snapshots are another part of the picture. Apple counts their space as available and manages them automatically as space is needed. Do not add that figure to an app’s removable-file total and assume the sum is space you can recover.',
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
          'The guides below separate three next steps: learning a cleanup workflow, diagnosing an unusually large total, and dealing with an urgent full-disk warning.',
        ],
      },
    ],
    questions: [
      {
        q: 'How do I clear System Data on my Mac?',
        a: 'Find the files behind the number first: caches, app containers, developer folders and device backups in your Library. The clear-System-Data guide gives the order; there is no single switch.',
      },
      {
        q: 'Is it okay to delete System Data on Mac?',
        a: 'Some of it. Caches and old device backups can go; Application Support, Containers and anything macOS manages should stay. The category mixes both, which is why deleting by category is the wrong move.',
      },
      {
        q: 'Why is the System Data on my Mac so high?',
        a: 'Usually one or two producers: a developer tool, a creative app’s caches, old iOS backups, or Mail and Messages attachments. The recurring-growth guide shows how to identify the producer.',
      },
      {
        q: 'How do I get rid of 100GB of System Data?',
        a: 'Measure the Library and hidden folders, then remove the largest rebuildable items and backups you no longer need. The 100GB-or-more guide walks through it; expect the number to drop in steps, not all at once.',
      },
    ],
    related: [
      'clear-system-data-on-mac',
      'how-to-check-storage-on-mac',
      'show-library-folder-mac',
      'mac-storage-glossary',
    ],
    sources: [definition, snapshots],
  },
  {
    slug: 'system-data-too-large',
    title: 'System Data taking up 100GB or more?',
    description:
      'System Data using 100GB, 200GB or half your Mac storage? Identify the biggest contributors and review each one before deciding what to remove.',
    summary:
      'A number like 100GB or 200GB cannot tell you what is safe to delete. The useful question is which files account for it—and whether you still need them.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'size-is-not-a-diagnosis',
        title: 'There is no useful one-size-fits-all limit',
        paragraphs: [
          'A development Mac and a Mac used mainly for email can have very different storage needs. The same 100GB also has a different impact on a small drive and a large one. Start with available space, then identify the largest contributors.',
          'These steps apply whether you see 100GB, 150GB, 200GB or half the drive labeled System Data, on a MacBook Air, Pro or desktop Mac. The diagnosis comes from what is stored, not from the model name.',
        ],
      },
      {
        id: 'match-your-workload',
        title: 'Match the storage to how you use your Mac',
        paragraphs: [
          'Use your recent work as a starting point. A large result associated with an application you recognize is easier to evaluate than an unfamiliar folder selected only because it is big.',
        ],
        items: [
          'Develop apps: inspect developer storage and distinguish regenerated files from source, archives and test data.',
          'Edit video, audio or photos: check the creative app’s own media, cache and project-management controls.',
          'Back up an iPhone or iPad locally: review which backups you need before removing older copies.',
          'Use many apps: inspect their downloads and support data; do not assume everything left in Application Support is a cache.',
          'Use Time Machine: understand local snapshots before trying to count them as removable files.',
        ],
      },
      {
        id: 'inspect-largest-first',
        title: 'Inspect the biggest paths first',
        paragraphs: [
          'A local scan can help you move from a category total to individual files and folders. In ClearDisk, inspect System Data, Browse and Large Files. Check the full path, the owning application and whether the content can be replaced.',
          'If a scan cannot access some locations, follow the app’s Full Disk Access guidance rather than interpreting missing results as empty folders. A scanner’s visible total is not a promise to reproduce every number in Apple’s Storage settings.',
        ],
      },
      {
        id: 'make-a-small-change',
        title: 'Make one understood change and compare',
        paragraphs: [
          'Remove a small selection through the owning app or a reviewed Trash action. Check the application still works and that you retained the files you need. Review Trash separately before emptying it.',
          'Compare available space and repeat the scan. Keeping the change small helps you learn which action affected the result. Avoid bulk deletion of hidden folders or system resources just to drive the number down.',
        ],
      },
      {
        id: 'when-to-get-help',
        title: 'If you still cannot explain the total',
        paragraphs: [
          'Use the related guides to check recurring growth and the difference between a category figure and usable space. If an app is producing unexplained data, contact its developer with the path and size—not your private file contents.',
          'If your Mac is failing to start, repeatedly reporting disk errors, or cannot save essential work, prioritize preserving that work and getting Apple support over experimenting with cleanup.',
        ],
      },
    ],
    questions: [
      {
        q: 'How much System Data is normal on a Mac?',
        a: "There is no universal safe limit; 100GB, 150GB or 200GB can be normal or not depending on what the Mac is used for and how large its drive is. Start with available space, then identify the largest contributors rather than comparing to another Mac's number.",
      },
      {
        q: 'Why does my Mac show 100GB or more of System Data?',
        a: "It usually comes from how you use the Mac, such as developer files, creative app caches and projects, local iPhone or iPad backups, or Time Machine snapshots. Match the folder to an activity you recognize, like a creative app's own media and cache controls, rather than guessing from the total alone.",
      },
      {
        q: "How do I find what's taking up System Data on Mac?",
        a: 'A local scan such as ClearDisk lets you move from a category total to individual files by inspecting System Data, Browse and Large Files, checking each path, its owning app and whether the content is replaceable. If a scan cannot access some locations, grant it Full Disk Access rather than assuming those folders are empty.',
      },
      {
        q: 'Should I delete System Data files to fix a full disk?',
        a: 'Remove only a small, understood selection through the owning app or a reviewed Trash action, then check the app still works and repeat the scan to compare space. Bulk deletion of hidden folders or system resources just to lower the number is not a good idea.',
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'system-data-keeps-growing',
      'clear-system-data-on-mac',
    ],
    sources: [definition, storage, snapshots],
  },
  {
    slug: 'system-data-keeps-growing',
    title: 'Why does Mac System Data keep growing?',
    description:
      'Why Mac System Data keeps growing after cleanup: a repeatable way to compare scans, identify the responsible app, and stop deleting blindly.',
    summary:
      'When space fills again, find what is producing new data. Deleting the same files repeatedly may hide the symptom without changing the cause.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'record-a-baseline',
        title: '1. Record a useful baseline',
        paragraphs: [
          'Note available space, the System Data figure and the largest folders in a local scan. Record when you measured them and which applications were running. A screenshot or a short private note is enough; you do not need to upload filenames.',
          'Use the same tool and scan scope next time. Comparing different measurement methods can make ordinary accounting differences look like growth.',
        ],
      },
      {
        id: 'repeat-after-work',
        title: '2. Compare after a normal activity',
        paragraphs: [
          'Do one ordinary piece of work, then scan again. For example, compare before and after building a project, importing media or downloading content in an app. Look for a path that grew, not just a larger combined category.',
          'ClearDisk helps inspect paths and sizes, but the current release does not automatically diagnose the responsible process or maintain a growth-history dashboard. This comparison is a manual workflow.',
        ],
      },
      {
        id: 'find-the-owner',
        title: '3. Change the app behavior behind the files',
        paragraphs: [
          'Once a folder points to a specific application, inspect that app’s own storage controls. Look for download retention, cache limits, project locations or unusually large logs. Consult its documentation before changing unfamiliar support files.',
          'If the same large files immediately return, another deletion is unlikely to be the lasting fix. An app update, changed setting or support request may address the source more effectively.',
        ],
      },
      {
        id: 'check-false-signals',
        title: '4. Rule out an incomplete cleanup',
        paragraphs: [
          'Confirm whether the files were moved to Trash or permanently removed. Trash-first cleanup preserves a recovery opportunity, but it also preserves the files’ disk usage until you empty it.',
          'Compare available space as well as category totals. Do not assume a changing System Data figure proves a leak, and do not count macOS-managed snapshot space as additional guaranteed savings.',
        ],
      },
      {
        id: 'avoid-the-loop',
        title: 'Avoid the delete-and-repeat loop',
        paragraphs: [
          'The goal is to keep enough space for your work while retaining the data you need. Repeatedly removing system resources, disabling protection or deleting entire hidden folders is not a sound diagnostic method.',
          'If you cannot identify the owner, keep your baseline and the changed path available when asking for support. Review any screenshot for personal filenames before sharing it.',
        ],
      },
    ],
    questions: [
      {
        q: 'Why does System Data keep growing back after I clean it?',
        a: 'Repeatedly deleting the same files hides the symptom rather than fixing the cause. Compare a baseline scan before and after a normal activity like building a project or downloading content, and look for the specific path that grew rather than just a larger combined category total.',
      },
      {
        q: 'How do I stop a Mac app from refilling its storage?',
        a: "Once you trace a growing folder to a specific app, check that app's own storage controls, such as download retention, cache limits or project locations, rather than deleting the files again. If the same large files return immediately, another deletion won't be a lasting fix.",
      },
      {
        q: 'Does emptying Trash actually free up the space I deleted?',
        a: 'Only once you empty it. Trash-first cleanup keeps a recovery option, but the files still use disk space until you empty the Trash, so confirm whether items were moved to Trash or permanently removed and compare available space rather than trusting the category figure alone.',
      },
      {
        q: 'Can a Mac cleaner tell me which app is filling up my storage?',
        a: 'Not automatically. A tool like ClearDisk helps you inspect paths and sizes, but it does not diagnose the responsible process or track growth history for you; comparing scans before and after an ordinary activity is a manual workflow you have to do yourself.',
      },
    ],
    related: [
      'system-data-too-large',
      'mac-storage-full-after-macos-update',
      'clear-system-data-on-mac',
      'clean-docker-disk-space-mac',
    ],
    sources: [storage, snapshots],
  },
  {
    slug: 'mac-storage-full',
    title: 'Mac storage full: first steps when the disk is almost full',
    description:
      'A practical sequence for a full Mac startup disk: check usable space, review large files, understand Trash, and investigate what keeps filling it.',
    summary:
      'Start with files you recognize and can safely move or remove. If you already deleted things, check Trash and available space before deleting more.',
    published: '2026-09-05',
    updated: '2026-09-05',
    sections: [
      {
        id: 'check-the-warning',
        title: '1. Confirm which storage is full',
        paragraphs: [
          'Read the warning carefully. Your Mac drive, an external drive and your iCloud account have separate capacities. A local cleaner cannot fix a full cloud quota simply by clearing Mac caches.',
          'Open System Settings → General → Storage and look at available space. If a download or installer needs more room, use its stated requirement rather than a universal target copied from a cleanup article.',
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
      },
      {
        id: 'after-deleting',
        title: '3. If storage is still full after deleting files',
        paragraphs: [
          'Check Trash. A move to Trash is reversible storage relocation, not immediate space recovery. Review everything in it before choosing permanent removal.',
          'If Trash is already empty, compare the same available-space measurement again and inspect the remaining large paths. Another app may be writing new data while you clean. The recurring-growth guide helps isolate that pattern.',
        ],
      },
      {
        id: 'find-what-remains',
        title: '4. Investigate the unexplained remainder',
        paragraphs: [
          'If the biggest remaining category is System Data, switch from deleting familiar files to identifying its contributors. ClearDisk’s free scan can show named groups, paths and large files without uploading your scan results.',
          'You remain responsible for choosing what to remove. Some files support active applications or system operation. The scanner is useful because it helps make that choice informed, not because everything it finds should go.',
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
        a: "Your Mac drive, an external drive and your iCloud account each have separate capacities, so a local cleaner cannot fix a full cloud quota just by clearing Mac caches. Check System Settings, General, Storage for the Mac's own available space instead.",
      },
      {
        q: 'What should I delete first when my Mac storage is full?',
        a: 'Start with files you can evaluate yourself: old downloads, installers you can get again, or large files you have already backed up elsewhere. If you move work to another drive, verify the copy opens before removing the original, since libraries and synced folders need their own app-specific move process.',
      },
      {
        q: 'I emptied the Trash but my Mac is still full, what next?',
        a: 'Compare the same available-space measurement again and check whether another app is writing new data while you clean, since a move to Trash only relocates storage rather than freeing it immediately. If System Data is still the biggest remaining category, switch to identifying its contributors instead.',
      },
      {
        q: "Is it safe to use a free Mac scanner to find what's filling my disk?",
        a: 'A free scan such as ClearDisk can show named groups, paths and large files without uploading your results, which helps make an informed choice. You still decide what to remove, since some of what it finds supports active applications or system operation rather than being safe to delete.',
      },
    ],
    related: [
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
  'system-data-too-large': 'delete-iphone-backups-on-mac',
  'system-data-keeps-growing': 'clean-docker-disk-space-mac',
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

export const guideGroups = [
  {
    id: 'icloud-drive',
    title: 'iCloud Drive: sync, storage and recovery',
    guides: icloudGuides,
  },
  {
    id: 'system-data',
    title: 'System Data and a full Mac',
    guides: foundationGuides,
  },
  {
    id: 'everyday-cleanup',
    title: 'Everyday cleanup and choosing tools',
    guides: maintenanceGuides,
  },
  {
    id: 'files-and-backups',
    title: 'Files, backups and cloud storage',
    guides: [...storageGuides, ...moreFileGuides],
  },
  {
    id: 'apps-and-developer-tools',
    title: 'Apps and developer tools',
    guides: developerGuides,
  },
  {
    id: 'external-drives',
    title: 'External drives and Disk Utility',
    guides: driveGuides,
  },
  {
    id: 'storage-categories',
    title: 'Storage categories and system folders',
    guides: systemFolderGuides,
  },
  {
    id: 'developer-caches',
    title: 'Developer caches, toolchains and VMs',
    guides: moreDeveloperGuides,
  },
  {
    id: 'creative-apps',
    title: 'Video, photo and music apps',
    guides: creativeGuides,
  },
  {
    id: 'everyday-apps',
    title: 'Chat, streaming and game apps',
    guides: everydayAppGuides,
  },
  {
    id: 'memory-and-startup',
    title: 'Memory, speed and startup disks',
    guides: memoryDriveGuides,
  },
  {
    id: 'docker',
    title: 'Docker disk space on Mac',
    guides: dockerGuides,
  },
  {
    id: 'uninstall-developer-tools',
    title: 'Uninstall and reset developer tools',
    guides: devQaGuides,
  },
  {
    id: 'chrome-trash-hidden-files',
    title: 'Chrome, Trash and hidden files',
    guides: fileQaGuides,
  },
  {
    id: 'macos-questions',
    title: 'macOS processes, memory and disks',
    guides: systemQaGuides,
  },
  {
    id: 'planning-space',
    title: 'Planning space and backups',
    guides: spaceQaGuides,
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
