import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart, Home, Camera, Pill, Cat, Sprout, PawPrint, MapPin,
  MessageCircle, CalendarCheck, KeyRound, Bell, Star, ShieldCheck,
  Phone, Instagram, Clock, ChevronDown, Sparkles, Video, Dog,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80";

const WHATSAPP_URL =
  "https://wa.me/5511996560051?text=" +
  encodeURIComponent("Oi Ana! Vim pela página e queria agendar uma visita para meu pet.");

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AnimalShelter"],
  "@id": "#ana-clara-pet-sitter",
  name: "Ana Clara Pet Sitter",
  description:
    "Pet Sitter em Vila Andrade. Cuidados personalizados para cães e gatos no conforto da sua casa: visitas diárias, passeios, alimentação, medicação e relatórios com fotos e vídeos a cada visita.",
  image: HERO_IMAGE,
  telephone: "+55-11-99656-0051",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "São Paulo" },
    "Vila Andrade",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vila Andrade",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "20:00" },
  ],
};


const faqData = [
  { q: "Você atende em qual região?", a: "Atendo exclusivamente o bairro Vila Andrade, em São Paulo. Assim consigo manter agenda enxuta e chegar rápido em cada visita." },
  { q: "Quantas visitas por dia são recomendadas?", a: "Cães em geral 2 a 3 visitas; gatos, 1 a 2. A gente combina de acordo com a rotina do seu pet." },
  { q: "Você fica com as chaves?", a: "Sim, com contrato simples e devolução ao fim do período. Também aceito porteiro, cofre ou fechadura digital." },
  { q: "E se acontecer uma emergência?", a: "Aviso você imediatamente e levo o pet ao veterinário de confiança que combinamos antes das visitas começarem." },
  { q: "Como recebo as atualizações?", a: "Por WhatsApp, com fotos e vídeos em cada visita, mais um resumo escrito ao final." },
  { q: "Você aplica medicação?", a: "Sim — administração de medicamentos via oral, tópica e colírio, além de cuidados com pets com necessidades especiais. Cada aplicação vai registrada em foto." },
  { q: "Quanto custa?", a: "O valor depende do número de visitas e do tempo de cada uma. Me chame no WhatsApp que envio o orçamento em minutos." },
  { q: "E se meu pet não gostar de você?", a: "A primeira conversa é justamente pra isso. Se não rolar química, sem problema — não contratamos." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pet Sitter em Vila Andrade | Ana Clara — Cuidados no Conforto da Sua Casa" },
      { name: "description", content: "Pet Sitter em Vila Andrade: cuidados personalizados para seu pet no conforto da sua casa. Visitas diárias, passeios, medicação e relatórios com fotos e vídeos. Agende no WhatsApp." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Pet Sitter em Vila Andrade | Ana Clara" },
      { property: "og:description", content: "Cuidados personalizados para seu pet, no conforto da sua casa. Vila Andrade — São Paulo." },

      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_IMAGE },
      { property: "og:image:alt", content: "Ana Clara sorrindo enquanto faz carinho em um cachorro golden" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pet Sitter em Vila Andrade | Ana Clara" },
      { name: "twitter:description", content: "Visitas, passeios, alimentação e medicação com fotos e vídeos em tempo real." },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "" },
      { rel: "preload", as: "image", href: HERO_IMAGE, fetchpriority: "high" } as unknown as Record<string, string>,
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
});

/* ---------- Reusable pieces ---------- */

function CtaPrimary({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

function CtaGhost({ children }: { children: React.ReactNode }) {
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-peach-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-peach-700">
      {children}
    </span>
  );
}

/* ---------- Page ---------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink-900">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />
      <main id="conteudo">
        <Hero />
        <TrustBar />
        <Benefits />
        <About />
        <Services />
        <HowItWorks />
        <Differentiators />
        <Testimonials />
        <Coverage />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Header() {
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

function Hero() {
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
            style={{
              borderRadius: "58% 42% 55% 45% / 50% 55% 45% 50%",
            }}
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

function TrustBar() {
  const items = [
    { icon: Heart, text: "Cuidado com muito amor" },
    { icon: Home, text: "No conforto da sua casa" },
    { icon: Camera, text: "Fotos e vídeos a cada visita" },
    { icon: Sparkles, text: "Primeira conversa gratuita" },
  ];

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

function Benefits() {
  const items = [
    { icon: Home, title: "Ele fica na rotina dele.", text: "Mesma cama, mesmo cheiro, mesmo pote. Menos ansiedade, mais bem-estar." },
    { icon: Video, title: "Você viaja tranquilo.", text: "Fotos e vídeos em cada visita mostram exatamente como seu pet está agora." },
    { icon: Heart, title: "Cuidado individual.", text: "Sem grupos, sem canis lotados. É só o seu pet recebendo atenção de verdade." },
    { icon: Sprout, title: "Sua casa também ganha.", text: "Plantas regadas, luzes alternadas, correspondência guardada. Casa cuidada, pet feliz." },
    { icon: Pill, title: "Medicação na hora certa.", text: "Insulina, antibiótico, colírio — tudo com registro e foto de cada aplicação." },
    { icon: Cat, title: "Gatos amam ficar em casa.", text: "Nada de transporte, nada de território novo. Só a Ana chegando com carinho." },
  ];
  return (
    <section aria-labelledby="beneficios-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Benefícios</SectionEyebrow>
          <h2 id="beneficios-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Por que uma Pet Sitter é melhor do que deixar seu pet sozinho
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <article
              key={b.title}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-peach-100 text-peach-700 transition group-hover:bg-sky-50 group-hover:text-sky-600">
                <b.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink-900">{b.title}</h3>
              <p className="mt-2 text-ink-700">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section aria-labelledby="sobre-title" className="bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="relative order-2 md:order-1">
          <div
            className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden shadow-[var(--shadow-lg)]"
            style={{ borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%" }}
          >
            <img
              src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80"
              alt="Retrato da Ana Clara segurando um gato ruivo com carinho"
              width={600}
              height={750}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 flex flex-col gap-5 md:order-2">
          <SectionEyebrow>Sobre</SectionEyebrow>
          <h2 id="sobre-title" className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Oi, eu sou a Ana Clara
          </h2>
          <p className="text-ink-700">
            Sou tutora de pets e apaixonada por animais desde sempre. Transformei esse amor
            em cuidado profissional para os tutores da Vila Andrade que precisam viajar,
            trabalhar fora ou apenas garantir mais companhia para o pet durante o dia.
          </p>
          <p className="text-ink-700">
            Cada visita minha começa com uma coisa simples: entender o seu pet. Ele é tímido?
            Come devagar? Adora bola? Prefere brincar na área pet ou na rua? Anoto tudo,
            respeito o ritmo dele e mando pra você o registro de cada momento.
          </p>
          <p className="text-ink-700">
            Trabalho com poucos tutores por semana pra manter esse cuidado próximo e
            personalizado. Se você me contrata, você fala comigo — direto, sempre.
          </p>
          <p className="text-script text-3xl leading-none text-peach-700">Ana Clara</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm">
            <li className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm"><Heart size={14} className="text-peach-700" /> Tutora de pets</li>
            <li className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm"><PawPrint size={14} className="text-sky-600" /> Cuidado individual</li>
            <li className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink-700 shadow-sm"><MapPin size={14} className="text-sky-600" /> Vila Andrade — SP</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      icon: Dog,
      title: "Para cães",
      accent: "bg-peach-100 text-peach-700",
      items: [
        "Passeio de 30 ou 60 minutos",
        "Alimentação e água fresca",
        "Brincadeira e companhia",
        "Xixi e cocô recolhidos",
        "Registro em fotos e vídeos",
      ],
    },
    {
      icon: Cat,
      title: "Para gatos",
      accent: "bg-sky-50 text-sky-600",
      items: [
        "Alimentação úmida e seca",
        "Troca de água filtrada",
        "Higiene da caixa de areia",
        "Brincadeira no ritmo dele",
        "Registro em fotos e vídeos",
      ],
    },
    {
      icon: Pill,
      title: "Extras inclusos",
      accent: "bg-peach-100 text-peach-700",
      items: [
        "Administração de medicamentos",
        "Cuidados com pets com necessidades especiais",
        "Cuidado com pets idosos",
        "Passeios na área pet ou na rua",
        "Relatório com fotos e vídeos ao final",
      ],

      featured: true,
    },
  ];
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Serviços</SectionEyebrow>
          <h2 id="servicos-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            O que está incluso em cada visita
          </h2>
          <p className="mt-3 text-ink-700">
            Cuidado personalizado para o ritmo, temperamento e necessidades do seu pet.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className={`rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)] ${c.featured ? "ring-2 ring-sky-400" : ""}`}
            >
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${c.accent}`}>
                <c.icon size={26} strokeWidth={2} />
              </div>
              <h3 className="font-heading text-xl font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5 text-ink-700">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaPrimary>Quero cuidar do meu pet assim</CtaPrimary>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: MessageCircle, title: "Você chama no WhatsApp", text: "Me conta sobre seu pet e as datas." },
    { icon: CalendarCheck, title: "Conversa gratuita", text: "Presencial ou por vídeo, pra nos conhecermos." },
    { icon: KeyRound, title: "Fechamos o combinado", text: "Chaves, rotina e contatos de emergência." },
    { icon: PawPrint, title: "Começam as visitas", text: "No horário combinado, com registro completo." },
    { icon: Bell, title: "Você acompanha em tempo real", text: "Fotos, vídeos e mensagens a cada visita." },
  ];
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

function Differentiators() {
  const items = [
    { icon: Heart, title: "Atendimento humanizado", text: "Você fala comigo, sempre.", span: "md:col-span-2" },
    { icon: Bell, title: "Comunicação em tempo real", text: "Nada de esperar o fim do dia pra saber do seu pet.", span: "" },
    { icon: Camera, title: "Fotos e vídeos em toda visita", text: "Sem exceção.", span: "" },
    { icon: PawPrint, title: "Cuidado individualizado", text: "Poucos tutores por semana.", span: "" },
    { icon: ShieldCheck, title: "Confiança e transparência", text: "Combinado claro, referências e contrato simples desde a primeira conversa.", span: "md:col-span-2" },
  ];
  return (
    <section aria-labelledby="dif-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Diferenciais</SectionEyebrow>
          <h2 id="dif-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            O que faz o meu cuidado ser diferente
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((d) => (
            <article
              key={d.title}
              className={`rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)] ${d.span}`}
            >
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-600">
                <d.icon size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold">{d.title}</h3>
              <p className="mt-1.5 text-ink-700">{d.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaPrimary>Agendar a primeira conversa (gratuita)</CtaPrimary>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Marina R.", where: "Vila Andrade", pet: "Théo, golden", text: "Viajei 10 dias tranquila pela primeira vez. A Ana mandava vídeo do Théo na janela e eu já sabia que estava tudo bem." },
    { name: "Ricardo T.", where: "Panamby", pet: "Luna, siamesa", text: "Meu gato é ansioso e não aceita hotel. A Ana entrou na casa dele com um respeito que eu nunca vi. Virou parte da família." },
    { name: "Cláudia M.", where: "Morumbi", pet: "Bidu, dachshund idoso", text: "Ela aplica insulina no meu Bidu duas vezes ao dia com foto de cada aplicação. Confio de olhos fechados." },
  ];
  return (
    <section id="depoimentos" aria-labelledby="dep-title" className="bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <h2 id="dep-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            O que os tutores da região dizem
          </h2>
          <p className="mt-3 text-sm text-ink-500">
            Depoimentos ilustrativos — serão substituídos por clientes reais.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-[var(--shadow-sm)]"
            >
              <div className="mb-3 flex gap-1 text-peach-500" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <blockquote className="text-ink-700">“{t.text}”</blockquote>
              <figcaption className="mt-5 border-t border-border/60 pt-4 text-sm">
                <div className="font-semibold text-ink-900">{t.name}</div>
                <div className="text-ink-500">{t.where} · tutor(a) de {t.pet}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const bairros = ["Vila Andrade", "Morumbi", "Panamby", "Real Parque", "Jardim Ampére", "Jardim Colombo", "Vila Suzana", "Paraisópolis (região)"];
  return (
    <section aria-labelledby="cob-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionEyebrow>Cobertura</SectionEyebrow>
        <h2 id="cob-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
          Atendo com carinho em toda a região
        </h2>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {bairros.map((b) => (
            <li key={b} className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-ink-700 shadow-sm">
              <MapPin size={14} className="text-sky-600" /> {b}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaGhost>Ver se atende meu bairro</CtaGhost>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-peach-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
          <h2 id="faq-title" className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">
            Antes de agendar, você pode querer saber
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqData.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-sm)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-base font-semibold text-ink-900 transition hover:bg-sky-50"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-sky-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="border-t border-border/60 px-5 py-4 text-ink-700">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
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

function Footer() {
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
            Cuidado com carinho em Vila Andrade e região. Pet Sitter profissional, com formação
            em comportamento animal e primeiros socorros pet.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900">Contato</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li className="flex items-center gap-2"><Phone size={14} className="text-sky-600" /> <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-sky-800">(11) 9XXXX-XXXX</a></li>
            <li className="flex items-center gap-2"><Instagram size={14} className="text-sky-600" /> <a href="https://instagram.com/anaclara.petsitter" target="_blank" rel="noopener" className="hover:text-sky-800">@anaclara.petsitter</a></li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-sky-600" /> Vila Andrade, São Paulo — SP</li>
            <li className="flex items-center gap-2"><Clock size={14} className="text-sky-600" /> Seg–Sáb, 8h às 20h</li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900">Serviços</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li>Pet Sitter para cães</li>
            <li>Pet Sitter para gatos</li>
            <li>Passeios em Vila Andrade</li>
            <li>Administração de medicação</li>
            <li>Cuidado com pets idosos</li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-ink-900">Bairros atendidos</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li>Vila Andrade · Morumbi</li>
            <li>Panamby · Real Parque</li>
            <li>Jardim Ampére · Jardim Colombo</li>
            <li>Vila Suzana</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-ink-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Ana Clara Pet Sitter. Feito com carinho.</p>
          <p className="flex items-center gap-1">Cuidando de pets em Vila Andrade <Heart size={12} className="fill-peach-500 text-peach-500" /></p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
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
