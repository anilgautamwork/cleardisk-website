import type { Guide } from './guides.ts';

export const devQaGuides: Guide[] = [
  {
    slug: 'uninstall-node-js-mac',
    title: 'How to uninstall Node.js on Mac safely',
    description:
      'Identify your Node.js installer, save global tool details, and remove the right version on Mac. Covers Homebrew, nvm, fnm, Volta and package receipts.',
    summary:
      'Start by checking which Node.js your shell uses and which installer manages it. Save your global tool list, then follow only the matching removal method. Keep project folders and shared npm directories until you know what they contain.',
    published: '2026-09-24',
    updated: '2026-10-19',
    sections: [
      {
        id: 'find-every-node',
        title: '1. Identify the Node.js your shell uses',
        paragraphs: [
          'Run these checks in Terminal before removing anything. type -a reports matching commands, including aliases or functions; command -v reports how this shell resolves node. A path is a clue to the installer, not proof of ownership. Neither command searches your whole disk, other user accounts or every version stored by a manager.',
          '/opt/homebrew/bin/node commonly belongs to Homebrew on Apple silicon. /usr/local/bin/node can come from Homebrew or a package installer. A path inside .nvm suggests nvm; .volta/bin/node is normally a Volta shim that selects another executable. Confirm with the matching manager below. If the output reports an alias or function, inspect its definition before assuming it names a file.',
          'If you inspect a path with ls -l, copy that one path and put it in double quotes. Do not pass a whole command listing into ls: aliases, missing results and paths containing spaces can produce misleading output. A missing command only means this shell cannot resolve it.',
        ],
        code: ['type -a node npm', 'command -v node', 'command -v npm'],
      },
      {
        id: 'save-global-packages',
        title: '2. Record tools and project requirements',
        paragraphs: [
          'Before uninstalling, stop development servers you started and save your work. Check the Node version required by your projects, including .nvmrc, .node-version or package.json. Removing a runtime can stop those projects and command-line tools from running. Keep your source files, lockfiles and local data.',
          'When npm still works, the commands below show its global package directory, top-level packages and configured cache location. Copy the results into a new private note. If npm reports missing or invalid packages, keep the error with the list; a failed command is not evidence that no packages are installed.',
          'Global packages can live in a shared prefix or inside one managed version. Record each environment you intend to remove; for Volta-managed tools, also use volta list. Removing Node does not reliably remove all global packages. The npm cache is separate and may use a custom location. Never delete a shared node_modules directory just because one Node version is leaving.',
        ],
        code: ['npm root -g', 'npm ls -g --depth=0', 'npm config get cache'],
      },
      {
        id: 'managed-installs',
        title: '3. Homebrew: remove the installed formula',
        paragraphs: [
          'Use this section only if Homebrew manages the installation. Run brew list --formula --versions and look for node or a versioned formula such as node@22. If brew is not found, skip this method; do not install another manager merely to remove Node.',
          'For an installed formula named node, inspect its installed dependants with brew uses --installed node, then run brew uninstall node only if you no longer need that runtime. Substitute the exact formula name for a versioned installation. If Homebrew refuses because another formula needs it, stop and review that dependency. Do not bypass the refusal with --ignore-dependencies or delete files from its Cellar manually.',
          'Afterwards, repeat the formula listing and the shell checks. Leave shared global npm packages in place until you identify which tools still use them. A second Homebrew installation, for example under a different prefix, needs its own inventory.',
        ],
        code: ['brew list --formula --versions'],
      },
      {
        id: 'nvm-and-fnm',
        title: 'nvm or fnm: choose one exact installed version',
        paragraphs: [
          'For nvm, run nvm ls and note the full version you want to remove. If it is active, switch to a version you are keeping or run nvm deactivate. Then use nvm uninstall followed by that exact version. For example, nvm uninstall 22.0.0 removes 22.0.0 only if that is the version you chose. Save its global tool list first, and check project and default aliases afterwards.',
          'For fnm, run fnm list, switch away from the version you are removing, then run fnm uninstall followed by its full version. Avoid using an alias as the removal target: fnm documents that it removes the version the alias points to and other aliases pointing to that version.',
          'Run only the commands for your manager. Removing one runtime does not require deleting the manager. Leave its startup lines and installation directory intact while you still use other versions; custom NVM_DIR or FNM_DIR settings can place those files outside the usual folders.',
        ],
      },
      {
        id: 'volta',
        title: 'Volta: distinguish a tool from the whole manager',
        paragraphs: [
          'Use volta list to inspect the toolchain and volta which node to identify the selected executable behind the shim. Volta documents volta uninstall for global packages installed with volta install; do not assume it behaves like nvm uninstall for a specific Node release.',
          'Volta’s full Unix removal instructions delete its entire home directory and remove its shell-profile entries. That affects the manager and the tools stored there, not just the Node version you currently see. If you want to remove Volta altogether, record those tools first, check whether VOLTA_HOME is customized, and follow the linked official removal instructions. If you only need another Node version, use Volta’s toolchain controls instead of deleting its directory.',
        ],
        code: ['volta list', 'volta which node'],
      },
      {
        id: 'pkg-install',
        title: '4. Package installer: inspect receipts before touching files',
        paragraphs: [
          'For a Node.js .pkg installation, start with the receipt inventory below. The grep filter returns no lines when it finds no matching ID; that is not proof that Node is absent. Receipt IDs can vary. For an ID that actually appears, use pkgutil --pkg-info followed by that ID to see installation details, then pkgutil --only-files --files followed by the same ID to list recorded files.',
          'For example, if org.nodejs.node.pkg appears, inspect it with pkgutil --pkg-info org.nodejs.node.pkg and pkgutil --only-files --files org.nodejs.node.pkg. Interpret the listed paths using the receipt’s volume and install location. A receipt records a past installation: it does not prove that a current file has not since been replaced by Homebrew or another installer.',
          'Do not delete /usr/local, /usr/local/bin or /usr/local/lib/node_modules as a batch. These locations may contain unrelated executables or global tools you still use. Do not pipe a receipt listing into rm. Inspect each candidate’s current path and symlink target, compare it with your manager inventory, and back up anything you intend to remove. If ownership is unclear, leave it in place and get help identifying it.',
          'Only after that review, use Finder’s Go → Go to Folder to open the specific parent folder and move the confirmed obsolete item to Trash. Recheck your remaining tools before emptying Trash. Permission errors are a reason to stop, not to loosen permissions recursively. pkgutil --forget only discards a receipt; it does not uninstall the files and is not required to make another Node installation work.',
        ],
        code: ['pkgutil --pkgs | grep -i nodejs'],
      },
      {
        id: 'reinstall',
        title: '5. Verify the intended version, then reinstall if needed',
        paragraphs: [
          'Open a fresh Terminal window and repeat type -a node npm and command -v node. A remaining path may be an installation you intentionally kept. “Not found” means this shell has no matching command; inactive manager versions or app-bundled runtimes can still exist elsewhere. Recheck the manager’s own inventory too.',
          'If reinstalling, choose the version your projects support and follow that manager’s instructions or the official Node.js download page. Keeping one primary installation method makes PATH easier to understand, though multiple methods can coexist deliberately. Once installed, run node -v and npm -v and check their paths before restoring the global tools you need.',
          'Keep .npmrc private: it can contain registry credentials. Do not paste it into public issues or screenshots. Edit shell startup files only for a manager you have actually removed, and keep a backup of those files. If storage is still the problem, inspect project dependencies and the npm cache separately using the related guides; reinstalling Node does not remove every development file.',
        ],
        code: ['type -a node npm', 'command -v node'],
      },
    ],
    questions: [
      {
        q: 'How do I identify which installer manages Node.js on my Mac?',
        a: 'Use type -a node and command -v node to inspect the current shell, then confirm with Homebrew or your version manager. A path or old package receipt alone does not prove who owns the current file.',
      },
      {
        q: 'Can I remove Node.js by deleting /usr/local/lib/node_modules?',
        a: 'That directory can contain shared global tools. Removing it can break packages beyond the Node version you intended to uninstall. Identify the installer and inspect individual packages before removing anything.',
      },
      {
        q: 'Why does node still work after an uninstall?',
        a: 'Another installation, a manager shim or a shell alias may still resolve the command. Check a fresh Terminal window and the manager inventory. A shell lookup is not a scan of every Node installation on the disk.',
      },
      {
        q: 'Will uninstalling Node.js delete my global npm packages?',
        a: 'It depends on where the packages live and how Node was installed. Packages inside a removed version directory may go with it; a shared global prefix may remain. Record npm root -g and npm ls -g --depth=0 before removing the runtime.',
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
        label: 'Node.js: official download options',
        url: 'https://nodejs.org/en/download',
      },
      {
        label: 'npm: global folders and cache locations',
        url: 'https://docs.npmjs.com/cli/v11/configuring-npm/folders/',
      },
      {
        label: 'npm: interpreting npm ls output',
        url: 'https://docs.npmjs.com/cli/v11/commands/npm-ls/',
      },
      {
        label: 'Homebrew: list, uses and uninstall',
        url: 'https://docs.brew.sh/Manpage',
      },
      {
        label: 'nvm: version management and removal',
        url: 'https://github.com/nvm-sh/nvm',
      },
      {
        label: 'fnm: list and uninstall command reference',
        url: 'https://github.com/Schniz/fnm/blob/master/docs/commands.md',
      },
      {
        label: 'Volta: uninstalling global packages',
        url: 'https://docs.volta.sh/reference/uninstall',
      },
      {
        label: 'Volta: removing the whole manager',
        url: 'https://docs.volta.sh/advanced/uninstall',
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
    title: 'brew list: show installed Homebrew packages on Mac',
    description:
      'List Homebrew packages on Mac with brew list, brew leaves and brew deps --tree, see which formulae use the most space, and save everything to a Brewfile.',
    summary:
      'Run brew list in Terminal to see installed Homebrew packages. Use brew list --formula for command-line packages or brew list --cask for casks. To check versions, dependencies, disk usage or save a Brewfile, use the commands below.',
    published: '2026-09-24',
    updated: '2026-10-20',
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
          'Some formulae arrive as dependencies of other software. brew leaves lists installed formulae that no other installed formula or cask depends on; it does not identify everything you chose yourself. --installed-on-request narrows that to leaves you installed yourself, and --installed-as-dependency shows leaves that came in as a dependency but are no longer needed by anything.',
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
        title: '4. Check package sizes without scanning the wrong folder',
        paragraphs: [
          'Start with brew info followed by a formula name, such as brew info node, for its installed versions and sizes. To measure every formula folder, paste the complete block below into macOS Terminal. It checks that Homebrew returned an existing folder before running du. Nothing is deleted.',
          'The output has one row per immediate subdirectory and a final total for the Cellar. Those package rows are already included in the total, so do not add the total again. Rows are not sorted by size. An empty Cellar produces just its directory total. If du prints an access or read error, treat the result as incomplete; the command keeps the error visible and returns a failure status.',
          'To inspect the Caskroom, replace --cellar with --caskroom in the same block. A missing Caskroom can mean no casks have been installed. Its size also excludes apps installed elsewhere, usually in Applications. These figures describe the folders du can read, not a guaranteed amount you can reclaim.',
          'If you see “size scan skipped,” read any Homebrew error above it and check that brew works in this Terminal. The block refuses an empty path, the filesystem root or a missing directory. It avoids the wildcard that can scan unrelated folders when a path lookup fails. Do not add sudo or broaden permissions just to get a complete number.',
          'Check brew uses --installed with the formula name before considering removal. Homebrew normally refuses to uninstall a formula another installed package needs. Cached downloads are separate from installed packages; use the cache guide linked below to inspect them.',
        ],
        code: [
          '(',
          '  if cleardisk_brew_dir="$(brew --cellar)" &&',
          '    [ -n "$cleardisk_brew_dir" ] &&',
          '    [ "$cleardisk_brew_dir" != "/" ] &&',
          '    [ -d "$cleardisk_brew_dir" ]; then',
          '    du -h -d 1 "$cleardisk_brew_dir"',
          '  else',
          "    printf '%s\\n' 'No valid Homebrew folder; size scan skipped.' >&2",
          '    exit 1',
          '  fi',
          ')',
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
          'brew bundle dump --file="$HOME/Brewfile"',
          'brew bundle dump --file=-',
          'brew bundle install --file="$HOME/Brewfile"',
        ],
      },
    ],
    questions: [
      {
        q: 'How do I see which Homebrew packages I chose versus what came in as dependencies?',
        a: 'brew leaves lists formulae that no other installed formula or cask depends on, and --installed-on-request narrows those leaves to formulae you installed by name. Use brew list --installed-on-request to include packages you chose that other formulae also depend on.',
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
        a: 'Use brew info with a formula name for its installed size, or the guarded du block above for Cellar folder totals. Read errors mean a partial measurement. Caskroom size can miss apps installed elsewhere, usually /Applications. Folder size alone does not tell you whether a package is safe to remove.',
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
      {
        label: 'Apple: du disk-usage manual',
        url: 'https://github.com/apple-oss-distributions/file_cmds/blob/main/du/du.1',
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
      'Reinstall Xcode Command Line Tools on Mac after checking the active path, package receipt and compatible updates. Includes xcrun checks and removal limits.',
    summary:
      'Start with the active developer path and the exact error. A stale path, an incompatible package and a command that needs full Xcode require different fixes. Check for a compatible update before removing the standalone tools.',
    published: '2026-09-24',
    updated: '2026-10-26',
    sections: [
      {
        id: 'check',
        title: '1. Check the active path and package receipt',
        paragraphs: [
          'Run these checks in the same Terminal session where the problem occurs. They inspect configuration; they do not install or remove tools. If you run them on a different Mac, in a remote shell or from an IDE, the result may differ.',
          'xcode-select -p prints the selected developer directory. /Library/Developer/CommandLineTools is the standalone package; a path inside Xcode.app uses the full app. pkgutil reports the standalone package receipt and version. A receipt does not verify every installed file, and no receipt does not prove that Xcode or usable developer tools are absent.',
          'printenv DEVELOPER_DIR shows a shell override when one is set. No output with exit status 1 means that variable is unset. A stale override can direct tools to a missing location even when another installation is available.',
        ],
        code: [
          'xcode-select -p',
          'pkgutil --pkg-info=com.apple.pkg.CLTools_Executables',
          'printenv DEVELOPER_DIR',
        ],
      },
      {
        id: 'match-the-error',
        title: 'Match the error before choosing a fix',
        paragraphs: [
          'Keep the complete error message, including the path it names. A successful package installation can still leave a command pointing at another developer directory.',
        ],
        items: [
          'Invalid active developer path or missing xcrun: inspect the named path and any DEVELOPER_DIR override. A moved Xcode app or missing standalone directory needs a different response from an incompatible installed package.',
          'Command line tools are already installed: this message alone does not show that the installation is broken. Check Software Update and the selected path before deciding to remove anything.',
          'Tool xcodebuild requires Xcode: install or select the full Xcode app. Reinstalling the standalone package will not add tools that Apple ships only with Xcode.',
          'License or first-launch setup error: open the selected Xcode app and complete its requested setup. Replacing the standalone package does not address an unfinished Xcode setup.',
        ],
      },
      {
        id: 'switch',
        title: '2. Correct a stale selection if the tools already exist',
        paragraphs: [
          'If the error names an old or moved Xcode copy, check the app’s actual location first. To test an installed Xcode at the standard path for one command, use the example below. It does not change the system-wide selection. If your app has another name or location, use that exact path.',
          'A successful result is the path to clang inside that Xcode installation. If you need to make it the default, sudo xcode-select --switch /Applications/Xcode.app changes the selection for all users. For an existing standalone package, the corresponding destination is /Library/Developer/CommandLineTools. Choose the installation you intend to use; do not run both switches as a sequence.',
          'xcode-select --reset clears a custom system-wide selection. It does not repair missing files or remove a DEVELOPER_DIR override in your shell. Check the override’s source before changing shell or IDE configuration.',
        ],
        code: [
          'env DEVELOPER_DIR="/Applications/Xcode.app" xcrun --find clang',
        ],
      },
      {
        id: 'install',
        title: '3. Install or update a compatible package',
        paragraphs: [
          'For a missing standalone package, xcode-select --install requests Apple’s installer. Finish the dialog before checking again. If macOS reports that tools are already installed, open System Settings → General → Software Update and look for a compatible update.',
          'If the installer cannot find a package, check Apple’s system-requirements table and the Command Line Tools download details for your macOS version. Apple’s developer downloads require an Apple Account, but no paid membership. Choose the compatible package rather than assuming the highest version number will run on your Mac.',
          'If the downloaded installer reports an unsupported macOS version or fails, keep its error and resolve that mismatch before deleting a working installation. Xcode already includes developer tools; you may only need to select it.',
        ],
        code: ['xcode-select --install'],
        links: [
          {
            label: 'Apple: Command Line Tools installation and updates',
            href: 'https://developer.apple.com/documentation/xcode/installing-the-command-line-tools',
          },
          {
            label: 'Apple: SDK and system requirements',
            href: 'https://developer.apple.com/xcode/system-requirements',
          },
          {
            label: 'Apple: developer downloads and account requirements',
            href: 'https://developer.apple.com/xcode/resources/',
          },
        ],
      },
      {
        id: 'remove',
        title:
          '4. Remove the standalone package only if a reinstall is still needed',
        paragraphs: [
          'Use this step after checking the selection and compatible updates, when you have decided to replace the standalone installation. Save work and stop builds that depend on it. Have a compatible installer available first; removal does not guarantee that the replacement download will succeed.',
          'Apple documents the exact command below to uninstall the standalone package. It permanently removes that directory without moving it to Trash or asking for a second confirmation. Do not shorten the path or substitute another folder. Tools and builds that rely on this installation may stop working until it is restored.',
          'After removal, install the compatible package and repeat the verification checks below. Do not forget package receipts as a routine repair step: Apple describes receipt removal separately as an opt-out from package updates.',
        ],
        code: ['sudo rm -rf /Library/Developer/CommandLineTools'],
      },
      {
        id: 'without-the-dialog',
        title: 'Installing over SSH or on a managed Mac',
        paragraphs: [
          'The graphical installer needs someone to complete its dialog. For an unattended installation, an administrator can use a compatible package downloaded from Apple and the macOS installer tool. Confirm the package path and deployment requirements before running an administrator installation.',
          'On a managed Mac, follow the organization’s software-deployment process. Avoid relying on undocumented placeholder files to force a package into Software Update. A package that cannot be found or is not offered for this Mac needs investigation, not repeated deletion.',
        ],
      },
      {
        id: 'verify',
        title: '5. Verify the compiler and SDK, then retry the failed command',
        paragraphs: [
          'xcrun --find clang should return a compiler path under the intended developer installation. xcrun --show-sdk-path should return the selected SDK path. Errors here are useful: keep their full text instead of hiding stderr. A path lookup alone does not prove that your project will build; retry the original command after these checks.',
          'In our read-only check on macOS 27.0.1 on October 26, 2026, the standalone package had a receipt while xcode-select and xcrun selected /Applications/Xcode.app/Contents/Developer. Setting DEVELOPER_DIR to a nonexistent disposable path for one command produced a missing-path error and exit status 1. No installed tools were removed, switched or reinstalled for this check.',
          'ClearDisk can help inspect developer storage, but it does not repair the selected toolchain or validate a Command Line Tools installation. Keep cleanup separate from diagnosing a failed build.',
        ],
        code: ['xcrun --find clang', 'xcrun --show-sdk-path'],
      },
    ],
    questions: [
      {
        q: 'How do I check if the Xcode Command Line Tools are installed on my Mac?',
        a: 'Check the standalone package receipt with pkgutil --pkg-info=com.apple.pkg.CLTools_Executables, then inspect xcode-select -p and xcrun --find clang. A receipt describes installation records; it does not prove that every file is present or that the standalone package is selected. Full Xcode can provide the tools separately.',
      },
      {
        q: 'Why does Terminal say the active developer path is invalid after a macOS upgrade?',
        a: 'Inspect the exact path in the error and any DEVELOPER_DIR override. The selected folder may be missing or moved. Also check for a Command Line Tools update compatible with the new macOS version. The error alone does not establish that reinstalling is the correct fix.',
      },
      {
        q: 'Do I need to remove the old Command Line Tools before reinstalling them?',
        a: 'Try a compatible update and check the selected path first. Apple documents how to uninstall the standalone package, but removal is permanent and can interrupt dependent tools. Have the compatible replacement available before choosing that route.',
      },
      {
        q: 'Can Xcode and the standalone Command Line Tools both be installed at the same time?',
        a: 'Yes. The active developer directory and any DEVELOPER_DIR override determine which installation Apple’s tool shims use. Xcode includes its own tools, so a separate standalone package is not always necessary.',
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
        label: 'Apple Developer: SDK and system requirements',
        url: 'https://developer.apple.com/xcode/system-requirements',
      },
      {
        label: 'Apple Developer: Xcode resources',
        url: 'https://developer.apple.com/xcode/resources/',
      },
    ],
  },
];
