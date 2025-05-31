'use client'
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { XpCard, XpCardProps } from '../XpCard'
import styles from './HorizontalScrollCarousel.module.css'

export interface HorizontalScrollCarouselProps {
    cards: XpCardProps[];
}

export const HorizontalScrollCarousel = ({ cards }: HorizontalScrollCarouselProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollXProgress } = useScroll({
        container: containerRef,
    });

    // Transform for progress indicator
    const scaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);

    return (
        <div className="relative w-full">
            {/* Progress bar */}
            {/* <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
                style={{ scaleX }}
            /> */}

            {/* Cards container */}
            <div
                ref={containerRef}
                className={`flex overflow-x-scroll snap-x snap-mandatory ${styles.hideScrollbar}`}
                style={{
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                <div className="flex gap-14 p-6 min-w-full">
                    {cards.map((card, index) => (
                        <div
                            key={`${card.title}-${index}`}
                            className="snap-center shrink-0 first:pl-8 last:pr-8"
                        >
                            <XpCard
                                title={card.title}
                                imgSrc={card.imgSrc}
                                description={card.description}
                                date={card.date}
                                dimensionX={card.dimensionX}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 