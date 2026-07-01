import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import {
  Award,
  GraduationCap,
  FlaskConical,
  Microscope,
  Globe2,
  Dna,
  DnaIcon,
  Database,
  Stethoscope,
  ClipboardList,
  Lightbulb,
  BookOpen,
  Telescope,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pouya Pazhouhesh Lian Gene" },
      {
        name: "description",
        content:
          "Founded by a PhD molecular geneticist and university faculty member, Lian Gene drives cancer genomics, bioinformatics and translational research.",
      },
      { property: "og:title", content: "About — Pouya Pazhouhesh Lian Gene" },
      {
        property: "og:description",
        content: "Company profile, founder credentials, activities, vision and mission.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <>
      <PageHero
        eyebrow={{ en: "About Us", fa: "درباره ما" }}
        titleEn="About Pouya Pazhouhesh Lian Gene"
        titleFa="درباره پویا پژوهش لیان ژن"
        subEn="A research and technology company active in genetics, genomics, bioinformatics and life sciences, founded to advance knowledge, innovation and technology transfer in healthcare."
        subFa="پویا پژوهش لیان ژن یک شرکت پژوهشی و فناورانه فعال در حوزه ژنتیک، ژنومیک، بیوانفورماتیک و علوم زیستی است که با هدف توسعه دانش، نوآوری و انتقال فناوری در حوزه سلامت تأسیس شده است."
      />

      <Section>
        <SectionHead
          eyebrow={{ en: "Who We Are", fa: "ما کی هستیم" }}
          titleEn="Bridging science, industry and healthcare"
          titleFa="ایجاد پلی میان علم، صنعت و سلامت"
          subEn="Relying on the specialized knowledge and scientific experience of our founders, we design and execute research projects, analyze genomic data, develop bioinformatics solutions, provide scientific consulting and foster university–industry collaboration."
          subFa="این شرکت با تکیه بر دانش تخصصی و تجربه علمی بنیان‌گذاران خود، در زمینه طراحی و اجرای پروژه‌های تحقیقاتی، تحلیل داده‌های ژنومی، توسعه راهکارهای بیوانفورماتیکی، مشاوره پژوهشی و همکاری‌های علمی میان دانشگاه و صنعت فعالیت می‌کند."
        />
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {en
              ? "Lian Gene believes that the future of medicine and health will be built on a deep understanding of the genome, biological data analysis and emerging technologies. Therefore, we strive to play an effective role in developing applied research and translating scientific findings into usable technologies by leveraging cutting-edge global knowledge."
              : "لیان ژن بر این باور است که آینده پزشکی و سلامت بر پایه درک عمیق ژنوم، تحلیل داده‌های زیستی و فناوری‌های نوین شکل خواهد گرفت. از این رو، تلاش می‌کنیم با بهره‌گیری از دانش روز دنیا، نقش مؤثری در توسعه پژوهش‌های کاربردی و تبدیل یافته‌های علمی به فناوری‌های قابل استفاده ایفا کنیم."}
          </p>
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="container-prose grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="relative">
            <div
              className="aspect-square w-full rounded-3xl border border-border"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-full bg-white/10 p-8 backdrop-blur">
                <Microscope className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow mb-4">
              {en ? "Founder & Scientific Director" : "بنیان‌گذار و مدیر علمی"}
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {en
                ? "Led by a PhD molecular geneticist & university faculty member"
                : "بنیان‌گذار و مدیر علمی شرکت دارای مدرک دکترای تخصصی ژنتیک مولکولی و عضو هیئت علمی دانشگاه علوم پزشکی است."}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {en
                ? "Specialties include molecular genetics, cancer genomics, RNA biology, bioinformatics, NGS and RNA-Seq data analysis, and precision medicine research."
                : "حوزه‌های تخصصی وی شامل ژنتیک مولکولی، ژنومیک سرطان، RNA Biology، بیوانفورماتیک، تحلیل داده‌های NGS و RNA-Seq و پژوهش‌های مرتبط با پزشکی دقیق (Precision Medicine) است."}
            </p>
            <p className="mt-4 text-muted-foreground">
              {en
                ? "Research background includes participation in national and international research projects, peer-reviewed publications in reputable journals, and development of novel methods for genomic and biological data analysis."
                : "سوابق پژوهشی و علمی ایشان شامل مشارکت در پروژه‌های تحقیقاتی ملی و بین‌المللی، انتشار مقالات علمی در مجلات معتبر و فعالیت در حوزه توسعه روش‌های نوین تحلیل داده‌های ژنومی و زیستی است."}
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {[
                [<Award className="h-4 w-4" />, "PhD in Molecular Genetics", "دکترای ژنتیک مولکولی"],
                [<GraduationCap className="h-4 w-4" />, "University Faculty Member", "عضو هیئت علمی دانشگاه"],
                [<FlaskConical className="h-4 w-4" />, "Cancer Genomics Researcher", "پژوهشگر ژنومیک سرطان"],
                [<Microscope className="h-4 w-4" />, "Bioinformatics Researcher", "پژوهشگر بیوانفورماتیک"],
                [<Globe2 className="h-4 w-4" />, "International Collaborations", "همکاری‌های بین‌المللی"],
              ].map((row, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span
                    className="grid h-7 w-7 place-items-center rounded-lg text-primary"
                    style={{
                      background:
                        "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)",
                    }}
                  >
                    {row[0]}
                  </span>
                  <span className="text-foreground">
                    {en ? row[1] : row[2]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow={{ en: "What We Do", fa: "حوزه‌های فعالیت" }}
          titleEn="Areas of Expertise"
          titleFa="حوزه‌های فعالیت"
          subEn="Deep expertise across molecular genetics, cancer genomics, next-generation sequencing and bioinformatics."
          subFa=""
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Dna className="h-5 w-5" />,
              en: "Molecular Genetics & Medical Genetics",
              fa: "ژنتیک مولکولی و ژنتیک پزشکی",
            },
            {
              icon: <DnaIcon className="h-5 w-5" />,
              en: "Genomics & NGS Technologies",
              fa: "ژنومیک و فناوری‌های توالی‌یابی نسل جدید (NGS)",
            },
            {
              icon: <Database className="h-5 w-5" />,
              en: "Bioinformatics & Biological Data Analysis",
              fa: "بیوانفورماتیک و تحلیل داده‌های زیستی",
            },
            {
              icon: <Stethoscope className="h-5 w-5" />,
              en: "Cancer Genomics & Personalized Medicine",
              fa: "ژنومیک سرطان و پزشکی شخصی‌سازی‌شده",
            },
            {
              icon: <ClipboardList className="h-5 w-5" />,
              en: "Research Project Design & Execution",
              fa: "طراحی و اجرای پروژه‌های تحقیقاتی",
            },
            {
              icon: <Lightbulb className="h-5 w-5" />,
              en: "Scientific Consulting & R&D",
              fa: "مشاوره علمی و تحقیق و توسعه (R&D)",
            },
            {
              icon: <BookOpen className="h-5 w-5" />,
              en: "Specialized Training in Genetics, Genomics & Bioinformatics",
              fa: "آموزش تخصصی ژنتیک، ژنومیک و بیوانفورماتیک",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card-surface group flex items-start gap-3"
            >
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-primary"
                style={{
                  background:
                    "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)",
                }}
              >
                {item.icon}
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">
                {en ? item.en : item.fa}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="container-prose grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow mb-4">
              {en ? "Vision" : "چشم‌انداز"}
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {en ? "Our Vision" : "چشم‌انداز ما"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {en
                ? "Our vision is to become a leading knowledge-based company in genetics, genomics and biotechnology — a company that can bridge university, industry and the healthcare system through research, innovation and technology development."
                : "چشم‌انداز ما تبدیل شدن به یک شرکت دانش‌بنیان پیشرو در حوزه ژنتیک، ژنومیک و فناوری‌های زیستی است؛ شرکتی که بتواند از طریق پژوهش، نوآوری و توسعه فناوری، پلی میان دانشگاه، صنعت و نظام سلامت ایجاد کند."}
            </p>
          </div>
          <div>
            <span className="eyebrow mb-4">
              {en ? "Mission" : "مأموریت"}
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {en ? "Our Mission" : "مأموریت ما"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {en
                ? "Our mission is to deliver scientific and technological services at the highest professional standards, develop innovative solutions in life sciences, and contribute to the advancement of research and technology in healthcare."
                : "مأموریت ما ارائه خدمات علمی و فناورانه با بالاترین استانداردهای تخصصی، توسعه راهکارهای نوآورانه در علوم زیستی و کمک به پیشرفت پژوهش و فناوری در حوزه سلامت است."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
