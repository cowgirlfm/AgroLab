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

farmbot.addEventListener('click', () => {
  if (farmbot.classList.contains('animar')) return;

  const isMobile = window.innerWidth <= 768;
  farmbot.classList.add('animar');

  if (isMobile && !lechugaMostrada) {
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
    }, 4000);
  }

  setTimeout(() => {
    farmbot.classList.remove('animar');
  }, 4000);
});
