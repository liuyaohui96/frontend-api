

## iframe标签
iframe标签用于在一个页面内嵌入其他页面
```html
<!-- 常用属性：
src
width
height
allowfullscreen 允许通过javascript实现全屏显示iframe
seamless 应用程序不希望出现滚动条
 -->
<iframe src="https://www.example.com">
  Fallback text for non-supported browsers
</iframe>
```

## 缺点
1. 阻塞主页面的onload事件
2. 搜索引擎无法解读这种页面，不利于SEO
3. iframe 和页面共享连接池，而浏览器对相同区域有限制，所以会影响性能