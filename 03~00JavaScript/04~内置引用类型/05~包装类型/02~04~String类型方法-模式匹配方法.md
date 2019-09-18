
## String模式匹配方法
```js
/*
本质上与调用 RegExp 的 exec()方法相同。match()方法只接受一个pattern参数
match()方法返回了一个数组。数组的第一项是与整个模式匹配的字符串，之后的每一项（如果有）保存着与正则表达式中的捕获组匹配的字符串
*/
String.prototype.match(pattern)

/*
search()方法返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1
*/
String.prototype.search(pattern)

/*
接受两个参数：第一个参数可以是一个 RegExp 对象或者一个字符串,
第二个参数可以是一个字符串或者一个函数

找出第一个参数匹配的字符串，替换为第二个参数
*/
String.prototype.replace()

/*
于指定的分隔符将一个字符串分割成多个子字符串,并将结果放在一个数组中
分隔符可以是字符串，也可以是一个 RegExp 对象
*/
String.prototype.split(sperator)
```