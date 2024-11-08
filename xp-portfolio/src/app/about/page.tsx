// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { TypingHeader } from "../components/TypingHeader/TypingHeader";
import { XpCard } from "../components/XpCard";
import styles from "./page.module.css";


export default function Page() {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                < h2 > Hey, I'm Kris!</h2>
                < br />
                <TypingHeader />
            </div>

            <div className={styles.aboutImage}>
                <XpCard title="SELF PORTRAIT (2)" description="final final" date="April 2021" dimensionX={315}>
                    <img
                        className={styles.logo}
                        src="/kris 2021.png"
                        alt="Nullified"
                        width={300}
                        height={315}
                    />
                </XpCard>
            </div>

            <div className={styles.bio}>
                <p>Lorem Ipsum</p>
            </div>

            <div className={styles.clientsCarousel}>
                <p>Cooper Hewitt Smithsonian</p>
                <p>Timberlands</p>
                <p>Vans</p>
                <p>Eventbrite</p>
                <p>GIPHY Inc</p>
                <p></p>
            </div>
        </div>
    )
}