import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import Head from 'next/head';
import { NavigationBar } from "./components/NavigationBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: " NULL INSIDE - Kristian Mentor's Portfolio app",
  description: "A creative compilation of my work. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/NULL_Inside_White.png" />
      </Head>
      <body className={`${inter.className} ${pressStart2P.variable}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
