## web worker
HTML5则提出了 Web Worker 标准，表示js允许多线程，但是子线程完全受主线程控制并且不能操作dom，只有主线程可以操作dom，所以js本质上依然是单线程语言。

web worker就是在js单线程执行的基础上开启一个子线程，进行程序处理，而不影响主线程的执行，当子线程执行完之后再回到主线程上，在这个过程中不影响主线程的执行。意义在于可以将一些耗时的数据处理操作从主线程中剥离，使主线程更加专注于页面渲染和交互


## 特点
1. 有同源限制
2. 无法访问 DOM 节点
3. 运行在另一个上下文中，无法使用Window对象


## 应用例子
子线程与主线程之间提供了数据交互的接口postMessage和onmessage，来进行数据发送和接收

```js
// 加载一个js文件用于创建一个worker实例
var worker = new Worker('./worker.js'); //创建一个子线程
worker.postMessage('Hello'); // 向worker实例发送数据

// 接受worker返回的数据
worker.onmessage = function (e) {
    console.log(e.data); //Hi
    worker.terminate(); //结束线程
};

```

```js
//worker.js
onmessage = function (e) {
    console.log(e.data); //Hello
    postMessage("Hi"); //向主进程发送消息
};
```