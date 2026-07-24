// functions/api/article-views.js
// API statistik "kali dibaca" per-artikel berita Kampung Lotaq.
// - POST /api/article-views  { slug }  -> tambah 1 view untuk artikel tsb (sekali per sesi browser)
// - GET  /api/article-views?slug=xxx   -> ambil jumlah view artikel tertentu
// - GET  /api/article-views            -> ambil daftar SEMUA artikel + jumlah view,
//                                          diurutkan dari yang paling banyak dibaca
//
// Memakai KV namespace yang SAMA dengan widget Kunjungan (VISITS_KV) -
// tidak perlu binding baru di Cloudflare Pages, key dibedakan prefix "article:".

async function handleGetOne(env, slug) {
  const raw = await env.VISITS_KV.get(`article:${slug}`);
  const views = parseInt(raw || '0', 10) || 0;
  return new Response(JSON.stringify({ slug, views }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

async function handleGetAll(env) {
  const list = await env.VISITS_KV.list({ prefix: 'article:' });
  const results = await Promise.all(
    list.keys.map(async (k) => {
      const raw = await env.VISITS_KV.get(k.name);
      return {
        slug: k.name.replace('article:', ''),
        views: parseInt(raw || '0', 10) || 0,
      };
    })
  );
  results.sort((a, b) => b.views - a.views);
  return new Response(JSON.stringify({ articles: results }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

async function handlePost(env, slug) {
  const key = `article:${slug}`;
  const currentRaw = await env.VISITS_KV.get(key);
  const newCount = (parseInt(currentRaw || '0', 10) || 0) + 1;
  await env.VISITS_KV.put(key, String(newCount));
  return new Response(JSON.stringify({ ok: true, slug, views: newCount }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function onRequestGet(context) {
  try {
    if (!context.env.VISITS_KV) {
      return new Response(
        JSON.stringify({ error: 'VISITS_KV belum di-binding di Cloudflare Pages.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const url = new URL(context.request.url);
    const slug = url.searchParams.get('slug');
    if (slug) {
      return await handleGetOne(context.env, slug);
    }
    return await handleGetAll(context.env);
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env.VISITS_KV) {
      return new Response(
        JSON.stringify({ error: 'VISITS_KV belum di-binding di Cloudflare Pages.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const body = await context.request.json().catch(() => ({}));
    const slug = body.slug;
    if (!slug || typeof slug !== 'string') {
      return new Response(JSON.stringify({ error: 'slug wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return await handlePost(context.env, slug);
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
