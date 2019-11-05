(function() {
  const text = document.querySelector('.value');
  document.querySelector('input').addEventListener('input', inputHandler);

  function inputHandler() {
    text.textContent = this.value;
  }
})();
