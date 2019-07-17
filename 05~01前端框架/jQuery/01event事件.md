## 事件
鼠标事件，键盘事件，表单事件，窗口事件

1. mouse events
  * clcik
  * dblclick
  * mouseenter
  * mouseleave
  * mousedown ->  left, middle or right mouse button is pressed down 
  * mouseup -> left, middle or right mouse button is released
  * hover 

1. keyboard events
  * keypress
  * keydown
  * keyup


3. form events
  * submit
  * change
  * focus ->  form field gets focus
  * blur ->  form field loses focus

4. document/window events
  * load
  * resize
  * scroll
  * unload


5. on
  attaches one or more event handlers for the selected elements
```js
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  }, 
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  }, 
  click: function(){
    $(this).css("background-color", "yellow");
  } 
});

```