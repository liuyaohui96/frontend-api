XSS攻击利用用户对web站点的信任，而CSRF攻击则利用网站对其用户的信任

## XSS(Cross Site Scripting)
跨站脚本攻击（Cross-Site Scripting），为了和 CSS 区分，第一个字母改为 X，叫做 XSS

原理是攻击者通过在目标网站上注入恶意脚本，令恶意脚本在用户的浏览器上运行。


## 分类

```html
<!-- ===  存储型XSS。提交未处理数据存储到数据库，通过数据库读取出来，插入到页面中 -->
<div>{{content}}</div>
<div><script>...s</script></div>

<!-- === 反射型XSS，从网页的URL参数注入可以被解析为内容的代码 -->

<!-- === DOM型XSS 在渲染DOM属性时，攻击脚本插入DOM属性被解析 -->
<div class="{{class}}"></div>
<div class="
   "><script>...</script><div class="
"></div>
```


## 常见攻击手段：
1. 链接：看似安全链接，用户点击后，窃取cookie中的用户私密信息
2. 表单：用户提交表单时，将表单数据发送到攻击者的服务器上

## 防范
* 对可能含有的攻击内容进行HTML字符编码转义
* 对具有script或者javascript大小写字符的提交内容进行安全检查
```js
// 特殊字符被转义后，只会被显示在页面上，而不会被解释
function htmlEncode(str){
  if(str.length === 0) reutrn '';
  let s = '';
  s = str.replace(/&/, '&amp;');
  s = str.replace(/</, '&lt;');
  s = str.replace(/>/, '&gt;');
  s = str.replace(/ /, '&nbsp;');
  s = str.replace(/\.'/, '#39');
  s = str.replace(/"/, '&quot;');
  s = str.replace(/\n/, '<br>');
  return s;
}

```

1. 对用户输入的特殊字符进行过滤，如`< > ; `等字符进行过滤；对输入的长度进行限制
  * 客户端，使用 textContent 替代 innerHTML，阻止浏览器运行通过 HTML 解析器执行其中的脚本的字符串。
  * 服务端，转义 HTML 标签来阻止浏览器解析用户实际输入的 HTML，因此也不会执行脚本；模板引擎和成熟的渲染框架都自带转义的功能
2. 对用户的输入进行encode
3. 避免在cookie中存放重要的用户隐私信息
4. 其他