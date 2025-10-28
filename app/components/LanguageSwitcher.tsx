"use client";

import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: 'en' as const, flag: '/us-flag.svg' },
  { code: 'hy' as const, flag: '/am-flag.svg' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find(lang => lang.code === language);
  const otherLang = languages.find(lang => lang.code !== language);

  return (
    <div className="flex items-center space-x-2">
      {otherLang && (
        <button
          onClick={() => setLanguage(otherLang.code)}
          className="flex items-center px-2 py-1 text-lg transition-colors cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          title={otherLang.code === 'en' ? 'English' : 'Հայերեն'}
        >
          <img src={otherLang.flag} alt={`${otherLang.code === 'en' ? 'English' : 'Armenian'} flag`} className="w-5 h-3" />
        </button>
      )}
    </div>
  );
}