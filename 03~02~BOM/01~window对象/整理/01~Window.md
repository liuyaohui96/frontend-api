
## Window
window 对象表示一个包含DOM文档的窗口。

在有标签页功能的浏览器中，每个标签都拥有自己的 window 对象；也就是说，同一个窗口的标签页之间不会共享一个 window 对象，window对象的属性和方法如果不能作用于标签，那么它就会作用于窗口。如 window.resizeTo 和 window.resizeBy 之类的方法会作用于整个窗口而不是 window 对象所属的那个标签。