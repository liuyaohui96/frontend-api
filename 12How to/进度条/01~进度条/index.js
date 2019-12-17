(function() {
  const bar = document.querySelector('.bar');
  let percent = 0;

  document.querySelector('button').addEventListener('click', clickHandler);
  function clickHandler() {
    let timerId = setInterval(function() {
      if (percent < 100) {
        percent++;
        bar.style.width = percent + '%';
        bar.textContent = percent + '%';
      } else {
        percent = 0;
        clearInterval(timerId);
      }
    }, 100);
  }
})();
