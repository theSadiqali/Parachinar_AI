import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/layout/site-header";
import { SiteFooter } from "../components/layout/site-footer";
import { ChatWidget } from "../components/chat/chat-widget";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parachinar – Quiet Luxury of the Frontier",
  description:
    "A high-end digital experience celebrating the landscapes, rituals, and everyday life of Parachinar.",
  openGraph: {
    title: "Parachinar – Quiet Luxury of the Frontier",
    description:
      "A high-end digital experience celebrating the landscapes, rituals, and everyday life of Parachinar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} antialiased bg-alabaster text-slateLuxury-900`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}

