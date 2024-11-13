'use client'
import { motion, useTransform, useScroll } from "framer-motion";
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

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    // replace cards with map from 
    return (
        <section ref={targetRef} className="todo">
            <div className="todo-sticky">

                <motion.div style={{ x }} className="todo-flex">
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


