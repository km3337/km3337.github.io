'use client'

import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import 'xp.css/dist/XP.css'
import styles from './ContactXpForm.module.css'

const CONTACT_EMAIL = 'kmentor@nullnyc.com'

function buildMailtoUrl(from: string, subject: string, inquiry: string): string {
    const body = `From: ${from}\n\n${inquiry}`
    const params = new URLSearchParams({
        subject: subject.trim() || 'Portfolio inquiry',
        body,
    })
    return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export function ContactXpForm() {
    const router = useRouter()
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [inquiry, setInquiry] = useState('')
    const [website, setWebsite] = useState('')
    const [pending, setPending] = useState(false)
    const [statusLine, setStatusLine] = useState('Ready')
    const [banner, setBanner] = useState<{
        type: 'success' | 'error'
        text: string
    } | null>(null)

    const submit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setBanner(null)
            setPending(true)
            setStatusLine('Sending…')

            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        from,
                        subject,
                        inquiry,
                        website,
                    }),
                })

                const data = (await res.json().catch(() => ({}))) as {
                    ok?: boolean
                    error?: string
                }

                if (res.ok && data.ok) {
                    setBanner({
                        type: 'success',
                        text: 'Message sent. Thanks for reaching out!',
                    })
                    setFrom('')
                    setSubject('')
                    setInquiry('')
                    setStatusLine('Message sent')
                    return
                }

                if (res.status === 503 && data.error === 'not_configured') {
                    window.location.href = buildMailtoUrl(from, subject, inquiry)
                    setStatusLine('Opening mail app…')
                    return
                }

                setBanner({
                    type: 'error',
                    text:
                        data.error === 'invalid_from'
                            ? 'Please enter a valid email address.'
                            : data.error === 'invalid_subject'
                              ? 'Please add a subject.'
                              : data.error === 'invalid_inquiry'
                                ? 'Please add your inquiry.'
                                : 'Something went wrong. Try again or use your email app.',
                })
                setStatusLine('Error')
            } catch {
                window.location.href = buildMailtoUrl(from, subject, inquiry)
                setStatusLine('Opening mail app…')
            } finally {
                setPending(false)
            }
        },
        [from, subject, inquiry, website]
    )

    return (
        <div className={`${styles.pageShell} egg-shell-backdrop egg-shell-contact`}>
            <div className={styles.page}>
            <div className={`window ${styles.windowWrap}`}>
                <div className="title-bar">
                    <div className="title-bar-text">Contact</div>
                    <div className="title-bar-controls">
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => router.push('/')}
                        />
                    </div>
                </div>
                <div className="window-body">
                    <form className={styles.form} onSubmit={submit} noValidate>
                        {banner && (
                            <p
                                className={`${styles.alert} ${
                                    banner.type === 'error'
                                        ? styles.alertError
                                        : styles.alertSuccess
                                }`}
                                role="alert"
                            >
                                {banner.text}
                            </p>
                        )}
                        <fieldset className={styles.fieldset}>
                            <legend>Send a message</legend>
                            <input
                                type="text"
                                name="website"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                                className={styles.honeypot}
                                aria-hidden="true"
                            />
                            <div className={`field-row-stacked ${styles.stacked}`}>
                                <label htmlFor="contact-from">From:</label>
                                <input
                                    id="contact-from"
                                    type="email"
                                    name="from"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    placeholder="enter your email"
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div className={`field-row-stacked ${styles.stacked}`}>
                                <label htmlFor="contact-subject">Subject:</label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={`field-row-stacked ${styles.stacked}`}>
                                <label htmlFor="contact-inquiry">Inquiry:</label>
                                <textarea
                                    id="contact-inquiry"
                                    name="inquiry"
                                    value={inquiry}
                                    onChange={(e) => setInquiry(e.target.value)}
                                    rows={8}
                                    required
                                />
                            </div>
                        </fieldset>
                        <div className={styles.actions}>
                            <button type="submit" disabled={pending}>
                                {pending ? 'Sending…' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="status-bar">
                    <p className={`status-bar-field ${styles.statusHint}`}>
                        {statusLine}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
