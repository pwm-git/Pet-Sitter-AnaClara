import { PawPrint, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_82%,transparent)] border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-heading text-lg font-bold text-ink-900">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-peach-100 text-peach-700">
            <PawPrint size={18} />
          </span>
          <span>Ana Clara <span className="hidden text-ink-500 sm:inline">· Pet Sitter</span></span>
        </a>
        <nav aria-label="Navegação principal" className="hidden gap-6 text-sm font-medium text-ink-700 md:flex">
          <a href="#servicos" className="hover:text-sky-800">Serviços</a>
          <a href="#como-funciona" className="hover:text-sky-800">Como funciona</a>
          <a href="#depoimentos" className="hover:text-sky-800">Depoimentos</a>
          <a href="#faq" className="hover:text-sky-800">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </header>
  );
}
