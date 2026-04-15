'use client'

import React, { useEffect, useId, useRef } from 'react'
import 'xp.css/dist/XP.css'
import styles from './XpCardModal.module.css'
import cardStyles from '../XpCard/XpCard.module.css'
import type { XpCardProps } from '../XpCard'

export interface XpCardModalProps {
    card: XpCardProps | null
    onClose: () => void
}

export function XpCardModal({ card, onClose }: XpCardModalProps) {
    const titleId = useId()
    const descId = useId()
    const closeButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!card) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)
        closeButtonRef.current?.focus()

        return () => {
            document.body.style.overflow = prevOverflow
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [card, onClose])

    if (!card) return null

    return (
        <div
            className={styles.backdrop}
            onClick={onClose}
            role="presentation"
        >
            <div
                className={styles.shell}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descId}
            >
                <div className={`window ${cardStyles.windowCustom} ${styles.modalWindow}`}>
                    <div className={`title-bar ${cardStyles.titleBarCustom}`}>
                        <div
                            id={titleId}
                            className="title-bar-text truncate max-w-[80%]"
                        >
                            {card.title}
                        </div>
                        <div className="title-bar-controls">
                            <button
                                ref={closeButtonRef}
                                type="button"
                                aria-label="Close"
                                className={cardStyles.closeButton}
                                onClick={onClose}
                            />
                        </div>
                    </div>
                    <div
                        className={`window-body p-0 relative overflow-hidden ${styles.modalBody}`}
                    >
                        <img
                            src={card.imgSrc}
                            alt={card.title}
                            className={cardStyles.cardImage}
                        />
                        <div id={descId} className={styles.details}>
                            <p className={styles.detailsText}>{card.description}</p>
                            <p className={styles.meta}>Year: {card.date}</p>
                        </div>
                    </div>
                    <div className={`status-bar ${cardStyles.statusBarCustom}`}>
                        <p className="status-bar-field truncate text-md">
                            {card.description}
                        </p>
                        <p className="status-bar-field whitespace-nowrap">{card.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
