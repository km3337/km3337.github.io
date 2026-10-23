'use client'
import Link from 'next/link';
import "xp.css/dist/XP.css";
import { motion } from "motion/react"
import styles from './CaseStudyCard.module.css'
import type { CaseStudy } from '../../work/caseStudies';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 0.6, bounce: 0.3 }
    }
};

// XP window tile for the home page Case Studies section. Links to /work/<slug>.
export const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
    // Videos show their poster frame here; the case study page plays them.
    const cover = study.heroImage?.poster ?? (study.heroImage?.type !== "video" ? study.heroImage?.src : undefined);

    return (
        <motion.div
            className={styles.cardContainer}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <Link href={`/work/${study.slug}`} className={styles.cardLink}>
                <div className={`window ${styles.windowCustom}`}>
                    <div className="title-bar">
                        <div className="title-bar-text truncate max-w-[80%]">{study.title}</div>
                        <div className="title-bar-controls">
                            <button aria-hidden tabIndex={-1} aria-label="Maximize" />
                        </div>
                    </div>
                    <div className="window-body p-0 m-0 relative overflow-hidden">
                        {cover ? (
                            <motion.img
                                src={cover}
                                alt={study.heroImage?.alt ?? study.title}
                                className={`${styles.cover} ${study.heroImage?.contain ? styles.coverContain : ""}`}
                                loading="lazy"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.4 }}
                            />
                        ) : (
                            <div className={styles.coverFallback}>
                                <span>{study.title}</span>
                            </div>
                        )}
                    </div>
                    <div className={`status-bar ${styles.statusBar}`}>
                        <p className="status-bar-field truncate">{study.result}</p>
                        <p className="status-bar-field whitespace-nowrap">{study.year}</p>
                    </div>
                </div>
                <p className={styles.summary}>{study.summary}</p>
            </Link>
        </motion.div>
    );
};

export default CaseStudyCard;
