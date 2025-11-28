import TechtaskClient from "../../techtask/techtaskClient";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const content = {
  en: {
    title: "Preliminary Technical Task for Website Development",
    subtitle: "Compose a technical task for the developer. Please describe specific functions or desired changes",
    name: "Name",
    email: "Email",
    projectType: "Project Type",
    designContent: "Design and Content",
    functionality: "Functionality",
    deadlines: "Deadlines",
    additionalDescription: "Additional Description",
    submit: "Submit Technical Task",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    additionalPlaceholder: "Describe specific functions or desired changes...",
    landingPage: "Landing page (one page, adaptive design)",
    multiPageSite: "Up to 10 pages site",
    webApp: "Web application / Dashboard / CRM",
    readyDesign: "Ready design (Figma / PSD)",
    needDesign: "Need design creation",
    contentAvailable: "Content available (texts / images)",
    needContent: "Need content preparation",
    dashboard: "Dashboard / Admin panel",
    database: "Data storage / Database",
    pdfReports: "PDF report generation",
    userAuth: "User registration / login",
    apiIntegration: "API / External integration",
    animations: "Animations and interactive elements",
    contactForm: "Contact form",
    fast: "Fast (up to 1 week)",
    standard: "Standard (1-4 weeks)",
  },
  hy: {
    title: "Կայքի պատրաստման նախնական տեխնիկական առաջադրանք",
    subtitle: "Կազմեք տեխնիկական առաջադրանքը ծրագրավորողի համար։ Խնդրում ենք նկարագրել հատուկ ֆունկցիաները կամ ցանկալի փոփոխությունները",
    name: "Անուն",
    email: "Էլ․ փոստ",
    projectType: "Նախագծի տեսակը",
    designContent: "Դիզայն և բովանդակություն",
    functionality: "Ֆունկցիոնալություն",
    deadlines: "Ժամկետներ",
    additionalDescription: "Հավելյալ նկարագրություն",
    submit: "Ուղարկել տեխնիկական առաջադրանքը",
    namePlaceholder: "Մուտքագրեք ձեր անունը",
    emailPlaceholder: "Մուտքագրեք ձեր էլ․ հասցեն",
    additionalPlaceholder: "Նկարագրեք հատուկ ֆունկցիաները կամ ցանկալի փոփոխությունները...",
    landingPage: "Landing page (մեկ էջ, ադապտիվ դիզայն)",
    multiPageSite: "Մինչև 10 էջից բաղկացած կայք",
    webApp: "Վեբ հավելված / Dashboard / CRM",
    readyDesign: "Պատրաստի դիզայն կա (Figma / PSD)",
    needDesign: "Պահանջվում է դիզայն ստեղծել",
    contentAvailable: "Բովանդակություն առկա (տեքստեր / պատկերներ)",
    needContent: "Պահանջվում է բովանդակության պատրաստում",
    dashboard: "Դաշբորդ / ադմին-պանել",
    database: "Տվյալների պահոց / Data Base",
    pdfReports: "PDF հաշվետվությունների ստեղծում",
    userAuth: "Օգտագործողների գրանցում / մուտք",
    apiIntegration: "API / արտաքին ինտեգրացիա",
    animations: "Անիմացիաներ և ինտերակտիվ էլեմենտներ",
    contactForm: "Կոնտակտային ֆորմա",
    fast: "Արագ (մինչև 1 շաբաթ)",
    standard: "Ստանդարտ (1–4 շաբաթ)",
  },
};

export default async function TechtaskPage({ params }: PageProps) {

  return <TechtaskClient content={content} />;
}