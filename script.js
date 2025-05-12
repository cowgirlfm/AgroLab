const video = document.getElementById('introVideo');
const container = document.getElementById('introContainer');

video.addEventListener('ended', () => {
  container.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1500); 
});
