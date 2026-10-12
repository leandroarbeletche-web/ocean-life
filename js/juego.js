const todasLasPreguntas = [
  { pregunta: "¿Cuál es el animal más grande del mundo?", opciones: ["Tiburón Blanco", "Ballena Azul", "Calamar Gigante", "Delfín"], correcta: 1 },
  { pregunta: "¿Cuántos tentáculos tiene un pulpo?", opciones: ["6", "10", "8", "12"], correcta: 2 },
  { pregunta: "¿Cómo se llaman los grupos de delfines?", opciones: ["Manadas", "Bandadas", "Cardúmenes", "Colonias"], correcta: 0 },
  { pregunta: "¿Qué porcentaje del océano albergan los arrecifes de coral?", opciones: ["10%", "25%", "1%", "50%"], correcta: 1 },
  { pregunta: "¿Cuántos corazones tiene un pulpo?", opciones: ["1", "2", "4", "3"], correcta: 3 },
  { pregunta: "¿Cuál es el pez más rápido del océano?", opciones: ["Tiburón", "Pez Vela", "Atún", "Delfín"], correcta: 1 },
  { pregunta: "¿Qué animal marino tiene el veneno más potente?", opciones: ["Tiburón", "Medusa Caja", "Pez Globo", "Mantarraya"], correcta: 1 },
  { pregunta: "¿Cuánto puede medir un calamar gigante?", opciones: ["5 metros", "8 metros", "13 metros", "20 metros"], correcta: 2 },
  { pregunta: "¿Qué son los corales?", opciones: ["Plantas", "Rocas", "Animales", "Algas"], correcta: 2 },
  { pregunta: "¿Cuánto tiempo puede vivir una tortuga marina?", opciones: ["10 años", "30 años", "80 años", "150 años"], correcta: 3 },
  { pregunta: "¿Cómo se llama el proceso por el que los peces obtienen oxígeno?", opciones: ["Respiración pulmonar", "Filtración", "Respiración branquial", "Fotosíntesis"], correcta: 2 },
  { pregunta: "¿Qué animal marino puede regenerar sus brazos?", opciones: ["Pulpo", "Estrella de mar", "Medusa", "Cangrejo"], correcta: 1 },
  { pregunta: "¿Cuál es la profundidad máxima del océano?", opciones: ["5.000 m", "8.000 m", "11.000 m", "15.000 m"], correcta: 2 },
  { pregunta: "¿Qué mamífero marino puede sumergirse más profundo?", opciones: ["Delfín", "Ballena Azul", "Cachalote", "Foca"], correcta: 2 },
  { pregunta: "¿De qué se alimentan las ballenas azules?", opciones: ["Peces grandes", "Krill", "Calamares", "Tortugas"], correcta: 1 },
  { pregunta: "¿Cuántos brazos tiene una estrella de mar común?", opciones: ["3", "4", "5", "6"], correcta: 2 },
  { pregunta: "¿Qué océano es el más grande del mundo?", opciones: ["Atlántico", "Índico", "Ártico", "Pacífico"], correcta: 3 },
  { pregunta: "¿Cómo se llama el fenómeno que calienta los océanos?", opciones: ["El Niño", "La Niña", "Tsunami", "Corriente fría"], correcta: 0 },
  { pregunta: "¿Qué animal marino tiene tinta para escapar?", opciones: ["Tiburón", "Pulpo", "Delfín", "Pez Globo"], correcta: 1 },
  { pregunta: "¿Cuál es el arrecife de coral más grande del mundo?", opciones: ["Arrecife Mesoamericano", "Gran Barrera de Coral", "Arrecife de Belice", "Arrecife Rojo"], correcta: 1 }
];

function mezclar(array) { return array.sort(() => Math.random() - 0.5); }

const preguntas = mezclar([...todasLasPreguntas]).slice(0, 10);
let actual = 0;
let puntaje = 0;

function cargarPregunta() {
  const p = preguntas[actual];
  document.getElementById("numero").textContent = `Pregunta ${actual + 1} de ${preguntas.length}`;
  document.getElementById("pregunta").textContent = p.pregunta;
  document.getElementById("resultado").textContent = "";
  document.getElementById("siguiente").style.display = "none";
  document.getElementById("final-box").style.display = "none";

  const barra = document.getElementById("barra-progreso");
  barra.style.width = (actual / preguntas.length * 100) + "%";

  const opciones = document.getElementById("opciones");
  opciones.innerHTML = "";
  p.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.className = "opcion-btn";
    btn.onclick = () => verificar(index);
    opciones.appendChild(btn);
  });
}

function verificar(elegida) {
  const p = preguntas[actual];
  const botones = document.querySelectorAll(".opcion-btn");
  botones.forEach(btn => btn.disabled = true);

  if (elegida === p.correcta) {
    botones[elegida].classList.add("correcta");
    document.getElementById("resultado").textContent = "✅ ¡Correcto!";
    document.getElementById("resultado").style.color = "#00e676";
    puntaje++;
  } else {
    botones[elegida].classList.add("incorrecta");
    botones[p.correcta].classList.add("correcta");
    document.getElementById("resultado").textContent = "❌ Incorrecto";
    document.getElementById("resultado").style.color = "#ff5252";
  }

  document.getElementById("puntaje-actual").textContent = `⭐ ${puntaje} pts`;
  document.getElementById("barra-progreso").style.width = ((actual + 1) / preguntas.length * 100) + "%";

  if (actual < preguntas.length - 1) {
    document.getElementById("siguiente").style.display = "inline-block";
  } else {
    setTimeout(() => mostrarFinal(), 800);
  }
}

function mostrarFinal() {
  document.getElementById("siguiente").style.display = "none";
  const finalBox = document.getElementById("final-box");
  finalBox.style.display = "block";
  let emoji = puntaje >= 8 ? "🏆" : puntaje >= 5 ? "🐬" : "🐟";
  document.getElementById("puntaje").textContent =
    `${emoji} ¡Terminaste! Puntaje: ${puntaje} de ${preguntas.length}`;
}

function siguientePregunta() {
  actual++;
  cargarPregunta();
}

cargarPregunta();