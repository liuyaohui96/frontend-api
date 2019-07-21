## Ajax
AJAX 是 Asynchronous JavaScript and XML，指的是通过 JavaScript 的异步通信，从服务器获取 XML 数据(现在服务器返回的都是 JSON 格式的数据，XML 格式已经过时)，更新当前网页的对应部分，而不用刷新整个网页。

## 简单ajax实现
步骤：
1. 创建 XMLHttpRequest 实例
2. 使用open()方法发出 HTTP 请求
3. 监听和接收服务器传回的数据

XMLHttpRequest对象简单用法的完整例子
```js
var xhr = new XMLHttpRequest();

xhr.open('GET', '/endpoint', true);

xhr.send(null);

xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if(xmlHttp.readyState == 1||xmlHttp.readyState == 2||xmlHttp.readyState == 3){
        // 本地提示：加载中...
  }
  else if(xhr.readyState === 4){
    if ((xhr.status >= 200 && xhr.status<300)|| xhr.status==304){
      // 返回结果
      console.log(xhr.responseText);
    } else {
      // 返回错误信息
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
```