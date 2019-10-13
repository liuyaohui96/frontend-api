const button = document.querySelector('button');

window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 20) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

button.addEventListener('click', function() {
  document.documentElement.scrollTop = 0;
});
