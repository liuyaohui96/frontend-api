
## Promise.race()
Promise.race() 方法返回一个 已决的（settled）的promise实例。一旦迭代器中的某个promise resolve或reject，返回的就会 resolve或reject, 即取决于迭代器参数中第一个已决（settled)的promise状态
```js
Promise.race(iterable)

// === 例子
let p1 = Promise.resolve(42);

let p2 = new Promise(function(resolve, reject) {
  resolve(43);
});

let p3 = new Promise(function(resolve, reject) {
  resolve(44);
});

let p4 = Promise.race([p1, p2, p3]);

p4.then(function(value) {
  console.log(value); // 42
});
```