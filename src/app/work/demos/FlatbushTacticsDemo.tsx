'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import 'xp.css/dist/XP.css'
import styles from './FlatbushTacticsDemo.module.css'

// Flatbush Tactics demo window for the case study: a placeholder title
// screen (the game's digital rain behind Ali), a PLAY DEMO button into the
// web build at /flatbushTactics, and a waitlist form (Netlify Forms, see
// public/__forms.html).

const DEMO_URL = '/flatbushTactics/index.html'
const WAITLIST_FORM_NAME = 'waitlist'
const PLATFORMS = ['iPhone', 'Android', 'PC', 'Mac', 'Other']
const ART = '/work/flatbush-tactics'

// --- Digital rain: a port of the game's FTDigitalRain (scripts/ui/digital_rain.gd)
// Drawn at the game's 1x pixel size and scaled up by CSS with pixelated
// sampling, so it sits on the same pixel grid as the art.
const SCREEN_W = 180
const SCREEN_H = 320
const GLYPH_W = 5
const GLYPH_H = 7
const CELL_W = 8
const CELL_H = 9
const GLYPH_COUNT = 48
const HEAD = 'rgb(230,222,202)'
const GREENS = ['rgb(204,246,31)', 'rgb(150,198,65)', 'rgb(128,165,63)', 'rgb(66,127,59)', 'rgb(42,90,57)', 'rgb(31,55,54)']
const BLUES = ['rgb(155,240,253)', 'rgb(98,171,212)', 'rgb(88,128,204)', 'rgb(64,54,159)', 'rgb(61,37,59)']
const DENSITY = 0.8
const BLUE_SHARE = 0.15
const SPEED = [5, 16]
const TRAIL = [6, 22]

type Column = { head: number; speed: number; trail: number; blue: boolean; glyphs: number[] }

const rand = (min: number, max: number) => min + Math.random() * (max - min)

// Blocky 5x7 glyphs, generated like the game does (the pixel font has no katakana).
function makeGlyphs(): boolean[][] {
    const glyphs: boolean[][] = []
    for (let g = 0; g < GLYPH_COUNT; g++) {
        const pixels: boolean[] = []
        for (let y = 0; y < GLYPH_H; y++) {
            const row: boolean[] = []
            for (let x = 0; x < 3; x++) row.push(Math.random() < 0.5)
            // Mirror most glyphs left to right so they read as characters.
            const mirrored = Math.random() < 0.6
            pixels.push(row[0], row[1], row[2], mirrored ? row[1] : Math.random() < 0.5, mirrored ? row[0] : Math.random() < 0.5)
        }
        glyphs.push(pixels)
    }
    return glyphs
}

function useDigitalRain(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')
        if (!canvas || !context) return
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const glyphs = makeGlyphs()
        const rows = Math.ceil(SCREEN_H / CELL_H) + 1
        const respawn = (column: Column, anywhere: boolean) => {
            column.speed = rand(SPEED[0], SPEED[1])
            column.trail = Math.round(rand(TRAIL[0], TRAIL[1]))
            column.blue = Math.random() < BLUE_SHARE
            const gap = rows * (1 - DENSITY)
            column.head = anywhere ? rand(-gap, rows) : -rand(0, gap)
            column.glyphs = Array.from({ length: rows + TRAIL[1] }, () => Math.floor(Math.random() * GLYPH_COUNT))
        }
        const columns: Column[] = Array.from({ length: Math.ceil(SCREEN_W / CELL_W) }, () => {
            const column = { head: 0, speed: 0, trail: 0, blue: false, glyphs: [] } as Column
            respawn(column, true)
            return column
        })

        const draw = () => {
            context.clearRect(0, 0, SCREEN_W, SCREEN_H)
            columns.forEach((column, x) => {
                const head = Math.floor(column.head)
                const palette = column.blue ? BLUES : GREENS
                for (let i = 0; i < column.trail; i++) {
                    const row = head - i
                    if (row < 0 || row >= rows) continue
                    const shade = Math.min(palette.length - 1, Math.floor((i / column.trail) * palette.length))
                    context.fillStyle = i === 0 ? HEAD : palette[shade]
                    const glyph = glyphs[column.glyphs[row % column.glyphs.length]]
                    for (let p = 0; p < glyph.length; p++) {
                        if (glyph[p]) context.fillRect(x * CELL_W + (p % GLYPH_W), row * CELL_H + Math.floor(p / GLYPH_W), 1, 1)
                    }
                }
            })
        }

        if (reduceMotion) {
            draw()
            return
        }
        let last = performance.now()
        let frame = 0
        const tick = (now: number) => {
            const delta = Math.min(0.1, (now - last) / 1000)
            last = now
            for (const column of columns) {
                column.head += column.speed * delta
                if (column.head - column.trail > rows) respawn(column, false)
                if (Math.random() < 0.6 * delta) {
                    column.glyphs[Math.floor(Math.random() * column.glyphs.length)] = Math.floor(Math.random() * GLYPH_COUNT)
                }
            }
            draw()
            frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [canvasRef])
}

export function FlatbushTacticsDemo() {
    const rainRef = useRef<HTMLCanvasElement>(null)
    useDigitalRain(rainRef)

    const [email, setEmail] = useState('')
    const [platform, setPlatform] = useState('')
    const [website, setWebsite] = useState('')
    const [pending, setPending] = useState(false)
    const [statusLine, setStatusLine] = useState('Ready')
    const [banner, setBanner] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setBanner(null)
        if (!email.includes('@')) {
            setBanner({ type: 'error', text: 'Enter your email to join the waitlist.' })
            return
        }
        setPending(true)
        setStatusLine('Sending…')
        try {
            const payload = new URLSearchParams()
            for (const [key, value] of new FormData(event.currentTarget).entries()) payload.append(key, String(value))
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: payload.toString(),
            })
            if (res.ok) {
                setBanner({ type: 'success', text: "You're on the waitlist. We'll email you when there's news." })
                setEmail('')
                setPlatform('')
                setStatusLine('Joined')
            } else {
                setBanner({ type: 'error', text: 'Something went wrong. Please try again.' })
                setStatusLine('Error')
            }
        } catch {
            setBanner({ type: 'error', text: 'Network error. Please try again.' })
            setStatusLine('Offline')
        } finally {
            setPending(false)
        }
    }, [email])

    return (
        <div className={`window ${styles.window}`}>
            <div className="title-bar">
                <div className="title-bar-text">FlatbushTactics.exe</div>
                <div className="title-bar-controls">
                    <button type="button" aria-label="Minimize" />
                    <button type="button" aria-label="Maximize" />
                    <button type="button" aria-label="Close" />
                </div>
            </div>
            <div className={`window-body ${styles.body}`}>
                <a href={DEMO_URL} className={styles.screen} aria-label="Play the Flatbush Tactics demo">
                    <canvas ref={rainRef} width={SCREEN_W} height={SCREEN_H} className={styles.rain} aria-hidden="true" />
                    <img src={`${ART}/ali_portrait.png`} alt="Ali, the first playable freelancer" className={styles.portrait} />
                    <div className={styles.logo}>
                        <img src={`${ART}/logo_flatbush.png`} alt="Flatbush" />
                        <img src={`${ART}/logo_tactics.png`} alt="Tactics" />
                    </div>
                    <span className={styles.pressStart}>TAP TO PLAY</span>
                </a>

                <button type="button" className={styles.playButton} onClick={() => { window.location.href = DEMO_URL }}>
                    PLAY DEMO
                </button>
                <p className={styles.note}>Free browser demo. Best on a phone; sound on.</p>

                <form
                    name={WAITLIST_FORM_NAME}
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="website"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <input type="hidden" name="form-name" value={WAITLIST_FORM_NAME} />
                    <fieldset className={styles.fieldset}>
                        <legend>JOIN THE WAITLIST</legend>
                        {banner && (
                            <p className={`${styles.alert} ${banner.type === 'error' ? styles.alertError : styles.alertSuccess}`} role="alert">
                                {banner.text}
                            </p>
                        )}
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
                        <div className="field-row-stacked">
                            <label htmlFor="waitlist-email">Email:</label>
                            <input
                                id="waitlist-email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="field-row-stacked">
                            <label htmlFor="waitlist-platform">What would you play on?</label>
                            <select id="waitlist-platform" name="platform" value={platform} onChange={(e) => setPlatform(e.target.value)}>
                                <option value="">Choose one…</option>
                                {PLATFORMS.map((name) => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.actions}>
                            <button type="submit" disabled={pending}>{pending ? 'Joining…' : 'Join'}</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="status-bar">
                <p className="status-bar-field">{statusLine}</p>
                <p className="status-bar-field">Demo build</p>
            </div>
        </div>
    )
}
