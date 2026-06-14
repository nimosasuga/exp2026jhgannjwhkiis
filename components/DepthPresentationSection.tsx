"use client";

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
            Kita pakai visual orbit, depth card, statistik, dan business signal agar EXPROSA terlihat seperti partner teknologi, bukan landing page template.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["3D Look", "Trust Flow", "AI Ready"].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-2xl font-black text-cyan-200">{item}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Business perception</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[680px]">
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.035] shadow-[0_60px_180px_rgba(0,0,0,0.55)] backdrop-blur-xl" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-cyan-200/25 bg-[radial-gradient(circle,rgba(34,211,238,0.24),rgba(16,185,129,0.1)_45%,transparent_72%)] shadow-[0_0_170px_rgba(34,211,238,0.18)]" />
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-dashed border-white/20" />
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-cyan-300/10 blur-sm" />

          <div className="absolute left-5 top-6 w-[min(88%,320px)] rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-black/35 backdrop-blur-2xl">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-emerald-300">Live Architecture</p>
            <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">Digital asset mapped.</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">Website, lead, WhatsApp, dan automation disusun sebagai satu alur.</p>
          </div>

          <div className="absolute bottom-6 right-5 w-[min(88%,340px)] rounded-[2rem] border border-cyan-300/25 bg-cyan-300 p-5 text-slate-950 shadow-2xl shadow-cyan-950/35">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] opacity-60">Perception Goal</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">Bukan website template biasa.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
