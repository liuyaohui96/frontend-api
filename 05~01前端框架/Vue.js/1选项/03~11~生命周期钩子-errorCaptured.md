
## errorCaptured
1. 类型：`(err: Error, vm: Component, info: string) => ?boolean`
2. 描述：捕获来自子孙组件的错误时被调用，钩子接受三个参数
    * error
    * component instance
    * a string nformation about error
    可以通过返回false防止错误往上继续传播

注意，可以在errorCaptured内修改组件状态。但是在template和render function内设置短路条件以避免进入无线的render 循环


## 错误传播规则(error propagation rules)
1. 默认情况下，所有的error发送到全局的`config.errorHandler`
2. 如果多个errorCaptured生命周期钩子存在组件的继承链或父级链(parent chain), 所有的errorCaptured都发出同样的error
3. 如果errorCaptured本身发生错误，这个error和原来捕获的error都会发送到全局的`config.errorHandler`
4. errorCaptured 可以返回false防止错误继续向上传播，这意味着“错误被处理，或错误被忽略“，