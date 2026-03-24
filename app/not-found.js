'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-10">
          <div className="text-9xl md:text-[200px] font-black gradient-text leading-none">404</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl md:text-5xl font-black text-t-text mb-4">Page Not Found</h1>
          <p className="text-t-secondary text-lg mb-10 max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="relative px-8 py-4 rounded-xl text-white font-bold overflow-hidden">
              <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Go to Homepage →</span>
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl border border-t-border text-t-text font-medium hover:border-[#7600C440] transition-all">Contact Support</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
