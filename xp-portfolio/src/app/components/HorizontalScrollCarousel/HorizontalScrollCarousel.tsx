'use client'
import { motion, useTransform, useScroll } from "motion/react";
import React, { useRef } from "react";
import { XpCard, XpCardProps } from '../XpCard'

export interface HorizontalScrollCarouselProps {
    cards: XpCardProps[];

}

export const HorizontalScrollCarousel = ({ cards }: HorizontalScrollCarouselProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-95%"]);
    // replace cards with map from 
    return (
        <section ref={targetRef}>
            <div>
                <motion.div>
                    {cards.map((card) => {
                        return <XpCard
                            title={card.title}
                            content={card.content}
                            description={card.description}
                            date={card.date}
                            dimensionX={card.dimensionX}

                        />
                    })}

                </motion.div>
            </div>
        </section>
    );
};


