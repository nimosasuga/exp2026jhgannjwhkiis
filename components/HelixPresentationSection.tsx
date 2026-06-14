"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Activity, Cpu, Layers3, MessageSquareText, Network } from "lucide-react";

const phases = [
  {
    icon: Activity,
    kicker: "DIAGNOSIS",
    title: "Kita baca dulu pola bisnisnya.",
    body: "Sebelum desain dibuat, jalur pelanggan, titik macet, dan proses manual harus kelihatan jelas.",
    metric: "01",
  },
  {
    icon: Layers3,
    kicker: "ARCHITECTURE",
    title: "Struktur digital dibangun sebagai lapisan.",
    body: "Website, CTA, WhatsApp, data, dan dashboard tidak berdiri sendiri. Semuanya harus saling mengirim sinyal.",
    metric: "02",
  },
  {
    icon: Cpu,
    kicker: "AUTOMATION",
    title: "Bagian repetitif mulai dipindahkan ke mesin.",
    body: "Follow up, pencatatan, notifikasi, dan alur kerja dibuat lebih otomatis tanpa kehilangan kontrol manusia.",
    metric: "03",
  },
  {
    icon: Network,
    kicker: "GROWTH SYSTEM",
    title: "Bisnis punya aset digital yang bisa tumbuh.",
    body: "Bukan sekadar online. Digital asset harus membantu bisnis dipercaya, diukur, dan ditingkatkan terus-menerus.",
    metric: "04",
  },
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  depth: number;
  phase: number;
};

function ParticleField({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);

  useMotionValueEvent(progress, "change", (latest) => {
    progressRef.current = latest;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = width < 768 ? 46 : 82;
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.8 + 0.7,
        depth: Math.random() * 0.8 + 0.2,
        phase: index * 0.37,
      }));
    };

    const draw = (time: number) => {
      const scroll = progressRef.current;
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * (0.25 + scroll * 0.45),
        height * (0.35 + Math.sin(scroll * Math.PI) * 0.18),
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.72,
      );
      gradient.addColorStop(0, "rgba(34,211,238,0.18)");
      gradient.addColorStop(0.42, "rgba(16,185,129,0.08)");
      gradient.addColorStop(1, "rgba(5,6,10,0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        const drift = 0.55 + scroll * 1.6;
        particle.x += particle.vx * drift + Math.sin(time * 0.00035 + particle.phase) * 0.08;
        particle.y += particle.vy * drift + Math.cos(time * 0.00045 + particle.phase) * 0.08;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
      });

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
          const limit = 128 + scroll * 72;
          if (distance < limit) {
            context.strokeStyle = `rgba(103,232,249,${(1 - distance / limit) * 0.18})`;
            context.lineWidth = 0.65;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        const pulse = Math.sin(time * 0.002 + particle.phase) * 0.55 + 0.85;
        context.fillStyle = `rgba(236,254,255,${0.34 + particle.depth * 0.42})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * pulse * (1 + scroll * 0.55), 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    animationFrame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [progress]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function PhasePanel({
  index,
  active,
  progress,
}: {
  index: number;
  active: number;
  progress: MotionValue<number>;
}) {
  const phase = phases[index];
  const start = index / phases.length;
  const end = (index + 1) / phases.length;
  const y = useTransform(progress, [start, end], [84, -34]);
  const rotateX = useTransform(progress, [start, end], [10, -4]);
  const opacity = active === index ? 1 : 0.38;
  const Icon = phase.icon;

  return (
    <motion.article
      style={{ y, rotateX, opacity }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.075] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-xl shadow-cyan-950/30">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.26em] text-cyan-200">{phase.kicker}</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white md:text-3xl">{phase.title}</h3>
          </div>
        </div>
        <p className="font-mono text-4xl font-black text-white/20">{phase.metric}</p>
      </div>
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">{phase.body}</p>
    </motion.article>
  );
}

export function HelixPresentationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const orbScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 1.18, 0.96]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-18, 24]);
  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextActive = Math.min(phases.length - 1, Math.floor(latest * phases.length));
    setActive(nextActive);
  });

  return (
    <section ref={sectionRef} id="helix-presentation" className="relative z-10 min-h-[420vh] overflow-clip px-6 lg:px-10">
      <div className="sticky top-0 flex min-h-screen items-center py-20">
        <ParticleField progress={scrollYProgress} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,rgba(5,6,10,0.15),rgba(5,6,10,0.9))]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div style={{ y: headlineY }} className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-cyan-100 backdrop-blur">
              <MessageSquareText className="h-4 w-4" />
              4D Scroll Narrative
            </div>
            <h2 className="mt-8 text-balance text-5xl font-black tracking-[-0.065em] text-white md:text-7xl">
              Setiap scroll menjelaskan lapisan bisnis.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Kita buat presentasi bergerak: partikel sebagai jaringan, teks sebagai narasi, dan setiap fase scroll membuka hubungan antara strategi, teknologi, dan pertumbuhan.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="relative h-36 w-1 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ height: beamHeight }} className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-cyan-200 via-emerald-300 to-white" />
              </div>
              <div className="grid gap-3">
                {phases.map((phase, index) => (
                  <button
                    key={phase.kicker}
                    type="button"
                    className={`text-left font-mono text-xs font-black uppercase tracking-[0.22em] transition ${
                      active === index ? "text-cyan-200" : "text-white/30"
                    }`}
                  >
                    0{index + 1} — {phase.kicker}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative min-h-[720px]">
            <motion.div
              style={{ scale: orbScale, rotate: orbRotate }}
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20 bg-[radial-gradient(circle,rgba(34,211,238,0.16),rgba(16,185,129,0.06)_45%,transparent_70%)] shadow-[0_0_120px_rgba(34,211,238,0.12)]"
            >
              <div className="absolute inset-10 rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-24 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_30px_rgba(103,232,249,0.9)]" />
              <div className="absolute bottom-12 right-20 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_30px_rgba(110,231,183,0.8)]" />
              <div className="absolute left-16 top-40 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_26px_rgba(255,255,255,0.8)]" />
            </motion.div>

            <div className="relative z-10 grid gap-5 pt-12">
              {phases.map((_, index) => (
                <PhasePanel key={phases[index].kicker} index={index} active={active} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
