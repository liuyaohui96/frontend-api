1. let 和 const 指令
2. 新类型：symbol set 和 map
3. 解构赋值
  * 普通解构赋值（一一对应）
  * 解构赋值，允许指定默认值
  * 对象解构赋值以及默认值指定
    let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
  * 字符串解构赋值
  * 函数参数的解构赋值
4. 数值
  * ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
  * 提供了Number.isFinite()和Number.isNaN()两个方法；Number.isInteger()用来判断一个数值是否为整数
  * JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。ES6 引入了`Number.MAX_SAFE_INTEGER`和`Number.MIN_SAFE_INTEGER`这两个常量，用来表示这个范围的上下限。`Number.isSafeInteger()`则是用来判断一个整数是否落在这个范围之内

5. 字符串
  - 模板字符串
  - 新增方法
    * includes(), startsWith(), endsWith()等
  - 


6. 数组
  - 扩展运算符，将一个数组转为用逗号分隔的参数序列，由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了，还可以用来复制数组，合并数组
  - Array.from方法用于将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组
  - Array.of Array.of方法用于将一组值，转换为数组
  - find() 和 findIndex()
  - fill方法使用给定值，填充一个数组
    - arr.fill(value[, start[, end]])

7. 对象
  - 属性的简洁表示法
    ```js
    const foo = 'bar';
    const baz = {foo};
    baz // {foo: "bar"}

    // 等同于
    const baz = {foo: foo};
    ```
  - 属性计算
  - 属性的可枚举性和遍历
    - 描述对象的enumerable属性
  - 新增方法
    * Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
    * __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
    * Object.keys()，Object.values()，Object.entries()
      * Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
        ```js
        const obj = { foo: 'bar', baz: 42 };
        Object.entries(obj)
        // [ ["foo", "bar"], ["baz", 42] ]
        ```
8. 函数
  * 为函数的参数指定默认值,参数默认值可以与解构赋值的默认值，结合起来使用。
  * 箭头函数

9. 异步解决方案
  * promise
  * generator

10. class 和 super

11. Es6 模块化
12. ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例
