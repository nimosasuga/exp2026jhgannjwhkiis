"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, BarChart3, Bot, CheckCircle2, Cpu, Globe2, Layers3, MessageSquareText, Network, Workflow } from "lucide-react";

const services = [
  "Website company profile premium",
  "Landing page konversi",
  "WhatsApp AI untuk UMKM",
  "Dashboard analitik bisnis",
  "Automation workflow",
  "Digital growth architecture",
];

const metrics = [
  ["01", "Discovery", "Membaca pola bisnis, hambatan, dan peluang digital."],
  ["02", "Architecture", "Menyusun website, data, WhatsApp, dan proses agar saling terhubung."],
  ["03", "Automation", "Membuat pekerjaan berulang bergerak lebih cepat dan terukur."],
  ["04", "Growth", "Membantu bisnis tampil lebih dipercaya dan siap berkembang."],
];

const cards = [
  { icon: Globe2, title: "Digital Presence", body: "Tampilan bersih, premium, dan mudah dipercaya calon client." },
  { icon: MessageSquareText, title: "AI Response", body: "Alur percakapan disiapkan untuk WhatsApp dan lead follow up." },
  { icon: BarChart3, title: "Analytics Layer", body: "Setiap interaksi punya arah, bukan hanya tampilan cantik." },
  { icon: Workflow, title: "Business Flow", body: "Website dibuat sebagai pintu masuk proses bisnis, bukan brosur online." },
];

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let scroll = window.scrollY;
    let mouseX = 0.5;
    let mouseY = 0.5;

    type Particle = {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      depth: number;
    };

    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const total = width < 768 ? 58 : 118;
      particles = Array.from({ length: total }, (_, index) => {
        const column = index % 18;
        const row = Math.floor(index / 18);
        const baseX = (column / 17) * width + (Math.random() - 0.5) * 70;
        const baseY = ((row % 8) / 7) * height + (Math.random() - 0.5) * 90;
        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          size: 1.1 + Math.random() * 2.6,
          depth: 0.25 + Math.random() * 1.15,
        };
      });
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };

    const onPointer = (event: PointerEvent) => {
      mouseX = event.clientX / Math.max(width, 1);
      mouseY = event.clientY / Math.max(height, 1);
    };

    const draw = () => {
      const page = document.documentElement;
      const maxScroll = Math.max(page.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(scroll / maxScroll, 1);
      const burst = Math.sin(progress * Math.PI) * 1.2;
      const fieldShift = progress * height * 0.42;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(255,255,255,0.92)");
      gradient.addColorStop(0.44, "rgba(248,247,242,0.86)");
      gradient.addColorStop(1, "rgba(226,232,240,0.72)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = `rgba(15,23,42,${0.04 + progress * 0.08})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, index) => {
        const angle = index * 0.83 + progress * 8;
        const explodeX = Math.cos(angle) * burst * 96 * p.depth;
        const explodeY = Math.sin(angle * 0.7) * burst * 72 * p.depth;
        const parallaxX = (mouseX - 0.5) * 52 * p.depth;
        const parallaxY = (mouseY - 0.5) * 42 * p.depth;

        p.x += (p.baseX + explodeX + parallaxX - p.x) * 0.035 + p.vx;
        p.y += (p.baseY - fieldShift * p.depth + explodeY + parallaxY - p.y) * 0.035 + p.vy;

        if (p.y < -80) {
          p.y = height + 80;
          p.baseY = height + Math.random() * 160;
        }
        if (p.x < -80) p.x = width + 80;
        if (p.x > width + 80) p.x = -80;
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const limit = 120 + burst * 60;
          if (d < limit) {
            ctx.strokeStyle = `rgba(15,23,42,${(1 - d / limit) * (0.11 + progress * 0.08)})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(15,23,42,${0.24 + p.depth * 0.16})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + burst * 0.75), 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = `rgba(255,255,255,${0.2 - progress * 0.08})`;
      ctx.beginPath();
      ctx.ellipse(width * 0.22, height * 0.2, width * 0.28, height * 0.18, -0.25, 0, Math.PI * 2);
      ctx.fill();

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" aria-hidden="true" />;
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/70 px-5 py-3 shadow-[0_18px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white">
            <Network className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[-0.02em] text-slate-950">EXPROSA</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">PT Exprosa Global Nusantara</p>
          </div>
        </div>
        <a href="#contact" className="rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-xl shadow-slate-950/15">
          Diskusi
        </a>
      </div>
    </header>
  );
}

function ScrollOrb() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.18, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <motion.div style={{ rotate, scale, y }} className="pointer-events-none fixed right-[-120px] top-[18vh] z-10 hidden h-[420px] w-[420px] rounded-full border border-slate-950/10 bg-white/25 shadow-[0_60px_160px_rgba(15,23,42,0.14)] backdrop-blur-2xl lg:block">
      <div className="absolute inset-12 rounded-full border border-dashed border-slate-950/15" />
      <div className="absolute inset-28 rounded-full bg-slate-950/5" />
    </motion.div>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 42, filter: "blur(14px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: false, margin: "-18%" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const headlineY = useTransform(scrollYProgress, [0, 0.24], [0, -90]);
  const cardY = useTransform(scrollYProgress, [0, 0.24], [0, 120]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.24], [0, -8]);

  return (
    <section className="relative z-20 min-h-[92svh] px-6 pb-20 pt-32 lg:px-10 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div style={{ y: headlineY }}>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">Business Technology Partner</p>
          <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.4rem,8.5vw,8.4rem)] font-medium leading-[0.92] tracking-[-0.075em] text-slate-950">
            Membangun wajah digital yang terasa hidup, bersih, dan berkelas.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            EXPROSA membantu bisnis menata website, alur pelanggan, WhatsApp AI, dashboard, dan automation dalam satu pengalaman digital yang elegan.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-2xl shadow-slate-950/20">
              Mulai Diskusi <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portrait" className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/60 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 backdrop-blur-xl">
              Lihat Alur
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y: cardY, rotate: cardRotate }} className="relative rounded-[2.6rem] border border-slate-200 bg-white/66 p-5 shadow-[0_70px_180px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-slate-400">Exprosa Command View</p>
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <div className="mt-8 grid gap-4">
              {["Traffic signal", "Lead direction", "Automation route", "Growth decision"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200">{item}</p>
                    <span className="text-xs text-slate-400">0{index + 1}</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${62 + index * 9}%` }} transition={{ duration: 1.1, delay: index * 0.08 }} className="h-full rounded-full bg-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitFlow() {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: wrapper, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.86], ["0%", "100%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], [120, -220]);

  return (
    <section id="portrait" ref={wrapper} className="relative z-20 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:h-[calc(100svh-8rem)]">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">One portrait narrative</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.055em] text-slate-950 md:text-6xl">
                Satu halaman panjang. Satu background hidup. Satu alur bisnis yang terus bergerak.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Bukan stage yang patah-patah. Pengalaman dibuat mengalir seperti portrait panjang: partikel bergerak, layer berubah, dan konten muncul sebagai bagian dari cerita EXPROSA.
              </p>
            </Reveal>
          </div>

          <div className="relative pl-0 lg:pl-14">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-slate-200 lg:block">
              <motion.div style={{ height: lineHeight }} className="w-px bg-slate-950" />
            </div>
            <motion.div style={{ y: glowY }} className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-white/80 blur-3xl" />

            <div className="space-y-10">
              {metrics.map(([number, title, body], index) => (
                <Reveal key={title}>
                  <div className="rounded-[2.4rem] border border-slate-200 bg-white/72 p-7 shadow-[0_40px_130px_rgba(15,23,42,0.09)] backdrop-blur-2xl lg:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-mono text-sm text-slate-400">{number}</span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Layer</span>
                    </div>
                    <h3 className="mt-10 text-3xl font-medium tracking-[-0.045em] text-slate-950 md:text-5xl">{title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{body}</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[64, 78, 92].map((value, barIndex) => (
                        <div key={`${title}-${barIndex}`} className="rounded-2xl bg-slate-950 p-4 text-white">
                          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Signal 0{barIndex + 1}</p>
                          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${value - index * 4}%` }} viewport={{ once: false }} transition={{ duration: 1 }} className="h-full rounded-full bg-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative z-20 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">What EXPROSA builds</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] text-slate-950 md:text-6xl">Layanan dibuat sebagai layer, bukan daftar menu.</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service}>
              <div className="group min-h-[220px] rounded-[2.2rem] border border-slate-200 bg-white/70 p-7 shadow-[0_35px_120px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-slate-950 hover:text-white">
                <CheckCircle2 className="h-6 w-6" />
                <p className="mt-8 text-2xl font-medium tracking-[-0.04em]">{service}</p>
                <p className="mt-4 text-sm leading-7 text-slate-500 transition group-hover:text-slate-300">Layer 0{index + 1} untuk membangun kepercayaan, data, dan alur kerja digital.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandSection() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section className="relative z-20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Business command layer</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] text-slate-950 md:text-6xl">Tampilan ringan, tapi rasa teknologinya tetap kuat.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">Dashboard, AI response, automation, dan analytics tampil sebagai satu pengalaman visual yang bersih, tidak berisik, tapi tetap terasa premium.</p>
          </div>
        </Reveal>

        <motion.div style={{ rotate, y }} className="rounded-[2.8rem] border border-slate-200 bg-white/78 p-5 shadow-[0_70px_180px_rgba(15,23,42,0.15)] backdrop-blur-2xl">
          <div className="grid gap-4 lg:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative z-20 px-6 pb-12 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[3rem] bg-slate-950 p-8 text-white shadow-[0_80px_220px_rgba(15,23,42,0.24)] lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">Ready to build</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">Bangun wajah digital EXPROSA berikutnya.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">Mulai dari website premium, landing page, WhatsApp AI, dashboard, sampai automation flow untuk bisnis yang ingin terlihat lebih serius.</p>
            <a href="mailto:ifiryanto@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950">
              Diskusi Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f7f2] text-slate-950">
      <ParticleBackground />
      <ScrollOrb />
      <Header />
      <HeroSection />
      <PortraitFlow />
      <ServicesSection />
      <CommandSection />
      <ContactSection />
    </main>
  );
}
