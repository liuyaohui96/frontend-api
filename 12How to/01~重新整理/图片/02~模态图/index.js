(function() {
  const galleryItems = document.querySelectorAll('.gallery img');
  const modal = document.querySelector('.modal');
  const modalImage = document.querySelector('.modal-image img');
  const modalTitle = document.querySelector('.modal-image .modal-title');
  [...galleryItems].forEach((item, index) => {
    item.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImage.src = galleryItems[index].src;
      modalTitle.textContent = galleryItems[index].alt;
    });
  });

  document.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none';
  });
})();
