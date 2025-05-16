// `app/about/page.tsx` is the UI for the `/about` URL
import { TypingHeader } from "../components/TypingHeader/TypingHeader";
import { XpCard } from "../components/XpCard";
import styles from "./page.module.css";

const AboutImage = () => {
    return (
        <div className={styles.aboutImage}>
            <XpCard
                title="DOOMSDAY"
                description='A tribute to the illest villain'
                date='Oct 2021'
                dimensionX={540}
                imgSrc="/DOOMSDAY still.png"
            />
        </div>
    )
}

export default function Page() {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.header}>
                    < h2 > Hey, I'm Kris!</h2 >
                    < br />
                    <TypingHeader />
                </div >

                <div className={styles.bio}>
                    <AboutImage />
                    <p>Lorem Ipsum</p>
                </div>

                <div className={styles.clientsCarousel}>
                    <p>Cooper Hewitt Smithsonian</p>
                    <p>Timberlands</p>
                    <p>Vans</p>
                    <p>Eventbrite</p>
                    <p>GIPHY Inc</p>
                    <p> DSGNRS Workshop</p>
                    <p> CUNY </p>
                </div>
                <div>
                </div>
            </div >
        </>
    )
}