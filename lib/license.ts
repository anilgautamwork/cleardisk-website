export const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const MAX_ACTIVATIONS = 3;
const enc = new TextEncoder();
const b64 = {
  encode: (bytes: ArrayBuffer | Uint8Array) =>
    btoa(String.fromCharCode(...new Uint8Array(bytes))),
  decode: (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0)),
};
export function crockford32(bytes: Uint8Array, chars: number): string {
  let bits = 0,
    value = 0,
    out = '';
  for (const byte of bytes) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5 && out.length < chars) {
      out += ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
    if (out.length === chars) break;
  }
  return out;
}
const group = (s: string) => 'CLDK-' + s.match(/.{4}/g)!.join('-');
export async function deriveKey(
  secret: string,
  sessionId: string,
): Promise<string> {
  const k = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const digest = new Uint8Array(
    await crypto.subtle.sign(
      'HMAC',
      k,
      enc.encode('cleardisk:v1:' + sessionId),
    ),
  );
  return group(crockford32(digest.slice(0, 10), 16));
}
export function normalizeKey(raw: string): string | null {
  let s = raw.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (s.startsWith('CLDK')) s = s.slice(4);
  s = s.replace(/O/g, '0').replace(/[IL]/g, '1');
  if (s.length !== 16 || Array.from(s).some((c) => !ALPHABET.includes(c)))
    return null;
  return group(s);
}
export type KVLike = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};
export type Activation = {
  machineId: string;
  machineName: string;
  activatedAt: string;
  lastSeenAt: string;
  appVersion: string;
};
export type LicenseRecord = {
  key: string;
  email: string;
  sessionId: string;
  paymentIntent: string | null;
  status: 'active' | 'revoked';
  createdAt: string;
  revokedAt?: string;
  activations: Activation[];
};
export const readRecord = async (kv: KVLike, key: string) => {
  const raw = await kv.get('key:' + key);
  return raw ? (JSON.parse(raw) as LicenseRecord) : null;
};
const writeRecord = (kv: KVLike, r: LicenseRecord) =>
  kv.put('key:' + r.key, JSON.stringify(r));
export async function issueKey(
  kv: KVLike,
  secret: string,
  session: { id: string; email: string | null; paymentIntent: string | null },
): Promise<LicenseRecord> {
  const key = await deriveKey(secret, session.id);
  const existing = await readRecord(kv, key);
  if (existing) return existing;
  const email = (session.email ?? '').trim().toLowerCase();
  const record: LicenseRecord = {
    key,
    email,
    sessionId: session.id,
    paymentIntent: session.paymentIntent,
    status: 'active',
    createdAt: new Date().toISOString(),
    activations: [],
  };
  await writeRecord(kv, record);
  await kv.put('session:' + session.id, key);
  if (email) await kv.put('email:' + email, key);
  if (session.paymentIntent) await kv.put('pi:' + session.paymentIntent, key);
  return record;
}
export async function revokeByPaymentIntent(
  kv: KVLike,
  paymentIntent: string,
): Promise<boolean> {
  const key = await kv.get('pi:' + paymentIntent);
  const record = key ? await readRecord(kv, key) : null;
  if (!record) return false;
  await writeRecord(kv, {
    ...record,
    status: 'revoked',
    revokedAt: new Date().toISOString(),
  });
  return true;
}
const str = (v: unknown, max = 200) =>
  typeof v === 'string' && v.trim() && v.length <= max ? v.trim() : null;
export async function activate(kv: KVLike, body: unknown, now = new Date()) {
  const b = (body ?? {}) as Record<string, unknown>;
  const key = normalizeKey(str(b.key) ?? '');
  const machineId = str(b.machineId, 128);
  const machineName = str(b.machineName, 80) ?? 'Mac';
  const appVersion = str(b.appVersion, 40) ?? '';
  if (!key || !machineId)
    return {
      status: 400 as const,
      body: { error: 'A license key and machine id are required.' },
    };
  const record = await readRecord(kv, key);
  if (!record)
    return {
      status: 404 as const,
      body: {
        error:
          'That key isn’t recognised. Check for typos or use Recover on cleardisk.app.',
      },
    };
  if (record.status === 'revoked')
    return {
      status: 403 as const,
      body: { error: 'This key was refunded and is no longer active.' },
    };
  const at = now.toISOString();
  const existing = record.activations.find((a) => a.machineId === machineId);
  if (existing)
    Object.assign(existing, { machineName, appVersion, lastSeenAt: at });
  else if (record.activations.length >= MAX_ACTIVATIONS)
    return {
      status: 409 as const,
      body: {
        error:
          'Already in use on 3 Macs. Email hello@cleardisk.app to free a slot.',
        machines: record.activations.map((a) => a.machineName),
      },
    };
  else
    record.activations.push({
      machineId,
      machineName,
      appVersion,
      activatedAt: at,
      lastSeenAt: at,
    });
  await writeRecord(kv, record);
  return { status: 200 as const, body: {}, record, machineId };
}
const receiptMessage = (key: string, machineId: string) =>
  enc.encode('cleardisk:v1:' + key + ':' + machineId);
export async function signReceipt(
  pkcs8Base64: string,
  key: string,
  machineId: string,
): Promise<string> {
  const priv = await crypto.subtle.importKey(
    'pkcs8',
    b64.decode(pkcs8Base64),
    { name: 'Ed25519' },
    false,
    ['sign'],
  );
  return b64.encode(
    await crypto.subtle.sign('Ed25519', priv, receiptMessage(key, machineId)),
  );
}
export async function verifyReceipt(
  rawPublicKeyBase64: string,
  key: string,
  machineId: string,
  signatureBase64: string,
): Promise<boolean> {
  try {
    const pub = await crypto.subtle.importKey(
      'raw',
      b64.decode(rawPublicKeyBase64),
      { name: 'Ed25519' },
      false,
      ['verify'],
    );
    return await crypto.subtle.verify(
      'Ed25519',
      pub,
      b64.decode(signatureBase64),
      receiptMessage(key, machineId),
    );
  } catch {
    return false;
  }
}
export function keyEmail(key: string) {
  const activate = 'cleardisk://activate?key=' + key;
  const text = `Thank you for buying ClearDisk.\n\nYour license key:\n${key}\n\nActivate: open ClearDisk, choose License… and paste the key, or click ${activate} on the Mac where ClearDisk is installed.\nDownload: https://cleardisk.app/download\nLost this email later? https://cleardisk.app/recover\n\nOne key works on up to three Macs you own. Questions: hello@cleardisk.app`;
  const html = `<p>Thank you for buying ClearDisk.</p><p>Your license key:</p><p style="font:600 20px/1.4 ui-monospace,Menlo,monospace">${key}</p><p><a href="${activate}">Activate in ClearDisk</a> on the Mac where it is installed, or open ClearDisk, choose License… and paste the key.</p><p><a href="https://cleardisk.app/download">Download ClearDisk</a> · <a href="https://cleardisk.app/recover">Recover a lost key</a></p><p>One key works on up to three Macs you own. Questions: <a href="mailto:hello@cleardisk.app">hello@cleardisk.app</a></p>`;
  return { subject: 'Your ClearDisk license key', text, html };
}
