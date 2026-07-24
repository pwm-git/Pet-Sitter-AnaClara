import { Star } from "lucide-react";
import { SectionEyebrow } from "./ui";

const items = [
  { name: "Marina R.", where: "Vila Andrade", pet: "Théo, golden", text: "Viajei 10 dias tranquila pela primeira vez. A Ana mandava vídeo do Théo na janela e eu já sabia que estava tudo bem." },
  { name: "Ricardo T.", where: "Vila Andrade", pet: "Luna, siamesa", text: "Meu gato é ansioso e não aceita hotel. A Ana entrou na casa dele com um respeito que eu nunca vi. Virou parte da família." },
  { name: "Cláudia M.", where: "Vila Andrade", pet: "Bidu, dachshund idoso", text: "Ela cuida da medicação do meu Bidu com foto de cada aplicação. Confio de olhos fechados." },
];

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="dep-title" className="bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <h2 id="dep-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            O que os tutores da região dizem
          </h2>
          <p className="mt-3 text-sm text-ink-500">
            Depoimentos ilustrativos — serão substituídos por clientes reais.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-[var(--shadow-sm)]">
              <div className="mb-3 flex gap-1 text-peach-500" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <blockquote className="text-ink-700">“{t.text}”</blockquote>
              <figcaption className="mt-5 border-t border-border/60 pt-4 text-sm">
                <div className="font-semibold text-ink-900">{t.name}</div>
                <div className="text-ink-500">{t.where} · tutor(a) de {t.pet}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
