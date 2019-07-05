## position
1. static。默认值。没有定位，元素出现在正常的文档流中（忽略 top, bottom, left, right 或者 z-index 声明）
2. relative。相对于其正常位置进行定位，不脱离文档流。
3. absolute。相对于第一个祖先非static元素定位进, 脱离文档刘。
4. fixed。相对于浏览器窗口进行固定定位。
5. sticky。是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位

> 非static属性值的定位元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行具体定位。