# SEO loop progress log

Written by the autonomous SEO loop. Newest entry first. Every entry says what was researched, what shipped, and what still needs the owner.

## Iteration 7 — 6 September 2026

**Research.** The two largest phrases found so far, both rated Easy by Ahrefs' free tool: "how to uninstall apps on mac" and "uninstall apps on mac" (>10,000/month US each) and "how to check storage on mac" (>1,000). "what is taking up space on my mac" and its many variants are each <100. Sources: Apple's "Delete or uninstall apps on Mac", the internet/disc install guide (vendor uninstallers), the App Store guide, and the Storage settings guide.

**Shipped.** `/how-to-check-storage-on-mac` (Storage settings walkthrough, categories, Disk Utility, what the categories hide) and `/uninstall-apps-on-mac` (uninstaller first, Finder, apps that will not delete, Library leftovers, login items). The home page's third guide card now points at the check-storage guide; related links added from free-up-space, mac-storage-full, what-is-system-data, Library and free-tools guides. Library: 38 guides, sitemap 42 URLs.

**Next candidates.** Watch whether the two high-volume pages get indexed; probe more head terms (clear cache macbook, macbook storage, delete files on mac); consider a short "app leftovers" companion for the uninstall guide if it draws traffic.

## Iteration 6 — 6 September 2026

**Quality pass.** Re-read the fourteen guides written tonight against their sources. Two sentences were tightened: the Trash guide no longer claims macOS has "no force-empty command" (it says there is no Secure Empty Trash), and the installer guide says Apple provides "its installers" rather than "every installer" for re-download. Guide sections gained an optional code block, and the commands in the Terminal, Homebrew, npm/pnpm/Yarn/pip, Library, snapshots and post-update guides now render as copyable code instead of inline prose (14 blocks).

**Shipped.** `/mac-storage-glossary`: plain definitions for System Data, Other, available versus free, purgeable space, local snapshots, caches, Optimize Storage, Library, containers, packages, disk images, per-disk Trash, allocated size, Full Disk Access, hidden folders, online-only files, node_modules, Derived Data, Docker.raw and package caches, each pointing at the guide that goes deeper. Related links from what-is-system-data and purgeable-space. Library: 36 guides, sitemap 40 URLs.

**Next candidates.** Check Google's snippet refresh for the home page; consider per-guide OG images; Spotlight indexing; a "which guide do I need" decision page for the hub.

## Iteration 5 — 6 September 2026

**Structure.** The guides hub now has four groups (System Data and a full Mac; Everyday cleanup and choosing tools; Files, backups and cloud storage; Apps and developer tools) instead of one 15-guide block. An inbound-link audit found two guides with no related links pointing at them (macOS installer, Photoshop scratch disk) and five with only one; related lists were adjusted so every guide has at least two inbound links besides the hub.

**Research.** Apple's Time Machine pages (backup frequency, oldest backups deleted when the disk is full, exclusions, connect a new disk) and the local-snapshots page (a snapshot is saved before installing any macOS update). Ahrefs: "time machine backup disk full" <100; "mac storage full after update" returned no ideas, so that page serves the cluster rather than a measured query.

**Shipped.** `/time-machine-backup-disk-full` (storage group) and `/mac-storage-full-after-macos-update` (everyday group). Related links from time-machine-snapshots, mac-storage-full and system-data-keeps-growing. Library: 35 guides, sitemap 39 URLs. IndexNow pinged after deploy.

**Next candidates.** Spotlight indexing after an update; "storage numbers do not match" explainer; a short glossary page for storage terms; check the home page snippet refresh in Google; consider a second OG image for guide pages.

## Iteration 4 — 6 September 2026

**Indexing check.** A `site:cleardisk.app` search from Chrome shows Google has already indexed the home page, the guides hub, terms, privacy and at least two guides ("System Data taking up 100GB or more?" and the Photoshop scratch-disk guide, both crawled within the last day), without Search Console. Home and hub snippets still show old descriptions from an earlier crawl; they will refresh. Added an IndexNow key file and started pinging Bing's IndexNow endpoint after each deploy so the non-Google engines pick pages up quickly too.

**Research.** Ahrefs free generator: "best free mac cleaner" >100 and Easy (from iteration 1) is now covered; "delete macos installer" has a nine-phrase long tail including "can't delete macos installer from trash", all <100; "check disk space mac terminal" <100. Makers' pages read for OnyX, GrandPerspective, OmniDiskSweeper and AppCleaner; Apple's Terminal, download-and-install and bootable-installer pages.

**Shipped.** `/check-disk-space-mac-terminal` (measure-only df and du, no deletion commands), `/delete-macos-installer-mac` (installer in Applications, disk images, bootable-installer exception) and `/best-free-mac-cleaner` (built-in tools first; free apps described from their makers' pages with a disclosure that we make ClearDisk and did not test them side by side). Related links from clear-system-data and disk-space-analyzer. Library: 33 guides, sitemap 37 URLs.

**Next candidates.** Spotlight index and mds; Time Machine backups taking all external-disk space; "storage not showing correctly after macOS update"; a Hindi-market check (India prices ₹599) is out of scope for English pages; refresh hub intro copy to name the new groups.

## Iteration 3 — 6 September 2026

**Research.** Ahrefs free generator: "show library folder mac" and "library folder mac" both >100/month US and Easy, with a long tail of "how to get to / open / unhide library folder mac" phrases; "trash won't empty mac" <100 and Easy; the whole "other storage mac" cluster is <100 (older macOS naming, folded into the System Data pages rather than a doorway page); "photos library taking up space mac" <100. Sources: Apple's Finder "go to a folder" page, "delete files and folders" page (locked items, Delete Immediately, Put Back), Photos "optimize storage" page and the iCloud Photos setup page.

**Shipped.** `/show-library-folder-mac` and `/trash-wont-empty-mac` (System Data group), `/photos-library-taking-up-space-mac` (storage group). Related links: what-is-system-data → Library guide, storage-not-updating → Trash guide, move-photos → Photos guide. Library: 30 guides, sitemap 34 URLs.

**Next candidates.** A measure-only Terminal guide for System Data (du, ls, no deletion); old macOS installer in Applications; Spotlight index size; a free-Mac-tools round-up from official documentation; refresh the hub copy to mention the new groups.

## Iteration 2 — 6 September 2026

**Research.** Ahrefs free generator: "npm cache clean", "clear npm cache", "how to clear npm cache" and "npm cache clear" each >100/month US and Easy, so the developer-cache cluster has measurable demand; "messages taking up space mac", "google drive taking up space mac" and "clear system data mac terminal" returned no ideas or <100, so those pages are written for completeness of the cluster rather than volume. Sources read: npm, pnpm, Yarn (modern and 1.x) and pip docs; Apple's Messages User Guide; Google Drive stream/mirror, Dropbox online-only and low-disk-space pages; Microsoft's Files On-Demand for Mac page.

**Shipped.** `/clear-npm-cache-mac` (developer group; also pnpm, Yarn, pip), `/messages-taking-up-space-on-mac` and `/cloud-drive-taking-up-space-on-mac` (storage group). Related links: Homebrew → npm, iCloud → cloud drives, Mail → Messages. Library: 27 guides, sitemap 31 URLs.

**Next candidates.** Trash will not empty / item in use; old macOS installer in Applications; Photos "Optimize Mac Storage"; a Terminal-only measuring guide for System Data (du, ls) that hands off to Finder for removal; a free-Mac-tools round-up built from official documentation.

## Iteration 1 — 6 September 2026

**Research.** Read Google SERPs for "how to clear system data on mac", "not enough space to update macos" and "mac cleaner one time purchase" from Chrome. Mined Crumb's ~400-post sitemap and DiskCleaner's blog for topic gaps. Ahrefs' free keyword generator (US) gave the first real volumes: "system data mac storage" >1,000/month and Easy; "clear/delete/clean system data mac" and "system data mac storage too large" >100 and Easy; "mac cleaner" >1,000 but Hard; "best free mac cleaner" >100 and Easy; "disk space analyzer mac" >100 and Medium. Saved to [ahrefs-free-2026-09-06.csv](ahrefs-free-2026-09-06.csv) and [2026-09-06-competitors.md](2026-09-06-competitors.md).

**Shipped.** Three guides: `/not-enough-space-to-update-macos` (Apple 102531, 102624, 102662, safe-mode guide, Disk Utility), `/mail-taking-up-space-on-mac` (Apple Mail User Guide pages on storage, attachments and Account Information settings), `/clean-homebrew-cache-mac` (Homebrew manpage and FAQ). Related links updated on mac-storage-full, free-up-space, find-node-modules, clean-docker and clear-xcode. Library: 24 guides, sitemap 28 URLs.

**Next candidates.** Messages attachments; Google Drive/Dropbox/OneDrive local caches; Trash will not empty; npm/pnpm/yarn and pip caches; old macOS installer; a "best free Mac cleaner" round-up built from official documentation only.

**Owner still needed for.** Search Console verification and sitemap submission (the single biggest lever for getting these pages indexed quickly), Bing Webmaster import, directory listings, and any community posting. No orders can arrive from search until Google indexes the pages; verifying Search Console and requesting indexing for the home page and the System Data guides is the fastest way to shorten that wait.
