(function() {
  const btn = document.querySelector('button');
  const video = document.querySelector('video');

  btn.addEventListener('click', videoHandler);

  function videoHandler() {
    // 如果是暂停状态
    if (video.paused) {
      video.play();
      this.textContent = 'Pause';
    } else {
      video.pause();
      this.textContent = 'Play';
    }
  }
})();
