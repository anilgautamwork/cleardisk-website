import { notFound } from 'next/navigation';
import { GuideArticle } from '@/components/guide-article';
import { guides, getGuide } from '@/lib/guides';
import { pageMetadata } from '@/lib/seo';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide)
    return { title: 'Page not found — ClearDisk', robots: { index: false } };
  return pageMetadata(guide.title, guide.description, '/' + slug, {
    published: guide.published,
    updated: guide.updated,
  });
}
export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
