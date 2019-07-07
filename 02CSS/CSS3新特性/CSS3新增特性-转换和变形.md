## transform
```js
// defualt
transform: none;
```
1. translate
2. scale（放大）
3. rotate

## translate
```js
// ========== translateX, translateY, translate
// move the element on the horizontal axis
transform: translateX(40px); 
// move the element on the vertical axis
transform: translateY(20px);
// the percentage is relative to the element itself, and not the parent.
transform: translateY(100%);
transform: translate(40px, 20px);
```
## scale
```js
// ======== scaleX scaleY scale
// scale element on the horizontal axis
transform: scaleX(1.5);
// scale element on the vertial axis
transform: scaleY(0.4);
// use negative values: it will invert the element.（负值会反转元素）
transform: scaleY(-2);
transform: scale(0.8, 0.8);
```

## rotate
You can use:
* degrees from 0 to 360deg
* gradians from 0 to 400grad
* radians from 0 to 2πrad
* turns from 0 to 1turn

```js
transform: skewX(15deg);
transform: skewY(45deg);
transform: rotate(45deg);
```

## skew
略 
skew(x, y) skewX() skewY()  倾斜转换


## 如何使用matrix旋转30度
