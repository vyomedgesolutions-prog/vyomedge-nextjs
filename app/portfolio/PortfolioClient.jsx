'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const STATIC_FILTERS = ['All', 'Full Ecosystem', 'SEO', 'Meta Ads', 'Web Dev', 'Google Ads', 'SMM'];

function normalize(item) {
  return {
    client: item.client || 'Client', 
    url: item.url || '#', 
    tags: item.tags || [], 
    icon: item.icon || '',
    color: item.color || '#7600C4', 
    description: item.description || '',
    results: Array.isArray(item.results) ? item.results : [],
    metrics: { da: item.metrics?.da ?? '-', pa: item.metrics?.pa ?? '-' }, 
    _id: item._id,
  };
}

export default function PortfolioClient({ initialCases }) {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const cases = initialCases.map(normalize);
  const allTags = [...new Set(cases.flatMap((c) => c.tags))];
  const filters = ['All', ...STATIC_FILTERS.slice(1).filter((f) => allTags.includes(f)), ...allTags.filter((t) => !STATIC_FILTERS.includes(t))];
  const filtered = active === 'All' ? cases : cases.filter((c) => c.tags.includes(active));

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Proof of Work</span>
          <h1 className="text-5xl md:text-7xl font-black text-t-text mt-4 mb-6">Results That<br /><span className="gradient-text">Speak Louder</span></h1>
          <p className="text-t-secondary text-lg max-w-2xl mx-auto">Every number below is real. Every client is real. This is what happens when strategy meets execution.</p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${active === f ? 'text-white relative overflow-hidden' : 'glass text-t-secondary hover:text-t-text border border-t-border'}`}>
              {active === f && <span className="absolute inset-0 brand-gradient" />}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((c, i) => (
              <motion.div key={c._id || c.client} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(c)} className="glass rounded-2xl p-6 cursor-pointer group hover:border-[#7600C440] transition-all relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top left, ${c.color}15, transparent 60%)` }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex gap-2 mb-2 flex-wrap">
                        {c.tags.slice(0, 2).map((t) => (<span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[#7600C420] text-[#4CFFE7]">{t}</span>))}
                      </div>
                      <h2 className="text-t-text font-bold text-lg group-hover:gradient-text transition-all">{c.client}</h2>
                    </div>
                    {/* Show icon/logo if available */}
                    {c.icon ? (
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex-shrink-0">
                        <img 
                          src={c.icon} 
                          alt={c.client} 
                          className="w-full h-full object-contain"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ background: `${c.color}20` }}>
                        {c.client.charAt(0)}
                      </div>
                    )}
                  </div>
                  <p className="text-t-muted text-sm mb-5 leading-relaxed line-clamp-2">{c.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {c.results.slice(0, 4).map((r, idx) => (
                      <div key={idx} className="bg-t-result rounded-xl p-3">
                        <div className="text-t-text font-black text-lg">{r.value}</div>
                        <div className="text-t-faint text-xs mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-t-faint">
                      {c.metrics.da > 0 && <span>DA {c.metrics.da}</span>}
                      {c.metrics.pa > 0 && <span>PA {c.metrics.pa}</span>}
                    </div>
                    <span className="text-[#4CFFE7] text-xs font-medium group-hover:underline">View details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20 glass rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-black text-t-text mb-4">Want Results Like These?</h2>
          <p className="text-t-secondary mb-8 max-w-lg mx-auto">Let&apos;s build your success story. Free strategy session, no commitment required.</p>
          <Link href="/contact" className="relative inline-block px-10 py-4 rounded-xl text-white font-bold text-base overflow-hidden group">
            <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Book a Free Strategy Call →</span>
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} className="glass rounded-3xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-t-muted hover:text-t-text text-2xl leading-none" aria-label="Close">×</button>
              <div className="flex items-center gap-4 mb-6">
                {selected.icon ? (
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex-shrink-0">
                    <img src={selected.icon} alt={selected.client} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-black" style={{ background: `${selected.color}20`, color: selected.color }}>
                    {selected.client.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-t-text font-black text-2xl">{selected.client}</h3>
                  <div className="flex gap-2 mt-1 flex-wrap">{selected.tags.map((t) => (<span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[#7600C420] text-[#4CFFE7]">{t}</span>))}</div>
                </div>
              </div>
              <p className="text-t-secondary text-sm leading-relaxed mb-6">{selected.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selected.results.map((r, i) => (<div key={i} className="bg-t-result rounded-xl p-4"><div className="text-t-text font-black text-xl">{r.value}</div><div className="text-t-muted text-xs mt-1">{r.label}</div></div>))}
              </div>
              {selected.url && selected.url !== '#' && selected.url.startsWith('http') && (
                <a href={selected.url} target="_blank" rel="noopener noreferrer" className="relative block w-full py-3 rounded-xl text-white font-semibold text-center text-sm overflow-hidden">
                  <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Visit Website →</span>
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
