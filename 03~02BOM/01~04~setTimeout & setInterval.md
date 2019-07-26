
## setTimeout & setInterval
```js
// === setTimeout() 超时调用
setTimeout(function(){
    //...
}, milliseconds)

// 由于任务队列可能需要等待，将会在至少milliseconds调用函数

// setTimeout 返回一个number ID，是一个唯一标识符，通过它可以取消超时调用setTimeout
let timerId = setTimeout(...);
clearTimeout(tiemrId) // 在调用前取消才有意义


// === setInterval() 间歇调用
setInterval(function(){
    //...
}, millisecond)
// 间隙调用一定要记住清除
let timerId = setInterval(...);
clearInterval(timerId)
```

## 使用setTimeout 模拟 setInterval
```js
funciton mySetInterval(count, milliseconds){
    for(let i = 0 ; i< count; i++){
        setTimeout(function(){
            // ...
        }, milliseconds)
    }
}
```