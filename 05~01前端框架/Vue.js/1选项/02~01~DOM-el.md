
## el
1. 类型： `string | Element`
    * 可以是Css selector 字符串
    * 可以是Html element
2. 限制：只能在使用new创建Vue实例的时候使用
3. 描述：为Vue实例指定一个DOM 元素进行挂载

实例挂载到DOM后，元素可以用`vm.$el`访问

> Vue 生成的DOM会替换指定的挂载元素，因此不推荐root实例挂在到`<html> 或者 <body>`上

> 如果没有 render 函数 或者 template 选项，指定的挂载元素的HTML会被提取出来作为template