import { AmbientParticleLayer } from "@/components/AmbientParticleLayer";
import { DepthPresentationSection } from "@/components/DepthPresentationSection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PackageSection } from "@/components/PackageSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProofStrip } from "@/components/ProofStrip";
import { ServiceGrid } from "@/components/ServiceGrid";
import { VisualShowcase } from "@/components/VisualShowcase";
import { jsonLd } from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 noise-overlay opacity-[0.035]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_24%)]" />
      <AmbientParticleLayer />

      <Navbar />
      <Hero />
      <ProofStrip />
      <DepthPresentationSection />
      <ProblemSection />
      <ServiceGrid />
      <VisualShowcase />
      <ProcessSection />
      <PackageSection />
      <DiagnosticSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
