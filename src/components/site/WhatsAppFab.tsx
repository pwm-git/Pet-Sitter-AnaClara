import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp com Ana Clara"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_12px_28px_-8px_rgba(22,163,74,0.55)] transition hover:scale-105"
      style={{ background: "oklch(0.65 0.17 155)", animation: "fab-pulse 2s ease-out infinite" }}
    >
      <MessageCircle size={26} strokeWidth={2.25} />
    </a>
  );
}
