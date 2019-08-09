

## Node.js的事件循环
node中事件循环的实现是依靠的libuv引擎
  > node选择chrome v8引擎作为js解释器，v8引擎将js代码分析后去调用对应的node api，而这些api最后则由libuv引擎驱动, 将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎,V8引擎再将结果返回给用户。

libuv引擎中的事件循环的模型如下：
![libuv事件循环模型](libuv事件循环模型.png)

- timer 阶段: 执行到期的setTimeout / setInterval队列回调
- I/O 阶段: 执行上轮循环残流的callback
- idle, prepare
- poll: 等待回调
-   - 执行回调
-   - 执行定时器
-     - 如有到期的setTimeout / setInterval， 则返回 timer 阶段
-     - 如有setImmediate，则前往 check 阶段
- check
-   -执行setImmediate
- close callbacks

除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与"任务队列"有关的方法：process.nextTick和setImmediate  
  - process.nextTick方法在当前"执行栈"的尾部触发,所以指定的任务总是发生在所有异步任务之前
  - setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像