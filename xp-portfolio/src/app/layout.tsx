import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import { NavigationBar } from "./components/NavigationBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      </Head>
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
