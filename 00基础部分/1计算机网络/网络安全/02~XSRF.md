## CSRF(Cross-site request forgery)
跨站请求伪造。


## 防范办法
* 验证码,用户体验虽然不好,但是很多场合下可以防范大多数攻击
* 验证 HTTP Referer 字段,判断请求来源
* token加密解密

任何防范都有代价的,比如验证码造成的体验不好,token滥用造成的性能问题,轮询替换造成的响应时间等