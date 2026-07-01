import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import { Menu, X, Globe, Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const navItems = [
  { to: "/", key: "nav_home" as const },
  { to: "/about", key: "nav_about" as const },
  { to: "/services", key: "nav_services" as const },
  { to: "/bioinformatics", key: "nav_bioinformatics" as const },
  { to: "/genomics", key: "nav_genomics" as const },
  { to: "/rnd", key: "nav_rnd" as const },
  { to: "/research-innovation", key: "nav_research_innovation" as const },
  { to: "/publications", key: "nav_publications" as const },
  { to: "/training", key: "nav_training" as const },
  { to: "/blog", key: "nav_blog" as const },
  { to: "/partnerships", key: "nav_partnerships" as const },
  { to: "/roadmap", key: "nav_roadmap" as const },
  { to: "/founder", key: "nav_founder" as const },
  { to: "/contact", key: "nav_contact" as const },
];

function Logo() {
  const { t } = useLang();
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 4c4 4 10 4 14 0M5 20c4-4 10-4 14 0M7 6c0 6 10 6 10 12M7 18c0-6 10-6 10-12" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--brand-blue)" }}>{t("brand")}</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Genomics · Bioinformatics</span>
      </span>
    </Link>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "fa" : "en")}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold transition hover:border-secondary hover:text-secondary"
      aria-label="Toggle language"
    >
      <Globe className="h-3.5 w-3.5" />
      {lang === "en" ? "فارسی" : "English"}
    </button>
  );
}

function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container-prose flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition ${active ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary"}`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <Link to="/contact" className="btn-primary hidden lg:inline-flex !px-4 !py-2 text-xs">
            {t("cta_consult")}
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-surface">
          <div className="container-prose grid gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t, lang } = useLang();
  const columns = lang === "fa"
    ? [
        { h: "شرکت", items: [["درباره ما", "/about"], ["تحقیق و توسعه", "/rnd"], ["انتشارات", "/publications"], ["همکاری‌ها", "/partnerships"]] },
        { h: "خدمات", items: [["بیوانفورماتیک", "/bioinformatics"], ["ژنومیکس", "/genomics"], ["خدمات", "/services"], ["آموزش", "/training"]] },
        { h: "منابع", items: [["وبلاگ", "/blog"], ["تماس", "/contact"]] },
      ]
    : [
        { h: "Company", items: [["About", "/about"], ["R&D", "/rnd"], ["Publications", "/publications"], ["Partnerships", "/partnerships"]] },
        { h: "Services", items: [["Bioinformatics", "/bioinformatics"], ["Genomics", "/genomics"], ["All Services", "/services"], ["Training", "/training"]] },
        { h: "Resources", items: [["Blog", "/blog"], ["Contact", "/contact"]] },
      ];

  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer_tag")}</p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-secondary hover:text-secondary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-secondary hover:text-secondary" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-secondary hover:text-secondary" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          </div>
        </div>
        {columns.map((c) => (
          <div key={c.h}>
            <h4 className="text-sm font-semibold text-foreground">{c.h}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map(([label, href]) => (
                <li key={href}><Link to={href} className="text-sm text-muted-foreground hover:text-primary">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {t("located")}</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> info@liangene.com</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +98 21 0000 0000</span>
          </div>
          <span>© {new Date().getFullYear()} {t("brand")}. {t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { dir } = useLang();
  return (
    <div dir={dir} className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
