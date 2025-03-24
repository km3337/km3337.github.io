import { motion } from "motion/react"
// import { useState } from 'react'

export const Tile = () => {
    // [isActive, setIsActive] = useState<boolean>(false);

    return (
        <motion.div
            whileHover={{
                zIndex: 1,
                backgroundColor: ["#00573D", "#004530", "#003424", "002218"],
            }}
            transition={{
                duration: 2,
                ease: "easeIn",
            }}
            className="aspect-square bg-neutral-950 border-solid border-neutral-900"
        />
    )
}
export default Tile