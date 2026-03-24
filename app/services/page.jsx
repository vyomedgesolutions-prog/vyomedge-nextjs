'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

const services = [
  { id: 'seo', icon: '🔍', title: 'Search Engine Optimization', short: 'SEO', tagline: 'Rank higher. Get found. Grow organically.',
    deliverables: ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'Link Building', 'Local SEO & GMB', 'Monthly Reporting'] },
  { id: 'smm', icon: '📱', title: 'Social Media Management', short: 'SMM', tagline: 'Content that converts. Communities that grow.',
    deliverables: ['Content Calendar', 'Graphic Design', 'Caption & Copy', 'Community Management', 'Story & Reels', 'Analytics Reports'] },
  { id: 'meta-ads', icon: '🎯', title: 'Meta Ads', short: 'Meta Ads', tagline: 'Every rupee accountable. Every lead counted.',
    deliverables: ['Campaign Strategy', 'Creative & Copy', 'Audience Targeting', 'Pixel & Conversion Setup', 'A/B Testing', 'ROAS Optimization'] },
  { id: 'google-ads', icon: '🔎', title: 'Google Ads', short: 'Google Ads', tagline: 'Show up when it matters most.',
    deliverables: ['Search Campaigns', 'Display Network', 'Performance Max', 'Keyword Bidding', 'Landing Page Advice', 'Conversion Tracking'] },
  { id: 'web-dev', icon: '💻', title: 'Web Development', short: 'Web Dev', tagline: 'Fast. Scalable. SEO-ready.',
    deliverables: ['MERN Development', 'SEO Architecture', 'Admin Panel', 'API Integration', 'Cloud Deployment', 'Performance Optimization'] },
  { id: 'app-dev', icon: '📲', title: 'App Development', short: 'App Dev', tagline: 'Mobile-first experiences.',
    deliverables: ['React Native', 'UI/UX Design', 'Backend API', 'Push Notifications', 'App Store Submission', 'Post-Launch Support'] },
  { id: 'ui-ux', icon: '🎨', title: 'UI/UX Design', short: 'UI/UX', tagline: 'Design that thinks.',
    deliverables: ['UX Research', 'Wireframes', 'High Fidelity Design', 'Design System', 'Prototyping', 'Figma Handoff'] },
  { id: 'graphic-design', icon: '✏️', title: 'Graphic Design', short: 'Design', tagline: 'Visuals that stop the scroll.',
    deliverables: ['Brand Identity', 'Social Creatives', 'Marketing Collateral', 'Presentations', 'Print Design', 'Brand Guidelines'] },
  { id: 'it-support', icon: '🛠️', title: 'IT Support', short: 'IT', tagline: 'Your tech backbone.',
    deliverables: ['Hosting', 'Domain Setup', 'Email Setup', 'Server Maintenance', 'Security Audits', 'Tech Consulting'] },
];

export default function Services() {
  const [active, setActive] = useState(null);
  const serviceRefs = useRef({});

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const service = services.find((s) => s.id === hash);
      if (service) {
        setActive(service);
        setTimeout(() => {
          const element = serviceRefs.current[hash];
          if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 200);
      }
    }
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SchemaMarkup type="services" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">What We Do</span>
          <h1 className="text-5xl md:text-6xl font-black text-t-text mt-4 mb-6">Everything Your Business<br /><span className="gradient-text">Needs to Grow</span></h1>
          <p className="text-t-secondary text-lg max-w-xl mx-auto">From strategy to execution — we deliver complete digital solutions under one roof.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((s, i) => (
            <motion.div id={s.id} key={s.id} ref={(el) => { serviceRefs.current[s.id] = el; }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              onClick={() => setActive(active?.id === s.id ? null : s)} className="glass rounded-2xl p-6 cursor-pointer hover:border-[#7600C440] transition-all">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{s.icon}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#7600C420] text-[#4CFFE7]">{s.short}</span>
              </div>
              <h2 className="text-t-text font-bold text-lg mb-1">{s.title}</h2>
              <p className="text-[#4CFFE7] text-xs font-medium mb-3">{s.tagline}</p>
              <AnimatePresence>
                {active?.id === s.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <div className="mt-4 pt-4 border-t border-t-border">
                      {s.deliverables.map((d, idx) => (<div key={idx} className="text-sm text-t-secondary mb-1">• {d}</div>))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <Link href="/contact" className="px-8 py-4 rounded-xl brand-gradient text-white font-bold">Book Free Strategy Call →</Link>
        </motion.div>
      </div>
    </div>
  );
}
