import { Heart, Bell, Camera, PawPrint, ShieldCheck } from "lucide-react";
import { CtaPrimary, SectionEyebrow } from "./ui";

const items = [
  {
    icon: Heart,
    title: "Atendimento humanizado",
    text: "Você fala comigo, sempre.",
    span: "md:col-span-2",
  },
  {
    icon: Bell,
    title: "Comunicação em tempo real",
    text: "Nada de esperar o fim do dia pra saber do seu pet.",
    span: "",
  },
  { icon: Camera, title: "Fotos e vídeos em toda visita", text: "Sem exceção.", span: "" },
  {
    icon: PawPrint,
    title: "Cuidado individualizado",
    text: "Poucos tutores por semana.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Confiança e transparência",
    text: "Combinado claro, referências e contrato simples desde a primeira conversa.",
    span: "md:col-span-2",
  },
];

export function Differentiators() {
  return (
    <section aria-labelledby="dif-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Diferenciais</SectionEyebrow>
          <h2 id="dif-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            O que faz o meu cuidado ser diferente
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((d) => (
            <article
              key={d.title}
              className={`rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elev ${d.span}`}
            >
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-600">
                <d.icon size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold">{d.title}</h3>
              <p className="mt-1.5 text-ink-700">{d.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaPrimary>Agendar a primeira conversa (gratuita)</CtaPrimary>
        </div>
      </div>
    </section>
  );
}
