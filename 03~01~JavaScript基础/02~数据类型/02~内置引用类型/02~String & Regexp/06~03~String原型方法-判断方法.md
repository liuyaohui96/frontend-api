## 判断方法
1. includes
2. startsWith & endsWith
3. match

## includes
```js
// includes 方法属于ES6标准的方法，判断是否包含指定的字符串
// searchString 是要搜索的字符串
// position 是搜索的其实位置，如果省略，默认为0
// 如果找到搜索的字符串，返回true，否则返回false
String.prototype.includes(searchString[, position])
```


## startsWith & endsWith
```js
// 判断是否以指定字符串开始或者结尾
// searchString 是要搜索的字符串
// position 是搜索的其实位置，如果省略，默认为0
// 如果找到搜索的字符串，返回true，否则返回false
String.prototype.startsWith(searchString[, position])
String.prototype.endsWith(searchString[, position])
```


