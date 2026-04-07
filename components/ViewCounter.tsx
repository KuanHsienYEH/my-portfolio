import { Suspense } from 'react';

async function getViews() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '');
  try {
    const res = await fetch(`${base}/api/views`, { cache: 'no-store' });
    if (!res.ok) return null;
    return (await res.json()) as { views: number };
  } catch {
    return null;
  }
}

async function ViewsBadge() {
  const data = await getViews();
  if (!data) return <span className="text-xs text-muted-foreground">views: —</span>;
  return (
    <span className="text-xs text-muted-foreground">Visitors: {data.views.toLocaleString()}</span>
  );
}

export function ViewCounter() {
  return (
    <Suspense fallback={<span className="text-xs text-muted-foreground">Visitors: …</span>}>
      <ViewsBadge />
    </Suspense>
  );
}
