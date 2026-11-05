import { motion } from "motion/react"
import { Tile } from '../Tile'
import DownArrowCubed from '../Icons/ArrowDownIcon.svg'
import { TAGLINE_ROLE, TAGLINE_DETAIL } from '../../constants'

export const HeroGrid = () => {
    return (
        <>
            <section className="w-full grid grid-cols-10 md:grid-cols-30 h-screen overflow-y-clip">
                {Array.from(Array(40 * 40), (_, index) => (
                    <Tile key={index} />
                ))}
            </section>
            <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10">
                <motion.img
                    initial={{ opacity: 0, y: 1500 }}
                    animate={{ opacity: 1, y: 0 }}
                    width={250}
                    src="/NULL_Inside white.png"
                    alt="NULL Inside"
                />
                {/* Font size shrinks on narrow phones so each half fits on one line */}
                <p className="md:max-w-xl px-4 text-center text-white text-[min(10px,calc((100vw-2rem)/38))] md:text-sm leading-relaxed font-[family-name:var(--font-press-start)]">
                    <span className="whitespace-nowrap">{TAGLINE_ROLE}</span>{' '}
                    <span className="whitespace-nowrap">{TAGLINE_DETAIL}</span>
                </p>
                <motion.a
                    href="#work"
                    aria-label="Scroll to work"
                    className="pointer-events-auto"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeIn",
                    }}
                >
                    <DownArrowCubed width={45} height={45} fill="white" />
                </motion.a>
            </div>
        </>
    )
}

export default HeroGrid;