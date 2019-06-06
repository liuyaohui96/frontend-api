
1. static。默认值。没有定位，元素出现在正常的文档流中（忽略 top, bottom, left, right 或者 z-index 声明）
2. relative。相对定位的元素，相对于其正常位置进行定位，不脱离文档流。
3. absolute。生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
4. fixed。生成固定定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
5.  sticky。是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位