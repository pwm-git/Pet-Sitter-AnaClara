import { PawPrint, Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-heading text-lg font-bold text-ink-900">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-peach-100 text-peach-700">
              <PawPrint size={18} />
            </span>
            Ana Clara
          </div>
          <p className="mt-3 text-sm text-ink-700">
            Cuidados personalizados para seu pet, no conforto da sua casa. Atendimento exclusivo em
            Vila Andrade — São Paulo.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900">Contato</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-sky-600" />{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-sky-800">
                (11) 99656-0051
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="text-sky-600" />{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-sky-800">
                Agendar pelo WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-sky-600" /> Vila Andrade, São Paulo — SP
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-sky-600" /> Seg–Sáb, 8h às 20h
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900">Serviços</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li>Visitas diárias</li>
            <li>Passeios e brincadeiras</li>
            <li>Cuidados com a saúde</li>
            <li>Administração de medicamentos</li>
            <li>Acompanhamento e relatórios</li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900">Área de atendimento</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-sky-600" /> Vila Andrade
            </li>
            <li className="text-ink-500">
              Atendimento exclusivo no bairro para manter o cuidado próximo.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-ink-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()}<a>contatobom.com</a></p>
          <p className="flex items-center gap-1">
            Cuidando de pets em Vila Andrade{" "}
            <Heart size={12} className="fill-peach-500 text-peach-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
