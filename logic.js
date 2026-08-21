const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !telefono || !servicio || !mensaje) {
    formMessage.textContent = "Completa todos los campos.";
    return;
  }

  // Cambia este número por tu WhatsApp, incluyendo código de país.
  const whatsapp = "573142430044";

  const texto = `Hola, soy ${nombre}.%0A%0AQuiero solicitar información sobre:%0A${servicio}%0A%0AMi teléfono: ${telefono}%0A%0ADetalle del problema:%0A${mensaje}`;
  const url = `https://wa.me/${whatsapp}?text=${texto}`;

  formMessage.textContent = "Abriendo WhatsApp...";
  window.open(url, "_blank");
});
