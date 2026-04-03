import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const KEY = 'portfolio:views';

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

async function incrViews(): Promise<number> {
  // Upstash Redis is the intended production storage.
  // In local dev without env vars, fall back to a process-global counter.
  const redis = getRedis();
  if (!redis) {
    const g = globalThis as unknown as { __views?: number };
    g.__views = (g.__views ?? 0) + 1;
    return g.__views;
  }

  const v = await redis.incr(KEY);
  return typeof v === 'number' ? v : Number(v);
}

async function getViews(): Promise<number> {
  const redis = getRedis();
  if (!redis) {
    const g = globalThis as unknown as { __views?: number };
    return g.__views ?? 0;
  }

  const v = await redis.get<number>(KEY);
  return v ?? 0;
}

export async function GET() {
  // GET increments (simple). If you want "unique per day", we can change this.
  const views = await incrViews();
  return NextResponse.json({ views }, { headers: { 'cache-control': 'no-store' } });
}

export async function HEAD() {
  const views = await getViews();
  return new Response(null, {
    status: 200,
    headers: {
      'x-views': String(views),
      'cache-control': 'no-store',
    },
  });
}
