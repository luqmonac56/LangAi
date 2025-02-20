"use client";

import { useLanguage } from "@/context/LanguageContext";

type TranslationButtonProps = {
  text: string;
  language?: string;
  targetLanguage: string;
};

const TranslationButton = ({
  text,
  language,
  targetLanguage,
}: TranslationButtonProps) => {
  const { handleTranslate, translatingMessage } = useLanguage(); 

  return (
    <button
      className="mt-2 ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      onClick={() => handleTranslate(text, language, targetLanguage)} 
      disabled={translatingMessage === text}
    >
      {translatingMessage === text ? "Translating..." : "Translate"}
    </button>
  );
};

export default TranslationButton;
