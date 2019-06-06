概念：将多个小图片拼接到一个图片中。

原理：
利用CSS的 background-image，background- repeat，background-position 的组合进行背景定位

优点：
1. 减少http请求，提高页面加载速度
2. CSS Sprites能减少图片的字节。
3. 解决了网页设计师在图片命名上的困扰

缺点：
1. 合并图片麻烦，合并时需预留好足够空间，测量繁琐
2. 维护麻烦，修改一个图片可能需要重新布局