## Object.is() 与比较操作符 ===、== 有什么区别？
Object.is() 类似于 ===，但是有一些细微差别，如下：

NaN 和 NaN 相等
-0 和 +0 不相等

```js
console.log(Object.is(NaN, NaN));//true
console.log(NaN === NaN);//false
console.log(Object.is(-0, +0)); //false
console.log(-0 === +0); //true
```