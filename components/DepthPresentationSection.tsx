"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Activity, ArrowUpRight, Bot, Gauge, MessagesSquare } from "lucide-react";

const frames = [
  {
    icon: Activity,
    tag: "01 / TRAFFIC",
    title: "Kunjungan masuk, tapi belum menjadi peluang.",
    main: "3.284",
    sub: "visitor signal",
    growth: "+18.7%",
    bars: [82, 64, 38, 24],
  },
  {
    icon: Gauge,
    tag: "02 / CONVERSION",
    title: "CTA mulai bekerja, lead mulai terbaca.",
    main: "428",
    sub: "captured leads",
    growth: "+31.4%",
    bars: [90, 76, 58, 42],
  },
  {
    icon: MessagesSquare,
    tag: "03 / RESPONSE",
    title: "WhatsApp dan follow up masuk ke alur kerja.",
    main: "02:14",
    sub: "response speed",
    growth: "-64%",
    bars: [94, 88, 72, 61],
  },
  {
    icon: Bot,
    tag: "04 / ENGINE",
    title: "Data, automation, dan keputusan mulai menyatu.",
    main: "91%",
    sub: "flow readiness",
    growth: "+44.9%",
    bars: [96, 91, 84, 78],
  },
];

export function DepthPresentationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const beamX = useTransform(scrollYProgress, [0, 1], ["-20%", "42%"]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [-10, 18]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(frames.length - 1, Math.floor(value * frames.length)));
  });

  const frame = frames[active];
  const Icon = frame.icon;

  return (
    <section ref={ref} id="analytics-command" className="relative z-10 min-h-[260vh] overflow-clip px-6 text-white lg:px-10">
      <div className="sticky top-0 flex min-h-screen items-center py-12 lg:py-16">
        <div className="absolute inset-0 bg-[#03050a]" />
        <motion.div style={{ x: beamX, rotate: beamRotate }} className="absolute left-0 top-1/2 h-[760px] w-[760px] -translate-y-1/2 rounded-full bg-cyan-300/25 blur-[95px]" />
        <div className="absolute inset-0 premium-grid opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(16,185,129,0.2),transparent_28%),linear-gradient(180deg,rgba(5,6,10,0.08),rgba(5,6,10,0.92))]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Scroll Analytics Dashboard</p>
            <motion.h2 key={frame.title} initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} className="mt-7 max-w-3xl text-4xl font-black tracking-[-0.06em] md:text-6xl">
              {frame.title}
            </motion.h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Angka, funnel, status, dan panel berubah mengikuti scroll. Ini membuat website terasa seperti command center, bukan landing page biasa.
            </p>
            <div className="mt-10 flex items-center gap-5">
              <div className="relative h-40 w-1 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ height: progressHeight }} className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-cyan-200 via-emerald-300 to-white" />
              </div>
              <div className="grid gap-3">
                {frames.map((item, index) => (
                  <div key={item.tag} className={`font-mono text-xs font-black uppercase tracking-[0.22em] ${active === index ? "text-cyan-200" : "text-white/30"}`}>{item.tag}</div>
                ))}
              </div>
            </div>
          </div>

          <motion.div animate={{ rotateX: active % 2 ? 4 : 0, rotateY: active % 2 ? 3 : -3 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_60px_180px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.18),transparent_30%)]" />
            <div className="relative rounded-[2.4rem] border border-white/10 bg-[#060912]/85 p-6">
              <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">EXPROSA COMMAND CENTER</p>
                  <h3 className="mt-2 text-3xl font-black tracking-[-0.05em] text-white">Business Signal Monitor</h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950"><Icon className="h-7 w-7" /></div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <motion.div key={frame.main} initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="rounded-[2rem] bg-cyan-300 p-6 text-slate-950 md:col-span-2">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.22em] opacity-60">{frame.sub}</p>
                  <p className="mt-4 text-6xl font-black tracking-[-0.08em] md:text-7xl">{frame.main}</p>
                  <span className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{frame.growth} movement</span>
                </motion.div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-slate-500">Readiness</p>
                  <p className="mt-4 text-5xl font-black text-emerald-300">{72 + active * 7}%</p>
                </div>
              </div>

              <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
                <div className="flex items-center justify-between"><p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">Funnel Movement</p><ArrowUpRight className="h-5 w-5 text-cyan-200" /></div>
                <div className="mt-7 space-y-5">
                  {frame.bars.map((bar, index) => (
                    <div key={`${frame.tag}-${index}`}>
                      <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.14em] text-slate-400"><span>Stage {index + 1}</span><span>{bar}%</span></div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: "12%" }} animate={{ width: `${bar}%` }} transition={{ duration: 0.65, delay: index * 0.05 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
