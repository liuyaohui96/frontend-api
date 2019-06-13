```html
<canvas id="myCanvas" width="400" height="200">
你的浏览器不支持canvas!
</canvas>
```

# 常用方法
1. getContext(contextType)
  - "2d" 用于生成2D图案
  - "webg1" 用于生成3D图像（即立体图案）

2. beginPath() 方法表示开始绘制路径

3. 绘制矩形 
  - fillRect(x, y, width, height)方法用来绘制矩形
  - strokeRect方法与fillRect类似，用来绘制空心矩形
  - clearRect方法用来清除某个矩形区域的内容

4. 绘制文本
  - fillText(string, x, y)，使用之前，需用font设置字体、大小、样式
    - `ctx.font = "..."`
    - `ctx.textAlign = "..."`
  - strokeText 用来添加空心字
5. 绘制圆形和扇形
  - ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)


6. drawImage 画图
