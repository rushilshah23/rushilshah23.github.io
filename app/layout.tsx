import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from "./themes/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rushil Shah",
  description: "Rushil Shah's personal website.",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={poppins.className}>

      <body>{children}</body>
    </html>
  );
}
