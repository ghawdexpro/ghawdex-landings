import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghawdex | Solar Installation in 14 Days | Solar Bundles + CCTV + Heritage Buildings | Malta",
  description: "Premium solar bundles in Malta: Solar + CCTV + Growing Systems. Government grant takeover specialists - finish in 14 days. Custom wall-mounted solutions for heritage buildings. Transform your property with professional installation.",
  keywords: [
    "solar installation Malta",
    "solar panels Malta",
    "14 day installation",
    "solar energy bundles",
    "CCTV solar package",
    "government grant solar Malta",
    "heritage building solar",
    "old building solar solutions",
    "wall-mounted solar panels",
    "solar grant takeover Malta",
    "LED growing system Malta",
    "renewable energy Malta",
    "Google Solar API",
    "professional solar installers Malta",
    "solar security bundle",
    "custom solar structures Malta"
  ],
  authors: [{ name: "Ghawdex" }],
  openGraph: {
    title: "Ghawdex | Solar Bundles, Grant Takeover & Heritage Solutions | Malta",
    description: "Premium Energy Independence Bundle (Solar+CCTV+Growing). Government grant takeover in 14 days. Custom wall-mounted solar for heritage buildings. Expert installation across Malta.",
    url: "https://ghawdex.pro",
    siteName: "Ghawdex Solar",
    type: "website",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ghawdex Solar Installation - Premium Bundles & Heritage Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghawdex | Solar Bundles + Heritage Solutions | Malta",
    description: "Premium solar bundles with CCTV & growing systems. Government grant takeover specialists. Custom solutions for heritage buildings. 14-day installation guaranteed.",
    images: ["/og/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
