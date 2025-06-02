function openMacetaPopup(text, imageSrc) {
  const popup = document.getElementById('maceta-popup');
  document.getElementById('maceta-popup-text').innerText = text;
  document.getElementById('maceta-popup-img').src = imageSrc;
  popup.classList.add('show');
}

function closeMacetaPopup() {
  const popup = document.getElementById('maceta-popup');
  popup.classList.remove('show');
}

window.openMacetaPopup = openMacetaPopup;
window.closeMacetaPopup = closeMacetaPopup;

const farmbot = document.getElementById('farmbot');
let lechugaMostrada = false;

farmbot.addEventListener('click', function () {
  if (farmbot.classList.contains('animar')) return;

  const isMobile = window.innerWidth <= 768;
  farmbot.classList.add('animar');
  farmbot.style.animationName = isMobile ? 'moverAbajo' : 'moverDerecha';

  setTimeout(() => {
    farmbot.classList.remove('animar');
    farmbot.style.animationName = '';

    if (!lechugaMostrada) {
      const macetaIds = ['maceta1', 'maceta2', 'maceta3', 'maceta4'];

      macetaIds.forEach((id) => {
        const maceta = document.getElementById(id);
        if (maceta) {
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
        }
      });
      lechugaMostrada = true;
    }
  }, 4000);
});
