import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard, Stat } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import {
  Award,
  FlaskConical,
  Cpu,
  Globe2,
  Dna,
  Database,
  Microscope,
  Atom,
  Sparkles,
  Brain,
  FileBadge,
  Lightbulb,
  Rocket,
  Zap,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/research-innovation")({
  head: () => ({
    meta: [
      { title: "Research & Innovation — Lian Gene" },
      {
        name: "description",
        content:
          "Research excellence, technology development, AI in genomics, future products and knowledge-based company vision at Lian Gene.",
      },
      {
        property: "og:title",
        content: "Research & Innovation — Lian Gene",
      },
      {
        property: "og:description",
        content:
          "Pioneering molecular genetics, cancer genomics, NGS, RNA-Seq, bioinformatics, multi-omics and precision medicine research.",
      },
      { property: "og:url", content: "/research-innovation" },
    ],
    links: [{ rel: "canonical", href: "/research-innovation" }],
  }),
  component: ResearchInnovationPage,
});

function ResearchInnovationPage() {
  const { lang } = useLang();
  const en = lang === "en";

  const researchExcellence = [
    {
      icon: <Dna className="h-5 w-5" />,
      en: "Molecular Genetics",
      fa: "ژنتیک مولکولی",
      dEn: "Gene regulation, variant discovery and functional validation in rare and complex disorders.",
      dFa: "تنظیم ژن، کشف واریانت و اعتبارسنجی عملکردی در اختلالات نادر و پیچیده.",
    },
    {
      icon: <FlaskConical className="h-5 w-5" />,
      en: "Cancer Genomics",
      fa: "ژنومیک سرطان",
      dEn: "Tumor profiling, driver mutation analysis and precision oncology biomarker discovery.",
      dFa: "پروفایلینگ تومور، تحلیل جهش‌های محرک و کشف بیومارکرهای انکولوژی دقیق.",
    },
    {
      icon: <Microscope className="h-5 w-5" />,
      en: "NGS & RNA‑Seq",
      fa: "NGS و RNA‑Seq",
      dEn: "End‑to‑end experimental design, QC, alignment, quantification and differential expression.",
      dFa: "طراحی تجربی از ابتدا تا انتها، کنترل کیفیت، هم‌ردیفی، کمی‌سازی و بیان تفاضلی.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      en: "Bioinformatics",
      fa: "بیوانفورماتیک",
      dEn: "Pipeline engineering, statistical modeling and biological interpretation of large‑scale genomic data.",
      dFa: "مهندسی پایپ‌لاین، مدل‌سازی آماری و تفسیر زیستی داده‌های ژنومی در مقیاس بزرگ.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      en: "Multi‑Omics Integration",
      fa: "یکپارچه‌سازی چندامیک",
      dEn: "Combining genomics, transcriptomics, proteomics and metabolomics for systems biology insights.",
      dFa: "ترکیب ژنومیکس، ترانسکریپتومیکس، پروتئومیکس و متابولومیکس برای بینش زیست‌شناسی سیستمی.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      en: "Precision Medicine",
      fa: "پزشکی دقیق",
      dEn: "Translating genomic findings into personalized diagnostics and targeted therapeutic strategies.",
      dFa: "ترجمه یافته‌های ژنومی به تشخیص شخصی‌سازی‌شده و راهبردهای درمانی هدفمند.",
    },
  ];

  const techDev = [
    {
      icon: <Cpu className="h-5 w-5" />,
      en: "Computational Platforms",
      fa: "سکوهای محاسباتی",
      dEn: "Building scalable cloud‑based bioinformatics infrastructure for reproducible research.",
      dFa: "ساخت زیرساخت بیوانفورماتیک ابری مقیاس‌پذیر برای پژوهش بازتولیدپذیر.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      en: "Data Ecosystems",
      fa: "اکوسیستم‌های داده",
      dEn: "Integrating public and proprietary datasets into unified knowledge graphs for discovery.",
      dFa: "یکپارچه‌سازی مجموعه داده‌های عمومی و اختصاصی در نمودارهای دانش واحد برای کشف.",
    },
    {
      icon: <Atom className="h-5 w-5" />,
      en: "In‑House Assay Development",
      fa: "توسعه آزمون‌های داخلی",
      dEn: "Designing novel molecular assays and protocols tailored to regional disease burdens.",
      dFa: "طراحی آزمون‌ها و پروتکل‌های مولکولی نوین متناسب با بار بیماری‌های منطقه‌ای.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      en: "High‑Throughput Automation",
      fa: "اتوماسیون توان بالا",
      dEn: "Automating sample prep, sequencing workflows and QC pipelines for speed and consistency.",
      dFa: "خودکارسازی آماده‌سازی نمونه، گردش کار توالی‌یابی و پایپ‌لاین‌های QC برای سرعت و ثبات.",
    },
  ];

  const futureProducts = [
    {
      icon: <Rocket className="h-5 w-5" />,
      en: "Novel Genomic Kits",
      fa: "کیت‌های ژنومی نوین",
      dEn: "Diagnostic and research kits for targeted gene panels, pharmacogenomics and liquid biopsy.",
      dFa: "کیت‌های تشخیصی و پژوهشی برای پنل‌های ژنی هدفمند، فارماکوژنومیکس و بیوپسی مایع.",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      en: "AI‑Powered Software",
      fa: "نرم‌افزارهای مبتنی بر هوش مصنوعی",
      dEn: "Predictive tools for variant classification, biomarker scoring and clinical decision support.",
      dFa: "ابزارهای پیش‌بینی‌کننده برای طبقه‌بندی واریانت، امتیازدهی بیومارکر و پشتیبانی تصمیم‌گیری بالینی.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      en: "Scientific SaaS Platforms",
      fa: "سکوهای SaaS علمی",
      dEn: "Subscription‑based analysis portals for hospitals, biotechs and academic consortia.",
      dFa: "پرتال‌های تحلیلی مبتنی بر اشتراک برای بیمارستان‌ها، شرکت‌های زیست‌فناوری و کنسرسیوم‌های دانشگاهی.",
    },
  ];

  const kbVision = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      en: "Scientific Foundation",
      fa: "بنیان علمی",
      dEn: "Peer‑reviewed research, reproducible methods and transparent data as the bedrock of value creation.",
      dFa: "پژوهش‌های داوری‌شده، روش‌های بازتولیدپذیر و داده شفاف به‌عنوان بنیان خلق ارزش.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      en: "Knowledge‑Based Certification",
      fa: "گواهی دانش‌بنیان",
      dEn: "Formal recognition under national knowledge‑based company frameworks to unlock growth funding.",
      dFa: "شناسایی رسمی در چارچوب‌های ملی شرکت دانش‌بنیان برای دسترسی به منابع رشد.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      en: "International Partnerships",
      fa: "مشارکت‌های بین‌المللی",
      dEn: "Strategic alliances with global genomics consortia, universities and pharmaceutical companies.",
      dFa: "ائتلاف‌های راهبردی با کنسرسیوم‌های جهانی ژنومیک، دانشگاه‌ها و شرکت‌های دارویی.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      en: "Commercialization Pipeline",
      fa: "خط لوله تجاری‌سازی",
      dEn: "From invention disclosure to product launch — a disciplined pathway for IP and market entry.",
      dFa: "از افشای اختراع تا عرضه محصول — مسیر منضبط برای IP و ورود به بازار.",
    },
  ];

  const scientificInnovation = [
    {
      icon: <Dna className="h-5 w-5" />,
      en: "Gene & Cell Therapy",
      fa: "ژن‌درمانی و سلول‌درمانی",
      dEn: "Exploring CRISPR‑based editing and autologous cell therapies for hematologic and solid tumors.",
      dFa: "بررسی ویرایش مبتنی بر CRISPR و سلول‌درمانی خودی برای تومورهای خونی و جامد.",
    },
    {
      icon: <FlaskConical className="h-5 w-5" />,
      en: "Synthetic Biology",
      fa: "زیست‌شناسی مصنوعی",
      dEn: "Engineering genetic circuits and synthetic promoters for programmable therapeutic responses.",
      dFa: "مهندسی مدارهای ژنتیکی و پروموترهای مصنوعی برای پاسخ‌های درمانی قابل برنامه‌ریزی.",
    },
    {
      icon: <Atom className="h-5 w-5" />,
      en: "Spatial Omics",
      fa: "امیک مکانی",
      dEn: "Mapping gene expression within tissue architecture to understand tumor microenvironments.",
      dFa: "نگاشت بیان ژن در معماری بافت برای درک ریزمحیط‌های تومور.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      en: "Translational Cohorts",
      fa: "کوهورت‌های انتقالی",
      dEn: "Prospective clinical cohorts designed from the ground up with genomic stratification endpoints.",
      dFa: "کوهورت‌های بالینی آینده‌نگر طراحی‌شده از ابتدا با نقاط پایانی لایه‌بندی ژنومی.",
    },
  ];

  const aiGenomics = [
    {
      icon: <Brain className="h-5 w-5" />,
      en: "Deep Variant Scoring",
      fa: "امتیازدهی عمیق واریانت",
      dEn: "Neural networks trained on functional annotations to prioritize pathogenic variants at scale.",
      dFa: "شبکه‌های عصبی آموزش‌دیده بر حاشیه‌نویسی‌های عملکردی برای اولویت‌بندی واریانت‌های بیماری‌زا در مقیاس.",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      en: "Generative Models for Sequence Design",
      fa: "مدل‌های مولد برای طراحی توالی",
      dEn: "Using transformers and diffusion models to design synthetic regulatory elements and guide RNAs.",
      dFa: "استفاده از ترنسفورمرها و مدل‌های انتشار برای طراحی عناصر تنظیمی مصنوعی و RNA راهنما.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      en: "Multi‑Modal Data Fusion",
      fa: "تلفیق داده‌های چندوجهی",
      dEn: "Fusing imaging, clinical notes and omics into unified embeddings for holistic patient modeling.",
      dFa: "تلفیق تصویربرداری، یادداشت‌های بالینی و امیک در جاسازی‌های واحد برای مدل‌سازی جامع بیمار.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      en: "Automated Pipeline Intelligence",
      fa: "هوش خودکار پایپ‌لاین",
      dEn: "Self‑optimizing QC, alignment and quantification workflows that adapt to data characteristics.",
      dFa: "گردش کار خودبهینه‌ساز QC، هم‌ردیفی و کمی‌سازی که با ویژگی‌های داده تطبیق می‌یابند.",
    },
  ];

  const futureIP = [
    {
      icon: <FileBadge className="h-5 w-5" />,
      en: "Patent Portfolio Strategy",
      fa: "راهبرد سبد پتنت",
      dEn: "Systematic invention harvesting, prior‑art analysis and prosecution strategy across key markets.",
      dFa: "برداشت اختراع سیستماتیک، تحلیل هنر پیشین و راهبرد ثبت در بازارهای کلیدی.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      en: "Trade Secrets & Data Assets",
      fa: "اسرار تجاری و دارایی‌های داده",
      dEn: "Protecting proprietary datasets, trained models and analytical methods as competitive moats.",
      dFa: "محافظت از مجموعه داده‌های اختصاصی، مدل‌های آموزش‌دیده و روش‌های تحلیلی به‌عنوان خندق‌های رقابتی.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      en: "Licensing & Spin‑Outs",
      fa: "مجوز و شرکت‌های فرعی",
      dEn: "Structured licensing pathways and spin‑out ventures to monetize IP and amplify impact.",
      dFa: "مسیرهای مجوزسازی ساخت‌یافته و شرکت‌های فرعی برای کسب درآمد از IP و تقویت اثرگذاری.",
    },
  ];

  const stats = en
    ? [
        { value: "20+", labelEn: "Peer‑reviewed publications", labelFa: "انتشار علمی داوری‌شده" },
        { value: "50+", labelEn: "Genomic projects delivered", labelFa: "پروژه ژنومی انجام‌شده" },
        { value: "6+", labelEn: "Core research domains", labelFa: "حوزه‌های اصلی پژوهش" },
        { value: "10+", labelEn: "Years of innovation", labelFa: "سال نوآوری" },
      ]
    : [
        { value: "20+", labelEn: "Peer‑reviewed publications", labelFa: "انتشار علمی داوری‌شده" },
        { value: "50+", labelEn: "Genomic projects delivered", labelFa: "پروژه ژنومی انجام‌شده" },
        { value: "6+", labelEn: "Core research domains", labelFa: "حوزه‌های اصلی پژوهش" },
        { value: "10+", labelEn: "Years of innovation", labelFa: "سال نوآوری" },
      ];

  return (
    <>
      <PageHero
        eyebrow={{ en: "Research & Innovation", fa: "پژوهش و نوآوری" }}
        titleEn="Advancing genomics through research, technology and AI"
        titleFa="پیشبرد ژنومیک از طریق پژوهش، فناوری و هوش مصنوعی"
        subEn="A comprehensive innovation ecosystem spanning molecular genetics, cancer genomics, bioinformatics, multi-omics and precision medicine."
        subFa="یک اکوسیستم نوآوری جامع در ژنتیک مولکولی، ژنومیک سرطان، بیوانفورماتیک، چندامیک و پزشکی دقیق."
      />

      {/* Stats */}
      <Section className="!py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} labelEn={s.labelEn} labelFa={s.labelFa} />
          ))}
        </div>
      </Section>

      {/* Research Excellence */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Research Excellence", fa: "برتری پژوهشی" }}
          titleEn="Core research domains"
          titleFa="حوزه‌های اصلی پژوهشی"
          subEn="Pioneering molecular genetics, cancer genomics, NGS, RNA‑Seq, bioinformatics, multi‑omics and precision medicine."
          subFa="پیشگامی در ژنتیک مولکولی، ژنومیک سرطان، NGS، RNA‑Seq، بیوانفورماتیک، چندامیک و پزشکی دقیق."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {researchExcellence.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* Technology Development */}
      <Section className="border-y border-border bg-surface">
        <SectionHead
          eyebrow={{ en: "Technology Development", fa: "توسعه فناوری" }}
          titleEn="Platforms & infrastructure"
          titleFa="سکوها و زیرساخت‌ها"
          subEn="Building the computational, experimental and automation backbone that powers our research pipeline."
          subFa="ساخت ستون فقرات محاسباتی، تجربی و خودکارسازی که خط لوله پژوهشی ما را تغذیه می‌کند."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techDev.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* Future Products */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Future Products", fa: "محصولات آینده" }}
          titleEn="Product pipeline"
          titleFa="خط لوله محصولات"
          subEn="From genomic kits and AI software to SaaS platforms — products designed for impact and scale."
          subFa="از کیت‌های ژنومی و نرم‌افزار هوش مصنوعی تا سکوهای SaaS — محصولاتی طراحی‌شده برای اثرگذاری و مقیاس."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {futureProducts.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* Knowledge-Based Company Vision */}
      <Section className="border-y border-border bg-surface">
        <SectionHead
          eyebrow={{ en: "Knowledge-Based Vision", fa: "چشم‌انداز دانش‌بنیان" }}
          titleEn="Our knowledge-based company roadmap"
          titleFa="نقشه راه شرکت دانش‌بنیان ما"
          subEn="A strategic trajectory from scientific foundation to commercialization, aligned with national frameworks and global best practices."
          subFa="مسیر راهبردی از بنیان علمی تا تجاری‌سازی، هم‌راستا با چارچوب‌های ملی و شیوه‌های برتر جهانی."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {kbVision.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* Scientific Innovation */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Scientific Innovation", fa: "نوآوری علمی" }}
          titleEn="Next‑generation science"
          titleFa="علم نسل بعد"
          subEn="Pushing boundaries in gene therapy, synthetic biology, spatial omics and translational cohort design."
          subFa="فشار مرزها در ژن‌درمانی، زیست‌شناسی مصنوعی، امیک مکانی و طراحی کوهورت انتقالی."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {scientificInnovation.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* AI in Genomics */}
      <Section className="border-y border-border bg-surface">
        <SectionHead
          eyebrow={{ en: "AI in Genomics", fa: "هوش مصنوعی در ژنومیکس" }}
          titleEn="Intelligence at the core of discovery"
          titleFa="هوش در قلب کشف"
          subEn="Deep learning, generative models and automated pipelines that accelerate variant discovery, biomarker validation and therapeutic design."
          subFa="یادگیری عمیق، مدل‌های مولد و پایپ‌لاین‌های خودکار که کشف واریانت، اعتبارسنجی بیومارکر و طراحی درمانی را تسریع می‌کنند."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aiGenomics.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* Future Intellectual Property Development */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Future IP Development", fa: "توسعه مالکیت فکری آینده" }}
          titleEn="Building an intellectual property moat"
          titleFa="ساخت خندق مالکیت فکری"
          subEn="Protecting inventions, data assets and analytical methods through patents, trade secrets and strategic licensing."
          subFa="محافظت از اختراعات، دارایی‌های داده و روش‌های تحلیلی از طریق پتنت، اسرار تجاری و مجوزسازی راهبردی."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {futureIP.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              titleEn={item.en}
              titleFa={item.fa}
              descEn={item.dEn}
              descFa={item.dFa}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {en ? "Join us in shaping the future of genomics." : "در شکل‌دادن به آینده ژنومیکس با ما همراه شوید."}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {en
              ? "Whether you are a researcher, clinician, investor or industry partner — we welcome collaboration."
              : "چه پژوهشگر، پزشک، سرمایه‌گذار یا شریک صنعتی باشید — از همکاری با شما استقبال می‌کنیم."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              {en ? "Contact Us" : "تماس با ما"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/partnerships" className="btn-ghost">
              {en ? "Explore Partnerships" : "مشاهده مشارکت‌ها"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
