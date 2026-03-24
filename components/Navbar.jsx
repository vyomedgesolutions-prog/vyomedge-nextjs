'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const links = [
  { name: 'Work', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Tools', path: '/tools' },
  { name: 'About', path: '/about' },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-t-border py-3' : 'py-5 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="VyomEdge" width={40} height={40} className="h-10 w-auto" priority />
          <span className="text-t-text font-black text-xl tracking-tight">
            Vyom<span className="gradient-text">Edge</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.path} href={l.path}
              className={`text-sm font-medium transition-all relative group ${pathname === l.path ? 'text-[#4CFFE7]' : 'text-t-muted hover:text-t-text'}`}>
              {l.name}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 brand-gradient ${pathname === l.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button onClick={toggleTheme} className="p-2 rounded-lg text-t-muted hover:text-t-text hover:bg-t-bg-alt transition-all"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          )}
          <Link href="/contact" className="relative px-5 py-2.5 rounded-lg text-white text-sm font-semibold overflow-hidden group">
            <span className="absolute inset-0 brand-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Start a Project →</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button onClick={toggleTheme} className="p-2 rounded-lg text-t-muted hover:text-t-text transition-all"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          )}
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-t-text transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-t-text transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-t-text transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-t-border px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.path} href={l.path} className={`text-sm font-medium py-2 ${pathname === l.path ? 'text-[#4CFFE7]' : 'text-t-muted'}`}>
                {l.name}
              </Link>
            ))}
            <Link href="/contact" className="relative mt-2 px-5 py-3 rounded-lg text-white text-sm font-semibold text-center overflow-hidden">
              <span className="absolute inset-0 brand-gradient" />
              <span className="relative z-10">Start a Project →</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
