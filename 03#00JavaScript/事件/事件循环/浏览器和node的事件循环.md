文档参考：http://www.ruanyifeng.com/blog/2014/10/event-loop.html

## 单线程的javascript
作为作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。
  > 如果javascript是多线程的，那么当两个线程同时对dom进行一项操作，例如一个向其添加事件，而另一个删除了这个dom，此时该如何处理呢
  > 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。CPU大多数时候都是空闲的。

单线程在保证了执行顺序的同时也限制了javascript的效率，因此开发出了web worker技术。web worker技术开的多线程有着诸多限制：
  1. 新线程都受主线程的完全控制，不能独立执行。这意味着这些“线程” 实际上应属于主线程的子线程
  2. 子线程并没有执行I/O操作的权限，只能为主线程分担一些诸如计算等任务。严格来讲，这项技术并非改变了javascript语言的单线程本质

## 浏览器事件循环
1. 调用函数的时候会产生一个执行上下文，因为js是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方。这个地方被称为执行栈。
2. js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，加入与当前执行栈不同的另一个队列，我们称之为事件队列（任务队列）
3. 待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，依次执行完微任务，再依次执行一个宏任务，那么主线程会从中取出排在第一位的事件，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环...这就叫做事件循环   
  
> 注意，异步任务之间并不相同，因此他们的执行优先级也有区别不同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）
  * macrotasks: setTimeout, setInterval, setImmediate, I/O, UI rendering
  * microtasks: process.nextTick（Node独有）, Promise, MutationObserver
  
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




