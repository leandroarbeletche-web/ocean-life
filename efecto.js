

document.addEventListener("DOMContentLoaded", () => {

  const contenedorBurbujas = document.createElement("div");
  contenedorBurbujas.id = "burbujas-globales";
  document.body.appendChild(contenedorBurbujas);

  function crearBurbuja() {
    const burbuja = document.createElement("div");
    burbuja.className = "burbuja-global";
    
    const tamanio = Math.random() * 10 + 4; 
    burbuja.style.width = `${tamanio}px`;
    burbuja.style.height = `${tamanio}px`;
    
    burbuja.style.left = `${Math.random() * 100}%`;
    
    const duracion = Math.random() * 7 + 7;
    burbuja.style.animationDuration = `${duracion}s`;
    
    contenedorBurbujas.appendChild(burbuja);

    setTimeout(() => {
      burbuja.remove();
    }, duracion * 1000);
  }

  setInterval(crearBurbuja, 450);
});
// ==========================================
// LÓGICA BOTÓN VOLVER ARRIBA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('btn-back-to-top');

  if (backToTopBtn) {
    // Mostrar u ocultar el botón según la posición del scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // Desplazamiento suave al hacer clic
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});