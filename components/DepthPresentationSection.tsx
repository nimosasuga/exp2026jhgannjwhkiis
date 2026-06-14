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
    title: "Titik macet bisnis dibaca sebagai sinyal.",
    body: "Kita mulai dari masalah nyata: calon pelanggan bingung, follow up lambat, data tercecer, dan proses masih manual.",
  },
  {
    icon: Layers3,
    label: "02 / LAYER",
    title: "Setiap aset digital diberi peran.",
    body: "Landing page, WhatsApp, form, dashboard, dan automation tidak berdiri sendiri. Semua masuk ke satu alur.",
  },
  {
    icon: Workflow,
    label: "03 / FLOW",
    title: "Alur dibuat bergerak dari klik ke keputusan.",
    body: "Pengunjung melihat, percaya, klik, ngobrol, lalu masuk ke proses bisnis yang bisa dilacak.",
  },
  {
    icon: Bot,
    label: "04 / ENGINE",
    title: "Bagian repetitif mulai dikendalikan mesin.",
    body: "Otomasi mengurangi kerja ulang, mempercepat respon, dan membuat bisnis lebih siap tumbuh.",
  },
];

function StageCard({ index, active, progress }: { index: number; active: number; progress: MotionValue<number> }) {
  const stage = stages[index];
  const start = index / stages.length;
  const end = (index + 1) / stages.length;
  const y = useTransform(progress, [start, end], [92, -28]);
  const rotateX = useTransform(progress, [start, end], [14, -5]);
  const Icon = stage.icon;

  return (
    <motion.article
      style={{ y, rotateX }}
      className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl transition duration-500 ${
        active === index
          ? "border-cyan-300/45 bg-white/[0.09] shadow-cyan-950/25"
          : "border-white/10 bg-white/[0.045] opacity-40 shadow-black/25"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-200">{stage.label}</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white md:text-3xl">{stage.title}</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">{stage.body}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function DepthPresentationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const pathOffset = useTransform(scrollYProgress, [0, 1], [780, 0]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-24, 36]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1.16, 0.96]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -86]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(stages.length - 1, Math.floor(value * stages.length)));
  });

  return (
    <section ref={ref} id="depth-presentation" className="relative z-10 min-h-[430vh] overflow-clip px-6 lg:px-10">
      <div className="sticky top-0 flex min-h-screen items-center py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(180deg,rgba(5,6,10,0.18),rgba(5,6,10,0.78))]" />

        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <motion.path
            d="M365 445 C 545 280, 730 625, 950 430 S 1190 320, 1325 540"
            fill="none"
            stroke="rgba(103,232,249,0.42)"
            strokeWidth="1.35"
            strokeDasharray="780"
            style={{ strokeDashoffset: pathOffset }}
          />
          <motion.path
            d="M365 445 C 545 280, 730 625, 950 430 S 1190 320, 1325 540"
            fill="none"
            stroke="rgba(16,185,129,0.2)"
            strokeWidth="9"
            strokeDasharray="10 34"
            style={{ strokeDashoffset: pathOffset }}
          />
        </svg>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div style={{ y: textY }} className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">
              <ArrowUpRight className="h-4 w-4" />
              Depth Presentation
            </div>
            <h2 className="mt-8 text-balance text-5xl font-black tracking-[-0.065em] text-white md:text-7xl">
              Narasi, garis, dan panel terasa berada dalam satu ruang.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Ini layer 3D illusion: bukan hanya animasi muncul, tapi ada kedalaman, koneksi visual, orbit, dan progress yang menjahit cerita bisnis.
            </p>

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

          <div className="relative min-h-[730px] [perspective:1300px]">
            <motion.div
              style={{ rotate: orbRotate, scale: orbScale }}
              className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20 bg-[radial-gradient(circle,rgba(34,211,238,0.15),rgba(16,185,129,0.07)_44%,transparent_72%)] shadow-[0_0_140px_rgba(34,211,238,0.14)]"
            >
              <div className="absolute inset-10 rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-24 rounded-full border border-white/10" />
              {stages.map((stage, index) => (
                <div
                  key={stage.label}
                  className={`absolute h-3.5 w-3.5 rounded-full transition duration-500 ${active === index ? "scale-150 bg-cyan-200 shadow-[0_0_34px_rgba(103,232,249,0.95)]" : "bg-white/35"}`}
                  style={{
                    left: `${48 + Math.cos((index / stages.length) * Math.PI * 2) * 42}%`,
                    top: `${48 + Math.sin((index / stages.length) * Math.PI * 2) * 42}%`,
                  }}
                />
              ))}
            </motion.div>

            <div className="relative z-10 grid gap-5 pt-10 [transform-style:preserve-3d]">
              {stages.map((_, index) => (
                <StageCard key={stages[index].label} index={index} active={active} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
