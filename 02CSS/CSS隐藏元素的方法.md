CSS 中可以通过哪些属性定义，使得一个 DOM 元素不显示在浏览器可视范围内？　
* display 属性为 none    
  不占据空间
* visibility 属性为 hidden       
  占据空间,无法响应点击事件
* overflow: hidden     
  隐藏元素溢出部分，占据空间,无法响应点击事件
* 设置透明度为 0 opacity: 0    
  占据空间也可响应事件
* 设置 z-index 位置在 -10000    
  设置z-index值使其它元素遮盖该元素也算是一种隐藏
* 宽高为 0
* transform: scale(0,0)
* margin-left: -100%
* position: relative; left: -100%


## display-none与visibility:hidden的区别
联系：它们都能让元素不可见

区别：
1. display:none 属性的元素不占据空间；visibility: hidden属性占据空间，只是内容不可见。
2. 继承性：display: none 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden 是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible 可以让子孙节点显示
3. display通常会造成文档重排(回流)。修改visibility属性只会造成本元素的重绘