// `app/about/page.tsx` is the UI for the `/about` URL
import { TypingHeader } from "../components/TypingHeader/TypingHeader";
import { XpCard } from "../components/XpCard";
import { HorizontalLogos } from "../components/HorizontalLogos";
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
                    <h2> Hey, I&#39;m Kris!</h2>
                    < br />
                    <TypingHeader />
                </div >

                <div className={styles.bio}>
                    <AboutImage />
                    <p>
                        Kristian is a multiple-disciplinary engineer based in New York City. 
                        His work spans across software development, creative direction, teaching, and more. He uses a variety of tools and technologies to explore the intersection of digital design and product development. 
                        He has collaborated with Cooper Hewitt Smithsonian, Timberland, Jordan Brand, Vans, Eventbrite, GIPHY Inc, DSGNRS Workshop, and CUNY on various projects and events.
                        He is currently a senior software engineer at Eventbrite, where he works on the Ads Experience team, building new features and infrastructure to scale and innovate.
                    </p>

                    <h3>Services</h3>
                    <ul>
                        <li>Full-stack Development</li>
                        <li>Creative Direction</li>
                        <li>Website Design</li>
                        <li>Motion Graphics</li>
                        <li>Web Development</li>
                        <li>Illustration</li>
                        <li>Teaching</li>
                        <li>Public Speaking</li>
                    </ul>
                </div>

                <div className={styles.clientsCarousel}>
                    <h3>Clients & Collaborators</h3>
                    <HorizontalLogos logoHeight={50} speed={25} />
                </div>
                <div>
                </div>
            </div >
        </>
    )
}