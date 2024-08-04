'use client'
import React from 'react';
import "xp.css/dist/XP.css";

export interface XpCardProps {
    title: string,
    children?: any;
    dimensionX: number;
}
// TODO: add custom dimensions as props

export const XpCard = ({ title, children, dimensionX }: XpCardProps) => {
    return (
        <>
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
            </div>
        </>
    )
}