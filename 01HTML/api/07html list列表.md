# 列表
用来表示线性数据结构，如一组数据内容，导航栏，下拉列表等

li除了放纯文本，还可以嵌套`ul或ol`标签，表示树形的数据结构

## 默认样式
1. ul和ol元素设置了1em的上下外边距（1em，即与字体大小相同）
2. ul和ol元素设置40px的左内边距和右边距


## 无序列表
```html
<ul>
  <li>item</li>
  <li>item</li>
</ul>
```

## 有序列表
```html
<ol>
  <li>item</li>
  <li>item</li>
</ol>
```
1. type
  * "1": default 1
  * "a"：小写拉丁
  * "A"：大写拉丁
  * "i": 小写罗马数字
  * "I"：大写罗马数字

2. strat：number类型

## 定义列表
```html
<dl>
  <dt>Web</dt>
  <dd>The part of the Internet that contains websites and web pages</dd>
  <dt>HTML</dt>
  <dd>A markup language for creating web pages</dd>
  <dt>CSS</dt>
  <dd>A technology to make HTML look better</dd>
</dl>
```
1. dl 定义一个定义列表
2. dt 定义一各定义列表的term（概念）
3. dd 定义一个term的description（描述）