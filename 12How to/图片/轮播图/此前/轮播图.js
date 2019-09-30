let slideIndex = 1;

const slidesGroup = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsGroup = document.querySelectorAll('.dot');

prev.addEventListener('click', function() {
  if (slideIndex === 1) slideIndex = slidesGroup.length;
  else slideIndex--;
  slide(slideIndex);
});

next.addEventListener('click', function() {
  if (slideIndex === slidesGroup.length) slideIndex = 1;
  else slideIndex++;
  slide(slideIndex);
});

for (let i = 0; i < dotsGroup.length; i++) {
  dotsGroup[i].addEventListener('click', function() {
    slideIndex = Number(dotsGroup[i].getAttribute('data-slide'));
    slide(slideIndex);
  });
}

slide(slideIndex); // 初次调用

function slide(slideIndex) {
  for (let i = 0; i < slidesGroup.length; i++) {
    slidesGroup[i].style.display = 'none';
  }

  for (let i = 0; i < dotsGroup.length; i++) {
    dotsGroup[i].className = dotsGroup[i].className.replace(' active', '');
  }

  slidesGroup[slideIndex - 1].style.display = 'block';
  dotsGroup[slideIndex - 1].className += ' active';
}
