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
    const duration = 2000; 
    const regreso = 2000; 
    const maxY = 300;

    function bajar(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const translateY = progress * maxY;

      farmbot.style.transform = `rotate(90deg) translateY(${translateY}px)`;

      if (progress < 1) {
        requestAnimationFrame(bajar);
      } else {
      
        start = null;
        requestAnimationFrame(subir);
      }
    }

    function subir(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / regreso, 1);
      const translateY = maxY - progress * maxY;

      farmbot.style.transform = `rotate(90deg) translateY(${translateY}px)`;

      if (progress < 1) {
        requestAnimationFrame(subir);
      } else {
        farmbot.style.transform = 'rotate(90deg)';
        farmbot.classList.remove('animar');

        if (!lechugaMostrada) {
          mostrarLechugas();
        }
      }
    }

    requestAnimationFrame(bajar);

  } else {
    // Computador
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
