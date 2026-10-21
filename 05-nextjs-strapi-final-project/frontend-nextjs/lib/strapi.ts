const STRAPI_URL = process.env.STRAPI_API_URL || 'http://127.0.0.1:1337';

export async function getArticles() {
    'use cache';
    const res = await fetch(`${STRAPI_URL}/api/articles`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Gagal mengambil data');
    const json = await res.json();
    return json.data;
}

export async function getArticleBySlug(slug: string) {
    'use cache';
    const res = await fetch(`${STRAPI_URL}/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Gagal mengambil detail artikel');

    const json = await res.json();
    return json.data[0] || null;
}