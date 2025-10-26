"use client";

import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: 'en' as const, flag: '🇺🇸' },
  { code: 'hy' as const, flag: '🇦🇲' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center px-2 py-1 text-lg transition-colors cursor-pointer ${
            language === lang.code
              ? "text-blue-600"
              : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
          title={lang.code === 'en' ? 'English' : 'Հայերեն'}
        >
          <span>{lang.flag}</span>
        </button>
      ))}
    </div>
  );
}