# img
定义页面的图片
```html
<img src="/images/sunset.jpg" alt="Picture of sunset">
```
1. src 定义图片地址
2. alt 定义如果图片不显示，所要显示的替换文字
3. width & height

## 图片绝对路径和相对路径
1. `images/1.png`: 相对路径，相对当前目录
2. `1.png`: 相对路径，当前文件
3. `/images/1.png`: 相对路径，相对根目录
4. `https://www.expample.com/1.png`: 绝对路径


# <img>的title和alt有什么区别
1. title，通常当鼠标滑动到元素上的时候显示的文字信息
2. alt 定义如果图片不显示，所要显示的替换文字。除了纯装饰图片外都必须设置有意义的值，它对于搜索引擎优化（SEO）非常重要，可以通过 alt 属性理解图像的信息。