import { notFound } from 'next/navigation';
import { GuideArticle } from '@/components/guide-article';
import { blogPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/seo';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug.slice('blog/'.length) }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === 'blog/' + slug);
  if (!post)
    return { title: 'Article not found — ClearDisk', robots: { index: false } };
  return pageMetadata(post.title, post.description, '/' + post.slug, post);
}
export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === 'blog/' + slug);
  if (!post) notFound();
  return <GuideArticle guide={post} collection="blog" />;
}
