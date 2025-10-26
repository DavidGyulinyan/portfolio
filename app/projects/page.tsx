"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  id: string;
  title: string;
  description: string;
  type: "Landing" | "Web App" | "Admin Panel";
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
    adminPanel: "Admin Panel",
    demo: "Demo",
    github: "GitHub",
    details: "Details",
    projects: [
      {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description: "A full-featured online store with shopping cart, payment integration, and admin dashboard.",
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        image: "/projects/ecommerce.jpg",
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/username/ecommerce",
      },
      {
        id: "portfolio-website",
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website with project showcase and contact form.",
        type: "Landing",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/projects/portfolio.jpg",
        demoUrl: "https://portfolio.example.com",
        githubUrl: "https://github.com/username/portfolio",
      },
      {
        id: "admin-dashboard",
        title: "Admin Dashboard",
        description: "Comprehensive admin panel for managing users, content, and analytics.",
        type: "Admin Panel",
        technologies: ["React", "TypeScript", "Chart.js", "Material-UI"],
        image: "/projects/dashboard.jpg",
        demoUrl: "https://admin.example.com",
        githubUrl: "https://github.com/username/dashboard",
      },
    ],
  },
  hy: {
    title: "Նախագծեր",
    subtitle: "Իմ վերջին աշխատանքների և անձնական նախագծերի ցուցադրում",
    all: "Բոլորը",
    landing: "Կայլ",
    webApp: "Վեբ հավելված",
    adminPanel: "Ադմին վահանակ",
    demo: "Դեմո",
    github: "GitHub",
    details: "Մանրամասներ",
    projects: [
      {
        id: "ecommerce-platform",
        title: "Էլեկտրոնային առևտրի հարթակ",
        description: "Լրիվ հագեցած առցանց խանութ զամբյուղով, վճարման ինտեգրացիայով և ադմին վահանակով։",
        type: "Web App",
        technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        image: "/projects/ecommerce.jpg",
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/username/ecommerce",
      },
      {
        id: "portfolio-website",
        title: "Պորտֆոլիո կայլ",
        description: "Ժամանակակից և արձագանքող պորտֆոլիո կայլ նախագծերի ցուցադրմամբ և կոնտակտային ձևով։",
        type: "Landing",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/projects/portfolio.jpg",
        demoUrl: "https://portfolio.example.com",
        githubUrl: "https://github.com/username/portfolio",
      },
      {
        id: "admin-dashboard",
        title: "Ադմին վահանակ",
        description: "Համապարփակ ադմին վահանակ օգտատերերի, բովանդակության և վիճակագրության կառավարման համար։",
        type: "Admin Panel",
        technologies: ["React", "TypeScript", "Chart.js", "Material-UI"],
        image: "/projects/dashboard.jpg",
        demoUrl: "https://admin.example.com",
        githubUrl: "https://github.com/username/dashboard",
      },
    ],
  },
};

export default function Projects() {
  const { language } = useLanguage();
  const t = content[language];

  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = filter === "All"
    ? t.projects
    : t.projects.filter(project => project.type === filter);

  const projectTypes = [
    { key: "All", label: t.all },
    { key: "Landing", label: t.landing },
    { key: "Web App", label: t.webApp },
    { key: "Admin Panel", label: t.adminPanel },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
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
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
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
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
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
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium ml-auto"
                  >
                    {t.details} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}