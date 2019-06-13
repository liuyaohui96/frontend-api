参考文档：http://www.ruanyifeng.com/blog/2016/04/cors.html

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

## CORS预检请求
参考文档：https://www.cnblogs.com/wonyun/archive/2017/12/17/CORS_preflight.html

发生cors请求时，浏览器检测到跨域请求，会自动发出一个OPTIONS请求来检测本次请求是否被服务器接受。一个OPTIONS请求一般会携带下面两个与CORS相关的头
    * Access-Control-Request-Method : 本次预检请求的请求方法
    * Access-Control-Request-Headers：本次请求所携带的自定义首部字段

服务端收到该预检请求后，会返回与CORS相关的响应头。主要会包括下面几个，但可能还会有其他的有关CORS字段：
* Access-Control-Allow-Origin: 服务器允许的跨域请求源
* Access-Control-Allow-Methods: 服务器允许的请求方法
* Access-Control-Allow-Headers : 服务器允许的自定义的请求首部字段

预检请求只是一个检查的过程，它不会携带任何请求的参数；预检通过后的请求才会真正的携带请求参数与服务器进行数据通信

发生preflight请求的条件：
满足下面的所有条件就不会产生预检请求，也就是该请求是简单请求
1. 请求方法是GET、POST、HEAD其中任意一个
2. 必须是下面定义对CORS安全的首部字段集合，不能是集合之外的其他首部字段。    
    Accept、Accept-Language、Content-Language、Content-Type、DPR、Downlink、Save-Data、Viewport-Width、Width。
3. Content-Type的值必须是text/plain、multipart/form-data、application/x-www-form-urlencoded中任意一个值。
    实际项目中我们的请求格式可能是application/json格式编码，或者使用自定义请求头都会触发CORS的预检请求