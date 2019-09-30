
## screen对象
不常用，表示浏览器外部的显示器信息，以使用 window.screen 获取它

```js
// 返回浏览器窗口在屏幕上可占用的垂直空间，即最大高度
iAvail = window.screen.availHeight

// 返回浏览器窗口可占用的水平宽度,即最大宽度
window.screen.availWidth

/*
返回屏幕的宽度
window.screen.width 和 window.screen.availWidth 两者不同
该属性返回的宽度值不一定就是浏览器窗口可使用的宽度。当有其他小工具占据了屏幕空间时，浏览器有时不能占用小工具（如任务栏）占据的空间
*/
lWidth = window.screen.width

// 返回屏幕的高度（单位：像素）
// 注意，该属性返回的高度值并不是全部对浏览器窗口可用。小工具（Widgets），
// 如任务栏或其他特殊的程序窗口，可能会减少浏览器窗口和其他应用程序能够利用的空间
iHeight = window.screen.height
```