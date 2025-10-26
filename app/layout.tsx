import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David - Frontend Developer Portfolio",
  description: "Portfolio of David, a React/Next.js frontend developer showcasing projects, skills, and contact information.",
  keywords: ["frontend developer", "React", "Next.js", "portfolio", "web development"],
  authors: [{ name: "David" }],
  openGraph: {
    title: "David - Frontend Developer Portfolio",
    description: "Portfolio of David, a React/Next.js frontend developer showcasing projects, skills, and contact information.",
    url: "https://yourdomain.com",
    siteName: "David's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David - Frontend Developer Portfolio",
    description: "Portfolio of David, a React/Next.js frontend developer showcasing projects, skills, and contact information.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
