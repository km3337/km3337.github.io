'use client'
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { HeroGrid } from "./components/HeroGrid";
import { motion } from 'motion/react'
import styles from "./page.module.scss";
import { CREATIVE_DIRECTION_CARDS, ILLUSTRATION_CARDS, ANIMATION_CARDS, PRODUCT_CARDS } from "./components/XpCard/constants";


const CreativeDirectionCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Creative Direction </h3>
      <HorizontalScrollCarousel cards={CREATIVE_DIRECTION_CARDS} />
    </div>
  )
}

const IllustrationCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Illustration </h3>
      <HorizontalScrollCarousel cards={ILLUSTRATION_CARDS} />
    </div>
  )
}


const AnimationCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Animation </h3>
      <HorizontalScrollCarousel cards={ANIMATION_CARDS} />
    </div>
  )
}

const ProductCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Products </h3>
      <HorizontalScrollCarousel cards={PRODUCT_CARDS} />
    </div>
  )
}
export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroGrid />
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen py-20 px-4 md:px-8">
        <h2 className={`${styles.heading} text-8xl md:text-9xl mb-12 text-center`}>
          GALLERY
        </h2>
        <motion.div className=" flex flex-col mt-8 mb-16 gap-16">

          <CreativeDirectionCarousel />
          <ProductCarousel />
          <AnimationCarousel />
          <IllustrationCarousel />

        </motion.div>
      </section>
    </main>
  );
}
