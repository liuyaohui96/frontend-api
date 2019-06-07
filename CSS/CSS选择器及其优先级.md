important > inline style > #id > .class > tag > * > （inherit > initial）

## 元素选择器
1. * 选择所有元素
2. E 选择指定元素
3. #id 
4. .class

## 关系选择器
1. A B  包含选择器
2. A > B 子包含选择器
3. A + B 相邻选择器
4. A ~ B 兄弟选择器

## 属性选择器
1. E[attr] attr属性的元素
2. E[attr="val"] attr属性且属性值等于val的E元素
3. E[attr~="val"] attr属性且属性值其中一个等于val的E元素(选择属性值为空白符分隔)
4. E[attr^="val"] attr属性值为以val开头的字符串的E元素
5. E[attr$="val"] attr属性且属性值为以val结尾的字符串的E元素
6. E[attr*="val"] attr属性且包含val字符串的E元素

## 伪类选择器
1. :link
2. :visited
3. :focus
4. :hover
5. :active
6. :first-child 其父节点的第一个子元素
7. :last-child 其父节点的最后一个子元素
8. :only-child 其父元素的唯一子元素
9. :only-of-type 该元素没有相同类型的兄弟节点时选中它
10. :first-of-type 该元素是此类型元素的第一个兄弟
