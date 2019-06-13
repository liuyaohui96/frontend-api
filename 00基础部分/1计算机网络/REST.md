RSET（REpresentational State Transfer 表述性状态转移）是一个用于网络架构的软件设计模式.

RESTful可以通过一套统一的接口为 Web，iOS和Android提供服务
1. URL root: 使用API versioning2 `example.org/api/v1/*`
  

2. URI使用名词而不是动词，且推荐用复数
   * 查：/posts/ => GET
  * 增：/posts/new => POST
  * 改：/posts/:id => PUT
  * 删：/posts/:id => DELETE
  ```http
  GET /products : will return the list of all products
  POST /products : will add a product to the collection
  GET /products/4 : will retrieve product #4
  PATCH/PUT /products/4 : will update product #4
  ```

3. 保证 HEAD 和 GET 方法是安全的，不会对资源状态有所改变（污染）

4. 使用正确的HTTP Status Code表示访问状态
5. 在返回结果用明确易懂的文本（String。注意返回的错误是要给人看的

6. 关于安全：自己的接口就用https，加上一个key做一次hash放在最后即可。考虑到国情，HTTPS在无线网络里不稳定，可以使用Application Level的加密手段把整个HTTP的payload加密。有兴趣的朋友可以用手机连上电脑的共享Wi-Fi，然后用Charles监听微信的网络请求（发照片或者刷朋友圈）。如果是平台的API，可以用成熟但是复杂的OAuth2
