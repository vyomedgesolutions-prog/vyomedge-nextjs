'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LEGAL_CONTENT = {
  'privacy-policy': { lastUpdated: 'March 2025', sections: [
    { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us via email. This may include your name, email address, phone number, company name, and any other information you choose to provide.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you about our services, respond to your inquiries, and send you marketing communications (with your consent).' },
    { title: 'Information Sharing', content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, or protect our rights.' },
    { title: 'Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
    { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@vyomedge.com.' },
    { title: 'Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at info@vyomedge.com or at our office: FF-12, SRP Arcade, E-5 Arera Colony, Bhopal, MP 462016, India.' },
  ]},
  'terms': { lastUpdated: 'March 2025', sections: [
    { title: 'Acceptance of Terms', content: 'By accessing and using VyomEdge\'s website and services, you accept and agree to be bound by these Terms and Conditions.' },
    { title: 'Services', content: 'VyomEdge provides digital marketing and IT services including SEO, social media marketing, paid advertising, web development, app development, UI/UX design, and graphic design.' },
    { title: 'Payment Terms', content: 'Payment terms will be specified in individual service agreements. Unless otherwise agreed, invoices are due within 15 days of receipt.' },
    { title: 'Intellectual Property', content: 'All content on this website is the property of VyomEdge or its content suppliers and is protected by copyright laws. Client deliverables become the property of the client upon full payment.' },
    { title: 'Limitation of Liability', content: 'VyomEdge shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.' },
    { title: 'Governing Law', content: 'These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.' },
  ]},
  'disclaimer': { lastUpdated: 'March 2025', sections: [
    { title: 'General Information', content: 'The information provided on the VyomEdge website is for general informational purposes only. While we strive to keep the information accurate, we make no warranties about completeness, accuracy, or reliability.' },
    { title: 'Results Disclaimer', content: 'The results and case studies displayed on our website represent specific client outcomes and are not guarantees of future performance. Digital marketing results vary based on numerous factors.' },
    { title: 'External Links', content: 'Our website may contain links to external websites. We do not guarantee the accuracy or completeness of any information on these external websites.' },
    { title: 'Professional Advice', content: 'The content on this website does not constitute professional advice. For specific marketing, legal, or financial advice, please consult with appropriate professionals.' },
  ]},
  'cookies': { lastUpdated: 'March 2025', sections: [
    { title: 'What Are Cookies', content: 'Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit.' },
    { title: 'How We Use Cookies', content: 'We use cookies to understand how you use our website, remember your preferences, improve your experience, and analyze site traffic.' },
    { title: 'Types of Cookies', content: 'Essential Cookies: Required for the website to function. Analytics Cookies: Help us understand visitor interactions. Marketing Cookies: Used for advertising purposes. Preference Cookies: Remember your settings.' },
    { title: 'Managing Cookies', content: 'You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.' },
    { title: 'Contact Us', content: 'If you have questions about our use of cookies, please contact us at info@vyomedge.com.' },
  ]},
};

export default function LegalClient({ type, title }) {
  const content = LEGAL_CONTENT[type];
  if (!content) return null;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-t-muted mb-8">
          <Link href="/" className="hover:text-[#4CFFE7] transition-colors">Home</Link><span>/</span><span className="text-t-text">{title}</span>
        </motion.nav>
        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-t-text mb-4">{title}</h1>
          <p className="text-t-muted text-sm">Last updated: {content.lastUpdated}</p>
        </motion.header>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-10">
          {content.sections.map((section, i) => (
            <section key={i} className="glass rounded-2xl p-8">
              <h2 className="text-t-text font-bold text-xl mb-4">{section.title}</h2>
              <p className="text-t-secondary text-sm leading-relaxed">{section.content}</p>
            </section>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-12">
          <Link href="/" className="text-[#4CFFE7] text-sm font-medium hover:underline">← Back to Home</Link>
        </motion.div>
      </div>
    </div>
  );
}
