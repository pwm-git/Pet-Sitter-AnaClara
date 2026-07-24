// ==========================================
// Patinhas Pet Shop & Vet — main.js
// Comportamentos: menu mobile, scroll suave, header com scroll,
// FAQ acordeão acessível, animações reveal, active link.
// Refactor: ES6+, ARIA sincronizado, listeners passivos, reduced-motion.
// ==========================================

"use strict";

// ---------- CONFIG ----------
const WHATSAPP_NUMBER = "5511987654321";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar um serviço para meu pet.";
const HEADER_SCROLL_THRESHOLD = 100;
const SECTION_OFFSET = 100;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- HELPERS ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// ==========================================
// MENU MOBILE
// ==========================================
function initMobileMenu() {
  const toggle = $("#menu-toggle");
  const nav = $("#nav-menu");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.classList.toggle("active", open);
    nav.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Fechar menu de navegação" : "Abrir menu de navegação",
    );
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("active"));
  });

  // Fechar ao clicar num link do menu
  $$(".nav-link", nav).forEach((link) => link.addEventListener("click", () => setOpen(false)));

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("active")) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  // ESC fecha
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) setOpen(false);
  });
}

// ==========================================
// SCROLL SUAVE (com offset do header)
// ==========================================
function initSmoothScroll() {
  const header = $(".header");
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        return;
      }
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      window.scrollTo({
        top: target.offsetTop - headerH,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });
}

// ==========================================
// HEADER COM ESTILO DINÂMICO NO SCROLL
// ==========================================
function initHeaderScroll() {
  const header = $("#header");
  if (!header) return;
  const update = () =>
    header.classList.toggle("scrolled", window.scrollY > HEADER_SCROLL_THRESHOLD);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

// ==========================================
// FAQ ACORDEÃO ACESSÍVEL
// ==========================================
function initFAQ() {
  const items = $$(".faq-item");
  items.forEach((item) => {
    const btn = $(".faq-question", item);
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      // Fecha os outros (comportamento pré-existente preservado)
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove("active");
          const otherBtn = $(".faq-question", other);
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("active", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

// ==========================================
// ANIMAÇÕES DE SCROLL (FADE IN) — desliga se reduced-motion
// ==========================================
function initScrollReveal() {
  const targets = $$(
    ".servico-card, .destaque-card, .beneficio-item, .depoimento-card, .faq-item, .info-item",
  );
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("fade-in", "visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  targets.forEach((el) => {
    el.classList.add("fade-in");
    io.observe(el);
  });
}

// ==========================================
// ACTIVE LINK NO MENU (destaque da seção atual)
// ==========================================
function initActiveMenuLink() {
  const sections = $$("section[id]");
  const links = $$(".nav-link");
  if (!sections.length || !links.length) return;

  const update = () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
      const top = section.offsetTop - SECTION_OFFSET;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollY > top && scrollY <= top + height) {
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      }
    });
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ==========================================
// BOOTSTRAP
// ==========================================
function boot() {
  initMobileMenu();
  initSmoothScroll();
  initHeaderScroll();
  initFAQ();
  initScrollReveal();
  initActiveMenuLink();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

// Exposto no window para uso opcional (número de WhatsApp e mensagem padrão)
window.PATINHAS = { WHATSAPP_NUMBER, WHATSAPP_MESSAGE };
