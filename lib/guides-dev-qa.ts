import type { Guide } from './guides.ts';

export const devQaGuides: Guide[] = [
  {
    slug: 'uninstall-node-js-mac',
    title: 'How to completely uninstall and reinstall Node.js on Mac',
    description:
      'Uninstall Node.js on Mac the way it was installed: Homebrew, nvm, fnm, Volta or the nodejs.org package. Then clear global packages and reinstall cleanly.',
    summary:
      'Find out how Node.js got onto your Mac first, because each method removes differently: brew uninstall for Homebrew, nvm uninstall for nvm, and a file-by-file removal for the nodejs.org installer, which ships no uninstaller. Save your list of global packages, remove the leftovers, then reinstall with one method only.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'find-every-node',
        title: '1. Find every Node.js on your PATH',
        paragraphs: [
          'Open Terminal and run which -a node. It prints every node your shell can find, in the order it searches, and the first line is the one that runs. More than one line means more than one install, which is the usual reason a “removed” Node.js keeps answering. The same path can appear twice when a folder is listed twice in PATH; that is one install, not two.',
          'The path tells you the installer. /opt/homebrew/bin/node is Homebrew on Apple silicon. /usr/local/bin/node is either Homebrew on an Intel Mac or the nodejs.org package: ls -l shows a Homebrew copy as a link into ../Cellar/node, while the package installs a real file. A path under ~/.nvm belongs to nvm, one under ~/.volta to Volta, and one containing fnm to fnm. The nodejs.org installer also registers two package receipts, org.nodejs.node.pkg and org.nodejs.npm.pkg, which pkgutil can list.',
        ],
        code: [
          'which -a node',
          'node -v',
          'ls -l $(which -a node)',
          'brew list --versions node',
          'pkgutil --pkgs | grep -i nodejs',
        ],
      },
      {
        id: 'save-global-packages',
        title: '2. Save the list of global packages',
        paragraphs: [
          'npm’s documentation puts packages installed with npm install -g in {prefix}/lib/node_modules and links their commands into {prefix}/bin, where the prefix is usually the folder Node.js was installed into. npm root -g prints that folder for the Node.js you are running. Save the list before removing anything, so you can put back the tools you actually use rather than everything you once tried.',
          'Under a version manager, each Node.js version has its own global packages, so repeat the list for each version you care about. The npm download cache in ~/.npm is separate: it survives an uninstall, is shared by every version, and has its own guide linked below.',
        ],
        code: ['npm root -g', 'npm ls -g --depth=0 > ~/npm-globals.txt'],
      },
      {
        id: 'managed-installs',
        title: '3. Remove a Homebrew or version-manager install',
        paragraphs: [
          'For Homebrew, brew uninstall node removes the formula; repeat it for any versioned formula, such as node@22, that brew list shows. If another installed formula needs Node.js, Homebrew refuses and names it, so decide whether you still want that formula before forcing anything. Global packages in $(brew --prefix)/lib/node_modules sit outside Homebrew’s own copy of Node.js, so look in that folder afterwards.',
          'For nvm, nvm ls lists installed versions and nvm uninstall removes one. nvm will not remove the version currently in use, so run nvm deactivate first. To remove nvm itself, its README says to run nvm unload, delete the ~/.nvm folder, and remove the lines that load nvm from your shell profile. On macOS 15 and later, the built-in trash command moves that folder to the Trash instead of deleting it outright.',
          'fnm has fnm list and fnm uninstall for individual versions. Volta’s documentation removes it by deleting ~/.volta and the two Volta lines in your shell profile.',
        ],
        code: [
          'brew uninstall node',
          'nvm ls',
          'nvm deactivate',
          'nvm uninstall 22',
          'nvm unload',
          'trash ~/.nvm',
        ],
      },
      {
        id: 'pkg-install',
        title: '4. Remove the nodejs.org package by hand',
        paragraphs: [
          'The installer from nodejs.org has no uninstaller. Its receipt lists what it put on the disk, relative to the top of the drive: node in usr/local/bin, C headers in usr/local/include/node, and documentation and a man page under usr/local/share. The full listing also names shared folders such as usr/local/bin itself, so read it rather than feeding it to a delete command. npm is a second package, installed into usr/local/lib/node_modules/npm.',
          'Some files are missing from the receipts. The npm and npx links in /usr/local/bin are created by an installer script, and every global package you added linked its own command there too; ls -l shows them pointing into node_modules. In Finder, choose Go → Go to Folder, open /usr/local/bin, select node, npm, npx and those links, and choose Move to Trash; Finder asks for an administrator password. Do the same for the node folder in /usr/local/include, the node_modules folder in /usr/local/lib, and the node items the receipt lists under /usr/local/share.',
          'Finally, pkgutil --forget removes the two receipts. It deletes no files; it only stops macOS recording those packages as installed. If pkgutil --pkgs showed a different nodejs ID from an older installer, forget that one too. On an Intel Mac that also has Homebrew, leave the rest of /usr/local alone, because Homebrew uses the same folder.',
        ],
        code: [
          'pkgutil --only-files --files org.nodejs.node.pkg',
          'ls -l /usr/local/bin | grep node_modules',
          'sudo pkgutil --forget org.nodejs.node.pkg',
          'sudo pkgutil --forget org.nodejs.npm.pkg',
        ],
      },
      {
        id: 'reinstall',
        title: '5. Check the removal, then reinstall one way',
        paragraphs: [
          'Open a new Terminal window, or run hash -r, and run which -a node again. “node not found” means every copy is gone; any path still printed is the install you missed. Look in ~/.zshrc and ~/.zprofile for lines that load nvm, fnm or Volta or add an old Node.js folder to PATH, and remove them. Keep ~/.npmrc if you plan to reinstall: it can hold registry settings and access tokens.',
          'Then choose one installation method. Homebrew suits a single current version that updates with your other tools. A version manager such as nvm or fnm suits projects that need different versions, and the nodejs.org download page lists both beside its installer. Mixing methods is what creates duplicate installs in the first place. After installing, reinstall the global tools from the list you saved, and check node -v and which -a node once more.',
        ],
        code: ['hash -r', 'which -a node', 'brew install node', 'node -v'],
      },
    ],
    questions: [
      {
        q: 'How do I know which method was used to install Node.js on my Mac?',
        a: 'Run which -a node in Terminal to see the path; /opt/homebrew/bin/node points to Homebrew, a path under ~/.nvm belongs to nvm, and a plain /usr/local/bin/node with no version manager usually points to the nodejs.org installer.',
      },
      {
        q: 'Does the nodejs.org Node.js installer include an uninstaller?',
        a: 'No, it ships no uninstaller, so removing it means deleting files by hand based on its package receipts, then running pkgutil --forget to clear the installation record.',
      },
      {
        q: 'Why does my Mac still find an old version of Node.js after I removed it?',
        a: 'More than one installation method may be on your Mac at once, and which -a node lists every copy your shell can find in search order. A leftover line in your shell profile from nvm, fnm, or Volta can also add an old folder back to PATH.',
      },
      {
        q: 'Will uninstalling Node.js delete my global npm packages?',
        a: "The packages live in that installation's node_modules folder and are removed along with it, so save the list of your global packages with npm before uninstalling so you can reinstall the ones you actually use.",
      },
    ],
    related: [
      'clear-npm-cache-mac',
      'find-node-modules-folders-mac',
      'uninstall-homebrew-mac',
      'developer-storage-on-mac',
    ],
    sources: [
      {
        label: 'Node.js: download Node.js',
        url: 'https://nodejs.org/en/download',
      },
      {
        label: 'npm Docs: folders used by npm',
        url: 'https://docs.npmjs.com/cli/v11/configuring-npm/folders',
      },
      {
        label: 'nvm: README, uninstalling and removal',
        url: 'https://github.com/nvm-sh/nvm',
      },
    ],
  },
  {
    slug: 'uninstall-anaconda-mac',
    title: 'How to uninstall Anaconda completely from macOS',
    description:
      'Uninstall Anaconda or Miniconda on Mac with the uninstall.sh script, undo conda init in your shell profile, and remove Navigator, config files and caches.',
    summary:
      'Run the uninstall.sh script in your Anaconda folder (Anaconda 2025.06 and later, Miniconda 24.11.1 and later), then check that the conda block is gone from your shell profile. Older installs have no script: run conda init --reverse --all, then move the install folder to the Trash.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'find-the-install',
        title: '1. Find the install and what it holds',
        paragraphs: [
          'Everything conda installed lives under one base folder, including the environments in its envs folder. conda info --base prints it. Anaconda’s Terminal installer defaults to ~/anaconda3 and its graphical .pkg installer to /opt/anaconda3; Miniconda uses miniconda3 in the same places. conda env list shows every environment, including any stored elsewhere, such as ~/.conda/envs. The last command below shows whether your version shipped the uninstall script.',
          'Uninstalling deletes those environments with no way back. Export the ones you might rebuild, as the conda cleanup guide linked below describes, and copy out notebooks or data you saved inside the install folder. If the goal is only disk space, conda clean and removing old environments may recover enough without uninstalling.',
        ],
        code: [
          'conda info --base',
          'conda env list',
          'du -sh "$(conda info --base)"',
          'ls "$(conda info --base)/uninstall.sh"',
        ],
      },
      {
        id: 'uninstall-script',
        title: '2. Run the uninstall script',
        paragraphs: [
          'Anaconda’s documentation starts with conda deactivate, so the base environment is not active while it is removed, then runs uninstall.sh from the install folder. An install in /opt is a system-wide install and needs sudo -E, which runs the script with administrator rights while keeping your environment variables. Miniconda follows the same pattern with miniconda3 in the path.',
          'Three optional flags remove more. --remove-caches deletes package and index caches. --remove-config-files takes user, system or all and deletes the matching .condarc files. --remove-user-data deletes user data such as ~/.conda. Anaconda’s Miniconda page advises keeping .condarc if you have custom settings and plan to reinstall, so leave out --remove-config-files in that case.',
        ],
        code: [
          'conda deactivate',
          '~/anaconda3/uninstall.sh',
          'sudo -E /opt/anaconda3/uninstall.sh',
          '~/anaconda3/uninstall.sh --remove-caches --remove-config-files user --remove-user-data',
        ],
      },
      {
        id: 'older-installs',
        title: '3. Older installs: undo conda init, then remove the folder',
        paragraphs: [
          'Without the script, reverse the shell setup first, while conda still works. conda init --reverse --all removes the block conda added to each shell’s profile; add --dry-run to see what it would change. Then remove the base folder. Anaconda’s page uses rm -rf, which deletes without asking; moving the folder to the Trash gives you a last check. For a folder in your home, the trash command in macOS 15 and later does that. For /opt/anaconda3, choose Go → Go to Folder in Finder, open /opt, and move anaconda3 to the Trash with your administrator password.',
          'The folder holds a great many small files, so emptying the Trash can take a while. For configuration, the documentation lists ~/.condarc, ~/.conda and ~/.continuum. Older guides recommend a package called anaconda-clean; Anaconda’s current uninstall page does not mention it, and the files it lists are the ones above.',
        ],
        code: [
          'conda activate',
          'conda init --reverse --all --dry-run',
          'conda init --reverse --all',
          'trash ~/anaconda3 ~/.condarc ~/.conda ~/.continuum',
        ],
      },
      {
        id: 'shell-profile',
        title: '4. Check your shell profile',
        paragraphs: [
          'conda init writes a block between the lines # >>> conda initialize >>> and # <<< conda initialize <<<. zsh, the default shell on current macOS, reads it from ~/.zshrc; bash uses ~/.bash_profile. Open those files in a text editor and confirm the block is gone. A leftover block often fails quietly and leaves a deleted folder at the front of PATH, so no error message does not prove the file is clean.',
          'Then open a new Terminal window. The (base) prefix should be gone from the prompt, and which -a conda python3 should no longer list the old folder. python3 then usually resolves to /usr/bin/python3, which relies on Apple’s Command Line Tools, or to a Homebrew Python if you have one.',
        ],
        code: [
          'grep -n "conda initialize" ~/.zshrc ~/.bash_profile',
          'which -a conda python3',
        ],
      },
      {
        id: 'navigator-and-leftovers',
        title: 'Navigator and other leftovers',
        paragraphs: [
          'Anaconda Navigator is a conda package in the base environment, and the graphical installer adds an Anaconda-Navigator icon to Launchpad. Uninstalling Anaconda removes the program; if the icon is still in Applications or Launchpad afterwards, move it to the Trash. To drop only Navigator and keep conda, Anaconda documents conda remove --name base anaconda-navigator, which leaves your environments, packages and settings in place.',
          'Some files are shared with other Python installs, so check before removing them. ~/.jupyter and ~/.ipython hold Jupyter and IPython settings used by any Python on the Mac, and pip keeps its own download cache in ~/Library/Caches/pip, which the pip cache guide covers.',
        ],
        code: ['conda remove --name base anaconda-navigator'],
      },
    ],
    questions: [
      {
        q: 'Does uninstalling Anaconda delete my conda environments?',
        a: 'Yes, uninstalling deletes those environments with no way back, so export any environments you might want to rebuild before running the uninstall.',
      },
      {
        q: 'Does every version of Anaconda include an uninstall script?',
        a: 'No, only newer releases do, specifically Anaconda 2025.06 and later and Miniconda 24.11.1 and later. Older installs have no script, so you reverse the shell setup with conda init --reverse --all and then remove the install folder yourself.',
      },
      {
        q: 'Why does my Terminal still show (base) after I uninstalled Anaconda?',
        a: 'A leftover conda initialize block in your shell profile often fails quietly and can leave a deleted folder at the front of PATH. Check that the block between the conda initialize markers is fully removed from files like ~/.zshrc.',
      },
      {
        q: 'Can I remove just Anaconda Navigator without uninstalling all of Anaconda?',
        a: 'Yes, running conda remove --name base anaconda-navigator removes only Navigator, leaving your environments, packages, and settings in place.',
      },
    ],
    related: [
      'clean-conda-disk-space-mac',
      'clear-pip-cache-mac',
      'developer-storage-on-mac',
      'uninstall-apps-on-mac',
    ],
    sources: [
      {
        label: 'Anaconda: uninstalling Anaconda Distribution',
        url: 'https://www.anaconda.com/docs/getting-started/anaconda/uninstall',
      },
      {
        label: 'Anaconda: uninstalling Miniconda',
        url: 'https://www.anaconda.com/docs/getting-started/miniconda/uninstall',
      },
      {
        label: 'Anaconda: uninstalling Navigator',
        url: 'https://www.anaconda.com/docs/legacy/anaconda-navigator/uninstall-navigator',
      },
    ],
  },
  {
    slug: 'uninstall-homebrew-mac',
    title: 'How to uninstall Homebrew and everything it installed',
    description:
      'Remove every Homebrew package on Mac, then Homebrew itself with the official uninstall script. Preview it with --dry-run and see what stays in /opt/homebrew.',
    summary:
      'To remove only the packages, save a Brewfile, then run brew uninstall on your casks and formulae. To remove Homebrew itself, run the official uninstall.sh from Homebrew’s install repository, preview it with --dry-run first, and review the leftover files it lists at the end.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'before-you-start',
        title: '1. Save a list and stop services',
        paragraphs: [
          'brew bundle dump writes every tap, formula and cask you have into a Brewfile, the easiest way back if you change your mind; the listing guide linked below explains the other list commands. Then run brew services list. A service started with brew services has a launch agent file in ~/Library/LaunchAgents, and brew services stop both stops it and unregisters it, so nothing tries to start a deleted program at login.',
          'Check for data before code. A database installed with Homebrew, such as PostgreSQL or MySQL, usually keeps its data under $(brew --prefix)/var. Export anything you need with the database’s own tools first. Configuration files you edited live under $(brew --prefix)/etc.',
        ],
        code: [
          'brew bundle dump --file=~/Brewfile',
          'brew services list',
          'brew services stop postgresql@17',
        ],
      },
      {
        id: 'remove-packages',
        title: '2. Uninstall every cask and formula',
        paragraphs: [
          'Start with casks, because some casks depend on formulae. brew uninstall --cask removes each app from Applications along with Homebrew’s record of it. Adding --zap also deletes the app’s preferences and support files, and Homebrew warns that this may remove files shared with other apps, so keep it for apps you are finished with entirely.',
          'Then pass every formula to brew uninstall in one command. Homebrew only blocks a removal when a formula or cask that is staying depends on it, so removing them together avoids dependency errors. brew list should then print nothing. If you only wanted a smaller Homebrew, uninstall the leaves you no longer use and let brew autoremove take their dependencies instead, as the cache guide shows.',
        ],
        code: [
          'brew list --cask',
          'brew uninstall --cask $(brew list --cask)',
          'brew uninstall $(brew list --formula)',
          'brew list',
        ],
      },
      {
        id: 'preview-the-script',
        title: '3. Preview the official uninstall script',
        paragraphs: [
          'Homebrew’s FAQ points to the uninstall script in the Homebrew/install repository on GitHub. Its README gives a one-line command that downloads and runs the script, and also suggests downloading it first and running it with --help. Downloading first lets you read it and, more usefully, run it with --dry-run, which prints each “Would delete” line without removing anything.',
          'The other options: --skip-cache-and-logs keeps Homebrew’s cache and log folders, -f or --force skips the confirmation question, and -p or --path points the script at a specific prefix. That last one matters on an Apple silicon Mac migrated from an Intel one, which can have both /opt/homebrew and an old /usr/local install. The script picks one, so check the dry run names the one you mean, and run it again with --path=/usr/local for the other.',
        ],
        code: [
          'curl -fsSLo uninstall.sh https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh',
          '/bin/bash uninstall.sh --help',
          '/bin/bash uninstall.sh --dry-run',
        ],
      },
      {
        id: 'run-it',
        title: '4. Run it and read what it leaves',
        paragraphs: [
          'Run the script without --dry-run and answer y when it asks whether you are sure. It asks for your administrator password where it needs sudo. It deletes the Cellar and Caskroom, Homebrew’s own files, broken links, empty folders, and Homebrew’s caches and logs. Apps from casks you did not uninstall in step 2 stay in Applications; they keep working, but nothing updates them any more.',
          'It then prints “The following possible Homebrew files were not deleted” with a list. These are folders that still contain something: configuration in etc, data in var, and packages that npm or pip installed into Homebrew’s lib folder. On Apple silicon, the /opt/homebrew folder itself also stays. Review the list, keep any data you need, and move the rest to the Trash with Finder’s Go → Go to Folder. On an Intel Mac, remove only the listed items: other installers, including the nodejs.org package, also use /usr/local.',
        ],
        code: ['/bin/bash uninstall.sh'],
      },
      {
        id: 'shell-profile',
        title: '5. Tidy your shell profile',
        paragraphs: [
          'Homebrew’s installer asks you to add a line containing brew shellenv to ~/.zprofile. Once brew is gone, that line fails in every new Terminal window with “no such file or directory: /opt/homebrew/bin/brew”. Delete the line, open a new window, and check that which brew finds nothing.',
          'Homebrew’s installer may also have installed Apple’s Command Line Tools. They are Apple software rather than part of Homebrew, git and the compilers depend on them, and the uninstall script leaves them in place; the Command Line Tools guide explains how to check or reinstall them.',
        ],
        code: ['grep -n "brew shellenv" ~/.zprofile ~/.zshrc', 'which brew'],
      },
    ],
    questions: [
      {
        q: 'Does uninstalling Homebrew remove the apps it installed?',
        a: "Not unless you uninstall them first. Apps from casks you didn't remove beforehand stay in Applications and keep working, but nothing updates them anymore once Homebrew is gone.",
      },
      {
        q: "What files does Homebrew's uninstall script leave behind?",
        a: 'It prints a list of "possible Homebrew files" that weren\'t deleted, including configuration in etc, data in var, and packages npm or pip installed into Homebrew\'s lib folder. On Apple silicon, the /opt/homebrew folder itself also stays.',
      },
      {
        q: "Can I see what Homebrew's uninstall script will delete before running it?",
        a: 'Yes, download the script first and run it with --dry-run, which prints each "Would delete" line without actually removing anything.',
      },
      {
        q: 'Does uninstalling Homebrew also remove the Xcode Command Line Tools?',
        a: "No. They're Apple software rather than part of Homebrew, and the uninstall script leaves them in place even though Homebrew's installer may have installed them originally.",
      },
    ],
    related: [
      'homebrew-list-installed-packages',
      'clean-homebrew-cache-mac',
      'uninstall-node-js-mac',
      'reinstall-command-line-tools-mac',
    ],
    sources: [
      {
        label: 'Homebrew: FAQ, how do I uninstall Homebrew?',
        url: 'https://docs.brew.sh/FAQ',
      },
      {
        label: 'Homebrew: install repository README, uninstall Homebrew',
        url: 'https://github.com/Homebrew/install',
      },
      {
        label: 'Homebrew: brew manual page',
        url: 'https://docs.brew.sh/Manpage',
      },
    ],
  },
  {
    slug: 'homebrew-list-installed-packages',
    title: 'How to list all packages installed with Homebrew',
    description:
      'List Homebrew packages on Mac with brew list, brew leaves and brew deps --tree, see which formulae use the most space, and save everything to a Brewfile.',
    summary:
      'Run brew list: it prints your installed formulae, then your casks. brew leaves narrows that to formulae nothing else depends on, brew deps --tree --installed shows why the rest are there, and brew bundle dump saves the whole list to a Brewfile you can reinstall from.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'brew-list',
        title: '1. List formulae and casks',
        paragraphs: [
          'brew list with no arguments prints installed formulae and then installed casks: in columns in a Terminal window, one per line when the output goes to a file or another command. Formulae are command-line packages Homebrew keeps in its Cellar; casks are Mac apps and other prebuilt software. --formula and --cask print one kind only, and --versions adds the installed version numbers.',
          'Give brew list a name and it describes that package instead: for a formula it summarises the files in its folder, and for a cask it lists what it installed, such as an app in Applications. brew list --pinned shows formulae you have pinned so brew upgrade leaves them alone.',
        ],
        code: [
          'brew list',
          'brew list --formula',
          'brew list --cask',
          'brew list --versions',
          'brew list node',
        ],
      },
      {
        id: 'leaves',
        title: '2. Separate what you asked for from dependencies',
        paragraphs: [
          'Most formulae on a typical Mac arrived as dependencies of something else. brew leaves lists installed formulae that no other installed formula or cask depends on, which is usually close to the list of things you chose. --installed-on-request narrows that to leaves you installed yourself, and --installed-as-dependency shows leaves that came in as a dependency but are no longer needed by anything.',
          'brew list --installed-on-request answers a slightly different question: every formula you installed by name, including ones that other formulae also use. The short forms -r and -p work for leaves, but the long forms are easier to read back later. Leaves installed as dependencies are what brew autoremove targets; the cache cleanup guide covers that command.',
        ],
        code: [
          'brew leaves',
          'brew leaves --installed-on-request',
          'brew leaves --installed-as-dependency',
          'brew list --installed-on-request',
        ],
      },
      {
        id: 'dependency-tree',
        title: '3. See why a formula is installed',
        paragraphs: [
          'brew deps --tree --installed draws a tree under each installed formula showing what it pulled in. It gets long on a busy Mac, so pass a name to see one package’s tree. The reverse question, what needs this formula, is brew uses --installed, which reports only installed formulae and casks.',
          'Run brew uses before removing a formula that is not a leaf. brew uninstall refuses to remove something another installed formula or cask needs, and names what needs it. That refusal usually means the removal would break a tool you still use.',
        ],
        code: [
          'brew deps --tree --installed',
          'brew deps --tree node',
          'brew uses --installed openssl@3',
        ],
      },
      {
        id: 'sizes',
        title: '4. Find the packages using the most space',
        paragraphs: [
          'Formulae live in the Cellar, one folder per package, so du can measure each one and sort -h puts the largest last. The Caskroom holds Homebrew’s records for each cask and, for command-line casks such as SDKs, the software itself; an app a cask installed is counted in Applications instead. brew --cellar and brew --caskroom print the right folders on both Apple silicon and Intel Macs.',
          'brew info shows one package in detail, including a line under its installed versions with the number of files and their size. Removing a large formula frees nothing if another formula still depends on it, so check brew uses first. Downloads that Homebrew keeps after installing are a separate folder, covered by the cache guide linked below.',
        ],
        code: [
          'du -sh "$(brew --cellar)"/* | sort -h',
          'du -sh "$(brew --caskroom)"/* | sort -h',
          'brew info node',
        ],
      },
      {
        id: 'brewfile',
        title: '5. Save the list as a Brewfile',
        paragraphs: [
          'brew bundle dump writes your taps, formulae and casks into a file called Brewfile, plus other supported entries, such as Mac App Store apps or VS Code extensions, when those tools are installed. Homebrew describes it as an installed-state snapshot: keep it in version control, compare two snapshots with diff, or use it to set up a new Mac. By default it includes a short description of each package.',
          'Dump refuses to overwrite an existing Brewfile; add --force to replace it, or use --file=- to print the list in Terminal instead. brew bundle install with the same --file path installs everything in it again. brew bundle cleanup works the other way and removes what is not in the file, so read its list before adding --force.',
        ],
        code: [
          'brew bundle dump --file=~/Brewfile',
          'brew bundle dump --file=-',
          'brew bundle install --file=~/Brewfile',
        ],
      },
    ],
    questions: [
      {
        q: 'How do I see which Homebrew packages I chose versus what came in as dependencies?',
        a: 'brew leaves lists formulae that no other installed formula or cask depends on, which is close to what you chose yourself, and --installed-on-request narrows it further to formulae you installed by name.',
      },
      {
        q: "How can I tell why a Homebrew formula is installed if I didn't choose it?",
        a: "Run brew uses --installed on that formula to see what still depends on it, and check before removing anything that isn't a leaf, since brew uninstall will refuse and name what needs it.",
      },
      {
        q: 'How do I back up my list of Homebrew packages before a fresh Mac setup?',
        a: 'Run brew bundle dump to write your taps, formulae, and casks into a Brewfile, which Homebrew describes as an installed-state snapshot you can keep in version control or use to set up a new Mac.',
      },
      {
        q: 'Which Homebrew packages are taking up the most disk space?',
        a: 'Formulae live in the Cellar and casks in the Caskroom, so running du on those folders and sorting by size shows the largest ones; brew info on a specific package also shows its installed size.',
      },
    ],
    related: [
      'clean-homebrew-cache-mac',
      'uninstall-homebrew-mac',
      'developer-storage-on-mac',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      {
        label: 'Homebrew: brew manual page',
        url: 'https://docs.brew.sh/Manpage',
      },
      {
        label: 'Homebrew: brew bundle and Brewfile',
        url: 'https://docs.brew.sh/Brew-Bundle-and-Brewfile',
      },
    ],
  },
  {
    slug: 'pip-no-cache-dir',
    title: 'What is pip’s --no-cache-dir good for?',
    description:
      'pip’s --no-cache-dir skips the download and wheel caches for one command. When it helps on a Mac or in Docker builds, how to set it, and when purging wins.',
    summary:
      '--no-cache-dir makes a single pip command ignore its cache: nothing is read from it and nothing is saved to it, so every file is downloaded fresh. It earns its place in Docker images and for ruling out a stale cached build; on your own Mac, removing one package from the cache is usually the better fix.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-skips',
        title: 'What the flag switches off',
        paragraphs: [
          'pip keeps two caches, both in ~/Library/Caches/pip on a Mac. The HTTP cache works like a browser cache for files pip downloads from a package index, and pip still checks with the server when an entry has expired. The wheel cache stores wheels pip built itself from source packages, so the next install of the same version skips the build.',
          '--no-cache-dir turns both off for that one command. pip downloads every file again, builds any source package again, and saves nothing afterwards. Your existing cache is not touched, and the next ordinary pip command uses it as before. pip’s documentation advises against disabling the cache unless something at a higher level caches for you, such as layered container builds.',
        ],
        code: [
          'python3 -m pip cache dir',
          'python3 -m pip cache info',
          'python3 -m pip install --no-cache-dir requests',
        ],
      },
      {
        id: 'docker-and-ci',
        title: '1. Use it where the cache is thrown away or shipped',
        paragraphs: [
          'In a Dockerfile, a pip cache written during RUN pip install ends up inside that image layer, where it adds size to every copy of the image and is never used again. Adding --no-cache-dir to that command, or ENV PIP_NO_CACHE_DIR=1 near the top of the Dockerfile, keeps it out. Inside a Linux container the cache path is ~/.cache/pip, usually /root/.cache/pip, not the Mac path.',
          'If rebuilds are slow because every build downloads the same wheels, Docker’s documentation shows a cache mount instead: RUN --mount=type=cache,target=/root/.cache/pip in front of pip install -r requirements.txt. The cache then stays in Docker’s build cache rather than in the image, and survives between builds. On a Mac that build cache lives inside Docker Desktop’s disk image, which the Docker build cache guide explains how to measure and prune. A CI runner that starts empty on every job gains nothing from pip’s cache either.',
        ],
      },
      {
        id: 'stale-build',
        title: '2. Rule out a stale cached build',
        paragraphs: [
          'The wheel cache is keyed to a package’s version, so a pinned version is never swapped for another. What pip can reuse is an old build of the same version. A package compiled from source against a Homebrew library can fail with “Library not loaded” after brew upgrade replaces that library, and pip keeps installing the same cached build into every new environment. A private index that republished a version number with new contents is the other common case.',
          'Install that one package fresh. --force-reinstall reinstalls even though the version is already present, --no-cache-dir makes pip fetch and build again instead of reusing the cache, and --no-deps keeps the reinstall from spreading to every dependency, which --force-reinstall would otherwise include. Lines starting “Using cached” in pip’s output show when it is reading from the cache, so you can compare runs.',
          'To fix future installs too, remove that package’s wheels with pip cache remove, which accepts a name or a glob pattern; pip cache list shows what matches first. The pip cache guide covers purging everything.',
        ],
        code: [
          'python3 -m pip install --force-reinstall --no-cache-dir --no-deps psycopg2',
          'python3 -m pip cache list "psycopg2*"',
          'python3 -m pip cache remove psycopg2',
        ],
      },
      {
        id: 'make-it-default',
        title: '3. Turn it on for every command, if you must',
        paragraphs: [
          'Each pip option has an environment variable named PIP_ plus the option in capitals, so PIP_NO_CACHE_DIR=1 disables the cache for every pip command in that shell or container. In a configuration file, pip’s documentation shows no-cache-dir = false under [global] to switch the cache off. That looks backwards but is deliberate: for compatibility with older releases, pip treats any valid true or false value for this option as “disable”, so PIP_NO_CACHE_DIR=0 disables it too.',
          'To turn caching back on, remove the setting rather than changing its value. If pip cache dir answers “ERROR: pip cache commands can not function since cache is disabled.”, something has set it: pip config list shows values from configuration files, and env | grep PIP_ shows environment variables. On a laptop, leaving the cache on and clearing it now and then is usually the better trade.',
        ],
        code: [
          'export PIP_NO_CACHE_DIR=1',
          'python3 -m pip config list',
          'env | grep PIP_',
          'unset PIP_NO_CACHE_DIR',
        ],
      },
    ],
    questions: [
      {
        q: "When should I use pip's --no-cache-dir flag?",
        a: "It's most useful in a Dockerfile, since a pip cache written during a build gets baked into that image layer and is never reused, and for ruling out a stale cached build by forcing a fresh download.",
      },
      {
        q: "Does --no-cache-dir delete pip's existing cache?",
        a: 'No, it only skips the cache for that one command: nothing is read from it and nothing is saved to it, while the existing cache on disk is left untouched for the next ordinary pip command.',
      },
      {
        q: 'Should I always run pip with --no-cache-dir on my Mac?',
        a: 'Probably not. On your own Mac, removing one problem package from the cache with pip cache remove is usually the better fix, since leaving the cache on and clearing it occasionally is a better trade on a laptop.',
      },
      {
        q: 'Why does pip keep installing a broken build even after I upgraded a library?',
        a: "pip's wheel cache is keyed to a package's version, not its contents, so it can keep reusing an old cached build of that same version. Reinstall with --force-reinstall and --no-cache-dir to make pip fetch and build it again.",
      },
    ],
    related: [
      'clear-pip-cache-mac',
      'clear-docker-build-cache-mac',
      'clean-docker-disk-space-mac',
      'clean-conda-disk-space-mac',
    ],
    sources: [
      {
        label: 'pip: caching',
        url: 'https://pip.pypa.io/en/stable/topics/caching/',
      },
      {
        label: 'pip: configuration',
        url: 'https://pip.pypa.io/en/stable/topics/configuration/',
      },
      {
        label: 'Docker Docs: optimize cache usage in builds',
        url: 'https://docs.docker.com/build/cache/optimize/',
      },
    ],
  },
  {
    slug: 'xcode-xip-file-mac',
    title: 'What is a .xip file on Mac, and can you delete it?',
    description:
      'A .xip file is Apple’s signed archive format, used for Xcode downloads. How to expand one, move Xcode to Applications, and delete the .xip safely afterwards.',
    summary:
      'A .xip is a digitally signed archive: macOS checks Apple’s signature, then expands the contents, which for a developer download is Xcode.app. Once Xcode is in Applications and opens, the .xip is only a spare copy of what you installed, and you can move it to the Trash.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-is',
        title: 'What a .xip file is',
        paragraphs: [
          'XIP is an archive format with a digital signature attached. Apple’s xip manual page describes it as a secure archive for distribution, and notes that since macOS Sierra only archives signed by Apple are trusted, with the format deprecated for anyone else. In practice, the .xip you meet is almost always an Xcode download from Apple’s developer site.',
          'The signature is why opening one takes longer than a zip. Archive Utility first verifies that the archive is intact and signed by Apple, then expands it. An archive that fails verification, usually because a download was interrupted, will not expand; download it again rather than trying other tools on it.',
        ],
      },
      {
        id: 'expand',
        title: '1. Expand it where there is room',
        paragraphs: [
          'Double-click the .xip in Finder. Archive Utility shows its progress, then places Xcode.app in the same folder as the archive, usually Downloads. During expansion the archive and the growing app both take space, so check that the disk has room for both first. If it runs out partway, free space and start again.',
          'From Terminal, xip --expand does the same job and writes into the current folder, so change to the folder you want first and replace the file name with your download’s. The option cannot be combined with any other. Expect it to run for a while with little output. Stick with Apple’s own tools: the signature check they run is what makes a .xip worth trusting.',
        ],
        code: ['df -h ~', 'cd ~/Downloads', 'xip --expand Xcode_26.1.xip'],
      },
      {
        id: 'move-to-applications',
        title: '2. Move Xcode into Applications',
        paragraphs: [
          'Drag Xcode.app into Applications. On the same disk, Finder moves it rather than copying, so this is quick and needs no extra space. If an Xcode is already there, Finder asks whether to replace it. To keep both, rename one first, for example to Xcode-beta.app, the name Apple’s own examples use for a second copy.',
          'Open the new Xcode once so it can install its required components. For command-line builds, point xcode-select at the copy you want and run xcodebuild -runFirstLaunch, as Apple’s component guide shows; xcode-select -p confirms which copy is active.',
        ],
        code: [
          'sudo xcode-select --switch /Applications/Xcode-beta.app',
          'xcodebuild -runFirstLaunch',
          'xcode-select -p',
        ],
      },
      {
        id: 'delete-the-xip',
        title: '3. Delete the .xip',
        paragraphs: [
          'Once Xcode opens and builds your project, the .xip is a second copy of something already installed. Move it to the Trash, then empty the Trash to get the space back. Keep it only if you will install the same version on another Mac or in a virtual machine and want to skip the download.',
          'Old archives are easy to forget, often one per Xcode release you tried. Spotlight can list them, and ClearDisk’s large-files list shows them by size with their path, leaving the decision to you. An Xcode.app expanded in Downloads and then copied elsewhere, instead of moved, is a duplicate too.',
        ],
        code: ['mdfind -name .xip', 'ls -lh ~/Downloads/*.xip'],
      },
      {
        id: 'app-store-or-download',
        title: 'App Store or developer download?',
        paragraphs: [
          'Apple offers Xcode in the Mac App Store and, for betas and older versions, on its developer downloads page, which needs an Apple Account sign-in but no paid Developer Program membership. The App Store installs and updates Xcode in place and leaves no .xip behind. The downloads page is how you get a specific version, such as one that still runs on your macOS release; Apple’s Xcode support page lists which macOS each version needs.',
          'Each extra copy of Xcode in Applications is a full app, so two versions take roughly twice the space. They share the data in ~/Library/Developer, such as Derived Data and simulator runtimes, which have their own guides. To remove a version, quit it, make sure xcode-select -p does not point at it, and move it to the Trash.',
        ],
      },
    ],
    questions: [
      {
        q: 'Can I delete the Xcode .xip file after installing Xcode?',
        a: 'Yes, once Xcode is in Applications and opens, the .xip is just a spare copy of what you already installed, so you can move it to the Trash and empty it to get the space back.',
      },
      {
        q: "Why won't my Xcode .xip file expand properly?",
        a: "It's likely a signature verification failure, usually caused by an interrupted download. Archive Utility checks that the archive is intact and signed by Apple before expanding it, so download it again rather than trying other tools on it.",
      },
      {
        q: 'Does downloading Xcode from the Mac App Store leave a .xip file behind?',
        a: "No. The App Store installs and updates Xcode in place with no .xip involved; the file only shows up when you download Xcode directly from Apple's developer downloads page.",
      },
      {
        q: 'How much extra space do multiple installed copies of Xcode use?',
        a: 'Each copy is a full app, so two versions take roughly twice the space, though they share some data, like Derived Data and simulator runtimes, stored elsewhere in ~/Library/Developer.',
      },
    ],
    related: [
      'clear-xcode-derived-data',
      'remove-unused-ios-simulators',
      'reinstall-command-line-tools-mac',
      'clear-downloads-folder-mac',
    ],
    sources: [
      {
        label: 'Apple Developer: Xcode resources',
        url: 'https://developer.apple.com/xcode/resources/',
      },
      {
        label: 'Apple Developer: Xcode support',
        url: 'https://developer.apple.com/support/xcode/',
      },
      {
        label:
          'Apple Developer: downloading and installing additional Xcode components',
        url: 'https://developer.apple.com/documentation/xcode/downloading-and-installing-additional-xcode-components',
      },
    ],
  },
  {
    slug: 'reinstall-command-line-tools-mac',
    title: 'How to reinstall the Xcode Command Line Tools on Mac',
    description:
      'Reinstall the Xcode Command Line Tools on Mac: check the version, remove the folder Apple documents, run xcode-select --install, and fix xcrun path errors.',
    summary:
      'Apple’s documented reinstall is two steps: remove /Library/Developer/CommandLineTools with sudo rm -rf, then run xcode-select --install and click Install. Check first with xcode-select -p and pkgutil: after a macOS upgrade, the install step alone often fixes things.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'check',
        title: '1. Check what is installed and active',
        paragraphs: [
          'The Command Line Tools are Apple’s package of compilers, git, headers and the macOS SDK for work outside Xcode, and Apple installs them at /Library/Developer/CommandLineTools. xcode-select -p prints which developer folder your Mac is using. That path means the standalone tools; a path inside Xcode.app means Xcode’s own copy, in which case you may not need the package at all.',
          'pkgutil --pkg-info=com.apple.pkg.CLTools_Executables is Apple’s documented way to read the installed version; it prints a package ID, a version line and an install time. If it reports no receipt, the package is not installed. Only one version can be installed at a time, and installing a new one replaces the old.',
        ],
        code: [
          'xcode-select -p',
          'pkgutil --pkg-info=com.apple.pkg.CLTools_Executables',
          'ls /Library/Developer/CommandLineTools/usr/bin',
        ],
      },
      {
        id: 'match-the-error',
        title: 'Match the error to the fix',
        paragraphs: [
          'Three messages cover most cases, listed below in order. The first means the tools folder is missing or incomplete, which is common after a macOS upgrade; installing again (step 3) fixes it without removing anything. The second means macOS still has the package registered: install updates through Software Update, or remove and reinstall if the tools are broken.',
          'The third means the command needs the full Xcode app. Apple notes that tools such as xcodebuild ship only with Xcode, so install Xcode and switch to it (step 5) rather than reinstalling the standalone package.',
        ],
        items: [
          'xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun',
          'xcode-select: note: Command line tools are already installed. Use "Software Update" in System Settings or the softwareupdate command line interface to install updates',
          "xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance",
        ],
      },
      {
        id: 'remove',
        title: '2. Remove the old tools',
        paragraphs: [
          'Apple’s page documents one removal command, and this is one of the rare cases where sudo rm -rf is the right tool, because Apple specifies it for exactly this folder. It deletes the CommandLineTools folder without a confirmation and without using the Trash, so copy the path precisely and change nothing. It does not touch Xcode.app, your projects or Homebrew, but git, clang and make stop working until the tools are back.',
          'Apple’s page also describes deleting the package receipt with pkgutil --forget, but only to stop Software Update offering the tools again. Skip that step when you are reinstalling.',
        ],
        code: ['sudo rm -rf /Library/Developer/CommandLineTools'],
      },
      {
        id: 'install',
        title: '3. Install them again',
        paragraphs: [
          'Run xcode-select --install. Terminal prints “install requested for command line developer tools” and a dialog opens: click Install, agree to the license, and click Done when it finishes. On a Mac without the tools, running a command such as git brings up the same dialog.',
          'If the dialog cannot find the software, or you need a specific version, sign in to Apple’s developer downloads page, which does not require a paid membership, search for Command Line Tools, and download the version Apple’s Xcode support page lists for your macOS. Afterwards, run pkgutil and xcode-select -p again to confirm the version and path. After later macOS upgrades, Software Update and softwareupdate --list offer newer releases, which replace the installed one.',
        ],
        code: [
          'xcode-select --install',
          'pkgutil --pkg-info=com.apple.pkg.CLTools_Executables',
          'softwareupdate --list',
        ],
      },
      {
        id: 'without-the-dialog',
        title: '4. Install without the dialog',
        paragraphs: [
          'Over SSH or in a setup script there is no one to click Install. The documented route is the downloaded package: mount the disk image, check /Volumes for its name, and install the package inside with installer, which needs administrator rights. When Software Update is already offering the tools, softwareupdate --install with the exact label from softwareupdate --list works too. Replace the capitalised placeholders below with your real names.',
          'Scripts that install the tools unattended on a fresh Mac, Homebrew’s installer among them, create a placeholder file that makes softwareupdate list the Command Line Tools, then install that label. Apple does not document the placeholder, so it can stop working in any release; use the package when you need something predictable.',
        ],
        code: [
          'hdiutil attach ~/Downloads/DOWNLOADED.dmg',
          'ls /Volumes',
          'sudo installer -pkg "/Volumes/VOLUME/PACKAGE.pkg" -target /',
          'sudo softwareupdate --install "LABEL"',
        ],
      },
      {
        id: 'switch',
        title: '5. Point xcode-select at the right tools',
        paragraphs: [
          'With both Xcode and the standalone tools installed, xcode-select decides which set Terminal uses. --switch takes either /Library/Developer/CommandLineTools or an Xcode app, needs sudo, and changes the setting for every user on the Mac. --reset clears any chosen path, so macOS falls back to its default search. To change it for one shell only, the manual page describes setting DEVELOPER_DIR instead.',
          'Keeping both on disk is a storage decision. Apple’s page notes that Xcode already includes the command-line tools, so a Mac with Xcode can often do without the separate package; the developer storage guide covers that trade-off.',
        ],
        code: [
          'sudo xcode-select --switch /Applications/Xcode.app',
          'sudo xcode-select --switch /Library/Developer/CommandLineTools',
          'sudo xcode-select --reset',
        ],
      },
    ],
    questions: [
      {
        q: 'How do I check if the Xcode Command Line Tools are installed on my Mac?',
        a: "Run pkgutil --pkg-info=com.apple.pkg.CLTools_Executables, which prints a package ID, version, and install time if they're installed, or reports no receipt if they aren't. xcode-select -p also shows which developer folder is currently active.",
      },
      {
        q: 'Why does Terminal say the active developer path is invalid after a macOS upgrade?',
        a: 'This usually means the Command Line Tools folder is missing or incomplete, which is common after an upgrade. Running xcode-select --install again typically fixes it without needing to remove anything first.',
      },
      {
        q: 'Do I need to remove the old Command Line Tools before reinstalling them?',
        a: "Only if they're broken or already registered incorrectly. Apple documents removing /Library/Developer/CommandLineTools with sudo rm -rf first in that case, then reinstalling with xcode-select --install.",
      },
      {
        q: 'Can Xcode and the standalone Command Line Tools both be installed at the same time?',
        a: 'Yes, and xcode-select decides which one Terminal actually uses, with --switch changing it for every user. Since Xcode already includes the command-line tools, a Mac with Xcode can often do without the separate package.',
      },
    ],
    related: [
      'developer-storage-on-mac',
      'xcode-xip-file-mac',
      'uninstall-homebrew-mac',
      'clear-xcode-derived-data',
    ],
    sources: [
      {
        label: 'Apple Developer: installing the command-line tools',
        url: 'https://developer.apple.com/documentation/xcode/installing-the-command-line-tools',
      },
      {
        label: 'Apple Developer: Xcode support',
        url: 'https://developer.apple.com/support/xcode/',
      },
      {
        label: 'Apple Developer: Xcode resources',
        url: 'https://developer.apple.com/xcode/resources/',
      },
    ],
  },
];
