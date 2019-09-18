ECMAScript 数组的每一项可以保存任何类型的数据, 数组的大小是可以动态调整的

## 创建数组的方式
```js
//======== 构造函数方式
let arr = new Array()

// 指定length
let arr = new Array(10) // length 为 10
// 指定值
let arr = new Array('foo', 'bar');
// 可以省略new
let arr = Array('foo', 'bar');

// ======= 使用字面量
let arr =['foo', 'bar']
```

## 数组也是对象
```js
let arr = ['foo'];
arr.bar = 'bar'
arr.length // 1
arr.bar // 'bar'
```