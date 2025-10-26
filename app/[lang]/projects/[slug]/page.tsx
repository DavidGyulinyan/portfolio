import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

interface Project {
  id: string;
  title: string;
  description: string;
  type: "Landing" | "Web App" | "Admin Panel";
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tasks: string[];
  result: string;
  screenshots: string[];
}

const content = {
  en: {
    backToProjects: "Back to Projects",
    viewDemo: "View Demo",
    viewOnGitHub: "View on GitHub",
    technologiesUsed: "Technologies Used",
    keyTasks: "Key Tasks",
    result: "Result",
    screenshots: "Screenshots",
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
        tasks: [
          "Implement user authentication and authorization",
          "Build shopping cart functionality with local storage",
          "Integrate Stripe payment processing",
          "Create admin dashboard for product management",
          "Optimize for mobile responsiveness"
        ],
        result: "Successfully launched an e-commerce platform serving 1000+ users with 99.9% uptime and positive user feedback.",
        screenshots: ["/screenshots/ecommerce-1.jpg", "/screenshots/ecommerce-2.jpg"]
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
        tasks: [
          "Design modern, minimalist UI/UX",
          "Implement responsive layout for all devices",
          "Add smooth animations and transitions",
          "Optimize SEO and performance",
          "Integrate contact form with email functionality"
        ],
        result: "Created a high-performance portfolio website with Lighthouse score of 95+ and improved client acquisition by 40%.",
        screenshots: ["/screenshots/portfolio-1.jpg", "/screenshots/portfolio-2.jpg"]
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
        tasks: [
          "Design intuitive dashboard interface",
          "Implement data visualization with charts",
          "Create user management system",
          "Add real-time notifications",
          "Ensure accessibility compliance"
        ],
        result: "Developed a robust admin dashboard that improved operational efficiency by 60% and reduced manual tasks.",
        screenshots: ["/screenshots/dashboard-1.jpg", "/screenshots/dashboard-2.jpg"]
      },
    ],
  },
  hy: {
    backToProjects: "Վերադառնալ նախագծերին",
    viewDemo: "Դիտել դեմոն",
    viewOnGitHub: "Դիտել GitHub-ում",
    technologiesUsed: "Օգտագործված տեխնոլոգիաներ",
    keyTasks: "Հիմնական առաջադրանքներ",
    result: "Արդյունք",
    screenshots: "Պատկերներ",
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
        tasks: [
          "Իրականացնել օգտատերերի նույնականացում և լիազորագրում",
          "Ստեղծել զամբյուղի ֆունկցիոնալություն տեղական պահեստով",
          "Ինտեգրել Stripe վճարման մշակում",
          "Ստեղծել ադմին վահանակ ապրանքների կառավարման համար",
          "Օպտիմիզացնել մոբայլ արձագանքողության համար"
        ],
        result: "Հաջողությամբ գործարկել էլեկտրոնային առևտրի հարթակ, որը սպասարկում է 1000+ օգտատերերի 99.9% աշխատասիրությամբ և դրական օգտատերերի հետադարձ կապով։",
        screenshots: ["/screenshots/ecommerce-1.jpg", "/screenshots/ecommerce-2.jpg"]
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
        tasks: [
          "Դիզայն անել ժամանակակից և նվազագույն UI/UX",
          "Իրականացնել արձագանքող դասավորություն բոլոր սարքերի համար",
          "Ավելացնել հարթ անիմացիաներ և անցումներ",
          "Օպտիմիզացնել SEO և աշխատասիրություն",
          "Ինտեգրել կոնտակտային ձև էլեկտրոնային փոստի ֆունկցիոնալությամբ"
        ],
        result: "Ստեղծել բարձր աշխատասիրության պորտֆոլիո կայլ Lighthouse գնահատականով 95+ և բարելավել հաճախորդների ձեռքբերումը 40%-ով։",
        screenshots: ["/screenshots/portfolio-1.jpg", "/screenshots/portfolio-2.jpg"]
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
        tasks: [
          "Դիզայն անել ինտուիտիվ վահանակի ինտերֆեյս",
          "Իրականացնել տվյալների վիզուալիզացիա գծապատկերներով",
          "Ստեղծել օգտատերերի կառավարման համակարգ",
          "Ավելացնել իրական ժամանակի ծանուցումներ",
          "Համոզվել հասանելիության համապատասխանության մեջ"
        ],
        result: "Ստեղծել հուսալի ադմին վահանակ, որը բարելավել է գործառնական արդյունավետությունը 60%-ով և կրճտացրել ձեռքով առաջադրանքները։",
        screenshots: ["/screenshots/dashboard-1.jpg", "/screenshots/dashboard-2.jpg"]
      },
    ],
  },
};

export default async function ProjectDetail({ params }: PageProps) {
  const { lang, slug } = await params;
  const locale = lang as 'en' | 'hy';
  const t = content[locale];
  const project = t.projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          ← {t.backToProjects}
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              {project.type}
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-6 mb-8">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t.viewDemo}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t.viewOnGitHub}
              </a>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t.technologiesUsed}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t.keyTasks}
          </h2>
          <ul className="space-y-3">
            {project.tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Result */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t.result}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.result}
          </p>
        </div>

        {/* Screenshots */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {t.screenshots}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const locales = ['en', 'hy'];
  const projects = content.en.projects; // Use English projects as base

  return locales.flatMap(locale =>
    projects.map((project) => ({
      lang: locale,
      slug: project.id,
    }))
  );
}