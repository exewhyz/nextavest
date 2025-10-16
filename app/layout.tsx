import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { StickyBannerDemo } from "@/components/Banner";
import { NavbarDemo } from "@/components/ResizableNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NextaVest | Passive Real Estate for Medical Professionals",
    template: "%s | NextaVest",
  },
  description:
    "Co-invest alongside a physician-focused family team in low-risk, cash-flowing properties designed for predictable, physician-friendly income. Exclusive opportunities for accredited medical professionals.",
  keywords: [
    "passive real estate",
    "medical professionals investment",
    "physician real estate",
    "doctor investment opportunities",
    "accredited investor",
    "commercial real estate",
    "medical office buildings",
    "passive income for doctors",
    "real estate syndication",
    "physician passive income",
    "dentist investment",
    "surgeon investment opportunities",
    "healthcare professional investing",
  ],
  authors: [{ name: "NextaVest" }],
  creator: "NextaVest",
  publisher: "NextaVest",
  metadataBase: new URL("https://nextavest.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextavest.com",
    title: "NextaVest | Passive Real Estate for Medical Professionals",
    description:
      "Co-invest alongside a physician-focused family team in low-risk, cash-flowing properties designed for predictable, physician-friendly income.",
    siteName: "NextaVest",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "NextaVest - Real Estate Investment for Medical Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextaVest | Passive Real Estate for Medical Professionals",
    description:
      "Co-invest alongside a physician-focused family team in low-risk, cash-flowing properties.",
    images: ["/og-image.jpg"],
    creator: "@nextavest", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add your verification code
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  category: "finance",
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
        <StickyBannerDemo />
        <NavbarDemo />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
