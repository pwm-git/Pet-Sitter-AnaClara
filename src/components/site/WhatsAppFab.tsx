import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp com Ana Clara"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-fab transition hover:scale-105 animate-fab-pulse"
    >
      <MessageCircle size={26} strokeWidth={2.25} />
    </a>
  );
}
