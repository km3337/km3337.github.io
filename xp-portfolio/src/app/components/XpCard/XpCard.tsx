'use client'
import React from 'react';
import "xp.css/dist/XP.css";
import styles from './XpCard.module.css'
import { motion } from "motion/react"

export interface XpCardProps {
    title: string;
    description: string;
    date: string;
    imgSrc: string;
    dimensionX?: number; // Made optional since we'll use responsive widths
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            duration: 0.4,
            bounce: 0.2
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.6,
            bounce: 0.3
        }
    }
};

// TODO: add redirect on help button click. add logic to hide card on close click.
// each XpCard should have a unique ID or TITLE
export const XpCard = ({ title, imgSrc, description, date }: XpCardProps) => {

    return (
        <motion.div
            id={`capture-${title}`}
            className={styles.cardContainer}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
        >
            <div className={styles.cardWrapper}>
                <div className={`window ${styles.windowCustom}`}>
                    <div className={`title-bar ${styles.titleBarCustom}`}>
                        <div className="title-bar-text truncate max-w-[80%]">{title}</div>
                        <div className="title-bar-controls">
                            <button
                                aria-label="Close"
                                className={styles.closeButton}
                            />
                        </div>
                    </div>
                    <motion.div
                        className="window-body p-0 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        <motion.img
                            src={imgSrc}
                            alt={title}
                            className={styles.cardImage}
                            loading="lazy"
                            initial={{ scale: 1.0 }}
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                    <div className={`status-bar ${styles.statusBarCustom}`}>
                        <p className="status-bar-field truncate text-md">{description}</p>
                        <p className="status-bar-field whitespace-nowrap">{date}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};