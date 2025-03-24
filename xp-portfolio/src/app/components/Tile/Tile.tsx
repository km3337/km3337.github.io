import { motion } from "motion/react"
// import { useState } from 'react'

export const Tile = () => {
    // [isActive, setIsActive] = useState<boolean>(false);

    return (
        <motion.div
            whileHover={{
                zIndex: 1,
                backgroundColor: "#00573D",
            }}
            transition={{
                duration: 10,
                ease: ["easeIn", "easeOut"],
            }}
            className="aspect-square bg-neutral-950 border-neutral-900"
        />
    )
}
export default Tile