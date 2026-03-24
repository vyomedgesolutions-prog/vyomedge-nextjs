'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

function formatDate(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

function calculateReadTime(content) {
  if (!content) return '5 min read';
  const text = content.replace(/<[^>]*>/g, '');
  const minutes = Math.ceil(text.split(/\s+/).length / 200);
  return `${minutes} min read`;
}

export default function BlogPostClient({ blog }) {
  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-t-muted mb-8">
          <Link href="/" className="hover:text-[#4CFFE7] transition-colors">Home</Link><span>/</span>
          <Link href="/resources" className="hover:text-[#4CFFE7] transition-colors">Resources</Link><span>/</span>
          <span className="text-t-text truncate max-w-[200px]">{blog.title}</span>
        </motion.nav>

        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {blog.category && <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#7600C4] text-white">{blog.category}</span>}
            {blog.tags?.slice(0, 3).map((tag) => (<span key={tag} className="px-3 py-1 rounded-full text-xs bg-[#7600C420] text-[#4CFFE7]">{tag}</span>))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-t-text leading-tight mb-6">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-t-muted">
            <span>{blog.author || 'VyomEdge'}</span><span>•</span>
            <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time><span>•</span>
            <span>{calculateReadTime(blog.content)}</span>
          </div>
        </motion.header>

        {blog.featuredImage && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12">
            <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

        {blog.faqs && blog.faqs.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-16 pt-12 border-t border-t-border">
            <h2 className="text-2xl font-black text-t-text mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {blog.faqs.map((faq, i) => (
                <div key={i} className="glass rounded-xl p-6">
                  <h3 className="text-t-text font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-t-secondary text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16 pt-12 border-t border-t-border">
          <div className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D300E5] to-[#7600C4] flex items-center justify-center text-white text-2xl font-black flex-shrink-0">VE</div>
            <div className="text-center sm:text-left">
              <h3 className="text-t-text font-bold text-lg mb-1">{blog.author || 'VyomEdge Team'}</h3>
              <p className="text-t-muted text-sm leading-relaxed">We are a full-stack digital marketing and IT services agency based in Bhopal, India.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 glass rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-t-text mb-4">Need Help with Your Digital Marketing?</h2>
          <p className="text-t-secondary mb-8 max-w-lg mx-auto">Book a free strategy call and let&apos;s discuss how we can help your business grow.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="relative px-8 py-4 rounded-xl text-white font-bold overflow-hidden">
              <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Book a Free Strategy Call →</span>
            </Link>
            <Link href="/resources" className="px-8 py-4 rounded-xl border border-t-border text-t-text font-medium hover:border-[#7600C440] transition-all">← Back to Resources</Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
