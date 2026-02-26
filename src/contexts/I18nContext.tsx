import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations } from "@/i18n/translations";

export const languages = [
  { code: "EN", name: "English" },
  { code: "FR", name: "Français" },
  { code: "ES", name: "Español" },
  { code: "AR", name: "العربية" },
  { code: "DE", name: "Deutsch" },
  { code: "IT", name: "Italiano" },
  { code: "PT", name: "Português" },
  { code: "NL", name: "Nederlands" },
  { code: "TR", name: "Türkçe" },
  { code: "RU", name: "Русский" },
  { code: "JA", name: "日本語" },
  { code: "ZH", name: "中文" },
  { code: "KO", name: "한국어" },
  { code: "HI", name: "हिन्दी" },
];

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (text: string) => string;
  isTranslating: boolean;
}

const I18nContext = createContext<I18nContextType>({
  lang: "EN",
  setLang: () => {},
  t: (text: string) => text,
  isTranslating: false,
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("i18n_lang") || "EN";
  });

  const setLang = useCallback((newLang: string) => {
    setLangState(newLang);
    localStorage.setItem("i18n_lang", newLang);
  }, []);

  // RTL support for Arabic
  useEffect(() => {
    const dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = useCallback(
    (text: string): string => {
      if (!text || lang === "EN") return text;
      return translations[lang]?.[text] || text;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isTranslating: false }}>
      {children}
    </I18nContext.Provider>
  );
};
