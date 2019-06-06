## 属性
1. Math.PI

## 函数

1. Math.round() 四舍五入
  Math.ceil 向上去整
  Math.floor 向下取整
2. Math.random()  0 (inclusive) and 1 (exclusive)
3. Math.max([value1[, value2[, ...]]])
4. Math.min([value1[, value2[, ...]]])
5. Math.abs(x) 绝对值
6. Math.pow(base, exponent) 指数
7. Math.sqrt(x)
  
## 题目
```js
Math.ceil(-0.5) // 函数返回大于或等于一个给定数字的最小整数----即0
Math.round(-0.5) // 四舍五入。-0.5四舍五入为0
Math.floor(-0.5)  // 向下取整。-0.5向下取整为 -1

console.log(Math.round(-0.5)) // 0
console.log(Math.round(-0.4)) // 0
console.log(Math.round(-0.6)) // -1
```