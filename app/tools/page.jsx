'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

const tools = [
  { icon: '📝', name: 'Rich Text Editor', desc: 'A powerful browser-based rich text editor. Format text, add headings, lists, links and more — no login, no install, completely free.', tag: 'Free · Live Now', tagColor: '#4CFFE7', url: '#', features: ['Bold, Italic, Underline', 'Headings & Lists', 'Link Insertion', 'Export to HTML', 'No Login Required', 'Works in Browser'], live: true },
  { icon: '📈', name: 'SEO Tracker', desc: "Track your website's keyword rankings, Domain Authority, Page Authority and backlinks — all in one clean dashboard.", tag: 'Coming Soon', tagColor: '#D300E5', url: null, features: ['Keyword Rankings', 'DA & PA Tracking', 'Backlink Monitor', 'Competitor Analysis', 'Weekly Reports', 'Export CSV'], live: false },
  { icon: '💰', name: 'Sales & Lead Tracker', desc: 'Monitor your leads, conversions and revenue across all digital campaigns in one place. Built for small businesses and agencies.', tag: 'Coming Soon', tagColor: '#D300E5', url: null, features: ['Lead Pipeline', 'Conversion Tracking', 'Revenue Dashboard', 'Campaign Attribution', 'Team Collaboration', 'Export Reports'], live: false },
  { icon: '🎨', name: 'Social Media Caption Generator', desc: 'AI-powered captions for Instagram, Facebook and LinkedIn. Just describe your post and get 5 ready-to-use captions instantly.', tag: 'Coming Soon', tagColor: '#D300E5', url: null, features: ['Instagram Captions', 'LinkedIn Posts', 'Facebook Copy', 'Hashtag Suggestions', 'Tone Selector', 'Multiple Variations'], live: false },
  { icon: '🔍', name: 'Meta Ads Analyzer', desc: 'Paste your Meta Ads data and get instant insights on CPL, ROAS, CTR benchmarks and optimization suggestions.', tag: 'Coming Soon', tagColor: '#D300E5', url: null, features: ['CPL Analysis', 'ROAS Calculator', 'CTR Benchmarks', 'Budget Suggestions', 'Audience Insights', 'Competitor Benchmarks'], live: false },
  { icon: '📊', name: 'Website Audit Tool', desc: 'Enter any URL and get a quick SEO and performance audit — page speed, meta tags, headings, image alt text and more.', tag: 'Coming Soon', tagColor: '#D300E5', url: null, features: ['Page Speed Score', 'Meta Tag Check', 'Heading Structure', 'Image Alt Audit', 'Mobile Friendly', 'Core Web Vitals'], live: false },
];

export default function Tools() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SchemaMarkup type="tools" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Free Digital Products</span>
          <h1 className="text-5xl md:text-6xl font-black text-t-text mt-4 mb-6">Tools Built By Us,<br /><span className="gradient-text">Free For You</span></h1>
          <p className="text-t-secondary text-lg max-w-xl mx-auto">We build free digital tools regularly for businesses and marketers. No login. No credit card. Just open and use.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tools.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`glass rounded-2xl p-6 flex flex-col relative overflow-hidden group transition-all ${t.live ? 'hover:border-[#4CFFE740]' : 'hover:border-[#7600C440]'}`}>
              {t.live && (<div className="absolute top-4 right-4 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4CFFE7] animate-pulse" /><span className="text-[#4CFFE7] text-xs font-medium">Live</span></div>)}
              <div className="text-4xl mb-4">{t.icon}</div>
              <span className="inline-block px-2 py-1 rounded text-xs mb-3 w-fit" style={{ background: `${t.tagColor}20`, color: t.tagColor }}>{t.tag}</span>
              <h3 className="text-t-text font-bold text-lg mb-2">{t.name}</h3>
              <p className="text-t-muted text-sm leading-relaxed mb-5 flex-1">{t.desc}</p>
              <div className="grid grid-cols-2 gap-1.5 mb-5">
                {t.features.map((f, idx) => (<div key={idx} className="flex items-center gap-1.5 text-xs text-t-muted"><span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: t.live ? '#4CFFE7' : '#7600C4' }} />{f}</div>))}
              </div>
              {t.live ? (
                <a href={t.url} className="relative block w-full py-3 rounded-xl text-white font-semibold text-center text-sm overflow-hidden"><span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Open Tool →</span></a>
              ) : (
                <div className="w-full py-3 rounded-xl text-t-faint font-semibold text-center text-sm border border-t-border">Notify Me When Live</div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 brand-gradient" />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-3xl md:text-4xl font-black text-t-text mb-4">Need a Custom Tool for Your Business?</h2>
            <p className="text-t-secondary mb-8 max-w-lg mx-auto">We build internal tools, dashboards and digital products for businesses. Tell us what you need.</p>
            <Link href="/contact" className="relative inline-block px-8 py-4 rounded-xl text-white font-bold overflow-hidden">
              <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Let&apos;s Build It Together →</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
