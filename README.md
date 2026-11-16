# 🌊 Ocean Life

**Ocean Life** es una página web educativa sobre el océano y la vida marina. La idea es que cualquier persona pueda explorar el mundo submarino: conocer a sus animales, recorrer sus ecosistemas, entender cómo lo afecta la contaminación y aprender jugando.

Está hecha con **HTML, CSS y JavaScript**, sin frameworks.

## Secciones

| Página | Archivo | Qué tiene |
|---|---|---|
| Inicio | `index.html` | Portada con burbujas animadas, accesos a cada sección y datos destacados. |
| Animales | `animales.html` | Fichas de unos 50 animales marinos (tiburones, pulpos, orcas, medusas, el narval…) con buscador. |
| Ecosistemas | `ecosistemas.html` | Arrecifes de coral, bosques de kelp, manglares, zona abisal, fosas hadales, océanos polares y más. |
| Contaminación | `contaminacion.html` | El impacto humano en los mares y cómo nos afecta. |
| Inmersión | `inmersion.html` | Simulador: ingresás una profundidad y te dice en qué zona del océano estás. |
| Juegos | `juegos.html` | Trivia de 10 preguntas al azar sobre el océano, con puntaje. |
| Curiosidades | `curiosidades.html` | Datos sorprendentes sobre el mar y sus criaturas. |
| Nosotros | `nosotros.html` | Quiénes hicieron la página y por qué. |

## Estructura del proyecto

```
ocean-life/
├── index.html y las demás páginas (.html)
├── Css/
│   └── estilos.css    → estilos compartidos por todas las páginas
├── js/
│   ├── script.js      → simulador de inmersión, animaciones y botón "volver arriba"
│   └── juego.js       → lógica de la trivia
├── efecto.js          → burbujas que suben por la pantalla
└── Img/               → fotos de animales, ecosistemas y el logo
```

## Cómo verla

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/leandroarbeletche-web/ocean-life.git
   ```
2. Abrí `index.html` en el navegador.

## Tecnologías y herramientas

- **HTML5** para la estructura de las páginas.
- **CSS3** para el diseño (fuentes Playfair Display e Inter de Google Fonts).
- **JavaScript** para el simulador, la trivia y las animaciones.
- **Git y GitHub** para el control de versiones.
