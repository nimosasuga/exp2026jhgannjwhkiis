import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/site";

export function ServiceGrid() {
  return (
    <AnimatedSection id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="absolute left-0 top-32 -z-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

      <SectionHeader
        eyebrow="Services"
        title="Layanan dipaketkan sebagai solusi bisnis, bukan daftar menu warung digital."
        description="Setiap layanan diarahkan ke hasil bisnis: kredibilitas, lead, operasional, dan struktur kerja yang lebih rapi. Desainnya boleh premium, tapi tujuannya tetap jualan dan kerja nyata."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeature = index === 0 || index === 3;

          return (
            <article
              key={service.title}
              className={`group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/35 hover:bg-white/[0.075] ${
                isFeature ? "lg:col-span-3 lg:min-h-[360px] lg:p-8" : "lg:col-span-2 lg:min-h-[310px]"
              }`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/0 blur-2xl transition duration-500 group-hover:bg-cyan-300/20" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
                    {service.tag}
                  </span>
                  <p className="mt-5 font-mono text-xs font-bold text-slate-600">0{index + 1}</p>
                </div>

                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-xl shadow-cyan-950/30 transition duration-500 group-hover:rotate-6 group-hover:bg-white">
                  <Icon className="h-6 w-6" />
                </span>
              </div>

              <div className={isFeature ? "mt-16" : "mt-12"}>
                <h3 className={`${isFeature ? "text-3xl md:text-4xl" : "text-2xl"} font-black tracking-[-0.05em] text-white`}>
                  {service.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-300">{service.description}</p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-sm font-black text-cyan-200 opacity-0 transition duration-500 group-hover:opacity-100">
                Lihat arah solusi
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
