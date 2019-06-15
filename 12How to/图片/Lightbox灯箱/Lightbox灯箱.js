const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const slidesGroup = document.querySelectorAll('.slides');
const modalCaption = document.querySelector('.modal-caption');
const modalGallery = document.querySelectorAll('.modal-gallery img');

const close = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;
// 打开modal
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    modal.style.display = 'block';
    slideIndex = ~~images[i].getAttribute('data-slide');
    slide(slideIndex);
  });
}

for (let i = 0; i < modalGallery.length; i++) {
  modalGallery[i].addEventListener('click', function() {
    // 使用images也可以;
    slideIndex = ~~images[i].getAttribute('data-slide');
    slide(slideIndex);
  });
}

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

prev.addEventListener('click', function() {
  if (slideIndex == 1) slideIndex = images.length;
  else slideIndex--;

  slide(slideIndex);
});
next.addEventListener('click', function() {
  if (slideIndex == images.length) slideIndex = 1;
  else slideIndex++;
  slide(slideIndex);
});

function slide(slideIndex) {
  for (let i = 0; i < slidesGroup.length; i++) {
    slidesGroup[i].style.display = 'none';
  }
  for (let i = 0; i < modalGallery.length; i++) {
    modalGallery[i].className = modalGallery[i].className.replace(
      ' active',
      ''
    );
  }
  modalCaption.textContent = images[slideIndex - 1].getAttribute(
    'data-caption'
  );
  slidesGroup[slideIndex - 1].style.display = 'block';
  modalGallery[slideIndex - 1].className += ' active';
}
