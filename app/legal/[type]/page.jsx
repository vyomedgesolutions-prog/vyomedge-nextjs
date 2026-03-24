import { notFound } from 'next/navigation';
import LegalClient from './LegalClient';

const LEGAL_PAGES = {
  'privacy-policy': { title: 'Privacy Policy', seoTitle: 'Privacy Policy | VyomEdge', description: 'Read the VyomEdge privacy policy.' },
  'terms': { title: 'Terms & Conditions', seoTitle: 'Terms & Conditions | VyomEdge', description: 'Read the VyomEdge terms and conditions.' },
  'disclaimer': { title: 'Disclaimer', seoTitle: 'Disclaimer | VyomEdge', description: 'Read the VyomEdge disclaimer.' },
  'cookies': { title: 'Cookie Policy', seoTitle: 'Cookie Policy | VyomEdge', description: 'Read the VyomEdge cookie policy.' },
};

export async function generateStaticParams() { return Object.keys(LEGAL_PAGES).map((type) => ({ type })); }

export async function generateMetadata({ params }) {
  const { type } = await params;
  const page = LEGAL_PAGES[type];
  if (!page) return { title: 'Page Not Found' };
  return { title: page.seoTitle, description: page.description, alternates: { canonical: `https://www.vyomedge.com/legal/${type}` } };
}

export default async function LegalPage({ params }) {
  const { type } = await params;
  const page = LEGAL_PAGES[type];
  if (!page) notFound();
  return <LegalClient type={type} title={page.title} />;
}
