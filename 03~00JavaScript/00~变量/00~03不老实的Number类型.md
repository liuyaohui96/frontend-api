1. 精度丢失。二进制存储的，所以在计算时计算机要把数据先转换成二进制进行计算。计算`0.1+0.2`时，二进制计算发生了精度丢失
  
> ECMAScript中的Number类型遵循IEEE 754标准。使用64位固定长度来表示。JavaScript使用的是64位双精度浮点数编码，所以它的符号位占1位，指数位占11位，尾数位占52位
  * 符号位就是标识正负的，1表示负，0表示正
  * 指数位存储科学计数法的指数
  * 尾数位存储科学计数法后的有效数字

一个解决方案是，定义一个误差值（epsilon），使得两数之差小于这个值，然后通过函数判断它们是否近似相等
```js
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true
```

2. JavaScript能表示的最大数字
> IEEE 754双精度64位规范的限制：
  * 指数位能表示的最大数字：1023(十进制)
  * 尾数位能表达的最大数字即尾数位都位1的情况
  * 1.111...X 21023 这个结果转换成十进制是1.7976931348623157e+308,这个结果即为`Number.MAX_VALUE`

> 最大安全数字 `Number.MAX_SAFE_INTEGER`
> 超出`Number.Max_value`的值为Infinity，超出了`Number.Min_value`的值为-Infinity


1. 最大安全数字
  JavaScript中

4. 