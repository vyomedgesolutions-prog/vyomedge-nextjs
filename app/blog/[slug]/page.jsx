import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogs } from '@/lib/api';
import BlogPostClient from './BlogPostClient';
import SchemaMarkup from '@/components/SchemaMarkup';

export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch { return []; }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'Blog Post Not Found' };

  const title = blog.seoTitle || blog.title;
  const description = blog.seoDescription || blog.excerpt || '';
  const image = blog.featuredImage || '/og-default.jpg';

  return {
    title, description,
    alternates: { canonical: `https://www.vyomedge.com/blog/${slug}` },
    openGraph: { type: 'article', title, description, url: `https://www.vyomedge.com/blog/${slug}`, images: [{ url: image, width: 1200, height: 630, alt: title }], publishedTime: blog.createdAt },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <>
      <SchemaMarkup type="blogPost" data={blog} />
      <BlogPostClient blog={blog} />
    </>
  );
}
