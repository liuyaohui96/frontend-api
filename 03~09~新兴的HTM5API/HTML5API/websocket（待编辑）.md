## websocket
WebSocket是 Web 应用程序的传输协议，提供了双向的、按序到达的数据流，它的连接是持久的 它在客户端和服务器之间保持双工连接，服务器的更新可以及时推送到客户端，而不需要客户端以一定的时间间隔去轮询。

1. 支持持久连接，http协议不支持持久lia



```shell
# 发起websocket的请求头多了两个请求头部
Upgrader: websocket
Connection: Upgrade
```