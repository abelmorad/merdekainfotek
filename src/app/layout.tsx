import Header from "@/components/layouts/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import About from "./about/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merdeka InfoTek | Official Site",
  description: "Do you need web application built for your company? Reach out to us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <About/>
        <Footer />
      </body>
    </html>
  );
}
