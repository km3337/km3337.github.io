'use client'
import { PORTFOLIO_CARDS } from "./components/XpCard";
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { useCheckIsMobile } from "./hooks/useMobileSize";
import { HeroGrid } from "./components/HeroGrid";
import styles from "./page.module.scss";

export default function Home() {
  const isMobile = useCheckIsMobile();
  return (
    <main className="w-full flex flex-col">
      <HeroGrid />

      <div className={styles.mobileContainer}>
        <h2 className={styles.pixel}>
          GALLERY
        </h2>
        {/* move into gallery section component */}
        {isMobile ? <HorizontalScrollCarousel cards={PORTFOLIO_CARDS} /> : <h3> desktop view</h3>}
      </div>
    </main >
  );
}
