'use client'
import { useState, useEffect } from 'react';

/**
 * a hook that checks the current screen size. 
 * the average max width for a mobile device is 768px wide
 * @returns if the current window is a mobile size.
 */
export const useCheckIsMobile = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return width <= 768;
}