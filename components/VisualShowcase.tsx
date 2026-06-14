"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { showcaseCards } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function VisualShowcase() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".showcase-card", {
        y: (index) => [-52, 36, -34, 48][index % 4],
        rotate: (index) => [-3, 3.5, -2, 2.5][index % 4],
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".showcase-device", {
        y: -80,
        rotate: -2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section id="showcase" ref={container} className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_20%_76%,rgba(16,185,129,0.16),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Visual System</p>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">
            Bukan web pajangan. Ini pusat kesan pertama bisnis.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-300">
            Gaya Webflow premium bukan soal template mahal. Rasanya muncul dari komposisi, layer, motion, whitespace, dan visual yang punya cerita. Kita ambil itu untuk EXPROSA, bukan copy paste gaya brand orang.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              "Story-first layout",
              "Floating cards",
              "Conversion-ready CTA",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-200 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[760px]">
          <div className="showcase-device absolute left-1/2 top-8 w-[min(100%,520px)] -translate-x-1/2 rounded-[3rem] border border-white/10 bg-[#070a12] p-4 shadow-[0_50px_160px_rgba(0,0,0,0.55)]">
            <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">exprosa.com</span>
              </div>

              <div className="mt-6 rounded-[2rem] bg-cyan-300 p-5 text-slate-950">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Business technology partner</p>
                <h3 className="mt-4 text-4xl font-black tracking-[-0.06em]">Your business needs a digital control room.</h3>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-[1.5rem] bg-white/[0.06] p-4">
                  <div className="h-3 w-1/2 rounded-full bg-white/70" />
                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-white/15" />
                    <div className="h-2 w-5/6 rounded-full bg-white/15" />
                    <div className="h-2 w-3/4 rounded-full bg-white/15" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white/[0.06] p-4">
                  <div className="h-16 rounded-2xl bg-emerald-300/70" />
                  <div className="mt-3 h-2 rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>

          {showcaseCards.map((item, index) => {
            const Icon = item.icon;
            const positions = [
              "left-0 top-0 md:left-3 md:top-4",
              "right-0 top-64 md:right-2 md:top-52",
              "left-2 top-[470px] md:left-8 md:top-[440px]",
              "right-1 top-[610px] md:right-10 md:top-[585px]",
            ];

            return (
              <article
                key={item.title}
                className={`showcase-card absolute z-20 w-[min(86%,310px)] rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl ${positions[index]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-xl shadow-cyan-950/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-black text-slate-500">{item.stat}</span>
                </div>
                <h3 className="mt-10 text-xl font-black tracking-[-0.04em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
