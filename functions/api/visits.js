// functions/api/visits.js
// API statistik kunjungan Kampung Lotaq.
// - POST /api/visits  -> tambah 1 kunjungan (dipanggil sekali per sesi browser)
// - GET  /api/visits   -> ambil statistik (hari ini, kemarin, minggu ini, dst)
//
// Membutuhkan KV namespace binding bernama "VISITS_KV" di Cloudflare Pages
// (Settings > Bindings > Add > KV namespace, Variable name: VISITS_KV).
//
// Zona waktu kampung: WITA (Asia/Makassar, UTC+8). Semua perhitungan "hari"
// menggunakan zona waktu ini supaya batas hari sesuai jam lokal, bukan UTC.

const TIMEZONE = 'Asia/Makassar';

/** Ambil tanggal hari ini (di zona waktu WITA) sebagai objek Date jam 00:00 UTC,
 *  supaya operasi tambah/kurang hari aman tanpa terpengaruh jam. */
function todayInTimezone() {
  const dateStr = new Date().toLocaleDateString('en-CA', { timeZone: TIMEZONE }); // "YYYY-MM-DD"
  return new Date(`${dateStr}T00:00:00Z`);
}

function toKey(date) {
  return date.toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function addDays(date, amount) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + amount);
  return result;
}

function startOfWeek(date) {
  // Minggu dimulai Senin (konvensi Indonesia)
  const day = date.getUTCDay(); // 0=Minggu ... 6=Sabtu
  const diffToMonday = (day + 6) % 7;
  return addDays(date, -diffToMonday);
}

function startOfMonth(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

function endOfMonth(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0));
}

/** Daftar semua tanggal (key) dari start s.d. end, inklusif. */
function dateRangeKeys(start, end) {
  const keys = [];
  let cursor = new Date(start);
  while (cursor.getTime() <= end.getTime()) {
    keys.push(toKey(cursor));
    cursor = addDays(cursor, 1);
  }
  return keys;
}

async function handleGet(env) {
  const today = todayInTimezone();
  const yesterday = addDays(today, -1);

  const thisWeekStart = startOfWeek(today);
  const lastWeekStart = addDays(thisWeekStart, -7);
  const lastWeekEnd = addDays(thisWeekStart, -1);

  const thisMonthStart = startOfMonth(today);
  const lastMonthAnchor = addDays(thisMonthStart, -1);
  const lastMonthStart = startOfMonth(lastMonthAnchor);
  const lastMonthEnd = endOfMonth(lastMonthAnchor);

  const ranges = {
    today: [today, today],
    yesterday: [yesterday, yesterday],
    thisWeek: [thisWeekStart, today],
    lastWeek: [lastWeekStart, lastWeekEnd],
    thisMonth: [thisMonthStart, today],
    lastMonth: [lastMonthStart, lastMonthEnd],
  };

  // Kumpulkan semua tanggal unik yang perlu dibaca, supaya tiap tanggal
  // hanya dibaca satu kali dari KV meskipun dipakai di beberapa rentang.
  const uniqueDateKeys = new Set();
  for (const [start, end] of Object.values(ranges)) {
    for (const key of dateRangeKeys(start, end)) {
      uniqueDateKeys.add(key);
    }
  }

  const dateKeysArray = Array.from(uniqueDateKeys);
  const values = await Promise.all(
    dateKeysArray.map((key) => env.VISITS_KV.get(`d:${key}`))
  );

  const dailyCounts = new Map();
  dateKeysArray.forEach((key, i) => {
    dailyCounts.set(key, parseInt(values[i] || '0', 10) || 0);
  });

  function sumRange(start, end) {
    let sum = 0;
    for (const key of dateRangeKeys(start, end)) {
      sum += dailyCounts.get(key) || 0;
    }
    return sum;
  }

  const totalRaw = await env.VISITS_KV.get('total');
  const total = parseInt(totalRaw || '0', 10) || 0;

  const stats = {
    today: sumRange(...ranges.today),
    yesterday: sumRange(...ranges.yesterday),
    thisWeek: sumRange(...ranges.thisWeek),
    lastWeek: sumRange(...ranges.lastWeek),
    thisMonth: sumRange(...ranges.thisMonth),
    lastMonth: sumRange(...ranges.lastMonth),
    total,
  };

  return new Response(JSON.stringify(stats), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

async function handlePost(env) {
  const today = todayInTimezone();
  const dayKey = `d:${toKey(today)}`;

  const [currentDayRaw, currentTotalRaw] = await Promise.all([
    env.VISITS_KV.get(dayKey),
    env.VISITS_KV.get('total'),
  ]);

  const newDayCount = (parseInt(currentDayRaw || '0', 10) || 0) + 1;
  const newTotal = (parseInt(currentTotalRaw || '0', 10) || 0) + 1;

  await Promise.all([
    env.VISITS_KV.put(dayKey, String(newDayCount)),
    env.VISITS_KV.put('total', String(newTotal)),
  ]);

  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
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
    return await handleGet(context.env);
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
    return await handlePost(context.env);
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
