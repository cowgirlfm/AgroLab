function iniciarAnimacionFarmbot() {
  if (farmbot.classList.contains('animar')) return;

  const isMobile = window.innerWidth <= 768;
  farmbot.classList.add('animar');
  farmbot.style.animationName = isMobile ? 'moverAbajo' : 'moverDerecha';

  if (isMobile && !lechugaMostrada) {
    setTimeout(() => {
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
    }, 4000);
  }

  setTimeout(() => {
    farmbot.classList.remove('animar');
    farmbot.style.animationName = '';
  }, 4000);
}

farmbot.addEventListener('click', iniciarAnimacionFarmbot);
farmbot.addEventListener('touchstart', iniciarAnimacionFarmbot);
