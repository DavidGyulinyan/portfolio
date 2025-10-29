"use client";

import { useLanguage } from "../context/LanguageContext";

const content = {
  en: {
    title: "About Me",
    subtitle:
      "Passionate frontend developer with expertise in React and Next.js",
    experience: "Experience",
    technologies: "Technologies",
    frontend: "Frontend",
    tools: "Tools",
    backend: "Backend",
    other: "Other",
    downloadCV: "Download CV (PDF)",
    experiences: [
      {
        title: "RateSnap Mobile App — Personal Project",
        period: "29.10.2024 - 07.10.2025",
        desc: "Created a mobile app version of the global currency converter below using React Native.",
      },
      {
        title: "Frontend developer at Sol-Dynamis (Remote)",
        period: "28.12.2024 - 23.03.2025",
        desc: " Worked on Sol-Dynami's Auxillium project using React, TS and SCSS, MUI. Developed responsive and accessible UI components tailored for healthcare workflows. Focused on clean code structure, reusable components, and optimized styling for performance and maintainability.",
      },
      {
        title: "RateSnap — Personal Project",
        period: "09.07.2024 - 17.10.2024",
        desc: "Built a global currency converter web app using Next.js, TypeScript, and Material UI. It supports conversion between all world currencies with real-time exchange rates and daily updates. The app features a responsive, user-friendly interface for seamless currency conversion. ratesnap",
      },
      {
        title: "Frontend developer at IO Development (Remote)",
        period: "15.04.2024 - 15.07.2024",
        desc: "Worked on an exam project for 'IO Development' using React.js. Designed a dynamic and responsive web application, showcasing my proficiency in React.js by implementing various interactive features and ensuring a smooth user experience.",
      },
      {
        title: "Full stack developer at TUMO Labs (On-site)",
        period: "19.04.2024 – 25.05.2024",
        desc: "Developed Explore Astronomy, an interactive web app at TUMO Labs for astronomy enthusiasts. Utilized Node.js and Express.js for the backend, React and TypeScript for the frontend, and Tailwind CSS for styling. The app provides real-time data and an engaging user experience.",
      },
      {
        title: "Frontend Developer (Remote)",
        period: "03.12.2023 – 06.06.2024",
        desc: "I worked on a website project for Focus Design Studio using Next.js for user-friendly design and server side rendering. This experience improved my skills in web development, especially in Next.js. focusstudio.am",
      },
      {
        title: "Coding teacher at Phenix Academy (On-site)",
        period: "15.01.2022 – 18.05.2024",
        desc: "Helped children understand web development basics, including HTML, CSS, responsive design, and JavaScript. Created a fun learning environment to teach practical coding skills, simplify complex topics, and build students' confidence in their technical abilities.",
      },
    ],
    techCategories: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "VS Code", "WebStorm", "Linux OS", "Figma"],
      backend: ["Node.js", "Express"],
      other: ["REST APIs", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
    },
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
        title: "RateSnap Մոբայլ Հավելված — Անձնական նախագիծ",
        period: "29.10.2024 - 07.10.2025",
        desc: "Ստեղծել եմ ներքոնշյալ գլոբալ արժույթի փոխարկչի մոբայլ հավելված տարբերակը օգտագործելով React Native։",
      },
      {
        title: "Ֆրոնտենդ ծրագրավորող Sol-Dynamis-ում (Հեռավար)",
        period: "28.12.2024 - 23.03.2025",
        desc: "Աշխատել եմ Sol-Dynamis-ի Auxillium նախագծի վրա օգտագործելով React, TS և SCSS, MUI։ Մշակել եմ արձագանքող և հասանելի UI բաղադրիչներ։ Կենտրոնացած մաքուր կոդի կառուցվածքի, վերօգտագործելի բաղադրիչների և օպտիմիզացված ոճավորման վրա։",
      },
      {
        title: "RateSnap — Անձնական նախագիծ",
        period: "09.07.2024 - 17.10.2024",
        desc: "Կառուցել եմ գլոբալ արժույթի փոխարկչի վեբ հավելված՝ օգտագործելով Next.js, TypeScript և Material UI: Այն աջակցում է փոխարկումը աշխարհի բոլոր արժույթների միջև՝ իրական ժամանակի փոխարժեքներով և ամենօրյա թարմացումներով: Հավելվածն ունի արագ արձագանքող, օգտագործողին հարմար ինտերֆեյս՝ արժույթի անխափան փոխարկման համար:",
      },
      {
        title: "Ֆրոնտենդ ծրագրավորող IO Development-ում (Հեռավար)",
        period: "03.12.2023 – 06.06.2024",
        desc: "Աշխատել եմ IO Development-ի քննական նախագծի վրա օգտագործելով React.js։ Նախագծել եմ դինամիկ և արձագանքող վեբ հավելված, օգտագործելով իմ React.js-ի գիտելիքները, ստեղծելով տարբեր ինտերակտիվ հատկություններ։",
      },
      {
        title: "Ֆրոնտենդ ծրագրավորող TUMO Labs-ում (Տեղում)",
        period: "19.04.2024 – 25.05.2024",
        desc: "Մշակել եմ 'Explore Astronomy' ինտերակտիվ վեբ հավելվածը TUMO Labs-ում աստղագիտության սիրահարների համար։ Օգտագործել եմ Node.js և Express.js բեքենդի համար, React և TypeScript ֆրոնտենդի համար, և Tailwind CSS ոճավորման համար։ Հավելվածը տրամադրում է իրական ժամանակի տվյալներ հետաքրքրասեր օգտատերերի համար։",
      },
      {
        title: "Ֆրոնտենդ ծրագրավորող Focus Design Studio (Հեռավար)",
        period: "03.12.2023 – 06.06.2024",
        desc: "Մասնակցել եմ Focus Design Studio-ի կայքի ստեղծմանը օգտագործելով Next.js օգտատերերի համար հարմար դիզայնի և սերվերի կողմի մատուցման համար։ Այս փորձառությունը բարելավել է իմ հմտությունները վեբ մշակման մեջ, հատկապես Next.js-ում։",
      },
      {
        title: "Ծրագրավորման ուսուցիչ (Ուսումնական կենտրոնում)",
        period: "15.01.2022 – 18.05.2024",
        desc: "Phenix Academy. Օգնել եմ երեխաներին հասկանալ վեբ ծրագրավորման հիմունքները, ներառյալ HTML, CSS և JavaScript։ Ստեղծել եմ հետաքրքիր ուսուցման միջավայր՝ սովորեցրել գործնական ծրագրավորման հմտություններ, պարզեցնել բարդ թեմաները և կառուցել ուսանողների վստահությունը իրենց տեխնիկական հմտություններում։",
      },
    ],
    techCategories: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "VS Code", "WebStorm", "Linux OS", "Figma"],
      backend: ["Node.js", "Express"],
      other: ["REST APIs", "MongoDB", "PostgreSQL", "Supabase", "Firebase"],
    },
  },
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
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.frontend}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.tools}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.tools.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {t.backend}
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {t.techCategories.backend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            {t.downloadCV}
          </a>
        </div>
      </main>
    </div>
  );
}
