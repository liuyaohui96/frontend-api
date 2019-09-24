primise源码实现参考：https://github.com/YvetteLau/Blog/issues/2

## promise 概念
promise 是JavaScript 异步编程的一种实现方法，是异步操作结果准备的占位符
```js
// readFile promises to complete at some point in the future
// 结果在某个时间返回
let promise = readFile("example.txt");
```

## Promise 优缺点
优点：一旦状态改变，就不会再变，任何时候都可以得到这个结果，将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

缺点：无法取消 Promise，当处于pending状态时，无法得知目前进展到哪一个阶段