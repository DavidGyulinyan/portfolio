"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  id: string;
  title: string;
  description: string;
  type: "Landing" | "Web App" | "Mobile App";
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

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
        image: "/projects/ecommerce.jpg",
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
        image: "/projects/ecommerce.jpg",
        demoUrl: "https://ratesnap.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/exchange-mobile",
      },
      {
        id: "photography-landing",
        title: "Capturing Moments",
        description:
          "Modern, responsive photography landing website with a unique design.",
        type: "Landing",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/portfolio.jpg",
        demoUrl: "https://portfolio.example.com",
        githubUrl: "https://github.com/username/portfolio",
      },
      {
        id: "BuildProof",
        title: "BuildProof",
        description:
          "Professional construction document management system for creating and managing construction acceptance documents",
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/ecommerce.jpg",
        demoUrl: "https://buildproof.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/BuildProof",
      },
      
      {
        id: "construction-landing",
        title: "Building Dreams",
        description: "Professional construction services landing website.",
        type: "Landing",
        technologies: ["Next.js", "TypeScript", "SCSS"],
        image: "/projects/portfolio.jpg",
        demoUrl: "https://construction-lp.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/construction-landing",
      },
    ],
  },
  hy: {
    title: "Նախագծեր",
    subtitle: "Իմ վերջին աշխատանքների և անձնական նախագծերի ցուցադրում",
    all: "Բոլորը",
    landing: "Կայք",
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
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Material-UI"],
        image: "/projects/ratesnap.jpg",
        demoUrl: "https://ratesnap.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/exchange-app",
      },
      {
        id: "RateSnapMobileApp",
        title: "Արժույթի փոխանակման մոբայլ հավելված",
        description:
          "Հագեցած արժույթի փոխանակման հավելված, որտեղ կարող ենք տեսնել աշխարհի բոլոր արժույթների փոխանակման տարբերակները։",
        type: "Մոբայլ հավելված",
        technologies: ["React Native", "TypeScript"],
        image: "/projects/ratesnap.jpg",
        demoUrl: "https://ratesnap.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/ratesnap-mobile",
      },
      {
        id: "photography-landing",
        title: "Պահեր որսալով",
        description:
          "Ժամանակակից, ադապտիվ լուսանկարչական կայք՝ յուրօրինակ դիզայնով։",
        type: "Landing",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/portfolio.jpg",
        demoUrl: "https://photo-lp.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/photography-landing",
      },
      {
        id: "BuildProof",
        title: "BuildProof",
        description:
          "Շինարարական փաստաթղթերի պրոֆեսիոնալ կառավարման համակարգ շինարարական ընդունման փաստաթղթերի ստեղծման և կառավարման համար",
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/buildproof.jpg",
        demoUrl: "https://buildproof.netlify.app/",
        githubUrl: "https://github.com/DavidGyulinyan/BuildProof",
      },
    ],
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const t = content[language];

  const [filter, setFilter] = useState<string>("All");

  const filteredProjects =
    filter === "All"
      ? t.projects
      : t.projects.filter((project) => project.type === filter);

  const projectTypes = [
    { key: "All", label: t.all },
    { key: "Landing", label: t.landing },
    { key: "Web App", label: t.webApp },
    { key: "Mobile App", label: t.mobileApp },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {projectTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setFilter(type.key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors hover:scale-105 cursor-pointer ${
                filter === type.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {t.demo} →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                    >
                      {t.github} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
