

## async 函数是什么？
ES2017 标准引入了 async 函数，使得异步操作变得更加方便。一句话，它就是 Generator 函数的语法糖。

async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

async函数返回一个 Promise 对象。async函数内部return语句返回的值，会成为then方法回调函数的参数。

async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

## 注意
1. 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
2. await命令只能用在async函数之中，如果用在普通函数，就会报错。
3. 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
  ```js
  //下面两种写法都可以同时触发
  //法一
  async function f1() {
      await Promise.all([
          new Promise((resolve) => {
              setTimeout(resolve, 600);
          }),
          new Promise((resolve) => {
              setTimeout(resolve, 600);
          })
      ])
  }
  //法二
  async function f2() {
      let fn1 = new Promise((resolve) => {
              setTimeout(resolve, 800);
          });
      
      let fn2 = new Promise((resolve) => {
              setTimeout(resolve, 800);
          })
      await fn1;
      await fn2;
  }
  ```