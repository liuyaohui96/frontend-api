(function() {
  const toast = document.querySelector('.toast');

  document.querySelector('button').addEventListener('click', clickHandler);

  function clickHandler() {
    toast.classList.toggle('show');
    setTimeout(() => {
      toast.classList.toggle('show');
    }, 4000);
  }
})();
