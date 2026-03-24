'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target.toString().replace(/\D/g, ''));
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: '1300000', suffix: '+', label: 'Impressions Generated', client: 'The SuperC' },
  { value: '18', suffix: 'x', label: 'ROAS Achieved', client: 'Zentrail' },
  { value: '46', suffix: '', prefix: '₹', label: 'CPL on Meta Ads', client: 'Jaiswal Piles Clinic' },
  { value: '456000', suffix: '+', label: 'Search Impressions', client: 'Poornam Events' },
];

const services = [
  { icon: '🔍', title: 'SEO', desc: 'Rank higher, get found faster. Technical + content SEO that drives real organic traffic.' },
  { icon: '📱', title: 'Social Media', desc: 'Platform-native content and community building that converts followers to customers.' },
  { icon: '🎯', title: 'Meta Ads', desc: 'Data-driven campaigns with CPLs as low as ₹46. Every rupee accountable.' },
  { icon: '🔎', title: 'Google Ads', desc: 'Search, Display & Performance Max campaigns built to maximise ROAS.' },
  { icon: '💻', title: 'Web Development', desc: 'MERN stack websites — fast, scalable, SEO-ready and fully custom.' },
  { icon: '📲', title: 'App Development', desc: 'Mobile apps for Android & iOS built on modern React Native architecture.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Figma-first design systems that are beautiful, accessible and conversion-focused.' },
  { icon: '✏️', title: 'Graphic Design', desc: 'Brand identity, social creatives, and marketing collateral that stop the scroll.' },
];

const caseStudies = [
  { client: 'The SuperC', category: 'SEO + Meta Ads', result: '1.3M Impressions', metric: '28.2K Clicks • CPL ₹49.2', color: '#7C3AED', icon: '⚡' },
  { client: 'Zentrail', category: 'Full Digital Ecosystem', result: '18x ROAS', metric: '300+ Keywords • DA 7', color: '#6D28D9', icon: '🏔️' },
  { client: 'Madhuban Eco Retreat', category: 'SEO + Google Ads', result: '1.63K Clicks', metric: '24.4K Impressions • CTR 6.7%', color: '#5B21B6', icon: '🌿' },
  { client: 'Poornam Events', category: 'Full Digital Ecosystem', result: '456K Impressions', metric: '5.66K Clicks • CPL ₹65.6', color: '#4C1D95', icon: '🎉' },
];

const tools = [
  { name: 'Rich Text Editor', desc: 'A free, powerful browser-based text editor. No login needed.', tag: 'Free · Live Now', icon: '📝' },
  { name: 'SEO Tracker', desc: 'Track your keyword rankings, DA, PA and backlinks in one place.', tag: 'Coming Soon', icon: '📈' },
  { name: 'Sales Tracker', desc: 'Monitor leads, conversions and revenue across all your campaigns.', tag: 'Coming Soon', icon: '💰' },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => { setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }); };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <SchemaMarkup type="home" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center dot-grid pt-20">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-[#7C3AED] pointer-events-none transition-transform duration-700"
          style={{ transform: `translate(${mousePos.x * 40 - 20}px, ${mousePos.y * 40 - 20}px)`, left: '20%', top: '10%' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 bg-[#A78BFA] pointer-events-none transition-transform duration-1000"
          style={{ transform: `translate(${mousePos.x * -30 + 15}px, ${mousePos.y * -30 + 15}px)`, right: '10%', bottom: '20%' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-t-accent mb-8 border border-[#7C3AED30]">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            Full-Stack Digital Growth Partner · Bhopal, India
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-t-text leading-[1.05] tracking-tight mb-6">
            We Don&apos;t Just<br /><span className="gradient-text">Build Websites.</span><br />We Build<br /><span className="gradient-text">Digital Empires.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-t-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From logo to launch, SEO to Meta Ads — we design, develop and market your entire digital ecosystem under one accountable roof.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="px-8 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold text-base hover:bg-[#6D28D9] transition-all glow-purple">
              See Our Work →
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl border border-t-border text-t-text font-semibold text-base hover:border-[#7C3AED40] hover:bg-[#7C3AED10] transition-all">
              Book Free Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-t-border bg-t-bg-alt transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-t-text mb-1"><Counter target={s.value} suffix={s.suffix} prefix={s.prefix} /></div>
                <div className="text-t-accent text-sm font-medium mb-1">{s.label}</div>
                <div className="text-t-faint text-xs">{s.client}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-t-text mt-3">Everything Your Business Needs<br /><span className="gradient-text">Under One Roof</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }} className="glass rounded-2xl p-6 cursor-pointer group hover:border-[#7C3AED40] transition-all">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-t-text font-bold text-base mb-2 group-hover:text-[#A78BFA] transition-colors">{s.title}</h3>
              <p className="text-t-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="text-[#A78BFA] text-sm font-medium hover:underline">Explore all services →</Link>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section bg-t-bg-alt border-y border-t-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">Proof of Work</span>
              <h2 className="text-4xl md:text-5xl font-black text-t-text mt-3">Results That<br /><span className="gradient-text">Speak Louder</span></h2>
            </div>
            <Link href="/portfolio" className="text-[#A78BFA] text-sm font-medium hover:underline whitespace-nowrap">View all case studies →</Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} className="glass rounded-2xl p-8 cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top left, ${c.color}15, transparent 60%)` }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-xs text-t-muted uppercase tracking-widest">{c.category}</span>
                      <h3 className="text-t-text font-bold text-xl mt-1">{c.client}</h3>
                    </div>
                    <span className="text-4xl">{c.icon}</span>
                  </div>
                  <div className="text-3xl font-black text-t-text mb-2">{c.result}</div>
                  <div className="text-t-muted text-sm">{c.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE TOOLS */}
      <section className="section max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">Free Digital Products</span>
          <h2 className="text-4xl md:text-5xl font-black text-t-text mt-3">Tools Built By Us,<br /><span className="gradient-text">Free For You</span></h2>
          <p className="text-t-secondary mt-4 max-w-xl mx-auto text-sm">We build free digital tools regularly. No login. No credit card. Just open and use.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 group hover:border-[#7C3AED40] transition-all">
              <div className="text-4xl mb-4">{t.icon}</div>
              <div className="inline-block px-2 py-1 rounded text-xs bg-[#7C3AED20] text-[#A78BFA] mb-3">{t.tag}</div>
              <h3 className="text-t-text font-bold text-lg mb-2">{t.name}</h3>
              <p className="text-t-muted text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/tools" className="px-6 py-3 rounded-xl border border-t-border text-t-text text-sm font-medium hover:border-[#7C3AED40] hover:bg-[#7C3AED10] transition-all">
            Explore All Tools →
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED20] via-[#7C3AED10] to-transparent" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 bg-[#7C3AED]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-black text-t-text mb-6">Ready to Build Your<br /><span className="gradient-text">Digital Ecosystem?</span></h2>
            <p className="text-t-secondary text-lg mb-10 max-w-xl mx-auto">Let&apos;s talk about your business. Free strategy session. No commitment.</p>
            <Link href="/contact" className="inline-block px-10 py-5 rounded-xl bg-[#7C3AED] text-white font-bold text-lg hover:bg-[#6D28D9] transition-all glow-purple">
              Book a Free Strategy Call →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
