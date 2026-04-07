# my-portfolio

Next.js (App Router) + TypeScript + Tailwind + D3.

## Dev

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: http://localhost:3000

## Contact → Telegram

Set env vars:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

The contact form posts to `/api/contact`, which forwards messages to Telegram.

## View counter

`/api/views` increments a counter.

Recommended storage (prod): **Upstash Redis**

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

If Upstash is not configured (e.g. local dev), it falls back to an in-memory counter.
