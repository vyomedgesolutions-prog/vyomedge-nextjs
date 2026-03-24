const SITE_URL = 'https://www.vyomedge.com';
const ORG_NAME = 'VyomEdge';
const ORG_LOGO = `${SITE_URL}/logo.png`;
const ORG_EMAIL = 'info@vyomedge.com';
const ORG_PHONE = '+91-7974186754';
const ORG_ADDR = {
  streetAddress: 'FF-12, SRP Arcade, E-5 Arera Colony',
  addressLocality: 'Bhopal',
  addressRegion: 'Madhya Pradesh',
  postalCode: '462016',
  addressCountry: 'IN',
};

function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: ORG_NAME, url: SITE_URL, logo: ORG_LOGO,
    email: ORG_EMAIL, telephone: ORG_PHONE,
    address: { '@type': 'PostalAddress', ...ORG_ADDR },
    sameAs: [
      'https://www.facebook.com/vyomedge/',
      'https://www.instagram.com/vyomedge_official/',
      'https://www.linkedin.com/company/vyom-edge/',
      'https://x.com/VyomedgeS',
      'https://www.pinterest.com/vyomedge/',
    ],
    description: 'Full-stack digital marketing and IT services agency based in Bhopal, India.',
    areaServed: 'IN', priceRange: '₹₹',
  };
}

function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORG_NAME, url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/resources?search={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem', position: i + 1,
      name: item.name, item: `${SITE_URL}${item.path}`,
    })),
  };
}

function blogPost(blog) {
  return [{
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt || '',
    image: blog.featuredImage || ORG_LOGO,
    author: { '@type': 'Organization', name: blog.author || ORG_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: ORG_NAME, logo: { '@type': 'ImageObject', url: ORG_LOGO } },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${blog.slug}` },
  }];
}

export default function SchemaMarkup({ type, data }) {
  let schemas = [];
  switch (type) {
    case 'home': schemas = [organization(), website()]; break;
    case 'about': schemas = [organization(), breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]; break;
    case 'services': schemas = [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])]; break;
    case 'portfolio': schemas = [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }])]; break;
    case 'contact': schemas = [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]; break;
    case 'resources': schemas = [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }])]; break;
    case 'tools': schemas = [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools' }])]; break;
    case 'blogPost': schemas = blogPost(data); break;
    default: return null;
  }
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
