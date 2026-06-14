"use client";

import { useRef } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Bot, LayoutDashboard, LineChart, MessageCircle } from "lucide-react";

const storyItems = [
  {
    icon: LayoutDashboard,
    label: "Website",
    title: "Bukan halaman pajangan.",
    body: "Landing page harus menjelaskan nilai bisnis dalam hitungan detik, bukan membuat pengunjung menebak-nebak.",
    stat: "0.8s",
    note: "first impression window",
  },
  {
    icon: MessageCircle,
    label: "Follow up",
    title: "Percakapan pelanggan dibuat lebih cepat.",
    body: "Alur WhatsApp, form, dan CTA harus saling tersambung agar calon pelanggan tidak jatuh di tengah jalan.",
    stat: "24/7",
    note: "response readiness",
  },
  {
    icon: Bot,
    label: "Automation",
    title: "Kerja manual mulai dipangkas.",
    body: "Data, pesan, reminder, dan proses internal tidak boleh terus bergantung pada ingatan manusia.",
    stat: "3x",
    note: "operational clarity",
  },
  {
    icon: LineChart,
    label: "Growth",
    title: "Digital asset harus bisa diukur.",
    body: "Tanpa struktur, bisnis hanya punya tampilan. Dengan struktur, bisnis punya arah, data, dan bahan keputusan.",
    stat: "100%",
    note: "measurable path",
  },
];

type StoryCardProps = {
  item: (typeof storyItems)[number];
  index: number;
  progress: MotionValue<number>;
};

function StoryCard({ item, index, progress }: StoryCardProps) {
  const start = index / storyItems.length;
  const mid = start + 0.12;
  const end = (index + 1) / storyItems.length;
  const y = useTransform(progress, [start, end], [120, -16]);
  const opacity = useTransform(progress, [Math.max(0, start - 0.08), mid, end], [0.35, 1, 0.92]);
  const rotate = useTransform(progress, [start, end], [index % 2 === 0 ? -3 : 3, 0]);
  const Icon = item.icon;

  return (
    <motion.article
      style={{ y, opacity, rotate }}
      className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.075] p-6 shadow-2xl shadow-black/20 backdrop-blur transition hover:border-cyan-300/40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
              0{index + 1} / {item.label}
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">
              {item.title}
            </h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-black text-emerald-300">{item.stat}</p>
          <p className="mt-1 max-w-24 text-xs leading-4 text-slate-400">{item.note}</p>
        </div>
      </div>
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">{item.body}</p>
    </motion.article>
  );
}

export function ScrollStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.92, 1.06, 0.96]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section ref={sectionRef} id="scroll-story" className="relative z-10 min-h-[320vh] px-6 py-24 lg:px-10">
      <div className="sticky top-0 mx-auto flex min-h-screen max-w-7xl items-center py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <motion.div
              style={{ x: glowX }}
              className="absolute -top-20 h-40 w-40 rounded-full bg-cyan-300/25 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/40 backdrop-blur md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-emerald-200">
                Scroll Experience
              </div>
              <h2 className="mt-8 text-balance text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
                Dari website biasa menjadi mesin kepercayaan digital.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Efek seperti Webflow bukan cuma animasi lucu. Ia harus membantu orang memahami alur bisnis: lihat, percaya, klik, bicara, lalu beli.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <div className="relative h-28 w-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div style={{ height: lineHeight }} className="absolute left-0 top-0 w-full rounded-full bg-cyan-300" />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-cyan-200">SCROLL TO UNLOCK</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                    Card di kanan bergerak mengikuti scroll. Ini baru terasa seperti interaksi, bukan poster diam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            style={{ scale: heroScale, rotate: heroRotate }}
            className="relative min-h-[720px] overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.16),transparent_34%)]" />
            <div className="absolute inset-0 premium-grid opacity-40" />
            <div className="relative flex items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.06] px-5 py-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-slate-400">EXPROSA Flow</p>
                <p className="mt-1 text-lg font-black text-white">Business Technology Layer</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>

            <div className="relative mt-7 grid gap-5">
              {storyItems.map((item, index) => (
                <StoryCard key={item.title} item={item} index={index} progress={scrollYProgress} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
