'use client'
import { PORTFOLIO_CARDS } from "./components/XpCard";
import { HorizontalScrollCarousel } from "./components/HorizontalScrollCarousel";
import { HeroGrid } from "./components/HeroGrid";
import { AnimatePresence, motion } from 'motion/react'
import { XpCardProps } from "./components/XpCard/XpCard";
import styles from "./page.module.scss";

// Sample data for Creative Direction carousel
const creativeDirectionCards: XpCardProps[] = [
  {
    title: "Black Lives Matter Campaign",
    description: "Social justice campaign design and visual identity",
    date: "2020",
    imgSrc: "/black lives matter big.png"
  },
  {
    title: "Canal Street Market Branding",
    description: "Brand identity and creative direction for NYC market",
    date: "2021",
    imgSrc: "/canal street market.png"
  },
  {
    title: "NNYC Visual Identity",
    description: "New York creative collective branding project",
    date: "2022",
    imgSrc: "/nnyc.png"
  },
  {
    title: "Machine of the Year",
    description: "Annual creative showcase and exhibition design",
    date: "2023",
    imgSrc: "/machine of the year full.png"
  }
];

// Sample data for Illustration carousel
const illustrationCards: XpCardProps[] = [
  {
    title: "IGOR Portrait Series",
    description: "Digital illustration inspired by Tyler, The Creator's album",
    date: "2021",
    imgSrc: "/IGOR.png"
  },
  {
    title: "Flossquiat",
    description: "Modern take on Basquiat's artistic style",
    date: "2020",
    imgSrc: "/flossquiat.png"
  },
  {
    title: "Sade Portrait",
    description: "Digital portrait of the iconic R&B artist",
    date: "2022",
    imgSrc: "/sade.png"
  },
  {
    title: "Gon Character Design",
    description: "Anime-inspired character illustration",
    date: "2021",
    imgSrc: "/gon fixed.png"
  },
  {
    title: "Portrait 2021",
    description: "Personal portrait series exploring identity",
    date: "2021",
    imgSrc: "/Kris 2021.png"
  }
];

// Sample data for Animation carousel
const animationCards: XpCardProps[] = [
  {
    title: "Pool Animation",
    description: "Animated short featuring water dynamics",
    date: "2023",
    imgSrc: "/pool animation preview.png"
  },
  {
    title: "Rainbow Telfar Loop",
    description: "Colorful animated logo treatment",
    date: "2022",
    imgSrc: "/rainbow telfar.gif"
  },
  {
    title: "DOOMSDAY Animation",
    description: "Dystopian themed motion graphics piece",
    date: "2023",
    imgSrc: "/DOOMSDAY still.png"
  },
  {
    title: "Train Station Study",
    description: "Urban environment animation study",
    date: "2022",
    imgSrc: "/train still.png"
  },
  {
    title: "Hope You Get Rich",
    description: "Animated sticker design with positive messaging",
    date: "2023",
    imgSrc: "/HOPE YOU GET RICH STICKER .gif"
  }
];

// Sample data for Merchandise carousel
const merchandiseCards: XpCardProps[] = [
  {
    title: "Hello World Tee",
    description: "Programming-inspired streetwear design",
    date: "2023",
    imgSrc: "/hello world tee final.png"
  },
  {
    title: "NULL Inside Collection",
    description: "Minimalist tech-inspired apparel line",
    date: "2022",
    imgSrc: "/NULL_Inside white.png"
  },
  {
    title: "Bushwick Bear Design",
    description: "Brooklyn neighborhood mascot merchandise",
    date: "2021",
    imgSrc: "/bushwick bear.png"
  },
  {
    title: "Rainbow Telfar Bag Series",
    description: "Colorful luxury handbag collaboration concept",
    date: "2022",
    imgSrc: "/rainbow telfar blue.png"
  },
  {
    title: "Pilots Finished Apparel",
    description: "Aviation-themed streetwear collection",
    date: "2023",
    imgSrc: "/pilots finished.png"
  },
  {
    title: "Posted Shades Collection",
    description: "Sunglasses and eyewear design series",
    date: "2023",
    imgSrc: "/posted shades preview.png"
  }
];

const CreativeDirectionCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Creative Direction </h3>
      <HorizontalScrollCarousel cards={creativeDirectionCards} />
    </div>
  )
}

const IllustrationCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Illustration </h3>
      <HorizontalScrollCarousel cards={illustrationCards} />
    </div>
  )
}


const AnimationCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Animation </h3>
      <HorizontalScrollCarousel cards={animationCards} />
    </div>
  )
}

const MerchandiseCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className={`${styles.subHeading} text-md md:text-lg mb-12 text-center`}> Merchandise </h3>
      <HorizontalScrollCarousel cards={merchandiseCards} />
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
