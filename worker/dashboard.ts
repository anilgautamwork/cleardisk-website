import type { aggregateDays, Kind } from '../lib/download-metrics';
type Series = ReturnType<typeof aggregateDays>;
export type DashboardData = Record<Kind, Series> & {
  github: number | null;
  purchases: number | null;
  /** Two-letter country codes per step; counting began 2026-09-26. */
  countries: Record<'visits' | 'downloads' | 'checkouts', Series>;
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
  const sum = (series: Series, n = series.length) =>
    series.slice(-n).reduce((total, d) => total + d.count, 0);
  const rate = (a: number, b: number) =>
    b ? Math.round((a / b) * 100) + '% of previous step' : '&nbsp;';
  const stages: [string, Kind, string][] = [
    ['Visitors', 'visits', 'Arrivals from outside the site'],
    ['Tried to download', 'downloads', 'DMG download started'],
    ['Downloaded', 'downloads-done', 'Every byte of the DMG delivered'],
    ['Tried to purchase', 'checkouts', 'Stripe checkout opened'],
  ];
  const cards = stages
    .map(([label, kind, hint], i) => {
      const total = sum(data[kind]);
      const before = i ? sum(data[stages[i - 1][1]]) : 0;
      return `<div class="card"><span>${label}</span><strong>${total}</strong><small>${hint}</small><small>Today ${sum(data[kind], 1)} · 7 days ${sum(data[kind], 7)}</small><small class="rate">${i ? rate(total, before) : '&nbsp;'}</small></div>`;
    })
    .join('');
  const visits = data.visits,
    downloads = data.downloads;
  const maximum = Math.max(
    1,
    ...visits.map((d) => d.count),
    ...downloads.map((d) => d.count),
  );
  const bar = (x: number, count: number, fill: string, label: string) =>
    `<rect x="${x}" y="${180 - (count / maximum) * 160}" width="11" height="${Math.max(1, (count / maximum) * 160)}" rx="3" fill="${count ? fill : '#e8e3f2'}"><title>${label}</title></rect>`;
  const bars = visits
    .map(
      (d, i) =>
        bar(
          i * 30 + 3,
          d.count,
          '#b9a6e6',
          `${escape(d.day)}: ${d.count} visitors`,
        ) +
        bar(
          i * 30 + 15,
          downloads[i].count,
          '#5b36b0',
          `${escape(d.day)}: ${downloads[i].count} downloads started`,
        ),
    )
    .join('');
  const regions = new Intl.DisplayNames(['en'], { type: 'region' });
  const place = (code: string) => {
    try {
      return code === 'XX'
        ? 'Unknown'
        : code === 'T1'
          ? 'Tor'
          : `${regions.of(code)} (${code})`;
    } catch {
      return code;
    }
  };
  const sources = (series: Series, countries = false) => {
    const totals: Record<string, number> = {};
    series.forEach((d) =>
      d.sources.forEach(
        (s) => (totals[s.source] = (totals[s.source] || 0) + s.count),
      ),
    );
    return (
      Object.entries(totals)
        .sort((a, b) => b[1] - a[1])
        .map(
          ([name, n]) =>
            `<tr><td>${escape(countries ? place(name) : name)}</td><td>${n}</td></tr>`,
        )
        .join('') || '<tr><td>Nothing yet</td><td>0</td></tr>'
    );
  };
  const rows = visits
    .map((d, i) => [
      d.day,
      d.count,
      ...stages.slice(1).map(([, kind]) => data[kind][i].count),
    ])
    .reverse()
    .map((r) => `<tr>${r.map((v) => `<td>${escape(v)}</td>`).join('')}</tr>`)
    .join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Owner dashboard — ClearDisk</title><style>
  *{box-sizing:border-box}body{margin:0;background:#f7f7fa;color:#202027;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}main{max-width:1180px;margin:0 auto;padding:40px 24px}a{color:#6340b2}header{display:flex;justify-content:space-between;align-items:center;gap:20px}.eyebrow{font-size:12px;letter-spacing:.12em;color:#655b77;text-transform:uppercase}h1{font-size:clamp(30px,5vw,46px);letter-spacing:-.04em;line-height:1.1;margin:12px 0}h2{font-size:22px;letter-spacing:-.02em}p{color:#63616d}.cards{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin:30px 0}.card,.panel{background:#fff;border:1px solid #e7e4ee;border-radius:18px;padding:22px}.card span{display:block;color:#3b3748;font-size:14px;font-weight:600}.card strong{display:block;font-size:40px;font-weight:600;letter-spacing:-.04em;line-height:1.3}.card small{display:block;color:#6b6574;font-size:12.5px}.card .rate{color:#5b36b0;font-weight:600;margin-top:6px}.card.buy{background:#5b36b0;border-color:#5b36b0}.card.buy span,.card.buy strong,.card.buy small{color:#fff}.panel{margin:20px 0}.panel svg{width:100%;height:auto}.axis{display:flex;justify-content:space-between;color:#6b6574;font-size:12px}.key{display:flex;gap:18px;font-size:13px;color:#4d4858}.key i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:6px;vertical-align:-1px}table{border-collapse:collapse;width:100%;font-size:14px}th,td{text-align:right;border-bottom:1px solid #eceaf0;padding:9px 4px}th:first-child,td:first-child{text-align:left}.empty{padding:18px;background:#f5f2fa;border-radius:12px}.columns{display:grid;grid-template-columns:1fr 1fr;gap:20px}summary{cursor:pointer;font-weight:600}.button{border:1px solid #dfd9ea;border-radius:99px;padding:8px 18px;text-decoration:none;font-size:14px}@media(max-width:1000px){.cards{grid-template-columns:repeat(3,1fr)}}@media(max-width:700px){.cards{grid-template-columns:1fr 1fr}.columns{grid-template-columns:1fr}main{padding:24px 16px}.card{padding:16px}.card strong{font-size:30px}}
  </style></head><body><main><header><div><span class="eyebrow">ClearDisk · owner dashboard</span><h1>Visitors to buyers, last 30 days.</h1></div><a class="button" href="/analytics">Refresh</a></header><p>UTC days. Each step is counted on its own, so a buyer who never came through the website is only in Purchased.</p>
  <section class="cards" aria-label="Funnel totals, last 30 days">${cards}<div class="card buy"><span>Purchased</span><strong>${data.purchases === null ? '—' : data.purchases}</strong><small>Live licenses issued, all time</small><small>Refunds not subtracted</small><small class="rate">${data.purchases === null ? 'License store unavailable' : '&nbsp;'}</small></div></section>
  <section class="panel"><h2>Visitors and downloads started · per day</h2>${sum(visits) + sum(downloads) === 0 ? '<p class="empty">Nothing counted yet. The graph fills as people arrive. Zero is real data; no sample traffic is included.</p>' : ''}<div class="key"><span><i style="background:#b9a6e6"></i>Visitors</span><span><i style="background:#5b36b0"></i>Downloads started</span></div><svg viewBox="0 0 900 200" role="img" aria-label="Daily visitors and download starts; exact values are in the table below"><line x1="0" y1="181" x2="900" y2="181" stroke="#e6e1ee"/>${bars}</svg><div class="axis"><span>${escape(visits[0].day)}</span><span>Daily scale: 0–${maximum}</span><span>${escape(visits.at(-1)!.day)}</span></div></section>
  <section class="panel"><h2>Every day</h2><table><thead><tr><th>Date (UTC)</th><th>Visitors</th><th>Download started</th><th>Downloaded</th><th>Checkout opened</th></tr></thead><tbody>${rows}</tbody></table></section>
  <div class="columns"><section class="panel"><h2>Where visitors came from</h2><table><thead><tr><th>Source</th><th>Visitors</th></tr></thead><tbody>${sources(visits)}</tbody></table></section><section class="panel"><h2>Where downloads came from</h2><table><thead><tr><th>Source</th><th>Started</th></tr></thead><tbody>${sources(downloads)}</tbody></table></section></div>
  <div class="columns"><section class="panel"><h2>Visitors by country</h2><table><thead><tr><th>Country</th><th>Visitors</th></tr></thead><tbody>${sources(data.countries.visits, true)}</tbody></table></section><section class="panel"><h2>Downloads and checkouts by country</h2><table><thead><tr><th>Country</th><th>Downloads started</th></tr></thead><tbody>${sources(data.countries.downloads, true)}</tbody></table><table><thead><tr><th>Country</th><th>Checkouts opened</th></tr></thead><tbody>${sources(data.countries.checkouts, true)}</tbody></table></section></div>
  <section class="panel"><details><summary>What these numbers mean</summary><p><b>Visitors</b> counts page loads that arrived from another site, a search, or a typed address, sent by a small script, so most bots and people with JavaScript off are not counted. Moving between pages on this site does not count again. It is arrivals, not unique people.</p><p><b>Tried to download</b> is a full DMG request; <b>Downloaded</b> means the last byte was handed to the visitor's connection. HEAD checks, resumes, prefetches and recognized bots are excluded. Neither is proof of an install.</p><p><b>Tried to purchase</b> counts Stripe checkouts the site opened, including test mode and people who closed the form. <b>Purchased</b> counts live licenses issued from paid Stripe sessions, all time.</p><p>GitHub release downloads (all time, separate from the website): <b>${data.github === null ? 'unavailable right now' : data.github}</b>.</p><p>Only daily totals and fixed source labels are stored, for 366 days. Country comes from Cloudflare's lookup of the connection and is stored only as a daily count per country, from 2026-09-26. No cookies, IP addresses, visitor IDs or raw referrers.</p></details></section><p>Updated ${escape(data.updated)} · <a href="/api/analytics">JSON data</a> · <a href="/guides">Storage guides</a></p></main></body></html>`;
}
