'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

const timeline = [
  { year: '2022', title: 'VyomEdge Founded', desc: 'Started as a freelance digital marketing consultancy in Bhopal.' },
  { year: '2023', title: 'First Major Client', desc: 'Onboarded The SuperC and delivered 1.3M+ impressions.' },
  { year: '2023', title: 'Expanded to Full-Stack', desc: 'Added web development, app development and UI/UX design services.' },
  { year: '2024', title: 'Agency Mode', desc: 'Transitioned from freelance to a full-fledged agency with a growing team.' },
  { year: '2024', title: 'Free Tools Launch', desc: 'Started building free digital tools for businesses and marketers.' },
  { year: '2025', title: 'Scaling Up', desc: 'Expanding services, team and client base across India.' },
];

const values = [
  { icon: '🎯', title: 'Results First', desc: 'We measure success by your growth, not our effort.' },
  { icon: '🤝', title: 'Transparency', desc: 'No hidden fees, no jargon. You always know what\'s happening.' },
  { icon: '🚀', title: 'Innovation', desc: 'We stay ahead of trends so you don\'t have to.' },
  { icon: '💪', title: 'Accountability', desc: 'One team, one roof. Every rupee accounted for.' },
];

const clients = ['The SuperC', 'Zentrail', 'Madhuban Eco Retreat', 'Poornam Events', 'Jaiswal Piles Clinic'];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <SchemaMarkup type="about" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black text-t-text mt-4 mb-6">From Bhopal to the<br /><span className="gradient-text">Digital Universe</span></h1>
          <p className="text-t-secondary text-lg max-w-2xl mx-auto">VyomEdge is a full-stack digital marketing and IT services agency based in Bhopal, India. We help businesses build their entire digital ecosystem — from logo to launch, SEO to Meta Ads — under one accountable roof.</p>
        </motion.div>

        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 brand-gradient" />
            <div className="relative z-10">
              <span className="text-5xl mb-6 block">🚀</span>
              <h2 className="text-3xl md:text-4xl font-black text-t-text mb-6">Our Mission</h2>
              <p className="text-t-secondary text-lg max-w-2xl mx-auto leading-relaxed">To empower businesses of all sizes with world-class digital marketing and technology solutions — making enterprise-grade strategies accessible, affordable, and accountable.</p>
            </div>
          </div>
        </motion.section>

        <section className="mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#7600C4] text-sm font-semibold tracking-widest uppercase">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-black text-t-text mt-3">How We Got Here</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D300E5] via-[#7600C4] to-[#4CFFE7]" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#7600C4] transform -translate-x-1/2 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <span className="text-[#4CFFE7] font-bold text-lg">{item.year}</span>
                    <h3 className="text-t-text font-bold text-xl mt-1 mb-2">{item.title}</h3>
                    <p className="text-t-muted text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#7600C4] text-sm font-semibold tracking-widest uppercase">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-black text-t-text mt-3">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center group hover:border-[#7600C440] transition-all">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-t-text font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-t-muted text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#7600C4] text-sm font-semibold tracking-widest uppercase">Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-black text-t-text mt-3">Our Clients</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass rounded-xl px-8 py-4 text-t-text font-medium">{client}</motion.div>
            ))}
          </div>
        </section>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 brand-gradient" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-t-text mb-4">Ready to Work with Us?</h2>
            <p className="text-t-secondary mb-8 max-w-lg mx-auto">Let&apos;s talk about your business and how we can help you grow.</p>
            <Link href="/contact" className="relative inline-block px-10 py-4 rounded-xl text-white font-bold overflow-hidden">
              <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Book a Free Strategy Call →</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
