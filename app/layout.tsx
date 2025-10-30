import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davit - Frontend Developer Portfolio | React, Next.js, TypeScript Expert",
  description: "Professional portfolio of Davit, a skilled frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, skills, and get in touch for your next web development project.",
  keywords: [
    "Davit frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web developer portfolio",
    "JavaScript developer",
    "frontend development",
    "React portfolio",
    "Next.js portfolio",
    "full stack developer",
    "web application developer",
    "UI/UX developer",
    "responsive web design",
    "modern web development",
    "Tailwind CSS",
    "Node.js developer",
    "mobile app development",
    "React Native developer",
    "SEO optimization",
    "performance optimization",
    "web accessibility",
    "Armenian developer",
    "Yerevan developer"
  ],
  authors: [{ name: "Davit Gyulinyan" }],
  creator: "Davit Gyulinyan",
  publisher: "Davit Gyulinyan",
  openGraph: {
    title: "Davit - Frontend Developer Portfolio | React, Next.js, TypeScript Expert",
    description: "Professional portfolio of Davit, a skilled frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, skills, and get in touch for your next web development project.",
    url: "https://davitgyulinyan.am",
    siteName: "Davit's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Davit Gyulinyan - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davit - Frontend Developer Portfolio | React, Next.js, TypeScript Expert",
    description: "Professional portfolio of Davit, a skilled frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, skills, and get in touch for your next web development project.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://davitgyulinyan.am",
  },
  category: "Technology",
  classification: "Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Davit Gyulinyan",
    "jobTitle": "Frontend Developer",
    "description": "Passionate frontend developer specializing in React, Next.js, TypeScript, and modern web technologies",
    "url": "https://davitgyulinyan.am",
    "sameAs": [
      "https://github.com/DavidGyulinyan",
      "https://t.me/DavidGyulinyan"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Web Development",
      "Frontend Development",
      "React Native",
      "SEO Optimization",
      "Performance Optimization",
      "Web Accessibility"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Frontend Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Yerevan",
        "addressCountry": "AM"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "TUMO Labs"
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
