CORS（Cross-Origin Resource Sharing，跨域资源共享）是一个使用 HTTP 头授权浏览器访问跨域资源的机制。

增加一些 HTTP 头，让服务器能声明允许的访问来源
- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Max-Age: 86400 // 有效期

非同源的请求情况下，浏览器会首先进行Option请求，所谓的预请求，就是试探性请求，向服务端请求的时候，发现此接口设置了允许对应的请求方法或者请求头，会再次发送真正的请求，分别一共会向后台发送两次请求。
    - Access-Control-Max-Age 一旦在这个时间之内再次发送时，直接发送真正的请求，不通要再发送预请求
    - cache-control:
        - no-catch: 每次进行请求时都要向服务端进行验证: 如果验证并没有过期，则会发送304的状态码，通知浏览进复用浏览器的缓存
        - no-store：每次请求都需要向服务端拉取新的资源
        - privite (私有的，不经过代理缓存)