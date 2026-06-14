import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/data/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05060a]/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#home" className="group flex items-center gap-3" aria-label="EXPROSA Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/20 transition group-hover:bg-cyan-300">
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
          className="inline-flex rounded-full bg-white px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200 md:px-5 md:py-3"
        >
          <span className="hidden md:inline">{site.whatsappLabel}</span>
          <span className="md:hidden">Diskusi</span>
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
}
