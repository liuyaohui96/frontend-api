参考：https://htmlreference.io/element/meta/

参考：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta


## meta
`<meta>` 元素表示那些不能由其它HTML元相关元素表示的元数据信息

按其标签属性分类为：
1. charset
2. name & content
3. http-quiv & content
4. viewport

## charset
```html
<!-- === 用charset指定字符集 -->
<meta charset="utf-8">
```

## name & content
```html
<!-- === 使用name指定要设置的属性，使用content指定要设定的属性值 -->
<!-- author指示作者 -->
<meta name="author" content="liuyaohui">
<!-- description -->
<meta name="description" content="how to describe the document">
<!-- keyword -->
<meta name="keyword" content="keyword1, keyword2, ..." />

<!-- robots 指定搜索引擎如何收录页面 -->
<!-- noindex 指示不对页面进行收录 -->
<meta name="robots" content="noindex">
<!-- nofollow 指示收录页面，但不收录页面上链接的其他页面 -->
<meta name="robots" content="nofollow">

<!-- viewport -->
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

<!-- 主要针对双内核浏览器，使用webkit内核 -->
<meta name="renderer" content="webkit">
```

## http-equiv
```html
<!-- === http-quuiv + content -->

<!-- prama 指示不进行缓存 -->
<meta http-equiv="pragma" content="no-cache">
<!-- expires缓存 -->
<meta http-equiv="expires" content="Fri, 04 Apr 2014 23:59:59 GMT">

<!-- 如果content 只包含一个正整数,则是重新载入页面的时间间隔(秒) -->
<!-- 如果content 包含一个正整数并且跟着一个字符串,则是重定向到指定链接的时间间隔(秒) -->
<meta http-equiv="refresh" content="">

<!-- IE浏览器以edge版本进行渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

