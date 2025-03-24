import { motion } from "motion/react"
import { Tile } from '../Tile'

export const HeroGrid = () => {
    return (
        <>
            <section className="w-full grid grid-cols-30 h-screen overflow-y-clip">
                {Array.from(Array(40 * 12), (i) => (
                    <Tile key={i} />
                ))}
            </section>
            <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10">
                <motion.img
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    width={250}
                    src="/NULL_Inside white.png"
                />
            </div>

        </>
    )
}

export default HeroGrid;