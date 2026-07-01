import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import { DnaBackground } from "./DnaBackground";

export function PageHero({
  eyebrow,
  titleEn,
  titleFa,
  subEn,
  subFa,
  children,
}: {
  eyebrow?: { en: string; fa: string };
  titleEn: string;
  titleFa: string;
  subEn: string;
  subFa: string;
  children?: ReactNode;
}) {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
      <DnaBackground />
      <div className="container-prose relative py-20 md:py-28">
        {eyebrow && <span className="eyebrow mb-5">{lang === "fa" ? eyebrow.fa : eyebrow.en}</span>}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          <span className="text-gradient">{lang === "fa" ? titleFa : titleEn}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {lang === "fa" ? subFa : subEn}
        </p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`section-pad ${className}`}><div className="container-prose">{children}</div></section>;
}

export function SectionHead({
  eyebrow, titleEn, titleFa, subEn, subFa, center = false,
}: {
  eyebrow?: { en: string; fa: string };
  titleEn: string; titleFa: string;
  subEn?: string; subFa?: string;
  center?: boolean;
}) {
  const { lang } = useLang();
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {eyebrow && <span className="eyebrow mb-4">{lang === "fa" ? eyebrow.fa : eyebrow.en}</span>}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{lang === "fa" ? titleFa : titleEn}</h2>
      {(subEn || subFa) && <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{lang === "fa" ? subFa : subEn}</p>}
    </div>
  );
}

export function FeatureCard({
  icon, titleEn, titleFa, descEn, descFa,
}: {
  icon?: ReactNode;
  titleEn: string; titleFa: string;
  descEn: string; descFa: string;
}) {
  const { lang } = useLang();
  return (
    <div className="card-surface group">
      {icon && (
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl text-primary" style={{ background: "color-mix(in oklab, var(--brand-turquoise) 14%, transparent)" }}>
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground">{lang === "fa" ? titleFa : titleEn}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lang === "fa" ? descFa : descEn}</p>
    </div>
  );
}

export function Stat({ value, labelEn, labelFa }: { value: string; labelEn: string; labelFa: string }) {
  const { lang } = useLang();
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="text-3xl font-bold text-gradient md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{lang === "fa" ? labelFa : labelEn}</div>
    </div>
  );
}
