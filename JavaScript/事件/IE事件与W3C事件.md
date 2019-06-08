## IE事件与W3C事件
1. IE使用attachEvent/detachEvent方法来添加和删除事件监听器;w3c使用addEventListener/removeEventListener方法
2. IE事件监听器内使用的是一个全局的Event对象，而w3c是将event对象作为参数传递给监听器
3. IE没有提供对事件捕获阶段的支持，IE是事件冒泡的事件流

要想阻止冒泡，在Microsoft模型中，需要将事件的cancelBubble属性设置为true。在W3C模型中，需要调用事件的stopPropagation()方法
```js
// 解决浏览器兼容问题
function doSomething(e){
    e = window.event || e;
    e.cancelBubble = true;
    if(e.stopPropagation){
        e.stopPropagation();
    }
}
```