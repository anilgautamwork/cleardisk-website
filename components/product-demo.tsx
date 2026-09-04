'use client';
import { useState } from 'react';
import {
  HardDrive,
  Layers3,
  FolderOpen,
  ChartNoAxesCombined,
  FileSearch,
  Code2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Check,
  RotateCcw,
  LockKeyhole,
  Search,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
const rows = [
  {
    name: 'Application caches',
    desc: 'Temporary files your apps can rebuild',
    size: 12.8,
    icon: Layers3,
    type: 'safe',
  },
  {
    name: 'Browser caches',
    desc: 'A fresh start for your browser',
    size: 6.4,
    icon: FolderOpen,
    type: 'safe',
  },
  {
    name: 'Xcode & simulator files',
    desc: 'Build files you can regenerate',
    size: 18.2,
    icon: Code2,
    type: 'safe',
  },
  {
    name: 'Old device backups',
    desc: 'Keep the backups you still need',
    size: 8.6,
    icon: HardDrive,
    type: 'review',
  },
  {
    name: 'App settings & support',
    desc: 'Your preferences stay right where they belong',
    size: 12.4,
    icon: LockKeyhole,
    type: 'protected',
  },
];
export function ProductDemo() {
  const [selected, setSelected] = useState([
    'Application caches',
    'Browser caches',
    'Xcode & simulator files',
  ]);
  const [cleaned, setCleaned] = useState(false),
    [confirm, setConfirm] = useState(false),
    [moved, setMoved] = useState(0);
  const total = rows
    .filter((r) => selected.includes(r.name) && r.type === 'safe')
    .reduce((s, r) => s + r.size, 0);
  return (
    <div className="demo-stage" id="demo">
      <div className="app-window">
        <div className="window-bar">
          <span className="traffic">
            <i />
            <i />
            <i />
          </span>
          <span>ClearDisk</span>
          <span className="demo-label">INTERACTIVE PREVIEW</span>
        </div>
        <div className="app-body">
          <aside className="app-sidebar">
            <div className="drive-label">
              <HardDrive size={22} />
              <div>
                Macintosh HD<small>512 GB storage</small>
              </div>
            </div>
            <div className={`disk-ring ${cleaned ? 'cleaned' : ''}`}>
              <div>
                <b>{'24.1'}</b>
                <span>GB available</span>
              </div>
            </div>
            <div className="storage-note">
              <i />
              {cleaned ? 'Empty Trash to free the space' : '487.9 GB used'}
            </div>
            <div className="sidebar-caption">YOUR STORAGE</div>
            <div className="side-item">
              <ChartNoAxesCombined />
              Overview
            </div>
            <div className="side-item active">
              <Layers3 />
              System Data <span>58.4</span>
            </div>
            <div className="side-item">
              <FolderOpen />
              All files
            </div>
            <div className="side-item">
              <FileSearch />
              Large files
            </div>
            <div className="side-item">
              <Code2 />
              Developer files
            </div>
            <div className="sidebar-bottom">
              <ShieldCheck size={14} /> Everything stays on your Mac
            </div>
          </aside>
          <div className="app-content">
            <div className="app-breadcrumb">
              Macintosh HD <ChevronRight size={12} /> System Data{' '}
              <Search size={14} />
            </div>
            <div className="app-heading">
              <div>
                <h3>Hidden space. Found.</h3>
                <p>Here’s what’s inside your System Data.</p>
              </div>
              <span className="scan-done">
                <Check size={12} /> Scan complete
              </span>
            </div>
            <Tabs defaultValue="breakdown" className="preview-tabs">
              <TabsList>
                <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                <TabsTrigger value="map">Storage map</TabsTrigger>
              </TabsList>
              <TabsContent value="breakdown">
                <div className="reclaim-block">
                  <span className="spark-icon">
                    <Sparkles size={24} />
                  </span>
                  <div>
                    <b>
                      {cleaned ? 'Room to breathe.' : `${total.toFixed(1)} GB`}
                    </b>
                    <p>
                      {cleaned
                        ? `${moved.toFixed(1)} GB moved to Trash in this demo`
                        : 'selected for cleanup'}
                    </p>
                  </div>
                  <span className="safe-tag">
                    {cleaned ? '✓ Done' : 'Safe to clean'}
                  </span>
                </div>
                <div className="file-rows">
                  {rows.map((r) => (
                    <div
                      className={`file-row ${cleaned && selected.includes(r.name) ? 'removed' : ''}`}
                      key={r.name}
                    >
                      {r.type === 'safe' ? (
                        <Checkbox
                          aria-label={`Select ${r.name}`}
                          checked={!cleaned && selected.includes(r.name)}
                          disabled={cleaned}
                          onCheckedChange={(v) =>
                            setSelected((s) =>
                              v
                                ? [...s, r.name]
                                : s.filter((n) => n !== r.name),
                            )
                          }
                        />
                      ) : (
                        <LockKeyhole size={14} className="muted" />
                      )}
                      <r.icon size={18} className="file-icon" />
                      <div className="row-title">
                        <b>{r.name}</b>
                        <small>{r.desc}</small>
                      </div>
                      <span className="file-size">{r.size} GB</span>
                      <span className={`status ${r.type}`}>
                        {r.type === 'safe'
                          ? 'Safe'
                          : r.type === 'review'
                            ? 'Review'
                            : 'Leave it'}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="map">
                <div className="treemap">
                  <div className="map-dev">
                    <Code2 />
                    Developer files<strong>18.2 GB</strong>
                  </div>
                  <div className="map-caches">
                    App caches<strong>12.8 GB</strong>
                  </div>
                  <div className="map-protected">
                    <LockKeyhole size={15} /> App support
                    <strong>12.4 GB</strong>
                  </div>
                  <div className="map-backup">
                    Backups<strong>8.6 GB</strong>
                  </div>
                  <div className="map-browser">
                    Browser<strong>6.4 GB</strong>
                  </div>
                </div>
                <p className="map-caption">
                  Bigger blocks. Bigger opportunities. Review before removing.
                </p>
              </TabsContent>
            </Tabs>
            <div className="app-actions">
              <span>
                <ShieldCheck size={14} />
                Trash first. You stay in control.
              </span>
              {cleaned ? (
                <button
                  className="demo-clean"
                  onClick={() => setCleaned(false)}
                >
                  <RotateCcw size={14} />
                  Reset demo
                </button>
              ) : (
                <button
                  className="demo-clean"
                  disabled={!total}
                  onClick={() => setConfirm(true)}
                >
                  <Sparkles size={14} />
                  Try cleanup <span>↗</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="demo-footnote">
        <span className="live-dot" /> Try it yourself. Select a few folders and
        preview a cleanup.{' '}
        <span>Example data. Your files are never accessed.</span>
      </p>
      <Dialog open={confirm} onOpenChange={setConfirm}>
        <DialogContent className="cleanup-dialog">
          <span className="dialog-icon">
            <ShieldCheck />
          </span>
          <DialogTitle>Move {total.toFixed(1)} GB to the Trash?</DialogTitle>
          <DialogDescription>
            This is an interactive demo. In ClearDisk, selected files go to your
            Mac’s Trash first. Space becomes available when you empty it.
          </DialogDescription>
          <div className="dialog-selection">
            {rows
              .filter((r) => selected.includes(r.name))
              .map((r) => (
                <div key={r.name}>
                  <span>{r.name}</span>
                  <b>{r.size} GB</b>
                </div>
              ))}
          </div>
          <button
            className="button primary"
            onClick={() => {
              setMoved(total);
              setCleaned(true);
              setConfirm(false);
            }}
          >
            Preview moving to Trash <ChevronRight size={16} />
          </button>
          <DialogClose className="text-button">Keep everything</DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
