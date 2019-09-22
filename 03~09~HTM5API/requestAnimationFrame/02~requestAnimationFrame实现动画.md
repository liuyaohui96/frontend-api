
## requestAnimationFrame
无论是setTimeout 还是 setInternal都不是十分精确，因为传入的第二个参数，实际上是知道那个了动画代码添加到浏览器UI线程队列中等待执行的时间，如果都列前面有其他任务，那么动画代码就会等待前面的任务执行完后才能再执行。所以HTML5提供了requestAnimationFrame的新Api

```js
/*
描述：要求浏览器在下一次重绘之前调用指定的回调函数更新动画，
注意，如果要在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrme

callback 下一次更新动画帧所调用的函数, 返回一个整数ID，是回调列表中唯一的标识,
回调函数接受一个timeStamp参数，这是一个精确的毫秒，表示requestAnimationFrame() 开始去执行回调函数的时刻
回调函数执行次数通常是每秒60次,但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配
*/
window.requestAnimationFrame(callback);

// === 使用requestAnimationFrame 重写 0 --> 400px，注意元素设置为脱离正常文档流
const divE = document.querySelector('div');
let left = 0;
let start = 0;
requestAnimationFrame(step);
function step(timeStap) {
  let progress = timeStap - start;

  divE.style.left = progress * 0.2 + 'px';
  console.log(progress, divE.style.left);

  if (progress < 2000) {
    // 运行2000 ms，假如需要移动400px， 则每ms需要移动0.2px
    requestAnimationFrame(step);
  }
}
```



## requestAnimationFrame 和 setTimeout/setInterval 有什么区别
1. requestAnimationFrame 之前，我们主要使用 setTimeout/setInterval 来编写JS动画

2. 时间间隔的设置：
  * 编写动画的关键是循环间隔的设置,大部分的电脑显示器的刷新频率是60HZ，也就是每秒钟重绘60次, 最平滑动画的最佳循环间隔是 1000ms / 60 ，约为16.7ms。setTimeout/setInterval 有一个显著的缺陷在于时间是不精确的, setTimeout/setInterval 只能保证延时或间隔不小于设定的时间。因为它们实际上只是把任务添加到了任务队列中，但是如果前面的任务还没有执行完成，它们必须要等待。
3. requestAnimationFrame 采用的是系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。

综上，requestAnimationFrame 和 setTimeout/setInterval 在编写动画时相比，优点如下:
1. requestAnimationFrame 不需要设置时间，采用系统时间间隔，能达到最佳的动画效果
2. requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成
3. 当 requestAnimationFrame() 运行在后台标签页或者隐藏的 `<iframe>` 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命（大多数浏览器中）
4. requestAnimationFrame 由浏览器自动进行优化