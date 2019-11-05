(function() {
  document.querySelector('.collapse').addEventListener('click', clickHandler);
  const content = document.querySelector('.content');
  function clickHandler() {
    this.classList.toggle('active');
    let height = parseFloat(getComputedStyle(content).height);
    if (height == 0) {
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = 0;
    }
  }
})();
