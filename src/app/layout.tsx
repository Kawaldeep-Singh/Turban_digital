import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://turbandigitalstudio.com'),
  title: {
    default: "Turban Digital Studio | Top Digital Marketing Agency in Gurgaon",
    template: "%s | Turban Digital Studio"
  },
  description: "Stop losing leads to competitors. We are Gurgaon's leading digital marketing agency specializing in Performance Marketing, SEO, Web Development, and Mobile Apps. We build engines that drive real revenue.",
  keywords: ["Digital Marketing Agency Gurgaon", "Best SEO Agency in India", "Web Development Company", "Performance Marketing Experts", "Turban Digital Studio"],
  authors: [{ name: "Turban Digital Studio" }],
  creator: "Turban Digital Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://turbandigitalstudio.com",
    siteName: "Turban Digital Studio",
    title: "Turban Digital Studio | Top Digital Marketing Agency in Gurgaon",
    description: "Stop losing leads to competitors. We build digital engines that drive real revenue through SEO, Performance Marketing, and Web Development.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Turban Digital Studio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Turban Digital Studio | Top Digital Marketing Agency",
    description: "Stop losing leads to competitors. We build digital engines that drive real revenue.",
    images: ["/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lexend:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
