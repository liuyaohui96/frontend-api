
## Websocket
WebSocket 是是 Web 应用程序的传输协议，目标是在浏览器和服务器之间建立一个持久，双向的通信连接，用于用户浏览器和服务器之间的双向交互式通信会话。使用WebsocketAPI，您可以将消息发送到服务器并接收事件驱动的响应，而不必轮询服务器以获取答复。

客户端仍然必须启动WebSocket握手过程
```shell
# 发起websocket的请求头多了两个请求头部
Upgrader: websocket
Connection: Upgrade
```

## 接口
1. WebSocket：连接到WebSocket服务器，然后在连接上发送和接收数据的主要接口
2. CloseEvent：连接关闭时WebSocket对象发送的事件。
3. MessageEvent: 从服务器收到消息时，WebSocket对象发送的事件



