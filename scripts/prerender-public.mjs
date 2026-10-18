import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { publicPaths } from '../lib/seo.ts';

const output = new URL('../dist/client/__public_pages/', import.meta.url);
const origin = 'http://localhost:3114';
// Remove only this build's generated snapshots before starting the preview.
await rm(output, { recursive: true, force: true });
const child = spawn(process.execPath, ['node_modules/wrangler/bin/wrangler.js', 'dev', '--config', 'dist/server/wrangler.json', '--port', '3114', '--ip', '127.0.0.1'], { stdio: 'ignore', detached: true });
const abort = new AbortController();
const interrupt = () => abort.abort(new Error('Snapshot build interrupted'));
process.once('SIGINT', interrupt);
process.once('SIGTERM', interrupt);
let exited = false;
child.once('exit', () => { exited = true; });
const exit = once(child, 'exit');
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    abort.signal.throwIfAborted();
    if (exited) throw new Error('Snapshot preview exited before becoming ready (check port 3114).');
    try {
      const response = await fetch(origin + '/robots.txt', { signal: AbortSignal.any([abort.signal, AbortSignal.timeout(1000)]) });
      if (response.ok) { ready = true; break; }
    } catch { /* Startup only; page render failures below fail the build. */ }
    await delay(250);
  }
  if (!ready) throw new Error('Snapshot preview did not start.');
  for (const path of publicPaths) {
    abort.signal.throwIfAborted();
    if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(path) || /^\/(?:api|analytics|buy-now|thanks|recover)(?:\/|$)/.test(path))
      throw new Error('Unsafe snapshot route: ' + path);
    for (const rsc of [false, true]) {
      const response = await fetch(origin + path + (rsc ? '?_rsc' : ''), { headers: { 'User-Agent': 'ClearDisk-QA', ...(rsc ? { RSC: '1' } : {}) }, signal: AbortSignal.any([abort.signal, AbortSignal.timeout(30000)]), redirect: 'manual' });
      const type = response.headers.get('content-type') || '';
      if (response.status !== 200 || response.headers.has('set-cookie') || !type.includes(rsc ? 'text/x-component' : 'text/html'))
        throw new Error(`Invalid public snapshot ${path}: ${response.status} ${type} rsc=${rsc} location=${response.headers.get("location")}`);
      const body = await response.text();
      if (!rsc && (!body.includes('<title>') || !body.includes('https://cleardisk.app') || !body.includes('<h1')))
        throw new Error('Incomplete HTML: ' + path);
      const file = new URL((path === '/' ? 'index' : path.slice(1)) + (rsc ? '.rsc.bin' : '.html.bin'), output);
      await mkdir(new URL('.', file), { recursive: true });
      await writeFile(file, body);
    }
  }
  console.log(`Generated HTML and RSC snapshots for ${publicPaths.length} public pages.`);
} catch (error) {
  await rm(output, { recursive: true, force: true });
  throw error;
} finally {
  process.removeListener('SIGINT', interrupt);
  process.removeListener('SIGTERM', interrupt);
  if (!exited) {
    process.kill(-child.pid, 'SIGTERM');
    await Promise.race([exit, delay(5000)]);
    if (!exited) process.kill(-child.pid, 'SIGKILL');
  }
}
