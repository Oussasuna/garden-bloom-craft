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

  const flushBatch = useCallback(async () => {
    if (lang === "EN" || pendingTexts.current.size === 0) return;

    const textsToTranslate = Array.from(pendingTexts.current).slice(0, MAX_BATCH_SIZE);
    pendingTexts.current.clear();

    // Skip already in-flight
    const filtered = textsToTranslate.filter((t) => !inflightRef.current.has(`${lang}:${t}`));
    if (filtered.length === 0) return;

    filtered.forEach((t) => inflightRef.current.add(`${lang}:${t}`));
    setIsTranslating(true);

    try {
      const { data, error } = await supabase.functions.invoke("translate", {
        body: { texts: filtered, targetLang: lang },
      });

      if (error) {
        console.error("Translation error:", error);
        toast.error("Translation failed. Showing original text.");
        return;
      }

      const translations: string[] = data?.translations || filtered;

      setCache((prev) => {
        const langCache = { ...(prev[lang] || {}) };
        filtered.forEach((original, i) => {
          langCache[original] = translations[i] || original;
        });
        const newCache = { ...prev, [lang]: langCache };
        saveCache(newCache);
        return newCache;
      });
    } catch (e) {
      console.error("Translation request failed:", e);
    } finally {
      filtered.forEach((t) => inflightRef.current.delete(`${lang}:${t}`));
      setIsTranslating(false);
    }
  }, [lang]);

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
