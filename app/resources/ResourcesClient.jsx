'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const TABS = ['All', 'Case Study', 'Blog', 'News'];

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function ResourcesClient({ initialBlogs }) {
  const [tab, setTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = initialBlogs || [];
    if (tab !== 'All') { result = result.filter((b) => b.category?.toLowerCase() === tab.toLowerCase()); }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((b) => b.title?.toLowerCase().includes(q) || b.excerpt?.toLowerCase().includes(q) || b.tags?.some((t) => t.toLowerCase().includes(q)));
    }
    return result;
  }, [initialBlogs, tab, search]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Learn & Grow</span>
          <h1 className="text-5xl md:text-6xl font-black text-t-text mt-4 mb-6">Resources &<br /><span className="gradient-text">Insights</span></h1>
          <p className="text-t-secondary text-lg max-w-xl mx-auto">Case studies, blogs, and news from the digital marketing world.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex gap-2 flex-wrap justify-center">
            {TABS.map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${tab === t ? 'text-white relative overflow-hidden' : 'glass text-t-muted hover:text-t-text'}`}>
                {tab === t && <span className="absolute inset-0 brand-gradient" />}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input type="text" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-t-input border border-t-border text-t-text text-sm placeholder-t-muted focus:outline-none focus:border-[#7600C4]" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-t-muted">🔍</span>
          </div>
        </div>

        {filtered.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((blog, i) => (
                <motion.article key={blog._id || blog.slug} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl overflow-hidden group hover:border-[#7600C440] transition-all">
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="relative h-48 overflow-hidden bg-t-bg-alt">
                      {blog.featuredImage ? (
                        <Image src={blog.featuredImage} alt={blog.title || 'Blog post'} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl">📝</div>
                      )}
                      {blog.category && <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-[#7600C4] text-white">{blog.category}</span>}
                    </div>
                    <div className="p-6">
                      <h2 className="text-t-text font-bold text-lg mb-2 group-hover:gradient-text transition-all line-clamp-2">{blog.title}</h2>
                      <p className="text-t-muted text-sm leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-t-faint text-xs">{formatDate(blog.createdAt)}</span>
                        <span className="text-[#4CFFE7] text-xs font-medium group-hover:underline">Read more →</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-t-text font-bold text-xl mb-2">No articles found</h3>
            <p className="text-t-muted">{search ? 'Try a different search term.' : 'Check back soon for new content!'}</p>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20 glass rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-black text-t-text mb-4">Want Custom Insights for Your Business?</h2>
          <p className="text-t-secondary mb-8 max-w-lg mx-auto">Book a free strategy call and get personalized marketing recommendations.</p>
          <Link href="/contact" className="relative inline-block px-10 py-4 rounded-xl text-white font-bold text-base overflow-hidden">
            <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Book a Free Strategy Call →</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
