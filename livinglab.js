function openMacetaPopup(text, imageSrc) {
  const popup = document.getElementById('maceta-popup');
  document.getElementById('maceta-popup-text').innerText = text;
  document.getElementById('maceta-popup-img').src = imageSrc;
  popup.classList.add('show');
}

function closeMacetaPopup() {
  document.getElementById('maceta-popup').classList.remove('show');
}

window.openMacetaPopup = openMacetaPopup;
window.closeMacetaPopup = closeMacetaPopup;

const farmbot = document.getElementById('farmbot');
let lechugaMostrada = false;

function reiniciarAnimacion(elemento, claseAnimacion) {
  elemento.classList.remove('animarAbajo', 'animarHorizontal');
  void elemento.offsetWidth; 
  elemento.classList.add(claseAnimacion);
}

farmbot.addEventListener('click', () => {
  const isMobile = window.innerWidth <= 768;

  if (
    farmbot.classList.contains('animarAbajo') ||
    farmbot.classList.contains('animarHorizontal')
  ) return;

  if (isMobile) {
    reiniciarAnimacion(farmbot, 'animarAbajo');

    if (!lechugaMostrada) {
      setTimeout(() => {
        ['maceta1', 'maceta2', 'maceta3', 'maceta4'].forEach(id => {
          const maceta = document.getElementById(id);
          const lechuga = document.createElement('img');
          lechuga.src = 'grupo-lechuga.png';
          lechuga.alt = 'Grupo de lechugas';
          lechuga.style.position = 'absolute';
          lechuga.style.width = '170px';
          lechuga.style.top = '7px';
          lechuga.style.left = '50%';
          lechuga.style.transform = 'translateX(-50%)';
          lechuga.style.pointerEvents = 'none';
          maceta.appendChild(lechuga);
        });
        lechugaMostrada = true;
      }, 2000);
    }

  } else {
    reiniciarAnimacion(farmbot, 'animarHorizontal');
  }
});
