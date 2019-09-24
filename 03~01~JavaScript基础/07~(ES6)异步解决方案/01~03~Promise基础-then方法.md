
## then 方法
then 方法在所有的promise对象都存在，接受两个参数
1. 第一个参数是promsise fullfilled时调用的函数
2. 第二个参数是promsise rejected时调用的函数

then() 方法的参数是可选的，监听fullfilled & rejected 可以随意组合，如
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