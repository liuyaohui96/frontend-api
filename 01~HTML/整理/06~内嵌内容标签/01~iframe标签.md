

## iframe标签
iframe标签用于在一个页面内嵌入其他页面

常用属性：
1. src
2. width
3. height
4. allowfullscreen 允许通过javascript实现全屏显示iframe
5. seamless 应用程序不希望出现滚动条
6. title:  title 属性来标识框架的主要内容，这样可以极大方便使用辅助技术（例如屏幕阅读器）浏览网页的人
```html
<iframe src="https://www.example.com">
  Fallback text for non-supported browsers
</iframe>

<iframe title="Wikipedia page for Avocados" src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

## 脚本访问
1. iframe对象包含在`window.iframes`中
2. 框架内部，脚本可以通过 window.parent 引用父窗口对象
3. 脚本访问框架内容必须遵守同源策略，并且无法访问非同源的 window 对象的几乎所有属性，跨域通信可以通过 window.postMessage 来实现。

## iframe缺点
1. 阻塞主页面的onload事件
2. 搜索引擎无法解读这种页面，不利于SEO
3. iframe 和页面共享连接池，而浏览器对相同区域有限制，所以会影响性能