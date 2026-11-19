import type { Count } from '../lib/download-metrics';

export type PublicStatsDaily = {
  day: string;
  visits: number;
  pageviews: number;
  downloads: number;
  downloads_done: number;
  checkouts: number;
};

export type PublicStatsData = {
  range_days: 7 | 14 | 30;
  totals: {
    visits: number;
    pageviews: number;
    downloads: number;
    downloads_done: number;
    checkouts: number;
    purchases: number | null;
    github: number | null;
  };
  today: {
    visits: number;
    pageviews: number;
    downloads: number;
    downloads_done: number;
    checkouts: number;
  };
  daily: PublicStatsDaily[];
  top_pages: { path: string; views: number }[];
  sources: Count[];
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

const fmt = (n: number) => n.toLocaleString('en-US');

export function publicStatsPage(data: PublicStatsData) {
  const { range_days: days, totals, today, daily } = data;
  const rate = (a: number, b: number) =>
    b ? Math.round((a / b) * 100) + '% of previous step' : '&nbsp;';

  const maximum = Math.max(
    1,
    ...daily.map((d) => Math.max(d.visits, d.pageviews, d.downloads)),
  );
  const stepWidth = 900 / Math.max(1, daily.length);
  const barWidth = Math.max(6, Math.min(20, stepWidth * 0.32));

  const bar = (x: number, count: number, fill: string, label: string) => {
    const height = Math.max(2, (count / maximum) * 156);
    return `<rect x="${x.toFixed(1)}" y="${(180 - height).toFixed(1)}" width="${barWidth.toFixed(1)}" height="${height.toFixed(1)}" rx="3" fill="${count ? fill : '#ece8f4'}"><title>${label}</title></rect>`;
  };

  const bars = daily
    .map((d, i) => {
      const base = i * stepWidth + (stepWidth - barWidth * 2 - 3) / 2;
      return (
        bar(
          base,
          d.pageviews || d.visits,
          '#b9a6e6',
          `${escape(d.day)}: ${d.visits} visitors, ${d.pageviews} page views`,
        ) +
        bar(
          base + barWidth + 3,
          d.downloads,
          '#5b36b0',
          `${escape(d.day)}: ${d.downloads} downloads started, ${d.checkouts} checkouts opened`,
        )
      );
    })
    .join('');

  const topPagesHtml = data.top_pages.length
    ? data.top_pages
        .map(
          (p) =>
            `<tr><td><a href="${escape(p.path)}">${escape(p.path)}</a></td><td>${fmt(p.views)}</td></tr>`,
        )
        .join('')
    : '<tr><td colspan="2" class="muted">Page-level tracking starts now — check back after new visits arrive.</td></tr>';

  const sourcesHtml = data.sources.length
    ? data.sources
        .map(
          (s) =>
            `<tr><td>${escape(s.source)}</td><td>${fmt(s.count)}</td></tr>`,
        )
        .join('')
    : '<tr><td colspan="2" class="muted">Nothing recorded in this range yet.</td></tr>';

  const dailyRows = [...daily]
    .reverse()
    .map(
      (d) =>
        `<tr><td>${escape(d.day)}</td><td>${fmt(d.visits)}</td><td>${fmt(d.pageviews)}</td><td>${fmt(d.downloads)}</td><td>${fmt(d.downloads_done)}</td><td>${fmt(d.checkouts)}</td></tr>`,
    )
    .join('');

  const rangeLinks = ([7, 14, 30] as const)
    .map(
      (n) =>
        `<a class="pill${days === n ? ' active' : ''}" href="/stats?days=${n}">Last ${n} days</a>`,
    )
    .join('');

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Public stats — ClearDisk</title><style>
  *{box-sizing:border-box}body{margin:0;background:#f7f7fa;color:#202027;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}main{max-width:1180px;margin:0 auto;padding:40px 24px}a{color:#5b36b0;text-decoration:none}a:hover{text-decoration:underline}header{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px}.eyebrow{font-size:12px;letter-spacing:.12em;color:#655b77;text-transform:uppercase;display:block}h1{font-size:clamp(30px,5vw,44px);letter-spacing:-.04em;line-height:1.1;margin:8px 0 6px}h2{font-size:20px;letter-spacing:-.02em;margin:0 0 14px}p{color:#63616d;margin:0 0 10px}.controls{display:flex;align-items:center;flex-wrap:wrap;gap:8px}.pill,.button{border:1px solid #dfd9ea;background:#fff;border-radius:99px;padding:7px 15px;font-size:13.5px;color:#3b3748;font-weight:500}.pill.active{background:#5b36b0;border-color:#5b36b0;color:#fff}.cards{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin:28px 0}.card,.panel{background:#fff;border:1px solid #e7e4ee;border-radius:18px;padding:20px}.card span{display:block;color:#3b3748;font-size:13.5px;font-weight:600}.card strong{display:block;font-size:34px;font-weight:600;letter-spacing:-.04em;line-height:1.25;margin:4px 0}.card small{display:block;color:#6b6574;font-size:12px}.card .rate{color:#5b36b0;font-weight:600;margin-top:6px}.card.buy{background:#5b36b0;border-color:#5b36b0}.card.buy span,.card.buy strong,.card.buy small{color:#fff}.panel{margin:18px 0}.panel svg{width:100%;height:auto}.axis{display:flex;justify-content:space-between;color:#6b6574;font-size:12px;margin-top:6px}.key{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;color:#4d4858;margin-bottom:10px}.key i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:6px;vertical-align:-1px}.columns{display:grid;grid-template-columns:1.25fr 1fr;gap:18px}table{border-collapse:collapse;width:100%;font-size:14px}th,td{text-align:right;border-bottom:1px solid #eceaf0;padding:9px 6px}th:first-child,td:first-child{text-align:left}td.muted{text-align:left;color:#7a7486}.foot{font-size:13px;color:#6b6574;margin-top:16px}@media(max-width:1050px){.cards{grid-template-columns:repeat(3,1fr)}}@media(max-width:720px){.cards{grid-template-columns:1fr 1fr}.columns{grid-template-columns:1fr}main{padding:24px 16px}.card{padding:16px}.card strong{font-size:28px}}
  </style></head><body><main>
  <header>
    <div>
      <span class="eyebrow">ClearDisk · public stats</span>
      <h1>How is cleardisk.app doing?</h1>
      <p>Live privacy-first counters for the last ${days} UTC days. No cookies, IPs, or visitor IDs stored.</p>
    </div>
    <div class="controls">${rangeLinks}<a class="button" href="/stats?days=${days}">Refresh</a></div>
  </header>

  <section class="cards" aria-label="Funnel totals for last ${days} days">
    <div class="card"><span>Visitors</span><strong>${fmt(totals.visits)}</strong><small>External arrivals (${days}d)</small><small>Today: ${fmt(today.visits)}</small><small class="rate">&nbsp;</small></div>
    <div class="card"><span>Page views</span><strong>${fmt(totals.pageviews)}</strong><small>Public pages viewed (${days}d)</small><small>Today: ${fmt(today.pageviews)}</small><small class="rate">&nbsp;</small></div>
    <div class="card"><span>Tried to download</span><strong>${fmt(totals.downloads)}</strong><small>DMG started (${days}d)</small><small>Today: ${fmt(today.downloads)}</small><small class="rate">${rate(totals.downloads, totals.visits)}</small></div>
    <div class="card"><span>Downloaded</span><strong>${fmt(totals.downloads_done)}</strong><small>Full DMG delivered (${days}d)</small><small>Today: ${fmt(today.downloads_done)}</small><small class="rate">${rate(totals.downloads_done, totals.downloads)}</small></div>
    <div class="card"><span>Tried to purchase</span><strong>${fmt(totals.checkouts)}</strong><small>Checkout opened (${days}d)</small><small>Today: ${fmt(today.checkouts)}</small><small class="rate">${rate(totals.checkouts, totals.downloads_done)}</small></div>
    <div class="card buy"><span>Purchased</span><strong>${totals.purchases === null ? '—' : fmt(totals.purchases)}</strong><small>Live licenses issued, all time</small><small>GitHub DMGs: ${totals.github === null ? '—' : fmt(totals.github)}</small><small class="rate">&nbsp;</small></div>
  </section>

  <section class="panel">
    <h2>Daily traffic &amp; downloads · last ${days} days</h2>
    <div class="key">
      <div><span><i style="background:#b9a6e6"></i>Page views / Visitors</span>&nbsp;&nbsp;&nbsp;<span><i style="background:#5b36b0"></i>Downloads started</span></div>
      <span>Today: <strong>${fmt(today.visits)}</strong> visitors · <strong>${fmt(today.pageviews)}</strong> views · <strong>${fmt(today.downloads)}</strong> downloads · <strong>${fmt(today.checkouts)}</strong> checkouts</span>
    </div>
    <svg viewBox="0 0 900 200" role="img" aria-label="Daily visitors, page views, and download starts"><line x1="0" y1="181" x2="900" y2="181" stroke="#e6e1ee"/>${bars}</svg>
    <div class="axis"><span>${escape(daily[0]?.day ?? '')}</span><span>Daily scale: 0–${fmt(maximum)}</span><span>${escape(daily.at(-1)?.day ?? '')}</span></div>
  </section>

  <div class="columns">
    <section class="panel">
      <h2>Top pages · last ${days} days</h2>
      <table><thead><tr><th>Page</th><th>Views</th></tr></thead><tbody>${topPagesHtml}</tbody></table>
    </section>
    <section class="panel">
      <h2>Where visitors came from · last ${days} days</h2>
      <table><thead><tr><th>Source</th><th>Visitors</th></tr></thead><tbody>${sourcesHtml}</tbody></table>
    </section>
  </div>

  <section class="panel">
    <h2>Daily breakdown (UTC)</h2>
    <table><thead><tr><th>Date</th><th>Visitors</th><th>Page views</th><th>Download started</th><th>Downloaded</th><th>Checkout opened</th></tr></thead><tbody>${dailyRows}</tbody></table>
  </section>

  <p class="foot">Updated ${escape(data.updated)} · Bots, prefetches, HEAD probes, and QA checks are excluded. <a href="/api/public-stats?days=${days}">JSON API</a> · <a href="/">cleardisk.app</a> · <a href="/guides">Storage guides</a></p>
  </main></body></html>`;
}
