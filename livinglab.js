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

farmbot.addEventListener('click', () => {
  if (farmbot.classList.contains('animar')) return;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {

    farmbot.classList.add('animar');
    let start = null;
    let duration = 4000; 
    let maxY = 300;

    function animateDown(timestamp) {
      if (!start) start = timestamp;
      let elapsed = timestamp - start;

      let progress = (elapsed % duration) / (duration / 2);
      let offset = progress <= 1 ? progress : 2 - progress;
      let translateY = offset * maxY;

      farmbot.style.transform = `rotate(90deg) translateY(${translateY}px)`;

      if (elapsed < duration) {
        requestAnimationFrame(animateDown);
      } else {
        farmbot.style.transform = 'rotate(90deg)';
        farmbot.classList.remove('animar');

        if (!lechugaMostrada) {
          mostrarLechugas();
        }
      }
    }

    requestAnimationFrame(animateDown);

  } else {
   
    farmbot.classList.add('animar');
    farmbot.style.animationName = 'moverDerecha';

    setTimeout(() => {
      farmbot.classList.remove('animar');
      farmbot.style.animationName = '';

      if (!lechugaMostrada) {
        mostrarLechugas();
      }
    }, 4000);
  }
});

function mostrarLechugas() {
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
