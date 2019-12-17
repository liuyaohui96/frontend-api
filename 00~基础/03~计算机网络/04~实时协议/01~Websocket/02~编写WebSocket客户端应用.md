
## 编写WebSocket客户端应用
javascript 创建web socket 之后，会有一个HTTP请求发送到浏览器发起连接，取得服务器响应之后，建立的连接会将HTTP协议交换为web socket 协议，在URL上表现为`wss://`

1. 创建 WebSocket 对象
2. 向服务器发送数据
3. 接收服务器发送的消息
4. 关闭连接

```js
/* === websocket 事件
open 成功连接时触发
error 发生错误时候触发
close 关闭连接时触发
*/
socket.onopen = function(){}
socket.onerror = function(){}
socket.onclose = function(){}
```

## 创建 WebSocket 对象
需要创建一个 WebSocket 对象；这将会自动地尝试建立与服务器的连接。
```js
WebSocket(url[, protocols])

// === 例子
// 创建了一个新的 WebSocket，连接到地址为 ws://www.example.com/socketserver 的服务器
// 命名了一个自定义的协议 "protocolOne"，这一部分可以省略
let exampleSocket = new WebSocket("ws://www.example.com/socketserver", "protocolOne");
```

## 向服务器发送数据
对每一个要发送的消息使用 WebSocket 对象的 send() 方法
```js
// data可以是字符串，ArrayBuffer，Blob
WebSocket.send(data)
// === 例子
// 因为连接的建立是异步的，而且容易失败，所以不能保证刚创建WebSocket对象时使用 send() 方法会成功。
  //至少可以确定企图在链接建立起来之后立马发送数据，可以通过注册 onopen 事件处理器解决:
exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!"); 
};
```

## 接收服务器发送的消息
WebSockets 是一个基于事件的 API；收到消息的时候，一个 "message" 消息会被发送到 onmessage 函数
```js
exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
```

## 关闭连接
不需要再用 WebSocket 连接了,调用 WebSocket close()方法
```css
exampleSocket.close();
```