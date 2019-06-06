TCP三次握手

1. 第一次，本机将标识位 SYN 置为 1, seq = x(Sequence number)发送给服务端。此时本机状态为SYN-SENT
2. 第二次，服务器收到包之后，将状态切换为SYN-RECEIVED，并将标识位 SYN 和 ACK都置为1, seq = y, ack = x + 1, 并发送给客户端。
3. 第三次，客户端收到包后，将状态切换为ESTABLISHED，并将标识位ACK置为1，seq = x + 1, ack = y + 1, 并发送给服务端。服务端收到包之后，也将状态切换为ESTABLISHED。


假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了

