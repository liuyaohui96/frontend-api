(function() {
  const video = document.querySelector('video');
  document.querySelector('button').addEventListener('click', clickHandler);

  function clickHandler() {
    video.requestFullscreen();
  }
})();
