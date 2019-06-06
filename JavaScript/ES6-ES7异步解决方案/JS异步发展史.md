1. 回调函数。回调函数会发生回调地狱的问题。回调函数的使用场景：
  * 事件回调。如事件监听是异步回调，它们只有在特定事件触发后才会执行
  * Node API
  * setTimeout/setInterval中的回调函数
2. Promise解决方案，如错误不能被try catch，而且使用Promise的链式调用，其实并没有从根本上解决回调地狱的问题，只是换了一种写法
3. Generator是一种异步编程解决方案。Generator 函数可以是异步任务的容器，需要暂停的地方，都用yield语句注明。但是 Generator 使用起来较为复杂
4. ES7又提出了新的异步解决方案:async/await，async是 Generator 函数的语法糖，async/await 使得异步代码看起来像同步代码