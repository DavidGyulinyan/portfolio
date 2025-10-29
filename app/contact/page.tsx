"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const content = {
  en: {
    title: "Get In Touch via Telegram",
    subtitle:
      "Have a project in mind? Let's discuss how we can work together on Telegram.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    otherWays: "Contact me",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "Project inquiry",
    messagePlaceholder: "Tell me about your project...",
  },
  hy: {
    title: "Կապվեք ինձ հետ Telegram-ով",
    subtitle:
      "Որևէ նախագիծ ունե՞ք մտքում։ Եկեք քննարկենք, թե ինչպես կարող ենք աշխատել միասին։",
    name: "Անուն",
    email: "Էլեկտրոնային փոստ",
    subject: "Թեմա",
    message: "Հաղորդագրություն",
    sendMessage: "Ուղարկել հաղորդագրություն",
    otherWays: "Կապվեք ինձ հետ",
    namePlaceholder: "Ձեր անունը",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "Նախագծի հարցում",
    messagePlaceholder: "Պատմեք ձեր նախագծի մասին...",
  },
};

export default function Contact() {
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

    const telegramMessage = `Name: ${formData.name}\nEmail: ${formData.email}\n${formData.message}`;
    const telegramUrl = `https://t.me/DavidGyulinyan?text=${encodeURIComponent(
      telegramMessage
    )}`;

    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-vertical"
              placeholder={t.messagePlaceholder}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.sendMessage}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
