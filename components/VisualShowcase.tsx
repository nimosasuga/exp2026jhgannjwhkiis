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
        y: (index) => [-34, 28, -24, 34][index % 4],
        rotate: (index) => [-2, 2.5, -1.5, 2][index % 4],
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section id="showcase" ref={container} className="relative overflow-hidden px-6 py-28 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(16,185,129,0.14),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Visual System
          </p>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Bukan web pajangan. Ini pusat kesan pertama bisnis.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-300">
            Gaya Givingli kita ambil pada storytelling, card floating, dan motion. Rasanya tetap EXPROSA: gelap, tajam, premium, dan bisnis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {showcaseCards.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="showcase-card rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">{item.stat}</span>
                </div>
                <h3 className="mt-10 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
