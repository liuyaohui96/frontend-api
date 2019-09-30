const slidesGroup = document.querySelectorAll('.slide');
const dotsGroup = document.querySelectorAll('.dot');

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

for (let i = 0; i < dotsGroup.length; i++) {
  dotsGroup[i].addEventListener('click', function() {
    slideIndex = dotsGroup[i].getAttribute('data-slide');
    slide(slideIndex);
  });
}

slide(slideIndex);
function slide(slideIndex) {
  for (let i = 0; i < dotsGroup.length; i++) {
    dotsGroup[i].className = dotsGroup[i].className.replace(' active', '');
  }
  for (let i = 0; i < slidesGroup.length; i++) {
    slidesGroup[i].style.display = 'none';
  }

  slidesGroup[slideIndex - 1].style.display = 'block';
  dotsGroup[slideIndex - 1].className += ' active';
}
