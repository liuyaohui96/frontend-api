document.querySelector('.dropdown').addEventListener('click', function(e) {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
});

window.onclick = function(e) {
  if (!e.target.matches('.dropdown-toggle')) {
    let dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.classList.contains('show'))
      dropdownMenu.classList.remove('show');
  }
};

document
  .querySelector('.navbar-toggleer')
  .addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('show');
  });
