(function() {
  const addBtn = document.querySelector('.add');
  const list = document.querySelector('.list-content');
  const input = document.querySelector('input');

  list.addEventListener('click', listClickHandler);

  addBtn.addEventListener('click', addClickHandler);

  function listClickHandler(e) {
    let { target } = e;
    if (target.constructor == HTMLLIElement) {
      target.classList.toggle('checked');
      return;
    }

    if (target.constructor == HTMLSpanElement) {
      target.parentElement.style.display = 'none';
    }
  }

  function addClickHandler() {
    let li = document.createElement('li');
    li.textContent = input.value;
    let span = document.createElement('span');
    span.textContent = '\u00D7';
    span.className = 'close';
    li.appendChild(span);
    list.appendChild(li);
    input.value = '';
  }
})();
