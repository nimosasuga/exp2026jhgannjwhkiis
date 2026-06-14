import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Link href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950">
              EX
            </span>
            <span className="text-sm font-black tracking-[0.25em] text-white">
              {site.name}
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            {site.company} — Business Technology Partner untuk UMKM dan perusahaan skala tumbuh.
          </p>
          <p className="mt-3 text-sm text-slate-500">{site.address}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Navigasi</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Kontak</h3>
            <div className="mt-5 grid gap-3">
              <Link href={site.whatsappUrl} className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">
                Diskusi WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`mailto:${site.email}`} className="text-sm text-slate-400 transition hover:text-white">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 {site.company}. Built for serious digital growth.
      </div>
    </footer>
  );
}
