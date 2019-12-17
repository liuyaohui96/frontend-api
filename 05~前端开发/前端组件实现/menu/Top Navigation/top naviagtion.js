const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
dropdown.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});
