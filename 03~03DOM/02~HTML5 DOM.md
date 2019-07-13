## HTML5 DOM
```js
// ===== 焦点管理
element.focus(); // 设置元素聚焦
element.hasFocus() // boolean

document.charset
document.defaultCharset

// 自定义属性 data-* 的获取
// 自定义属性是 data-customName，那映射中对应的属性就是 myname
element.dataset.customName

// 控制页面滚动
/*
传入 true 作为参数，或者不传入任何参数，窗口滚动之后会让调用元素的顶部与视口顶部尽可能平齐
传入 false 作为参数，调用元素会尽可能全部出现在视口中，（可能的话，调用元素的底部会与视口顶部平齐。）
*/
element.scrollIntoView()


// 检测的节点是否是后代节点，
element.contains(element)
```
