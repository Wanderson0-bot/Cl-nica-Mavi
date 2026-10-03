// Edite com DDI + DDD + telefone oficial, somente dígitos. O número não foi fornecido.
const whatsappNumber = "ADICIONAR_NUMERO";
const whatsappMessage =
  "Olá! Gostaria de saber mais sobre a Clínica Mavi e agendar um atendimento.";
const whatsappReady = /^\d{12,13}$/.test(whatsappNumber);
const whatsappUrl = whatsappReady
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : "#contato";
document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.href = whatsappUrl;
  if (whatsappReady) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document
        .querySelector("#contato")
        ?.scrollIntoView({ behavior: "smooth" });
    });
});
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav-principal");
function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menu");
  nav?.classList.remove("open");
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
  nav?.classList.toggle("open", !open);
});
nav?.querySelectorAll('a[href^="#"]').forEach((link) =>
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", link.getAttribute("href"));
    }
    closeMenu();
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.addEventListener("click", (event) => {
  if (
    nav?.classList.contains("open") &&
    !nav.contains(event.target) &&
    !menuButton?.contains(event.target)
  )
    closeMenu();
});
const updateHeader = () =>
  header?.classList.toggle("scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
const items = document.querySelectorAll(".reveal");
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries, current) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          current.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  items.forEach((item) => observer.observe(item));
} else items.forEach((item) => item.classList.add("is-visible"));
