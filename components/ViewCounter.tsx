import { Suspense } from 'react';
import { Redis } from '@upstash/redis';

const KEY = 'portfolio:views';

async function fetchViews(): Promise<number | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  try {
    const redis = new Redis({ url, token });
    const v = await redis.incr(KEY);
    return typeof v === 'number' ? v : Number(v);
  } catch {
    return null;
  }
}

async function ViewsBadge() {
  const views = await fetchViews();
  if (views === null) return null;
  return <span>{views.toLocaleString()} visitors</span>;
}

export function ViewCounter() {
  return (
    <Suspense fallback={<span>… visitors</span>}>
      <ViewsBadge />
    </Suspense>
  );
}
