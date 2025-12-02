import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Davit - Frontend Developer Portfolio",
  description: "Explore Davit's portfolio of web development projects including React, Next.js, TypeScript applications, mobile apps, and landing pages. View live demos and source code.",
  keywords: [
    "Davit projects",
    "React projects",
    "Next.js projects",
    "TypeScript projects",
    "web development portfolio",
    "frontend projects",
    "React Native apps",
    "landing pages",
    "web applications",
    "mobile applications",
    "RateSnap",
    "BuildProof",
    "photography landing page",
    "construction website",
    "portfolio projects",
    "React նախագծեր",
    "Next.js նախագծեր",
    "TypeScript նախագծեր",
    "վեբ ծրագրավորում",
    "մոբայլ ծրագրավորում",
    "արժույթի փոխանակման հարթակ",
    "արժույթի փոխանակման մոբայլ հավելված",
    "արժույթի փոխանակման կայք",
    "frontend նախագծեր",
    "React Native հավելվածներ",
    "լենդինգ էջեր",
    "վեբ հավելվածներ",
    "կայքեր",
    "կայք",
    "մոբայլ հավելվածներ",
    "մոբայլ հավելված",
    "լուսանկարչական լենդինգ էջ",
    "շինարարական կայք",
    "պորտֆոլիո նախագծեր"
  ],
  openGraph: {
    title: "Projects | Davit - Frontend Developer Portfolio",
    description: "Explore Davit's portfolio of web development projects including React, Next.js, TypeScript applications, mobile apps, and landing pages.",
    url: "https://davitgyulinyan.am/projects",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Davit Gyulinyan - Frontend Developer Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Davit - Frontend Developer Portfolio",
    description: "Explore Davit's portfolio of web development projects including React, Next.js, TypeScript applications, mobile apps, and landing pages.",
    images: ["/og-image.jpg"],
  },
};

import ProjectsClient from "./projectsClient";

const content = {
  en: {
    title: "Projects",
    subtitle: "A showcase of my recent work and personal projects",
    all: "All",
    landing: "Landing",
    webApp: "Web App",
    mobileApp: "Mobile App",
    demo: "Demo",
    github: "GitHub",
    details: "Details",
    projects: [
      {
        id: "RateSnap",
        title: "Currency Exchange Platform",
        description:
          "A fully-featured currency exchange platform where we can see exchange options for all currencies in the world.",
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Material-UI"],
        image: "/ratesnap.png",
        demoUrl: "https://ratesnap.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/exchange-app",
      },
      {
        id: "RateSnapMobileApp",
        title: "Currency Exchange Mobile App",
        description:
          "A fully-featured currency exchange mobile app where we can see exchange options for all currencies in the world.",
        type: "Mobile App",
        technologies: ["React Native", "TypeScript"],
        image: "/ratesnapmobile.png",
        githubUrl: "https://github.com/DavidGyulinyan/exchange-mobile",
      },
      {
        id: "photography-landing",
        title: "Capturing Moments",
        description:
          "Modern, responsive photography landing website with a unique design.",
        type: "Landing",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/photography.png",
        demoUrl: "https://photo-lp.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/photography-landing",
      },
      {
        id: "BuildProof",
        title: "BuildProof",
        description:
          "Professional construction document management system for creating and managing construction acceptance documents",
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/build.png",
        demoUrl: "https://buildproof.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/BuildProof",
      },

      {
        id: "construction-landing",
        title: "Building Dreams",
        description: "Professional construction services landing website.",
        type: "Landing",
        technologies: ["Next.js", "TypeScript", "SCSS"],
        image: "/construction.png",
        demoUrl: "https://construction-lp.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/construction-landing",
      },
    ],
  },
  hy: {
    title: "Նախագծեր",
    subtitle: "Իմ վերջին աշխատանքները և անձնական նախագծերը",
    all: "Բոլորը",
    landing: "Լենդինգ էջ",
    webApp: "Վեբ հավելված",
    mobileApp: "Մոբայլ հավելված",
    demo: "Դեմո",
    github: "GitHub",
    details: "Մանրամասներ",
    projects: [
      {
        id: "RateSnap",
        title: "Արժույթի փոխանակման հարթակ",
        description:
          "Հագեցած արժույթի փոխանակման հարթակ, որտեղ կարող ենք տեսնել աշխարհի բոլոր արժույթների փոխանակման տարբերակները։",
        type: "Վեբ հավելված",
        technologies: ["Next.js", "TypeScript", "Material-UI"],
        image: "/ratesnap.png",
        demoUrl: "https://ratesnap.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/currency-converter",
      },
      {
        id: "RateSnapMobileApp",
        title: "Արժույթի փոխանակման մոբայլ հավելված",
        description:
          "Հագեցած արժույթի փոխանակման հավելված, որտեղ կարող ենք տեսնել աշխարհի բոլոր արժույթների փոխանակման տարբերակները։",
        type: "Մոբայլ հավելված",
        technologies: ["React Native", "TypeScript"],
        image: "/ratesnapmobile.png",
        githubUrl: "https://github.com/DavidGyulinyan/ratesnap-mobile",
      },
      {
        id: "photography-landing",
        title: "Պահեր որսալով",
        description:
          "Ժամանակակից, ադապտիվ լուսանկարչական կայք՝ յուրօրինակ դիզայնով։",
        type: "Լենդինգ էջ",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/photography.png",
        demoUrl: "https://photo-lp.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/photography-landing",
      },
      {
        id: "BuildProof",
        title: "Շինարարական փաստաթղթերի պրոֆեսիոնալ կառավարման համակարգ",
        description:
          "Շինարարական փաստաթղթերի պրոֆեսիոնալ կառավարման համակարգ շինարարական ընդունման փաստաթղթերի ստեղծման և կառավարման համար",
        type: "Վեբ հավելված",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/build.png",
        demoUrl: "https://buildproof.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/BuildProof",
      },
      {
        id: "construction-landing",
        title: "Կառուցելով երազանքներ",
        description: "Շինարարական աշխատանքների լենդինգ էջ։",
        type: "Լենդինգ էջ",
        technologies: ["Next.js", "TypeScript", "SCSS"],
        image: "/construction.png",
        demoUrl: "https://construction-lp.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/construction-landing",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient content={content} />;
}
