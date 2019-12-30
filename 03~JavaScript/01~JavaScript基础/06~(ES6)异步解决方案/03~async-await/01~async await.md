
## async await
Promise能很好地解决回调地狱的问题，但如果处理流程比较复杂的话，那么整段代码将充斥着then，语义化不明显，代码不能很好地表示执行流程。

ES2017 标准引入了 async + await，使得异步操作变得更加方便,它是 Generator 函数的语法糖(使异步代码看起来更像是同步代码，更易于编写和阅读)

## async 函数
async 函数返回一个promise对像
```js
// 异步函数声明
async function func(){}

// 异步函数表达式
let func = async function(){}

// 异步箭头函数
let func = async () => {}
```

## await
1. await 只能存在于async函数中
2. await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
3. async函数一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
4. 必须等到async 函数内部所有await命令执行完，async返回的promise对象才能转变为fullfilled状态，如果出错或者其中await后的promise是rejected状态，则返回的promise对象转变为rejected对象

```js
async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then((value) => console.log(value));
```