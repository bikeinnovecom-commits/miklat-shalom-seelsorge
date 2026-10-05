import { useLanguage, type Language } from "../i18n/LanguageContext";

const languages: { code: Language; label: string }[] = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center" role="group" aria-label="Sprache wählen">
      {languages.map(({ code, label }, index) => (
        <div key={code} className="flex items-center">
          {index > 0 && <span className={light ? "text-white/30" : "text-[#1f2420]/25"}>/</span>}
          <button
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={language === code}
            title={label}
            className={`relative px-2 py-2 text-[10px] font-semibold tracking-[0.18em] transition-colors duration-300 ${
              language === code
                ? "text-[#c9a96a]"
                : light
                  ? "text-white/70 hover:text-white"
                  : "text-[#1f2420]/60 hover:text-[#1f2420]"
            }`}
          >
            {code.toUpperCase()}
            <span
              className={`absolute left-2 right-2 bottom-0 h-px bg-[#c9a96a] transition-transform duration-500 ${
                language === code ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
