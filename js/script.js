document.documentElement.classList.add("js-ready");

const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNavigation = document.querySelector("#main-nav");

if (menuToggle && mainNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    mainNavigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    mainNavigation.classList.toggle("is-open", !isOpen);
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm instanceof HTMLFormElement) {
  const subjectInput = contactForm.elements.namedItem("asunto");
  const requestedSubject = new URLSearchParams(window.location.search).get("asunto");

  if (subjectInput instanceof HTMLInputElement && requestedSubject) {
    subjectInput.value = requestedSubject;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("correo") || "").trim();
    const subject = String(formData.get("asunto") || "").trim();
    const message = String(formData.get("mensaje") || "").trim();
    const body = `Hola NEXORA DIGITAL,\n\nSoy ${name} (${email}).\n\n${message}\n\nEnviado desde el formulario de contacto.`;
    const status = document.querySelector("[data-form-status]");

    if (status) {
      status.textContent =
        "Se abrirá un borrador de correo con tu información. Revisa tu aplicación de correo antes de enviarlo; este sitio no envía mensajes automáticamente.";
    }

    window.setTimeout(() => {
      window.location.href = `mailto:contacto@nexoradigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 120);
  });
}