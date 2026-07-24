import { Heart, MapPin, Sparkles, Camera } from "lucide-react";
import { HERO_IMAGE } from "@/lib/site-data";
import { CtaPrimary, CtaGhost, SectionEyebrow } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)", opacity: 0.35 }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_1fr] md:py-24 md:gap-14">
        <div className="flex flex-col justify-center gap-6">
          <SectionEyebrow>Pet Sitter em Vila Andrade</SectionEyebrow>
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-ink-900">
            Cuidados personalizados para seu pet,{" "}
            <span className="text-sky-800">no conforto da sua casa</span>.
          </h1>
          <p className="max-w-xl text-lg text-ink-700">
            Vai viajar ou passar o dia fora? Seu pet não precisa sair de casa para ser bem cuidado.
            Carinho, atenção e brincadeiras do jeitinho que ele gosta — com fotos e vídeos a cada visita.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaPrimary>Agendar uma visita</CtaPrimary>
            <CtaGhost>Falar com a Ana Clara</CtaGhost>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-ink-700">
            <li className="flex items-center gap-1.5"><Heart size={16} className="fill-peach-500 text-peach-500" /> Seu pet sempre cuidado com muito amor</li>
            <li className="flex items-center gap-1.5"><MapPin size={16} className="text-sky-600" /> Vila Andrade — SP</li>
            <li className="flex items-center gap-1.5"><Sparkles size={16} className="text-sky-600" /> Vagas limitadas</li>
          </ul>
        </div>
        <div className="relative">
          <div
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden shadow-[var(--shadow-lg)]"
            style={{ borderRadius: "58% 42% 55% 45% / 50% 55% 45% 50%" }}
          >
            <img
              src={HERO_IMAGE}
              alt="Ana Clara sorrindo enquanto faz carinho em um cachorro golden"
              width={600}
              height={600}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-[var(--shadow-md)] sm:-left-6">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-peach-100 text-peach-700">
              <Heart size={16} className="fill-peach-500 text-peach-500" />
            </span>
            Apaixonada por pets desde sempre
          </div>
          <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-[var(--shadow-md)] sm:-right-4">
            <Camera size={16} className="text-sky-600" />
            Fotos e vídeos a cada visita
          </div>
        </div>
      </div>
    </section>
  );
}
