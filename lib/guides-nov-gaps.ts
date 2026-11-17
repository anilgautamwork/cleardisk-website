import type { Guide } from './guides.ts';

export const novGapGuides: Guide[] = [
  {
    slug: 'brew-uninstall-package',
    title: 'brew uninstall: How to Remove a Homebrew Package on Mac',
    h1: 'How to uninstall a Homebrew package on Mac (formulae and casks)',
    description:
      'Remove a Homebrew package on Mac with brew uninstall: formulae, casks, --zap, unused dependencies, brew cleanup, and fixes for Refusing to uninstall errors.',
    summary:
      'To uninstall a Homebrew package on Mac, run brew uninstall <name> in Terminal for command-line formulae, or brew uninstall --cask <name> (adding --zap to remove preferences and caches too) for Mac apps. Homebrew removes unneeded dependencies automatically; finish with brew cleanup to reclaim cached installer disk space.',
    published: '2026-11-17',
    updated: '2026-11-17',
    sections: [
      {
        id: 'cheat-sheet',
        title: 'Key takeaways and brew uninstall cheat sheet',
        paragraphs: [
          'brew uninstall, brew remove and brew rm are aliases for the exact same command in Homebrew. For most packages, two lines cover everything you need—one for command-line formulae and one for desktop Mac apps installed as casks.',
          'Looking to remove Homebrew itself rather than a single package? That uses Homebrew’s official uninstall.sh script instead; see the full uninstall Homebrew guide linked below.',
        ],
        code: [
          'brew uninstall wget',
          'brew uninstall --cask --zap firefox',
        ],
        items: [
          'Uninstall a command-line tool (formula): brew uninstall <name>.',
          'Uninstall a Mac app (cask): brew uninstall --cask <name>.',
          'Uninstall a cask app plus its settings and caches: brew uninstall --cask --zap <name> (casks only; Homebrew warns it may remove files shared between apps).',
          'Remove all installed versions of a formula: brew uninstall --force <name>.',
          'Remove a formula even when another installed package depends on it: brew uninstall --ignore-dependencies <name>.',
          'Uninstall several packages in one pass: brew uninstall <name1> <name2>.',
          'Preview or remove leftover dependencies: brew autoremove --dry-run, then brew autoremove (Homebrew also runs autoremove automatically unless HOMEBREW_NO_AUTOREMOVE is set).',
          'Preview and free cached downloads and old versions: brew cleanup -n, then brew cleanup.',
          'Remove a third-party tap repository: brew untap <user/repo>.',
        ],
        links: [
          {
            label: 'Want Homebrew itself gone? How to completely uninstall Homebrew on Mac',
            href: '/uninstall-homebrew-mac',
          },
        ],
      },
      {
        id: 'find-package-name',
        title: '1. Find the exact package name',
        paragraphs: [
          'Homebrew needs the formula or cask token as Homebrew knows it, which does not always match an app’s display name in Finder. List your installed formulae and casks first, or run brew info <name> when you are unsure whether an entry is a formula or a cask.',
        ],
        code: [
          'brew list --formula',
          'brew list --cask',
          'brew info <name>',
        ],
        links: [
          {
            label: 'How to list installed Homebrew packages and check their sizes (brew list)',
            href: '/homebrew-list-installed-packages',
          },
        ],
      },
      {
        id: 'check-dependents',
        title: '2. Check what depends on it',
        paragraphs: [
          'Before removing a formula, check whether other installed packages still rely on it by running brew uses --installed <name>.',
          'No output means nothing currently installed depends on that formula, so you can remove it cleanly. If Terminal prints package names, removing this formula would break them, and Homebrew refuses by default unless you remove those dependents first or pass --ignore-dependencies.',
        ],
        code: ['brew uses --installed <name>'],
      },
      {
        id: 'stop-service',
        title: '3. Stop its background service (if it has one)',
        paragraphs: [
          'Databases and local servers installed through Homebrew—such as PostgreSQL, MySQL or Redis—often run in the background via LaunchAgents. Stop any active service before uninstalling so macOS does not keep trying to launch a deleted binary at login.',
          'According to Homebrew’s manual, brew services stop halts the service right away and unregisters its launch agent from starting automatically.',
        ],
        code: ['brew services list', 'brew services stop <name>'],
      },
      {
        id: 'run-uninstall',
        title: '4. Inspect what is installed, then run brew uninstall',
        paragraphs: [
          'Unlike brew autoremove and brew cleanup, brew uninstall itself has no --dry-run flag (verified with Homebrew 7.0.12 on macOS 27.0.1, where passing --dry-run returns Error: invalid option: --dry-run). To preview what a package installed before removing it, run brew list <name> alongside Step 2’s brew uses --installed check.',
          'When the list looks right, run brew uninstall for a command-line formula or add --cask for a Mac app. Passing --formula or --cask explicitly matters whenever a formula and a cask share the same name.',
        ],
        code: [
          'brew list <name>',
          'brew uninstall <name>',
          'brew uninstall --cask <name>',
        ],
      },
      {
        id: 'uninstall-cask-zap',
        title: 'How to uninstall a cask completely with --zap',
        paragraphs: [
          'A standard brew uninstall --cask <name> removes the app bundle from /Applications, while its preferences, caches and support folders in ~/Library usually stay behind. Leaving them is convenient if you plan to reinstall later, and clutter if you are finished with the app.',
          'Adding --zap removes the associated ~/Library files defined by that cask’s maintainers. Homebrew’s manual carries an explicit warning: --zap may remove files shared between applications.',
        ],
        code: ['brew uninstall --cask --zap <name>'],
        items: [
          'Skip --zap when you keep other apps from the same vendor that share a support folder (for example, Adobe or Microsoft suites), unless you are removing all of them.',
          'Skip --zap if you want your saved settings, profiles or license state waiting for a future reinstall.',
        ],
        links: [
          {
            label: 'Uninstalling non-Homebrew Mac apps and their ~/Library leftovers',
            href: '/uninstall-apps-on-mac',
          },
        ],
      },
      {
        id: 'dependencies-autoremove',
        title: 'What happens to dependencies (brew autoremove)',
        paragraphs: [
          'Older tutorials advise running brew autoremove after every uninstall, though most Macs no longer need that extra step. Homebrew’s manual notes that unless HOMEBREW_NO_AUTOREMOVE is set in your environment, both brew uninstall and brew cleanup automatically remove formulae that were pulled in only as dependencies and have no remaining dependents.',
          'You can still run brew autoremove --dry-run followed by brew autoremove whenever auto-removal is disabled or you want to audit orphaned dependencies directly. Run brew leaves --installed-on-request to see the top-level formulae you asked for explicitly.',
        ],
        code: [
          'brew autoremove --dry-run',
          'brew autoremove',
          'brew leaves --installed-on-request',
        ],
      },
      {
        id: 'reclaim-disk-space',
        title: '5. Reclaim disk space with brew cleanup',
        paragraphs: [
          'Uninstalling removes the package from Homebrew’s Cellar or Caskroom, while the archive Homebrew originally downloaded can remain inside ~/Library/Caches/Homebrew.',
          'Measure the cache first with du -sh "$(brew --cache)", preview deletions with brew cleanup -n, and run brew cleanup (removes stale downloads older than 120 days and old formula versions) or brew cleanup --prune=all to clear every cached download immediately. If Homebrew is not the main culprit filling System Data, ClearDisk’s free local scan lists Homebrew, npm, Xcode and Docker caches side by side so you can compare sizes first.',
        ],
        code: [
          'du -sh "$(brew --cache)"',
          'brew cleanup -n',
          'brew cleanup',
          'brew cleanup --prune=all',
        ],
        links: [
          {
            label: 'Clean the Homebrew cache on Mac with brew cleanup and --prune=all',
            href: '/clean-homebrew-cache-mac',
          },
          {
            label: 'Reclaim Developer storage on Mac across Xcode, Docker and Homebrew',
            href: '/developer-storage-on-mac',
          },
        ],
      },
      {
        id: 'common-errors',
        title: 'Common brew uninstall errors and what they mean',
        paragraphs: [
          'These exact messages come directly from Homebrew’s Ruby source (uninstall.rb and dependents_message.rb), so you can match what Terminal prints word for word.',
        ],
        code: [
          'brew uninstall --force <name>',
          'brew unpin <name> && brew uninstall <name>',
        ],
        items: [
          '“Refusing to uninstall ... because it is required by ..., which is currently installed”: another installed package depends on this formula. Uninstall that dependent package first, or pass --ignore-dependencies only when you intentionally accept breaking the dependent tool.',
          '“... is still installed. To remove all versions, run: brew uninstall --force ...”: multiple versions of the formula existed in the Cellar and Homebrew removed only one. Run brew uninstall --force <name> to remove every installed version.',
          '“The following ... configuration files have not been removed!”: Homebrew deliberately preserves edited config files under its etc directory (such as /opt/homebrew/etc/<name>) so you do not lose settings by accident. Inspect each path it prints before removing anything manually.',
          '“... is pinned. You must unpin it to uninstall.”: the formula was pinned to block upgrades. Run brew unpin <name> and then brew uninstall <name>.',
          '“No such keg” or “Cask ... is not installed”: check exact spelling with brew list, confirm whether you need --cask versus --formula, and remember that apps dragged directly to /Applications outside Homebrew are not tracked as casks.',
          '“No available formula or cask with the name ...”: usually a typo or a package from a third-party tap you already removed; check the close-match suggestions Homebrew prints underneath.',
        ],
      },
      {
        id: 'remove-tap',
        title: 'How to remove a tap (and the bottom line)',
        paragraphs: [
          'Taps are extra package repositories added with brew tap. Once you have uninstalled the packages you used from a third-party tap, remove the repository with brew untap <user/repo>. Homebrew’s manual notes that brew untap --force uninstalls every formula and cask from that tap automatically before removing it, so reserve --force for taps you want completely cleared.',
          'Commands and flags in this guide were verified against Homebrew 7.0.12 on macOS 27.0.1 in November 2026: use brew uninstall <name> for command-line tools, brew uninstall --cask <name> (plus --zap when appropriate) for Mac apps, check brew uses --installed before removing shared libraries, and finish with brew cleanup to get the disk space back.',
        ],
        code: ['brew untap <user/repo>'],
        links: [
          {
            label: 'New to Homebrew? How to install Homebrew on Mac (Apple silicon & Intel)',
            href: '/install-homebrew-mac',
          },
          {
            label: 'Removing everything? How to completely uninstall Homebrew on Mac',
            href: '/uninstall-homebrew-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'What is the difference between brew uninstall, brew remove and brew rm?',
        a: 'There is no difference between them. In Homebrew, brew uninstall, brew remove and brew rm are built-in aliases for the exact same command and accept the same flags.',
      },
      {
        q: 'Does brew uninstall remove dependencies automatically?',
        a: 'Yes, by default. After an uninstall, Homebrew automatically removes formulae that were installed only as dependencies and are no longer needed, unless HOMEBREW_NO_AUTOREMOVE is set in your shell environment.',
      },
      {
        q: 'What does brew uninstall --zap do on Mac?',
        a: 'Adding --zap removes a cask app along with its associated preferences, caches and support files in Library as defined by that cask. Homebrew warns it may remove files shared between apps, and it applies only to casks.',
      },
      {
        q: 'How do I uninstall a specific version of a Homebrew package?',
        a: 'Versioned formulae have their own package names, such as python@3.12, so run brew uninstall python@3.12. To remove every installed version of the same formula at once, run brew uninstall --force with the package name.',
      },
      {
        q: 'Does brew uninstall delete my configuration files?',
        a: 'No. Homebrew leaves configuration files inside its etc folder—such as /opt/homebrew/etc on Apple silicon—and prints the remaining paths in Terminal so you can review or remove them yourself.',
      },
      {
        q: 'How do I reinstall a Homebrew package after uninstalling it?',
        a: 'Run brew install with the package name again for command-line formulae, or brew install --cask for Mac apps. When a package is still installed and you want a fresh copy, run brew reinstall instead.',
      },
      {
        q: 'How do I uninstall all Homebrew packages at once?',
        a: 'If you want every package and Homebrew itself removed cleanly, running Homebrew’s official uninstall script after backing up a Brewfile is cleaner than removing packages one by one. See our complete uninstall Homebrew guide.',
      },
    ],
    related: [
      'install-homebrew-mac',
      'uninstall-homebrew-mac',
      'clean-homebrew-cache-mac',
      'homebrew-list-installed-packages',
      'developer-storage-on-mac',
    ],
    sources: [
      {
        label: 'Homebrew Documentation: official brew manual page (uninstall, autoremove, cleanup, untap)',
        url: 'https://docs.brew.sh/Manpage',
      },
      {
        label: 'GitHub: Homebrew/brew Library/Homebrew/uninstall.rb source',
        url: 'https://github.com/Homebrew/brew/blob/main/Library/Homebrew/uninstall.rb',
      },
      {
        label: 'GitHub: Homebrew/brew Library/Homebrew/dependents_message.rb source',
        url: 'https://github.com/Homebrew/brew/blob/main/Library/Homebrew/dependents_message.rb',
      },
    ],
  },
  {
    slug: 'apple-intelligence-storage-mac',
    title: 'How Much Storage Does Apple Intelligence Take on Mac (2026)',
    h1: 'How much storage does Apple Intelligence take on a Mac? (macOS 27 update)',
    description:
      'Apple says up to 8GB or 14GB, but macOS 27 Macs show 14 to 30GB. How to check Apple Intelligence storage on your Mac and what you can actually remove.',
    summary:
      'Apple states that Apple Intelligence requires up to 14 GB of storage on Macs with an M3 chip or later and at least 12 GB of unified memory, or up to 8 GB on other supported Macs—yet real macOS 27 Golden Gate readings often range from 14 GB to over 30 GB under System Settings → General → Storage → macOS (i). On macOS 15 and 26 turning Apple Intelligence off removes the models; on macOS 27 that off switch is gone.',
    published: '2026-11-17',
    updated: '2026-11-17',
    sections: [
      {
        id: 'key-takeaways',
        title: 'Key takeaways',
        paragraphs: [
          'What Apple Intelligence uses on disk—and whether you can reclaim those gigabytes—depends on both your Mac’s chip/memory tier and whether you have upgraded to macOS 27 Golden Gate.',
        ],
        items: [
          'Apple’s official requirement: up to 14 GB on Macs with M3 or later and 12 GB+ unified memory, or up to 8 GB on other supported Apple silicon Macs.',
          'Real readings on macOS 27 run higher: MacRumors measured 20.67 GB on an M4 Pro Mac mini, and user reports span roughly 14 GB to 30.16 GB.',
          'Storage settings counts Apple Intelligence inside the macOS category (click the info button next to macOS), separate from System Data.',
          'macOS 27 removed the master Apple Intelligence off switch, and disabling individual features does not delete the downloaded models.',
          'Do not delete model folders inside protected system paths by hand; safer user folders usually hold far more recoverable space.',
        ],
      },
      {
        id: 'official-storage-numbers',
        title: 'Apple’s official Apple Intelligence storage numbers',
        paragraphs: [
          'Apple’s support documentation breaks Mac storage requirements into two hardware tiers for current releases, up from the original 4 GB iPhone requirement in 2024 and the unified 7 GB requirement in early 2025.',
          'Not sure which tier your Mac falls into? Run the read-only Terminal command below (verified on an Apple M4 Max MacBook Pro with 128 GB unified memory running macOS 27.0.1). Any M3 or newer Mac with 12 GB or more of unified memory sits in the 14 GB tier.',
        ],
        code: ['system_profiler SPHardwareDataType | grep -E "Chip|Memory"'],
        items: [
          'M3 chip or later with at least 12 GB unified memory: up to 14 GB stated by Apple.',
          'Other supported Macs (M1, M2, MacBook Neo, and M3+ configurations with 8 GB memory): up to 8 GB stated by Apple.',
          'Intel Macs: not supported (models are not downloaded).',
        ],
      },
      {
        id: 'why-mac-shows-more',
        title: 'Why your Mac shows more than Apple says',
        paragraphs: [
          'Apple’s published figures act like paper ceilings, whereas Macs running macOS 27 Golden Gate regularly report larger numbers on the Apple Intelligence line inside Storage settings.',
          'Apple has not publicly explained whether its “up to 14 GB” support figure measures the same asset set shown in Storage settings. Testers have also observed a temporary storage peak right after upgrading to macOS 27, so if you updated today, give your Mac 24 to 48 hours on power and check the figure again before drawing conclusions.',
        ],
        items: [
          'Mac mini (M4 Pro, macOS 27 release): 20.67 GB reported by MacRumors (14 GB stated tier).',
          'MacBook Air (M3, macOS 27 beta 7): 22.42 GB reported (14 GB stated tier).',
          'MacBook Pro (M3 Pro, macOS 27 release): 24.35 GB user report cited by MacRumors (14 GB stated tier).',
          'Release Candidate user report cited by MacRumors: 30.16 GB (14 GB stated tier).',
          'MacBook Air (M1) and MacBook Neo: roughly 14 GB reported against Apple’s 8 GB stated tier.',
        ],
      },
      {
        id: 'how-to-check',
        title: 'How to check Apple Intelligence storage on your Mac',
        paragraphs: [
          'Open Apple menu → System Settings → General → Storage, wait for the category bar to finish calculating, click the info (i) button beside macOS, and read the Apple Intelligence line.',
          'You can also open Mac checks inside ClearDisk 2.2.1 (free scan). ClearDisk inspects readable, recognized Apple Intelligence model-asset and support folders and reports which protected locations could not be read, so you can view that figure alongside user caches and large files. Because macOS owns those assets, ClearDisk never deletes them, and protected system paths can leave its folder total lower than Apple’s Storage line.',
        ],
        items: [
          'Click Apple menu → System Settings → General → Storage.',
          'Wait until the colored storage bar finishes calculating.',
          'Click the info (i) button next to the macOS row.',
          'Read the Apple Intelligence storage figure in the breakdown.',
        ],
        links: [
          {
            label: 'Mac storage stuck on “Calculating…”? Fixes that work',
            href: '/mac-storage-calculating',
          },
          {
            label: 'See what ClearDisk 2.2.1 Mac checks measure and their limits',
            href: '/features',
          },
        ],
      },
      {
        id: 'part-of-system-data',
        title: 'Is Apple Intelligence part of System Data?',
        paragraphs: [
          'No. Storage settings counts Apple Intelligence inside the macOS category, separate from System Data.',
          'That distinction saves wasted effort when free space drops after an OS upgrade. If System Data is also large on your Mac, that comes from user and runtime locations—caches, logs, container data, local snapshots or device backups—rather than the Apple Intelligence line under macOS.',
        ],
        links: [
          {
            label: 'What is System Data on Mac and what belongs inside it',
            href: '/what-is-system-data-on-mac',
          },
          {
            label: 'How to clear System Data on Mac safely step by step',
            href: '/clear-system-data-on-mac',
          },
          {
            label: 'Why the macOS storage category is so large on Mac',
            href: '/macos-storage-category-size',
          },
        ],
      },
      {
        id: 'can-you-remove-it',
        title: 'Can you remove Apple Intelligence to free up space?',
        paragraphs: [
          'On macOS 15 Sequoia and macOS 26 Tahoe, yes: open System Settings → Apple Intelligence & Siri, turn off Apple Intelligence, and confirm. macOS then purges the on-device models—though reclaiming the disk space can take several hours to a full day, and major macOS updates may download them again. If storage is tight on a 256 GB Mac and you do not use Apple Intelligence, staying on macOS 26 Tahoe with security updates keeps that off switch available.',
          'On macOS 27 Golden Gate, Apple removed the master switch that turned Apple Intelligence off completely. Turning off individual writing, image or Siri features stops those features from running, while the underlying models remain on disk and download automatically when the Mac goes online.',
          'Third-party scripts and utilities have appeared that strip model folders (such as com_apple_MobileAsset_UAF_FM_ assets under /System/Library/AssetsV2/) by working around Apple’s system protections. We advise against modifying protected system locations: bypassing System Integrity Protection risks repeated re-downloads, broken Siri or system features, and macOS update issues. If you ever test such a tool on a non-production Mac, take a full Time Machine backup first and never run it on an IT-managed work machine.',
        ],
      },
      {
        id: 'safer-places-to-free-space',
        title: 'Short on space? Look here before touching AI models',
        paragraphs: [
          'On almost every Mac, there is more safe, repeatable space to recover in user folders you control than inside protected AI assets—and none of it touches system integrity.',
          'One extra catch: if an installer or Apple Intelligence complains that it needs space even when Finder reports plenty free, purgeable space is usually the reason. Finder’s available figure can include local snapshots and cached cloud files macOS has not evicted yet.',
        ],
        items: [
          'Rebuildable app and browser caches in ~/Library/Caches and ~/Library/Logs.',
          'Old iPhone and iPad backups in MobileSync, which routinely take 10 GB to 40 GB each.',
          'Time Machine local snapshots waiting to be thinned on your startup volume.',
          'Developer build artifacts such as Xcode DerivedData, iOS simulator runtimes, Docker disk images and node_modules.',
          'Forgotten installers, screen recordings and archives in Downloads and Movies.',
        ],
        links: [
          {
            label: 'How to clear cache on Mac safely',
            href: '/clear-cache-on-mac',
          },
          {
            label: 'Delete old iPhone and iPad backups on Mac',
            href: '/delete-iphone-backups-on-mac',
          },
          {
            label: 'Understand and thin Time Machine local snapshots',
            href: '/time-machine-snapshots',
          },
          {
            label: 'Reclaim Developer storage on Mac (Xcode, Docker, Homebrew)',
            href: '/developer-storage-on-mac',
          },
          {
            label: 'Find large files on Mac quickly',
            href: '/find-large-files-on-mac',
          },
          {
            label: 'What purgeable space on Mac means and how to free it',
            href: '/purgeable-space-on-mac',
          },
          {
            label: 'Complete step-by-step plan: how to free up space on Mac',
            href: '/free-up-space-on-mac',
          },
        ],
      },
      {
        id: 'buying-a-mac',
        title: 'Buying a Mac? Budget 15 to 30 GB (and the bottom line)',
        paragraphs: [
          'With Apple Intelligence treated as a permanent component of macOS 27 on Apple silicon, plan on roughly 15 GB to 30 GB for its models on top of macOS itself. On a base 256 GB SSD, that takes a meaningful slice before you install your first app.',
          'Check your real number first in System Settings → General → Storage → macOS (i). On Sequoia or Tahoe, turning Apple Intelligence off reclaims the space; on macOS 27, leave the protected system models alone and recover gigabytes cleanly from caches, device backups, developer folders and old downloads instead.',
        ],
        links: [
          {
            label: 'How much storage do you need on a Mac? (256GB vs 512GB vs 1TB)',
            href: '/how-much-storage-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'How much storage does Apple Intelligence take on a Mac?',
        a: 'Apple states up to 14 GB on Macs with an M3 chip or later and at least 12 GB of unified memory, and up to 8 GB on other supported Macs. Real readings on macOS 27 often run higher, from roughly 14 GB to 30 GB.',
      },
      {
        q: 'Why is Apple Intelligence using 20 to 30 GB on my Mac?',
        a: 'Apple has not explained why Storage settings exceeds the stated 8 GB and 14 GB tiers on many macOS 27 Macs. If you upgraded recently, wait a day or two on power and check again in case staged post-update assets are still settling.',
      },
      {
        q: 'Can I turn off Apple Intelligence on macOS 27 to save space?',
        a: 'No. macOS 27 Golden Gate removed the master switch to turn Apple Intelligence off completely, and disabling individual features leaves the models on disk. On macOS 15 Sequoia and macOS 26 Tahoe, turning it off in System Settings removes them.',
      },
      {
        q: 'Is it safe to delete Apple Intelligence model files manually?',
        a: 'We do not recommend deleting them manually. Those assets sit in protected system locations, and working around macOS security to strip them risks re-download loops, broken system features or update trouble. Clear user caches, old backups and large files instead.',
      },
      {
        q: 'Does Apple Intelligence count as System Data on Mac?',
        a: 'No. macOS Storage settings counts Apple Intelligence under the macOS category rather than System Data. Click the info button next to macOS in System Settings, General, Storage to inspect the Apple Intelligence line directly.',
      },
      {
        q: 'Does Apple Intelligence take up storage on Intel Macs?',
        a: 'No. Apple Intelligence requires an Apple silicon Mac (M1 or later) or MacBook Neo, so Intel Macs do not support the feature and never download the on-device model files.',
      },
    ],
    related: [
      'what-is-system-data-on-mac',
      'clear-system-data-on-mac',
      'macos-storage-category-size',
      'purgeable-space-on-mac',
      'how-much-storage-mac',
      'free-up-space-on-mac',
    ],
    sources: [
      {
        label: 'Apple Support: how to get Apple Intelligence and storage requirements (121115)',
        url: 'https://support.apple.com/en-us/121115',
      },
      {
        label: 'Apple Support: turn off and restrict access to Apple Intelligence features on Mac',
        url: 'https://support.apple.com/guide/mac-help/turn-restrict-access-apple-intelligence-mchlb2e44f94/mac',
      },
      {
        label: 'MacRumors: Apple Intelligence taking up to 30GB on some Macs running macOS 27',
        url: 'https://www.macrumors.com/2026/09/23/apple-intelligence-30gb-some-macs-macos-27/',
      },
      {
        label: 'MacRumors: macOS 27 removes toggle to disable Apple Intelligence storage',
        url: 'https://www.macrumors.com/2026/10/05/apple-intelligence-removal-tool-frees-mac-storage/',
      },
      {
        label: 'MacRumors: risks of third-party tools stripping Apple Intelligence from macOS 27',
        url: 'https://www.macrumors.com/2026/10/06/strip-apple-intelligence-from-macos-27/',
      },
      {
        label: 'MacRumors: how Apple Intelligence storage requirements grew from 4GB to 7GB+',
        url: 'https://www.macrumors.com/2025/03/11/macos-15-4-beta-hides-storage-apple-intelligence/',
      },
      {
        label: 'Tom’s Guide: why manually stripping macOS 27 AI files is not worth risking system stability',
        url: 'https://www.tomsguide.com/computing/if-your-mac-is-suddenly-running-out-of-space-after-macos-27-check-this-one-setting',
      },
      {
        label: 'Tom’s Guide: Apple Intelligence storage growth history',
        url: 'https://www.tomsguide.com/ai/apple-intelligence/apple-intelligence-now-needs-7gb-of-your-iphones-storage-frankly-id-rather-have-the-extra-space',
      },
      {
        label: 'HomeTechOps: post-upgrade Apple Intelligence storage peaks on macOS 27',
        url: 'https://hometechops.com/mac/macos-27-apple-intelligence-storage',
      },
      {
        label: 'CleanMyMac Blog: how turning off Apple Intelligence reclaims space on Sequoia and Tahoe',
        url: 'https://cleanmymac.com/blog/how-to-delete-ai-data-mac',
      },
    ],
  },
  {
    slug: 'find-intel-apps-on-mac',
    title: 'How to Find Intel Apps on Mac Before macOS 28 (5 Ways)',
    h1: 'How to find Intel apps on Mac before macOS 28 drops Rosetta (5 ways)',
    description:
      'Find Intel apps on Mac that still need Rosetta 2 before macOS 28 stops opening them. 5 ways to check app architecture, from System Settings to Terminal.',
    summary:
      'On macOS 27 Golden Gate, the fastest way to find Intel apps on Mac is System Settings → General → About → Intel-based Apps → Details. On any macOS release, you can also press Command + I on an app in Finder (Kind: Application (Intel)), sort Software → Applications in System Information, check the Kind column in Activity Monitor, or query Spotlight and lipo in Terminal.',
    published: '2026-11-17',
    updated: '2026-11-17',
    sections: [
      {
        id: 'whats-changing-with-rosetta',
        title: 'What is changing with Rosetta 2, and when',
        paragraphs: [
          'Rosetta 2 is Apple’s translation layer that lets Intel (x86_64) apps run on Apple silicon Macs. At WWDC 2025 and in Apple’s support article “Using Intel-based apps on a Mac with Apple silicon” (102527), Apple confirmed that general Rosetta support continues through macOS 27—and that starting with macOS 28, Rosetta will remain available only for certain older, unmaintained games relying on Intel frameworks.',
          'Checking now gives you roughly a year to update everyday apps, uninstall abandoned Intel clutter, or migrate data out of legacy software while it still launches cleanly. Note that this transition affects Apple silicon Macs only; Intel Macs run Intel apps natively, though macOS 26 Tahoe is the final release for Intel hardware.',
        ],
        items: [
          'macOS 26 Tahoe (up to 26.3): Intel-only apps run normally through Rosetta.',
          'macOS 26.4 and later: Intel-only apps run and show a compatibility warning notification when opened.',
          'macOS 27 Golden Gate: Intel-only apps run with warnings plus a dedicated Intel-based Apps list in System Settings.',
          'macOS 28 (expected fall 2027): Intel-only apps will stop opening, except certain older unmaintained games.',
        ],
      },
      {
        id: 'intel-based-apps-list',
        title: '1. Check the Intel-based Apps list in System Settings (macOS 27)',
        paragraphs: [
          'If your Mac runs macOS 27 Golden Gate, start with Apple’s built-in compatibility list. It carries the notice “Intel-based apps running on Rosetta will not open in macOS 28” with a direct link to Apple’s guidance.',
          'Keep one scope limit in mind: Apple’s list focuses on recently used apps and standard application folders, so an app stored on an external drive or tucked inside a custom directory may not appear until you run one of the broader checks below.',
        ],
        items: [
          'Click Apple menu → System Settings.',
          'Open General → About.',
          'Scroll to the macOS section, locate Intel-based Apps, and click Details.',
        ],
      },
      {
        id: 'finder-get-info',
        title: '2. Check Get Info in Finder (any macOS)',
        paragraphs: [
          'To check one specific app on any macOS version, open Finder → Applications, select the app, press Command + I (or Control-click → Get Info), and inspect the Kind line under General.',
          'On Universal apps, Get Info may also show an Open using Rosetta checkbox. Leave that box unchecked unless you rely on an older Intel-only plug-in inside that host app, since checking it forces the translated Intel build.',
        ],
        items: [
          'Application (Apple silicon): compiled solely for Apple silicon—works natively on macOS 28.',
          'Application (Universal): bundles both Intel and Apple silicon code—works natively on macOS 28.',
          'Application (Intel): Intel-only binary running through Rosetta—will stop opening in macOS 28 (except qualifying older games).',
        ],
      },
      {
        id: 'system-information',
        title: '3. Check System Information (every app at once)',
        paragraphs: [
          'Before macOS 27 added the About list, System Information was the standard way to audit every installed app in a single sortable table—and it still catches helper apps and utilities outside /Applications that Method 1 can skip.',
          'Not every Intel row in System Information is an app you actively open; some entries are old updaters or helper bundles left behind by software you removed years ago.',
        ],
        items: [
          'Hold the Option key and click Apple menu → System Information.',
          'In the left sidebar, expand Software and select Applications.',
          'Wait a few seconds for the inventory to populate, then click the Kind column header to group all Intel entries together.',
        ],
      },
      {
        id: 'activity-monitor',
        title: '4. Check Activity Monitor (what is running right now)',
        paragraphs: [
          'Background daemons, menu-bar utilities, printer helpers and login items rarely look like normal apps in Finder, yet they still fail if their binaries are Intel-only. Activity Monitor reveals every translated process currently running in memory.',
          'Leave your Mac running through a normal workday with your usual tools connected, then sort by Kind so background Rosetta helpers stand out immediately.',
        ],
        items: [
          'Open Activity Monitor from Applications → Utilities.',
          'Select the CPU tab.',
          'Check the Kind column (if Kind is hidden, Control-click any column header and enable Kind); entries marked Intel are actively using Rosetta.',
        ],
      },
      {
        id: 'terminal-mdfind-lipo',
        title: '5. Check in Terminal with mdfind and lipo',
        paragraphs: [
          'For power users and Mac admins, a single Spotlight query (mdfind) lists every indexed application bundle whose executable architectures include x86_64 without arm64. To inspect a specific binary directly without relying on Spotlight, run lipo -archs on the executable inside Contents/MacOS (verified read-only on macOS 27.0.1, where x86_64 alone means Intel-only, x86_64 arm64 means Universal, and arm64 alone means Apple silicon).',
          'Because mdfind reads Spotlight’s metadata store, its output can be incomplete if Spotlight indexing is disabled or still rebuilding after an update.',
        ],
        code: [
          'mdfind \'kMDItemExecutableArchitectures == "x86_64" && kMDItemExecutableArchitectures != "arm64" && kMDItemContentType == "com.apple.application-bundle"\'',
          'lipo -archs "/Applications/AppName.app/Contents/MacOS/AppName"',
        ],
        links: [
          {
            label: 'Spotlight stuck or missing results? Fix mds_stores and Spotlight indexing',
            href: '/mds-stores-high-cpu-mac',
          },
        ],
      },
      {
        id: 'cleardisk-mac-check',
        title: 'Find Intel apps faster with a ClearDisk scan',
        paragraphs: [
          'ClearDisk 2.2.1 includes a free Mac check that inspects the main executables of apps in /Applications and your personal ~/Applications folder without launching them, keeping Intel-only, Universal, Apple silicon and undetermined results distinct alongside your disk-space scan.',
          'Scope limit: like Apple’s About list, ClearDisk’s check inspects main app executables in your Applications folders rather than embedded plug-ins, audio units, drivers or apps stored elsewhere. Treat the list as a fast starting inventory and confirm upgrade plans with each developer.',
        ],
        links: [
          {
            label: 'Explore Mac checks in ClearDisk 2.2.1 (Intel apps & Apple Intelligence storage)',
            href: '/features',
          },
          {
            label: 'How much storage Apple Intelligence takes on Mac in macOS 27',
            href: '/apple-intelligence-storage-mac',
          },
        ],
      },
      {
        id: 'what-to-do-next',
        title: 'You found Intel apps on your Mac: now what?',
        paragraphs: [
          'Group the Intel apps you found into three buckets so you can replace or clean them up calmly before macOS 28 arrives. Remember that while Apple plans to retain a narrow Rosetta subset for certain older, unmaintained games, it makes no promise for any specific title.',
        ],
        items: [
          '1. Apps with a native update waiting: check the App Store or the developer’s download page for a Universal or Apple silicon build—many older installs simply predated the developer’s native release or used an Intel-only auto-updater.',
          '2. Apps you rarely open: uninstall them now, along with their leftover folders in ~/Library/Application Support and ~/Library/Caches, to reclaim disk space at the same time.',
          '3. Essential apps that will never be updated: export your projects and data into open formats while the app still opens cleanly, test replacements, or plan to keep a secondary Mac or virtual machine on macOS 27 or earlier (factoring in the 40 GB+ disk footprint of a macOS VM).',
        ],
        links: [
          {
            label: 'How to uninstall apps on Mac completely (including ~/Library leftovers)',
            href: '/uninstall-apps-on-mac',
          },
          {
            label: 'How much disk space virtual machines use on Mac',
            href: '/virtual-machine-disk-space-mac',
          },
        ],
      },
      {
        id: 'plugins-and-rosetta',
        title: 'Watch out for plug-ins, helpers, and Rosetta installation',
        paragraphs: [
          'A host app marked Universal can still depend on Rosetta if it loads Intel-only components—most commonly VST/AU audio plug-ins in DAWs, older scanner or label-printer drivers, and legacy Office or browser add-ins. Check vendor compatibility for your critical plug-ins as well as the main app.',
          'If you have no Intel-only apps or plug-ins, macOS does not require Rosetta at all (Apple installs it on demand the first time an Intel binary runs, or via softwareupdate --install-rosetta --agree-to-license). If Rosetta is already installed, leave its System Integrity Protection files alone rather than trying to strip system directories manually.',
        ],
        code: ['softwareupdate --install-rosetta --agree-to-license'],
        links: [
          {
            label: 'Can you uninstall Rosetta 2 on Mac? Size, SIP rules & safe checks',
            href: '/uninstall-rosetta-2-mac',
          },
          {
            label: 'Remove leftover background login items and launch agents on Mac',
            href: '/remove-background-items-mac',
          },
        ],
      },
    ],
    questions: [
      {
        q: 'How do I know if a Mac app is Apple silicon native?',
        a: 'Select the app in Finder, press Command + I, and read the Kind line. Application (Apple silicon) and Application (Universal) both run natively, whereas Application (Intel) requires Rosetta and will stop opening in macOS 28.',
      },
      {
        q: 'Which Mac apps will stop working in macOS 28?',
        a: 'Intel-only apps whose Kind is Application (Intel) will stop opening, except for certain older, unmaintained games that Apple says will keep limited Rosetta support. On macOS 27, check System Settings, General, About, Intel-based Apps.',
      },
      {
        q: 'When does Rosetta 2 support end on Mac?',
        a: 'General Rosetta 2 support continues through macOS 27 Golden Gate. Starting with macOS 28, expected in fall 2027, Apple limits Rosetta to certain older, unmaintained games that depend on Intel-based frameworks.',
      },
      {
        q: 'Will Universal apps keep working after Rosetta 2 ends?',
        a: 'Yes. Universal apps contain native Apple silicon code alongside Intel code, so the app itself keeps running natively—unless a workflow inside it relies on an unupdated Intel-only plug-in, driver or helper binary.',
      },
      {
        q: 'Does the Rosetta 2 phase-out affect Intel Macs?',
        a: 'Not directly, because Intel Macs run x86_64 apps natively without Rosetta. However, macOS 26 Tahoe is the final macOS version supported on Intel Macs, so they cannot upgrade to macOS 27 or macOS 28.',
      },
      {
        q: 'Why does my Mac keep warning me about Intel-based apps?',
        a: 'Starting in macOS Tahoe 26.4 and continuing in macOS 27, macOS displays a compatibility alert when launching Rosetta-translated apps so you have time to install an Apple silicon update or replace the software.',
      },
    ],
    related: [
      'uninstall-rosetta-2-mac',
      'uninstall-apps-on-mac',
      'remove-background-items-mac',
      'delete-built-in-apps-mac',
      'apple-intelligence-storage-mac',
    ],
    sources: [
      {
        label: 'Apple Support: using Intel-based apps on a Mac with Apple silicon (102527)',
        url: 'https://support.apple.com/en-us/102527',
      },
      {
        label: 'MacRumors: Apple to phase out Rosetta 2 following macOS 27',
        url: 'https://www.macrumors.com/2025/06/10/apple-to-phase-out-rosetta-2/',
      },
      {
        label: 'MacRumors: macOS Tahoe 26.4 introduces Rosetta 2 compatibility warnings',
        url: 'https://www.macrumors.com/2026/02/16/macos-tahoe-26-4-rosetta-2-warnings',
      },
      {
        label: 'Macworld: how macOS 27 lists Intel-based apps that will not open in macOS 28',
        url: 'https://www.macworld.com/article/3162408',
      },
      {
        label: 'FileWave Knowledge Base: Apple EOL advisory for Intel-based apps and Rosetta dependencies',
        url: 'https://kb.filewave.com/books/end-of-life-statements/page/apple-eol-advisory-intel-based-apps-and-rosetta-dependencies-on-apple-silicon',
      },
      {
        label: 'Workbrew: Rosetta is retiring—what Mac admins and users need to check',
        url: 'https://workbrew.com/blog/rosetta-is-retiring-heres-what-mac-admins-need-to-know',
      },
    ],
  },
];
