import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { Dna, Microscope, GitBranch, FileText, Stethoscope, HeartPulse, Users, Activity } from "lucide-react";

const items = [
  { i: <Dna className="h-5 w-5" />, en: "Whole Genome Sequencing", fa: "توالی‌یابی کل ژنوم", dEn: "WGS design, processing and interpretation at population and clinical scale.", dFa: "طراحی، پردازش و تفسیر WGS در مقیاس جمعیتی و بالینی." },
  { i: <Dna className="h-5 w-5" />, en: "Whole Exome Sequencing", fa: "توالی‌یابی کل اگزوم", dEn: "WES pipelines for rare disease and diagnostic applications.", dFa: "پایپ‌لاین WES برای بیماری‌های نادر و کاربرد تشخیصی." },
  { i: <GitBranch className="h-5 w-5" />, en: "Variant Calling", fa: "فراخوانی واریانت", dEn: "Germline & somatic, SV/CNV calling with QC and validation.", dFa: "ژرم‌لاین و سوماتیک، فراخوانی SV/CNV با QC و اعتبارسنجی." },
  { i: <FileText className="h-5 w-5" />, en: "Genome Annotation", fa: "حاشیه‌نویسی ژنوم", dEn: "Functional, regulatory and clinical annotation pipelines.", dFa: "پایپ‌لاین حاشیه‌نویسی عملکردی، تنظیمی و بالینی." },
  { i: <Stethoscope className="h-5 w-5" />, en: "Precision Medicine", fa: "پزشکی دقیق", dEn: "Genome-guided care and biomarker-driven therapy selection.", dFa: "مراقبت ژنوم‌محور و انتخاب درمان مبتنی بر بیومارکر." },
  { i: <Microscope className="h-5 w-5" />, en: "Cancer Genomics", fa: "ژنومیک سرطان", dEn: "Tumor profiling, signatures, neoantigens and resistance mapping.", dFa: "پروفایلینگ تومور، امضاها، نئوآنتی‌ژن‌ها و نقشه‌برداری مقاومت." },
  { i: <Users className="h-5 w-5" />, en: "Human Genetics", fa: "ژنتیک انسانی", dEn: "Population, family-based and rare-variant association studies.", dFa: "مطالعات جمعیتی، خانوادگی و واریانت‌های نادر." },
  { i: <HeartPulse className="h-5 w-5" />, en: "Disease Genetics", fa: "ژنتیک بیماری", dEn: "Cardiometabolic, neurological and oncological genomic studies.", dFa: "مطالعات ژنومی قلبی‌متابولیک، عصبی و انکولوژیک." },
];

export const Route = createFileRoute("/genomics")({
  head: () => ({
    meta: [
      { title: "Genomics — Lian Gene" },
      { name: "description", content: "WGS, WES, variant calling, annotation, precision medicine, cancer genomics and human disease genetics." },
      { property: "og:title", content: "Genomics — Lian Gene" },
      { property: "og:description", content: "Population-scale and clinical genomics from a research-led team." },
      { property: "og:url", content: "/genomics" },
    ],
    links: [{ rel: "canonical", href: "/genomics" }],
  }),
  component: GenomicsPage,
});

function GenomicsPage() {
  return (
    <>
      <PageHero
        eyebrow={{ en: "Genomics", fa: "ژنومیکس" }}
        titleEn="Genomics from research to precision care"
        titleFa="ژنومیک از پژوهش تا مراقبت دقیق"
        subEn="Population-scale and clinical genomics — engineered for accuracy, transparency and translation."
        subFa="ژنومیک در مقیاس جمعیتی و بالینی — طراحی‌شده برای دقت، شفافیت و ترجمه."
      />
      <Section>
        <SectionHead eyebrow={{ en: "Capabilities", fa: "توانمندی‌ها" }} titleEn="What we deliver" titleFa="آنچه ارائه می‌دهیم" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => <FeatureCard key={i} icon={s.i} titleEn={s.en} titleFa={s.fa} descEn={s.dEn} descFa={s.dFa} />)}
        </div>
      </Section>
    </>
  );
}
