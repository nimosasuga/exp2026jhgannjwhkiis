import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <AnimatedSection id="faq" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <SectionHeader
        eyebrow="FAQ"
        title="Pertanyaan yang biasanya muncul sebelum bisnis mulai serius digital."
        align="center"
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 open:border-cyan-300/30 open:bg-white/[0.08]"
          >
            <summary className="cursor-pointer list-none text-lg font-black text-white marker:hidden">
              <span className="flex items-center justify-between gap-5">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-300 transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-5 text-sm leading-7 text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </AnimatedSection>
  );
}
