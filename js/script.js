console.log("JavaScript conectado correctamente");

let tituloPrincipal = document.querySelector("h1");
let inputProfundidad = document.querySelector("#profundidad");
let botonComprobar = document.querySelector("#btn-comprobar");
let resultadoZona = document.querySelector("#resultado-zona");
console.log("Elemento 1 seleccionado:", tituloPrincipal);
console.log("Elemento 2 seleccionado:", botonComprobar);
console.log("Elemento 3 seleccionado:", inputProfundidad);

if (botonComprobar) {
  botonComprobar.addEventListener("click", function() {
    let metros = parseInt(inputProfundidad.value);

    if (isNaN(metros)) {
      resultadoZona.textContent = "Por favor, ingresá un número válido.";
      resultadoZona.style.color = "yellow";
    } else if (metros <= 200) {
      resultadoZona.textContent = "☀️ Zona Epipelágica (Luz solar): Abundante fauna y corales.";
      resultadoZona.style.color = "#00ffff";
    } else if (metros <= 1000) {
      resultadoZona.textContent = "🌥️ Zona Mesopelágica (Penumbra): Criaturas bioluminiscentes.";
      resultadoZona.style.color = "orange";
    } else {
      resultadoZona.textContent = "🌌 Zona Abisal: Oscuridad total y presiones extremas.";
      resultadoZona.style.color = "#ff6666";
    }
  });
}

let formOcean = document.querySelector("#form-ocean");
let inputNombre = document.querySelector("#nombre-usuario");
let inputEmail = document.querySelector("#email-usuario");
let mensajeForm = document.querySelector("#mensaje-form");

if (formOcean) {
  formOcean.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let nombre = inputNombre.value.trim();
    let email = inputEmail.value.trim();

    if (nombre === "" || email === "") {
      mensajeForm.textContent = "⚠️ Debe completar todos los campos obligatorios.";
      mensajeForm.style.color = "#ff6666";
    } else {
      mensajeForm.textContent = `¡Gracias por tu mensaje, ${nombre}! Consulta enviada.`;
      mensajeForm.style.color = "#00ffff";
      
      inputNombre.value = "";
      inputEmail.value = "";
    }
  });
}

let tarjetas = document.querySelectorAll(".stats div");

tarjetas.forEach(function(tarjeta, indice) {
  console.log("Tarjeta " + (indice + 1) + ": " + tarjeta.textContent.trim());
  tarjeta.addEventListener("click", function() {
    tarjeta.style.border = "2px solid #00ffff";
  });
});

let btnModo = document.querySelector("#btn-modo-nocturno");

if (btnModo) {
  btnModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-nocturno");

    if (document.body.classList.contains("modo-nocturno")) {
      btnModo.textContent = "☀️ Modo Diurno";
      document.body.style.backgroundColor = "#030b1e";
    } else {
      btnModo.textContent = "🌙 Modo Nocturno";
      document.body.style.backgroundColor = "";
    }
  });
}

// ==========================================
// NUEVO: EFECTO SCROLL REVEAL (Aparición al deslizar)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const elementosAnimar = document.querySelectorAll('.card, .card-problema, .stat, .nosotros-contenido-card, .caja-reflexion-final');

  elementosAnimar.forEach(el => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.15
  });

  elementosAnimar.forEach(el => observer.observe(el));
});
window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + '%';
  }
});