(function() {
  const tabs = document.querySelectorAll('.tab');
  let currentTab = 0;
  let tabNums = tabs.length;

  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  init();
  function init() {
    [...tabs].forEach((tab, idx) => {
      if (idx !== currentTab) tab.style.display = 'none';
    });

    if (currentTab === 0) {
      prev.style.display = 'none';
    }

    // 绑定事件处理
    next.addEventListener('click', handleNext);
  }

  function handleNext() {
    // 如果已经是最后的tab
    if (currentTab == tabNums - 1) {
      submit();
      return;
    }
    tabs[currentTab].style.display = 'none';
    currentTab++;
    tabs[currentTab].style.display = 'block';
  }

  // submit
  function submit() {
    next.textContent = 'Submit';
  }
})();
