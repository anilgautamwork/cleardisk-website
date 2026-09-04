import type { aggregateDays } from '../lib/download-metrics';
export type DashboardData = {
  days: ReturnType<typeof aggregateDays>;
  github: number | null;
  updated: string;
};
const escape = (value: unknown) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ]!,
  );
export function dashboard(data: DashboardData) {
  const total = data.days.reduce((n, d) => n + d.count, 0),
    week = data.days.slice(-7).reduce((n, d) => n + d.count, 0);
  const maximum = Math.max(1, ...data.days.map((d) => d.count));
  const channels: Record<string, number> = {};
  data.days.forEach((d) =>
    d.sources.forEach(
      (s) => (channels[s.source] = (channels[s.source] || 0) + s.count),
    ),
  );
  const bars = data.days
    .map(
      (d, i) =>
        `<rect x="${i * 30 + 6}" y="${180 - (d.count / maximum) * 160}" width="20" height="${Math.max(1, (d.count / maximum) * 160)}" rx="4" fill="${d.count ? '#7652c7' : '#e8e3f2'}"><title>${escape(d.day)}: ${d.count} requests</title></rect>`,
    )
    .join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Download dashboard — ClearDisk</title><style>
  *{box-sizing:border-box}body{margin:0;background:#f7f7fa;color:#202027;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}main{max-width:1100px;margin:0 auto;padding:40px 24px}a{color:#6340b2}header{display:flex;justify-content:space-between;align-items:center;gap:20px}.eyebrow{font-size:12px;letter-spacing:.12em;color:#655b77;text-transform:uppercase}h1{font-size:clamp(30px,5vw,46px);letter-spacing:-.04em;line-height:1.1;margin:12px 0}h2{font-size:22px;letter-spacing:-.02em}p{color:#63616d}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin:30px 0}.card,.panel{background:#fff;border:1px solid #e7e4ee;border-radius:18px;padding:24px}.card span{display:block;color:#6b6574;font-size:13px}.card strong{font-size:38px;font-weight:600;letter-spacing:-.04em}.panel{margin:20px 0}.panel svg{width:100%;height:auto}.axis{display:flex;justify-content:space-between;color:#6b6574;font-size:12px}table{border-collapse:collapse;width:100%;font-size:14px}th,td{text-align:left;border-bottom:1px solid #eceaf0;padding:9px 4px}th:last-child,td:last-child{text-align:right}.empty{padding:18px;background:#f5f2fa;border-radius:12px}.columns{display:grid;grid-template-columns:1fr 1fr;gap:20px}summary{cursor:pointer;font-weight:600}.button{border:1px solid #dfd9ea;border-radius:99px;padding:8px 18px;text-decoration:none;font-size:14px}@media(max-width:700px){.cards{grid-template-columns:1fr 1fr}.columns{grid-template-columns:1fr}main{padding:24px 16px}.card{padding:18px}.card strong{font-size:30px}}
  </style></head><body><main><header><div><span class="eyebrow">ClearDisk · owner dashboard</span><h1>Your downloads, over time.</h1></div><a class="button" href="/analytics">Refresh</a></header><p>Successful full DMG requests from the website. UTC days. Tracking starts with this deployment; earlier website downloads are unavailable.</p>
  <section class="cards" aria-label="Download totals"><div class="card"><span>Today</span><strong>${data.days.at(-1)?.count || 0}</strong></div><div class="card"><span>Last 7 days</span><strong>${week}</strong></div><div class="card"><span>Last 30 days</span><strong>${total}</strong></div><div class="card"><span>GitHub · release downloads</span><strong>${data.github === null ? '—' : data.github}</strong></div></section>
  <section class="panel"><h2>Website requests · last 30 days</h2>${total === 0 ? '<p class="empty">No counted requests yet. The graph will fill as people download. Zero is real data; no sample traffic is included.</p>' : ''}<svg viewBox="0 0 900 200" role="img" aria-label="Daily download requests; exact values are in the table below"><line x1="0" y1="181" x2="900" y2="181" stroke="#e6e1ee"/>${bars}</svg><div class="axis"><span>${escape(data.days[0].day)}</span><span>Daily scale: 0–${maximum}</span><span>${escape(data.days.at(-1)!.day)}</span></div></section>
  <div class="columns"><section class="panel"><h2>Source labels · 30 days</h2><p>Explicit campaign label, otherwise the request referrer. No first-touch attribution.</p><table><thead><tr><th>Source</th><th>Requests</th></tr></thead><tbody>${
    Object.entries(channels)
      .sort((a, b) => b[1] - a[1])
      .map(([name, n]) => `<tr><td>${escape(name)}</td><td>${n}</td></tr>`)
      .join('') || '<tr><td>No requests yet</td><td>0</td></tr>'
  }</tbody></table></section><section class="panel"><h2>What this measures</h2><p>Requests are not completed transfers, unique people or installs. Repeat downloads can count again. HEAD checks, range/resume requests, prefetches and recognized bots are excluded; unrecognized bots may still count.</p><p>GitHub reports cumulative DMG downloads across up to 100 recent releases. That count may include earlier testing and is never added to the website graph. ${data.github === null ? 'GitHub is currently unavailable; this is not a zero count.' : ''}</p><p>Only daily totals and fixed source labels are stored, for 366 days. No analytics cookies, IP addresses or raw referrers are stored by this counter.</p></section></div>
  <section class="panel"><details><summary>Daily data table</summary><table><thead><tr><th>Date (UTC)</th><th>Website requests</th></tr></thead><tbody>${data.days.map((d) => `<tr><td>${escape(d.day)}</td><td>${d.count}</td></tr>`).join('')}</tbody></table></details></section><p>Updated ${escape(data.updated)} · <a href="/api/analytics">JSON data</a> · <a href="/guides">Storage guides</a></p></main></body></html>`;
}
