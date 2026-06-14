"use client";

import { motion } from "motion/react";
import { BarChart3, MessageCircle, ShieldCheck } from "lucide-react";
import { heroHighlights, visualBadges } from "@/data/site";

export function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[520px] lg:min-h-[620px]"
    >
      <div className="absolute inset-x-4 top-6 rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:left-0 md:right-auto md:w-80 md:p-5">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-200">
            LIVE DASHBOARD
          </span>
          <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/40" />
        </div>
        <div className="space-y-3">
          <div className="h-3 w-2/3 rounded-full bg-white/80" />
          <div className="h-3 w-full rounded-full bg-white/20" />
          <div className="h-3 w-5/6 rounded-full bg-white/20" />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {heroHighlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-950/60 p-3 text-center">
              <p className="text-[11px] text-slate-400">{item.label}</p>
              <p className="mt-2 text-sm font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-56 w-[calc(100%-2rem)] rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 p-4 text-slate-950 shadow-2xl shadow-cyan-950/30 md:top-28 md:w-80 md:p-5">
        <div className="flex items-center gap-3">
          <MessageCircle className="h-7 w-7" />
          <div>
            <p className="text-sm font-bold opacity-70">WhatsApp AI</p>
            <h3 className="text-2xl font-black">Lead masuk, alur jalan.</h3>
          </div>
        </div>
        <div className="mt-8 rounded-3xl bg-slate-950 p-4 text-white">
          <p className="text-sm text-slate-300">
            Halo, saya ingin konsultasi website perusahaan.
          </p>
          <p className="mt-4 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950">
            Siap. Pilih kebutuhan utama: website, automation, atau sistem internal?
          </p>
        </div>
      </div>

      <div className="absolute bottom-14 left-2 right-2 rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl md:bottom-10 md:left-10 md:right-10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-emerald-300" />
          <p className="font-bold text-white">
            Dibangun untuk kredibilitas, efisiensi, dan pertumbuhan.
          </p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {visualBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2 rounded-2xl bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200">
                <Icon className="h-4 w-4 text-cyan-300" />
                {badge.label}
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 top-3 hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl lg:block"
      >
        <BarChart3 className="h-7 w-7 text-cyan-300" />
      </motion.div>
    </motion.div>
  );
}
