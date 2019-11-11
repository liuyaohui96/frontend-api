
## Promise.resolve()
接受单个参数并会返回一个处于fullfilled状态的promise

1. 如果该值为promise，返回这个promise
2. 如果这个值是thenable对象，具有then方法，返回的promise会“跟随”这个thenable的对象（在promise引入ES6之前，许多库使用了thenable， 因此将thenable 转换为正规的promise就可以使得对已经存在的库向下兼容）
```js
Promise.resolve(value)

// === 例子
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

## 更多例子
```js
Promise.resolve("Success").then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // 不会被调用
});

// resolve 一个数组
let p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});

// resolve 一个promise
let original = Promise.resolve(33);
let cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value); // value: 33
});

```