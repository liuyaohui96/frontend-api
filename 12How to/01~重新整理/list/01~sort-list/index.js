(function() {
  const btn = document.querySelector('button');
  const ul = document.querySelector('.list');
  const lis = document.querySelectorAll('.list li');
  btn.addEventListener('click', sortHandler);
  //   btn.addEventListener('click', sortHandler2);

  // 使用内置sort
  function sortHandler() {
    let sortList = [...lis].sort((a, b) => {
      a = a.textContent.toLowerCase();
      b = b.textContent.toLowerCase();
      if (a > b) return 1;
      else if (a == b) return 0;
      else return -1;
    });
    ul.innerHTML = '';
    sortList.forEach(li => {
      ul.appendChild(li);
    });
  }

  // 尝试使用一种排序算法，如bubble sort
  //   function sortHandler2() {
  //     let flag = true;
  //     for (let end = lis.length - 1; end > 0 && flag; end--) {
  //       flag = false;
  //       for (let i = 0; i < end; i++) {
  //         if (lis[i].textContent > lis[i + 1].textContent) {
  //           [lis[i].textContent, lis[i + 1].textContent] = [
  //             lis[i + 1].textContent,
  //             lis[i].textContent
  //           ];
  //           flag = true;
  //         }
  //       }
  //     }
  //   }
})();
