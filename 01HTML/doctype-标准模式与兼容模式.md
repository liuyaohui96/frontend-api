标准模式以浏览器支持的最高标准运作

兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作

## doctype
<!DOCTYPE> 是文档类型声明,诉浏览器用什么规则解析 HTML 元素

 HTML 4.01 中，文档类型声明需要引用 DTD（Document Type Definition，文档类型定义），这是因为 HTML 4.01 基于 SGML（Standard Generalized Markup Language，通用标记语言）。HTML5 不基于 SGML，所以不需要引入 DTD，只需要 `<!DOCTYPE html>` 便对文档类型进行了声明

> 文档模式主要分为混杂模式和标准模式两种,通过DOCTYPE来触发浏览器的标准模式。要是没有DOCTYPE的声明，那么浏览器就会进入怪异模式。

## 为什么HTML5里面我们不需要DTD（Document Type Definition文档类型定义）
HTML5没有使用SGML或者XHTML，它是一个全新的东西，因此你不需要参考DTD