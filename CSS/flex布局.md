
# 容器属性
1. display: flex
2. flex-direction: row | row-reverse | column | column-reverse
3. justify-content: flex-start | flex-end | center | space-between |space-around space
  - space-around：子容器沿主轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半
  - space-between：子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切。
4. align-items: flex-start | flex-end | center | baseline | stretch
  - baseline：基线对齐，这里的 baseline 默认是指首行文字。交叉轴起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。
  - stretch：子容器沿交叉轴方向的尺寸拉伸至与父容器一致。

5. flex-wrap: wrap | nowrap | wrap-reverse

6. flex-flow: flex-direction flex-wrap

# 项目属性
1. flex: flex-grow flex-shrink flex-basis
2. flex-basis: 原来大小
3. flex-grow: 放大
4. flex-shrink: 缩小
5. order: [number]
6. align-self: 单独设置子容器如何沿交叉轴排列
  auto | flex-start | flex-end | center | baseline | stretch
