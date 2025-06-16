'use client'
import { PORTFOLIO_CARDS } from "./components/XpCard";
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { HeroGrid } from "./components/HeroGrid";
import { motion } from 'motion/react'
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroGrid />
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen py-20 px-4 md:px-8">
        <h2 className={`${styles.pixel} text-4xl md:text-5xl mb-12 text-center`}>
          GALLERY
        </h2>
        <div className="mt-8 mb-16">
          <h3>  Illustrations</h3>
          <HorizontalScrollCarousel cards={PORTFOLIO_CARDS} />
        </div>

        <div className={`${styles.mobileContainer} mt-16`}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white/70"
          >
            More coming soon...
          </motion.p>
        </div>
      </section>
    </main>
  );
}
