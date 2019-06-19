const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.tab-content');

[...buttons].forEach(button => {
  button.addEventListener('click', function() {
    [...contents].forEach(content => (content.style.display = ''));
    [...buttons].forEach(button => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
    this.classList.toggle('active');
    document.getElementById(this.getAttribute('data-bind')).style.display =
      'block';
  });
});
