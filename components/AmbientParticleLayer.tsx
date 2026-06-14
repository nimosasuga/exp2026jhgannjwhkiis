"use client";

import { useEffect, useRef } from "react";

export function AmbientParticleLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let scroll = window.scrollY;

    type Dot = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      depth: number;
    };

    let dots: Dot[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const total = width < 768 ? 34 : 64;
      dots = Array.from({ length: total }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.6 + 0.7,
        depth: Math.random() * 0.8 + 0.2,
      }));
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };

    const draw = () => {
      const scrollPower = Math.min(scroll / 1800, 1);
      context.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        dot.x += dot.vx * (1 + scrollPower * 2) + Math.sin(scroll * 0.001 + dot.depth) * 0.07;
        dot.y += dot.vy * (1 + scrollPower * 2) + Math.cos(scroll * 0.001 + dot.depth) * 0.07;

        if (dot.x < -20) dot.x = width + 20;
        if (dot.x > width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = height + 20;
        if (dot.y > height + 20) dot.y = -20;
      });

      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const a = dots[i];
          const b = dots[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          const limit = 118 + scrollPower * 54;
          if (distance < limit) {
            context.strokeStyle = `rgba(103,232,249,${(1 - distance / limit) * 0.12})`;
            context.lineWidth = 0.55;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      dots.forEach((dot) => {
        context.fillStyle = `rgba(236,254,255,${0.24 + dot.depth * 0.28})`;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size * (1 + scrollPower * 0.5), 0, Math.PI * 2);
        context.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-50 mix-blend-screen" aria-hidden="true" />;
}
