"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BarChart3, Bot, DatabaseZap, Globe2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const showcaseCards = [
  {
    title: "Website kredibel",
    text: "Landing dan company profile yang terasa resmi, cepat, dan siap dipakai untuk closing.",
    icon: Globe2,
  },
  {
    title: "Automation engine",
    text: "Alur lead, WhatsApp, form, dan follow up dibuat lebih rapi agar tidak tercecer.",
    icon: Bot,
  },
  {
    title: "Operational dashboard",
    text: "Data kerja, laporan, dan aktivitas bisnis dibawa ke satu pusat kontrol.",
    icon: BarChart3,
  },
  {
    title: "Business database",
    text: "Data pelanggan, transaksi, aset, dan operasional disusun agar bisa tumbuh.",
    icon: DatabaseZap,
  },
];

export function VisualShowcase() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".showcase-card", {
        y: (index) => [-36, 28, -24, 34][index % 4],
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
    <section ref={container} className="relative overflow-hidden px-6 py-28 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(16,185,129,0.14),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Visual System
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            Bukan web pajangan. Ini pusat kesan pertama bisnis.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
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
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
