
## Window对象
BOM的核心对象是window对象，window对象是javascript访问浏览器窗口的一个接口，也是ECMAScript规定的Global对象的实现。

```js
// === 全局作用域
// 因为window对象是ECMAScript的Global对象的的实现
// 所以，在全局作用域声明的变量，函数都会变成window对象的属性和方法
var foo = 'bar'; // chrome 浏览器测试，使用let定义，window不能访问
window.foo; // 'bar'
foo; // 'bar';


//==== 是否使用window获取对象属性值的区别
let newValue = oldValue; // 变量不存在，会报错ReferenceError
let newValue = window.oldValue; // 属性不存在，返回undefined
```