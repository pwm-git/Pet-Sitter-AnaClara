import { MapPin } from "lucide-react";
import { CtaGhost, SectionEyebrow } from "./ui";

export function Coverage() {
  return (
    <section aria-labelledby="cob-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionEyebrow>Cobertura</SectionEyebrow>
        <h2 id="cob-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Atendo exclusivamente a Vila Andrade
        </h2>
        <p className="mt-4 text-ink-700">
          Trabalho só no bairro pra conseguir chegar rápido, manter a agenda enxuta e
          oferecer um cuidado realmente próximo a cada pet e a cada tutor.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          <li className="flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-base font-semibold text-ink-900 shadow-sm">
            <MapPin size={16} className="text-sky-600" /> Vila Andrade — São Paulo, SP
          </li>
        </ul>
        <div className="mt-10">
          <CtaGhost>Confirmar disponibilidade na Vila Andrade</CtaGhost>
        </div>
      </div>
    </section>
  );
}
