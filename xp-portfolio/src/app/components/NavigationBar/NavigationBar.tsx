'use client'
import React, { useState, useEffect } from 'react';
import { HomeSvg, InfoSvg, PlaneSvg, ShopSvg } from '@/icons/'
import { motion } from "motion/react"

export const NavigationBar = () => {
    const [activeItem, setActiveItem] = useState("home");
    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };
    
    useEffect((): void => {
       setActiveItem(activeItem);
    }, [activeItem, setActiveItem]);
    
            
    const navItems = [
        { name: "home", label: "HOME", href: "/", icon: <HomeSvg />, external: false },
        { name: "about", label: "ABOUT", href: "/about", icon: <InfoSvg />, external: false },
        { name: "shop", label: "SHOP", href: "https://nullnyc.com/collections/all", icon: <ShopSvg/>, external: true },
        { name: "contact", label: "CONTACT", href: "#", icon: <PlaneSvg/>, external: false },
    ];

    return (
        <nav className="pb-6/10 mb-3/10 fixed bottom-3 left-0 z-10 w-full md:left-11">
            <div className="container flex justify-center md:pl-15">
                <div className="w-3/4 rounded-[1.475rem] bg-blue-600 shadow-xl md:w-1/2">
                    <div className="vt/nav overflow-x-auto scroll-smooth rounded-[inherit] p-1.5">
                        <div className="isolate grid grid-cols-[repeat(4,5.6875em)] md:grid-cols-[repeat(4,14.6875em)]">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    className={`flex flex-col items-center gap-1.5 pt-3 transition-colors ${
                                        "text-white font-bold"
                                    }`}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                    onClick={() => setActiveItem(item.name)}
                                    whileTap={{ y: -10, transition: { type: "spring" } }}
                                >
                                    {item.icon}
                                    <span className="text-l md:text-md">{item.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};