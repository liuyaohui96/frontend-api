

## dataTransfer 对象
dataTransfer 对象用于被拖动元素想防止目标元素吃俺滴字符串格式的数据，它是事件对象的属性，所以只能在拖放事件的事件处理程序中才能访问dataTransfer对象
```js
/*
拖动文本框中的文本，浏览器会调用setData()方法，将拖动的文本以'text'格式保存在dataTransfer对象中
类似地，拖动链接或者图像，调用setData()方法保存URL

在这些元素被拖放到放置目标时，通过getData()读取到这些数据

除了默认的数据处理，我们还可以自定义存储要传输的数据
*/

/* === dataTransfer对象主要有setData和getData两个方法
dataTransfer.setData(name, str))
datatransfer.getData(str)
*/
// === 设置和接收文本数据
event.dataTransfer.setData('text', 'some text');
event.dataTransfer.getData('text');

// === 设置和接受URL
event.dataTransfer.setData('URL', 'http://www.example.com');
let url = event.dataTransfer.getData('URL')
```




