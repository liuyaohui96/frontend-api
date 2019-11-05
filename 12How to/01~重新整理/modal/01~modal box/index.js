(function() {
  const btn = document.querySelector('button');
  const closeBtn = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  btn.addEventListener('click', modalHandler);
  closeBtn.addEventListener('click', closeHandler);

  function modalHandler() {
    modal.style.display = 'block';
  }

  function closeHandler() {
    modal.style.display = 'none';
  }
})();
