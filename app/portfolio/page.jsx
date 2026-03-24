import PortfolioClient from './PortfolioClient';
import { getPortfolio } from '@/lib/api';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Our Work & Case Studies | Digital Marketing Portfolio',
  description: "See real results from VyomEdge's digital marketing campaigns. Explore SEO success stories, web development projects & marketing case studies.",
  keywords: 'digital marketing portfolio, case studies, SEO results, Meta Ads case study, web development projects',
  alternates: { canonical: 'https://www.vyomedge.com/portfolio' },
};

const STATIC_CASES = [
  { _id: '1', client: 'The SuperC', url: 'https://www.thesuperc.com/', tags: ['SEO', 'Meta Ads'], icon: '⚡', color: '#D300E5',
    description: 'Full SEO strategy and Meta Ads management driving massive search visibility and low-cost leads.',
    results: [{ label: 'Total Impressions', value: '1.3M+' }, { label: 'Total Clicks', value: '28.2K' }, { label: 'Avg CTR', value: '2.2%' }, { label: 'Meta Ads CPL', value: '₹49.2' }],
    metrics: { da: 3, pa: 15 } },
  { _id: '2', client: 'Zentrail', url: '#', tags: ['Full Ecosystem', 'SEO', 'Meta Ads'], icon: '🏔️', color: '#7600C4',
    description: 'Built from scratch — logo, brand, GMB, social, UI/UX, MERN web development, SEO and Meta Ads.',
    results: [{ label: 'Meta ROAS', value: '18x' }, { label: 'Keywords Ranked', value: '300+' }, { label: 'Domain Authority', value: 'DA 7' }, { label: 'Backlinks', value: '123' }],
    metrics: { da: 7, pa: 15 } },
  { _id: '3', client: 'Madhuban Eco Retreat', url: '#', tags: ['SEO', 'Google Ads', 'Web Dev'], icon: '🌿', color: '#4CFFE7',
    description: 'MERN website development with advanced SEO and Google Ads management for a premium eco resort.',
    results: [{ label: 'Total Clicks', value: '1.63K' }, { label: 'Impressions', value: '24.4K' }, { label: 'Avg CTR', value: '6.7%' }, { label: 'Avg Position', value: '5.1' }],
    metrics: { da: 14, pa: 16 } },
  { _id: '4', client: 'Poornam Events', url: 'https://www.poornamevents.com/', tags: ['Full Ecosystem', 'SEO', 'Meta Ads'], icon: '🎉', color: '#D300E5',
    description: 'Complete digital ecosystem from logo to MERN web development, SEO, social media and Meta Ads.',
    results: [{ label: 'Impressions', value: '456K' }, { label: 'Total Clicks', value: '5.66K' }, { label: 'Meta Ads CPL', value: '₹65.6' }, { label: 'Avg Position', value: '7.1' }],
    metrics: { da: 3, pa: 17 } },
  { _id: '5', client: 'Jaiswal Piles Clinic', url: 'https://www.jaiswalpilesclinic.com/', tags: ['Full Ecosystem', 'SEO', 'Meta Ads'], icon: '🏥', color: '#7600C4',
    description: 'Full digital ecosystem for a medical clinic — branding, MERN website, SEO and Meta Ads.',
    results: [{ label: 'Meta Ads CPL', value: '₹46.9' }, { label: 'Domain Authority', value: 'DA 1' }, { label: 'Page Authority', value: 'PA 10' }, { label: 'Services', value: 'Full Stack' }],
    metrics: { da: 1, pa: 10 } },
];

export default async function Portfolio() {
  let cases = [];
  try {
    const portfolio = await getPortfolio();
    cases = portfolio.length > 0 ? portfolio : STATIC_CASES;
  } catch { cases = STATIC_CASES; }

  return (
    <>
      <SchemaMarkup type="portfolio" data={cases} />
      <PortfolioClient initialCases={cases} />
    </>
  );
}
