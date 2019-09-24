
## Number类型
Number 类型重写了 valueOf()、toLocaleString()和 toString()
方法
```js
// 创建Number类型
var numberObject = new Number(10); 


var num = 10;
alert(num.toString()); //"10"
alert(num.toString(2)); //"1010"
alert(num.toString(8)); //"12"
alert(num.toString(10)); //"10"
alert(num.toString(16)); //"a" 

// ==== 数值格式化为字符串
var num = 10;
num.toFixed(2); // '10.00'
```