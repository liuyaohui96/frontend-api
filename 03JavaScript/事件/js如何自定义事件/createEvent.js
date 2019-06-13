/*
createEvent('CustomEvent')，返回的对象有 initCustomEvent 方法，接受以下四个参数:

type: 字符串，表示触发的事件类型，如此处的'alert'
bubbles: 布尔值： 表示事件是否冒泡
cancelable: 布尔值，表示事件是否可以取消
detail: 任意值，保存在 event 对象的 detail 属性中
*/

let btn = document.querySelector('#btn')
let ev = btn.createEvent('CustomEvent')
ev.initCustomEvent('alert', true, true, 'button')
btn.addEventListener(
  'alert',
  function(event) {
    console.log(event.bubbles) //true
    console.log(event.cancelable) //true
    console.log(event.detail) //button
  },
  false
)
btn.dispatchEvent(ev)
