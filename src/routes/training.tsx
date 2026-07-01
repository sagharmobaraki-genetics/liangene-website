import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, FeatureCard } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { GraduationCap, FlaskConical, Dna, ClipboardList, PenSquare, Monitor, MapPin } from "lucide-react";

const items = [
  { i: <Dna className="h-5 w-5" />, en: "Bioinformatics Courses", fa: "دوره‌های بیوانفورماتیک", dEn: "Foundational and advanced courses covering RNA-Seq, single-cell and AI for genomics.", dFa: "دوره‌های پایه و پیشرفته شامل RNA-Seq، تک‌سلولی و هوش مصنوعی در ژنومیک." },
  { i: <FlaskConical className="h-5 w-5" />, en: "NGS Workshops", fa: "کارگاه‌های NGS", dEn: "Hands-on workshops from sample prep to data analysis.", dFa: "کارگاه عملی از آماده‌سازی نمونه تا تحلیل داده." },
  { i: <Dna className="h-5 w-5" />, en: "Genomics Training", fa: "آموزش ژنومیک", dEn: "WGS / WES / variant analysis with real datasets.", dFa: "آموزش WGS/WES و تحلیل واریانت با داده‌های واقعی." },
  { i: <ClipboardList className="h-5 w-5" />, en: "Research Methodology", fa: "روش‌شناسی پژوهش", dEn: "Designing rigorous and reproducible biomedical studies.", dFa: "طراحی مطالعات زیست‌پزشکی دقیق و بازتولیدپذیر." },
  { i: <PenSquare className="h-5 w-5" />, en: "Scientific Writing", fa: "نگارش علمی", dEn: "Manuscripts, figures, abstracts and journal submission strategy.", dFa: "نگارش مقاله، شکل، چکیده و راهبرد ارسال به ژورنال." },
  { i: <Monitor className="h-5 w-5" />, en: "Online & In-Person", fa: "آنلاین و حضوری", dEn: "Flexible delivery, recorded sessions and live workshops.", dFa: "ارائه منعطف، جلسات ضبط‌شده و کارگاه‌های زنده." },
];

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — Lian Gene" },
      { name: "description", content: "Bioinformatics courses, NGS workshops, genomics training, research methodology and scientific writing." },
      { property: "og:title", content: "Training — Lian Gene" },
      { property: "og:description", content: "Online and in-person scientific training programs." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <>
      <PageHero
        eyebrow={{ en: "Training", fa: "آموزش" }}
        titleEn="Train the next generation of genomic scientists"
        titleFa="آموزش نسل آینده پژوهشگران ژنومی"
        subEn="Practical, project-based programs taught by active researchers — online and in-person."
        subFa="برنامه‌های کاربردی و پروژه‌محور با تدریس پژوهشگران فعال — آنلاین و حضوری."
      >
        <Link to="/contact" className="btn-primary">{en ? "Enroll or Book" : "ثبت‌نام و رزرو"}</Link>
      </PageHero>
      <Section>
        <SectionHead eyebrow={{ en: "Programs", fa: "برنامه‌ها" }} titleEn="What you can learn with us" titleFa="آنچه می‌توانید با ما بیاموزید" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => <FeatureCard key={i} icon={s.i} titleEn={s.en} titleFa={s.fa} descEn={s.dEn} descFa={s.dFa} />)}
        </div>
      </Section>
    </>
  );
}
