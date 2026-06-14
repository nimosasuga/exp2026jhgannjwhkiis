import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/site";

export function ServiceGrid() {
  return (
    <AnimatedSection id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionHeader
        eyebrow="Services"
        title="Layanan dipaketkan sebagai solusi bisnis, bukan daftar menu warung digital."
        description="Setiap layanan diarahkan ke hasil bisnis: kredibilitas, lead, operasional, dan struktur kerja yang lebih rapi."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  {service.tag}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 transition group-hover:bg-white">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
