"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Orb() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.35 + pointer.x * 0.3;
      group.current.rotation.x = Math.sin(t * 0.4) * 0.2 - pointer.y * 0.2;
    }
    if (core.current) {
      core.current.rotation.y = t * 0.55;
      core.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.06);
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 4]} intensity={5} color="#67E8F9" />
      <mesh ref={core}>
        <icosahedronGeometry args={[1.2, 4]} />
        <meshStandardMaterial color="#22D3EE" roughness={0.16} metalness={0.7} transparent opacity={0.34} wireframe />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 12, 160]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.4, 0]}>
        <torusGeometry args={[2.85, 0.01, 12, 190]} />
        <meshBasicMaterial color="#6EE7B7" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

export function DepthPresentationSection() {
  return (
    <section id="depth-impact" className="relative z-10 min-h-screen overflow-hidden px-6 py-24 text-white lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.26),transparent_32%),radial-gradient(circle_at_75%_60%,rgba(16,185,129,0.18),transparent_34%),linear-gradient(180deg,rgba(5,6,10,0.04),rgba(5,6,10,0.9))]" />
      <div className="absolute inset-0 premium-grid opacity-25" />

      <div className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Premium Impact Layer</p>
          <h2 className="mt-7 max-w-3xl text-5xl font-black tracking-[-0.07em] md:text-7xl lg:text-8xl">
            Website premium harus terasa mahal sejak scroll pertama.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Visual orbit, kedalaman, statistik, dan business signal agar EXPROSA terlihat seperti partner teknologi.
          </p>
        </div>

        <div className="relative min-h-[680px]">
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.035] shadow-[0_60px_180px_rgba(0,0,0,0.55)] backdrop-blur-xl" />
          <Canvas className="absolute inset-0" camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
            <Orb />
          </Canvas>
          <div className="absolute left-5 top-6 rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-black/35 backdrop-blur-2xl">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-emerald-300">Live Architecture</p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">Digital asset mapped.</h3>
          </div>
          <div className="absolute bottom-6 right-5 rounded-[2rem] border border-cyan-300/25 bg-cyan-300 p-5 text-slate-950 shadow-2xl shadow-cyan-950/35">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] opacity-60">Perception Goal</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">Bukan website template biasa.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
