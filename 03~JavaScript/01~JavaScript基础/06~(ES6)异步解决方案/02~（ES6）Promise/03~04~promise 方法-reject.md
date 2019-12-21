
## reject
Promise.rejected() 方法接受单个参数并会返回一个处于rejected状态的promise
```js
Promise.reject(reason)

// === 例子
let promise = Promise.reject(42);

promise.catch(function(value) {
  console.log(value); // 42
});
```