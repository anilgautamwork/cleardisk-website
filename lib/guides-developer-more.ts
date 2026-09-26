import type { Guide } from './guides.ts';

export const moreDeveloperGuides: Guide[] = [
  {
    slug: 'clear-gradle-cache-mac',
    title: 'How to clear the Gradle cache on Mac safely',
    description:
      'Where Gradle keeps its cache on a Mac, how to measure ~/.gradle, stop the daemons, and clear caches or old wrapper distributions without breaking a build.',
    summary:
      'Gradle keeps downloaded dependencies, build-cache entries and wrapper distributions in ~/.gradle on a Mac. Stop the daemons with ./gradlew --stop, then move the caches folder to the Trash; the next build downloads what it needs again.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'find-and-measure',
        title: '1. Find the Gradle folder and measure it',
        paragraphs: [
          'Gradle keeps everything that is not part of a project in its user home, which is ~/.gradle on a Mac unless the GRADLE_USER_HOME environment variable points somewhere else. Gradle’s documentation lists what lives there: caches for downloaded dependencies, artifact transforms and build-cache entries; wrapper/dists for the Gradle versions that projects’ wrappers downloaded; daemon for daemon logs; and jdks for Java toolchains Gradle provisioned itself.',
          'The folder is hidden in Finder because its name starts with a dot. Measure it in Terminal with du, which only reads. The per-folder figures tell you whether dependencies, Gradle distributions or toolchains make up most of the total, which decides where to start.',
        ],
        code: [
          'echo $GRADLE_USER_HOME',
          'du -sh ~/.gradle',
          'du -sh ~/.gradle/* | sort -h',
        ],
      },
      {
        id: 'what-gradle-cleans',
        title: 'What Gradle already cleans up',
        paragraphs: [
          'Gradle runs its own cleanup, by default at most once every 24 hours. Version-specific caches in caches/ are deleted after 30 days without use for release versions and 7 days for snapshots. Wrapper distributions with no matching version cache are removed. Files in shared caches such as modules-2 are deleted after 7 or 30 days without access, depending on whether Gradle can recreate them locally or must download them again.',
          'That cleanup only runs when Gradle runs. If you stopped building Android or Java projects months ago, nothing trims the folder, and a Mac that switches between many Gradle versions can hold far more than its working set. Retention periods can be changed with an init script in ~/.gradle/init.d, as the directory layout documentation describes; most people never need to.',
        ],
      },
      {
        id: 'stop-the-daemons',
        title: '2. Stop Gradle daemons and IDEs first',
        paragraphs: [
          'Gradle keeps background daemons running between builds, and they hold cache files open. Before removing anything, run ./gradlew --stop in a project folder, or gradle --stop if Gradle is installed globally. Gradle’s documentation notes that this stops only the daemons started by the same Gradle version as the command, so repeat it in projects that use other versions, and use --status to see what is still running.',
          'Quit Android Studio and IntelliJ IDEA too. Both start their own Gradle daemons for project sync and builds, and a daemon that starts again halfway through a cleanup can leave a project with a half-written cache.',
        ],
        code: ['./gradlew --stop', './gradlew --status'],
      },
      {
        id: 'move-caches-to-trash',
        title: '3. Move the caches folder to the Trash',
        paragraphs: [
          'With the daemons stopped, choose Go → Go to Folder in Finder, enter ~/.gradle, and move the caches folder to the Trash. Gradle recreates it on the next build and downloads every dependency again, so the first sync of each project is slower and needs a network connection. Projects that pin dependency versions get exactly the same versions back.',
          'For a smaller step, move only the folders inside wrapper/dists for Gradle versions none of your projects use; a project’s wrapper downloads its version again if it needs it. Leave gradle.properties and init.d alone. They hold your settings, and sometimes credentials for private repositories, not cache data. Leave jdks unless you know which projects rely on a toolchain Gradle provisioned.',
        ],
        items: [
          'caches: dependencies, transforms and build-cache entries. Recreated on the next build.',
          'wrapper/dists: Gradle versions downloaded by project wrappers. Downloaded again when needed.',
          'gradle.properties and init.d: your configuration. Keep them.',
        ],
      },
      {
        id: 'project-build-folders',
        title: '4. Clean build folders inside projects',
        paragraphs: [
          'Each project also has its own build folders, plus a .gradle folder at the project root that Gradle describes as a project-specific cache. Running ./gradlew clean deletes the build output for that project, and the next build produces it again. For old projects you no longer open, moving their build folders to the Trash has the same effect without starting Gradle at all.',
          'ClearDisk’s free scan includes the Gradle cache at ~/.gradle/caches in its Developer Junk list, next to node_modules folders, Xcode Derived Data and the Maven repository, with sizes. That shows whether Gradle is actually the large one before you spend time on it. Whichever route you use, the space returns only after you empty the Trash.',
        ],
        code: ['./gradlew clean'],
      },
    ],
    questions: [
      {
        q: 'Why does the Gradle cache keep growing even though Gradle cleans up automatically?',
        a: "Gradle's own cleanup only runs when Gradle itself runs, deleting version caches after 30 days unused (7 for snapshots). If you stopped building for months, or switch between many Gradle versions, nothing trims the folder in the meantime.",
      },
      {
        q: 'Do I need to stop Gradle before deleting its cache?',
        a: 'Yes. Run ./gradlew --stop or gradle --stop, and quit Android Studio and IntelliJ IDEA too, since all of them start daemons that hold cache files open and could leave a half-written cache.',
      },
      {
        q: 'Will deleting the Gradle caches folder break my projects?',
        a: 'No. Gradle recreates the caches folder on the next build and downloads every dependency again, and projects that pin dependency versions get exactly the same versions back, just with a slower first sync.',
      },
      {
        q: 'Is it safe to delete gradle.properties or the init.d folder to save space?',
        a: 'No, leave them alone. They hold your settings, and gradle.properties sometimes holds credentials for private repositories, so they are configuration you rely on rather than cache data that Gradle can simply regenerate later.',
      },
    ],
    related: [
      'android-studio-disk-space-mac',
      'clear-jetbrains-cache-mac',
      'developer-storage-on-mac',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      {
        label: 'Gradle docs: Gradle user home, caches and cleanup',
        url: 'https://docs.gradle.org/current/userguide/directory_layout.html',
      },
      {
        label: 'Gradle docs: the Gradle daemon, --stop and --status',
        url: 'https://docs.gradle.org/current/userguide/gradle_daemon.html',
      },
    ],
  },
  {
    slug: 'clear-cocoapods-cache-mac',
    title: 'How to clear the CocoaPods cache on Mac',
    description:
      'Find the CocoaPods cache on a Mac, list it with pod cache list, clear it with pod cache clean --all, and handle old spec repos and per-project Pods folders.',
    summary:
      'Run pod cache clean --all to empty the CocoaPods download cache, which sits in ~/Library/Caches/CocoaPods. Old spec repositories in ~/.cocoapods/repos and each project’s Pods folder are separate, and often larger.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'see-the-cache',
        title: '1. See what the cache holds',
        paragraphs: [
          'CocoaPods keeps a copy of every pod version it downloads so the next pod install can reuse it. pod cache list shows the contents as a tree organised by pod, with paths; add a pod name to see only that pod. On a Mac those paths sit under ~/Library/Caches/CocoaPods, and du measures the folder without changing it.',
          'Because the folder lives in ~/Library/Caches, Storage settings counts it with other app caches rather than under the Developer category. That is one reason a Mac used for iOS work can show a large System Data figure even after Xcode’s own files have been cleared.',
        ],
        code: ['pod cache list', 'du -sh ~/Library/Caches/CocoaPods'],
      },
      {
        id: 'clean-the-cache',
        title: '2. Clear one pod or the whole cache',
        paragraphs: [
          'pod cache clean followed by a pod name removes that pod’s cached copies. If several versions are cached, CocoaPods asks which one to remove. To empty the cache completely, add --all; the command refuses to run with no name and no --all, so the whole cache is never cleared by accident.',
          'Clearing the cache does not touch your projects. Existing Pods folders keep working, and the next pod install downloads whatever it needs again, which is slower and needs a network connection. Run it with Xcode closed so a build in progress is not reading from the cache at the same moment.',
        ],
        code: ['pod cache clean Alamofire', 'pod cache clean --all'],
      },
      {
        id: 'old-spec-repos',
        title: '3. Remove an old master spec repo',
        paragraphs: [
          'Older CocoaPods setups cloned the entire public Specs repository into ~/.cocoapods/repos, usually under the name master. CocoaPods 1.8 made the CDN the default source instead, and the release post gives pod repo remove master as the cleanup once your Podfile uses the CDN or has no git source line. Check with pod repo list and measure the folders before deciding.',
          'Keep any private spec repo your team publishes to; removing it breaks pod install for projects that depend on it until you add it back. If a Podfile still names the git-based Specs source explicitly, update it to the CDN source first, or the repo is cloned again on the next install.',
        ],
        code: [
          'pod repo list',
          'du -sh ~/.cocoapods/repos/*',
          'pod repo remove master',
        ],
      },
      {
        id: 'pods-folders',
        title: '4. Remove Pods folders from inactive projects',
        paragraphs: [
          'Each project that uses CocoaPods has a Pods folder next to its Podfile, holding the downloaded sources and a generated Xcode project. For a project you are not working on, move the Pods folder to the Trash and keep the Podfile and Podfile.lock. Running pod install later rebuilds it at the exact versions recorded in the lock file.',
          'Check first whether your team commits the Pods folder to git; some do, and deleting it then shows up as a large change in version control. pod deintegrate is not a cleanup tool: it removes CocoaPods from the Xcode project entirely, which only makes sense when migrating away. The project’s build data in Derived Data is a separate folder with its own guide.',
          'When a project has moved to Swift Package Manager and builds cleanly, that is the moment for pod deintegrate. After it, the Podfile, Podfile.lock, Pods folder and the generated workspace are no longer used, and can go once the change is committed.',
        ],
      },
      {
        id: 'what-changes-next',
        title: 'What to expect from here',
        paragraphs: [
          'The CocoaPods team has announced that trunk becomes read-only on December 2, 2026. Their post says existing builds keep working, but pods published through trunk stop receiving updates. As projects move their dependencies to Swift Package Manager, their Pods folders and cache entries become safe to remove once the migration is committed.',
          'Swift Package Manager keeps its own downloads, and Xcode stores a project’s package checkouts inside Derived Data, so clearing CocoaPods does not affect them. Whatever you move to the Trash still takes space until you empty it.',
        ],
      },
    ],
    questions: [
      {
        q: 'Why does the CocoaPods cache count toward System Data instead of Developer storage?',
        a: 'The cache sits in ~/Library/Caches/CocoaPods, and Storage settings groups files there with other app caches rather than the Developer category, which is one reason a Mac used for iOS work shows a large System Data figure.',
      },
      {
        q: "Is it safe to delete a project's Pods folder?",
        a: 'Yes, as long as you keep the Podfile and Podfile.lock. Running pod install later rebuilds the Pods folder at the exact versions recorded in the lock file, though check first whether your team commits Pods to git.',
      },
      {
        q: 'What does pod deintegrate actually do, and should I use it to save space?',
        a: 'It is not a cleanup tool. It removes CocoaPods from the Xcode project entirely, which only makes sense when migrating away from CocoaPods, such as once a project has moved to Swift Package Manager.',
      },
      {
        q: 'Can I remove the old CocoaPods master spec repo?',
        a: 'Yes, once your Podfile uses the CDN source (the default since CocoaPods 1.8) or has no git source line, pod repo remove master cleans it up. Keep any private spec repo your team publishes to.',
      },
    ],
    related: [
      'clear-xcode-derived-data',
      'developer-storage-on-mac',
      'library-caches-folder-mac',
      'clean-homebrew-cache-mac',
    ],
    sources: [
      {
        label: 'CocoaPods: command-line reference (pod cache, pod repo)',
        url: 'https://guides.cocoapods.org/terminal/commands.html',
      },
      {
        label: 'CocoaPods blog: CocoaPods 1.8 and the CDN default',
        url: 'https://blog.cocoapods.org/CocoaPods-1.8.0-beta/',
      },
      {
        label: 'CocoaPods blog: trunk read-only plan',
        url: 'https://blog.cocoapods.org/CocoaPods-Specs-Repo/',
      },
    ],
  },
  {
    slug: 'clear-pip-cache-mac',
    title: 'How to clear the pip cache on Mac, and where it is',
    description:
      'Where pip keeps its cache on a Mac, how to check its size with pip cache info, clear it with pip cache purge, and find the virtual environments that use more.',
    summary:
      'On a Mac, pip’s cache is normally ~/Library/Caches/pip; pip cache dir confirms it and pip cache purge empties it. Virtual environments are often the bigger space user, and can be deleted and recreated if you keep a requirements file.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'which-pip',
        title: '1. Make sure you are asking the right pip',
        paragraphs: [
          'Many Macs have more than one Python: the one that comes with Apple’s command line tools, one from Homebrew, others from pyenv or conda. Running pip as python3 -m pip makes the command use the interpreter you expect, and python3 -m pip --version prints which one that is. which -a python3 lists every python3 on your PATH, in the order your shell finds them.',
          'By default they all share one per-user cache folder, so clearing it once clears it for every Python on the Mac. If pip cache dir prints something unexpected, a setting or environment variable has moved it; measure that path instead.',
        ],
        code: ['python3 -m pip --version', 'python3 -m pip cache dir'],
      },
      {
        id: 'measure-the-cache',
        title: '2. Measure the cache',
        paragraphs: [
          'pip’s documentation gives ~/Library/Caches/pip as the default location on macOS. pip cache info reports the size of its two parts: the HTTP cache, which stores downloaded responses so pip does not fetch the same files again, and the wheel cache, which stores wheels pip built locally from source packages.',
          'du gives the same total from outside pip. Because the folder sits in ~/Library/Caches, Storage settings counts it with other app caches, usually inside System Data, not under a Python or Developer heading.',
        ],
        code: ['python3 -m pip cache info', 'du -sh ~/Library/Caches/pip'],
      },
      {
        id: 'purge-the-cache',
        title: '3. Clear it with pip’s own command',
        paragraphs: [
          'pip cache purge removes everything in the cache. For something narrower, pip cache list shows the locally built wheels and pip cache remove with a package name removes the matching ones. Nothing installed is affected; the next install downloads packages again, and anything built from source takes longer the first time.',
          'pip also accepts --no-cache-dir to skip the cache entirely, but its documentation recommends not disabling caching unless you have caching at a higher level. On a laptop, an occasional purge is the better trade.',
        ],
        code: [
          'python3 -m pip cache list',
          'python3 -m pip cache remove numpy',
          'python3 -m pip cache purge',
        ],
      },
      {
        id: 'find-virtual-environments',
        title: '4. Find virtual environments',
        paragraphs: [
          'Each virtual environment holds its own full copy of the packages installed into it, so ten projects with the same data-science stack store it ten times. They usually sit in a .venv or venv folder inside each project. The command below lists every .venv under a projects folder with its size; adjust the path, and repeat with venv if you use that name.',
          'Python’s documentation describes a virtual environment as disposable: it should be simple to delete and recreate from scratch, it is not meant to be moved or copied, and it is not checked into source control. That makes environments of old projects some of the safest large folders on a developer Mac.',
        ],
        code: [
          'find ~/Projects -type d -name .venv -prune -exec du -sh {} + 2>/dev/null | sort -h',
        ],
      },
      {
        id: 'remove-an-environment',
        title: '5. Remove an environment you can rebuild',
        paragraphs: [
          'If the project has no requirements file or lock file, activate the environment and save its package list first with pip freeze. Then run deactivate, close any editor using that environment, and move the .venv folder to the Trash.',
          'To rebuild it later, create a new environment in the project and install from the saved list. Tools such as Poetry or Pipenv manage their environments elsewhere and have their own remove commands, so use theirs rather than deleting folders they track.',
        ],
        code: [
          'python -m pip freeze > requirements.txt',
          'python3 -m venv .venv',
          '.venv/bin/python -m pip install -r requirements.txt',
        ],
      },
      {
        id: 'uv-and-conda',
        title: 'uv and conda keep separate caches',
        paragraphs: [
          'If you install packages with uv, its cache is separate from pip’s: $HOME/.cache/uv on a Mac unless configured otherwise. uv cache prune removes unused entries and uv cache clean removes everything. ClearDisk’s Developer Junk list includes ~/.cache as tool caches, so uv’s folder shows up there with a size; the package manager’s own command is still the tidier way to shrink it.',
          'conda has its own package cache and environments, covered in the conda guide. Moving any of these folders to the Trash frees space only once the Trash is emptied.',
        ],
        code: ['uv cache dir', 'uv cache prune'],
      },
    ],
    questions: [
      {
        q: 'Where does pip store its cache on a Mac?',
        a: 'By default it is ~/Library/Caches/pip; pip cache dir confirms the exact path. Because it sits in ~/Library/Caches, Storage settings counts it with other app caches rather than under a Python-specific heading.',
      },
      {
        q: 'Is it safe to delete a Python virtual environment folder?',
        a: "Yes. Python's own documentation describes a virtual environment as disposable and meant to be deleted and recreated from scratch. Save the package list with pip freeze first if the project has no requirements file.",
      },
      {
        q: 'Will clearing the pip cache break my installed packages?',
        a: 'No. pip cache purge only removes cached downloads, so nothing already installed is affected. The next install just downloads packages again, and anything built from source takes a little longer the first time.',
      },
      {
        q: "Does clearing pip's cache also clear conda's or uv's cache?",
        a: "No, each tool keeps its own. uv's cache lives separately at ~/.cache/uv and is cleared with uv cache prune or uv cache clean, while conda has its own package cache covered by conda's own commands.",
      },
    ],
    related: [
      'clean-conda-disk-space-mac',
      'clear-npm-cache-mac',
      'check-disk-space-mac-terminal',
      'clean-homebrew-cache-mac',
    ],
    sources: [
      {
        label: 'pip docs: caching and the default cache location',
        url: 'https://pip.pypa.io/en/stable/topics/caching/',
      },
      {
        label: 'Python docs: venv, creation of virtual environments',
        url: 'https://docs.python.org/3/library/venv.html',
      },
      {
        label: 'uv docs: caching',
        url: 'https://docs.astral.sh/uv/concepts/cache/',
      },
    ],
  },
  {
    slug: 'clean-conda-disk-space-mac',
    title: 'Clean up conda disk space on Mac with conda clean',
    description:
      'Free space from Anaconda, Miniconda or Miniforge on a Mac: find the install, preview conda clean --all with a dry run, and remove unused environments.',
    summary:
      'Run conda clean --all --dry-run to see what conda would remove from its package cache, then run it without --dry-run. Unused environments are usually the larger saving: export one, then remove it with conda remove --name NAME --all.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'find-the-install',
        title: '1. Find where conda lives',
        paragraphs: [
          'Anaconda, Miniconda and Miniforge all install a base folder that contains conda itself, a pkgs folder with every package it has downloaded, and an envs folder with your environments. Installers commonly put it in your home folder under a name such as miniconda3, anaconda3 or miniforge3. conda info prints the exact base location, the package cache and the environment directories, so you do not have to guess.',
          'Measure the whole install with one du command. conda normally hard-links files from the package cache into environments, and a single du run counts each hard-linked file once. Measuring pkgs and envs separately counts shared files twice, which makes the install look larger than it is and makes cleanup look more promising than it will be.',
        ],
        code: [
          'conda info',
          'conda config --show pkgs_dirs',
          'du -sh "$(conda info --base)"',
        ],
      },
      {
        id: 'preview-clean',
        title: '2. Preview what conda clean would remove',
        paragraphs: [
          'conda clean is the supported way to shrink the package cache, and --dry-run shows what it would do without doing it. The --all flag combines the individual targets listed below. Read the output for the size it would free before running the real command. conda config --show pkgs_dirs, from the first step, lists every package cache conda uses, in case more than one appears.',
          'Packages that an environment still uses are not “unused”, so they stay. That is why the saving from conda clean is often modest on a Mac with many environments, and larger after you remove environments.',
        ],
        items: [
          '--index-cache: the cached channel index.',
          '--packages: unused packages in writable package caches.',
          '--tarballs: downloaded package archives.',
          '--tempfiles and --logfiles: leftovers that could not be deleted earlier, and log files.',
          '--all: all of the above.',
        ],
        code: ['conda clean --all --dry-run'],
      },
      {
        id: 'run-clean',
        title: '3. Run it, and skip --force-pkgs-dirs',
        paragraphs: [
          'Run conda clean --all and confirm when asked; -y answers yes automatically, which is only worth adding once you trust the preview. Future installs download packages again as needed, so the cost is bandwidth and time rather than anything lost.',
          'Do not use --force-pkgs-dirs, also written -f. conda’s documentation says it removes all writable package caches and warns that this will break environments with packages installed using symlinks back to the package cache. The ordinary --all route already removes what nothing uses. Running it every few months is plenty, since the cache only grows as you install.',
        ],
        code: ['conda clean --all'],
      },
      {
        id: 'remove-environments',
        title: '4. Remove environments you no longer use',
        paragraphs: [
          'conda env list shows every environment and its path. For one you might need again, export a recipe first: conda env export --from-history records only the packages you asked for, which recreates more reliably on another machine or a later macOS. If the environment is active, run conda deactivate, then remove it with conda remove --name NAME --all.',
          'Packages that only that environment used now count as unused, so run conda clean --packages again afterwards to release them from the cache. Leave the base environment in place; conda itself runs from it.',
          'Environments created with --prefix inside a project folder have no name. conda env list shows them by path, and conda remove --prefix followed by that path and --all removes one. Deleting such a folder in Finder instead leaves conda’s record of it behind, so use the command.',
        ],
        code: [
          'conda env list',
          'conda env export --name old-project --from-history > old-project.yml',
          'conda deactivate',
          'conda remove --name old-project --all',
          'conda clean --packages',
        ],
      },
      {
        id: 'pip-and-uninstalling',
        title: 'pip inside conda, and removing conda entirely',
        paragraphs: [
          'Packages installed with pip inside a conda environment use pip’s own cache in ~/Library/Caches/pip, which conda clean does not touch; the pip guide covers it. Environments created by other tools, such as a project’s .venv folder, are separate from conda as well.',
          'If you have moved away from conda altogether, follow the uninstall instructions for the installer you used rather than only deleting the base folder. conda init adds a block to your shell profile, such as ~/.zshrc, that points at that folder; remove the block too, or every new Terminal window reports an error.',
        ],
      },
    ],
    questions: [
      {
        q: "Why does measuring conda's pkgs and envs folders separately overstate their size?",
        a: 'conda normally hard-links files from the package cache into environments, so a single du run on the whole install counts each shared file once. Measuring pkgs and envs separately counts shared files twice, making the install look bigger than it is.',
      },
      {
        q: "What's the difference between conda clean --all and conda clean --force-pkgs-dirs?",
        a: 'conda clean --all only removes caches nothing else is using, so it is safe. --force-pkgs-dirs removes all writable package caches and can break environments whose packages are symlinked back to that cache, so it is best avoided.',
      },
      {
        q: 'Can I delete a conda environment folder in Finder instead of using conda remove?',
        a: "No. Deleting the folder in Finder leaves conda's own record of that environment behind. Use conda remove with --name or --prefix and --all instead, so conda's records stay accurate.",
      },
      {
        q: "Does conda clean also clear pip's cache inside a conda environment?",
        a: "No. Packages installed with pip inside a conda environment use pip's own cache in ~/Library/Caches/pip, which conda clean does not touch; that cache needs pip's own commands to clear.",
      },
    ],
    related: [
      'clear-pip-cache-mac',
      'developer-storage-on-mac',
      'check-disk-space-mac-terminal',
      'ollama-models-location-mac',
    ],
    sources: [
      {
        label: 'conda docs: conda clean',
        url: 'https://docs.conda.io/projects/conda/en/latest/commands/clean.html',
      },
      {
        label: 'conda docs: managing environments',
        url: 'https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html',
      },
    ],
  },
  {
    slug: 'ollama-models-location-mac',
    title: 'Where Ollama stores models on Mac, and how to move them',
    description:
      'Ollama keeps models in ~/.ollama/models on a Mac. See each model’s size with ollama list, remove one with ollama rm, and move the folder with OLLAMA_MODELS.',
    summary:
      'On a Mac, Ollama stores downloaded models in ~/.ollama/models. Use ollama list to see them with sizes and ollama rm to remove one; to keep models on another drive, set OLLAMA_MODELS and restart Ollama.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-models-live',
        title: 'Where the models are',
        paragraphs: [
          'Ollama’s FAQ gives ~/.ollama/models as the model location on macOS, and its macOS page says ~/.ollama holds models and configuration, with logs in ~/.ollama/logs. Inside models, the blobs folder holds the model data itself, in files named by a hash, and manifests records which blobs make up each model and tag. The folder is hidden in Finder because its name starts with a dot.',
          'The ~/.ollama folder holds more than models. On a current install it also contains a key pair Ollama uses for your ollama.com account and your prompt history. So when space is the goal, work on models, not on the whole folder. Models you pull from the Ollama app’s window and from Terminal end up in the same place, because both talk to the same local server.',
        ],
        code: ['du -sh ~/.ollama/models', 'ls ~/.ollama'],
      },
      {
        id: 'list-models',
        title: '1. List models and their sizes',
        paragraphs: [
          'ollama list shows every downloaded model with its tag, ID, size and when it was last modified. Large models and several quantisations of the same model add up quickly, and the list is usually enough to see which ones you actually use.',
          'ollama ps shows the models currently loaded in memory, and ollama stop unloads one. Stop a model before removing it, and quit any app that is using Ollama in the background so nothing requests the model again mid-removal. ollama show followed by a model name prints its details, such as parameters and quantisation, which helps tell similar downloads apart.',
        ],
        code: ['ollama list', 'ollama ps'],
      },
      {
        id: 'remove-models',
        title: '2. Remove models with ollama rm',
        paragraphs: [
          'ollama rm followed by the model name and tag removes it. The disk space comes back directly, without going through the Trash, so it cannot be undone from Finder. If you need the model later, ollama pull downloads it again, which for a large model can take a long time on a slow connection.',
          'Do not delete files in blobs by hand. The manifests still point at them, and one blob can be part of more than one model, so hand-deleting can leave a model that is listed but broken while freeing less than expected. ollama rm keeps the manifests and blobs consistent.',
        ],
        code: ['ollama rm llama3.2', 'ollama pull llama3.2'],
      },
      {
        id: 'move-models',
        title: '3. Move models to another drive',
        paragraphs: [
          'Ollama’s FAQ documents the OLLAMA_MODELS environment variable for using a different directory. For the Mac app, it says to set the variable with launchctl setenv and then restart the Ollama application. Quit Ollama first, copy the contents of ~/.ollama/models to the new folder, set the variable, start Ollama, and confirm ollama list still shows your models before moving the old folder to the Trash.',
          'A value set with launchctl setenv lasts until you log out or restart, so plan to set it again, or check whether your version of the Ollama app offers a model location option in its settings, which is simpler. An external drive must be connected before Ollama starts; with it unplugged, the models are not available.',
        ],
        code: [
          'launchctl setenv OLLAMA_MODELS "/Volumes/External/ollama-models"',
        ],
      },
      {
        id: 'cleardisk-and-other-apps',
        title: 'Other model folders, and what ClearDisk shows',
        paragraphs: [
          'ClearDisk’s free scan lists Ollama models in its Developer Junk list but leaves them unselected by default, because they are downloads you chose rather than a cache. Use it to see how much space they take next to other developer folders, and ollama rm to remove the models themselves.',
          'Other local-model tools keep their own copies. Hugging Face tools, for example, default to a folder under ~/.cache, and desktop model apps have their own libraries. The same model downloaded in two tools takes space twice, so check each app’s settings before assuming Ollama is the whole story.',
        ],
      },
    ],
    questions: [
      {
        q: 'Can I delete Ollama model files by hand in Finder?',
        a: 'No, avoid deleting files in the blobs folder directly. Manifests point at them and one blob can be part of more than one model, so hand-deleting can leave a model listed but broken while freeing less than expected.',
      },
      {
        q: 'Does removing an Ollama model send it to the Trash?',
        a: 'No. ollama rm frees the disk space directly without going through the Trash, so it cannot be undone from Finder. ollama pull downloads the model again later if you need it.',
      },
      {
        q: "How do I move Ollama's models to an external drive?",
        a: 'Quit Ollama, copy the contents of ~/.ollama/models to the new folder, set the OLLAMA_MODELS environment variable, then restart Ollama and confirm ollama list still shows your models before moving the old folder to the Trash.',
      },
      {
        q: 'Why does ClearDisk list Ollama models but leave them unselected by default?',
        a: "ClearDisk's free scan shows Ollama models in its Developer Junk list because they are downloads you chose rather than a cache, so it displays their size without selecting them for automatic removal.",
      },
    ],
    related: [
      'developer-storage-on-mac',
      'find-large-files-on-mac',
      'expand-mac-storage-external-ssd',
      'check-disk-space-mac-terminal',
    ],
    sources: [
      {
        label: 'Ollama docs: FAQ, where models are stored and OLLAMA_MODELS',
        url: 'https://docs.ollama.com/faq',
      },
      {
        label: 'Ollama docs: macOS, file locations',
        url: 'https://docs.ollama.com/macos',
      },
      {
        label: 'Ollama docs: CLI reference',
        url: 'https://docs.ollama.com/cli',
      },
    ],
  },
  {
    slug: 'android-studio-disk-space-mac',
    title: 'Android Studio taking up space on Mac: what to remove',
    description:
      'Where Android Studio keeps the SDK, emulators and caches on a Mac, how to remove old system images in SDK Manager, and wipe or delete virtual devices safely.',
    summary:
      'Android Studio’s space is mostly the SDK in ~/Library/Android/sdk, emulator devices in ~/.android/avd and the Gradle cache in ~/.gradle. Remove unused SDK packages in SDK Manager and unused devices in Device Manager rather than in Finder.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'measure-the-folders',
        title: '1. Measure the three big folders',
        paragraphs: [
          'Android’s documentation gives ~/Library/Android/sdk as the default SDK location on macOS; SDK Manager shows the actual path at the top of its window if you chose another. Virtual devices live in ~/.android/avd unless ANDROID_AVD_HOME points elsewhere, and Gradle, which builds every Android project, keeps its cache in ~/.gradle.',
          'Measure all three with du before changing anything. Inside the SDK, the system-images, platforms and ndk folders are the usual large ones; inside avd, each device has its own folder.',
        ],
        code: [
          'du -sh ~/Library/Android/sdk/* | sort -h',
          'du -sh ~/.android/avd/* | sort -h',
          'du -sh ~/.gradle',
        ],
      },
      {
        id: 'sdk-manager',
        title: '2. Remove old SDK packages in SDK Manager',
        paragraphs: [
          'Open Tools → SDK Manager. The SDK Platforms tab lists Android versions with their system images, the files the emulator boots; the SDK Tools tab lists build tools, the emulator, the NDK and similar. Turn on Show Package Details to see individual versions. Clear the checkbox next to a package you no longer need and click Apply; packages marked for removal show a red X until you confirm.',
          'Keep the platform your projects compile against and the system images your current virtual devices use. Old NDK and build-tools versions are good candidates if no project’s build files name them. Anything removed can be installed again from the same window, at the cost of a download. Android’s documentation says to choose Intel or ARM system images to match your Mac’s processor, so images for the other architecture, often left over from an older Mac, are candidates too.',
        ],
      },
      {
        id: 'device-manager',
        title: '3. Wipe or delete emulators in Device Manager',
        paragraphs: [
          'Open View → Tool Windows → Device Manager, or More Actions → Virtual Device Manager from the welcome screen. Each virtual device has a menu with Wipe Data, Delete and Show on Disk. Android’s documentation describes a device’s storage as holding its user data, such as installed apps and settings, and an emulated SD card, and Quick Boot keeps a saved state as well.',
          'Wipe Data returns a device to new and keeps it in the list; Delete removes it. Either loses test accounts, app data and files inside the emulator, so copy out anything you need first. The system image a device used stays in the SDK after the device is deleted; remove it in SDK Manager if no other device uses it.',
        ],
      },
      {
        id: 'gradle-and-old-versions',
        title: '4. Clear Gradle and old Android Studio folders',
        paragraphs: [
          'The Gradle cache is shared by every Android project on the Mac and is often the largest single item. The Gradle guide explains how to stop the daemons and clear it; quit Android Studio first, since it runs its own daemons.',
          'Each Android Studio version keeps settings in ~/Library/Application Support/Google/AndroidStudio followed by the version, with matching cache and log folders. Android’s documentation says the first run of a new major version looks for folders from versions that are no longer installed and offers a Delete Unused Android Studio Directories dialog with their sizes. Accept it for versions you have removed. Android Studio is built on the IntelliJ platform, so Invalidate Caches works as in the JetBrains guide.',
        ],
      },
      {
        id: 'what-not-to-delete',
        title: 'What not to delete',
        paragraphs: [
          'Do not delete ~/.android as a whole. Besides the avd folder it holds debug.keystore, the key that signs your debug builds; losing it changes your debug signature, which breaks API keys or sign-in setups registered against it until you register the new one.',
          'Avoid removing the whole SDK folder while projects depend on it, and skip Finder for anything SDK Manager or Device Manager can remove. ClearDisk’s Developer Junk list includes the Gradle cache, not the Android SDK or emulator devices, so those stay a decision you make in Android Studio.',
        ],
      },
    ],
    questions: [
      {
        q: 'Should I delete emulator devices in Finder to save space?',
        a: 'No, use Device Manager instead. Wipe Data returns a device to new while keeping it in the list, and Delete removes it entirely; either loses test accounts, app data and files inside the emulator.',
      },
      {
        q: 'Is it safe to delete the whole ~/.android folder?',
        a: 'No. Besides the avd folder, it holds debug.keystore, the key that signs your debug builds. Losing it changes your debug signature, which breaks API keys or sign-in setups registered against it until you re-register.',
      },
      {
        q: 'Which SDK packages are safe to remove in Android Studio?',
        a: "Old NDK and build-tools versions no project's build files name, and system images for the processor architecture your Mac doesn't use, are good candidates. Keep the platform your projects compile against and images your current devices use.",
      },
      {
        q: 'Why does Android Studio offer to delete old version directories?',
        a: 'On the first run of a new major version, it looks for folders left by versions no longer installed and offers a Delete Unused Android Studio Directories dialog showing their sizes, which you can accept.',
      },
    ],
    related: [
      'clear-gradle-cache-mac',
      'clear-jetbrains-cache-mac',
      'developer-storage-on-mac',
      'remove-unused-ios-simulators',
    ],
    sources: [
      {
        label: 'Android Developers: environment variables and default paths',
        url: 'https://developer.android.com/tools/variables',
      },
      {
        label: 'Android Developers: create and manage virtual devices',
        url: 'https://developer.android.com/studio/run/managing-avds',
      },
      {
        label: 'Android Developers: update the IDE and SDK tools',
        url: 'https://developer.android.com/studio/intro/update',
      },
    ],
  },
  {
    slug: 'developer-storage-on-mac',
    title: 'Developer storage on Mac: what it is and what to delete',
    description:
      'What the Developer category in Mac Storage settings counts, from Xcode build files to device support and Command Line Tools, and what is safe to delete.',
    summary:
      'The Developer category in System Settings → General → Storage counts files from Xcode and Apple’s developer tools: project build data, archives, Xcode caches, device support files and the Command Line Tools. Build data and caches come back on their own; archives and tools deserve a second look.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'open-the-category',
        title: '1. Open the Developer category',
        paragraphs: [
          'Choose Apple menu → System Settings, click General, then Storage. After macOS finishes calculating, find Developer in the list and click the info button next to it to see what it contains, with a size for each item. If there is no Developer row, macOS found nothing it counts there.',
          'Apple’s Storage settings help describes the categories with a More Info button but does not explain Developer item by item. The descriptions below are based on what the category lists on macOS Tahoe 26.6; names can differ slightly on other releases.',
        ],
      },
      {
        id: 'what-it-counts',
        title: 'What the Developer list counts',
        paragraphs: [
          'Everything in the list comes from Apple’s own developer tools. Other names, such as Developer Tools and Kernel Development Kits, appear on fewer Macs. Simulator devices and runtimes are managed from Xcode instead, which the simulator guide covers.',
          'Tools from other vendors are not part of this category. npm, Gradle, CocoaPods, Homebrew, Docker and Python environments are counted elsewhere, often in System Data, which is why a developer Mac can show a small Developer figure and a very large System Data one.',
        ],
        items: [
          'Xcode Project Build Files, or Project Build Data and Indexes: Derived Data in ~/Library/Developer/Xcode/DerivedData. Rebuilt on the next build.',
          'Project Archives: ~/Library/Developer/Xcode/Archives, the builds you archived for distribution, with their debug symbols.',
          'Xcode Caches: Xcode’s cache in ~/Library/Caches and the simulator caches in ~/Library/Developer/CoreSimulator/Caches.',
          'iOS, watchOS, tvOS, macOS and visionOS Device Support: files Xcode prepares for each OS version of a device you connect.',
          'Command Line Tools: /Library/Developer/CommandLineTools, which provides git, clang and other tools without a full Xcode.',
        ],
      },
      {
        id: 'delete-what-rebuilds',
        title: '2. Delete what rebuilds itself',
        paragraphs: [
          'Project build files and Xcode caches are regenerated. Removing them costs a slower first build and a fresh indexing pass in each project, nothing more. Derived Data also holds each project’s Swift package checkouts, so packages are resolved and downloaded again. Quit Xcode before deleting them, so it is not writing to the same folders.',
          'Assume that a deletion made from Storage settings cannot be recovered from the Trash. If you want per-project control, or a Trash step you can undo, use the Derived Data guide to remove folders for inactive projects from Finder instead.',
        ],
      },
      {
        id: 'review-archives',
        title: '3. Review archives and device support first',
        paragraphs: [
          'Archives are not a cache. Each one holds a build you exported or uploaded plus the debug symbols needed to make sense of crash reports from that version. Keep archives for releases people still run. Xcode’s Organizer window lists them by app and date; copy the ones you want to keep to backup storage before removing the rest. Control-click an archive there and choose Show in Finder to see the file itself.',
          'Device support files are prepared again when you connect a device running that OS version, which takes a while the first time. Remove the versions for devices you no longer test on and keep the current ones.',
        ],
      },
      {
        id: 'command-line-tools',
        title: '4. Decide about the Command Line Tools',
        paragraphs: [
          'Apple’s documentation says Xcode comes with its own command-line tools, so if Xcode is installed you do not need the separate package. On a Mac without Xcode, though, the package is what git, compilers and Homebrew builds depend on, and removing it breaks them until it is installed again. Only one version can be installed at a time, so old versions do not pile up.',
          'xcode-select -p shows which set your Mac is using. Apple’s page documents the removal command, which needs administrator rights, and notes that Software Update keeps offering the package afterwards. xcode-select --install puts it back. After a macOS upgrade, Software Update may offer a newer package; installing it replaces the old version rather than adding another.',
        ],
        code: ['xcode-select -p', 'xcode-select --install'],
      },
      {
        id: 'what-the-category-misses',
        title: 'Developer files the category misses',
        paragraphs: [
          'For package caches and build tools outside Xcode, measure each one with its own command. The related guides cover Homebrew, npm and pnpm, Gradle, CocoaPods, Docker and Python separately.',
          'ClearDisk’s free scan puts Xcode Derived Data, Archives, iOS DeviceSupport and CoreSimulator in its Developer Junk list next to those tool caches, with sizes. Archives appear there too and deserve the same care as in Storage settings.',
        ],
      },
    ],
    questions: [
      {
        q: 'Why does my Mac show a small Developer storage number but a huge System Data number?',
        a: "The Developer category only counts Apple's own tools, like Derived Data, archives and device support. Other developer caches such as npm, Gradle, CocoaPods, Homebrew and Docker are counted elsewhere, often inside System Data instead.",
      },
      {
        q: 'Is it safe to delete Xcode archives to free space?',
        a: 'Not without checking first. An archive is not a cache: each one holds a build you exported or uploaded plus the debug symbols needed to make sense of crash reports, so keep archives for releases people still run.',
      },
      {
        q: 'What happens if I remove the Command Line Tools on my Mac?',
        a: "If Xcode isn't installed, removing them breaks git, compilers and Homebrew builds until you reinstall with xcode-select --install. Only one version can be installed at a time, so old versions never pile up.",
      },
      {
        q: 'Can I undo a deletion made from the Developer storage panel?',
        a: 'No, assume it cannot be recovered from the Trash. For a step you can undo, remove Derived Data or old archive folders from Finder instead of deleting straight from Storage settings.',
      },
    ],
    related: [
      'clear-xcode-derived-data',
      'remove-unused-ios-simulators',
      'what-is-system-data-on-mac',
      'clean-homebrew-cache-mac',
    ],
    sources: [
      {
        label: 'Apple: change Storage settings on Mac',
        url: 'https://support.apple.com/en-us/guide/mac-help/mchl3d437fbc/mac',
      },
      {
        label: 'Apple Developer: installing the command-line tools',
        url: 'https://developer.apple.com/documentation/xcode/installing-the-command-line-tools/',
      },
      {
        label:
          'Apple Developer: downloading and installing additional Xcode components',
        url: 'https://developer.apple.com/documentation/xcode/downloading-and-installing-additional-xcode-components',
      },
    ],
  },
  {
    slug: 'clear-yarn-pnpm-cache-mac',
    title: 'Clear the Yarn and pnpm cache on Mac: where they live',
    description:
      'Find the Yarn 1, modern Yarn and pnpm caches on a Mac, clean each with its own command, and see why pnpm’s shared store makes node_modules sizes misleading.',
    summary:
      'Yarn 1 keeps one global cache (yarn cache dir), modern Yarn keeps a global cache in ~/.yarn/berry plus optional per-project caches, and pnpm keeps a shared store in ~/Library/pnpm/store. Clean each with its own command: yarn cache clean or pnpm store prune.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'which-version',
        title: '1. Work out which package manager and version',
        paragraphs: [
          'Yarn 1, often called Yarn classic, and modern Yarn, version 2 and later, store their caches in different places and use different commands. Run yarn --version inside a project: a 1.x number means classic. A packageManager field in package.json, or a .yarnrc.yml file in the project, is another sign the project uses modern Yarn.',
          'pnpm --version confirms pnpm. Clearing the cache of a tool a project does not use frees nothing for that project, so check each project you care about rather than assuming one version across the Mac.',
        ],
        code: ['yarn --version', 'pnpm --version'],
      },
      {
        id: 'yarn-classic',
        title: '2. Yarn 1: one global cache',
        paragraphs: [
          'Yarn 1 keeps every package it downloads in a single global cache. yarn cache dir prints its location, which on a Mac is usually inside ~/Library/Caches/Yarn, and du measures it. yarn cache list shows what is stored, and its --pattern option filters the list by package name.',
          'yarn cache clean clears the whole cache, and a package name after it clears only that package. The documentation notes the cache is populated again the next time yarn or yarn install runs, so the cost is a slower, network-dependent first install.',
        ],
        code: [
          'yarn cache dir',
          'du -sh "$(yarn cache dir)"',
          'yarn cache clean',
        ],
      },
      {
        id: 'modern-yarn',
        title: '3. Modern Yarn: a global cache and project caches',
        paragraphs: [
          'Modern Yarn’s enableGlobalCache setting is true by default, which stores cache files in its global folder, ~/.yarn/berry unless configured otherwise. A project that sets enableGlobalCache to false uses its cacheFolder instead, by default .yarn/cache inside the project.',
          'That project cache is often committed to git on purpose, for offline installs or the setup Yarn calls Zero-Installs. Deleting it from a repository shows up as deleted files in version control, so leave a committed .yarn/cache alone. Run yarn cache clean in a project to clear its local cache, --mirror to clear the global cache instead, or --all for both.',
        ],
        code: ['du -sh ~/.yarn/berry', 'yarn cache clean --mirror'],
      },
      {
        id: 'pnpm-store',
        title: '4. pnpm: one store per disk',
        paragraphs: [
          'pnpm keeps packages in a content-addressable store; pnpm’s documentation gives ~/Library/pnpm/store as the default on macOS, and pnpm store path prints the one in use. The store should be on the same disk as your projects, so pnpm uses one store per disk: projects on an external drive get a separate .pnpm-store folder at the root of that drive.',
          'pnpm store prune removes packages that no project on the system references any more. pnpm describes it as harmless with no side effects on projects, and suggests running it occasionally rather than often, because switching branches can need an unreferenced package again, and pnpm then downloads it.',
        ],
        code: [
          'pnpm store path',
          'du -sh "$(pnpm store path)"',
          'pnpm store prune',
        ],
      },
      {
        id: 'shared-store-sizes',
        title: 'Why node_modules sizes mislead with pnpm',
        paragraphs: [
          'pnpm links or clones files from the store into each project’s node_modules instead of copying them, so a project folder and the store share the same data. Adding a project’s node_modules size to the store size counts that data twice, and deleting one project’s node_modules frees little on its own.',
          'The order that works is to delete node_modules in projects you have finished with, then run pnpm store prune so packages nothing references are removed. ClearDisk’s Developer Junk list covers the npm cache and node_modules folders but not the Yarn or pnpm stores; its storage map and search show their sizes, and the commands above do the cleanup.',
          'Do not delete the store folder itself in Finder. Projects that link into it may then need a full reinstall, and pnpm has no way to tell which packages you still wanted. pnpm store status checks whether packages in the store have been modified since they were unpacked, which is worth running if you suspect a damaged store.',
        ],
      },
    ],
    questions: [
      {
        q: 'How do I know if a project uses Yarn 1 (classic) or modern Yarn?',
        a: 'Run yarn --version: a 1.x number means classic. A packageManager field in package.json or a .yarnrc.yml file signals modern Yarn, version 2 or later, and each version stores and clears its cache differently.',
      },
      {
        q: "Is it safe to delete a project's committed .yarn/cache folder?",
        a: 'Not if your team commits it to git on purpose, for offline installs or Zero-Installs. Deleting it shows up as deleted files in version control, so leave a committed .yarn/cache alone.',
      },
      {
        q: "Why doesn't deleting a project's node_modules free much space with pnpm?",
        a: "pnpm links or clones files from its shared store into each project's node_modules instead of copying them, so the project folder and the store share the same data, and deleting one node_modules frees little on its own.",
      },
      {
        q: "Can I delete pnpm's store folder directly in Finder?",
        a: 'No. Projects that link into it may then need a full reinstall, and pnpm has no way to know which packages you still wanted. Use pnpm store prune instead to remove only unreferenced packages.',
      },
    ],
    related: [
      'clear-npm-cache-mac',
      'find-node-modules-folders-mac',
      'check-disk-space-mac-terminal',
      'developer-storage-on-mac',
    ],
    sources: [
      {
        label:
          'Yarn docs: .yarnrc.yml settings (enableGlobalCache, globalFolder, cacheFolder)',
        url: 'https://yarnpkg.com/configuration/yarnrc',
      },
      {
        label: 'pnpm docs: store settings (storeDir)',
        url: 'https://pnpm.io/settings/store',
      },
      {
        label: 'pnpm docs: pnpm store (path, prune)',
        url: 'https://pnpm.io/cli/store',
      },
    ],
  },
  {
    slug: 'clear-cargo-cache-mac',
    title: 'Clear the Cargo cache and Rust target folders on Mac',
    description:
      'Where Rust uses disk space on a Mac: the ~/.cargo registry, target folders in each project and rustup toolchains, plus the commands that clean each safely.',
    summary:
      'Cargo’s download cache lives in ~/.cargo/registry and can be removed; Cargo downloads crates again when needed. The larger space is usually each project’s target folder, cleaned with cargo clean, and old rustup toolchains in ~/.rustup.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'measure',
        title: '1. Measure the three places Rust uses',
        paragraphs: [
          'Rust uses space in three places: Cargo’s home, ~/.cargo unless CARGO_HOME is set; rustup’s home, ~/.rustup, which holds installed toolchains; and a target folder inside every project you have built. The first two are hidden in Finder because their names start with a dot.',
          'The find command below lists target folders under a projects folder with their sizes. Other build tools, Maven among them, also name their output folder target, so check for a Cargo.toml next to any folder before treating it as Rust output.',
        ],
        code: [
          'du -sh ~/.cargo/registry ~/.cargo/git ~/.rustup',
          'find ~/Projects -type d -name target -prune -exec du -sh {} + 2>/dev/null | sort -h',
        ],
      },
      {
        id: 'inside-cargo-home',
        title: 'What is inside ~/.cargo',
        paragraphs: [
          'Cargo’s documentation describes the layout. registry/index holds metadata about available crates, registry/cache the downloaded .crate archives, and registry/src the extracted sources the compiler reads. git/db and git/checkouts do the same for dependencies fetched from git repositories. bin holds programs installed with cargo install, and the cargo and rustc commands themselves when rustup installed them.',
          'The documentation says you can remove any part of the cache and Cargo will do its best to restore the sources, by re-extracting archives, checking out repositories or downloading again. Since Rust 1.88, Cargo also cleans its global cache automatically: files downloaded from the network are removed if not accessed for three months, and files obtained from the local system after one month. The cache.auto-clean-frequency setting controls this; the release notes suggest setting it to never if you also use older Cargo versions alongside current ones.',
        ],
      },
      {
        id: 'clear-registry',
        title: '2. Clear the registry and git caches',
        paragraphs: [
          'Finish any builds and quit your editor, since rust-analyzer reads these folders in the background. Then move ~/.cargo/registry and ~/.cargo/git to the Trash, or only their cache and src subfolders for a smaller step. The next build downloads what each project needs, so work offline is not possible until it has. Before a trip, cargo fetch in a project downloads its dependencies without building anything.',
          'Keep bin, config.toml and credentials.toml; the last holds tokens for publishing to registries. ClearDisk’s Developer Junk list includes the Rust crate cache at ~/.cargo/registry with its size, which helps you compare it with target folders before choosing.',
        ],
      },
      {
        id: 'cargo-clean',
        title: '3. Clean target folders with cargo clean',
        paragraphs: [
          'cargo clean, run inside a project, deletes its whole target folder, and --dry-run shows a summary of what would be deleted first. --release removes only release artifacts and --doc only generated documentation. In a workspace, members share one target folder at the workspace root, so run it there. If CARGO_TARGET_DIR is set, or a Cargo configuration sets a target directory, builds go to that shared folder instead of each project, and the find command above will not see them.',
          'A cleaned project rebuilds from scratch on its next build, which for large dependency trees takes a while. Old experiments and finished projects are the best candidates; the project you build every day will simply fill its folder again.',
        ],
        code: ['cargo clean --dry-run', 'cargo clean', 'cargo clean --release'],
      },
      {
        id: 'toolchains',
        title: '4. Remove toolchains you no longer use',
        paragraphs: [
          'Every toolchain rustup installs, such as stable, a pinned version or a dated nightly, is a full compiler with its standard library. rustup toolchain list shows them, and rustup toolchain uninstall removes one by name. Before removing a pinned version, check whether a project’s rust-toolchain.toml file still names it. Extra compilation targets, such as those for iOS or WebAssembly, are installed per toolchain as well: rustup target list --installed shows them and rustup target remove deletes one.',
          'To remove Rust completely, rustup’s documentation gives rustup self uninstall, which removes rustup, its toolchains and Cargo’s home. Copy any program in ~/.cargo/bin you still want to keep somewhere else first.',
        ],
        code: [
          'rustup toolchain list',
          'rustup toolchain uninstall nightly-2025-01-01',
        ],
      },
    ],
    questions: [
      {
        q: 'Does Cargo clean up its own cache automatically?',
        a: 'Yes, since Rust 1.88. Files downloaded from the network are removed if unused for three months, and files obtained locally after one month, with the cache.auto-clean-frequency setting controlling how often this runs.',
      },
      {
        q: 'Is it safe to delete the ~/.cargo/registry folder?',
        a: 'Yes. Cargo can remove any part of the cache and will restore what it needs by re-extracting archives, checking out repositories, or downloading again. Just keep bin, config.toml and credentials.toml, which hold tools and publish tokens.',
      },
      {
        q: "Why doesn't cargo clean free space from every project's build folder?",
        a: "If CARGO_TARGET_DIR is set, or a project configures a shared target directory, builds go there instead of each project's own folder, so searching for individual target folders won't find that shared location.",
      },
      {
        q: 'Can I remove a Rust toolchain that rustup installed?',
        a: "Yes, with rustup toolchain uninstall, but check first whether a project's rust-toolchain.toml file still names that pinned version, since removing a toolchain a project depends on breaks its build.",
      },
    ],
    related: [
      'developer-storage-on-mac',
      'clear-gradle-cache-mac',
      'find-node-modules-folders-mac',
      'ncdu-on-mac',
    ],
    sources: [
      {
        label: 'The Cargo Book: Cargo home',
        url: 'https://doc.rust-lang.org/cargo/guide/cargo-home.html',
      },
      {
        label: 'The Cargo Book: cargo clean',
        url: 'https://doc.rust-lang.org/cargo/commands/cargo-clean.html',
      },
      {
        label: 'Rust blog: Rust 1.88.0, automatic cache cleaning',
        url: 'https://blog.rust-lang.org/2025/06/26/Rust-1.88.0/',
      },
    ],
  },
  {
    slug: 'clear-jetbrains-cache-mac',
    title: 'How to clear JetBrains IDE caches on Mac',
    description:
      'Clear IntelliJ IDEA, PyCharm or WebStorm caches on a Mac with Invalidate Caches, find their folders in ~/Library, and remove leftovers from old IDE versions.',
    summary:
      'Use File → Invalidate Caches in the IDE to clear caches for the version you run. The bigger saving is usually folders left by older versions in ~/Library/Caches/JetBrains, which Help → Delete Leftover IDE Directories removes.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'three-folders',
        title: '1. Know the three folders',
        paragraphs: [
          'JetBrains’ documentation lists where IntelliJ IDEA keeps its files on macOS, and PyCharm, WebStorm and the other IDEs follow the same pattern with their own product names. Configuration and plugins go in ~/Library/Application Support/JetBrains, caches in ~/Library/Caches/JetBrains, and logs in ~/Library/Logs/JetBrains, each in a subfolder named after the product and version, such as IntelliJIdea2026.2.',
          'Every major version gets a new set of folders. That is why a Mac that has run several releases can hold caches for IDE versions that are no longer installed. Plugins sit in a plugins subfolder of the configuration folder, so they move and age with it. Measure each location to see where the space is.',
        ],
        code: [
          'du -sh ~/Library/Caches/JetBrains/* | sort -h',
          'du -sh ~/Library/Logs/JetBrains/*',
          'du -sh "$HOME/Library/Application Support/JetBrains/"*',
        ],
      },
      {
        id: 'invalidate-caches',
        title: '2. Invalidate caches for the IDE you use',
        paragraphs: [
          'In the IDE, choose File → Invalidate Caches. The dialog offers optional extras: clearing the file system cache and Local History, clearing VCS Log caches and indexes, and deleting the embedded browser’s cache and cookies. If the menu item is hard to find, Find Action, Command-Shift-A in the default macOS keymap, locates it by name. Click Invalidate and Restart. The caches are removed when the IDE restarts, and it indexes your projects again when you open them.',
          'Local History is not deleted unless you tick that option. Invalidate Caches is mainly a fix for broken indexing or odd editor behaviour; for space alone the saving is modest, because the current version rebuilds its indexes straight away.',
        ],
      },
      {
        id: 'old-versions',
        title: '3. Remove leftovers from old versions',
        paragraphs: [
          'JetBrains’ documentation says that when you install a new major version, the IDE automatically deletes the caches and logs folders of older versions that have not been updated in the last 180 days. Configuration and plugin folders are kept. To review leftovers yourself, choose Help → Delete Leftover IDE Directories.',
          'If you prefer Finder, quit the IDE and move the Caches and Logs subfolders for versions you no longer have installed to the Trash. Be more careful with the matching Application Support folders: a new version imports settings from the previous one, so keep at least the latest older set until you are happy with the upgrade.',
        ],
      },
      {
        id: 'toolbox',
        title: '4. Toolbox App: previous versions and downloads',
        paragraphs: [
          'If you install IDEs through the Toolbox App, it keeps the previous version of each tool by design so you can roll back instantly. In Toolbox settings, the Tools section has a toggle called Keep previous versions of tools to enable instant rollback, with an option to remove the previous versions to save space. Removing them means you can no longer roll back instantly, so wait until the new version has worked for a while.',
          'The same section offers Clean up leftover tool directories and Clear download cache, each showing how much space it would free. The leftover view groups directories by the tool that created them and sorts them by modification date. On macOS, Toolbox installs the IDEs themselves in ~/Applications.',
        ],
      },
      {
        id: 'what-not-to-remove',
        title: 'What not to remove',
        paragraphs: [
          'The cache folder for the version you use also holds Local History, the IDE’s own record of recent changes to your files, which is separate from git. Deleting that folder by hand removes it, and deleting it while the IDE is running can leave indexes in a broken state. If a disk scanner groups this folder with other application caches, remember what it contains and use the IDE’s commands instead.',
          'Application Support holds your settings, keymaps and installed plugins, so treat it as configuration rather than cache. Android Studio stores its files under a Google folder instead of JetBrains; the Android Studio guide covers those.',
        ],
      },
    ],
    questions: [
      {
        q: 'Does Invalidate Caches free up a lot of disk space in JetBrains IDEs?',
        a: 'Not much on its own. It is mainly a fix for broken indexing or odd editor behavior, and since the current version rebuilds its indexes right after restarting, the space it actually saves is modest.',
      },
      {
        q: 'Why do I have JetBrains cache folders for versions I no longer use?',
        a: "Every major version creates its own set of cache, config and log folders named after that version, so a Mac that has run several releases can end up holding folders for versions that aren't installed anymore.",
      },
      {
        q: 'Does JetBrains clean up old version folders automatically?',
        a: 'Partly. Installing a new major version auto-deletes caches and logs of older versions untouched for 180 days, but keeps configuration and plugin folders, which you review yourself with Help then Delete Leftover IDE Directories.',
      },
      {
        q: "Is it safe to delete a JetBrains IDE's current cache folder by hand?",
        a: "No. It also holds Local History, the IDE's own record of recent file changes separate from git, and deleting it while the IDE is running can leave its indexes in a broken state.",
      },
    ],
    related: [
      'android-studio-disk-space-mac',
      'clear-gradle-cache-mac',
      'library-caches-folder-mac',
      'application-support-folder-mac',
    ],
    sources: [
      {
        label:
          'JetBrains: directories used by the IDE (macOS paths, leftover cleanup)',
        url: 'https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html',
      },
      {
        label: 'JetBrains: invalidate caches',
        url: 'https://www.jetbrains.com/help/idea/invalidate-caches.html',
      },
      {
        label: 'JetBrains: Toolbox App FAQ',
        url: 'https://www.jetbrains.com/help/toolbox-app/frequently-asked-questions.html',
      },
    ],
  },
  {
    slug: 'virtual-machine-disk-space-mac',
    title: 'Virtual machine disk space on Mac: Parallels, UTM, Fusion',
    description:
      'Find where Parallels, UTM and VMware Fusion keep virtual machines on a Mac, reclaim unused space inside a VM disk, and remove old VMs or snapshots safely.',
    summary:
      'A virtual machine is a whole computer in one bundle, so treat it like one. Parallels keeps VMs in ~/Parallels by default, UTM inside its app container and Fusion in Documents. Reclaim unused space with the app’s own tools before deleting anything.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'whole-computer',
        title: 'First: a VM file holds a whole computer',
        paragraphs: [
          'A .pvm, .utm or .vmwarevm bundle contains the guest operating system, its apps and every document saved inside it. Deleting the bundle is the same as erasing that computer’s disk. There is no way to recover a single file from it afterwards, and a Windows or app licence tied to that virtual machine may need deactivating first.',
          'So start by opening the VM and copying out anything you still need. Then decide between shrinking it, archiving it to an external drive, or removing it.',
        ],
      },
      {
        id: 'find-the-files',
        title: '1. Find the VM files',
        paragraphs: [
          'Parallels’ knowledge base lists ~/Parallels or /Users/Shared/Parallels as the usual locations, with the App Store edition keeping machines inside its Group Containers folder; in Control Center, Control-click a VM and choose Show in Finder. VMware Fusion keeps them in a Virtual Machines folder inside Documents, which may appear as Virtual Machines.localized, and its Virtual Machine Library offers Show in Finder too.',
          'A VM created in UTM normally sits inside UTM’s app container, in ~/Library/Containers/com.utmapp.UTM/Data/Documents, and UTM’s own menu can reveal it in Finder. du reports the space a bundle actually occupies, which for an expanding disk is less than its maximum size. If Desktop and Documents syncing to iCloud is on, check that a VM in Documents is not also being uploaded.',
        ],
        code: [
          'du -sh ~/Parallels/*.pvm',
          'du -sh ~/Library/Containers/com.utmapp.UTM/Data/Documents/*.utm',
        ],
      },
      {
        id: 'parallels-reclaim',
        title: '2. Reclaim space in Parallels',
        paragraphs: [
          'Shut down the virtual machine, then choose File → Free Up Disk Space. Parallels’ guide says the wizard shows whether you can reclaim space by removing snapshots, cache files and unnecessary files such as statistics, memory dumps and crash dumps. The Reclaim button on the General tab of the VM’s configuration compacts the virtual disk, and a Reclaim disk space on shutdown option does it automatically.',
          'Delete files inside Windows or Linux first, then reclaim: Parallels notes that the VM file stays the same size until you do. Do not stop the virtual machine while it is reclaiming, which risks corrupting it. A suspended VM also keeps its memory state on disk, so shutting it down frees some space by itself.',
        ],
      },
      {
        id: 'snapshots',
        title: '3. Check snapshots before anything else',
        paragraphs: [
          'A snapshot records the virtual disk at a moment so you can go back to it, and it grows as the machine changes after that moment. Several old snapshots can take more space than the current machine. Delete snapshots you will not return to from the app’s snapshot manager, never by removing files inside the bundle.',
          'Parallels warns that deleting a parent snapshot when many branches exist can make the virtual disk larger, so remove snapshots from the end of a chain first. UTM’s documentation notes that a QCOW2 disk image grows as the disk grows, so disk images tend to get bigger over time rather than smaller.',
        ],
      },
      {
        id: 'remove-a-vm',
        title: '4. Remove a VM you no longer need',
        paragraphs: [
          'After copying out your files, remove the VM from inside its app, or quit the app and move the bundle to the Trash in Finder. Be careful in UTM: its documentation says removing a VM stored in the default location deletes its data as well, not just the list entry. The space returns once the Trash is emptied.',
          'To keep a machine without keeping it on the internal disk, move it to an external drive: UTM has a Move action, and Parallels can archive machines you rarely use. ClearDisk’s storage map shows a VM bundle as one large block, which helps you find forgotten ones, but only the VM app can safely shrink what is inside.',
        ],
      },
    ],
    questions: [
      {
        q: 'What happens if I delete a virtual machine bundle in Finder?',
        a: "It's the same as erasing that virtual computer's whole disk, with no way to recover a single file afterward. Copy out anything you still need first, and deactivate any license tied to that machine before deleting.",
      },
      {
        q: 'Why does a Parallels virtual machine file stay the same size after deleting files inside it?',
        a: "The VM file doesn't shrink on its own. Use File then Free Up Disk Space, or the Reclaim button on the General tab, to actually compact the virtual disk after deleting files inside Windows or Linux.",
      },
      {
        q: 'Is it safe to delete an old snapshot to save space?',
        a: "Delete snapshots from the app's own snapshot manager, never by removing files inside the bundle, and remove them from the end of a chain first. Deleting a parent snapshot with many branches can actually make the disk larger.",
      },
      {
        q: "Does removing a VM from UTM's list delete its files too?",
        a: "Yes, for one stored in the default location. UTM's documentation says removing it deletes its data as well, not just the list entry, so copy out anything you need before you remove it.",
      },
    ],
    related: [
      'find-large-files-on-mac',
      'expand-mac-storage-external-ssd',
      'clean-docker-disk-space-mac',
      'remove-boot-camp-partition',
    ],
    sources: [
      {
        label:
          'Parallels: freeing up disk space (Parallels Desktop User’s Guide)',
        url: 'https://docs.parallels.com/landing/pdfm-ug/parallels-desktop-for-mac-27-users-guide/advanced-topics/working-with-virtual-machines/freeing-up-disk-space',
      },
      {
        label: 'Parallels KB: locate a virtual machine on Mac',
        url: 'https://kb.parallels.com/en/117333',
      },
      {
        label: 'UTM docs: virtual machine actions',
        url: 'https://docs.getutm.app/basics/actions/',
      },
    ],
  },
  {
    slug: 'ncdu-on-mac',
    title: 'How to install and use ncdu on Mac',
    description:
      'Install ncdu on a Mac with Homebrew, browse folder sizes in Terminal, run it read-only, and learn which key deletes files permanently before you press it.',
    summary:
      'Install ncdu with brew install ncdu, then run ncdu -r -x ~ to browse your home folder by size in read-only mode. Without -r, its d key deletes files permanently, with no Trash.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'install',
        title: '1. Install ncdu with Homebrew',
        paragraphs: [
          'ncdu, short for NCurses Disk Usage, is a disk usage browser that runs in Terminal. It scans a folder once, then lets you move through the results sorted by size, which is quicker than running du again for every subfolder. Homebrew packages it for Apple silicon and Intel Macs.',
          'Run brew install ncdu, then ncdu --version to confirm it is on your path. Homebrew installs the current release, and the options in this guide follow its current manual; older versions on other systems can differ slightly. If you decide you do not need it, brew uninstall ncdu removes it again.',
        ],
        code: ['brew install ncdu', 'ncdu --version'],
      },
      {
        id: 'scan-read-only',
        title: '2. Scan your home folder in read-only mode',
        paragraphs: [
          'Start with ncdu -r -x ~. The -r flag disables ncdu’s delete feature, and giving it twice, as -r -r, also disables its shell key, so nothing in the session can change the disk. The -x flag keeps the scan on one filesystem, so it does not wander into external drives or network volumes.',
          'Scan your home folder rather than the whole disk. macOS splits system and user data across volumes joined by firmlinks, which ncdu’s manual lists as unsupported, and your own files are in your home folder anyway. As with du, folders macOS protects show errors unless Terminal has Full Disk Access in System Settings → Privacy & Security.',
        ],
        code: ['ncdu -r -x ~'],
      },
      {
        id: 'read-the-screen',
        title: '3. Read the screen',
        paragraphs: [
          'Results open sorted by size, largest first. Use the arrow keys to move, Return or the right arrow to open a folder, and the left arrow to go back up. The keys below change the view without changing any files.',
          'By default ncdu shows disk usage, the space actually allocated. Apparent size is the file’s nominal length, which can differ a lot for sparse files such as virtual machine disks. Files copied as APFS clones share storage, but each copy is counted in full, so a total can be larger than what deleting would free. A letter before an entry flags something special; H, for example, marks a hard link whose data was already counted elsewhere.',
        ],
        items: [
          's sorts by size and n by name; press again to reverse.',
          'a switches between disk usage and apparent size.',
          'g cycles between percentage, graph, both or neither.',
          'e shows or hides hidden and excluded items; c shows item counts.',
          'i shows details for the selected item, including its path.',
          'r rescans the current folder; q quits.',
        ],
      },
      {
        id: 'delete-key',
        title: '4. Treat d as a permanent delete',
        paragraphs: [
          'Outside read-only mode, d deletes the selected file or folder. ncdu asks for confirmation by default, then removes the item directly: it does not go to the Trash, and there is no undo. The b key opens a shell in the current folder, where any command runs with your permissions. Both are reasons to start with -r whenever you only want to look.',
          'Use ncdu to decide, and delete elsewhere. Copy the path from the i view, open it in Finder with Go → Go to Folder, and move it to the Trash, or use the tool’s own cleanup command for caches such as npm, Gradle or Homebrew. That keeps a way back if you pick the wrong folder.',
        ],
      },
      {
        id: 'ncdu-or-du',
        title: 'ncdu, du and saved scans',
        paragraphs: [
          'The Terminal disk space guide uses du for one-off, sorted lists, which is enough to answer “which folder is biggest?”. ncdu is better when you want to explore, or rescan with r after a cleanup to see the difference. To keep a scan, export it with -o and open it later with -f; ncdu disables deletion when browsing an imported file. That also makes it easy to compare a folder before and after a cleanup without waiting for a second full scan.',
          '--exclude-caches skips folders marked with a CACHEDIR.TAG file, such as Gradle’s caches, to show what remains without them. If you prefer a graphical view, ClearDisk’s free scan draws the same information as a storage map.',
        ],
        code: ['ncdu -x -o ~/home-scan.json ~', 'ncdu -f ~/home-scan.json'],
      },
    ],
    questions: [
      {
        q: 'How do I use ncdu without risking deleting files by accident?',
        a: 'Run it as ncdu -r -x ~. The -r flag disables its delete feature, and doubling it as -r -r also disables the shell key, so nothing in that session can change your disk while you browse.',
      },
      {
        q: "Does ncdu's delete key send files to the Trash?",
        a: 'No. Outside read-only mode, the d key deletes the selected file or folder directly after a confirmation prompt. There is no Trash step involved, and no undo.',
      },
      {
        q: 'Why should I scan my home folder instead of the whole disk with ncdu?',
        a: "macOS splits system and user data across volumes joined by firmlinks, which ncdu's manual lists as unsupported. Your own files are in your home folder anyway, so scanning it directly avoids the issue entirely.",
      },
      {
        q: 'Can I save an ncdu scan to compare later?',
        a: 'Yes. Export it with the -o flag and reopen it later with -f. ncdu disables deletion when browsing an imported file, making it a safe way to compare a folder before and after a cleanup.',
      },
    ],
    related: [
      'check-disk-space-mac-terminal',
      'disk-space-analyzer-mac',
      'find-large-files-on-mac',
      'show-hidden-files-mac',
    ],
    sources: [
      {
        label: 'ncdu manual',
        url: 'https://dev.yorhel.nl/ncdu/man',
      },
      {
        label: 'Homebrew Formulae: ncdu',
        url: 'https://formulae.brew.sh/formula/ncdu',
      },
    ],
  },
];
