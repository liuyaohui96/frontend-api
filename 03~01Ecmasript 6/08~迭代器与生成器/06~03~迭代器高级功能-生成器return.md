

## 生成器内使用return
return 表示生成器内所有的处理已经完成，done被赋值为`true`, 如果提供了返回值，返回值作为`value`值
```js
function* createIterator() {
  yield 1;
  return 42;
}

let iterator = createIterator();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 42, done: true }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
```