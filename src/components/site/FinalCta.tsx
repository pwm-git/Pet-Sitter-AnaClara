import { MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-20 sm:px-6 sm:py-28">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-8 py-16 text-center text-white shadow-[var(--shadow-lg)] sm:px-14"
        style={{ background: "linear-gradient(135deg, oklch(0.6 0.16 240) 0%, oklch(0.78 0.13 28) 100%)" }}
      >
        <h2 id="cta-title" className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold">
          Seu pet merece continuar em casa, cercado do que ele conhece.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">
          Vagas limitadas por semana pra manter o cuidado individual. Me chame agora e vamos
          combinar a primeira conversa — sem compromisso.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-sky-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:bg-peach-50"
          >
            <MessageCircle size={20} /> Agendar pelo WhatsApp
          </a>
        </div>
        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-white/85">
          <span className="flex items-center gap-1.5"><Clock size={14} /> Respondo em até 30 minutos</span>
          <span>·</span>
          <span>Seg a sáb, 8h às 20h</span>
        </p>
      </div>
    </section>
  );
}
