(function() {
  const close = document.querySelectorAll('.close');

  [...close].forEach(item => {
    item.addEventListener('click', clickHandler);
  });

  function clickHandler() {
    this.parentElement.style.opacity = '0';
    setTimeout(() => {
      this.parentElement.style.display = 'none';
    }, 600);
  }
})();
