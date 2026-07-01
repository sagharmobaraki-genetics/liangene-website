import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { BarChart3, Boxes, Layers, GitBranch, Network, Brain, FlaskConical, LineChart, Workflow } from "lucide-react";

const items = [
  { i: <BarChart3 className="h-5 w-5" />, en: "RNA-Seq", fa: "RNA-Seq", dEn: "Bulk RNA-Seq analysis with reproducible pipelines and publication-grade reporting.", dFa: "تحلیل RNA-Seq با پایپ‌لاین‌های بازتولیدپذیر و گزارش در سطح انتشار." },
  { i: <Boxes className="h-5 w-5" />, en: "Single-Cell RNA-Seq", fa: "تک‌سلولی RNA-Seq", dEn: "QC, integration, clustering, annotation, trajectory and cell-cell communication.", dFa: "کنترل کیفیت، یکپارچه‌سازی، خوشه‌بندی، حاشیه‌نویسی، مسیر و ارتباط سلول‌-سلول." },
  { i: <Layers className="h-5 w-5" />, en: "Multi-Omics", fa: "چندامیکس", dEn: "Joint analysis of genomic, transcriptomic, proteomic and epigenomic data.", dFa: "تحلیل توأم داده‌های ژنومی، ترنسکریپتومی، پروتئومی و اپی‌ژنومی." },
  { i: <LineChart className="h-5 w-5" />, en: "Differential Expression", fa: "بیان افتراقی", dEn: "DESeq2 / edgeR / limma with batch correction and robust statistics.", dFa: "DESeq2/edgeR/limma همراه با اصلاح بچ و آماره‌های قوی." },
  { i: <Network className="h-5 w-5" />, en: "Pathway Analysis", fa: "تحلیل مسیر", dEn: "GSEA, GO, Reactome, KEGG and disease-context enrichment.", dFa: "GSEA، GO، Reactome، KEGG و غنی‌سازی زمینه بیماری." },
  { i: <Network className="h-5 w-5" />, en: "WGCNA", fa: "WGCNA", dEn: "Co-expression networks, modules and hub-gene discovery.", dFa: "شبکه هم‌بیانی، ماژول‌ها و کشف ژن‌های هاب." },
  { i: <FlaskConical className="h-5 w-5" />, en: "Metagenomics", fa: "متاژنومیک", dEn: "16S / shotgun microbiome composition and function.", dFa: "ترکیب و عملکرد میکروبیوم 16S/شاتگان." },
  { i: <Workflow className="h-5 w-5" />, en: "NGS Pipelines", fa: "پایپ‌لاین NGS", dEn: "Nextflow / Snakemake pipelines, containerized and version-controlled.", dFa: "پایپ‌لاین‌های Nextflow/Snakemake، کانتینری و نسخه‌کنترل‌شده." },
  { i: <Brain className="h-5 w-5" />, en: "AI for Genomics", fa: "هوش مصنوعی در ژنومیک", dEn: "Deep learning for variant interpretation, expression and biomarker discovery.", dFa: "یادگیری عمیق برای تفسیر واریانت، بیان و کشف بیومارکر." },
];

export const Route = createFileRoute("/bioinformatics")({
  head: () => ({
    meta: [
      { title: "Bioinformatics — Lian Gene" },
      { name: "description", content: "RNA-Seq, single-cell, multi-omics, WGCNA, metagenomics, NGS pipelines, and AI for genomics." },
      { property: "og:title", content: "Bioinformatics — Lian Gene" },
      { property: "og:description", content: "Scientific dashboards and modern data visualization for genomic analysis." },
      { property: "og:url", content: "/bioinformatics" },
    ],
    links: [{ rel: "canonical", href: "/bioinformatics" }],
  }),
  component: BioPage,
});

function BioPage() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={{ en: "Bioinformatics", fa: "بیوانفورماتیک" }}
        titleEn="Reproducible, publication-grade bioinformatics"
        titleFa="بیوانفورماتیک بازتولیدپذیر در سطح انتشار"
        subEn="From raw sequencing data to interpretable biology — engineered pipelines, transparent QC, and modern visualization."
        subFa="از داده خام توالی تا زیست‌شناسی قابل تفسیر — پایپ‌لاین‌های مهندسی‌شده، QC شفاف و مصورسازی مدرن."
      />
      <Section>
        <SectionHead eyebrow={{ en: "Capabilities", fa: "توانمندی‌ها" }} titleEn="Methods we deliver" titleFa="روش‌هایی که ارائه می‌دهیم" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => <FeatureCard key={i} icon={s.i} titleEn={s.en} titleFa={s.fa} descEn={s.dEn} descFa={s.dFa} />)}
        </div>
      </Section>

      {/* Mock dashboard */}
      <section className="border-y border-border bg-surface">
        <div className="container-prose py-16">
          <SectionHead center eyebrow={{ en: "Visualization", fa: "مصورسازی" }} titleEn="Interactive scientific dashboards" titleFa="داشبوردهای علمی تعاملی" subEn="We build interpretable, interactive views of complex omics data." subFa="نماهای تعاملی و قابل تفسیر برای داده‌های پیچیده امیکس می‌سازیم." />
          <div className="grid gap-5 md:grid-cols-3">
            <DashCard title={en ? "Expression Heatmap" : "هیت‌مپ بیان"}>
              <div className="grid grid-cols-12 gap-[2px]">
                {Array.from({ length: 96 }).map((_, i) => {
                  const v = (Math.sin(i) + 1) / 2;
                  return <div key={i} className="aspect-square rounded-[2px]" style={{ background: `color-mix(in oklab, var(--brand-blue) ${10 + v * 80}%, var(--brand-turquoise))` }} />;
                })}
              </div>
            </DashCard>
            <DashCard title={en ? "Volcano Plot" : "نمودار آتشفشانی"}>
              <svg viewBox="0 0 200 140" className="w-full">
                <line x1="100" y1="0" x2="100" y2="140" stroke="#9aa" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="200" y2="100" stroke="#9aa" strokeDasharray="3 3" />
                {Array.from({ length: 60 }).map((_, i) => {
                  const x = (i * 37) % 200;
                  const y = (i * 53) % 130;
                  const sig = Math.abs(x - 100) > 40 && y < 60;
                  return <circle key={i} cx={x} cy={y} r="2.5" fill={sig ? "#2AE86D" : "#1CCFC9"} opacity="0.75" />;
                })}
              </svg>
            </DashCard>
            <DashCard title={en ? "Co-expression Network" : "شبکه هم‌بیانی"}>
              <svg viewBox="0 0 200 140" className="w-full">
                {Array.from({ length: 20 }).map((_, i) => {
                  const x = 30 + (i * 41) % 150;
                  const y = 20 + (i * 23) % 100;
                  return <g key={i}><line x1="100" y1="70" x2={x} y2={y} stroke="#082F6B" strokeOpacity="0.25" /><circle cx={x} cy={y} r="3.5" fill="#082F6B" /></g>;
                })}
                <circle cx="100" cy="70" r="6" fill="#2AE86D" />
              </svg>
            </DashCard>
          </div>
        </div>
      </section>
    </>
  );
}

function DashCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-surface">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Demo</span>
      </div>
      {children}
    </div>
  );
}
