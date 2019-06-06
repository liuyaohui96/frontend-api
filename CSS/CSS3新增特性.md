## 新增伪类
1. selector:first-of-type 是其父元素首个元素
2. selector:last-of-type 其父元素最后一个元素
3. selector:only-of-type 其父元素唯一一个元素
4. selector:only-child 其父元素唯一子元素
5. selector:nth-child(n) 其父元素第n个元素
6. :enabled :disabled  表单禁用状态
7. :checked 单选或复选框被选中
8. ::after ::before
9. :not(p)  选择每个非p的元素
10. p:empty 选择每个没有任何子级的p元素（包括文本节点）


## 新属性
1. background相关
  - background-clip（规定背景图的绘制区域）
  - background-origin 规定背景图片的定位区域
  - background-size 规定背景图片的尺寸
  
2. border
  * border-radius  圆角半径
  * box-shadow


3. 渐变 
  * linear-gradient() 线性渐变
  * radial-gradient() 径向渐变
4. 文本效果
  * text-shadow 向文本添加阴影。
  * text-wrap 	规定文本的换行规则。
  * word-break 规定非中日韩文本的换行规则。
  * word-wrap 允许对长的不可分割的单词进行分割并换行到下一行。

5. 字体
  使用@font-face 规则中定义的字体
6. 转换和变形
7. 过渡
8. 动画
9. 盒子模型
  - box-sizing: content-box | border-box | inherit
  - outline:outline-color outline-style outline-width outine-offset
10. flex 布局
11. 媒体查询