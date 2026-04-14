import { NextResponse } from 'next/server'

type Body = {
  name?: string
  email?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const data: Body = await req.json()

    const { name = 'Anonymous', email = '', message = '' } = data

    if (!message || !message.trim()) {
      return NextResponse.json({ ok: false, error: 'Message is empty' }, { status: 400 })
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7496240217:AAH5l8JOGEHoiOJCV6a8B9C7GfEVIOa6F5E'
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '1706665720'

    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json({ ok: false, error: 'Telegram bot token not configured' }, { status: 500 })
    }

    const text = `New message from ${name}${email ? ` (${email})` : ''}:\n\n${message}`

    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    })

    const payload = await res.json()

    if (!res.ok || payload.ok === false) {
      return NextResponse.json({ ok: false, error: payload }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
