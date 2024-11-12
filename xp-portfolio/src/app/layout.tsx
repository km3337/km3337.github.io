import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBar } from "./ui/NavigationBar";
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
        <div className="headerSection">
          <NavigationBar />
        </div>
        {children}
      </body>
    </html>
  );
}
