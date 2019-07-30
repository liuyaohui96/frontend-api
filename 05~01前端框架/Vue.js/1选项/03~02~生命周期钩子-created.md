
## created
1. 类型：Function
2. 描述：实例化创建(instance created)之后被调用。实例已经完成选项(options)配置。这意味着已经完成了以下配置：
    * 数据观测(data observation)
    * 计算属性(computed properties)
    * 方法(methods)
    * watch/event 回调函数
    但是，挂载阶段尚未开始，`$el`属性尚未可以访问