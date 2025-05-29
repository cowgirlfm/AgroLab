const video = document.getElementById('introVideo');
const source = video.querySelector('source');
const container = document.getElementById('introContainer');

const esCelular = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

source.src = esCelular ? '/animación-celular.mp4' : '/animacion.mp4';
video.load();

video.oncanplay = () => {
  video.play().catch((e) => {
    console.warn("El navegador bloqueó el autoplay. Requiere interacción del usuario.");
  });
};

video.addEventListener('ended', () => {
  container.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1500);
});
