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
    landingPage: "Landing page (one page, adaptive design) - 40,000֏",
    multiPageSite: "Up to 10 pages site - 100,000֏",
    webApp: "Web application / Dashboard / CRM - 240,000֏",
    readyDesign: "Ready design (Figma / PSD) - 0֏",
    needDesign: "Need design creation - 100,000֏",
    contentAvailable: "Content available (texts / images) - 0֏",
    needContent: "Need content preparation - 50,000֏",
    dashboard: "Dashboard / Admin panel - 100,000֏",
    database: "Data storage / Database - 50,000֏",
    pdfReports: "PDF report generation - 35,000֏",
    userAuth: "User registration / login - 20,000֏",
    apiIntegration: "API / External integration - 25,000֏",
    animations: "Animations and interactive elements - 20,000֏ - 50,000֏",
    contactForm: "Contact form - 10,000֏",
    fast: "Fast (up to 1 week) - 20,000֏",
    standard: "Standard (1-4 weeks) - 0֏",
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
    landingPage: "Landing page (մեկ էջ, ադապտիվ դիզայն) → 40,000֏",
    multiPageSite: "Մինչև 10 էջից բաղկացած կայք → 100,000֏",
    webApp: "Վեբ հավելված / Dashboard / CRM → 240,000֏",
    readyDesign: "Պատրաստի դիզայն կա (Figma / PSD) → 0֏",
    needDesign: "Պահանջվում է դիզայն ստեղծել → 100,000֏",
    contentAvailable: "Բովանդակություն առկա (տեքստեր / պատկերներ) → 0֏",
    needContent: "Պահանջվում է բովանդակության պատրաստում → 50,000֏",
    dashboard: "Դաշբորդ / ադմին-պանել → 100,000֏",
    database: "Տվյալների պահոց / Data Base → 50,000֏",
    pdfReports: "PDF հաշվետվությունների ստեղծում → 35,000֏",
    userAuth: "Օգտագործողների գրանցում / մուտք → 20,000֏",
    apiIntegration: "API / արտաքին ինտեգրացիա → 25,000֏",
    animations: "Անիմացիաներ և ինտերակտիվ էլեմենտներ → 20,000֏ - 50,000֏",
    contactForm: "Կոնտակտային ֆորմա → 10,000֏",
    fast: "Արագ (մինչև 1 շաբաթ) → 20,000֏",
    standard: "Ստանդարտ (1–4 շաբաթ) → 0֏",
  },
};

export default async function TechtaskPage({ params }: PageProps) {

  return <TechtaskClient content={content} />;
}