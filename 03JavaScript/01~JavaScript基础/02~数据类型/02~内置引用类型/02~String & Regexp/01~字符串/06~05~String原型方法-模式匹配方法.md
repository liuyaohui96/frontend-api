
## String模式匹配方法
1. match
2. search
3. replace
4. split



## match
```js
// 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
// 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组
String.prototype.match(regexp)

// === 例子1，未使用g
var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。

// === 例子2，使用了g
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

扩展：
1. 如果需要知道一个字符串是否与一个正则表达式匹配，可使用Regexp.test()
2. 如果你只是需要第一个匹配结果,使用 RegExp.exec()
3. 如果你想要获得捕获组，并且设置了全局标志，你需要用 RegExp.exec()

## search
```js
/*
search()方法返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1
*/
String.prototype.search(regexp)
```

## replace
```js
/*
找出第一个参数匹配的字符串，替换为第二个参数, 返回被替换的新字符串，原字符串不会改变。
接受两个参数：
第一个参数可以是一个 RegExp 对象或者一个字符串,
第二个参数可以是一个字符串或者一个函数
*/
String.prototype.replace(regexp|substr, newSubStr|function)

// === 第二个参数可以是函数
// match是匹配的子串
// p1,p2, ... 代表第n个括号匹配的字符串
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```


## split
```js
/*
于指定的分隔符将一个字符串分割成多个子字符串,并将结果放在一个数组中
分隔符可以是字符串，也可以是一个 RegExp 对象
*/
String.prototype.split(sperator)
```