'use client'

import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import 'xp.css/dist/XP.css'
import styles from './ContactXpForm.module.css'

const CONTACT_FORM_NAME = 'contact'

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

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            setBanner(null)
            setPending(true)
            setStatusLine('Sending…')

            try {
                const formData = new FormData(event.currentTarget)
                const payload = new URLSearchParams()
                for (const [key, value] of formData.entries()) {
                    payload.append(key, String(value))
                }

                const res = await fetch('/__forms.html', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: payload.toString(),
                })

                if (res.ok) {
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

                setBanner({
                    type: 'error',
                    text: 'Something went wrong. Please try again.',
                })
                setStatusLine('Error')
            } catch {
                setBanner({
                    type: 'error',
                    text: 'Network error. Please try again.',
                })
                setStatusLine('Offline')
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
                    <div className={`title-bar ${styles.titleBarCustom}`}>
                        <div className="title-bar-text">CONTACT</div>
                        <div className="title-bar-controls">
                            <button
                                type="button"
                                aria-label="Close"
                                onClick={() => router.push('/')}
                            />
                        </div>
                    </div>
                    <div className="window-body">
                        <form
                            className={styles.form}
                            name={CONTACT_FORM_NAME}
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="website"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
                            {banner && (
                                <p
                                    className={`${styles.alert} ${banner.type === 'error'
                                        ? styles.alertError
                                        : styles.alertSuccess
                                        }`}
                                    role="alert"
                                >
                                    {banner.text}
                                </p>
                            )}
                            <fieldset className={styles.fieldset}>
                                <legend>SEND A MESSAGE</legend>
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
                                    <fieldset>
                                        <textarea
                                            id="contact-inquiry"
                                            name="inquiry"
                                            value={inquiry}
                                            onChange={(e) => setInquiry(e.target.value)}
                                            rows={8}
                                            required
                                        />
                                    </fieldset>
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
