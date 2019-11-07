
## 操作方法
1. concat
2. 查找子串方法
3. 大小写转换方法
4. trim

## concat
```js
// 拼接多个字符串，返回拼接的字符串
String.prototype.concat(string2, string3[, ..., stringN])
```

## 查找子串方法
```js
// 三个基于子字符串创建新字符串的方法
String.prototype.slice()
String.prototype.substr() // substr在IE9之前会出现问题
String.prototype.substring()
```


## 大小写转换方法
```js
// 大小写转换
String.prototype.toUpperCase()
String.prototype.toLowerCase()
```
## trim
```js
// 删除前置及后缀的所有空格
String.prototype.trim()
```