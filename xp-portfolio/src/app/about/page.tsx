// `app/about/page.tsx` is the UI for the `/about` URL
import { TypingHeader } from "../components/TypingHeader/TypingHeader";
import { XpCard } from "../components/XpCard";
import { HorizontalLogos } from "../components/HorizontalLogos";
import homeStyles from "../page.module.scss";
import styles from "./page.module.css";

const AboutImage = () => {
    return (
        <div className={styles.aboutImage}>
            <XpCard
                title="KRISTIAN MENTOR"
                description='Self portrait'
                date='April 2026'
                dimensionX={540}
                imgSrc="/kris mentor.png"
            />
        </div>
    )
}

export default function Page() {
    return (
        <main className={`${styles.pageShell} egg-shell-backdrop egg-shell-about`}>
            <div className={styles.root}>
                <header className={styles.header}>
                    <h2
                        className={`${homeStyles.heading} text-8xl md:text-9xl mb-12 text-center`}
                    >
                        Hey, I&#39;m Kris!
                    </h2>
                    <div className={styles.tagline}>
                        <TypingHeader
                            className={`${homeStyles.subHeading} text-sm md:text-lg text-center`}
                        />
                    </div>
                </header>

                <div className={styles.bio}>
                    <AboutImage />
                    <div className={styles.bioText}>
                        <p className={styles.lede}>
                            Kristian is a multiple-disciplinary engineer based in New York City.
                            His work spans across software development, creative direction, teaching, and more. He uses a variety of tools and technologies to explore the intersection of digital design and product development.
                            He has collaborated with Cooper Hewitt Smithsonian, Timberland, Jordan Brand, Vans, Eventbrite, GIPHY Inc, DSGNRS Workshop, and CUNY on various projects and events.
                            He is currently a senior software engineer at Eventbrite, where he works on the Ads Experience team, building new features and infrastructure to scale and innovate.
                        </p>

                        <h3
                            className={`${homeStyles.subHeading} text-md md:text-lg mb-12 text-center`}
                        >
                            Services
                        </h3>
                        <ul className={styles.serviceList}>
                            <li>Full-stack Engineering </li>
                            <li>Creative Direction </li>
                            <li> System Design </li>
                            <li> Animation </li>
                            <li> UI/UX Design </li>
                            <li> Illustration </li>
                            <li> Apparel Design </li>
                            <li>Teaching</li>
                            <li>Public Speaking</li>
                            <li>Consulting</li>
                        </ul>
                    </div>
                </div>

                <section className={styles.clientsCarousel} aria-labelledby="clients-heading">
                    <h3
                        id="clients-heading"
                        className={`${homeStyles.subHeading} ${styles.clientsSectionHeading} text-md md:text-lg mb-12 text-center`}
                    >
                        Clients &amp; Collaborators
                    </h3>
                    <HorizontalLogos logoHeight={50} speed={25} />
                </section>
            </div>
        </main>
    )
}