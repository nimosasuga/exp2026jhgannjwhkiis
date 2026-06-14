import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HeroShowcase } from "@/components/HeroShowcase";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative z-10 px-6 pb-20 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
      <div className="absolute inset-x-0 top-0 -z-10 h-[740px] premium-grid opacity-70" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimatedSection className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Sparkles className="h-4 w-4" />
            {site.eyebrow}
          </div>

          <h1 className="mt-8 text-balance text-5xl font-black tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            {site.headline}
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate-300 md:text-xl">
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

        <HeroShowcase />
      </div>
    </section>
  );
}
