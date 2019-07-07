## box-sizing
box-sizing: content-box | border-box

> content-box w3c标准 仅计算内容宽度
> border-box IE 标准 宽度包括content，padding，border

## W3C盒子模型和IE盒子模型
标准(W3C)盒子模型：边界margin + +边框border+填充padding + 内容content, width 和width默认指定是content的宽高

低版本IE的盒子模型：边界margin + (border + padding + content), width 和width默认指定是content+padding+border 部分的宽高

css 是这样设置这两种模型
```css
box-sizing : content-box  
box-sizing : border-box
```

## js 是如何获取盒子模型的宽度和高度
```js
dom.style.width/height //获取的是内联样式
dom.currentStyle.width/height;//只有IE支持
window.getComputedStyle(dom).width/height;//兼容性好
```
