
* 动态显示时间（年月日 星期 时分秒

* 设置电子时钟(p77)
    * 设置图片（根据不同的时间数字，改变背景图片）

* 作业(p80)
    * 截取URL
    * 根据URL中的time计算倒计时

* loadimage的实现
```js
// promise 改造图片加载
new img
img.src
img.onload={

}
```

* 事件部分
    * li菜单案例，点击li改变点击li的color，如变为红色；利用事件委托
        * e.target.constructor === HTMLUlistElement
    * p107： 广东--广州-天河 白云   江苏...   点击显示隐藏相关列表
        * this.bool = !this.bool if(this.bool) this.firstElementChild.style.display = 'none'
        * 阻止冒泡
    * 使用jQuery改写上面的例子
## 概念部分
*  贪婪匹配和非贪婪匹配
* 函数防抖和节流
* 宏任务，微任务，事件队列，事件循环