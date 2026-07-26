import { Heart, PawPrint, MapPin } from "lucide-react";
import { SectionEyebrow } from "./ui";

export function About() {
  return (
    <section aria-labelledby="sobre-title" className="bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col gap-5">
          <SectionEyebrow>Sobre</SectionEyebrow>
          <h2 id="sobre-title" className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Oi, eu sou a Maria
          </h2>
          <p className="text-ink-700">
            Sou tutora de pets e apaixonada por animais desde sempre. Transformei esse amor em
            cuidado profissional para os tutores da Vila Andrade que precisam viajar, trabalhar fora
            ou apenas garantir mais companhia para o pet durante o dia.
          </p>
          <p className="text-ink-700">
            Cada visita minha começa com uma coisa simples: entender o seu pet. Ele é tímido? Come
            devagar? Adora bola? Prefere brincar na área pet ou na rua? Anoto tudo, respeito o ritmo
            dele e mando pra você o registro de cada momento.
          </p>
          <p className="text-ink-700">
            Trabalho com poucos tutores por semana pra manter esse cuidado próximo e personalizado.
            Se você me contrata, você fala comigo — direto, sempre.
          </p>
          <p className="text-script text-3xl leading-none text-peach-700">Maria</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm">
            <li className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm">
              <Heart size={14} className="text-peach-700" /> Tutora de pets
            </li>
            <li className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm">
              <PawPrint size={14} className="text-sky-600" /> Cuidado individual
            </li>
            <li className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm">
              <MapPin size={14} className="text-sky-600" /> Vila Andrade — SP
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
