import { MessageCircle, CalendarCheck, KeyRound, PawPrint, Bell } from "lucide-react";
import { SectionEyebrow } from "./ui";

const steps = [
  {
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    text: "Me conta sobre seu pet e as datas.",
  },
  {
    icon: CalendarCheck,
    title: "Conversa gratuita",
    text: "Presencial ou por vídeo, pra nos conhecermos.",
  },
  {
    icon: KeyRound,
    title: "Fechamos o combinado",
    text: "Chaves, rotina e contatos de emergência.",
  },
  {
    icon: PawPrint,
    title: "Começam as visitas",
    text: "No horário combinado, com registro completo.",
  },
  {
    icon: Bell,
    title: "Você acompanha em tempo real",
    text: "Fotos, vídeos e mensagens a cada visita.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-title" className="bg-peach-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2 id="como-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Simples do primeiro contato à última visita
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl bg-card p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sky-600 font-heading text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon size={22} className="text-peach-700" />
              </div>
              <h3 className="font-heading text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink-700">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
