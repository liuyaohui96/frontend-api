## 抽象操作ToBoolean
1. Number类型转换为Boolean类型：除了`0 | -0 | NaN`转换为false，其他都转换为true
2. String类型转换为Boolean类型：除了`''`转换为false，其他转换为false
3. Null 和 Undefined类型 都转换为false
4. 对象类型都为true

```js
/* 
执行ToBoolean抽象操作的行为
  Boolean()
  逻辑运算符 !
  !!
*/

// 以下以Boolean()作为例子
Boolean(0) // false
Boolean(NaN) // false

Boolean('') // false
Boolean('abc') // true

Boolean(null) // false
Boolean(undefined) // false

Boolean({}) // true
Boolean([]) // true
```

> 根据ToBoolean抽象操作，可以得出假值有：`fasle | 0 -0 NaN | '' | null | undefined`

特殊的，对于逻辑运算符 `&& ||`, 如果有一个操作数不是布尔值的情况下，不一定返回布尔值
```js
// && 和 || 都会有短路效应
true && false // 返回false
false && true // 返回false
true && true // 返回true
0 && true  // 返回true
true && 0 // 返回0

true || false // 返回true
false || true // 返回false
false || false // 返回true
0 || true  // 返回true
true || 0  // 返回true
0 || '' // 返回''
```
