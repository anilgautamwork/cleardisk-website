import type { Metadata } from 'next';
import { guides, type Guide } from './guides.ts';
export const SITE_URL = 'https://cleardisk.app';
export const OG_IMAGE = SITE_URL + '/og.png';
// Vite replaces this exact expression at build time; preview defaults closed.
export const INDEXABLE = process.env.SITE_INDEXABLE === 'true';
const publicPaths = [
  '/',
  '/guides',
  '/download',
  '/about',
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
  article?: { published: string; updated: string },
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
      ...(article
        ? {
            type: 'article' as const,
            publishedTime: article.published,
            modifiedTime: article.updated,
            authors: ['ClearDisk'],
          }
        : { type: 'website' as const }),
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'ClearDisk: Clear System Data on Mac',
        },
      ],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
export function sitemapEntries(indexable = INDEXABLE) {
  if (!indexable) return [];
  return [
    ...['/', '/guides', '/download', '/about'].map((path) => ({
      url: canonical(path),
    })),
    ...guides.map((guide) => ({
      url: canonical('/' + guide.slug),
      lastModified: guide.updated,
    })),
  ];
}
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

const organization = {
  '@type': 'Organization',
  '@id': SITE_URL + '/#organization',
  name: 'ClearDisk',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: SITE_URL + '/icon.svg' },
  email: 'hello@cleardisk.app',
  // Matches the About page; do not add ratings, reviews or people here.
  legalName: 'TechMarbles Web Solutions Pvt. Ltd.',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mohali',
    addressCountry: 'IN',
  },
  sameAs: ['https://github.com/anilgautamwork/cleardisk-app'],
};
// Lets Google pick "ClearDisk" as the site name in results.
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_URL + '/#website',
  name: 'ClearDisk',
  url: SITE_URL,
  publisher: { '@id': SITE_URL + '/#organization' },
};
export const organizationSchema = {
  '@context': 'https://schema.org',
  ...organization,
};
export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ClearDisk',
  operatingSystem: 'macOS 15 or later',
  applicationCategory: 'UtilitiesApplication',
  softwareVersion: '1.0.0',
  url: SITE_URL,
  downloadUrl: SITE_URL + '/download',
  image: OG_IMAGE,
  publisher: organization,
  offers: {
    '@type': 'Offer',
    price: '10',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: SITE_URL + '/buy-now',
  },
};
const numbered = /^\d+\. /;
export function guideSchema(guide: Guide) {
  const url = canonical('/' + guide.slug);
  const steps = guide.sections.filter((s) => numbered.test(s.title));
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      image: OG_IMAGE,
      datePublished: guide.published,
      dateModified: guide.updated,
      author: organization,
      publisher: organization,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ClearDisk', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Storage guides',
          item: canonical('/guides'),
        },
        { '@type': 'ListItem', position: 3, name: guide.title, item: url },
      ],
    },
    // Explainers without numbered sections keep Article only; HowTo steps
    // come straight from the existing numbered headings.
    ...(steps.length >= 3
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: guide.title,
            description: guide.description,
            step: steps.map((section, index) => ({
              '@type': 'HowToStep',
              position: index + 1,
              name: section.title.replace(numbered, ''),
              text: [...section.paragraphs, ...(section.items ?? [])].join(' '),
              url: url + '#' + section.id,
            })),
          },
        ]
      : []),
  ];
}
