function girar() {
  const ruleta = document.getElementById('ruleta');
  const resultado = document.getElementById('resultado');
  const secciones = ruleta.querySelectorAll('div');

  // Limpia resultados anteriores
  ruleta.classList.remove('destacando');
  secciones.forEach(s => s.classList.remove('destacado'));
  resultado.textContent = "";

  // Gira entre 5000° y 9000° (más vueltas = más emoción)
  const grados = Math.floor(5000 + Math.random() * 4000);
  ruleta.style.transform = `rotate(${grados}deg)`;

  // Opciones en orden de la ruleta
  const opciones = [
    "💋 Beso",
    "🤗 Abrazo",
    "🍫 Chocolate",
    "🕯️ Cita",
    "🎶 Canción",
    "💌 Mensaje"
  ];

  // Determina la opción ganadora
  const indice = Math.floor(((grados % 360) / 60));
  const premioIndex = (6 - indice) % 6;
  const premio = opciones[premioIndex];

  // Espera el giro
  setTimeout(() => {
    ruleta.classList.add('destacando');
    secciones[premioIndex].classList.add('destacado');
    resultado.textContent = `💕 Me debes: ${premio}! 💕`;
  }, 5200);
}

// 🎵 Control de música
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');

btnMusica.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = '⏸️ Pausar Música';
  } else {
    musica.pause();
    btnMusica.textContent = '▶️ Reproducir Música';
  }
});
