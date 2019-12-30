
## Array.from
```js
// 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
// mapFn 可选参数，指示数组中的每个元素都会执行的回调函数
// thisArg 可选参数，指示执行回调函数mapFn时this对象
Array.from(arrayLike[, mapFn[, thisArg]])

// === 例子
Array.from('foo');  // [ "f", "o", "o" ]
```