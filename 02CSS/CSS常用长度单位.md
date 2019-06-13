1. px
2. rem 相对于根元素html字体大小
3. em 相对于父元素大小
4. vw 视窗宽度 vh视窗高度
5. % 大部分相对于祖先元素，有的相对于自身（如border-radius, translate等）

## px 和 em 的区别
px和em都是长度单位，区别：
1. px的值是固定的，指定是多少就是多少，计算比较容易
2. em得值不是固定的，并且em会继承父级元素的字体大小

## em 和 rem 单位的区别
* em 单位继承自它的父元素 font-size 的值
* rem 单位继承自根元素（html） font-size 的值
