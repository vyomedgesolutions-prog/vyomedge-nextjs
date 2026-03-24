import ResourcesClient from './ResourcesClient';
import { getBlogs } from '@/lib/api';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Digital Marketing Blog & Resources | SEO Tips & Guides',
  description: 'Read the latest digital marketing insights, SEO tips, case studies & industry news from VyomEdge. Learn strategies to grow your business online.',
  keywords: 'digital marketing blog, SEO tips, marketing case studies, social media guides, Google Ads tips',
  alternates: { canonical: 'https://www.vyomedge.com/resources' },
};

export default async function Resources() {
  let blogs = [];
  try { blogs = await getBlogs(); } catch { blogs = []; }
  return (
    <>
      <SchemaMarkup type="resources" />
      <ResourcesClient initialBlogs={blogs} />
    </>
  );
}
