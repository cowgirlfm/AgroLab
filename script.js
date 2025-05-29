const video = document.getElementById('introVideo');
const source = video.querySelector('source');
const container = document.getElementById('introContainer');


const esCelular = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


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
