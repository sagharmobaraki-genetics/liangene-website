import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { Dna, FlaskConical, Microscope, Brain, Activity, Database } from "lucide-react";

type CategoryKey = "all" | "cancer-genomics" | "ngs" | "bioinformatics" | "rna-biology" | "precision-medicine" | "ai-healthcare";

type Post = {
  slug: CategoryKey;
  cat: { en: string; fa: string };
  date: string;
  titleEn: string;
  titleFa: string;
  excerptEn: string;
  excerptFa: string;
  readTime: string;
};

const categories: { key: CategoryKey; icon: React.ReactNode; labelEn: string; labelFa: string }[] = [
  { key: "all", icon: <Database className="h-3.5 w-3.5" />, labelEn: "All", labelFa: "همه" },
  { key: "cancer-genomics", icon: <Activity className="h-3.5 w-3.5" />, labelEn: "Cancer Genomics", labelFa: "ژنومیک سرطان" },
  { key: "ngs", icon: <Dna className="h-3.5 w-3.5" />, labelEn: "NGS", labelFa: "توالی‌یابی نسل جدید" },
  { key: "bioinformatics", icon: <Database className="h-3.5 w-3.5" />, labelEn: "Bioinformatics", labelFa: "بیوانفورماتیک" },
  { key: "rna-biology", icon: <FlaskConical className="h-3.5 w-3.5" />, labelEn: "RNA Biology", labelFa: "زیست‌شناسی RNA" },
  { key: "precision-medicine", icon: <Microscope className="h-3.5 w-3.5" />, labelEn: "Precision Medicine", labelFa: "پزشکی دقیق" },
  { key: "ai-healthcare", icon: <Brain className="h-3.5 w-3.5" />, labelEn: "AI in Healthcare", labelFa: "هوش مصنوعی در سلامت" },
];

const posts: Post[] = [
  // Cancer Genomics
  {
    slug: "cancer-genomics",
    cat: { en: "Cancer Genomics", fa: "ژنومیک سرطان" },
    date: "2025-06-18",
    titleEn: "Liquid biopsy advances in early-stage cancer detection",
    titleFa: "پیشرفت‌های بیوپسی مایع در تشخیص زودهنگام سرطان",
    excerptEn: "Circulating tumor DNA analysis is reshaping how clinicians detect malignancies before symptoms emerge.",
    excerptFa: "تحلیل DNA تومور در گردش، نحوه تشخیص بدخیمی‌ها پیش از بروز علائم را دگرگون می‌کند.",
    readTime: "8 min",
  },
  {
    slug: "cancer-genomics",
    cat: { en: "Cancer Genomics", fa: "ژنومیک سرطان" },
    date: "2025-05-22",
    titleEn: "Mutational signatures as therapeutic roadmaps in solid tumors",
    titleFa: "امضاهای جهشی به‌عنوان نقشه راه درمانی در تومورهای جامد",
    excerptEn: "Deciphering mutational processes opens new avenues for targeted intervention and patient stratification.",
    excerptFa: "رمزگشایی فرآیندهای جهشی، مسیرهای جدیدی برای مداخله هدفمند و رده‌بندی بیماران می‌گشاید.",
    readTime: "10 min",
  },
  {
    slug: "cancer-genomics",
    cat: { en: "Cancer Genomics", fa: "ژنومیک سرطان" },
    date: "2025-04-10",
    titleEn: "Tumor microenvironment heterogeneity and immune evasion",
    titleFa: "ناهمگنی ریزمحیط تومور و فرار از سیستم ایمنی",
    excerptEn: "Single-cell profiling reveals how cancer cells sculpt their niche to suppress immune surveillance.",
    excerptFa: "پروفایل‌سازی تک‌سلولی نشان می‌دهد که سلول‌های سرطانی چگونه جایگاه خود را برای سرکوب پایش ایمنی شکل می‌دهند.",
    readTime: "7 min",
  },
  // NGS
  {
    slug: "ngs",
    cat: { en: "NGS", fa: "توالی‌یابی نسل جدید" },
    date: "2025-06-12",
    titleEn: "Long-read sequencing closes the gap in structural variant detection",
    titleFa: "توالی‌یابی خوانش بلند، شکاف در تشخیص واریانت ساختاری را می‌بندد",
    excerptEn: "PacBio and Oxford Nanopore platforms are now routine tools for resolving complex genomic rearrangements.",
    excerptFa: "پلتفرم‌های PacBio و Oxford Nanopore اکنون ابزارهای روتین برای حل بازآرایی‌های پیچیده ژنومی هستند.",
    readTime: "9 min",
  },
  {
    slug: "ngs",
    cat: { en: "NGS", fa: "توالی‌یابی نسل جدید" },
    date: "2025-05-05",
    titleEn: "Whole-genome sequencing in newborn screening programs",
    titleFa: "توالی‌یابی کل ژنوم در برنامه‌های غربالگری نوزادان",
    excerptEn: "Pilot studies demonstrate the clinical utility and ethical complexities of early-life genomic data.",
    excerptFa: "مطالعات آزمایشی کاربرد بالینی و پیچیدگی‌های اخلاقی داده‌های ژنومی دوران نوزادی را نشان می‌دهند.",
    readTime: "6 min",
  },
  {
    slug: "ngs",
    cat: { en: "NGS", fa: "توالی‌یابی نسل جدید" },
    date: "2025-03-28",
    titleEn: "Optimizing library prep for low-input tumor samples",
    titleFa: "بهینه‌سازی آماده‌سازی کتابخانه برای نمونه‌های تومور با ورودی کم",
    excerptEn: "Ultra-low DNA inputs demand refined protocols to maintain sensitivity without introducing artifacts.",
    excerptFa: "ورودی‌های بسیار کم DNA نیازمند پروتکل‌های اصلاح‌شده برای حفظ حساسیت بدون ایجاد آثار مصنوعی است.",
    readTime: "8 min",
  },
  // Bioinformatics
  {
    slug: "bioinformatics",
    cat: { en: "Bioinformatics", fa: "بیوانفورماتیک" },
    date: "2025-06-05",
    titleEn: "Scalable cloud pipelines for population-scale genomics",
    titleFa: "پایپ‌لاین‌های ابری مقیاس‌پذیر برای ژنومیک جمعیت‌محور",
    excerptEn: "Containerized workflows on Kubernetes enable reproducible analysis of hundred-thousand cohorts.",
    excerptFa: "گردش کارهای کانتینری‌سازی‌شده روی Kubernetes، تحلیل بازتولیدپذیر کوهورت‌های صدهزار نفری را ممکن می‌سازد.",
    readTime: "7 min",
  },
  {
    slug: "bioinformatics",
    cat: { en: "Bioinformatics", fa: "بیوانفورماتیک" },
    date: "2025-04-30",
    titleEn: "Benchmarking variant callers across diverse ancestries",
    titleFa: "معیارسنجی نرم‌افزارهای تشخیص واریانت در نیاکانی‌های متنوع",
    excerptEn: "Reference bias persists; multi-ethnic truth sets are essential for equitable genomic medicine.",
    excerptFa: "گرایش به مرجع همچنان پابرجاست؛ مجموعه‌های حقیقتی چندقومیتی برای پزشکی ژنومی عادلانه ضروری‌اند.",
    readTime: "9 min",
  },
  {
    slug: "bioinformatics",
    cat: { en: "Bioinformatics", fa: "بیوانفورماتیک" },
    date: "2025-02-14",
    titleEn: "Graph genomes and the future of reference assemblies",
    titleFa: "ژنوم‌های گرافی و آینده مونتاژهای مرجع",
    excerptEn: "Linear references are giving way to pangenome graphs that capture population diversity natively.",
    excerptFa: "مرجع‌های خطی جای خود را به گراف‌های پان‌ژنومی می‌دهند که تنوع جمعیتی را به‌صورت بومی ثبت می‌کنند.",
    readTime: "11 min",
  },
  // RNA Biology
  {
    slug: "rna-biology",
    cat: { en: "RNA Biology", fa: "زیست‌شناسی RNA" },
    date: "2025-06-01",
    titleEn: "Single-cell RNA-seq reveals lineage plasticity in leukemia",
    titleFa: "RNA-seq تک‌سلولی، انعطاف‌پذیری سلسه‌ای در لوکمی را آشکار می‌کند",
    excerptEn: "Transcriptomic trajectories trace differentiation reversals that underlie relapse and resistance.",
    excerptFa: "مسیرهای رونویسی، معکوس‌شدگی‌های تمایزی که بازگشت و مقاومت را توضیح می‌دهند، ردیابی می‌کنند.",
    readTime: "8 min",
  },
  {
    slug: "rna-biology",
    cat: { en: "RNA Biology", fa: "زیست‌شناسی RNA" },
    date: "2025-04-18",
    titleEn: "Circular RNAs as emerging biomarkers in cardiovascular disease",
    titleFa: "RNAهای حلقوی به‌عنوان بیومارکرهای نوظهور در بیماری قلبی-عروقی",
    excerptEn: "CircRNAs exhibit remarkable stability in plasma, making them attractive non-invasive diagnostic candidates.",
    excerptFa: "CircRNAها پایداری قابل‌توجهی در پلاسما از خود نشان می‌دهند و کاندیداهای تشخیصی غیرتهاجمی جذابی هستند.",
    readTime: "6 min",
  },
  {
    slug: "rna-biology",
    cat: { en: "RNA Biology", fa: "زیست‌شناسی RNA" },
    date: "2025-03-05",
    titleEn: "Nascent transcript profiling with precision run-on sequencing",
    titleFa: "پروفایل‌سازی رونویس‌های نوبه‌با دقت با توالی‌یابی run-on",
    excerptEn: "PRO-seq maps active promoters and enhancers with nucleotide resolution in living cells.",
    excerptFa: "PRO-seq، پروموترهای فعال و تقویت‌کننده‌ها را با وضوح نوکلئوتیدی در سلول‌های زنده نقشه‌برداری می‌کند.",
    readTime: "10 min",
  },
  // Precision Medicine
  {
    slug: "precision-medicine",
    cat: { en: "Precision Medicine", fa: "پزشکی دقیق" },
    date: "2025-05-28",
    titleEn: "Pharmacogenomic testing in oncology clinical workflows",
    titleFa: "آزمون فارماکوژنومیک در گردش کار بالینی انکولوژی",
    excerptEn: "Integrating germline pharmacogenes into electronic health records streamlines therapeutic decision-making.",
    excerptFa: "ادغام ژن‌های فارماکوژنومیک ژرم‌لاین در پرونده‌های سلامت الکترونیک، تصمیم‌گیری درمانی را تسهیل می‌کند.",
    readTime: "7 min",
  },
  {
    slug: "precision-medicine",
    cat: { en: "Precision Medicine", fa: "پزشکی دقیق" },
    date: "2025-04-08",
    titleEn: "Polygenic risk scores for common disease prevention",
    titleFa: "امتیازات خطر پلی‌ژنیک برای پیشگیری از بیماری‌های رایج",
    excerptEn: "Combining millions of common variants into risk estimates is transitioning from research to clinical utility.",
    excerptFa: "ترکیب میلیون‌ها واریانت رایج در تخمین‌های خطر، از پژوهش به کاربرد بالینی در حال گذر است.",
    readTime: "9 min",
  },
  {
    slug: "precision-medicine",
    cat: { en: "Precision Medicine", fa: "پزشکی دقیق" },
    date: "2025-02-22",
    titleEn: "Rare disease diagnostics through trio-based exome analysis",
    titleFa: "تشخیص بیماری‌های نادر از طریق تحلیل اگزوم مبتنی بر تریو",
    excerptEn: "Family trios remain the gold standard for resolving de novo and compound heterozygous variants.",
    excerptFa: "تریوهای خانوادگی همچنان استاندارد طلایی برای حل واریانت‌های de novo و مرکب هتروزیگوت هستند.",
    readTime: "8 min",
  },
  // AI in Healthcare
  {
    slug: "ai-healthcare",
    cat: { en: "AI in Healthcare", fa: "هوش مصنوعی در سلامت" },
    date: "2025-06-10",
    titleEn: "Foundation models for clinical variant interpretation",
    titleFa: "مدل‌های بنیادی برای تفسیر واریانت بالینی",
    excerptEn: "Large language models trained on genomic literature are accelerating variant pathogenicity assessment.",
    excerptFa: "مدل‌های زبانی بزرگ آموزش‌دیده بر ادبیات ژنومیک، ارزیابی بیماری‌زایی واریانت را تسریع می‌کنند.",
    readTime: "10 min",
  },
  {
    slug: "ai-healthcare",
    cat: { en: "AI in Healthcare", fa: "هوش مصنوعی در سلامت" },
    date: "2025-05-15",
    titleEn: "Deep learning predicts patient response to immunotherapy",
    titleFa: "یادگیری عمیق، پاسخ بیمار به ایمنی‌درمانی را پیش‌بینی می‌کند",
    excerptEn: "Multi-modal neural networks fuse pathology imaging, transcriptomics and clinical history for outcome prediction.",
    excerptFa: "شبکه‌های عصبی چندوجهی، تصویربرداری پاتولوژی، رونویس‌شناسی و سابقه بالینی را برای پیش‌بینی نتیجه ترکیب می‌کنند.",
    readTime: "8 min",
  },
  {
    slug: "ai-healthcare",
    cat: { en: "AI in Healthcare", fa: "هوش مصنوعی در سلامت" },
    date: "2025-03-20",
    titleEn: "Generative models for de novo protein design in therapeutics",
    titleFa: "مدل‌های مولد برای طراحی پروتئین de novo در درمان",
    excerptEn: "Diffusion-based architectures propose novel protein binders with predicted high affinity and manufacturability.",
    excerptFa: "معماری‌های مبتنی بر انتشار، اتصال‌دهنده‌های پروتئینی جدیدی با وابستگی بالای پیش‌بینی‌شده و قابلیت تولید پیشنهاد می‌دهند.",
    readTime: "9 min",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Scientific Blog — Lian Gene" },
      { name: "description", content: "Scientific articles on cancer genomics, NGS, bioinformatics, RNA biology, precision medicine, and AI in healthcare." },
      { property: "og:title", content: "Scientific Blog — Lian Gene" },
      { property: "og:description", content: "Peer-reviewed insights from our molecular genetics and bioinformatics research team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { lang } = useLang();
  const en = lang === "en";
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered = active === "all" ? posts : posts.filter((p) => p.slug === active);

  return (
    <>
      <PageHero
        eyebrow={{ en: "Scientific Blog", fa: "وبلاگ علمی" }}
        titleEn="Research insights & scientific perspectives"
        titleFa="بینش‌های پژوهشی و دیدگاه‌های علمی"
        subEn="Peer-reviewed commentary on cancer genomics, next-generation sequencing, bioinformatics, RNA biology, precision medicine, and artificial intelligence in healthcare."
        subFa="تفسیرهای داوری‌شده درباره ژنومیک سرطان، توالی‌یابی نسل جدید، بیوانفورماتیک، زیست‌شناسی RNA، پزشکی دقیق و هوش مصنوعی در سلامت."
      />

      <Section>
        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  isActive
                    ? "border-transparent text-white shadow"
                    : "border-border bg-surface text-foreground/70 hover:border-secondary hover:text-secondary"
                }`}
                style={isActive ? { background: "var(--gradient-primary)" } : undefined}
              >
                {c.icon}
                {en ? c.labelEn : c.labelFa}
              </button>
            );
          })}
        </div>

        {/* Post Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article key={`${p.slug}-${i}`} className="card-surface flex flex-col">
              <div
                className="mb-4 aspect-[16/10] overflow-hidden rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="grid h-full place-items-center text-white/80 text-xs uppercase tracking-widest">
                  {en ? p.cat.en : p.cat.fa}
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{p.date}</span>
                <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/50" />
                <span>{p.readTime}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug">
                {en ? p.titleEn : p.titleFa}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {en ? p.excerptEn : p.excerptFa}
              </p>
              <a
                href="#"
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                {en ? "Read article →" : "مقاله را بخوانید →"}
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-2xl border border-border p-8 md:p-10" style={{ background: "var(--gradient-hero)" }}>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-bold md:text-2xl">
              {en ? "Stay current with genomic science" : "با علم ژنومیک به‌روز بمانید"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {en
                ? "Receive curated research summaries and protocol updates directly to your inbox."
                : "خلاصه‌های پژوهشی منتخب و به‌روزرسانی‌های پروتکل را مستقیماً در صندوق ورودی خود دریافت کنید."}
            </p>
            <form className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder={en ? "Enter your email" : "ایمیل خود را وارد کنید"}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary sm:w-72"
              />
              <button type="submit" className="btn-primary text-xs">
                {en ? "Subscribe" : "اشتراک"}
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
