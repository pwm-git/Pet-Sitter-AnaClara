import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-data";

export function CtaPrimary({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] ${className}`}
    >
      <MessageCircle size={20} strokeWidth={2.25} />
      {children}
    </a>
  );
}

export function CtaGhost({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-600 px-6 py-3.5 text-base font-semibold text-sky-800 transition-all hover:bg-sky-50"
    >
      {children}
    </a>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-peach-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-peach-700">
      {children}
    </span>
  );
}
