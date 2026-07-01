import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { Lightbulb, Rocket, Brain, Atom, ShieldCheck, FileBadge, Map } from "lucide-react";

const items = [
  { i: <Lightbulb className="h-5 w-5" />, en: "Technology Development", fa: "توسعه فناوری", dEn: "Developing in-house genomic tools, assays and analytical platforms.", dFa: "توسعه ابزارها، آزمون‌ها و سکوهای تحلیلی داخلی." },
  { i: <Rocket className="h-5 w-5" />, en: "Innovation Programs", fa: "برنامه‌های نوآوری", dEn: "Translational R&D programs bridging research and industry.", dFa: "برنامه‌های پژوهش و توسعه انتقالی، پیونددهنده علم و صنعت." },
  { i: <Atom className="h-5 w-5" />, en: "Product Development", fa: "توسعه محصول", dEn: "From prototype to scalable scientific products and services.", dFa: "از نمونه اولیه تا محصولات و خدمات علمی مقیاس‌پذیر." },
  { i: <Brain className="h-5 w-5" />, en: "AI-driven Genomics", fa: "ژنومیک مبتنی بر هوش مصنوعی", dEn: "Deep learning for variant scoring, biomarkers and precision medicine.", dFa: "یادگیری عمیق برای امتیازدهی واریانت، بیومارکر و پزشکی دقیق." },
  { i: <Atom className="h-5 w-5" />, en: "Future Scientific Products", fa: "محصولات علمی آینده", dEn: "Pipeline of novel genomic kits, software and analytical services.", dFa: "خط لوله‌ای از کیت‌ها، نرم‌افزارها و خدمات تحلیلی نوین." },
  { i: <ShieldCheck className="h-5 w-5" />, en: "Intellectual Property", fa: "مالکیت فکری", dEn: "IP-aware research with documentation, data and provenance controls.", dFa: "پژوهش با ملاحظات IP و کنترل مستندات، داده و منشأ." },
  { i: <FileBadge className="h-5 w-5" />, en: "Patent Strategy", fa: "راهبرد ثبت اختراع", dEn: "Strategy and support for invention disclosure and patenting.", dFa: "راهبرد و پشتیبانی برای افشای اختراع و ثبت پتنت." },
  { i: <Map className="h-5 w-5" />, en: "Knowledge-Based Company Roadmap", fa: "نقشه راه دانش‌بنیان", dEn: "Roadmap aligned with national knowledge-based company frameworks.", dFa: "نقشه راه هم‌راستا با چارچوب‌های ملی شرکت دانش‌بنیان." },
];

export const Route = createFileRoute("/rnd")({
  head: () => ({
    meta: [
      { title: "R&D — Lian Gene" },
      { name: "description", content: "Technology development, innovation programs, AI-driven genomics, IP and our knowledge-based company roadmap." },
      { property: "og:title", content: "R&D — Lian Gene" },
      { property: "og:description", content: "Positioning Lian Gene as a future knowledge-based genomics company." },
      { property: "og:url", content: "/rnd" },
    ],
    links: [{ rel: "canonical", href: "/rnd" }],
  }),
  component: RnDPage,
});

function RnDPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: "Research & Development", fa: "تحقیق و توسعه" }}
        titleEn="Building the future of knowledge-based genomics"
        titleFa="ساختن آینده ژنومیک دانش‌بنیان"
        subEn="A long-term R&D program developing tools, AI and translational products that connect discovery to scalable impact."
        subFa="برنامه‌ای بلندمدت در R&D برای توسعه ابزار، هوش مصنوعی و محصولات انتقالی که کشف را به اثر مقیاس‌پذیر می‌رسانند."
      />
      <Section>
        <SectionHead eyebrow={{ en: "Pillars", fa: "ستون‌ها" }} titleEn="Our R&D pillars" titleFa="ستون‌های تحقیق و توسعه" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => <FeatureCard key={i} icon={s.i} titleEn={s.en} titleFa={s.fa} descEn={s.dEn} descFa={s.dFa} />)}
        </div>
      </Section>
    </>
  );
}
