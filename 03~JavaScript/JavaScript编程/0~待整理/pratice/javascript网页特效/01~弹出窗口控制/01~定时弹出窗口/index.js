// 2s 后定义弹出一个指定的窗口

window.setTimeout(function() {
  let newWin = window.open(
    'new.html',
    'new',
    'width=400, height=400,top=20,left=20'
  );
  if (!newWin) alert('窗口被屏蔽');
}, 2000);

// 窗口可能会被拦截
