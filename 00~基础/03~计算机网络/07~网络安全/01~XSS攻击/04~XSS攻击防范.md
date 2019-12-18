
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