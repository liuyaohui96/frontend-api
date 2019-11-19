## Window对象方法-调整窗口大小
```js
// === 调整大小
/* 
 一般默认情况下，不允许对浏览器主窗口进行位置移动，位置移动，窗口关闭等操作
 允许对window.open新打开的窗口进行上述操作，window.open可以返回一个指代创建的窗口对象
 */
// 调整到指定的x y 像素大小
window.resizeTo(x, y)

// 接受新窗口与旧窗口x y 的差
window.resizeBy(x, y)
```