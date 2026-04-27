'use client'
import { useState, useCallback } from "react";
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { HeroGrid } from "./components/HeroGrid";
import { XpCardModal } from "./components/XpCardModal";
import { motion } from 'motion/react'
import styles from "./page.module.scss";
import { CREATIVE_DIRECTION_CARDS, ILLUSTRATION_CARDS, ANIMATION_CARDS, PRODUCT_CARDS } from "./components/XpCard/constants";
import type { XpCardProps } from "./components/XpCard";


const CreativeDirectionCarousel = ({ onCardSelect }: { onCardSelect: (card: XpCardProps) => void }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Creative Direction </h3>
      <HorizontalScrollCarousel cards={CREATIVE_DIRECTION_CARDS} onCardSelect={onCardSelect} />
    </div>
  )
}

const IllustrationCarousel = ({ onCardSelect }: { onCardSelect: (card: XpCardProps) => void }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Illustration </h3>
      <HorizontalScrollCarousel cards={ILLUSTRATION_CARDS} onCardSelect={onCardSelect} />
    </div>
  )
}


const AnimationCarousel = ({ onCardSelect }: { onCardSelect: (card: XpCardProps) => void }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Animation </h3>
      <HorizontalScrollCarousel cards={ANIMATION_CARDS} onCardSelect={onCardSelect} />
    </div>
  )
}

const ProductCarousel = ({ onCardSelect }: { onCardSelect: (card: XpCardProps) => void }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Products </h3>
      <HorizontalScrollCarousel cards={PRODUCT_CARDS} onCardSelect={onCardSelect} />
    </div>
  )
}
export default function Home() {
  const [selectedModal, setSelectedModal] = useState<XpCardProps | null>(null);
  const openModal = useCallback((card: XpCardProps) => {
    setSelectedModal(card);
  }, []);
  const closeModal = useCallback(() => {
    setSelectedModal(null);
  }, []);

  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroGrid />
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen py-20 px-4 md:px-8">
        <h2 className={`${styles.heading} text-5xl sm:text-7xl md:text-9xl mb-12 text-center`}>
          GALLERY
        </h2>
        <motion.div className=" flex flex-col mt-8 mb-16 gap-16">

          <CreativeDirectionCarousel onCardSelect={openModal} />
          <ProductCarousel onCardSelect={openModal} />
          <AnimationCarousel onCardSelect={openModal} />
          <IllustrationCarousel onCardSelect={openModal} />

        </motion.div>
      </section>
      <XpCardModal card={selectedModal} onClose={closeModal} />
    </main>
  );
}
