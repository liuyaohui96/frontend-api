
## catch 方法
promise 的catch 方法等同于只传递rejected状态的处理函数给promise.then

```js
promise.catch(function(err) {
  // rejection
  console.error(err.message);
});

// is the same as:

promise.then(null, function(err) {
  // rejection
  console.error(err.message);
});
```

增加catch方法的意图是配合then方法，使得成功或失败的编得更加清晰，如果未给promise附加rejected状态的处理函数，那么错误就会静默发生，建议始终附加一个拒绝处理函数，即使是仅用于打印错误日志