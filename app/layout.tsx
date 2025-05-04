import type { Metadata } from "next";

import { Funnel_Display } from "next/font/google";
import "./globals.css";



const funnelDisplay = Funnel_Display({
  subsets: ["latin"]
})


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
