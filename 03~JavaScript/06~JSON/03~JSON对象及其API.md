## JSON对象
早期的JSON解析器基本是使用JavaScript的eval()函数，使用eval函数求值存在风险，可能会执行一些恶意代码。所以，ECMAScript5定义了全局对象JSON

```js
/* === JSON.stringify(objectFromClient)
将浏览器的javascript对象转换为JSON格式
*/


/* === JSON.parse(jsonFromServer) 
将服务器的JSON数据转换为javascript对象
*/

/* === 对于JSON对象的属性访问,修改，删除，遍历与javascript一样*/
myObj = { "name":"John", "age":30, "car":null };
myObj.name; // john
myObj["name"]; // john

myObj.name = 'mary'; // modify
for( x in myObj){
  myObj[x]; // must use [] syntax
}
delte myObj.name // delete a key
```

## JSON序列化和解析选项
```js
/* === JSON.stingfy(jsObject, filter, indent))还可以额外指定两个参数 
filter 可以是一个函数，也可以是一个数组
indext 是指示缩进的字符
*/

// 只会筛选title和age属性
JSON.stringfy(obj, ["name", "age"])
JSON.stringfy(obj, function(key, value){
  // 每一项都会使用该函数进行筛选，最终通过retrun语句返回
  // 例如
  switch(key){
    case "authors": return value.join(".");
    case ...
    // ...
  }
})

// 缩进4个空格
JSON.stringfy(obj, null, 4)
JSON.stringfy(obj, null, '-') // 非数值，则使用指定的值代替空格作为缩进的字符


/* === JSON.parse(jsonObj, reviver)
reviver 是一个还原函数，可以将jsonObj解释的特定值，进一步的转换
*/
JSON.parse(jsonObj, function(key, value){
  // ...
})
```