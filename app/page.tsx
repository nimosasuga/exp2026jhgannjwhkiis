"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
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

const services = [
  "Website premium",
  "Landing page conversion",
  "WhatsApp AI flow",
  "Dashboard bisnis",
  "Automation workflow",
  "Digital growth architecture",
];

const phases = [
  {
    eyebrow: "01 / ATTRACT",
    title: "Perhatian masuk dari visual yang terasa mahal.",
    metric: "84%",
    label: "Attention lift",
    note: "Hero, trust signal, dan CTA dibuat seperti product story modern.",
  },
  {
    eyebrow: "02 / CONVERT",
    title: "Pengunjung diarahkan ke keputusan yang jelas.",
    metric: "3.8x",
    label: "CTA clarity",
    note: "Copy, section flow, dan card dirancang agar user tidak bingung harus klik apa.",
  },
  {
    eyebrow: "03 / AUTOMATE",
    title: "Lead masuk ke alur follow up yang bisa dipantau.",
    metric: "24/7",
    label: "Response layer",
    note: "Website, WhatsApp, form, dan data disiapkan untuk AI-ready business flow.",
  },
  {
    eyebrow: "04 / SCALE",
    title: "Aset digital berubah menjadi mesin pertumbuhan.",
    metric: "360°",
    label: "Business view",
    note: "Bukan hanya terlihat online, tapi bisa dibaca, diukur, dan ditingkatkan.",
  },
];

const shards = Array.from({ length: 68 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: 6 + ((index * 13) % 34),
  dx: ((index % 9) - 4) * 34,
  dy: (((index * 7) % 11) - 5) * 30,
  rotate: ((index * 29) % 180) - 90,
  opacity: 0.16 + ((index % 7) * 0.05),
}));

function useSceneProgress() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return { ref, scrollYProgress };
}

function ShatterShard({ shard, progress }: { shard: (typeof shards)[number]; progress: any }) {
  const x = useTransform(progress, [0, 1], [0, shard.dx]);
  const y = useTransform(progress, [0, 1], [0, shard.dy]);
  const rotate = useTransform(progress, [0, 1], [0, shard.rotate]);
  const opacity = useTransform(progress, [0, 0.2, 1], [0.15, shard.opacity, 0.82]);
  const scale = useTransform(progress, [0, 0.55, 1], [0.7, 1.45, 0.9]);

  return (
    <motion.span
      style={{ left: shard.left, top: shard.top, width: shard.size, height: shard.size, x, y, rotate, opacity, scale }}
      className="absolute z-20 rounded-full bg-slate-950 shadow-[0_0_40px_rgba(15,23,42,0.24)]"
    />
  );
}

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
        <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 md:flex">
          <a href="#services">Layanan</a>
          <a href="#scene">Experience</a>
          <a href="#pricing">Paket</a>
        </nav>
        <a href="#contact" className="rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-slate-950/20">
          Diskusi
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f2] px-6 pb-16 pt-36 text-slate-950 lg:px-10 lg:pb-24 lg:pt-44">
      <div className="absolute left-1/2 top-0 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-slate-200/70 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:52px_52px] opacity-45" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-600 shadow-xl shadow-slate-200/70">
            <MousePointer2 className="h-4 w-4" />
            Webflow-like White Light Experience
          </div>
          <h1 className="mt-8 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.085em] text-slate-950 md:text-8xl lg:text-9xl">
            Business website yang terasa hidup saat discroll.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            EXPROSA membangun website, dashboard, dan automation flow dengan tampilan premium, gerakan cinematic, dan struktur bisnis yang jelas.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#scene" className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-2xl shadow-slate-950/20">
              Lihat Experience
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-xl shadow-slate-200/70">
              Layanan EXPROSA
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative min-h-[560px] [perspective:1400px]"
        >
          <div className="absolute inset-6 rounded-[3rem] bg-slate-950 shadow-[0_80px_180px_rgba(15,23,42,0.28)]" />
          <div className="absolute inset-0 rounded-[3rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/60 [transform:rotateX(7deg)_rotateY(-9deg)]">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-300" />
                <span className="h-3 w-3 rounded-full bg-slate-400" />
                <span className="h-3 w-3 rounded-full bg-slate-950" />
              </div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-400">EXPROSA OS</p>
            </div>
            <div className="grid gap-4 pt-5">
              <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">Command View</p>
                <p className="mt-4 text-5xl font-black tracking-[-0.07em]">360°</p>
                <p className="mt-2 text-sm text-slate-300">Traffic, lead, response, automation.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Lead", "+42%"],
                  ["Flow", "AI-ready"],
                  ["Trust", "Premium"],
                  ["Speed", "Fast"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                    <p className="mt-3 text-2xl font-black tracking-[-0.05em] text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FourDScene() {
  const { ref, scrollYProgress } = useSceneProgress();
  const [phase, setPhase] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = latest < 0.24 ? 0 : latest < 0.5 ? 1 : latest < 0.76 ? 2 : 3;
    setPhase(next);
  });

  const bg = useTransform(scrollYProgress, [0, 0.44, 0.72, 1], ["#f8f7f2", "#ffffff", "#111827", "#020617"]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.32, 0.68, 1], [1, 0.88, 1.08, 0.96]);
  const sceneX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, -120, 90, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 60, -80, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 18, -16]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, -10, 12]);
  const blur = useTransform(scrollYProgress, [0, 0.38, 0.55, 0.8, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(2px)", "blur(0px)"]);
  const shatterPower = useTransform(scrollYProgress, [0.2, 0.52, 0.78, 1], [0, 1, 0.35, 0]);
  const darkOpacity = useTransform(scrollYProgress, [0.48, 0.72], [0, 1]);

  return (
    <motion.section ref={ref} id="scene" style={{ backgroundColor: bg }} className="relative h-[230vh] overflow-clip">
      <motion.div style={{ opacity: darkOpacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.26),transparent_22%),radial-gradient(circle_at_70%_55%,rgba(148,163,184,0.22),transparent_28%),#020617]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45 mix-blend-multiply" />

      <div className="sticky top-0 flex h-screen items-center px-6 py-8 lg:px-10">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-20">
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[2rem] border border-slate-200 bg-white/80 p-7 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
            >
              <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-400">{phases[phase].eyebrow}</p>
              <h2 className="mt-5 text-balance text-4xl font-black leading-[0.95] tracking-[-0.065em] text-slate-950 md:text-6xl">
                {phases[phase].title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{phases[phase].note}</p>
            </motion.div>
          </div>

          <div className="relative min-h-[620px] [perspective:1600px]">
            {shards.map((shard) => (
              <ShatterShard key={shard.id} shard={shard} progress={shatterPower} />
            ))}

            <motion.div
              style={{ x: sceneX, y: sceneY, scale: sceneScale, rotateX, rotateY, filter: blur }}
              className="absolute inset-0 rounded-[3rem] border border-slate-200 bg-white p-5 shadow-[0_80px_200px_rgba(15,23,42,0.24)] [transform-style:preserve-3d]"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-950" />
                </div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-slate-400">4D Business Console</p>
              </div>

              <div className="grid gap-5 pt-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2.4rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/20">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                      {[BarChart3, MousePointer2, Bot, Network].map((Icon, index) => (index === phase ? <Icon key={index} className="h-6 w-6" /> : null))}
                    </div>
                    <p className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/70">Live</p>
                  </div>
                  <motion.p key={phases[phase].metric} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-7xl font-black tracking-[-0.08em]">
                    {phases[phase].metric}
                  </motion.p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">{phases[phase].label}</p>
                  <div className="mt-8 space-y-3">
                    {[82, 64, 48, 72].map((value, index) => (
                      <div key={index} className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          animate={{ width: `${Math.max(18, value - phase * index * 6)}%` }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  {[Workflow, Layers3, Cpu].map((Icon, index) => (
                    <motion.div
                      key={index}
                      animate={{ y: phase === index + 1 ? -10 : 0, scale: phase === index + 1 ? 1.03 : 1 }}
                      className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-slate-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-400">Layer 0{index + 1}</p>
                          <p className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950">{["Lead capture", "Automation route", "Growth signal"][index]}</p>
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
    </motion.section>
  );
}

function ServiceSection() {
  return (
    <section id="services" className="bg-white px-6 py-20 text-slate-950 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-400">What EXPROSA Builds</p>
        <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.07em] md:text-7xl">Bukan hanya bagus. Harus bisa dipakai untuk bisnis.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              className="rounded-[2rem] border border-slate-200 bg-[#f8f7f2] p-7 shadow-xl shadow-slate-200/60"
            >
              <CheckCircle2 className="h-6 w-6 text-slate-950" />
              <h3 className="mt-6 text-2xl font-black tracking-[-0.04em]">{service}</h3>
              <p className="mt-4 text-slate-600">Dibangun dengan visual premium, alur jelas, dan siap dikembangkan.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-[#f8f7f2] px-6 py-20 text-slate-950 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-400">Starting Point</p>
          <h2 className="mt-5 text-5xl font-black tracking-[-0.07em] md:text-7xl">Mulai dari fondasi yang terlihat mahal dan bisa dikembangkan.</h2>
        </div>
        <div className="rounded-[3rem] bg-slate-950 p-8 text-white shadow-[0_60px_160px_rgba(15,23,42,0.28)]">
          <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-slate-400">Premium Web Build</p>
          <p className="mt-6 text-6xl font-black tracking-[-0.08em]">Custom</p>
          <p className="mt-4 text-lg leading-8 text-slate-300">Untuk UMKM naik kelas, perusahaan skala tumbuh, dan brand yang ingin terlihat serius secara digital.</p>
          <a id="contact" href="mailto:ifiryanto@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950">
            Diskusi Project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <Hero />
      <FourDScene />
      <ServiceSection />
      <PricingSection />
    </main>
  );
}
