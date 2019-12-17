(function() {
  const content = document.querySelector('.content');
  const loader = document.querySelector('.loader');

  setTimeout(function() {
    content.style.display = 'block';
    loader.style.display = 'none';
  }, 2000);
})();
