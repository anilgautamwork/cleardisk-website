'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Folder,
  HardDrive,
  Layers3,
  Play,
  ShieldCheck,
} from 'lucide-react';

const stages = [
  'Reading folders',
  'Grouping files',
  'Building your map',
  'Ready to explore',
];

/** A clearly labelled illustration. It never reads storage or requests file access. */
export function StoragePreview() {
  const [stage, setStage] = useState(3);
  const [playing, setPlaying] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  function play() {
    timers.current.forEach(clearTimeout);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage(3);
      setPlaying(false);
      return;
    }
    setPlaying(true);
    setStage(0);
    timers.current = [1, 2, 3].map((step) =>
      setTimeout(() => {
        setStage(step);
        if (step === 3) setPlaying(false);
      }, step * 800),
    );
  }
  return (
    <div
      className={`storage-preview dark ${playing ? 'is-scanning' : ''}`}
      data-reveal
    >
      <div className="preview-toolbar">
        <span>
          <HardDrive size={15} /> Macintosh HD
        </span>
        <span className="preview-example">EXAMPLE DATA</span>
      </div>
      <div className="preview-metrics">
        <div>
          <span className="preview-kicker">SYSTEM DATA, DECODED</span>
          <strong>
            58.4<span>GB</span>
          </strong>
        </div>
        <div className="preview-orb" aria-hidden="true">
          <Layers3 size={27} />
        </div>
      </div>
      <figure
        className="storage-mosaic"
        aria-label="Example storage map: developer files 18.2 GB, app caches 12.8 GB, app support 12.4 GB, backups 8.6 GB, browser caches 6.4 GB"
      >
        <div className="mosaic-tile mosaic-dev">
          <Code2 size={20} />
          <span>Developer files</span>
          <b>18.2 GB</b>
          <ArrowUpRight className="tile-arrow" size={15} />
        </div>
        <div className="mosaic-tile mosaic-cache">
          <Layers3 size={17} />
          <span>App caches</span>
          <b>12.8 GB</b>
        </div>
        <div className="mosaic-tile mosaic-support">
          <Folder size={17} />
          <span>App support</span>
          <b>12.4 GB</b>
        </div>
        <div className="mosaic-tile mosaic-backups">
          <span>Backups</span>
          <b>8.6 GB</b>
        </div>
        <div className="mosaic-tile mosaic-browser">
          <span>Browser</span>
          <b>6.4 GB</b>
        </div>
        {playing && <div className="map-scan-beam" aria-hidden="true" />}
      </figure>
      <div className="preview-summary">
        <span>
          <ShieldCheck size={16} /> Understand first. Choose what goes.
        </span>
        <output className="preview-status">
          {playing ? <span className="activity-dot" /> : <Check size={13} />}{' '}
          {stages[stage]}
        </output>
      </div>
      <button className="preview-replay" onClick={play} disabled={playing}>
        <Play size={12} />
        {playing ? 'Playing scan illustration…' : 'Play scan illustration'}
        <span>Nothing on your Mac is accessed</span>
      </button>
    </div>
  );
}
