BFC 规定了内部的 Block Box 如何布局, 同一个BFC内这样布局：
1. BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
2. 内部的 Box 会在垂直方向上一个接一个放置
3. Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
4. 每个元素的 margin box 的左边，与包含块 border box 的左边相接触
5. BFC 的区域不会与 float box 重叠，计算 BFC 的高度时，浮动元素也会参与计算

# 创建BFC的方式
1. 根元素html
2. postition: absolute | fixed | sticky
3. float 的值不为none
4. dispaly: inline-block | table | flow-root
5. overflow: !visible

# 应用
1. 不和浮动元素重叠(如aside 和 main)
2. 清理子元素的浮动（行普通流中的块级非替换元素的高度计算时，浮动子元素不参与计算，会发生父元素塌陷的情况）
3. 解决上下相邻两个元素重叠
5. 包含浮动元素