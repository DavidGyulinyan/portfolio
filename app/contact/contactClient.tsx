"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface ContentType {
  en: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sendMessage: string;
    otherWays: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  hy: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sendMessage: string;
    otherWays: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
}

interface ContactClientProps {
  content: ContentType;
}

export default function ContactClient({ content }: ContactClientProps) {
  const { language } = useLanguage();
  const t = content[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const telegramMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n${formData.message}`;
    const telegramUrl = `https://t.me/DavidGyulinyan?text=${encodeURIComponent(
      telegramMessage
    )}`;

    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="backdrop-blur-sm bg-white/20 dark:bg-black/20 p-8 rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl">
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white backdrop-blur-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white backdrop-blur-sm"
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.subject} *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white backdrop-blur-sm"
                placeholder={t.subjectPlaceholder}
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t.message} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white resize-vertical backdrop-blur-sm"
                placeholder={t.messagePlaceholder}
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="gradient-warm text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t.sendMessage}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}