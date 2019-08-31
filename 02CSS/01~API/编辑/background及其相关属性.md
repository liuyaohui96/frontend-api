1. background-color 背景颜色
  > 前景色的作用范围，也就是前景色会影响元素的内容和边框。当然，有一个前提条件，就是在使用 border 设定边框的样式和宽度，而没有设定边框颜色（或者没有使用 border-color 单独设定边框颜色）的情况下，边框会使用 color 属性设定的字体颜色。默认颜色是黑色。

2. background-image & background-repeat  & background-size 背景图片相关
  * background-image:url(...) 
  * background-repeat: repeat(默认值) | repeat-x |repeat-y | no-repeat
  * background-size：
      * 50%：缩放图片，使其填充背景区的一半
      * 100px 50px：把图片调整到 100 像素宽，50 像素高
      * cover：拉大图片，使其完全填满背景区；保持宽高比
      * contain：缩放图片，使其恰好适合背景区；保持宽高比

  > background-image 属性把图片放到元素的背景层上;background-repeat 属性改变默认的水平和垂直重复效果，background-size, 控制背景图片的尺寸

3. background-position 控制背景位置
  * background-position: top、left、bottom、right和center，
这些关键字中的任意两个组合起来都可以作为该属性的值。比如，top right 表示把图片放在元素的右上角位置，center center 把图片放在元素的中心位置

  > 默认以左上角为原点,元素的左上角和图片的左上角是对齐的，随后图片向各个方向重复。center center 设定图片中心点与元素中心点重合，然后再向各个方向重复 

  > 使用数值，第一个值表示水平位置，第二个值表示垂直位置，如33% 33%，则图片水平 33%的位置与元素水平 33%的位置对齐。垂直方面也一样。要是只设定一个值，则将其用来设定水平位置，而垂直位置会被设为 center
  
  > background-repeat:no-repeat;background-position:50% 50%; 设置水平居中图片


4. background-attachment 控制滚动元素内的背景图片是否随元素滚动而移动
  * 是 scroll，即背景图片随元素移动
  * fixed，那么背景图片不会随元素滚动而移动。fixed 最常用于给 body 元素中心位置添加淡色水印，让水印不随页面滚动而移动

5. background-clip。控制背景绘制区域的范围。默认情况下，背景绘制区域是扩展到边框外边界的。可以让背景颜色和背景图片只出现在内容区，而不出现在内边距区域。

6. background-origin。控制背景定位区域的原点，可以设定为元素盒子左上角以外
的位置。比如，可以设定以内容区左上角作为原点

  > background-clip 和 background-origin 都有三个属性 border-box, padding-box, and content-box。background-origin 决定了背景在哪里定位，background-clip决定了在哪里显示

注意：背景图片加在背景颜色之上

## 线性背景渐变
渐变分两种，一种线性渐变，一种放射性渐变。线性渐变从元素的一端延伸到另一
端，放射性渐变则从元素内一点向四周发散。

线性渐变默认为从上到下
```css
/*例 1：默认为从上到下*/ 
background:linear-gradient(#e86a43, #fff); 

/*例 2：从左到右*/
background:linear-gradient(left, #64d1dd, #fff);

/*例 3：左上到右下*/ 
background:linear-gradient(-45deg, #e86a43, #fff); 

```

线性背景渐变点
```css
/* 例 1：50%处有一个渐变点 */ 
background:linear-gradient(#64d1dd, #fff 50%, #64d1dd);

/* 例 2：20%和 80%处有两个渐变点 */ 
background:linear-gradient(#e86a43 20%, #fff 50%, #e86a43 80%); 

/* 例 3：25%、50%、75%处有三个渐变点 */ 
background:linear-gradient(#64d1dd, #fff 25%, #64d1dd 50%, #fff 75%,
#64d1dd); 

/* 例 4：为同一个渐变点设定两种颜色可以得到突变效果 */ 
background:linear-gradient(#e86a43, #fff 25%, #64d1dd 25%, #64d1dd 75%,
#fff 75%, #e86a43); 
```

放射性渐变
```css
/* 这里虽然只声明了-webkit-前缀，但带有其他厂商前缀的属性也是必要的。 */
三个三色放射性渐变。第一个是默认的填满图形渐变，第二个是圆形渐变，第三个是
指定位置的圆形渐变
.gradient1 {
 background: -webkit-radial-gradient(#fff, #64d1dd, #70aa25);
}
.gradient2 {
 background: -webkit-radial-gradient(circle, #fff, #64d1dd, #e86a43);
}
.gradient3 {
 background: -webkit-radial-gradient(50px 30px, circle, #fff, #64d1dd,
#4947ba);
} 
```