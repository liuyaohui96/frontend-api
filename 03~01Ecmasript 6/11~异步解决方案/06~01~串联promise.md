
## 串联promise
promise.then() & promise.catch() 实际上创建并返回一个promise， 仅当前一个promise 被 完成或者拒绝，后一个promise被完成或者拒绝时，后一个promise才会被决议。

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

p1.then(function(value) {
  console.log(value);
}).then(function() {
  console.log('Finished');
});

// 假如不使用串联，看起来是这样的
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

let p2 = p1.then(function(value) {
  console.log(value);
});

p2.then(function() {
  console.log('Finished');
});
```
