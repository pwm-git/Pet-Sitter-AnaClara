import { Home, Video, Heart, Sprout, Pill, Cat } from "lucide-react";
import { SectionEyebrow } from "./ui";

const items = [
  {
    icon: Home,
    title: "Ele fica na rotina dele.",
    text: "Mesma cama, mesmo cheiro, mesmo pote. Menos ansiedade, mais bem-estar.",
  },
  {
    icon: Video,
    title: "Você viaja tranquilo.",
    text: "Fotos e vídeos em cada visita mostram exatamente como seu pet está agora.",
  },
  {
    icon: Heart,
    title: "Cuidado individual.",
    text: "Sem grupos, sem canis lotados. É só o seu pet recebendo atenção de verdade.",
  },
  {
    icon: Sprout,
    title: "Sua casa também ganha.",
    text: "Plantas regadas, luzes alternadas, correspondência guardada. Casa cuidada, pet feliz.",
  },
  {
    icon: Pill,
    title: "Medicação na hora certa.",
    text: "Insulina, antibiótico, colírio — tudo com registro e foto de cada aplicação.",
  },
  {
    icon: Cat,
    title: "Gatos amam ficar em casa.",
    text: "Nada de transporte, nada de território novo. Só a Ana chegando com carinho.",
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="beneficios-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Benefícios</SectionEyebrow>
          <h2 id="beneficios-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Por que uma Pet Sitter é melhor do que deixar seu pet sozinho
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <article
              key={b.title}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-peach-100 text-peach-700 transition group-hover:bg-sky-50 group-hover:text-sky-600">
                <b.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900">{b.title}</h3>
              <p className="mt-2 text-ink-700">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
