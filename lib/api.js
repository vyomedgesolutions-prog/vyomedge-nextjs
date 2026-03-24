const BASE_URL = 'https://vyomedge-backend.onrender.com';

export async function getBlogs() {
  try {
    const res = await fetch(`${BASE_URL}/api/blogs`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch blogs');
    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error('getBlogs error:', error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${BASE_URL}/api/blogs/slug/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.blog || null;  // <-- THIS IS THE FIX: extract blog from wrapper
  } catch (error) {
    console.error('getBlogBySlug error:', error);
    return null;
  }
}

export async function getPortfolio() {
  try {
    const res = await fetch(`${BASE_URL}/api/portfolio`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch portfolio');
    const data = await res.json();
    return data.portfolio || [];
  } catch (error) {
    console.error('getPortfolio error:', error);
    return [];
  }
}

export async function submitInquiry(formData) {
  try {
    const res = await fetch(`${BASE_URL}/api/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Failed to submit inquiry');
    return await res.json();
  } catch (error) {
    console.error('submitInquiry error:', error);
    return null;
  }
}

export async function subscribe(email) {
  try {
    const res = await fetch(`${BASE_URL}/api/subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) throw new Error('Failed to subscribe');
    return await res.json();
  } catch (error) {
    console.error('subscribe error:', error);
    return null;
  }
}
