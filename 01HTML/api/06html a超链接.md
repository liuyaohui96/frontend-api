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
  * _top 在top环境打开，如没有，以_self打开

3. rel 指示链接页面与 当前网页的关系
  * noopener 阻止在打开的页面拥有 window.opener 属性
  * rel="nofollow" 无关系，点击链接无反应

## 创建锚点链接
```html
<a href="#title">调转到title</a>
<a href="#link">跳转到link</a>

<!-- 使用 id 属性创建锚点 -->
<h1 id="title">title</h1>
<!-- 特殊地，在使用a元素创建锚点，可以使用 name 属性为其命名 -->
<a name="link">链接</a> 
```

## 超链接的表现形式
```html
<!-- 普通超链接 -->
<a href="http://www.example.com"></a>
<!-- 锚点链接 -->
<a href="#id"></a>
<!-- 下载链接 -->
<a href="example.txt"></a>
<!-- 电子邮件链接 -->
<a href="mailto:example@example.com"></a>
<!-- 空链接，用于返回顶部 -->
<a href=""></a>
<!-- 实现代码功能的链接 -->
<a href="javascript:void(0)"></a>
```