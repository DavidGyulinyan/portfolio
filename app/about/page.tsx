"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const content = {
  en: {
    title: "About Me",
    subtitle: "Passionate frontend developer with expertise in React and Next.js",
    experience: "Experience",
    technologies: "Technologies",
    frontend: "Frontend",
    tools: "Tools",
    backend: "Backend",
    other: "Other",
    downloadCV: "Download CV (PDF)",
    experiences: [
      {
        title: "Frontend Developer",
        period: "2022 - Present",
        desc: "Building modern web applications using React, Next.js, and TypeScript. Focus on performance, accessibility, and user experience."
      },
      {
        title: "Web Developer",
        period: "2020 - 2022",
        desc: "Developed responsive websites and web applications using HTML, CSS, JavaScript, and various frameworks."
      }
    ],
    techCategories: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
      tools: ["Git", "VS Code", "Figma", "Vercel"],
      backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      other: ["REST APIs", "GraphQL", "Docker", "AWS"]
    }
  },
  hy: {
    title: "Իմ մասին",
    subtitle: "Փորձառու ֆրոնտենդ ծրագրավորող, մասնագիտացված React և Next.js-ով",
    experience: "Փորձ",
    technologies: "Տեխնոլոգիաներ",
    frontend: "Ֆրոնտենդ",
    tools: "Գործիքներ",
    backend: "Բեքենդ",
    other: "Այլ",
    downloadCV: "Ներբեռնել CV (PDF)",
    experiences: [
      {
        title: "Ֆրոնտենդ ծրագրավորող",
        period: "2022 - ներկա",
        desc: "Ստեղծելով ժամանակակից վեբ հավելվածներ օգտագործելով React, Next.js և TypeScript։ Կենտրոնացած օպտիմալ աշխատանքի, հասանելիության և օգտատերերի փորձի վրա։"
      },
      {
        title: "Վեբ ծրագրավորող",
        period: "2020 - 2022",
        desc: "Ստեղծելով արձագանքող կայլեր և վեբ հավելվածներ HTML, CSS, JavaScript և տարբեր շրջանակների օգտագործմամբ։"
      }
    ],
    techCategories: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "VS Code", "WebStorm", "Figma", "Vercel"],
      backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
      other: ["REST APIs", "GraphQL", "Docker", "AWS"]
    }
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
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
                  <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
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
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">{t.frontend}</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">{t.tools}</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.tools.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">{t.backend}</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.backend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">{t.other}</h4>
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            {t.downloadCV}
          </a>
        </div>
      </main>
    </div>
  );
}