"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { heroHighlights, visualBadges } from "@/data/site";

export function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 48 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[680px] lg:min-h-[760px]"
    >
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-8 top-56 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-20 left-6 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-2 hidden rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block"
      >
        <BarChart3 className="h-7 w-7 text-cyan-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [-2, -4, -2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-28 z-20 hidden w-64 rounded-[2rem] border border-white/10 bg-[#0a101c]/85 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl md:block"
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
            Live Signal
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300 text-slate-950">
            <CheckCircle2 className="h-4 w-4" />
          </span>
        </div>
        <h3 className="mt-8 text-3xl font-black tracking-[-0.05em] text-white">92%</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">Website credibility score setelah struktur, visual, CTA, dan trust element dibenahi.</p>
      </motion.div>

      <div className="absolute inset-x-3 top-20 z-10 mx-auto max-w-[430px] rounded-[3rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:top-14 md:p-4">
        <div className="rounded-[2.4rem] border border-white/10 bg-[#070a12] p-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
              Command Center
            </span>
          </div>

          <div className="mt-6 rounded-[2rem] bg-[linear-gradient(145deg,rgba(34,211,238,0.22),rgba(15,23,42,0.92)_55%,rgba(16,185,129,0.16))] p-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">EXPROSA Stack</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white">Digital assets that work.</h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {heroHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-cyan-300" />
                  <span className="text-sm font-bold text-white">Corporate website</span>
                </div>
                <span className="text-xs font-bold text-emerald-200">Ready</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[88%] rounded-full bg-cyan-300" />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Workflow className="h-5 w-5 text-emerald-300" />
                  <span className="text-sm font-bold text-white">Automation flow</span>
                </div>
                <span className="text-xs font-bold text-cyan-200">Mapped</span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                <span className="h-10 rounded-xl bg-white/10" />
                <span className="h-10 rounded-xl bg-cyan-300/80" />
                <span className="h-10 rounded-xl bg-white/10" />
                <span className="h-10 rounded-xl bg-emerald-300/80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -22, 0], rotate: [3, 5, 3] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-[430px] z-30 w-[calc(100%-1.5rem)] rounded-[2.2rem] border border-cyan-300/30 bg-cyan-300 p-4 text-slate-950 shadow-2xl shadow-cyan-950/40 md:top-80 md:w-80"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-7 w-7" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] opacity-60">WhatsApp AI</p>
            <h3 className="text-2xl font-black tracking-[-0.04em]">Lead masuk, alur jalan.</h3>
          </div>
        </div>
        <div className="mt-7 rounded-3xl bg-slate-950 p-4 text-white">
          <p className="text-sm text-slate-300">Saya ingin website perusahaan yang terlihat kredibel.</p>
          <p className="mt-4 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950">
            Siap. Kita petakan tujuan, CTA, dan struktur penawaran dulu.
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-2 left-2 right-2 z-20 rounded-[2.2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl md:bottom-16 md:left-14 md:right-8">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-emerald-300" />
          <p className="font-bold text-white">Dibangun untuk kredibilitas, efisiensi, dan pertumbuhan.</p>
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
    </motion.div>
  );
}
