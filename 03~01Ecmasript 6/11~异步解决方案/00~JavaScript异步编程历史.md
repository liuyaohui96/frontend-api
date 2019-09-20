
## 异步编程的背景
Javascript 引擎建立在单线程事件循环上，单线程（single thread）意味着同一时刻只能执行一段代码。代码放置在作业队列（job queue）中，每当一段代码准备被执行，就会被添加到作业队列。当javascript引擎结束当前代码的执行后，事件循环就会执行队列中的下一个作业，事件循环（event loop）是javascript引擎的一个内部处理线程，能监视和管理作业队列。

> 多段代码同时执行，维护和保护状态是个难题，很容易出现bug

## 事件模型
javascript异步编程的组基本形式是事件模型，当事件发生时，事件处理程序就会被添加到作业队列的尾部。

局限性：事件可以完成简单的交互，但是多个分离的异步调用串联在一起会很麻烦，面对复杂的需求时仍然不够灵活

## 回调模式
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
回调模式的串联会导致回调地狱（callbac hell）

## Promise解决方案
如错误不能被try catch，而且使用Promise的链式调用，其实并没有从根本上解决回调地狱的问题，只是换了一种写法

## Generator是一种异步编程解决方案。
Generator 函数可以是异步任务的容器，需要暂停的地方，都用yield语句注明。但是 Generator 使用起来较为复杂

## async/await
ES7又提出了新的异步解决方案:async/await，async是 Generator 函数的语法糖，async/await 使得异步代码看起来像同步代码