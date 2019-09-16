
## HTTP 持久连接
持久连接指客户端和服务器的连接在一段时间内有效，当一个文件传输连接建立后，其他文件在保持连接时期，仍然能够复用这个连接。

HTTP 1.1 通过keep-alive 头部设置持久连接

HTTP 1.0 默认响应不反悔keep-alive头部，所以需要设置`connection: keep-alive`

