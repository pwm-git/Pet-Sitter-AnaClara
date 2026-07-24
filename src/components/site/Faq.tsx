import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/lib/site-data";
import { SectionEyebrow } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-peach-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
          <h2 id="faq-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Antes de agendar, você pode querer saber
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqData.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-sm)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-base font-semibold text-ink-900 transition hover:bg-sky-50"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-sky-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="border-t border-border/60 px-5 py-4 text-ink-700">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
