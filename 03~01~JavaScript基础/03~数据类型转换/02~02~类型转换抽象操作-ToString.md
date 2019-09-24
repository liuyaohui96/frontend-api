## 抽象操作ToString

1. Number类型转换为String类型：直接将数字转换为字符串
2. Number类型转换为String类型：true转换为 "true", false 转换为"false"
3. Null类型转换为String类型：null转换为 "null"
4. Undefined类型转换为String类型：undefined 转换为 "undefined"
3. 对象类型转换为String类型：对象先执行toString，看是否能转换，如果不可以再执行valueOf，看是否可以转换。得到内部属性 `[[Class]]` 的值（如 "[object Object]"）

```js
/*
使用抽象操作ToString()的操作
    String()
    除了null和undefin外的值的toSting()方法
*/

// 以String方法为例
String([]) // ''
String({}) // '[object Object]'

```