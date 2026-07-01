import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { Rocket, ShieldCheck, Award, Building2, Banknote, Globe2, Cpu, Dna, FlaskConical, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Knowledge-Based Company Roadmap — Lian Gene" },
      { name: "description", content: "Our roadmap to becoming a certified knowledge-based genomics & bioinformatics company in Iran, with a long-term vision for international scientific impact." },
      { property: "og:title", content: "Knowledge-Based Company Roadmap — Lian Gene" },
      { property: "og:description", content: "From research foundation to certified knowledge-based status and global biotech partnerships." },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  const { lang } = useLang();
  const en = lang === "en";

  const phases = [
    {
      year: "2024 – 2025",
      tEn: "Phase I · Scientific Foundation",
      tFa: "فاز ۱ · بنیان علمی",
      dEn: "Establish research infrastructure, reproducible bioinformatics pipelines, and a peer-reviewed publication portfolio in genomics, cancer genomics and NGS.",
      dFa: "ایجاد زیرساخت پژوهشی، پایپ‌لاین‌های بازتولیدپذیر بیوانفورماتیک و کارنامه انتشارات داوری‌شده در ژنومیک، ژنومیک سرطان و NGS.",
      icon: <FlaskConical className="h-5 w-5" />,
    },
    {
      year: "2025 – 2026",
      tEn: "Phase II · Service & Collaboration Growth",
      tFa: "فاز ۲ · رشد خدمات و همکاری‌ها",
      dEn: "Expand genomics & bioinformatics services, build academic and hospital partnerships, and launch national training programs in NGS and multi-omics.",
      dFa: "توسعه خدمات ژنومیک و بیوانفورماتیک، ساخت همکاری‌های دانشگاهی و بیمارستانی و راه‌اندازی برنامه‌های آموزشی NGS و مولتی‌اومیکس.",
      icon: <Globe2 className="h-5 w-5" />,
    },
    {
      year: "2026 – 2027",
      tEn: "Phase III · Knowledge-Based Certification",
      tFa: "فاز ۳ · اخذ گواهی دانش‌بنیان",
      dEn: "Apply for and obtain certified Knowledge-Based Company status from Iran's Vice-Presidency for Science & Technology, unlocking national R&D incentives.",
      dFa: "اقدام و دریافت گواهی شرکت دانش‌بنیان از معاونت علمی و فناوری ریاست جمهوری و بهره‌مندی از حمایت‌های ملی پژوهش و فناوری.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2027 – 2028",
      tEn: "Phase IV · Translational & Clinical Products",
      tFa: "فاز ۴ · محصولات انتقالی و بالینی",
      dEn: "Develop in-house bioinformatics products, clinical genomics panels and AI-driven precision-medicine pipelines validated for healthcare use.",
      dFa: "توسعه محصولات بیوانفورماتیکی داخلی، پنل‌های ژنومیک بالینی و پایپ‌لاین‌های پزشکی دقیق مبتنی بر هوش مصنوعی و اعتبارسنجی‌شده برای کاربرد سلامت.",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      year: "2028 – 2030",
      tEn: "Phase V · International Biotech Partnerships",
      tFa: "فاز ۵ · مشارکت‌های بین‌المللی زیست‌فناوری",
      dEn: "Form strategic alliances with international genomics companies, pharma R&D programs, and global research consortia.",
      dFa: "ایجاد اتحادهای راهبردی با شرکت‌های بین‌المللی ژنومیک، برنامه‌های تحقیق و توسعه دارویی و کنسرسیوم‌های جهانی پژوهشی.",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      year: "2030 +",
      tEn: "Phase VI · Iranian Genomics Champion",
      tFa: "فاز ۶ · قهرمان ژنومیک ایران",
      dEn: "Become a leading Iranian genomics & bioinformatics company recognized for scientific excellence, innovation and translational healthcare impact.",
      dFa: "تبدیل‌شدن به یکی از شرکت‌های پیشرو ژنومیک و بیوانفورماتیک ایران با شهرت در تعالی علمی، نوآوری و اثرگذاری بر سلامت.",
      icon: <Rocket className="h-5 w-5" />,
    },
  ];

  const pillars = [
    { icon: <Dna className="h-5 w-5" />, tEn: "Scientific Excellence", tFa: "تعالی علمی", dEn: "Publication-grade research and peer-reviewed methodology in every project.", dFa: "پژوهش در سطح انتشار و روش‌شناسی داوری‌شده در هر پروژه." },
    { icon: <ShieldCheck className="h-5 w-5" />, tEn: "Reproducibility & Quality", tFa: "بازتولیدپذیری و کیفیت", dEn: "Containerized, version-controlled pipelines aligned with international standards.", dFa: "پایپ‌لاین‌های کانتینری و نسخه‌کنترل‌شده مطابق با استانداردهای بین‌المللی." },
    { icon: <Banknote className="h-5 w-5" />, tEn: "Sustainable Innovation", tFa: "نوآوری پایدار", dEn: "Self-funded R&D plus national & international grant strategy.", dFa: "تحقیق و توسعه خودگردان به‌همراه راهبرد گرنت ملی و بین‌المللی." },
  ];

  return (
    <>
      <PageHero
        eyebrow={{ en: "Knowledge-Based Company Roadmap", fa: "نقشه راه شرکت دانش‌بنیان" }}
        titleEn="A clear path from research lab to certified knowledge-based biotech."
        titleFa="مسیری روشن از آزمایشگاه پژوهشی تا شرکت دانش‌بنیان معتبر."
        subEn="Lian Gene is built as a long-term scientific company. Our roadmap defines how we move from research excellence today to certified Knowledge-Based Company status and international biotech partnerships tomorrow."
        subFa="لیان ژن به عنوان یک شرکت علمی بلندمدت طراحی شده است. نقشه راه ما مسیر حرکت از تعالی پژوهشی امروز به جایگاه شرکت دانش‌بنیان معتبر و مشارکت‌های بین‌المللی فردا را مشخص می‌کند."
      >
        <Link to="/partnerships" className="btn-primary">{en ? "Partner with us" : "همکاری با ما"} <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/contact" className="btn-ghost">{en ? "Discuss the roadmap" : "گفتگو درباره نقشه راه"}</Link>
      </PageHero>

      <Section>
        <SectionHead
          eyebrow={{ en: "Strategic Pillars", fa: "ستون‌های راهبردی" }}
          titleEn="Three pillars driving every phase"
          titleFa="سه ستون پیشران در همه فازها"
          subEn="Excellence, reproducibility and sustainable innovation underpin every milestone on the roadmap."
          subFa="تعالی، بازتولیدپذیری و نوآوری پایدار، بنیان همه نقاط عطف این نقشه راه هستند."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.tEn} icon={p.icon} titleEn={p.tEn} titleFa={p.tFa} descEn={p.dEn} descFa={p.dFa} />
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="container-prose py-20">
          <SectionHead
            eyebrow={{ en: "Timeline", fa: "خط زمانی" }}
            titleEn="Six phases to international scientific impact"
            titleFa="شش فاز تا اثرگذاری علمی بین‌المللی"
          />
          <ol className="relative grid gap-6 md:gap-8">
            {phases.map((p, i) => (
              <li key={i} className="relative grid gap-4 rounded-3xl border border-border bg-background p-6 md:grid-cols-[180px_1fr] md:p-8">
                <div className="flex items-center gap-3 md:flex-col md:items-start">
                  <div className="grid h-11 w-11 place-items-center rounded-xl text-primary" style={{ background: "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)" }}>{p.icon}</div>
                  <div className="text-sm font-semibold tracking-wider text-muted-foreground">{p.year}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{en ? p.tEn : p.tFa}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{en ? p.dEn : p.dFa}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section>
        <div className="overflow-hidden rounded-3xl border border-border p-10 text-center text-white md:p-16" style={{ background: "var(--gradient-primary)" }}>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{en ? "Join us on the path to a knowledge-based future." : "در مسیر آینده دانش‌بنیان همراه ما باشید."}</h2>
          <p className="mt-3 text-white/85">{en ? "We welcome research, clinical and industrial partners aligned with our long-term vision." : "از همکاری شرکای پژوهشی، بالینی و صنعتی هم‌سو با چشم‌انداز بلندمدت خود استقبال می‌کنیم."}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/partnerships" className="btn-accent">{en ? "Become a Partner" : "همکاری راهبردی"}</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">{en ? "Contact Us" : "تماس با ما"}</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
