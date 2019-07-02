## TCP三次握手
1. 发送端首先发送一个带SYN标志的数据包给对方（发送端发数据包）

> 将标识位 SYN 置为 1, seq = x(Sequence number)发送给接受端。此时发送端状态为SYN-SENT

2. 接收端收到包之后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。(接收端表示知道)

> 将标识位 SYN 和 ACK都置为1, seq = y, ack = x + 1, 并发送给客户端。将状态切换为SYN-RECEIVED,

2. 发送端再回传一个带ACK标志的数据包

> 将状态切换为ESTABLISHED，并将标识位ACK置为1，seq = x + 1, ack = y + 1, 并发送给接受端。接收端收到包之后，也将状态切换为ESTABLISHED。


## 为什么要三次握手
假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了

