参考文档：http://www.ruanyifeng.com/blog/2016/04/cors.html

## CROS
CROS 使用附加的HTTP header，使得在一个origin运行的web应用程序，能够从其他origin访问资源。

用于设置CROS的头部有：
* Access-Control-Allow-Origin  & origin
* Access-Control-Allow-Headers & Access-Control-Request-Headers
* Access-Control-Allow-Methods & Access-Control-Request-Methods
* Access-Control-Max-Age
* Access-Control-Allow-Credentials 

## Access-Control-Allow-Origin
Access-Control-Allow-Origin 是response header，指定响应资源可以被哪些origin共享
```shell
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>

# 资源可以被任何域访问
Access-Control-Allow-Origin：*
# 资源的访问限制为仅来自https：//foo.example的请求
Access-Control-Allow-Origin: https://foo.example
```

> Origin 请求header，指示了请求来自哪个站点，该字段仅指示服务器名称，并不包含任何路径信息（`Referer`header 包含了路径信息）

## Access-Control-Allow-Headers
Access-Control-Allow-Headers 四response header， 用于 preflight request （预检请求）用于预检请求的响应，内容是请求 `Access-Control-Request-Headers` header 中的内容
```shell
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
Access-Control-Allow-Headers: *
```

> 请求header `Access-Control-Request-Headers` 出现于 preflight request （预检请求）中，用于通知服务器在真正的请求中会采用哪些请求头

## Access-Control-Allow-Methods
Access-Control-Allow-Methods 用于 preflight request （预检请求）中，用于预检请求的响应， 指明了实际请求所允许使用的 HTTP 方法
```shell
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

> 请求header `Access-Control-Request-Method` 出现于 preflight request （预检请求）中，用于通知服务器在真正的请求中会采用哪种  HTTP 方法。


## Access-Control-Max-Age
Access-Control-Max-Age 是response header， 表示 preflight request  （预检请求）的返回结果（即 Access-Control-Allow-Methods 和Access-Control-Allow-Headers 提供的信息） 可以被缓存多久。
```shell
# 单位是秒
Access-Control-Max-Age: <delta-seconds>

# 将预检请求的结果缓存10分钟
Access-Control-Max-Age: 600 
```
> 一旦在这个时间之内`Access-Control-Max-Age`再次发送请求，直接发送真正的请求，不通要再发送预请求

## Access-Control-Allow-Credentials
`Access-Control-Allow-Credentials` 是 response header， 表示当包含请求的凭证模式时，是否可以将响应暴露给前端JavaScript代码。所以若一个对资源的请求带了credentials，如果`Access-Allow-Credentials`header 没有随资源返回，响应就会被浏览器忽视.

```shell
# 使用带credentials的 XHR 
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true); 
xhr.withCredentials = true; 
xhr.send(null);

# 使用带credentials的 Fetch 
fetch(url, {
  credentials: 'include'  
})
```
对于附带身份凭证的请求，服务器不能设置为 Access-Control-Allow-Origin 的值为`*`。这是因为请求的首部中携带了 Cookie 信息，如果 Access-Control-Allow-Origin 的值为“*”，请求将会失败。

