
## 协议扩展切换
设置upgrade 请求头，服务器能够了解客户端支持的通信协议（如WebSocket）

```shell
# 请求头部举例
connection: Upgrade;
upgrade: websocket;

# 如果服务器支持websocket，则允许客户端连接
# 在响应头部信息中返回
connection: Upgrade;
upgrade: websocket;

```
