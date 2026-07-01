import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { Dna, Microscope, Network, BarChart3, Layers, Boxes, GitBranch, Brain, FileText, Users, ClipboardList, Award, PenSquare, GraduationCap, FlaskConical, Building2, Pill, HeartPulse, Hospital } from "lucide-react";

const services = [
  { i: <Dna className="h-5 w-5" />, en: "Molecular Genetics", fa: "ژنتیک مولکولی", dEn: "Targeted assays and mechanistic studies for rare and complex disease.", dFa: "آزمون‌های هدفمند و مطالعات سازوکاری بیماری‌های نادر و پیچیده." },
  { i: <Microscope className="h-5 w-5" />, en: "Cancer Genomics", fa: "ژنومیک سرطان", dEn: "Tumor profiling, mutational signatures, and biomarker discovery.", dFa: "پروفایلینگ تومور، امضای جهشی و کشف بیومارکر." },
  { i: <Network className="h-5 w-5" />, en: "NGS Project Design", fa: "طراحی پروژه NGS", dEn: "Study design, power analysis, library and sequencing strategy.", dFa: "طراحی مطالعه، تحلیل توان، راهبرد کتابخانه و توالی‌یابی." },
  { i: <BarChart3 className="h-5 w-5" />, en: "RNA-Seq Analysis", fa: "تحلیل RNA-Seq", dEn: "QC, alignment, quantification, and differential expression.", dFa: "کنترل کیفیت، هم‌ترازی، کمی‌سازی و بیان افتراقی." },
  { i: <GitBranch className="h-5 w-5" />, en: "Variant Analysis", fa: "تحلیل واریانت", dEn: "Germline & somatic calling, annotation and clinical interpretation.", dFa: "فراخوانی ژرم‌لاین/سوماتیک، حاشیه‌نویسی و تفسیر بالینی." },
  { i: <Layers className="h-5 w-5" />, en: "Population Genomics", fa: "ژنومیک جمعیتی", dEn: "Ancestry, selection, demographic inference at population scale.", dFa: "نیاکانی، انتخاب و استنتاج جمعیتی در مقیاس بزرگ." },
  { i: <Boxes className="h-5 w-5" />, en: "Single-Cell Analysis", fa: "تحلیل تک‌سلولی", dEn: "scRNA-Seq / ATAC clustering, trajectory and cell-type annotation.", dFa: "خوشه‌بندی، مسیر و حاشیه‌نویسی نوع سلولی scRNA-Seq/ATAC." },
  { i: <Layers className="h-5 w-5" />, en: "Metagenomics", fa: "متاژنومیک", dEn: "Microbiome composition, function and resistome profiling.", dFa: "ترکیب میکروبیوم، عملکرد و پروفایل مقاومت." },
  { i: <Network className="h-5 w-5" />, en: "WGCNA Analysis", fa: "تحلیل WGCNA", dEn: "Co-expression networks, modules and hub-gene discovery.", dFa: "شبکه‌های هم‌بیانی، ماژول‌ها و کشف ژن‌های هاب." },
  { i: <Brain className="h-5 w-5" />, en: "Functional Enrichment", fa: "تحلیل غنی‌سازی" , dEn: "GSEA, pathway, GO and disease-context enrichment.", dFa: "غنی‌سازی GSEA، مسیر، GO و زمینه بیماری." },
  { i: <ClipboardList className="h-5 w-5" />, en: "Scientific Consulting", fa: "مشاوره علمی", dEn: "Strategy, study design, and methodological advisory.", dFa: "راهبرد، طراحی مطالعه و مشاوره روش‌شناختی." },
  { i: <Users className="h-5 w-5" />, en: "Research Project Management", fa: "مدیریت پروژه پژوهشی", dEn: "End-to-end coordination, milestones, and delivery.", dFa: "هماهنگی از ابتدا تا انتها، نقاط عطف و تحویل." },
  { i: <Award className="h-5 w-5" />, en: "Grant Writing", fa: "نگارش گرنت", dEn: "Proposal development, aims framing and budget design.", dFa: "تدوین پروپوزال، تدوین اهداف و طراحی بودجه." },
  { i: <PenSquare className="h-5 w-5" />, en: "Scientific Writing", fa: "نگارش علمی", dEn: "Manuscripts, figures and high-impact journal submissions.", dFa: "نگارش مقاله، شکل‌ها و ارسال به ژورنال‌های پرتأثیر." },
  { i: <GraduationCap className="h-5 w-5" />, en: "Training Programs", fa: "برنامه‌های آموزشی", dEn: "Workshops and tailored courses for teams and labs.", dFa: "کارگاه‌ها و دوره‌های اختصاصی برای تیم‌ها و آزمایشگاه‌ها." },
];

const industries = [
  { i: <GraduationCap className="h-5 w-5" />, en: "Universities & Academic Institutions", fa: "دانشگاه‌ها و مؤسسات آکادمیک", dEn: "Supporting academic research projects, grant applications, genomics studies and scientific collaborations.", dFa: "حمایت از پروژه‌های پژوهشی آکادمیک، درخواست‌های گرنت، مطالعات ژنومی و همکاری‌های علمی." },
  { i: <Building2 className="h-5 w-5" />, en: "Research Institutes", fa: "مؤسسات پژوهشی", dEn: "Providing genomics, bioinformatics and data analysis solutions for advanced research programs.", dFa: "ارائه راه‌حل‌های ژنومیک، بیوانفورماتیک و تحلیل داده برای برنامه‌های پژوهشی پیشرفته." },
  { i: <Dna className="h-5 w-5" />, en: "Biotechnology Companies", fa: "شرکت‌های بیوتکنولوژی", dEn: "Supporting biotechnology innovation through research consulting, bioinformatics and R&D services.", dFa: "حمایت از نوآوری بیوتکنولوژی از طریق مشاوره پژوهشی، بیوانفورماتیک و خدمات تحقیق و توسعه." },
  { i: <Pill className="h-5 w-5" />, en: "Pharmaceutical Companies", fa: "شرکت‌های داروسازی", dEn: "Assisting drug discovery, biomarker research, precision medicine and translational research projects.", dFa: "یاری در کشف دارو، پژوهش بیومارکر، پزشکی دقیق و پروژه‌های پژوهش ترجمه‌ای." },
  { i: <Microscope className="h-5 w-5" />, en: "Diagnostic Laboratories", fa: "آزمایشگاه‌های تشخیصی", dEn: "Supporting genomic testing programs, NGS projects and molecular diagnostics initiatives.", dFa: "حمایت از برنامه‌های آزمون ژنومی، پروژه‌های NGS و ابتکارات تشخیص مولکولی." },
  { i: <HeartPulse className="h-5 w-5" />, en: "Healthcare Organizations", fa: "سازمان‌های بهداشتی", dEn: "Enabling data-driven healthcare innovation through genomics and precision medicine approaches.", dFa: "توانمندسازی نوآوری سلامت مبتنی بر داده از طریق ژنومیک و رویکردهای پزشکی دقیق." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Genomics, Bioinformatics & Scientific Consulting" },
      { name: "description", content: "Molecular genetics, cancer genomics, NGS design, RNA-Seq, variant analysis, single-cell, WGCNA, scientific writing and training." },
      { property: "og:title", content: "Services — Lian Gene" },
      { property: "og:description", content: "Full-stack scientific services from study design to translational interpretation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={{ en: "Services", fa: "خدمات" }}
        titleEn="A full-stack scientific service portfolio"
        titleFa="مجموعه خدمات علمی، از طراحی تا تفسیر"
        subEn="From molecular wet-lab to advanced bioinformatics, scientific consulting, grant writing and training."
        subFa="از آزمایشگاه‌تر مولکولی تا بیوانفورماتیک پیشرفته، مشاوره علمی، نگارش گرنت و آموزش."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FeatureCard key={i} icon={s.i} titleEn={s.en} titleFa={s.fa} descEn={s.dEn} descFa={s.dFa} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">{en ? "Request a Quote" : "درخواست پیش‌فاکتور"}</Link>
        </div>
      </Section>

      <Section>
        <SectionHead
          center
          titleEn="Industries We Serve"
          titleFa="صنایعی که به آن‌ها خدمت می‌دهیم"
          subEn="Supporting research, innovation and technology development across life sciences and healthcare sectors."
          subFa="حمایت از پژوهش، نوآوری و توسعه فناوری در بخش‌های علوم زیستی و سلامت."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <FeatureCard key={i} icon={ind.i} titleEn={ind.en} titleFa={ind.fa} descEn={ind.dEn} descFa={ind.dFa} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{en ? "Interested in collaboration?" : "در همکاری علاقه‌مندید؟"}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
          {en
            ? "Partner with us to advance genomics, bioinformatics and precision medicine research."
            : "با ما برای پیشبرد پژوهش‌های ژنومی، بیوانفورماتیک و پزشکی دقیق همکاری کنید."}
        </p>
        <div className="mt-8">
          <Link to="/contact" className="btn-primary">{en ? "Request Collaboration" : "درخواست همکاری"}</Link>
        </div>
      </Section>
    </>
  );
}
