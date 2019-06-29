文档参考：https://htmlreference.io/element/meta/

## 常用用途
1. charset 定义字符集
  ```js
  <meta charset="utf-8" />
  ```
2. name 定义相关
  ```js
  <meta name="keyword" content="keyword1, keyword2" />
  <meta name="description" content="how to describe the document" />
  ```
3. http-equiv 定义页面元信息规则。暂时不需要，详细看文档


## meta viewport
参考：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
```html
<meta name="viewport" content="...">
<!-- 
the content value may be
1. width or device-width
2. height or device-height
3. initial-scale: A positive number between 0.0 and 10.0
4. maximum-scale: A positive number between 0.0 and 10.0
5. minimum-scale: A positive number between 0.0 and 10.0
6. user-scalable: yes or no
 -->

<!-- example -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

