import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { NavigationBar } from "./components/NavigationBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nullinside.net"),
  title: "NULL INSIDE - Kristian Mentor's portfolio",
  description: "A creative compilation of my work.",
  openGraph: {
    title: "NULL INSIDE - Kristian Mentor's portfolio",
    description: "A creative compilation of my work.",
    url: "https://nullinside.net",
    siteName: "NULL INSIDE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/NULL_Inside white.png",
        width: 1200,
        height: 630,
        alt: "NULL INSIDE portfolio preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NULL INSIDE - Kristian Mentor's portfolio",
    description: "A creative compilation of my work.",
    images: ["/NULL_Inside white.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pressStart2P.variable}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
