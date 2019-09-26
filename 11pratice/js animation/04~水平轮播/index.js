(function() {
  let slider;
  let currrentIdx;
  let sliderItems;
  let len; // 个数
  let sliderItemWidth; // 单个item宽度
  let sliderList;
  let bullets;
  let timerId;

  init();
  function init() {
    sliderList = document.querySelector('.slider-list');

    // 复制第一张图片放到最后面，复制最后一张图片放到最前面
    let firstItem = document.querySelector('.slider-item:first-child');
    let copyFirstItem = firstItem.cloneNode(true);
    let lastItem = document.querySelector('.slider-item:last-child');
    let copyLastItem = lastItem.cloneNode(true);
    sliderList.appendChild(copyFirstItem);
    sliderList.insertBefore(copyLastItem, firstItem);
    sliderItems = document.querySelectorAll('.slider-item');
    // 计算总宽度
    sliderItemWidth = sliderItems[0].offsetWidth;
    len = sliderItems.length;
    sliderList.style.width = sliderItemWidth * len + 'px';

    currrentIdx = 1; // 因为新增加了一张图片
    sliderList.style.left = -sliderItemWidth + 'px'; // 定位到第二张图片

    // 绑定事件
    document.querySelector('.prev').addEventListener('click', function() {
      slidePrev();
    });
    document.querySelector('.next').addEventListener('click', function() {
      slideNext();
    });

    bullets = document.querySelectorAll('.bullet');
    [...bullets].forEach((bullet, index) => {
      bullet.addEventListener('click', function() {
        currrentIdx = index + 1;
        slideTo();
      });
    });

    slider = document.querySelector('.slider');
    slider.addEventListener('mouseover', function() {
      clearInterval(timerId);
    });
    slider.addEventListener('mouseout', function() {
      auto();
    });

    // auto
    auto();
  }

  function slidePrev() {
    currrentIdx--;
    slideTo();
  }
  function slideNext() {
    currrentIdx++;
    slideTo();
  }
  function slideTo() {
    //   前一张是最后一张图片，实际是第一张图片，下一张是第三张图片（实际第二张）
    if (currrentIdx === len) {
      currrentIdx = 2;
      // 移动到第一张图片的位置
      sliderList.style.left = -sliderItemWidth + 'px';
    }
    // 前一张图片是第一张图片，实际上是最后一张图片，下一张图片是倒数第三张（实际上是倒数第二张）
    if (currrentIdx === -1) {
      currrentIdx = len - 3;
      sliderList.style.left = -(len - 2) * sliderItemWidth + 'px';
    }

    let focusIndex;
    if (currrentIdx == 0) {
      focusIndex = bullets.length - 1;
    } else if (currrentIdx == len - 1) {
      focusIndex = 0;
    } else {
      focusIndex = currrentIdx - 1;
    }
    document.querySelector('.focus').classList.remove('focus');
    bullets[focusIndex].classList.add('focus');
    let left = -currrentIdx * sliderItemWidth;
    animate(sliderList, { left });
  }
  function auto() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      slideNext();
    }, 2000);
  }
})();
