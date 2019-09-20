
## Promise.all
Promise.all() 方法接受单个迭代对象（如数组）作为参数，这个可迭代对象的元素都是promsise，只有在所有promise都fullfilled，返回的promise才能被完成。若传递给Promise.all()方法的任意promise 被拒绝，该方法返回的一个rejectd 的promise

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
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

// === 一个promise被决绝，则Promise.all()返回rejected promise
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