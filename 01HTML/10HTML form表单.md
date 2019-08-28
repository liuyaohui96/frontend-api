
## from 的属性
1. action:  定义表单提交数据的URL，可以是相对或绝对地址
2. method：定义提交表单的方法
3. name： 定义表单的名称
4. autocomplete: 定义浏览器是否自动输入
5. enctype: 定义 MIME type，只有在post method 才产生效果
  * enctype="application/x-www-form-urlencoded" 默认值
  * enctype="text/plain"
  * enctype="multipart/form-data" 推荐使用
6. novalidate: 定义浏览器再提交时，不进行验证

## 常用表单元素
1. fieldset 表单内定义一组相关控件
2. legend 定义filedset元素内的标题
3. input 定义交互控件
4. textarea 定义多行文本控件
5. button 提交按钮

## input 的常用属性
1. type
  * text
  * eamil
  * number
  * checkbox 定义选中和不选中的状态
  * radio 多个radio，只能选择其中一个
  * submit
2. name
2. placeholder
3. required
4. disabled

## textarea常用属性
1. name
2. required
3. autocomplete
4. minlength & maxlength
5. rows & cols
6. placeholder
7. wrap
  * hard 根据cols的值确定
  * soft 根据需要换行