"use strict";

// Preencher apenas após confirmação do número oficial em formato internacional.
const whatsappNumber = "INSIRA_NUMERO_REAL_AQUI";
// Preencher com o perfil oficial completo, por exemplo: https://instagram.com/perfil
const instagramUrl = "INSIRA_INSTAGRAM_OFICIAL_AQUI";
// Preencher após confirmação do endereço oficial da clínica.
const mapsUrl = "INSIRA_ENDERECO_CONFIRMADO_AQUI";

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function markUnavailable(link, service) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.alert(`${service} oficial ainda não informado. Entre em contato com a Clínica Mavi para obter os dados atualizados.`);
  });
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  if (/^\d{10,15}$/.test(whatsappNumber)) {
    const message = encodeURIComponent("Olá! Gostaria de informações sobre a Clínica Mavi.");
    link.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contato";
    markUnavailable(link, "O WhatsApp");
  }
});

document.querySelectorAll(".js-instagram").forEach((link) => {
  if (instagramUrl.startsWith("https://")) {
    link.href = instagramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contato";
    markUnavailable(link, "O Instagram");
  }
});

document.querySelectorAll(".js-maps").forEach((link) => {
  if (mapsUrl.startsWith("https://")) {
    link.href = mapsUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contato";
    markUnavailable(link, "O endereço e o mapa");
  }
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
