const input = document.querySelector('input');
const listGroup = document.querySelectorAll('.list-group-item');

input.addEventListener('input', () => {
  [...listGroup].forEach((item, index) => {
    if (
      !item.textContent.toLowerCase().includes(event.target.value.toLowerCase())
    )
      listGroup[index].style.display = 'none';
    else listGroup[index].style.display = '';
  });
});
