"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Orb() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const points = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);

  const cloud = useMemo(() => {
    const count = 420;
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 1.55 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const p = i * 3;
      data[p] = radius * Math.sin(phi) * Math.cos(theta);
      data[p + 1] = radius * Math.sin(phi) * Math.sin(theta);
      data[p + 2] = radius * Math.cos(phi);
    }
    return data;
  }, []);

  const network = useMemo(() => {
    const nodes = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const r = 2.05 + (i % 3) * 0.24;
      return new THREE.Vector3(Math.cos(a) * r, Math.sin(i * 1.37) * 1.05, Math.sin(a) * r);
    });
    const data = new Float32Array(nodes.length * 2 * 3);
    nodes.forEach((node, i) => {
      const next = nodes[(i + 4) % nodes.length];
      const p = i * 6;
      data[p] = node.x;
      data[p + 1] = node.y;
      data[p + 2] = node.z;
      data[p + 3] = next.x;
      data[p + 4] = next.y;
      data[p + 5] = next.z;
    });
    return data;
  }, []);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.35 + pointer.x * 0.3;
      group.current.rotation.x = Math.sin(t * 0.4) * 0.2 - pointer.y * 0.2;
    }
    if (core.current) {
      core.current.rotation.y = t * 0.55;
      core.current.rotation.x = t * 0.18;
      core.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.06);
    }
    if (points.current) points.current.rotation.y = -t * 0.08;
    if (lines.current) lines.current.rotation.y = t * 0.16;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 4]} intensity={5} color="#67E8F9" />
      <pointLight position={[-3, -2, 3]} intensity={2.4} color="#6EE7B7" />

      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[cloud, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#A5F3FC" transparent opacity={0.7} depthWrite={false} sizeAttenuation />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[network, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#67E8F9" transparent opacity={0.32} />
      </lineSegments>

      <mesh ref={core}>
        <icosahedronGeometry args={[1.1, 4]} />
        <meshStandardMaterial color="#22D3EE" roughness={0.16} metalness={0.7} transparent opacity={0.34} wireframe />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.015, 12, 150]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.82} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.4, 0]}>
        <torusGeometry args={[2.65, 0.01, 12, 170]} />
        <meshBasicMaterial color="#6EE7B7" transparent opacity={0.48} />
      </mesh>
    </group>
  );
}

export function DepthPresentationSection() {
  return (
    <section id="depth-impact" className="relative z-10 overflow-hidden px-6 py-16 text-white lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.28),transparent_32%),radial-gradient(circle_at_75%_60%,rgba(16,185,129,0.2),transparent_34%),linear-gradient(180deg,rgba(5,6,10,0.04),rgba(5,6,10,0.9))]" />
      <div className="absolute inset-0 premium-grid opacity-25" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Premium Impact Layer</p>
          <h2 className="mt-7 max-w-3xl text-5xl font-black tracking-[-0.07em] md:text-7xl lg:text-8xl">
            Website premium harus terasa mahal sejak scroll pertama.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Visual 3D, network cloud, statistik, dan business signal agar EXPROSA terlihat seperti partner teknologi serius.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              ["3D", "Interactive core"],
              ["420+", "Particle cloud"],
              ["12", "Network nodes"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-3xl font-black tracking-[-0.05em] text-cyan-200">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-[610px]">
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
