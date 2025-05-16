'use client'
import { PORTFOLIO_CARDS } from "./components/XpCard";
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { useCheckIsMobile } from "./hooks/useMobileSize";
import { HeroGrid } from "./components/HeroGrid";
import { motion } from 'motion/react'
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroGrid />
      <h2 className={styles.pixel}>
        GALLERY
      </h2>
      <HorizontalScrollCarousel cards={PORTFOLIO_CARDS} />

      <div className={styles.mobileContainer}>

        {/* move into gallery section component */}
        <motion.p>
          coming soon
        </motion.p>

      </div>
    </main >
  );
}
