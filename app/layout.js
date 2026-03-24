import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter' 
});

export const metadata = {
  metadataBase: new URL('https://www.vyomedge.com'),
  title: { 
    default: 'VyomEdge — Digital Marketing & IT Services Agency in Bhopal', 
    template: '%s | VyomEdge' 
  },
  description: 'VyomEdge is a full-stack digital marketing and IT services agency based in Bhopal, India. SEO, Meta Ads, Google Ads, Web Development, App Development and UI/UX Design.',
  keywords: ['digital marketing agency Bhopal', 'SEO company Bhopal', 'web development Bhopal', 'Meta Ads agency', 'VyomEdge'],
  authors: [{ name: 'VyomEdge', url: 'https://www.vyomedge.com' }],
  creator: 'VyomEdge',
  openGraph: {
    type: 'website', 
    locale: 'en_IN', 
    url: 'https://www.vyomedge.com', 
    siteName: 'VyomEdge',
    title: 'VyomEdge — Digital Marketing & IT Services Agency',
    description: 'Full-stack digital marketing and IT services agency based in Bhopal, India.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'VyomEdge' }],
  },
  twitter: { 
    card: 'summary_large_image', 
    site: '@VyomedgeS', 
    creator: '@VyomedgeS' 
  },
  robots: { index: true, follow: true },
  other: { 
    'geo.region': 'IN-MP', 
    'geo.placename': 'Bhopal', 
    'geo.position': '23.2599;77.4126', 
    'ICBM': '23.2599, 77.4126' 
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#08080F' },
  ],
  width: 'device-width', 
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vyomedge icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/vyomedge icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-t-bg transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
