import { motion } from "motion/react"

export const Tile = () => {

    return (
        <motion.div
            whileHover={{
                zIndex: 1,
                backgroundColor: ["#00573D", "#004530", "#003424", "002218"],
            }}
            whileTap={{
                zIndex: 1,
                backgroundColor: ["#00573D", "#004530", "#003424", "002218"]
            }}
            transition={{
                duration: 2,
                ease: "easeIn",
            }}
            className="aspect-square bg-neutral-950 border-solid border-1 border-neutral-900"
        />
    )
}
export default Tile