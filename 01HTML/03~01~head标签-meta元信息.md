文档参考：https://htmlreference.io/element/meta/

## 用途举例

```html
<!-- 使用meta描述页面信息 -->

<!-- === 用charset指定字符集 -->
<meta charset="utf-8">

<!-- === 使用name指定要设置的属性，使用content指定要设定的属性值 -->
<!-- description -->
<meta name="description" content="how to describe the document">
<!-- keyword -->
<meta name="keyword" content="keyword1, keyword2, ..." />
<!-- robots 指定搜索引擎如何收录页面 -->
<!-- noindex 指示不对页面进行收录 -->
<meta name="robots" content="noindex">
<!-- nofollow 指示收录页面，但不收录页面上链接的其他页面 -->
<meta name="robots" content="nofollow">

<!-- === http-quuiv + content -->
<!-- author指示作者 -->
<meta http-equiv="author" content="liuyaohui">
<!-- prama 指示不进行缓存 -->
<meta http-equiv="pragma" content="no-cache">
<!-- expires缓存 -->
<meta http-equiv="expires" content="Fri, 04 Apr 2014 23:59:59 GMT">
```




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

