
## var 声明与变量提升
使用`var`声明的变量，无论在哪个位置声明，都会被视为在函数顶部进行声明，这就是变量提升。

```js
console.log(foo); // 'undefined'
var foo = 'bar';
```