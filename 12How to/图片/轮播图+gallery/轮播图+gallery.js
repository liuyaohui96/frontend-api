const slidesGroup = document.querySelectorAll('.slide');
const imagesGroup = document.querySelectorAll('.gallery');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;
prev.addEventListener('click', function() {
  if (slideIndex == 1) slideIndex = slidesGroup.length;
  else slideIndex--;
  slide(slideIndex);
});
next.addEventListener('click', function() {
  if (slideIndex == slidesGroup.length) slideIndex = 1;
  else slideIndex++;
  slide(slideIndex);
});

for (let i = 0; i < imagesGroup.length; i++) {
  imagesGroup[i].addEventListener('click', function() {
    slideIndex = imagesGroup[i].getAttribute('data-slide');
    slide(slideIndex);
  });
}

slide(slideIndex);
function slide(slideIndex) {
  for (let i = 0; i < imagesGroup.length; i++) {
    imagesGroup[i].className = imagesGroup[i].className.replace(' active', '');
  }
  for (let i = 0; i < slidesGroup.length; i++) {
    slidesGroup[i].style.display = 'none';
  }

  slidesGroup[slideIndex - 1].style.display = 'block';
  imagesGroup[slideIndex - 1].className += ' active';
}
