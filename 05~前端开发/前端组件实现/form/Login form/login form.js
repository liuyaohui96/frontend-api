const close = document.querySelector('.close');
const cancel = document.querySelector('.cancel');
const modal = document.querySelector('.modal');
const login = document.querySelector('.login');

close.addEventListener('click', function() {
  modal.style.display = 'none';
});
cancel.addEventListener('click', function() {
  modal.style.display = 'none';
});
login.addEventListener('click', function() {
  modal.style.display = 'block';
});
