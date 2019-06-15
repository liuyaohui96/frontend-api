const btnsGroup = document.querySelectorAll('button');
const columns = document.querySelectorAll('.column');

for (let i = 0; i < btnsGroup.length; i++) {
  btnsGroup[i].addEventListener('click', changeLayout);
}

function changeLayout() {
  for (let i = 0; i < btnsGroup.length; i++) {
    btnsGroup[i].className = btnsGroup[i].className.replace('active', '');
  }
  event.target.className += 'active';
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.flex = event.target.getAttribute('data-bind');
  }
}
