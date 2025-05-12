const integrantes = {
  1: {
    nombre: "Prof. Freddy Zapata",
    info: `<p><strong>Diseño</strong><br>Facultad de Arquitectura y Diseño</p>`,
    imagen: "freddy-zapata.jpg"
  },
  2: {
    nombre: "Prof. Giacomo Barbieri",
    info: `<p><strong>Ingeniería mecánica</strong><br>Facultad de Ingeniería</p>`,
    imagen: "giacomo-barbieri.jpg"
  },
  3: {
    nombre: "Antonia Roda",
    info: `<p><strong>Egresada</strong><br>Antropología</p>`,
    imagen: "antonia-roda.jpg"
  },
  4: {
    nombre: "Daniel Avendaño",
    info: `<p><strong>Egresado</strong><br>Ingeniería Mecánica</p>`,
    imagen: "daniel-avendano.jpg"
  },
  5: {
    nombre: "Ana Lucia Martínez",
    info: `<p><strong>Egresada</strong><br>Biología</p>`,
    imagen: "ana-lucia.jpg"
  },
  6: {
    nombre: "Edison Reyes",
    info: `<p><strong>Egresado</strong><br>Ingeniería Química</p>`,
    imagen: "edison-reyes.jpg"
  }
};

function closePopup() {
  document.getElementById('equipo-popup').classList.remove('show');
  document.getElementById('titulo-equipo').style.display = 'block'; // Mostrar título
}

window.closePopup = closePopup;

document.querySelectorAll('.lombriz').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.getAttribute('data-id');
    const miembro = integrantes[id];
    if (miembro) {
      document.getElementById('popup-img').src = miembro.imagen;
      document.getElementById('popup-img').alt = miembro.nombre;
      document.getElementById('popup-text').innerHTML = `<h3>${miembro.nombre}</h3>${miembro.info}`;
      document.getElementById('equipo-popup').classList.add('show');
      document.getElementById('titulo-equipo').style.display = 'none'; // Ocultar título
    }
  });
});
