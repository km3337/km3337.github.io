import { NextResponse } from 'next/server'

const DEFAULT_TO = 'kmentor@nullnyc.com'

function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export async function POST(request: Request) {
    let body: unknown
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
    }

    if (!body || typeof body !== 'object') {
        return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 })
    }

    const { from, subject, inquiry, website } = body as Record<string, unknown>

    if (typeof website === 'string' && website.trim() !== '') {
        return NextResponse.json({ ok: true })
    }

    if (typeof from !== 'string' || !isValidEmail(from)) {
        return NextResponse.json({ ok: false, error: 'invalid_from' }, { status: 400 })
    }

    if (typeof subject !== 'string' || subject.trim().length === 0) {
        return NextResponse.json({ ok: false, error: 'invalid_subject' }, { status: 400 })
    }

    if (typeof inquiry !== 'string' || inquiry.trim().length === 0) {
        return NextResponse.json({ ok: false, error: 'invalid_inquiry' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO
    const apiKey = process.env.RESEND_API_KEY
    const fromAddr =
        process.env.RESEND_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

    if (!apiKey) {
        return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 })
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: fromAddr,
            to: [to],
            reply_to: from.trim(),
            subject: subject.trim(),
            text: `From: ${from.trim()}\n\n${inquiry.trim()}`,
        }),
    })

    if (!res.ok) {
        const detail = await res.text()
        return NextResponse.json(
            { ok: false, error: 'provider_error', detail },
            { status: 502 }
        )
    }

    return NextResponse.json({ ok: true })
}
