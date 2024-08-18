'use client'
import React from 'react';
import "xp.css/dist/XP.css";
import styles from './XpCard.module.css'

export interface XpCardProps {
    title: string,
    description: string,
    date: string,
    children?: any;
    dimensionX: number;
}
// TODO: add framer motion hover. add redirect on help button click. add logic to hide card on close click.
export const XpCard = ({ title, children, description, date, dimensionX }: XpCardProps) => {
    return (
        <div className={styles.XpCardWrapper} style={{ width: dimensionX }}>
            <div className="window" style={{ width: dimensionX }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Help"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    {children}
                </div>
                <div className="status-bar">
                    <p className="status-bar-field">{description}</p>
                    <p className="status-bar-field">{date}</p>
                </div>
            </div>
        </div >
    )
}