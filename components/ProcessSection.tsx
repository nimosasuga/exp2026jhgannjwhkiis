import { AnimatedSection } from "@/components/AnimatedSection";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Process
          </p>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Proses rapi dulu, baru bicara tampilan cantik.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">
            Desain premium tanpa proses kerja hanya jadi dekorasi mahal. EXPROSA mulai dari arah bisnis, lalu masuk ke desain, build, dan optimasi.
          </p>
        </div>

        <div className="grid gap-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:border-cyan-300/25 md:grid-cols-[80px_1fr]"
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="font-mono text-sm font-bold text-cyan-300">0{index + 1}</span>
                  <div className="mt-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 md:mt-4">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
