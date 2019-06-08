const targets = document.querySelectorAll('.lazy img');
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    [...entries].map(entry => {
      // 当前元素可见
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.classList.add('fade');
        img.setAttribute('src', src);
        observer.disconnect(); // 关闭当前元素的观测
      }
    });
  });
  io.observe(target); // // io.observe接受一个DOM元素，添加监听
};

[...targets].map(lazyLoad);
