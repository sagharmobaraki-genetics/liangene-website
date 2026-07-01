import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero, Section } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lian Gene" },
      { name: "description", content: "Get in touch with Pouya Pazhouhesh Lian Gene for consultations, research collaborations and business inquiries." },
      { property: "og:title", content: "Contact — Lian Gene" },
      { property: "og:description", content: "Professional contact, collaboration and business inquiry forms." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type FormType = "contact" | "collab" | "business";

const labels = {
  en: {
    tabs: { contact: "Contact", collab: "Research Collaboration", business: "Business Inquiry" },
    name: "Full name", email: "Email", org: "Organization", subject: "Subject", message: "Message", send: "Send Message",
    success: "Thank you — we'll get back to you within 2 business days.",
    error: "Please review the highlighted fields.",
    addr: "Tehran, Iran",
  },
  fa: {
    tabs: { contact: "تماس", collab: "همکاری پژوهشی", business: "درخواست تجاری" },
    name: "نام و نام خانوادگی", email: "ایمیل", org: "سازمان", subject: "موضوع", message: "پیام", send: "ارسال پیام",
    success: "از پیام شما متشکریم — ظرف ۲ روز کاری پاسخ خواهیم داد.",
    error: "لطفاً فیلدهای مشخص‌شده را اصلاح کنید.",
    addr: "تهران، ایران",
  },
} as const;

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  org: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

function ContactPage() {
  const { lang } = useLang();
  const t = labels[lang];
  const [tab, setTab] = useState<FormType>("contact");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow={{ en: "Contact", fa: "تماس" }}
        titleEn="Let's start a conversation"
        titleFa="بیایید گفت‌وگو را آغاز کنیم"
        subEn="Reach out for consultations, research collaborations or business inquiries — our scientific team will respond personally."
        subFa="برای مشاوره، همکاری پژوهشی یا درخواست تجاری با ما در تماس باشید — تیم علمی ما شخصاً پاسخ می‌دهد."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Sidebar info */}
          <aside className="space-y-6">
            <div className="card-surface">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{lang === "fa" ? "اطلاعات تماس" : "Contact Info"}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> <span>{t.addr}</span></li>
                <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <a href="mailto:info@liangene.com" className="hover:text-primary">info@liangene.com</a></li>
                <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <span dir="ltr">+98 21 0000 0000</span></li>
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-secondary hover:text-secondary"><Linkedin className="h-4 w-4" /></a>
                <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-secondary hover:text-secondary"><Twitter className="h-4 w-4" /></a>
                <a href="#" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-secondary hover:text-secondary"><Github className="h-4 w-4" /></a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="relative aspect-[4/3]">
                <iframe
                  title="Map"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=51.30%2C35.65%2C51.50%2C35.78&amp;layer=mapnik"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="card-surface">
            <div className="mb-6 inline-flex rounded-full border border-border bg-background p-1 text-sm">
              {(["contact", "collab", "business"] as FormType[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => { setTab(id); setSent(false); }}
                  className={`rounded-full px-4 py-1.5 font-semibold transition ${tab === id ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"}`}
                >
                  {t.tabs[id]}
                </button>
              ))}
            </div>

            {sent ? (
              <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5" style={{ color: "var(--brand-green)" }} />
                <div>{t.success}</div>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={onSubmit} noValidate>
                <Field label={t.name} name="name" error={errors.name} required />
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label={t.email} name="email" type="email" error={errors.email} required />
                  <Field label={t.org} name="org" error={errors.org} />
                </div>
                <Field label={t.subject} name="subject" error={errors.subject} required />
                <Field label={t.message} name="message" textarea error={errors.message} required />
                {Object.keys(errors).length > 0 && (
                  <p className="text-sm text-destructive">{t.error}</p>
                )}
                <div>
                  <button type="submit" className="btn-primary">
                    <Send className="h-4 w-4" /> {t.send}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", textarea, error, required,
}: { label: string; name: string; type?: string; textarea?: boolean; error?: string; required?: boolean }) {
  const cls = `w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20 ${error ? "border-destructive" : "border-border"}`;
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}{required && <span className="ml-1 text-destructive">*</span>}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} maxLength={2000} />
      ) : (
        <input name={name} type={type} className={cls} maxLength={255} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
