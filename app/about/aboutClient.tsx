"use client";

import { useLanguage } from "../context/LanguageContext";

interface ContentType {
  en: {
    title: string;
    subtitle: string;
    experience: string;
    technologies: string;
    frontend: string;
    tools: string;
    backend: string;
    other: string;
    downloadCV: string;
    experiences: Array<{
      title: string;
      period: string;
      desc: string;
    }>;
    techCategories: {
      frontend: string[];
      tools: string[];
      backend: string[];
      other: string[];
    };
  };
  hy: {
    title: string;
    subtitle: string;
    experience: string;
    technologies: string;
    frontend: string;
    tools: string;
    backend: string;
    other: string;
    downloadCV: string;
    experiences: Array<{
      title: string;
      period: string;
      desc: string;
    }>;
    techCategories: {
      frontend: string[];
      tools: string[];
      backend: string[];
      other: string[];
    };
  };
}

interface AboutClientProps {
  content: ContentType;
}

export default function AboutClient({ content }: AboutClientProps) {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.experience}
            </h2>
            <div className="space-y-6">
              {t.experiences.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mt-2">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.technologies}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-4 rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.frontend}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-4 rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.tools}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.tools.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-4 rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.backend}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.backend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-4 rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.other}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.other.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/Davit-Gyulinyan-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            {t.downloadCV}
          </a>
        </div>
      </div>
    </div>
  );
}