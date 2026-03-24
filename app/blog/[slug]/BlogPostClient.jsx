'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPostClient({ blog }) {
  if (!blog) return null;

  // Handle different content field names from your API
  const content = blog.content || blog.body || '';
  const faqs = blog.faqs || [];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-t-muted mb-8">
          <Link href="/" className="hover:text-[#4CFFE7]">Home</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-[#4CFFE7]">Resources</Link>
          <span>/</span>
          <span className="text-t-secondary truncate max-w-[200px]">{blog.title}</span>
        </nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.category && (
              <span className="text-xs px-3 py-1 rounded-full bg-[#7600C420] text-[#4CFFE7]">
                {blog.category}
              </span>
            )}
            {blog.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#D300E520] text-[#D300E5]">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-t-text mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-t-muted text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center text-white font-bold">
                {(blog.author || 'V')[0]}
              </div>
              <div>
                <p className="text-t-text font-medium">{blog.author || 'VyomEdge'}</p>
                <p className="text-xs">Author</p>
              </div>
            </div>
            <div>
              <p className="text-t-text">
                {new Date(blog.createdAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-xs">Published</p>
            </div>
            {blog.readTime && (
              <div>
                <p className="text-t-text">{blog.readTime} min</p>
                <p className="text-xs">Read time</p>
              </div>
            )}
            {blog.views > 0 && (
              <div>
                <p className="text-t-text">{blog.views}</p>
                <p className="text-xs">Views</p>
              </div>
            )}
          </div>
        </motion.header>

        {/* Featured Image */}
        {blog.featuredImage && !blog.featuredImage.startsWith('data:') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10"
          >
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Excerpt */}
        {blog.excerpt && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-t-secondary leading-relaxed mb-10 border-l-4 border-[#7600C4] pl-6 italic"
          >
            {blog.excerpt.replace(/&nbsp;/g, ' ').replace(/<[^>]*>/g, '').substring(0, 300)}
            {blog.excerpt.length > 300 ? '...' : ''}
          </motion.p>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* FAQs */}
        {faqs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-black text-t-text mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="glass rounded-xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer text-t-text font-semibold list-none flex justify-between items-center hover:bg-[#7600C410]">
                    {faq.question}
                    <span className="text-[#4CFFE7] group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-t-secondary">{faq.answer}</div>
                </details>
              ))}
            </div>
          </motion.section>
        )}

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-8 mt-16"
        >
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
              {(blog.author || 'V')[0]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-t-text mb-2">
                Written by {blog.author || 'VyomEdge Team'}
              </h3>
              <p className="text-t-secondary mb-4">
                Sharing insights and strategies to help businesses grow their digital presence.
              </p>
              <Link
                href="/contact"
                className="text-[#4CFFE7] hover:underline text-sm font-medium"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 glass rounded-3xl p-12"
        >
          <h2 className="text-3xl font-black text-t-text mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-t-secondary mb-8 max-w-lg mx-auto">
            Let&apos;s discuss how we can help you achieve similar results.
          </p>
          <Link
            href="/contact"
            className="relative inline-block px-10 py-4 rounded-xl text-white font-bold overflow-hidden"
          >
            <span className="absolute inset-0 brand-gradient" />
            <span className="relative z-10">Book a Free Strategy Call →</span>
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
