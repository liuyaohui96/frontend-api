primise源码实现参考：https://github.com/YvetteLau/Blog/issues/2

# promise
promise 是JavaScript 异步编程的一种实现方法。

# 使用promise
1. 创建promise， 接受一个函数作为形参，这个函数有两个参数，resolve和reject
  - promise有三种状态: fulfilled, rejected, pending
  - promise 初始状态为pending（等待）
  - promise只由pending过渡到rejected或fullfiled状态
  - 如果resolve被调用，promise状态为fullfilled(完成)
  - 如果reject被调用，promise状态为rejected(拒绝)
2. 使用then方法注册回调函数，第一个参数为fullfilled的回调函数，第二个状态为rejected的回调函数

## Promise 优缺点
优点：一旦状态改变，就不会再变，任何时候都可以得到这个结果，将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

缺点：无法取消 Promise，当处于pending状态时，无法得知目前进展到哪一个阶段


# promise方法
1. then
2. catch 捕捉错误   
  catch相当于then(null,onRejected)
3. resolve,reject   
  Promise.resolve 返回一个fulfilled状态的promise对象，Promise.reject 返回一个rejected状态的promise对象
4. all   
  参数的几个promise对象一旦有一个的状态为rejected，则all的返回值就是rejected。
5. race