'use client'
import React from 'react';
import "xp.css/dist/XP.css";
import styles from './XpCard.module.css'
import { motion, Variants } from "framer-motion"


export interface XpCardProps {
    title: string,
    description: string,
    date: string,
    children?: any;
    dimensionX: number;
}

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

// TODO: add redirect on help button click. add logic to hide card on close click.
export const XpCard = ({ title, children, description, date, dimensionX }: XpCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.25, stiffness: 400, damping: 17 }}
            whileHover={{ scale: 1.10 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.85 }}
            variants={cardVariants}
        >
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
        </motion.div>
    )
}