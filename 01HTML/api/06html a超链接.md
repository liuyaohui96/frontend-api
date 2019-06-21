# 超链接
a 标签定义URL的链接（可以链接到其他页面，邮件，页面内的某个section）

1. href
  * `href="http://www.example.com"`: 绝对地址
  * `href="/helloword.html"`: 相对地址
  * `href="#id"`: 定位到id元素的位置，**不会发送http请求**
  * `"mailto:example@777.com"`: 点击链接，浏览器尝试打开本地邮件客户端，向指定邮箱发送邮件
  * `href="http://www.example.com#id"` 先跳转到对应页面，然后定位到指定页面的部分

2. target
  * _blank 在新标签打开
  * _self 在当前标签打开
  * _parent 在父级环境打开，如没有，就以_self打开
  * _top 在top环境打开，如美哟u，以_self打开