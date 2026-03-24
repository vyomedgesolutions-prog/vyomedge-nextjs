/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'vyomedge-backend.onrender.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'www.thesuperc.com' },
      { protocol: 'https', hostname: 'www.flyola.in' },
      { protocol: 'https', hostname: 'www.flyolaindia.com' },
      { protocol: 'https', hostname: 'www.shikso.com' },
      { protocol: 'https', hostname: 'www.poornamevents.com' },
      { protocol: 'https', hostname: 'www.jaiswalpilesclinic.com' },
      { protocol: 'https', hostname: 'www.madhubanecoretreat.com' },
      { protocol: 'https', hostname: 'www.dreamhomestyling.com' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: '**.wixstatic.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/blogs/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/legal/privacy-policy', permanent: true },
      { source: '/terms-and-conditions', destination: '/legal/terms', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  compress: true,
  poweredByHeader: false,
};
export default nextConfig;
