import Link from "next/link";
import { ArrowRight, SearchCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { diagnostics, site } from "@/data/site";

export function DiagnosticSection() {
  return (
    <AnimatedSection className="relative z-10 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300 text-slate-950">
              <SearchCheck className="h-7 w-7" />
            </div>
            <h2 className="mt-8 text-balance text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
              Audit dingin sebelum bangun digital asset baru.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">
              Sebelum desain, kita perlu tahu titik lemahnya. Kalau tidak, landing page cuma jadi kosmetik. Cantik, tapi tidak bekerja. Kejam? Ya. Tapi benar.
            </p>
            <Link
              href={site.whatsappUrl}
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-emerald-300"
            >
              Minta Audit Awal
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-4">
            {diagnostics.map((item, index) => (
              <div key={item} className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-6">
                <p className="font-mono text-xs font-bold text-emerald-300">CHECK 0{index + 1}</p>
                <p className="mt-3 text-lg leading-8 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
