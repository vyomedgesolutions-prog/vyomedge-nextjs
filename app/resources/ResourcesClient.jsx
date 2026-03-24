'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const TABS = ['All', 'SEO', 'General', 'Meta Ads', 'Web Dev'];

export default function ResourcesClient({ initialBlogs }) {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filteredBlogs = useMemo(() => {
    let filtered = initialBlogs || [];

    if (activeTab !== 'All') {
      filtered = filtered.filter(
        (b) => b.category === activeTab || b.tags?.includes(activeTab)
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [initialBlogs, activeTab, search]);

  // Helper to strip HTML and clean excerpt
  const cleanExcerpt = (text) => {
    if (!text) return '';
    return text
      .replace(/&nbsp;/g, ' ')
      .replace(/<[^>]*>/g, '')
      .substring(0, 150) + (text.length > 150 ? '...' : '');
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase gradient-text">
            Knowledge Hub
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-t-text mt-4 mb-6">
            Resources &<br />
            <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-t-secondary text-lg max-w-2xl mx-auto">
            Stay ahead with our latest insights on digital marketing, SEO, and growth strategies.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-white relative overflow-hidden'
                    : 'glass text-t-secondary hover:text-t-text border border-t-border'
                }`}
              >
                {activeTab === tab && <span className="absolute inset-0 brand-gradient" />}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full md:w-72 px-5 py-3 rounded-xl bg-t-input border border-t-border text-t-text placeholder-t-muted focus:outline-none focus:border-[#7600C4]"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-t-muted">🔍</span>
          </div>
        </div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          {filteredBlogs.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-6xl mb-4">📭</p>
              <h3 className="text-2xl font-bold text-t-text mb-2">No articles found</h3>
              <p className="text-t-muted">Try adjusting your search or filter.</p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredBlogs.map((blog, i) => (
                <motion.article
                  key={blog._id || blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl overflow-hidden group hover:border-[#7600C440] transition-all"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    {/* Image */}
                    <div className="relative aspect-video bg-t-bg overflow-hidden">
                      {blog.featuredImage && !blog.featuredImage.startsWith('data:') ? (
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-[#D300E520] to-[#7600C420]">
                          📝
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.category && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#7600C420] text-[#4CFFE7]">
                            {blog.category}
                          </span>
                        )}
                        {blog.readTime && (
                          <span className="text-xs text-t-muted">{blog.readTime} min read</span>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-t-text mb-2 group-hover:gradient-text transition-all line-clamp-2">
                        {blog.title}
                      </h2>

                      <p className="text-t-muted text-sm mb-4 line-clamp-3">
                        {cleanExcerpt(blog.excerpt)}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-t-faint">
                          {new Date(blog.createdAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="text-[#4CFFE7] text-sm font-medium group-hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
