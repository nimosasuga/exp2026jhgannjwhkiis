"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Bot, Gauge, MessagesSquare, Sparkles, Workflow } from "lucide-react";

const frames = [
  {
    icon: Gauge,
    tag: "01 / WHITE ROOM",
    title: "Dashboard terbentuk dari ruang putih yang bersih.",
    main: "3.284",
    sub: "tracked visitors",
    signal: "Clarity layer active",
    bars: [88, 72, 46, 28],
  },
  {
    icon: Sparkles,
    tag: "02 / SHATTER",
    title: "Saat discroll, panel buyar menjadi partikel.",
    main: "728",
    sub: "broken signals",
    signal: "Particles separating",
    bars: [74, 66, 59, 42],
  },
  {
    icon: MessagesSquare,
    tag: "03 / REBUILD",
    title: "Data menyusun ulang alur lead dan respon.",
    main: "02:14",
    sub: "response speed",
    signal: "Flow reconstructed",
    bars: [92, 86, 76, 63],
  },
  {
    icon: Bot,
    tag: "04 / COMMAND",
    title: "Akhirnya berubah menjadi layar kendali bisnis.",
    main: "91%",
    sub: "command readiness",
    signal: "AI layer online",
    bars: [98, 92, 87, 80],
  },
];

const shards = Array.from({ length: 72 }, (_, index) => {
  const row = Math.floor(index / 12);
  const col = index % 12;
  return {
    id: index,
    left: 6 + col * 8,
    top: 8 + row * 13,
    x: (col - 5.5) * 42 + (index % 3) * 26,
    y: (row - 2.5) * 54 + ((index % 5) - 2) * 22,
    rotate: (index % 2 ? 1 : -1) * (28 + (index % 7) * 13),
    size: 7 + (index % 4) * 3,
  };
});

type ScrollProgress = ReturnType<typeof useScroll>["scrollYProgress"];

function Shard({ item, progress }: { item: (typeof shards)[number]; progress: ScrollProgress }) {
  const x = useTransform(progress, [0.08, 0.44, 0.82], [0, item.x, item.x * 0.18]);
  const y = useTransform(progress, [0.08, 0.44, 0.82], [0, item.y, item.y * -0.12]);
  const rotate = useTransform(progress, [0.08, 0.48, 0.9], [0, item.rotate, item.rotate * 2]);
  const opacity = useTransform(progress, [0, 0.12, 0.48, 0.95], [0.18, 1, 0.65, 0.24]);
  const scale = useTransform(progress, [0.08, 0.48, 1], [1, 1.8, 0.75]);

  return (
    <motion.span
      aria-hidden="true"
      style={{ x, y, rotate, opacity, scale, left: `${item.left}%`, top: `${item.top}%`, width: item.size, height: item.size }}
      className="absolute rounded-[2px] bg-white shadow-[0_0_24px_rgba(255,255,255,0.5)]"
    />
  );
}

export function DepthPresentationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const bgShift = useTransform(scrollYProgress, [0, 0.35, 1], ["#f8fafc", "#0f172a", "#02040a"]);
  const darkOpacity = useTransform(scrollYProgress, [0, 0.22, 0.68], [0, 0.72, 1]);
  const whitePanelOpacity = useTransform(scrollYProgress, [0, 0.22, 0.42], [1, 0.72, 0.18]);
  const dashboardX = useTransform(scrollYProgress, [0, 0.38, 0.78], [0, -82, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 0.44, 1], [0, 48, -18]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.4, 0.82], [1, 0.76, 1.03]);
  const dashboardRotateY = useTransform(scrollYProgress, [0, 0.44, 0.82], [-2, -28, 4]);
  const dashboardBlur = useTransform(scrollYProgress, [0, 0.42, 0.82], ["blur(0px)", "blur(12px)", "blur(0px)"]);
  const beamX = useTransform(scrollYProgress, [0, 1], ["-20%", "42%"]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [-18, 28]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(frames.length - 1, Math.floor(value * frames.length)));
  });

  const frame = frames[active];
  const Icon = frame.icon;

  return (
    <section ref={ref} id="analytics-command" className="relative z-10 min-h-[320vh] overflow-clip px-6 text-white lg:px-10">
      <motion.div style={{ backgroundColor: bgShift }} className="sticky top-0 flex min-h-screen items-center py-8 lg:py-10">
        <motion.div style={{ opacity: darkOpacity }} className="absolute inset-0 bg-[#02040a]" />
        <motion.div style={{ x: beamX, rotate: beamRotate }} className="absolute left-0 top-[-18%] h-[900px] w-[900px] rounded-full bg-white/35 blur-[120px] mix-blend-overlay" />
        <motion.div style={{ x: beamX }} className="absolute left-[-8%] top-[18%] h-[620px] w-[620px] rounded-full bg-cyan-300/28 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_32%_78%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.1))]" />
        <div className="absolute inset-0 premium-grid opacity-35" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative z-30">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-white backdrop-blur-2xl">
              <Sparkles className="h-4 w-4" />
              White / Dark Shatter Scroll
            </div>

            <motion.div key={frame.tag} initial={{ opacity: 0, y: 34, filter: "blur(18px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.46 }} className="mt-8">
              <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-cyan-200">{frame.tag}</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.07em] text-white drop-shadow-2xl md:text-6xl">
                {frame.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Palet white/dark, panel pecah, partikel buyar, lalu dashboard tersusun ulang menjadi command layer.
              </p>
            </motion.div>

            <div className="mt-8 flex items-center gap-5">
              <div className="relative h-40 w-1 overflow-hidden rounded-full bg-white/15">
                <motion.div style={{ height: progressHeight }} className="absolute inset-x-0 top-0 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.8)]" />
              </div>
              <div className="grid gap-3">
                {frames.map((item, index) => (
                  <div key={item.tag} className={`font-mono text-xs font-black uppercase tracking-[0.2em] ${active === index ? "text-white" : "text-white/35"}`}>
                    {item.tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[680px] [perspective:1400px]">
            <div className="absolute inset-0 overflow-hidden rounded-[3rem] border border-white/15 bg-black/20 shadow-[0_70px_190px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              <motion.div style={{ opacity: whitePanelOpacity }} className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_76%_70%,rgba(34,211,238,0.18),transparent_34%)]" />
              {shards.map((item) => <Shard key={item.id} item={item} progress={scrollYProgress} />)}
            </div>

            <motion.div style={{ x: dashboardX, y: dashboardY, scale: dashboardScale, rotateY: dashboardRotateY, filter: dashboardBlur }} className="relative z-20 p-4 md:p-5 [transform-style:preserve-3d]">
              <div className="rounded-[2.4rem] border border-white/15 bg-[#050814]/92 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl md:p-6">
                <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                  <div>
                    <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">EXPROSA IMPACT ENGINE</p>
                    <h3 className="mt-2 text-3xl font-black tracking-[-0.05em] text-white">Shatter Intelligence View</h3>
                  </div>
                  <motion.div key={frame.tag} initial={{ scale: 0.5, rotate: -24 }} animate={{ scale: 1, rotate: 0 }} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-[0_0_32px_rgba(255,255,255,0.45)]">
                    <Icon className="h-7 w-7" />
                  </motion.div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <motion.div key={frame.main} initial={{ opacity: 0, scale: 0.82, y: 34 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-[0_0_54px_rgba(255,255,255,0.18)]">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] opacity-55">{frame.sub}</p>
                    <p className="mt-4 text-6xl font-black tracking-[-0.08em] md:text-7xl">{frame.main}</p>
                    <span className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">{frame.signal}</span>
                  </motion.div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Particle Status</p>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {["Break", "Scatter", "Rebuild"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white/80">{item}</div>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-6 text-slate-300">Scroll ke bawah memecah panel putih menjadi pecahan visual dan menyusun ulang dashboard gelap.</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">Command Flow</p>
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                  <div className="mt-6 space-y-4">
                    {frame.bars.map((bar, index) => (
                      <div key={`${frame.tag}-${index}`}>
                        <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.14em] text-slate-400"><span>Layer {index + 1}</span><span>{bar}%</span></div>
                        <div className="h-3 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: "4%" }} animate={{ width: `${bar}%` }} transition={{ duration: 0.72, delay: index * 0.06 }} className="h-full rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.72)]" /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
