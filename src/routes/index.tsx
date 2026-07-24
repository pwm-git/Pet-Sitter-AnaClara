import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// URL absoluta da imagem hero (também usada como og:image / twitter:image).
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80";

const bodyHtml = `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

    <!-- ========================================
         HEADER / MENU NAVEGAÇÃO
         ======================================== -->
    <header class="header" id="header" role="banner">
        <div class="container">
            <div class="header-content">

                <a href="#home" class="logo" aria-label="Patinhas Pet Shop e Vet - Página inicial">
                    <span class="logo-icon" aria-hidden="true">🐾</span>
                    <span class="logo-text">
                        <span class="logo-name">Patinhas</span>
                        <span class="logo-tagline">Pet Shop &amp; Vet</span>
                    </span>
                </a>

                <nav class="nav" id="nav-menu" aria-label="Navegação principal">
                    <ul class="nav-list">
                        <li><a href="#home" class="nav-link">Início</a></li>
                        <li><a href="#sobre" class="nav-link">Sobre</a></li>
                        <li><a href="#servicos" class="nav-link">Serviços</a></li>
                        <li><a href="#depoimentos" class="nav-link">Depoimentos</a></li>
                        <li><a href="#faq" class="nav-link">FAQ</a></li>
                        <li><a href="#contato" class="nav-link">Contato</a></li>
                    </ul>
                </nav>

                <a href="#contato" class="btn btn-primary btn-header">Agendar Consulta</a>

                <button class="menu-toggle" id="menu-toggle"
                        aria-label="Abrir menu de navegação"
                        aria-expanded="false"
                        aria-controls="nav-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </header>

    <main id="conteudo">

    <!-- ========================================
         SEÇÃO HERO / BANNER PRINCIPAL
         ======================================== -->
    <section class="hero" id="home" aria-labelledby="hero-title">
        <div class="hero-background" role="presentation"
            style="background-image: url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80');">
        </div>
        <div class="hero-overlay" aria-hidden="true"></div>

        <div class="container">
            <div class="hero-content">

                <div class="hero-text">
                    <h1 class="hero-title" id="hero-title">
                        Cuidando do seu <span class="highlight">melhor amigo</span> com todo amor e carinho
                    </h1>
                    <p class="hero-description">
                        Pet Shop e Clínica Veterinária completa com profissionais especializados, equipamentos
                        modernos e muito carinho para seu pet!
                    </p>

                    <div class="hero-buttons">
                        <a href="#servicos" class="btn btn-primary btn-large">Ver Serviços</a>
                        <a href="#contato" class="btn btn-secondary btn-large">Agendar Agora</a>
                    </div>

                    <div class="hero-badges">
                        <div class="badge">
                            <span class="badge-icon" aria-hidden="true">⭐</span>
                            <span class="badge-text">+10 anos de experiência</span>
                        </div>
                        <div class="badge">
                            <span class="badge-icon" aria-hidden="true">❤️</span>
                            <span class="badge-text">+5000 pets atendidos</span>
                        </div>
                    </div>
                </div>

                <div class="hero-image">
                    <div class="hero-image-container">
                        <img src="${HERO_IMAGE}"
                             alt="Cachorro golden retriever sorrindo, atendido na Patinhas Pet Shop"
                             width="600" height="600"
                             fetchpriority="high"
                             decoding="async">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO SOBRE NÓS
         ======================================== -->
    <section class="sobre" id="sobre" aria-labelledby="sobre-title">
        <div class="container">
            <div class="sobre-content">

                <div class="sobre-image">
                    <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80"
                         alt="Interior aconchegante do pet shop Patinhas com pets sendo atendidos"
                         width="600" height="400"
                         loading="lazy" decoding="async">
                </div>

                <div class="sobre-text">
                    <span class="section-label">Sobre Nós</span>
                    <h2 class="section-title" id="sobre-title">Mais de 10 anos cuidando com amor do seu pet</h2>
                    <p class="sobre-description">
                        A <strong>Patinhas Pet Shop &amp; Vet</strong> nasceu do amor incondicional pelos animais. Somos uma
                        clínica veterinária e pet shop completa, com equipe especializada e equipamentos modernos para
                        oferecer o melhor atendimento.
                    </p>
                    <p class="sobre-description">
                        Nossa missão é proporcionar saúde, bem-estar e felicidade para seu melhor amigo, com atendimento
                        humanizado e serviços de excelência.
                    </p>

                    <ul class="sobre-list">
                        <li>
                            <span class="list-icon" aria-hidden="true">✓</span>
                            <span>Veterinários especializados e experientes</span>
                        </li>
                        <li>
                            <span class="list-icon" aria-hidden="true">✓</span>
                            <span>Equipamentos modernos e tecnologia de ponta</span>
                        </li>
                        <li>
                            <span class="list-icon" aria-hidden="true">✓</span>
                            <span>Atendimento 24 horas para emergências</span>
                        </li>
                        <li>
                            <span class="list-icon" aria-hidden="true">✓</span>
                            <span>Ambiente confortável e acolhedor</span>
                        </li>
                    </ul>

                    <a href="#contato" class="btn btn-primary">Entre em Contato</a>
                </div>
            </div>

            <div class="galeria" role="list" aria-label="Galeria de fotos">
                <figure class="galeria-item galeria-item-large" role="listitem">
                    <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                         alt="Grupo de cachorros felizes brincando juntos"
                         width="800" height="600"
                         loading="lazy" decoding="async">
                </figure>
                <figure class="galeria-item" role="listitem">
                    <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&q=80"
                         alt="Cachorro recebendo tosa profissional"
                         width="400" height="300"
                         loading="lazy" decoding="async">
                </figure>
                <figure class="galeria-item" role="listitem">
                    <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80"
                         alt="Bulldog com expressão simpática"
                         width="400" height="300"
                         loading="lazy" decoding="async">
                </figure>
                <figure class="galeria-item" role="listitem">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80"
                         alt="Gato descansando tranquilamente"
                         width="400" height="300"
                         loading="lazy" decoding="async">
                </figure>
                <figure class="galeria-item" role="listitem">
                    <img src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&q=80"
                         alt="Veterinário cuidando de um pet"
                         width="400" height="300"
                         loading="lazy" decoding="async">
                </figure>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO SERVIÇOS
         ======================================== -->
    <section class="servicos" id="servicos" aria-labelledby="servicos-title">
        <div class="container">

            <div class="section-header">
                <span class="section-label">Nossos Serviços</span>
                <h2 class="section-title" id="servicos-title">Tudo que seu pet precisa em um só lugar</h2>
                <p class="section-description">
                    Oferecemos serviços completos de pet shop e clínica veterinária para cuidar da saúde e bem-estar do
                    seu melhor amigo.
                </p>
            </div>

            <div class="servicos-grid">

                <article class="servico-card">
                    <div class="servico-image">
                        <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80"
                             alt="Cachorro tomando banho no serviço de banho e tosa"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="servico-icon" aria-hidden="true">🛁</div>
                    <h3 class="servico-title">Banho e Tosa</h3>
                    <p class="servico-description">
                        Banho completo, tosa higiênica e estética com produtos de qualidade e profissionais
                        especializados.
                    </p>
                </article>

                <article class="servico-card">
                    <div class="servico-image">
                        <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&q=80"
                             alt="Veterinária examinando um cachorro em consulta"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="servico-icon" aria-hidden="true">🩺</div>
                    <h3 class="servico-title">Consultas Veterinárias</h3>
                    <p class="servico-description">
                        Atendimento clínico geral com veterinários experientes para cuidar da saúde do seu pet.
                    </p>
                </article>

                <article class="servico-card">
                    <div class="servico-image">
                        <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80"
                             alt="Prateleira com produtos e acessórios para pets"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="servico-icon" aria-hidden="true">💉</div>
                    <h3 class="servico-title">Produtos Pet</h3>
                    <p class="servico-description">
                        Pet shop completo com produtos de higiene, acessórios e tudo para o bem-estar do seu pet.
                    </p>
                </article>

                <article class="servico-card">
                    <div class="servico-image">
                        <img src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80"
                             alt="Rações premium selecionadas para cães e gatos"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="servico-icon" aria-hidden="true">⚕️</div>
                    <h3 class="servico-title">Rações Premium</h3>
                    <p class="servico-description">
                        As melhores marcas de ração e alimentação especial para todas as fases da vida do seu pet.
                    </p>
                </article>

                <article class="servico-card">
                    <div class="servico-image">
                        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80"
                             alt="Pets confortáveis hospedados no hotel pet"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="servico-icon" aria-hidden="true">🏨</div>
                    <h3 class="servico-title">Hotel Pet</h3>
                    <p class="servico-description">
                        Hospedagem com conforto e segurança para seu pet enquanto você viaja tranquilo.
                    </p>
                </article>

                <article class="servico-card">
                    <div class="servico-image">
                        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80"
                             alt="Cachorro em sessão de adestramento profissional"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="servico-icon" aria-hidden="true">🛍️</div>
                    <h3 class="servico-title">Adestramento</h3>
                    <p class="servico-description">
                        Treinamento profissional para educação, comportamento e socialização do seu pet.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO DESTAQUES / DIFERENCIAIS
         ======================================== -->
    <section class="destaques" aria-labelledby="destaques-title">
        <div class="container">

            <div class="section-header">
                <span class="section-label">Por Que Escolher a Patinhas?</span>
                <h2 class="section-title" id="destaques-title">Nossos Diferenciais</h2>
            </div>

            <div class="destaques-grid">

                <article class="destaque-card">
                    <div class="destaque-image">
                        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80"
                             alt="Equipe especializada cuidando de pets felizes"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="destaque-number" aria-hidden="true">01</div>
                    <h3 class="destaque-title">Equipe Especializada</h3>
                    <p class="destaque-description">
                        Veterinários formados e atualizados com as melhores práticas da medicina veterinária.
                    </p>
                </article>

                <article class="destaque-card">
                    <div class="destaque-image">
                        <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&q=80"
                             alt="Atendimento 24 horas para emergências pet"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="destaque-number" aria-hidden="true">02</div>
                    <h3 class="destaque-title">Atendimento 24h</h3>
                    <p class="destaque-description">
                        Pronto atendimento veterinário disponível 24 horas para emergências.
                    </p>
                </article>

                <article class="destaque-card">
                    <div class="destaque-image">
                        <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80"
                             alt="Equipamentos veterinários modernos"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="destaque-number" aria-hidden="true">03</div>
                    <h3 class="destaque-title">Tecnologia Moderna</h3>
                    <p class="destaque-description">
                        Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes.
                    </p>
                </article>

                <article class="destaque-card">
                    <div class="destaque-image">
                        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80"
                             alt="Ambiente acolhedor para pets e tutores"
                             width="400" height="300"
                             loading="lazy" decoding="async">
                    </div>
                    <div class="destaque-number" aria-hidden="true">04</div>
                    <h3 class="destaque-title">Ambiente Acolhedor</h3>
                    <p class="destaque-description">
                        Espaço projetado para o conforto dos pets e tranquilidade dos tutores.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO BENEFÍCIOS
         ======================================== -->
    <section class="beneficios" aria-labelledby="beneficios-title">
        <div class="container">
            <div class="beneficios-content">

                <div class="beneficios-text">
                    <span class="section-label">Benefícios</span>
                    <h2 class="section-title" id="beneficios-title">Vantagens de cuidar do seu pet conosco</h2>

                    <div class="beneficios-list">
                        <div class="beneficio-item">
                            <div class="beneficio-icon" aria-hidden="true">🎯</div>
                            <div class="beneficio-text">
                                <h3>Planos de Saúde Pet</h3>
                                <p>Consultas ilimitadas, descontos em serviços e muito mais com nossos planos.</p>
                            </div>
                        </div>

                        <div class="beneficio-item">
                            <div class="beneficio-icon" aria-hidden="true">📱</div>
                            <div class="beneficio-text">
                                <h3>Agendamento Online</h3>
                                <p>Agende consultas e serviços pelo WhatsApp de forma rápida e prática.</p>
                            </div>
                        </div>

                        <div class="beneficio-item">
                            <div class="beneficio-icon" aria-hidden="true">🚗</div>
                            <div class="beneficio-text">
                                <h3>Estacionamento Grátis</h3>
                                <p>Estacionamento amplo e seguro para sua comodidade.</p>
                            </div>
                        </div>

                        <div class="beneficio-item">
                            <div class="beneficio-icon" aria-hidden="true">💳</div>
                            <div class="beneficio-text">
                                <h3>Parcelamento Facilitado</h3>
                                <p>Aceitamos todas as formas de pagamento com parcelamento em até 12x.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="beneficios-image">
                    <div class="beneficios-image-placeholder">
                        <span class="beneficios-emoji" aria-hidden="true">🐶💙</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO DEPOIMENTOS
         ======================================== -->
    <section class="depoimentos" id="depoimentos" aria-labelledby="depoimentos-title">
        <div class="container">

            <div class="section-header">
                <span class="section-label">Depoimentos</span>
                <h2 class="section-title" id="depoimentos-title">O que dizem nossos clientes</h2>
                <p class="section-description">
                    A satisfação dos nossos clientes e o bem-estar dos pets são nossa maior recompensa.
                </p>
            </div>

            <div class="depoimentos-grid">

                <article class="depoimento-card">
                    <div class="depoimento-rating" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                        <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p class="depoimento-text">
                        &ldquo;Excelente atendimento! Minha cachorrinha ficou linda depois do banho e tosa. A equipe é super
                        atenciosa e cuidadosa. Super recomendo!&rdquo;
                    </p>
                    <div class="depoimento-author">
                        <div class="author-avatar">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                                 alt="Retrato de Maria Silva"
                                 width="80" height="80"
                                 loading="lazy" decoding="async">
                        </div>
                        <div class="author-info">
                            <h3 class="author-name">Maria Silva</h3>
                            <p class="author-pet">Tutora da Luna</p>
                        </div>
                    </div>
                </article>

                <article class="depoimento-card">
                    <div class="depoimento-rating" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                        <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p class="depoimento-text">
                        &ldquo;Profissionais extremamente competentes! O Dr. João salvou meu gato com um diagnóstico preciso e
                        tratamento eficaz. Gratidão eterna!&rdquo;
                    </p>
                    <div class="depoimento-author">
                        <div class="author-avatar">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                                 alt="Retrato de Carlos Oliveira"
                                 width="80" height="80"
                                 loading="lazy" decoding="async">
                        </div>
                        <div class="author-info">
                            <h3 class="author-name">Carlos Oliveira</h3>
                            <p class="author-pet">Tutor do Miau</p>
                        </div>
                    </div>
                </article>

                <article class="depoimento-card">
                    <div class="depoimento-rating" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                        <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p class="depoimento-text">
                        &ldquo;O hotel pet é maravilhoso! Fiquei tranquila durante minha viagem sabendo que meu dog estava bem
                        cuidado. Ele voltou feliz e saudável!&rdquo;
                    </p>
                    <div class="depoimento-author">
                        <div class="author-avatar">
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
                                 alt="Retrato de Ana Paula"
                                 width="80" height="80"
                                 loading="lazy" decoding="async">
                        </div>
                        <div class="author-info">
                            <h3 class="author-name">Ana Paula</h3>
                            <p class="author-pet">Tutora do Thor</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO FAQ (PERGUNTAS FREQUENTES)
         ======================================== -->
    <section class="faq" id="faq" aria-labelledby="faq-title">
        <div class="container">

            <div class="section-header">
                <span class="section-label">Perguntas Frequentes</span>
                <h2 class="section-title" id="faq-title">Tire suas dúvidas</h2>
            </div>

            <div class="faq-list">

                <div class="faq-item">
                    <h3>
                        <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-1" id="faq-btn-1">
                            <span>Quais são os horários de atendimento?</span>
                            <span class="faq-icon" aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div class="faq-answer" id="faq-panel-1" role="region" aria-labelledby="faq-btn-1">
                        <p>Atendemos de segunda a sexta das 8h às 20h, sábados das 8h às 18h e domingos das 9h às 13h.
                            Para emergências, temos pronto atendimento 24 horas todos os dias.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3>
                        <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-2" id="faq-btn-2">
                            <span>É necessário agendar horário para banho e tosa?</span>
                            <span class="faq-icon" aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div class="faq-answer" id="faq-panel-2" role="region" aria-labelledby="faq-btn-2">
                        <p>Sim, recomendamos agendar com antecedência para garantir o horário de sua preferência. Você
                            pode agendar pelo WhatsApp, telefone ou pessoalmente.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3>
                        <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-3" id="faq-btn-3">
                            <span>Quais vacinas são oferecidas?</span>
                            <span class="faq-icon" aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div class="faq-answer" id="faq-panel-3" role="region" aria-labelledby="faq-btn-3">
                        <p>Oferecemos todas as vacinas recomendadas para cães e gatos: V8, V10, antirrábica, giárdia,
                            gripe canina, tríplice felina, quádrupla felina, entre outras.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3>
                        <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-4" id="faq-btn-4">
                            <span>Como funciona o hotel pet?</span>
                            <span class="faq-icon" aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div class="faq-answer" id="faq-panel-4" role="region" aria-labelledby="faq-btn-4">
                        <p>O hotel pet oferece hospedagem com todo conforto e segurança. Fornecemos alimentação,
                            passeios, brincadeiras e cuidados veterinários se necessário. É necessário apresentar
                            carteira de vacinação atualizada.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3>
                        <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-5" id="faq-btn-5">
                            <span>Aceitam plano de saúde pet?</span>
                            <span class="faq-icon" aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div class="faq-answer" id="faq-panel-5" role="region" aria-labelledby="faq-btn-5">
                        <p>Sim, aceitamos os principais planos de saúde pet do mercado. Também oferecemos nossos
                            próprios planos com consultas ilimitadas e descontos em serviços.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <h3>
                        <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-6" id="faq-btn-6">
                            <span>Quais formas de pagamento são aceitas?</span>
                            <span class="faq-icon" aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div class="faq-answer" id="faq-panel-6" role="region" aria-labelledby="faq-btn-6">
                        <p>Aceitamos dinheiro, PIX, cartões de débito e crédito (parcelamento em até 12x). Para
                            cirurgias e procedimentos de maior valor, oferecemos condições especiais.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================
         SEÇÃO CONTATO
         ======================================== -->
    <section class="contato" id="contato" aria-labelledby="contato-title">
        <div class="container">

            <div class="section-header">
                <span class="section-label">Contato</span>
                <h2 class="section-title" id="contato-title">Entre em contato conosco</h2>
                <p class="section-description">
                    Estamos prontos para cuidar do seu pet. Agende uma visita ou tire suas dúvidas!
                </p>
            </div>

            <div class="contato-content">

                <address class="contato-info">

                    <div class="info-item">
                        <div class="info-icon" aria-hidden="true">📍</div>
                        <div class="info-text">
                            <h3>Endereço</h3>
                            <p>Rua das Patinhas, 123<br>Centro - São Paulo/SP<br>CEP: 01234-567</p>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon" aria-hidden="true">📞</div>
                        <div class="info-text">
                            <h3>Telefone</h3>
                            <p>
                                <a href="tel:+5511987654321">(11) 98765-4321</a><br>
                                <a href="tel:+551134567890">(11) 3456-7890</a>
                            </p>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon" aria-hidden="true">📧</div>
                        <div class="info-text">
                            <h3>E-mail</h3>
                            <p>
                                <a href="mailto:contato@patinhaspet.com.br">contato@patinhaspet.com.br</a><br>
                                <a href="mailto:atendimento@patinhaspet.com.br">atendimento@patinhaspet.com.br</a>
                            </p>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon" aria-hidden="true">🕐</div>
                        <div class="info-text">
                            <h3>Horário</h3>
                            <p>Seg-Sex: 8h às 20h<br>Sábado: 8h às 18h<br>Domingo: 9h às 13h<br><strong>Emergência:
                                    24h</strong></p>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Siga no Facebook" rel="noopener"><span aria-hidden="true">📘</span></a>
                        <a href="#" class="social-link" aria-label="Siga no Instagram" rel="noopener"><span aria-hidden="true">📷</span></a>
                        <a href="#" class="social-link" aria-label="Fale conosco no WhatsApp" rel="noopener"><span aria-hidden="true">💬</span></a>
                    </div>
                </address>

            </div>
        </div>
    </section>

    </main>

    <!-- ========================================
         FOOTER / RODAPÉ
         ======================================== -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-content">

                <div class="footer-col">
                    <div class="footer-logo">
                        <span class="logo-icon" aria-hidden="true">🐾</span>
                        <span class="logo-text">
                            <span class="logo-name">Patinhas</span>
                            <span class="logo-tagline">Pet Shop &amp; Vet</span>
                        </span>
                    </div>
                    <p class="footer-description">
                        Cuidando do seu melhor amigo com amor, carinho e profissionalismo há mais de 10 anos.
                    </p>
                </div>

                <nav class="footer-col" aria-label="Links rápidos">
                    <h3 class="footer-title">Links Rápidos</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#depoimentos">Depoimentos</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>

                <nav class="footer-col" aria-label="Serviços oferecidos">
                    <h3 class="footer-title">Serviços</h3>
                    <ul class="footer-links">
                        <li><a href="#servicos">Banho e Tosa</a></li>
                        <li><a href="#servicos">Consultas Veterinárias</a></li>
                        <li><a href="#servicos">Vacinação</a></li>
                        <li><a href="#servicos">Cirurgias</a></li>
                        <li><a href="#servicos">Hotel Pet</a></li>
                        <li><a href="#servicos">Pet Shop</a></li>
                    </ul>
                </nav>

                <div class="footer-col">
                    <h3 class="footer-title">Contato</h3>
                    <ul class="footer-contact">
                        <li><span aria-hidden="true">📍</span> Rua das Patinhas, 123<br>Centro - São Paulo/SP</li>
                        <li><span aria-hidden="true">📞</span> <a href="tel:+5511987654321">(11) 98765-4321</a></li>
                        <li><span aria-hidden="true">📧</span> <a href="mailto:contato@patinhaspet.com.br">contato@patinhaspet.com.br</a></li>
                        <li><span aria-hidden="true">🕐</span> Seg-Sex: 8h-20h<br>Emergência: 24h</li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 Patinhas Pet Shop &amp; Vet. Todos os direitos reservados.</p>
                <p>Desenvolvido com <span aria-label="amor">💙</span> para pets e tutores</p>
            </div>
        </div>
    </footer>

    <!-- Botão flutuante WhatsApp (Passo D) -->
    <a id="whatsapp-fab"
       class="whatsapp-fab"
       href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20meu%20pet."
       target="_blank"
       rel="noopener"
       aria-label="Falar no WhatsApp">
        <span aria-hidden="true">💬</span>
    </a>

    <iframe src="https://app.gptmaker.ai/widget/3EB1EF96AD98C38C824B36EC3DEDCDF8/iframe"
            title="Assistente virtual Patinhas"
            width="100%"
            style="height: 100%; min-height: 700px"
            allow="microphone;"
            loading="lazy"
            frameborder="0">
    </iframe>
`;

// ---- JSON-LD estruturado (SEO local + FAQ) ----
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Patinhas Pet Shop & Vet",
  description:
    "Pet Shop e Clínica Veterinária completa: banho e tosa, consultas, vacinação, cirurgias, hotel pet e produtos.",
  image: HERO_IMAGE,
  telephone: "+55-11-98765-4321",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua das Patinhas, 123",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01234-567",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "13:00" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quais são os horários de atendimento?", acceptedAnswer: { "@type": "Answer", text: "Atendemos de segunda a sexta das 8h às 20h, sábados das 8h às 18h e domingos das 9h às 13h. Para emergências, temos pronto atendimento 24 horas todos os dias." } },
    { "@type": "Question", name: "É necessário agendar horário para banho e tosa?", acceptedAnswer: { "@type": "Answer", text: "Sim, recomendamos agendar com antecedência para garantir o horário de sua preferência. Você pode agendar pelo WhatsApp, telefone ou pessoalmente." } },
    { "@type": "Question", name: "Quais vacinas são oferecidas?", acceptedAnswer: { "@type": "Answer", text: "Oferecemos todas as vacinas recomendadas para cães e gatos: V8, V10, antirrábica, giárdia, gripe canina, tríplice felina, quádrupla felina, entre outras." } },
    { "@type": "Question", name: "Como funciona o hotel pet?", acceptedAnswer: { "@type": "Answer", text: "O hotel pet oferece hospedagem com todo conforto e segurança. Fornecemos alimentação, passeios, brincadeiras e cuidados veterinários se necessário. É necessário apresentar carteira de vacinação atualizada." } },
    { "@type": "Question", name: "Aceitam plano de saúde pet?", acceptedAnswer: { "@type": "Answer", text: "Sim, aceitamos os principais planos de saúde pet do mercado. Também oferecemos nossos próprios planos com consultas ilimitadas e descontos em serviços." } },
    { "@type": "Question", name: "Quais formas de pagamento são aceitas?", acceptedAnswer: { "@type": "Answer", text: "Aceitamos dinheiro, PIX, cartões de débito e crédito (parcelamento em até 12x). Para cirurgias e procedimentos de maior valor, oferecemos condições especiais." } },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Patinhas Pet Shop & Vet — Cuidando do seu melhor amigo com amor" },
      {
        name: "description",
        content:
          "Pet Shop e Clínica Veterinária completa em São Paulo. Banho e tosa, consultas, vacinação, cirurgias, hotel pet e produtos. Agende pelo WhatsApp!",
      },
      { property: "og:title", content: "Patinhas Pet Shop & Vet" },
      {
        property: "og:description",
        content:
          "Pet Shop e Clínica Veterinária completa: banho e tosa, consultas, hotel pet e muito mais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_IMAGE },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Patinhas Pet Shop & Vet" },
      {
        name: "twitter:description",
        content:
          "Pet Shop e Clínica Veterinária completa: banho e tosa, consultas, hotel pet e muito mais.",
      },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "theme-color", content: "#2196f3" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Fredoka:wght@500;600;700&display=swap",
      },
      {
        rel: "preload",
        as: "image",
        href: HERO_IMAGE,
        fetchpriority: "high",
      } as unknown as Record<string, string>,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "/assets/js/main.js";
    s.defer = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
