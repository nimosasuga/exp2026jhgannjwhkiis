"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Activity, ArrowUpRight, Bot, Gauge, MessagesSquare, Sparkles } from "lucide-react";

const frames = [
  {
    icon: Activity,
    tag: "01 / SCAN",
    title: "AI membaca sinyal bisnis dari layar pertama.",
    main: "3.284",
    sub: "visitor signal",
    growth: "+18.7%",
    prompt: "Analyze traffic quality and detect lost opportunity.",
    insight: "Kunjungan tinggi, tetapi jalur klik belum mengarah ke peluang nyata.",
    bars: [82, 64, 38, 24],
  },
  {
    icon: Gauge,
    tag: "02 / CONVERT",
    title: "CTA, funnel, dan lead berubah menjadi data hidup.",
    main: "428",
    sub: "captured leads",
    growth: "+31.4%",
    prompt: "Map conversion drop-off and propose next action.",
    insight: "Lead mulai terbaca. Fokus berikutnya adalah memperpendek jarak dari klik ke percakapan.",
    bars: [90, 76, 58, 42],
  },
  {
    icon: MessagesSquare,
    tag: "03 / RESPOND",
    title: "WhatsApp, follow up, dan respon masuk ke satu alur.",
    main: "02:14",
    sub: "response speed",
    growth: "-64%",
    prompt: "Prioritize hot leads and automate first response.",
    insight: "Kecepatan respon naik. Prospek tidak dibiarkan menunggu terlalu lama.",
    bars: [94, 88, 72, 61],
  },
  {
    icon: Bot,
    tag: "04 / RUN",
    title: "AI layer membuat bisnis terasa seperti command center.",
    main: "91%",
    sub: "flow readiness",
    growth: "+44.9%",
    prompt: "Connect analytics, automation, and business decision layer.",
    insight: "Website tidak lagi berdiri sendiri. Ia menjadi layar kendali digital bisnis.",
    bars: [96, 91, 84, 78],
  },
];

export function DepthPresentationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const beamX = useTransform(scrollYProgress, [0, 1], ["-24%", "48%"]);
  const beamY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [-18, 22]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.22, 0.96]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(frames.length - 1, Math.floor(value * frames.length)));
  });

  const frame = frames[active];
  const Icon = frame.icon;

  return (
    <section ref={ref} id="analytics-command" className="relative z-10 min-h-[300vh] overflow-clip px-6 text-white lg:px-10">
      <div className="sticky top-0 flex min-h-screen items-center py-8 lg:py-10">
        <div className="absolute inset-0 bg-[#02040a]" />
        <motion.div style={{ x: beamX, y: beamY, rotate: beamRotate }} className="absolute left-0 top-0 h-[820px] w-[820px] rounded-full bg-cyan-300/25 blur-[92px]" />
        <motion.div style={{ y: gridY }} className="absolute inset-0 premium-grid opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.28),transparent_28%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.18),transparent_34%),linear-gradient(180deg,rgba(5,6,10,0.02),rgba(5,6,10,0.94))]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI Studio Style Scroll
            </div>

            <motion.div
              key={frame.tag}
              initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.45 }}
              className="mt-8"
            >
              <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-cyan-300">{frame.tag}</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.065em] md:text-6xl">
                {frame.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Background, dashboard, prompt, angka, dan funnel berubah per scroll agar terasa seperti aplikasi AI hidup, bukan section statis.
              </p>
            </motion.div>

            <div className="mt-8 flex items-center gap-5">
              <div className="relative h-40 w-1 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ height: progressHeight }} className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-cyan-200 via-emerald-300 to-white" />
              </div>
              <div className="grid gap-3">
                {frames.map((item, index) => (
                  <div key={item.tag} className={`font-mono text-xs font-black uppercase tracking-[0.22em] ${active === index ? "text-cyan-200" : "text-white/30"}`}>
                    {item.tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ rotateX: active % 2 ? 5 : 0, rotateY: active % 2 ? 3.5 : -3.5, y: active % 2 ? -8 : 8 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[690px] overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.065] p-4 shadow-[0_70px_190px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:p-5"
          >
            <motion.div style={{ scale: orbScale, rotate: orbRotate }} className="absolute -right-28 -top-28 h-[430px] w-[430px] rounded-full border border-cyan-200/25 bg-[radial-gradient(circle,rgba(34,211,238,0.24),rgba(16,185,129,0.08)_44%,transparent_70%)] shadow-[0_0_140px_rgba(34,211,238,0.18)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(16,185,129,0.18),transparent_30%)]" />

            <div className="relative rounded-[2.4rem] border border-white/10 bg-[#050814]/90 p-5 md:p-6">
              <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">EXPROSA AI COMMAND</p>
                  <h3 className="mt-2 text-3xl font-black tracking-[-0.05em] text-white">Business Intelligence View</h3>
                </div>
                <motion.div key={frame.tag} initial={{ scale: 0.65, rotate: -16 }} animate={{ scale: 1, rotate: 0 }} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                  <Icon className="h-7 w-7" />
                </motion.div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <motion.div key={frame.main} initial={{ opacity: 0, scale: 0.92, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="rounded-[2rem] bg-cyan-300 p-6 text-slate-950">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.22em] opacity-60">{frame.sub}</p>
                  <p className="mt-4 text-6xl font-black tracking-[-0.08em] md:text-7xl">{frame.main}</p>
                  <span className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{frame.growth} movement</span>
                </motion.div>

                <div className="grid gap-4">
                  <motion.div key={frame.prompt} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-emerald-300">AI Prompt</p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">{frame.prompt}</p>
                  </motion.div>
                  <motion.div key={frame.insight} initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Insight</p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">{frame.insight}</p>
                  </motion.div>
                </div>
              </div>

              <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">Funnel Movement</p>
                  <ArrowUpRight className="h-5 w-5 text-cyan-200" />
                </div>
                <div className="mt-6 space-y-4">
                  {frame.bars.map((bar, index) => (
                    <div key={`${frame.tag}-${index}`}>
                      <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.14em] text-slate-400"><span>Stage {index + 1}</span><span>{bar}%</span></div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: "10%" }} animate={{ width: `${bar}%` }} transition={{ duration: 0.65, delay: index * 0.05 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" /></div>
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
