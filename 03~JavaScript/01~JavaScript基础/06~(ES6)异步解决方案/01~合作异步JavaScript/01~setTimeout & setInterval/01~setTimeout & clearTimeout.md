
## setTimeout() & clearTimeout()
setTimeout() 设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码

clearTimeout(timerId) 清楚指定timerId的计时器
```js
// function 是 指定delay后运行的函数
// parm1... 是可选的，附加给function的参数
// 返回值timeoutID是一个正整数，表示定时器的编号。这个值可以传递给clearTimeout()来取消该定时器
setTimeout(function[, delay, param1, param2, ...])

// clearTimeout(timerId) 
```

## setTimeout 变通方法
```js
// 匿名函数包裹回调函数
let intervalID = setTimeout(function() { myFunc('one', 'two', 'three'); }, 1000);

// 使用箭头函数
let intervalID = setTimeout(() => { myFunc('one', 'two', 'three'); }, 1000);

//  function's bind：
setTimeout(function(arg1){}.bind(undefined, 10), 1000);
```

## SetTimeout的实际延时比设定值更久
SetTimeout的实际延时比设定值更久的原因：最小延迟时间。在浏览器中，setTimeout()/setInterval() 的每调用一次定时器的最小间隔是4ms，这通常是由于函数嵌套导致或者是由于已经执行的setInterval的回调函数阻塞导致的