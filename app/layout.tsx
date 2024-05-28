import type { Metadata } from "next";
import { Inter, Poppins, Reddit_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const font = Reddit_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linker Digital",
  description: "Linker Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
