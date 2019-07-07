## backround-clip
参考文档: https://cssreference.io/property/background-clip/

Defines how far the background should extend within the element.(定义背景扩展到元素内部的哪一部分，包括背景颜色和背景图片)

```js
// default includes border
background-clip: border-box;  

// inlcudes padding, but not border
background-clip: padding-box;

// includes content, but ont padding, nor the border
background-clip: content-box;
```

## background-origin
Defines the origin of the background image.（定义背景图片的背景位置），属性值及其含义与backgruond-clip一致