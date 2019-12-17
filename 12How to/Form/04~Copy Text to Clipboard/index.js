const bubble = document.querySelector('.bubble');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('mouseover', function() {
  bubble.style.display = 'block';
});
btn.addEventListener('mouseout', function() {
  bubble.style.display = 'none';
});

btn.addEventListener('click', function() {
  bubble.textContent = 'Copied: ' + input.value;
});
