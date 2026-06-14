import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { VisualShowcase } from "@/components/VisualShowcase";
import {
  navItems,
  packages,
  problems,
  processSteps,
  proofItems,
  services,
  site,
} from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 noise-overlay opacity-[0.035]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_24%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05060a]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950">
              EX
            </span>
            <span className="text-sm font-black tracking-[0.25em] text-white">
              {site.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href={site.whatsappUrl}
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 md:inline-flex"
          >
            Diskusi WhatsApp
          </Link>
        </nav>
      </header>

      <section id="home" className="relative z-10 px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedSection className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              <Sparkles className="h-4 w-4" />
              {site.eyebrow}
            </div>

            <h1 className="mt-8 text-5xl font-black tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
              {site.headline}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {site.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={site.whatsappUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-base font-black text-slate-950 shadow-2xl shadow-cyan-950/30 transition hover:bg-white"
              >
                Mulai Diskusi
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Lihat Layanan
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative min-h-[520px]">
            <div className="absolute left-0 top-8 w-72 rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-200">
                  LIVE DASHBOARD
                </span>
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-white/80" />
                <div className="h-3 w-full rounded-full bg-white/20" />
                <div className="h-3 w-5/6 rounded-full bg-white/20" />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["Web", "WA", "Data"].map((label) => (
                  <div key={label} className="rounded-2xl bg-slate-950/60 p-3 text-center">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-lg font-black text-white">OK</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-28 w-80 rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 p-5 text-slate-950 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-7 w-7" />
                <div>
                  <p className="text-sm font-bold opacity-70">WhatsApp AI</p>
                  <h3 className="text-2xl font-black">Lead masuk, alur jalan.</h3>
                </div>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-950 p-4 text-white">
                <p className="text-sm text-slate-300">Halo, saya ingin konsultasi website perusahaan.</p>
                <p className="mt-4 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950">
                  Siap. Pilih kebutuhan utama: website, automation, atau sistem internal?
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 left-10 right-10 rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
                <p className="font-bold text-white">Dibangun untuk kredibilitas, efisiensi, dan pertumbuhan.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          {proofItems.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </section>

      <AnimatedSection id="problem" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Problem</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              Bisnis tidak kalah karena kurang niat. Seringnya kalah karena digitalnya berantakan.
            </h2>
          </div>
          <div className="grid gap-4">
            {problems.map((problem) => (
              <div key={problem} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
                <p className="text-lg leading-8 text-slate-200">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            Layanan dipaketkan sebagai solusi bisnis, bukan daftar menu warung digital.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                {service.tag}
              </span>
              <h3 className="mt-8 text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <VisualShowcase />

      <AnimatedSection id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Process</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              Proses kerja dibuat jelas agar hasilnya tidak bergantung mood.
            </h2>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="text-xl font-bold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="packages" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Packages</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            Mulai dari kebutuhan paling dekat dengan bisnis Anda.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
              <h3 className="text-2xl font-black text-white">{item.name}</h3>
              <p className="mt-4 min-h-14 text-sm leading-7 text-slate-300">{item.fit}</p>
              <ul className="mt-8 space-y-4">
                {item.items.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-5 w-5 text-emerald-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <section className="relative z-10 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-cyan-300/20 bg-cyan-300 p-8 text-slate-950 shadow-2xl shadow-cyan-950/30 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] opacity-70">Final CTA</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                Bisnis Anda tidak butuh website yang sekadar online.
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 opacity-80">
                Bisnis Anda butuh aset digital yang bekerja: dipercaya, dipahami, dan bisa membantu operasional bergerak lebih rapi.
              </p>
            </div>
            <Link
              href={site.whatsappUrl}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-5 text-base font-black text-white transition hover:bg-white hover:text-slate-950"
            >
              Chat WhatsApp Sekarang
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black tracking-[0.3em] text-white">{site.name}</p>
            <p className="mt-2">{site.company}</p>
          </div>
          <p>{site.address}</p>
          <p>© 2026 {site.company}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
