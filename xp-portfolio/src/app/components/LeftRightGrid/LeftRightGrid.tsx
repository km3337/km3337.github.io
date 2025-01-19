import React from 'react';
import { XpCard } from '../XpCard';
import styles from './CardsContainer.module.scss'

export const LeftRightGrid = () => {
    return (
        // replace with map function, replace XpCard props with content prop. 
        <div id={styles.cardsContainer}>
            <XpCard title="S.A.D.E." description="Unreleased graphic :D" date="March 2024" dimensionX={415}
                content={
                    <img
                        className={styles.logo}
                        src="/sade.png"
                        alt="Nullified"
                        width={400}
                        height={425}
                    />}
            />
            <XpCard title="SELF PORTRAIT" description="my first self portrait" date="April 2020" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/flossquiat.png"
                    alt="Nullified"
                    width={300}
                    height={315}
                />
            </XpCard>
            <XpCard title="SELF PORTRAIT (2)" description="final final" date="April 2021" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/kris 2021.png"
                    alt="Nullified"
                    width={300}
                    height={315}
                />
            </XpCard>
            <XpCard title="BLACK LIVES MATTER" description=" self explanatory " date="July 2020" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/black lives matter.png"
                    alt="Nullified"
                    width={300}
                    height={305}
                />
            </XpCard>
            <XpCard title="BEAR IN FLATBUSH" description=" NULL BEAR series " date="July 2023" dimensionX={415}>
                <img
                    className={styles.logo}
                    src="/null bear flatbush still.png"
                    alt="Nullified"
                    width={400}
                    height={405}
                />
            </XpCard>
            <XpCard title="BEAR IN BUSHWICK" description=" NULL BEAR series " date="May 2023" dimensionX={415}>
                <img
                    className={styles.logo}
                    src="/bushwick bear.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="BEAR IN JAPAN" description=" NULL BEAR series " date="July 2023" dimensionX={515}>
                <img
                    className={styles.logo}
                    src="/nnyc.png"
                    alt="Nullified"
                    width={500}
                    height={500}
                />
            </XpCard>
            <XpCard title="BEVERAGE" description=" Beverage series " date="September 2020" dimensionX={400}>
                <img
                    className={styles.logo}
                    src="/beverages1.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="BEVERAGE (2)" description=" Beverage series " date="September 2020" dimensionX={400}>
                <img
                    className={styles.logo}
                    src="/beverages2.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="BEVERAGE (3)" description=" Beverage series " date="September 2020" dimensionX={400}>
                <img
                    className={styles.logo}
                    src="/beverages3.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="CLICK BAIT" description=" Shonen jump tings" date="February 2021" dimensionX={410}>
                <img
                    className={styles.logo}
                    src="/gon fixed.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="IGOR" description="A BOY IS A GUN" date="February 2021" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/IGOR.png"
                    alt="Nullified"
                    width={300}
                    height={300}
                />
            </XpCard>
            <XpCard title="CANAL STREET MARKET" description="My first Pop up" date="June 2021" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/canal street market.png"
                    alt="Nullified"
                    width={300}
                    height={300}
                />
            </XpCard>
            <XpCard title="POOLSIDE WOO" description="Summertime in Canarsie" date="Jan 2021" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/pool animation preview.png"
                    alt="Nullified"
                    width={300}
                    height={300}
                />
            </XpCard>
            <XpCard title="POSTED" description="Single cover for Donnie Durag" date="April 2021" dimensionX={215}>
                <img
                    className={styles.logo}
                    src="/posted shades preview.png"
                    alt="Nullified"
                    width={200}
                    height={190}

                />
            </XpCard>
            <XpCard title="LAST STOP (L)" description="L Train view" date="Oct 2021" dimensionX={415}>
                <img
                    className={styles.logo}
                    src="/train still left.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="LAST STOP (R)" description="L Train view" date="Oct 2021" dimensionX={415}>
                <img
                    className={styles.logo}
                    src="/train still right.png"
                    alt="Nullified"
                    width={400}
                    height={400}
                />
            </XpCard>
            <XpCard title="GET RICH" description="for BASK NY" date="April 2021" dimensionX={315}>
                <img
                    className={styles.logo}
                    src="/HOPE YOU GET RICH.png"
                    alt="Nullified"
                    width={300}
                    height={270}
                />
            </XpCard>
        </div>
    )
}
