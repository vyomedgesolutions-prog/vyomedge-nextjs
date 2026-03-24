'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { submitInquiry } from '@/lib/api';

const SERVICES = ['SEO', 'Social Media Management', 'Meta Ads', 'Google Ads', 'Web Development', 'App Development', 'UI/UX Design', 'Graphic Design', 'IT Support', 'Full Digital Ecosystem'];
const BUDGET_RANGES = ['₹10K - ₹25K', '₹25K - ₹50K', '₹50K - ₹1L', '₹1L - ₹3L', '₹3L+'];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', services: [], budget: '', message: '' });

  const toggleService = (service) => {
    setForm((prev) => ({ ...prev, services: prev.services.includes(service) ? prev.services.filter((s) => s !== service) : [...prev.services, service] }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const response = await submitInquiry(form);
      if (response) { setSubmitted(true); } else { setError('Something went wrong. Please try again.'); }
    } catch { setError('Failed to submit. Please try again or contact us directly.'); }
    finally { setSubmitting(false); }
  };

  const canProceed = () => {
    if (step === 1) return form.name && form.email && form.phone;
    if (step === 2) return form.services.length > 0;
    if (step === 3) return form.budget;
    return true;
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl p-12 text-center max-w-lg">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-black text-t-text mb-4">Thank You!</h2>
          <p className="text-t-secondary mb-8">Your inquiry has been submitted. We&apos;ll get back to you within 24 hours.</p>
          <Link href="/" className="relative inline-block px-8 py-4 rounded-xl text-white font-bold overflow-hidden">
            <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Back to Home →</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SchemaMarkup type="contact" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-sm font-semibold tracking-widest uppercase gradient-text">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-black text-t-text mt-4 mb-6">Let&apos;s Build Your<br /><span className="gradient-text">Digital Empire</span></h1>
            <p className="text-t-secondary text-lg mb-10">Tell us about your project. We&apos;ll get back to you within 24 hours with a free strategy call.</p>
            <div className="space-y-6">
              <div className="glass rounded-xl p-6"><h3 className="text-t-text font-bold mb-1">Email</h3><a href="mailto:info@vyomedge.com" className="text-[#4CFFE7] hover:underline">info@vyomedge.com</a></div>
              <div className="glass rounded-xl p-6"><h3 className="text-t-text font-bold mb-1">Phone</h3><a href="tel:+917974186754" className="text-[#4CFFE7] hover:underline">+91 79741 86754</a></div>
              <div className="glass rounded-xl p-6"><h3 className="text-t-text font-bold mb-1">Office</h3><address className="text-t-muted text-sm not-italic">FF-12, SRP Arcade, E-5 Arera Colony<br />Bhopal, MP 462016, India</address></div>
              <div className="glass rounded-xl p-6"><h3 className="text-t-text font-bold mb-1">Hours</h3><p className="text-t-muted text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center justify-between mb-10">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-gradient-to-r from-[#D300E5] to-[#7600C4] text-white' : 'bg-t-bg-alt text-t-muted'}`}>{s}</div>
                  {s < 4 && <div className={`w-12 md:w-20 h-0.5 mx-2 transition-all ${step > s ? 'bg-[#7600C4]' : 'bg-t-border'}`} />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-t-text mb-6">Tell us about yourself</h2>
                  <div className="space-y-5">
                    <div><label className="text-t-text text-sm font-medium block mb-2">Your Name *</label><input type="text" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-t-input border border-t-border text-t-text placeholder-t-muted focus:outline-none focus:border-[#7600C4]" /></div>
                    <div><label className="text-t-text text-sm font-medium block mb-2">Email Address *</label><input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="john@company.com" className="w-full px-5 py-4 rounded-xl bg-t-input border border-t-border text-t-text placeholder-t-muted focus:outline-none focus:border-[#7600C4]" /></div>
                    <div><label className="text-t-text text-sm font-medium block mb-2">Phone Number *</label><input type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="+91 98765 43210" className="w-full px-5 py-4 rounded-xl bg-t-input border border-t-border text-t-text placeholder-t-muted focus:outline-none focus:border-[#7600C4]" /></div>
                    <div><label className="text-t-text text-sm font-medium block mb-2">Company Name (optional)</label><input type="text" value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} placeholder="Acme Inc." className="w-full px-5 py-4 rounded-xl bg-t-input border border-t-border text-t-text placeholder-t-muted focus:outline-none focus:border-[#7600C4]" /></div>
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-t-text mb-6">What services do you need?</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {SERVICES.map((service) => (
                      <button key={service} type="button" onClick={() => toggleService(service)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${form.services.includes(service) ? 'bg-gradient-to-r from-[#D300E5] to-[#7600C4] text-white' : 'glass text-t-muted hover:text-t-text'}`}>{service}</button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-t-text mb-6">What&apos;s your monthly budget?</h2>
                  <div className="space-y-3">
                    {BUDGET_RANGES.map((budget) => (
                      <button key={budget} type="button" onClick={() => setForm((p) => ({ ...p, budget }))}
                        className={`w-full px-6 py-4 rounded-xl text-left font-medium transition-all ${form.budget === budget ? 'bg-gradient-to-r from-[#D300E5] to-[#7600C4] text-white' : 'glass text-t-muted hover:text-t-text'}`}>{budget}</button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black text-t-text mb-6">Anything else you&apos;d like to share?</h2>
                  <textarea value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} placeholder="Tell us about your project, goals, timeline..." rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-t-input border border-t-border text-t-text placeholder-t-muted focus:outline-none focus:border-[#7600C4] resize-none" />
                  {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-10">
              {step > 1 ? (<button type="button" onClick={() => setStep((s) => s - 1)} className="px-6 py-3 rounded-xl border border-t-border text-t-text font-medium hover:border-[#7600C440] transition-all">← Back</button>) : (<div />)}
              {step < 4 ? (
                <button type="button" onClick={() => setStep((s) => s + 1)} disabled={!canProceed()}
                  className={`relative px-8 py-3 rounded-xl text-white font-semibold overflow-hidden ${canProceed() ? '' : 'opacity-50 cursor-not-allowed'}`}>
                  <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">Next →</span>
                </button>
              ) : (
                <button type="button" onClick={handleSubmit} disabled={submitting} className="relative px-8 py-3 rounded-xl text-white font-semibold overflow-hidden">
                  <span className="absolute inset-0 brand-gradient" /><span className="relative z-10">{submitting ? 'Sending...' : 'Submit Inquiry →'}</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
