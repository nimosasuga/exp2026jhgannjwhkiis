import { proofItems } from "@/data/site";

export function ProofStrip() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
        {proofItems.map((item) => {
          const Icon = item.icon;
          return (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300"
            >
              <Icon className="h-4 w-4 text-cyan-300" />
              {item.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
