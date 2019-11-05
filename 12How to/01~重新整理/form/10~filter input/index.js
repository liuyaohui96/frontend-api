(function() {
  const inputList = document.querySelector('.input-list');

  const input = document.querySelector('input[type="text"');

  let countries; // 存储json数据

  let lis; // 存储列表项
  let liNums; // 列表的项目数

  let currentFocusLi = -1;
  let lastFocusLi;

  init();
  function init() {
    // ajax读取json数据并转换
    ajax('http://localhost:3000/data').then(data => {
      countries = JSON.parse(data).countries;
    });

    input.addEventListener('input', inputHandler);

    inputList.addEventListener('click', listClickHandler);

    input.addEventListener('keydown', keydownHandler);

    document.addEventListener('click', function() {
      clearList();
    });
  }

  // 处理表单输入事件处理
  function inputHandler() {
    let count = 0;
    // 再次输入，需要清空原列表
    clearList();
    let valueLen = this.value.length;
    countries.forEach(country => {
      if (
        country.substring(0, valueLen).toLowerCase() ===
        this.value.toLowerCase()
      ) {
        createLi(country);
        count++;
      }
    });
    // 统计li数量
    lis = document.querySelectorAll('.input-list li');
    liNums = lis.length;
  }

  // 列表单击事件处理
  function listClickHandler(e) {
    input.value = e.target.textContent;
    clearList();
  }

  // 表单键盘事件处理
  function keydownHandler(e) {
    // 下方向键
    if (e.keyCode === 40) {
      // 最后一项后下一项为第一项
      lastFocusLi = currentFocusLi;
      if (currentFocusLi === liNums - 1) currentFocusLi = 0;
      else currentFocusLi++;
      toggleFocusStyle();
    }
    // 上方向键
    if (e.keyCode === 38) {
      lastFocusLi = currentFocusLi;
      if (currentFocusLi <= 0) currentFocusLi = liNums - 1;
      else currentFocusLi--;
      toggleFocusStyle();
    }
    if (e.keyCode === 13) {
      handleEnter();
    }
  }

  // 清空列表
  function clearList() {
    inputList.innerHTML = '';
    currentFocusLi = -1;
  }
  // 添加li
  function createLi(text) {
    let li = document.createElement('li');
    li.textContent = text;
    inputList.appendChild(li);
  }

  // ajax
  function ajax(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('get', url);

      xhr.onload = function() {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          resolve(xhr.responseText);
        }
      };
      xhr.send();
    });
  }

  // enter处理
  function handleEnter() {}

  // 切换focus样式
  function toggleFocusStyle() {
    lis[currentFocusLi].classList.add('focus');
    // 因为初始为-1，需要排除这个值
    if (lastFocusLi >= 0) lis[lastFocusLi].classList.remove('focus');
  }

  // 处理enter键
  function handleEnter() {
    input.value = lis[currentFocusLi].textContent;
    clearList();
  }
})();
