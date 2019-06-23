document.querySelector('.navbar-icon').addEventListener('click', function() {
  document.querySelector('.overlay-nav').classList.toggle('show');
  document.querySelector('.main').style.marginLeft = '250px';
});
document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.overlay-nav').classList.toggle('show');
  document.querySelector('.main').style.marginLeft = '0';
});
