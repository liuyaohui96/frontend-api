
## Fetch
Fetch API基本上是XHR的一个现代替代品——它是最近在浏览器中引入的，它使异步HTTP请求在JavaScript中更容易实现

Fetch API 包括：
1. fetch():Fetch API 提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。
2. Headers：response/request 的头信息
3. Request：请求
4. Response：响应
```js
// 简单Ajax例子
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';

request.onload = function() {
  poemDisplay.textContent = request.response;
};

request.send();

// === 替换为Fetch
fetch(url).then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```