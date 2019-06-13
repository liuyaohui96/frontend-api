# load 与 DOMContentLoaded
load: 页面的html、css、js、图片等资源都已经加载完之后才会触发 load 事件

DOMContentLoaded: HTML下载、解析完毕之后就触发

解析DOM结构时，在head节点里
1. 如果遇到普通的外链的js，会停止DOM构建。
2. 遇到外链css，不影响后面的 DOM 构建，会阻碍渲染，即外链 css 加载完之前，页面还是白屏

在body节点里，同样如上述规则。
在 html文档加载完毕，并且 html 所引用的内联 js、以及外链 js 的同步代码都执行完毕后触发DOMContentLoaded 事件。

html 文档中的图片资源，js 代码中有异步加载的 css、js 、图片资源都加载完毕之后，load 事件触发
