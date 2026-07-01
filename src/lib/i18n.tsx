import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "fa";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
  t: <K extends keyof typeof dict.en>(key: K) => (typeof dict.en)[K];
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "fa") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    }
  }, [lang]);

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: (l) => {
      setLangState(l);
      try { window.localStorage.setItem("lang", l); } catch {}
    },
    dir: lang === "fa" ? "rtl" : "ltr",
    t: (key) => (dict[lang] as any)[key] ?? (dict.en as any)[key],
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

/** Helper: pick({ en, fa }) using current language */
export function useBi() {
  const { lang } = useLang();
  return <T,>(v: { en: T; fa: T }) => v[lang];
}

export const dict = {
  en: {
    brand: "Pouya Pazhouhesh Lian Gene",
    brandShort: "Lian Gene",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_bioinformatics: "Bioinformatics",
    nav_genomics: "Genomics",
    nav_rnd: "R&D",
    nav_research_innovation: "Research & Innovation",
    nav_publications: "Publications",
    nav_training: "Training",
    nav_blog: "Blog",
    nav_partnerships: "Partnerships",
    nav_roadmap: "Roadmap",
    nav_founder: "Founder",
    nav_contact: "Contact",
    cta_consult: "Request Consultation",
    cta_collab: "Research Collaboration",
    cta_learn: "Learn More",
    footer_tag: "Research, bioinformatics and genomic innovation for healthcare and biotechnology.",
    rights: "All rights reserved.",
    located: "Tehran, Iran",
  },
  fa: {
    brand: "پویا پژوهش لیان ژن",
    brandShort: "لیان ژن",
    nav_home: "خانه",
    nav_about: "درباره ما",
    nav_services: "خدمات",
    nav_bioinformatics: "بیوانفورماتیک",
    nav_genomics: "ژنومیکس",
    nav_rnd: "تحقیق و توسعه",
    nav_research_innovation: "پژوهش و نوآوری",
    nav_publications: "انتشارات",
    nav_training: "آموزش",
    nav_blog: "وبلاگ",
    nav_partnerships: "همکاری‌ها",
    nav_roadmap: "نقشه راه",
    nav_founder: "بنیان‌گذار",
    nav_contact: "تماس",
    cta_consult: "درخواست مشاوره",
    cta_collab: "همکاری پژوهشی",
    cta_learn: "اطلاعات بیشتر",
    footer_tag: "پژوهش، بیوانفورماتیک و نوآوری ژنومی برای سلامت و زیست‌فناوری.",
    rights: "تمامی حقوق محفوظ است.",
    located: "تهران، ایران",
  },
} as const;
