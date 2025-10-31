"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface ContentType {
  en: {
    title: string;
    subtitle: string;
    all: string;
    landing: string;
    webApp: string;
    mobileApp: string;
    demo: string;
    github: string;
    details: string;
    projects: Array<{
      id: string;
      title: string;
      description: string;
      type: string;
      technologies: string[];
      image: string;
      demoUrl?: string;
      githubUrl?: string;
    }>;
  };
  hy: {
    title: string;
    subtitle: string;
    all: string;
    landing: string;
    webApp: string;
    mobileApp: string;
    demo: string;
    github: string;
    details: string;
    projects: Array<{
      id: string;
      title: string;
      description: string;
      type: string;
      technologies: string[];
      image: string;
      demoUrl?: string;
      githubUrl?: string;
    }>;
  };
}

interface ProjectsClientProps {
  content: ContentType;
}

export default function ProjectsClient({ content }: ProjectsClientProps) {
    const { language } = useLanguage();
      const t = content[language];
    
      const [filter, setFilter] = useState<string>("All");
    
      // Reset filter when language changes to avoid empty results
      useEffect(() => {
        setFilter("All");
      }, [language]);
    
      const getProjectTypeKey = (type: string) => {
        if (language === 'en') {
          return type;
        } else {
          switch (type) {
            case "Landing": return "Լենդինգ էջ";
            case "Web App": return "Վեբ հավելված";
            case "Mobile App": return "Մոբայլ հավելված";
            default: return type;
          }
        }
      };
    
      const filteredProjects =
        filter === "All"
          ? t.projects
          : t.projects.filter((project) => getProjectTypeKey(project.type) === filter);
    
      const projectTypes = [
        { key: "All", label: t.all },
        { key: language === 'en' ? "Landing" : "Լենդինգ էջ", label: t.landing },
        { key: language === 'en' ? "Web App" : "Վեբ հավելված", label: t.webApp },
        { key: language === 'en' ? "Mobile App" : "Մոբայլ հավելված", label: t.mobileApp },
      ];

       return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                filter === type.key
                  ? "gradient-accent text-white shadow-lg"
                  : "backdrop-blur-sm bg-white/20 dark:bg-black/20 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 dark:border-gray-700/30"
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
              className="backdrop-blur-sm bg-white/20 dark:bg-black/20 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-white/30 dark:border-gray-700/30"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium gradient-primary text-white rounded">
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
                      className="px-2 py-1 text-xs backdrop-blur-sm bg-white/30 dark:bg-black/30 text-gray-700 dark:text-gray-300 rounded border border-white/20 dark:border-gray-700/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && project.type !== "Mobile App" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-secondary text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      {t.demo} →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-warm text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      {t.github} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
