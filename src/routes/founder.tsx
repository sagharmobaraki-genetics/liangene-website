import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import founderPortrait from "@/assets/founder-portrait.png.asset.json";
import { PageHero, Section, SectionHead, FeatureCard, Stat } from "@/components/Section";
import {
  Award,
  GraduationCap,
  FlaskConical,
  Microscope,
  Globe2,
  Dna,
  Database,
  BookOpen,
  FileText,
  ArrowRight,
  Mail,
  Linkedin,
  UserCheck,
  DnaIcon,
  Stethoscope,
} from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder & Scientific Director — Pouya Pazhouhesh Lian Gene" },
      {
        name: "description",
        content:
          "PhD in Molecular Genetics, university faculty member, cancer genomics researcher and bioinformatics specialist. Founder of Lian Gene.",
      },
      {
        property: "og:title",
        content: "Founder & Scientific Director — Pouya Pazhouhesh Lian Gene",
      },
      {
        property: "og:description",
        content:
          "PhD molecular geneticist, university faculty member and founder of Lian Gene.",
      },
      { property: "og:url", content: "/founder" },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
  }),
  component: FounderPage,
});

function FounderPage() {
  const { lang } = useLang();
  const en = lang === "en";

  const titles = en
    ? [
        "PhD in Molecular Genetics",
        "University Faculty Member",
        "Cancer Genomics Researcher",
        "Bioinformatics Specialist",
      ]
    : [
        "دکترای تخصصی ژنتیک مولکولی",
        "عضو هیئت علمی دانشگاه",
        "پژوهشگر ژنومیک سرطان",
        "متخصص بیوانفورماتیک",
      ];

  const credentials = en
    ? [
        { icon: <Award className="h-5 w-5" />, label: "PhD, Molecular Genetics", desc: "Doctoral degree with specialization in molecular genetics, genomic disease mechanisms and translational research." },
        { icon: <GraduationCap className="h-5 w-5" />, label: "University Faculty Member", desc: "Active academic appointment bridging teaching, research mentorship and translational practice." },
        { icon: <FlaskConical className="h-5 w-5" />, label: "Cancer Genomics Researcher", desc: "Investigating tumor heterogeneity, mutational signatures and actionable biomarkers in solid and hematologic malignancies." },
        { icon: <Microscope className="h-5 w-5" />, label: "Bioinformatics Specialist", desc: "Developing reproducible pipelines for NGS, RNA‑Seq and multi‑omic integration with publication‑grade rigor." },
      ]
    : [
        { icon: <Award className="h-5 w-5" />, label: "دکترای ژنتیک مولکولی", desc: "درجه دکتری با تخصص در ژنتیک مولکولی، سازوکار بیماری‌های ژنومی و پژوهش انتقالی." },
        { icon: <GraduationCap className="h-5 w-5" />, label: "عضو هیئت علمی دانشگاه", desc: "پست دانشگاهی فعال در پل‌زدن میان آموزش، مشاوره پژوهشی و کاربرد بالینی." },
        { icon: <FlaskConical className="h-5 w-5" />, label: "پژوهشگر ژنومیک سرطان", desc: "بررسی ناهمگنی تومور، امضاهای جهشی و بیومارکرهای کاربردی در سرطان‌های جامد و خونی." },
        { icon: <Microscope className="h-5 w-5" />, label: "متخصص بیوانفورماتیک", desc: "توسعه پایپ‌لاین‌های بازتولیدپذیر برای NGS، RNA‑Seq و یکپارچه‌سازی چندامیک با دقت در سطح انتشار علمی." },
      ];

  const expertise = [
    {
      icon: <Dna className="h-5 w-5" />,
      titleEn: "Molecular Genetics",
      titleFa: "ژنتیک مولکولی",
      descEn: "Gene regulation, variant discovery and functional validation in rare and complex disorders.",
      descFa: "تنظیم ژن، کشف واریانت و اعتبارسنجی عملکردی در اختلالات نادر و پیچیده.",
    },
    {
      icon: <Stethoscope className="h-5 w-5" />,
      titleEn: "Cancer Genomics",
      titleFa: "ژنومیک سرطان",
      descEn: "Tumor profiling, driver mutation analysis and precision oncology biomarker discovery.",
      descFa: "پروفایلینگ تومور، تحلیل جهش‌های محرک و کشف بیومارکرهای انکولوژی دقیق.",
    },
    {
      icon: <DnaIcon className="h-5 w-5" />,
      titleEn: "NGS & RNA‑Seq",
      titleFa: "NGS و RNA‑Seq",
      descEn: "End‑to‑end experimental design, QC, alignment, quantification and differential expression.",
      descFa: "طراحی تجربی از ابتدا تا انتها، کنترل کیفیت، هم‌ردیفی، کمی‌سازی و بیان تفاضلی.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      titleEn: "Bioinformatics",
      titleFa: "بیوانفورماتیک",
      descEn: "Pipeline engineering, statistical modeling and biological interpretation of large‑scale genomic data.",
      descFa: "مهندسی پایپ‌لاین، مدل‌سازی آماری و تفسیر زیستی داده‌های ژنومی در مقیاس بزرگ.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      titleEn: "Translational Research",
      titleFa: "پژوهش انتقالی",
      descEn: "Moving findings from bench to bedside through clinical cohort studies and biomarker validation.",
      descFa: "انتقال یافته‌ها از آزمایشگاه به بالین از طریق مطالعات کوهورتی بالینی و اعتبارسنجی بیومارکر.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      titleEn: "Scientific Consulting",
      titleFa: "مشاوره علمی",
      descEn: "Advising academic groups, hospitals and biotech ventures on study design and data strategy.",
      descFa: "مشاوره به گروه‌های دانشگاهی، بیمارستان‌ها و شرکت‌های زیست‌فناوری در طراحی مطالعه و راهبرد داده.",
    },
  ];

  const stats = en
    ? [
        { value: "20+", labelEn: "Peer‑reviewed publications", labelFa: "انتشار علمی داوری‌شده" },
        { value: "50+", labelEn: "Genomic projects delivered", labelFa: "پروژه ژنومی انجام‌شده" },
        { value: "15+", labelEn: "Institutional collaborations", labelFa: "همکاری‌های دانشگاهی و بین‌المللی" },
        { value: "10+", labelEn: "Years of research experience", labelFa: "سال تجربه پژوهشی" },
      ]
    : [
        { value: "20+", labelEn: "Peer‑reviewed publications", labelFa: "انتشار علمی داوری‌شده" },
        { value: "50+", labelEn: "Genomic projects delivered", labelFa: "پروژه ژنومی انجام‌شده" },
        { value: "15+", labelEn: "Institutional collaborations", labelFa: "همکاری‌های دانشگاهی و بین‌المللی" },
        { value: "10+", labelEn: "Years of research experience", labelFa: "سال تجربه پژوهشی" },
      ];

  return (
    <>
      {/* Hero — split portrait + name */}
      <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-prose relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <img
                src={founderPortrait.url}
                alt={en ? "Founder & Scientific Director portrait" : "تصویر بنیان‌گذار و مدیر علمی"}
                className="h-auto w-full object-cover"
                width={800}
                height={1000}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)] md:-bottom-6 md:-right-6 md:p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl text-primary" style={{ background: "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)" }}>
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{en ? "Verified Academic" : "هویت علمی تأیید‌شده"}</div>
                  <div className="text-sm font-semibold text-foreground">{en ? "PhD · Faculty · Researcher" : "دکترا · هیئت علمی · پژوهشگر"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Name & Titles */}
          <div className="text-center lg:text-start">
            <span className="eyebrow mb-5">{en ? "Founder & Scientific Director" : "بنیان‌گذار و مدیر علمی"}</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-gradient">[Your Full Name]</span>
            </h1>
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {titles.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-[var(--shadow-soft)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: i % 2 === 0 ? "var(--brand-turquoise)" : "var(--brand-green)" }} />
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {en
                ? "A PhD molecular geneticist and university faculty member with deep expertise in cancer genomics, bioinformatics and translational research. Building Lian Gene to bridge world‑class science and real‑world healthcare impact in Iran and beyond."
                : "دکترای ژنتیک مولکولی و عضو هیئت علمی دانشگاه با تخصص عمیق در ژنومیک سرطان، بیوانفورماتیک و پژوهش انتقالی. لیان ژن را برای ایجاد پلی میان علم در سطح جهانی و اثرگذاری واقعی در سلامت ایران و فراتر از آن بنا نهاده‌ام."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link to="/contact" className="btn-primary">
                <Mail className="h-4 w-4" />
                {en ? "Contact for Collaboration" : "تماس برای همکاری"}
              </Link>
              <a href="#credentials" className="btn-ghost">
                {en ? "View Credentials" : "مشاهده مدارک"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="!py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} labelEn={s.labelEn} labelFa={s.labelFa} />
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <section id="credentials" className="border-y border-border bg-surface">
        <div className="container-prose section-pad">
          <SectionHead
            eyebrow={{ en: "Credentials", fa: "مدارک و سوابق" }}
            titleEn="Academic & Research Credentials"
            titleFa="مدارک و سوابق علمی و پژوهشی"
            subEn="A track record of peer‑reviewed research, academic leadership and international scientific collaboration."
            subFa="سابقه‌ای از پژوهش‌های داوری‌شده، رهبری آکادمیک و همکاری‌های علمی بین‌المللی."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {credentials.map((c, i) => (
              <div key={i} className="card-surface flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-primary" style={{ background: "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)" }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{c.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <Section>
        <SectionHead
          eyebrow={{ en: "Expertise", fa: "حوزه‌های تخصصی" }}
          titleEn="Research & Technical Expertise"
          titleFa="تخصص‌های پژوهشی و فنی"
          subEn="Deep capabilities spanning molecular genetics, cancer genomics, sequencing technologies and computational biology."
          subFa="توانمندی‌های عمیق در ژنتیک مولکولی، ژنومیک سرطان، فناوری‌های توالی‌یابی و زیست‌شناسی محاسباتی."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <FeatureCard
              key={i}
              icon={e.icon}
              titleEn={e.titleEn}
              titleFa={e.titleFa}
              descEn={e.descEn}
              descFa={e.descFa}
            />
          ))}
        </div>
      </Section>

      {/* Research Philosophy */}
      <section className="border-y border-border" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-prose py-20 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto h-8 w-8 text-white/50" />
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              {en
                ? "Research Philosophy"
                : "فلسفه پژوهشی"}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              {en
                ? "I believe that rigorous molecular research, transparent bioinformatics and translational thinking are the three pillars of modern genomic medicine. Every dataset is a story; every pipeline must be reproducible; every finding should move us closer to the patient bedside."
                : "من معتقدم که پژوهش دقیق مولکولی، بیوانفورماتیک شفاف و تفکر انتقالی، سه ستون پزشکی ژنومی مدرن هستند. هر مجموعه داده یک داستان است؛ هر پایپ‌لاین باید بازتولیدپذیر باشد؛ هر یافته‌ای باید ما را به بالین بیمار نزدیک‌تر کند."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/publications" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white/90">
                {en ? "View Publications" : "مشاهده انتشارات"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/partnerships" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
                {en ? "Research Partnerships" : "مشارکت‌های پژوهشی"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section>
        <div className="overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {en ? "Let's advance science together." : "بیایید علم را با هم پیش ببریم."}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {en
              ? "Whether you are exploring a research collaboration, seeking bioinformatics consulting, or designing a genomic study — I would welcome the conversation."
              : "چه در جستجوی همکاری پژوهشی هستید، چه مشاوره بیوانفورماتیک می‌خواهید، یا در حال طراحی یک مطالعه ژنومی — از گفت‌وگو با شما استقبال می‌کنم."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              <Mail className="h-4 w-4" />
              {en ? "Get in Touch" : "تماس بگیرید"}
            </Link>
            <a
              href="#"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                alert(en ? "LinkedIn profile link can be added here." : "لینک پروفایل لینکدین اینجا قرار می‌گیرد.");
              }}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
