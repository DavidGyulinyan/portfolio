import type { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  title: "Contact | Davit - Frontend Developer Portfolio",
  description: "Get in touch with Davit, a skilled frontend developer specializing in React, Next.js, and TypeScript. Contact me for web development projects, collaborations, or job opportunities.",
  keywords: [
    "contact Davit",
    "hire frontend developer",
    "React developer contact",
    "Next.js developer",
    "web development contact",
    "Davit Gyulinyan contact",
    "frontend developer hire",
    "web developer Armenia",
    "Yerevan developer contact",
    "React portfolio contact",
    "Next.js portfolio contact"
  ],
  openGraph: {
    title: "Contact | Davit - Frontend Developer Portfolio",
    description: "Get in touch with Davit, a skilled frontend developer specializing in React, Next.js, and TypeScript. Contact me for web development projects and collaborations.",
    url: "https://gyulinyan-dev.netlify.app/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Davit Gyulinyan - Frontend Developer Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Davit - Frontend Developer Portfolio",
    description: "Get in touch with Davit, a skilled frontend developer specializing in React, Next.js, and TypeScript. Contact me for web development projects and collaborations.",
    images: ["/og-image.jpg"],
  },
};

const content = {
  en: {
    title: "Get In Touch via Telegram",
    subtitle:
      "Have a project in mind? Let's discuss how we can work together on Telegram.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    otherWays: "Contact me",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "Project inquiry",
    messagePlaceholder: "Tell me about your project...",
  },
  hy: {
    title: "Կապվեք ինձ հետ Telegram-ով",
    subtitle:
      "Որևէ նախագիծ ունե՞ք մտքում։ Եկեք քննարկենք, թե ինչպես կարող ենք աշխատել միասին։",
    name: "Անուն",
    email: "Էլեկտրոնային փոստ",
    subject: "Թեմա",
    message: "Հաղորդագրություն",
    sendMessage: "Ուղարկել հաղորդագրություն",
    otherWays: "Կապվեք ինձ հետ",
    namePlaceholder: "Ձեր անունը",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "Նախագծի հարցում",
    messagePlaceholder: "Պատմեք ձեր նախագծի մասին...",
  },
};

export default function Contact() {
  return <ContactClient content={content} />;
}
