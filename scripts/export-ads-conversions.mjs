// Produces a local GCLID import CSV. Never uploads anything to Google.
// Uses the existing owner analytics password via environment, not CLI args.
import { writeFile } from 'node:fs/promises';
const name = process.env.ADS_OFFLINE_CONVERSION_NAME;
const password = process.env.ANALYTICS_PASSWORD;
const output = process.argv[2];
if (!name || !password || !output)
  throw Error(
    'Set ADS_OFFLINE_CONVERSION_NAME and ANALYTICS_PASSWORD; pass an output CSV path.',
  );
const rows = [];
let cursor;
do {
  const url = new URL('https://cleardisk.app/api/ads-conversions');
  if (cursor) url.searchParams.set('cursor', cursor);
  const response = await fetch(url, {
    headers: {
      Authorization:
        'Basic ' + Buffer.from('owner:' + password).toString('base64'),
    },
  });
  if (!response.ok) throw Error('Export failed: HTTP ' + response.status);
  const data = await response.json();
  rows.push(...data.records);
  cursor = data.cursor;
} while (cursor);
const csv = (value) => '"' + String(value).replaceAll('"', '""') + '"';
const lines = [
  'Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency,Order ID,Ad User Data,Ad Personalization',
];
const unique = new Map(rows.map((row) => [row.transaction_id, row]));
let skipped = 0;
for (const row of unique.values()) {
  if (!row.gclid) {
    skipped++;
    continue;
  } // Braid-only records need a supported API/Data Manager mapping.
  lines.push(
    [
      row.gclid,
      name,
      row.conversion_time.replace('T', ' ').replace('.000Z', '+0000'),
      row.value,
      row.currency,
      row.transaction_id,
      'Granted',
      'Denied',
    ]
      .map(csv)
      .join(','),
  );
}
await writeFile(output, lines.join('\n') + '\n', { mode: 0o600, flag: 'wx' });
console.log(
  `Exported ${lines.length - 1} unique rows; ${skipped} braid-only records need separate mapping. No conversions uploaded.`,
);
