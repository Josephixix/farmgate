import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import LenisProvider from "./LenisProvider";





const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
}); 



export const metadata: Metadata = {
  title: "FarmGate",
  description: "Farm sells website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Navbar />
           <LenisProvider>{children}</LenisProvider>
          <Footer/>   
      </body>
    </html>
  );
}