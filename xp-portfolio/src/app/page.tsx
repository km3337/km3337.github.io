import Image from "next/image";
import { XpCard } from "./components/XpCard";
import { TypingHeader } from "./components/TypingHeader/TypingHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <h2>Hey, I'm Kris!</h2>
        <br />
        <TypingHeader />

        <Image
          className={styles.logo}
          src="/null.svg"
          alt="Null nyc Logo"
          width={300}
          height={600}
          priority
        />
      </div>

      <div className={styles.grid}>
        <section>
          <h2>
            PROJECTS
          </h2>

          <div id={styles.cardsContainer}>
            <XpCard title="DOOMSDAY Capsule" description="A tribute to the illest villain" date="Oct 2021" dimensionX={540}>
              <Image
                className={styles.logo}
                src="/DOOMSDAY still.png"
                alt="Doomsday Nullified"
                width={525}
                height={525}
                priority
              />
            </XpCard>
            <XpCard title="DOOMSDAY Capsule" description="A tribute to the illest villain" date="Oct 2021" dimensionX={540}>
              <Image
                className={styles.logo}
                src="/DOOMSDAY still.png"
                alt="Doomsday Nullified"
                width={525}
                height={525}
                priority
              />
            </XpCard>
            <XpCard title="DOOMSDAY Capsule" description="A tribute to the illest villain" date="Oct 2021" dimensionX={540}>
              <Image
                className={styles.logo}
                src="/DOOMSDAY still.png"
                alt="Doomsday Nullified"
                width={525}
                height={525}
                priority
              />
            </XpCard>
          </div>
        </section>
      </div>
    </main >
  );
}
