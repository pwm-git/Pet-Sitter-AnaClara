export const HERO_IMAGE = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80";

export const WHATSAPP_URL =
  "https://wa.me/5511996560051?text=" +
  encodeURIComponent("Oi Ana! Vim pela página e queria agendar uma visita para meu pet.");

export const faqData = [
  {
    q: "Você atende em qual região?",
    a: "Atendo exclusivamente o bairro Vila Andrade, em São Paulo. Assim consigo manter agenda enxuta e chegar rápido em cada visita.",
  },
  {
    q: "Quantas visitas por dia são recomendadas?",
    a: "Cães em geral 2 a 3 visitas; gatos, 1 a 2. A gente combina de acordo com a rotina do seu pet.",
  },
  {
    q: "Você fica com as chaves?",
    a: "Sim, com contrato simples e devolução ao fim do período. Também aceito porteiro, cofre ou fechadura digital.",
  },
  {
    q: "E se acontecer uma emergência?",
    a: "Aviso você imediatamente e levo o pet ao veterinário de confiança que combinamos antes das visitas começarem.",
  },
  {
    q: "Como recebo as atualizações?",
    a: "Por WhatsApp, com fotos e vídeos em cada visita, mais um resumo escrito ao final.",
  },
  {
    q: "Você aplica medicação?",
    a: "Sim — administração de medicamentos via oral, tópica e colírio, além de cuidados com pets com necessidades especiais. Cada aplicação vai registrada em foto.",
  },
  {
    q: "Quanto custa?",
    a: "O valor depende do número de visitas e do tempo de cada uma. Me chame no WhatsApp que envio o orçamento em minutos.",
  },
  {
    q: "E se meu pet não gostar de você?",
    a: "A primeira conversa é justamente pra isso. Se não rolar química, sem problema — não contratamos.",
  },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AnimalShelter"],
  "@id": "#ana-clara-pet-sitter",
  name: "Ana Clara Pet Sitter",
  description:
    "Pet Sitter em Vila Andrade. Cuidados personalizados para cães e gatos no conforto da sua casa: visitas diárias, passeios, alimentação, medicação e relatórios com fotos e vídeos a cada visita.",
  image: HERO_IMAGE,
  telephone: "+55-11-99656-0051",
  priceRange: "$$",
  areaServed: [{ "@type": "City", name: "São Paulo" }, "Vila Andrade"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vila Andrade",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
