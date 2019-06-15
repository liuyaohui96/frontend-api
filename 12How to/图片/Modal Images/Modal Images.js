const img = document.querySelector('.modal-image');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalCaption = document.querySelector('.modal-caption');
const close = document.querySelector('.close');

img.addEventListener('click', function() {
  modal.style.display = 'block';
  modalContent.src = modalContent.getAttribute('modal-src');
  modalCaption.textContent = modalContent.getAttribute('modal-caption');
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});
