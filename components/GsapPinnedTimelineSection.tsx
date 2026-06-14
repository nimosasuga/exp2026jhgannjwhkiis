"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Bot, Gauge, Layers3, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const frames = [
  {
    icon: Gauge,
    word: "READ",
    label: "01 / SIGNAL",
    title: "Masalah bisnis dibaca sebagai sinyal.",
    body: "Kita petakan titik macet: pengunjung bingung, follow up lambat, data tercecer, dan proses manual yang menghambat pertumbuhan.",
  },
  {
    icon: Layers3,
    word: "LINK",
    label: "02 / LAYER",
    title: "Setiap aset digital saling terhubung.",
    body: "Website, WhatsApp, form, dashboard, dan automation tidak berdiri sendiri. Semuanya masuk ke satu alur bisnis.",
  },
  {
    icon: Workflow,
    word: "FLOW",
    label: "03 / MOTION",
    title: "Alur bergerak dari klik ke keputusan.",
    body: "Pengunjung melihat, percaya, klik, bicara, lalu masuk ke proses yang bisa dilacak dan diperbaiki.",
  },
  {
    icon: Bot,
    word: "RUN",
    label: "04 / ENGINE",
    title: "Bagian repetitif mulai dikendalikan mesin.",
    body: "Otomasi mempercepat respon, mengurangi kerja ulang, dan membuat bisnis lebih siap tumbuh.",
  },
];

export function GsapPinnedTimelineSection() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = container.current;
      if (!root) return;

      const q = gsap.utils.selector(root);

      gsap.set(q(".pin-word"), { autoAlpha: 0, y: 60, filter: "blur(18px)" });
      gsap.set(q(".pin-title"), { autoAlpha: 0, y: 42 });
      gsap.set(q(".pin-body"), { autoAlpha: 0, y: 26 });
      gsap.set(q(".pin-card"), {
        autoAlpha: 0.22,
        scale: 0.78,
        y: 150,
        rotateX: 28,
        rotateY: -22,
        transformPerspective: 1400,
      });
      gsap.set(q(".pin-word-0"), { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(q(".pin-title-0"), { autoAlpha: 1, y: 0 });
      gsap.set(q(".pin-body-0"), { autoAlpha: 1, y: 0 });
      gsap.set(q(".pin-card-0"), {
        autoAlpha: 1,
        scale: 1.05,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        zIndex: 20,
      });
      gsap.set(q(".pin-beam"), { strokeDashoffset: 1100 });
      gsap.set(q(".pin-progress"), { height: "0%" });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=4200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(q(".pin-beam"), { strokeDashoffset: 0, duration: 4, ease: "none" }, 0);
      timeline.to(q(".pin-progress"), { height: "100%", duration: 4, ease: "none" }, 0);
      timeline.to(q(".pin-orbit"), { rotate: 420, scale: 1.22, y: -70, duration: 4, ease: "none" }, 0);
      timeline.to(q(".pin-grid"), { x: -140, y: 80, scale: 1.12, duration: 4, ease: "none" }, 0);
      timeline.to(q(".pin-glow"), { x: 220, y: -120, scale: 1.85, duration: 4, ease: "none" }, 0);
      timeline.to(q(".pin-noise-ring"), { rotate: -280, scale: 1.16, duration: 4, ease: "none" }, 0);

      frames.forEach((_, index) => {
        if (index === 0) return;
        const previous = index - 1;
        const label = index;

        timeline.to(
          q(`.pin-word-${previous}`),
          { autoAlpha: 0, y: -56, filter: "blur(16px)", duration: 0.32 },
          label,
        );
        timeline.to(q(`.pin-title-${previous}`), { autoAlpha: 0, y: -34, duration: 0.28 }, label);
        timeline.to(q(`.pin-body-${previous}`), { autoAlpha: 0, y: -24, duration: 0.28 }, label);
        timeline.to(
          q(`.pin-card-${previous}`),
          {
            autoAlpha: 0.18,
            scale: 0.72,
            y: -145,
            rotateX: -24,
            rotateY: previous % 2 === 0 ? 25 : -25,
            zIndex: 1,
            duration: 0.52,
          },
          label,
        );

        timeline.fromTo(
          q(`.pin-word-${index}`),
          { autoAlpha: 0, y: 70, filter: "blur(20px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.42 },
          label + 0.04,
        );
        timeline.fromTo(
          q(`.pin-title-${index}`),
          { autoAlpha: 0, y: 48 },
          { autoAlpha: 1, y: 0, duration: 0.42 },
          label + 0.08,
        );
        timeline.fromTo(
          q(`.pin-body-${index}`),
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.42 },
          label + 0.12,
        );
        timeline.to(
          q(`.pin-card-${index}`),
          {
            autoAlpha: 1,
            scale: 1.05,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            zIndex: 20,
            duration: 0.58,
          },
          label + 0.02,
        );
        timeline.to(
          q(`.pin-dot-${index}`),
          { scale: 2.25, opacity: 1, duration: 0.3 },
          label + 0.02,
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === root) trigger.kill();
        });
      };
    },
    { scope: container },
  );

  return (
    <section ref={container} id="gsap-pinned-timeline" className="relative z-10 min-h-screen overflow-hidden px-6 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_72%_58%,rgba(16,185,129,0.15),transparent_34%),linear-gradient(180deg,rgba(5,6,10,0.1),rgba(5,6,10,0.82))]" />
      <div className="pin-grid absolute inset-0 opacity-35 premium-grid" />
      <div className="pin-glow absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path
          className="pin-beam"
          d="M250 520 C 450 160, 750 720, 990 410 S 1230 300, 1350 560"
          fill="none"
          stroke="rgba(103,232,249,0.58)"
          strokeWidth="1.6"
          strokeDasharray="1100"
          strokeDashoffset="1100"
        />
        <path
          className="pin-beam"
          d="M250 520 C 450 160, 750 720, 990 410 S 1230 300, 1350 560"
          fill="none"
          stroke="rgba(16,185,129,0.22)"
          strokeWidth="14"
          strokeDasharray="14 34"
          strokeDashoffset="1100"
        />
      </svg>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 py-20 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">
            <ArrowUpRight className="h-4 w-4" />
            GSAP Pinned Timeline
          </div>

          <div className="relative mt-8 min-h-[310px] overflow-hidden">
            {frames.map((frame, index) => (
              <div key={frame.word} className="absolute inset-x-0 top-0">
                <p className={`pin-word pin-word-${index} font-mono text-[clamp(4.5rem,15vw,12rem)] font-black leading-none tracking-[-0.12em] text-white/10`}>
                  {frame.word}
                </p>
                <h2 className={`pin-title pin-title-${index} -mt-10 max-w-2xl text-balance text-4xl font-black tracking-[-0.055em] text-white md:text-6xl`}>
                  {frame.title}
                </h2>
                <p className={`pin-body pin-body-${index} mt-6 max-w-xl text-lg leading-8 text-slate-300`}>
                  {frame.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="relative h-40 w-1 overflow-hidden rounded-full bg-white/10">
              <div className="pin-progress absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-cyan-200 via-emerald-300 to-white" />
            </div>
            <div className="grid gap-3">
              {frames.map((frame, index) => (
                <div key={frame.label} className="font-mono text-xs font-black uppercase tracking-[0.22em] text-white/40">
                  {frame.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[720px] [perspective:1500px]">
          <div className="pin-orbit absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/25 bg-[radial-gradient(circle,rgba(34,211,238,0.2),rgba(16,185,129,0.08)_45%,transparent_72%)] shadow-[0_0_170px_rgba(34,211,238,0.16)]">
            <div className="pin-noise-ring absolute inset-8 rounded-full border border-dashed border-white/15" />
            <div className="absolute inset-24 rounded-full border border-white/10" />
            <div className="absolute inset-40 rounded-full border border-cyan-200/10" />
            {frames.map((frame, index) => (
              <div
                key={frame.label}
                className={`pin-dot-${index} absolute h-3.5 w-3.5 rounded-full bg-cyan-200 opacity-45 shadow-[0_0_30px_rgba(103,232,249,0.65)]`}
                style={{
                  left: `${48 + Math.cos((index / frames.length) * Math.PI * 2) * 42}%`,
                  top: `${48 + Math.sin((index / frames.length) * Math.PI * 2) * 42}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-20 h-[720px] [transform-style:preserve-3d]">
            {frames.map((frame, index) => {
              const Icon = frame.icon;
              const positions = [
                "left-0 top-8 md:left-4 md:top-8",
                "right-0 top-[150px] md:right-8 md:top-[145px]",
                "left-2 top-[310px] md:left-10 md:top-[315px]",
                "right-2 top-[485px] md:right-10 md:top-[500px]",
              ];

              return (
                <article
                  key={frame.label}
                  className={`pin-card pin-card-${index} absolute w-[min(92%,390px)] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.075] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl [transform-style:preserve-3d] ${positions[index]}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-200">{frame.label}</p>
                      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{frame.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{frame.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
