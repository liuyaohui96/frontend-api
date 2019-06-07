浮动元素会脱离文档流，与其他元素发生重叠，**但不与文字内容产生重叠，不与图片内容重叠，不与表达元素重叠**（由此产生文字环绕的效果）

# 浮动横向布局
由于浮动元素脱离文档流，所以不能撑开父元素高度，所以为了容纳浮动元素，可以给浮动元素的子元素设置足够的高度。 还可以使用清楚浮动

# 浮动元素的排列
参考前一个元素位置进行排列


设置元素浮动后，该元素的 display 自动变成display:block


## 去除浮动影响-防止父级高度塌陷
1. 创建父级BFC
  - 参考[BFC](../2BFC.md)

2. 最后一个子元素应用.clear
  ```css
  .clear{
    clear: both
  }
  ```

3. 创建父容器类clearfix
  ```css
  .clearfix:after{
    content: '';
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }
  ```

4. 父级设置高度

