## Cookie
Cookie 有以下特点：
1. HTTP请求头重自动携带。Cookie，又叫 HTTP cookie, Cookie 通过 HTTP Header 发送。

2. 作用域：Cookie 绑定在特定的域名下。不同的域不能访问，同一个域不同文件可以访问。

3. 生命周期：默认是临时存储（关闭浏览器即消失，长时间存储需要设置过期时间）
3. 数量大小限制：以前每个域名只能有 20 个 cookie，现在浏览器基本没有这个限制， 但 web 服务器一般会对 cookie 较多的请求响应错误。一般每个域名设置 50 个 cookie，大小共 4kb 是安全的。


Cookie是开发人员可以选用的一种古老的，稳定的客户端存储形式，现在已经不建议使用它，实在要使用 cookie，建议仅存储用户偏好信息和基本信息(姓名，年龄等)。

Cookie随每个请求一起发送，因此它们可能会降低性能（尤其是对于移动数据连接而言）。现代客户端存储推荐使用Web storage API（localstorage & sessionstorage） 或者 IndexedDB

## Cookie的主要用途
1. session 管理。用户，购物车，游戏分数等不敏感信息
2. 用户的个性化配置


## cookie 的构成

1. name: name 必须是经过 URL 编码
2. value: value 必须是经过 URL 编码
3. doman: 设置指定域名才能发送 cookie
4. path: 指定域中的某个路径应该向服务器发送 cookie
5. expires: 失效时间
6. secure: 安全标志,指定后，cookie 只有在 SSL 连接才能发送到服务器。