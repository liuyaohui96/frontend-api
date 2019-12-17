(function() {
  document.querySelector('.popup').addEventListener('click', clickHandler);
  const tooltip = document.querySelector('.tooltip-text');
  function clickHandler() {
    tooltip.classList.toggle('show');
  }
})();
