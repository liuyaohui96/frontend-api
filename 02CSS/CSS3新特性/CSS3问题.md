## 当使用 transform :translate 属性时会出现闪烁现象，如何解决？
```css
/* 隐藏转换的元素的背面   */
-webkit-backface-visibility:hidden; 

/* 使被转换的元素的子元素保留其 3D 转换   */
-webkit-transform-style: preserve-3d; 

/* 
开启GPU硬件加速模式，使用GPU代替CPU渲染动画（在安卓系统中有时会有莫名其妙的BUG，建议慎重）。如果你没有特别规定动画结束后的状态的话，动画在结束后都会直接跳回到动画未执行时候的原始状态，可参考animation-fill-mode属性 */
-webkit-transform:translate3d(0,0,0);
```

## 用两种方式实现某 DIV 元素以每秒 50px 的速度左移1OOpx
```js
$('div').animate({'left': 100}, 2000);
```
```
div{
  transition: all 2s linear;
}
div.style.left = div.offsetLeft + 100 + 'px';
```

## animation 和 transition 异同
功能相同，都是通过改变元素的属性值实现动画的效果。

区别：
1. transition 只能指定动画的开始值和结束值，在两个值之间实现动画的转换，不能实现较复杂的动画效果。
2. animation 可以设置多个关键帧以及定义各个关键帧的属性值来实现更加复杂的动画。