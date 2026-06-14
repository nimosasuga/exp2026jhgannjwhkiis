"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Bot, Gauge, MessagesSquare, Sparkles, Workflow } from "lucide-react";

const frames = [
  {
    icon: Gauge,
    tag: "01 / WHITE ROOM",
    title: "Dashboard lahir dari ruang putih yang bersih.",
    main: "3.284",
    sub: "tracked visitors",
    signal: "Clarity layer active",
    bars: [88, 72, 46, 28],
  },
  {
    icon: Sparkles,
    tag: "02 / SHATTER",
    title: "Panel pecah menjadi partikel visual.",
    main: "728",
    sub: "broken signals",
    signal: "Particles separating",
    bars: [74, 66, 59, 42],
  },
  {
    icon: MessagesSquare,
    tag: "03 / REBUILD",
    title: "Data menyusun ulang alur lead.",
    main: "02:14",
    sub: "response speed",
    signal: "Flow reconstructed",
    bars: [92, 86, 76, 63],
  },
  {
    icon: Bot,
    tag: "04 / COMMAND",
    title: "Layar kendali bisnis mulai aktif.",
    main: "91%",
    sub: "command readiness",
    signal: "AI layer online",
    bars: [98, 92, 87, 80],
  },
];

const shards = Array.from({ length: 96 }, (_, index) => {
  const row = Math.floor(index / 12);
  const col = index % 12;
  return {
    id: index,
    left: 5 + col * 8.2,
    top: 7 + row * 10.8,
    x: (col - 5.5) * 54 + (index % 4) * 18,
    y: (row - 3.5) * 62 + ((index % 5) - 2) * 18,
    rotate: (index % 2 ? 1 : -1) * (34 + (index % 8) * 14),
    size: 6 + (index % 5) * 3,
  };
});

type ScrollProgress = ReturnType<typeof useScroll>["scrollYProgress"];

function Shard({ item, progress }: { item: (typeof shards)[number]; progress: ScrollProgress }) {
  const x = useTransform(progress, [0.16, 0.58, 0.96], [0, item.x, item.x * 0.22]);
  const y = useTransform(progress, [0.16, 0.58, 0.96], [0, item.y, item.y * -0.16]);
  const rotate = useTransform(progress, [0.16, 0.62, 1], [0, item.rotate, item.rotate * 2.35]);
  const opacity = useTransform(progress, [0, 0.2, 0.62, 1], [0.12, 1, 0.72, 0.18]);
  const scale = useTransform(progress, [0.16, 0.58, 1], [0.8, 2.1, 0.68]);

  return (
    <motion.span
      aria-hidden="true"
      style={{ x, y, rotate, opacity, scale, left: `${item.left}%`, top: `${item.top}%`, width: item.size, height: item.size }}
      className="absolute rounded-[2px] bg-white shadow-[0_0_28px_rgba(255,255,255,0.62)]"
    />
  );
}

function getFrameIndex(value: number) {
  if (value < 0.24) return 0;
  if (value < 0.5) return 1;
  if (value < 0.76) return 2;
  return 3;
}

export function DepthPresentationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const bgShift = useTransform(scrollYProgress, [0, 0.42, 1], ["#f8fafc", "#0f172a", "#02040a"]);
  const darkOpacity = useTransform(scrollYProgress, [0, 0.28, 0.72], [0, 0.68, 1]);
  const whitePanelOpacity = useTransform(scrollYProgress, [0, 0.28, 0.56], [1, 0.78, 0.12]);
  const dashboardX = useTransform(scrollYProgress, [0, 0.5, 0.92], [0, -58, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 0.52, 1], [0, 34, -10]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5, 0.92], [1, 0.84, 1.01]);
  const dashboardRotateY = useTransform(scrollYProgress, [0, 0.52, 0.92], [-1, -18, 2]);
  const dashboardBlur = useTransform(scrollYProgress, [0, 0.52, 0.92], ["blur(0px)", "blur(7px)", "blur(0px)"]);
  const beamX = useTransform(scrollYProgress, [0, 1], ["-18%", "24%"]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [-12, 18]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(getFrameIndex(value));
  });

  const frame = frames[active];
  const Icon = frame.icon;

  return (
    <section ref={ref} id="analytics-command" className="relative z-10 min-h-[185vh] overflow-clip px-6 text-white lg:px-10">
      <motion.div style={{ backgroundColor: bgShift }} className="sticky top-0 flex min-h-[100svh] items-center py-4 lg:py-6">
        <motion.div style={{ opacity: darkOpacity }} className="absolute inset-0 bg-[#02040a]" />
        <motion.div style={{ x: beamX, rotate: beamRotate }} className="absolute left-0 top-[-28%] h-[760px] w-[760px] rounded-full bg-white/38 blur-[110px] mix-blend-overlay" />
        <motion.div style={{ x: beamX }} className="absolute left-[-10%] top-[18%] h-[520px] w-[520px] rounded-full bg-cyan-300/25 blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_32%_78%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.1))]" />
        <div className="absolute inset-0 premium-grid opacity-35" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 lg:grid-cols-[0.68fr_1.32fr]">
          <div className="relative z-30">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-white backdrop-blur-2xl">
              <Sparkles className="h-4 w-4" />
              White / Dark Shatter Scroll
            </div>

            <motion.div key={frame.tag} initial={{ opacity: 0, y: 28, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mt-6">
              <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-cyan-200">{frame.tag}</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.07em] text-white drop-shadow-2xl md:text-6xl">
                {frame.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
                Palet white/dark, panel pecah, partikel buyar, lalu dashboard tersusun ulang menjadi command layer.
              </p>
            </motion.div>

            <div className="mt-6 flex items-center gap-5">
              <div className="relative h-32 w-1 overflow-hidden rounded-full bg-white/15">
                <motion.div style={{ height: progressHeight }} className="absolute inset-x-0 top-0 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.8)]" />
              </div>
              <div className="grid gap-2.5">
                {frames.map((item, index) => (
                  <div key={item.tag} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] ${active === index ? "text-white" : "text-white/35"}`}>
                    {item.tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[560px] [perspective:1400px] lg:min-h-[600px]">
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/15 bg-black/20 shadow-[0_55px_160px_rgba(0,0,0,0.68)] backdrop-blur-2xl">
              <motion.div style={{ opacity: whitePanelOpacity }} className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_76%_70%,rgba(34,211,238,0.18),transparent_34%)]" />
              {shards.map((item) => <Shard key={item.id} item={item} progress={scrollYProgress} />)}
            </div>

            <motion.div style={{ x: dashboardX, y: dashboardY, scale: dashboardScale, rotateY: dashboardRotateY, filter: dashboardBlur }} className="relative z-20 p-3 md:p-4 [transform-style:preserve-3d]">
              <div className="rounded-[2rem] border border-white/15 bg-[#050814]/92 p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl md:p-5">
                <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">EXPROSA IMPACT ENGINE</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white md:text-3xl">Shatter Intelligence View</h3>
                  </div>
                  <motion.div key={frame.tag} initial={{ scale: 0.65, rotate: -16 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.75 }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-[0_0_32px_rgba(255,255,255,0.45)] md:h-14 md:w-14">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </motion.div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <motion.div key={frame.main} initial={{ opacity: 0, scale: 0.88, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="rounded-[1.7rem] bg-white p-5 text-slate-950 shadow-[0_0_54px_rgba(255,255,255,0.18)]">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] opacity-55">{frame.sub}</p>
                    <p className="mt-3 text-5xl font-black tracking-[-0.08em] md:text-6xl">{frame.main}</p>
                    <span className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">{frame.signal}</span>
                  </motion.div>

                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-4">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Particle Status</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["Break", "Scatter", "Rebuild"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-center text-[10px] font-black uppercase tracking-[0.12em] text-white/80">{item}</div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-300">Panel putih pecah menjadi pecahan visual dan menyusun ulang dashboard gelap.</p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-4 md:p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">Command Flow</p>
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {frame.bars.map((bar, index) => (
                      <div key={`${frame.tag}-${index}`}>
                        <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-[0.14em] text-slate-400"><span>Layer {index + 1}</span><span>{bar}%</span></div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: "4%" }} animate={{ width: `${bar}%` }} transition={{ duration: 1.05, delay: index * 0.08 }} className="h-full rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.72)]" /></div>
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
