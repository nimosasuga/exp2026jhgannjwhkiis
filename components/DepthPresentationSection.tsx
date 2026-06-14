"use client";

import { useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Bot, Layers3, Radar, Workflow } from "lucide-react";

const stages = [
  {
    icon: Radar,
    label: "01 / SIGNAL",
    word: "READ",
    title: "Titik macet bisnis dibaca sebagai sinyal.",
    body: "Calon pelanggan bingung, follow up lambat, data tercecer, dan proses masih manual. Semua itu bukan masalah kecil, itu sinyal desain bisnis.",
  },
  {
    icon: Layers3,
    label: "02 / LAYER",
    word: "LINK",
    title: "Setiap aset digital diberi peran.",
    body: "Landing page, WhatsApp, form, dashboard, dan automation tidak berdiri sendiri. Semua harus saling mengirim arah.",
  },
  {
    icon: Workflow,
    label: "03 / FLOW",
    word: "MOVE",
    title: "Alur dibuat bergerak dari klik ke keputusan.",
    body: "Pengunjung melihat, percaya, klik, bicara, lalu masuk ke proses bisnis yang bisa dilacak dan ditingkatkan.",
  },
  {
    icon: Bot,
    label: "04 / ENGINE",
    word: "RUN",
    title: "Bagian repetitif mulai dikendalikan mesin.",
    body: "Otomasi mengurangi kerja ulang, mempercepat respon, dan membuat bisnis lebih siap tumbuh tanpa menambah beban manual.",
  },
];

function FloatingStage({ index, active, progress }: { index: number; active: number; progress: MotionValue<number> }) {
  const stage = stages[index];
  const start = index / stages.length;
  const end = (index + 1) / stages.length;
  const x = useTransform(progress, [start, end], [index % 2 === 0 ? 96 : -96, index % 2 === 0 ? -22 : 22]);
  const y = useTransform(progress, [start, end], [90, -36]);
  const rotateY = useTransform(progress, [start, end], [index % 2 === 0 ? -24 : 24, 0]);
  const rotateX = useTransform(progress, [start, end], [18, -6]);
  const Icon = stage.icon;
  const isActive = active === index;

  const positions = [
    "left-0 top-10 md:left-4 md:top-8",
    "right-0 top-[150px] md:right-6 md:top-[145px]",
    "left-2 top-[305px] md:left-10 md:top-[310px]",
    "right-2 top-[470px] md:right-10 md:top-[485px]",
  ];

  return (
    <motion.article
      style={{ x, y, rotateY, rotateX }}
      className={`absolute z-20 w-[min(92%,390px)] overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur-2xl transition duration-500 [transform-style:preserve-3d] ${positions[index]} ${
        isActive
          ? "scale-105 border-cyan-300/55 bg-white/[0.105] opacity-100 shadow-cyan-950/35"
          : "scale-95 border-white/10 bg-white/[0.045] opacity-30 shadow-black/25"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="flex items-start gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition duration-500 ${isActive ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white"}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-200">{stage.label}</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white md:text-3xl">{stage.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{stage.body}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function DepthPresentationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const pathOffset = useTransform(scrollYProgress, [0, 1], [760, 0]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-35, 55]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1.28, 0.92]);
  const orbY = useTransform(scrollYProgress, [0, 1], [60, -52]);
  const textY = useTransform(scrollYProgress, [0, 1], [36, -110]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.25, 1, 0.38]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(stages.length - 1, Math.max(0, Math.floor(value * stages.length)));
    setActive(next);
  });

  const current = stages[active];

  return (
    <section ref={ref} id="depth-presentation" className="relative z-10 min-h-[360vh] overflow-clip px-6 lg:px-10">
      <div className="sticky top-0 flex min-h-screen items-center py-14 lg:py-20">
        <motion.div
          style={{ opacity: haloOpacity }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_45%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_76%_52%,rgba(16,185,129,0.16),transparent_30%),linear-gradient(180deg,rgba(5,6,10,0.08),rgba(5,6,10,0.78))]"
        />

        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <motion.path
            d="M310 470 C 505 205, 720 665, 965 420 S 1200 300, 1330 535"
            fill="none"
            stroke="rgba(103,232,249,0.5)"
            strokeWidth="1.45"
            strokeDasharray="760"
            style={{ strokeDashoffset: pathOffset }}
          />
          <motion.path
            d="M310 470 C 505 205, 720 665, 965 420 S 1200 300, 1330 535"
            fill="none"
            stroke="rgba(16,185,129,0.22)"
            strokeWidth="12"
            strokeDasharray="12 30"
            style={{ strokeDashoffset: pathOffset }}
          />
        </svg>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div style={{ y: textY }} className="relative z-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">
              <ArrowUpRight className="h-4 w-4" />
              Cinematic Scroll Scene
            </div>

            <div className="relative mt-8 overflow-hidden">
              <motion.p
                key={current.word}
                initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45 }}
                className="font-mono text-[clamp(4rem,14vw,11rem)] font-black leading-none tracking-[-0.12em] text-white/10"
              >
                {current.word}
              </motion.p>

              <motion.h2
                key={current.title}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="-mt-12 max-w-2xl text-balance text-4xl font-black tracking-[-0.055em] text-white md:text-6xl"
              >
                {current.title}
              </motion.h2>
            </div>

            <motion.p
              key={current.body}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
            >
              {current.body}
            </motion.p>

            <div className="mt-10 flex items-center gap-5">
              <div className="relative h-40 w-1 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ height: progressHeight }} className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-cyan-200 via-emerald-300 to-white" />
              </div>
              <div className="grid gap-3">
                {stages.map((stage, index) => (
                  <div key={stage.label} className={`font-mono text-xs font-black uppercase tracking-[0.22em] transition ${active === index ? "text-cyan-200" : "text-white/30"}`}>
                    {stage.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative min-h-[690px] [perspective:1400px] md:min-h-[735px]">
            <motion.div
              style={{ rotate: orbRotate, scale: orbScale, y: orbY }}
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/25 bg-[radial-gradient(circle,rgba(34,211,238,0.18),rgba(16,185,129,0.08)_44%,transparent_72%)] shadow-[0_0_160px_rgba(34,211,238,0.17)]"
            >
              <div className="absolute inset-8 rounded-full border border-dashed border-white/15" />
              <div className="absolute inset-24 rounded-full border border-white/10" />
              <div className="absolute inset-40 rounded-full border border-cyan-200/10" />
              {stages.map((stage, index) => (
                <div
                  key={stage.label}
                  className={`absolute h-3.5 w-3.5 rounded-full transition duration-500 ${active === index ? "scale-[1.9] bg-cyan-200 shadow-[0_0_38px_rgba(103,232,249,0.95)]" : "bg-white/30"}`}
                  style={{
                    left: `${48 + Math.cos((index / stages.length) * Math.PI * 2) * 42}%`,
                    top: `${48 + Math.sin((index / stages.length) * Math.PI * 2) * 42}%`,
                  }}
                />
              ))}
            </motion.div>

            <div className="relative z-20 h-[690px] [transform-style:preserve-3d] md:h-[735px]">
              {stages.map((_, index) => (
                <FloatingStage key={stages[index].label} index={index} active={active} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
