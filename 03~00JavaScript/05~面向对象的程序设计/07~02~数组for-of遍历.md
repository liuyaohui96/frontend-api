## 数组for-of遍历
遍历数组的值而不是对象属性，ES6提供了for...of语法
```js
for(let value of obj){
  // ...
}

// 其他数组辅助的迭代方法
Array.prototype.forEach()
Array.prototype.flter()
Array.prototype.some()
Array.prototype.every()
Array.prototype.reduce()
```
for..of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的next() 方法来遍历所有返回值。数组有内置的 @@iterator，因此 for..of 可以直接应用在数组上



