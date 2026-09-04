import { DurableObject } from 'cloudflare:workers';
import { sources, type Source } from '../lib/download-metrics';
/** One small counter object per UTC day. No individual request data is persisted. */
export class DownloadMetrics extends DurableObject<unknown> {
  constructor(ctx: DurableObjectState, env: unknown) {
    super(ctx, env);
    ctx.storage.sql.exec(
      'CREATE TABLE IF NOT EXISTS counts (source TEXT PRIMARY KEY, count INTEGER NOT NULL)',
    );
  }
  async record(source: Source) {
    if (!sources.includes(source)) throw new Error('Unknown source');
    // Install expiry before writing; expired objects contain no request history.
    if ((await this.ctx.storage.getAlarm()) === null)
      await this.ctx.storage.setAlarm(Date.now() + 366 * 86400000);
    this.ctx.storage.sql.exec(
      'INSERT INTO counts (source,count) VALUES (?,1) ON CONFLICT(source) DO UPDATE SET count=count+1',
      source,
    );
  }
  counts() {
    return this.ctx.storage.sql
      .exec<{ source: string; count: number }>(
        'SELECT source,count FROM counts ORDER BY count DESC',
      )
      .toArray();
  }
  async alarm() {
    await this.ctx.storage.deleteAll();
  }
}
