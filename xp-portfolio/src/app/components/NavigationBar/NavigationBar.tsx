'use client'
import React from 'react';
import styles from './NavigationBar.module.scss'
import HomeIcon from '../Icons/HomeIcon.svg'
import InfoIcon from '../Icons/InfoIcon.svg'
import ShopIcon from '../Icons/ShopIcon.svg'
import PaperPlaneIcon from '../Icons/PaperPlaneIcon.svg'
import * as motion from "motion/react-client"
import { useState, useEffect } from "react"

export const NavigationBar = () => {
    const [activeItem, setActiveItem] = useState("home");

    const handleClick = (name: string) => {
        setActiveItem(name)
    };

    useEffect((): void => {
        setActiveItem(activeItem)

    }, [activeItem, setActiveItem]);

    const activeText = "text-l  text-white md:text-md";
    return (
        <>
            <nav className="pb-6/10 mb-3/10 pointer-events-none fixed bottom-3 left-0 z-10 w-full md:left-11">
                <div className="container flex justify-center md:pl-15">
                    {/* backdrop */}
                    <div className="w-3/4 rounded-[1.475rem] bg-blue-600 shadow-xl md:w-1/2">
                        {/* Navigation Items */}
                        <div className=" vt/nav pointer-events-auto overflow-x-auto scroll-smooth rounded-[inherit] p-1.5">
                            <div className="isolate grid grid-cols-[repeat(5,5.6875em)] md:grid-cols-[repeat(5,14.6875em)]">
                                <motion.a
                                    id="1"
                                    className="flex flex-col items-center gap-1.5 pt-3"
                                    href='/'
                                    onClick={() =>
                                        handleClick("home")
                                    }
                                    whileTap={{ y: -10, transition: { type: "spring" } }}
                                >
                                    <HomeIcon width="24" height="24" fill='white' />
                                    <span className={activeText}>HOME</span>
                                </motion.a>
                                <motion.a
                                    id="2"
                                    className='flex flex-col items-center gap-1.5 pt-3'
                                    href='/about'
                                    onClick={() =>
                                        setActiveItem("about")
                                    }
                                    whileTap={{ y: -10, transition: { type: "spring" } }}
                                >
                                    <InfoIcon width="24" height="24" fill='white' />
                                    <span className={activeText}>ABOUT</span>
                                </motion.a>
                                <motion.a
                                    id="3"
                                    className='flex flex-col items-center gap-1.5 pt-3'
                                    href="https://nullnyc.com/collections/all"
                                    target="_blank"
                                    onClick={() =>
                                        setActiveItem("shop")
                                    }
                                    whileTap={{ y: -10, transition: { type: "spring" } }}>
                                    <ShopIcon width="24" height="24" fill='white' />
                                    <span className={activeText}>SHOP</span>
                                </motion.a>
                                <motion.a id="4" className='flex flex-col items-center gap-1.5 pt-3' href="#" onClick={() =>
                                    setActiveItem("contact")
                                } whileTap={{ y: -10, transition: { type: "spring" } }}>
                                    <PaperPlaneIcon width="24" height="24" fill='white' />
                                    <span className={activeText}>CONTACT</span>
                                </motion.a>
                            </div>
                        </div>

                    </div>
                </div>
            </nav >
        </>
    )

};

/*
wrapper for a styled item in the navigation bar. 
*/
const NavItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <a className={styles.navItem}>
            {children}
        </a>
    );
}