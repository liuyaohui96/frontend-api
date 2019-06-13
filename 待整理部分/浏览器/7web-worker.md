# web worker
意义在于可以将一些耗时的数据处理操作从主线程中剥离，使主线程更加专注于页面渲染和交互

- 有同源限制
- 无法访问 DOM 节点
- 运行在另一个上下文中，无法使用Window对象

```js
var worker = new Worker('worker.js')
```

Worker 线程和主线程都通过 postMessage() 传递数据