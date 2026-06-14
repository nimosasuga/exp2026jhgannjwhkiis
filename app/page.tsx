"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Cpu,
  Layers3,
  MousePointer2,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

const stages = [
  {
    eyebrow: "01 / FIRST IMPRESSION",
    title: "Website yang terasa mahal sejak layar pertama.",
    body: "White light palette, glass panel, shadow halus, dan gerakan scroll yang terasa seperti Webflow premium.",
    metric: "4D",
    label: "Scroll depth",
    icon: Sparkles,
  },
  {
    eyebrow: "02 / SHATTER MOTION",
    title: "Saat discroll, panel buyar menjadi partikel.",
    body: "Card, statistik, dan dashboard tidak hanya fade. Mereka pecah, blur, rotate, lalu menyusun ulang sebagai scene berikutnya.",
    metric: "88",
    label: "Motion shards",
    icon: Network,
  },
  {
    eyebrow: "03 / ANALYTICS COMMAND",
    title: "Dashboard bergerak seperti aplikasi bisnis nyata.",
    body: "Lead, traffic, response, funnel, dan automation tampil seperti command center yang hidup.",
    metric: "360°",
    label: "Business view",
    icon: BarChart3,
  },
  {
    eyebrow: "04 / SERVICES",
    title: "Setiap layanan terlihat sebagai layer bisnis.",
    body: "Website, WhatsApp AI, dashboard, automation, dan growth architecture disusun sebagai satu alur.",
    metric: "6",
    label: "Core builds",
    icon: Workflow,
  },
  {
    eyebrow: "05 / DECISION",
    title: "Akhir scroll harus membawa user ke keputusan.",
    body: "Visual premium hanya berguna kalau akhirnya membuat calon client percaya dan mau berdiskusi.",
    metric: "GO",
    label: "Start project",
    icon: ArrowRight,
  },
];

const services = ["Website Premium", "Landing Conversion", "WhatsApp AI", "Dashboard Bisnis", "Automation Flow", "Growth Architecture"];

const shards = Array.from({ length: 88 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: 5 + ((index * 11) % 28),
  dx: ((index % 11) - 5) * 42,
  dy: (((index * 7) % 13) - 6) * 34,
  rotate: ((index * 31) % 240) - 120,
  opacity: 0.12 + ((index % 8) * 0.055),
}));

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-5 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-black tracking-[-0.03em] text-slate-950">EXPROSA</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Business Tech Partner</p>
          </div>
        </div>
        <a href="#contact" className="rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-slate-950/20">
          Diskusi
        </a>
      </div>
    </header>
  );
}

function Shard({ shard, progress }: { shard: (typeof shards)[number]; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const x = useTransform(progress, [0, 0.28, 0.62, 1], [0, shard.dx * 0.2, shard.dx, shard.dx * -0.15]);
  const y = useTransform(progress, [0, 0.28, 0.62, 1], [0, shard.dy * 0.2, shard.dy, shard.dy * -0.12]);
  const rotate = useTransform(progress, [0, 0.58, 1], [0, shard.rotate, shard.rotate * -0.25]);
  const opacity = useTransform(progress, [0, 0.16, 0.62, 1], [0, shard.opacity, 0.72, 0.08]);
  const scale = useTransform(progress, [0, 0.45, 1], [0.55, 1.65, 0.45]);

  return (
    <motion.span
      style={{ left: shard.left, top: shard.top, width: shard.size, height: shard.size, x, y, rotate, opacity, scale }}
      className="absolute z-20 rounded-full bg-slate-950 shadow-[0_0_38px_rgba(15,23,42,0.24)]"
    />
  );
}

function StickyStage({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const Icon = stage.icon;

  const light = index % 2 === 0;
  const bg = light ? "bg-[#f8f7f2]" : "bg-white";
  const cardX = useTransform(scrollYProgress, [0, 0.45, 1], [index % 2 ? 120 : -120, 0, index % 2 ? -80 : 80]);
  const cardY = useTransform(scrollYProgress, [0, 0.45, 1], [80, 0, -80]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 ? -18 : 18, 0, index % 2 ? 14 : -14]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1, 0.92]);
  const blur = useTransform(scrollYProgress, [0, 0.18, 0.74, 1], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const darkLayer = useTransform(scrollYProgress, [0.2, 0.65, 1], [0, index === 2 ? 0.95 : 0.18, 0.05]);
  const beamX = useTransform(scrollYProgress, [0, 1], ["-25%", "35%"]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section ref={ref} className={`relative h-[165vh] overflow-clip ${bg}`}>
      <motion.div style={{ opacity: darkLayer }} className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />
      <motion.div
        style={{ x: beamX, rotate: beamRotate }}
        className="absolute -top-32 left-1/2 h-[130vh] w-[34vw] rounded-full bg-white/80 blur-3xl"
      />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="sticky top-0 flex h-screen items-center px-6 py-8 lg:px-10">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div style={{ y: cardY, filter: blur }} className="relative z-30">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-slate-500 shadow-xl shadow-slate-200/60 backdrop-blur-2xl">
              <MousePointer2 className="h-4 w-4" />
              Sticky Scroll Stage
            </div>
            <p className="mt-8 font-mono text-xs font-black uppercase tracking-[0.3em] text-slate-400">{stage.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[0.88] tracking-[-0.08em] text-slate-950 md:text-7xl lg:text-8xl">
              {stage.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{stage.body}</p>
            {index === 4 ? (
              <a id="contact" href="mailto:ifiryanto@gmail.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-2xl shadow-slate-950/20">
                Diskusi Project <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </motion.div>

          <div className="relative min-h-[560px] [perspective:1800px] lg:min-h-[640px]">
            {shards.map((shard) => (
              <Shard key={`${index}-${shard.id}`} shard={shard} progress={scrollYProgress} />
            ))}

            <motion.div
              style={{ x: cardX, y: cardY, rotateX, rotateY, scale, filter: blur }}
              className="absolute inset-0 rounded-[3rem] border border-slate-200 bg-white p-5 shadow-[0_90px_220px_rgba(15,23,42,0.24)] [transform-style:preserve-3d]"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-950" />
                </div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-slate-400">EXPROSA 4D OS</p>
              </div>

              <div className="grid gap-5 pt-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2.4rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/20">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/70">Live</p>
                  </div>
                  <p className="mt-8 text-7xl font-black tracking-[-0.08em]">{stage.metric}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">{stage.label}</p>
                  <div className="mt-8 space-y-3">
                    {[82, 64, 48, 72].map((value, barIndex) => (
                      <div key={barIndex} className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          style={{ width: useTransform(scrollYProgress, [0, 0.5, 1], [`${Math.max(18, value - 24)}%`, `${value}%`, `${Math.max(26, value - index * 7)}%`]) }}
                          className="h-full rounded-full bg-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  {index === 3
                    ? services.slice(0, 3).map((service, itemIndex) => (
                        <motion.div
                          key={service}
                          style={{ y: useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -18]) }}
                          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
                        >
                          <CheckCircle2 className="h-6 w-6 text-slate-950" />
                          <p className="mt-4 text-xl font-black tracking-[-0.04em] text-slate-950">{service}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-500">Layer 0{itemIndex + 1} dari arsitektur digital.</p>
                        </motion.div>
                      ))
                    : [Workflow, Layers3, Cpu].map((PanelIcon, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          style={{ y: useTransform(scrollYProgress, [0, 0.5, 1], [24 + itemIndex * 10, 0, -18 - itemIndex * 6]) }}
                          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-slate-200">
                              <PanelIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-400">Layer 0{itemIndex + 1}</p>
                              <p className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950">{["Lead capture", "Automation route", "Growth signal"][itemIndex]}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      {stages.map((stage, index) => (
        <StickyStage key={stage.eyebrow} stage={stage} index={index} />
      ))}
    </main>
  );
}
