import { NextResponse } from 'next/server';
import { z } from 'zod';

const BodySchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email().max(120),
  message: z.string().min(1).max(2000),
});

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: 'Telegram not configured (missing env vars)' },
      { status: 500 }
    );
  }

  const json = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { name, email, message } = parsed.data;
  const text = `📩 Portfolio contact\n\nName: ${name}\nEmail: ${email}\n\n${message}`;

  const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!tgRes.ok) {
    const details = await tgRes.text().catch(() => '');
    return NextResponse.json(
      { error: 'Failed to send Telegram message', details },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
