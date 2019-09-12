
## Comet
Comet 是指更高级的Ajax技术，也称为服务器推送，Ajax是页面向服务器请求数据的技术，而Comet则是服务器向页面推送的技术

## 实现Comet的方式
1. 长轮询。长轮询是指页面发送一个服务器请求，服务器一直保持连接，直到有数据发送，发送完数据之后，浏览器关闭连接，随即又发起一个到服务器的新请求，这一过程，在页面打开期间一直持续不断。短轮询与长轮询最大的区别是长轮询等待发送响应。
2. 流，即HTTP流，页面的整个生命周期只使用一个HTTP连接，浏览器发送一个请求，而服务器保持连接打开，周期性向服务器发送数据。

## 实现Commet的两个接口
1. SSE

```js
// === 预定新的事件流, 传入一个作为入口点URL参数，
let source = new EventSource("myevents.php");

/* === 事件
open 建立连接时触发
message 从服务器接收到使劲按时触发
error 无法建立连接时候触发
*/
source.onmessage = function(event){
    var data = event.data;
}

// === 后续待编辑
```



2. websocket

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