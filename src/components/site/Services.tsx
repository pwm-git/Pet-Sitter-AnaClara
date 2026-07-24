import { Dog, Cat, Pill } from "lucide-react";
import { CtaPrimary, SectionEyebrow } from "./ui";

const cards = [
  {
    icon: Dog,
    title: "Para cães",
    accent: "bg-peach-100 text-peach-700",
    items: [
      "Passeio de 30 ou 60 minutos",
      "Alimentação e água fresca",
      "Brincadeira e companhia",
      "Xixi e cocô recolhidos",
      "Registro em fotos e vídeos",
    ],
  },
  {
    icon: Cat,
    title: "Para gatos",
    accent: "bg-sky-50 text-sky-600",
    items: [
      "Alimentação úmida e seca",
      "Troca de água filtrada",
      "Higiene da caixa de areia",
      "Brincadeira no ritmo dele",
      "Registro em fotos e vídeos",
    ],
  },
  {
    icon: Pill,
    title: "Extras inclusos",
    accent: "bg-peach-100 text-peach-700",
    items: [
      "Administração de medicamentos",
      "Cuidados com pets com necessidades especiais",
      "Cuidado com pets idosos",
      "Passeios na área pet ou na rua",
      "Relatório com fotos e vídeos ao final",
    ],
    featured: true,
  },
];

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Serviços</SectionEyebrow>
          <h2 id="servicos-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            O que está incluso em cada visita
          </h2>
          <p className="mt-3 text-ink-700">
            Cuidado personalizado para o ritmo, temperamento e necessidades do seu pet.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elev ${c.featured ? "ring-2 ring-sky-400" : ""}`}
            >
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${c.accent}`}>
                <c.icon size={26} strokeWidth={2} />
              </div>
              <h3 className="font-heading text-xl font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5 text-ink-700">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaPrimary>Quero cuidar do meu pet assim</CtaPrimary>
        </div>
      </div>
    </section>
  );
}
