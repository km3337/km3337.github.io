import React from 'react';
import styles from './NavigationBar.module.scss'

export const NavigationBar = () => {
    return (
        <>
            <ul className={styles.root}>
                <NavItem>HOME</NavItem>
                <NavItem>ABOUT</NavItem>
                <NavItem>CONTACT</NavItem>
                <NavItem>SHOP</NavItem>
            </ul>

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