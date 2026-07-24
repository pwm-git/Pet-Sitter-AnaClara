import { createFileRoute } from "@tanstack/react-router";
import { HERO_IMAGE, localBusinessJsonLd, faqJsonLd } from "@/lib/site-data";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Benefits } from "@/components/site/Benefits";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Differentiators } from "@/components/site/Differentiators";
import { Testimonials } from "@/components/site/Testimonials";
import { Coverage } from "@/components/site/Coverage";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pet Sitter em Vila Andrade | Ana Clara — Cuidados no Conforto da Sua Casa" },
      {
        name: "description",
        content:
          "Pet Sitter em Vila Andrade: cuidados personalizados para seu pet no conforto da sua casa. Visitas diárias, passeios, medicação e relatórios com fotos e vídeos. Agende no WhatsApp.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Pet Sitter em Vila Andrade | Ana Clara" },
      {
        property: "og:description",
        content:
          "Cuidados personalizados para seu pet, no conforto da sua casa. Vila Andrade — São Paulo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_IMAGE },
      {
        property: "og:image:alt",
        content: "Ana Clara sorrindo enquanto faz carinho em um cachorro golden",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pet Sitter em Vila Andrade | Ana Clara" },
      {
        name: "twitter:description",
        content: "Visitas, passeios, alimentação e medicação com fotos e vídeos em tempo real.",
      },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "" },
      { rel: "preload", as: "image", href: HERO_IMAGE, fetchpriority: "high" } as unknown as Record<
        string,
        string
      >,
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
});

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
