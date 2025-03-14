import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SL Admin",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={"h-full"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center h-full`}
      >
        {children}
      </body>
    </html>
  );
}
