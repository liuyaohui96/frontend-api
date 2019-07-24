
## 配置Cache-control
Http 1.1 引入了Cache-control来克服Expires的限制，因为Expires要求服务器和客户端时间严格同步。

Cache-control可以使用max-age指定资源被缓存多久，时间为s
```c
Cache-control: max-age = 315360000
```
Cache-control可以覆盖Expires的设置

