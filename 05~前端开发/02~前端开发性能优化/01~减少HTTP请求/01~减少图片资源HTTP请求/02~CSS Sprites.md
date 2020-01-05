
## CSS Sprites
原理是将多张图片合并多一张图片，通过CSS的`backgrond-position`属性，将HTML元素放在图片的合适位置上。

惊喜：合并后的图片比合并前的图片综合要小，因为降低了图片自身的开销（颜色表，格式信息等）



## CSS sprite
概念：将网页中的一些背景图片整合到一张图片中，利用CSS的 `background-image，background-repeat，background-position`的组合进行背景定位

优点
1. 减少http请求，提高页面加载速度
2. CSS Sprites能减少图片的字节大小


缺点：
1. 合并图片麻烦，合并时需预留好足够空间，测量繁琐
2. 维护麻烦，修改一个图片可能需要重新布局