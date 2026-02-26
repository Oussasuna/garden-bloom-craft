import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const languages = [
  { code: "EN", name: "English" },
  { code: "FR", name: "French" },
  { code: "ES", name: "Spanish" },
  { code: "AR", name: "Arabic" },
  { code: "DE", name: "German" },
  { code: "IT", name: "Italian" },
  { code: "PT", name: "Portuguese" },
  { code: "NL", name: "Dutch" },
  { code: "TR", name: "Turkish" },
  { code: "RU", name: "Russian" },
  { code: "JA", name: "Japanese" },
  { code: "ZH", name: "Mandarin Chinese" },
  { code: "KO", name: "Korean" },
  { code: "HI", name: "Hindi" },
];

type TranslationCache = Record<string, Record<string, string>>; // lang -> { original: translated }

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

// Load cache from localStorage
function loadCache(): TranslationCache {
  try {
    const stored = localStorage.getItem("i18n_cache");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveCache(cache: TranslationCache) {
  try {
    localStorage.setItem("i18n_cache", JSON.stringify(cache));
  } catch {
    // localStorage full, ignore
  }
}

const BATCH_DELAY = 100; // ms to wait before sending a batch
const MAX_BATCH_SIZE = 50;

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("i18n_lang") || "EN";
  });
  const [cache, setCache] = useState<TranslationCache>(loadCache);
  const [isTranslating, setIsTranslating] = useState(false);
  const pendingTexts = useRef<Set<string>>(new Set());
  const batchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inflightRef = useRef<Set<string>>(new Set());

  const setLang = useCallback((newLang: string) => {
    setLangState(newLang);
    localStorage.setItem("i18n_lang", newLang);
  }, []);

  const langRef2 = useRef(lang);
  langRef2.current = lang;

  const cacheRef = useRef(cache);
  cacheRef.current = cache;

  const flushBatch = useCallback(async () => {
    const currentLang = langRef2.current;
    if (currentLang === "EN" || pendingTexts.current.size === 0) return;

    const textsToTranslate = Array.from(pendingTexts.current).slice(0, MAX_BATCH_SIZE);
    pendingTexts.current.clear();

    // Skip already cached or in-flight
    const filtered = textsToTranslate.filter(
      (t) => !inflightRef.current.has(`${currentLang}:${t}`) && !cacheRef.current[currentLang]?.[t]
    );
    if (filtered.length === 0) return;

    filtered.forEach((t) => inflightRef.current.add(`${currentLang}:${t}`));
    setIsTranslating(true);

    try {
      console.log(`[i18n] Translating ${filtered.length} texts to ${currentLang}`);
      const { data, error } = await supabase.functions.invoke("translate", {
        body: { texts: filtered, targetLang: currentLang },
      });

      if (error) {
        console.error("Translation error:", error);
        toast.error("Translation failed. Showing original text.");
        return;
      }

      const translations: string[] = data?.translations || filtered;

      setCache((prev) => {
        const langCache = { ...(prev[currentLang] || {}) };
        filtered.forEach((original, i) => {
          langCache[original] = translations[i] || original;
        });
        const newCache = { ...prev, [currentLang]: langCache };
        saveCache(newCache);
        return newCache;
      });
    } catch (e) {
      console.error("Translation request failed:", e);
    } finally {
      filtered.forEach((t) => inflightRef.current.delete(`${currentLang}:${t}`));
      setIsTranslating(false);
    }
  }, []);

  const t = useCallback(
    (text: string): string => {
      if (!text || lang === "EN") return text;

      // Check cache
      const cached = cache[lang]?.[text];
      if (cached) return cached;

      // Queue for translation
      if (!pendingTexts.current.has(text) && !inflightRef.current.has(`${lang}:${text}`)) {
        pendingTexts.current.add(text);

        if (batchTimer.current) clearTimeout(batchTimer.current);
        batchTimer.current = setTimeout(flushBatch, BATCH_DELAY);
      }

      return text; // Return original until translation arrives
    },
    [lang, cache, flushBatch]
  );

  // When language changes, trigger translation of any pending texts
  useEffect(() => {
    if (lang !== "EN") {
      // Re-render will cause t() calls which queue texts
      const timer = setTimeout(flushBatch, BATCH_DELAY + 50);
      return () => clearTimeout(timer);
    }
  }, [lang, flushBatch]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isTranslating }}>
      {children}
    </I18nContext.Provider>
  );
};
