## 抽象操作ToNumber
1. String类型转换为Number类型：进行整体转换，特殊地，`''`转换为0，如果转换不成功，返回NaN
2. Boolean类型转换为Number类型：true 转换为 1，false 转换为 0
3. undefined 转换为Numbeer类型： NaN，null 转换为 0
4. 对象转换为Number类型：对象（包括数组）会首先被转换为相应的基本类型值。先执行valueOf()，看是否能转换为基本类型值，如果不可以，再执行toString()，看是否可以转换为相应的基本类型值。如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为Number类型。


## ToNumber 抽象操作例子
```js
/*
以下行为执行 ToNumber 抽象操作
    Number()
    一元操作符 `++ --`
    一元加或减操作符 `+ -`
    算术运算符`- * / %`
    当算术运算符`+`操作数没有字符串类型时
*/

// === 以下举例 Number()
Number('123') // 123
Number('123abc') // NaN
Number('') // 0

Number(true) Number(false) // 1 0
Number(null) // 0
Number(undefined) // NaN

// 对象转换为数值，调用其valueOf方法，如果返回值不是数值
// 则调用toString方法
let obj = {};
obj.__proto__.valueOf = function() {
  return 10;
};
obj.__proto__.toString = function() {
  return 20;
};
console.log(Number(obj));
```

## 特殊的Number类型转换操作
对于Number类型的转换还有`parseInt(string[,base]) | parseFloat(string)` 用于将字符串转换为Number类型，他们不会对整体的字符串进行转换，而是截取其中符合它们定义规则的部分转换为Number类型
```js
// parseInt(value, base)， base指定哪种进制解释value为十进制数字
// ECMAScript 5 的parseInt 不再解释八进制
parseInt('070') // 70
parseInt('0xf') // 15
parseInt('f', 16) // 15
parseInt('123abc') // 123
parseInt('123.4') // 123

// === parseFloat()
parseFloat('123.4abc') // 123.4
```



