1. hash主要依赖location.hash来改动 URL,达到不刷新跳转的效果.每次 hash 改变都会触发hashchange事件(来响应路由的变化,比如页面的更换)
2. history主要利用了 HTML5的 historyAPI 来实现,用pushState和replaceState来操作浏览历史记录栈