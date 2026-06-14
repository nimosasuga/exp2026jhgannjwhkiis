import Link from "next/link";
import { Check, Send } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { packages, site } from "@/data/site";

export function PackageSection() {
  return (
    <AnimatedSection id="packages" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionHeader
        eyebrow="Packages"
        title="Mulai dari yang paling masuk akal untuk kondisi bisnis sekarang."
        description="Tidak semua bisnis perlu langsung membangun sistem besar. Kadang langkah paling tajam adalah landing page yang jelas, lalu naik ke automation dan sistem internal."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]"
          >
            <p className="text-sm font-bold text-cyan-300">{item.fit}</p>
            <h3 className="mt-5 text-3xl font-black text-white">{item.name}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.signal}</p>
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

      <div className="mt-12 rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center">
        <h3 className="text-balance text-3xl font-black text-white">
          Belum tahu mulai dari paket mana?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-slate-300">
          Mulai dari audit singkat. Kita cari celah paling dekat dengan uang, kepercayaan, atau efisiensi. Bukan asal bikin fitur supaya kelihatan ramai.
        </p>
        <Link
          href={site.whatsappUrl}
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-white"
        >
          Tanya Paket yang Tepat
          <Send className="h-5 w-5" />
        </Link>
      </div>
    </AnimatedSection>
  );
}
