import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { PageHero, Section, SectionHead, FeatureCard, Stat } from "@/components/Section";
import { Dna, Microscope, FlaskConical, Network, Brain, BookOpen, Sparkles, Atom, GraduationCap, Building2, ArrowRight, Rocket, Award, Cpu, Quote, Telescope } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pouya Pazhouhesh Lian Gene — Advancing Genomics Through Research & Innovation" },
      { name: "description", content: "Tehran-based genomics & bioinformatics company. Research, NGS, RNA-Seq, single-cell, precision medicine, AI for genomics, scientific consulting and training." },
      { property: "og:title", content: "Pouya Pazhouhesh Lian Gene — Genomics & Bioinformatics" },
      { property: "og:description", content: "Research, bioinformatics and genomic innovation for healthcare and biotechnology." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <>
      <PageHero
        eyebrow={{ en: "Molecular Genetics · Genomics · Bioinformatics · Life Sciences", fa: "ژنتیک مولکولی · ژنومیکس · بیوانفورماتیک · علوم زیستی" }}
        titleEn="Advancing Genomics Through Research and Innovation"
        titleFa="پویا پژوهش لیان ژن"
        subEn="Research, bioinformatics and genomic innovation for healthcare and biotechnology — from molecular discovery to translational impact."
        subFa="پژوهش، نوآوری و توسعه فناوری در ژنتیک، ژنومیک و علوم زیستی — از کشف مولکولی تا اثرگذاری انتقالی."
      >
        <Link to="/contact" className="btn-primary">{en ? "Request Consultation" : "درخواست مشاوره"} <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/partnerships" className="btn-accent">{en ? "Research Collaboration" : "همکاری پژوهشی"}</Link>
        <Link to="/about" className="btn-ghost">{en ? "Learn More" : "اطلاعات بیشتر"}</Link>
      </PageHero>

      {/* Stats */}
      <Section className="!py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="50+" labelEn="Genomic projects delivered" labelFa="پروژه ژنومی انجام‌شده" />
          <Stat value="20+" labelEn="Peer-reviewed publications" labelFa="انتشار علمی داوری‌شده" />
          <Stat value="15+" labelEn="Institutional collaborations" labelFa="همکاری بین‌المللی و دانشگاهی" />
          <Stat value="100%" labelEn="Reproducible bioinformatics pipelines" labelFa="پایپ‌لاین‌های بازتولیدپذیر" />
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Capabilities", fa: "توانمندی‌ها" }}
          titleEn="A full-stack genomics partner"
          titleFa="شریک کامل ژنومیک شما"
          subEn="From experimental design and sequencing to advanced bioinformatics and translational interpretation."
          subFa="از طراحی تجربی و توالی‌یابی تا بیوانفورماتیک پیشرفته و تفسیر بالینی."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Dna className="h-5 w-5" />} titleEn="Molecular Genetics" titleFa="ژنتیک مولکولی" descEn="Targeted assays, variant discovery, and mechanistic studies for rare and complex disease." descFa="آزمون‌های هدفمند، شناسایی واریانت و مطالعات سازوکاری بیماری‌های نادر و پیچیده." />
          <FeatureCard icon={<Microscope className="h-5 w-5" />} titleEn="Cancer Genomics" titleFa="ژنومیک سرطان" descEn="Tumor profiling, mutational signatures, and actionable biomarker discovery." descFa="پروفایلینگ تومور، امضای جهشی و کشف بیومارکرهای کاربردی." />
          <FeatureCard icon={<Network className="h-5 w-5" />} titleEn="NGS Project Design" titleFa="طراحی پروژه‌های NGS" descEn="End-to-end study design, power analysis, and library strategy for WGS/WES/RNA-Seq." descFa="طراحی مطالعه از ابتدا تا انتها، تحلیل توان و راهبرد کتابخانه برای WGS/WES/RNA-Seq." />
          <FeatureCard icon={<FlaskConical className="h-5 w-5" />} titleEn="Single-Cell & Spatial" titleFa="تک‌سلولی و فضایی" descEn="scRNA-Seq, ATAC, and spatial transcriptomics with reproducible workflows." descFa="scRNA-Seq، ATAC و ترنسکریپتومیکس فضایی با گردش‌کارهای بازتولیدپذیر." />
          <FeatureCard icon={<Brain className="h-5 w-5" />} titleEn="AI for Genomics" titleFa="هوش مصنوعی در ژنومیک" descEn="Deep learning models for variant interpretation, expression prediction, and biomarkers." descFa="مدل‌های یادگیری عمیق برای تفسیر واریانت، پیش‌بینی بیان و بیومارکرها." />
          <FeatureCard icon={<Atom className="h-5 w-5" />} titleEn="Multi-Omics Integration" titleFa="یکپارچه‌سازی چندامیکس" descEn="Joint modeling of genomic, transcriptomic, and epigenomic layers." descFa="مدل‌سازی توأم لایه‌های ژنومی، ترنسکریپتومی و اپی‌ژنومی." />
        </div>
        <div className="mt-10">
          <Link to="/services" className="btn-ghost">{en ? "Explore all services" : "مشاهده همه خدمات"} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Section>

      {/* Why us */}
      <section className="border-y border-border bg-surface">
        <div className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow mb-4">{en ? "Why Lian Gene" : "چرا لیان ژن"}</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{en ? "Scientific rigor, engineered for translation." : "دقت علمی، مهندسی‌شده برای کاربرد بالینی."}</h2>
            <p className="mt-4 text-muted-foreground">{en ? "We bridge academic research and industrial application — building reproducible pipelines, transparent reporting, and biologically interpretable models that move discoveries closer to patients and products." : "ما پل میان پژوهش دانشگاهی و کاربرد صنعتی هستیم — با گردش‌کارهای بازتولیدپذیر، گزارش‌دهی شفاف و مدل‌های قابل تفسیر زیستی، یافته‌ها را به بیمار و محصول نزدیک می‌کنیم."}</p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                ["Reproducible Nextflow / Snakemake pipelines", "پایپ‌لاین‌های بازتولیدپذیر Nextflow و Snakemake"],
                ["Peer-reviewed methodology & transparent reporting", "روش‌شناسی داوری‌شده و گزارش‌دهی شفاف"],
                ["International collaborations & academic standards", "همکاری بین‌المللی و استانداردهای دانشگاهی"],
                ["End-to-end project management & grant support", "مدیریت پروژه از ابتدا تا انتها و پشتیبانی گرنت"],
              ].map(([e, f], i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--brand-green)" }} />
                  <span>{en ? e : f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-border p-8 shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-primary)" }}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { i: <Sparkles className="h-5 w-5" />, t: en ? "Innovation" : "نوآوری", d: en ? "AI-driven genomic insight." : "بینش ژنومی مبتنی بر هوش مصنوعی." },
                  { i: <BookOpen className="h-5 w-5" />, t: en ? "Research" : "پژوهش", d: en ? "Publication-grade analysis." : "تحلیل در سطح انتشار علمی." },
                  { i: <GraduationCap className="h-5 w-5" />, t: en ? "Training" : "آموزش", d: en ? "Workshops & online courses." : "کارگاه‌ها و دوره‌های آنلاین." },
                  { i: <Building2 className="h-5 w-5" />, t: en ? "Partnerships" : "همکاری", d: en ? "Academic & industry alliances." : "اتحاد علمی و صنعتی." },
                ].map((c, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 p-5 text-white backdrop-blur">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/15">{c.i}</div>
                    <div className="mt-3 font-semibold">{c.t}</div>
                    <div className="mt-1 text-sm text-white/80">{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Scientific Director */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Founder & Scientific Director", fa: "بنیان‌گذار و مدیر علمی" }}
          titleEn="Led by a PhD in Molecular Genetics and university faculty member"
          titleFa="به رهبری دکترای ژنتیک مولکولی و عضو هیئت علمی دانشگاه"
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-border p-10" style={{ background: "var(--gradient-hero)" }}>
            <Quote className="h-8 w-8 text-primary/40" />
            <p className="mt-4 text-lg leading-relaxed text-foreground/90 md:text-xl">
              {en
                ? "“Genomics is no longer a frontier — it is a foundation. Our mission at Lian Gene is to bring world-class molecular research, bioinformatics rigor and translational thinking together, so that Iranian science contributes meaningfully to global precision medicine.”"
                : "«ژنومیک دیگر یک مرز نیست، یک بنیان است. مأموریت ما در لیان ژن گرد هم آوردن پژوهش مولکولی در سطح جهانی، دقت بیوانفورماتیک و تفکر انتقالی است تا علم ایران سهمی معنادار در پزشکی دقیق جهانی داشته باشد.»"}
            </p>
            <div className="mt-6 text-sm font-semibold text-primary">
              {en ? "Founder & Scientific Director · Lian Gene" : "بنیان‌گذار و مدیر علمی · لیان ژن"}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { tEn: "PhD, Molecular Genetics", tFa: "دکترای ژنتیک مولکولی", dEn: "Doctoral specialization in molecular genetics and genomic disease mechanisms.", dFa: "تخصص دکتری در ژنتیک مولکولی و سازوکار بیماری‌های ژنومی." },
              { tEn: "University Faculty Member", tFa: "عضو هیئت علمی دانشگاه", dEn: "Active academic role bridging teaching, research and translational practice.", dFa: "نقش فعال دانشگاهی در پل‌زدن میان آموزش، پژوهش و کاربرد بالینی." },
              { tEn: "Peer-Reviewed Researcher", tFa: "پژوهشگر داوری‌شده", dEn: "Publications in international journals across genetics, genomics and bioinformatics.", dFa: "انتشارات در نشریات بین‌المللی در ژنتیک، ژنومیک و بیوانفورماتیک." },
              { tEn: "Scientific Consulting", tFa: "مشاوره علمی", dEn: "Advisor to academic groups, hospitals and emerging biotech ventures.", dFa: "مشاور گروه‌های دانشگاهی، بیمارستان‌ها و کسب‌وکارهای نوظهور زیست‌فناوری." },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-border bg-surface p-5">
                <div className="text-sm font-semibold text-foreground">{en ? c.tEn : c.tFa}</div>
                <div className="mt-1 text-sm text-muted-foreground">{en ? c.dEn : c.dFa}</div>
              </div>
            ))}
            <Link to="/about" className="btn-ghost mt-2 w-fit">{en ? "Read full profile" : "مشاهده پروفایل کامل"} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      {/* Knowledge-Based Company Roadmap */}
      <section className="relative overflow-hidden border-y border-border" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-prose relative py-20 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            <Award className="h-3.5 w-3.5" /> {en ? "Knowledge-Based Roadmap" : "نقشه راه دانش‌بنیان"}
          </span>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            {en ? "Built today as the knowledge-based biotech of tomorrow." : "امروز ساخته می‌شویم تا زیست‌فناوری دانش‌بنیان فردا باشیم."}
          </h2>
          <p className="mt-4 max-w-2xl text-white/85">
            {en
              ? "Lian Gene is designed as a long-term scientific company with a clear path to certified Knowledge-Based Company status and international biotech partnerships."
              : "لیان ژن به‌عنوان یک شرکت علمی بلندمدت با مسیری روشن به سوی جایگاه شرکت دانش‌بنیان معتبر و مشارکت‌های بین‌المللی زیست‌فناوری طراحی شده است."}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { i: <FlaskConical className="h-5 w-5" />, y: "2024–25", tEn: "Scientific Foundation", tFa: "بنیان علمی" },
              { i: <Award className="h-5 w-5" />, y: "2026–27", tEn: "Knowledge-Based Certification", tFa: "اخذ گواهی دانش‌بنیان" },
              { i: <Building2 className="h-5 w-5" />, y: "2028+", tEn: "International Partnerships", tFa: "مشارکت‌های بین‌المللی" },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/15">{p.i}</div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{p.y}</div>
                <div className="mt-1 text-lg font-semibold">{en ? p.tEn : p.tFa}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/roadmap" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white/90">
              {en ? "Explore the full roadmap" : "مشاهده نقشه راه کامل"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Future Technologies", fa: "فناوری‌های آینده" }}
          titleEn="Investing today in the genomics of tomorrow"
          titleFa="سرمایه‌گذاری امروز روی ژنومیک فردا"
          subEn="Active research and exploratory programs aligned with the next decade of biotechnology."
          subFa="پژوهش‌های فعال و برنامه‌های اکتشافی هم‌سو با دهه آینده زیست‌فناوری."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<Brain className="h-5 w-5" />} titleEn="AI-Driven Precision Medicine" titleFa="پزشکی دقیق مبتنی بر هوش مصنوعی" descEn="Clinical decision support trained on multi-omic patient cohorts." descFa="پشتیبان تصمیم بالینی آموزش‌دیده بر کوهورت‌های چندامیکی بیماران." />
          <FeatureCard icon={<Telescope className="h-5 w-5" />} titleEn="Long-Read & Spatial Omics" titleFa="توالی‌یابی بلندخوان و امیکس فضایی" descEn="Next-generation platforms for structural variants and tissue architecture." descFa="پلتفرم‌های نسل‌بعد برای واریانت‌های ساختاری و معماری بافت." />
          <FeatureCard icon={<Cpu className="h-5 w-5" />} titleEn="Federated Genomic Compute" titleFa="پردازش ژنومی فدرال" descEn="Privacy-preserving analysis across hospitals and research centers." descFa="تحلیل حافظ حریم خصوصی میان بیمارستان‌ها و مراکز پژوهشی." />
          <FeatureCard icon={<Rocket className="h-5 w-5" />} titleEn="Translational Bioproducts" titleFa="محصولات زیستی انتقالی" descEn="In-house panels and software intended for clinical and industrial use." descFa="پنل‌ها و نرم‌افزارهای داخلی برای کاربردهای بالینی و صنعتی." />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{en ? "Let's build the next genomic discovery together." : "بیایید کشف ژنومی بعدی را با هم بسازیم."}</h2>
          <p className="mt-3 text-muted-foreground">{en ? "Talk to our team about your study, dataset, or commercial program." : "درباره مطالعه، داده یا برنامه تجاری خود با تیم ما گفت‌وگو کنید."}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">{en ? "Request Consultation" : "درخواست مشاوره"}</Link>
            <Link to="/partnerships" className="btn-ghost">{en ? "Become a Partner" : "همکاری راهبردی"}</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
