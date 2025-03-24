import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>
        <nav className="~pb-6/10 pointer-events-none fixed bottom-0 left-0 z-10 w-full pt-12">
          <NavigationBar />
        </nav>
        {children}
      </body>
    </html>
  );
}
