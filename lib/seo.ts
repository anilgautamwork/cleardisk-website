import type { Metadata } from 'next';
import { guides } from './guides.ts';
export const SITE_URL = 'https://cleardisk.app';
// Vite replaces this exact expression at build time; preview defaults closed.
export const INDEXABLE = process.env.SITE_INDEXABLE === 'true';
const publicPaths = [
  '/',
  '/guides',
  '/download',
  '/privacy',
  '/terms',
  ...guides.map((g) => '/' + g.slug),
];
export function canonical(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('\\'))
    throw Error('Expected a local path');
  const url = new URL(path, SITE_URL);
  if (url.origin !== SITE_URL) throw Error('Expected a local path');
  return SITE_URL + url.pathname;
}
export function shouldIndex(production: boolean, path: string): boolean {
  return production && publicPaths.includes(path);
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = canonical(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: shouldIndex(INDEXABLE, path), follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: 'ClearDisk',
      type: 'website',
    },
  };
}
export function sitemapEntries(indexable = INDEXABLE) {
  if (!indexable) return [];
  return [
    ...['/', '/guides', '/download'].map((path) => ({ url: canonical(path) })),
    ...guides.map((guide) => ({
      url: canonical('/' + guide.slug),
      lastModified: guide.updated,
    })),
  ];
}
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
