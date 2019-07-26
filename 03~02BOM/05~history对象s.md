
## history对象
history对象保存网页浏览记录。history对象是window对象的属性，所以每个窗口，标签，框架都有自己特定的history对象与window对象关联
```js
history.go(-1) // 后退一页
history.go(1) // 前进一页
history.go(2) // 前进两页

history.go(url) // 调转到包含该字符串的第一个位置

history.forward() // 相当于 history.go(1)
history.back() // 相当于 history.go(-1)
```