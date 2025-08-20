'use client'
import { PORTFOLIO_CARDS } from "./components/XpCard";
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { HeroGrid } from "./components/HeroGrid";
import { AnimatePresence, motion } from 'motion/react'
import styles from "./page.module.scss";


const CreativeDirectionCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Creative Direction </h3>
      <HorizontalScrollCarousel cards={[]} />
    </div>
  )
}

const IllustrationCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Illustration </h3>
      <HorizontalScrollCarousel cards={[]} />
    </div>
  )
}


const AnimationCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Animation </h3>
      <HorizontalScrollCarousel cards={[]} />
    </div>
  )
}

const MerchandiseCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Merchandise </h3>
      <HorizontalScrollCarousel cards={[]} />
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
          <IllustrationCarousel />
          <MerchandiseCarousel />
          <AnimationCarousel />

        </motion.div>
      </section>
    </main>
  );
}
