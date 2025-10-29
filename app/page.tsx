"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

const content = {
  en: {
    greeting: "Hi, I'm Davit",
    subtitle: "Frontend Developer specializing in React and Next.js",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    skills: [
      { title: "React/Next.js", desc: "Building modern web applications with the latest technologies" },
      { title: "TypeScript", desc: "Type-safe development for robust and maintainable code" },
      { title: "Tailwind CSS", desc: "Creating beautiful, responsive designs efficiently" },
      { title: "React Native", desc: "Cross-platform mobile app development" },
      { title: "Node.js", desc: "Server-side JavaScript for scalable applications" },
      { title: "Performance", desc: "Optimized applications with fast loading times" },
      { title: "Accessibility", desc: "Inclusive design for all users" },
      { title: "SEO", desc: "Search engine optimized for better visibility" },
    ],
  },
  hy: {
    greeting: "Բարև, ես Դավիթն եմ",
    subtitle: "Ֆրոնտենդ ծրագրավորող, մասնագիտացած React և Next.js-ով",
    viewProjects: "Դիտել նախագծերը",
    contactMe: "Կապվեք ինձ հետ",
    skills: [
      { title: "React/Next.js", desc: "Ստեղծելով ժամանակակից վեբ հավելվածներ վերջին տեխնոլոգիաներով" },
      { title: "TypeScript", desc: "Տիպավորված ծրագրավորում հուսալի և սպասարկելի կոդի համար" },
      { title: "Tailwind CSS", desc: "Ստեղծելով  արդյունավետ, գեղեցիկ և արձագանքող դիզայն" },
      { title: "React Native", desc: "Բոլոր հարթակների համար մոբայլ հավելվածների մշակում" },
      { title: "Node.js", desc: "Սերվերային կողմի JavaScript մասշտաբային հավելվածների համար" },
      { title: "Արտադրողականություն", desc: "Օպտիմիզացված հավելվածներ արագ բեռնման ժամանակով" },
      { title: "Հասանելիություն", desc: "Ներառական դիզայն բոլոր օգտատերերի համար" },
      { title: "SEO", desc: "Որոնման համակարգերի օպտիմիզացիա ավելի լավ տեսանելիության համար" },
    ],
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.greeting}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t.viewProjects}
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t.contactMe}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {t.skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg min-h-[120px]">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 wrap-break-word">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
