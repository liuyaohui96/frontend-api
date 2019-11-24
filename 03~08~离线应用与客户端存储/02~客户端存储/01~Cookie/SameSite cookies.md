
## SameSite cookies 
SameSite cookie使服务器不将cookie与跨站点一起发送，从而为跨站点请求伪造攻击（CSRF）提供了一些保护。
```shell
# 设置 SameSite 指令
# Strict 浏览器将仅发送用于相同站点请求的cookie。
  # 如果请求源自与当前位置的URL不同的URL，则不会包含任何带有Strict属性标记的cookie。
# None 浏览器将发送带有跨站点请求和相同站点请求的cookie。
# Lax 跨域的子请求中cookie将会被扣压（例如加载图片和frame等），如果用户导航到外部URL（例如超链接）将可以发送Cookie
Set-Cookie: key=value; SameSite=Strict
```

以前，如果未设置SameSite属性或浏览器不支持SameSite属性，则默认行为是将cookie包含在任何请求中，包括跨域请求，但是，新版本的浏览器默认为`SameSite = Lax`, 即未设置SameSite属性的cookie，就像将SameSite属性的值设置为Lax一样，这意味着将仅在第一方上下文中自动发送cookie。要指定在同一站点和跨域请求中都发送cookie，必须将该值显式设置为None。