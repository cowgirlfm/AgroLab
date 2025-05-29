const video = document.getElementById('introVideo');
const source = video.querySelector('source');
const container = document.getElementById('introContainer');

const esCelular = window.matchMedia("(max-width: 768px)").matches;

if (esCelular) {
  source.setAttribute('src', '/animacion-celular.mp4');
} else {
  source.setAttribute('src', '/animacion.mp4');
}

video.load();

video.addEventListener('ended', () => {
  container.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1500); 
});
