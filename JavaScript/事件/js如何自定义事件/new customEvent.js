var btn = document.querySelector('#btn')
/*
 * 第一个参数是事件类型
 * 第二个参数是一个对象
 */
var ev = new CustomEvent('alert', {
  bubbles: 'true',
  cancelable: 'true',
  detail: 'button'
})
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
