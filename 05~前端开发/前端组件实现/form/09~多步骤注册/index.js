(function() {
  const registerForm = document.querySelector('.register');

  const tabs = document.querySelectorAll('.tab');
  let currentTab = 0;
  let prevTab;
  let tabNums = tabs.length;

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  const circles = document.querySelectorAll('.circle');

  init();
  function init() {
    // 初始化隐藏除了第一个的tab
    [...tabs].forEach((tab, idx) => {
      if (idx !== currentTab) tab.style.display = 'none';
      if (idx === 0) circles[0].classList.add('active');
    });

    // 绑定事件处理
    next.addEventListener('click', handleNext);
    prev.addEventListener('click', handlePrev);
  }

  // 处理next button
  function handleNext() {
    if (currentTab == tabNums - 1) {
      submit();
      return;
    }
    prevTab = currentTab;
    currentTab++;
    // 修正currentTab
    if (currentTab === tabNums) {
      currentTab = tabNums - 1;
      submit();
      return;
    }

    handleStyle(prevTab, currentTab);
  }

  // 处理prev button
  function handlePrev() {
    if (currentTab == 0) return;
    prevTab = currentTab;
    currentTab--;
    handleStyle(prevTab, currentTab);
  }

  // 统一处理点击按钮的样式变化
  function handleStyle(prevTab, currentTab) {
    // 显示隐藏tab
    tabs[prevTab].style.display = 'none';
    tabs[currentTab].style.display = 'block';

    // 显示隐藏button
    if (currentTab > 0) prev.style.display = 'block';
    else prev.style.display = 'none';
    if (currentTab == tabNums - 1) next.textContent = 'Submit';
    else next.textContent = 'Next';

    // 控制circle样式
    circles[currentTab].classList.add('active');
    circles[prevTab].classList.remove('active');
  }

  // 提交按钮点击，创建元素
  function submit() {
    registerForm.style.display = 'none';
    let div = document.createElement('h1');
    div.textContent = 'success to submit the form';
    div.classList.add('text-center');
    document.body.appendChild(div);
  }
})();
