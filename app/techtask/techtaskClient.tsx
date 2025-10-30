"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface ContentType {
  en: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    projectType: string;
    designContent: string;
    functionality: string;
    deadlines: string;
    additionalDescription: string;
    submit: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    additionalPlaceholder: string;
    landingPage: string;
    multiPageSite: string;
    webApp: string;
    readyDesign: string;
    needDesign: string;
    contentAvailable: string;
    needContent: string;
    dashboard: string;
    database: string;
    pdfReports: string;
    userAuth: string;
    apiIntegration: string;
    animations: string;
    contactForm: string;
    fast: string;
    standard: string;
  };
  hy: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    projectType: string;
    designContent: string;
    functionality: string;
    deadlines: string;
    additionalDescription: string;
    submit: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    additionalPlaceholder: string;
    landingPage: string;
    multiPageSite: string;
    webApp: string;
    readyDesign: string;
    needDesign: string;
    contentAvailable: string;
    needContent: string;
    dashboard: string;
    database: string;
    pdfReports: string;
    userAuth: string;
    apiIntegration: string;
    animations: string;
    contactForm: string;
    fast: string;
    standard: string;
  };
}

interface TechtaskClientProps {
  content: ContentType;
}

export default function TechtaskClient({ content }: TechtaskClientProps) {
  const { language } = useLanguage();
  const t = content[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    design: "",
    content: "",
    functionality: [] as string[],
    deadline: "",
    additionalDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        functionality: [...formData.functionality, name],
      });
    } else {
      setFormData({
        ...formData,
        functionality: formData.functionality.filter((item) => item !== name),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Design: ${formData.design}
Content: ${formData.content}
Functionality: ${formData.functionality.join(", ")}
Deadline: ${formData.deadline}
Additional Description: ${formData.additionalDescription}
    `.trim();

    const telegramUrl = `https://t.me/DavidGyulinyan?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.name} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder={t.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.email} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder={t.emailPlaceholder}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.projectType} *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">{language === "en" ? "Select project type" : "Ընտրեք նախագծի տեսակը"}</option>
              <option value="Landing page">{t.landingPage}</option>
              <option value="Multi-page site">{t.multiPageSite}</option>
              <option value="Web application">{t.webApp}</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="design"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.designContent} - Design *
              </label>
              <select
                id="design"
                name="design"
                required
                value={formData.design}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="">{language === "en" ? "Select design option" : "Ընտրեք դիզայնի տարբերակը"}</option>
                <option value="Ready design">{t.readyDesign}</option>
                <option value="Need design creation">{t.needDesign}</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.designContent} - Content *
              </label>
              <select
                id="content"
                name="content"
                required
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="">{language === "en" ? "Select content option" : "Ընտրեք բովանդակության տարբերակը"}</option>
                <option value="Content available">{t.contentAvailable}</option>
                <option value="Need content preparation">{t.needContent}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.functionality}
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="dashboard"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.dashboard}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="database"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.database}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="pdfReports"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.pdfReports}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="userAuth"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.userAuth}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="apiIntegration"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.apiIntegration}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="animations"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.animations}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="contactForm"
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {t.contactForm}
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.deadlines} *
            </label>
            <select
              id="deadline"
              name="deadline"
              required
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">{language === "en" ? "Select deadline" : "Ընտրեք ժամկետը"}</option>
              <option value="Fast">{t.fast}</option>
              <option value="Standard">{t.standard}</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="additionalDescription"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.additionalDescription}
            </label>
            <textarea
              id="additionalDescription"
              name="additionalDescription"
              rows={6}
              value={formData.additionalDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-vertical"
              placeholder={t.additionalPlaceholder}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.submit}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}