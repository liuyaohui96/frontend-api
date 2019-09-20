
## 使用Promise.resolve
Promise.resolve() 方法接受单个参数并会返回一个处于fullfilled状态的promise

```js
let promise = Promise.resolve(42);

promise.then(function(value) {
  console.log(value); // 42
});

```

## 使用Promise.rejected
Promise.rejected() 方法接受单个参数并会返回一个处于rejected状态的promise
```js
let promise = Promise.reject(42);

promise.catch(function(value) {
  console.log(value); // 42
});
```

## 接受非promise的thenable作为参数
Promise.resolve 与 Promise.reject 接受非promise的thenable作为参数

在promise引入ES6之前，许多库使用了thenable， 因此将thenable 转换为正规的promise就可以使得对已经存在的库向下兼容

```js
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value); // 42
});
```