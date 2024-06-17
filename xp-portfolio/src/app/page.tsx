import Image from "next/image";
import { XpCard } from "../../components/XpCard";
import { TypingHeader } from "../../components/TypingHeader/TypingHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          I'm about to go so crazy&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Kris
          </a>
        </div>
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
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Test Area <span>-&gt;</span>
          </h2>
          <p>I'm cooking here.</p>
        </a>

        <div className={styles.card}>
          <XpCard title="Test XpWindow">
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </XpCard>
        </div>

      </div>
    </main >
  );
}
