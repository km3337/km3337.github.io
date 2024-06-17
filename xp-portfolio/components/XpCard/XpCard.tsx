'use client'
import React from 'react';
import "xp.css/dist/XP.css";

export interface XpCardProps {
    title: string,
    children?: any;
}

export const XpCard = ({ title, children }: XpCardProps) => {
    return (
        <>
            <div className="window" style={{ width: 300 }}>
                <div className="title-bar">
                    <div className="title-bar-text">{title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <p>Example children!</p>
                    {children}
                </div>
            </div>
        </>
    )
}