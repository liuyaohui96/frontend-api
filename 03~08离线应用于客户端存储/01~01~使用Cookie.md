## Cookie
Cookie这是开发人员可以选用的一种古老的，稳定的客户端存储形式，现在已经·不建议使用它，实在要使用cookie，建议仅存储用户偏好信息和基本信息(姓名，年龄等)。

Cookie通过HTTP Header发送。以前每个域名只能有20个cookie，现在浏览器基本没有这个限制， 但web服务器一般会对cookie较多的请求响应错误。一般每个域名设置50个cookie，大小共4kb是安全的。

## 使用Cookie
```js
// 设置了一个name为foo，值为bar的cookie
// 默认情况下，cookie只会在当前会话期有效
document.cookie = 'foo=bar';

// value必须符合URI编码规则
document.cookie = 'name=' + encodeURIComponent('liu yaohui');

// 分号后可以追加元数据
// 追加一个过期时间
// 追加只对一个子域名有效
document.cookie = 'name=foo; expires=Fri, 31 Dec 9999 23:59:59 GMT;domian=app.foo.com'
// expires = Fri, 31 Dec 9999 23:59:59 GMT
```

## 读取cookie
```js
documment.cookie // 获取cookie
```

## 删除cookie
```js
// 设置为过去的时间即可
document.cookie = 'name=foo;expires=Thu, 01 Jan 1970 00:00:00 GMT'
```

## 封装cookie库
```js
// getItem

// setItem

// removeItem

// hasItem

// keys 返回所有cookie名称

```