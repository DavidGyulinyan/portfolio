import Link from "next/link";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const content = {
  en: {
    greeting: "Hi, I'm David",
    subtitle: "Frontend Developer specializing in React and Next.js",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    skills: [
      { title: "React/Next.js", desc: "Building modern web applications with the latest technologies" },
      { title: "TypeScript", desc: "Type-safe development for robust and maintainable code" },
      { title: "Tailwind CSS", desc: "Creating beautiful, responsive designs efficiently" },
      { title: "Performance", desc: "Optimized applications with fast loading times" },
      { title: "Accessibility", desc: "Inclusive design for all users" },
      { title: "SEO", desc: "Search engine optimized for better visibility" },
    ],
  },
  hy: {
    greeting: "Բարև, ես Դավիթն եմ",
    subtitle: "Ֆրոնտենդ ծրագրավորող՝ React և Next.js ուղղվածությամբ",
    viewProjects: "Դիտել նախագծերը",
    contactMe: "Կապվեք ինձ հետ",
    skills: [
      { title: "React/Next.js", desc: "Ստեղծում եմ արդի, արագ և հուսալի վեբ հավելվածներ՝ կիրառելով վերջին տեխնոլոգիաները" },
      { title: "TypeScript", desc: "Տիպավորված ծրագրավորում հուսալի և սպասարկելի կոդի համար" },
      { title: "Tailwind CSS", desc: "Ստեղծում եմ գեղեցիկ և արձագանքող դիզայն՝ արդյունավետ ու մաքուր կոդով" },
      { title: "Արտադրողականություն", desc: "Օպտիմիզացված հավելվածներ արագ բեռնման ժամանակով" },
      { title: "Հասանելիություն", desc: "Ներառական դիզայն բոլոր օգտատերերի համար" },
      { title: "SEO", desc: "Որոնման համակարգերի օպտիմիզացիա ավելի լավ տեսանելիության համար" },
    ],
  },
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const locale = (lang === 'hy' ? 'hy' : 'en') as 'en' | 'hy';
  const t = content[locale];

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
              href={`/${locale}/projects`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t.viewProjects}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t.contactMe}
            </Link>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {locale === 'en' ? 'Skills & Technologies' : 'Հմտություններ և տեխնոլոգիաներ'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}