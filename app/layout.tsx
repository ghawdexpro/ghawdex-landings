import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FacebookPixel from "@/components/FacebookPixel";
import TimeTracker from "@/components/TimeTracker";
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
  title: "Ghawdex | Solar Installation in 14 Days | Professional Solar Energy Solutions",
  description: "Transform your property with professional solar installation in just 14 days. Advanced building analysis using Google Earth & Solar API. Expert installation across Malta. Get your free solar analysis today.",
  keywords: ["solar installation", "solar panels Malta", "14 day installation", "solar energy", "renewable energy", "Google Solar API", "professional solar installers"],
  authors: [{ name: "Ghawdex" }],
  openGraph: {
    title: "Ghawdex | Solar Installation in 14 Days",
    description: "Professional solar energy solutions with cutting-edge technology. From real-time building analysis to complete installation—fast, reliable, and expertly done.",
    url: "https://ghawdex.pro",
    siteName: "Ghawdex Solar",
    type: "website",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ghawdex Solar Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghawdex | Solar Installation in 14 Days",
    description: "Professional solar energy solutions delivered fast. Expert installation across Malta.",
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
      <head>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        <TimeTracker />
      </body>
    </html>
  );
}
