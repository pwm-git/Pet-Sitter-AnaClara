import { Heart, Home, Camera, Sparkles } from "lucide-react";

const items = [
  { icon: Heart, text: "Cuidado com muito amor" },
  { icon: Home, text: "No conforto da sua casa" },
  { icon: Camera, text: "Fotos e vídeos a cada visita" },
  { icon: Sparkles, text: "Primeira conversa gratuita" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border/60 bg-peach-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-medium text-peach-700 sm:px-6">
        {items.map((it) => (
          <span key={it.text} className="flex items-center gap-2">
            <it.icon size={16} /> {it.text}
          </span>
        ))}
      </div>
    </div>
  );
}
