function closePopup() {
  document.getElementById('custom-popup').classList.remove('show');
}

window.closePopup = closePopup;

document.getElementById('terminados').addEventListener('click', () => {
  document.getElementById('popup-text').innerHTML = `
    <h3>Proyectos Terminados</h3>
    <p>Aquí puedes ver los proyectos completados.</p>
    <a href="https://urbangreenhousechallenge.nl/candidate/details/23184" target="_blank">Urban Greenhouse Challenge</a>`;
  document.getElementById('custom-popup').classList.add('show');
});

document.getElementById('en-proceso').addEventListener('click', () => {
  document.getElementById('popup-text').innerHTML = `
    <h3>Proyectos en Proceso</h3>
    <p>Estos proyectos están actualmente en desarrollo.</p>
    <a href="https://arqdis.uniandes.edu.co/semilleros/estudio-agrolab/" target="_blank">Semillero</a>`;
  document.getElementById('custom-popup').classList.add('show');
});

