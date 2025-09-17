document.addEventListener("DOMContentLoaded", () => {
  // AOS
  if (window.AOS) AOS.init({ duration: 900, once: true });

  // Menú hamburguesa
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const body = document.body;

  function closeMenu() {
    toggle.classList.remove("active");
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
  }
  function openMenu() {
    toggle.classList.add("active");
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
  }

  toggle.addEventListener("click", () => {
    const opened = nav.classList.contains("open");
    opened ? closeMenu() : openMenu();
  });

  // Cierra al hacer click en un enlace (útil en móvil)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  // SweetAlert – Comprar
  document.querySelectorAll(".comprar-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      Swal.fire({
        title: "Compra exitosa",
        text: "Tu pedido ha sido procesado correctamente.",
        icon: "success",
        confirmButtonColor: "#00A99D"
      });
    });
  });

  // SweetAlert – Newsletter
  const form = document.getElementById("newsletter-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      Swal.fire({
        title: "Gracias por registrarte",
        text: "Te enviaremos novedades a tu correo.",
        icon: "success",
        confirmButtonColor: "#00A99D"
      });
      form.reset();
    });
  }

  // Contacto → WhatsApp
  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      // Cambia el número y el texto predeterminado:
      window.open("https://wa.me/50496957210?text=Hola%20Growth%20Studio,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20🙌", "_blank");
    });
  }
});
