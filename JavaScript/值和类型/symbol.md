ES5 的对象属性名都是字符串，这容易造成属性名的冲突。ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。

创建方式：Symbol 值通过Symbol函数生成。直接使用Symbol()创建新的symbol变量，可选用一个字符串用于描述。当参数为对象时，将调用对象的toString()方法。
## 特点
1. 独一无二
  ```js
  // Symbol函数前不能使用new命令，否则会报错
  var sym1 = Symbol();  // Symbol() 

  var sym2 = Symbol('ConardLi');  // Symbol(ConardLi)
  var sym3 = Symbol('ConardLi');  // Symbol(ConardLi)
  console.log(sym2 === sym3);  // false
  ```
2. 原始类型
  ```js
  let name = Symbol('hello')
  typeof name // 'symbol'
  ```
3. 不可枚举
  * 调用for...in不能将其枚举出来
  * 调用Object.getOwnPropertyNames不能获取Symbol属性
  * Object.keys()也不能获取Symbol属性


## symbol for 检测或者创建symbol
创建的时候会检查全局是否寻在这个key的symbol如果存在就直接返回这个symbol,如果不存在就会创建，并且在全局注册
```js
let uid = Symbol.for("uid");
let object = {
    [uid]: "12345"
};

let uid2 = Symbol.for("uid");
console.log(uid === uid2);      // true
```

## getOwnPropertySymbols 获取 symbol key
```js
let uid = Symbol('uid')
let obj = {
    [uid]: 'uid'
}

console.log(Object.keys(obj)) // []
console.log(Object.getOwnPropertyNames(obj)) // []
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(uid)]
```

## Symbol的应用场景




1. 用Symbol作为对象属性可以保证永远不会出现同名属性，防止属性污染
2. 借助Symbol类型的不可枚举，我们可以在类中模拟私有属性
3. 防止XSS
  * React的ReactElement对象中，有一个$$typeof属性，它是一个Symbol类型的变量
  * JSON中不能存储Symbol类型的变量，这就是防止XSS的一种手段