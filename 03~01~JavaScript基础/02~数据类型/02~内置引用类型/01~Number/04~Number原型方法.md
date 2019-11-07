
## Number 原型方法
```js
// 使用定点表示法 表示给定数字的字符串
Number.prototype.toFixed()
// 使用指数表示法 表示给定数字的字符串
Number.prototype.toExponential()

// 返回指定 Number 对象的字符串表示形式
// 重写了Object.prototype.toString()
Number.prototype.toString([radix])
var num = 10;
console.log(num.toString()); //"10"
console.log(num.toString(2)); //"1010"
console.log(num.toString(8)); //"12"
console.log(num.toString(10)); //"10"
console.log(num.toString(16)); //"a" 

// 返回 指定 Number 对象的原始值
// 重写了Object.prototype.valueOf()
Number.prototype.valueOf()
```