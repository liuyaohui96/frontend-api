(function() {
  let slider = document.querySelector('.slider');
  let sliderItems = document.querySelectorAll('.slider-item');
  let len = sliderItems.length;
  let sliderNumber = document.querySelector('.slider-number');
  let sliderCaption = document.querySelector('.slider-caption');
  let bullets = document.querySelectorAll('.bullet');
  let prevIdx;
  let nextIdx;
  init();
  function init() {
    nextIdx = prevIdx = 0;

    // 初始化number&caption
    sliderNumber.textContent = nextIdx + 1 + '/' + len;
    console.log(sliderCaption);
    sliderCaption.textContent = sliderItems[nextIdx]
      .querySelector('img')
      .getAttribute('alt');
    sliderItems[nextIdx].style.display = 'block';

    // 设置监听器
    [...bullets].forEach((bullet, idx) => {
      bullet.addEventListener('click', function() {
        prevIdx = nextIdx;
        nextIdx = idx;
        slideTo(prevIdx, nextIdx);
      });
    });
    document.querySelector('.prev').addEventListener('click', function() {
      slidePrev();
    });
    document.querySelector('.next').addEventListener('click', function() {
      slideNext();
    });
  }

  function slidePrev() {
    prevIdx = nextIdx;
    nextIdx--;
    if (nextIdx < 0) nextIdx = len - 1;

    slideTo(prevIdx, nextIdx);
  }

  function slideNext() {
    prevIdx = nextIdx;
    nextIdx++;
    if (nextIdx == len) nextIdx = 0;
    slideTo(prevIdx, nextIdx);
  }

  function slideTo(prevIdx, nextIdx) {
    sliderItems[prevIdx].style.display = 'none';
    sliderItems[nextIdx].style.display = 'block';

    bullets[prevIdx].classList.toggle('active');
    bullets[nextIdx].classList.toggle('active');

    sliderCaption.textContent = sliderItems[nextIdx]
      .querySelector('img')
      .getAttribute('alt');
    sliderNumber.textContent = nextIdx + 1 + '/' + len;
  }
})();
