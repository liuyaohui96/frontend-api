
## Promise.race
Promise.race()方法接受一个包含多个promise的可迭代对象，返回一个promise

一旦迭代对象中的promise中有一个fullfilled，返回一个fullfilled promise

```js
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