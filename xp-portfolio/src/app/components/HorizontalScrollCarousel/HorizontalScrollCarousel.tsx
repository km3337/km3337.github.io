'use client'
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useState, useCallback } from "react";
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

    // Drag functionality state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply for faster scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
    }, [isDragging, startX, scrollLeft]);

    // Touch events for mobile
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDragging || !containerRef.current) return;
        const x = e.touches[0].pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    }, [isDragging, startX, scrollLeft]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    return (
        <div className="relative w-full">

            {/* Cards container */}
            <div
                ref={containerRef}
                className={`flex snap-x snap-mandatory ${styles.hideVerticalScrollbar} ${styles.draggable}`}
                style={{
                    WebkitOverflowScrolling: 'touch',
                    cursor: 'grab'
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
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