'use client'
import React from 'react';
import Image from 'next/image';
import styles from './HorizontalLogos.module.css';

export interface Logo {
    src: string;
    alt: string;
}

export interface HorizontalLogosProps {
    logos?: Logo[];
    speed?: number; // Animation duration in seconds
    logoHeight?: number; // Consistent height for all logos
}

const DEFAULT_LOGOS: Logo[] = [
    { src: '/logos/cooper-hewitt.png', alt: 'Cooper Hewitt Smithsonian Design Museum' },
    { src: '/logos/sofar-sounds.png', alt: 'Sofar Sounds' },
    { src: '/logos/cuny.png', alt: 'CUNY' },
    { src: '/logos/jordan.png', alt: 'Jordan Brand' },
    { src: '/logos/giphy.png', alt: 'GIPHY' },
    { src: '/logos/eventbrite.png', alt: 'Eventbrite' },
    { src: '/logos/Timberland-Logo.png', alt: 'Timberland' },
];

export const HorizontalLogos: React.FC<HorizontalLogosProps> = ({
    logos = DEFAULT_LOGOS,
    speed = 30,
    logoHeight = 60,
}) => {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className={styles.container}>
            <div 
                className={styles.track}
                style={{ 
                    animationDuration: `${speed}s`,
                }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div 
                        key={`${logo.alt}-${index}`} 
                        className={styles.logoWrapper}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            height={logoHeight}
                            width={logoHeight * 2.5}
                            className={styles.logo}
                            style={{ 
                                height: logoHeight,
                                width: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HorizontalLogos;

