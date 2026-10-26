import type { Guide } from './guides.ts';

export const performancePosts: Guide[] = [
  {
    slug: 'blog/chrome-using-too-much-memory-mac',
    title: 'Chrome using too much memory on Mac? Check tabs first',
    description:
      'Find memory-heavy Chrome tabs on Mac, use Memory Saver and compare memory pressure before and after a change. Keep your saved work and browser profile intact.',
    summary:
      'Start with Chrome’s Task Manager and your Mac’s memory pressure. Review one tab or extension at a time before changing settings or deleting anything.',
    published: '2026-10-24',
    updated: '2026-10-24',
    sections: [
      {
        id: 'memory-or-storage',
        title: 'First, check which kind of space is running low',
        paragraphs: [
          'Chrome feels sluggish, switching tabs takes a moment, and the Mac seems busy even when you are only browsing. Start by checking memory while that slowdown is happening.',
          'RAM is the working memory used by running apps. Disk storage holds files between sessions. Deleting a Chrome profile or clearing site data is a different operation from reducing the work a tab is doing. Keep your profile intact while investigating RAM.',
          'This guide covers Chrome on a Mac. If the warning is about a full startup disk, use the Chrome storage guide instead. The steps below use built-in tools; a paid cleaner is optional.',
        ],
        links: [
          {
            label: 'Chrome taking up disk space on Mac',
            href: '/google-chrome-taking-up-space-mac',
          },
        ],
      },
      {
        id: 'check-pressure',
        title: '1. Check memory pressure during the slowdown',
        paragraphs: [
          'Open Activity Monitor in Applications → Utilities, then select Memory. The Memory Pressure graph describes how efficiently memory is serving the Mac’s workload. Also note Swap Used, which is disk space used to move data to and from RAM. Apple includes several factors in memory pressure; a large app-memory number alone is incomplete evidence.',
          'Keep this window open while you investigate Chrome. Record what you were doing, which apps were open and whether the same task still pauses after a change. A reading collected after the problem has disappeared may miss the conditions that caused it.',
        ],
        links: [
          {
            label: 'Apple: understand memory readings',
            href: 'https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac',
          },
        ],
      },
      {
        id: 'find-heavy-tab',
        title: '2. Find the tab or extension using memory',
        paragraphs: [
          'In Chrome, open the three-dot menu → More tools → Task Manager. Sort by Memory to inspect the busy tasks. Google recommends reviewing tasks you no longer need. Save unfinished forms or documents before closing their tabs.',
          'If a task will not respond, Task Manager offers End Process. Google warns that this loses unsaved work in the task. Prefer closing an unneeded tab normally when possible.',
          'For extensions, open the three-dot menu → Extensions → Manage Extensions. Turn off an optional extension you no longer need, then repeat the same browsing task. Leave required workplace or security extensions alone; ask your administrator about managed settings.',
        ],
        links: [
          {
            label: 'Google: Chrome Task Manager and extensions',
            href: 'https://support.google.com/chrome/answer/1385029?hl=en',
          },
        ],
      },
      {
        id: 'memory-saver',
        title: '3. Try Memory Saver for tabs you leave open',
        paragraphs: [
          'Open Chrome Settings → Performance and turn on Memory Saver. It deactivates tabs you are not using; opening one again reloads it. Google offers Moderate, Balanced and Maximum levels, with more frequent deactivation at Maximum.',
          'If a site must stay active, add it to Always keep these sites active in the same settings. Calls, downloads and some other activity can prevent deactivation. Save important work before experimenting; do not rely on a setting to preserve an unfinished form.',
          'For a quick tab-level reading on Mac, Settings → Appearance has Show memory usage on tab hover preview card. Enable it and hover over a tab. Treat it as a clue to investigate alongside Activity Monitor.',
        ],
        links: [
          {
            label: 'Google: Memory Saver and tab memory previews',
            href: 'https://support.google.com/chrome/answer/12929150?hl=en',
          },
        ],
      },
      {
        id: 'compare-results',
        title: '4. Check whether your actual task improved',
        paragraphs: [
          'Repeat the task that was slow with the same other apps open. After closing an unneeded tab, does switching between the remaining tabs feel better? Has the Memory Pressure graph changed? Keep a brief before-and-after note rather than trying to reach a particular RAM target.',
          'If nothing changes, reopen what you need and investigate the next likely cause. A slow website, heavy CPU work or a connection problem needs a different check. No memory-reduction percentage is promised here, and these instructions are documentation-based rather than a published benchmark.',
        ],
        links: [
          {
            label: 'Check CPU and other causes of a slow Mac',
            href: '/mac-running-slow-low-storage',
          },
          {
            label: 'Test a slow internet connection',
            href: '/blog/networkquality-mac-internet-test',
          },
        ],
      },
      {
        id: 'cleardisk-browser',
        title: 'Review browser activity inside ClearDisk',
        paragraphs: [
          'ClearDisk 2.2.0 includes the WhySlow performance tools. Performance readings and local usage charts are free. Its browser panel supports Chrome, Brave and Edge with optional macOS Automation access; private windows are excluded.',
          'An existing ClearDisk license covers confirmed duplicate-tab closure and window merging. Review the selected tabs and save work before closing them. Tab and extension memory figures in ClearDisk are estimates, so use Chrome’s own readings when investigating a specific tab.',
          'We make ClearDisk. You can follow all the built-in checks above without buying it. ClearDisk brings that investigation alongside disk scans and iCloud diagnostics; it does not guarantee a faster browser.',
        ],
        links: [
          {
            label: 'Compare free diagnostics and licensed actions',
            href: '/pricing',
          },
          {
            label: 'Performance features and limitations',
            href: '/features#performance',
          },
        ],
      },
    ],
    related: [
      'google-chrome-taking-up-space-mac',
      'mac-out-of-application-memory',
      'mac-swap-memory',
    ],
    sources: [
      {
        label: 'Google: Chrome performance settings',
        url: 'https://support.google.com/chrome/answer/12929150?hl=en',
      },
      {
        label: 'Google: speed up Chrome',
        url: 'https://support.google.com/chrome/answer/1385029?hl=en',
      },
      {
        label: 'Apple: memory usage in Activity Monitor',
        url: 'https://support.apple.com/guide/activity-monitor/view-memory-usage-actmntr1004/mac',
      },
    ],
  },
  {
    slug: 'blog/kernel-task-high-cpu-mac',
    title: 'kernel_task high CPU on Mac: what to check first',
    description:
      'Understand why kernel_task can use a lot of CPU, check the workload behind it, and know when cooling, app troubleshooting or Apple support is the next step.',
    summary:
      'kernel_task can rise while macOS manages heat. Start with the work your Mac is doing and its ventilation, not a command to kill a system process.',
    published: '2026-10-24',
    updated: '2026-10-24',
    sections: [
      {
        id: 'what-the-number-means',
        title: 'A high number does not make kernel_task the culprit',
        paragraphs: [
          'You open Activity Monitor because the Mac feels slow. kernel_task is near the top, and it seems like the obvious thing to stop. Leave it running.',
          'Apple explains that one role of kernel_task is to limit CPU availability when other work is creating too much heat. Its activity can rise even when the case does not feel hot. It should fall as the temperature decreases. The process is responding to conditions; the CPU percentage alone does not tell you what caused them.',
          'This is a troubleshooting guide based on Apple’s documentation, not a diagnosis of your hardware. A high reading is a reason to investigate, not proof of a broken fan or a failing Mac.',
        ],
        links: [
          {
            label: 'Apple: why kernel_task uses CPU',
            href: 'https://support.apple.com/en-gb/102172',
          },
        ],
      },
      {
        id: 'observe-the-workload',
        title: '1. Check what was happening when the Mac slowed down',
        paragraphs: [
          'Open Activity Monitor from Applications → Utilities and select CPU. Sort the process list by % CPU. Note which familiar apps are busy alongside kernel_task: an export, a build or a video call is more useful context than a single screenshot of the largest number.',
          'Look at the System, User and Idle values at the bottom. Apple defines these as macOS work, app work and unused CPU capacity. Window → CPU History lets you watch activity over time. Take another look after your current job finishes.',
          'For a repeatable comparison, write down the app, task and time, then observe the same task again after one change. If readings settle when an export finishes, that is different from a Mac staying busy with no obvious work. Neither observation identifies a hardware fault on its own.',
        ],
        links: [
          {
            label: 'Apple: view CPU activity and history',
            href: 'https://support.apple.com/guide/activity-monitor/view-cpu-activity-actmntr43452/mac',
          },
        ],
      },
      {
        id: 'reduce-app-work',
        title: '2. Save your work and reduce an app’s workload',
        paragraphs: [
          'Pause a nonessential export or stop a task using its own controls. If an app appears stuck, save what you can and try its normal Quit command first. Wait and compare the readings before making another change.',
          'Activity Monitor also offers Quit and Force Quit. Quit gives an app a chance to stop safely; Force Quit ends it immediately and can lose unsaved work or disrupt dependent apps. Do not apply those controls to unfamiliar system processes just because they are near the top of the list.',
          'If the same app repeatedly triggers the slowdown, record its version and the work that reproduces the problem. That gives its developer a more useful report than “the Mac is slow.”',
        ],
        links: [
          {
            label: 'Apple: Quit versus Force Quit',
            href: 'https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac',
          },
        ],
      },
      {
        id: 'check-cooling',
        title: '3. Check ventilation and decide when to get help',
        paragraphs: [
          'For a Mac laptop, Apple recommends a stable, ventilated work surface. Move it off bedding or a pillow, leave the keyboard uncovered and keep ventilation openings clear. Do not insert anything into them. Apple specifies an ambient operating range of 10–35°C for Mac laptops.',
          'Check for available macOS and app updates when you can safely interrupt your work. If unexplained heat or prolonged fan activity continues, save your work before restarting. Apple’s guidance includes a separate SMC step for Intel Macs; do not apply Intel reset instructions to an Apple silicon Mac.',
          'Persistent temperature problems belong with Apple or an authorized service provider. Third-party temperature readings do not measure the external case temperature and should not be used to diagnose hardware problems.',
        ],
        links: [
          {
            label: 'Apple: Mac laptop operating temperatures and support',
            href: 'https://support.apple.com/en-ie/102336',
          },
        ],
      },
      {
        id: 'where-cleardisk-fits',
        title: 'Where ClearDisk helps, and where it stops',
        paragraphs: [
          'In ClearDisk 2.2.0, open Performance → Processes to inspect running work and explanations of known processes. Overview and Usage give you CPU and memory context. These views are available alongside the storage tools; you do not need to delete files to use them.',
          'ClearDisk protects kernel_task and other core system processes from its quit actions. It does not disable thermal protection, repair cooling hardware or promise that freeing storage will fix high CPU. If storage is also low, investigate it as a separate issue rather than emptying caches as a heat remedy.',
          'We make ClearDisk. The steps above can be followed with Apple’s built-in tools without buying it.',
        ],
        links: [
          { label: 'See the Performance features', href: '/features' },
          {
            label: 'When low storage and a slow Mac occur together',
            href: '/mac-running-slow-low-storage',
          },
        ],
      },
    ],
    related: [
      'mac-running-slow-low-storage',
      'mds-stores-high-cpu-mac',
      'mac-swap-memory',
    ],
    sources: [
      {
        label: 'Apple: kernel_task and CPU temperature',
        url: 'https://support.apple.com/en-gb/102172',
      },
      {
        label: 'Apple: CPU activity',
        url: 'https://support.apple.com/guide/activity-monitor/view-cpu-activity-actmntr43452/mac',
      },
      {
        label: 'Apple: quit a process',
        url: 'https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac',
      },
      {
        label: 'Apple: operating temperatures',
        url: 'https://support.apple.com/en-ie/102336',
      },
    ],
  },
  {
    slug: 'blog/networkquality-mac-internet-test',
    title: 'Test a slow Mac internet connection with networkQuality',
    description:
      'Use Apple’s built-in networkQuality command to check download, upload and responsiveness. Learn what the results mean and what they cannot diagnose.',
    summary:
      'A fast download result can still come with laggy calls. Check responsiveness under load, then compare one connection change at a time.',
    published: '2026-10-24',
    updated: '2026-10-24',
    sections: [
      {
        id: 'speed-and-responsiveness',
        title: 'Why a speed number can miss the problem',
        paragraphs: [
          'A video call freezes, but a speed test says your connection is fast. Those observations can both be true. Throughput describes how much data moves; responsiveness describes how quickly exchanges complete while the network is busy.',
          'Apple’s networkQuality tool tests the connection under working conditions. Its responsiveness measure is round-trips per minute, or RPM. A higher RPM means more sequential exchanges can complete in a minute. It is a different measure from download speed in megabits per second.',
          'The test gives you a measurement of this connection at this time. It cannot establish that every website is healthy or that your provider is responsible for a slow app.',
        ],
        links: [
          {
            label: 'Apple: network delays under working conditions',
            href: 'https://developer.apple.com/videos/play/wwdc2021/10239/',
          },
        ],
      },
      {
        id: 'run-the-test',
        title: '1. Run the built-in test when you can spare the bandwidth',
        paragraphs: [
          'Apple documents networkQuality for macOS Monterey 12 and later. Join the network you want to check, open Terminal in Applications → Utilities, and run the command below. No extra app or administrator password is needed for this command.',
          'The test generates network traffic. Run it outside an important call or transfer, and avoid it when your connection has a tight data allowance. Keep a note of whether you used Wi-Fi or Ethernet and whether a required VPN was active. Do not disable workplace protections to get a better score.',
        ],
        code: ['networkQuality'],
        links: [
          {
            label: 'Apple: run the responsiveness test on a Mac',
            href: 'https://support.apple.com/en-us/101942',
          },
        ],
      },
      {
        id: 'read-the-summary',
        title: '2. Read the summary, not just the download result',
        paragraphs: [
          'A completed run reports upload and download capacity and responsiveness. Output labels vary with macOS. Apple describes Low, Medium and High responsiveness: lower results can mean calls or games suffer when other devices or apps share the connection. Keep the actual result instead of converting it into a promised video-call quality.',
          'There is no sample benchmark here: we checked the installed command’s help output while preparing this article, but did not run a bandwidth test or measure a customer connection. Your results will depend on your network and the conditions during the run.',
        ],
        items: [
          'Capacity in Mbps: the transfer rate measured by this test, not the Wi-Fi link rate displayed by your Mac.',
          'Responsiveness in RPM: exchanges completed under load. Compare this alongside capacity when investigating pauses.',
          'Latency, if shown: check whether the label describes idle or loaded conditions before comparing it with another tool.',
        ],
      },
      {
        id: 'compare-one-change',
        title: '3. Compare one change and keep the context',
        paragraphs: [
          'For a useful comparison, keep the same Mac and test tool. Note the time, location and connection for each run. If you move closer to the router, keep the other conditions as similar as practical. An Ethernet comparison is useful if you already have the cable and adapter; it does not require buying anything to follow this guide.',
          'For example, you might record one run at your desk and another near the router. Better results nearby would be a clue to investigate the wireless path, not proof of a defective router. If only one website stays slow, check that service separately. Keep conclusions narrower than the evidence.',
          'Do not repeatedly run tests hoping for the highest score. A short record of ordinary and problematic conditions is more useful to your network administrator or provider.',
        ],
      },
      {
        id: 'when-the-command-fails',
        title: 'If it fails, an error is not a zero-speed result',
        paragraphs: [
          'Check the spelling and capital Q in networkQuality. If Terminal says the command is missing, check your macOS version. For the options available on your Mac, read the installed help or manual below. Press q to leave the manual.',
          'If the tool reports a connection or configuration error, keep that message and the time. A failed test does not measure your speed. Check whether your usual sites work and ask the network administrator about restrictions on a managed connection. Do not turn off certificate verification or change DNS as a blanket workaround.',
        ],
        code: ['networkQuality -h', 'man networkQuality'],
      },
      {
        id: 'cleardisk-internet-view',
        title: 'The same investigation inside ClearDisk',
        paragraphs: [
          'ClearDisk 2.2.0 brings the WhySlow performance tools into the app. Open Performance → Internet to see connection information and available per-app traffic readings. Its optional speed test calls Apple’s built-in tool against Apple’s servers after confirmation; it is not an independent second benchmark.',
          'A Wi-Fi link rate is the connection between the Mac and router, not a measurement of internet download speed. Per-app traffic is a sample rather than a monthly usage bill. Missing readings and failed tests should be treated as unknown, not healthy.',
          'You can run the Terminal version above without ClearDisk or a license. We make ClearDisk and offer its interface as another way to inspect the problem, not as a promise to speed up the internet.',
        ],
        links: [
          { label: 'Download ClearDisk', href: '/download' },
          { label: 'What Performance reads and stores', href: '/privacy' },
        ],
      },
    ],
    related: ['mac-running-slow-low-storage', 'mac-out-of-application-memory'],
    sources: [
      {
        label: 'Apple: Network Responsiveness test',
        url: 'https://support.apple.com/en-us/101942',
      },
      {
        label: 'Apple Developer: reduce network delays',
        url: 'https://developer.apple.com/videos/play/wwdc2021/10239/',
      },
    ],
  },
];
