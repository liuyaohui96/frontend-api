## 区别
导入语法
  ```html
  <link rel="stylesheet" href="style.css" type="text/css"/>
  ```
  ```css
  <style type="text/css">
  @import url("style.css");
  </style>
  ```

1. link 标签是 html 标签， link 标签除了可以加载 CSS 外，还可以做很多其它的事情，比如定义 RSS等。@import只能加载 CSS

2. link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载

3. 兼容性问题。link没有兼容性问题， @import 是在 CSS2.1 提出的，低版本的浏览器不支持(不兼容ie5以下)

4. link可以通过js操作DOM动态引入样式表改变样式，而@import不可以