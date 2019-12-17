
## Promise.all()
返回一个已决（settled）的promise实例，其状态分为
1. fullfilled
    * 传入的可迭代对象参数为空，同步地返回一个已完成fullfilled状态的promise
    * 传入的promise 都变为fullfilled， 返回的 promise 异步地变为完成fullfilled
    * 传入的可迭代对象内没有 promise，返回的 promise 异步地变为完成fullfilled

2. rejected
    * 传入的 promise 中有一个失败（rejected），返回的promise异步变为rejected，而不管其它 promise 是否完成

```js
Promise.all(iterable);
```

## 例子
```js
// 所有都fullfilled的promise例子
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});f
  resolve(43);
});
let p3 = new Promise(function(resolve, reject) {
  resolve(44);
});


let p4 = Promise.all([p1, p2, p3]);
// 一个包含了决议值的promise
p4.then(function(value) {
  console.log(Array.isArray(value)); // true
  console.log(value[0]); // 42
  console.log(value[1]); // 43
  console.log(value[2]); // 44
});

// === 一个promise rejected 的例子，Promise.all()返回rejected promise
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
  reject(43);
});

let p3 = new Promise(function(resolve, reject) {
  resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
  console.log(Array.isArray(value)); // false
  console.log(value); // 43
});
```