import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.turbandigitalstudio.in'),
  title: "Digital Marketing Agency in Gurgaon | Turban Digital Studio",
  description: "Grow your business with Turban Digital Studio, a digital marketing agency in Gurgaon offering SEO, Google & Meta Ads, web development, social media, mobile apps and more.",
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/',
  },
  keywords: ["Digital Marketing Agency Gurgaon", "Best SEO Agency in India", "Web Development Company", "Performance Marketing Experts", "Turban Digital Studio"],
  authors: [{ name: "Turban Digital Studio" }],
  creator: "Turban Digital Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.turbandigitalstudio.in",
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

import { Inter, Lexend } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ContactModal from "@/components/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Turban Digital Studio",
    "url": "https://www.turbandigitalstudio.in",
    "logo": "https://www.turbandigitalstudio.in/Logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurgaon",
      "addressCountry": "IN"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Turban Digital Studio offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer SEO, Performance Marketing (Google & Meta Ads), Web Development, App Development, SMO, and Video Editing services."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.turbandigitalstudio.in/"
      }
    ]
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${lexend.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen">
        <SmoothScroll />
        <ContactModal />
        {children}
      </body>
    </html>
  );
}
