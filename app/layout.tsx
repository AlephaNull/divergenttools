import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jura } from "next/font/google";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const jura = Jura({
  subsets: ["latin"]
})
const funnelDisplay = Funnel_Display({
  subsets: ["latin"]
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DivergentTools",
  description: "Tools for neurodivergent people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={funnelDisplay.className}
      >
        {children}
      </body>
    </html>
  );
}
