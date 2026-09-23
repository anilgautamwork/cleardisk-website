import type { Guide } from './guides.ts';

const imageRm = {
  label: 'Docker: docker image rm reference',
  url: 'https://docs.docker.com/reference/cli/docker/image/rm/',
};
const imageLs = {
  label: 'Docker: docker image ls reference',
  url: 'https://docs.docker.com/reference/cli/docker/image/ls/',
};
const pruning = {
  label: 'Docker: prune unused Docker objects',
  url: 'https://docs.docker.com/engine/manage-resources/pruning/',
};
const macFaq = {
  label: 'Docker: FAQs for Docker Desktop for Mac',
  url: 'https://docs.docker.com/desktop/troubleshoot-and-support/faqs/macfaqs/',
};
const desktopImages = {
  label: 'Docker: the Images view in Docker Desktop',
  url: 'https://docs.docker.com/desktop/use-desktop/images/',
};

export const dockerGuides: Guide[] = [
  {
    slug: 'delete-docker-images-mac',
    title: 'How to delete Docker images on Mac, one or all',
    description:
      'Delete Docker images on a Mac: remove one by name or ID, match names with a filter, clear every unused image with prune -a, and know why the space may lag.',
    summary:
      'Delete one image with docker image rm followed by its name:tag or ID, or every image that no container uses with docker image prune -a. Removing a name:tag only untags the image when it has other tags, and Docker Desktop hands freed space back to macOS through its disk image.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'list-images',
        title: '1. List your images and the containers using them',
        paragraphs: [
          'Docker Desktop must be running: the docker command on your Mac talks to an engine inside Docker Desktop’s Linux virtual machine, and if the app is closed every command fails with an error about connecting to docker.sock. With it running, docker image ls lists each image with its repository, tag, image ID and size. An image with several tags appears once per tag, but its size is stored only once, so don’t add up rows that share an ID.',
          'Recent Docker versions hide untagged images from the default list; add -a to see them too. Then run docker ps -a. Docker won’t normally remove an image that any container is based on, and that includes stopped containers. In Docker Desktop, the Images view marks those images In use and can sort the list into In use, Unused and Dangling.',
        ],
        code: ['docker image ls', 'docker image ls -a', 'docker ps -a'],
      },
      {
        id: 'delete-one',
        title: '2. Delete one image by name or ID',
        paragraphs: [
          'docker image rm, or its older alias docker rmi, accepts a name:tag, a short or full image ID, or a digest. Given a name:tag, it removes that tag. If it was the image’s only tag, the image is deleted too, and the output shows an Untagged line followed by Deleted lines. If the image still has other tags, you only see Untagged and no space comes back, because the data still belongs to the remaining names.',
          'Given an ID that has several tags, Docker refuses and asks for -f; with -f it removes every tag and the image. In Docker Desktop, open Images and select the bin icon on the row. Before deleting an image you built yourself and never pushed, make sure you can rebuild it: it can’t be pulled back from a registry.',
          'On Apple silicon, the containerd image store that current Docker Desktop uses can keep more than one platform variant of an image, for example arm64 and an amd64 variant pulled for testing. docker image ls --tree, marked experimental, shows them, and docker image rm --platform linux/amd64 removes one variant. Docker asks for --force there, because that content goes from every image that shares it.',
        ],
        code: ['docker image rm myapp:old', 'docker image rm 4e38e38c8ce0', 'docker image rm myapp:dev myapp:test'],
      },
      {
        id: 'delete-by-pattern',
        title: '3. Delete images whose name matches a pattern',
        paragraphs: [
          'The reference filter matches image names with shell-style wildcards. A pattern without a tag, such as myapp, matches every tag of that repository; myapp:1.* matches only the 1.x tags. The asterisk doesn’t cross a slash, so use myorg/* for images under a namespace. Always quote the pattern: zsh, the default shell on a Mac, tries to expand an unquoted * itself and stops with “no matches found.”',
          'Preview the match first, then pass the same filter to docker image rm. Printing each match as name:tag, rather than as an ID, untags images cleanly even when one ID carries several names, and avoids the “must be forced” error. The shell substitutes the list before docker image rm runs, so if nothing matches you get a harmless “requires at least 1 argument” message.',
        ],
        code: [
          'docker image ls --filter "reference=myapp"',
          'docker image ls --filter "reference=myapp:1.*"',
          'docker image rm $(docker image ls --filter "reference=myapp" --format "{{.Repository}}:{{.Tag}}")',
        ],
      },
      {
        id: 'delete-all',
        title: '4. Delete all images',
        paragraphs: [
          'The clean way to delete everything you aren’t using is docker image prune -a. It removes every image without at least one container, running or stopped, and asks for confirmation first. Add --filter "until=720h" to limit it to images created more than 30 days ago. Images with a container are left alone, so a second step is needed if you want those gone as well.',
          'The literal answer, docker image rm $(docker image ls -q), hands every image ID to the remove command. Images that containers use fail with conflict errors, which is Docker protecting them, and IDs with several tags fail unless forced. Resist adding -f to silence that. To empty Docker completely, remove the containers first, knowing that deletes their writable layers. Image commands never touch volumes.',
        ],
        code: ['docker image prune -a', 'docker image prune -a --filter "until=720h"', 'docker image rm $(docker image ls -q)'],
      },
      {
        id: 'space-afterward',
        title: 'Why free space on your Mac may not change right away',
        paragraphs: [
          'Docker Desktop keeps images inside one disk image file. When images are deleted, Docker returns the freed blocks to macOS; Docker’s documentation says this takes a few seconds for Docker.raw and a few minutes for the older Docker.qcow2 format. The file’s listed size can stay large because it is a sparse file, so check available space rather than the file size.',
          'If docker system df still shows a large total, look at build cache and stopped containers, which can hold the same layers. Docker Desktop also keeps separate classic and containerd image stores, and switching between them hides the other store’s images without deleting them. The Docker.raw guide below explains how to confirm what the disk image really occupies.',
        ],
        code: ['docker system df'],
      },
    ],
    related: ['docker-image-in-use-conflict', 'docker-dangling-vs-unused-images', 'docker-raw-file-mac', 'clean-docker-disk-space-mac'],
    sources: [imageRm, imageLs, { label: 'Docker: docker image prune reference', url: 'https://docs.docker.com/reference/cli/docker/image/prune/' }],
  },
  {
    slug: 'remove-docker-containers-mac',
    title: 'How to remove old Docker containers on Mac',
    description:
      'Remove old Docker containers on a Mac: list stopped ones with docker ps -a, save their files, delete them with docker rm or prune, and use --rm for one-offs.',
    summary:
      'Stopped containers stay on disk until you remove them. List them with docker ps -a, delete chosen ones with docker rm, or every stopped container with docker container prune, optionally limited with --filter "until=24h". Removing a container deletes its writable layer for good, so copy out anything you need first.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'list-containers',
        title: '1. List every container, not only running ones',
        paragraphs: [
          'docker ps shows running containers only, which is why old ones go unnoticed. Add -a to include everything: the STATUS column reads Exited for stopped containers and Created for containers that were never started. Add --size to see two figures per container: the data in its own writable layer, and a virtual size that also counts the read-only image underneath it.',
          'The same list is in Docker Desktop’s Containers view, which shows running and stopped containers together and groups Compose projects under their project name. Each stopped container keeps its writable layer, its settings and its logs until it is removed, so a development Mac that runs many one-off containers can collect a long list.',
        ],
        code: ['docker ps -a', 'docker ps -a --size', 'docker ps -a --filter "status=exited"'],
      },
      {
        id: 'save-data',
        title: '2. Copy out anything the container holds',
        paragraphs: [
          'A container’s writable layer holds everything it wrote outside volumes and bind mounts: generated files, uploads, and sometimes a database that was never given a volume. Removing the container deletes that layer. Nothing goes to the Trash, and there is no undo. Data in named volumes survives, which is what volumes are for.',
          'docker cp copies a path out of a running or stopped container to your Mac. In Docker Desktop, select the container and open its Files tab to browse its filesystem and download what you need. If the files you care about are in a volume, back up the volume separately; the volumes guide covers that.',
        ],
        code: ['docker cp old-api:/app/exports ./old-api-exports'],
      },
      {
        id: 'remove-specific',
        title: '3. Remove specific containers',
        paragraphs: [
          'Pass one or more names or IDs to docker rm. A running container is refused; stop it first with docker stop, which lets the process shut down cleanly. docker rm -f skips that step by sending SIGKILL, which can leave a database mid-write, so keep it for containers you’re sure about. Adding -v also removes the container’s anonymous volumes, while named volumes stay.',
          'To remove only the exited ones, combine docker rm with a filtered list, as Docker’s own reference shows. For a Compose project, docker compose down removes its containers and networks. docker compose down -v also deletes the named volumes declared in the Compose file, so leave -v off unless you mean to delete that data. In Docker Desktop, use the Delete action on a container row.',
        ],
        code: ['docker stop old-api', 'docker rm old-api', 'docker rm $(docker ps -aq --filter "status=exited")'],
      },
      {
        id: 'prune-stopped',
        title: '4. Remove all stopped containers at once',
        paragraphs: [
          'docker container prune removes every stopped container after a confirmation prompt, and prints the IDs it deleted and the space reclaimed. Running containers are never touched. The -f flag skips the prompt; keep it out of habits and scripts you haven’t reviewed.',
          'To keep recent work, add --filter "until=24h". Note what the filter measures: containers created more than 24 hours ago, not stopped more than 24 hours ago, so a long-lived container you stopped this morning still qualifies. Labels work too, and filters with different keys must all match. docker system prune goes further and also removes unused networks, dangling images and build cache.',
        ],
        code: ['docker container prune', 'docker container prune --filter "until=24h"', 'docker container prune --filter "until=168h"'],
      },
      {
        id: 'use-rm',
        title: '5. Stop them piling up with --rm',
        paragraphs: [
          'For one-off commands, start containers with docker run --rm. Docker removes the container, along with its anonymous volumes, as soon as it exits; named volumes are kept. docker compose run accepts --rm as well. The flag can’t be combined with a restart policy, which makes sense: a container that removes itself can’t be restarted.',
          'Removing containers frees their writable layers, but not the images they came from. If docker system df still shows large images, delete the ones you no longer need, and remember that Docker Desktop returns freed space to macOS through its disk image rather than instantly shrinking a folder you can see.',
        ],
        code: ['docker run --rm alpine echo hello', 'docker system df'],
      },
    ],
    related: ['delete-docker-images-mac', 'remove-docker-volumes-mac', 'clean-docker-disk-space-mac', 'docker-raw-file-mac'],
    sources: [
      { label: 'Docker: docker container prune reference', url: 'https://docs.docker.com/reference/cli/docker/container/prune/' },
      { label: 'Docker: docker container rm reference', url: 'https://docs.docker.com/reference/cli/docker/container/rm/' },
      pruning,
    ],
  },
  {
    slug: 'docker-dangling-vs-unused-images',
    title: 'Dangling vs unused Docker images: the difference',
    description:
      'Dangling vs unused Docker images: what an untagged “none” image is, how to list each kind on a Mac, and why prune and prune -a remove such different amounts.',
    summary:
      'A dangling image has no name or tag (it shows as <none>:<none>) and no container uses it; usually it’s an old build whose tag moved to a newer one. An unused image can have a perfectly good name, but no container, running or stopped, is based on it. docker image prune removes only dangling images; docker image prune -a removes every unused one.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-dangling-means',
        title: 'What makes an image dangling',
        paragraphs: [
          'Build myapp:latest, change the Dockerfile and build myapp:latest again. The tag moves to the new image, and the old one is left with no name: it appears as <none>:<none> and, if no container uses it, it is dangling. Pulling an updated version of a tag you already have can leave the previous copy in the same state. Docker’s own definition is an image that isn’t tagged and isn’t referenced by any container.',
          'Don’t confuse dangling images with intermediate images. The legacy builder saved each build step as an untagged parent image, and docker image ls -a shows those as <none> too. They belong to tagged images and aren’t dangling; the dangling filter only lists untagged images at the end of a chain.',
        ],
      },
      {
        id: 'what-unused-means',
        title: 'What makes an image unused',
        paragraphs: [
          'An unused image is one that no container is based on, running or stopped. The name doesn’t matter: postgres:16, pulled for a project whose containers you already removed, is unused, and so is every dangling image. A stopped container counts as use, so an image whose only container exited months ago is still in use until that container is removed.',
          'Docker Desktop’s Images view uses the same terms. It shows an In use tag next to images used by running or stopped containers, and can sort the list into In use, Unused and Dangling, which is the easiest way to see both groups at once on a Mac.',
        ],
      },
      {
        id: 'list-each-kind',
        title: '1. List each kind',
        paragraphs: [
          'docker image ls --filter "dangling=true" lists dangling images. Recent Docker versions hide untagged images from the plain docker image ls output, so they may be invisible until you filter for them or add -a. There’s no matching filter for unused images, but you can compare the image list with the images your containers use, which docker ps -a can print.',
          'docker system df gives the totals: the Images row shows how many images are active, meaning used by a container, and how much space is reclaimable, an estimate of what removing unused images could free.',
        ],
        code: ['docker image ls --filter "dangling=true"', 'docker ps -a --format "{{.Image}}" | sort -u', 'docker system df'],
      },
      {
        id: 'prune-dangling',
        title: '2. Remove dangling images',
        paragraphs: [
          'docker image prune, with no flags, removes dangling images only, after a confirmation prompt. It is the low-risk cleanup: these images have no name, and nothing runs from them. The exception is an untagged image you still want, such as a build you never pushed. Give it a name with docker tag before pruning and it stops being dangling. Dangling images are the ones that pile up quietly: each rebuild of a large image can leave the previous copy behind, so a day of Dockerfile changes is a good moment to prune.',
          'docker system prune also removes dangling images, together with stopped containers, unused networks and build cache. If you only meant to clear images, the image command is the narrower tool.',
        ],
        code: ['docker image prune', 'docker tag 8abc22fbb042 myapp:keep'],
      },
      {
        id: 'prune-unused',
        title: '3. Remove unused images',
        paragraphs: [
          'docker image prune -a widens the prune to every image without a container. That includes base images you’ll download again on the next pull or build, and images you built locally, which need their source and build steps to recreate. --filter "until=168h" limits it to images created more than a week ago; label filters are available too.',
          'Docker’s reference notes that the confirmation prompt always warns that all dangling images will be removed, even when you pass a filter, so read the filter rather than the prompt. After pruning, Docker Desktop returns the freed space to macOS through its disk image, which the Docker.raw guide explains.',
        ],
        code: ['docker image prune -a', 'docker image prune -a --filter "until=168h"'],
      },
    ],
    related: ['delete-docker-images-mac', 'clear-docker-build-cache-mac', 'docker-raw-file-mac', 'clean-docker-disk-space-mac'],
    sources: [pruning, imageLs, desktopImages],
  },
  {
    slug: 'docker-overlay2-on-mac',
    title: 'Is it safe to delete Docker’s overlay2 folder on Mac?',
    description:
      'Docker’s overlay2 folder on a Mac lives inside Docker Desktop’s Linux VM. Why you shouldn’t delete layers by hand, and the Docker commands that shrink it.',
    summary:
      'No. On a Mac, overlay2 and its successor, the containerd snapshotter, live inside Docker Desktop’s Linux virtual machine, not in a folder you can open, and deleting layer directories by hand corrupts images and containers. Shrink it with Docker’s own commands: remove containers, images and build cache, then let Docker Desktop return the space.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'where-it-lives',
        title: 'Where overlay2 lives on a Mac',
        paragraphs: [
          'On a Linux server, Docker’s classic storage driver keeps image and container layers under /var/lib/docker/overlay2, and that is the folder people find filling a disk. A Mac has no such folder; /var/lib/docker doesn’t exist in macOS, and searching Finder for overlay2 finds nothing for the same reason. Docker Desktop runs the engine in a Linux virtual machine and stores its containers and images in a single disk image file, Docker.raw, in your user Library.',
          'Current Docker Desktop may not use overlay2 at all. The containerd image store is the default in Docker Desktop 4.34 and later, switchable in Settings → General, and Docker’s documentation describes overlay2 as a legacy driver superseded by the overlayfs containerd snapshotter. docker info shows which one your setup uses: look at the Storage Driver line, or print the driver status, which reads io.containerd.snapshotter.v1 for the containerd store.',
        ],
        code: ['docker info', 'docker info -f "{{ .DriverStatus }}"'],
      },
      {
        id: 'why-not-by-hand',
        title: 'Why deleting layer folders breaks Docker',
        paragraphs: [
          'Docker’s storage documentation says plainly not to manipulate files or directories under /var/lib/docker, because Docker manages them. Layers are shared: one base layer can sit under dozens of images and containers, and Docker’s metadata refers to each directory by an ID. Remove a directory and Docker still believes the layer exists, so images fail to run, containers fail to start, and later cleanup commands trip over layers that are missing.',
          'On a Mac, reaching those directories means getting inside the virtual machine, and there is no supported reason to do that for cleanup. Deleting Docker.raw itself is the other shortcut people try. It discards every image, container and volume at once, so treat it as a reset, not a cleanup.',
        ],
      },
      {
        id: 'measure',
        title: '1. Measure what the layers belong to',
        paragraphs: [
          'docker system df splits Docker’s usage into images, containers, local volumes and build cache, with a reclaimable figure for each. The verbose form lists every image, container and volume. A large Build Cache line points to build cache; a large Containers line points to containers writing into their own layers instead of volumes.',
          'docker ps -a --size shows how much each container has written to its writable layer. A container that grows by itself, such as one keeping logs or a database inside its own filesystem, will keep filling the disk after every cleanup. Moving that data to a volume fixes the cause.',
        ],
        code: ['docker system df', 'docker system df -v', 'docker ps -a --size'],
      },
      {
        id: 'remove-with-commands',
        title: '2. Remove objects with Docker’s commands',
        paragraphs: [
          'Each Docker object has a command that deletes its layers safely and updates Docker’s records at the same time. Remove stopped containers you don’t need, then dangling or unused images, then build cache. Each command prompts before deleting and prints what it reclaimed.',
          'docker system prune combines the first steps: stopped containers, unused networks, dangling images and build cache. It leaves volumes alone unless you add --volumes, and even then it only takes anonymous volumes. The guides linked below cover each command’s flags and what each one can’t bring back.',
        ],
        code: ['docker container prune', 'docker image prune', 'docker builder prune'],
      },
      {
        id: 'space-back',
        title: '3. Let Docker Desktop return the space',
        paragraphs: [
          'Deleting images frees blocks inside the virtual disk, and Docker Desktop passes them back to macOS: within seconds for Docker.raw, according to Docker’s Mac FAQ. Deleting files inside a running container doesn’t free host space automatically. For that case the FAQ documents a command that triggers reclamation.',
          'If the virtual disk is simply the wrong size or on the wrong drive, change it in Docker Desktop under Settings → Resources → Advanced rather than in Finder. The Docker.raw guide explains that page, including the setting that erases all containers and images when you lower it.',
        ],
        code: ['docker run --privileged --pid=host docker/desktop-reclaim-space'],
      },
    ],
    related: ['docker-raw-file-mac', 'clear-docker-build-cache-mac', 'remove-docker-containers-mac', 'clean-docker-disk-space-mac'],
    sources: [
      { label: 'Docker: OverlayFS storage driver', url: 'https://docs.docker.com/engine/storage/drivers/overlayfs-driver/' },
      { label: 'Docker: containerd image store with Docker Engine', url: 'https://docs.docker.com/engine/storage/containerd/' },
      macFaq,
    ],
  },
  {
    slug: 'docker-raw-file-mac',
    title: 'What is Docker.raw on Mac, and can you delete it?',
    description:
      'Docker.raw is Docker Desktop’s virtual disk on a Mac. Why ls shows it huge, how to check its real size, shrink its contents, move it, and why not delete it.',
    summary:
      'Docker.raw is the virtual disk of Docker Desktop’s Linux machine: your images, containers, volumes and build cache all live inside it. It is a sparse file, so ls and some tools show its maximum size rather than the space it really uses. Don’t delete it or move it in Finder; shrink its contents with Docker commands and change its size or location in Docker Desktop’s settings.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'what-it-is',
        title: 'What the file is and where it lives',
        paragraphs: [
          'Docker on Linux keeps its data in /var/lib/docker. Docker Desktop for Mac runs that engine in a Linux virtual machine instead, and the machine’s disk is one large file: by default ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw. Docker Desktop’s Settings → Resources → Advanced page shows its location, its maximum size and the space it actually consumes. Older installs used a Docker.qcow2 file instead.',
          'Because everything Docker stores is inside, the file holds your volumes too, including any local databases. Docker Desktop’s General settings have an Include VM in Time Machine backups option, off by default, so unless you turned it on, Time Machine isn’t backing that data up.',
        ],
      },
      {
        id: 'real-size',
        title: '1. Check how much space it really uses',
        paragraphs: [
          'Docker.raw is a sparse file: it claims its full maximum size, but disk blocks are only allocated as Docker writes data. ls -lh shows the maximum, which can look alarming. du -h shows the blocks actually allocated, which is what it costs your Mac. Docker’s FAQ uses ls -klsh, whose first column is the allocated size in kilobytes, next to the maximum.',
          'Docker’s FAQ also warns that many tools report the maximum file size rather than the actual one. If a disk analyzer shows Docker.raw at hundreds of gigabytes on a Mac that doesn’t have that much used, compare with du and with available space in System Settings → General → Storage before drawing conclusions.',
        ],
        code: [
          'cd ~/Library/Containers/com.docker.docker/Data/vms/0/data',
          'ls -lh Docker.raw',
          'du -h Docker.raw',
          'ls -klsh Docker.raw',
        ],
      },
      {
        id: 'shrink-contents',
        title: '2. Shrink the contents with Docker commands',
        paragraphs: [
          'To make the file use less of your Mac, remove things inside it. docker system df -v shows what the space belongs to; the guides linked below cover images, containers, volumes and build cache one by one. Docker’s FAQ says space is reclaimed on the host within a few seconds for Docker.raw, and after a few minutes by a background process for Docker.qcow2.',
          'Deleting files inside a running container doesn’t free host space on its own; only deleting Docker objects does. The FAQ gives a command that triggers reclamation at any point. Measure with du again afterward: the allocated size should drop, while ls keeps showing the same maximum.',
        ],
        code: [
          'docker system df -v',
          'docker run --privileged --pid=host docker/desktop-reclaim-space',
          'du -h ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw',
        ],
      },
      {
        id: 'size-and-location',
        title: '3. Change its size limit or location in Settings',
        paragraphs: [
          'Open Docker Desktop → Settings → Resources → Advanced. The disk size control, labelled Disk usage limit in current releases and Disk image size with a slider in older ones, sets the maximum. Raising it is harmless. Lowering it is not: Docker’s FAQ states that reducing the maximum deletes the current disk image, and with it all containers and images. Back up volumes before you do it.',
          'To move the file to a bigger drive, use Disk image location → Browse, choose the new folder and select Apply. Don’t drag Docker.raw in Finder; Docker warns that it can lose track of the file. If you move it to an external drive, keep that drive connected whenever you use Docker Desktop, because every image and volume now lives there.',
        ],
      },
      {
        id: 'last-resorts',
        title: 'Clean up data and factory reset are last resorts',
        paragraphs: [
          'Docker Desktop’s Troubleshoot menu, reached from the Docker menu in the menu bar or the question mark icon near the top right of the Dashboard, offers Clean up data, called Clean / Purge data in some older versions. It resets all Docker data without a full factory reset, and Docker’s documentation notes that existing settings are lost too. Reset to factory defaults returns every option to its first-install state.',
          'Both erase your images, containers and volumes, and so does deleting Docker.raw by hand. Nothing moves to the Trash, and nothing can be recovered afterward. Use them only when Docker Desktop won’t work otherwise, after exporting any volume that holds data you need.',
        ],
      },
    ],
    related: ['docker-overlay2-on-mac', 'remove-docker-volumes-mac', 'virtual-machine-disk-space-mac', 'purgeable-space-on-mac'],
    sources: [
      macFaq,
      { label: 'Docker: change Docker Desktop settings', url: 'https://docs.docker.com/desktop/settings-and-maintenance/settings/' },
      { label: 'Docker: troubleshoot Docker Desktop', url: 'https://docs.docker.com/desktop/troubleshoot-and-support/troubleshoot/' },
    ],
  },
  {
    slug: 'clear-docker-build-cache-mac',
    title: 'How to clear the Docker build cache on Mac',
    description:
      'Clear Docker build cache on a Mac with docker builder prune: measure it with buildx du, keep recent layers, cap its size, and tune Docker Desktop’s GC.',
    summary:
      'Run docker builder prune to remove build cache nothing is using, add --filter "until=24h" to keep what recent builds used, or -a to remove more. Check first with docker buildx du or docker system df, because every layer you delete has to be rebuilt or downloaded on the next build.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'measure-cache',
        title: '1. Measure the build cache',
        paragraphs: [
          'docker system df has a Build Cache row with a total and a reclaimable figure. For detail, docker buildx du lists each cache record for the selected builder with its size, when it was last used and whether it is reclaimable. A record marked not reclaimable is in use by the builder and won’t be deleted even with -a.',
          'An asterisk after a size means the record shares storage with an image. Pruning it removes cache metadata, but the image still needs those layers, so little space comes back. In Docker Desktop, Settings → Builders shows each builder; inspecting an active builder includes its disk usage.',
        ],
        code: ['docker system df', 'docker buildx du', 'docker buildx du --verbose'],
      },
      {
        id: 'prune-cache',
        title: '2. Prune unused build cache',
        paragraphs: [
          'docker builder prune asks for confirmation, then deletes cache that nothing is using and reports how much it reclaimed. With Docker Desktop, the command runs through Buildx: docker builder prune --help shows docker buildx prune as its usage, and it acts on the selected builder, normally desktop-linux. Add --builder with a name to prune a different builder. Records that a running build is using count as in use and stay, so prune between builds.',
          'Builders that use the docker-container driver keep their cache in their own container. Removing such a builder in Settings → Builders removes its cache along with it; Docker Desktop won’t remove the builder that is currently selected.',
        ],
        code: ['docker builder prune', 'docker builder prune --builder mybuilder'],
      },
      {
        id: 'choose-scope',
        title: '3. Keep recent cache, or remove more',
        paragraphs: [
          'A filter keeps the cache you are actively using. --filter "until=24h" keeps records used in the last 24 hours and removes older ones, so today’s project still builds quickly. Size flags trim least-recently-used records until the cache fits a limit: current Buildx calls it --max-used-space, and older references list --keep-storage. docker builder prune --help shows which one your version accepts.',
          '-a widens the prune. Docker’s builder prune reference describes it as removing all unused build cache rather than only dangling records, and the Buildx help describes it as including internal and frontend images. Either way the next build will download base images again and rerun every step. Cache mounts, the RUN --mount=type=cache folders package managers use, are build cache too.',
        ],
        code: ['docker builder prune --filter "until=24h"', 'docker builder prune --max-used-space 10gb', 'docker builder prune -a'],
      },
      {
        id: 'garbage-collection',
        title: 'Let garbage collection keep it in check',
        paragraphs: [
          'BuildKit already clears old cache on a schedule. Docker’s documentation lists the defaults: easily regenerated cache unused for 48 hours goes first, then anything unused for 60 days, then whatever exceeds the size limit. With Docker Desktop that limit is builder.gc.defaultKeepStorage in Settings → Docker Engine, which is 20GB by default.',
          'If build cache keeps returning to a size you can’t spare, lower that value in the JSON on the Docker Engine page and apply the change, rather than pruning by hand every week. Keep the JSON valid and change only that value. Builders you create yourself with docker buildx create don’t read this setting; Docker’s documentation configures their garbage collection in a BuildKit configuration file instead.',
        ],
      },
      {
        id: 'system-prune-note',
        title: 'Build cache and docker system prune',
        paragraphs: [
          'docker system prune always includes unused build cache, cache mounts included, alongside stopped containers, unused networks and dangling images. If you run it to tidy containers, expect a slower next build. When cache is the only thing you want gone, docker builder prune is the precise tool. The reverse also holds: deleting images doesn’t empty the build cache, and docker system df counts the two separately.',
          'After pruning, Docker Desktop returns the freed blocks to macOS through its disk image. The Docker.raw guide shows how to confirm that with du rather than the file’s listed size.',
        ],
      },
    ],
    related: ['docker-raw-file-mac', 'docker-dangling-vs-unused-images', 'clean-docker-disk-space-mac', 'developer-storage-on-mac'],
    sources: [
      { label: 'Docker: docker builder prune reference', url: 'https://docs.docker.com/reference/cli/docker/builder/prune/' },
      { label: 'Docker: docker buildx du reference', url: 'https://docs.docker.com/reference/cli/docker/buildx/du/' },
      { label: 'Docker: build garbage collection', url: 'https://docs.docker.com/build/cache/garbage-collection/' },
    ],
  },
  {
    slug: 'remove-docker-volumes-mac',
    title: 'How to remove Docker volumes on Mac, and fix “in use”',
    description:
      'Remove Docker volumes on a Mac: list and back up database volumes, delete with docker volume rm or prune, and fix “volume is in use” with no containers.',
    summary:
      'List volumes with docker volume ls, back up any that hold data you need, then delete one with docker volume rm or unused ones with docker volume prune. If Docker says a volume is in use while nothing is running, a stopped container still references it: find it with docker ps -a --filter "volume=NAME" and remove that container first.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'list-volumes',
        title: '1. List volumes and find out what they hold',
        paragraphs: [
          'docker volume ls lists every volume. Long hexadecimal names are anonymous volumes, created when an image declares a volume or a container mounts a path without naming it. Readable names are named volumes; Compose prefixes them with the project name, so myproject_db-data belongs to a project called myproject. The dangling filter lists volumes no container references.',
          'docker system df -v includes a Local Volumes section with each volume’s size and how many containers link to it, and docker volume inspect shows labels, such as the Compose project that created it. Docker Desktop’s Volumes view shows the same list with sizes and an In use or Unused status, and lets you browse the files inside a volume.',
        ],
        code: ['docker volume ls', 'docker volume ls --filter "dangling=true"', 'docker system df -v', 'docker volume inspect myproject_db-data'],
      },
      {
        id: 'back-up-first',
        title: '2. Back up volumes that hold databases',
        paragraphs: [
          'Volumes exist to keep data after containers are gone, so they often hold the only copy of a local database, uploaded files or test fixtures. Deleting one is permanent: nothing goes to the Trash. If you might need the data, back it up first.',
          'For a database, the database’s own dump tool gives a consistent backup; run it inside the container with docker exec while the database is running. For other data, Docker’s volume documentation shows archiving a volume through a temporary container. Stop containers that write to the volume first. Docker Desktop’s Volumes view can also export a volume to a local file, which requires signing in.',
        ],
        code: [
          'docker exec my-postgres pg_dump -U postgres mydb > mydb.sql',
          'docker run --rm -v myproject_db-data:/data -v "$PWD":/backup alpine tar czf /backup/db-data.tgz -C /data .',
        ],
      },
      {
        id: 'remove-one',
        title: '3. Remove a volume',
        paragraphs: [
          'docker volume rm deletes one or more volumes by name, along with all their data. In Docker Desktop, open Volumes, select the Delete icon on the row and confirm with Delete forever. Both refuse while a container uses the volume.',
          'Docker Desktop’s documentation is explicit that this includes stopped containers: you can’t delete a volume while any container is using it, even if that container is stopped. That rule is behind the most common confusion about volumes. If you want the space back but the volume kept, Docker Desktop can also empty a volume, deleting its data while keeping the volume itself; like export, that requires signing in.',
        ],
        code: ['docker volume rm myproject_db-data'],
      },
      {
        id: 'in-use',
        title: '4. Fix “volume is in use” when nothing is running',
        paragraphs: [
          'The error ends with a list of container IDs: those are the containers holding the volume. docker ps shows only running containers, so they seem not to exist. docker ps -a with a volume filter finds them, stopped ones included. Remove the container, after saving anything in it you need, and the volume can be deleted. Reaching for -f is the wrong fix; the container is the dependency.',
          'Compose projects are the usual source. Stopping a project, or pressing Control-C, leaves its containers in place. docker compose down removes the containers and keeps named volumes; docker compose down -v removes the named volumes declared in the Compose file as well, so add -v only when you mean to delete that data.',
        ],
        code: ['docker ps -a --filter "volume=myproject_db-data"', 'docker rm 1a2b3c4d5e6f', 'docker volume rm myproject_db-data'],
      },
      {
        id: 'prune-volumes',
        title: '5. Prune unused volumes',
        paragraphs: [
          'docker volume prune removes unused local volumes, those no container references. On current Docker versions it removes only anonymous volumes by default, which is why it can report little reclaimed space while named volumes remain. -a includes unused named volumes too, and that is the flag that deletes the databases of abandoned projects, so list and back up first. Volumes Compose created carry their project’s name, which makes it easier to spot the ones from projects you have finished with.',
          'Other commands remove only anonymous volumes as well: docker rm -v, docker run --rm and docker system prune --volumes. After a prune, Docker Desktop returns the freed space to macOS through its disk image.',
        ],
        code: ['docker volume prune', 'docker volume prune -a'],
      },
    ],
    related: ['remove-docker-containers-mac', 'docker-raw-file-mac', 'clean-docker-disk-space-mac', 'delete-docker-images-mac'],
    sources: [
      { label: 'Docker: docker volume prune reference', url: 'https://docs.docker.com/reference/cli/docker/volume/prune/' },
      { label: 'Docker: the Volumes view in Docker Desktop', url: 'https://docs.docker.com/desktop/use-desktop/volumes/' },
      { label: 'Docker: volumes, including backup and restore', url: 'https://docs.docker.com/engine/storage/volumes/' },
    ],
  },
  {
    slug: 'docker-image-in-use-conflict',
    title: 'Why can’t I delete a Docker image? Conflict errors',
    description:
      'Fix Docker’s “conflict: unable to delete” errors on a Mac: find the running or stopped container, child image or extra tag behind it, then remove in order.',
    summary:
      'Docker won’t delete an image while something depends on it: a running or stopped container, another tag on the same ID, or, with the classic image store, a child image built on top of it. Read the end of the error, remove the container or image it names, then delete the image. Use -f only when you know what it skips.',
    published: '2026-09-24',
    updated: '2026-09-24',
    sections: [
      {
        id: 'read-the-error',
        title: 'Read the end of the error',
        paragraphs: [
          'The message has a fixed shape: conflict: unable to delete, the image ID or name, then either “must be forced” or “cannot be forced,” then the reason. “Must be forced” marks a soft conflict that -f can override; “cannot be forced” marks a hard one that only removing the dependency will clear. The reason names the container or explains the dependency.',
          'The repository-reference variant appears when you remove a name:tag that a container was created from. Depending on your image store it reads “unable to remove repository reference … (must force)” or “unable to delete … (must be forced),” and it ends with the container that is using the image.',
        ],
        items: [
          'image is being used by running container: stop and remove that container first. This one can’t be forced.',
          'image is being used by stopped container: remove the stopped container, then the image.',
          'image is referenced in multiple repositories: the ID has several tags. Remove them by name:tag, or use -f to remove all of them.',
          'image has dependent child images: another image was built on top of this one. Delete the child first. This one can’t be forced either.',
          'container … is using its referenced image …: a container was created from this name:tag. Remove the container, or keep the image.',
        ],
      },
      {
        id: 'find-container',
        title: '1. Find the container that uses the image',
        paragraphs: [
          'The error gives a short container ID. docker ps -a with an id filter shows that container, including stopped ones that plain docker ps hides. To see every container based on an image, filter by ancestor, which matches the image and anything built from it.',
          'Docker Desktop shows the same dependency without commands: the Images view puts an In use tag next to images that running or stopped containers use, and Docker’s documentation says the associated container must be removed before such an image. Check whether the container holds files you need before removing it; its writable layer goes with it.',
        ],
        code: ['docker ps -a --filter "id=4a7f7eebae0f"', 'docker ps -a --filter "ancestor=myapp:latest"'],
      },
      {
        id: 'remove-in-order',
        title: '2. Remove things in the right order',
        paragraphs: [
          'Stop the container if it is running, remove it, then remove the image. With the dependency gone, Docker can delete the image, and the space the container’s layers occupied comes back too. For a Compose project, docker compose down removes the project’s containers first; its --rmi local option also removes images the project built that have no custom tag.',
          'If the container belongs to something you still run, such as a Compose service, think twice: deleting the image only means Docker downloads or builds it again on the next start. When an image has several tags, removing one name:tag only untags it. Remove each name you no longer want; when the last tag goes, the image is deleted. docker image ls shows every tag that shares the ID.',
        ],
        code: ['docker stop 4a7f7eebae0f', 'docker rm 4a7f7eebae0f', 'docker image rm myapp:latest'],
      },
      {
        id: 'child-images',
        title: '3. Deal with dependent child images',
        paragraphs: [
          'A child image depends on a parent stored locally, which mostly happens with the classic image store and the older, non-BuildKit builder that saved each step as its own image. The containerd image store that current Docker Desktop uses by default doesn’t perform this check, so on an up-to-date Mac you are more likely to meet the other errors.',
          'Images created after the parent are candidates; the since filter lists them. Delete the children you don’t need, or run docker image prune to clear the dangling ones, then remove the parent. If a child is something you still use, keep the parent: it holds layers the child needs.',
        ],
        code: ['docker image ls --filter "since=4e38e38c8ce0"', 'docker image prune'],
      },
      {
        id: 'when-force',
        title: 'When -f is reasonable, and what it skips',
        paragraphs: [
          'docker image rm -f with an image ID removes every tag on that ID and the image in one step, which is its legitimate use. Forcing past a stopped container is different: the image loses its name, but the container still depends on its layers, so little or no space comes back until the container is removed as well.',
          'For bulk cleanup, docker image prune -a avoids conflicts altogether because it only considers images with no container. The images guide covers that, and the Docker.raw guide explains why freed space appears on your Mac through Docker Desktop’s disk image rather than as a smaller folder.',
        ],
      },
    ],
    related: ['delete-docker-images-mac', 'remove-docker-containers-mac', 'docker-dangling-vs-unused-images', 'docker-raw-file-mac'],
    sources: [
      imageRm,
      desktopImages,
      { label: 'Docker: docker container ls reference', url: 'https://docs.docker.com/reference/cli/docker/container/ls/' },
    ],
  },
];
