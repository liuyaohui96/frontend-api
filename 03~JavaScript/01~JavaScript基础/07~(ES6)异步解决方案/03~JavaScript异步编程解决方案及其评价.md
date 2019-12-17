
## 异步编程解决方案

解决方案：
1. 事件模型
2. 异步回调
3. promise
4. generator
5. async / await

## 事件模型
javascript异步编程的组基本形式是事件模型，当事件发生时，事件处理程序就会被添加到作业队列的尾部。

评价：事件可以完成简单的交互，但是多个分离的异步调用串联在一起会很麻烦，面对复杂的需求时仍然不够灵活

## 异步回调
回调函数的使用场景：
* 事件回调。如事件监听是异步回调，它们只有在特定事件触发后才会执行
* Node API
* setTimeout/setInterval中的回调函数

```js
// node.js example
readFile('example.txt', function(err, contents) {
  if (err) {
    throw err;
  }

  console.log(contents);
});
console.log('Hi!');
```

评价：回调模式的串联会导致回调地狱（callbac hell），代码难以阅读和维护

## 合作异步JavaScript
setTimeout() & setInterval() & requestAnimationFrame()

## Promise解决方案
如错误不能被try catch，而且使用Promise的链式调用，其实并没有从根本上解决回调地狱的问题，只是换了一种写法

## Generator是一种异步编程解决方案。
Generator 函数可以是异步任务的容器，需要暂停的地方，都用yield语句注明。但是 Generator 使用起来较为复杂

## async/await
ES7又提出了新的异步解决方案:async/await，async是 Generator 函数的语法糖，async/await 使得异步代码看起来像同步代码