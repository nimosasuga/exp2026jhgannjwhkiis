import { AnimatedSection } from "@/components/AnimatedSection";
import { problems } from "@/data/site";

export function ProblemSection() {
  return (
    <AnimatedSection id="problem" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Problem
          </p>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Bisnis tidak kalah karena kurang niat. Seringnya kalah karena digitalnya berantakan.
          </h2>
        </div>
        <div className="grid gap-4">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:border-emerald-300/30 hover:bg-white/[0.08]"
            >
              <p className="font-mono text-xs font-bold text-emerald-300">0{index + 1}</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
