

type LanguagePickerProps = {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
};

const languages = [
  { code: "en", name: "English" },
  { code: "pt", name: "Portuguese" },
  { code: "es", name: "Spanish" },
  { code: "ru", name: "Russian" },
  { code: "tr", name: "Turkish" },
  { code: "fr", name: "French" },
];

const LanguagePicker = ({
  selectedLanguage,
  onLanguageChange,
}: LanguagePickerProps) => {
  return (
    <div className="mt-4">
      <label
        htmlFor="language-select"
        className="block text-sm font-medium text-gray-700"
      >
        Select target language for translation:
      </label>
      <select
        id="language-select"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguagePicker;
