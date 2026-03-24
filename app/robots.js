export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Anthropic-AI', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
    ],
    sitemap: 'https://www.vyomedge.com/sitemap.xml',
    host: 'https://www.vyomedge.com',
  };
}
