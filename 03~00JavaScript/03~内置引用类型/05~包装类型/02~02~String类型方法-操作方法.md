
## String操作方法

```js
// 返回拼接字符串
String.prototype.concat(str1, str2,...)

// 三个基于子字符串创建新字符串的方法
String.prototype.slice()
String.prototype.substr() // substr在IE9之前会出现问题
String.prototype.substring()

// 大小写转换
String.prototype.toUpperCase()
String.prototype.toLowerCase()

// 删除前置及后缀的所有空格
String.prototype.trim()

```