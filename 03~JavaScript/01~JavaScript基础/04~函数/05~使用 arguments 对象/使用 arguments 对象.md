
## 使用 arguments 对象
函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内可以`arguments[i]`找到对应的参数

```js
// === 例子
// 第一个参数作为separator分隔符，第二个往后的参数使用arguments进行连接
function myConcat(separator) {
   var result = ''; // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}


```