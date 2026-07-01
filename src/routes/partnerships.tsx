import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { GraduationCap, Building2, FlaskConical, Pill, Stethoscope, Globe2 } from "lucide-react";

const items = [
  { i: <GraduationCap className="h-5 w-5" />, en: "Universities", fa: "دانشگاه‌ها", dEn: "Joint research, supervision, and curriculum collaboration.", dFa: "پژوهش مشترک، راهنمایی و همکاری برنامه درسی." },
  { i: <FlaskConical className="h-5 w-5" />, en: "Research Institutes", fa: "پژوهشگاه‌ها", dEn: "Co-investigation, shared infrastructure and pipelines.", dFa: "هم‌پژوهی، زیرساخت و پایپ‌لاین مشترک." },
  { i: <Building2 className="h-5 w-5" />, en: "Biotechnology Companies", fa: "شرکت‌های زیست‌فناوری", dEn: "Co-development, technology transfer and analytics-as-a-service.", dFa: "هم‌توسعه، انتقال فناوری و تحلیل به‌مثابه خدمت." },
  { i: <Pill className="h-5 w-5" />, en: "Pharmaceutical Companies", fa: "شرکت‌های دارویی", dEn: "Biomarker discovery, target validation and precision trials.", dFa: "کشف بیومارکر، اعتبارسنجی هدف و کارآزمایی‌های دقیق." },
  { i: <Stethoscope className="h-5 w-5" />, en: "Healthcare Organizations", fa: "سازمان‌های سلامت", dEn: "Clinical genomics programs and translational pilots.", dFa: "برنامه‌های ژنومیک بالینی و پایلوت‌های انتقالی." },
  { i: <Globe2 className="h-5 w-5" />, en: "International Collaborations", fa: "همکاری‌های بین‌المللی", dEn: "Cross-border research, training and publication partnerships.", dFa: "پژوهش، آموزش و انتشار مشترک فرامرزی." },
];

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — Lian Gene" },
      { name: "description", content: "Universities, research institutes, biotech and pharma companies, healthcare organizations and international collaborations." },
      { property: "og:title", content: "Partnerships — Lian Gene" },
      { property: "og:description", content: "Strategic scientific and industrial alliances." },
      { property: "og:url", content: "/partnerships" },
    ],
    links: [{ rel: "canonical", href: "/partnerships" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={{ en: "Partnerships", fa: "همکاری‌ها" }}
        titleEn="Built with academia, industry and clinics"
        titleFa="ساخته‌شده با دانشگاه، صنعت و کلینیک"
        subEn="We partner with leading institutions to bring scientific rigor to translational programs."
        subFa="با مؤسسات پیشرو همکاری می‌کنیم تا دقت علمی را به برنامه‌های انتقالی برسانیم."
      >
        <Link to="/contact" className="btn-primary">{en ? "Start a Partnership" : "آغاز همکاری"}</Link>
      </PageHero>
      <Section>
        <SectionHead eyebrow={{ en: "Who we work with", fa: "همکاران ما" }} titleEn="Our partner ecosystem" titleFa="اکوسیستم همکاران ما" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => <FeatureCard key={i} icon={s.i} titleEn={s.en} titleFa={s.fa} descEn={s.dEn} descFa={s.dFa} />)}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid h-20 place-items-center rounded-xl border border-border bg-surface text-xs font-semibold text-muted-foreground">
              {en ? "Partner Logo" : "لوگوی همکار"}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
