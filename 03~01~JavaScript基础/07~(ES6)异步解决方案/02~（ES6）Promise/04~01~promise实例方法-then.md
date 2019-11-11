
## then
Promise.prototype.then() 返回一个 Promise
```js
// onFulfilled：promsise fullfilled时调用的函数。该函数有一个参数，即接受的最终结果
// onRejected： 第二个参数是promsise rejected时调用的函数，该函数有一个参数，即拒绝的原因
Promise.prototype.then(onFulfilled[, onRejected]);

Promise.prototype.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

## 例子
```js
let promise = readFile('example.txt');

promise.then(
  function(contents) {
    // fulfillment
    console.log(contents);
  },
  function(err) {
    // rejection
    console.error(err.message);
  }
);

promise.then(function(contents) {
  // fulfillment
  console.log(contents);
});

promise.then(null, function(err) {
  // rejection
  console.error(err.message);
});
```