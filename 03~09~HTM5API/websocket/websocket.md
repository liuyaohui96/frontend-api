## websocket
WebSocket是 Web 应用程序的传输协议，目标是在浏览器和服务器之间建立一个持久，双向的通信连接。
```shell
# 发起websocket的请求头多了两个请求头部
Upgrader: websocket
Connection: Upgrade
```

## 使用websocket api
javascript 创建web socket 之后，会有一个HTTP请求发送到浏览器发起连接，取得服务器响应之后，建立的连接会将HTTP协议交换为web socket 协议，在URL上表现为`wss://`
```js
// === 创建一个websocket对象
/*
传入的URL参数必须是绝对垃圾ing
同源策略对web socket 不适用，是否与某个域通信取决于服务器
*/
let socket = new WebSocket('ws://www.example.com/server.php');

// === 关闭连接
socket.close();

// === 发送数据,只能发送纯文本数据，如果是复杂的数据需要借助JSON对象先进行序列化
socket.send('hello world');

/* === websocket 事件
open 成功连接时触发
error 发生错误时候触发
close 关闭连接时触发
*/
socket.onopen = function(){}
socket.onerror = function(){}
socket.onclose = function(){}
```