'use client'
import React from 'react';
import styles from './NavigationBar.module.scss'
import HomeIcon from '../Icons/HomeIcon.svg'
import InfoIcon from '../Icons/InfoIcon.svg'
import ShopIcon from '../Icons/ShopIcon.svg'
import ContactIcon from '../Icons/ContactIcon.svg'
import { useState } from "react"

export const NavigationBar = () => {
    const [activeID, setActiveID] = useState(1);
    // const isSelected = (ref) => 
    return (
        <>
            <nav className="pb-6/10 mb-3/10 pointer-events-none fixed bottom-3 left-0 z-10 w-full md:left-11">
                <div className="container flex justify-center md:pl-15">
                    {/* backdrop */}
                    <div className="w-3/4 rounded-[1.475rem] bg-blue-600 shadow-xl md:w-1/2 pt-3">
                        {/* Navigation Items */}
                        <div className=" vt/nav pointer-events-auto overflow-x-auto scroll-smooth rounded-[inherit] p-1.5">
                            <div className="isolate grid grid-cols-[repeat(5,5.6875em)] md:grid-cols-[repeat(5,14.6875em)]">
                                <a id="1" className='flex flex-col items-center gap-1.5' href='/' onClick={() =>
                                    setActiveID(1)
                                }>
                                    <HomeIcon width="24" height="24" fill='white' />
                                    HOME
                                </a>
                                <a id="2" className='flex flex-col items-center gap-1.5' href='/about' onClick={() =>
                                    setActiveID(2)
                                }>
                                    <InfoIcon width="24" height="24" fill='white' />
                                    ABOUT
                                </a>
                                <a id="3" className='flex flex-col items-center gap-1.5' href="#" onClick={() =>
                                    setActiveID(3)
                                }>
                                    <ShopIcon width="24" height="24" fill='white' />
                                    SHOP
                                </a>
                                <a id="4" className='flex flex-col items-center gap-1.5' href="#" onClick={() =>
                                    setActiveID(4)
                                }>
                                    <ContactIcon width="24" height="24" fill='white' />
                                    CONTACT
                                </a>
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