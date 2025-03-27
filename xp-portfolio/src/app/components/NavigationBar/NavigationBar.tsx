import React from 'react';
import styles from './NavigationBar.module.scss'

export const NavigationBar = () => {
    return (
        <>

            <nav className="~pb-6/10 pointer-events-none fixed bottom-0 left-0 z-10 w-full pt-12">
                <div className="container flex justify-center">
                    {/* rebuild nav with tailwind */}
                </div>
                <div className="max-w-full rounded-[1.375rem] bg-zinc-100/90 ring ring-black/[5%] backdrop-blur-xl backdrop-saturate-[140%] dark:border dark:border-white/[8%] dark:bg-zinc-950/90 dark:ring-0">
                    <ul className={styles.root}>
                        <NavItem>HOME</NavItem>
                        <NavItem>ABOUT</NavItem>
                        <NavItem>CONTACT</NavItem>
                        <NavItem>SHOP</NavItem>
                    </ul>
                </div>
            </nav>
        </>
    )

};

/*
wrapper for a styled item in the navigation bar. 
*/
const NavItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className={styles.navItem}>
            {children}
        </li>
    );
}