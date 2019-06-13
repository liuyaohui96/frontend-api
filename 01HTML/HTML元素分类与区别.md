 html的元素有哪些？根据行内元素、块级元素、空元素进行区分并在后面简要标注下作用

## 块级元素
1. div + html5 新增结构标签
2. 标题（h1-h6) + hr
3. 段落 p
4. 列表 ul li ol dl dt dd
5. form
6. table thead tbody tr td

## 行内元素
1. span
2. a
3. image
4. br
5. 行内文本元素：
  mark
  del s
  ins u
  strong em 
  i sub sup
  attr[title]
  blockquote
5. 代码相关：
  code
  pre
  var
6. image
7. 表单内的：label input button textarea seletct

## 空元素
空元素：一个不可能存在子节点的element
  - 空元素举例：`<br> <hr> <img> <input> <link> <meta>`

## 可替换元素 
  - `<img>、 <object>、 <video> 和 `
  - 表单元素`如<textarea>、 <input>`


## 块级元素与行内元素区别
1. 块级元素( block )特性
  * 独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示
  * 可以设置宽度(width)、高度(height)、内边距(padding)和外边距(margin)

2. 内联元素(inline)特性
  * 和相邻的内联元素在同一行
  * 宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变。
  * padding和margin的left和right是可以设置的

还有一些默认的inline-block元素（拥有内在尺寸，可设置高宽，但不会自动换行），如`<input> 、<img> 、<button> 、<textarea>`