import { Suspense } from 'react';

async function getViews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/api/views`, {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return (await res.json()) as { views: number };
}

async function ViewsBadge() {
  const data = await getViews();
  if (!data) return <span className="text-xs text-white/45">views: —</span>;
  return (
    <span className="text-xs text-white/45">views: {data.views.toLocaleString()}</span>
  );
}

export function ViewCounter() {
  return (
    <Suspense fallback={<span className="text-xs text-white/45">views: …</span>}>
      <ViewsBadge />
    </Suspense>
  );
}
