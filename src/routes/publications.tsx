import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { FileText, Mic, BookOpen, ClipboardList } from "lucide-react";

type Pub = { type: "journal" | "conf" | "book" | "report"; year: number; titleEn: string; titleFa: string; venueEn: string; venueFa: string };

const pubs: Pub[] = [
  { type: "journal", year: 2024, titleEn: "Mutational signatures and resistance mechanisms in solid tumors", titleFa: "امضاهای جهشی و سازوکارهای مقاومت در تومورهای جامد", venueEn: "Journal of Cancer Genomics", venueFa: "ژورنال ژنومیک سرطان" },
  { type: "journal", year: 2024, titleEn: "Single-cell transcriptomic atlas of tumor microenvironment", titleFa: "اطلس ترنسکریپتومی تک‌سلولی ریزمحیط تومور", venueEn: "Nature Communications (preprint)", venueFa: "Nature Communications (پیش‌انتشار)" },
  { type: "journal", year: 2023, titleEn: "WGCNA-based hub genes in cardiometabolic disease", titleFa: "ژن‌های هاب مبتنی بر WGCNA در بیماری قلبی‌متابولیک", venueEn: "BMC Genomics", venueFa: "BMC Genomics" },
  { type: "conf", year: 2024, titleEn: "AI-assisted variant interpretation pipeline", titleFa: "پایپ‌لاین تفسیر واریانت با کمک هوش مصنوعی", venueEn: "ISCB Annual Meeting", venueFa: "نشست سالانه ISCB" },
  { type: "conf", year: 2023, titleEn: "Population genomics insights from regional cohorts", titleFa: "بینش‌های ژنومیک جمعیتی از کوهورت‌های منطقه‌ای", venueEn: "ESHG Conference", venueFa: "همایش ESHG" },
  { type: "book", year: 2023, titleEn: "Foundations of Modern Bioinformatics — Chapter on RNA-Seq", titleFa: "مبانی بیوانفورماتیک نوین — فصل RNA-Seq", venueEn: "Academic Press", venueFa: "Academic Press" },
  { type: "report", year: 2024, titleEn: "Translational genomics roadmap for the regional ecosystem", titleFa: "نقشه راه ژنومیک انتقالی برای اکوسیستم منطقه‌ای", venueEn: "Internal Research Report", venueFa: "گزارش پژوهشی داخلی" },
];

const tabs = [
  { id: "journal", icon: <FileText className="h-4 w-4" />, en: "Journal Publications", fa: "انتشارات ژورنال" },
  { id: "conf", icon: <Mic className="h-4 w-4" />, en: "Conference Presentations", fa: "ارائه‌های همایش" },
  { id: "book", icon: <BookOpen className="h-4 w-4" />, en: "Book Chapters", fa: "فصل‌های کتاب" },
  { id: "report", icon: <ClipboardList className="h-4 w-4" />, en: "Research Reports", fa: "گزارش‌های پژوهشی" },
] as const;

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Lian Gene" },
      { name: "description", content: "Peer-reviewed journal publications, conference presentations, book chapters and research reports." },
      { property: "og:title", content: "Publications — Lian Gene" },
      { property: "og:description", content: "Our peer-reviewed scientific output." },
      { property: "og:url", content: "/publications" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: PubsPage,
});

function PubsPage() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={{ en: "Publications", fa: "انتشارات" }}
        titleEn="Peer-reviewed science, openly shared"
        titleFa="علم داوری‌شده، به اشتراک گذاشته‌شده"
        subEn="A selection of our journal papers, conference presentations, book chapters and reports."
        subFa="مجموعه‌ای از مقالات ژورنال، ارائه‌های همایش، فصل‌های کتاب و گزارش‌های ما."
      />
      <Section>
        {tabs.map((tab) => {
          const list = pubs.filter((p) => p.type === tab.id);
          if (!list.length) return null;
          return (
            <div key={tab.id} className="mb-14">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg text-primary" style={{ background: "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)" }}>{tab.icon}</span>
                <h2 className="text-xl font-semibold">{en ? tab.en : tab.fa}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {list.map((p, i) => (
                  <article key={i} className="card-surface">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.year} · {en ? p.venueEn : p.venueFa}</div>
                    <h3 className="mt-2 text-base font-semibold leading-snug">{en ? p.titleEn : p.titleFa}</h3>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </Section>
    </>
  );
}
