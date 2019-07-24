## 减少HTTP请求
因为80-90%的用户响应时间花在了HTML文档中的引用资源的HTTP请求中，所以减小响应时间的最简单方法就是，减少引用资源，从而减小HTTP请求

1. 图片
  * 图片地图
  * css sprites

2. 合并脚本和样式文件


## 图片地图
图片地图是多个图片链接使用一张图片，在一个图片关联不同的URL
```html
<!-- ==== 服务器端图片地图 -->
通过用户点击的x，y坐标执行相应的操作

<!-- ====== 客户端用户地图 -->
<img usermap="map1">
<map name='map1'>
  <area shape="rect" coords="0, 0, 0, 0" href="..." title="Home">
  <!-- .....  -->
</map>

<!-- 图片地图上的坐标如果手工方式定义，很容易出错 -->
```

## CSS Sprites
原理是将多张图片合并多一张图片，通过CSS的`backgrond-position`属性，将HTML元素放在图片的合适位置上。

惊喜：合并后的图片比合并前的图片综合要小，因为降低了图片自身的开销（颜色表，格式信息等）

## 内联图片
使用`data:URL`模式可以在页面中包含图片但无序额外的http请求

```html
<!-- 
格式： data:<mediatype>;base64, <data> 
 -->
<img src="data:image/gif;base64, afafalfjaljfaj...">
```
由于data:url内联在页面上，所以跨越不同页面的时候不会被使用，最好的做法是使用css将内联图片作为背景

```css
/* 将内联图片放在样式表中会增加一个额外的Http请求，但是可以被缓存 */
.home{
  background-image: url('data:image/gif;base64, afafalfjaljfaj...')
}
```

## 合并脚本和样式文件
理想的情况下，具有一个脚本文件和一个样式文件。但是对于模块化来说，这是一种倒退，而且，不同的页面需要不同的模块文件组成，可以保持模块化，根据模块组合生成一组目标文件。