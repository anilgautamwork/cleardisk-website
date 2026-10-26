import {
  Activity,
  HardDrive,
  MemoryStick,
  AppWindow,
  FolderSearch,
} from 'lucide-react';

/** A static explanation of the released menu, never a reading of the visitor's Mac. */
export function MonitorPreview() {
  return (
    <figure className="monitor-preview">
      <figcaption>Menu-bar overview · illustrative values</figcaption>
      <div className="monitor-preview-panel">
        <div className="monitor-preview-title">
          <Activity size={20} aria-hidden="true" />
          <strong>ClearDisk</strong>
          <span>Example check</span>
        </div>
        <dl className="monitor-preview-readings">
          <div>
            <dt>
              <Activity size={16} aria-hidden="true" /> CPU
            </dt>
            <dd>
              12%<small>Across all cores</small>
            </dd>
          </div>
          <div>
            <dt>
              <MemoryStick size={16} aria-hidden="true" /> Memory
            </dt>
            <dd>
              8 GB<small>Normal pressure</small>
            </dd>
          </div>
        </dl>
        <div className="monitor-preview-disk">
          <span>
            <HardDrive size={18} aria-hidden="true" /> Disk space
          </span>
          <strong>120 GB available</strong>
        </div>
        <div className="monitor-preview-apps">
          <strong>Running apps</strong>
          <span>Sorted by memory</span>
        </div>
        <ul className="monitor-preview-list">
          <li>
            <AppWindow size={20} aria-hidden="true" />
            <span>
              Example browser<small>2.4 GB · CPU 8%</small>
            </span>
            <span className="monitor-preview-action">Quit…</span>
          </li>
          <li>
            <AppWindow size={20} aria-hidden="true" />
            <span>
              Example editor<small>850 MB · CPU 3%</small>
            </span>
            <span className="monitor-preview-action">Quit…</span>
          </li>
        </ul>
        <div className="monitor-preview-review">
          <FolderSearch size={20} aria-hidden="true" />
          <span>
            <strong>Storage review</strong>
            <small>
              Large files, caches and developer junk
              <br />
              Available after a completed scan
            </small>
          </span>
        </div>
        <p>
          Quit and Review open ClearDisk. This illustration does not inspect
          your Mac.
        </p>
      </div>
    </figure>
  );
}
