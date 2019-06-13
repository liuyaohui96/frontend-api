构造函数调用的过程
1. 创建新对象
2. 对象进行[[ 原型 ]] 连接
3. 绑定this到新对象
4. 如果有返回对象类型Object，new 返回新对象
  - 如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值

## 代码描述
```js
// let person = new Person()
let p = (function(){
  let obj = {};
  obj.__proto__ = Person.prototype;
  return obj;
})()
```

    