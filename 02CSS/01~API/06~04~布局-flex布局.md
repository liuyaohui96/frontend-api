
## flex布局的容器属性
```css
/* 使用display：flex 启用flex布局*/
display: flex; 

/* === justify-content 定义flexbox item在main axis方向的对齐方式 */
/* 
flex-start 在容器main axis 方向的始端布局
flex-end 在容器main axis 方向的末端布局
center 在容器main axis 方向的中间布局
space-between 在容器main axis 方向上均匀分布，首尾两端的子容器与父容器相切
spcae-around 在容器main axis 方向上均匀分布，首尾两端的子容器到父容器的距离是子容器间距的一半
 */
justify-content: flex-start | flex-end | center | space-between |space-around;

/* === align-items 定义flexbox item在cross axis方向上的对齐方式 */
/* 
flex-start 在容器cross axis 方向的始端布局
flex-end 在容器cross axis 方向的末端布局
center 在容器cross axis 方向的中间布局
baseline：基线对齐，cross axis 起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。
stretch: 子容器沿交叉轴方向的尺寸拉伸至与父容器一致
*/
align-items: flex-start | flex-end | center | baseline | stretch;

/* === flex-direction 定义flexbox item 在容器内的排列方向 */
flex-direction: row | column | row-reverse | column-reverse;

/* === flex-wrap 定义在flexbox容器内的flexbox item在一行上布局，还是多行 */
flex-wrap: nowrap | wrap | wrap-reverse;

/* === flex-flow 是 <flex-direction> 和 <flex-wrap>的属性缩写 */
flex-flow: <flex-direction> <flex-wrap>
```

## flex布局的项目属性
```css
/* === felx-basis 定义flexbox 项目的初始大小  */
/* 默认根据元素的内容，或者定义的width和height自动确定项目大小 */
flex-basis: auto;
flex-basis: <length> | em

/* === flex-grow  定义如果有足够的空间可以获得，元素项目的grow值*/
flex-grow: 0; /* default 即使元素还有空间可以获得，not grow */
flex-grow: <number>

/* === flex-shrink 定义如果没有足够的空间，元素的shrink值 */
flex-shrink: 1; /* default 如果元素没有足够的空间，默认以1的值进行项目缩小*/

/* === order 定义flexbox 项目的次序 */
order: 0; /* default */
order: <number>

/* === align-self 像align-items一样的工作机制，不过它是作用在单个felxbox 项目上 */
align-self: flex-start | flex-end | center | baseline | stretch;
```

