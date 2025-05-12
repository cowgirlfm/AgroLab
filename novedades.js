function openPopup(text, imageSrc) {
  document.getElementById('popup-text').innerText = text;
  document.getElementById('popup-img').src = imageSrc;
  document.getElementById('popup').classList.add('show');
}

function closePopup() {
  document.getElementById('popup').classList.remove('show');
}

window.openPopup = openPopup;
window.closePopup = closePopup;
